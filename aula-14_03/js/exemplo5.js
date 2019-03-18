let nota = prompt("Digite sua nota");

nota = parseFloat(nota);

if (nota >= 7) {
    alert("Aprovado");
} else if (nota >= 5) {
    alert("Recuperação");
} else {
    alert("Reprovado");
}
