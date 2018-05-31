var SetAView = function (model, container){

  var p1 = $("<p>Deze 10 huizen zijn door het systeem voor u aanbevolen. Geef van elke suggestie aan in hoeverre het past bij uw voorkeuren op een schaal van 1 tot 10 (1 = 'Helemaal niet passend', 10 = 'Helemaal passend').</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
  var clearfix			= $('<div class="clearfix">' );

  this.volgendeButton = volgendeButton;
  volgendeButtonCont.append(volgendeButton);
  container.append(p1, volgendeButtonCont, clearfix);


  model.addObserver( this );

	this.update = function( args ){

		if( args == "profileDone" ){
			container.show();
		}
    if( args == "setADone"){
			container.hide();
		}
	}

	container.hide();
}
