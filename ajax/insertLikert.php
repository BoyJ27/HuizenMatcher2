<?php

	require 'medoo.min.php';

	$database = new medoo();

	$data = $database->update("suggestions",array(

			"evaluation1"		=> $_POST['evaluation1'],
			"evaluation2"		=> $_POST['evaluation2'],
			"evaluation3"		=> $_POST['evaluation3'],
			"evaluation4"		=> $_POST['evaluation4'],
			"evaluation5"		=> $_POST['evaluation5'],

	), [
			"userId" => $_POST['userId']
	]);

?>
