function solution(number) {
    const sum = [...number].map((v)=>Number(v)).reduce((acc,cur) => acc += cur)
    return sum % 9
}