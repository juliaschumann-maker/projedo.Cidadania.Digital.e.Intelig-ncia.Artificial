function verificarResposta(escolheuErrado) {
    const resultado = document.getElementById("resultado");
    
    if (escolheuErrado) {
        resultado.innerText = "❌ Ops! Compartilhar sem checar espalha desinformação. Lembre-se que IAs podem criar conteúdos falsos muito realistas.";
        resultado.style.color = "#e63946";
    } else {
        resultado.innerText = "✅ Excelente! Um verdadeiro cidadão digital sempre desconfia de conteúdos alarmantes e checa as fontes antes de repassar.";
        resultado.style.color = "#2a9d8f";
    }
}
