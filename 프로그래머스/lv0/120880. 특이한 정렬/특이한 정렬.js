const solution = (numlist, n) => {
    const result = numlist.map((el)=> el - n).sort((a,b) => Math.abs(a) == Math.abs(b) && a > b ? b - a : Math.abs(a) - Math.abs(b) ).map((el) => el + n)
    return result
}