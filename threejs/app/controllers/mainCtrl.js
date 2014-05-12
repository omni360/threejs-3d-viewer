appControlles.controller('MainCtrl', [
    '$scope', 'mainService', function ($scope, mainService) {
        return new MainCtrl($scope, mainService);
    }
]);

var MainCtrl = (function () {
    function MainCtrl($scope, mainService) {
        $scope.model = this;

        this.files = [
            {
                id: 1,
                name: "moai"
            },
            {
                id: 2,
                name: "halfball"
            },
            {
                id: 3,
                name: "mesh"
            },
            {
                id: 4,
                name: "bunny"
            },
            {
                id: 5,
                name: "plane"
            }
        ];

        this.currentFile = this.files[0];
    }
    return MainCtrl;
})();
//# sourceMappingURL=mainCtrl.js.map
