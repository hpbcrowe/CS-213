/*
Clear functions to clear fields
*/
function clearForm(){   
        document.getElementById("startCity").value=" ";  
        document.getElementById("startState").value=" "; 
        document.getElementById("endCity").value=" "; 
        document.getElementById("endState").value=" "; 
}

/*
Functions to validate fields
*/
function validate(){
    validateFirstCity();
    validateFirstState();
    validateSecondCity();
    validateSecondState();
    //getJson();
    
}

function validateFirstCity(){
    var input = document.getElementById("startCity").value;

    //Number(input);
    if(input){
        document.getElementById("startCityHint").innerHTML = "Thank you ";
        return true;
    }
     else{
        document.getElementById("startCityHint").innerHTML = "Please enter a valid City"
        document.getElementById("startCity").focus();

        return false;
     }
}
function validateFirstState(){
    var input = document.getElementById("startState").value;

    Number(input);
   if(input.match(/\w*[A-Z]\w*[A-Z]\w*/)){
       document.getElementById("startStateHint").innerHTML = "Thank you ";
        return true;
    }
     else{
        document.getElementById("startStateHint").innerHTML = "Please enter a valid State abbreviation"
        document.getElementById("startState").focus();

       return false;
     }
}

function validateSecondCity(){
    var input = document.getElementById("endCity").value;

    //Number(input);
    if(input){
        document.getElementById("endCityHint").innerHTML = "Thank you ";
        return true;
    }
     else{
        document.getElementById("endCityHint").innerHTML = "Please enter a valid City"
        document.getElementById("endCity").focus();

        return false;
     }
}
function validateSecondState(){
    var input = document.getElementById("endState").value;

    Number(input);
   if(input.match(/\w*[A-Z]\w*[A-Z]\w*/)){
       document.getElementById("endStateHint").innerHTML = "Thank you ";
        return true;
    }
     else{
        document.getElementById("endStateHint").innerHTML = "Please enter a valid State abbreviation"
        document.getElementById("endState").focus();

       return false;
     }
}


            function getJson(){

                var startCity = document.getElementById("startCity").value;  
                var startState = document.getElementById("startState").value; 
                var endCity = document.getElementById("endCity").value; 
                var endState = document.getElementById("endState").value;
               var url = "/cgi-bin/ercanbracks/mileage/mileageAjaxJSON" + "?startCity=" + startCity +"&startState="+ startState + "&endCity="+ endCity + "&endState="+ endState;
                   
                   validate();
                  var xmlhttp = new XMLHttpRequest();
              

                              xmlhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    
                     document.getElementById("txtHint").innerHTML =  "Distance between " + data.trip.startcity + " and " + data.trip.endcity + 
                     " is " + data.trip.miles + " miles.";
                     if(data.trip.tmode){
                       var htmlString = "Possible modes of transportation are: ";
                         for(i=0; i < data.trip.tmode.length; i++){
                        
                        
                         if(i != data.trip.tmode.length -1){
                        htmlString += data.trip.tmode[i] + ", ";  
                         
                         }else{
                          htmlString += " or " + data.trip.tmode[i] + "."; 
                         }
                                              
                    }
                     document.getElementById("mode").innerHTML = htmlString;
                     }else{
                      document.getElementById("txtHint").innerHTML = "No mode of transportation available"; 
                        
                     }
                     
                      }
                     
                      
                        };
                          xmlhttp.open("GET", url, true);
                          xmlhttp.send();

                             }   
             