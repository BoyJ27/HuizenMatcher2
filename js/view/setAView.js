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
          var three = model.getThree();

          //Get a list of house ID's in the municipality under the maxbudget
          // $.get("ajax/getHouseIDs.php", {gemeente: municipality, maxBudget: budget}).done(function (data) {
          //   ids = JSON.parse(data);
          //   console.log("This is the new array: "+ids);
          //   //keep three
          //   three.push(ids[0], ids[1], ids[2]);
          // });

          //Implement a timeout of 20ms to make sure that the the list of IDs is successfully retrieved
          setTimeout(function(){

            console.log("These are the id's of the three: "+three);
            var houseAttributes = [];
            houseA = three[0];
            houseB = three[1];
            houseC = three[2];

            var houseA1, houseA2, houseA3, houseA4, houseA5, houseA6;
            var houseB1, houseB2, houseB3, houseB4, houseB5, houseB6;
            var houseC1, houseC2, houseC3, houseC4, houseC5, houseC6;

            $.get("ajax/getPrice.php", {id: houseA}).done(function(data) {houseA1 = data;});
            $.get("ajax/getType.php", {id: houseA}).done(function(data) {houseA2 = data;});
            $.get("ajax/getSurface.php", {id: houseA}).done(function(data) { houseA3 = data; } );
            $.get("ajax/getBedrooms.php", {id: houseA}).done(function(data) { houseA4 = data; } );
            $.get("ajax/getSurroundings.php", {id: houseA}).done(function(data) { houseA5 = data; } );
            $.get("ajax/getDistance.php", {id: houseA}).done(function(data) { houseA6 = data; } );

            $.get("ajax/getPrice.php", {id: houseB}).done(function(data) { houseB1 = data; } );
            $.get("ajax/getType.php", {id: houseB}).done(function(data) { houseB2 = data; } );
            $.get("ajax/getSurface.php", {id: houseB}).done(function(data) { houseB3 = data; } );
            $.get("ajax/getBedrooms.php", {id: houseB}).done(function(data) { houseB4 = data; } );
            $.get("ajax/getSurroundings.php", {id: houseB}).done(function(data) { houseB5 = data; } );
            $.get("ajax/getDistance.php", {id: houseB}).done(function(data) { houseB6 = data; } );

            houseC1 = $.get("ajax/getPrice.php", {id: houseC}).done(function(data) { houseC1 = data; } );
            houseC2 = $.get("ajax/getType.php", {id: houseC}).done(function(data) { houseC2 = data; } );
            houseC3 = $.get("ajax/getSurface.php", {id: houseC}).done(function(data) { houseC3 = data; } );
            houseC4 = $.get("ajax/getBedrooms.php", {id: houseC}).done(function(data) { houseC4 = data; } );
            houseC5 = $.get("ajax/getSurroundings.php", {id: houseC}).done(function(data) { houseC5 = data; } );
            houseC6 = $.get("ajax/getDistance.php", {id: houseC}).done(function(data) { houseC6 = data; } );

            //Setting a timeout to allow for all variables to load
            setTimeout (function(){
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
            }, 50);
          }, 50);
        }, 20);
      }, 50);
		}
    if( args == "setADone"){
			container.hide();
		}
	}

	container.hide();
}
