const solution = (str1, str2) => {
    let result = []
    for (let i in str1) {
        result.push([...str1][i])
        result.push([...str2][i])
    }
    return result.join('')
}