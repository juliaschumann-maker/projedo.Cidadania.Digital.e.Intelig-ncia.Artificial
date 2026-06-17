/* Definição de Variáveis de Cores (Paleta Tech/Segurança) */
:root {
    --bg-color: #f4f6f9;
    --card-bg: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --accent-color: #2563eb;
    --accent-hover: #1d4ed8;
    --border-color: #e2e8f0;
    --success-color: #10b981;
    --error-color: #ef4444;
    --transition-speed: 0.3s;
}

/* Variáveis para o Modo Escuro */
[data-theme="dark"] {
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    --text-primary: #f8fafc;
    --text-secondary: #cbd5e1;
    --accent-color: #3b82f6;
    --accent-hover: #60a5fa;
    --border-color: #334155;
}

/* Reset Básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-primary);
    line-height: 1.6;
    transition: background-color var(--transition-speed), color var(--transition-speed);
}

/* Cabeçalho */
.main-header {
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-theme {
    background: none;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: all var(--transition-speed) ease;
}

.btn-theme:hover {
    background-color: var(--accent-color);
    color: #ffffff;
}

/* Layout do Conteúdo */
.content-container {
    max-width: 1100px;
    margin: 2rem auto;
    padding: 0 1rem;
}

section {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
}

h2 {
    color: var(--accent-color);
    margin-bottom: 1rem;
}

/* Grid de Cards (Flexbox) */
.cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.card {
    flex: 1 1 calc(33.333% - 1.5rem);
    background-color: var(--bg-color);
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid var(--accent-color);
    transition: transform var(--transition-speed);
}

.card:hover {
    transform: translateY(-5px);
}

/* Formulário e Interatividade */
.interactive-form fieldset {
    border: none;
    margin: 1.5rem 0;
}

.radio-label {
    display: block;
    background-color: var(--bg-color);
    padding: 1rem;
    margin-bottom: 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid var(--border-color);
    transition: background-color 0.2s;
}

.radio-label:hover {
    background-color: var(--border-color);
}

.radio-label input {
    margin-right: 10px;
}

.btn-submit {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color var(--transition-speed);
}

.btn-submit:hover {
    background-color: var(--accent-hover);
}

/* Box de Feedback */
.feedback-box {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 6px;
    font-weight: bold;
}

.feedback-box.success {
    background-color: rgba(16, 185, 129, 0.15);
    color: var(--success-color);
    border: 1px solid var(--success-color);
}

.feedback-box.error {
    background-color: rgba(239, 68, 68, 0.15);
    color: var(--error-color);
    border: 1px solid var(--error-color);
}

.hidden {
    display: none;
}

/* Rodapé */
.main-footer {
    text-align: center;
    padding: 2rem;
    background-color: var(--card-bg);
    color: var(--text-secondary);
    border-top: 1px solid var(--border-color);
    font-size: 0.9rem;
}

/* 4. Responsividade - Media Queries (Essencial para Nível 4) */
@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .cards-grid {
        flex-direction: column;
    }

    .card {
        flex: 1 1 100%;
    }
}
