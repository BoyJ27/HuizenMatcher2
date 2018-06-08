var Dilemma16View = function (model, container) {

  var h1 = $("<p>Kies het huis welke het beste bij uw voorkeuren past.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var dilemma1Cont = $('<div id="dilemmaCont"></div>');
  // var instruction1 = $('<center><center>');
  // Appending the h1, instructions container and the button container to the main div
  container.append(h1, dilemma1Cont, volgendeButtonCont, clearfix);

  model.addObserver( this );
  this.update = function(args){
    if ( args == "dilemma15Done"){
      // Load the house attributes for this dilemma:
      var houseA1 = model.getHouses(15, 0, 0);
      var houseA2 = model.getHouses(15, 0, 1);
      var houseA3 = model.getHouses(15, 0, 2);
      var houseA4 = model.getHouses(15, 0, 3);
      var houseA5 = model.getHouses(15, 0, 4);
      var houseA6 = model.getHouses(15, 0, 5);

      var houseB1 = model.getHouses(15, 1, 0);
      var houseB2 = model.getHouses(15, 1, 1);
      var houseB3 = model.getHouses(15, 1, 2);
      var houseB4 = model.getHouses(15, 1, 3);
      var houseB5 = model.getHouses(15, 1, 4);
      var houseB6 = model.getHouses(15, 1, 5);

      //Create arrays to carry the 0101 for each house
      var attributesHouseA = [];
      var attributesHouseB = [];

      attributesHouseA = model.createMatrix(houseA1, houseA2, houseA3, houseA4, houseA5, houseA6);
      attributesHouseB = model.createMatrix(houseB1, houseB2, houseB3, houseB4, houseB5, houseB6);

      //Public
      this.attributesHouseA = attributesHouseA;
      this.attributesHouseB = attributesHouseB;

      //Creating the table with house attributes
      var table = $( "<table class='case' id='case16'></table>"); // The whole table
      var headers = $( "<tr><th>Huis A</th><th class='centercell'>Attributen</th><th>Huis B</th></tr>" ); //The headers
      var priceRow = $("<tr><td>&euro;"+houseA1+"</td><td class='centercell'>Prijs</td><td>&euro;"+houseB1+"</td></tr>"); // The attribute price
      var typeRow = $("<tr><td>"+houseA2+"</td><td class='centercell'>Woningtype</td><td>"+houseB2+"</td></tr>");
      var surfaceRow = $("<tr><td>"+houseA3+"m<sup>2</sup></td><td class='centercell'>Woonoppervlakte</td><td>"+houseB3+"m<sup>2</sup></td></tr>");
      var bedroomRow = $("<tr><td>"+houseA4+"</td><td class='centercell'>Slaapkamers</td><td>"+houseB4+"</td></tr>");
      var surroundingsRow = $("<tr><td>"+houseA5+"</td><td class='centercell'>Bebouwde omgeving</td><td>"+houseB5+"</td></tr>");
      var distanceRow = $("<tr><td>"+houseA6+" meter</td><td class='centercell'>Afstand tot basisschool</td><td>"+houseB6+" meter</td></tr>");
      var lastRow = $("<tr><td id = 'lastrow' >Huis A <input type='radio' name='choiceRadio' value='house A'></td><td id='lastrow'>Geen voorkeur <input type='radio' name='choiceRadio' value='neutral'></td><td id='lastrow'>Huis B <input type='radio' name='choiceRadio' value='house B'></td></tr>");

      //Putting the rows into the Table
      table.append(headers, priceRow, typeRow, surfaceRow, bedroomRow, surroundingsRow, distanceRow, lastRow);

      // Putting the table in the container
      dilemma1Cont.append(table);

        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "dilemma16Done" ){
      container.hide();
    }
  }
  container.hide();


}
