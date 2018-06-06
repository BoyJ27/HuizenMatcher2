<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->update("users",array( // Update the created userId row in table "users"

      "municipality"          => $_POST['city'],
      "maxBudget"             => $_POST['budget'],
      "selectedType"          => $_POST['type'],
      "selectedSurface"       => $_POST['surface'],
      "selectedBedrooms"      => $_POST['bedrooms'],
      "selectedSurroundings"  => $_POST['surroundings'],
      "selectedDistance"      => $_POST['distance'],

	), [
		"userId" => $_POST['userId']	//...where the userId = the userId
	]);

?>
