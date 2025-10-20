const fs = require('fs');

const filePath = process.argv[2];

const buffer = fs.readFile(filePath, (err, data) => {
    const str = data.toString();
    console.log(str.split('\n').length - 1);
});

// buffer.then(data=>).catch(err=>{
//     console.error(err);
// });
