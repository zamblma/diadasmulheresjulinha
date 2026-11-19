function toggleMensagem() {
    const msg = document.getElementById("mensagem");
    const btn = document.querySelector(".toggle-btn");

    if (!msg || !btn) return;

    msg.classList.toggle("hidden");
    document.body.classList.toggle("modo-foto", msg.classList.contains("hidden"));

    if (msg.classList.contains("hidden")) {
        btn.innerHTML = "<span>👁️ Ver mensagem</span>";
        btn.classList.add("ativo");
    } else {
        btn.innerHTML = "<span>✨ Ocultar texto</span>";
        btn.classList.remove("ativo");
    }
}
