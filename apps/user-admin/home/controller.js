/*global Marionette*/

var HomeController = Marionette.Object.extend({
  initialize: function (options) {
    this.module = options.module;
  },
  
  // Instantiate the view
  showIndex : function() {
    this.module.app.mainRegion.show(new IndexView());
    this.module.router.navigate("");
  }

});