'use strict';

describe('Controller: CorridorMapCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularGmapsDemoApp'));

  var CorridorMapCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CorridorMapCtrlCtrl = $controller('CorridorMapCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
