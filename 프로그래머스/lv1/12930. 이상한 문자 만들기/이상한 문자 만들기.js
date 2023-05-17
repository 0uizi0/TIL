const solution = (s) => {
    let result = ''
    let words = s.split(' ')
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j%2 == 0) {
                result += words[i][j].toUpperCase()
            } else {
                result +=  words[i][j].toLowerCase()
            }
        }
        if (i < words.length - 1) {
            result += ' '
        }
    }
    return result
}