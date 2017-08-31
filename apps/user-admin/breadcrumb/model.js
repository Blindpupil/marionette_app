/*global Backbone*/
/*global Marionette*/
/*global _*/

var Breadcrumb = Backbone.Model.extend({
  select: function () {  //function called in BreadcrumbView fireTrigger event. 
    this.trigger("breadcrumb:selected", this);
  }
});
var BreadcrumbCollection = Backbone.Collection.extend({
  model: Breadcrumb
});