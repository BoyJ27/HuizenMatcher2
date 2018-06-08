var InstructionsView = function (model, container){

  var p1 = $("<p>In het volgende deel van dit experiment krijgt u 20 keuzedilemma's voorgeschoteld. U krijgt telkens van twee huizen de details te zien met betrekking tot prijs, woningtype, woonoppervlak, aantal slaapkamers, bebouwing van de omgeving en afstand tot een basisschool. Kies steeds het huis welke het best bij uw voorkeuren past. U kunt een keuze maken tussen beide huisprofielen door één van beide bolletjes onder de huizen te selecteren. U kunt ook aangeven geen voorkeur te hebben. Ten slotte kunt u uw keuze bevestigen door op 'Volgende' te klikken. </p>");
  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><img id="instruction" style="max-width:800px; margin-top:15px; margin-bottom:15px;" src="img/voorbeeld huizenmatcher.jpg"/><center>');
  var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

  instruction1Cont.append(instruction1);
  volgendeButtonCont.append(volgendeButton);
  container.append(p1, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.volgendeButton = volgendeButton;

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
