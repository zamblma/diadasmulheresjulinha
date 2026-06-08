const firebaseConfig = {
    apiKey: "AIzaSyBfJdafpQWBeD-bjVv8TK_0A6pfG2Oj0po",
    authDomain: "sitejulia-f3911.firebaseapp.com",
    projectId: "sitejulia-f3911",
    storageBucket: "sitejulia-f3911.firebasestorage.app",
    messagingSenderId: "976097806494",
    appId: "1:976097806494:web:87322ea287aaddaf0ad38f"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function formatarData(timestamp) {
    if (!timestamp) return "";
    const d = timestamp.toDate();
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function carregarRecados() {
    db.collection("recados").orderBy("criadoEm", "desc").onSnapshot((snapshot) => {
        const lista = document.getElementById("lista-recados");
        lista.innerHTML = "";
        snapshot.forEach((doc) => {
            const msg = doc.data();
            const div = document.createElement("div");
            div.className = "recado";
            div.innerHTML = `
                <div class="recado-header">
                    <strong class="recado-nome">${msg.nome || "Anônimo"}</strong>
                    <span class="recado-data">${formatarData(msg.criadoEm)}</span>
                </div>
                ${msg.titulo ? `<h3 class="recado-titulo">${msg.titulo}</h3>` : ""}
                <p class="recado-texto">${msg.texto}</p>
            `;
            lista.appendChild(div);
        });
        if (snapshot.empty) {
            lista.innerHTML = '<p class="vazio">Nenhum recado ainda. Seja o primeiro! 💕</p>';
        }
    });
}

function obterUsuario() {
    const storage = localStorage.getItem("usuarioLogado");
    if (storage) return storage;
    const user = firebase.auth().currentUser;
    return user ? (user.displayName || user.email.split("@")[0]) : "Anônimo";
}

function enviarRecado(event) {
    event.preventDefault();
    const usuario = obterUsuario();
    const titulo = document.getElementById("titulo-recado").value.trim();
    const texto = document.getElementById("texto-recado").value.trim();

    if (!texto) return;

    db.collection("recados").add({
        nome: usuario,
        titulo: titulo || "",
        texto: texto,
        criadoEm: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        document.getElementById("titulo-recado").value = "";
        document.getElementById("texto-recado").value = "";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarRecados();
    document.getElementById("form-recado").addEventListener("submit", enviarRecado);
});