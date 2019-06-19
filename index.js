const jwt_decode = require('jwt-decode');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  rl.question('Enter a token, please: ', (token) => {
    var decoded = jwt_decode(token);
    console.log(decoded);
    rl.close();
});
