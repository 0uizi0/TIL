const solution = (arr, query) => {
    query.map((v,i) => {
        arr = (i % 2 == 0) ? arr.slice(0,v + 1) : arr.slice(v, arr.length)
    });
    return arr
}