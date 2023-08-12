function solution(rank, attendance) {
    const [a,b,c] = rank.filter((v,i)=>attendance[i]).sort((prev,next)=>prev-next);
    const [firstRank, secondRank, thirdRank] = [rank.indexOf(a), rank.indexOf(b), rank.indexOf(c)]
    return 10000 * firstRank + 100 * secondRank + thirdRank
}