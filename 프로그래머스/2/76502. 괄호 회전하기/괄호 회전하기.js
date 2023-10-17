function checkRight(stack) {
  let checkStack = [];
  let opens = [`{`, `(`, `[`];
  let closes = [`]`, `}`, `)`];

  if (closes.includes(stack[0])) return 0;

  for (let i = 0; i < stack.length; i++) {
    let el = stack[i];

    if (opens.includes(el)) checkStack.push(el);

    if (el == `}` && checkStack[checkStack.length - 1] == `{`) checkStack.pop();
    if (el == `]` && checkStack[checkStack.length - 1] == `[`) checkStack.pop();
    if (el == `)` && checkStack[checkStack.length - 1] == `(`) checkStack.pop();
  }

  return checkStack.length == 0 ? 1 : 0;
}

const solution = (s) => {
  let myStack = s.split("");
  let cnt = 0;

  for (let i = 0; i < myStack.length; i++) {
    cnt += checkRight(myStack);
    let newItem = myStack.shift();
    myStack.push(newItem);
  }

  return cnt;
};
