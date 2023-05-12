const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const result = line % 2 == 0 && line !== 0 ? "even" : "odd"
    console.log(line,'is',result)
})