var cores = ["#ff6b6b", "#ff8e8e", "#ffb3b3", "#ffd93d", "#fff176", "#ffffff", "#ff80ab", "#ea80fc"];

function criarConfete() {
    var el = document.createElement("div");
    el.style.position = "fixed";
    el.style.top = "-10px";
    el.style.left = Math.random() * 100 + "%";
    el.style.width = (5 + Math.random() * 8) + "px";
    el.style.height = (5 + Math.random() * 8) + "px";
    el.style.background = cores[Math.floor(Math.random() * cores.length)];
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = "1";
    var duracao = 3 + Math.random() * 4;
    el.style.animation = "confeteCair " + duracao + "s linear forwards";
    el.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, (duracao + 2) * 1000);
}

function criarCoracao() {
    var el = document.createElement("div");
    el.textContent = ["❤️", "💕", "💗", "💖", "💘"][Math.floor(Math.random() * 5)];
    el.style.position = "fixed";
    el.style.bottom = "-30px";
    el.style.left = Math.random() * 100 + "%";
    el.style.fontSize = (14 + Math.random() * 18) + "px";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = "1";
    var duracao = 5 + Math.random() * 6;
    el.style.animation = "coracaoSubir " + duracao + "s ease-in forwards";
    el.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, (duracao + 3) * 1000);
}

function criarBrilho() {
    var el = document.createElement("div");
    el.textContent = "✨";
    el.style.position = "fixed";
    el.style.top = Math.random() * 80 + "%";
    el.style.left = Math.random() * 100 + "%";
    el.style.fontSize = (10 + Math.random() * 14) + "px";
    el.style.opacity = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = "1";
    var duracao = 1 + Math.random() * 2;
    el.style.animation = "brilhoPiscar " + duracao + "s ease-in-out forwards";
    el.style.animationDelay = Math.random() * 5 + "s";
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, (duracao + 5) * 1000);
}

var ehMobile = window.innerWidth < 768;
var qtdConfete = ehMobile ? 16 : 28;
var qtdCoracao = ehMobile ? 8 : 12;
var qtdBrilho = ehMobile ? 6 : 10;

for (var i = 0; i < qtdConfete; i++) setTimeout(criarConfete, i * 110);
for (var i = 0; i < qtdCoracao; i++) setTimeout(criarCoracao, i * 380);
for (var i = 0; i < qtdBrilho; i++) setTimeout(criarBrilho, i * 500);

var intervaloConfete = ehMobile ? 1200 : 650;
var intervaloCoracao = ehMobile ? 2200 : 1300;
var intervaloBrilho = ehMobile ? 2000 : 1200;
setInterval(criarConfete, intervaloConfete);
setInterval(criarCoracao, intervaloCoracao);
setInterval(criarBrilho, intervaloBrilho);