const solution = (arr, divisor) => {
    const result = arr.filter((el)=>Number.isInteger(el/divisor)).sort((a,b)=>a-b)
    return result.length !== 0 ? result : [-1]
}