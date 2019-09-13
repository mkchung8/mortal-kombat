
$(document).ready(function(){

    
    //Character Objects 
  
       
   var johnnyCage = {id: "johnnyc", name:"Johnny Cage", attack: 3, counterattack: 10, pic: '<img src="./assets/images/johnnycage.jpg">'};
   var mileena = {id: "mileena", name: "Mileena", attack: 2, counterattack: 10, pic: '<img src="./assets/images/mileena.jpg">'};
   var raiden = {id: "raiden", name: "Raiden", attack: 5, counterattack: 20, pic: '<img src="./assets/images/raiden.jpg">'};
   var scorpion = {id: "scorpion", name:"Scorpion", attack: 4, counterattack: 5, pic: '<img src="./assets/images/scorpion.jpg">'};
   var sonya = {id: "sonya", name: "Sonya", attack: 4, counterattack: 15, pic: '<img src="./assets/images/sonya.jpg">'};



    //Setting game variables
    var turnLock = false; 
    var playerHealth = 100; 
    var oppponentHealth = 100; 
    var playerArray = [johnnyCage, mileena, raiden, scorpion, sonya];
    var playerList; 
    var playerHealth; 
    var opponentHealth;
    var playerAttack; 
    var opponentAttack;


    //Initialize game 
    initializeGame();
    playGame();
    resetGame();

    function initializeGame () {
        $("#game-message").html("<h1>Welcome to Mortal Kombat yo!</h1>")
        startCharacters(playerArray);
        playerPick();
        opponentPick();
    }
   
    function startCharacters() {
        for (i=0; i < playerArray.length; i++) {
            console.log(playerArray[i]);
        }
    }
    

});