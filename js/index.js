// JavaScript para esconder e mostrar o navbar
let lastScrollTop = 0;
const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        nav.style.top = "-100px"; // Ajustar conforme a altura do navbar
        nav.style.background = "rgb(30, 58, 95, 0.5)";
    } else {
        // Rolando para cima
        nav.style.top = "0";
        nav.style.background = "#1E3A5F";
    }
    lastScrollTop = scrollTop;
});


// animação do h1
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }


let texto = "o que foi a recessão de 2008?";
let i = 0;

function digitar() {
  if (i < texto.length) {
    document.getElementById("typing").innerHTML += texto.charAt(i);
    i++;
    setTimeout(digitar, 40);
  }
}
digitar();


// animação dos textos e imagens
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementBottom = reveals[i].getBoundingClientRect().bottom;
      const visiblePoint = 100;
  
      // Se o elemento estiver visível, adiciona a classe
      if (elementTop < windowHeight - visiblePoint && elementBottom > 0) {
        reveals[i].classList.add("active");
      } else {
        // Se ele saiu da tela, remove a classe para que possa reanimar depois
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", revealOnScroll);