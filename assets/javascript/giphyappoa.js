
$(document).ready (function(){
   

    var topics = ["Baseball", "Basketball", "Boxing", "Cycling", "Football", "Handball", "Golf", "Rugby", "Soccer", "Tennis"];



//we have to use var not const because we want to add sports later in the array

buttonsWork(); 
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

   $("#add-sport").on("click", function(event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var sport = $("#topic-input").val().trim();

    // Adding the movie from the textbox to our array
    topics.push(sport);

    // Calling renderButtons which handles the processing of our movie array
    buttonsWork();
    
  });



$(document).on("click", ".sportsbuttons", Sportsgifs); 
function Sportsgifs() {
//not sure were to specify limit 10.I think it is ten by default

const sport = $(this).attr("data-name");

var queryurl = "https://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq&limit=10";



$.ajax ({url:queryurl, method:"GET"})
        .then(function(response){
         
        $("#sportsanswers2").empty();            
        var results = response.data;         
        


for (let jj =0; jj<results.length; jj++)
    {
      
    var sportsgifsDiv =$("<div>")
    
    //For the rating part, the code is inspired by exercise 13
    var rating = results[jj].rating
    var p = $("<p>").text("Rating: " + rating);

  
    var sportimage = $("<img>");
    sportimage.attr("src", results[jj].images.fixed_height_still.url);
    sportimage.attr("data-still", results[jj].images.fixed_height_still.url);
    sportimage.attr("data-animate", results[jj].images.fixed_height.url);
    sportimage.attr("data-state", "still");
    sportimage.addClass('gif');
    sportsgifsDiv.append(p);
    sportsgifsDiv.append(sportimage);

    $("#sportsanswers2").append(sportsgifsDiv);
}
        })

    }})
        
//   I copy pasted this code from exercise 15
  $("body").on("click", function() {

    var state = $(this).attr("data-state");
   console.log(state);
   
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });      

