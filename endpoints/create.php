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

  $sql = "INSERT INTO $table(first_name, last_name, telephone_number, street, city, state, zip_code, email_address, image) VALUES('".$_POST["first_name"]."', '".$_POST["last_name"]."', '".$_POST["telephone_number"]."', '".$_POST["street"]."', '".$_POST["city"]."', '".$_POST["state"]."', '".$_POST["zip_code"]."', '".$_POST["email_address"]."', '".$image_name."')";
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