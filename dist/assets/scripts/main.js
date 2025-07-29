document.addEventListener('DOMContentLoaded', function () {
  //ScrollTop
  document.getElementById('pageTop').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
    //Main Slide
    var swiper = new Swiper('.main-slide', {
      spaceBetween: 40,
      loop: true,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".main-slide-navigation-next",
        prevEl: ".main-slide-navigation-prev",
      },
      pagination: {
        el: ".main-slide-pagination",
        clickable: false,
      },
  });
  
  //Brands Slide
  var swiper = new Swiper('.brand-slide', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
});
  //Map
  var mapElement = document.getElementById('map');
  if (mapElement) {
    var lat = parseFloat(mapElement.getAttribute('data-lat'));
    var lng = parseFloat(mapElement.getAttribute('data-lng'));
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
      var mapOptions = {
        zoom: 15,
        disableDefaultUI: false,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: true,
        draggable: true,
        center: new google.maps.LatLng(lat, lng),
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#ffffff"
            }]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 13
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#000000"
            }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#144b53"
              },
              {
                "lightness": 14
              },
              {
                "weight": 1.4
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
              "color": "#08304b"
            }]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#0c4152"
              },
              {
                "lightness": 5
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#000000"
            }]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#0b434f"
              },
              {
                "lightness": 25
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#000000"
            }]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#0b3d51"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
              "color": "#000000"
            }]
          },
          {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
              "color": "#146474"
            }]
          },
          {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
              "color": "#021019"
            }]
          }
        ]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var markerImage = {
        url: 'assets/images/svg/map-pin.svg',
        origin: new google.maps.Point(0, 0),
      }
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        animation: google.maps.Animation.BOUNCE,
        map: map,
        icon: markerImage,
      });
    }
  }
});