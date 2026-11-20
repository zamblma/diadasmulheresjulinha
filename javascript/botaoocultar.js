function toggleMensagem() {
    const msg = document.getElementById("mensagem");
    const btn = document.querySelector(".toggle-btn");

    if (!msg || !btn) return;

    const oculto = msg.classList.toggle("hidden");
    document.body.classList.toggle("modo-foto", oculto);

    if (oculto) {
        btn.innerHTML = "<span>📖 Ver carta</span>";
        btn.classList.add("ativo");
    } else {
        btn.innerHTML = "<span>🖼️ Ver foto</span>";
        btn.classList.remove("ativo");
    }
}
