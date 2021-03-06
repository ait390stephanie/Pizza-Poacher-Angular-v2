/**
 * Copyright 2014 -
 * Licensed under the Academic Free License version 3.0
 * http://opensource.org/licenses/AFL-3.0
 * 
 * Authors: Stephanie Olson
 */

(function() {
  var app = angular.module('pizzaPoacher', ['store-directives']);

  app.controller('StoreController', function(){
    var store = this;
    store.items = [
                   {
                	    "name": "Hawaiian",
                	    "description": "Large pizza loaded with cheese, savory ham, and sweet pineapple.",
                	    "size": "Large",
                		"price": 17.00,
                	    "crust": "Hand-tossed",
                	    "feeds": "3-4",
                	    "slices": 12,
                	    "images": [
                	      "/images/HawaiianPizza.jpg"
                	    ],
                	    "reviews": []
                	  },
                	  {
                	    "name": "BBQ Chicken",
                	    "description": "Large pizza topped with tangy BBQ sauce and topped with chicken, onions, and bacon and loaded with mozzarella.",
                	    "size": "Large",
                	    "price": 17.00,
                	    "crust": "Deep Dish",
                	    "feeds": "3-4",
                	    "slices": 12,
                	    "images": [
                	      "/images/BBQChicken.png"
                	    ],
                	    "reviews": []
                	  },
                	  {
                	    "name": "Taco",
                	    "description": "Large pizza loaded with refried beans, taco-seasoned beef, and sausage, topped with fresh lettuce, tomatoes, and cheese.",
                	    "size": "Large",
                	    "price": 17.00,
                	    "crust": "Thin",
                	    "feeds": "3-4",
                	    "slices": 12,
                	    "images": [
                	      "/images/TacoPizza.jpg"
                	    ],
                	    "reviews": []
                	  },
                	    {
                	    "name": "Pepperoni",
                	    "description": "Large pizza loaded with cheese, and savory pepperoni.",
                	    "size": "Medium",
                		"price": 17.00,
                	    "crust": "Hand-tossed",
                	    "feeds": "2-3",
                	    "slices": 8,
                	    "images": [
                	      "/images/PepperoniPizza.jpg"
                	    ],
                	    "reviews": []
                	  }
                	];

    
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(item) {
      item.reviews.push(this.review);

      this.review = {};
    };
  });
})();
