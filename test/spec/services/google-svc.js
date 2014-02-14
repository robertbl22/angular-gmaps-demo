'use strict';

describe('Service: GoogleSvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var GoogleSvc;
  beforeEach(inject(function (_GoogleSvc_) {
    GoogleSvc = _GoogleSvc_;
  }));

  it('should do something', function () {
    expect(!!GoogleSvc).toBe(true);
  });

});
