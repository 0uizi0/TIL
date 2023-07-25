function solution(myString, pat) {
    const changedStr = [...myString].map((el)=>{
        if (el === 'A') return 'B'
        if (el === 'B') return 'A'
    }).join('');
    return changedStr.includes(pat) ? 1 : 0
}