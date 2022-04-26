

function computerPlay(){
    let p = Math.floor(Math.random() * 3);
    switch (p){
        case 0:
            console.log("rock");
            return "rock";
        break;
        case 1:
            console.log("paper");
            return "paper";
        break;
        default:
            console.log("scissors");
            return "scissors";
    }
}

function playerSelection(){
    let elec = prompt("Choose: rock - paper or scissors?");
    return elec.toLowerCase();
}


function seleccion(play, comp){
    switch(play){
        case "rock":
            if(comp == "paper"){
               // console.log("You lose, computer choose paper");
                alert("You lose, computer choose paper");
                return true;
            }
            else if (comp == "scissors"){
               // console.log("You win, computer choose scissors");
                alert("You win, computer choose scissors");
                return true;
            }
            else{
              //  console.log("Nobody wins, try again!");
                alert("Nobody wins, try again!");
                return false;
            }
        break;
        case "scissors":
            if(comp == "paper"){
               // console.log("You win, computer choose paper");
                alert("You win, computer choose paper");
                return true;
            }
            else if (comp == "rock"){
               // console.log("You loose, computer choose rock");
                alert("You loose, computer choose rock");
                return true;
            }
            else{
                //console.log("Nobody wins, try again!");
                alert("Nobody wins, try again!");
                return false;
            }
        break;
        default:
            if(comp == "rock"){
                //console.log("You win, computer choose rock");
                alert("You win, computer choose rock");
                return true;
            }
            else if (comp == "scissors"){
                //console.log("You loose, computer choose scissors");
                alert("You loose, computer choose scissors");
                return true;
            }
            else{
                //console.log("Nobody wins, try again!");
                alert("Nobody wins, try again!");
                return false;
            }
    }
}

let i;
for(i=0;i<=4;i++){
    
    if(seleccion(playerSelection(),computerPlay()) == false){
        i--;
    }

}