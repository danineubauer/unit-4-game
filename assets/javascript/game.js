
$(document).ready(function () {

    //Variables: 
    var num = [(Math.random() * 30).toFixed(1)] + 0;
    var wins = 0;
    var losses = 0;
    var userScore = 0;

    //Nodes: 
    $("#randomNumber").text(num);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#userScore").text(userScore);

    //functions:

    var newNum = function() { 
        var num = [(Math.random() * 30).toFixed(1)] + 0;
        $("#randomNumber").text(num);
    }

    //New Game (reload page): 
    $('#newGame').click(function () {
        window.location.reload(true);
    });

    //reload page funtion: 
    var newGameFunc = function () {
        window.location.reload(true);
    };

    //if / else score function:
    var checkScore = function () {
        if (userScore.toFixed(2) === (num)) {
            wins++;
            $("#wins").text(wins); 
            console.log("wins", wins);
            userScore = 0;  
            $("#userScore").text(userScore);   
            alert("Great Job! You paid your bill");
            newNum();
        } else if (userScore > num) {
            losses++;
            $("#losses").text(losses);
            console.log("loses", losses);
            userScore = 0; 
            $("#userScore").text(userScore);
            alert("you lose");
            newNum();
        };
    };

    //clicks on coins:
    $(".tenA").on("click", function (event) {
        userScore = userScore + 0.10;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".half").on("click", function (event) {
        userScore = userScore + 0.50;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".shek").on("click", function (event) {
        userScore = userScore + 1.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".twoShek").on("click", function (event) {
        userScore = userScore + 2.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });

    $(".fiveShek").on("click", function (event) {
        userScore = userScore + 5.00;
        $("#userScore").text(userScore.toFixed(2));
    });

    $(".tenShek").on("click", function (event) {
        userScore = userScore + 10.00;
        $("#userScore").text(userScore.toFixed(2));
        checkScore();
    });
});