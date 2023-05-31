const http = require('http');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname); // Replace with the actual path to your directory
console.log(directoryPath)
// Create an HTTP server
const server = http.createServer((req, res) => {
  const filePath = path.join(directoryPath, req.url);

  // Check if the requested path is a file
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    // Read the file and send it as the response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal server error');
        return;
      }

      res.end(data);
    });
  });
});

// Start the server
const port = 3000; // Replace with your desired port number
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
