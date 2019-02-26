<?php
require_once('./../database-connection.php');

if($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
}

if($_SERVER['REQUEST_METHOD'] === 'POST'){

  if(!empty($_POST['id']) && !empty($_POST['status'])) {
    $id = $_POST['id'];
    if($_POST['status'] === 'true') {
      $status = 1;
    } else {
      $status = 0;
    }
    $sql = "UPDATE $table SET `csv_export` = $status WHERE id=$id";
    if (mysqli_query($connect, $sql)) {
      $output = [
        'success' => true
      ];
      $json_output = json_encode($output);
      print($json_output);
    } else {
      $output = [
        'success' => false,
        'error' => 'error updating csv export status'
      ];
      $json_output = json_encode($output);
      print($json_output);
    }
  } else {
    $output = [
      'success' => false,
      'error' => 'missing fields from post request'
    ];
    $json_output = json_encode($output);
    print($json_output);
    exit();
  };

}

if($_SERVER['REQUEST_METHOD'] === 'GET'){
  if(isset($_GET['getID'])) {
    $search_id = $_GET['getID'];
  };

  header('Content-Type: text/csv');
  header('Content-Disposition: attachment; filename=user_list.csv');

  // $csv = fopen("user_list.csv", "w");
  // the above line makes a user_list.csv in the same folder as csvExport.php

  $csv = fopen("php://output", "w");
  fputcsv($csv, array("First Name", "Last Name", "Telephone Number", "Street", "City", "State", "Zip_Code", "Email_Address"), ',');
  $query = "SELECT first_name, last_name, telephone_number, street, city, state, zip_code, email_address from $table WHERE user_id = '".$search_id."' AND csv_export='1' ORDER BY first_name ASC";
  $result = mysqli_query($connect, $query);
  if(!$result) {
    $output = [
      'success'=> false,
      'error' => mysqli_error($connect)
    ];
    $json_output = json_encode($output);
    print($json_output);
    exit();
  } 
  while($row = mysqli_fetch_assoc($result)) {
    fputcsv($csv, $row);
  }
  fclose($csv);
  
    // $headers = array("Name", "Website");

    // $data = array(
    //   array(
    //     "name" => "John Morris",
    //     "website" => "http://www.johnmorrisonline.com",
    //   ),
    //   array(
    //     "name" => "Jeffrey Guy",
    //     "website" => "http://www.thatjeffguy.com",
    //   ),
    // );

    // $fh = fopen("file.csv", "w");

    // fputcsv($fh, $headers);

    // foreach($data as $fields) {
    //   fputcsv($fh, $fields);
    // }

    // fclose($fh);

}

?>