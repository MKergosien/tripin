define(function(require){
  var $ = require("jquery");
  var visited = false;
  
  $("#visitedBtn").click(function(){
    visited = true;
  });

  $("#wishlistBtn").click(function(){
    visited = false;
  });



  $("#addTrip").click(function(click){
    console.log("on click", click);

    var newLocation = {
      location: $("#location").val(),
      location_type: $("#location_type").val(),
      visited: visited
    };

    console.log("newLocation", newLocation);

    $.ajax({
      url:"https://nss-mary-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData){
      console.log("newData", newData);
    })
    .fail(function(xhr, status, error){
      console.log("error", error);

    });

  });  

});