<?php

	require 'medoo.min.php';

	$database = new medoo();

  $data = $database->insert("dilemmas",array( // insert the userID row with house A(1)...

      "userId"                => $_POST['userId'],
      "dilemma"               => $_POST['dilemma'],
      "house"                 => '1',
      "chosen"                => '0', //Not chosen
      "price"                 => $_POST['priceA'],
      "rijtjeshuis"           => $_POST['rijtjeshuisA'],
      "appartement"           => $_POST['appartementA'],
      "vrijstaand"            => $_POST['vrijstaandA'],
      "surface78"             => $_POST['surface78A'],
      "surface114"            => $_POST['surface114A'],
      "surface156"            => $_POST['surface156A'],
      "bedrooms2"             => $_POST['bedrooms2A'],
      "bedrooms3"             => $_POST['bedrooms3A'],
      "bedrooms4"             => $_POST['bedrooms4A'],
      "dorp"                  => $_POST['dorpA'],
      "buitenwijk"            => $_POST['buitenwijkA'],
      "stedelijk"             => $_POST['stedelijkA'],
      "distance370"           => $_POST['distance370A'],
      "distance600"           => $_POST['distance600A'],
      "distance1000"           => $_POST['distance1000A']
	));

  $data = $database->insert("dilemmas",array( // insert the userID row with house B(2)...

      "userId"                 => $_POST['userId'],
      "dilemma"                => $_POST['dilemma'],
      "house"                  => '2',
      "chosen"                 => '0', //Not chosen
      "price"                 => $_POST['priceB'],
      "rijtjeshuis"           => $_POST['rijtjeshuisB'],
      "appartement"           => $_POST['appartementB'],
      "vrijstaand"            => $_POST['vrijstaandB'],
      "surface78"             => $_POST['surface78B'],
      "surface114"            => $_POST['surface114B'],
      "surface156"            => $_POST['surface156B'],
      "bedrooms2"             => $_POST['bedrooms2B'],
      "bedrooms3"             => $_POST['bedrooms3B'],
      "bedrooms4"             => $_POST['bedrooms4B'],
      "dorp"                  => $_POST['dorpB'],
      "buitenwijk"            => $_POST['buitenwijkB'],
      "stedelijk"             => $_POST['stedelijkB'],
      "distance370"           => $_POST['distance370B'],
      "distance600"           => $_POST['distance600B'],
      "distance1000"           => $_POST['distance1000B']
	));

?>
