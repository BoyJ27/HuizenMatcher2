var Dilemma1Controller = function ( model, view ){

  view.volgendeButton.click(function(){

    // Check if participant selected a preference
    var checked = 0;

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

    //Look into table with class 'case' for fields with 'input', 'radio', AND 'checked'
    //Retrieve from the chosen house the attributes and create a 010101 array to store
    //in database. 
    $("table.case input:radio:checked").each(function () {
      checked = 1;
      house = this.value;
      var houseMatrix = []; // [rijtjeshuis, appartement, vrijstaand, 78, 114, 156, 2, 3, 4, dorp, buitenwijk, stedelijk, 370, 600, 1000]
      console.log(house); // A console log with the value.

      //If house A is chosen
      if (house == "house A") {
        console.log("I chose house A");

        //Getting the house type
        if (houseA2 == "Rijtjeshuis"){
          houseMatrix.push(1,0,0);
        } else if (houseA2 == "Appartement"){
          houseMatrix.push(0,1,0);
        } else if (houseA3 == "Vrijstaand"){
          houseMatrix.push(0,0,1);
        }

        //Getting the surface
        if (houseA3 == 78){
          houseMatrix.push(1,0,0);
        } else if (houseA3 == 114){
          houseMatrix.push(0,1,0);
        } else if (houseA3 == 156){
          houseMatrix.push(0,0,1);
        }

        //Getting the number of bedrooms
        if (houseA4 == 2){
          houseMatrix.push(1,0,0);
        } else if (houseA4 == 3){
          houseMatrix.push(0,1,0);
        } else if (houseA4 == 4){
          houseMatrix.push(0,0,1);
        }

        //Getting the surroundings
        if (houseA5 == "Dorp"){
          houseMatrix.push(1,0,0);
        } else if (houseA5 == "Buitenwijk"){
          houseMatrix.push(0,1,0);
        } else if (houseA5 == "Stedelijk"){
          houseMatrix.push(0,0,1);
        }

        //Getting the distance to school
        if (houseA6 == 370){
          houseMatrix.push(1,0,0);
        } else if (houseA6 == 600){
          houseMatrix.push(0,1,0);
        } else if (houseA6 == 1000){
          houseMatrix.push(0,0,1);
        }
      }

      //If house B is chosen
      else if (house == "house B") {
        console.log("I chose House B");

        //Getting the house type
        if (houseB2 == "Rijtjeshuis"){
          houseMatrix.push(1,0,0);
        } else if (houseB2 == "Appartement"){
          houseMatrix.push(0,1,0);
        } else if (houseB3 == "Vrijstaand"){
          houseMatrix.push(0,0,1);
        }

        //Getting the surface
        if (houseB3 == 78){
          houseMatrix.push(1,0,0);
        } else if (houseB3 == 114){
          houseMatrix.push(0,1,0);
        } else if (houseB3 == 156){
          houseMatrix.push(0,0,1);
        }

        //Getting the number of bedrooms
        if (houseB4 == 2){
          houseMatrix.push(1,0,0);
        } else if (houseB4 == 3){
          houseMatrix.push(0,1,0);
        } else if (houseB4 == 4){
          houseMatrix.push(0,0,1);
        }

        //Getting the surroundings
        if (houseB5 == "Dorp"){
          houseMatrix.push(1,0,0);
        } else if (houseB5 == "Buitenwijk"){
          houseMatrix.push(0,1,0);
        } else if (houseB5 == "Stedelijk"){
          houseMatrix.push(0,0,1);
        }

        //Getting the distance to school
        if (houseB6 == 370){
          houseMatrix.push(1,0,0);
        } else if (houseB6 == 600){
          houseMatrix.push(0,1,0);
        } else if (houseB6 == 1000){
          houseMatrix.push(0,0,1);
        }
      } else {
        console.log("I had no preference");
        houseMatrix.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0); //empty, no preference
      }
      console.log(houseMatrix);

    });

    if (checked!=1) {
     alert("Geef alstublieft een voorkeur op!");
     return;
    }

    //Notify the observer that the dilemma is done
    model.dilemma1Done();
    //model.setDilemma1();
  });

}
