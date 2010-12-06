(function( $ ){
	var re_quicktag = /^[^<]*(<[\w\W]+>)[^>]*$/g,
		  re_effect = /!(blind|bounce|clip|drop|explode|fold|highlight|puff|pulsate|scale|shake|size|slide|transfer)$/g;
	
	$.fn.scrollTo = function(){
		var $that = this,
			args = arguments,
			options = { 
					index: 0			// if we find multiple element, us the element with this index
				, duration: 1000	// how long should it take to scroll to the found element
				, update:true 		// do we need to update the hash tag
			},
			
			// the last argument will be a callback function
			callback = args.length && $.isFunction( args[ args.length - 1 ] ) ? args[ args.length - 1 ] : false,
			$element, $animation;
			
		// update our options, if we received a options argument
		if( args.length && !$.isFunction( args[0] ) ){
			$.extend( options, args[0] );
		}
		$element = $( this[ options.index ] );
		
		// how, if we found a match, we can scroll to it
		if( $element.length ){
			$animation = $( "html,body" ).animate(
					{
					scrollTop: $element.offset().top
					}
				, options.duration
				, function(){
					// there is a small bug in jQ where this callback is executed twice, so we are going to undef the "
					if( options.called ) return; options.called = true;
					
					var hash = window.location.hash;
					
					// check if we need to update the current hashtag to reflect the current position of the element
					if( !hash || ( hash && !hash.match( $that.selector )) && options.update ){
						// we need to add the # manually so we can also use id's ##idattribute
						window.location.hash = "#" + $that.selector + ( $that.length == 1 ? "" : ":eq(" + options.index +")" );
					}
					callback && callback.call( $element, $element, window.location.hash, options );
				}
			);
		}
		
		// continue the chain
		return this;
	};
	
	// Check if we need to init right away, and check if it's a "valid" css selector and not HTML shit that
	// some random script kiddy is trying to inject, yes.. I'm talking to you, haxor.. It's not like we are going
	// inject any code in the DOM but the $() function does not limit it's functionality to only CSS selectors
	var hash = window.location.hash,
		valid = hash && !re_quicktag.test( hash.substr(1) ), $hash;
		
	// make sure we have a valid hash, and it's not a existing hash tag
	if( valid && !document.getElementById( hash.substr(1) ) && !document.getElementsByName( hash.substr(1) ).length ){
		
		// remove the first # and the optional effect params, or the CSS selector will fail
		$hash = $( hash.substr(1).replace( re_effect, "") ).scrollTo(function( element, hash, options ){
			var effect = re_effect.exec( hash );
			
			// check if we can use the jQuery ui effects
			if( effect && effect.length && $.effects && $.effects[ effect[1] ] && $hash.effect ){
				$hash.effect( effect[1] );
			}
		});
	}
})(jQuery)