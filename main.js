document.addEventListener("DOMContentLoaded",function(){
    createBox(32);
    
})
function createBox(size){
    let box = document.querySelector('.box');

    box.style.gridTemplateColumns= `repeat(${size},1fr)`;
    box.style.gridTemplateRows= `repeat(${size},1fr)`;

    let amount = size * size;

    for(let i=0;i<amount;i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow"
        box.insertAdjacentElement("beforeend", div)
    }
}