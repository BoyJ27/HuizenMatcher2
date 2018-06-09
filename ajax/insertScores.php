<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->insert("suggestions",array(

      "userId"                 => $_POST['userId'],
      "priceA"                 => $_POST['priceA'],
      "typeA"                  => $_POST['typeA'],
      "surfaceA"               => $_POST['surfaceA'],
      "bedroomsA"              => $_POST['bedroomsA'],
      "surroundingsA"          => $_POST['surroundingsA'],
      "distanceA"              => $_POST['distanceA'],
      "scoreA"                 => $_POST['scoreA'],
      "priceB"                 => $_POST['priceB'],
      "typeB"                  => $_POST['typeB'],
      "surfaceB"               => $_POST['surfaceB'],
      "bedroomsB"              => $_POST['bedroomsB'],
      "surroundingsB"          => $_POST['surroundingsB'],
      "distanceB"              => $_POST['distanceB'],
      "scoreB"                 => $_POST['scoreB'],
      "priceC"                 => $_POST['priceC'],
      "typeC"                  => $_POST['typeC'],
      "surfaceC"               => $_POST['surfaceC'],
      "bedroomsC"              => $_POST['bedroomsC'],
      "surroundingsC"          => $_POST['surroundingsC'],
      "distanceC"              => $_POST['distanceC'],
      "scoreC"                 => $_POST['scoreC']
	));

?>
