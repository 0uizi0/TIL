function solution(myString, pat) {
    const isExisted = myString.toLowerCase().includes(pat.toLowerCase());
    return isExisted ? 1 : 0
}