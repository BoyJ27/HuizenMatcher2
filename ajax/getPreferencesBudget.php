<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->get("users","maxBudget", [
    "userId"                => $_GET['userId']
  ]);

  echo $data; //omzetten naar fatsoenlijk array formaat
?>
