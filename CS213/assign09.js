

var str;

function getPop(str){
    //var selected = document.getElementById("drop").value
    xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = 
function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById('showCountries').innerHTML = xmlhttp.responseText;
    }else{
        document.getElementById('showCountries').innerHTML = "Waiting for server"
    }
}
 xmlhttp.open("GET", str, true);
 xmlhttp.send();
}



            function getJson(){
                var fieldEntry = document.getElementById("idText").value;
                if (fieldEntry == "json.txt"){
                    xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = 
                    function(){
                        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                            var ourData = JSON.parse(xmlhttp.responseText);
                           renderHTML(ourData);
                            document.getElementById('txtHint').innerHTML = renderHTML(ourData); //ourData;
                        }else{
                            document.getElementById('txtHint').innerHTML = "Waiting for server"
                        }
                    }
                     xmlhttp.open("GET","json.txt", true);
                     xmlhttp.send();

                }else if (fieldEntry == "json1.txt"){
                    xmlhttp = new XMLHttpRequest();
                    xmlhttp.onreadystatechange = 
                    function(){
                        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                            var ourData = JSON.parse(xmlhttp.responseText);
                            
                            document.getElementById('txtHint').innerHTML = renderHTML(ourData);
                        }else{
                            document.getElementById('txtHint').innerHTML = "Waiting for server"
                        }
                    }
                     xmlhttp.open("GET","json1.txt", true);
                     xmlhttp.send();
                }else{
                    document.getElementById('txtHint').innerHTML = "Invalid entry, please enter json.txt or json1.txt"
                }

            } 

            function renderHTML(data){
                var htmlString = " ";
                for(i=0; i < data.students.length; i++){
                    htmlString += "<p class='students'>" + "Student: " + data.students[i].first + " "+ data.students[i].last + "</p>"                    
                    + "<p class='students'>" + "Address: "+ data.students[i].address.city + " " + data.students[i].address.state  + 
                    ", " + data.students[i].address.zip + "</p>" +
                    "<p class='students'>" + "Major: " + data.students[i].major + "</p>" + "<p class='students'>" + "GPA: " + data.students[i].gpa
                    + "</p>" + "</br>" + "<br>"
                }
                return htmlString;
            }