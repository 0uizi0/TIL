const solution = (s) => {
    const str = ['zero','one','two','three','four','five','six','seven','eight','nine']
    const num = [0,1,2,3,4,5,6,7,8,9]
    for (let i = 0; i < str.length; i++) {
        s = s.replaceAll(str[i],num[i])
    }
    return Number(s)
}