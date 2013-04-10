/*
	DIAGONAL

	Home Page Slider
	(If you purchased this template from themeforest.net, please watch out for updates,
	as this slider will be converted into a fully functional jQuery template.)

	written with JQuery 1.8.0 
	https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js

	@author: JGrozdanov
*/


( function( $ ) {

	var slider = {};
	var DURATION = 800;
	var CONTENT_DURATION = 500;
	var INTERVAL = 5000;


	slider.busy = false;
	slider.locked = false;

	slider.animateContent = function( content, newContent ) {
		// let's get a random direction for each new content appearance
		// we only have up and down right now
		var rand = Math.random();
		var props;
		var diagonal = $( '.slider-diagonal-overflow' );

		if( rand > 0.5 ) {
			props = {
				marginTop: '-500px'
			};
		}
		else {
			props = {
				marginTop: '500px'
			}
		}

		diagonal.animate( { left: '44%'}, { duration: 500, queue: false } );
		content.animate( props, { duration: CONTENT_DURATION, queue: false, easing: 'easeInExpo', complete: function() {
			content.addClass( 'hidden' );
			content.removeClass( 'cfocus' );
			content.removeAttr( 'style' );
			newContent.css( props );
			newContent.removeClass( 'hidden' );
			diagonal.animate( { left: '40%'}, { duration: 1000, easing: 'easeOutSine', queue: false } );
			newContent.animate( { marginTop: '0' }, { duration: CONTENT_DURATION, easing: 'easeOutSine', queue: false, complete: function() {
				newContent.addClass( 'cfocus' );
				newContent.removeAttr( 'style' );
			}});
		}});
	};


	slider.moveRight = function() {
		slider.busy = true;
		var cur = $( '.focus' );
		var prev;

		var content = $( '.cfocus' );
		var newContent;

		// find the one that will be getting on stage
		if( cur.hasClass( 'first' ) ) {
			prev = $( '.last' ); 
		}
		else {
			prev = cur.prev();
		}

		// find its content also
		if( content.hasClass( 'cfirst' ) ) {
			newContent = $( '.clast' );
		}
		else {
			newContent = content.prev();
		}

		// prepare it by putting it right of the viewport
		prev.css( 'z-index', '1' );
		prev.css( 'left', '-100%' );
		prev.removeClass( 'hidden' );

		// animate it and clean the garbage
		cur.animate( { left: '100%' }, { duration: DURATION, queue: false, complete: function() {
			cur.addClass( 'hidden' );
			cur.removeClass( 'focus' );
			cur.removeAttr( 'style' );
		}});
		prev.animate( { left: '0' }, { duration: DURATION, queue: false, complete: function() {
			prev.addClass( 'focus' );
			prev.removeAttr( 'style' );

			// set the controls right
			// setting it here because of the async focus class change
			$( '.focused' ).removeClass( 'focused' );
			$( '.t' + prev.attr( 'id') ).addClass( 'focused' );
			slider.busy = false;
		}});

		// animate the content 
		slider.animateContent( content, newContent );
	};


	slider.moveLeft = function() {
		slider.busy = true;
		var cur = $( '.focus' );
		var next;

		var content = $( '.cfocus' );
		var newContent;

		// find the one that will be getting on stage
		if( cur.hasClass( 'last') ) {
			next = $( '.first' );
		}
		else {
			next = cur.next();
		}

		// find its content also
		if( content.hasClass( 'clast' ) ) {
			newContent = $( '.cfirst' );
		}
		else {
			newContent = content.next();
		}

		// prepare it by putting it left of the viewport
		next.css( 'z-index', '1' );
		next.css( 'left', '100%' );
		next.removeClass( 'hidden' );

		// animate it and clean the garbage
		cur.animate( { left: '-100%' }, { duration: DURATION, queue: false, complete: function() {
			cur.addClass( 'hidden' );
			cur.removeClass( 'focus' );
			cur.removeAttr( 'style' );
		}});
		next.animate( { left: '0' }, { duration: DURATION, queue: false, complete: function() {
			next.addClass( 'focus' );
			next.removeAttr( 'style' );

			// set the controls right
			// setting it here because of the async focus class change
			$( '.focused' ).removeClass( 'focused' );
			$( '.t' + next.attr( 'id') ).addClass( 'focused' );
			slider.busy = false;
		}});

		// animate the content
		slider.animateContent( content, newContent );
	};


	slider.moveTo = function( index ) {
		slider.busy = true;
		var cur = $( '.focus' );
		var next = $( '#' + index );

		var content = $( '.cfocus' );
		var newContent = $( '#c' + index );

		// check in which direction we are animating
		if( next.attr( 'id' ) > cur.attr( 'id' ) ) {
			// move left
			next.css( 'z-index', '1' );
			next.css( 'left', '100%' );
			next.removeClass( 'hidden' );

			cur.animate( { left: '-100%' }, { duration: DURATION, queue: false, complete: function() {
				cur.addClass( 'hidden' );
				cur.removeClass( 'focus' );
				cur.removeAttr( 'style' );
			}});
			next.animate( { left: '0' }, { duration: DURATION, queue: false, complete: function() {
				next.addClass( 'focus' );
				next.removeAttr( 'style' );
				$( '.focused' ).removeClass( 'focused' );
				$( '.t' + next.attr( 'id') ).addClass( 'focused' );
				slider.busy = false;
			}});
		}
		else {
			// move right
			next.css( 'z-index', '1' );
			next.css( 'left', '-100%' );
			next.removeClass( 'hidden' );

			cur.animate( { left: '100%' }, { duration: DURATION, queue: false, complete: function() {
				cur.addClass( 'hidden' );
				cur.removeClass( 'focus' );
				cur.removeAttr( 'style' );
			}});
			next.animate( { left: '0' }, { duration: DURATION, queue: false, complete: function() {
				next.addClass( 'focus' );
				next.removeAttr( 'style' );
				$( '.focused' ).removeClass( 'focused' );
				$( '.t' + next.attr( 'id') ).addClass( 'focused' );
				slider.busy = false;
			}});
		}

		// animate the content
		slider.animateContent( content, newContent );
	};

	slider.handle = function( command, to ) {
		if( slider.busy ) {
			return;
		}
		if( slider.locked ) {
			return;
		}
		if( command === 'left' ) {
			slider.moveLeft();
		} 
		if( command === 'right' ) {
			slider.moveRight();
		}
		if( command === 'to' ) {
			slider.moveTo( to );
		}
	}

	slider.start = function() {
		slider.handle( 'left' );
		setTimeout( slider.start, INTERVAL );
	};


	// attach the controls
	$( '#slider-nav li a' ).click( function() {
		var cur = $( this );

		if( cur.hasClass( 'focused' ) ) {
			return false;
		}

		slider.handle( 'to', cur.text() );
		return false;
	});

	
	// start the auto rotation
	setTimeout( function() {
		slider.start();
	}, INTERVAL );

}( jQuery ));