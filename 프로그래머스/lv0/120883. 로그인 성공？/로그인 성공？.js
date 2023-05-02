const solution = (id_pw, db) => {
    const idCheck = db.filter((el) => el[0] == id_pw[0])
    if (idCheck.length == 0) return 'fail'
    
    const pwCheck = idCheck.filter((el) => el[1] == id_pw[1])
    if (pwCheck.length == 0) return 'wrong pw'
    return 'login'
}