//Execute this code after the DOM has fully loaded. 
$(document).ready(function () {

    const characterObj = {
        "johnnyc": {
            id: 0,
            name: "Johnny Cage",
            attack: 3,
            image: "assets/images/johnnyc.jpg"
        },
        "mileena": {
            id: 1,
            name: "Mileena",
            attack: 2,
            image: "assets/images/mileena.jpg"
        },
        "raiden": {
            id: 2,
            name: "Raiden",
            attack: 5,
            image: "assets/images/raiden.jpg"
        },
        "scorpion": {
            id: 3,
            name: "Scorpion",
            attack: 4,
            image: "assets/images/scorpion.jpg"
        },
        "sonya": {
            id: 4,
            name: "Sonya",
            attack: 4,
            image: "assets/images/sonya.jpg"
        }
    };

    // Theme Song Controls 
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/mkthemesong.mp3");

    $(".play-button").on("click", function () {
        audioElement.play();
    });

    $(".pause-button").on("click", function () {
        audioElement.pause();
    });

    // Setting Game Variables 
    var player; 
    var opponent; 
    var opponentList = []; 
    var turnCounter = 0; 
    var killCount = 0; 

  // Function for handling game messages during play 
    const renderMessage = function (message) {
        var messageBoard = $("#game-message"); 
        var newMessage = $("<div>").text(message); 
        messageBoard.append(newMessage); 
    }; 

    function startCharacters (character, characterArea) {
        var characterDiv = $('<div class="character-div" character-id="' + character.id + '">');
        var characterName = $('<div class="character-name">').text(character.name);
        var characterImage = $('<img class="character-image">').attr("src",character.image);
        characterDiv.append(characterName).append(characterImage);
        $(characterArea).append(characterDiv);
        opponentList.push(character.id);
    };    

    function initializeGame () {
        let initialMessage = "Welcome to Mortal Kombat. Choose your fighter!!!"; 
        renderMessage(initialMessage); 

        for (var key in characterObj) {
            startCharacters(characterObj[key],"#character-list"); 
        };

        $("#character-list").on("click", ".character-div", function(){
            var idPick = $(this).attr("character-id"); 
            console.log(`User has chosen player with id:${idPick}`);
             
        })
    //     $("#character-list").on("click", ".character-div", function (){
    //         var idPick = $(this).attr("character-id");
    //         playerLock.push(idPick);
    //         player = playerLock[0];
            
            
    
    //         if (playerLock.length === 0) {
    //             initializeGame();
    
                
    //            } else if (playerLock.length > 0) {
    //                 player = playerLock[0];
    //                $(this).remove();
    //                var player = $("#player-div")
    //                player.append($(this)); 
    
    //                playerSet();
    //                opponentUpdate();
    //                opponentSet();
    //                gamePlay();
    //            };
    
    
    
            
    //    });

    }; 
  
    initializeGame(); 


}); 