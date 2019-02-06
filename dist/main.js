$(document).ready(function() {
  fetchData();
})

$(document).on('click', '#search', function() {
  filterList();
})

$(document).on('change', '#image', function() {
  if($('#image').val()) {
    var imageName = $(this).val();
    imageName = /[^\\]*$/.exec(imageName)[0];
    $('.image_title').html(imageName);
    $('.remove_file_upload').show();
    $('.custom_file_upload').hide();
  }
})

$(document).on('click', '.remove_file_upload', function() {
  $('.image_title').html('');
  $('#image').val('');
  $('.remove_file_upload').hide();
  $('.custom_file_upload').show();
})



function fetchData() {
  $.ajax({
    url: "./endpoints/read.php",
    method: "POST",
    success: function(data) {
      $('#display_data').html(data);
    }
  });
}

function filterList() {
  // $('#users_table').DataTable().search(
  //   $('#global_filter').val()).draw();
}



