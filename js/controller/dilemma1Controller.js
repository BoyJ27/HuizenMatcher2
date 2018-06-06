var Dilemma1Controller = function ( model, view ){

  view.volgendeButton.click(function(){

    // Check if participant selected a preference
    var checked = 0;

    //Load in the attributes of the houses that were used in the dilemma
    var houseA2 = view.houseA2;
    var houseA3 = view.houseA3;
    var houseA4 = view.houseA4;
    var houseA5 = view.houseA5;
    var houseA6 = view.houseA6;

    var houseB2 = view.houseB2;
    var houseB3 = view.houseB3;
    var houseB4 = view.houseB4;
    var houseB5 = view.houseB5;
    var houseB6 = view.houseB6;

    //Create arrays to carry the 0101 for each house
    var attributesHouseA = [];
    var attributesHouseB = [];
    var attributesNoPreference = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    //Filling in the arrays
    //Getting the house type
    if (houseA2 == "Rijtjeshuis"){
      attributesHouseA.push(1,0,0);
    } else if (houseA2 == "Appartement"){
      attributesHouseA.push(0,1,0);
    } else if (houseA3 == "Vrijstaand"){
      attributesHouseA.push(0,0,1);
    }

    //Getting the surface
    if (houseA3 == 78){
      attributesHouseA.push(1,0,0);
    } else if (houseA3 == 114){
      attributesHouseA.push(0,1,0);
    } else if (houseA3 == 156){
      attributesHouseA.push(0,0,1);
    }

    //Getting the number of bedrooms
    if (houseA4 == 2){
      attributesHouseA.push(1,0,0);
    } else if (houseA4 == 3){
      attributesHouseA.push(0,1,0);
    } else if (houseA4 == 4){
      attributesHouseA.push(0,0,1);
    }

    //Getting the surroundings
    if (houseA5 == "Dorp"){
      attributesHouseA.push(1,0,0);
    } else if (houseA5 == "Buitenwijk"){
      attributesHouseA.push(0,1,0);
    } else if (houseA5 == "Stedelijk"){
      attributesHouseA.push(0,0,1);
    }

    //Getting the distance to school
    if (houseA6 == 370){
      attributesHouseA.push(1,0,0);
    } else if (houseA6 == 600){
      attributesHouseA.push(0,1,0);
    } else if (houseA6 == 1000){
      attributesHouseA.push(0,0,1);
    }

    //Getting the house type
    if (houseB2 == "Rijtjeshuis"){
      attributesHouseB.push(1,0,0);
    } else if (houseB2 == "Appartement"){
      attributesHouseB.push(0,1,0);
    } else if (houseB3 == "Vrijstaand"){
      attributesHouseB.push(0,0,1);
    }

    //Getting the surface
    if (houseB3 == 78){
      attributesHouseB.push(1,0,0);
    } else if (houseB3 == 114){
      attributesHouseB.push(0,1,0);
    } else if (houseB3 == 156){
      attributesHouseB.push(0,0,1);
    }

    //Getting the number of bedrooms
    if (houseB4 == 2){
      attributesHouseB.push(1,0,0);
    } else if (houseB4 == 3){
      attributesHouseB.push(0,1,0);
    } else if (houseB4 == 4){
      attributesHouseB.push(0,0,1);
    }

    //Getting the surroundings
    if (houseB5 == "Dorp"){
      attributesHouseB.push(1,0,0);
    } else if (houseB5 == "Buitenwijk"){
      attributesHouseB.push(0,1,0);
    } else if (houseB5 == "Stedelijk"){
      attributesHouseB.push(0,0,1);
    }

    //Getting the distance to school
    if (houseB6 == 370){
      attributesHouseB.push(1,0,0);
    } else if (houseB6 == 600){
      attributesHouseB.push(0,1,0);
    } else if (houseB6 == 1000){
      attributesHouseB.push(0,0,1);
    }


    //Look into table with class 'case' for fields with 'input', 'radio', AND 'checked'
    //Retrieve from the chosen house the attributes and create a 010101 array to store
    //in database.
    $("table.case input:radio:checked").each(function () {
      checked = 1; // user made a choice
      house = this.value; //get the chosen house (house A, house B or no preference)

      //Create an empty array in which to store the 01010 values
      //order: [rijtjeshuis, appartement, vrijstaand, 78, 114, 156, 2, 3, 4, dorp, buitenwijk, stedelijk, 370, 600, 1000]
      var choiceMatrix = [];

      //If house A is chosen
      if (house == "house A") {
        console.log("I chose house A");
        choiceMatrix = attributesHouseA;
      }
      //If house B is chosen
      else if (house == "house B") {
        console.log("I chose House B");
        choiceMatrix = attributesHouseB;
      }
      //If no preference
      else {
        console.log("I had no preference");
        choiceMatrix =attributesNoPreference;
      }
      console.log(choiceMatrix);
    });

    //If participants did not make a choice, let them know:
    if (checked!=1) {
     alert("Geef alstublieft een voorkeur op!");
     return;
    }

    //When done, notify the observer that the dilemma is done
    model.dilemma1Done();
    //model.setDilemma1();
  });

}
