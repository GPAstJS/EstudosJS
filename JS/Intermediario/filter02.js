Array.prototype.filter2 = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.99, fragil: false },
  { nome: "Impressora", preco: 5000, fragil: true },
  { nome: "Ouro 24KG", preco: 30000, fragil: false },
];

//parametros acima de 500 reais e caros, estarão na lista final, resto será excluido;
const caro = produto => produto.preco >= 500;

const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
