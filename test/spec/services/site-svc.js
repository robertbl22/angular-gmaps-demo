'use strict';

describe('Service: SiteSvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var SiteSvc;
  beforeEach(inject(function (_SiteSvc_) {
    SiteSvc = _SiteSvc_;
  }));

  it('should do something', function () {
    expect(!!SiteSvc).toBe(true);
  });

});
