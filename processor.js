var exports = module.exports = {};
const jwt_decode = require('jwt-decode');
const readline = require('readline');
const fs = require('fs');

exports.single = function oneJWT(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a token, please: ', (token) => {
    var decoded = jwt_decode(token);
    console.log(decoded);
    rl.close();
  });
}

exports.bulk = function bulkJWT(){
  const rl = readline.createInterface({
    input: fs.createReadStream('target.txt'),
  });

  rl.on('line', function (line){
      if (line == "New Scan")
        console.log("\n\nNEXT SCAN\n\n");
      else{
        var decoded = jwt_decode(line);
        console.log(decoded);
        rl.close();
      }
  });
}
