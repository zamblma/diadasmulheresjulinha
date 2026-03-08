function toggleMensagem() {
    const msg = document.getElementById("mensagem");
    const btn = document.querySelector(".toggle-btn");

    msg.classList.toggle("hidden");

if (msg.classList.contains("hidden")) {
    btn.textContent = "Mostrar texto";
} else {
    btn.textContent = "Ocultar texto";
}
}
