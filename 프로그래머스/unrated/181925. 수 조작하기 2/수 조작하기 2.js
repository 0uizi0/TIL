const solution = (numLog) => {
    let result = ''
    for (let i in numLog) {
        let cal = (i == 0) ? i : numLog[i] - numLog[i-1]
        
        if (cal == 1) result += 'w'
        if (cal == -1) result += 's'
        if (cal == 10) result += 'd'
        if (cal == -10) result += 'a'
    }
    return result
}