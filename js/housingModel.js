var HousingModel = function( options ){

  // The houses [price, surface, number of rooms]
  var houseA = [250000, 80, 3];
  var houseB = [300000, 120, 5];

  // The array containing both houses
  var houses = [houseA, houseB];

  /***********************************************************
               Options
  ***********************************************************/

  // These options should be set from outside the model with
  // the random conditions assigned

  var gamecount = 1;
  var defaults = {

  };
  var options = $.extend(defaults,options);
  var o = options;
  /***********************************************************
            Variable Declarations
  ***********************************************************/

  var currentUserId, value, geslacht, consent, email, satisfactionQuestions, args,
    stepCounter = 0, leeftijd = 0;


  /***********************************************************
            Helper Functions
  ***********************************************************/

  /* Array shuffle function
  shuffle = function( array ){
    var currentIndex = array.length,
    temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while ( 0 !== currentIndex ) {
        // Pick a remaining element...
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
  }
  */

  /***********************************************************
            Private Functions
  ***********************************************************/

  // Create the user, add it to the database, and assign the
  // experimental condition.

  createUser = function(){
    console.log("Creating user");

    var path = window.location.href;
    var arr = path.split('/');
    var tidstring = arr[arr.length-1];
    var tid = tidstring.replace( /^\D+/g, '');
    console.log("tid is: " + tid);


    $.post( "ajax/insertUser.php",
      {
        tid: tid
      }).done( function( data ) {
        currentUserId = data;
        window.location = "#" + currentUserId;
        console.log(currentUserId);
      });
  }

  // After the user has filled out everything, update the user data.
  updateUser = function(mail, age){
    var email = mail;
    leeftijd = age;

    $.post( "ajax/insertDemo.php",
      {
        userId: currentUserId,
        conditie: o.condition,
        email: email,
        leeftijd: leeftijd,
        opleiding: opleiding,
        man: geslacht,
        woon: woon,
        inkomen: inkomen,
      }).done(function(){
      });
  }



  setAgqQuestions = function(answers) {
    var q1 = answers[0];
    var q2 = answers[1];
    var q3 = answers[2];
    var q4 = answers[3];
    var q5 = answers[4];
    var q6 = answers[5];
    var q7 = answers[6];
    var q8 = answers[7];
    var q9 = answers[8];
    var q10 = answers[9];
    var q11 = answers[10];
    var q12 = answers[11];
    var q13 = answers[12];
    var q14 = answers[13];
    var q15 = answers[14];
    var q16 = answers[15];
    var q17 = answers[16];
    var q18 = answers[17];
    var q19 = answers[18];
    var q20 = answers[19];

    $.post("ajax/insertAgqQuestions.php",
      {
        userId: currentUserId,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9,
        q10: q10,
        q11: q11,
        q12: q12,
        q13: q13,
        q14: q14,
        q15: q15,
        q16: q16,
        q17: q17,
        q18: q18,
        q19: q19,
        q20: q20
      }).done(function(){
      console.log("The question + answer are saved in the DB");
    });
  }

  setCity = function(cityval) {
    var city = cityval;
    console.log(city);
    /*$.post("ajax/insertDemo.php",
      {
        userId: currentUserId,
        age: age,
        gender: gender,
        experienceM: experienceM,
        selfrate: selfrate,
        experienceG: experienceG,
        remarks: remarks,
        email: email
      }).done(function(){
        console.log("The question + answer are saved in the DB");
      });
      */

  }

  setdilemma = function () {
    $.post("ajax/insertIntro.php",
      {
        userId: currentUserId
      }).done(function(){
        console.log("Intro play saved.");
      });
  }

  setGame = function () {
    $.post("ajax/insertGame.php",
      {
        userId: currentUserId
      }).done(function(){
        console.log("Game saved.");
      });
  }

  setPlaythrough = function (playt) {
    var playthrough = playt;

    $.post("ajax/insertPlaythrough.php",
      {
        userId: currentUserId,
        playthrough: playthrough
      }).done(function(){
        console.log("Playthrough saved.");
      });
  }

  setFinalStop = function () {
    $.post("ajax/insertFinalStop.php",
    {
      userId: currentUserId
    }).done(function(){
      console.log("Final stop saved.");
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

  profileDone = function(){
    notifyObservers("profileDone");
  }

  setADone = function(){
    notifyObservers("setADone");
  }

  setBDone = function(){
    notifyObservers("setBDone");
  }

  evaluationDone = function(){
    notifyObservers("evaluationDone");
  }

  experimentEnd = function(){
    notifyObservers( "experimentEnd" );
  }

  screensizeOkay = function(){
    notifyObservers("screensizeOkay")
  }

  /***********************************************************
            Public Functions
  ***********************************************************/
// dit is nodig om ze vanuit een andere js te kunnen aanroepen
  this.o                    = o;

  this.createUser                 = createUser;
  this.updateUser                 = updateUser;

  this.getHouses = function(a,b) {
    return houses[a][b]; // Exposes the b attribute for house a
  }

  this.setAgqQuestions            = setAgqQuestions;
  this.setCity                    = setCity;
  this.setdilemma                 = setdilemma;
  this.setGame                    = setGame;
  this.setPlaythrough             = setPlaythrough;
  this.setFinalStop               = setFinalStop;
  this.gamecount                  = gamecount;

  this.screensizeOkay = screensizeOkay;

  this.setConsent           = setConsent;
  this.demographicsCheck    = demographicsCheck;
  this.consentDone          = consentDone;
  this.evaluationDone          = evaluationDone;
  this.initialPreferencesDone     = initialPreferencesDone;
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
  this.setADone             = setADone;
  this.setBDone             = setBDone;
  this.profileDone          = profileDone;
  this.experimentEnd        = experimentEnd;

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
