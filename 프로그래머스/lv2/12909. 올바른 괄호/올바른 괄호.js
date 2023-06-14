const solution = (s) => {
    var myStack = [], 
        isEmpty = true;
    
    if (s[0] == `)` || s[s.length - 1] == `(`) isEmpty = false;
    
    for (let i = 0; i < s.length; i++) {
        s[i] == `(` ? myStack.push('data') : myStack.pop();
    }
    
    if (myStack.length !== 0) isEmpty = false;
    
    return isEmpty;
}