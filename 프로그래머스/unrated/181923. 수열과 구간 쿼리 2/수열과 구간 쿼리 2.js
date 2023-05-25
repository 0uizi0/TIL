const solution = (arr, queries) => {
    const result = [];
    queries.forEach(([s,e,k])=>{
        const values = arr.slice(s,e+1).filter((v) => v>k).sort((a,b) => a-b)
        values.length == 0 ? result.push(-1) : result.push(values[0])
    })
    return result
}