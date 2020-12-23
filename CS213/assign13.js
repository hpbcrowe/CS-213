var globalObject;
/*
Function to make 2nd student appear
*/
function addDuetStudent(){
  
       document.getElementById("row5").style.display ="block";
  }

function hideDuetStudent(){
    document.getElementById("row5").style.display ="none";
}  
/*
Function Write  makes a http request with the registration information
*/
function write(){
    //do this for all variables
  var locationj = document.getElementById("location").value;
  var roomj = document.getElementById("room").value;
  var timeSlotj = document.getElementById("time_slot").value;
  var performancej = document.getElementById("performance").value;
  var firstName1 = document.getElementById("first_name").value;
  var lastName1 = document.getElementById("last_name").value;
  var studentId1 = document.getElementById("student_id").value;
  var skill1 = document.getElementById("skill").value;
  var instrument1 = document.getElementById("instrument").value;
  var firstName2 = document.getElementById("first_name_2").value;
  var lastName2 = document.getElementById("last_name_2").value;
  var studentId2 = document.getElementById("student_id_2").value;
  var skill2 = document.getElementById("skill_2").value;
  var instrument2 = document.getElementById("instrument_2").value;


     var student1 = {"Location": locationj, "Room": roomj, "Time slot": timeSlotj,
     "Performance": performancej, "First name": firstName1, "Last name":lastName1,
     "Student Id": studentId1,"Skill": skill1, "Instrument":instrument1};
     var student2 = {"First name": firstName2, "Last name":lastName2,
     "Student Id": studentId2,"Skill": skill2, "Instrument":instrument2};
     if(performancej == "duet"){
     globalObject.students.append(student1); 
     globalObject.students.append(student2);
     }else{
      globalObject.students.append(student1); 
     }    
     
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       var newString = JSON.stringify(globalObject);
        //document.getElementById("demo").innerHTML = myArr[0];
      }
    };
    xmlhttp.open("GET", "assign13.php " + "?" + newString, true);
    xmlhttp.send();

}

function read(){

    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    globalObject = JSON.parse(this.responseText);
    //write a display function to send myArr to 
  
  }
};
xmlhttp.open("GET", "data/new.txt", true);
xmlhttp.send();
}

function onSubmit(){
 write();
 read();

}