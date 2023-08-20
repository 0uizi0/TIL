function solution(n_str) {
    const str = n_str.split('')
    while (str[0] == '0') {
        str.shift()
    }
    return str.join('')
}