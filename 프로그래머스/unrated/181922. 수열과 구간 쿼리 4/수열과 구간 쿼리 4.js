const solution = (arr, queries) => {
    queries.forEach((query) => {
        [s, e, k] = query
        for (let i = s; i <= e; i++) {
            if (Number.isInteger(i/k)) arr[i] += 1
        }
    })
    return arr
}