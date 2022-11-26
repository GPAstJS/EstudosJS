const arr = [123123, 31234131, 12121222131231];

const filter = arr.filter( (e, i) => e.toString().length > 6 ? false : true)

console.log(filter)