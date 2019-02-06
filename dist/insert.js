$(document).on('click', '#btn_add', function() {
  $('.modal-body').empty()

  var first_name = $('#first_name').text();
  var last_name = $('#last_name').text();
  var telephone_number = $('#telephone_number').text();
  var street = $('#street').text();
  var city = $('#city').text();
  var state = $('#state').text();
  var zip_code = $('#zip_code').text();
  var email_address = $('#email_address').text();
  var image = $('#image').val();
  var error_messages = [];
  

  
  if(first_name == '') {
    error_messages.push('Please enter the First Name');
  }

  if(last_name == '') {
    error_messages.push('Please enter the Last Name');
  }

  if(telephone_number == '') {
    error_messages.push('Please enter the Telephone Number');
  }

  if(street == '') {
    error_messages.push('Please enter the Street');
  }

  if(city == '') {
    error_messages.push('Please enter the City');
  }

  if(state =='') {
    error_messages.push('Please enter the State');
  }

  if(zip_code == '') {
    error_messages.push('Please enter the Zip Code')
  }

  if(email_address == '') {
    error_messages.push('Please enter the Email Address')
  }

  if(image == '')
  {
    error_messages.push('Please select an Image')
  }

  if(error_messages.length > 0) {
    var error_list = $('<ul>').addClass('validation_list');
    error_messages.forEach(function(error){
      var error_item = $('<li>').text(error);
      error_list.append(error_item);
    });
    $('.modal-body').append(error_list);
    $('#messageModal').modal({show:true});
  } else {
    var fields = {
      first_name,
      last_name,
      telephone_number,
      street,
      city,
      state,
      zip_code,
      email_address
    };
    var data = new FormData();
    data.append('image', $('#image')[0].files[0]);
    fields = JSON.stringify(fields);
    data.append('fields', fields);
    $.ajax({
      url:"./endpoints/create.php",
      data: data,
      dataType:'text',
      type: 'POST',
      processData: false,
      contentType: false,
      cache: false,
      success: function(data) {
        var message = `${first_name} ${last_name} was added to the list`;
        $('.modal-body').text(message);
        $('#messageModal').modal({show:true});
        fetchData();
      },
      error: function() {
        var message = `There was an error`;
        $('.modal-body').text(message);
        $('#messageModal').modal({show:true});
      }
    })
  }
})

{/* <td class="image_wrap" data-id09="'.$row['id'].'"><img class="responsive_image" src="images/'.$row['image'].'"/></td> */}
