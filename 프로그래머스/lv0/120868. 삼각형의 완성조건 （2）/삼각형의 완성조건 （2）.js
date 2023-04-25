const solution = (sides) => {
    const str = [];
    sides.sort((a,b) => b-a);

    // 나머지 한 변이 가장 긴 변일때
    for (let i = sides[0] + 1; i < sides[0] + sides[1]; i++ ) {
        str.push(i);
    }
    
    // 배열에 들어있는 변이 가장 긴 변일 때
    for (let i = 0; i <= sides[0]; i++) {
        if (sides[0] < sides[1] + i) str.push(i);
    }
    
    return str.length;
}