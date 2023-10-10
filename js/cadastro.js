const form = document.getElementById("form");
const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const nascimento = document.getElementById("nascimento");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const senhaConfirmacao = document.getElementById("senha-confirmacao");

nome.addEventListener("blur", () => {
    checkInputNome();
});

cpf.addEventListener("blur", () => {
    checkInputCPF();
});

nascimento.addEventListener("blur", () => {
    checkInputNascimento();
});

telefone.addEventListener("blur", () => {
    checkInputTelefone();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

senha.addEventListener("blur", () => {
    checkInputSenha();
});

senhaConfirmacao.addEventListener("blur", () => {
    checkInputSenhaConfirmacao();
});

function checkInputNome() {
    const nomeValue = nome.value;

    if (nomeValue === "") {
        errorInput(nome, "Campo nome é obrigatório!");
    } else {
        const formItem = nome.parentElement;
        formItem.className = "form-content";
    };
}

function checkInputCPF() {
    const cpfValue = cpf.value;

    if (cpfValue === "") {
        errorInput(cpf, "Campo CPF é obrigatório!");
    } else {
        const formItem = cpf.parentElement;
        formItem.className = "form-content";
    };
}

function checkInputNascimento() {
    const nascimentoValue = nascimento.value;

    if (nascimentoValue === "") {
        errorInput(nascimento, "Data de nascimento é obrigatório!")
    } else {
        const formItem = nascimento.parentElement;
        formItem.className = "form-content"
    };
}

function checkInputTelefone() {
    const telefoneValue = telefone.value;

    if (telefoneValue === "") {
        errorInput(telefone, "Campo telefone é obrigatório!")
    } else {
        const formItem = telefone.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Campo email é obrigatório!");
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    };
}

function checkInputSenha() {
    const senhaValue = senha.value;

    if (senhaValue === "") {
        errorInput(senha, "Campo senha é obrigatório!");
    } else if (senhaValue.length < 8) {
        errorInput(senha, "Senha precisa ter no mínimo 8 caracteres.");
    } else {
        const formItem = senha.parentElement;
        formItem.className = "form-content";
    };
}

function checkInputSenhaConfirmacao() {
    const senhaValue = senha.value;
    const senhaConfirmacaoValue = senhaConfirmacao.value;

    if (senhaConfirmacaoValue === "") {
        errorInput(senhaConfirmacao, "Confirmação de senha é obrigatório!");
    } else if (senhaConfirmacaoValue !== senhaValue) {
        errorInput(senhaConfirmacao, "As senhas são diferentes.");
    } else {
        const formItem = senhaConfirmacao.parentElement;
        formItem.className = "form-content";
    };
}

function checkForm() {
    checkInputNome();
    checkInputCPF();
    checkInputNascimento();
    checkInputTelefone();
    checkInputEmail();
    checkInputSenha();
    checkInputSenhaConfirmacao();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        cadastrar();
        alert("CADASTRADO COM SUCESSO");
        limpar();
    };
}

function errorInput(input, mensagem) {
    const formItem = input.parentElement;
    const textoMensagem = formItem.querySelector("a");

    textoMensagem.innerText = mensagem;

    formItem.className = "form-content error";
}

function cadastrar() {

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: nome.value,
                cpf: cpf.value,
                nascimento: nascimento.value,
                telefone: telefone.value,
                email: email.value,
                senha: senha.value
            })
        }
    )
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
};

function limpar() {
    nome.value = "";
    cpf.value = "";
    nascimento.value = "";
    telefone.value = "";
    email.value = "";
    senha.value = "";
    senhaConfirmacao.value = ""; 
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});