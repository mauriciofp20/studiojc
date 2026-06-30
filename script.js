let agendamentos = [];

const hoje = new Date().toISOString().split("T")[0];

document.getElementById("data").min = hoje;


let dadosSalvos = localStorage.getItem("agendamentos");

if (dadosSalvos) {
    
    agendamentos = JSON.parse(dadosSalvos);

}

    window.onload = function () {
    mostrarAgendamentos(agendamentos);
    };

    function mostrarAgendamentos(lista) {

    let texto = "";

    for (let i = 0; i < lista.length; i++) {

        texto += "Cliente: " + lista[i].cliente + "<br>";
        texto += "Data: " + lista[i].data + "<br>";
        texto += "Horário: " + lista[i].horario + "<br>";
        texto += "Serviço: " + lista[i].servico + "<br>";
        texto += "<hr>";

    }

    document.getElementById("listaAgendamentos").innerHTML = texto;

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


mostrarAgendamentos(agendamentos);

document.getElementById("cliente").value = "";
document.getElementById("data").value = "";
document.getElementById("horario").value = "";
document.getElementById("servico").value = "";
}

function mostrarHoje() {
    let hojeLista = [];

    for (let i = 0; i < agendamentos.length; i++) {
        
        if (agendamentos[i].data === hoje) {

        hojeLista.push(agendamentos[i]);

        }
    }

    mostrarAgendamentos(hojeLista);

}

function mostrarProximos() {
   let proxLista = [];

   for (let i = 0; i < agendamentos.length; i++) {
    if (agendamentos[i].data > hoje) {
        proxLista.push(agendamentos[i]);
    }
   }
   mostrarAgendamentos(proxLista);
}



function mostrarHistorico() {
    let histLista = [];

    for (let i = 0; i < agendamentos.length; i++) {
        if (agendamentos[i].data < hoje) {
            histLista.push(agendamentos[i]);
        }
    }
    mostrarAgendamentos(histLista);
}

    