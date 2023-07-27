function solution(myStr) {
    const result = myStr.split(/a|b|c/).filter((v) => v !== '')
    return result.length !== 0 ? result : ["EMPTY"]
}