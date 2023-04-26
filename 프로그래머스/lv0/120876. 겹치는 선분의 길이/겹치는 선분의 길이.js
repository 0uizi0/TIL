const solution = (lines) => {
    let answer = 0;
    let lineArr = new Array(200);
    lineArr.fill(0);
    
    for (let i = 0; i < 3; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            lineArr[j+100] += 1;
        }
    }
    
    for (let i of lineArr) {
        if (i > 1) answer += 1;
    }
    return answer;
}