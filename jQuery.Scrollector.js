// LICENSE see https://github.com/3rd-Eden/jQuery-scrollector
(function( $ ){
	var re_quicktag = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/g,
		window = window,
		document = document;
	
	$.fn.scrollTo = function(o){
		var $that = this,
			options = { 
				  index: 0			// if we find multiple element, us the element with this index
				, duration: 1000	// how long should it take to scroll to the found element
				, update:true 		// do we need to update the hash tag
			},
			$element, $animation;
			
		// update our options
		$.extend( options, o );
		$element = $( this[ options.index ] );
		
		// how, if we found a match, we can scroll to it
		if( $element.length ){
			$animation = $( "html,body" ).animate(
				  {
					scrollTop: $element.offset().top
				  }
				, options.duration
				, function(){
					var hash = window.location.hash;
					
					// check if we need to update the current hashtag to reflect the current position of the element
					if( !hash || ( hash && !hash.match( $that.selector )) && options.update ){
						window.location.hash = $that.selector + ( $that.length == 1 ? "/" : ":eq(" + options.index +")/" );
					}
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
		valid = hash && !re_quicktag.test( hash.substr(1) );
	
	// make sure we have a valid hash, and it's not a existing hash tag
	if( valid && !document.getElementById( hash.substr(1) ) && !document.getElementsByName( hash.substr(1) ).length ){
		$( hash.substr(1) ).scrollTo();
	}
})(jQuery)