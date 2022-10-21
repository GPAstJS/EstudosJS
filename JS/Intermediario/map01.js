// faça uma conta com dada valor dentro do array 1º

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.map( (somar) => somar + 1)

console.log(newArr)

// Faça uma array com valores boleanos e manda sim para true e nao para false 2º

const arr2 = [true, false, false, true, true, false]

const newArr2 = arr2.map( ( boolean ) => boolean ? 'sim' : 'não' )

console.log(newArr2)

// Faça um array com strings e verifique: se a string for maior que 10 mande 'maior que 10' se nao 'menor que 10' 3º

const arr3 = ['guilherme', 'joão', 'paralelepipedo', 'stranger things', 'até o ultimo homem', 'top gun: maverick', 'rambo III'];

const newArr3 = arr3.map( ( comprimento ) => comprimento.length >= 10 ? 'maior que 10' : 'menor que 10' );

console.log(newArr3);