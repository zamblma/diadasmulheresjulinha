var audio = document.getElementById("bg-music");
var slider = document.getElementById("player-volume");
var label = document.getElementById("player-porcentagem");
var widget = document.querySelector(".player-widget");

function tentarTocar() {
    if (audio && audio.paused) {
        audio.play().then(function() {
            atualizarIconePlayer(true);
        }).catch(function () {});
    }
}

function alternarPlayPause(e) {
    if (e && (e.target === slider || slider?.contains(e.target))) return;
    if (!audio) return;

    if (audio.paused) {
        audio.play().then(function() {
            atualizarIconePlayer(true);
        }).catch(function() {});
    } else {
        audio.pause();
        atualizarIconePlayer(false);
    }
}

function atualizarIconePlayer(tocando) {
    var icon = document.querySelector(".player-icon");
    if (!icon) return;
    if (tocando) {
        icon.textContent = "🎶";
        widget?.classList.add("tocando");
    } else {
        icon.textContent = "🔇";
        widget?.classList.remove("tocando");
    }
}

if (audio && slider && label) {
    audio.volume = slider.value / 100;
    label.textContent = slider.value + "%";

    slider.addEventListener("input", function (e) {
        e.stopPropagation();
        audio.volume = this.value / 100;
        label.textContent = this.value + "%";
        tentarTocar();
    });

    slider.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    var info = document.querySelector(".player-info");
    if (info) {
        info.style.cursor = "pointer";
        info.setAttribute("title", "Clique para pausar ou tocar");
        info.addEventListener("click", alternarPlayPause);
    }

    audio.addEventListener("play", function() { atualizarIconePlayer(true); });
    audio.addEventListener("pause", function() { atualizarIconePlayer(false); });

    tentarTocar();
}

document.addEventListener("click", tentarTocar, { once: true });
document.addEventListener("touchstart", tentarTocar, { once: true });
