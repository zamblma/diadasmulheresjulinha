function ValidarLogin(event){
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        if  (usuario === "julia@linda" && senha=== "euteamo") {
            window.location.href ="pag01.html";
        }else {
            alert("Usuário ou senha incorretos");
        }
        
    }