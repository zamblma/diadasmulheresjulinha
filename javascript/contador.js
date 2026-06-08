function atualizarContador() {
    const inicio = new Date("2025-08-31T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;

    const segundosTotal = Math.floor(diff / 1000);
    const minutosTotal = Math.floor(segundosTotal / 60);
    const horasTotal = Math.floor(minutosTotal / 60);
    const diasTotal = Math.floor(horasTotal / 24);

    const horas = horasTotal % 24;
    const minutos = minutosTotal % 60;
    const segundos = segundosTotal % 60;

    let anos = agora.getFullYear() - inicio.getFullYear();
    let meses = agora.getMonth() - inicio.getMonth();
    if (meses < 0) { anos--; meses += 12; }
    if (agora.getDate() < inicio.getDate()) {
        meses--;
        if (meses < 0) { anos--; meses += 12; }
    }

    document.getElementById("dias").textContent = diasTotal;
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");

    const elAnosMeses = document.getElementById("anos-meses");
    if (elAnosMeses) {
        const anoLabel = anos === 1 ? "ano" : "anos";
        const mesLabel = meses === 1 ? "mês" : "meses";
        elAnosMeses.textContent = `${anos} ${anoLabel} e ${meses} ${mesLabel}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarContador();
    setInterval(atualizarContador, 1000);
});