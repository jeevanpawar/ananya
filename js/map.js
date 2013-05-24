/*
	DIAGONAL

	Styled Google Map
	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov
	@dependencies: Google Maps API V3

	Please, use your own API key!
*/

( function( $ ) {
	$( document ).ready( function() {
		var mapOptions = {
			center: new google.maps.LatLng( 19.960511950481912,73.82726669311523 ),
			zoom: 15,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map( document.getElementById( 'map-canvas' ), mapOptions );

		var image = 'img/pin-name.png';
		var address = new google.maps.LatLng( 19.960511950481912,73.82726669311523 );
		var marker1 = new google.maps.Marker({
			position: address,
			map: map,
			icon: image
		});
		
		image = 'img/pin.png';
		address = new google.maps.LatLng( 19.960511950481912, 73.82726669311523 );
		var marker2 = new google.maps.Marker({
			position: address,
			map: map,
			icon: image
		});
	});
}(jQuery));