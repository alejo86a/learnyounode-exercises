const http = require('http');
const urls = process.argv.slice(2);

let results = [];
Promise.all(urls.map((url, index) => {
    return new Promise((resolve, reject) => {
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
                reject(error);
                return;
            }
            
            response.setEncoding('utf8');
            let rawData = '';
            response.on('data', (chunk) => { rawData += chunk;});
            
                response.on('end', () => {
                    try {
                        results[index] = rawData;
                        resolve();
                    } catch (e) {
                        console.error(e.message);
                        reject(e);
                    }
                });
        }).on('error', (e) => {
            console.error(`Got error: ${e.message}`);
            reject(e);
        });
    });
})).then(() => {
    results.forEach(result => console.log(result));
}).catch(err => {
    console.error('Error fetching URLs:', err);
});