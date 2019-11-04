$(document).ready(function() { 

    var wins;
    var losses; 

    var randomCountNumber; 
    var yourCount = 0;

    var crystalOne = 0; 
    var crystalTwo = 0; 
    var crystalThree = 0; 
    var crystalFour = 0;

    //generate random count: 
    randomCountNumber = Math.floor(Math.random() * 101 + 19);
    //generate crystal count: 

    //display random count:    
    $("#randomCount").text(randomCountNumber);


    //display wins/loses: 
    $("#wins").text(wins);
    $("#losses").text(losses); 
    $("#yourCount").text(yourCount); 
    
    var crystalOne = crystalRandomNumber(); 
    console.log("1: ", crystalOne);

    var crystalTwo = crystalRandomNumber(); 
    console.log("2: ", crystalTwo);

    var crystalThree = crystalRandomNumber(); 
    console.log("3: ", crystalThree);

    var crystalFour = crystalRandomNumber(); 
    console.log("4: ", crystalFour);


    //random number for crystals: 
    function crystalRandomNumber() { 
        return Math.floor(Math.random() * 20)
    }

    //When crystals clicked: 
    $("#crystalOne").on("click", function(){ 
        console.log("1 clicked")
        crystalClick(crystalOne) }); 

    $("#crystalTwo").on("click", function(){ 
        crystalClick(crystalTwo) }); 

    $("#crystalThree").on("click", function(){ 
        crystalClick(crystalThree) }); 

    $("#crystalFour").on("click", function(){ 
        crystalClick(crystalFour) }); 

    function crystalClick(crystalNum) { 
        yourCount = yourCount + crystalNum;
        $("yourCount").text(yourCount);
        if (yourCount === randomCountNumber) { 
            wins++; 
            alert("You won!")
            newGame();
        } else if ( yourCount < randomCountNumber) {
            $("#yourCount").text(yourCount);
            console.log("your Count: ", yourCount);
            console.log("random Count: ", randomCountNumber);
        } else {
            losses++;
            newGame();
            alert("You lost! Your count didn't add up to the number") 
        }
    }

    function newGame() {
        randomCountNumber = 0;
        yourCount = 0; 
        crystalRandomNumber();
    }

});

