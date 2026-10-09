const fs = require('fs');
let content = fs.readFileSync('src/components/mainHtml.ts', 'utf8');

content = content.replace(/In a well-composed interior, nothing\s*is accidental\. Proportion sets the structure, material sets the tone, and light shapes the space\./g, "Root and Canvas is a multidisciplinary space for preserving stories, knowledge and traditions while creating new ways to learn, experience and express them.");

content = content.replace(/We begin with how the home should work, refine how it should feel, and guide every decision through the build\. This is how an interior stays coherent from concept to handover\./g, "We work at the intersection of heritage and culture — turning everyday experiences into products, spaces and archives that people can engage with.");

content = content.replace(/The challenge was to preserve its historic character while adapting it for modern living\./g, "A living archive of recipes that were never written down — until now. The oldest part of the brand.");

content = content.replace(/Every element was designed to maximize natural light and create a sense of spaciousness\./g, "Understanding your body shouldn't require a medical degree. Aware exists to close that gap.");

// The composed apartment text might be different. Let's find it.
// Let's replace "Valencia Apartment" -> Aware
content = content.replace(/Valencia Apartment/g, "Aware");
content = content.replace(/Pau Claris Apartment/g, "Root");
content = content.replace(/Composed Apartment/g, "Canvas");

// The 1st apartment text
content = content.replace(/A careful balance of raw materials and refined finishes creates a timeless aesthetic\./g, "Canvas is where we make things. New things, made from old knowledge.");

fs.writeFileSync('src/components/mainHtml.ts', content);
