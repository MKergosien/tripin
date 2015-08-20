define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  console.log("templates", templates);

  var myFirebaseRef = new Firebase("https://nss-mary-trippin.firebaseio.com/");


  myFirebaseRef.child("location_types").on("value", function(snapshot){
    var location_types = snapshot.val();
    console.log("location_types", location_types);
    // This will hold the complete DOM string of location types
    var populatedTemplate = templates.locTypeTpl(location_types);
    // Insert the DOm string into the appropriate element
    $("#location_types").html(populatedTemplate);
    console.log(populatedTemplate);
  });



  myFirebaseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();
    console.log("trips", trips);
    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);
    // Insert the DOm string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);

  });

});