<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->update("users",array( // Update the created userId row in table "users"

      "userId"                 => $_POST['userId'],
      "importancePrice"        => $_POST['price'],
      "importanceType"         => $_POST['type'],
      "importanceSurface"      => $_POST['surface'],
      "importanceBedrooms"     => $_POST['bedrooms'],
      "importanceSurroundings" => $_POST['surroundings'],
      "importanceDistance"     => $_POST['distance'],
      "importanceOther"        => $_POST['other']

	), [
		"userId" => $_POST['userId']	//...where the userId = the userId
	]);

?>
