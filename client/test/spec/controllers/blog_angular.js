'use strict';

describe('Controller: BlogAngularCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BlogAngularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogAngularCtrl = $controller('BlogAngularCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
