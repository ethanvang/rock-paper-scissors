var cpu;
var player;

const choices = ["rock","paper","scissors"];
var result;

const player_wins = document.querySelector("#player-wins");
const cpu_wins = document.querySelector("#cpu-wins");

function playRound() {
    cpu = Math.random();
    if (cpu < .3) {
        cpu = 0;
    } else if (cpu < .6) {
        cpu = 1;
    } else {
        cpu = 2;
    }
    //player = prompt("Let's play Rock-Paper-Scissors!").toLowerCase();
    //player = choices.indexOf(player);
    console.log("Computer chose: "+choices[cpu] + "\nYou chose: " + choices[player]);
    if (player == cpu) {
        result ="Tie!";
    }
    if (cpu - player == 1 || cpu - player == -2) {
        result = "Computer won!";
        cpu_wins.textContent = parseInt(cpu_wins.textContent) + 1;
    } else if (player - cpu == 1 || player - cpu < 0) {
        result = "Player won!";
        player_wins.textContent = parseInt(player_wins.textContent) + 1;
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerimg = document.querySelector("#player-img");
const cpuimg = document.querySelector("#cpu-img");
const result_text = document.querySelector("#result-text");

rock.addEventListener("click", () => {
    player = 0;
    playRound();
    //alert(result);
    playerimg.setAttribute("src","images/rock.jpg");
    cpuimg.setAttribute("src", "images/"+choices[cpu]+".jpg");
    result_text.textContent = "Result: " + result;
})
paper.addEventListener("click", () => {
    player = 1;
    playRound();
    //alert(result);
    playerimg.setAttribute("src","images/paper.jpg");
    cpuimg.setAttribute("src", "images/"+choices[cpu]+".jpg");
    result_text.textContent = "Result: " + result;
})
scissors.addEventListener("click", () => {
    player = 2;
    playRound();
    //alert(result);
    playerimg.setAttribute("src","images/scissors.jpg");
    cpuimg.setAttribute("src", "images/"+choices[cpu]+".jpg");
    result_text.textContent = "Result: " + result;
})


