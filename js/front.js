$(function () {
    utils();
    map();
});

function map() {
    if ($('#map').length > 0) {
        function initMap() {
            var location = new google.maps.LatLng(51.730008, 19.5000901);
            var mapCanvas = document.getElementById('map');
            var mapOptions = {
                center: location,
                zoom: 16,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(mapCanvas, mapOptions);
            var markerImage = 'img/marker.png';
            var marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: markerImage
            });
            var contentString = '<div class="info-window">' +
                    '<h3>Tu mieszkam :-)</h3>' +
                    '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 400
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
            var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];
            map.set('styles', styles);
        }
        google.maps.event.addDomListener(window, 'load', initMap);
    }
}

function utils() {
    $('[data-toggle="tooltip"]').tooltip();

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function (e) {
        var radio = $(this).find(':radio');
        radio.prop('checked', true);
    });

    $('.box.clickable').on('click', function (e) {
        window.location = $(this).find('a').attr('href');
    });

    $('.external').on('click', function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
    });

    $('.scroll-to, .scroll-to-top').click(function (event) {
        var full_url = this.href;
        var parts = full_url.split("#");
        if (parts.length > 1) {
            scrollTo(full_url);
            event.preventDefault();
        }
    });

    function scrollTo(full_url) {
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 100;
        if (target_top < 0) {
            target_top = 0;
        }
        $('html, body').animate({
            scrollTop: target_top
        }, 1000);
    }
}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {
        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);

    });
}

$(window).load(function () {
    windowWidth = $(window).width();
    $(this).alignElementsSameHeight();

});

$(window).resize(function () {
    newWindowWidth = $(window).width();
    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
        }, 205);
        windowWidth = newWindowWidth;
    }
});
