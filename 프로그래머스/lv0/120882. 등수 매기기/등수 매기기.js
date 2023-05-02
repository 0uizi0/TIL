const solution = (score) => {
    const avgList = score.map((el)=>(el[0]+el[1])/2)
    const seq = [...avgList].sort((a,b)=>b-a)
    const result = avgList.map((el)=>seq.indexOf(el) + 1)
    return result
}