const solution = (s) => {
    let p = [...s.toLowerCase()].filter((v) => v == 'p').length,
        y = [...s.toLowerCase()].filter((v) => v == 'y').length
    return p == y ? true : false
}