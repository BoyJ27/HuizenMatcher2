var SetAView = function (model, container){

  var p1 = $("<p>Set met 3 (?) aanbevolen huizen, kenmerken van die huizen en vragen + likertschalen.</p>");
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
