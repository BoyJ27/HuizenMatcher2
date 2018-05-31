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
