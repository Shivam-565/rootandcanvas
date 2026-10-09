const fs = require('fs');
const html = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf8');
const startIndex = html.indexOf('id="composition"');
const endIndex = html.indexOf('id="apartment"');
const c = html.substring(startIndex, endIndex);

console.log("IMG tags:", c.match(/<img[^>]*>/g));
console.log("VIDEO tags:", c.match(/<video[^>]*>/g));
