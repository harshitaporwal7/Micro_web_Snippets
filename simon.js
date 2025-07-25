prompt("Welcome! Enter your name");

let level = 0;
let start = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (start==0) {
        console.log("Game is Started");
        start = true;
        level = 0;
        growlevel();
    }
});

let allbutton = document.querySelectorAll(".red, .blue, .green, .yellow");
for (let btn of allbutton) {
    btn.addEventListener("click", pressButton);
}

let buttons = ["red", "blue", "green", "yellow"];
let game = [];
let user = [];

function growlevel() {
    user = []; 
    level++;
    h2.innerText = `Level ${level}`;

    let random_num = Math.floor(Math.random() * 4);
    let random_color = buttons[random_num];
    let random_button = document.querySelector(`.${random_color}`);

    flash_button(random_button);
    game.push(random_color);
    console.log("Game sequence:", game);
}

function pressButton() {
    let user_color = this.getAttribute("class").split(" ")[0]; 
    user.push(user_color);
    flash_user(this);
    console.log(user);

    result(user.length - 1);
}


function flash_button(btn) {
    btn.classList.add("flash");
    setTimeout(() =>  btn.classList.remove("flash"), 300);
}

function flash_user(btn) {
    btn.classList.add("userflash");
    setTimeout(() => btn.classList.remove("userflash"), 300);
}

function result(index) {
    if (user[index] === game[index]) {
        if (user.length === game.length) {
            setTimeout(growlevel, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was ${level} <br>Press any key to restart`;
        console.log("invalid input! Game Over.");

        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "rgb(232, 201, 156)";
        }, 300);
        reset();
    }
}

function reset() {
    start = false;
    user = [];
    game = [];
    level = 0;
}