
function dice1(){
    let number = Math.floor(Math.random()*6) +1
    dice1Mapping(number)
    return number
}

function dice2(){
    let number2 = Math.floor(Math.random()*6) +1
    dice2Mapping(number2)
    return number2
}
let number1 = dice1()
let number2 = dice2()

function dice1Mapping(num1){
    let dice1Image = document.querySelector('.img1')
   if(num1===1){
        dice1Image.src="images/dice1.png"
    }
    else if(num1 ===2){
        dice1Image.src="images/dice2.png"
    }
    else if(num1 ===3){
        dice1Image.src="images/dice3.png"
    }
    else if(num1 ===4){
        dice1Image.src="images/dice4.png"
    }
    else if(num1 ===5){
        dice1Image.src="images/dice5.png"
    }
    else {
        dice1Image.src="images/dice6.png"
    }
}
function dice2Mapping(num2){
    let dice2Image = document.querySelector('.img2')
    if(num2===1){
        dice2Image.src="images/dice1.png"
    }
    else if(num2 ===2){
        dice2Image.src="images/dice2.png"
    }
    else if(num2 ===3){
        dice2Image.src="images/dice3.png"
    }
    else if(num2 ===4){
        dice2Image.src="images/dice4.png"
    }
    else if(num2 ===5){
        dice2Image.src="images/dice5.png"
    }
    else {
        dice2Image.src="images/dice6.png"
    }
}
let winning_message = document.querySelector('h1')

if (number1 > number2){
    winning_message.innerHTML = "Player 1 Wins"
}
else if (number2 > number1){
    winning_message.innerHTML = "Player 2 Wins"

}
else{
    winning_message.innerHTML= "Draw"
}