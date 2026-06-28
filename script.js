let agendamentos = [];

const hoje = new Date().toISOString().split("T")[0];

document.getElementById("data").min = hoje;


let dadosSalvos = localStorage.getItem("agendamentos");

if (dadosSalvos) {
    agendamentos = JSON.parse(dadosSalvos);

    let texto = "";

    for (let i = 0; i < agendamentos.length; i++) {
        texto += "Cliente: " + agendamentos[i].cliente + "<br>";
        texto += "Data: " + agendamentos[i].data + "<br>";
        texto += "Horário: " + agendamentos[i].horario + "<br>";
        texto += "Serviço: " + agendamentos[i].servico + "<br>";
        texto += "<hr>";
    }

    window.onload = function () {
        document.getElementById("listaAgendamentos").innerHTML = texto;
    };
}


function agendar() {

let cliente = document.getElementById("cliente").value;
let data = document.getElementById("data").value;
let horario = document.getElementById("horario").value;
let servico = document.getElementById("servico").value;

if (cliente === "") {
    alert("Falta o nome da cliente");
    return;
} else if (data === "") {
    alert("Falta a data")
    return
} else if (horario === "") {
    alert("Falta o horário")
    return
} else if (servico === "") {
    alert("Escolha o serviço")
    return
}

for (let i = 0; i < agendamentos.length; i++) {

if (data === agendamentos[i].data &&
    horario === agendamentos[i].horario
) {
    alert("Esse horário ja está ocupado");
    return;
}

}

let novoAgendamento = {
    cliente,
    data,
    horario,
    servico

};

agendamentos.push(novoAgendamento);


localStorage.setItem("agendamentos", JSON.stringify(agendamentos));


let texto = "";

for (let i = 0; i < agendamentos.length; i++) {
    texto += "Cliente: " + agendamentos[i].cliente + "<br>";
    texto += "Data: " + agendamentos[i].data + "<br>";
    texto += "Horário: " + agendamentos[i].horario + "<br>";
    texto += "Serviço: " + agendamentos[i].servico + "<br>";
    texto += "<hr>";
}

document.getElementById("listaAgendamentos").innerHTML = texto;

document.getElementById("cliente").value = "";
document.getElementById("data").value = "";
document.getElementById("horario").value = "";
document.getElementById("servico").value = "";
}