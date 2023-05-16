process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    [n,m] = data.split(' ')
    for (let i = 0; i < m; i++) {
        console.log('*'.repeat(n))
    }
});