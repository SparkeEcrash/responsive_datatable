<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="shortcut icon" type="image/jpg" href="./images/james_favicon.jpg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Contact Directory</title>

  <!-- My Files -->
  <link href="./dist/style.css" rel="stylesheet" type="text/css"/>

  <!-- Import Files -->
  <script src="./vendor/jquery.min.js" type="text/javascript"></script>
  <script src="./vendor/bootstrap/bootstrap.min.js" type="text/javascript"></script>
  <link href="./vendor/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/font-awesome/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>
<body>
  <div id="wrapper">

    <div id="page-wrapper" class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="page-header text-center">Contact Directory</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="col-xs-8 col-sm-6">
                <div class="input-group">
                  <input class="global_filter form-control" id="global_filter" type="text" spellcheck="false">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" id="search">Search</button>
                  </span>
                </div>
              </div>
              <div class="csv_buttons">
              <!-- <input type="button" name="export" value="CSV Export" class="btn btn-info"/> -->
              <!-- <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#importModal">CSV Import</button> -->
              <button type="button" class="btn btn-info" id="export">CSV Export</button>
              </div>
            </div>
            <div class="panel-body" style="overflow-x:auto;">
              <div id="display_data"></div>
            </div>
            <div class="panel-footer">
              <div class="page_tracker">
                Page 1 of 1
              </div>
              <div class="page_navigation">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input type="hidden" id="results_per_page" value="5">
    <input type="hidden" id="results_to_skip" value="0">
    <input type="hidden" id="search_field_selected">
    <input type="hidden" id="data_cell_selected">
    <input type="hidden" id="row_id_selected">
    <input id="image_file_selected" type="file" style="display: none;" />
  </div>

  <div class="modal fade" id="messageModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Just a Moment...</h4>
        </div>
        <div class="modal-body text-center">  
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
<script src="./dist/main.js" type="text/javascript"></script>
<script src="./dist/insert.js" type="text/javascript"></script>
<script src="./dist/delete.js" type="text/javascript"></script>
<script src="./dist/edit.js" type="text/javascript"></script>
<script src="./dist/validation.js" type="text/javascript"></script>

