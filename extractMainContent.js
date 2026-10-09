const fs = require('fs');
const cheerio = require('cheerio');

const body = fs.readFileSync('../cloned-website/stanzza.design/index.html', 'utf-8');
const $ = cheerio.load(body);

let restHtml = '';

// Get all sections/divs inside <main> that are NOT hero
$('main').children().each((i, el) => {
  if ($(el).attr('id') !== 'hero') {
    restHtml += $.html(el);
  }
});

function htmlToJSX(html) {
  return html
    .replace(/class=/g, 'className=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/crossorigin=/g, 'crossOrigin=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/playsinline=""/g, 'playsInline')
    .replace(/webkit-playsinline=""/g, '')
    .replace(/muted=""/g, 'muted')
    .replace(/style="[^"]*"/gi, '') // Strip styles to let GSAP handle them without conflicts
    .replace(/\.\.\//g, '/')
    .replace(/<img([^>]*[^\/])>/gi, '<img$1 />')
    .replace(/<source([^>]*[^\/])>/gi, '<source$1 />')
    .replace(/<br>/gi, '<br />')
    .replace(/<input([^>]*[^\/])>/gi, '<input$1 />');
}

const mainContentTsx = `
'use client';
import React from 'react';

export default function MainContent() {
  return (
    <>
      ${htmlToJSX(restHtml)}
    </>
  );
}
`;

fs.writeFileSync('./src/components/MainContent.tsx', mainContentTsx);
console.log('Created MainContent.tsx');
