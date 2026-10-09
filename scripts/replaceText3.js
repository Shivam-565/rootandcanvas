const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

// Replace Root description
content = content.replace(
  /A living archive of recipes that were never written down — until now\. The oldest part of the brand\./g,
  "Culture, heritage, food, memories and traditions, preserved and reimagined for today."
);

// Replace Aware description
content = content.replace(
  /Understanding your body shouldn't require a medical degree\. Aware exists to close that gap\./g,
  "Resources, learning and initiatives that encourage greater awareness of ourselves, our surroundings and everyday life."
);

// Replace Canvas description
content = content.replace(
  /Canvas is where we make things\. New things, made from old knowledge\./g,
  "Art, creativity and thoughtfully designed products inspired by stories, ideas, culture and everyday experiences."
);

// Also update "Root", "Aware", "Canvas" to upper case if needed? The PDF says "ROOTS", "AWARE", "CANVAS". 
// Let's leave the case as is for the titles as it might break some styles or it's better to keep title case.
// Wait, the PDF says:
// ROOTS
// AWARE
// CANVAS
content = content.replace(/>Root</g, ">ROOTS<");
content = content.replace(/>Aware</g, ">AWARE<");
content = content.replace(/>Canvas</g, ">CANVAS<");

fs.writeFileSync('src/components/mainHtml.ts', content);
console.log("Updated vertical descriptions");
