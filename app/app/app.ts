/// <reference path='typings/angularjs/angular.d.ts'/>
/// <reference path='typings/threejs/three.d.ts'/>
/// <reference path='typings/stats/stats.d.ts'/>
/// <reference path='typings/detector/detector.d.ts'/>

/// <reference path='_references.ts'/>

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

