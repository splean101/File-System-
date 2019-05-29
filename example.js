const fs = require('fs');
const util = require('util');
const readFileP = util.promisify(fs.readFile);

fs.readFile(
    './hello.txt',
    'utf8',
    (err, res) => {
        console.log(res);
    }
);

const f = readFileP('hello.txt', 'utf8');
f.then((res) => console.log(res));

async function start(){
    let res = await readFileP('hello.txt', 'utf8');
    console.log(res);
};
start();