// uso e casos do map

    // · quando vamos fazer o uso do map, geralmente queremos manipular uma informaçao de um array com alguns dados a mais ou a menos
    // ele nao retira o uso do for e nem de outros loops como o while e doWhile, a diferença, e que vai ser muito usado 
    // quando estiver fazendo sites que usem HTTP e sistemas de respostas, por ser leve e otimzado para tal.


    // sua sintaxe, e simples e segue o mesmo intuito de um callback,
    
    //Chamada
        // () => {}

    //Resposta
        // return etc....

    //Logo, temos que para usar, **DEVE SER UM ARRAY**

    // array.map( ( elemento, indice, array) => { o que se for fazer aqui... } )

    //Temos:
    //Elemento sendo o que esta sendo iterado no momento
    // indice, e o ponto on de o map esta
    // array e o array todo


    //Por padrao, todo map retonra um array como resultado final


    // metodo .map() é uma função que contém um callback que retorna um array pq eu to mexendo com array

 
const arr = [
  { nome: "andre", idade: 5 },
  { nome: "joao", idade: 19 },
  { nome: "pedro", idade: 20 },
  { nome: "tamara", idade: 114132 },
  { nome: "Guilherme", idade: 9 },
  { nome: "sicrano", idade: 3 },
];

const newArr = arr.map( (elemento) => elemento.idade >= 15 ? elemento : false )

console.log(newArr);



// como o map trabalha:
// function Map( arr, callback ) {

//     const arrayInterno = []

//     for( i = 0; i < arr.length; i++ ) {

//         arrayInterno.push(
            
//             callback( arr[i], i, arr )
            
//         )

//     }

//     return arrayInterno
// }