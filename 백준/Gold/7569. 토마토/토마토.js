let input = require('fs').readFileSync('/dev/stdin').toString().split('\n'); 
const [M,N,H] = input.shift().split(' ').map(Number); 
const graph =  [...Array(H)].map(()=> [...Array(N)].map(()=> Array(M).fill(0)))

for(let h=0; h<H; h++){
    for(let i=0; i<N; i++){
            graph[h][i] = input.shift().split(' ').map(Number); 
    }
}
function solution(M,N,H,graph){
    const dis = [...Array(H)].map(()=> [...Array(N)].map(()=> Array(M).fill(0)))
 
    let ds = [[0,0,1],[0,0,-1],[0,1,0],[0,-1,0],[1,0,0],[-1,0,0]]; 
    const queue =[]; 
   for(let h=0; h<H; h++){
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            if(graph[h][i][j] === 1) queue.push([h,i,j]) 
            if(graph[h][i][j] === 0) dis[h][i][j] = -1; 
        }
    }
}
    let head = 0; 
    while(queue.length > head){
        let [h,x,y] = queue[head];
        head++; 
       for(let i=0; i<6; i++){
            let nh = h + ds[i][0]; 
            let nx = x + ds[i][1]; 
            let ny = y + ds[i][2];     
        if(nh <0 || nx <0 || ny <0 || nh >= H || nx >= N || ny >= M) continue; 
        if(dis[nh][nx][ny] >=0) continue;    
            queue.push([nh,nx,ny])
            dis[nh][nx][ny] = dis[h][x][y] + 1; 
        }
    }
    let answer = 0; 
    for(let h=0; h<H; h++){
      for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
           answer = Math.max(answer,dis[h][i][j]); 
           if(dis[h][i][j] === -1) return -1; 
        }
    }
}
    return answer; 
}
const answer = solution(M,N,H,graph)
console.log(answer)