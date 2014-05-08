//var mongoose = require('mongoose');

window.angular.module('ngff.controllers.restaurant-add', [])
    .controller('AddRestaurantController', ['$scope', '$routeParams','$location', '$http', 'Global', 'Restaurant',
        function($scope, $routeParams, $location, $http, Global, Restaurant) {

            $scope.global = Global;
            $scope.selectedRestaurant = 0;
            $scope.selectedDetails = null;
            $scope.newScope = null;
            $scope.newRestaurant = null;
            $scope.restItems = [];
            $scope.restaurants = [];



//            var collection = db.get('restaurants');
//            collection.find({},{},function(err, docs) {
//                collection.each(function(err, ))
//            });

//            var oneRest;
//            while(docs.hasNext()) {
//                oneRest = docs.next();
//                restaurants.push(oneRest);
//            }

            // CREATE
//            $scope.createNewRestaurant = function() {
//                event.preventDefault()
//
//                console.log("Added restaurant is " + $scope.restaurant);
////                console.log("Item 1 is " + $scope.restaurant.item[0])
////                console.log("Restaurant name is " + restaurant.restaurant)
//
//                var restaurant = new Restaurant({
//                    restaurant: this.newRestaurant,
//                    phonenumber: this.phoneNumber,
//                    item: [
//                        $scope.restItems
//                    ]
//                });
//
//                $scope.restaurants.push(restaurant);
//
//                restaurant.$save(function (response) {
//                    $location.path('restaurants');
//                });
//
//                this.restaurant.restaurant = "";
//                this.restaurant.item = "";
//
//            }
//
//            // FIND
            $scope.find = function (query) {
                Restaurant.query(query, function (restaurant) {
                    $scope.restaurant = restaurant;
                });
            };
//
//            // FIND ONE
//            $scope.findOne = function () {
//                Restaurant.get({ restaurantId: $routeParams.restaurantId }, function (restaurant) {
//                    $scope.restaurant = restaurant;
//                });
//            };
//
//            // UPDATE/MODIFY
//            $scope.update = function () {
//                var restaurant = $scope.restaurant;
//                restaurant.$update(function () {
//                    $location.path('restaurant');
//                });
//            };
//
//            // DELETE
//            $scope.destroy = function (league) {
//                league.$remove();
//                for (var i in $scope.leagues) {
//                    if ($scope.leagues[i] == league) {
//                        $scope.leagues.splice(i, 1)
//                    }
//                }
//            };

            $scope.addNewRestItem = function () {
                $scope.restItems.push(
                    $scope.restItem
                );
                console.log("1newitems: "+$scope.restItems);
            }

            $scope.addNewRestaurant = function() {
                if($scope.newRestaurant != null && $scope.newRestaurant != "") {
                    console.log("Restaurant Name: "+$scope.newRestaurant);
                    $scope.restaurants.push({
                        id: $scope.restaurants.length,
                        name: $scope.newRestaurant,
                        items: $scope.restItems
                    });
                }
                console.log("2newitems: "+$scope.restItems);
                $scope.restItems = [];
            }

            $scope.removeRestaurant = function($index) {
                console.log('length before: '+$scope.restaurants.length);
                $scope.restaurants.splice($index,1);
                console.log('length after: '+$scope.restaurants.length);
            }

            $scope.setValueOfIdx = function($index){
                $scope.idx = $index;
            }

            $scope.restaurantList = function($index) {
                $scope.restaurants = Restaurants.restaurants;

            }

//            $scope.restaurants = Restaurants.restaurants;

}]);