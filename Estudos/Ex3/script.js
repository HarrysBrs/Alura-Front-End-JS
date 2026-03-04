const entradaEsferas = document.getElementById("entr-esferas");
const listaDeEsferas = document.getElementById("lista-de-esferas");
const botaoGuardar = window.document.getElementById("guardar");

let esferasColetadas = []; 

botaoGuardar.addEventListener("click", (evento) => {
    evento.preventDefault();
    if(entradaEsferas.value === "") {
        alert("Por favor, insira um nº válido de esfera")
        return
    }
    const valor = entradaEsferas.value;

        if(esferasColetadas.includes(valor)) {
            alert(`Você já possui a esfera de ${valor} estrelas!`)
            return
        }

        esferasColetadas.push(valor)

    /*const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("esferas-do-Dragão")*/
    const itemDaLista = document.createElement("li");
    const imagemEsfera = document.createElement("img")
    imagemEsfera.src = `/Estudos/Ex3/img/esfera-${entradaEsferas.value}n.png`;

    itemDaLista.appendChild(imagemEsfera);
    listaDeEsferas.appendChild(itemDaLista);

    entradaEsferas.value = ""
})