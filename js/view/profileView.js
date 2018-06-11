var ProfileView = function (model, container){

  var introduction = $("<p>Vul alstublieft ook de volgende vragen over uzelf in. We slaan alle informatie anoniem en vertrouwelijk op. Het kan niet terug getraceerd worden naar u als persoon. We gebruiken de informatie alleen voor onderzoeksdoeleinden.</p>")
  var form				= $( "<form role='form'>" );

  var geslachttext     = $('<div style="font-size: 15px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef alsjeblieft uw geslacht aan.*</p> ');
  var geslachtinput 			= $ ("<div style='font-weight:bold; font-size: 15px; margin-bottom: 15px; width: 100%'><select name='gender' id='gender' style='width:250px'><option value='0'>---------------</option><option value='1'>Vrouw</option><option value='2'>Man</option><option value='3'>Anders</option>");

  var leeftijdinput			= $( '<div style="font-weight:bold; font-size: 15px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 250px" type="text" pattern="\d*" id="leeftijd" placeholder="Vul uw leeftijd in.*">');
  var leeftijdtext     = $('<div style="font-size: 15px; font-weight:bold;  width: 100%"><p class="marginbottom">Wat is uw huidige leeftijd?*</p> ');

  var opleidingtext  = $('<div style="font-size: 15px; font-weight:bold;  width: 100%"><p class="marginbottom">Wat is uw hoogst genoten opleiding?*</p> ');
  var opleidinginput 	= $ ("<div style='font-weight:bold; font-size: 15px; margin-bottom: 15px; width: 100%'><select name='education' id='education' style='width:250px'><option value='0'>---------------</option><option value='1'>Basisschool</option><option value='2'>VMBO</option><option value='3'>HAVO</option><option value='4'>VWO</option><option value='5'>MBO</option><option value='6'>HBO</option><option value='7'>WO</option>");

  var gezintext  = $('<div style="font-size: 15px; font-weight:bold;  width: 100%"><p class="marginbottom">Wat is uw huidige gezinssamenstelling?*</p> ');
  var gezininput 	= $ ("<div style='font-weight:bold; font-size: 15px; margin-bottom: 15px; width: 100%'><select name='family' id='family' style='width:250px'><option value='0'>---------------</option><option value='1'>Alleenstaand</option><option value='2'>Samenwonend</option><option value='3'>Samenwonend met één kind</option><option value='4'>Samenwonend met meerdere kinderen</option><option value='5'>Alleenstaand met één kind</option><option value='6'>Alleenstaand met meerdere kinderen</option>");

  var remarksinput = $( '<div style="font-weight:bold; font-size: 15px; margin-bottom: 15px; width: 100%" class="input-group"><textarea style="font-weight: normal; width:500px"  type="text" id="remarks" placeholder="Opmerkingen">');
	var remarkstext = $('<div style="font-size: 15px; font-weight:bold;  width: 100%"><p class="marginbottom">Heeft u nog opmerkingen over dit experiment? (optioneel)</p> ');

  var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );

	//form.append( emailContainer);

  volgendeButtonCont.append(volgendeButton);
	container.append(introduction, geslachttext, geslachtinput, leeftijdtext, leeftijdinput, opleidingtext, opleidinginput, gezintext, gezininput, remarkstext, remarksinput, volgendeButtonCont, clearfix);

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;

  model.addObserver( this );

	this.update = function( args ){

		if( args == "evaluationDone" ){
			container.show();
		}
    if( args == "profileDone"){
			container.hide();
		}
	}

	container.hide();
}
