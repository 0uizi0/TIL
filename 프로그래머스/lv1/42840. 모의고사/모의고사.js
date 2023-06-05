const solution = (answers) => {
    let result = [], scores = [0, 0, 0];
    const p1 = [...'12345'],
          p2 = [...'21232425'],
          p3 = [...'3311224455'];
    
    for (let i = 0; i< answers.length; i++) {
        if (p1[i%p1.length] == answers[i]) scores[0]++; 
        if (p2[i%p2.length] == answers[i]) scores[1]++; 
        if (p3[i%p3.length] == answers[i]) scores[2]++; 
    }
    
    const maxValue = Math.max(...scores);
    
    for (let i = 0; i < scores.length; i++) {
        if (maxValue === scores[i]) {
            result.push(i+1)
        }
    }
    
    return result
}