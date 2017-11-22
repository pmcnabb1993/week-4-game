$(document).ready(function() {


// These variables are declared in global scope//
    var numberMatch = 0;
    var numberScore = 0;
    var wins = 0;
    var losses = 0;
    var buttonBlue;
    var buttonGreen;
    var buttonPink;
    var buttonOrange;

    
    function crystalGameStart(result) {

      //The number you need to match will be set randomly between 50 and 100//
      numberMatch = Math.floor(Math.random() * (100 - 50 + 1) ) + 50;

      //The crystal buttons will be randomly assigned a number between 1 and 10//
      buttonBlue = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
      buttonGreen = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
      buttonPink = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;
      buttonOrange = Math.floor(Math.random() * (10 - 1 + 1) ) + 1;


      //This will display the text to the user//
      $('#numberMatch').html(numberMatch);
      $('#numberScore').html(numberScore);
      $('#wins').html(wins);
      $('#losses').html(losses);
      
      
      
      //Crystal number will be added to score//
      $('#buttonBlue').click(function() {
        numberScore = (numberScore + buttonBlue);
        $('#numberScore').html(numberScore);
      })

      $('#buttonGreen').click(function() {
      	numberScore = (numberScore + buttonGreen);
      	$('#numberScore').html(numberScore);
      })

      $('#buttonPink').click(function() {
      	numberScore = (numberScore + buttonGreen);
      	$('#numberScore').html(numberScore);
      })

      $('#buttonOrange').click(function(){
      	numberScore = (numberScore + buttonOrange);
      	$('#numberScore').html(numberScore);
      })



      //Win and Lose function
      function hasPlayerWon () {
        if (numberScore == numberMatch) {
          wins++;
          console.log("user won")
          $("#winsTotal").html("wins: " + wins);//
          crystalGameStart();
        }
        if (numberScore > numberMatch) {
      	  losses++;
      	  $("#lossesTotal").html("losses: " + losses);//
      	  crystalGameStart();
      
        }
      }
    

    //crystalPlayGame end	
    }


    if (wins == 0) {
		crystalGameStart();
	}

//end document 
})