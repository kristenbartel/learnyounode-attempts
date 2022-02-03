const fs = require('fs');
const path = require('path');
let file = process.argv[2];

fs.readdir(file, function callback (err, list) { 
    for (let i = 0; i < list.length -1; i ++) {
        if (err) {
            console.log(err);
        }else if
            (path.extname(list[i]) === '.' + process.argv[3]){
                console.log(list[i])
            }
    }}) 