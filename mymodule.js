const { error } = require('console');
const fs = require('fs');

module.exports = function(filePath, extension, callback) {
    fs.readdir(filePath, (err, files) => { 

        if(err) {return callback(err); };

        const result = [];
        files.filter(file => file.endsWith(`.${extension}`))
        .forEach(file => result.push(file));

        callback(null, result);
        });
};