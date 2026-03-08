function criarPetala() {
    const petala = document.createElement("div");
     petala.classList.add("petala");

  
  petala.style.left = Math.random() * window.innerWidth + "px";

  
  petala.style.animationDuration = (5 + Math.random() * 5) + "s";


  const tamanho = 20 + Math.random() * 30;
  petala.style.width = tamanho + "px";
  petala.style.height = tamanho + "px";

  document.querySelector(".petalas").appendChild(petala);

  setTimeout(() => {
    petala.remove();
  }, 10000);
}


setInterval(criarPetala, 500);
