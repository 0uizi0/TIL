const solution = (my_string) => {
    const result = [], 
          upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
          lower = 'abcdefghijklmnopqrstuvwxyz',
          alp = [...upper+lower]
    for (let i = 0; i < alp.length; i++) {
        let count = [...my_string].filter(el => el == alp[i]).length
        result.push(count)
    }
    return result
}