var SetAController = function ( model, view ){

  //WHen the next button is clicked, the following needs to happen:
  view.volgendeButton.click(function(){
    var scoreA = $("#scoreA").val();
    var scoreB = $("#scoreB").val();
    var scoreC = $("#scoreC").val();

    scoreCheck = function(scoreval){
      score = scoreval;
      if (score > 0 && score < 11) {
        return true;
      } else {
        return false;
      }
    }

    //Check if all fields are filled in with a score between 1 and 10
    if ( scoreCheck(scoreA) == true && scoreCheck(scoreB) == true && scoreCheck(scoreC) == true ) {

      //Write the attributes and the house scores to Database
      model.insertScores(view.houseA1, view.houseA2, view.houseA3, view.houseA4, view.houseA5, view.houseAC, scoreA, view.houseB1, view.houseB2, view.houseB3, view.houseB4, view.houseB5, view.houseB6, scoreB, view.houseC1, view.houseC2, view.houseC3, view.houseC4, view.houseC5, view.houseC6, scoreC);

      //When done:
      model.setADone();
    } else {
      alert("Geef alstublieft per huis een cijfer tussen 1 en 10.");
    }
  });
}
