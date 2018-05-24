var ProfileController = function ( model, view ){

  view.volgendeButton.click(function(){
    model.profileDone();
    //model.fetchRecommendations();
  });

}
