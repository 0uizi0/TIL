const solution = (i, j, k) => {
    let result = 0;
    for (let x = i; x <= j; x++) {
        const arr = x.toString().split('').filter((el) => el == k)
        result += arr.length
    }
    return result
}