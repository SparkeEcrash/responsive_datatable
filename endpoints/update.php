<?php
require_once('./../database-connection.php');

if($connect->connect_error) {
  die("Connection failed: " . $connect->connect_error);
}

if(!empty($_FILES)) {
  if($_FILES['image']['error']==0) {
    $image_name = $_FILES['image']['name'];
    $image_name = date_timestamp_get(date_create()).'_'.$image_name;
    move_uploaded_file($_FILES['image']['tmp_name'], './../images/' . $image_name);
    $text = $image_name;
    $_POST = json_decode($_POST['fields'], true);
    if(!empty($_POST['id'])){
      $id = $_POST['id'];
    }
    $column_name = 'image';
  } else {
    echo "The image uploaded is causing errors";
    exit();
  }
} else {
  if(!empty($_POST['id'])) {
    $id = $_POST['id'];
  }
  
  if(!empty($_POST['text'])) {
    $text = $_POST['text'];
  }
  
  if(!empty($_POST['column_name'])) {
    $column_name = $_POST['column_name'];
  }
}

if(!empty($id) && $column_name === 'image') {
  $sql = "SELECT * FROM $table WHERE id = '".$_POST['id']."';";
  $result = mysqli_query($connect, $sql);
  if($result) {
    $row = mysqli_fetch_array($result);
    $image_to_delete = $row['image'];
    if($image_to_delete !== '') {
      unlink('./../images/'.$image_to_delete);
      $sql = "UPDATE $table SET $column_name = '' WHERE id= $id";
      $connect->query($sql);
      echo "1";
    }
  }
}

if(!empty($id) && !empty($text) && !empty($column_name)) {
  $sql = "UPDATE $table SET $column_name = '$text' WHERE id= $id";
  if ($connect->query($sql)) {
    echo "2";
  } else {
    echo "Data update failed: " . $connect->error;
  }
} 
