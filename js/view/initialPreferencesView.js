var InitialPreferencesView = function( model, container ){

	/***********************************************************
					  Variable Declarations
	***********************************************************/
	var introduction = $("<p>Om een goed beeld te krijgen van uw voorkeuren, vragen we u onderstaande vragen te beantwoorden.</p>");
	var form				= $( "<form role='form'>" );

  var citytext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef aan in welke stad u wilt zoeken.*</p> ');
	var cityinput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='stad' id='stad' style='width:400px'><option value='0'>---------------</option><option value='1'>Amsterdam</option><option value='2'>Utrecht</option><option value='3'>Eindhoven</option>");
	var budgettext 			= $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef aan wat uw maximale budget is.*</p> ');
	var budgetinput   	= $( '<div style="font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 400px" type="number" pattern="\d*" id="budget" placeholder="Geef een indicatie van uw budget (in euros).">');
	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

	//form.append( emailContainer);

	volgendeButtonCont.append(volgendeButton);

	container.append(introduction, citytext, cityinput, budgettext, budgetinput, volgendeButtonCont, clearfix);

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;


	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == "dilemma20Done" ){
			container.show();
		}
		if( args == 'initialPreferencesDone'){
			container.hide();
		}
	}

	container.hide();
	}
