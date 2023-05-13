const solution = (s) => {
    if (Number.isInteger(s.length/2)) {
        let idx = s.length/2 - 1
        return [...s].splice(idx, 2).join('')
    } else {
        let idx = Math.floor(s.length / 2)
        return [...s].splice(idx, 1).join('')
    }
}