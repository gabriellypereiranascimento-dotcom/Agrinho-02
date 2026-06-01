const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagemInterativa");

botao.addEventListener("click", () => {
    // Muda a cor do botão aleatoriamente
    const cores = ["#4caf50", "#2e8b57", "#8bc34a", "#6b8e23"];
    botao.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];

    // Exibe mensagem interativa
    mensagem.textContent = "🌎 A sustentabilidade protege o meio ambiente e garante um futuro próspero para todos!";
});
