'use strict';

describe('Controller: BlogNodeCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BlogNodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogNodeCtrl = $controller('BlogNodeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
