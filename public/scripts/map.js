(function () {
  const init = function (el) {
    latlng = new google.maps.LatLng(42.40721070000001, -71.38243740000001);
    var mapOptions = {
      zoom: 9,
      center: latlng,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: true,
      scrollwheel: true,
      zoomControl: true,

      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              hue: "#222222",
            },
            {
              saturation: "-100",
            },
          ],
        },
      ],
    };
    var map = new google.maps.Map(el, mapOptions);
    new google.maps.Marker({
      position: latlng,
      map: map,
    });
  };
  init(document.getElementById("google-map"));
})();
