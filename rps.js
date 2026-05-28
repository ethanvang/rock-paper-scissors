var cpu;
var player;

const choices = ["rock","paper","scissors"]
function playRound() {
    cpu = Math.random();
    if (cpu < .3) {
        cpu = 0;
    } else if (cpu < .6) {
        cpu = 1;
    } else {
        cpu = 2;
    }
    player = prompt("Let's play Rock-Paper-Scissors!").toLowerCase();
    player = choices.indexOf(player);
    console.log("Computer chose: "+choices[cpu] + "\nYou chose: " + choices[player]);
    if (player == cpu) {
        console.log("Tie!");
    }
    if (cpu - player == 1 || cpu - player == -2) {
        console.log("Computer won!");
    } else if (player - cpu == 1 || player - cpu < 0) {
        console.log("Player won!");
    }
}
for (let i = 0; i < 5; i++) {
    playRound();
}