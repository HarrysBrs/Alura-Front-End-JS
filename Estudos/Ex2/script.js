
window.addEventListener("click", (evento) =>{
    console.log(evento)
    const x = evento.clientX
    const y = evento.clientY
    console.log(`A localização do seu click foi em X:${x} E Y${y}.`)

document.body.style.backgroundColor = "blue"

    alert(`A localização do seu click foi em X:${x} E Y${y}.`)
})