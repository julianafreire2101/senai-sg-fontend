let metros = parseFloat(prompt("Digite o tamanho de metros quadrados: "));
let qtd_tintas = (metros / 3);
let qtd_latas = (qtd_tintas / 18);
let preco = (qtd_latas * 80);

alert("A quantidade de latas de tinta é: "+qtd_latas.toFixed(0)+"\nA quantidade de tintas é: "+qtd_tintas.toFixed(0)+"\nO preço total é: "+preco.toFixed(2));