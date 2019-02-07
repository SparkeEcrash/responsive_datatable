$(document).on('click', '#btn_delete', function() {
  $('.modal-body').empty();
  var id = $(this).data('id');
  var first_name = $(this).parentsUntil('.center_content').siblings('.first_name').html();
  var last_name = $(this).parentsUntil('.center_content').siblings('.last_name').html();

  $('#row_id_selected').val(id);

  var delete_confirm_message = $('<div>');
  delete_confirm_message.append(
    $('<p>').text(`Are you sure you want to delete ${first_name} ${last_name}?` )
  );
  delete_confirm_message.append(
    $('<button>').addClass('btn btn-danger').attr('id', 'btn_delete_confirmed').text('Yes')
  )

  $('.modal-body').append(delete_confirm_message);

  $('#messageModal').modal({show:true});

})

$(document).on('click', '#btn_delete_confirmed', function() {

  var id = $('#row_id_selected').val();

  $.ajax({
    url: './endpoints/delete.php',
    method: 'POST',
    data: {id},
    dataType: 'json',
    success: function (data) {
      result = data;
      var message = `${result.name} was deleted`;
      $('.modal-body').text(message);
      fetchData();
    },
    error: function() {
      var message = `There was an error`;
      $('.modal-body').text(message);
    }
  })

})

