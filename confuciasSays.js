const fs = require('fs');

fs.readFile('confuciasSays.txt', function(err, data){
  if(err){
    console.log('err: ', err);
  } else {
    console.log("Quotes from Confucias and Thirukkural: \n\n"+ data.toString())
  }
})
