function solution(myString) {
    const prev = "abcdefghijk".split('')
    return [...myString].map((str) => prev.includes(str) ? 'l' : str).join('')
}
