const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input  = [...line].map((el) => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase());
    console.log(input.join(''))
})