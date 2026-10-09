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

const cards = $('.composition_card-middle');

// Card 0: ROOTS
if (cards.length > 0) {
    const pTags = $(cards[0]).find('.u-body_caption.is-white');
    if (pTags.length >= 2) {
        $(pTags[0]).text('Culture');
        $(pTags[1]).text('Heritage');
    }
}

// Card 1: AWARE
if (cards.length > 1) {
    const pTags = $(cards[1]).find('.u-body_caption.is-white');
    if (pTags.length >= 2) {
        $(pTags[0]).text('Learning');
        $(pTags[1]).text('Awareness');
    }
}

// Card 2: CANVAS
if (cards.length > 2) {
    const pTags = $(cards[2]).find('.u-body_caption.is-white');
    if (pTags.length >= 2) {
        $(pTags[0]).text('Art');
        $(pTags[1]).text('Creativity');
    }
}

let updatedHtml = $.html();
const newContent = content.replace(/export const mainContentHtml = `[\s\S]*?`;/, `export const mainContentHtml = \`${updatedHtml}\`;`);
fs.writeFileSync('src/components/mainHtml.ts', newContent);
console.log("Updated card subtitles.");
