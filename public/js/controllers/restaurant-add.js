/**
 * Created by taylorcase on 5/6/14.
 */

window.angular.module('ngff.controllers.restaurant-add', [])
    .controller('RestaurantAddController', ['$scope', '$routeParams','$location', 'Global', 'Restaurants',
        function($scope, $routeParams, $location, Global, Restaurants) {

            $scope.global = Global;
            $scope.selectedRestaurant = 0;

            $scope.restaurants = [
                {
                    id: 0,
                    name: 'zPizza',
                    phone: '510-360-9900',
                    items: [
                        'California Salad',

                        'Chicken Ceasar Salad',

                        'Greek Salad',

                        'Arugula Salad',

                        'Pear and Gorgonzola Salad',

                        'ZBQ Salad',

                        'Hot Meatball Sub',

                        'Turkey Breast Sandwich',

                        'Pollo Latino Sandwich',

                        'Z-Tuna Sandwich',

                        'Supersub',

                        'Yuppie Chicken Sandwich',

                        'Penne with Meatballs',

                        'Chicken Penne Pesto',

                        'Veggie Calzone',

                        'Meat Calzone',

                        'Cheese Pizza',

                        'Sausage & Mushrooms',

                        'Pepperoni',

                        'Ham and Pineapple',

                        'Chicken Sausage & Arugula Rustica',

                        'Mediterranean Rustica',

                        'Pear and Gorgonzola Rustica'
                    ]
                },
                {
                    id: 1,
                    name: 'Falafel Corner',
                    phone:'510-252-1577',
                    items: [
                        'Classic Hamburger',

                        'Classic Cheeseburger',

                        'Double Cheeseburger',

                        'Avocado Burger',

                        'Hawaiian',

                        'Tex-Mex Burger',

                        'Bacon Cheddar Burger',

                        '6 Buffalo Wings',
                        '6 BBQ wings',
                        'Teriyaki Wings',

                        '12"Pepperoni pizza',

                        '12"Cheese pizza'
                    ]
                },
                {
                    id: 2,
                    name: 'Eastern Winds',
                    phone:'510-651-6678',
                    items: [
                        'Almond Chicken',

                        'Kung Pao Beef or Chicken',

                        'Cashew Nut Chicken',

                        'Sesame Chicken',

                        'String Bean Chicken or Beef',

                        'Chicken with Mixed Veggies',

                        'Sweet and Sour Chicken or Pork',

                        'Broccoli Beef or Chicken',

                        'Szechuan Beef or Chicken',

                        'Mongolian Beef or Chicken',

                        'Garlic Pork in Szechuan Sauce',

                        'Bean Curd in Spicy Sauce',

                        'Mixed Fresh Veggies',

                        'Eggplant in Szechuan Sauce',

                        'Prawns with Black Bean Sauce',

                        'Prawns with Broccoli',

                        'Kung Pao Prawns',

                        'Lemon Chicken',

                        'Orange Chicken'
                    ]
                },
                {
                    id: 3,
                    name: 'Extreme Pita',
                    phone:'510-490-7482',
                    items: [
                        'Grilled Chicken',

                        'Rustic Italian',

                        'Falafel',

                        'Veggie',

                        'Club',

                        'Gyro',

                        'Tuna',

                        'Chiptole Steak',

                        'Philly Steak',

                        'The Chief',

                        'Chick-Chick Boom!',

                        'Uncle Philly',

                        'Chicken Shawarma',

                        'Bourbon Chipotle',

                        'Chicken Caesar',

                        'Chicken Souvlaki',

                        'Buffalo Chicken',

                        'Fiesta Mexicana',

                        'Thai Beef'
                    ]
                }
            ];

            $scope.selectedDetails = null
            $scope.newScope = null;
            $scope.newRestaurant = null;
            $scope.restItems = [];

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
