
function qtd_linhas() {
    let funcionarios = document.getElementById("tabela_funcionarios");
    let qtd = funcionarios.getElementsByTagName("tr").length;
    return qtd;
}

function limpar_formulario() {
    document.getElementById("")
}

function inserir_funcionarios() {
let nome = document.getElementById("nome").nodeValue;
let idade = document.getElementById("idade").nodeValue;
let sexo = "a definir";
if(document.getElementById("masculino").checked) {
    sexo ="Masculino";
}else{
    sexo = "Feminino";
}
adicionar_tabela(nome, sexo, idade);
limpar_formulario();
}

function adicionar_tabela(nome, sexo, idade) {
    let table = document.getElementById("tabela_funcionarios");
    let linha = tabela.insertRow(qtd_linhas());

    let td_nome = linha.insertcell(0);
    let td_sexo = linha.insertcell(1);
    let td_idade = linha.insertcell(2);

    td_nome.innertHTML = nome;
    td_sexo.innertHTML = sexo;
    td_idade.innertHTML = idade;
}