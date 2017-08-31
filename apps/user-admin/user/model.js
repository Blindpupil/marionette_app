/*global Backbone*/

var User = Backbone.Model.extend({
  urlRoot: "/api/users/",
  validate: function (atts, opts) {
    if (!(atts.email && atts.userName)) {
      return "Need an email and a userName";
    }
  },
  initialize: function () {
    this.on("invalid", function(m) {
      alert(m.validationError);
    });
  },
  select: function () {
    this.trigger("user:selected", this);
  }
});
var UsersCollection = Backbone.Collection.extend({
  initialize: function (data, options) {
    this.module = options.module;
    this.on("user:selected", function(model) {
      this.module.app.trigger("user:selected", model);
    });
  },
  url: "api/users",
  model: User
});