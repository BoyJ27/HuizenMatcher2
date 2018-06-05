var Dilemma1View = function (model, container) {

  var h1 = $("<p>Kies het huis welke het beste bij uw voorkeuren past.</p>");
  //Content
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
      var houseA4 = 0;
      var houseA5 = 0;
      var houseA6 = 0;

      var houseB1 = model.getHouses(0, 1, 0);
      var houseB2 = model.getHouses(0, 1, 1);
      var houseB3 = model.getHouses(0, 1, 2);
      var houseB4 = 0;
      var houseB5 = 0;
      var houseB6 = 0;

      //Creating the table with house attributes
      // var table = $( "<table class='case'><tr><th>House A</th><th class='centercell'>Attributes</th><th>House B</th></tr><tr><td>"+houseA1+"</td><td class='centercell'>Price</td><td>"+houseB1+"</td></tr><tr><td>"+houseA2+"</td><td class='centercell'>Surface</td><td>"+houseB2+"</td></tr><tr><td>"+houseA3+"</td><td class='centercell'>No. of rooms</td><td>"+houseB3+"</td></tr><tr class='choiceRow'><td>House A: <input type='radio' name='choiceRadio' value='house A'></td><td>House B: <input type='radio' name='choiceRadio' value='house B'></td></tr><tr><td id='lastrow'></td><td id='lastrow'>No preference: <input type='radio' name='choiceRadio' value='neutral'></td><td id='lastrow'></td></tr></table>");

      var table = $( "<table class='case'></table>"); // The whole table
      var headers = $( "<tr><th>House A</th><th class='centercell'>Attributes</th><th>House B</th></tr>" ); //The headers
      var priceRow = $("<tr><td>"+houseA1+"</td><td class='centercell'>Price</td><td>"+houseB1+"</td></tr>"); // The attribute price
      var typeRow = $("<tr><td>"+houseA2+"</td><td class='centercell'>Type</td><td>"+houseB2+"</td></tr>");
      var surfaceRow = $("<tr><td>"+houseA3+"</td><td class='centercell'>Living surface</td><td>"+houseB3+"</td></tr>");
      var bedroomRow = $("<tr><td>"+houseA4+"</td><td class='centercell'>No. of bedrooms</td><td>"+houseB4+"</td></tr>");
      var surroundingsRow = $("<tr><td>"+houseA5+"</td><td class='centercell'>Built environment</td><td>"+houseB5+"</td></tr>");
      var distanceRow = $("<tr><td>"+houseA6+"</td><td class='centercell'>Distance to lower school</td><td>"+houseB6+"</td></tr>");
      var lastRow = $("<tr><td id = 'lastrow' >House A <input type='radio' name='choiceRadio' value='house A'></td><td id='lastrow'>No preference <input type='radio' name='choiceRadio' value='neutral'></td><td id='lastrow'>House B <input type='radio' name='choiceRadio' value='house B'></td></tr>");

      //Putting the rows into the Table
      table.append(headers, priceRow, typeRow, surfaceRow, bedroomRow, surroundingsRow, distanceRow, lastRow);

      // Putting the table in the container
      dilemma1Cont.append(table);

      //The container is visible, the elements within it might be hidden
      container.show();
      }

    if ( args == "dilemma1Done" ){
      container.hide();
    }
  }
  container.hide();


}
