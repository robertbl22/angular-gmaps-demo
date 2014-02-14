'use strict';

describe('Service: CountySvc', function () {

  // load the service's module
  beforeEach(module('angularGmapsDemoApp'));

  // instantiate service
  var CountySvc;
  beforeEach(inject(function (_CountySvc_) {
    CountySvc = _CountySvc_;
  }));

  it('should do something', function () {
    expect(!!CountySvc).toBe(true);
  });

});
