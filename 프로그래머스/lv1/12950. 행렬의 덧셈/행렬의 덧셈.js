const solution = (arr1, arr2) => {
    const answer = []
    for (let i in arr1) {
        const sum = []
        for (let j in arr1[i]) {
            sum.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(sum)
    }
    return answer
}
