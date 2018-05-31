var InformedConsentController = function(model, view){

//Hier start het experiment: Als de knop 'Vind mijn HuizenMatch!' wordt ingedrukt,
//maken we een user aan in de database (createUser();) en gaan we naar de volgende view (consentDone();).
//Elke controller is verantwoordelijk voor het opslaan van relevante informatie in de database en het doorgaan naar de volgende stap.
	view.startButton.click(function(){
	  model.createUser();
		model.consentDone();
	});
}
