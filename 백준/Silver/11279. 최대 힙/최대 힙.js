/** INSERT Algorithm: PUSH
 * 1. 원소를 맨 마지막에 삽입
 * 2. 부모 노드와 비교해 더 크다면 자리 변경
*/

/** EXTRACT Algorithm : POP
 * 1. 예외처리
 *    1-1. 배열이 비어있음 => 0 출력
 *    1-2. 비교할 자식 노드들이 없음 => 바로 pop
 * 2. 힙의 루트 노드를 저장 - returnValue
 * 3. 힙의 루트 노드를 추출하고, 힙의 마지막 원소를 루트의 위치로 변경
 * 4. 변경된 노드와 자식 노드들 비교 후 교체
*/

/** heap property 충족하기
 * 1. complete binary tree를 만족해야함
 *    => 왼쪽 자식 노드는 없고, 오른쪽 자식 노드가 있는 경우는 없음
 * 2. 부모 >= 자식
 */

/**
 * Heap의 표현
 * 루트 노드 : A[1]
 * A[i] 부모 : A[i/2]
 * A[i]의 왼쪽 자식 = A[2i]
 * A[i]의 오른쪽 자식 = A[2i+1]
 */

class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(a,b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
  }

  size(){
    return this.heap.length - 1;
  }

  isEmpty(){
    return this.size() === 0;
  }

  push(key) {
    this.heap.push(key);
    let curIdx = this.heap.length - 1;
    let parIdx = Math.floor(curIdx / 2);

    // max-heap에 맞게 제일 큰 노드를 트리의 <<최상단에 위치하도록>> 실행
    while (parIdx > 0 && this.heap[parIdx] < key) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    // 배열이 비어 있는 경우인데 가장 큰 값을 출력하라고 한 경우에는 0을 출력
    if (this.isEmpty()) {
      return 0;
    }
    
    // 비교할 자식 노드들이 없는 경우, 바로 pop
    if (this.size() === 1) {
      return this.heap.pop();
    }

    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 현재 노드와 자식 노드 비교 => <<자식이 더 클 경우 위치를 변경>>
    let curIdx = 1, leftIdx = 2, rightIdx = 3; // curIdx가 root인 경우를 위한, 값 초기화
    while (this.heap[leftIdx] !== undefined && (this.heap[curIdx] < this.heap[leftIdx] || this.heap[curIdx] < this.heap[rightIdx])) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.swap(curIdx, rightIdx);
        curIdx = rightIdx;
      } else {
        this.swap(curIdx, leftIdx);
        curIdx = leftIdx;
      }
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
    return returnValue;
  }
}

const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(filePath).toString().split("\n").map((el) => Number(el));

const N = input[0];
const operations = input.slice(1)

const output = new Heap();
let result = [];

for (let i = 0; i < N; i++) {
  const el = operations[i];
  if (el === 0) {
    const returnValue = output.size() === 0 ? 0 : output.pop()
    result.push(returnValue);
  } else if (Number.isInteger(el) && el > 0) {
    output.push(el)
  }
}

console.log(result.join('\n'))