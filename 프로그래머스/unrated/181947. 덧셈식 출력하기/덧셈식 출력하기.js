const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    [a,b] = line.split(' ');
    console.log(Number(a),"+",Number(b),"=",Number(a) + Number(b))
})