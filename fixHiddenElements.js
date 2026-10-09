const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

// Replace opacity: 0 with opacity: 1 inside inline styles
content = content.replace(/opacity:\s*0;?/g, 'opacity: 1;');

// Also remove any transforms that might push the element out of view
// e.g. transform: translate3d(0px, 100%, 0px);
content = content.replace(/transform:\s*translate3d\([^)]+\);?/g, 'transform: translate3d(0px, 0px, 0px);');

fs.writeFileSync('src/components/mainHtml.ts', content);
console.log("Replaced initial hidden states in mainHtml.ts");
