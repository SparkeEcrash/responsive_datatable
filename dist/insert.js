$(document).on('click', '#btn_add', function() {
  $('.modal-body').empty()

  const first_name = $('#first_name').text();
  const last_name = $('#last_name').text();
  const telephone_number = $('#telephone_number').text();
  const street = $('#street').text();
  const city = $('#city').text();
  const state = $('#state').text();
  const zip_code = $('#zip_code').text();
  const email_address = $('#email_address').text();
  const image = $('#image').val();
  const error_messages = [];
  
  const first_name_validation = validateFirstName(first_name);
  const last_name_validation = validateLastName(last_name);
  const telephone_number_validation = validateTelephoneNumber(telephone_number);
  const street_validation = validateStreet(street);
  const city_validation = validateCity(city);
  const state_validation = validateState(state);
  const zip_code_validation = validateZipCode(zip_code);
  const email_address_validation = validateEmailAddress(email_address);
  const image_validation = validateImage(image);

  first_name_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  last_name_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  telephone_number_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  street_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  city_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  state_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  zip_code_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  email_address_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  image_validation['errors'].forEach(function(error) {
    error_messages.push(error);
  })

  if(error_messages.length > 0) {
    popErrorModal(null, error_messages);
  } else {
    let fields = {
      first_name: first_name_validation['reformed_input'],
      last_name: last_name_validation['reformed_input'],
      telephone_number: telephone_number_validation['reformed_input'],
      street: street_validation['reformed_input'],
      city: city_validation['reformed_input'],
      state: state_validation['reformed_input'],
      zip_code: zip_code_validation['reformed_input'],
      email_address: email_address_validation['reformed_input']
    };
    const data = new FormData();
    data.append('image', $('#image')[0].files[0]);
    fields = JSON.stringify(fields);
    data.append('fields', fields);
    // new Response(data).text().then(console.log)
    $.ajax({
      url:"./endpoints/create.php",
      data: data,
      dataType:'text',
      type: 'POST',
      processData: false,
      contentType: false,
      cache: false,
      success: function(data) {
        const message = `${first_name} ${last_name} was added to the list`;
        $('.modal-body').text(message);
        $('#messageModal').modal({show:true});
        fetchData();
      },
      error: function() {
        const message = `There was an error`;
        $('.modal-body').text(message);
        $('#messageModal').modal({show:true});
      }
    })
  }
})

$(document).on('blur', '.insert_cell', function() {
  $(this).text(($(this).text().trim()));
})
