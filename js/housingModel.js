var HousingModel = function( options ){

  /***********************************************************
               Options
  ***********************************************************/

  // These options should be set from outside the model with
  // the random conditions assigned
  var defaults = {
  };

  var options = $.extend(defaults,options);
  var o = options;
  /***********************************************************
            Variable Declarations
  ***********************************************************/

  var currentUserId, value, geslacht, consent, email, satisfactionQuestions, args,
    stepCounter = 0, leeftijd = 0;

  // The houses [price, type, surface, bedrooms, surroundings, distance to school]
  var house01 = [271000, "Rijtjeshuis", 114, 2, "Buitenwijk", 1000];
  var house02 = [236000, "Rijtjeshuis", 114, 3, "Dorp", 370];
  var house03 = [251000, "Appartement", 114, 3, "Stedelijk", 600];
  var house04 = [181000, "Rijtjeshuis", 78, 2, "Buitenwijk", 1000];
  var house05 = [170000, "Appartement", 78, 2, "Stedelijk", 370];
  var house06 = [173000, "Rijtjeshuis", 78, 3, "Stedelijk", 370];
  var house07 = [363000, "Vrijstaand", 165, 4, "Dorp", 600];
  var house08 = [177000, "Rijtjeshuis", 78, 3, "Stedelijk", 600];
  var house09 = [249000, "Vrijstaand", 114, 3, "Dorp", 370];
  var house10 = [178000, "Vrijstaand", 78, 2, "Dorp", 600];
  var house11 = [368000, "Rijtjeshuis", 165, 3, "Dorp", 1000];
  var house12 = [173000, "Rijtjeshuis", 78, 3, "Stedelijk", 370];
  var house13 = [388000, "Vrijstaand", 165, 4, "Stedelijk", 370];
  var house14 = [173000, "Rijtjeshuis", 78, 3, "Stedelijk", 370];
  var house15 = [355000, "Appartement", 165, 3, "Buitenwijk", 600];
  var house16 = [189000, "Rijtjeshuis", 78, 2, "Stedelijk", 1000];
  var house17 = [251000, "Appartement", 114, 3, "Stedelijk", 600];
  var house18 = [175000, "Appartement", 78, 2, "Stedelijk", 600];
  var house19 = [251000, "Appartement", 114, 3, "Stedelijk", 600];
  var house20 = [181000, "Rijtjeshuis", 78, 2, "Buitenwijk", 1000];
  var house21 = [273000, "Vrijstaand", 114, 3, "Stedelijk", 370];
  var house22 = [186000, "Vrijstaand", 78, 2, "Buitenwijk", 600];
  var house23 = [258000, "Appartement", 114, 3, "Stedelijk", 1000];
  var house24 = [261000, "Appartement", 114, 2, "Stedelijk", 600];
  var house25 = [420000, "Rijtjeshuis", 165, 2, "Stedelijk", 1000];
  var house26 = [271000, "Rijtjeshuis", 114, 2, "Buitenwijk", 1000];
  var house27 = [167000, "Appartement", 78, 2, "Buitenwijk", 600];
  var house28 = [176000, "Rijtjeshuis", 78, 2, "Buitenwijk", 600];
  var house29 = [272000, "Rijtjeshuis", 114, 3, "Stedelijk", 1000];
  var house30 = [283000, "Rijtjeshuis", 114, 2, "Stedelijk", 1000];
  var house31 = [388000, "Vrijstaand", 165, 4, "Stedelijk", 370];
  var house32 = [168000, "Appartement", 78, 3, "Stedelijk", 600];
  var house33 = [249000, "Rijtjeshuis", 114, 3, "Dorp", 1000];
  var house34 = [183000, "Vrijstaand", 78, 2, "Dorp", 1000];
  var house35 = [348000, "Appartement", 165, 4, "Stedelijk", 370];
  var house36 = [388000, "Vrijstaand", 165, 4, "Stedelijk", 370];
  var house37 = [279000, "Vrijstaand", 114, 2, "Buitenwijk", 600];
  var house38 = [180000, "Rijtjeshuis", 78, 2, "Stedelijk", 370];
  var house39 = [365000, "Appartement", 165, 3, "Buitenwijk", 1000];
  var house40 = [164000, "Appartement", 78, 3, "Stedelijk", 370];

  // The arrays containing the dilemma's of houses
  // index 0 = house A, index 1 = house B, index 2 = no. dilemma
  var dilemma01 = [house01, house02, 1];
  var dilemma02 = [house03, house04, 2];
  var dilemma03 = [house05, house06, 3];
  var dilemma04 = [house07, house08, 4];
  var dilemma05 = [house09, house10, 5];

  var dilemma06 = [house11, house12, 6];
  var dilemma07 = [house13, house14, 7];
  var dilemma08 = [house15, house16, 8];
  var dilemma09 = [house17, house18, 9];
  var dilemma10 = [house19, house20, 10];

  var dilemma11 = [house21, house22, 11];
  var dilemma12 = [house23, house24, 12];
  var dilemma13 = [house25, house26, 13];
  var dilemma14 = [house27, house28, 14];
  var dilemma15 = [house29, house30, 15];

  var dilemma16 = [house31, house32, 16];
  var dilemma17 = [house33, house34, 17];
  var dilemma18 = [house35, house36, 18];
  var dilemma19 = [house37, house38, 19];
  var dilemma20 = [house39, house40, 20];

  // The array containing the dilemmas
  // Index 0 = dilemma, index 1 = house, index 2 = attribute
  var houses = [
    dilemma01,
    dilemma02,
    dilemma03,
    dilemma04,
    dilemma05,
    dilemma06,
    dilemma07,
    dilemma08,
    dilemma09,
    dilemma10,
    dilemma11,
    dilemma12,
    dilemma13,
    dilemma14,
    dilemma15,
    dilemma16,
    dilemma17,
    dilemma18,
    dilemma19,
    dilemma20
  ];

  var municipalities = [];
  $.get("ajax/getMunicipalities.php").done(function (data) {
    municipalities = JSON.parse(data);
  });

  var three = [];
  setThree = function (arrayval) {
    var array = arrayval;
    three.push(array[0], array[1], array[2]);
  }

  //Function to check if the given city exists
  checkCity = function(cityvar){
      var city = cityvar;
      var count = municipalities.length;
        for (var i=0;i<count;i++)
        {
            if (municipalities[i]===city) {
              return true;
            }
          }
          return false;
    }

  //Function to check if there are at least three entries in the given array
  checkHouses = function(arrayval) {
      var array = arrayval;

      if (array.length > 2) {
        return true;
      } else {
        return false;
      }
    }

  /***********************************************************
            Helper Functions
  ***********************************************************/

  // Shuffle the dilemma's Array
  shuffleHouses = function(array){
    // console.log("Shuffling dilemma's...");
    // console.log("Index 0, 0, 0 before shuffle: "+houses[0][0][0]);
    // console.log("Dilemma at start before shuffle: "+houses[0][2]);
    var currentIndex = array.length; // Start at the end of the array

    // console.log("current index = "+currentIndex);
    var temporaryValue, randomIndex;

      // While there are still array elements left
      while ( 0 !== currentIndex ) {
        //Pick a remaining element...
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;

        //And swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      // console.log("Index 0, 0, 0 after shuffle: "+houses[0][0][0]);
      // console.log("Dilemma at start after shuffle: "+houses[0][2]);
      return array;
  }

  /***********************************************************
            Private Functions
  ***********************************************************/


  // Create the user, add it to the database, and assign the
  // experimental condition.

  createUser = function(){
    //console.log("Creating user");
    $.post( "ajax/insertUser.php").done( function( data ) {
        currentUserId = data;
        //console.log(currentUserId);
      });
  }

  //Function to set the answers of the demographic questions to the 'users' dataset
  setDemoQuestions = function(ageval, genderval, educationval, familyval, remarksval) {
    var age = ageval;
    var gender = genderval;
    var education = educationval;
    var family = familyval;
    var remarks = remarksval;

    $.post("ajax/insertDemo.php",
      {
        userId: currentUserId,
        age: age,
        gender: gender,
        education: education,
        family: family,
        remarks: remarks
      }).done(function(){
        //console.log("The question + answer are saved in the DB");
      });

  }


  setPreferences = function(cityval, budgetval, typeval, surfaceval, bedroomsval, surroundingsval, distanceval) {
    var city = cityval;
    var budget = budgetval;
    var type = typeval;
    var surface = surfaceval;
    var bedrooms = bedroomsval;
    var surroundings = surroundingsval;
    var distance = distanceval;

    $.post("ajax/insertPreferences.php",
      {
        userId: currentUserId,
        city: city,
        budget: budget,
        type: type,
        surface: surface,
        bedrooms: bedrooms,
        surroundings: surroundings,
        distance: distance,
      }).done(function(){
      //  console.log("The preferences are saved in the DB");
      });

  }

  //Function to set the user's evaluation of importance of the attributes in the 'users' dataset
  setEvaluation = function(priceval, typeval, surfaceval, bedroomsval, surroundingsval, distanceval, otherval) {
    var price = priceval;
    var type = typeval;
    var surface = surfaceval;
    var bedrooms = bedroomsval;
    var surroundings = surroundingsval;
    var distance = distanceval;
    var other = otherval;

    $.post("ajax/insertEvaluation.php",
      {
          userId: currentUserId,
          price: price,
          type: type,
          surface: surface,
          bedrooms: bedrooms,
          surroundings: surroundings,
          distance: distance,
          other: other
      }).done(function(){
        //console.log("The evaluations are saved in the DB");
      });
  }

  //Function to set the attributes of the suggestions and to set the user's scores of these suggestions
  // Order: price, type, surface, bedrooms, surroundings, distance to school, score
  setScores = function (pricevalA, typevalA, surfacevalA, bedroomsvalA, surroundingsvalA, distancevalA, scorevalA, pricevalB, typevalB, surfacevalB, bedroomsvalB, surroundingsvalB, distancevalB, scorevalB, pricevalC, typevalC, surfacevalC, bedroomsvalC, surroundingsvalC, distancevalC, scorevalC) {
    var houseA1 = pricevalA;
    var houseA2 = typevalA;
    var surfaceA = surfacevalA;
    var bedroomsA = bedroomsvalA;
    var surroundingsA = surroundingsvalA;
    var distanceA = distancevalA;
    var scoreA = scorevalA;

    var priceB = pricevalB;
    var typeB = typevalB;
    var surfaceB = surfacevalB;
    var bedroomsB = bedroomsvalB;
    var surroundingsB = surroundingsvalB;
    var distanceB = distancevalB;
    var scoreB = scorevalB;

    var priceC = pricevalC;
    var typeC = typevalC;
    var surfaceC = surfacevalC;
    var bedroomsC = bedroomsvalC;
    var surroundingsC = surroundingsvalC;
    var distanceC = distancevalC;
    var scoreC = scorevalC;

    $.post("ajax/insertScores.php", {
      userId: currentUserId,
      priceA: houseA1,
      typeA: houseA2,
      surfaceA: surfaceA,
      bedroomsA: bedroomsA,
      surroundingsA: surroundingsA,
      distanceA: distanceA,
      scoreA: scoreA,
      priceB: priceB,
      typeB: typeB,
      surfaceB: surfaceB,
      bedroomsB: bedroomsB,
      surroundingsB: surroundingsB,
      distanceB: distanceB,
      scoreB: scoreB,
      priceC: priceC,
      typeC: typeC,
      surfaceC: surfaceC,
      bedroomsC: bedroomsC,
      surroundingsC: surroundingsC,
      distanceC: distanceC,
      scoreC: scoreC
    }).done(function () {
      //console.log("The suggestions and their scores are stored in the database");
    });
  }

  setLikert = function(eval1, eval2, eval3, eval4, eval5) {
    var evaluation1 = eval1;
    var evaluation2 = eval2;
    var evaluation3 = eval3;
    var evaluation4 = eval4;
    var evaluation5 = eval5;

    $.post("ajax/insertLikert.php",
      {
          userId: currentUserId,
          evaluation1: evaluation1,
          evaluation2: evaluation2,
          evaluation3: evaluation3,
          evaluation4: evaluation4,
          evaluation5: evaluation5,

      }).done(function(){
        //console.log("The evaluations are saved in the DB");
      });
  }

  //Function to set the attributes of houses if house A was chosen
  setDilemmaA = function (dilemmaval, arrayA, arrayB) {
    var dilemma = dilemmaval;
    var houseMatrixA = arrayA;
    var houseMatrixB = arrayB;

    $.post("ajax/insertDilemmaA.php",
      {
        userId: currentUserId,
        dilemma: dilemma,
        priceA: houseMatrixA[0],
        rijtjeshuisA: houseMatrixA[1],
        appartementA: houseMatrixA[2],
        vrijstaandA: houseMatrixA[3],
        surface78A: houseMatrixA[4],
        surface114A: houseMatrixA[5],
        surface156A: houseMatrixA[6],
        bedrooms2A: houseMatrixA[7],
        bedrooms3A: houseMatrixA[8],
        bedrooms4A: houseMatrixA[9],
        dorpA: houseMatrixA[10],
        buitenwijkA: houseMatrixA[11],
        stedelijkA: houseMatrixA[12],
        distance370A: houseMatrixA[13],
        distance600A: houseMatrixA[14],
        distance1000A: houseMatrixA[15],
        priceB: houseMatrixB[0],
        rijtjeshuisB: houseMatrixB[1],
        appartementB: houseMatrixB[2],
        vrijstaandB: houseMatrixB[3],
        surface78B: houseMatrixB[4],
        surface114B: houseMatrixB[5],
        surface156B: houseMatrixB[6],
        bedrooms2B: houseMatrixB[7],
        bedrooms3B: houseMatrixB[8],
        bedrooms4B: houseMatrixB[9],
        dorpB: houseMatrixB[10],
        buitenwijkB: houseMatrixB[11],
        stedelijkB: houseMatrixB[12],
        distance370B: houseMatrixB[13],
        distance600B: houseMatrixB[14],
        distance1000B: houseMatrixB[15]
      }).done(function(){
        // console.log("Dilemma "+dilemma+" choice = house A has been inserted into the database.");
      });
  }

  //Function to set the attributes of houses if house B was chosen
  setDilemmaB = function (dilemmaval, arrayA, arrayB) {
    var dilemma = dilemmaval;
    var houseMatrixA = arrayA;
    var houseMatrixB = arrayB;

    $.post("ajax/insertDilemmaB.php",
      {
        userId: currentUserId,
        dilemma: dilemma,
        priceA: houseMatrixA[0],
        rijtjeshuisA: houseMatrixA[1],
        appartementA: houseMatrixA[2],
        vrijstaandA: houseMatrixA[3],
        surface78A: houseMatrixA[4],
        surface114A: houseMatrixA[5],
        surface156A: houseMatrixA[6],
        bedrooms2A: houseMatrixA[7],
        bedrooms3A: houseMatrixA[8],
        bedrooms4A: houseMatrixA[9],
        dorpA: houseMatrixA[10],
        buitenwijkA: houseMatrixA[11],
        stedelijkA: houseMatrixA[12],
        distance370A: houseMatrixA[13],
        distance600A: houseMatrixA[14],
        distance1000A: houseMatrixA[15],
        priceB: houseMatrixB[0],
        rijtjeshuisB: houseMatrixB[1],
        appartementB: houseMatrixB[2],
        vrijstaandB: houseMatrixB[3],
        surface78B: houseMatrixB[4],
        surface114B: houseMatrixB[5],
        surface156B: houseMatrixB[6],
        bedrooms2B: houseMatrixB[7],
        bedrooms3B: houseMatrixB[8],
        bedrooms4B: houseMatrixB[9],
        dorpB: houseMatrixB[10],
        buitenwijkB: houseMatrixB[11],
        stedelijkB: houseMatrixB[12],
        distance370B: houseMatrixB[13],
        distance600B: houseMatrixB[14],
        distance1000B: houseMatrixB[15]
      }).done(function(){
        // console.log("Dilemma "+dilemma+" choice = house B has been inserted into the database.");
      });
  }

  //Function to set the attributes of houses if no preference was chosen
  setDilemmaNo = function (dilemmaval, arrayA, arrayB) {
    var dilemma = dilemmaval;
    var houseMatrixA = arrayA;
    var houseMatrixB = arrayB;

    $.post("ajax/insertDilemmaNo.php",
      {
        userId: currentUserId,
        dilemma: dilemma,
        priceA: houseMatrixA[0],
        rijtjeshuisA: houseMatrixA[1],
        appartementA: houseMatrixA[2],
        vrijstaandA: houseMatrixA[3],
        surface78A: houseMatrixA[4],
        surface114A: houseMatrixA[5],
        surface156A: houseMatrixA[6],
        bedrooms2A: houseMatrixA[7],
        bedrooms3A: houseMatrixA[8],
        bedrooms4A: houseMatrixA[9],
        dorpA: houseMatrixA[10],
        buitenwijkA: houseMatrixA[11],
        stedelijkA: houseMatrixA[12],
        distance370A: houseMatrixA[13],
        distance600A: houseMatrixA[14],
        distance1000A: houseMatrixA[15],
        priceB: houseMatrixB[0],
        rijtjeshuisB: houseMatrixB[1],
        appartementB: houseMatrixB[2],
        vrijstaandB: houseMatrixB[3],
        surface78B: houseMatrixB[4],
        surface114B: houseMatrixB[5],
        surface156B: houseMatrixB[6],
        bedrooms2B: houseMatrixB[7],
        bedrooms3B: houseMatrixB[8],
        bedrooms4B: houseMatrixB[9],
        dorpB: houseMatrixB[10],
        buitenwijkB: houseMatrixB[11],
        stedelijkB: houseMatrixB[12],
        distance370B: houseMatrixB[13],
        distance600B: houseMatrixB[14],
        distance1000B: houseMatrixB[15]
      }).done(function(){
        // console.log("Dilemma "+dilemma+" choice = no preference has been inserted into the database.");
      });
  }

  setConsent = function (value){
    consent = value;
  }

  demographicsCheck = function(){
    var demographCheck;
    if( opleiding == 0 || geslacht == -1){
      demographCheck = 0;
    }else{
      demographCheck = 1;
    }
    return demographCheck;
  }

  //Takes the price, type, surface, bedrooms, surroundings and distance and returns an 01010 array
  createMatrix = function(price, type, surface, bedrooms, surroundings, distance) {
    //Creating an empty array to store
    var houseMatrix = [];

    houseMatrix.push(price);

    //Getting the house type
    if (type == "Rijtjeshuis"){
      houseMatrix.push(1,0,0);
    } else if (type == "Appartement"){
      houseMatrix.push(0,1,0);
    } else if (type == "Vrijstaand"){
      houseMatrix.push(0,0,1);
    }

    //Getting the surface
    if (surface == 78){
      houseMatrix.push(1,0,0);
    } else if (surface == 114){
      houseMatrix.push(0,1,0);
    } else if (surface == 165){
      houseMatrix.push(0,0,1);
    }

    //Getting the number of bedrooms
    if (bedrooms == 2){
      houseMatrix.push(1,0,0);
    } else if (bedrooms == 3){
      houseMatrix.push(0,1,0);
    } else if (bedrooms == 4){
      houseMatrix.push(0,0,1);
    }

    //Getting the surroundings
    if (surroundings == "Dorp"){
      houseMatrix.push(1,0,0);
    } else if (surroundings == "Buitenwijk"){
      houseMatrix.push(0,1,0);
    } else if (surroundings == "Stedelijk"){
      houseMatrix.push(0,0,1);
    }

    //Getting the distance to school
    if (distance == 370){
      houseMatrix.push(1,0,0);
    } else if (distance == 600){
      houseMatrix.push(0,1,0);
    } else if (distance == 1000){
      houseMatrix.push(0,0,1);
    }

    return houseMatrix;
  }

  consentDone = function(){
    notifyObservers("consentDone");
  }

  initialPreferencesDone = function(){
    notifyObservers( "initialPreferencesDone" );
  }

  instructionsDone = function(){
    notifyObservers("instructionsDone");
  }

  dilemma1Done = function(){
    notifyObservers("dilemma1Done");
  }

  dilemma2Done = function(){
    notifyObservers("dilemma2Done");
  }

  dilemma3Done = function(){
    notifyObservers("dilemma3Done");
  }

  dilemma4Done = function(){
    notifyObservers("dilemma4Done");
  }

  dilemma5Done = function(){
    notifyObservers("dilemma5Done");
  }

  dilemma6Done = function(){
    notifyObservers("dilemma6Done");
  }

  dilemma7Done = function(){
    notifyObservers("dilemma7Done");
  }

  dilemma8Done = function(){
    notifyObservers("dilemma8Done");
  }

  dilemma9Done = function(){
    notifyObservers("dilemma9Done");
  }

  dilemma10Done = function(){
    notifyObservers("dilemma10Done");
  }

  breakDone = function() {
    notifyObservers("breakDone");
  }

  dilemma11Done = function(){
    notifyObservers("dilemma11Done");
  }

  dilemma12Done = function(){
    notifyObservers("dilemma12Done");
  }

  dilemma13Done = function(){
    notifyObservers("dilemma13Done");
  }

  dilemma14Done = function(){
    notifyObservers("dilemma14Done");
  }

  dilemma15Done = function(){
    notifyObservers("dilemma15Done");
  }

  dilemma16Done = function(){
    notifyObservers("dilemma16Done");
  }

  dilemma17Done = function(){
    notifyObservers("dilemma17Done");
  }

  dilemma18Done = function(){
    notifyObservers("dilemma18Done");
  }

  dilemma19Done = function(){
    notifyObservers("dilemma19Done");
  }

  dilemma20Done = function(){
    notifyObservers("dilemma20Done");
  }

  profileDone = function(){
    notifyObservers("profileDone");
  }

  setADone = function(){
    notifyObservers("setADone");
  }

  evaluationDone = function(){
    notifyObservers("evaluationDone");
  }

  screensizeOkay = function(){
    notifyObservers("screensizeOkay")
  }

  /***********************************************************
            Public Functions
  ***********************************************************/
  // dit is nodig om ze vanuit een andere js te kunnen aanroepen
  this.o                    = o;

  //Functions to return model stated variables
  this.getHouses                  = function(a,b,c) {return houses[a][b][c]}; // Exposes the c-index attribute for b-index house from a-index dilemma
  this.getCurrentUserID           = function(){return currentUserId}; //Exposes the currentUserId
  this.getThree                   = function(){return three}; //Exposes the three
  this.getMunicipalities          = function(){return municipalities} ;
  this.houses                     = houses;

  //Functions to create / establish variables
  this.shuffleHouses              = shuffleHouses; //Shuffles the houses array
  this.createMatrix               = createMatrix; //creates the 0101 entries for a given house and its attributes
  this.setThree                   = setThree; //Establish the objects in variable 'three'

  //Functions to write to or from the database
  this.createUser                 = createUser;
  this.setDemoQuestions           = setDemoQuestions;
  this.setPreferences             = setPreferences;
  this.setEvaluation              = setEvaluation;
  this.setLikert                  = setLikert;
  this.setDilemmaA                = setDilemmaA;
  this.setDilemmaB                = setDilemmaB;
  this.setDilemmaNo               = setDilemmaNo;
  this.insertScores               = setScores;

  //Functions to perform input checks
  this.checkCity = checkCity;
  this.checkHouses = checkHouses;
  this.screensizeOkay = screensizeOkay;
  this.setConsent           = setConsent;
  this.demographicsCheck    = demographicsCheck;

  //Potential functions to delete:
  // this.municipalities = municipalities;
  // this.setCity                    = setCity;
  this.profileDone          = profileDone;

  //Done's for the views
  this.consentDone          = consentDone;
  this.instructionsDone     = instructionsDone;
  this.dilemma1Done          = dilemma1Done;
  this.dilemma2Done         = dilemma2Done;
  this.dilemma3Done         = dilemma3Done;
  this.dilemma4Done         = dilemma4Done;
  this.dilemma5Done         = dilemma5Done;
  this.dilemma6Done         = dilemma6Done;
  this.dilemma7Done         = dilemma7Done;
  this.dilemma8Done         = dilemma8Done;
  this.dilemma9Done         = dilemma9Done;
  this.dilemma10Done        = dilemma10Done;
  this.breakDone            = breakDone;
  this.dilemma11Done        = dilemma11Done;
  this.dilemma12Done        = dilemma12Done;
  this.dilemma13Done        = dilemma13Done;
  this.dilemma14Done        = dilemma14Done;
  this.dilemma15Done        = dilemma15Done;
  this.dilemma16Done        = dilemma16Done;
  this.dilemma17Done        = dilemma17Done;
  this.dilemma18Done        = dilemma18Done;
  this.dilemma19Done        = dilemma19Done;
  this.dilemma20Done        = dilemma20Done;
  this.initialPreferencesDone     = initialPreferencesDone;
  this.setADone             = setADone;
  this.evaluationDone       = evaluationDone;

  /***********************************************************
            Observable Pattern
  ***********************************************************/

  var listeners = [];

  this.addObserver = function(listener){
    listeners.push(listener);
  }

  notifyObservers = function( args ){
    for ( var i = 0; i < listeners.length; i++ ){
          listeners[i].update(args);
      }
  }

  this.notifyObservers      = notifyObservers;


}
