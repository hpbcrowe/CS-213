<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="UTF-8">
            <title>Assignment 11 Fake website shopping cart/Purchase confirmation page</title>
            <link rel="stylesheet" href="assign11.css">
</head>
<body>
<?php
$first_name = $_GET["first_name"];

$address = $_GET["address"];
$phone =$_GET["phone"];
$card = $_GET["card"];
$expDate = $_GET["exp_date"];

echo "<h1> Purchase Review / Confirmation Page </h1>"; 
echo "<p>" . $_GET["first_name"] . " " . $_GET["last_name"] . "</p>";

echo "<p>" . $address . "</p>";
echo "<p>" . $phone . "</p>";
echo "<p>" . $card . "</p>";
echo "<p> Expiration date: " . $expDate . "</p>";

 if(isset($_GET["item"])){
 $items = $_GET['item'];
}
echo "<p>You chose the following items:</p>";
foreach($items as $item){
if($item == 15.00){
echo "<pre> Corrosive agent  $item </pre>";
$total += $item;
 }
 if($item == 35.00){ 
 echo "<pre> Hot glue gun     $item </pre>";
 $total += $item;
 }
 if($item == 5.99){
 echo "<pre> Ice Cream         $item </pre>";
 $total += $item;
 }
 if($item == 21.00){
 echo "<pre> Basketball       $item </pre>";
 $total += $item;
 }
}



 echo "<p> Total amount : $" . $total . "</p>";
 


?>

<form action="assign11_a.php" method="get">
 <button name="Purchase" type="submit" value="ConfirmPurchase">Confirm Purchase</button>
 <button name="Cancel" type="submit" value="CancelPurchase">Cancel Purchase</button>
 <br>
 <br>
 	
</form>
<div class="navbar">
                            <a href="assign11.html">Back to Order Page</a>
                            <a href="index.html">CS213 Assignments</a>
                                    
                          </div>
</body>

</html>