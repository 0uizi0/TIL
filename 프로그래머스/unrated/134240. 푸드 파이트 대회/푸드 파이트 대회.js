const solution = (food) => {
    let result = '', half = ''
    const filtered = food.map((el) => parseInt(el/2) )
    for (let i = 1; i < filtered.length; i++) {
        half += String(i).repeat(filtered[i])
    } 
    result = half + '0' + [...half].reverse().join('')
    return result
}