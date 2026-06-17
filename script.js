// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: ACESSIBILIDADE (MODO ESCURO) ---
    const themeButton = document.getElementById("toggle-theme");
    
    // Captura a preferência salva no navegador do usuário (se houver)
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    themeButton.addEventListener("click", () => {
        // Altera dinamicamente o atributo do tema usando condicional
        let theme = document.documentElement.getAttribute("data-theme");
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
    });

    // --- FUNCIONALIDADE 2: VALIDADOR DE REPOSTAS DO QUIZ ---
    const quizForm = document.getElementById("quiz-form");
    const feedbackBox = document.getElementById("quiz-feedback");

    quizForm.addEventListener("submit", (event) => {
        // Impede o recarregamento automático da página ao enviar o formulário
        event.preventDefault();

        // Armazena a opção selecionada utilizando variáveis
        const selectedOption = quizForm.querySelector('input[name="quiz-answer"]:checked');
        
        // Limpa classes anteriores para evitar bugs visuais
        feedbackBox.className = "feedback-box";

        // Processa a informação e manipula dinamicamente o DOM com mensagens customizadas
        if (selectedOption.value === "correta") {
            feedbackBox.textContent = "✓ Excelente! Checar informações com fontes confiáveis e agências de checagem é a melhor forma de combater deepfakes e desinformação.";
            feedbackBox.classList.add("success");
        } else {
            feedbackBox.textContent = "✕ Atenção! Compartilhar sem checar ou acreditar imediatamente ajuda a propagar a desinformação automatizada gerada por IA.";
            feedbackBox.classList.add("error");
        }

        // Exibe o feedback removendo a classe hidden
        feedbackBox.classList.remove("hidden");
    });
});
