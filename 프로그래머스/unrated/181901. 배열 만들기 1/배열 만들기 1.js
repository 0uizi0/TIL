const solution = (n, k) => {
    const result = []
    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(i/k)) result.push(i)
    }
    return result
}