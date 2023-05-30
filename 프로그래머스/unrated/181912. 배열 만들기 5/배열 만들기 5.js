const solution = (intStrs, k, s, l) => {
    const ret = []
    intStrs.forEach((el)=>{
        const num = Number([...el].splice(s,l).join(''))
        if (num > k) { ret.push(num) }
    })
    return ret
}