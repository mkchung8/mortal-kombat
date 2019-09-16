
$(document).ready(function(){
 
    //Character Object 

    var characterList = {

    "johnnyc" : {id: "johnnyc", name:"Johnny Cage", attack: 3, pic: "assets/images/johnnyc.jpg"},
    "mileena" : {id: "mileena", name: "Mileena", attack: 2, pic: "assets/images/mileena.jpg"},
    "raiden"  :{id: "raiden", name: "Raiden", attack: 5, pic: "assets/images/raiden.jpg"},
    "scorpion" : {id: "scorpion", name:"Scorpion", attack: 4, pic: "assets/images/scorpion.jpg"},
    "sonya" : {id: "sonya", name: "Sonya", attack: 4, pic: "assets/images/sonya.jpg"},

    };

    //Setting game variables
    var turnLock = true; 
    var characterLock = false;
    var player;
    var playerAttack;
    var counterAttack;
    var playerLock = [];
    var opponent;
    var attackMultiplier; 
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

        //empty playerLock

        playerHealth = 100; 

     };
    

     function startCharacters (character, characterArea) {
        var characterDiv = $('<div class="character-div" card-id="' + character.id + '">');
        var characterName = $('<div class="character-name">').text(character.name);
        var characterImage = $('<img class="character-image">').attr("src",character.pic);
        characterDiv.append(characterName).append(characterImage);
        $(characterArea).append(characterDiv);
        opponentList.push(character.id);
    };    

    
   $("#character-list").on("click", ".character-div", function (){
        var idPick = $(this).attr("character-id");
        playerLock.push(idPick);
        player = playerLock[0];
        
        

        if (playerLock.length === 0) {
            initializeGame();

            
           } else if (playerLock.length > 0) {
                player = playerLock[0];
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

    $("#player-div").append('<h3 class="health-display">Your Health: ' + playerHealth + '</h3>')
       
        
   };


   function opponentUpdate (opponent) {
       
   };

   function opponentSet (){
        opponentHealth = 100;
        counterAttack = 5; 
       $("#opponent-div").append('<h3 class="health-display">Opponent Health: ' + opponentHealth + '</h3>');
        opponentList = opponentList.filter(e => e !== playerLock[0]);
        var indexRandomize = Math.floor(Math.random() * opponentList.length);
        var opponentSelect = opponentList[indexRandomize];
        console.log(opponentSelect)
    
        $("#opponent-div").append("<h1>enemy goes here</h1>")

        $(".character-div").attr(opponentSelect)

    
    
   };

   function gamePlay (){

    //initialize attack multiplier
    // When user clicks attack 
    // disable attack button until opponent turn is over 
    //subtract attack points from opponent health
    //opponent attacks, subtracting attack points from player health
    //enable attack button 
    //update attack multiplier
    //if opponent health < 0, select new opponent 
    //if user health < 0, Game over 
    //when opponentList.length = 0, User Wins 


   };
    
   

    
});