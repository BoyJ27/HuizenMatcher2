var ProfileView = function (model, container){

  var p1 = $("<p>Geef voor elk van onderstaande aspecten aan hoe belangrijk ze voor u zijn in de keuze voor een huis.</p>");
  var form				= $( "<form role='form'>" );

  var questions = [
		'Prijs',
		'Woonoppervlakte',
		'Aantal kamers',
		'Bouwjaar',
		'Locatie'
	];

  var TableCont				= $("<div style='margin-top: 20px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
  var Table 					= $("<table id='answertable' style='width: 100%'></table>");

	var othervartext 			= $('<br><div style="font-size: 16px; width: 100%"><p class="marginbottom">Aan welke andere aspecten van een huis - anders dan de hierboven genoemde items - hecht u veel waarde? (Optioneel)</p> ');
	var othervarinput   	= $( '<div style="font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 400px" type="text" pattern="\d*" id="budget" placeholder="Andere aspecten...">');
	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

	//form.append( emailContainer);

	volgendeButtonCont.append(volgendeButton);

  $.each(questions, function(index, value) {
    if(index == 0 | index == 5 | index == 10 | index == 15) {
      Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal niet belangrijke</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet echt belangrijk</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Neutraal</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Een beetje belangrijk</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Heel belangrijk</th></tr>");
    }
    var row;
    if(index%2 == 0) {
      row = $("<tr class='item-row' id='" + index + "' style='background-color:#FAFAFA'></tr>");
    } else {
      row = $("<tr class='item-row' id='" + index + "'></tr>");
    }
    var textcell = $("<th style='width: 50%; padding-left: 20px; font-weight: normal'><p style='margin-top: 0.5rem!important; margin-bottom: 0.5rem!important;'>" + value + "</p></th>");

    row.append(textcell);

    for(i=0; i < 5; i++) {
      var j = i+1;

      row.append("<th style='width: 10%; text-align: center'><label style='height:100%; width: 100%; margin-bottom: 0px;'><input type='radio' name='quest"+index+"' value='"+ j +"'></label></th>")

    }

    Table.append(row);
  });

  TableCont.append(Table);

	container.append(p1, Table, othervartext, othervarinput, volgendeButtonCont, clearfix);

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;

  model.addObserver( this );

	this.update = function( args ){

		if( args == "dilemma10Done" ){
			container.show();
		}
    if( args == "profileDone"){
			container.hide();
		}
	}

	container.hide();
}
