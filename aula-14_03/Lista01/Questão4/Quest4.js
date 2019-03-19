var n1 = parseFloat(window.prompt("Digite a nota 1"));
var n2 = parseFloat(window.prompt("Digite a nota 2"));
var n3 = parseFloat(window.prompt("Digite a nota 3"));
var n4 = parseFloat(window.prompt("Digite a nota 4"));

var media = (n1 + n2 + n3 + n4) /3;

window.alert("A média é : "+ media);

let nota = prompt("Digite sua nota");

nota = parseFloat(nota);

if (nota >= 7) {
    alert("APROVADO");
} else if (nota >= 5) {
    alert("RECUPERAÇÃO");
} else {
    alert("REPROVADO");
}
