const solution = (my_string, m, c) => {
    let start = 0, result = '';
    for (let i = 0; i < my_string.length; i += m) {
        const arr = [...my_string].splice(start,m)
        start += m
        result += arr[c-1]
    }
    return result
}