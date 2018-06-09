<?php


require 'medoo.min.php';

$database = new medoo();

  $city = $_POST['city'];
  $data = $database->query("SELECT houseid FROM houses WHERE gemeente LIKE '$city'")->fetchAll();
  if ($data->num_rows == 0){
    //echo 0;
    return 0;
  } else {
    //echo 1;
    return 1;
  }
 ?>
