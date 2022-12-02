// armazenando os botoes

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");

// armazenando os headings pa

const h2tag = document.getElementsByClassName("h2tag");
const h4tag = document.getElementsByClassName("h4tag");

async function Api() {
  const response = await fetch("http://localhost:3000/data");

  const data = await response.json();

  dailyBtn.addEventListener("click", (e) => {
    for(i = 0; i < data.length; i++) {
      h2tag[i].innerHTML = `${data[i].timeframes.daily.current}hrs`
      h4tag[i].innerHTML = `Previous - ${data[i].timeframes.daily.previous}hrs`
    }
  });

  weeklyBtn.addEventListener('click', (e) => {
    for(i = 0; i < data.length; i++) {
      h2tag[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
      h4tag[i].innerHTML = `Previous - ${data[i].timeframes.weekly.previous}hrs`
    }
  })

  monthlyBtn.addEventListener('click', (e) => {
    for(i = 0; i < data.length; i++) {
      h2tag[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
      h4tag[i].innerHTML = `Previous - ${data[i].timeframes.monthly.previous}hrs`
    }
  })

}

Api();
