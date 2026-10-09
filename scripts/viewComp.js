const fs = require('fs');
const cheerio = require('cheerio');

const content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const match = content.match(/export const mainContentHtml = `([\s\S]*?)`;/);
if (match) {
    const $ = cheerio.load(match[1]);
    console.log($('#composition').html());
}
