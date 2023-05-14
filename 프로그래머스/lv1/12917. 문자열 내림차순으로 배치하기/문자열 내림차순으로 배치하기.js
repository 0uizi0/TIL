const solution = (s) => {
    const lower = [...s].filter((el) => el == el.toLowerCase()).sort().reverse()
    const upper = [...s].filter((el) => el == el.toUpperCase()).sort().reverse()
    return lower.join('')+upper.join('')
}