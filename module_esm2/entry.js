import {fread} from "./fread.js";;

const fileContents = fread('./t.txt');
console.log(fileContents);