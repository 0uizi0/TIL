const or = (a,b) => (a || b) ? true :  false
const and = (a,b) => (a && b) ? true : false
const solution = (x1, x2, x3, x4) => and(or(x1,x2), or(x3,x4))