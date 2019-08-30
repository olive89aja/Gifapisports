


$(document).ready (function(){
   

    var topics = ["Baseball", "Basketball", "Boxing", "Cycling", "Football", "Handball", "Golf", "Rugby", "Soccer", "Tennis"];

    
   


//we have to use var not const because we want to add sports later in the array

Sportsgifs();


function Sportsgifs() {

    
    
const sport = ""//$(this).attr("data-name");
var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq&limit=10";



$.ajax ({url:queryurl, method:"GET"})
        .then(function(response)
        
       {
         
        $("#sportsanswers2").empty();           
        var results = response.data;         
        

        
for (let jj =0; jj<results.length; jj++)
    {
      
    var sportsgifsDiv =$("<div>")
    
    //For the rating part, the code is inspired by exercise 13
    var rating = results[jj].rating
    var p = $("<p>").text("Rating: " + rating);

  
    
    var sportimage = $("<img>");
    var imgURL = (results[jj].images.downsized.url)
    sportimage.attr("src", imgURL);

    sportsgifsDiv.append(p);
    sportsgifsDiv.append(sportimage);

    $("#sportsanswers2").prepend(sportsgifsDiv);
}
        })


        //These buttons are directly inspired by exercise number 10 in Nueva. 

        //buttonwork() here
        function buttonsWork() {

            $("#sportsanswers").empty();
            
         
           for (let i = 0; i < topics.length; i++) {
   
                
               var buttons = $("<button>");
              
               buttons.addClass("sportsbuttons");
               
               buttons.attr("data-name", topics[i]);
               
               buttons.text(topics[i]);
               
               $("#sportsanswers").append(buttons);
         
            }
           }

           $("#add-sport").on("click", function (event){
            event.preventDefault();

            var sport =$("#topic-input").val().trim();

            topics.push(sport);

           });

           $(document).on("click", ".sportsbuttons", Sportsgifs); 
           
       
           buttonsWork();
    }})

    

   