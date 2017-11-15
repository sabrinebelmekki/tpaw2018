<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#inputdatedenaissance" ).datepicker();
  } );
//limitation de date maximum
  $( ".selector" ).datepicker({
  maxDate: "+0m +0w"
});
  </script>
</head>
<body>
 
<p>Date: <input type="maxDate" id="datepicker"></p>

// Getter
var maxDate = $( ".selector" ).datepicker( "option", "maxDate" );
 
// Setter
$( ".selector" ).datepicker( "option", "maxDate", "+0m +0w" );


 
 
</body>
</html>