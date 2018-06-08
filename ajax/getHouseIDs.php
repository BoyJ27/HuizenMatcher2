<?php

	require 'medoo.min.php';

	$database = new medoo();

	//Get all ID's for the houses in the municipality that is given
  $data = $database->select("houses","houseid", [
		"AND" => [
			"gemeente" => $_GET['gemeente'], //'gemeente' is passed to the request
			"prijs[<=]" => $_GET['maxBudget'] //'maxBudget' is passed to the request
		]
	]);

  echo json_encode($data); //omzetten naar JSON object
?>
