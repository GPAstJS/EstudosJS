const input = document.getElementById('guessInput')
const button = document.getElementById('tryWordUser')
const label = document.getElementById('wordLabel')

const word = 'bolacha'

function tryWord() {
    for(i = 0; i < word.length; i++) {
        if(input.value == word[i]) {
            label.innerText = label.innerText + input.value
        } else null
    }
}