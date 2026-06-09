import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';

const BASE = 'https://rushikesh-prajakta.invitationmedia.in';

const assets = [
  { url: `${BASE}/assets/wedding-hero-BBfn2Y6k.jpg`, dest: 'public/images/wedding-hero.jpg' },
  { url: `${BASE}/assets/ganesh-idol-TubyYjSJ.png`, dest: 'public/images/ganesh-idol.png' },
  { url: `${BASE}/assets/bg-sangeet-new-CNNXHaSd.jpg`, dest: 'public/images/bg-sangeet.jpg' },
  { url: `${BASE}/assets/couple-sangeet-D3VSf4cb.png`, dest: 'public/images/couple-sangeet.png' },
  { url: `${BASE}/assets/bg-gavdev-groom-new-6jrcX2vp.jpg`, dest: 'public/images/bg-gavdev.jpg' },
  { url: `${BASE}/assets/couple-gavdev-DxDeDDBt.png`, dest: 'public/images/couple-gavdev.png' },
  { url: `${BASE}/assets/bg-haldi-new-BPoFOaPt.jpg`, dest: 'public/images/bg-haldi.jpg' },
  { url: `${BASE}/assets/couple-haldi-CsWjfUdv.png`, dest: 'public/images/couple-haldi.png' },
  { url: `${BASE}/assets/bg-sapthapadi-new-DwAlBfyG.jpg`, dest: 'public/images/bg-sapthapadi.jpg' },
  { url: `${BASE}/assets/couple-sapthapadi-Zvu2FEVx.png`, dest: 'public/images/couple-sapthapadi.png' },
  { url: `${BASE}/assets/bg-varmala-new-CDPQmalT.jpg`, dest: 'public/images/bg-varmala.jpg' },
  { url: `${BASE}/assets/couple-varmala-DBCWuEXF.png`, dest: 'public/images/couple-varmala.png' },
  { url: `${BASE}/audio/background.mp3`, dest: 'public/audio/background.mp3' },
];

async function download(url, dest) {
  const dir = dirname(dest);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`✓ ${dest} (${(buf.length / 1024).toFixed(0)} KB)`);
}

const CONCURRENCY = 4;
async function run() {
  const queue = [...assets];
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const item = queue.shift();
      try { await download(item.url, item.dest); }
      catch (e) { console.error(`✗ ${item.dest}: ${e.message}`); }
    }
  });
  await Promise.all(workers);
  console.log('\nDone!');
}

run();
