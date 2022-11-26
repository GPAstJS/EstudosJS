const arr = ['aosisho', 1, 2, 3412, 12, '2312,', 1, '1231', ''];

const arrayFiltred = arr.filter( (e) => {
    if(e === '') {
        return false
    } else if (typeof e === 'string' && e.split(',')[1] ) {
        return false
    } else return true
})

console.log(arrayFiltred)