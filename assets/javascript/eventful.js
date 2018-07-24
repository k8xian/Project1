$(document).ready(function () {
    console.log("I'm Ready!")


    //variables called from local storage 
    var localZip = localStorage.getItem("zipcode");
    console.log("The locally stored zip is: " + localZip);
    var localRadius = localStorage.getItem("radius");
    console.log("The locally stored zip is: " + localRadius);

    // temporary data since eventful doesn't populate a ton of results based on zip and radius
    var tempArea = "chicago";
    var tempRadius = "15";

    //arrays to hold lat/lon
    var latArray = [];
    var lonArray = [];


    //event
    var eventfulKey = "TQGmk2sjCkvfxS3r";
    var eventfulURL = "https://api.eventful.com/json/events/search?app_key="
        + eventfulKey +
        "&q=happy%20hour&ga_search=happy+hour&ga_type=events&t=Today"
        + "&location="
<<<<<<< HEAD
        + tempArea
        + "&within&within="
        + tempRadius
        + "&units=miles";
=======
        + localZip
        + "&ga_search=happy%20hour&ga_type=events"
        + "&within&within="
        + localRadius
        + "&units=miles"
//        + "&date=Today";
>>>>>>> 4389abcf4613ef19593e2dc1a10665c2bd5d1be4
    console.log(eventfulURL);


    $.ajax({
        url: eventfulURL,
        dataType: 'jsonp',
        method: "GET"
    }).then(function (response) {

        var resultLength = parseInt(response.total_items);
        console.log(response);
        console.log("the result length is = " + resultLength);

        for (var i = 0; i < resultLength; i++) {

            console.log(response.events.event[i].venue_name);
            console.log(response.events.event[i].venue_address);
            console.log(response.events.event[i].description);
            console.log("event latitude " + response.events.event[i].latitude);
            console.log("event longitude " + response.events.event[i].longitude);

            var eventVenue = response.events.event[i].venue_name;
            var eventAddress = response.events.event[i].venue_address;
            var eventDescription = response.events.event[i].description;
            var eventLat = response.events.event[i].latitude;
            var eventLon = response.events.event[i].longitude;
            var eventURL = response.events.event[i].url;

            //pushes current lat/lon into an array
            latArray.push(eventLat);
            lonArray.push(eventLon);

            var sectionBlock = $("<div class='section'>");
            var businessName = $("<h1>");
            var distance = $("<h2>");
            var description = $("<p class='twitter-preview'>");
            var linkToAddress = $("<a class='map-link__temp'>");

            if (eventVenue !== null) {
                businessName.html(eventVenue);
            } else {
                businessName.html("unamed location")
            }

            if (eventDescription !== null) {
                description.html(eventDescription);
            } else if (eventURL !== null) {
                description.html("<a href='" + eventURL + "' target='_blank'>no description available: link to event</a>");
            } else {
                description.text("Oops... no info available");
            }

            distance.text("0.4 mi");

            if (eventAddress !== null) {
                linkToAddress.attr("href", "http://maps.google.com/?q=" + eventAddress).attr("target", "_blank").text("Link to Map");
            }

            sectionBlock.append(businessName, distance, description, linkToAddress);
            $(".info-block").append(sectionBlock);
            $(".info-block").append("<div class='divider'>");
            
        }
    });

});