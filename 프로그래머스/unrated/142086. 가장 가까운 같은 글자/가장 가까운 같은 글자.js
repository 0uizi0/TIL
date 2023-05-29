const solution = (s) => {
    var ans = [], stack = []
    for (let i = 0; i < s.length; i++) {
        const lastIdx = stack.length - stack.lastIndexOf(s[i])
        !stack.includes(s[i]) ? ans.push(-1) : ans.push(lastIdx)
        stack.push(s[i])
    }
    return ans
}