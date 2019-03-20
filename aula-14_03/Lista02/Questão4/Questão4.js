let peso = parseFloat(prompt("Entre com o peso: "));

if(peso>50) {
    let excesso = peso - 50;

    let multa = excesso * 4;

    alert("A multa é: "+ multa);
}else{
    alert("Não tem multa");
}