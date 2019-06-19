var jwt_decode = require('jwt-decode');

var token = prompt("Enter token now");

var decoded = jwt_decode(token);
console.log(decoded);
