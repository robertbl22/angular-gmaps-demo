'use strict';

describe('Controller: KmlShapeMapCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGmapsDemoApp'));

  var KmlShapeMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KmlShapeMapCtrl = $controller('KmlShapeMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
