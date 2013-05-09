var mustache = require('ender-mustache')
  , loadTemplate = function (path, callback) { //TODO figure out how to do this without an extra request
    $.ajax({
        url: path
      , type: 'html'
      , success: function (res) {
          callback(res)
      }
    })
  }

ender.ender({
    /**
     * Either returns rendered HTML or inserts it into a parent element.
     *
     * @param {string} path on current domain to template.
     * @param {Object} data that the template requires.
     * @param {string} jQuery style selector for the parent 
     * element that the rendered template should be inserted into.
     */
    render: function (pathToTemplate, data, parentSelector) {
      loadTemplate(pathToTemplate, function (template) {
        parentSelector ?
          Array.prototype.slice.call(document.querySelectorAll(parentSelector)).forEach(function (el){ 
            el.innerHTML = $.render(template, data)
          })
        : return $.render(template, data)
      })

    }
  , mustache: mustache
})