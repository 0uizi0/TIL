const solution = (n) => {
    let cnt = 0
    if (n == 1) return 0
    while (n !== 1) {
        Number.isInteger(n/2) ? n = n/2 : n = n*3+1
        cnt++;
    }
    return cnt < 500 ? cnt : -1
}