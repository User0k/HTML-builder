const path = require('path');
const file = path.join(__dirname, 'text.txt');
const fs = require('fs');
const rs = fs.createReadStream(file, 'utf-8');

let data = '';
rs.on('data', chunk => data += chunk);
rs.on('end', () => console.log(data));
