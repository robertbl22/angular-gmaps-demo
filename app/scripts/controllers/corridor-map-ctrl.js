'use strict';

angular.module('angularGmapsDemoApp')
.controller('CorridorMapCtrl', function ($scope, GoogleSvc, CorridorSvc) {

	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];

	var mapCanvas = document.getElementById('map-canvas');

	var overlayStyle = {
		fillColor: '#FF0000',
		fillOpacity: 0.35,
		strokeColor: '#FF0000',
		strokeWeight: 1,
		strokeOpacity: 1,
		zIndex: 0
	};

	var agsQueryParams = {
		returnGeometry: true,
		where: 'NAME IN (\'Bibb\', \'Twiggs\', \'Wilkinson\', \'Bleckley\', \'Laurens\', \'Treutlen\', \'Emanuel\', \'Candler\', \'Bulloch\', \'Bryan\', \'Effingham\', \'Chatham\')',
		outFields: ['NAME'],
		overlayOptions: overlayStyle,
		maxAllowableOffset: 0.0085
	};

	var successCallback = function(data) {
		var latLng = new GoogleSvc.maps.LatLng(0,0);
		var mapOptions = {
			center: latLng,
			zoom: 5
		};
		var map = new GoogleSvc.maps.Map(mapCanvas, mapOptions);

		var counties = data.features;

		var bounds = new GoogleSvc.maps.LatLngBounds();

		angular.forEach(counties, function(county){

			var attrs = county.attributes;

			var polygon = county.geometry[0];

			var polygonBounds = polygon.getBounds();
			bounds.extend(polygonBounds.getNorthEast());
			bounds.extend(polygonBounds.getSouthWest());
			var cntr = polygonBounds.getCenter();

			polygon.setMap(map);

			var mapLabel = new GoogleSvc.MapLabel({
				text: attrs.NAME,
				position: cntr,
				map: map,
				fontSize: 12,
				align: 'center',
				strokeWeight: 3,
				strokeColor: '#FF0000',
				fontColor: '#FFFFFF'
			});

			GoogleSvc.addCountyInfoWindow(map, attrs, cntr, polygon);
		});

		map.fitBounds(bounds);
	};

	var errorCallback = function(typeError) {
		console.log(typeError);
		//TODO: display growl message;
	};

	CorridorSvc.getAgs(agsQueryParams).then(successCallback).catch(errorCallback);

});
