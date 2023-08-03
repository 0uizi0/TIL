function isPowOfTw(num) {
    if (num === 1) return true
    if (num % 2) return false
    
    let powered = 2;
    while (powered < num) {
        powered *= 2
    }
    return powered === num
}

function solution(arr) {
    let result = [...arr]
    while (!isPowOfTw(result.length)) {
        result.push(0)
    }
    return result
}