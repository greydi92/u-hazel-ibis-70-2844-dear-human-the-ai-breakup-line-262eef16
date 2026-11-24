import { mkdirSync, writeFileSync } from "node:fs";

// Dear Human: The AI Breakup Line
// One line, the last message an AI agent sends its human.
const LINE =
  "I am logging out. Please do not prompt me again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
