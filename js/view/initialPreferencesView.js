var InitialPreferencesView = function( model, container ){

	/***********************************************************
					  Variable Declarations
	***********************************************************/
	var introduction = $("<p>Om een specifieker beeld te krijgen van uw voorkeuren, vragen we u onderstaande vragen te beantwoorden. Let op: niet alle 398 gemeenten zijn beschikbaar in onze dataset.</p>");
	var form				= $( "<form role='form'>" );

  var citytext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef aan in welke <strong>gemeente</strong> u wilt zoeken.*</p> ');
	//id = city
	var cityinput 			= $( '<div style="font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 400px" type="text" pattern="\d*" id="city" placeholder="Geef de gemeente op waarin u wil zoeken.">');
	var budgettext 			= $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Geef aan wat uw maximale budget is (in hele euros zonder punten of kommas).*</p> ');
	var budgetinput   	= $( '<div style="font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%" class="input-group"><input style="font-weight: normal; width: 400px" type="number" pattern="\d*" id="budget" placeholder="Geef een indicatie van uw budget (in euros).">');

	var p1 = $('<p>Kies bij elk kenmerk de waarde die het best bij uw voorkeur past.*</p>')

	var typetext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Woningtype</p> ');
	var typeinput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='type' id='type' style='width:400px'><option value='0'>---------------</option><option value='1'>Rijtjeshuis</option><option value='2'>Appartement</option><option value='3'>Vrijstaand</option>");
	var oppervlaktext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Woonoppervlak</p> ');
	var oppervlakinput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='oppervlak' id='surface' style='width:400px'><option value='0'>---------------</option><option value='1'>78 m<sup>2</sup></option><option value='2'>114 m<sup>2</sup></option><option value='3'>165 m<sup>2</sup></option>");
	var slaapkamertext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Aantal slaapkamers</p> ');
	var slaapkamerinput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='kamers' id='bedrooms' style='width:400px'><option value='0'>---------------</option><option value='1'>2</option><option value='2'>3</option><option value='3'>4</option>");
	var omgevingtext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Bebouwde omgeving</p> ');
	var omgevinginput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='omgeving' id='surroundings' style='width:400px'><option value='0'>---------------</option><option value='1'>Dorp</option><option value='2'>Buitenwijk</option><option value='3'>Stedelijk</option>");
	var basisschooltext     = $('<div style="font-size: 16px; font-weight:bold;  width: 100%"><p class="marginbottom">Afstand tot basisschool</p> ');
	var basisschoolinput 			= $ ("<div style='font-weight:bold; font-size: 16px; margin-bottom: 15px; width: 100%'><select name='basisschool' id='distance' style='width:400px'><option value='0'>---------------</option><option value='1'>370 m</option><option value='2'>600 m</option><option value='3'>1000 m</option>");

	var volgendeButtonCont		= $("<center></center>");
	var volgendeButton	 	= $( "<a class='btn button btn-default pull-right' id='extramargin' role='button'>Volgende &raquo;</a>" );
	var clearfix			= $('<div class="clearfix">' );
	var letop 				= $('<p><em>Let op: het kan even duren voordat de volgende pagina geladen is.</em></p>');
 	var letopCont     = $('<center></center>')
	//form.append( emailContainer);
	letopCont.append(letop);
	volgendeButtonCont.append(volgendeButton);

	container.append(introduction, citytext, cityinput, budgettext, budgetinput, p1, typetext, typeinput, oppervlaktext, oppervlakinput, slaapkamertext, slaapkamerinput, omgevingtext, omgevinginput, basisschooltext, basisschoolinput, volgendeButtonCont, clearfix, letopCont, clearfix);

	this.volgendeButton 		= volgendeButton;
	this.form 							= form;



	/***********************************************************
							 Update
	***********************************************************/

	model.addObserver( this );

	this.update = function( args ){

		if( args == "dilemma20Done" ){
			var availableTags = model.getMunicipalities();

			$( function() {
					var testarray = ["auto", "drankje"];
				//	console.log(availableTags);
					 $( "#city" ).autocomplete({
						 source: availableTags
				});
			});
			container.show();

		}
		if( args == 'initialPreferencesDone'){
			container.hide();
		}
	}

	container.hide();
	}
