app.controller('Homepage',['$scope',function($scope){
    $scope.homepage = "Homepage";
}]);

app.controller('About',['$scope', function($scope){
    $scope.about = "Lorem ipsum...";
}]);

app.controller('Schedule',['$scope', function($scope) {
    $scope.now = new Date();
}]);

app.controller('LoginController',['$scope',function($scope){
    $scope.username="test";
    $scope.password="test";
    if($scope.username && $scope.password){
        
    }
    // call login service to validate the login process
}]);

app.controller('CPanel',['$scope', function($scope) {
    $scope.user="user";
}]);
