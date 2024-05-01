const solution = (i , j , k) => {
    let result = 0;
    for (let x = i; x <= j; x++) {
        const kArr = x.toString().split('').filter(v => v == k)
        result += kArr.length
    }
    return result
}