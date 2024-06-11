import path from "path";

let filepath = "C://Users/Documents/file.txt";
console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.extname(filepath));
console.log(path.parse(filepath));
// console.log(path.join("dir1", "dir2", "filename.txt"));   to construct paths which are different in windows , linux and macos
