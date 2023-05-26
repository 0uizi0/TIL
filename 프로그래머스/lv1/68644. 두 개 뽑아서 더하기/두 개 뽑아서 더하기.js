const solution = (numbers) => {
    const dupArr = [], result = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) dupArr.push(numbers[i]+numbers[j])
        }
    }
    dupArr.forEach((el) => {
        if (!result.includes(el)) result.push(el) 
    })
    return result.sort((a,b) => a-b)
}