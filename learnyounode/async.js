

var fs = require('fs');
var file = process.argv[2];



fs.readFile(file, (err, data) => {
  if (err) throw err;
  var to_string = data.toString();
  var split_lines = to_string.split("\n")
  console.log(split_lines.length-1);
});