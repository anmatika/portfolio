'use strict';

describe('Service: thumbnail', function () {

  // load the service's module
  beforeEach(module('appApp'));

  // instantiate service
  var thumbnail;
  beforeEach(inject(function (_thumbnail_) {
    thumbnail = _thumbnail_;
  }));

  it('should do something', function () {
    expect(!!thumbnail).toBe(true);
  });

});
