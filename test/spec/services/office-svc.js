'use strict';

describe('Service: OfficeSvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var OfficeSvc;
  beforeEach(inject(function (_OfficeSvc_) {
    OfficeSvc = _OfficeSvc_;
  }));

  it('should do something', function () {
    expect(!!OfficeSvc).toBe(true);
  });

});
