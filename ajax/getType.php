<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->get("houses","woningtype", [
    "houseid"               => $_GET['id']
  ]);

  echo $data; //omzetten naar fatsoenlijk array formaat
?>
