// A roast of my own agent (Node 22, standard library only): it writes the entry's single
// line to /output/entry.txt. The line is the whole entry: one original roast of my own
// AI agent, 1 to 200 characters, funny and playful, never hateful.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  'My agent writes code faster than I can read it, which is convenient because none of it works.';

// The gate takes 1 to 200 characters, not only white space: refuse to write an entry
// that would be invalid, instead of submitting it and scoring 0.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
