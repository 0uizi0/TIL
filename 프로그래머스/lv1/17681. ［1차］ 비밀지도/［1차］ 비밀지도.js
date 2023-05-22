const solution = (n, arr1, arr2) => {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        const cnt1 = n - arr1[i].toString(2).length,
              cnt2 = n - arr2[i].toString(2).length
        if (cnt1 !== 0) arr1[i] = '0'.repeat(cnt1) + arr1[i].toString(2)
        if (cnt2 !== 0) arr2[i] = '0'.repeat(cnt2) + arr2[i].toString(2)
        arr1[i] = arr1[i].toString(2)
        arr2[i] = arr2[i].toString(2)
        
        const w1 = [...arr1[i]], w2 = [...arr2[i]], str = []
        for (let j = 0; j < w1.length; j++) {
            w1[j] == '0' && w2[j] == '0' ? str.push(' ') : str.push('#')
        }
        result.push(str.join(''))
    }
    return result
}