const fs = require('fs');

const filePath = process.argv[2];
const extension = process.argv[3];

fs.readdir(filePath, (err, files) => { 
    if (err) {
        console.error(err);
        return;
    }
    files.filter(file=>file.endsWith(`.${extension}`)).forEach(file=>console.log(file));
})