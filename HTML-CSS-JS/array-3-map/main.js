const arrayOriginal = ['a', 'b', 'c']
const arrayModificado = []

const array_1 = arrayOriginal.map( (e) => 1);
const array_2 = arrayOriginal.map( (e) => 2);
const array_3 = arrayOriginal.map( (e) => 3);

// const array_filtrado = array_1.filter( (el, i) => {
//     if (i == 0) {
//         return false
//     } else {
//         return true
//     }
// })

const mapNum1 = arrayOriginal.map( (el, i) => i == 0 ? 1 : el )

const mapNum2 = arrayOriginal.map( (el, i) =>  i == 1 ? 2 : el)

const mapNum3 = arrayOriginal.map( (el, i) => i == 2 ? 3 : el)

console.log(mapNum1)
console.log(mapNum2)
console.log(mapNum3)S



