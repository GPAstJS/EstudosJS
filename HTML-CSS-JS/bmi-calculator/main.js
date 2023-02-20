function calculate() {
  let height = document.getElementById("userHeight").value / 100;
  let weight = document.getElementById("userWeight").value;
  const bmiInfo = document.getElementById("bmiText")

  const userBMI =  weight / height ** 2;

  console.log(userBMI)

  if(userBMI < 18.5) {
    bmiInfo.innerText = "Você está magro!"
  } else if(userBMI < 24.99) {
    bmiInfo.innerText = "Você está normal!"
  } else if (userBMI < 29.99) {
    bmiInfo.innerText = "Você está com sobrepeso!"
  } else if(userBMI < 39.99) {
    bmiInfo.innerText = "Você está obeso!"
    } else if(userBMI > 39.99) {
        bmiInfo.innerText = "Você está com obesidade mórbida!"
    }

    height = ""
    weight = ""
}
