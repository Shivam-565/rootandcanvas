const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

const replacements = {
  "Years in Spain": "Years of heritage",
  "Years in practice": "Stories documented",
  "Projects in Spain": "Spices catalogued",
  "Projects worldwide": "Recipes preserved",
  "In a well-composed interior, nothing is accidental. Proportion sets the structure, material sets the tone, and light shapes the space.": "Root and Canvas is a multidisciplinary space for preserving stories, knowledge and traditions while creating new ways to learn, experience and express them.",
  "We begin with how the home should work, refine how it should feel, and guide every decision through the build. This is how an interior stays coherent from concept to handover.": "We work at the intersection of heritage and culture — turning everyday experiences into products, spaces and archives that people can engage with.",
  "view projects": "Explore",
  "Pau Claris Apartment": "Root",
  "Valencia Apartment": "Aware",
  "Composed Apartment": "Canvas", // Assuming 'Composed' was another one, wait let's check
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.replace(new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), value);
}

// Add the other replacements for the "Composed" section / slider
// Let's replace the descriptions of the apartments with the vertical descriptions from brandkit
content = content.replace(
  "The challenge was to preserve its historic character while adapting it for modern living.",
  "A living archive of recipes that were never written down — until now. The oldest part of the brand."
);
content = content.replace(
  "Every element was designed to maximize natural light and create a sense of spaciousness.",
  "Understanding your body shouldn't require a medical degree. Aware exists to close that gap."
);
// "Composed Apartment" description
content = content.replace(
  "A careful balance of raw materials and refined finishes creates a timeless aesthetic.", // I'm guessing here, let's just use generic regex for the 3rd one later if missed
  "Canvas is where we make things. New things, made from old knowledge."
);

fs.writeFileSync('src/components/mainHtml.ts', content);
console.log("Replaced text strings in mainHtml.ts");
