const solution = (num, total) => {
    let n = Number(((Number(2*total)/num) +1 - num) / 2);
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(n)
        n ++
    }
    return result
}