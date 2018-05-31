var HeaderView = function ( model, container ){

	/***********************************************************
					  Variable Declarations
	***********************************************************/
	//var h2 						= $( "<h2>Welkom!</h2>" );
	var h2						= $( "<h2>Welkom!</h2>");
	var p 						= $( "<p></p>" );
	var vrienden 				= [];
	var counter = 1;
	var recom = 1;
	var currentadvisor = model.o.currentadvisor;

	container.append( h2);

	/***********************************************************
						Private Variables
	***********************************************************/

	/***********************************************************
						Public Variables
	***********************************************************/

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );
	this.update = function( args ){

		if( args == "consentDone" ){
			h2.html( "Waar bent u naar op zoek?");
		}

		if( args == "initialPreferencesDone" ){
			h2.html( "Instructies");
		}
		if( args == "instructionsDone" ){
			h2.html( "Dilemma 1/10");
		}
		if( args == "dilemma1Done" ){
			h2.html( "Dilemma 2/10");
		}
		if( args == "dilemma2Done" ){
			h2.html( "Dilemma 3/10");
		}
		if( args == "dilemma3Done" ){
			h2.html( "Dilemma 4/10");
		}
		if( args == "dilemma4Done" ){
			h2.html( "Dilemma 5/10");
		}
		if( args == "dilemma5Done" ){
			h2.html( "Dilemma 6/10");
		}
		if( args == "dilemma6Done" ){
			h2.html( "Dilemma 7/10");
		}
		if( args == "dilemma7Done" ){
			h2.html( "Dilemma 8/10");
		}
		if( args == "dilemma8Done" ){
			h2.html( "Dilemma 9/10");
		}
		if( args == "dilemma9Done" ){
			h2.html( "Dilemma 10/10");
		}
		if( args == "dilemma10Done" ){
			h2.html( "Uw persoonlijke voorkeuren");
		}
		if( args == "profileDone" ){
			h2.html( "Suggesties van het systeem");
		}

		if( args == "setADone" ){
			h2.html( "Evaluatie");
		}

		if( args == "evaluationDone"){
			h2.html( "Hartelijk Dank!");
		}

	}

}
