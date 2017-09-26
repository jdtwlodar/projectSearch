
    app.controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.data = null;
        $scope.user = 'jdtwlodar';
        $scope.errorbox = false;
        $scope.getuser = function(user) {
            $http.get('https://api.github.com/users/' + ($scope.user) + '/repos')
                .then(function successCallback(response) {
                    $scope.data = response.data;
                    $scope.errorbox = false;
                }, function errorCallback(response) {
                    console.log('Błąd');
                    $scope.errorbox = true;
                });


        };
        $scope.getuser();
        $scope.check = function() {
            $scope.getuser();
        };

    }]);
