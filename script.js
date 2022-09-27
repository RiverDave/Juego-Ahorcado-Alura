const logo = document.querySelector(".logo");
const main_menu = document.querySelector("#menu");
const word_page = document.querySelector(".add-word-part");
const game = document.querySelector(".game");
const gameovers = document.querySelector(".gameovers");
const chances = document.querySelector("#countin");
const isAZ = RegExp('[A-ZÑa-zñ]');
const word_adder = document.querySelector("#addinword");
const showedWord = document.querySelector(".Word");
const repeatedLetters = document.querySelector(".misses");
const image = document.querySelector("#game_image");
let words = ["ESCRIBIR","JAVA","PROGRAMAR","DESAFIO","DESTREZA","DIFICULTAD","HTML"];
let secretWord = randomWord();
let usedLetters = [];
let counter = 0;
let victory = false;
let addStatus = false;



//BUTTONS
const startbutt = document.querySelector("#play-game");
const addwordbutt = document.querySelector("#add-word-db");
const savePlaybutt = document.querySelector("#save-play");
const goBackbutt = document.querySelector("#go-back");
const go_back = document.querySelector("#re-turn");
const tryagainbutt = document.querySelector("#tryagainbutt");
const newgamebutt = document.querySelector("#new-game");



//ON_CLICKS_NAVIGATION
logo.onclick = Refresh;
startbutt.onclick = referStartGame;
addwordbutt.onclick = referAddword;
savePlaybutt.onclick = pushwordButt;
goBackbutt.onclick = Refresh;
go_back.onclick = re_turn;
tryagainbutt.onclick = Refresh;
newgamebutt.onclick = repeatgame;


// FUNCTIONS_DIV_NAVIGATION

function referStartGame(){
    main_menu.style.display="none";
    word_page.style.display="none";
    game.style.display="flex";
    counter = 0;
    chances.innerHTML = "0/6 Oportunidades";
    usedLetters = [];
    secretWord = randomWord();
    crearPalabra(secretWord);    
    document.addEventListener('keydown', function (e){
        let key = e.key.toUpperCase();
        teclaFuncion(key);
        console.log(key);
    })
}

function referAddword(){
    main_menu.style.display="none";
    word_page.style.display="grid";
}
function re_turn(){
    Refresh();
}

function showGameOver(){
game.style.display = "none";
gameovers.style.display = "flex";
alert("Fin del juego");

}

// FUNCTIONS_ADD_WORD

function pushwordButt(){

    if(isAZ.test(word_adder.value) && word_adder.value.length > 2){
        pushword(word_adder.value);
        alert("word " + words.slice(-1) + " Was added");
        referStartGame();
    }else{ 
    alert("Error, Ingrese una palabra que sea superior a dos");
    word_adder.value = "";
    }
}

function pushword(newword){
    
    words.push(newword);
    
}

function randomWord(){
    return words[Math.floor(Math.random() * (words.length))].toUpperCase();
}



//LOGIC_FUNCTIONS 

function crearPalabra(nuevaPalabra) {
    for(let i = 0; i < nuevaPalabra.length; i++) {
        const letra = document.createElement('P');
        letra.setAttribute("id","letra" + i);
        showedWord.appendChild(letra);
        }
}

function insertarLetra(nuevaPalabra) {
    if (counter == 6) {
        return
    } else {
    for(let i = 0; i < secretWord.length; i++) {
        let letraI = document.querySelector("#letra" + i);
        if (secretWord[i] == nuevaPalabra) {
            letraI.innerHTML = secretWord[i];
        }

       
    }}
}


function teclaFuncion(key) {
    let contador = 0;
    if (key.length > 1 || !isAZ.test(key) || victory == true){ 
        return;
    }

    
    
    for (const element of usedLetters) {
        if (key == element) {
            return;
        }
    }
    for (let i = 0; secretWord.length > i; i++) {
        if (secretWord[i] == key && contador == 0) {
            contador++;
            usedLetters.push(key);
            insertarLetra(key);
            break;
        }
    }
    comprobarVictoria();
    
    if (victory == true) {
        repeatgame();
        counter = 0;
        alert("Ganaste, Felicidades!");
        
        
    }
    if (contador == 0) {
        mistakes();
        usedLetters.push(key);
        showRepeat(key);
        
        
    }
}

function showRepeat(letra) {
    if (counter == 6) {
        return
    } 
    
    repeatedLetters.innerHTML += " " + letra;    
}


// Repeat the game

function repeatgame(){

    document.getElementById("#game_image").src = "Hangman-01.png";

    repeatedLetters.innerHTML = "";

    for(let i = 0; i < secretWord.length; i++) {
        let letraI = document.querySelector("#letra" + i);
        
            letraI.remove();
        
    }
    chances.innerHTML =  "0/6 Oportunidades";
    counter = 0;
    usedLetters = [];
    secretWord = randomWord();
    crearPalabra(secretWord);
    victory = false;
        
}

// Comprobar la victoria
function comprobarVictoria() {
     victory = true;
    let palabrasVacias = 0;
    for(let i = 0; i < secretWord.length; i++) {
        let letraI = document.querySelector("#letra" + i);
        if (letraI.textContent == "") {
            palabrasVacias++;
        }
    }
    if (palabrasVacias > 0) {
         victory = false;
    }
    return victory;
}

//errors

function mistakes(){
    if(counter < 6){
        counter++;
       
        chances.innerHTML = counter + "/6 Oportunidades";

        


        console.log(counter);
        
        
    }

    if(counter == 1){
        document.getElementById("#game_image").src = "Hangman-02.png";
    }

    if(counter == 2){
        document.getElementById("#game_image").src = "Hangman-03.png";
    }

    if(counter == 3){
        document.getElementById("#game_image").src = "Hangman-04.png";
    }

    if(counter == 4){
        document.getElementById("#game_image").src = "Hangman-05.png";
    }

    if(counter == 5){
        document.getElementById("#game_image").src = "Hangman-06.png";
        
    }

    if(counter == 6){
        document.getElementById("#game_image").src = "Hangman-07.png";

        showGameOver();

        
    }

    

   

   

    

    
}













//UTILITY

function Refresh() {
    window.parent.location = window.parent.location.href;

} 

