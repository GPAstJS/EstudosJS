function calculate() {
  let height = (document.getElementById("userHeight").value / 100);
  let weight = document.getElementById("userWeight").value;
  const bmiInfo = document.getElementById("bmiText")

  const userBMI =  (weight / height ** 2).toFixed(2);

  console.log(Math.round(userBMI))

  if(userBMI < 18.5) {
    bmiInfo.innerText = `${userBMI} - Underweight`
    bmiInfo.style.color = '#171717'
  } else if(userBMI < 24.99) {
    bmiInfo.innerText = `${userBMI} - Normal`
    bmiInfo.style.color = '#54D269'
  } else if (userBMI < 29.99) {
    bmiInfo.innerText = `${userBMI} - Overweight`
    bmiInfo.style.color =  '#E9DA33'
  } else if(userBMI < 39.99) {
    bmiInfo.innerText = `${userBMI} - Obese`
    bmiInfo.style.color = '#F76620'
    } else if(userBMI > 39.99) {
        bmiInfo.innerText = `${userBMI} - Extremely Obese`
        bmiInfo.style.color = "#F14B52"
    }

    height = ""
    weight = ""
}
