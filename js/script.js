const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Icpf = document.querySelector(".cpf");
const Inascimento = document.querySelector(".nascimento");
const Itelefone = document.querySelector(".telefone");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");

function cadastrar() {

    fetch("http://localhost:8080/usuarios", {
        headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            cpf: Icpf.value,
            nascimento: Inascimento.value,
            telefone: Itelefone.value,
            email: Iemail.value,
            senha: Isenha.value
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
});