const fs = require('fs');

const html = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');

// very basic extraction
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// remove script tags from body if we want, but they might be needed for webflow
// we can keep them for an exact clone, but Next.js will complain if we just inject script tags with dangerouslySetInnerHTML.
// actually dangerouslySetInnerHTML does not execute scripts.

// Let's just create a Layout and Page that renders the full thing.
// We can extract all <style> tags
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let styles = '';
let match;
while ((match = styleRegex.exec(html)) !== null) {
  styles += match[1] + '\n';
}

fs.writeFileSync('./src/app/globals.css', styles);

// Extract the head links and scripts
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

// Save body to a JSON so we can use dangerouslySetInnerHTML
fs.writeFileSync('./src/app/bodyContent.json', JSON.stringify({ html: bodyContent }));
fs.writeFileSync('./src/app/headContent.json', JSON.stringify({ html: headContent }));
console.log('Extracted!');
