// 등차 수열 : a + (n - 1) * d
const getD = (list) => list[1] - list[0];
const getAD = (a1, a2, n) => {
    const d = a2 - a1;
    return a1 + (n - 1) * d;
}

// 등비 수열 : a * r ** ( n - 1 )
const getAR = (a1, a2, n) => {
    const r = a2 / a1;
    return a1 * r ** (n - 1);
}

const solution = (common) => {
    const a1 = common[0], a2 = common[1], a3 = common[2]
    const n = common.length + 1;
    if (a2 - a1 === a3 - a2) {
        return getAD(a1, a2, n)
    } else {
        return getAR(a1, a2, n)
    }
}
