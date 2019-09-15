
$(document).ready(function(){
 
    //Character Object 

    var characterList = {

    "johnnyc" : {id: "johnnyc", name:"Johnny Cage", attack: 3, counterattack: 10, pic: "assets/images/johnnyc.jpg"},
    "mileena" : {id: "mileena", name: "Mileena", attack: 2, counterattack: 10, pic: "assets/images/mileena.jpg"},
    "raiden"  :{id: "raiden", name: "Raiden", attack: 5, counterattack: 20, pic: "assets/images/raiden.jpg"},
    "scorpion" : {id: "scorpion", name:"Scorpion", attack: 4, counterattack: 5, pic: "assets/images/scorpion.jpg"},
    "sonya" : {id: "sonya", name: "Sonya", attack: 4, counterattack: 15, pic: "assets/images/sonya.jpg"},

    };

    //Setting game variables
    var turnLock = true; 
    var characterLock = false;
    var player;
    var playerLock = [];
    var opponent;
    var attackMultiplier; 
    var playerHealth = 100; 
    var oppponentHealth = 100; 
    var playerHealth; 
    var opponentHealth;
    var opponentList = [];

    initializeGame();
    
 
    function initializeGame () {

        //Starting game message 
        $("#game-message").html("<h1>Welcome to Mortal Kombat. Choose your fighter. </h1>");
        
        for (var key in characterList) {
            startCharacters(characterList[key],"#character-list"); 
        };


     };
    

     function startCharacters (character, characterArea) {
        var characterDiv = $('<div class="character-div" character-id="' + character.id + '">')
        var characterName = $('<div class="character-name">').text(character.name);
        var characterImage = $('<img class="character-image">').attr("src",character.pic);
        characterDiv.append(characterName).append(characterImage);
        $(characterArea).append(characterDiv);
        opponentList.push(character.id);
    };    

    
   $("#character-list").on("click", ".character-div", function (){
        var idPick = $(this).attr("character-id");
        playerLock.push(idPick);

        if (playerLock.length === 0) {
            initializeGame();
           } else if (playerLock.length > 0) {
                
               $(this).remove();
               var player = $("#player-div")
               player.append($(this)); 
               playerSet();
               opponentUpdate();
               opponentSet();
               gamePlay();
           };
        
   });
   


   
   
   function playerSet(character, playerArea) {

        var playerSet = $('<div class="player-card character-id="' + playerLock[0] + '">');
        var playerId = playerLock[0];
        var playerName = $("")
        
        
        
   };

   function opponentUpdate (opponent) {
       opponentList = opponentList.filter(e => e !== playerLock[0]);
       
       
       
   };

   function opponentSet (){

   }
   function gamePlay (){};
    
   

    
});