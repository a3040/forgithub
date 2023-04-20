const fread = require('./fread');

const fileContents = fread.read('./t.txt');
console.log(fileContents);