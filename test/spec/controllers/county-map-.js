'use strict';

describe('Controller: CountyMapCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGmapsDemoApp'));

  var CountyMapCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountyMapCtrlCtrl = $controller('CountyMapCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
