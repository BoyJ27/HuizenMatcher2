$(function(){

	var housingModel 			= new HousingModel();

	var headerView 						= new HeaderView( housingModel, $( "#boxHeader" ) );
	var headerController 				= new HeaderController( housingModel, informedConsentView );

	var informedConsentView 			= new InformedConsentView( housingModel, $( "#informedConsent" ) );
	var informedConsentController 		= new InformedConsentController( housingModel, informedConsentView );

	var initialPreferencesView				= new InitialPreferencesView( housingModel, $( "#initialPreferences" ) );
	var initialPreferencesController 			= new InitialPreferencesController( housingModel, initialPreferencesView );

	var instructionsView  = new InstructionsView( housingModel, $("#instructions"));
	var instructionsController = new InstructionsController (housingModel, instructionsView);

	var dilemma1View				= new Dilemma1View( housingModel, $( "#dilemma1" ) );
	var dilemma1Controller		= new Dilemma1Controller( housingModel, dilemma1View );

	var dilemma2View				= new Dilemma2View( housingModel, $( "#dilemma2" ) );
	var dilemma2Controller		= new Dilemma2Controller( housingModel, dilemma2View );

	var dilemma3View				= new Dilemma3View( housingModel, $( "#dilemma3" ) );
	var dilemma3Controller		= new Dilemma3Controller( housingModel, dilemma3View );

	var dilemma4View				= new Dilemma4View( housingModel, $( "#dilemma4" ) );
	var dilemma4Controller		= new Dilemma4Controller( housingModel, dilemma4View );

	var dilemma5View				= new Dilemma5View( housingModel, $( "#dilemma5" ) );
	var dilemma5Controller		= new Dilemma5Controller( housingModel, dilemma5View );

	var dilemma6View				= new Dilemma6View( housingModel, $( "#dilemma6" ) );
	var dilemma6Controller		= new Dilemma6Controller( housingModel, dilemma6View );

	var dilemma7View				= new Dilemma7View( housingModel, $( "#dilemma7" ) );
	var dilemma7Controller		= new Dilemma7Controller( housingModel, dilemma7View );

	var dilemma8View				= new Dilemma8View( housingModel, $( "#dilemma8" ) );
	var dilemma8Controller		= new Dilemma8Controller( housingModel, dilemma8View );

	var dilemma9View				= new Dilemma9View( housingModel, $( "#dilemma9" ) );
	var dilemma9Controller		= new Dilemma9Controller( housingModel, dilemma9View );

	var dilemma10View				= new Dilemma10View( housingModel, $( "#dilemma10" ) );
	var dilemma10Controller		= new Dilemma10Controller( housingModel, dilemma10View );

	var breakView				= new BreakView( housingModel, $( "#break" ) );
	var breakController		= new BreakController( housingModel, breakView );

	var dilemma11View				= new Dilemma11View( housingModel, $( "#dilemma11" ) );
	var dilemma11Controller		= new Dilemma11Controller( housingModel, dilemma11View );

	var dilemma12View				= new Dilemma12View( housingModel, $( "#dilemma12" ) );
	var dilemma12Controller		= new Dilemma12Controller( housingModel, dilemma12View );

	var dilemma13View				= new Dilemma13View( housingModel, $( "#dilemma13" ) );
	var dilemma13Controller		= new Dilemma13Controller( housingModel, dilemma13View );

	var dilemma14View				= new Dilemma14View( housingModel, $( "#dilemma14" ) );
	var dilemma14Controller		= new Dilemma14Controller( housingModel, dilemma14View );

	var dilemma15View				= new Dilemma15View( housingModel, $( "#dilemma15" ) );
	var dilemma15Controller		= new Dilemma15Controller( housingModel, dilemma15View );

	var dilemma16View				= new Dilemma16View( housingModel, $( "#dilemma16" ) );
	var dilemma16Controller		= new Dilemma16Controller( housingModel, dilemma16View );

	var dilemma17View				= new Dilemma17View( housingModel, $( "#dilemma17" ) );
	var dilemma17Controller		= new Dilemma17Controller( housingModel, dilemma17View );

	var dilemma18View				= new Dilemma18View( housingModel, $( "#dilemma18" ) );
	var dilemma18Controller		= new Dilemma18Controller( housingModel, dilemma18View );

	var dilemma19View				= new Dilemma19View( housingModel, $( "#dilemma19" ) );
	var dilemma19Controller		= new Dilemma19Controller( housingModel, dilemma19View );

	var dilemma20View				= new Dilemma20View( housingModel, $( "#dilemma20" ) );
	var dilemma20Controller		= new Dilemma20Controller( housingModel, dilemma20View );

	var profileView		= new ProfileView( housingModel, $( "#profile" ) );
	var profileController = new ProfileController ( housingModel, profileView );

	var setAView				= new SetAView( housingModel, $( "#setA" ) );
	var setBController 			= new SetAController( housingModel, setAView );

	var evaluationView		= new EvaluationView( housingModel, $( "#evaluationQuestions" ) );
	var evaluationController = new EvaluationController ( housingModel, evaluationView );

	var endView  = new EndView( housingModel, $("#endView"));
	var endController = new EndController (housingModel, endView);

	var toosmallView  = new ToosmallView( housingModel, $("#toosmallView"));
	var toosmallController = new ToosmallController (housingModel, toosmallView);
})
