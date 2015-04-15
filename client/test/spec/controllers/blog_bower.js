'use strict';

describe('Controller: BlogBowerCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BlogBowerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogBowerCtrl = $controller('BlogBowerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
