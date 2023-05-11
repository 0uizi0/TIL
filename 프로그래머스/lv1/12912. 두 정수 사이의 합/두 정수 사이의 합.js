const solution = (a,b)=>{
    let sum = 0, max = b, min = a
    if (a > b) max = a , min = b
    for (let i = min; i <= max; i++) { sum += i }
    return sum
}