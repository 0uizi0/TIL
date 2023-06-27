const solution = (participant, completion) => {
    let result = '';
    const rH = new Map();
    
    for (let p of participant) {
        rH.set(p, rH.get(p) + 1 || 1)
    }
    
    for (let c of completion) {
        rH.get(c) == 1 ? rH.delete(c) : rH.set(c, rH.get(c) - 1)
    }
    
    for (let [key, value] of rH) result += key 
    
    return result
}