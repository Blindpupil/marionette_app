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
     var user = this.module.collection.get(id);
     
     if (user) {
      user.select();
     } else {
      user = new User({ id: id });
      user.fetch().then(function(){
       user.select();
      });
     }
   }
   
 });
 