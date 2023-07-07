let buyf = false

function buy() {
    if(!buyf) {
        document.getElementById("btn").style.background = "green"
        document.getElementById("btn").innerText = "в корзине"
        buyf = false
    }
    else {
        document.getElementById("btn").style.background = "blue"
        document.getElementById("btn").innerText = "в корзине"
        buyf = true
    }
}
window.addEventListener("DOMContentLoaded", function (){
    document.querySelector("#btn-menu").addEventListener("click", function() {
        document.querySelector("#menu").classList.toggle("IsActive")
    })
})

let btnTheme = document.querySelector (".btn-theme")

btnTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
})