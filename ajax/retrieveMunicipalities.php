<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->select("municipalities","municipality");

  echo json_encode($data); //omzetten naar fatsoenlijk array formaat 
?>
