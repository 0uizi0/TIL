const checkWord = (w) => {
    let x = 1, notX = 0;
    const fw = w.shift()
    while (x !== notX ) {
        const nw = w.shift()
        fw === nw ? x++ : notX++
    }
    return x + notX
}

function solution(s) {
    let result = 0;
    const sList = s.split('')
    while (sList.length !== 0) {
        checkWord(sList);
        result++;
    }
    return result;
}