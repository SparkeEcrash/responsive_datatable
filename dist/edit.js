$(document).on('focus', '.edit_cell', function() {
  var text = $(this).text().trim();
  $('#data_cell_selected').val(text);
})

$(document).on('blur', '.first_name', function() {
  const first_name = $(this).text().trim();
  const first_name_validation = validateFirstName(first_name);
  if(first_name_validation['errors'].length > 0) {
    popErrorModal(null, first_name_validation['errors']);
  } else if(first_name !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, first_name_validation['reformed_input'], 'first_name');
  }
  $(this).text(first_name_validation['reformed_input']);
})

$(document).on('blur', '.last_name', function() {
  const last_name = $(this).text().trim();
  const last_name_validation = validateLastName(last_name);
  if(last_name_validation['errors'].length > 0) {
    popErrorModal(null, last_name_validation['errors']);
  } else if(last_name !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, last_name_validation['reformed_input'], 'last_name');
  }
  $(this).text(last_name_validation['reformed_input']);
})

$(document).on('blur', '.telephone_number', function() {
  const telephone_number = $(this).text().trim();
  const telephone_number_validation = validateTelephoneNumber(telephone_number);
  if(telephone_number_validation['errors'].length > 0) {
    popErrorModal(null, telephone_number_validation['errors']);
    $(this).text(telephone_number_validation['reformed_input']).css({ 'color': 'red' });
  } else if(telephone_number !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, telephone_number_validation['reformed_input'], 'telephone_number');
    $(this).text(telephone_number_validation['reformed_input']).css({ 'color': 'black' });
  }
})

$(document).on('blur', '.street', function() {
  const street = $(this).text().trim();
  const street_validation = validateStreet(street);
  if(street_validation['errors'].length > 0) {
    popErrorModal(null, street_validation['errors']);
  } else if (street !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, street_validation['reformed_input'], 'street');
  }
  $(this).text(street_validation['reformed_input']);
})

$(document).on('blur', '.city', function() {
  const city = $(this).text().trim();
  const city_validation = validateCity(city);
  if(city_validation['errors'].length > 0) {
    popErrorModal(null, city_validation['errors']);
  } else if (city !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, city_validation['reformed_input'], 'city');
  }
  $(this).text(city_validation['reformed_input']);
})

$(document).on('blur', '.state', function() {
  const state = $(this).text().trim();
  const state_validation = validateState(state);
  if(state_validation['errors'].length > 0) {
    popErrorModal(null, state_validation['errors']);
    $(this).text(state_validation['reformed_input']).css({ 'color': 'red' });
  } else if (state !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, state_validation['reformed_input'], 'state');
    $(this).text(state_validation['reformed_input']).css({ 'color': 'black' });
  }
})

$(document).on('blur', '.zip_code', function() {
  const zip_code = $(this).text().trim();
  const zip_code_validation = validateZipCode(zip_code);
  if(zip_code_validation['errors'].length > 0) {
    popErrorModal(null, zip_code_validation['errors']);
    $(this).text(zip_code_validation['reformed_input']).css({ 'color': 'red' });
  } else if (zip_code !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, zip_code_validation['reformed_input'], 'zip_code');
    $(this).text(zip_code_validation['reformed_input']).css({ 'color': 'black' });
  }
})

$(document).on('blur', '.email_address', function() {
  const email_address = $(this).text().trim();
  const email_address_validation = validateEmailAddress(email_address);
  if(email_address_validation['errors'].length > 0) {
    popErrorModal(null, email_address_validation['errors']);
    $(this).text(email_address_validation['reformed_input']).css({ 'color': 'red' });
  } else if (email_address !== $('#data_cell_selected').val()) {
    var id = $(this).data('id');
    edit_data(id, email_address_validation['reformed_input'], 'email_address');
    $(this).text(email_address_validation['reformed_input']).css({ 'color': 'black' });
  }
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
