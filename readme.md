# Flexbox Querystring Demo
* By James Scariati
* February 2016

## Description
Switch the display order of items on a page simply by appending a querystring to its URL. The reordering is done with Flexbox, so the underlying HTML structure remains exactly the same.

## Dependencies
* [jQuery](http://jquery.org/) and jQuery Querystring
* [Flexibility](https://github.com/10up/flexibility) (for IE9 support)

## Use
Include the above libraries and `querystring.js` in your HTML:

```html
<script src="lib/jquery.min.js"></script>
<script src="lib/jquery.querystring.js"></script>
<script src="lib/flexibility.js"></script>
<script src="js/querystring.js"></script>
```

Structure your content like so:

```html
<div class="container">
	<div class="item one">1</div>
	<div class="item two">2</div>
	<div class="item three">3</div>
	<div class="item four">4</div>
	<div class="item five">5</div>
</div>
```

Now, if you append `?version=alt` to the URL, `querystring.js` will use that value as an additional class on `.container`...

```html
<div class="container alt">
	<div class="item one">1</div>
	<div class="item two">2</div>
	<div class="item three">3</div>
	<div class="item four">4</div>
	<div class="item five">5</div>
</div>
```

...which in turn will apply the alternate display order specified in the CSS:

```css
.alt .one   { -ms-flex-order: 5; order: 5; }
.alt .two   { -ms-flex-order: 2; order: 2; }
.alt .three { -ms-flex-order: 1; order: 1; }
.alt .four  { -ms-flex-order: 3; order: 3; }
.alt .five  { -ms-flex-order: 4; order: 4; }
```