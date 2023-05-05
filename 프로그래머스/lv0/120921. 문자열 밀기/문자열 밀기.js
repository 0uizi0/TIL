const solution = (A,B) => {
    let arr = [...A]
    for (let i in arr) {
        if (A == B) return Number(i)
        arr.unshift(arr.pop())
        if (arr.join('') == B) return Number(i) + 1
    }
    return -1
}