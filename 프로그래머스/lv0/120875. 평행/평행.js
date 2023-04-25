const solution = (dots) => {
    const resultArr = [];
    for (let i = 1; i < dots.length; i++) {
        const arr = [1,2,3];
        arr.splice(i-1,1);
        const slope1 = (dots[i][1] - dots[0][1]) / (dots[i][0] - dots[0][0]);
        const slope2 = (dots[arr[0]][1] - dots[arr[1]][1]) / (dots[arr[0]][0] - dots[arr[1]][0]);
        slope1 == slope2 ? resultArr.push(true) : resultArr.push(false);
    }
    return resultArr.includes(true) ? 1 : 0;
}