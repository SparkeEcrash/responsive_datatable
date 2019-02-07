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

$(document).on('change', '.check_status', function() {
  var id = $(this).data('id');
  if($(this).is(':checked')) {
    toggleCSV(id, true);
  } else {
    toggleCSV(id, false);
  }
})

$(document).on('click', '#export', function() {
  $.ajax({
    url: "./endpoints/csvExport.php",
    method: 'GET',
    success: function(data) {
      console.log(data);
      window.location.href= "endpoints/csvExport.php";
    }
  })
})

function fetchData() {
  $.ajax({
    url: "./endpoints/read.php",
    method: "POST",
    // dataType: text or json??
    success: function(data) {
      $('#display_data').html(data);
    }
  });
}

function toggleCSV(id, status) {
  $.ajax({
    url: "./endpoints/csvExport.php",
    method: 'POST',
    data: {id, status},
    dataType: 'json',
    success: function(data) {
      if(!data.success) {
        popErrorModal();
      }
    }
  })
}

function filterList() {
  // $('#users_table').DataTable().search(
  //   $('#global_filter').val()).draw();
}

function popErrorModal() {
  $('.modal-body').empty();
  var error_message = $('<p>').text(`Something did not work correctly while processing`);
  $('.modal-body').append(error_message);
  $('#messageModal').modal({show:true});
}