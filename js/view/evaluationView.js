var EvaluationView = function (model, container){

	var p 						= $("<p>Geef aan in hoeverre u het eens bent met de volgende stellingen. Hou hierbij de suggesties die u zojuist heeft gezien in gedachten.</p>");
  var p1 						= $("<p>Geef voor elk van onderstaande aspecten aan hoe belangrijk ze voor u zijn in de keuze voor een huis.</p>");

	var TableCont				= $("<div style='margin-top: 20px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
	var Table 					= $("<table id='answertable' style='width: 100%'></table>");

	var Table2Cont				= $("<div style='margin-top: 20px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
	var Table2 					= $("<table id='answertable' style='width: 100%'></table>");

	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 		= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix				= $( '<div class="clearfix">' );

	var questions1 = [
		'De suggesties passen bij mijn voorkeuren.',
		'Er worden te veel slechte suggesties gedaan.',
		'De voorgestelde huizen zijn aantrekkelijk.',
		'Ik vind geen enkele van de voorgestelde huizen interessant.',
		'De voorgestelde huizen zijn relevant.'
	]

	var questions2 = [
		'Prijs',
		'Woningtype',
		'Woonoppervlak',
		'Slaapkamers',
		'Bebouwde omgeving',
		'Afstand tot basisschool'
	];

	var othervartext 			= $('<br><div style="font-size: 16px; width: 100%"><p class="marginbottom">Aan welke andere aspecten van een huis - anders dan de hierboven genoemde items - hecht u veel waarde? (Optioneel)</p> ');
	var othervarinput   	= $( '<div style="font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 400px" type="text" pattern="\d*" id="budget" placeholder="Andere aspecten...">');

	$.each(questions1, function(index, value) {
		if(index == 0) {
			Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet oneens/eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal eens</th></tr>");
		}
		if(index%2 == 0) {
			row = $("<tr class='item-row' id='" + index + "' style='background-color:#FFFFFF'></tr>");
		} else {
			row = $("<tr class='item-row' id='" + index + "'></tr>");
		}
		var textcell = $("<td style='width: 50%; padding-left: 20px; font-weight: normal'><p style='margin-top: 0.5rem!important; margin-bottom: 0.5rem!important;'>" + value + "</p></td>");

		row.append(textcell);

		for(i=0; i < 5; i++) {
			var j = i+1;

			row.append("<td style='width: 10%; text-align: center'><label style='height:100%; width: 100%; margin-bottom: 0px;'><input type='radio' name='quest"+index+"' value='"+ j +"'></label></td>")

		}

		Table.append(row);
	});

	$.each(questions2, function(index, value) {
		if(index == 0) {
			Table2.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal niet belangrijk</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet echt belangrijk</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Neutraal</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Een beetje belangrijk</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Heel belangrijk</th></tr>");
		}
		var row;
		if(index%2 == 0) {
			row = $("<tr class='item-row' id='" + index + "' style='background-color:#FFFFFF'></tr>");
		} else {
			row = $("<tr class='item-row' id='" + index + "'></tr>");
		}
		var textcell = $("<td style='width: 50%; padding-left: 20px; font-weight: normal'><p style='margin-top: 0.5rem!important; margin-bottom: 0.5rem!important;'>" + value + "</p></td>");

		row.append(textcell);

		for(i=0; i < 5; i++) {
			var j = i+1;

			row.append("<td style='width: 10%; text-align: center'><label style='height:100%; width: 100%; margin-bottom: 0px;'><input type='radio' name='quest"+index+"' value='"+ j +"'></label></td>")

		}

		Table2.append(row);
	});

	TableCont.append(Table);
	Table2Cont.append(Table2);

	volgendeButtonCont.append(volgendeButton);

	container.append(p, TableCont, p1, Table2Cont, othervartext, othervarinput, volgendeButtonCont, clearfix );


	/***********************************************************
						Public Variables
	***********************************************************/

	this.volgendeButton 		= volgendeButton;

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == 'setADone' ){
			container.show();
		}

		if( args == 'evaluationDone' ){
			container.hide();
		}
	}

	container.hide();
}
