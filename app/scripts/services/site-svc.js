'use strict';

angular.module('angularGmapsDemoApp')
.service('SiteSvc', function SiteSvc($http, $window, $q) {

	var _gmaps = $window.gmaps;

	var _layer = (function() {
		var url = 'http://maps.selectgeorgia.com/arcgis/rest/services/GISPlanningLayers/MapServer';
		return new _gmaps.ags.Layer(url + '/3');
	})();

	return {
		getAgs: function(params) {
			var defer = $q.defer();
			var callback = function(data) {
				defer.resolve(data);
			};
			var errback = function(err) {
				defer.reject(err);
			};
			_layer.query(params, callback, errback);
			return defer.promise;
		}
	};

});
