var Dilemma1View = function (model, container) {

  /***************************
  TESTING VARIABLES
  ***************************/

  // Variables holding the attributes
  var houseA1 = model.houses[0][0];
  var houseA2 = model.houses[0][1];
  var houseA3 = model.houses[0][2];

  var houseB1 = model.houses[1][0];
  var houseB2 = model.houses[1][1];
  var houseB3 = model.houses[1][2];

  /***************************
  END TESTING VARIABLES
  ***************************/

  //Content
  var h1 = $("<p>Kies het huis welke het beste bij uw voorkeuren past.</p> <p>tabel met huizen, radiobuttons, volgende knop</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );
  //This is the table containing the attributes, not yet with radiobuttons
  var table = $( "<table class='case'><tr><th>House A</th><th class='centercell'>Attributes</th><th>House B</th></tr><tr><td>"+houseA1+"</td><td class='centercell'>Price</td><td>"+houseB1+"</td></tr><tr><td>"+houseA2+"</td><td class='centercell'>Surface</td><td>"+houseB2+"</td></tr><tr><td>"+houseA3+"</td><td class='centercell'>No. of rooms</td><td>"+houseB3+"</td></tr></table>");

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var dilemma1Cont = $('<div id="dilemmaCont"></div>');
  // var instruction1 = $('<center><center>');

  //Centering the instruction container
  // dilemma1Cont.append(instruction1);
  dilemma1Cont.append(table);

  // Appending the h1, instructions container and the button container to the main div
  container.append(h1, dilemma1Cont, volgendeButtonCont, clearfix);

  // Observer
  model.addObserver( this );
  this.update = function(args){
    if ( args == "instructionsDone"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "dilemma1Done" ){
      container.hide();
    }
  }
  container.hide();


}
