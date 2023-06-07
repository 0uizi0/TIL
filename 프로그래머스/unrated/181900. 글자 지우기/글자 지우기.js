const solution = (my_string, indices) => {
    return [...my_string]
        .map((v,i) => indices.includes(i) ? -1 : v)
        .filter(v => v !== -1)
        .join('')
}