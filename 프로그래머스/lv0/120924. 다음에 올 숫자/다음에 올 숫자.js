const solution = (common) => {
    let d, r;
    if (common[1] - common[0] == common[2] - common[1]) { 
        d = common[1] - common[0]
        return common[0] + common.length * d
    } else { 
        r = Number(common[1]/common[0])
        return common[0] * (r ** common.length)
    }
}
