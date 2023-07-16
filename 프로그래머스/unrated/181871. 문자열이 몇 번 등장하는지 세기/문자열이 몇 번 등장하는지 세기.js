function solution(myString, pat) {
    return [...myString].reduce((acc,_,idx)=>{
        const curStr = myString.slice(idx,pat.length+idx)
        if (curStr == pat) acc++;
        return acc
    },0)
}