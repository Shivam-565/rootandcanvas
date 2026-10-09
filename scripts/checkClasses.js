const fs = require('fs');
const cheerio = require('cheerio');

const content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const match = content.match(/export const mainContentHtml = `([\s\S]*?)`;/);
if (match) {
    const $ = cheerio.load(match[1]);
    $('.content_composition_back > div').each((i, el) => {
        console.log('Item ' + i + ': ' + $(el).attr('class'));
    });
}
