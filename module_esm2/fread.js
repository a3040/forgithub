import fs from "fs";

export function fread(file) {
  return fs.readFileSync(file, 'utf8');
}
