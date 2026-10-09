const http = require('http');

http.get('http://localhost:3001', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('composition:', data.includes('id="composition"'));
    console.log('apartment:', data.includes('id="apartment"'));
    console.log('blog:', data.includes('id="blog"'));
    console.log('hero occurrences:', (data.match(/id="hero"/g) || []).length);
  });
});
