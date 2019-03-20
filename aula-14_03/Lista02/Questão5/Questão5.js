let quantidadeHora = parseFloat(prompt("Quanto voce ganha por hora: "));
let horasTrabalhadas = parseFloat(prompt("Numeros de horas trabalhadas por mes: "));

let salarioB = (quantidadeHora * horasTrabalhadas);
let ir = (salarioB * 0.11);
let inss = (salarioB * 0.08);
let sindicato = (salarioB * 0.050);
let salarioL = (salarioB - ir - inss - sindicato);

alert("+ Salario Bruto : R$"+salarioB+"\n-IR (11%) : R$"+ir+"\n-INSS (8%) : R$"+inss+"\n-Sindicato (5%) : R$"+sindicato+"\n=Salario Liquido : R$"+salarioL);