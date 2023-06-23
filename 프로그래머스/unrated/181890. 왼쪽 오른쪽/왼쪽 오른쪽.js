const slice_left = (arr) => {
    return arr.slice(0, arr.indexOf('l'))
}

const slice_right = (arr) => {
    return arr.slice(arr.indexOf('r') + 1)
}

const solution = (str_list) => {
    const pos_l = str_list.indexOf('l'), pos_r = str_list.indexOf('r');
    
    if (str_list.includes('r') && str_list.includes('l')) {
        return pos_l < pos_r ? slice_left(str_list) : slice_right(str_list)
    } else if (str_list.includes('l') && !str_list.includes('r')) {
        return slice_left(str_list)
    } else if (str_list.includes('r') && !str_list.includes('l')) {
        return slice_right(str_list)
    } else {
        return []
    }
}

