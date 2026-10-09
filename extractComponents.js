const fs = require('fs');

const body = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');

// manual string matching because cheerio isn't installed
const headerStart = body.indexOf('<header');
const headerEnd = body.indexOf('</header>') + 9;
const headerHTML = body.substring(headerStart, headerEnd);

const heroStart = body.indexOf('<section');
let heroEnd = body.indexOf('</section>', heroStart) + 10;
// We might have nested sections. Let's look for a class="section_hero" or similar.
const heroClassMatch = body.match(/<section[^>]*class="[^"]*hero[^"]*"[^>]*>/i);
let heroHTML = 'Not found';

if (heroClassMatch) {
  const start = heroClassMatch.index;
  heroHTML = body.substring(start, start + 5000); 
}

fs.writeFileSync('header.txt', headerHTML);
fs.writeFileSync('hero.txt', heroHTML);
console.log('Saved to header.txt and hero.txt');
