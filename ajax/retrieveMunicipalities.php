<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->select("municipalities", "municipality");

print_r($data);
?>
