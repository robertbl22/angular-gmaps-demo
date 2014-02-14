'use strict';

describe('Service: KmlSiteSvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var KmlSiteSvc;
  beforeEach(inject(function (_KmlSiteSvc_) {
    KmlSiteSvc = _KmlSiteSvc_;
  }));

  it('should do something', function () {
    expect(!!KmlSiteSvc).toBe(true);
  });

});
