$(document).ready (function(){

//we have to use var not const because we want to add sports later in the array
var sports = ["baseball","basketball","boxing","cycling","football","handball","golf","rugby","soccer","tennis"]

function Sportsgifs() {
//not sure were to specify limit 10.I think it is ten by default
let queryurl = "https://api.giphy.com/v1/gifs/search?q="+sport+"wAwF7AiQJSREASGcU6UxYjhfA2gpSxVq";
const sport = $(this).attr("data-name")}


$ajax ({url:queryurl, method:"GET"})
        .done(function(response)
        
        {
            $("#sportstopics").empty();
            var answers=response.data;         
        


for (let jj =0; jj<10; jj++)
    {
       
    var answer =("<img>")
    answer.attr("data-name", answers[jj])
    $("#sportstopics").append(answer);
}

})})