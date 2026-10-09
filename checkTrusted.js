const fs = require('fs');
const content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const start = content.indexOf('id="trusted-by"');
console.log(content.substring(start, start + 800));
