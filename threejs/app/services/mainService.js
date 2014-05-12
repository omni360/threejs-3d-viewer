appServices.factory('mainService', [
    '$http', function ($http) {
        return new MainService($http);
    }
]);

var MainService = (function () {
    function MainService($http) {
        this.$http = $http;
    }
    return MainService;
})();
//# sourceMappingURL=mainService.js.map
