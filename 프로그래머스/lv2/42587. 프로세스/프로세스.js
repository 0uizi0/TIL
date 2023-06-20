const solution = (priorities, location) => {
    let answer = 0, pos_map = [];

    for(let i = 0; i < priorities.length; i++){ pos_map.push(i) }
    
    while (priorities.length != 0){
        let max_value = Math.max(...priorities);
        
        if (priorities[0] < max_value){
            priorities.push(priorities.shift());
            pos_map.push(pos_map.shift());
            
        } else {
            answer += 1;
            priorities.shift();
            if (pos_map.shift() == location)
                return answer;
        }
    }
}