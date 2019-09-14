
$(document).ready(function(){

    
    //Character Objects 
       
   var johnnyc = {id: "johnnyc", name:"Johnny Cage", attack: 3, counterattack: 10, pic: '<img class="character-image" src="./assets/images/johnnyc.jpg">'};
   var mileena = {id: "mileena", name: "Mileena", attack: 2, counterattack: 10, pic: '<img class="character-image" src="./assets/images/mileena.jpg">'};
   var raiden = {id: "raiden", name: "Raiden", attack: 5, counterattack: 20, pic: '<img class="character-image" src="./assets/images/raiden.jpg">'};
   var scorpion = {id: "scorpion", name:"Scorpion", attack: 4, counterattack: 5, pic: '<img class="character-image" src="./assets/images/scorpion.jpg">'};
   var sonya = {id: "sonya", name: "Sonya", attack: 4, counterattack: 15, pic: '<img class="character-image" src="./assets/images/sonya.jpg">'};


    //Setting game variables
    var turnLock = false; 
    var characterLock = false;
    var userPlayer;
    var opponentPlayer;
    var playerHealth = 100; 
    var oppponentHealth = 100; 
    var playerArray = [johnnyc, mileena, raiden, scorpion, sonya];
    var playerList; 
    var playerHealth; 
    var opponentHealth;
    var playerAttack; 
    var opponentAttack;



    //Initialize game 
    initializeGame();
    //playGame();
   // resetGame();

// Function that intializes the character display list
   function startCharacters() {
       for (var i=0; i < playerArray.length; i++) {
           var character = $('<div>');
           character.addClass("col-md-2 character-div");
           character.attr("player-id", playerArray[i].id);
           character.attr("data_attack", playerArray[i].attack);
           character.html("<p>" + playerArray[i].name + "</p>" + playerArray[i].pic);
           $("#character-list").append(character);
         };
       };

       function playerPick() {
        $(".character-div").on("click", function(){
            let playerId = $(this).attr("player-id");
            $("#player-div").html()
            console.log()
            $("#player-div").html("<img class='character-image' src='./assets/images/" + playerId + ".jpg'>");
            
        });
       };
       
       
       
  

//Game start 
    function initializeGame () {
        //Starting game message 
        $("#game-message").html("<h1>Welcome to Mortal Kombat. Choose your fighter. </h1>");

        
        startCharacters();
        playerPick();
     //   opponentPick();
        };
    
         
    /*function startCharacters() {
        for (i=0; i < playerArray.length; i++) {
            console.log(playerArray[i].name);
            $("<div>").each()
            var character = 
        }
    }
    */
    

});