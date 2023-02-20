const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  const currentTime = new Date();

  let hh = currentTime.getHours();
  let mm = currentTime.getMinutes();
  let ss = currentTime.getSeconds();

  if (hh < 10) {
    hh = `0${hh}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }

  if (ss < 10) {
    ss = `0${ss}`;
  }

  hours.innerText = hh;
  minutes.innerText = mm;
  seconds.innerText = ss;
}, 1000);
