var SetAController = function ( model, view ){
  houseA1 = view.houseA1;
  houseA2 = view.houseA2;
  houseA3 = view.houseA3;
  houseA4 = view.houseA4;
  houseA5 = view.houseA5;
  houseA6 = view.houseA6;

  houseB1 = view.houseB1;
  houseB2 = view.houseB2;
  houseB3 = view.houseB3;
  houseB4 = view.houseB4;
  houseB5 = view.houseB5;
  houseB6 = view.houseB6;

  houseC1 = view.houseC1;
  houseC2 = view.houseC2;
  houseC3 = view.houseC3;
  houseC4 = view.houseC4;
  houseC5 = view.houseC5;
  houseC6 = view.houseC6;

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
      model.insertScores(houseA1, houseA2, houseA3, houseA4, houseA5, houseA6, scoreA, houseB1, houseB2, houseB3, houseB4, houseB5, houseB6, scoreB, houseC1, houseC2, houseC3, houseC4, houseC5, houseC6, scoreC);
      //(pricevalA, typevalA, surfacevalA, bedroomsvalA, surroundingsvalA, distancevalA, scorevalA, pricevalB, typevalB, surfacevalB, bedroomsvalB, surroundingsvalB, distancevalB, scorevalB, pricevalC, typevalC, surfacevalC, bedroomsvalC, surroundingsvalC, distancevalC, scorevalC)

      //When done:
      model.setADone();
    } else {
      alert("Geef alstublieft per huis een cijfer tussen 1 en 10.");
    }
  });
}
