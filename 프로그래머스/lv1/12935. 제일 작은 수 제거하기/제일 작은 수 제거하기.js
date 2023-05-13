const solution = (arr) => {
    const min = [...arr].sort((a, b) => a - b)[0]
    const remain = arr.filter((el) => el !== min)
    return remain.length !== 0 ? remain : [-1]
}