// Récupération des différentes cellules du morpion pour l'ajout des propriétés onClick
const cellules = document.getElementsByClassName('cellule');
// Boucle qui attribue les propriétés onClick au cellule
for(let i = 0; i < cellules.length; i ++) {
    const cellule = cellules[i];
    
    cellule.onclick = (event) => {
        // console.log(event.target);
        addValue(event, tour);
    }
}
// Récupération de l'overlay, du bouton reset et du span pour afficher le gagnant pour la fonction winner et restart et création de variable state qui serviva à l'affichage
const btnReplay = document.getElementById("replay");
const winnerText = document.querySelector("span");
const overlay = document.getElementById('overlay');
// Définition variable pour gérer l'overlay
let stateOverlay = false;
// Création variable tour pour savoir c'est au tour de quel joueur de jouer
let tour = 0;
// Fonction qui ajoute X ou O
function addValue(event) {
    if((tour < 9 || playerone === false || playertwo === false) && event.target.innerText === "" ) {
        if(tour % 2 === 0 ) {
            event.target.innerText = "X";
            verifWin();
            tour = tour + 1;
        }
        else {
            event.target.innerText = "O";
            verifWin();
            tour = tour + 1;
        }
    }
}
// Fonction pour vérifier qui gagne
function verifWin() {
     //Definition des getelement pour racourcir le if()
    one = document.getElementById('1').textContent;
    two = document.getElementById('2').textContent
    three = document.getElementById('3').textContent;
    four = document.getElementById('4').textContent;
    five = document.getElementById('5').textContent;
    six = document.getElementById('6').textContent;
    seven = document.getElementById('7').textContent;
    eight = document.getElementById('8').textContent;
    nine = document.getElementById('9').textContent;
    //Si 1=2=3 OU 4=5=6 OU 7=8=9 etc....
    if ((one === two && one === three) && (one !== "" && two !== "" && three !== "") ||
        (four === five && four === six ) && (four !== "" && five !== "" && six !== "") ||
        (seven === eight && seven === nine) && (seven !== "" && eight !== "" && nine !== "") ||
        (one === five && one === nine) && (one !== "" && five !== "" && nine !== "") ||
        (three === five && three === seven) && (three !== "" && five !== "" && seven !== "") ||
        (one === four && one === seven) && (one !== "" && four !== "" && seven !== "")||
        (two === five && two === eight) && (two !== "" && five !== "" && eight !== "") ||
        (three === six && three === nine) && (three !== "" && six !== "" && nine !== "") ) {
            if (tour % 2 === 0) {
                gestionOverlay(stateOverlay, "X");
            }else if(tour % 2 === 1) {
                gestionOverlay(stateOverlay, "O");      
            }
    } else if (tour === 8) {
        gestionOverlay(stateOverlay, null);
    }
}
function resetGame() {
    tour = 0;
    // Boucle qui réinitialise le texte dans chaque cellule
    for(let i = 0; i < cellules.length; i ++) {
        const cellule = cellules[i];
        
        cellule.innerText = "";
    }
}
// Fonction qui affiche l'overlay en fin de partie
function gestionOverlay(state, winner) {
    // Affichage du texte dans l'overlay
    if(winner === "X") {
        winnerText.innerText = "X";
    } else if (winner === "O") {
        winnerText.innerText = "O";
    } else if (winner === null) {
        winnerText.innerText = "égaliter";
    }
    // Affichage de l'overlay
    if(state === false) {
        overlay.classList.toggle("disparition", state);
        btnReplay.onclick = () => {
            resetGame();
            overlay.classList.toggle("disparition", !state);
        };
    }

}


