<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="UTF-8">
            <title>Assignment 11 Purchase Confirmation/Cancellation Page</title>
            <link rel="stylesheet" href="assign11.css">
</head>
<body>
<?php
if ($_GET["Purchase"]) {

    
    echo "<h1> Purchase Confirmed </h1>";
                }if ($_GET["Cancel"]) {

    
    echo "<h1> Purchase Cancelled </h1>";
               
              
}
?>


<div class="navbar">
                            <a href="assign11.html">Back to Order Page</a>
                            <a href="index.html">CS213 Assignments</a>
                                    
                          </div>



</body>

</html>