app.config(function($routeProvider){
    $routeProvider

        //default page
        .when('/home',{
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
         .when('/login',{
            templateUrl : 'pages/login.html',
            controller  : 'About'
        })

         //signup page
         .when('/signUp',{
            templateUrl : 'pages/signup.html',
            controller  : 'SignUp'
        })

        //schedule page
        .when('/schedule',{
           templateUrl : 'pages/schedule.html',
           controller  : 'Schedule'
        });
        
});