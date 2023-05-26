const solution = (l, r) => {
    const result = []
    for(let i = l ; i <= r ; i ++) {
        if (i%5 !== 0) continue
        const arr = [...String(i)]
        if (!arr.every(a => a === '5' || a === '0')) continue
        result.push(i)
    }
    return result.length == 0 ? [-1] : result
}