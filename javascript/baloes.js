var icones = ["🎈", "🎉", "🎊", "⭐", "🎂"];

function criarBalao() {
    var el = document.createElement("div");
    el.classList.add("balao");
    el.textContent = icones[Math.floor(Math.random() * icones.length)];
    el.style.left = Math.random() * 100 + "%";
    el.style.fontSize = (18 + Math.random() * 20) + "px";
    el.style.animationDuration = (6 + Math.random() * 8) + "s";
    el.style.animationDelay = Math.random() * 4 + "s";
    document.querySelector(".baloes").appendChild(el);
    setTimeout(function () { el.remove(); }, 16000);
}

for (var i = 0; i < 10; i++) setTimeout(criarBalao, i * 400);
var intervaloBaloes = window.innerWidth < 600 ? 800 : 500;
setInterval(criarBalao, intervaloBaloes);