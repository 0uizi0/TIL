const solution = (n) => {
    const result = [n];
    while (n !== 1) {
        if (Number.isInteger(n/2)) { n = n/2 } 
        else { n = 3*n+1 }
        result.push(n)
    }
    return result
}