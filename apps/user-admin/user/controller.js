/*global Marionette*/

var UserController = Marionette.Object.extend({
  initialize: function(options) {
    this.module = options.module;
  },
  
  showUserList: function() {
    var userListView = new UserListView({ collection: this.module.collection });
    this.module.app.mainRegion.show(userListView);
    this.module.router.navigate("users");
    this.module.collection.fetch();
  },
  
  showUserDetails: function (user) {
    
    var layoutView = new UserLayoutView({ model: user });
    this.module.app.mainRegion.show(layoutView);
    
    layoutView.summary.show(new UserSummaryView({ model: user }));  //no need for layoutView.regions.summary...
    layoutView.detail.show(new UserDetailView({ model: user }));
    
    this.module.router.navigate("users/" + user.id);
  }
});