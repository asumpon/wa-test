const http = require('http');
const fs = require('fs'); // Require the file system module to read HTML files.

// Function to serve the HTML file.
const serveHtml = (response) => {
    // Read the HTML file.
    fs.readFile('index.html', (err, data) => {
        if (err) {
            // Send a 500 Internal Server Error if there's an issue reading the file.
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end('500 - Internal Server Error');
        } else {
            // If the file is read successfully, write the HTML content to the response.
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }
    });
};

http.createServer(function (request, response) {
    // Call the function to serve the HTML file.
    serveHtml(response);
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');