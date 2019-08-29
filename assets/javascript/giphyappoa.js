


$(document).ready (function(){
   

    var sports = ["Baseball", "Basketball", "Boxing", "Cycling", "Football", "Handball", "Golf", "Rugby", "Soccer", "Tennis"];


   


//we have to use var not const because we want to add sports later in the array

Sportsgifs();

$(document).on("click", ".sportsbuttons", Sportsgifs);


function Sportsgifs() {
//not sure were to specify limit 10.I think it is ten by default

const sport = $(this).attr("data-name");
var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq";



$.ajax ({url:queryurl, method:"GET"})
        .done(function(response)
        
       {
         
        $("#sportsanswers2").empty();            
             var answers = response.data;         
        


for (let jj =0; jj<answers.length; jj++)
    {
      
    // var answer =("<div>")
    // $(answer).attr("data-name",sports[jj])
    // $("#sportsanswers2").append(answer);
    
    var sportimage = $("<img>");
    var imgURL = (answers[jj].images.downsized.url)
    sportimage.attr("src", imgURL);
    $("#sportsanswers2").prepend(sportimage);
}
        })


        //These buttons are directly inspired by exercise number 10 in Nueva. 

         function buttonsWork() {

         $("#sportsanswers").empty();
        
      
        for (var i = 1; i < sports.length; i++) {

             
            var buttons = $("<button>");
           
            buttons.addClass("sportsbuttons");
            
            buttons.attr("data-name", sports[i]);
            
            buttons.text(sports[i]);
            
            $("#sportsanswers").append(buttons);
          }
        }
    
    
        buttonsWork();
 
    }})

    

   