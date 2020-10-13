app.controller('Homepage',['$scope',function($scope){
    $scope.homepage = "Homepage wow";
}]);

app.controller('About',['$scope', function($scope){
    $scope.about = "Lorem ipsum...";
}]);

app.controller('Schedule',['$scope', function($scope) {
    $scope.now = new Date();
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

app.controller('SignUp',['$scope',$templateCache,function($scope,$templateCache){
    $scope.newUser="Elabtronics";
    $scope.currentStep=1;
    $scope.user={};
    $scope.steps={
       1: {
        step: 1,
        name: "First step",
        template: "../pages/wizards/start.html"
      },
      2:{
        step: 2,
        name: "Second step",
        template: "../pages/wizards/second.html"
      },   
      3:{
        step: 3,
        name: "Third step",
        template: "../pages/wizards/final.html"
      }
    };

      $scope.gotoStep=function(step){
        $scope.currentStep=step;
      }
      $scope.getTemplate=function(){
        return $scope.steps[$scope.currentStep].template;
      }
      $scope.save=function(){

      }

      $scope.clearCache = function() { 
        $templateCache.removeAll();
      }
}]);