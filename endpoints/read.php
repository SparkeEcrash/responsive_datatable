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

$output = '';
$sql= "SELECT * FROM $table ORDER BY id DESC";
$result = mysqli_query($connect, $sql);

$output .= '
  <table id="users_table" class="table table-striped table-bordered">
    <thead>
      <tr class="center_content">
        <th width="5%"><input type="checkbox" onchange="checkAll(this)" name="chk[]"/></th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Telephone Number</th>
        <th>Street</th>
        <th>City</th>
        <th>State</th>
        <th>Zip Code</th>
        <th>Email Address</th>
        <th>Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
';

if(mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_array($result)){
    $output .= '
      <tr class="center_content">
        <td><input type="checkbox" data-section="'.$row['id'].'" class="check_status" name="section" value="checked"/></td>
        <td class="first_name" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['first_name'].'</td>
        <td class="last_name" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['last_name'].'</td>
        <td class="telephone_number" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['telephone_number'].'</td>
        <td class="street" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['street'].'</td>
        <td class="city" data-id="'.$row['id'].'" spellcheck="false"contenteditable>'.$row['city'].'</td>
        <td class="state" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['state'].'</td>
        <td class="zip_code" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['zip_code'].'</td>
        <td class="email_address" data-id="'.$row['id'].'" spellcheck="false" contenteditable>'.$row['email_address'].'</td>
        <td class="image_wrap" data-id="'.$row['id'].'"><img class="responsive_image" src="images/'.$row['image'].'"/></td>
        <td><button class="btn btn-danger" id="btn_delete" data-id="'.$row['id'].'">x</button></td>
      </tr>
    ';
  }
} else {
  $output .= '
    <tr>
      <td colspan="4">Data is empty</td>
    </tr>
  ';
}

$output .= '
      <tr class="center_content">
        <td></td>
        <td id="first_name" spellcheck="false" contenteditable>mickey</td>
        <td id="last_name" spellcheck="false" contenteditable>mouse</td>
        <td id="telephone_number" spellcheck="false" contenteditable>333-333-3333</td>
        <td id="street" spellcheck="false" contenteditable>124 Disney Drive</td>
        <td id="city" spellcheck="false"contenteditable>Miami</td>
        <td id="state" spellcheck="false" contenteditable>FL</td>
        <td id="zip_code" spellcheck="false" contenteditable>32444</td>
        <td id="email_address" spellcheck="false" contenteditable></td>
        <td id="image_container"><label for="image" class="custom_file_upload">Image</label><input type="file" id="image" style="display: none;"/><div class="image_title"></div></td>
        <td><button class="btn btn-success" id="btn_add">+</button></td>
      </tr>
    </tbody>
  </table>
';

?>

<script>

  function checkAll(ele) {
    var checkboxes = document.getElementsByTagName('input');
    if (ele.checked) {
      for(var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = true;
        }
      }
    } else {
      for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].type == 'checkbox') {
          checkboxes[i].checked = false;
        }
      }
    }
  }

</script>

<?php
  echo $output;
?>