var InstructionsView = function (model, container){

  var p1 = $("<p> Hierna geven we u 10 dilemma's. Per dilemma krijgt u 2 huizen te zien. Kies steeds het huis welke het best bij uw voorkeuren past.</p>");

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

		if( args == "initialPreferencesDone" ){
			container.show();
		}
    if( args == 'instructionsDone'){
			container.hide();
		}
	}

	container.hide();
}
