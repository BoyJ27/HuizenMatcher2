var Dilemma18Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    // Check if participant selected a preference
    // var checked = 0;
    // if (checked!=1) {
    //   alert("Geef alstublieft een voorkeur op!");
    //   return;
    // }
        model.dilemma18Done();
        //model.setDilemma10();
  });
}