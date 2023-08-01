function solution(arr) {
   const stk = []
    for (let i = 0; i < arr.length; i++) {
       if (!stk) {
            stk.push(arr[i])
        } else {
            stk[stk.length - 1] === arr[i] ? stk.pop() : stk.push(arr[i])
        } 
    }
    return stk.length == 0 ? [-1] : stk
}