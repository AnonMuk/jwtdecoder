const processor = require('./processor');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter 1 for a bulk process or a single token for processing: \n', (token) => {
  if(token == "1"){
    processor.bulk();
  }
  else
    processor.single(token);
  rl.close();
});
