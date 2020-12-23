<!DOCTYPE html>
<html lang="en">
    <head>
            <meta charset="UTF-8">
            <title>Assignment 13 Registration Form</title>
            <link rel="stylesheet" href="assign13.css">
</head>
<body>

<?php
$message = '';
$error = '';
 $global = $_GET[];
if isset($_GET["Register"]){
    if(file_exists(data/register.txt)
    {

    }else{
        $error = "File doesn't exist";
    }
}
$location = $_GET["location"];
$room = $_GET["room"];
$time_slot =$_GET["time_slot"];
$performance = $_GET["performance"];

$first_name = $_GET["first_name"];
$last_name = $_GET["last_name"];
$student_id = $_GET["student_id"];
$skill = $_GET["skill"];
$instrument = $_GET["instrument"];

$first_name2 = $_GET["first_name"];
$last_name2 = $_GET["last_name"];
$student_id2 = $_GET["student_id"];
$skill2 = $_GET["skill"];
$instrument2 = $_GET["instrument"];


 echo "<h1>" . $location . " " .  $room . " " . $time_slot . " " . $performance . " " .
       $first_name . " " . $last_name . " " .
             $student_id . $instrument . "</h1>";
             
             
             $registration = array("Location"=>$location, "Room"=>$room, "Time Slot"=>$time_slot, "Performance"=>$performance,
             "First name"=>$first_name,"Last Name"=>$last_name,"Student id"=>$student_id,"Skill"=>$skill,"Instrument"=>$instrument);
             $final_data = json_encode($registration);
             file_put_contents('/data/registration.txt',$final_data);

             
             $myfile = fopen("data/new.txt", "a") or die("Unable to open file!");
             
               fwrite($myfile, $final_data);
              
              fclose($myfile);
  ?>           