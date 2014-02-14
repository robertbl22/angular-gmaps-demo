'use strict';

describe('Service: CorridorSvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var CorridorSvc;
  beforeEach(inject(function (_CorridorSvc_) {
    CorridorSvc = _CorridorSvc_;
  }));

  it('should do something', function () {
    expect(!!CorridorSvc).toBe(true);
  });

});
