#jQuery Scrollector

The jQuery Scrollector is here to enhance the default hash based functionality. By default the hash at the end of a url allows you to jump to a location that has the value of the
hash as name or id attribute. This requires you to add attributes or elements on to your page in order for this to work. The Scrollector allows you to scroll to elements based on 
a CSS3 selector as value of the hash. It does not overwrite the default behavior of the hash, it just extends it. So all your existing hash based navigations will still work by
default.

When the jQuery Scrollector plugin is loaded it will check if there is a hash tag present, and scroll to the result of CSS3 selector. But you can also scroll to parts of your
web site by using the .scrollTo method.

## Arguments

The .scrollTo method allows 2 different arguments, options and callback. The options object is optional and can be used to fine-tune and configure animation using the following options:

* `index`: *0*, If we find multiple elements, this will use the element with this index.
* `duration`: *1000*, The duration of the scroll animation.
* `update`: *true*, Do we need to update the hash tag or not.

The callback function should always be the last argument and needs to be a function. The context of the function will be changed to the result of the CSS3 selector. And will receive 3 arguments:

* `element`: A reference to the jQuery object that was used.
* `hash`: The new hash tag that Scrollector has set.
* `options`: A reference to the used options object.


## Examples

Scroll to the article element with a new class, but do the fifth.

	$("article.new:eq(5)").scrollTo() // will produce hash tag: #article.new:eq(5)
	$("article.new").scrollTo({index:5}).addClass("omg") // will produce hash tag: #article.new:eq(5)
	
Scroll to a destination based on the hash the url

	wwww.example.com/longlist/#div.item h3 // will scroll to the first div.item h3 element
	
## Animations

The latest version of Scrollector also features build in animation support using the jQuery UI framework.
These animations are only trigged once the page is loaded as they require an addition to the CSS3 syntax.
By adding `!effectname` at the end of the CSS3 selector you tell Scrollector to execute the effect after
we have scrolled to the correct location. For example:

	wwww.example.com/longlist/#div.item h3!highlight // scroll to div.item h3 and does a highlight effect on the element

If you don't have jQuery UI added to your page, these effects will not execute and the page will continue
to operate as normal. 

### Available animations
blind,bounce,clip,drop,explode,fold,highlight,puff,pulsate,scale,shake,size and slide ( transfer is also checked by the regexp, but there is no element to transfer to )