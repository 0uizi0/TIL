const solution = (array, commands) => {
    const result = [];
    for (let command of commands) {
        let [i,j,k] = command
        const filtered = array.slice(i-1,j).sort((a,b)=>a-b)[k-1]
        result.push(filtered)
    }
    return result
}