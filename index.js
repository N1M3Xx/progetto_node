const utility = require('./utility');
const http = require('http');
const fs = require('fs');

const utilityIstance = new utility();

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    fs.readFile('./templates/home.html', (err, data) => {
      utilityIstance.error(err, data, res);
    });
  }
  else if(req.url === '/login'){
    fs.readFile('./templates/login.html', (err, data) => {
      utilityIstance.error(err, data, res);
    });
  } 
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
