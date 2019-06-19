const processor = require('./processor');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter 1 for single jwt item or 2 for bulk process. Anything else will exit. ', (token) => {
  if(token == "1"){
    rl.pause();
    processor.single();
  }
  else if (token == "2"){
    processor.bulk();
  }
    rl.close();
});
