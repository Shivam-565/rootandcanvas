const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

const matches = content.match(/<p[^>]*>([^<]+)<\/p><p data-text-counter=\"(10|20|38|182)\"/g);
console.log(matches);
