const solution = (nums) => {
    const choice = nums.length/2,
          nDupCnt = new Set(nums).size
    return nDupCnt >= choice ? choice : nDupCnt
}