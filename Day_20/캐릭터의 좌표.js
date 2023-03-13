const solution = (keyinput, board) => {
  let x = 0, y = 0;
  
  const range = [Math.abs(Math.floor(board[0]/2)),Math.abs(Math.floor(board[1]/2))];
  for (let i of keyinput) {
      switch(i) {
          case "left": x--; break;
          case "right": x++; break;
          case "down": y--; break;
          case "up": y++; break;
      }
      if (Math.abs(x)>range[0]){
          x = x > 0 ? range[0] : range[0]* -1;
      }
      if (Math.abs(y)>range[0]){
          y = y > 0 ? range[1] : range[1]* -1;
      }
  }
  return [x,y]
}