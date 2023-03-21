function calcular(){
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resultado = document.getElementById("resultado");

  //Calculo do IMC
  if (altura !== "" && peso !== "") {
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = "";
    if (imc < 18.5) {
      mensagem = "Magreza";
    } else if (imc > 18.5 && imc <= 24.99) {
      mensagem = "Normal";
    } else if (imc > 25 && imc <= 29.99) {
      mensagem = "Sobrepeso";
    } else if (imc > 30 && imc <= 34.99) {
      mensagem = "Obesidade grau I";
    } else if (imc > 35 && imc <= 39.99) {
      mensagem = "Obesidade grau II";
    } else if (imc >= 40) {
      mensagem = "Obesidade grau III";
    }
    resultado.value = `Seu IMC é ${imc}! ${mensagem}`;
  } else {
    resultado.value = "Preencha todos os campos!!!";
  }
}
//Faz com que o usuario possa usar o enter para ativar o botão de calcular
document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    
    }
  });
function limpar(){
  document.getElementById("peso").value = '';
  document.getElementById("altura").value = '';
  document.getElementById("resultado").value = '';
}