var Dilemma1Controller = function ( model, view ){

  view.volgendeButton.click(function(){
    
    // Check if participant selected a preference
    // var checked = 0;
    // if (checked!=1) {
    //   alert("Geef alstublieft een voorkeur op!");
    //   return;
    // }

    //Look into table with class 'case' for fields with 'input', 'radio', AND 'checked' and return for each of those...
    $("table.case input:radio:checked").each(function () {
      checked = 1;
      console.log(this.value); // A console log with the value.
    });

    //Notify the observer that the dilemma is done
    model.dilemma1Done();
    //model.setDilemma1();
  });

}
