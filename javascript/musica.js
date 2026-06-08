var audio = document.getElementById("bg-music");
var slider = document.getElementById("player-volume");
var label = document.getElementById("player-porcentagem");

if (audio && slider && label) {
    audio.volume = slider.value / 100;
    label.textContent = slider.value + "%";

    slider.addEventListener("input", function () {
        audio.volume = this.value / 100;
        label.textContent = this.value + "%";
    });
}