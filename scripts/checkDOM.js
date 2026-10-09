const fs = require('fs');
const cheerio = require('cheerio');

const body = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');
const $ = cheerio.load(body);

$('.main_wrap').children().each((i, el) => {
  console.log(i, $(el).get(0).tagName, 'class:', $(el).attr('class'), 'id:', $(el).attr('id'));
});
