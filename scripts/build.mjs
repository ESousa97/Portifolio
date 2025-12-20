import fs from "node:fs";
import path from "node:path";

// Static site: "build" is a sanity step that ensures expected files exist.
// This keeps a conventional CI contract (build/test/lint) without introducing bundlers.

const root = process.cwd();
const required = ["index.html", "about.html", "curriculo.html", path.join("styles", "style.css")];

const missing = required.filter((p) => !fs.existsSync(path.join(root, p)));

if (missing.length > 0) {
  console.error(
    "Build failed. Missing required files:\n" + missing.map((m) => `- ${m}`).join("\n")
  );
  process.exit(1);
}

console.log("Build ok (static site sanity check).");
