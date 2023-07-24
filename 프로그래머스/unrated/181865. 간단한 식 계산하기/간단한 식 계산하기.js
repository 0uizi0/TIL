function solution(binomial) {
    const [a,op,b] =  binomial.split(" ");
    switch(op) {
        case "+":
            return Number(a)+Number(b);
            break;
        case "-":
            return Number(a)-Number(b);
            break;
        case "*":
            return Number(a)*Number(b);
            break;
    }
}