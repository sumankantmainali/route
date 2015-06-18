var app = angular.module('myApp',['ngRoute']);

app.controller('homeCtrl',function($scope){
    $scope.homediv1=false;
    $scope.homediv2=true;
    $scope.x = "home";


        $scope.button1=function(){
        $scope.homediv1=true;
        $scope.homediv2=false;
          };
          var d = new Date();
            var time = d.getHours();

            if (time < 12)
              {
              $scope.greet='Good morning!';
              }
            if (time > 12)
              {
              $scope.greet='Good afternoon!';
              }


});
app.controller('bioCtrl',function($scope){
    $scope.x = "biography";
});
app.controller('contactCtrl',function($scope){
    $scope.x = "contact us at 8188898998";
});

app.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'homeCtrl'
    }).when('/bio', {
        templateUrl: 'bio.html',
        controller: 'bioCtrl'
    }).when('/contact', {
        templateUrl: 'contact.html',
        controller: 'contactCtrl'
    }).otherwise({ redirectTo: '/home', });




});