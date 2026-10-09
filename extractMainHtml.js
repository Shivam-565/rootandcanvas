const fs = require('fs');
const cheerio = require('cheerio');

const body = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');
const $ = cheerio.load(body);

let restHtml = '';

// Get all elements inside .main_wrap except #hero
$('.main_wrap').children().each((i, el) => {
  if ($(el).attr('id') !== 'hero') {
    restHtml += $.html(el);
  }
});

// Also add footer and modals which are siblings of .main_wrap inside .page_wrap
$('.page_wrap').children('footer, .u-modal').each((i, el) => {
  restHtml += $.html(el);
});

restHtml = restHtml.replace(/\.\.\//g, '/');

const tsFile = `
export const mainContentHtml = \`${restHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
`;

fs.writeFileSync('./src/components/mainHtml.ts', tsFile);
console.log('Created mainHtml.ts with length', restHtml.length);
