'use strict';

describe('Controller: BlogGruntCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BlogGruntCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogGruntCtrl = $controller('BlogGruntCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
