const http = require('http');
const url=require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const urlparserd = url.parse(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let html;
  if(urlparserd.pathname==='/aboutpage')
    html='./aboutpage.html';
  else
    html='./mainpage.html';
  fs.readFile(html,(err,data) => {
    if(err) return;
    res.end(data);
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 