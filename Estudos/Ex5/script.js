const botaoEnviar = window.document.getElementById("enviar");
const pai = document.querySelector(".playlist");
console.log(pai);

botaoEnviar.addEventListener('click', function(evento){
    evento.preventDefault();
    pai.classList.add('layout-final');
})












const inputNomeMusica = document.getElementById("musica-nova")
const inputNomeBanda = document.getElementById("nome-banda")
const inputImagemBanda = document.getElementById("avatar")


/*let contador = 0
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
}) */