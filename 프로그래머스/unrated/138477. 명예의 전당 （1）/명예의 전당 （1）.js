const solution = (k, score) => {
    const rank = [], result = []
    for (let i = 0; i < score.length; i++) { 
        if (i < k) rank.push(score[i])
        if (score[i] > rank[k-1]) rank.splice(k-1,1,score[i])
        rank.sort((a,b)=>b-a)
        result.push(rank[rank.length-1])
    }
    return result
}