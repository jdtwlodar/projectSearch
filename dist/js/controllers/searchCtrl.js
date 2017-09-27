app.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.data = null;
    $scope.user = 'jdtwlodar';
    $scope.errorbox = false;
    $scope.details = true;
    $scope.getuser = (user) => {
        $http.get('https://api.github.com/users/' + ($scope.user) + '/repos')
            .then(function successCallback(response) {
                $scope.data = response.data;
                $scope.errorbox = false;
                $scope.details = true;
            }, function errorCallback(response) {
                $scope.errorbox = true;
                $scope.details = false;
            });
    };
    $scope.getuser();
    $scope.check = function() {
        $scope.getuser();
    };

}]);
