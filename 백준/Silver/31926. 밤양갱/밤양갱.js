const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
let N = +require("fs").readFileSync(filePath).toString().trim();

const DALDIDALGO = 8; // (d)(a)(l)(d)(i)(dal)(g)(o)
const DALDIDAN = 2; // (daldida)(n)

let cnt = 0;

let exponent = Math.floor(Math.log2(N));
N -= 2 ** exponent;
cnt += exponent;

console.log(DALDIDALGO + cnt + DALDIDAN);