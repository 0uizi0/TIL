const solution = (babbling) => {
    let result = 0
    const checkedArr = babbling.map((el) => 
        el.replace('aya',' ').replace('ye',' ').replace('woo',' ').replace('ma', ' ').trim('')
    )
    for (let i of checkedArr) {
        if (i.length == 0) result += 1
    }
    return result
}