// custom typefaces
require('typeface-inter')
require('./src/css/tailwind.css')

exports.onRouteUpdate = function routeUpdate() {
  window.setTimeout(function () {
    if (window.analytics) {
      window.analytics.page(document.title)
    }
  }, 100)
}
