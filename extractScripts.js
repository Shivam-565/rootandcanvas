const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const $ = cheerio.load(content);
$('script').each((i, el) => {
    console.log('--- Script ' + i + ' ---');
    console.log($(el).html());
});
