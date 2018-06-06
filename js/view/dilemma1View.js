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
      var houseA1 = model.getHouses(0, 0, 0); // price
      var houseA2 = model.getHouses(0, 0, 1); // type
      var houseA3 = model.getHouses(0, 0, 2); // Woonoppervlakte
      var houseA4 = model.getHouses(0, 0, 3); // aantal Slaapkamers
      var houseA5 = model.getHouses(0, 0, 4); // omgeving
      var houseA6 = model.getHouses(0, 0, 5); // afstand tot school

      var houseB1 = model.getHouses(0, 1, 0);
      var houseB2 = model.getHouses(0, 1, 1);
      var houseB3 = model.getHouses(0, 1, 2);
      var houseB4 = model.getHouses(0, 1, 3);
      var houseB5 = model.getHouses(0, 1, 4);
      var houseB6 = model.getHouses(0, 1, 5);

      //Public
      this.houseA2 = houseA2;
      this.houseA3 = houseA3;
      this.houseA4 = houseA4;
      this.houseA5 = houseA5;
      this.houseA6 = houseA6;

      this.houseB2 = houseB2;
      this.houseB3 = houseB3;
      this.houseB4 = houseB4;
      this.houseB5 = houseB5;
      this.houseB6 = houseB6;

      //Creating the table with house attributes
      var table = $( "<table class='case'></table>"); // The whole table
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



    if ( args == "dilemma1Done" ){
      container.hide();
    }
  }
  container.hide();


}
