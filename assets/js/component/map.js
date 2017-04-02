$(function(){
    $(window).load(function(){
        "use strict";

        // set your google maps parameters
        var $latitude = 47.757864, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
            $longitude = -116.788298,
            $map_zoom = 14; /* ZOOM SETTING */

        // google map custom marker icon
        var $marker_url = 'assets/img/cfh_google_map.png';

        // we define here the style of the map
        // https://snazzymaps.com/style/23308/poison-green
        var style = [
          {
            "elementType": "labels.text.fill",
            "featureType": "all",
            "stylers": [
              {
                "color": "#64bb50"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "featureType": "all",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#333739"
              },
              {
                "weight": 0.8
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "landscape",
            "stylers": [
              {
                "color": "#1f1f1f"
              }
            ]
          },
          {
            "elementType": "all",
            "featureType": "poi",
            "stylers": [
              {
                "color": "#1f1f1f"
              }
            ]
          },
          {
            "elementType": "all",
            "featureType": "poi.park",
            "stylers": [
              {
                "color": "#1f1f1f"
              }
            ]
          },
          {
            "elementType": "geometry.stroke",
            "featureType": "road",
            "stylers": [
              {
                "color": "#303030"
              },
              {
                "weight": 1
              }
            ]
          },
          {
            "elementType": "all",
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "road.highway",
            "stylers": [
              {
                "color": "#303030"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "elementType": "geometry.fill",
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "on"
              }
            ]
          },
          {
            "elementType": "geometry.stroke",
            "featureType": "road.highway",
            "stylers": [
              {
                "visibility": "off"
              },
              {
                "weight": "1"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "road.arterial",
            "stylers": [
              {
                "color": "#303030"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "elementType": "geometry.fill",
            "featureType": "road.arterial",
            "stylers": [
              {
                "weight": "0.01"
              }
            ]
          },
          {
            "elementType": "geometry.stroke",
            "featureType": "road.arterial",
            "stylers": [
              {
                "weight": "1"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "road.local",
            "stylers": [
              {
                "color": "#303030"
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "elementType": "geometry.fill",
            "featureType": "road.local",
            "stylers": [
              {
                "weight": "0.01"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "transit",
            "stylers": [
              {
                "color": "#1f1f1f"
              }
            ]
          },
          {
            "elementType": "geometry",
            "featureType": "water",
            "stylers": [
              {
                "color": "#131313"
              }
            ]
          }
        ];

        // set google map options
        var map_options = {
            center: new google.maps.LatLng($latitude, $longitude),
            zoom: $map_zoom,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        };

        // inizialize the map
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);

        //add a custom marker to the map
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($latitude, $longitude),
            map: map,
            visible: true,
            icon: $marker_url
        });
    });
});
