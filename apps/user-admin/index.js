/*global Backbone*/
/*global Marionette*/

// App Objects
var UserAdmin = new Marionette.Application();

UserAdmin.addRegions({
  mainRegion: "#app",
  navRegion: "#breadcrumbs"
});

//Module Loader
UserAdmin.addInitializer(function() {
    
  UserAdmin.breadcrumbs = new BreadcrumbsModule({
    app: UserAdmin,
    region: UserAdmin.navRegion,
    initialData: { title: 'Home' }
  });
  
  UserAdmin.user = new UserModule({ 
    app: UserAdmin,
    initialData: testData
  });
  
  UserAdmin.home = new HomeModule({
    app: UserAdmin
  });
  
});

//Breadcrumbs Events
UserAdmin.addInitializer(function () {
  var crumbs = {
    home: { title: "Home", trigger: "index:requested" },
    list: { title: "User Listing", trigger: "user:listing:requested" }
  };
  
  //load it up using the show method from our Module
  UserAdmin.breadcrumbs.show(); 
  
  // events
  UserAdmin.on("user:selected", function (selectedUser) {
    UserAdmin.breadcrumbs.setCrumbs([crumbs.home, crumbs.list, { title: selectedUser.get("email") }]); //and the setCrumbs
  });
  
  UserAdmin.on("user:listing:requested", function (){
    UserAdmin.breadcrumbs.setCrumbs([crumbs.home, crumbs.list]);
  });
  
  UserAdmin.on("index:requested", function () {
    UserAdmin.breadcrumbs.setCrumbs(crumbs.home);
  });
  
});

//User Events
UserAdmin.addInitializer(function () {  
 
  UserAdmin.on("user:selected", function (selectedUser) {
    UserAdmin.user.controller.showUserDetails(selectedUser);
  });
  
  UserAdmin.on("user:listing:requested", function (){
    UserAdmin.user.controller.showUserList();
  });
  
});

//Home Events
UserAdmin.addInitializer(function() {
     
  UserAdmin.on("index:requested", function () {
    UserAdmin.home.controller.showIndex();
  });
  
  // start history
  Backbone.history.start();
  
});