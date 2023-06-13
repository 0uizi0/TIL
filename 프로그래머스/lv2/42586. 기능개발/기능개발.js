const solution = (progresses, speeds) =>  {
    const result = []
    
    const workTime = progresses.map((v,i) => Math.ceil((100 - v) / speeds[i]));
    
    let cnt = 1;
    let date = workTime[0]
    
    for (let i = 1; i < workTime.length; i++) {
        
        if (workTime[i] <= date) {
            cnt++
        } else {
            date = workTime[i]
            result.push(cnt);
            cnt = 1;
        }
    }
    result.push(cnt);
    
    return result;
}