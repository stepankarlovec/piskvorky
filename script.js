'use strict'
document.addEventListener('DOMContentLoaded', (event) => {

// Settings
let currentPlayer = 0;

class Square {
    constructor(sq, id, value){
        this.sq = sq;
        this.id = id;
        this.value = value;
        this.sq.addEventListener('click', function(e){
            // this je nastaveno na HTML element potrebuji nastavit na Square
            changeValue(currentPlayer).bind(Square);
        });
    }

    changeValue(player){
        if(player==0){
            this.value = "X";
            this.renderValue();
            currentPlayer = 1;
        }else{
            this.value = "O";
            this.renderValue();
            currentPlayer = 0;
        }
    }
    
    renderValue(){
        //this.sq.textContent = this.value;
        console.log("U SO GAY POGGERS");
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
})
