var InitialPreferencesController = function( model, view ){

	view.volgendeButton.click(function(){
		var city = $("#stad").val();

		if(city != 0) {
			model.setCity(city);
			model.initialPreferencesDone();
		} else {
			alert( 'Kies de stad waarin u naar huizen wilt zoeken!' );
		}
	});

}
