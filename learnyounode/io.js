var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var to_string = file.toString();
var split_lines = to_string.split("\n");
console.log(split_lines.length-1);