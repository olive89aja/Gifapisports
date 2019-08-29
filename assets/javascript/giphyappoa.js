$(document).ready (function(){

    var sports = ["Baseball", "Basketball", "Boxing", "Cycling", "Football", "Handball", "Golf", "Rugby", "Soccer", "Tennis"];


   


//we have to use var not const because we want to add sports later in the array

Sportsgifs();

$(document).on("click", ".sportsbuttons", Sportsgifs);

function Sportsgifs() {
//not sure were to specify limit 10.I think it is ten by default

var sport = $(this).attr("data-name");
var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq";

console.log(sport);

$.ajax ({url:queryurl, method:"GET"})
        .done(function(response)
        
        {

             var answers = response.data;         
        

for (let jj =0; jj<10; jj++)
    {
       
    var answer =("<div>")
    $(answer).attr("sports-name",sports[jj])
    $("#sportsanswers").append(answer);

    var sportimage = ("<img>")
    $("#sportsanswers").append(sportimage);
}
        })

         function buttonsWork() {

         $("#sportsanswers").empty();
        
      

        for (var i = 0; i < sports.length; i++) {

             
            var buttons = $("<button>");
           
            buttons.addClass("sportsbuttons");
            
            buttons.attr("data-name", sports[i]);
            
            buttons.text(sports[i]);
            
            $("#sportsanswers").append(buttons);
          }
        }
    
    
        buttonsWork();
 
    }})

              

     buttonsWork();