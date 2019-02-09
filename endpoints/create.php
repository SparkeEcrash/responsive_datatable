<?php

  require_once('./../database-connection.php');
  
  if(empty($_POST['fields'])) {
    $output = [
      'success' => false,
      'error' => 'no information received'
    ];
    $json_output = json_encode($output);
    print($json_output);
    exit();
  } else {
    $_POST = json_decode($_POST['fields'], true);
    $first_name = addslashes($_POST["first_name"]);
    $last_name = addslashes($_POST["last_name"]);
    $telephone_number = addslashes($_POST["telephone_number"]);
    $street = addslashes($_POST["street"]);
    $city = addslashes($_POST["city"]);
    $state = addslashes($_POST["state"]);
    $zip_code = addslashes($_POST["zip_code"]);
    $email_address = addslashes($_POST["email_address"]);
    $email_address = addslashes($_POST["email_address"]);
    $search_id = addslashes($_POST["getID"]);
  }

  if ($_FILES) {
    if ($_FILES['image']['error'] == 0) {
      $image_name = $_FILES['image']['name'];
      $image_name = date_timestamp_get(date_create()).'_'.$image_name;
      move_uploaded_file($_FILES['image']['tmp_name'], './../images/' . $image_name);
    } else {
      $output = [
        'success' => false,
        'error' => 'error with uploaded image file'
      ];
      $json_output = json_encode($output);
      print($json_output);
      exit();
    }
  } else {
    $image_name = '';
  }

  $sql = "INSERT INTO $table(first_name, last_name, telephone_number, street, city, state, zip_code, email_address, image, user_id) VALUES('".$first_name."', '".$last_name."', '".$telephone_number."', '".$street."', '".$city."', '".$state."', '".$zip_code."', '".$email_address."', '".$image_name."', '".$search_id."')";
  if(mysqli_query($connect, $sql))
  {
    $output = [
      'success' => true,
    ];
    $json_output =json_encode($output);
    print($json_output);
  } else {
    $output = [
      'success' => false,
      'error' => mysqli_error($connect)
    ];
    $json_output = json_encode($output);
    print($json_output);
  }

?>