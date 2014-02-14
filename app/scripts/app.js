'use strict';

angular.module('angularGmapsDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/markermap', {
        templateUrl: 'views/marker-map.html',
        controller: 'MarkerMapCtrl'
      })
      .when('/shapemap', {
        templateUrl: 'views/shape-map.html',
        controller: 'ShapeMapCtrl'
      })
      .when('/countymap', {
        templateUrl: 'views/county-map.html',
        controller: 'CountyMapCtrl'
      })
      .when('/corridormap', {
        templateUrl: 'views/corridor-map.html',
        controller: 'CorridorMapCtrl'
      })
      .when('/kmlshapemap', {
        templateUrl: 'views/kml-shape-map.html',
        controller: 'KmlShapeMapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
