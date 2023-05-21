const module = angular
  .module("chic", ["ngRoute"])
  .controller("chicController", function ($scope,  $location, $http, $timeout, $interval) {
    if ($location.$$path == "/faq") {
      $scope.myStyle = "./FAQ/faq.css";
    } else if ($location.$$path == "/") {
      $scope.myStyle = "./style.css";
    } else if ($location.$$path == "/About us") {
      $scope.myStyle = "./aboutUs.css";
    } else if ($location.$$path == "/products") {
      $scope.myStyle = "./products.css";
    }
    console.log($location.$$path)

    $scope.cancelButtonClick = function(event) {
      $(event.target).parent().remove();
      console.log(".cancelBtn");
    };


    $scope.showBrandDropdown = false;
    $scope.showPriceDropdown = false;
    $scope.showFilterButtons = false;
    
  
// Hide the brand dropdown by default
$('#brandDropdown, #priceDropdown').hide();

$('#brands').click(function() {
  $('#brandDropdown').toggle();
});

$('#pricebtn').click(function() {
  $('#priceDropdown').toggle();
});

$('#filter').click(function() {
  $('#pricebtn, #brands, #clear').toggle();
  $('#brandDropdown, #priceDropdown').hide();
});

$(document).click(function(event) {
  if (!$(event.target).closest('#pricebtn, #brands, #priceDropdown, #brandDropdown, #clear').length) {
    $('#priceDropdown, #brandDropdown').hide();
  }
});



$scope.like = function (event) {
  if (event.target.classList.contains("bi-heart")) {
    event.target.classList.replace("bi-heart", "bi-heart-fill");
    event.target.style.color = "red";
} else {
    event.target.classList.replace("bi-heart-fill", "bi-heart");
    event.target.style.color = "black";
}
};



      if(!localStorage.getItem("visitor")){
        localStorage.setItem("visitor", 0);
      }
      let count =  Number(localStorage.getItem("visitor")) + 1;
      localStorage.setItem("visitor",count);
      $scope.count = count;
      console.log($scope.count)



      // Define a function to get the location and weather data
// geolocation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos, showError) => {
      getPlace(pos);
    })
  } else {
    alert("This browser does not support geolocation.");
  }
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.")
      break;
  }
}

getLocation(); // start getting location and weather data
$scope.res = null;
$scope.date = null;
$scope.time = null;

function getPlace(pos) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`;
  $http.get(url)
    .then(response => {
      $scope.res = response.data;
      function updateTicker() {
        $scope.now = new Date();
        $scope.date = $scope.now.toDateString();
        $scope.time = $scope.now.toLocaleTimeString();

      }
      updateTicker()
      setInterval(function(){
        $scope.$apply(updateTicker)
      }, 1000);
    }, error => {
      console.log(error);
    });
}




  $scope.images = ['./images/light3.jpg', './images/light4.jpg', './images/light1.jpg', './images/light2.1.jpg', './images/light5.jpg'];
  $scope.currentIndex = 0;

  $timeout(function() {
    angular.element(document.querySelector('#imgs')).removeClass('animate__animated animate__fadeOut');
  }, 1000);

  $interval(function() {
    $scope.currentIndex++;
    if ($scope.currentIndex == $scope.images.length) {
      $scope.currentIndex = 0;
    }
    angular.element(document.querySelector('#imgs')).css('background-image', 'url(' + $scope.images[$scope.currentIndex] + ')');
  }, 3000);
    
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when("/About us", {
        templateUrl: "aboutUs.html",
      })
      .when("/gallery", {
        templateUrl: "./Gallery/index.html",
      })
      .when("/faq", {
        templateUrl: "/FAQ/faq2.html",
      })
      .when("/products", {
        templateUrl: "/products.html",
        controller: "productsCtrl"

      })
      .when("/offers", {
        templateUrl: "/offers.html",
        controller: "productsCtrl"

      })
      .when("/sitemap", {
        templateUrl: "/Site.html",
      })
      .when("/contact", {
        templateUrl: "/Site.html",
      })
      .when("/home", {
        templateUrl: "/homepage.html",
      })
      .when("/p", {
        templateUrl: "/products.html",
        controller: "productsCtrl"

      })
      .when("/", {
        templateUrl: "/homepage.html",
      });
    // .otherwise({
    //   redirectTo: '/home.html'
    // });
  });
  // products controller
 module.controller("productsCtrl", function ($scope, $sce, $http, $filter) {
    $scope.isFilterApplied = false;

    $scope.toggleFilter = function () {
      $scope.isFilterApplied = !$scope.isFilterApplied;
    };
    $http.get("products.json").then(
      (response) => {
        $scope.products = response.data;
        $scope.productsData = response.data.map((item) => {
          return item.description.toLowerCase();
        });
      },
      (error) => {
        alert("Error fetching data:", error);
      }
    );
    


    // Initializing the scope variables to work with

    $scope.brands = []; // initialize brands array in the controller

    $http.get("products.json").then((response) => {
      var data = response.data;
      var adddedBrands = []; // array to keep track of already added brand names
      angular.forEach(data, function (item) {
        if (adddedBrands.indexOf(item.brand) === -1) {
          //  to check if brand name is already added
          $scope.brands.push(item.brand);
          adddedBrands.push(item.brand);
        }
      });
    });
    $scope.filterBrands = function (brand) {
      $scope.filterBrand = brand.toLowerCase();
      $scope.brands = brand.toLowerCase().split(" ");

      $scope.products = $scope.products.filter(function (product) {
        const productBrand = product.brand.toLowerCase();
        return $scope.brands.some(function (brand) {
          return productBrand.includes(brand);
        });
      });
      console.log($scope.brands);
    };

    $scope.newItm = {
      item: "",
      type: "",
    };
    $scope.getItem = function (item) {
      $scope.myItem = item;
    };
    $scope.myItem = "";

    $scope.getItem = function (item) {
      $scope.myItem = item;
    };
    $scope.getProducts = function () {
      if ($scope.myItem == "") {
        return $scope.products;
      } else {
        if ($scope.myItem.includes("range")) {
          return $scope.filterByPrice($scope.myItem);
        } else {
          let newArr = [...$scope.products].filter((item) => {
            if (item.description.includes($scope.myItem)) {
              return item;
            }
          });

          return newArr;
        }
      }
    };
  

    // clear all filters
    $scope.clearFilters = function () {
      $scope.filterKeyword = "";
      $scope.filteredProducts = [];
      $scope.myItem = "";
      $scope.selectedPriceRange = "";
    };

    $scope.filterByPrice = function (range) {
      // Loop through products and push to appropriate array
      var filtered = []; // create a new array to hold filtered products

      for (let i = 0; i < $scope.products.length; i++) {
        const price = parseFloat($scope.products[i].price.replace(",", ""));

        if (range === "range1" && price >= 0 && price <= 400) {
          filtered.push($scope.products[i]);
        } else if (range === "range2" && price >= 401 && price <= 800) {
          filtered.push($scope.products[i]);
        } else if (range === "range3" && price >= 801 && price <= 1200) {
          filtered.push($scope.products[i]);
        } else if (range === "range4" && price >= 1201 && price <= 1600) {
          filtered.push($scope.products[i]);
        } else if (range === "range5" && price >= 1601 && price <= 2000) {
          filtered.push($scope.products[i]);
        }
      }

      $scope.selectedPriceRange = range; // update the selected range
      // console.log($scope.selectedPriceRange);
      // console.log(filtered);
      return filtered; // update the filteredProducts array
    };
  });

module.filter("unsafe", function ($sce) {
  return function (val) {
    return $sce.trustAsHtml(val);
  };
});


