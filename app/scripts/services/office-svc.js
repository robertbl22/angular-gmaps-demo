'use strict';

angular.module('angularGmapsDemoApp')
.service('OfficeSvc', function OfficeSvc($http) {

	return {
		get: function() {
			return $http.get('http://maps.selectgeorgia.com/arcgis/rest/services/GISPlanningLayers/MapServer/0/query?where=COUNTY_NAME%3D%27Chatham%27&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&relationParam=&outFields=*&returnGeometry=true&maxAllowableOffset=&geometryPrecision=&outSR=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&returnDistinctValues=false&f=pjson', {cache: true});
		}
	};


});
