const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const inputProfissao = document.getElementById('profissao')
const inputEmail = document.getElementById("email");
const inputSenha = document.getElementById("senha");




function enviar() {

  let lenEmail = inputEmail.value.length;
  let valEmail = inputEmail.value;

  let lenSenha = inputSenha.value.length;
  let valSenha = inputSenha.value;

  const idade = (inputIdade.value[0] + inputIdade.value[1] + inputIdade.value[2] + inputIdade.value[3] / 365)
  
  const registro = `\nNome: ${inputNome.value}\n Data de Nascimento: ${inputIdade.value}\n Profissão: ${inputProfissao.value}\n Email: ${inputEmail.value} \n Senha: ${inputSenha.value}`


  for (i = 0; i < lenEmail; i++) {
   if (
     valEmail[lenEmail - 1] == "m" &&
     valEmail[lenEmail - 2] == "o" &&
     valEmail[lenEmail - 3] == "c" &&
     valEmail[lenEmail - 4] == "." &&
     valSenha[0] != "1" &&
     valSenha[1] != "2" &&
     valSenha[2] != "3"
   ) {
     console.log(registro);
   } else {
     console.log("Alguma informação não está correta, verifique!");
   }
  }

  console.log(inputIdade)


  inputEmail.value = ''
  inputSenha.value = ''

  //   for (i = 0; i < lenSenha; i++) {
  //     if (
  //       valSenha[0] == "1" &&
  //       valSenha[1] == "2" &&
  //       valSenha[2] == "3"
  //     ) {
  //       console.log("real");
  //     } else console.log("fake");
  //   }

  //   let lenEmail = inputEmail.value.length;
  //   let valEmail = inputEmail.value;
}