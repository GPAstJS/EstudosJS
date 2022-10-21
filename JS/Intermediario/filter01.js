const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
    {nome: 'Impressora', preco: 5000, fragil: true},
    {nome: 'Ouro 24KG', preco: 30000, fragil: false}
]

//parametros acima de 500 reais e caros, estarão na lista final, resto será excluido;
const caro = produtos => produtos.preco >= 500

const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))