function solution(strArr) {
    const dict = {}
    strArr.forEach((item) => {
        const len = item.length
        dict[len] = dict[len] ?? []
        dict[len].push(item)
    })
    const lengths = Object.values(dict).map(item => item.length)
    return Math.max(...lengths)
}