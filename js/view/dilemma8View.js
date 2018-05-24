var Dilemma8View = function (model, container) {
  var h1 = $("<p>Elementen: Korte zin ter herhaling instructie, tabel met huizen, radiobuttons, volgende knop</p>");
  var volgendeButtonCont		= $("<center></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;

  var instruction1Cont = $('<div></div>');
  var instruction1 = $('<center><center>');
  instruction1Cont.append(instruction1);

  container.append(h1, instruction1Cont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "dilemma7Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "dilemma8Done" ){
      container.hide();
    }
  }
  container.hide();


}
