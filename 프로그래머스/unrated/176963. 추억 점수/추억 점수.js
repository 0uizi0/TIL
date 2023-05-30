const solution = (name, yearning, photo) => {
    const result = [], myYearning = new Object()
    name.forEach((el)=> myYearning[el] = yearning[name.indexOf(el)])
    for (let i = 0 ; i < photo.length; i++) {
        let score = 0;
        photo[i].forEach((el)=>{
            score += Object.keys(myYearning).includes(el) ? myYearning[el] : 0
        })
        result.push(score)
    }
    return result
}