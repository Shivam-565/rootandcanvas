const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

// Replace CTAs
content = content.replace(/>View Project</g, ">Explore<");
content = content.replace(/>View all projects</g, ">Discover<");

fs.writeFileSync('src/components/mainHtml.ts', content);
console.log("Updated CTAs");
