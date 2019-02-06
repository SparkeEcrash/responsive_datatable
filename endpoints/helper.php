<?
  function mysqli_first_result($link) {
    return mysqli_store_result($link);
  }

  function mysqli_last_result($link) {
    while (mysqli_more_results($link)) {
        mysqli_use_result($link); 
        mysqli_next_result($link);
    }
    echo mysqli_store_result($link);
  }
?>