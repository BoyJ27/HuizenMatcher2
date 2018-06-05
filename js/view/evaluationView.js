var EvaluationView = function (model, container){

	var questionList			= $( "<div class='list-group' id='setQuestions'>" );
	var p 						= $("<p>Geef aan in hoeverre u het eens bent met de volgende stellingen. Hou hierbij de suggesties die u zojuist heeft gezien in gedachten.</p>");
	var h3						= $("<p><b>Houd je ervaring met het spelen van daarnet in gedachten, en geef voor elke onderstaande uitspraak aan in welke mate je het ermee eens bent.</b></p>")
	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 		= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix				= $( '<div class="clearfix">' );
	var questions;
	var TableCont				= $("<div style='margin-top: 20px; margin-bottom: 20px; background-color: white; border-style: solid; border-color: lightgrey; border-width: 1px;'></div>");
	var Table 					= $("<table id='answertable' style='width: 100%'></table>");

	var questions = [
		'De suggesties passen bij mijn voorkeuren.',
		'Er worden te veel slechte suggesties gedaan.',
		'De voorgestelde huizen zijn aantrekkelijk.',
		'Ik vind geen enkele van de voorgestelde huizen interessant.',
		'De voorgestelde huizen zijn relevant.'
	]

	questionList.empty();

	$.each(questions, function(index, value) {
		if(index == 0 | index == 5 | index == 10 | index == 15) {
			Table.append("<tr><th style='width: 50%'></th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Oneens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Niet oneens/eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Eens</th><th style='width: 10%; text-align:center; padding-top: 10px; padding-bottom: 10px'>Helemaal eens</th></tr>");
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

		Table.append(row);
	});

	TableCont.append(Table);

	volgendeButtonCont.append(volgendeButton);

	container.append(p, Table, volgendeButtonCont, clearfix );


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
