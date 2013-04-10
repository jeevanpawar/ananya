/*
	DIAGONAL

	Sliders, Sexy Stuff, etc.
	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov
*/

( function( $ ) {
	$( document ).ready( function() {
		
		( function() {
			var container = $( '.featured-brands div div' ),
				SLIDER_SIZE = 5, // the visible links
				STEP_SIZE = 146, // the width of the link plus the margin-right
				INTERVAL = 5000,
				inAnimation; // indicator for a current animation: left and right

			// put the correct classes
			container.find( 'a' ).first().addClass( 'ffirst' );
			container.find( 'a:eq(' + ( SLIDER_SIZE - 1 ) + ')' ).addClass( 'flast' );

			var slideLeft = function() {
				if( inAnimation ) {
					return;
				}

				// lock the function
				inAnimation = true;

				// if no elements on the right, put the previous ones there
				var next = container.find( '.flast' ).next();
				if( !next.length ) {
					container.find( 'a' ).first().nextUntil( '.ffirst' ).andSelf().detach().appendTo( container ).removeAttr( 'style' );
				}

				// animate
				var mover = container.find( 'a.ffirst' );

				// attach the last class
				container.find( '.flast').removeClass( 'flast' ).next().addClass( 'flast' );		
				mover.animate( { marginLeft: ( -STEP_SIZE ) + 'px' }, 250, function() {
					container.find( '.ffirst' ).removeClass( 'ffirst' ).next().addClass( 'ffirst' );
					inAnimation = false;
				});
			};


			var slideRight = function() {
				if( inAnimation ) {
					return;
				}
				
				// lock the function
				inAnimation = true;

				// if no elements on the left put the next ones there
				var first = container.find( '.ffirst' ).prev();

				if( !first.length ) {
					container.find( '.flast' ).nextAll().detach().css( 'margin-left', -STEP_SIZE ).prependTo( container );
					first = container.find( '.ffirst' ).prev();
				}
				
				container.find( '.flast' ).removeClass( 'flast' ).prev().addClass( 'flast' );				
				first.animate( { marginLeft: '0' }, 250, function() {
					first.next().removeClass( 'ffirst' ).prev().addClass( 'ffirst' );
					inAnimation = false;
				});
			};


			var startSlide = function() {
				slideLeft();
				setTimeout( startSlide, INTERVAL );
				slideOn = true;
			}
			
			startSlide();

			$( '.featured-brands-prev' ).click( function() {
				slideLeft();
				return false;
			})

			$( '.featured-brands-next' ).click( function() {
				slideRight();
				return false;
			});
		}());

		( function() {
			$( '.login-p a:first-child' ).click( function() {
				$( '#login-container' ).removeClass( 'hidden' );
				$( document.body ).css( 'overflow-y', 'hidden' );
			});

			$( '#login-container' ).click( function( e ) {
				if( e.target.id === 'login-container' || e.target.id === 'close-login' ) {
					$( this ).addClass( 'hidden' );
					$( document.body ).removeAttr( 'style' );
				}
			});
		}());
	});
}( jQuery ));