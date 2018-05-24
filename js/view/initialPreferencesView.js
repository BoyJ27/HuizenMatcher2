var InitialPreferencesView = function( model, container ){

	/***********************************************************
					  Variable Declarations
	***********************************************************/
	var introduction = $("<p>Kies de stad waarin u naar huizen wilt zoeken.</p>");
	var form				= $( "<form role='form'>" );

  var citytext     = $('<div style="font-size: 12px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef aan in welke stad u wilt zoeken.*</p> ');
	var cityinput 			= $ ("<div style='font-weight:bold; font-size: 12px; margin-bottom: 15px; width: 100%'><select name='stad' id='stad' style='width:250px'><option value='0'>---------------</option><option value='1'>Amsterdam</option><option value='2'>Utrecht</option><option value='3'>Eindhoven</option>");

	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

	//form.append( emailContainer);

	volgendeButtonCont.append(volgendeButton);

	container.append(introduction, citytext, cityinput, volgendeButtonCont, clearfix);

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;


	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == "consentDone" ){
			container.show();
		}
		if( args == 'initialPreferencesDone'){
			container.hide();
		}
	}

	container.hide();
	}
