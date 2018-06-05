var InstructionsView = function (model, container){

  var p1 = $("<p>In het volgende deel van dit experiment krijgt u 10 keuzedilemma's voorgeschoteld. U krijgt telkens van twee huizen de details te zien met betrekking tot prijs, woonoppervlakte, xxx, xxx, xxx en xxx. Kies steeds het huis welke het best bij uw voorkeuren past. U kunt een keuze maken tussen beide huisprofielen door één van beide bolletjes onder de huizen te selecteren. U kunt ook aangeven geen voorkeur te hebben. Ten slotte kunt u uw keuze bevestigen door op 'Volgende' te klikken. </p>");

  var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );
  //TESTBUTTON
  var testButton = $("<a class='btn button btn-default pull-right' role='button'>Shuffle</a>");

  volgendeButtonCont.append(volgendeButton);
  container.append(p1, testButton, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.volgendeButton = volgendeButton;
  this.testButton = testButton;

	this.update = function( args ){

		if( args == "consentDone" ){
			container.show();
		}
    if( args == 'instructionsDone'){
			container.hide();
		}
	}

	container.hide();
}
