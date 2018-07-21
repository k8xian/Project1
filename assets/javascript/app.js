$(document).ready(function () {
  console.log("I'm Ready!")

  //enables dropdown of radius in index.html
  $('select').formSelect();

  var zip;

  var radius;

  //selecting zipcode & radius inputs
  $(document).on('input', '#zipcode', function() {
    zip = $('#zipcode').val().trim()
  });

  //Saving zipcode & radius values as local storage
  $(document).on('click', '.submit-btn', function () {
    radius = $('.select-radius :selected').val()
    localStorage.setItem('zipcode', zip);
    localStorage.setItem('radius', radius);
    console.log('Zipcode: ' + zip)
    console.log('Radius: ' + radius);
  });


  //BELOW IS COMMENTED OUT TO AVOID A GOOGLE REFERENCE ERROR I WAS GETTING (JC)

  // //map styling
  // function initMap() {
  //   // Styles a map in night mode.
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: 41.8718, lng: -87.6298 },
  //     zoom: 12,
  //     mapTypeControl: false,
  //     fullscreenControl: false,
  //     styles: [
  //       { elementType: 'geometry', stylers: [{ color: '#00162f' }] },
  //       { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  //       { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  //       {
  //         featureType: 'administrative.locality',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#d59563' }]
  //       },
  //       {
  //         featureType: 'poi',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#d59563' }]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'geometry',
  //         stylers: [{ color: '#00695c' }]
  //       },
  //       {
  //         featureType: 'poi.park',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#00897b' }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'geometry',
  //         stylers: [{ color: '#38414e' }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'geometry.stroke',
  //         stylers: [{ color: '#212a37' }]
  //       },
  //       {
  //         featureType: 'road',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#9ca5b3' }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry',
  //         stylers: [{ color: '#746855' }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'geometry.stroke',
  //         stylers: [{ color: '#1f2835' }]
  //       },
  //       {
  //         featureType: 'road.highway',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#f3d19c' }]
  //       },
  //       {
  //         featureType: 'transit',
  //         elementType: 'geometry',
  //         stylers: [{ color: '#2f3948' }]
  //       },
  //       {
  //         featureType: 'transit.station',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#d59563' }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [{ color: '#01040d' }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'labels.text.fill',
  //         stylers: [{ color: '#515c6d' }]
  //       },
  //       {
  //         featureType: 'water',
  //         elementType: 'labels.text.stroke',
  //         stylers: [{ color: '#17263c' }]
  //       }
  //     ]
  //   });
  // }
  // initMap();



});