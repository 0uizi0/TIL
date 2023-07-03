const solution = (arr, queries) => {
    queries.forEach((querie) => {
        let [s,e] = querie;
        arr.map((_,i) => { if (s <= i && i <= e) return arr[i] += 1 })
    });
    return arr;
}