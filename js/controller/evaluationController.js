var EvaluationController = function(model, view) {

	view.volgendeButton.click(function(){

		evaluationQuestions = []; //Array to store answers

		//Getting all the checked radio buttons in the first table...
		$("table.evaluationTable input:radio:checked").each(function (index, value) {
			evaluationQuestions[index] = value.value; //..And storing the value of this radio button in the array
		});

		//Making separate variables for the values
		var evaluation1 = evaluationQuestions[0];
		var evaluation2 = evaluationQuestions[1];
		var evaluation3 = evaluationQuestions[2];
		var evaluation4 = evaluationQuestions[3];
		var evaluation5 = evaluationQuestions[4];

		console.log("The evaluation 1: "+evaluation1+", the evaluation 2: "+evaluation2+", the evaluation 3: "+evaluation3+", the evaluation 4: "+evaluation4+", the evaluation 5: "+evaluation5);

		importanceQuestions = []; //Array to store importance questions

		//Getting all the checked radio buttons in the second table...
		$("table.importanceTable input:radio:checked").each(function (index, value) {
			importanceQuestions[index] = value.value; //..And storing the value of this radio button in the array
		});

		var price = importanceQuestions[0];
		var type = importanceQuestions[1];
		var surface = importanceQuestions[2];
		var bedrooms = importanceQuestions[3];
		var surroundings = importanceQuestions[4];
		var distance = importanceQuestions[5];

		var other = $("#other").val();

<<<<<<< HEAD
		// console.log("the price is: "+price+", the type is: "+type+", the surface is: "+surface+", the bedrooms is: "+bedrooms+", the surroundings is: "+surroundings+", the distance is: "+distance+", other is: "+other);
=======
		//console.log("the price is: "+price+", the type is: "+type+", the surface is: "+surface+", the bedrooms is: "+bedrooms+", the surroundings is: "+surroundings+", the distance is: "+distance+", other is: "+other);
>>>>>>> 97bec264144f61e8b83ca98fe688cc844ee49962
	 /*if( $( '#answertable input:checked' ).length < 20 ){
			alert( 'Kies de set van uw voorkeur!' );
		} else {
			var answers = [];

			$("#answertable .item-row").each(function(item){
				var questionId = $(this).attr('id');
				var val 	   = $(this).find('input:checked').val();
				console.log("For question " + questionId + ", the value is: " + val);
				answers[questionId] = val;
			}).promise().done(function(){
				console.log(answers);
				model.setAgqQuestions (answers);
				console.log("Done");
			});
*/
			model.setEvaluation(price, type, surface, bedrooms, surroundings, distance, other);
			model.setLikert(evaluation1, evaluation2, evaluation3, evaluation4, evaluation5);
			model.evaluationDone();
		});
 }
