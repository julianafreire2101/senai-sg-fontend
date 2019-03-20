let altura = parseFloat(prompt("Qual a sua altura: "));
let genero = String(prompt("Qual o seu genero: "));

let peso = 0;

if(genero == "Masculino"){

    peso = (72.7 * altura) - 58;
    
}else if(genero == "Feminino"){

    peso = (62.1 * altura) - 44.7;
}

alert(peso.toFixed(2));