var ProfileController = function ( model, view ){

  view.volgendeButton.click(function(){
    var age = $("#leeftijd").val();
		var gender = $( '#gender').val();
		var education =  $( '#education').val();
		var family =  $( '#family').val();
		var remarks = $( '#remarks').val();

    if( gender != 0  && education != 0 && family != 0  && age.length != 0) {
      model.setDemoQuestions(age, gender, education, family, remarks);
      model.profileDone();
    } else {
      alert( 'U bent waarschijnlijk een vraag vergeten!' );
    }

    //model.fetchRecommendations();
  });

}
