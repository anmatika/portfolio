'use strict';

describe('Controller: BlogSettingupAngularCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BlogSettingupAngularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogSettingupAngularCtrl = $controller('BlogSettingupAngularCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
