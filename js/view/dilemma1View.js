var Dilemma1View = function (model, container) {

  //Content
  var h1 = $("<p>Kies het huis welke het beste bij uw voorkeuren past.</p> <p>tabel met huizen, radiobuttons, volgende knop</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );


  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var dilemma1Cont = $('<div id="dilemmaCont"></div>');
  // var instruction1 = $('<center><center>');



  // Appending the h1, instructions container and the button container to the main div
  container.append(h1, dilemma1Cont, volgendeButtonCont, clearfix);

  // Observer
  model.addObserver( this );
  this.update = function(args){
    if ( args == "instructionsDone"){ // When the instructions have been read:

      // Load the house attributes for this dilemma:
      var houseA1 = model.getHouses(0, 0, 0);
      var houseA2 = model.getHouses(0, 0, 1);
      var houseA3 = model.getHouses(0, 0, 2);

      var houseB1 = model.getHouses(0, 1, 0);
      var houseB2 = model.getHouses(0, 1, 1);
      var houseB3 = model.getHouses(0, 1, 2);

      //Creating the table with house attributes (NOT YET WITH RADIO BUTTONS)
      var table = $( "<table class='case'><tr><th>House A</th><th class='centercell'>Attributes</th><th>House B</th></tr><tr><td>"+houseA1+"</td><td class='centercell'>Price</td><td>"+houseB1+"</td></tr><tr><td>"+houseA2+"</td><td class='centercell'>Surface</td><td>"+houseB2+"</td></tr><tr><td>"+houseA3+"</td><td class='centercell'>No. of rooms</td><td>"+houseB3+"</td></tr><tr><td><input type='radio' name='choiceRadio' value='house A'></td><td class='centercell'></td><td><input type='radio' name='choiceRadio' value='house B'></td></tr><tr class='lastrow'><td></td><td class='centercell'>No preference: <input type='radio' name='choiceRadio' value='neutral'></td><td></td></tr></table>");

      // Putting the table in the container
      dilemma1Cont.append(table);

      /***************************
      END TESTING VARIABLES
      ***************************/
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "dilemma1Done" ){
      container.hide();
    }
  }
  container.hide();


}
