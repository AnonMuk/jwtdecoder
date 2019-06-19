const jwt_decode = require('jwt-decode');
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: fs.createReadStream('target.txt')
});
  rl.on('line', function (line){
    var token = line;
    var decoded = jwt_decode(token);
    console.log(jwt_decode(line));
    rl.close();
});
