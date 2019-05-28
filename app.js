const fs = require('fs');
//node app.js greeting.txt text1.txt text2.txt text3.txt text4.txt

let [, , pathRes, ...rest] = process.argv;
//sync version
/*for (let key of rest) {
    fs.appendFileSync(pathRes, fs.readFileSync(key, 'utf8') + '\n', 'utf8');
};*/

//async version
for (let key of rest) {
    fs.readFile(key, 'utf8', (error, data) => {
        if (error) throw error;
        fs.appendFile(pathRes, data + '\n', 'utf8', (error) => {
            if (error) throw error;
        });
    });
};