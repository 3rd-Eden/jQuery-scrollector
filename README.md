#jQuery Scrollector

The jQuery scrollector allows you to scroll to elements on the base, based on CSS3 selectors using the `.scrollTo` method or by specifying it in a hashtag.

## Arguments

The .scrollTo method allows 2 different arguments, options and callback. The options object is optional and can be used to fine-tune and configure animation using the following options:

* `index`: *0*, If we find multiple elements, this will use the element with this index.
* `duration`: *1000*, The duration of the scroll animation.
* `update`: *true*, Do we need to update the hashtag or not.

The callback function should always be the last argument and needs to be a function. The context of the function will be changed to the result of the CSS3 selector. And will receive 3 arguments:

* `element`: A reference to the jQuery object that was used.
* `hash`: The new hash tag that Scrollector has set.
* `options`: A reference to the used options object.