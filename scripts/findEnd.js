const fs = require('fs');
const txt = fs.readFileSync('public/cdn.prod.website-files.com/69e1cc2c4bb2c432ebac4f2b/js/webflow.ce0c3c84.0cccf04f4d23184a.js', 'utf8');
const match = txt.match(/end:"[^"]+"/g);
if(match) {
    const unique = [...new Set(match)];
    console.log(unique.join('\n'));
} else {
    console.log("No match");
}
