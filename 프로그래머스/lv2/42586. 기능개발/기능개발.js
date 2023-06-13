const solution = (progresses, speeds) =>  {
    const workTime = progresses.map((v,i) => Math.ceil((100 - v) / speeds[i]));
    const result = workTime.map((v,i) => {
        if (v > workTime[i + 1]) workTime[i + 1] = v
        return v
    }).reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc
    },{})
    return Object.values(result);
}