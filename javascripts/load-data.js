define(function(require){
  var firebase = require("firebase");
  var templates = require("get-templates");
  console.log("templates", templates);

  var myFirebaseRef = new Firebase("https://nss-mary-trippin.firebaseio.com/");

  myFirebaseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();

    console.log("trips", trips);

    // This will hold the complete DOM string of trips
    var populatedTemplate = templates.tripTpl(trips);
    // In sert the DOm string into the appropriate element
    $("#list-of-trips").html(populatedTemplate);

  });

});