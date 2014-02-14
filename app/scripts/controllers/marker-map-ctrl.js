'use strict';

angular.module('angularGmapsDemoApp')
.controller('MarkerMapCtrl', function ($scope, GoogleSvc, OfficeSvc) {

	$scope.awesomeThings = [
		'HTML5 Boilerplate',
		'AngularJS',
		'Karma'
	];

	var tempLatLng = new GoogleSvc.maps.LatLng(0, 0);
	var mapOptions = {
		center: tempLatLng,
		zoom: 12
	};
	var mapCanvas = document.getElementById('map-canvas');
	mapCanvas.style.opacity = 0;
	var map = new GoogleSvc.maps.Map(mapCanvas, mapOptions);

	OfficeSvc.get().success(function(data) {
		var bounds = new GoogleSvc.maps.LatLngBounds();

		angular.forEach(data.features, function(value){
			var office = value.attributes;
			var lat = office.LATITUDE;
			var lng = office.LONGITUDE;
			var latlng = new GoogleSvc.maps.LatLng(lat, lng);
			var marker = new GoogleSvc.maps.Marker({
				position: latlng,
				map: map,
				title: office.NAME,
				icon: 'images/office.png'
			});
			bounds.extend(latlng);
			GoogleSvc.addOfficeInfoWindow(map, office, marker);
		});

		map.setCenter(bounds.getCenter());
		map.fitBounds(bounds);
		mapCanvas.style.opacity = 1;
	});

});
