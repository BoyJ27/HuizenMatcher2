var Dilemma1Controller = function ( model, view ){

  view.volgendeButton.click(function(){

        //Look into table with class 'case' for fields with 'input', 'radio', AND 'checked' and return for each of those...
        $("table.case input:radio:checked").each(function () {
          console.log(this.value); // A console log with the value.
        });

        model.dilemma1Done();
        //model.setDilemma1();
  });

}
