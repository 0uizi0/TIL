const solution = (my_strings, parts) => {
    let result = ''
    for (let i = 0; i < parts.length; i++) {
        [s,e] = parts[i]
        result += my_strings[i].slice(s, e + 1)
    }
    return result
}