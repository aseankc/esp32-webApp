app.controller('Homepage',['$scope',function($scope){
    $scope.homepage = "Homepage wow";
}]);

app.controller('About',['$scope', function($scope){
    $scope.about = "Lorem ipsum...";
}]);

app.controller('Schedule',['$scope', function($scope) {
    $scope.now = new Date();
}]);
app.controller('SignUp',['$scope',function($scope){
    $scope.newUser="Elabtronics";
}]);

app.controller('LoginController',['$scope','$location','AuthService',function($scope,$location,AuthService){
    $scope.msg=" ";
    $scope.username="test";
    $scope.password="test";
    $scope.checkUser=function(){
        $scope.msg="checking user";
        return AuthService.auth($scope.username,$scope.password);
    }
    $scope.signUp=function(){
 
        $location.path("signUp");

    }
}]);

app.controller('CPanel',['$scope', function($scope) {
    $scope.user="user";
}]);
app.js
controller.js
indexedDB.html
about.html
schedule.html / date.html
login.html
