const solution = (numbers) => {
    let num = [0,1,2,3,4,5,6,7,8,9]
    const result = num.filter((el) => !numbers.includes(el)).reduce((arr,cur) => arr += cur, 0)
    return result
}