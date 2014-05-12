'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', ['ngRoute', 'appServices', 'appControlles', 'appDirectives']);
var appControlles = angular.module('appControlles', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);

app.config(['$routeProvider', ($routeProvider) => {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);