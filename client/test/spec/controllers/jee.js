'use strict';

describe('Controller: JeeCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var JeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JeeCtrl = $controller('JeeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
