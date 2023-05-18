const solution = (s, n) => {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        lower = 'abcdefghijklmnopqrstuvwxyz',
        result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            result += ' '
            continue
        }
        const arr = upper.includes(s[i]) ? upper : lower
        let idx = arr.indexOf(s[i]) + n
        if (idx >= arr.length) idx -= arr.length
        result += arr[idx]
    }
    return result
}