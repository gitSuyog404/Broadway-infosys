import path from "path";
import url from "url";

// let filepath = "C://Users/Documents/file.txt";
// console.log(path.basename(filepath));
// console.log(path.dirname(filepath));
// console.log(path.extname(filepath));
// console.log(path.parse(filepath));
// console.log(path.join("dir1", "dir2", "filename.txt"));   to construct paths which are different in windows , linux and macos

// console.log(__dirname);
// console.log(__filename);
// These are only available in commonjs

// for ES modules

console.log(import.meta);
let __filename = url.fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);
