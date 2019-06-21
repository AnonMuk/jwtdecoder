# jwtdecoder
Simple JavaScript application to decode JWT Tokens using jsonwebtoken (https://www.npmjs.com/package/jsonwebtoken) and jwt-decode (https://github.com/auth0/jwt-decode).

Currently, bulk processing only shows body and not header. I'm working on that.

## Installation:
`npm install`

In the root folder of jwtdecoder, create a textfile called **target.txt** for bulk processing.

Each line should either be a JWT object or "New Scan." Leave a blank line at the end.

## Running jwtdecoder
`node index` or `npm start`
