<?php

	require 'medoo.min.php';

	$database = new medoo();

	$data = $database->insert("suggestions",array(

			"userId" 	=> $_POST['userId'],
			"evaluation1"		=> $_POST['evaluation1'],
			"evaluation2"		=> $_POST['evaluation2'],
			"evaluation3"		=> $_POST['evaluation3'],
			"evaluation4"		=> $_POST['evaluation4'],
			"evaluation5"		=> $_POST['evaluation5'],


	));

?>
