$(document).ready (function(){

//we have to use var not const because we want to add sports later in the array
var sports = ["baseball","basketball","boxing","cycling","football","handball","golf","rugby","soccer","tennis"]

Sportsgifs();

function Sportsgifs() {
//not sure were to specify limit 10.I think it is ten by default
const sport = $(this).attr("data-name")
let queryurl = "https://api.giphy.com/v1/gifs/search?q="+sport+"wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq";



$ajax ({url:queryurl, method:"GET"})
        .done(function(response)
        
        {
            $("#sportsbuttons").empty();
            var answers=response.data;         
        


for (let jj =0; jj<10; jj++)
    {
       
    var answer =("<div>")
    answer.addClass("sportspictures")
    $("#sportsanswers").append(answer);

    var sportimage = ("<img>")
    $("#sportsanswers").append(sportimage);
}
        })
    }})


buttonsWork();

function buttonsWork() {

    $("#sportsanswers2").empty();

    sports.forEach(sport => {
        var sport=("<button>")
        sport.attr("data-name",sports)
        $("#sportsanswers2").append(sport);
    })
}
