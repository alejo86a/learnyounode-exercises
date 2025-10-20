const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
    const {statusCode} = response;

    let error;
    if(statusCode !== 200) {
        error = new Error(`Request Failed.\n` +
                          `Status Code: ${statusCode}`);
    }
    if (error) {
        console.error(error.message);
        // consume response data to free up memory
        response.resume();
        return;
    }
    
    response.setEncoding('utf8');
    let rawData = '';
    response.on('data', (chunk) => { rawData += chunk;console.log(chunk); });
  
    response.on('end', () => {
        try {
            // console.log(rawData.split(' ').forEach(word => console.log(word)    ) );
        } catch (e) {
            console.error(e.message);
        }
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});