const solution = (sizes) => {
    let w = [], h = []
    for (let i of sizes) {
        i.sort((a,b)=>b-a)
        w.push(i[0])
        h.push(i[1])
    }
    return Math.max(...w) * Math.max(...h)
}