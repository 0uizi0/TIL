const solution = (t, p) => {
    let result = 0;
    for (let i = 0; i < t.length; i++) {
        const num = t.slice(i,p.length+i)
        if (num.length == p.length && num <= p) result ++;
    }
    return result
}