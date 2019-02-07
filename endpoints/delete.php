<?php

require_once('./../database-connection.php');

$sql = "SELECT * FROM $table WHERE id ='".$_POST['id']."';";
$sql .= "DELETE FROM $table WHERE id = '".$_POST['id']."';";

$result = mysqli_multi_query($connect, $sql);
if(!$result) {
  $output = [
    'success' => false,
    'error' => mysqli_error($connect)
  ];
  $json_output = json_encode($output);
  print($json_output);
  exit();
} else {
  $first_result = mysqli_store_result($connect);
  $row = mysqli_fetch_array($first_result);
  if($row['image'] !== '') {
    unlink('./../images/'.$row['image']);
    $output = [
      'success' => true,
      'name' => $row['first_name'] . ' ' . $row['last_name']
    ];
    $json_output = json_encode($output);
    print($json_output);
    exit();
  }
  $output = [
    'success' => true,
    'name' => $row['first_name'] . ' ' . $row['last_name'],
    'message' => 'no image to delete'
  ];
  $json_output = json_encode($output);
  print($json_output);
}

?>

