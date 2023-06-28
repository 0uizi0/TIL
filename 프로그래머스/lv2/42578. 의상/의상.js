const solution = (clothes) => {
    let result = 1, kH = new Map();
    
    clothes.forEach((clothe) => {
        let [c,k] = clothe
        kH.set(k, (kH.get(k) || 0) + 1)
    })
    
    for (const [key, value] of kH) {
        result *= value + 1;
    }
    
    return result - 1
}