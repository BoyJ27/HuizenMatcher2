var SetAView = function (model, container){

  var p1 = $("<p>Deze 3 huizen zijn door het systeem voor u aanbevolen. Geef van elke suggestie aan in hoeverre het past bij uw voorkeuren op een schaal van 1 tot 10 (1 = 'Helemaal niet passend', 10 = 'Helemaal passend').</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
  var clearfix			= $('<div class="clearfix">' );

var suggestieCont = $('<div id="dilemmaCont"></div>');

  this.volgendeButton = volgendeButton;
  volgendeButtonCont.append(volgendeButton);
  container.append(p1, suggestieCont, volgendeButtonCont, clearfix);

  model.addObserver( this );

	this.update = function( args ){

		if( args == "initialPreferencesDone" ){
      //Implement a timeout of 50ms to make sure that the preferences are first saved in the DB before continuing
      setTimeout(function(){

        var budget = 0;
        var municipality ="";

        //Getting the budget
        $.get("ajax/getPreferencesBudget.php", {userId: model.getCurrentUserID()}).done(function (data) {
          budget = data;
          console.log("The max budget is: "+budget);
        });

        //Getting the municipality
        $.get("ajax/getPreferencesMunicipality.php", {userId: model.getCurrentUserID()}).done(function (data) {
          municipality = data;
          console.log("The municipality is: "+municipality);
        });

        //Implement a timeout of 20ms to make sure that the the budget and municipality are successfully retrieved
        setTimeout(function(){
          var ids = [];

          //Get a list of house ID's in the municipality under the maxbudget
          $.get("ajax/getHouseIDs.php", {gemeente: municipality, maxBudget: budget}).done(function (data) {
            ids = JSON.parse(data);
            console.log("This is the new array: "+ids);
          });

          //Implement a timeout of 20ms to make sure that the the list of IDs is successfully retrieved
          setTimeout(function(){
            var houseA1 = model.getHouses(7, 0, 0);
            var houseA2 = model.getHouses(7, 0, 1);
            var houseA3 = model.getHouses(7, 0, 2);
            var houseA4 = model.getHouses(7, 0, 3);
            var houseA5 = model.getHouses(7, 0, 4);
            var houseA6 = model.getHouses(7, 0, 5);

            var houseB1 = model.getHouses(7, 1, 0);
            var houseB2 = model.getHouses(7, 1, 1);
            var houseB3 = model.getHouses(7, 1, 2);
            var houseB4 = model.getHouses(7, 1, 3);
            var houseB5 = model.getHouses(7, 1, 4);
            var houseB6 = model.getHouses(7, 1, 5);

            var houseC1 = model.getHouses(7, 1, 0);
            var houseC2 = model.getHouses(7, 1, 1);
            var houseC3 = model.getHouses(7, 1, 2);
            var houseC4 = model.getHouses(7, 1, 3);
            var houseC5 = model.getHouses(7, 1, 4);
            var houseC6 = model.getHouses(7, 1, 5);

            //Creating the table with house attributes
            var table = $( "<table class='case'></table>"); // The whole table
            var headers = $( "<tr><th class='twentyfive'>Attributen</th><th class='twentyfive'>Huis A</th><th class='twentyfive'>Huis B</th><th class='twentyfive'>Huis C</th></tr>" ); //The headers
            var priceRow = $("<tr><td class='twentyfive'>Prijs</td><td class='twentyfive' id='lighter'>&euro;"+houseA1+"</td><td class='twentyfive' id='lighter'>&euro;"+houseB1+"</td><td class='twentyfive' id='lighter'>&euro;"+houseC1+"</td></tr>"); // The attribute price
            var typeRow = $("<tr><td class='twentyfive'>Woningtype</td><td class='twentyfive' id='lighter'>"+houseA2+"</td><td class='twentyfive' id='lighter'>"+houseB2+"</td><td class='twentyfive' id='lighter'>"+houseC2+"</td></tr>");
            var surfaceRow = $("<tr><td class='twentyfive'>Woonoppervlak</td><td class='twentyfive' id='lighter'>"+houseA3+" m<sup>2</sup></td><td class='twentyfive' id='lighter'>"+houseB3+" m<sup>2</sup></td><td class='twentyfive' id='lighter'>"+houseC3+" m<sup>2</sup></td></tr>");
            var bedroomRow = $("<tr><td class='twentyfive'>Aantal slaapkamers</td><td class='twentyfive' id='lighter'>"+houseA4+"</td><td class='twentyfive' id='lighter'>"+houseB4+"</td><td class='twentyfive' id='lighter'>"+houseC4+"</td></tr>");
            var surroundingsRow = $("<tr><td class='twentyfive'>Bebouwde omgeving</td><td class='twentyfive' id='lighter'>"+houseA5+"</td><td class='twentyfive' id='lighter'>"+houseB5+"</td><td class='twentyfive' id='lighter'>"+houseC5+"</td></tr>");
            var distanceRow = $("<tr><td class='twentyfive'>Afstand tot basisschooltext</td><td class='twentyfive' id='lighter'>"+houseA6+" m</td><td class='twentyfive' id='lighter'>"+houseB6+" m</td><td class='twentyfive' id='lighter'>"+houseC6+" m</td></tr>");
            var lastRow = $("<tr><td class='twentyfive'>Cijfer voor aanbeveling (1-10)</td><td class='twentyfive' id='lighter' ><input type='number' name='evalA' value='evalA'></td><td class='twentyfive' id='lighter'><input type='number' name='evalB' value='evalB'></td><td class='twentyfive' id='lighter'><input type='number' name='evalC' value='evalC'></td></tr>");

            //Putting the rows into the Table
            table.append(headers, priceRow, typeRow, surfaceRow, bedroomRow, surroundingsRow, distanceRow, lastRow);

            // Putting the table in the container
            suggestieCont.append(table);
            container.show();
          }, 20);
        }, 20);
      }, 50);
		}
    if( args == "setADone"){
			container.hide();
		}
	}

	container.hide();
}
