 /*global Backbone*/

 var UserRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.module = options.module;
  },
  
   routes: {
     "users": "showUserList",
     "users/:id": "showUserDetails"
   },

   showUserList: function() {
     this.module.app.trigger("user:listing:requested");
   },
   showUserDetails: function(id) {
     var self = this; 
     
     this.module.collection.fetch().then(function () {
       var user = this.module.collection.get(id);
       user.select();
     });
   }
     
 });
 