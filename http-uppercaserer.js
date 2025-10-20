const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('Send me a POST\n');
    }
    
    req.setEncoding('utf8');
    let upperCasedData = '';
    req.on('data', (chunk) => {
        upperCasedData += chunk.toUpperCase();
    });
    
    req.on('end', () => {
        res.end(upperCasedData);
    });
});

server.listen(port);