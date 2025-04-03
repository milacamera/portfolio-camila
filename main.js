document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Todos os campos devem ser preenchidos.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
});