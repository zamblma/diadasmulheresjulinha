const firebaseConfig = {
    apiKey: "AIzaSyBfJdafpQWBeD-bjVv8TK_0A6pfG2Oj0po",
    authDomain: "sitejulia-f3911.firebaseapp.com",
    projectId: "sitejulia-f3911",
    storageBucket: "sitejulia-f3911.firebasestorage.app",
    messagingSenderId: "976097806494",
    appId: "1:976097806494:web:87322ea287aaddaf0ad38f"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", () => {
    const salvo = localStorage.getItem("lembrarLogin");
    if (salvo) {
        const dados = JSON.parse(salvo);
        document.getElementById("usuario").value = dados.usuario;
        document.getElementById("senha").value = dados.senha;
        document.getElementById("lembrar").checked = true;
    }
});

function ValidarLogin(event) {
    event.preventDefault();

    const email = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar").checked;

    mostrarToast("Entrando... 💕", "info");

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const nome = userCredential.user.displayName || email.split("@")[0];
            if (lembrar) {
                localStorage.setItem("lembrarLogin", JSON.stringify({ usuario: email, senha }));
            } else {
                localStorage.removeItem("lembrarLogin");
            }
            localStorage.setItem("usuarioLogado", nome);
            mostrarToast("Acessando... 💕", "success");
            setTimeout(() => {
                window.location.href = "menu.html";
            }, 600);
        })
        .catch(() => {
            mostrarToast("Hmm, tenta de novo, amor 💕");
        });
}

function toggleSenha() {
    const senhaInput = document.getElementById("senha");
    const toggleIcon = document.getElementById("toggleSenha");
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleIcon.classList.replace("bx-show", "bx-hide");
    } else {
        senhaInput.type = "password";
        toggleIcon.classList.replace("bx-hide", "bx-show");
    }
}

function mostrarToast(mensagem, tipo) {
    const toast = document.getElementById("toast");
    toast.textContent = mensagem;
    toast.className = "toast";
    if (tipo === "success") {
        toast.style.background = "rgba(40, 167, 69, 0.9)";
    } else if (tipo === "info") {
        toast.style.background = "rgba(100, 100, 200, 0.9)";
    } else {
        toast.style.background = "rgba(200, 40, 60, 0.9)";
    }
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}