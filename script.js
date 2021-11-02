'use strict'

// Settings
let currentPlayer = 0;
let validate = 0;
let gameFinished = false;
let interval = null;

const Xsquares = [];
const Osquares = [];

// UI Selection
const UI_text = document.querySelector('.ui__text');
const UI_playAgain = document.querySelector('.playAgainButton');

class Square {
    constructor(sq, id, value){
        this.sq = sq;
        this.id = id;
        this.value = value;
        this.sq.addEventListener("click", this.changeValue.bind(this));
    }

    clearValues(value){
        this.value = value;
    }

    changeValue(){
        if(gameFinished==false){
            if(this.value === ""){
                if(currentPlayer==0){
                    this.value = "X";
                    Xsquares.push(this.id);
                    let squareNum = 0;
                    squares.forEach(function(sq){
                        if(sq.value!="")squareNum++;
                    });
                    if(squareNum==squares.length){
                        UI_text.textContent = "Nikdo nevyhrál..";
                        UI_playAgain.style.opacity = 1;
                        gameFinished = true;
                    }
                    this.renderValue();
                    UI_text.textContent = `Hráč 1 je na tahu.`;
                    checkForWinner(this.id);
                    currentPlayer = 1;
                }else{
                    this.value = "O";
                    Osquares.push(this.id);
                    let squareNum = 0;
                    squares.forEach(function(sq){
                        if(sq.value!="")squareNum++;
                    });
                    if(squareNum==squares.length){
                        UI_text.textContent = "Nikdo nevyhrál..";
                        UI_playAgain.style.opacity = 1;
                        gameFinished = true;
                    }
                    this.renderValue();
                    UI_text.textContent = `Hráč 0 je na tahu.`;
                    checkForWinner(this.id);
                    currentPlayer = 0;
                }
            }
        }
    }

    renderValue(){
            popSquare(this.sq);
            this.sq.textContent = this.value;
            console.log(`sq${this.id} - ${this.value}`);
    }
}


// Initialization of squares
const sq1 = new Square(document.querySelector('.s1'), 1, "");
const sq2 = new Square(document.querySelector('.s2'), 2, "");
const sq3 = new Square(document.querySelector('.s3'), 3, "");
const sq4 = new Square(document.querySelector('.s4'), 4, "");
const sq5 = new Square(document.querySelector('.s5'), 5, "");
const sq6 = new Square(document.querySelector('.s6'), 6, "");
const sq7 = new Square(document.querySelector('.s7'), 7, "");
const sq8 = new Square(document.querySelector('.s8'), 8, "");
const sq9 = new Square(document.querySelector('.s9'), 9, "");

const squares = [sq1,sq2,sq3,sq4,sq5,sq6,sq7,sq8,sq9];
const winOptions = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], 
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

function popSquare(sq){
    clearInterval(interval);
    let pos = 0;
    interval = setInterval(popopopop, 1);
    function popopopop(){
        if(pos==70){ clearInterval(interval)}else{pos++; sq.style.fontSize = `${pos}px`;}
    }
}

function checkForWinner(id){
    if(currentPlayer==0){
        const checkableWinOptions = winOptions.filter(function(el){
            if(el.includes(id)) return el;
        })
        for (let i = 0; i < checkableWinOptions.length; i++) {
            //console.log("checking winOptions");
            for (let f = 0; f <= 3; f++) {
              //  console.log("Checking 3 times");
            for (let d = 0; d < Xsquares.length; d++) {
                console.log(`checking xsquares - ARR - ${checkableWinOptions[i]} VALUES - ${checkableWinOptions[i][f]} - ${Xsquares[d]}`);
                if(checkableWinOptions[i][f] == Xsquares[d] && Xsquares != null){
                    validate += + 1;
                    console.log(`validate = ${validate}`);
                    if(validate==3){
                        console.log(checkableWinOptions[i]);
                        console.log("THIS IS THE END");
                        UI_playAgain.style.opacity = 1;
                        UI_text.textContent = `Hráč ${currentPlayer} vyhrál!`;
                        gameFinished = true;
                        break;
                    }
                }
            }        
        }
        console.log("resseting validation");
        validate=0;
        }
    }else{
        const checkableWinOptions = winOptions.filter(function(el){
            if(el.includes(id)) return el;
        })
        for (let i = 0; i < checkableWinOptions.length; i++) {
            //console.log("checking winOptions");
            for (let f = 0; f <= 3; f++) {
              //  console.log("Checking 3 times");
            for (let d = 0; d < Osquares.length; d++) {
                console.log(`checking Osquares - ARR - ${checkableWinOptions[i]} VALUES - ${checkableWinOptions[i][f]} - ${Osquares[d]}`);
                if(checkableWinOptions[i][f] == Osquares[d] && Osquares != null){
                    validate += + 1;
                    console.log(`validate = ${validate}`);
                    if(validate==3){
                        console.log(checkableWinOptions[i]);
                        console.log("THIS IS THE END");
                        UI_playAgain.style.opacity = 1;
                        UI_text.textContent = `Hráč ${currentPlayer} vyhrál!`;
                        gameFinished = true;
                        break;
                    }
                }
            }        
        }
        console.log("resseting validation");
        validate=0;
        }
    }
}

function playAgain(){
    console.log("swag");
    Xsquares.splice(0,Xsquares.length);
    Osquares.splice(0,Osquares.length);
    validate = 0;
    gameFinished = false;
    UI_playAgain.style.opacity = 0;
    squares.forEach(function(el){
        console.log(el);
        el.sq.style.fontSize = 0;
        el.clearValues("");
        el.renderValue();
    });
    currentPlayer = 0;
    UI_text.textContent = `Hráč 1 je na tahu`;
}

UI_playAgain.addEventListener('click', function(e){
    e.preventDefault();
    playAgain();
});
