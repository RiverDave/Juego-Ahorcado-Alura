const logo = document.querySelector(".logo");
const main_menu = document.querySelector("#menu");
const word_page = document.querySelector(".add-word-part");
const game = document.querySelector(".game");
const words = ["Escribir","Programar","Dedicacion","Estudiar"];
const word_adder = document.querySelector("#addinword");
const letter_adder = document.querySelector("#letter-game");


//BUTTONS
const startbutt = document.querySelector("#play-game");
const addwordbutt = document.querySelector("#add-word-db");
const savePlaybutt = document.querySelector("#save-play");
const goBackbutt = document.querySelector("#go-back");
const go_back = document.querySelector("#re-turn");


//ON_CLICKS_NAVIGATION
logo.onclick = Refresh;
startbutt.onclick = referStartGame;
addwordbutt.onclick = referAddword;
savePlaybutt.onclick = pushwordButt;
goBackbutt.onclick = Refresh;
go_back.onclick = re_turn;


// FUNCTIONS_DIV_NAVIGATION

function referStartGame(){
    main_menu.style.display="none";
    word_page.style.display="none";
    game.style.display="flex";
    letter_adder.value = words[Math.floor(Math.random()*words.length)]
}
function referAddword(){
    main_menu.style.display="none";
    word_page.style.display="grid";
}
function re_turn(){
    Refresh();
}

// FUNCTIONS_ADD_WORD

function pushwordButt(){
    pushword(word_adder.value);
    alert("word " + words[4] + " Was added");
    referStartGame();
}

function pushword(newword){
words.push(newword);

}

// Key listener









//UTILITY

function Refresh() {
    window.parent.location = window.parent.location.href;
} 

