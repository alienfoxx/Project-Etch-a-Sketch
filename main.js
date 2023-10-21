let color= "black";
let click = false;

document.addEventListener("DOMContentLoaded",function(){
    createBox(32);

  document.querySelector("body").addEventListener("click",function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw= document.querySelector(".draw");
        if(click){
            draw.innerHTML= "You Can Draw";

        }else{
            draw.innerHTML = "You're Not Allowed to Draw "
        }
    }
  })      





    let btn_popup= document.querySelector('#poppup');
    btn_popup.addEventListener("click",function(){
        let size=getSize();
        createBox(size)
    })

    
})
function createBox(size){
    let box = document.querySelector('.box');

    box.style.gridTemplateColumns= `repeat(${size},1fr)`;
    box.style.gridTemplateRows= `repeat(${size},1fr)`;

    let amount = size * size;

    for (let i = 0 ; i < amount ; i++){
        let div = document.createElement("div");
       div.addEventListener("mouseover",colorDiv)
        box.insertAdjacentElement("beforeend", div)
    }
}
function getSize(){
    let input = prompt("What the size of the Box");
    let message = document.querySelector('#messag');
    if (input == ""){
        message.innerHTML = "Pleas provide A Number";
    }else if (input < 0 || input > 100){
        message.innerHTML = "Pleas Enter A Valid Number between 1 and 100"
    }else{
        message.innerHTML = "Now You Can Play";
        return input;
    }
}
function colorDiv(){
    if(click){
        if(color ==  'random'){
            this.style.backgroundColor ="hsl(180, 80%, 45%)"
        }else{
            this.style.backgroundColor = 'black';
        }
    }

}
function setColor(ColorChoice){
    color = ColorChoice;

}
function resetBox(){
    let divs = document.querySelectorAll("div");
     divs.forEach((div) => div.style.backgroundColor="white");
}