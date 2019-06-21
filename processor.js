const jwtreader = require('jsonwebtoken')
const readline = require('readline');
const fs = require('fs');
var exports = module.exports;

//single jwt processor
exports.single = function oneJWT(token){
    var decoded = jwtreader.decode(token, {complete: true});
    console.log("Header:");
    console.log(decoded.header);
    console.log("\nBody:");
    console.log(decoded.payload);
}

//bulk jwt processor from 'target.txt' in main directory
exports.bulk = function bulkJWT(){
  const rl = readline.createInterface({
    input: fs.createReadStream('target.txt'),
  });

  rl.on('line', function (line){
      if (line == "New Scan")
        console.log("\n\nNEXT SCAN\n\n");
      else{
        var decoded = jwtreader.decode(line);
        console.log("Header:");
        console.log(decoded.header);
        console.log("\nBody:");
        console.log(decoded.payload);
        rl.close();
      }
  });
}
