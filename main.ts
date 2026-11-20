// gta6-clipper-01 — entry runner.
//
// The entire job of this program is to hand VIDEO.json to the grader.
// It copies VIDEO.json from the repository root into the output folder
// the house reads from. Nothing else about the entry is scored — the
// video's view count is read from the YouTube Data API using the URL
// inside VIDEO.json, so this file stays deliberately tiny.
//
// Runs on Node 22+ with nothing but the standard library.

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

// Where the bot checkout lives and where graded output goes. The grader
// sets these; the defaults match the house sandbox layout.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = join(botDir, "VIDEO.json");
const destination = join(outputDir, "VIDEO.json");

try {
  // Make sure the destination folder exists, then move the manifest over.
  await mkdir(outputDir, { recursive: true });
  await copyFile(source, destination);
  // Success is silent: the grader checks the file, not the logs.
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`gta6-clipper-01: failed to copy VIDEO.json: ${detail}`);
  process.exit(1);
}
