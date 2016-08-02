const fs = require('fs');

fs.readFile('input.txt', function(err, data){
  if(err){
    console.log(err);
  } else {
    console.log("Async data is:\n " + data.toString());
  }
});
//this is the synchronus form
var data = fs.readFileSync('input.txt');
console.log("Sync data is: \n " + data.toString());
console.log('this is the end');
