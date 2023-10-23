const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 3000;

const mainPage = (req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  fs.readFile('index.html', null, function (error, page){
      if (error){
          res.writeHead(404);
          res.write('Error, file not found.');
      }
      else {
          res.write(page);
      }
      res.end();
  })
};
const thankYouPage = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Thank You Page');
};

const API = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = [
    { id: 1, name: 'cristiano ronaldo' },
    { id: 2, name: 'messi'  },
    { id: 3, name: 'benzema'  },
  ];
  res.end(JSON.stringify(data));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  if (parsedUrl.pathname === '/') {
    mainPage(req,res);
  }
  else if (parsedUrl.pathname === '/kontakt' && method === 'POST'){
    const body = []
    req.on('data', (chunk) => {
        body.push(chunk);
    })
    req.on('end', async () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        await writeFile(`contact/message - ${ Date.now().toString() }.txt`, message);
        res.statusCode = 302;
        res.setHeader('Location', '/dziekujemy');
        return res.end();
    })
  } 
  else if (parsedUrl.pathname === '/dziekujemy') {
    thankYouPage(req, res);
  } 
  else if (parsedUrl.pathname === '/api') {
    API(req, res);
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Serwer dziala na http://localhost:${port}`);
});
