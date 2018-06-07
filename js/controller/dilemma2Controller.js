var Dilemma2Controller = function ( model, view ){

  view.volgendeButton.click(function(){

    // Check if participant selected a preference
    var checked = 0;

    //Create arrays to carry the 0101 for each house
    //order: [price, rijtjeshuis, appartement, vrijstaand, 78, 114, 156, 2, 3, 4, dorp, buitenwijk, stedelijk, 370, 600, 1000]
    var attributesHouseA = view.attributesHouseA;
    var attributesHouseB = view.attributesHouseB;

    //Look into table with class 'case' for fields with 'input', 'radio', AND 'checked'
    //Retrieve from the chosen house the attributes and create a 010101 array to store
    //in database.
    $("table.case input:radio:checked").each(function () {
      checked = 1; // user made a choice
      house = this.value; //get the chosen house (house A, house B or no preference)

      //If house A is chosen
      if (house == "house A") {
        console.log("I chose house A");
        setDilemma(2, 1, attributesHouseA, attributesHouseB); //Dilemma = 2, choice = 1 (house A), array for A, array for B
      }
      //If house B is chosen
      else if (house == "house B") {
        console.log("I chose House B");
        setDilemma(2, 2, attributesHouseA, attributesHouseB);
      }
      //If no preference
      else {
        console.log("I had no preference");
        setDilemma(2, 3, attributesHouseA, attributesHouseB);
      }
    });

    //If participants did not make a choice, let them know:
    if (checked!=1) {
     alert("Geef alstublieft een voorkeur op!");
     return;
    }


        model.dilemma2Done();
  });

}
