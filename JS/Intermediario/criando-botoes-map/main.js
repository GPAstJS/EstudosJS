const arrNomes = ['Guilherme', 'Tamara', 'João', 'Samuel', 'Einstein']; 


const mapArray = arrNomes.map( (element) => {
    const createButton = document.createElement('button');
    document.body.appendChild(createButton)
    createButton.textContent = element

    document.body.style.height = '100vh'
    document.body.style.display = 'flex'
    document.body.style.alignItems = 'center'
    document.body.style.justifyContent = 'center'
    document.body.style.flexDirection = 'row'

    createButton.style.margin = '10px'
    createButton.style.border = '1px solid gold'
    createButton.style.backgroundColor = 'gold'
    createButton.style.borderRadius = '100px'
    createButton.style.height = '100px'
    createButton.style.width = '100px'

    createButton.onclick = () => {
        alert(`Muito prazer, meu nome é: ${createButton.textContent}`)
    }

})

for(i = 0; i < mapArray.length; i++) {
    mapArray[i]
}


console.log(`Antigo Array: ${arrNomes}\nNovo Array: ${mapArray}`)