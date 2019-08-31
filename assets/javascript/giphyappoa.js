
$(document).ready (function(){
   
//we have to use var not const because we want to add sports later in the array
    var topics = ["Baseball", "Basketball", "Boxing", "Cycling", "Football", "Handball", "Golf", "Rugby", "Soccer", "Tennis"];




//This function creates buttons for each sport. We call it right away 
//and we want these buttons to be created in the div element with a sportsanswers id 
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

//This function allows the user to add his/her own sport button to the ten existing ones.
//This is directly inspired by exercise 8
   $("#add-sport").on("click", function(event) {
    
    event.preventDefault();
    //We use trim() here to deal with white spaces 
    var sport = $("#topic-input").val().trim();

    // The new sport is stored in the topics array
    topics.push(sport);

    // We call our buttons function to transform the user request into a button
    buttonsWork();
    
  });



$(document).on("click", ".sportsbuttons", Sportsgifs); 

//This function contains the Ajax call. It was inspired by Ajax calls made in class as well 
//as projects I saw on Github.
function Sportsgifs() {


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

        
//   This is directly inspired by exercise 15. This time data attributes are given to dynamic urls.  
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
        
//This code and this logic were used in exercise 15. We simulate the play/pause function
//thanks to the fact that gifs have to state, still and animate. 
  $("body").on("click", ".gif", function() {

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

