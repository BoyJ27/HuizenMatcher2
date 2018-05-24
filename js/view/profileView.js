var ProfileView = function (model, container){

  var p1 = $("<p>Elementen: attributen met schaal, markers voor locatie op de schaal, mogelijkheid tot aanpassen?.</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
  var clearfix			= $('<div class="clearfix">' );

  this.volgendeButton = volgendeButton;
  volgendeButtonCont.append(volgendeButton);
  container.append(p1, volgendeButtonCont, clearfix);


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
