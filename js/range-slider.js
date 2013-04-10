/*
	DIAGONAL

	Range Slider
	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov
	@dependencies: jquery.nouislider.js
*/

( function( $ ) {
	$( document ).ready( function() {
		$( '#range-slider' ).noUiSlider( 'init', {
			handles: 2,
			scale: [0, 1500],
			start: [0, 600],
			step: 50,
			change: function() {
				// and changing the value every single time
				var self = $( this );
				self.find('.noUi-upperHandle .infoBox').text( '\u00A3' + self.noUiSlider( 'value' )[1] );
				self.find('.noUi-lowerHandle .infoBox').text( '\u00A3' + self.noUiSlider( 'value' )[0] );
			}
		}).find('.noUi-handle div').each( function( index ){
			// appending the additional element
			var self = $( this );
			self.append( '<span class="infoBox">\u00A3' + self.parent().parent().noUiSlider( 'value' )[index] + '</span>' );
		});
	});
}(jQuery));