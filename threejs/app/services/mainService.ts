appServices.factory('mainService', [
    '$http', ($http) => new MainService($http)
]);

class MainService {
    constructor(private $http: ng.IHttpService) {
        
    }

    //getFile(): ng.IHttpPromise<string> {
    //    return this.$http({ method: 'GET', url: '/assets/object.vtk' });
    //}
}