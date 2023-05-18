const solution = (d, budget) => {
    let sum = 0, result = 0
    d.sort((a,b)=>a-b).map((el)=>{
        if (sum + el <= budget) {
            sum += el
            result++
        }
    })
    return result
    
}