//////////////////////////////////SLIDER
        $("#slider").flexisel({
        visibleItems: 3,
        itemsToScroll: 1,         
        autoPlay: {
            enable: true,
            interval: 2500,
            pauseOnHover: true
        }        
    });


//////////////////////////////////MAPA
    (function(){

        function init(){
        
                var centerMap = new google.maps.LatLng(50.261235,22.419482);
        
                var mapOptions = {
                    center: new google.maps.LatLng(50.261235,22.419482),
                    zoom: 12,
                    zoomControl: false,
                    scaleControl: false,
          mapTypeControl: false,
          mapTypeControlOptions:false,
                    styles:[{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"-100"},{"weight":"4.06"},{"lightness":"94"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"2.29"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"invert_lightness":true}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#dadada"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#e30713"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#a2a2a2"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#e1e1e1"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"saturation":"-100"},{"visibility":"off"}]}],
                    mapTypeId: google.maps.MapTypeId.ROADMAP	
                }
        
        
                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
                var marker = new google.maps.Marker({
                    position: centerMap,
                    icon: "img/marker.png",
                    animation: google.maps.Animation.BOUNCE,
                
                });
                marker.setMap(map);
        
            }
        
            google.maps.event.addDomListener(window, 'load', init);
        })();


/////////////////////////////////////////////////SCROLLUP
        $(window).scroll(function(){
            if ($(this).scrollTop() > 300) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
     $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
        });
