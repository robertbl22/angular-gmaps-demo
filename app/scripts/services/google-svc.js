'use strict';

angular.module('angularGmapsDemoApp')
.service('GoogleSvc', function Mapsvc($window) {

	this.MapLabel = $window.MapLabel;
	this.maps = $window.google.maps;

	/********************************************
	/* Taken from:
	/* http://stackoverflow.com/questions/2177055/how-do-i-get-google-maps-to-show-a-whole-polygon
	********************************************/
	$window.google.maps.Polygon.prototype.getBounds = function() {
		var bounds = new $window.google.maps.LatLngBounds();
		var paths = this.getPaths();
		var path;
		for (var i = 0; i < paths.getLength(); i++) {
			path = paths.getAt(i);
			for (var ii = 0; ii < path.getLength(); ii++) {
				bounds.extend(path.getAt(ii));
			}
		}
		return bounds;
	};

	this.addOfficeInfoWindow = function(map, itm, marker) {
		var infowindow = new this.maps.InfoWindow({
			content: '<strong>' + itm.NAME + '</strong><br/>' + itm.ADDRESS + '<br/>' + itm.CITY + ', GA&nbsp;&nbsp;' + itm.COUNTY_NAME
		});
		this.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	};

	this.addSiteInfoWindow = function(map, itm, latLng, polygon) {
		var content = '<strong>' + itm.NAME + '</strong><br/>' + itm.CITY + ', GA&nbsp;&nbsp;' + itm.COUNTY;
		var infowindow = new this.maps.InfoWindow({
			content: content,
			position: latLng
		});
		this.maps.event.addListener(polygon, 'click', function() {
			infowindow.open(map);
		});
	};

	var infoWindows = [];

	this.addCountyInfoWindow = function(map, itm, latLng, polygon) {
		var content = '<strong>' + itm.NAME + ' County, GA</strong>';
		var infoWindow = new this.maps.InfoWindow({
			content: content,
			position: latLng
		});
		infoWindows.push(infoWindow);
		this.maps.event.addListener(polygon, 'click', function() {
			angular.forEach(infoWindows, function(infoWindow){
				infoWindow.close(map);
			});
			infoWindow.open(map);
		});
		this.maps.event.addListener(map, 'click', function() {
			infoWindow.close(map);
		});
	};


});
