<?php
require_once('./../database-connection.php');

if (!$connect) {
  echo "Error: Unable to connect to MySQL." . PHP_EOL;
  echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
  echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
  exit;
} 
// else {
//   echo "Success: A proper connection to MySQL was made!" . PHP_EOL;
//   echo "Host information: " . mysqli_get_host_info($connect) . PHP_EOL;
// }

if( isset($_POST['getID'])) {
  $getID = $_POST['getID'];
  if ($getID === 'true') {
    $id = uniqid('temp_');
    $search_id = $id;
  } else {
    $id = null;
    $search_id = addslashes($getID);
  }
}

$html = '';

if ($_POST['search_value'] === '') {
  $sql= "SELECT * FROM $table WHERE user_id = '".$search_id."'";

}  else {
  $search = addslashes($_POST['search_value']);
  $sql = "SELECT * FROM $table WHERE user_id = '".$search_id."' AND ((first_name LIKE '%".$search."%') OR (last_name LIKE '%".$search."%') OR (telephone_number LIKE '%".$search."%') OR (street LIKE '%".$search."%') OR (city LIKE '%".$search."%') OR (state LIKE '%".$search."%') OR (zip_code LIKE '%".$search."%') OR (email_address LIKE '%".$search."%'))";
}

$sql .= " ORDER BY first_name ASC";

$result = mysqli_query($connect, $sql);

$html .= '
  <table id="users_table" class="table table-striped table-bordered">
    <thead>
      <tr class="center_content">
        <!-- <th width="5%"><input type="checkbox" onchange="checkAll(this)" name="chk[]"/></th> --!>
        <th width="5%"></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Telephone Number</th>
        <th>Street</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Email Address</th>
        <th class="hidden-xs">Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
';

if(mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_array($result)){
    $html .= '
      <tr class="center_content">
        <td><input type="checkbox" data-id="'.$row['id'].'" class="check_status" name="csv_checkbox" value="checked" tabindex="-1" ';
  if($row['csv_export'] === "1") {
    $html .= 'checked';       
  }
    $html .= '/></td>
        <td class="edit_cell first_name" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['first_name'].'</td>
        <td class="edit_cell last_name" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['last_name'].'</td>
        <td class="edit_cell telephone_number" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['telephone_number'].'</td>
        <td class="edit_cell street" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['street'].'</td>
        <td class="edit_cell city" data-id="'.$row['id'].'" spellcheck="false"contenteditable>'.$row['city'].'</td>
        <td class="edit_cell state" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['state'].'</td>
        <td class="edit_cell zip_code" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['zip_code'].'</td>
        <td class="edit_cell email_address" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['email_address'].'</td>
        <td class="image_wrap hidden-xs" data-id="'.$row['id'].'" tabindex="-1">';
      //if picture exists
  if($row['image'] === '') {
    $html .= '
      <div class="add_image" id="edit_image">Add Image</div></td>';
  } else {
    $html .= '
      <img class="responsive_image" src="images/'.$row['image'].'"/><div class="edit_image" id="edit_image">Replace</div><div class="remove_image" id="remove_image">Remove</div></td>';
  }
    $html .= '
      <td><button class="btn btn-danger" id="btn_delete" data-id="'.$row['id'].'" tabindex="-1"><span class="glyphicon glyphicon-remove" aria-hidden="true"></button></td>
      </tr>';
  }
} else {
  $html .= '
    <tr>
      <td class="empty_cell" colspan="12"><h1>Data is empty</h1></td>
    </tr>
  ';
}

$html .= '
      <tr class="center_content">
        <td></td>
        <td id="first_name" class="insert_cell" spellcheck="false" contenteditable>James</td>
        <td id="last_name" class="insert_cell" spellcheck="false" contenteditable>Park</td>
        <td id="telephone_number" class="insert_cell" spellcheck="false" contenteditable>3245963298</td>
        <td id="street" class="insert_cell" spellcheck="false" contenteditable>28 test st</td>
        <td id="city" class="insert_cell" spellcheck="false"contenteditable>metropolis</td>
        <td id="state" class="insert_cell" spellcheck="false" contenteditable>texas</td>
        <td id="zip_code" class="insert_cell" spellcheck="false" contenteditable>23457</td>
        <td id="email_address" class="insert_cell" spellcheck="false" contenteditable>test@test.com</td>
        <td id="image_container" class="hidden-xs"><label class="remove_file_upload">Remove</label><label for="image" class="custom_file_upload">Image</label><input type="file" id="image" style="display: none;"/><div class="image_title"></div></td>
        <td><button class="btn btn-success" id="btn_add"><span class="glyphicon glyphicon-plus" aria-hidden="true"></button></td>
      </tr>
    </tbody>
  </table>
';

$output = [
  'delete_this_id' => $id,
  'html' => $html
];

$json_output = json_encode($output);
echo $json_output;

?>