$(document).on('focus', '.edit_cell', function() {
  var text = $(this).text().trim();
  $('#data_cell_selected').val(text);
})

$(document).on('blur', '.first_name', function() {
  var first_name = $(this).text().trim();
  console.log('first named triggered');
  if(first_name !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, first_name, 'first_name');
  }
  $(this).text(first_name);
})

$(document).on('blur', '.last_name', function() {
  var last_name = $(this).text().trim();
  if(last_name !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, last_name, 'last_name');
  }
  $(this).text(last_name);
})

$(document).on('blur', '.telephone_number', function() {
  var telephone_number = $(this).text().trim();
  if(telephone_number !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, telephone_number, 'telephone_number');
  }
  $(this).text(telephone_number);
})

$(document).on('blur', '.street', function() {
  var street = $(this).text().trim();
  if(street !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, street, 'street');
  }
  $(this).text(street);
})

$(document).on('blur', '.city', function() {
  var city = $(this).text().trim();
  if(city !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, city, 'city');
  }
  $(this).text(city);
})

$(document).on('blur', '.state', function() {
  var state = $(this).text().trim();
  if(state !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, state, 'state');
  }
  $(this).text(state);
})

$(document).on('blur', '.zip_code', function() {
  var zip_code = $(this).text().trim();
  if(zip_code !==$('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, zip_code, 'zip_code');
  }
  $(this).text(zip_code);
})

$(document).on('blur', '.email_address', function() {
  var email_address = $(this).text().trim();
  if(email_address !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, email_address, 'email_address');
  }
  $(this).text(email_address);
})

$(document).on('click','#edit_image',function(){
  var td = $(this).parent();
  var id = td.data('id');
  $('#row_id_selected').val(id);
  $('#image_file_selected').trigger('click');
});

$(document).on('click','#remove_image',function(){
  var td = $(this).parent();
  var id = td.data('id');
  var first_name = $(td).siblings('.first_name').html();
  var last_name = $(td).siblings('.last_name').html();
  $('#row_id_selected').val(id);

  $('.modal-body').empty();
  var delete_image_confirm_message = $('<div>');
  delete_image_confirm_message.append(
    $('<p>').text(`Are you sure you want to delete image for ${first_name} ${last_name}?` )
  );
  delete_image_confirm_message.append(
    $('<button>').addClass('btn btn-danger').attr('id', 'btn_delete_image_confirmed').text('Yes')
  )
  $('.modal-body').append(delete_image_confirm_message);
  $('#messageModal').modal({show:true});
});

$(document).on('click', '#btn_delete_image_confirmed', function() {
  remove_image($('#row_id_selected').val(), 'image')
})

$(document).on('change', '#image_file_selected', function() {
  if($('#image_file_selected').val()) {
    var id = $('#row_id_selected').val();
    edit_image(id, this);
  }
})

function edit_image(id, file) {
  var fields = {id};
  var data = new FormData();
  fields = JSON.stringify(fields);
  data.append('fields', fields);
  data.append('image', $(file)[0].files[0]);  
  // new Response(data).text().then(console.log)
  $.ajax({
    url:"./endpoints/update.php",
    data: data, 
    dataType:'text',
    type: 'POST',
    processData: false,
    contentType: false,
    cache: false,
    success: function(data) {
      $('#image_file_selected').val('');
      fetchData();
      if(data === "2") {
        $('.modal-body').empty();
        var replaced_image_message = $('<p>').text(`Image was added`);
        $('.modal-body').append(replaced_image_message);
        $('#messageModal').modal({show:true});
      } else if(data === "12") {
        $('.modal-body').empty();
        var replaced_image_message = $('<p>').text(`Image was replaced`);
        $('.modal-body').append(replaced_image_message);
        $('#messageModal').modal({show:true});
      } else {
        popErrorModal();
      }
    }
  })
}

function remove_image(id, column_name) {
  $.ajax({
    url: "./endpoints/update.php",
    method: 'POST',
    data: {id, column_name},
    dataType: 'text',
    success: function(data) {
      console.log(data);
      $('#image_file_selected').val('');
      fetchData();
      if(data === "1") {
        console.log(data);
        $('.modal-body').empty();
        var removed_image_message = $('<p>').text(`Image was removed`);
        $('.modal-body').append(removed_image_message);
        $('#messageModal').modal({show:true});
      } else {
        popErrorModal();
      }
    }
  })
}

function edit_data(id, text, column_name) {
  $.ajax({
    url: "./endpoints/update.php",
    method: "POST",
    data: {id, text, column_name},
    dataType: 'text',
    success: function(data) {
      if(data === '2') {
        $('.modal-body').empty();
        var edit_confirm_message = $('<p>').text(`Changed to "${text}"`);
        $('.modal-body').append(edit_confirm_message);
        $('#messageModal').modal({show:true});
      } else {
        popErrorModal();
      };
    }
  })
}
