var InitialPreferencesController = function( model, view ){

	view.volgendeButton.click(function(){
		var city = $("#city").val();
		var budget = $("#budget").val();
		var type = $("#type").val();
		var surface = $("#surface").val();
		var bedrooms = $("#bedrooms").val();
		var surroundings = $("#surroundings").val();
		var distance = $("#distance").val();

		if (model.checkCity(city) == 1){
			model.setPreferences(city, budget, type, surface, bedrooms, surroundings, distance);
			model.initialPreferencesDone();
		} else {
			//alert("Wij hebben helaas geen data voor de door u opgegeven gemeente.");
		}




		// if(city != 0 && budget != 0 && type != 0 && surface != 0 && bedrooms != 0 && surroundings != 0 && distance != 0) {
		// 	model.setPreferences(city, budget, type, surface, bedrooms, surroundings, distance);
		// 	model.initialPreferencesDone();
		// } else {
		// 	alert( 'U bent waarschijnlijk een vraag vergeten!' );
		// }
	});

}
