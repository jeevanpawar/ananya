/*
	DIAGONAL

	Header Scripts
	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov

	@dependencies: hover.intent.js
*/

( function( $ ) {

	$( document ).ready( function() {
		//// Search

		var searchWidth = {};

		var search = $( '#search' );
		var searchOpened = false;
		var win = $( window );
		var width = win.width();

		var calculateWidth = function( width ) {
			if( width > 1199 ) {
				searchWidth.width = '280px';
			}
			if( width >= 980 && width <= 1199 ) {
				searchWidth.width = '240px';
			}
			if( width >= 768 && width <= 979 ) {
				searchWidth.width = '160px';
			}
			if( width < 768 ) {
				searchWidth.width = '40%';
			}
		};

		calculateWidth( width );

		win.resize( function() {
			width = win.width();
			calculateWidth( width );
		});

		search.click( function() {
			if( !searchOpened ) {
				search.parent().find( 'input' ).focus();
				search.text( 'X' );
				searchOpened = true;
				$( '.control-box input' ).animate( searchWidth, 200 );
			}
			else {
				search.text( 'search' );
				searchOpened = false;
				$( '.control-box input' ).animate( { width: 0 }, 200 );
			}
		});


		//// Languages and Currencies

		$( '.down-arrow, .drop-down > .language, .drop-down > .currency' ).click( function() {
			$( this ).siblings( 'div' ).slideToggle( 100 );
		});

		$( '.drop-down div a' ).click( function() {
			var self = $( this ),
				container = self.parent().parent(),
				main,
				id;

			if( self.hasClass( 'language' )) {
				main = container.find( '.language' ).first();
				id = main.attr( 'id' );
				main.attr( 'id', self.attr( 'id' ) );
				self.attr( 'id', id );
				
			}
			else {
				main = container.find( '.currency' ).first();
				id = main.text();
				main.text( self.text() );
				self.text( id );
			}

			container.find( 'div' ).slideToggle( 100 );
		});



		//// Main menu drop-down

		$( "#menu li" ).hoverIntent( function() {
			$( '.header-container' ).css( 'z-index', '2' );
			$( this ).children( ".child-nav" ).stop( true, true ).slideDown( 300 );
			$( this ).children( ':first' ).css( 'color', '#70a3d8' );
		}, 
		function() {
			$( this ).children( ".child-nav" ).stop( true, true ).slideUp( 300,  function() {
				$( '.header-container' ).css( 'z-index', '1' );
			});
			$( this ).children( ':first' ).css( 'color', 'white' );
		});
	});
	
}( jQuery ));