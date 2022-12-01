// armazenando os botoes

const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');

// armazenando os headings pa

const h2tag = document.getElementsByClassName('h2tag')
const h4tag = document.getElementsByClassName('h4tag');




async function Api() {
    const response = await fetch('http://localhost:3000/data')
  
    const data = await response.json();
  
    console.log('Retorno do Fetch: ', data);
  
    return data;
  }
  
   const data = Api();
   console.log(data )


   dailyBtn.addEventListener('click', (e) => {

    const dailyLetras = ['a', 'b', 'c', 'd', 'e', 'f']
    const dailyNumbers = ['1', '2', '3', '4', '5', '6' ]

    for(i = 0; i < h2tag.length; i++) {
        h2tag[i].innerHTML = dailyLetras[i]
    }

    for(j = 0; j < h4tag.length; j++) {
        h4tag[j].innerHTML = dailyNumbers[j]  
    }
})

weeklyBtn.addEventListener('click', (e) => {

        
    const weeklyLetras = ['g', 'h', 'i', 'j', 'k', 'l']
    const weeklyNumbers = ['7', '8', '9', '10', '11', '12']

    for(i = 0; i < h2tag.length; i++) {
        h2tag[i].innerHTML = weeklyLetras[i]
    }

    for(j = 0; j < h4tag.length; j++) {
        h4tag[j].innerHTML = weeklyNumbers[j]  
    }
})

monthlyBtn.addEventListener('click', (e) => {
    const monthlyLetras = ['m', 'n', 'o', 'p', 'q', 'r']
    const monthlyNumbers = ['13','14','15','16','17', '18']

    for(i = 0; i < h2tag.length; i++) {
        h2tag[i].innerHTML = monthlyLetras[i]
    }

    for(j = 0; j < h4tag.length; j++) {
        h4tag[j].innerHTML = monthlyNumbers[j]  
    }
})


