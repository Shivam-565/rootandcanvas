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

const list = $('.content_composition_back');
const cards = list.find('.composition_card-middle');

if (cards.length >= 3) {
    // Clone the 3rd card
    const newCard = $(cards[2]).clone();
    
    // Update its text and image
    newCard.find('.u-head_two').text('Studio');
    const pTags = newCard.find('.u-body_caption.is-white');
    if (pTags.length >= 2) {
        $(pTags[0]).text('Design');
        $(pTags[1]).text('Process');
    }
    
    // Update image just to make it distinct
    // The 4th image originally was Jazean coffee house (6a4788394562395f962728a3_Jazean.avif)
    newCard.find('.u-image').attr('src', '/cdn.prod.website-files.com/69ee72eb1c52062dd6b93785/6a4788394562395f962728a3_Jazean.avif');
    
    // Append to list
    list.append(newCard);
    
    let updatedHtml = $.html();
    const newContent = content.replace(/export const mainContentHtml = `[\s\S]*?`;/, `export const mainContentHtml = \`${updatedHtml}\`;`);
    fs.writeFileSync('src/components/mainHtml.ts', newContent);
    console.log("Added 4th card for the right side.");
} else {
    console.log("Not enough cards to clone.");
}
