//Execute this code after the DOM has fully loaded. 
$(document).ready(function () {

    const characterObj = {
        "johnnyc": {
            id: "johnnyc",
            name: "Johnny Cage",
            health: 130,
            attack: 8,
            counterAttack: 15,
            image: "assets/images/johnnyc.jpg"
        },
        "mileena": {
            id: "mileena",
            name: "Mileena",
            health: 105,
            attack: 15,
            counterAttack: 25,
            image: "assets/images/mileena.jpg"
        },
        "raiden": {
            id: "raiden",
            name: "Raiden",
            health: 180,
            attack: 20,
            counterAttack: 45,
            image: "assets/images/raiden.jpg"
        },
        "scorpion": {
            id: "scorpion",
            name: "Scorpion",
            health: 150,
            attack: 8,
            counterAttack: 20,
            image: "assets/images/scorpion.jpg"
        },
        "sonya": {
            id: "sonya",
            name: "Sonya",
            health: 120,
            attack: 25,
            counterAttack: 30,
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

    function finishHim() {
        playMessageClear();
        messageClear(); 
        var image = $("<img id='finish-him'>").attr("src", "assets/images/finish-him.jpg");
        $("#play-message").append(image);
        var sound = document.createElement("audio");
        sound.setAttribute("src", "assets/finishhim.mp3");
        sound.play();
        setTimeout(function () { $("#play-message").text("") }, 1500);
    }

    // Setting Game Variables 
    var roundCount = 0;
    var attackMultiplier = 0;
    var player;
    var opponent;
    var playerHealth;
    var opponentHealth;
    var playerAttack;
    var opponentAttack;
    var playerCounterAttack;
    var opponentCounterAttack;

    // Function for handling game messages during play 
    const renderMessage = function (message) {
        var messageBoard = $("#game-message");
        var newMessage = $("<div>").text(message);
        messageBoard.append(newMessage);
    };

    const renderPlayMessage = function (message) {
        var messageBoard = $("#play-message");
        var newMessage = $("<div>").text(message);
        messageBoard.append(newMessage);
    }

    const messageClear = function () {
        var messageBoard = $("#game-message");
        messageBoard.text("");
    }

    const playMessageClear = function () {
        var messageBoard = $("#play-message");
        messageBoard.text("");
    }

    function startCharacters(character, characterArea) {

        var characterDiv = $(`<div class = "character-div" 
                              character-id = ${character.id}
                              health-points = ${character.health}
                              attack = ${character.attack}
                              counter = ${character.counterAttack}
                              name = ${character.name}
                              >`);

        var characterName = $('<div class="character-name">').text(character.name);
        var characterImage = $('<img class="character-image">').attr("src", character.image);
        characterDiv.append(characterName).append(characterImage);
        $(characterArea).append(characterDiv);

    };

    function initializeGame() {
        let initialMessage = "Welcome to Mortal Kombat. Choose your character!!!";
        renderMessage(initialMessage);

        for (var key in characterObj) {
            startCharacters(characterObj[key], "#character-list");
        };

        $("#character-list").one("click", ".character-div", function () {
            player = $(this).attr("character-id");
            $(this).remove();
            var playerDiv = $("#player-div");
            playerName = $(this).attr("character-name");
            playerDiv.append($(this));
            messageClear();
            opponentSelect();
        });
    };

    function opponentSelect() {
        console.log(`round count = ${roundCount}`)
        if (roundCount === 0) {
            let opponentSelectMessage = "Character selected! Now choose your enemy!";
            renderMessage(opponentSelectMessage);
        } else if (roundCount === 4) {
            gameOver(); 
        } else {
            $("#opponent-div").children(".character-div").remove();
            $("#opponent-health").hide(); 
            let opponentSelectMessage = "Choose your next enemy to fight!!!!";
            renderMessage(opponentSelectMessage);
        }

        $("#character-list").one("click", ".character-div", function () {
            opponent = $(this).attr("character-id");
            $(this).remove();
            var opponentDiv = $("#opponent-div");
            opponentDiv.append($(this));
            messageClear();
            let playerSetMessage = "Opponent Selected! The Battle Begins!";
            renderMessage(playerSetMessage);
            roundCount++;
            setTimeout(function () { gamePlay() }, 3000);
        });

    };

    initializeGame();

    function gamePlay() {
        $("#opponent-health").show(); 
        messageClear();
        let roundMessage = `Round ${roundCount}! FIGHT!!!!`;
        renderMessage(roundMessage);
        // Player Stats
        playerAttack = $("#player-div").children(".character-div").attr("attack");
        playerCounterAttack = $("#player-div").children(".character-div").attr("counter");
        playerHealth = $("#player-div").children(".character-div").attr("health-points");
        playerHealthDiv = $("#player-health");
        playerPointSpan = $("<span class='health-points' id='p-value'>").text(playerHealth);
        playerHealthDiv.text("HP ");
        if (playerHealth >= 100) {
            playerPointSpan.css("color", "green");
        }
        if (playerHealth <= 70) {
            playerPointSpan.css("color", "yellow");
        }
        if (playerHealth <= 20) {
            playerPointSpan.css("color", "red");
        }
        playerHealthDiv.append(playerPointSpan);

        // Opponent Stats
        opponentAttack = $("#opponent-div").children(".character-div").attr("attack");
        opponentCounterAttack = $("#opponent-div").children(".character-div").attr("counter");
        opponentHealth = $("#opponent-div").children(".character-div").attr("health-points");
        console.log(`opponentAttack = ${opponentAttack} opponentCounterAttack=${opponentCounterAttack} opponentHealth=${opponentHealth}`)
        opponentHealthDiv = $("#opponent-health");
        opponentPointSpan = $("<span class='health-points' id='o-value'>").text(opponentHealth);
        opponentHealthDiv.text("HP ");
        if (opponentHealth >= 100) {
            opponentPointSpan.css("color", "green");
        }
        if (opponentHealth <= 70) {
            opponentPointSpan.css("color", "yellow");
        }
        if (opponentHealth <= 10) {
            opponentPointSpan.css("color", "red");
        }
        opponentHealthDiv.append(opponentPointSpan);

        setTimeout(function () { playerRound(); }, 2000);

        function playerRound() {
            if (playerHealth <= 0) {
                messageClear();
                let loserMessage = "GAME OVER! YOU LOSE!!!!";
                renderMessage(loserMessage);
                gameOver();
            } else {
                console.log("player round triggered");
                attackMultiplier++;
                playMessageClear();
                var attackButton = '<button type="button" class="btn btn-danger" id="attackButton">ATTACK</button>';
                var attackButtonDiv = $("#attack-btn");
                attackButtonDiv.append(attackButton);
                let playMessage = "Click the 'ATTACK' button to make your move!";
                renderPlayMessage(playMessage);

                $("#attackButton").one("click", function () {
                    var damagePoints = playerAttack * attackMultiplier;
                    var playerMessage = `You attacked ${opponent} for ${damagePoints} damage!`;
                    playMessageClear();
                    renderPlayMessage(playerMessage);
                    opponentHealth -= damagePoints;
                    console.log(`opponent health = ${opponentHealth}`);
                    $("#o-value").text(opponentHealth);
                    if (opponentHealth >= 100) {
                        $("#o-value").css("color", "green");
                    }
                    if (opponentHealth <= 70) {
                        $("#o-value").css("color", "yellow");
                    }
                    if (opponentHealth <= 10) {
                        $("#o-value").css("color", "red");
                        finishHim();
                    }
                    setTimeout(function () { opponentRound(); }, 2000);
                });
            };
        }

        function opponentRound() {
            console.log('op round triggered');
            $("#attackButton").remove();
            $("#attack-btn").html(`<button type="button" class="btn btn-warning" id="op-attack">Opponent Making Attack...</button>`);
            var damagePoints = opponentCounterAttack;
            var opponentMessage = `${opponent} attacked you back for ${damagePoints} damage!`;
            renderPlayMessage(opponentMessage);
            playerHealth -= damagePoints;
            console.log(`player health = ${playerHealth}`);
            $("#p-value").text(playerHealth);
            if (playerHealth >= 100) {
                $("#p-value").css("color", "green");
            }
            if (playerHealth <= 70) {
                $("#p-value").css("color", "yellow");
            }
            if (playerHealth <= 10) {
                $("#p-value").text("0");
                $("#p-value").css("color", "red");
                finishHim();
            }
            if (opponentHealth > 0) {
                setTimeout(function () {
                    $("#op-attack").remove();
                    playMessageClear();
                    playerRound();
                }, 3000);
            } else {
                messageClear();
                playMessageClear();
                $("#op-attack").remove();
                $("#attack-btn").html(`<h1 class="victory-text">VICTORY!!! +${roundCount}</h1>`);
                opponentSelect();
            }
        }


    };

    function gameOver() {
        console.log(`game over function trigger`);
        $("#play-message").html(`<button type="button" class="btn btn-danger" id="play-again">PLAY AGAIN</button>`);
        if (playerHealth <= 0) {
            $("#p-title").css("color", "red");
            $("#p-title").css("border", "3px red");
            $("#p-title").text("LOSER");
            $("#o-title").css("color", "green");
            $("#o-title").css("border", "3px green");
            $("#o-title").text("WINNER");
        }
        if (opponentHealth <= 0) {
            $("#o-title").css("color", "red"); 
            $("#o-title").css("border", "3px red"); 
            $("#o-title").text("LOSER"); 
            $("#p-title").css("color", "green"); 
            $("#p-title").css("border", "3px green"); 
            $("#p-title").text("WINNER"); 
        }
    
        $("#board-div").empty(); 
        var image = $("<img id='flawless-image'>").attr("src", "assets/images/flawless.jpg");
        $("#board-div").append(image); 
        var message = "GAME OVER"; 
        renderMessage(message); 
        $("#play-again").one("click", function () {
            location.reload();
        });
    }



}); 