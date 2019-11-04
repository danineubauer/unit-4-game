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
    $("#randomCount").text(randomNumber)
    
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
        } else {
            losses++;
            alert("You lost! Your count didn't add up to the number") 
        }
    }

    //create event listener for each crystal when clicked: 
    //add up the user score
    //check if user count equals the random count: 



});



//OLD CODE 

// $(document).ready(function () {

//     //Variables: 
//     var num = [(Math.random() * 30).toFixed(1)] + 0;
//     var wins = 0;
//     var losses = 0;
//     var userScore = 0;

//     //Nodes: 
//     $("#randomNumber").text(num);
//     $("#wins").text(wins);
//     $("#losses").text(losses);
//     $("#userScore").text(userScore);

//     //functions:

//     var newNum = function() { 
//         var num = [(Math.random() * 30).toFixed(1)] + 0;
//         $("#randomNumber").text(num);
//     }

//     //New Game (reload page): 
//     $('#newGame').click(function () {
//         window.location.reload(true);
//     });

//     //reload page funtion: 
//     var newGameFunc = function () {
//         window.location.reload(true);
//     };

//     //if / else score function:
//     var checkScore = function () {
//         if (userScore.toFixed(2) === (num)) {
//             console.log(userScore, num);
//             wins++;
//             $("#wins").text(wins); 
//             console.log("wins", wins);            
//             userScore = 0;  
//             $("#userScore").text(userScore);   
//             alert("Great Job! You paid your bill");
//             newNum();
//         } else if (userScore > num) {
//             console.log(userScore, num);
//             losses++;
//             $("#losses").text(losses);
//             console.log("loses", losses);
//             userScore = 0; 
//             $("#userScore").text(userScore);
//             alert("you lose");
//             newNum();
//         };
//     };

//     //clicks on coins:
//     $(".tenA").on("click", function (event) {
//         userScore = userScore + 0.10;
//         $("#userScore").text(userScore.toFixed(2));
//         checkScore();
//     });

//     $(".half").on("click", function (event) {
//         userScore = userScore + 0.50;
//         $("#userScore").text(userScore.toFixed(2));
//         checkScore();
//     });

//     $(".shek").on("click", function (event) {
//         userScore = userScore + 1.00;
//         $("#userScore").text(userScore.toFixed(2));
//         checkScore();
//     });

//     $(".twoShek").on("click", function (event) {
//         userScore = userScore + 2.00;
//         $("#userScore").text(userScore.toFixed(2));
//         checkScore();
//     });

//     $(".fiveShek").on("click", function (event) {
//         userScore = userScore + 5.00;
//         $("#userScore").text(userScore.toFixed(2));
//     });

//     $(".tenShek").on("click", function (event) {
//         userScore = userScore + 10.00;
//         $("#userScore").text(userScore.toFixed(2));
//         checkScore();
//     });
// });