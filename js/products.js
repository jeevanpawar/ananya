
/*
	DIAGONAL

	Products Scripts
	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov

	@dependencies: hover.intent.js
*/

( function( $ ) {

	$( document ).ready( function() {
		//// Get the device width

		var win = $( window );
		var width = win.width();

		var calculateWidth = function( width ) {
			if( width <= 979 ) {
				$( '.product, .product-small' ).unbind();	
			}
			else {
				$( '.product, .product-small' ).hoverIntent( onHoverIntent, outHoverIntent );
			}
		};

		win.resize( function() {
			width = win.width();
			calculateWidth( width );
		});

		//// Add the products diagonals 

		// first create the elements and add them to the DOM
		$( '<div class="hover-background rotate24"></div><div class="product-diagonal"></div>').appendTo( '.product-overflow-keeper' );

		// we have to manually adjust the diagonal height
		// because the product info is with fixed width but we don't know the height
		$( '.product-info' ).each( function() {
			var self = $( this );
			var out = self.height() - 145;
			self.siblings().last().css( 'bottom', out + 'px' ); // it's safer this way since we are using appendTo
		});


		//// The products hover

		var onHoverIntent = function() {
			var self = $( this );
			
			self.find( '.product-info' ).css( 'background', 'transparent' );
			self.find( '.product-diagonal' ).addClass( 'hidden' );
			self.find( '.product-hover' ).animate({ right: 0 }, 300 );
			if( self.hasClass( 'product-small' )) {
				self.find( '.hover-background' ).animate( { left: '55px' }, 250 );	
			}
			else {
				self.find( '.hover-background' ).animate( { left: '100px' }, 250 );
			}
		};

		var outHoverIntent = function() {
			var self = $( this );
			
			self.find( '.product-info' ).css( 'background', 'rgba(0, 0, 0, 0.5)' );
			self.find( '.product-diagonal' ).removeClass( 'hidden' );
			self.find( '.product-hover' ).animate({ right: '-90px' }, 300 );
			self.find( '.hover-background' ).animate( { left: '350px' }, 250);
		};

		$( '.product, .product-small' ).hoverIntent( onHoverIntent, outHoverIntent );
		calculateWidth( width );

		if( $.zoom ) {
			$( '.img-zoom' ).zoom({ url: 'media/product-zoom.jpg' });
		}
	});
	
}( jQuery ));