const solution = (x) => {
    const div = String(x).split('').reduce((acc,cur) => acc += Number(cur), 0)
    return Number.isInteger(x/div)
}