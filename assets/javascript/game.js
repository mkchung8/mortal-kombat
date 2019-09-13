
$(document).ready(function(){

    
    //Character Objects 
   var characterList = [
    johnnyCage = {id: "johnnyc", name:"Johnny Cage", attack: 3, counterattack: 10, pic: '<img src="./assets/images/johnnycage.jpg'},
    mileena = {id: "mileena", name: "Mileena", attack: 2, counterattack: 10, pic: '<img src="./assets/images/mileena.jpg'},
    raiden = {id: "raiden", name: "Raiden", attack: 5, counterattack: 20, pic: '<img src="./assets/images/raiden.jpg'},
    scorpion = {id: "scorpion", name:"Scorpion", attack: 4, counterattack: 5, pic: '<img src="./assets/images/scorpion.jpg'},
    sonya = {id: "sonya", name: "Sonya", attack: 4, counterattack: 15, pic: '<img src="./assets/images/sonya.jpg'}
   ]

    //Setting game variables
    var turnLock = false; 
    var playerHealth = 100; 
    var oppponentHealth = 100; 
    

    //Initialize player list on screen 
   console.log(characterList.length);
   console.log(characterList)
  




    $(".character-image").on("click", function(){

    });
    

});