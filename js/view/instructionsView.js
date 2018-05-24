var InstructionsView = function (model, container){

  var p1 = $("<p>Elementen: Instructies m.b.t. dilemma's</p>");

  var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  container.append(p1, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.volgendeButton = volgendeButton;

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
