function criarPetala() {
    const petala = document.createElement("div");
    petala.classList.add("petala");

    const larguraTela = window.innerWidth;
    const alturaTela = window.innerHeight;
    const borda = 60;

    const lateral = Math.random();
    if (lateral < 0.15) {
        petala.style.left = -borda + "px";
    } else if (lateral > 0.85) {
        petala.style.left = larguraTela + borda + "px";
    } else {
        petala.style.left = Math.random() * larguraTela + "px";
    }

    petala.style.top = -40 + "px";

    const duracao = 6 + Math.random() * 6;
    petala.style.animationDuration = duracao + "s";

    const tamanho = 16 + Math.random() * 28;
    petala.style.width = tamanho + "px";
    petala.style.height = tamanho + "px";

    const desvioX = (Math.random() - 0.5) * 200;
    petala.style.setProperty("--desvio-x", desvioX + "px");

    const rotacaoFinal = 180 + Math.random() * 540;
    petala.style.setProperty("--rotacao", rotacaoFinal + "deg");

    const atraso = Math.random() * 2;
    petala.style.animationDelay = atraso + "s";

    document.querySelector(".petalas").appendChild(petala);

    setTimeout(() => {
        petala.remove();
    }, (duracao + atraso) * 2000);
}

setInterval(criarPetala, 350);
