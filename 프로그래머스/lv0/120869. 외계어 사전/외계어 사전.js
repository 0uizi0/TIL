const solution = (spell, dic) => {
    const arr = [];
    let result;
    
    for (let i of dic) {
        for (let j of spell) arr.push(i.includes(j))
        arr.includes(false) ? arr.splice(0) : result = 'exist';
    }
    return result == 'exist' ? 1 : 2;
}