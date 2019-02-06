$(document).ready(function() {
  fetchData();
})

$(document).on('click', '#search', function() {
  filterList();
})

$(document).on('change', '#image', function() {
  console.log('picture uploaded');
  var imageName = $(this).val();
  imageName = /[^\\]*$/.exec(imageName)[0];
  $('.image_title').html(imageName);
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



