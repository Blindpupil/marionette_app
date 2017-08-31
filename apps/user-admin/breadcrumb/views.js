/*global Backbone*/
/*global Marionette*/
/*global _*/

var BreadcrumbView = Marionette.ItemView.extend({
  tagName: "li",
  template: _.template("<a href=#><%=title%></a>"),
  events: {
    "click a" : "fireTrigger"
  },
  fireTrigger: function (ev) {
    ev.preventDefault();
    this.model.select(); //instead of using UserAdmin.trigger...
  }
});
var BreadcrumbList = Marionette.CollectionView.extend({
  tagName: "ol",
  className: "breadcrumb",
  childView: BreadcrumbView
});