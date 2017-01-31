# FlexString
* By James Scariati
* February 2016

## Description
Change the display order of content on an HTML page just by adding querystring parameters to its URL. Content is rearranged entirely on the front-end with CSS flexbox, letting you create variations on-the-fly without any server-side component or deployment process.

**[View Demo](http://scariati.kissr.com/github/flexstring/)**

## Dependencies
* [jQuery](http://jquery.org/)
* [Flexibility](https://github.com/10up/flexibility) (for IE9 support)

## Use
Include jQuery, Flexibility, `flexstring.css`, and the `jquery.flexstring.js` plugin in your HTML, and set up a basic page layout where your content is wrapped with a parent container:

```html
<head>
	<link rel="stylesheet" href="css/flexstring.css" />
</head>
<body>
	<div id="container">
		<section></section>
		<section></section>
		<section></section>
		<section></section>
		<section></section>
	</div>
	
	<script src="lib/jquery.min.js"></script>
	<script src="lib/flexibility.js"></script>
	<script src="lib/jquery.flexstring.js"></script>
</body>
```

Then call `flexString()` on the container:

```javascript
$(document).ready(function() {
	$("#container").flexString();
});
```

## Querystring Parameters
You can append the following querystring parameters to adjust the display order of page content:

* `order`: a comma-delimited numerical list that specifies the display order of the container's children. Also accepts `reverse` to reverse the natural display order or `random` to randomize it
* `hide`: a comma-delimited numerical list of child elements to hide. The hidden elements remain in the DOM, so you can toggle their visibility after the initial page load if necessary
* `remove`: equivalent to `hide`, except the child elements are removed from the DOM entirely

### Examples

#### Order

Show the fifth `<section>` first, followed by the first `<section>`, then the fourth `<section>`, etc.

```html
index.html?order=5,1,4,2,3
```

**[View Demo](http://scariati.kissr.com/github/flexstring/?order=5,1,4,2,3)**

#### Reverse order, hide

Reverse the order of the `<section>`s and hide the first and fifth.

```html
index.html?order=reverse&hide=1,5
```

**[View Demo](http://scariati.kissr.com/github/flexstring/?order=reverse&hide=1,5)**

#### Random order, hide, and remove

Hide the fourth `<section>`, remove the second `<section>`, and randomize the order of the remaining `<section>`s.

```html
index.html?order=random&hide=4&remove=2
```

**[View Demo](http://scariati.kissr.com/github/flexstring/?order=random&hide=4&remove=2)**

## Notes
Because CSS flexbox is used to reorder the page content, the DOM retains the original order. Therefore, jQuery methods 
like `.prev()` and `.next()` will follow the DOM order, not the display order.