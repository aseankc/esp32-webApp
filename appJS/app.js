var app=angular.module('main-app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider

        //default page
        .when('/',{
           templateUrl : 'pages/homepage.html',
           controller  : 'Homepage'
        })

        //about page
        .when('/about',{
            templateUrl : 'pages/about.html',
            controller  : 'About'
        })

         //control page
         .when('/CPanel',{
            templateUrl : 'pages/control.html',
            controller  : 'CPanel'
        })

         //login page
         .when('/about',{
            templateUrl : 'pages/login.html',
            controller  : 'About'
        })

        //date page
        .when('/schedule',{
           templateUrl : 'pages/schedule.html',
           controller  : 'Schedule'
        });
});