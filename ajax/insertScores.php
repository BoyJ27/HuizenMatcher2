<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->insert("suggestions",array(

      "userId"                 => $_POST['userId'],
      "priceA"                 => $_POST['priceA']
      // "typeA"                  => $_POST['typeA'],
      // "surfaceA"               => $_POST['surfaceA'],
      // "bedroomsA"              => $_POST['bedroomsA'],
      // "surroundingsA"          => $_POST['surroundingsA'],
      // "distanceA"              => $_POST['distanceA'],
      // "scoreA"                 => $_POST['scoreA'],
      // "priceB"                 => $_POST['houseB1'],
      // "typeB"                  => $_POST['houseB2'],
      // "surfaceB"               => $_POST['houseB3'],
      // "bedroomsB"              => $_POST['houseB4'],
      // "surroundingsB"          => $_POST['houseB5'],
      // "distanceB"              => $_POST['houseB6'],
      // "scoreB"                 => $_POST['scoreB'],
      // "priceC"                 => $_POST['houseC1'],
      // "typeC"                  => $_POST['houseC2'],
      // "surfaceC"               => $_POST['houseC3'],
      // "bedroomsC"              => $_POST['houseC4'],
      // "surroundingsC"          => $_POST['houseC5'],
      // "distanceC"              => $_POST['houseC6'],
      // "scoreC"                 => $_POST['scorec']
	));

?>
