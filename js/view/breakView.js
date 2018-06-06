var BreakView = function (model, container) {

  var h1 = $("<p>Toe aan een korte pauze? Bekijk onderstaand filmpje.</p>");
  var filmCont = $("<center><center>");
  var film = $('<iframe width="560" height="315" src="https://www.youtube.com/embed/Gy3uuoE2TD8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>"');
  var volgendeButtonCont		= $("<center style='margin-bottom=25px;'></center>");
  var volgendeButton    = $( "<a class='btn button btn-default pull-right' role='button'>Volgende &raquo;</a>" );
  var clearfix          = $( '<div class="clearfix">' );

  filmCont.append(film);
  volgendeButtonCont.append(volgendeButton);
  this.volgendeButton       = volgendeButton;



  container.append(h1, filmCont, volgendeButtonCont, clearfix);


  model.addObserver( this );
  this.update = function(args){
    if ( args == "dilemma10Done"){
        //The container is visible, the elements within it might be hidden
        container.show();
      }

    if ( args == "breakDone" ){
      container.hide();
    }
  }
  container.hide();


}
