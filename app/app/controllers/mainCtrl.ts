module Sample.Controllers {
    appControlles.controller('MainCtrl', [
        '$scope', 'mainService', ($scope, mainService) => new MainCtrl($scope, mainService)
    ]);

    export class MainCtrl {
        files: any;
        currentFile: any;

        constructor($scope, mainService: Services.MainService) {
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
    }
}

