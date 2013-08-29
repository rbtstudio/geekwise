var app1 = angular.module("superhero", []);

app1.directive("superman", function(){
    var superObj = {
        restrict: "E",
        template: "<div>Here I come to save the day!</div>"
    }
    return superObj;
});

app1.directive("spiderman", function(){
    var superObj = {
        restrict: "A",
        link: function(){
            alert("I'm working.");
        }
    }
    return superObj;
});

app1.directive("hulk", function(){
    var superObj = {
        restrict: "M",
        link: function(){
            alert("Hulk Smash!");
        }
    }
    return superObj;
});
angular.bootstrap($("#myHero"),['superhero']);
/*
A = attribute
E = element
C = class
M = comment
*/

var app2 = angular.module("behaviorApp", []);

app2.directive("enter", function(){
    var enterObj = {
        restrict: "A",
        link: function(scope, element){
            element.on({
                mouseenter: function(){
                    console.log("I'm in!");
                }
            });
        }
    }
    return enterObj;
});
app2.directive("leave", function(){
    var leaveObj = {
        restrict: "A",
        link: function(scope, element){
            element.on({
                mouseleave: function(){
                    console.log("I'm out!");
                }
            });
        }
    }
    return leaveObj;
});
angular.bootstrap($("#myPain"),['behaviorApp']);



var app3 = angular.module("listMe", []);
// SHORTHAND
app3.directive("click", function(){
    return function(scope, element, attrs){
        element.on({
            click: function(){
                scope.countDownFromFive();
                scope.countUpToFive();
            },
            mouseenter: function(){
                element.addClass(attrs.click);
            },
            mouseleave: function(){
                element.removeClass(attrs.click);
            }
        });
    }
});

// LONGHAND
// app3.directive("click", function(){
//     var myObject = {
//         restrict: "A",
//         link: function(scope, element, attrs){
//             element.on({
//                 click: function(){
//                 scope.countDownFromFive();
//                 scope.countUpToFive();
//             },
//             mouseenter: function(){
//                 element.addClass(attrs.click);
//             },
//             mouseleave: function(){
//                 element.removeClass(attrs.click);
//             }
//             });
//         }
//     }

//     return myObject;
// });

// CONTROLLERS
app3.controller("theController", function($scope){
    $scope.countDownFromFive = function(){
        var count = 5;
        while(count >= 0){
            console.log(count);
            count--;
        }
    }
    $scope.countUpToFive = function(){
        var count = 0;
        while(count <= 5){
            console.log(count);
            count++;
        }
    }
});
angular.bootstrap($("#clickMe"),["listMe"]);








