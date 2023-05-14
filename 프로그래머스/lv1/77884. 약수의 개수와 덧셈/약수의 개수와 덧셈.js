const solution = (left, right) => {
    let result = 0;
    for (let x = left; x <= right; x++) {
        const num = [];
        for (let i=1; i<=x; i++) {
            if (Number.isInteger(x/i)) num.push(i)
        }
        Number.isInteger(num.length/2) ? result += x : result -= x 
    }
    return result
}