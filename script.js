let form = document.getElementById("btnEntrar");
let email = document.getElementById("email").value;
form.addEventListener("click", entrar);

//Função entrar
function entrar (event) {
    event.preventDefault();
    console.log(email);
}