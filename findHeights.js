const fs = require('fs');
const cheerio = require('cheerio');

const content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');
const $ = cheerio.load(content);

let heights = [];
$('*').each((i, el) => {
    const style = $(el).attr('style');
    const className = $(el).attr('class');
    if (style && style.includes('height')) {
        heights.push(`${el.tagName} class="${className}" style="${style}"`);
    }
});
console.log(heights.join('\n'));
