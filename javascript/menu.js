const eventos = [
    { nome: "Menu",              pagina: "menu.html" },
    { nome: "Mural de Recados",  pagina: "mural.html" },
    { nome: "Aniversário Júlia", pagina: "pag03.html" },
    { nome: "Dia das Mulheres",  pagina: "pag01.html" },
    { nome: "Dia dos Namorados", pagina: "pag02.html" },
];

function criarMenu() {
    const menuHTML = `
        <div id="menu-flutuante">
            <button id="menu-hamburguer" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="menu-lista">
                ${eventos.map(e => `
                    <a href="${e.pagina}" class="${window.location.pathname.endsWith(e.pagina) ? 'ativo' : ''}">${e.nome}</a>
                `).join("")}
            </nav>
        </div>
    `;
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

function toggleMenu() {
    document.getElementById("menu-lista").classList.toggle("aberto");
    document.getElementById("menu-hamburguer").classList.toggle("ativo");
}

document.addEventListener("DOMContentLoaded", criarMenu);
document.addEventListener("click", (e) => {
    const menu = document.getElementById("menu-flutuante");
    if (menu && !menu.contains(e.target)) {
        document.getElementById("menu-lista")?.classList.remove("aberto");
        document.getElementById("menu-hamburguer")?.classList.remove("ativo");
    }
});