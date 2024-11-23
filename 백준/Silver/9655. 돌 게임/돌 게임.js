const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = +require("fs").readFileSync(filePath).toString().trim();

input % 2 === 0 ? console.log("CY") : console.log("SK");