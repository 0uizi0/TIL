const solution = (absolutes, signs) => {
    let result = 0;
    for (let i in absolutes) {
        result += absolutes[i] * (!signs[i] ? -1 : 1)
    }
    return result
}