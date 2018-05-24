var SetAController = function ( model, view ){

  view.volgendeButton.click(function(){
    //Check if all fields are filled in
    //Write to Database
    model.setADone();
  });

}
