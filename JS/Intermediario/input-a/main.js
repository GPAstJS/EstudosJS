const button = document.getElementById("myBtn");
const input = document.getElementById("myInput");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const guardar = [];



function push() {
  guardar.push(input.value);
  console.log(guardar);
  input.value = ''

  if (guardar.length == 30) {
    div1.innerHTML = guardar

}
}