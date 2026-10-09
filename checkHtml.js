const fs = require('fs');
const content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const startIndex = content.indexOf('id="composition"');
console.log(content.substring(startIndex, startIndex + 2000));
