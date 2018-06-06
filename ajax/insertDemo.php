<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->update("users",array( // Update the created userId row in table "users"

      "userId"			  => $_POST['userId'],
      "gender" 		    => $_POST['gender'],
      "age" 		      => $_POST['age'],
      "education" 	=> $_POST['education'],
      "family" 		  => $_POST['family'],
			"remarks" 		  => $_POST['remarks']

	), [
		"userId" => $_POST['userId']	//...where the userId = the userId
	]);

?>
