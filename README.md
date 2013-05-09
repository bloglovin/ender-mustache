# Mustache.js + Ender
## Overview
This is a wrapper around mustache templates to make them play nice with [ender](https://github.com/ender-js).

## Usage
You can add the plugin to your build with `ender add ender-mustache`. If a template is publically available at `http://yourdomain.com/path/to/template.mustache` then you can get the result of rendering the template with ...
```
var result = $.render('/template/path.mustache', {variable: 'value'})
```
... or automatically insert it into a parent element with ...
```
$.render('/template/path.mustache', {variable: 'value'}, '#some .selector')
```

## Known Issues
- I'm currently loading every template with an Ajax request. In production mode it should include precompiled templates in the javascript build using [hogan](http://twitter.github.io/hogan.js).

- I use `document.querySelectorAll` which is going to [break](http://caniuse.com/queryselector) in IE 6 & 7.