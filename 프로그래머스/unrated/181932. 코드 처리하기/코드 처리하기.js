const solution = (code) => {
    let mode = 0, ret = []
    for (let i = 0; i < code.length; i++) {
        if (mode == 0) {
            code[i] == '1' ? mode = 1 
                : Number.isInteger(i/2) ? ret.push(code[i]) : ret.push('')
        } else {
            code[i] == '1'? mode = 0
                : !Number.isInteger(i/2) ? ret.push(code[i]) : ret.push('')
        }
    }
    return ret.length == 0 ? 'EMPTY' : ret.join('')
}