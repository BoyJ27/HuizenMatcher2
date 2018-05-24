var Dilemma10View = function (model, container) {
  var h1 = $("<p>Elementen: Korte zin ter herhaling instructie, tabel met huizen, radiobuttons, volgende knop</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<button class='btn button btn-default pull-right' style='color:black;' id='timedbutton' role='button'>Volgende &raquo;</button>" );
  var clearfix          = $( '<div class="clearfix">' );


  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;
  container.append(h1, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "dilemma9Done"){
        //The container is visible, the elements within it might be hidden
        container.show();

      }

    if ( args == "dilemma10Done" ){
      container.hide();
    }
  }
  container.hide();


}
