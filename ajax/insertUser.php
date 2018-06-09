<?php

	require 'medoo.min.php';

	$database = new medoo();

	$max = $database->max("users",'userId');

	$database->insert("users",[
			"userId"			=> $max+1,
	]);

	//echo $max+1;

?>
