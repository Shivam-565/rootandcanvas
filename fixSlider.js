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

const slides = $('.swiper-slide');

// Data for replacements
const verticalData = [
    {
        tag: "Focus: Culture & Food",
        flex1: "Format:",
        flex2: "Archives & Experiences",
        city: "Medium:",
        country: "Books & Resources"
    },
    {
        tag: "Focus: Conscious Living",
        flex1: "Format:",
        flex2: "Workshops & Programmes",
        city: "Medium:",
        country: "Digital Resources"
    },
    {
        tag: "Focus: Art & Photography",
        flex1: "Format:",
        flex2: "Designed Products",
        city: "Medium:",
        country: "Books & Stationery"
    }
];

slides.each((index, slide) => {
    if (index >= 3) return; // Only process first 3 slides

    // 1. Update slide counter e.g., "01 / 03"
    const counters = $(slide).find('.content_apatments-slide-number p.slider_text');
    if (counters.length >= 4) {
        $(counters[1]).text(String(index + 1));
        $(counters[3]).text('03');
    }

    // 2. Update the advantages sections
    const data = verticalData[index];
    const advantages = $(slide).find('.apartments_main_advantage');
    
    // Advantage 1 (Project executed -> Focus)
    if (advantages.length > 0) {
        const adv1 = $(advantages[0]);
        adv1.find('.apartments_main_advantage-tag p').text(data.tag);
        const flexP = adv1.find('.apartments_main_adv-flex p');
        if (flexP.length >= 3) {
            $(flexP[0]).text('');
            $(flexP[1]).text('');
            $(flexP[2]).text('');
        }
    }
    
    // Advantage 2 (Area -> Format)
    if (advantages.length > 1) {
        const adv2 = $(advantages[1]);
        adv2.find('.apartments_main_advantage-tag p').text(data.flex1);
        const flexP = adv2.find('.apartments_main_adv-flex p');
        if (flexP.length >= 2) {
            $(flexP[0]).text(data.flex2);
            $(flexP[1]).text('');
        }
    }
    
    // Advantage 3 (City & country -> Medium)
    if (advantages.length > 2) {
        const adv3 = $(advantages[2]);
        adv3.find('.apartments_main_advantage-tag p').text(data.city);
        const flexP = adv3.find('.apartments_main_adv-flex p');
        if (flexP.length >= 2) {
            $(flexP[0]).text(data.country);
            $(flexP[1]).text('');
        }
    }
});

let updatedHtml = $.html();
const newContent = content.replace(/export const mainContentHtml = `[\s\S]*?`;/, `export const mainContentHtml = \`${updatedHtml}\`;`);
fs.writeFileSync('src/components/mainHtml.ts', newContent);
console.log("Updated slider texts.");
