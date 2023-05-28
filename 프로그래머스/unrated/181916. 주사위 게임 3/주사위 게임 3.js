const solution = (a, b, c, d) => {
    const obj = {};
    [a,b,c,d].forEach((x) => { 
        obj[x] = (obj[x] || 0)+1; 
    });
    const keyArr = Object.keys(obj).map((el)=>Number(el))
    if (keyArr.length == 1) return 1111* keyArr
    if (keyArr.length == 4) return Math.min(...keyArr)
    if (keyArr.length === 3) {
        const dup = keyArr.find((key) => obj[key] === 2)
        const filtered = keyArr.filter((el) => el !== dup)
        return filtered[0] * filtered[1]
    }
    if (keyArr.find((key) => obj[key] === 2)) {
        [p,q] = keyArr
        return (p + q) * Math.abs(p - q)
    } 
    else {
        const p = keyArr.find((key) => obj[key] === 3),
              q = keyArr.find((key) => obj[key] === 1)
        return Math.pow(10 * p + q, 2)
    }
}