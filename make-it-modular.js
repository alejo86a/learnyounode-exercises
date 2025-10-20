const myModule = require('./mymodule');

const filePath = process.argv[2];
const extension = process.argv[3];

myModule(filePath, extension, (err,data)=>{
    if (err) {
        console.log(err);
    }
    data.forEach(file=>console.log(file));
});
