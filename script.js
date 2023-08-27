const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump");
        }, 500);
    }
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));


if(cactusLeft < 95 && cactusLeft > 20 && dinoTop >= 140){
    alert("game over!!!!");
}
}, 20);

document.addEventListener("keydown",function(event){
    jump()
});