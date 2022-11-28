const arr = ['yes', 'sim', 'nop', 'false', 'error', 'true', 'exists', 'nothing', 'never', 'online']

const filter = arr.filter( (e, i) => {
    if (e == 'nop') {
        return false
    } else if (e == 'false') {
        return false
    } else if (e == 'error') {
        return false
    } else if (e == 'nothing') {
        return false
    } else if (e == 'never') {
        return false
    } else return true
} )


const filter = arr.filter( (e, i) => i == 2 || i == 3 || i == 4 || i == 7 || i == 8 ? false : true )

console.log(filter);