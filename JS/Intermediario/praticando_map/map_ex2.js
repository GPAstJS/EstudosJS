const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const map = arr.map( (e, i) => {
return {
    indice: i, 
    valor: `Casa: ${e}`
}
})
    
console.log(map)