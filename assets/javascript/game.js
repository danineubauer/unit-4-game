
$(document).ready(function() {

    //Variables: 
    var num = [(Math.random()*30).toFixed(1)]+0;
    console.log(num);
    var wins = 0; 
    var losses = 0; 
    var userScore = 0;
    
    //Nodes: 
    $("#randomNumber").text(num);
    $("#wins").text(wins);
    $("#losses").text(losses); 
    $("#userScore").text(userScore);
    
    //functions:
        //New Game (reload page): 
    $('#newGame').click(function() {
        window.location.reload(true);
    });

        //clicks on coins:
    $(".tenA").on("click", function(event) { 
        userScore = userScore + 0.10;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".half").on("click", function(event) {
        userScore = userScore + 0.50;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".shek").on("click", function(event){
        userScore = userScore + 1.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".twoShek").on("click", function(event) {
        userScore = userScore + 2.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".fiveShek").on("click", function(event) {
        userScore = userScore + 5.00;
        $("#userScore").text(userScore.toFixed(2));
    });

    $(".tenShek").on("click", function(event) {
        userScore = userScore + 10.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    var checkScore = function(){
        if (userScore === num) { 
            alert("you win");
        } else if (userScore > num) {
            alert("you lose");
        };
    };
    


});


      


    





        //Display four crystals as buttons: 
        //When clicked, add value attached to them to playerScore. 
        //Get computer to choose random number: 
        //hide amount until player clicks a crystal. 
        //When crystal is clicked, update player's count. 
        //When crystals are clicked, a specific amount of points are added to he player's total score. 
        //When score matches random number - wins. 
        //when score goes above random number - losses. 
        //Begin the game again: 
            //reset playerScore
            //new random number 
            //set new values to crystals
            //update number of games the player wins and loses. 