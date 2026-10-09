const fs = require('fs');
const cheerio = require('cheerio');

let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

const match = content.match(/export const mainContentHtml = `([\s\S]*?)`;/);
if (!match) {
    console.error("Format mismatch");
    process.exit(1);
}

let htmlContent = match[1];

const $ = cheerio.load(htmlContent, { decodeEntities: false }, false);

// Remove the huge empty scroll containers that are causing the blank screen
$('.scroll-container').remove();

// Remove footer since we have a dedicated contact page
$('footer').remove();

// Reduce height of apartment section inline since there are fewer slides
// 350vh was for 5 slides (70vh per slide). For 3 slides, 210vh.
$('#apartment').attr('style', 'height: 210vh;');

let updatedHtml = $.html();

const newContent = content.replace(/export const mainContentHtml = `[\s\S]*?`;/, `export const mainContentHtml = \`${updatedHtml}\`;`);
fs.writeFileSync('src/components/mainHtml.ts', newContent);
console.log("Cleanup complete. Removed scroll-container and footer.");
