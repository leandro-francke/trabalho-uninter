let button = document.querySelector("#button");
let message = document.querySelector("#msg")
button.addEventListener('click', mostrarMensagem);

function mostrarMensagem() {
    message.innerHTML = "To C or not to C, <br>That is the question.";
}
