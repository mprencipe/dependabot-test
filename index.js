const http = require('http');
const url = require('url');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const userInput = queryObject.cmd;

  // VULNERABLE: Command injection
  exec('ls ' + userInput, (error, stdout, stderr) => {
    if (error) {
      res.writeHead(500);
      res.end(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      res.writeHead(500);
      res.end(`Stderr: ${stderr}`);
      return;
    }
    res.writeHead(200);
    res.end(`Output: ${stdout}`);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
