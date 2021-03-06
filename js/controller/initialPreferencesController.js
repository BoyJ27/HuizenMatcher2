var InitialPreferencesController = function( model, view ){

	view.volgendeButton.click(function(){
		var city = $("#city").val();
		var budget = $("#budget").val();
		var type = $("#type").val();
		var surface = $("#surface").val();
		var bedrooms = $("#bedrooms").val();
		var surroundings = $("#surroundings").val();
		var distance = $("#distance").val();

		var cityCheck = model.checkCity(city);
		console.log("cityCheck: "+cityCheck);

		var checkarray = [];
		//Get a list of house ID's in the municipality under the maxbudget
		$.get("ajax/getHouseIDs.php", {gemeente: city, maxBudget: budget}).done(function (data) {
			checkarray = JSON.parse(data);
			console.log("This is check array: "+checkarray);
		});

		//Implement a timeout of 20ms to make sure that the list of ids is succesffully retrieved
		setTimeout(function(){
			var housesCheck = model.checkHouses(checkarray);
			console.log("Housescheck: "+housesCheck);

			//Controleren of de user alles heeft ingevuld & we een matchende gemeente hebben
		 if (cityCheck == true && housesCheck == true && budget != 0 && type != 0 && surface != 0 && bedrooms != 0 && surroundings != 0 && distance != 0){
				model.setThree(checkarray);
				model.setPreferences(city, budget, type, surface, bedrooms, surroundings, distance);
				model.initialPreferencesDone();
			}
			//If the above was not true, give the user an appropriate error.
			//In case they forgot a field:
			else if (city == 0 || budget == 0 || type == 0 || surface == 0 || bedrooms == 0 || surroundings == 0 || distance == 0) {
					alert("Vul alstublieft bij alle velden een antwoord in.");
					return;
			}
			//In case the city did not exist:
			else if (cityCheck == false) {
				alert("Wij hebben helaas geen data voor de door u opgegeven gemeente. Probeer het svp nog een keer met een andere gemeente.");
				return;
			}
			//In case there were not enough houses with the budget:
			else if (housesCheck == false) {
				alert("Wij hebben helaas geen data voor de door u opgegeven gemeente. Probeer het svp nog een keer met een hoger budget, of in een andere gemeente.");
				return;
			}
		}, 50);
	});

}
