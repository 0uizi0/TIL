function solution(picture, k) {
    const result = [];
    for (let line of picture) {
        const newLine = [...line].map((pixel) => pixel.repeat(k)).join('')
        for (let i = 0; i < k; i++) {
            result.push(newLine)
        }
    }
    return result
}