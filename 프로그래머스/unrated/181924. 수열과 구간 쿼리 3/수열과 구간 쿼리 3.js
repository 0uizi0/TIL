const solution = (arr, queries) => {
    for (let query of queries) {
        let [i,j] = query, copy = [...arr]
        arr[i] = copy[j]
        arr[j] = copy[i]
    }
    return arr
}