var InformedConsentView = function(model, container){

	var p = $("<p>Welkom bij de HuizenMatcher! Met deze tool kunt u op zoek naar het ideale huis in de omgeving van uw voorkeur. Aan de hand van enkele dilemma's berekenen we uw huizenprofiel en zoeken we de beste match voor uw wensen. Het doel van het onderzoek is om de effectiviteit van verschillende aanbevelingsalgoritmen te testen. Om deze tests te kunnen uitvoeren, stellen we u na afloop van de keuzedilemma's nog enkele vragen en slaan we uw antwoorden op de vragen op. Alle informatie wordt alleen gebruikt voor onderzoek en wordt anoniem en confidentieel bewaard.* Deelname heeft geen risico’s en duurt ongeveer 10 minuten. Tijdens je deelname kunt u op elk moment en om elke reden stoppen door de browser te sluiten.</p>");
	var p4 = $("<p>Als u met bovenstaande instemt, klik dan op ‘Vind mijn HuizenMatch!’.</p>");
	var startButtonCont 	= $("<center></center>");
	var startButton	 		= $("<a class='button btn-default btn-lg' role='button' style='margin-left:auto;font-size: 18px; padding-left:2%; padding-right:2%; ; display:inline-block;'>Vind mijn HuizenMatch!</a>");
	var p5							= $("<p></p> <p></p>");
	var p6 							= $("</br><p>* Al het onderzoek dat uitgevoerd wordt aan de Human-Technology Interaction Group volgt de Beroepscode van het NIP (Nederlands Instituut voor Psychologen). U kunt nog binnen 24 uur na deelname verzoeken om al uw data te verwijderen.</p>");
  var p7							= $("<p>Dit onderzoek wordt uitgevoerd door Nena van As, Romana Polwijk, Simon Karsten, Perry Reus, Boy Janissen en Bram Vugt. Als u vragen of opmerkingen heeft over het experiment of over het onderzoek, contacteer dan Boy Janissen via b.n.j.janissen (@) student.tue.nl. Dit onderzoek wordt onder toezicht van Chris Snijders uitgevoerd. Als u klachten over het experiment heeft, contacteer dan Chris Snijders via c.c.p.snijders (@) tue.nl. </p>")
	var clearfix				= $("<div class='clearfix'>");

	startButtonCont.append(startButton);
	container.append(p, p4, p5, startButtonCont, p6, p7, clearfix);
	/***********************************************************
						Public Variables
	***********************************************************/
	this.container 		= container;
	this.startButton 	= startButton;

	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );
	this.update = function( args ){
		if(args == "screensizeOkay"){
			container.show();
		}
		if ( args == "consentDone" ){
      container.hide();
    }
		}

 container.hide();
}
