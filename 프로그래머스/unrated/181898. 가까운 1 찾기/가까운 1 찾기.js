const solution = (arr, idx) => {
    const idxArr = []
    for (let i = idx; i < arr.length; i++) {
        if (arr[i] == 1) idxArr.push(i)
    }
    return idxArr.length !== 0 ? idxArr[0] : -1
}