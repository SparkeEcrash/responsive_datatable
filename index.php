<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My Datatable</title>

  <!-- My Files -->
  <link href="./dist/style.css" rel="stylesheet" type="text/css"/>

  <!-- Import Files -->
  <script src="./vendor/jquery.min.js" type="text/javascript"></script>
  <script src="./vendor/bootstrap/bootstrap.min.js" type="text/javascript"></script>
  <link href="./vendor/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css"/>
</head>
<body>
  <div id="wrapper">

    <div id="page-wrapper" class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="page-header">PHP MySql Datatable</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <div class="col-xs-6">
                <div class="input-group">
                  <input class="global_filter form-control" id="global_filter" type="text">
                  <span class="input-group-btn">
                    <button class="btn btn-default" type="button" id="search">Search</button>
                  </span>
                </div>
              </div>
              <div class="csv_buttons">
              <input type="button" name="export" value="CSV Export" class="btn btn-primary export"/>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#importModal">CSV Import</button>
              </div>
            </div>
            <div class="panel-body">
              <div id="display_data"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="modal fade" id="messageModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Just a Moment...</h4>
        </div>
        <div class="modal-body">  
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

