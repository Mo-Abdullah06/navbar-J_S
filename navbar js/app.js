const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector(".menu");

hamburger.addEventListener("click",()=>{
    ul.classList.toggle("show")
    hamburger.classList.toggle("show")
})