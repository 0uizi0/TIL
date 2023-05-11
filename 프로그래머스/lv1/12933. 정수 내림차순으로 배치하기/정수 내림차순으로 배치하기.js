const solution = (n) => {
    return Number([...String(n)].map((el)=>Number(el)).sort((a,b)=>b-a).join(''))
}