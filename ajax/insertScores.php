<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->update("suggestions",array( // Update the created userId row in table "users"

      "userId"                 => $_POST['userId'],
      "priceA"                 => $_POST['houseA1'],
      "typeA"                  => $_POST['houseA2'],
      "surfaceA"               => $_POST['houseA3'],
      "bedroomsA"              => $_POST['houseA4'],
      "surroundingsA"          => $_POST['houseA5'],
      "distanceA"              => $_POST['houseA6'],
      "scoreA"                 => $_POST['scoreA'],

      "priceB"                 => $_POST['houseB1'],
      "typeB"                  => $_POST['houseB2'],
      "surfaceB"               => $_POST['houseB3'],
      "bedroomsB"              => $_POST['houseB4'],
      "surroundingsB"          => $_POST['houseB5'],
      "distanceB"              => $_POST['houseB6'],
      "scoreB"                 => $_POST['scoreB'],

      "priceC"                 => $_POST['houseC1'],
      "typeC"                  => $_POST['houseC2'],
      "surfaceC"               => $_POST['houseC3'],
      "bedroomsC"              => $_POST['houseC4'],
      "surroundingsC"          => $_POST['houseC5'],
      "distanceC"              => $_POST['houseC6'],
      "scoreC"                 => $_POST['scorec']
	), [
		"userId" => $_POST['userId']	//...where the userId = the userId
	]);

?>
