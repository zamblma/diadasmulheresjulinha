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
        <div id="menu-backdrop" onclick="fecharMenu()"></div>
        <div id="menu-flutuante">
            <button id="menu-hamburguer" onclick="toggleMenu()" aria-label="Abrir menu de navegação" aria-expanded="false" title="Navegação rápida">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="menu-lista" aria-label="Menu principal">
                <div class="menu-cabecalho">Nossa História</div>
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
    const backdrop = document.getElementById("menu-backdrop");
    if (!lista || !botao) return;

    const aberto = lista.classList.toggle("aberto");
    botao.classList.toggle("ativo", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
    backdrop?.classList.toggle("aberto", aberto);
}

function fecharMenu() {
    const lista = document.getElementById("menu-lista");
    const botao = document.getElementById("menu-hamburguer");
    const backdrop = document.getElementById("menu-backdrop");
    lista?.classList.remove("aberto");
    botao?.classList.remove("ativo");
    botao?.setAttribute("aria-expanded", "false");
    backdrop?.classList.remove("aberto");
}

document.addEventListener("DOMContentLoaded", criarMenu);

document.addEventListener("click", (e) => {
    const menu = document.getElementById("menu-flutuante");
    if (menu && !menu.contains(e.target)) {
        fecharMenu();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharMenu();
    }
});
