// AngularJS - First Directive Basic Example 
var directiveApp =  angular.module("directiveApp",[]);

directiveApp.directive("kid",function(){
    return{
        restrict:'E',
        template:'<input type="text" ng-model="score">{{score}}'
    }
});

// AngularJS - Directive Restrictions
directiveApp.directive("zensar",function(){
    return{
        restrict:'C',//'A','M','C'
        link: function(){
            console.log("Hello Zensar");
        }
    }
});
//AngularJS - Directives Talking to Controllers
directiveApp.controller("AppCtrl",function($scope){
    $scope.loadMOreTwitter = function(){
        alert("Load Tweet");
    }
});

directiveApp.directive("enter",function(){
    return function(scope,element,attrs){
        element.bind("mouseenter",function(){
            scope.loadMOreTwitter();
        })
        
    }
});

//AngularJS - Understanding Isolate '@'
directiveApp.directive("drink",function(){
    return{     
        template:'<div>{{flavor}}</div>',
        link: function(scope,element,attrs){
            scope.flavor = "Cherry";
            
        }
    }
});