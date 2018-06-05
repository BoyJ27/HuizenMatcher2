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
			h2.html( "Instructies");
		}
		if( args == "instructionsDone" ){
			h2.html( "Dilemma 1/20");
		}
		if( args == "dilemma1Done" ){
			h2.html( "Dilemma 2/20");
		}
		if( args == "dilemma2Done" ){
			h2.html( "Dilemma 3/20");
		}
		if( args == "dilemma3Done" ){
			h2.html( "Dilemma 4/20");
		}
		if( args == "dilemma4Done" ){
			h2.html( "Dilemma 5/20");
		}
		if( args == "dilemma5Done" ){
			h2.html( "Dilemma 6/20");
		}
		if( args == "dilemma6Done" ){
			h2.html( "Dilemma 7/20");
		}
		if( args == "dilemma7Done" ){
			h2.html( "Dilemma 8/20");
		}
		if( args == "dilemma8Done" ){
			h2.html( "Dilemma 9/20");
		}
		if( args == "dilemma9Done" ){
			h2.html( "Dilemma 10/20");
		}
		if( args == "dilemma10Done" ){
			h2.html( "Intermezzo");
		}
		if( args == "breakDone" ){
			h2.html( "Dilemma 11/20");
		}
		if( args == "dilemma11Done" ){
			h2.html( "Dilemma 12/20");
		}
		if( args == "dilemma12Done" ){
			h2.html( "Dilemma 13/20");
		}
		if( args == "dilemma13Done" ){
			h2.html( "Dilemma 14/20");
		}
		if( args == "dilemma14Done" ){
			h2.html( "Dilemma 15/20");
		}
		if( args == "dilemma15Done" ){
			h2.html( "Dilemma 16/20");
		}
		if( args == "dilemma16Done" ){
			h2.html( "Dilemma 17/20");
		}
		if( args == "dilemma17Done" ){
			h2.html( "Dilemma 18/20");
		}
		if( args == "dilemma18Done" ){
			h2.html( "Dilemma 19/20");
		}
		if( args == "dilemma19Done" ){
			h2.html( "Dilemma 20/20");
		}
		if( args == "dilemma20Done" ){
			h2.html( "Waar bent u naar op zoek?");
		}
		if( args == "initialPreferencesDone" ){
			h2.html( "Suggesties van het systeem");
		}
		if( args == "profileDone" ){
			h2.html( "Hartelijk Dank!");
		}

		if( args == "setADone" ){
			h2.html( "Evaluatie");
		}

		if( args == "evaluationDone"){
			h2.html( "Evaluatie");
		}

	}

}
