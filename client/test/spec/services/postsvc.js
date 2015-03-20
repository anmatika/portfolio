'use strict';

describe('Service: postSvc', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var postSvc;
  beforeEach(inject(function (_postSvc_) {
    postSvc = _postSvc_;
  }));

  it('should do something', function () {
    expect(!!postSvc).toBe(true);
  });

});
