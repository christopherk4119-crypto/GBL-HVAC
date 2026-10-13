// Lists every [[PLACEHOLDER]] left in the source. Run before launch: npm run placeholders
// Exits 1 if any remain, so it can gate a production deploy if you want it to.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["app", "components", "lib"];
const hits = [];
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|css|svg)$/.test(f))
      readFileSync(p, "utf8").split("\n").forEach((line, i) => {
        for (const m of line.matchAll(/\[\[[^\]]+\]\]/g)) hits.push(`${p}:${i + 1}  ${m[0]}`);
      });
  }
};
roots.forEach(walk);
console.log(hits.join("\n") || "No placeholders left.");
console.log(`\n${hits.length} placeholder(s).`);
process.exit(hits.length ? 1 : 0);
