let show = document.querySelector(".texto");
let c = document.querySelector(".circulo");

c.addEventListener('click', () => {
    show.style.visibility= 'visible';
    show.style.transition = "2s";
})