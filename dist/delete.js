$(document).on('click', '#btn_delete', function() {
  var id = $(this).data('id');
  console.log(id)
  if (confirm('Are you sure you want to delete this?')){
    $.ajax({
      url: 'delete.php',
      method: 'post',
      data: {id},
      dataType: 'text',
      success: function (data) {
        alert(data);
        fetch_data();
      }
    })
  }
})