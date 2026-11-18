const eventos = [
    { nome: "Menu Principal",    icone: "✨", pagina: "menu.html" },
    { nome: "Mural de Recados",  icone: "💌", pagina: "mural.html" },
    { nome: "Dia das Mulheres",  icone: "🌹", pagina: "pag01.html" },
    { nome: "Dia dos Namorados", icone: "💕", pagina: "pag02.html" },
    { nome: "Aniversário Júlia", icone: "🎂", pagina: "pag03.html" },
    { nome: "Primeiro Ano",      icone: "❤️", pagina: "pag04.html" },
];

function criarMenu() {
    if (document.getElementById("menu-flutuante")) return;

    const paginaAtual = window.location.pathname.split("/").pop() || "menu.html";

    const menuHTML = `
        <div id="menu-flutuante">
            <button id="menu-hamburguer" onclick="toggleMenu()" aria-label="Abrir menu de navegação" title="Navegação rápida">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="menu-lista">
                ${eventos.map(e => {
                    const isAtivo = paginaAtual === e.pagina;
                    return `
                        <a href="${e.pagina}" class="${isAtivo ? 'ativo' : ''}">
                            <span class="menu-icon">${e.icone}</span>
                            <span class="menu-text">${e.nome}</span>
                        </a>
                    `;
                }).join("")}
            </nav>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

function toggleMenu() {
    const lista = document.getElementById("menu-lista");
    const botao = document.getElementById("menu-hamburguer");
    if (lista && botao) {
        lista.classList.toggle("aberto");
        botao.classList.toggle("ativo");
    }
}

document.addEventListener("DOMContentLoaded", criarMenu);

document.addEventListener("click", (e) => {
    const menu = document.getElementById("menu-flutuante");
    if (menu && !menu.contains(e.target)) {
        document.getElementById("menu-lista")?.classList.remove("aberto");
        document.getElementById("menu-hamburguer")?.classList.remove("ativo");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.getElementById("menu-lista")?.classList.remove("aberto");
        document.getElementById("menu-hamburguer")?.classList.remove("ativo");
    }
});
