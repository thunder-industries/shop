let fruit = []

let appleShelf = document.getElementById("apple-shelf") 
let orangeShelf = document.getElementById("orange-shelf")
let pineAppleShelf= document.getElementById("pineApple-shelf")
let melonShelf= document.getElementById("melon-shelf")
let grapeShelf= document.getElementById("grape-shelf")
let mangoShelf= document.getElementById("mango-shelf")

let basketEl = document.getElementById("basket-el")


function addToBasket1(){
    fruit.push("🍎")
    
}
function addToBasket2(){
    fruit.push("🍉")
    
}
function addToBasket3(){
    fruit.push("🍊")
    
}
function addToBasket4(){
    fruit.push("🍇")
    
}
function addToBasket5(){
    fruit.push("🍍")
    
}
function addToBasket6(){
    fruit.push("🥭")
    
}

function save(){
for (let i = 0; i < fruit.length; i++) {
    basketEl.textContent += fruit[i] 
  }}



function sort(){
    for(i = 0; i < fruit.length; i++){
        if(fruit[i] === "🍎" ){
            appleShelf.textContent += "🍎"
        }else if (fruit[i] === "🍊") {
            orangeShelf.textContent +=  "🍊"
        } else if(fruit[i] === "🍉" ){
            melonShelf.textContent += "🍉"
        }else if (fruit[i] === "🍇") {
            grapeShelf.textContent +=  "🍇"
        } if(fruit[i] === "🍍" ){
            pineAppleShelf.textContent += "🍍"
        }else if (fruit[i] === "🥭") {
            mangoShelf.textContent +=  "🥭"
        }
    }
}