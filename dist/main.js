$(document).ready(function() {
  fetchData();
  // setLocalStorage();
})

$(document).on('click', '#search', function() {
  let search_value = $('#global_filter').val().trim();
  fetchData(search_value);
})

$(document).on('keypress', '#global_filter', function(e) {
  if (e.which === 13) {
    let search_value = $('#global_filter').val().trim();
    fetchData(search_value);
  }
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
      const message = `CSV file is being downloaded`;
      $('.modal-body').text(message);
      $('#messageModal').modal({show:true});
    }
  })
})

// function setLocalStorage() {
//   const localStorageID = { 'id': 123};
//   localStorage.setItem('id', JSON.stringify(localStorageID));
//   var getID = JSON.parse(localStorage.getItem('id'));
//   console.log('ID: ', getID['id']);
// }

function fetchData(text='', column=null) {

  let data = {search_value: text};

  if(!localStorage.getItem('delete_this_id')) {
    data['getID'] = true;
  } else {
    data['getID'] = localStorage.getItem('delete_this_id');
  }

  console.log('73', data);

  $.ajax({
    url: "./endpoints/read.php",
    method: "POST",
    data,
    dataType: "json",
    success: function(data) {
      console.log(data);
      $('#display_data').html(data['html']);
      console.log(data);
      if(data['delete_this_id'] !== null) {
        localStorage.setItem('delete_this_id', data['delete_this_id']);
      }
    },
    error: function(error) {
      console.log(error);
    }
  });
} 

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

function popErrorModal(text=`Something did not work correctly while processing`, list=[]) {
  $('.modal-body').empty();
  if(list.length === 0) {
    var error_message = $('<p>').text(text);
    $('.modal-body').append(error_message);
    $('#messageModal').modal({show:true});
  } else {
    const error_list = $('<ul>').addClass('validation_list');
    list.forEach(function(error) {
      const error_item = $('<li>').text(error);
      error_list.append(error_item);
    });
    $('.modal-body').append(error_list);
    $('#messageModal').modal({show:true});
  }
}
