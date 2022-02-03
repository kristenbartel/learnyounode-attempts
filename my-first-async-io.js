const fs = require('fs');
let file = process.argv[2];

fs.readFile(file, function callback (err, data) { 
    if (err) {
        return err;
    } else {
        let dataString = data.toString();
        // console.log(bufferString);
        let splitData = dataString.split('\n');
        console.log(splitData.length -1);
        return data;
    }
})
