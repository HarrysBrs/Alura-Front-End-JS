const inputItem = document.getElementById("tarefas-novas")
const lista = document.getElementById("lista-toda")
const botaoEnviar = window.document.getElementById("enviar")

let contador = 0
botaoEnviar.addEventListener('click',(evento) => {
    evento.preventDefault();
    if(inputItem.value === ""){
        alert("Por favor, ensira algum valor para iniciar!")
        return
    };

    const itemDaLista = document.createElement("li");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "tarefa-pronta" + contador++

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    itemDaLista.appendChild(inputCheckbox);
    itemDaLista.appendChild(nomeItem);

    lista.appendChild(itemDaLista);
    console.log(inputItem.value);
})