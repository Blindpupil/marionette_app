var BreadcrumbsModule = function (settings) {
  
  var collection = new BreadcrumbCollection(initialData);
  var view = new BreadcrumbList({ collection: collection });  
  var initialData = settings.initialData || [];
  var region = settings.region;
  var module = {};

  module.app = settings.app || {};
  module.setCrumbs = function (data) {
    collection.reset(data);
  };
  
  //events
  collection.on("breadcrumb:selected", function (crumb) {
    module.app.trigger(crumb.get("trigger"));  //this will bubble up events in model items.
  })
  
  //explicit call to load
  module.show = function () {
    if (region) {
      region.show(view);
    } else {
      throw "Can't show the breadcrumbs without a region specified";  //should actually be throwing an explicit Exepction() instead of a string.
    }
  }
  
  return module;
};