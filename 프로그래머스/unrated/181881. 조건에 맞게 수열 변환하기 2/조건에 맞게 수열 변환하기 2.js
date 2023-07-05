function solution(prevArr) {
    let cnt = 0;
    while (true) {
        const nextArr = prevArr.map((el) => {
            if (el >= 50 && el%2 ==0) return el/2;
            if (el < 50 && el%2 !== 0) return el*2+1;
            return el;
        });
        if (prevArr.toString() == nextArr.toString()) break;
        cnt +=1 ;
        prevArr = nextArr;
    }
    return cnt
}