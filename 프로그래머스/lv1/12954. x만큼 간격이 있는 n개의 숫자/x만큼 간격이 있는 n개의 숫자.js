const solution = (x, n) => {
    let answer = [], add = 0;
    for (let i = 0; i < n; i++) {
        add += x
        answer.push(add);
    }
    return answer
}