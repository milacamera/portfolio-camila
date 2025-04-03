// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona os botões do portfólio (todos os que têm a classe 'botao-projeto')
    let botoesProjeto = document.querySelectorAll(".botao-projeto");

    // Adiciona um evento de 'hover' (passar o mouse) para cada botão
    botoesProjeto.forEach(botao => {
        botao.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)"; // Aumenta o tamanho do botão ao passar o mouse
            this.style.transition = "transform 0.2s ease";
        });

        botao.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)"; // Volta ao tamanho original ao retirar o mouse
        });
    });

    // Seleciona os campos do formulário de contato
    let inputsContato = document.querySelectorAll("#contato input, #contato textarea");

    // Adiciona um efeito de destaque ao focar no campo de contato
    inputsContato.forEach(input => {
        input.addEventListener("focus", function () {
            this.style.border = "2px solid #FFAAA5"; // Adiciona uma borda mais destacada ao clicar
        });

        input.addEventListener("blur", function () {
            this.style.border = "1px solid #ccc"; // Retorna à borda padrão ao sair do campo
        });
    });

    // Seleciona todas as seções para adicionar uma animação ao entrar na tela
    let secoes = document.querySelectorAll("section");

    function verificarScroll() {
        let alturaJanela = window.innerHeight;

        secoes.forEach(secao => {
            let posicao = secao.getBoundingClientRect().top;

            if (posicao < alturaJanela - 50) {
                secao.style.opacity = 1; // Torna a seção visível
                secao.style.transform = "translateY(0)";
                secao.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            }
        });
    }

    // Executa a função quando a página é carregada e ao rolar a tela
    verificarScroll();
    window.addEventListener("scroll", verificarScroll);
});
