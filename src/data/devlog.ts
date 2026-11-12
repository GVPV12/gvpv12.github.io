// Sección "Log" del home: commits de mis repos públicos de GitHub + cambios de STARMOON.
// Se genera en el build (el visitante no hace peticiones a GitHub). El workflow de deploy
// reconstruye el sitio cada día para que el Log se mantenga al día.
// En GitHub Actions usa GITHUB_TOKEN (1000 peticiones/h); en local, sin token, el límite es 60/h.
// Si GitHub falla, el Log sigue mostrando lo de STARMOON.
import starmoon from './starmoon-updates.json';

const USERS = ['GVPV12', 'greciart'];
export const LOG_LIMIT = 30;
const STARMOON_URL = 'https://starmoon.nekoweb.org';

export interface LogEntry {
  date: string;      // AAAA-MM-DD
  sortKey: string;   // ISO completo para ordenar
  text: string;
  url?: string;
  source: string;    // nombre del repo o "starmoon"
}

const headers: Record<string, string> = {
  'User-Agent': 'gvpv12-site-build',
  Accept: 'application/vnd.github+json',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function gh(path: string) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) throw new Error(`GitHub ${res.status} en ${path}`);
  return res.json();
}

async function githubCommits(): Promise<LogEntry[]> {
  const lists = await Promise.all(
    USERS.map((u) => gh(`/users/${u}/repos?type=owner&sort=pushed&per_page=100`)),
  );
  // Todos los repos públicos propios (sin forks ni el repo del perfil), del más reciente al más antiguo
  const repos = lists
    .flat()
    .filter((r: any) => !r.fork && !r.private && r.name.toLowerCase() !== r.owner.login.toLowerCase())
    .sort((a: any, b: any) => +new Date(b.pushed_at) - +new Date(a.pushed_at));

  const commits: LogEntry[] = [];
  for (const repo of repos) {
    // Si ya hay suficientes commits más nuevos que el último push de este repo, el resto no entra
    if (commits.length >= LOG_LIMIT) {
      const oldestShown = commits.map((c) => c.sortKey).sort().reverse()[LOG_LIMIT - 1];
      if (repo.pushed_at < oldestShown) break;
    }
    try {
      const list = await gh(`/repos/${repo.full_name}/commits?per_page=15`);
      for (const c of list) {
        const msg = (c.commit?.message || '').split('\n')[0].trim();
        const bot = c.author?.type === 'Bot' || /\[bot\]/i.test(c.commit?.author?.name || '');
        if (!msg || bot || /^merge\b/i.test(msg)) continue;
        const iso = c.commit.author?.date || c.commit.committer?.date;
        commits.push({ date: iso.slice(0, 10), sortKey: iso, text: msg, url: c.html_url, source: repo.name });
      }
    } catch (e) {
      console.warn(`[log] ${repo.full_name}: ${(e as Error).message}`);
    }
  }
  return commits;
}

async function starmoonPosts(): Promise<LogEntry[]> {
  try {
    const xml = await (await fetch(`${STARMOON_URL}/feed.xml`)).text();
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].flatMap((m) => {
      const get = (tag: string) =>
        (m[1].match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))?.[1] || '')
          .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
          .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'")
          .trim();
      const d = new Date(get('pubDate'));
      if (isNaN(+d)) return [];
      const date = d.toISOString().slice(0, 10);
      return [{ date, sortKey: `${date}T23:59:59Z`, text: `New post: ${get('title')}`, url: get('link'), source: 'starmoon' }];
    });
  } catch (e) {
    console.warn(`[log] feed de STARMOON: ${(e as Error).message}`);
    return [];
  }
}

// Lee starmoon-updates.json publicado en STARMOON; si no está, usa la copia de src/data.
async function starmoonUpdates(): Promise<LogEntry[]> {
  let data: any = starmoon;
  try {
    const res = await fetch(`${STARMOON_URL}/starmoon-updates.json`);
    if (res.ok) data = await res.json();
  } catch { /* sin red: copia local */ }
  return (data.updates || [])
    .filter((u: any) => u.date && u.text)
    .map((u: any) => ({
      date: u.date,
      sortKey: `${u.date}T23:59:59Z`, // dentro del mismo día, STARMOON va primero
      text: u.text,
      url: u.url ? new URL(u.url, STARMOON_URL).href : undefined,
      source: 'starmoon',
    }));
}

let cached: Promise<LogEntry[]> | undefined;

export function getDevLog(): Promise<LogEntry[]> {
  cached ??= (async () => {
    let commits: LogEntry[] = [];
    try {
      commits = await githubCommits();
    } catch (e) {
      console.warn(`[log] GitHub no respondió, el Log solo mostrará STARMOON: ${(e as Error).message}`);
    }
    return [...commits, ...(await starmoonUpdates()), ...(await starmoonPosts())]
      .sort((a, b) => b.sortKey.localeCompare(a.sortKey))
      .slice(0, LOG_LIMIT);
  })();
  return cached;
}
