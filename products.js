// const module = angular
//   .module("chic", [])
//   .controller("productsCtrl", function ($scope, $sce, $http, $filter) {
//     $scope.isFilterApplied = false;

//     $scope.toggleFilter = function () {
//       $scope.isFilterApplied = !$scope.isFilterApplied;
//     };
//     $http.get("products.json").then(
//       (response) => {
//         $scope.products = response.data;
//         $scope.productsData = response.data.map((item) => {
//           return item.description.toLowerCase();
//         });
//       },
//       (error) => {
//         alert("Error fetching data:", error);
//       }
//     );




//     // Initializing the scope variables to work with

//     $scope.brands = []; // initialize brands array in the controller

//     $http.get("products.json").then((response) => {
//       var data = response.data;
//       var adddedBrands = []; // array to keep track of already added brand names
//       angular.forEach(data, function (item) {
//         if (adddedBrands.indexOf(item.brand) === -1) {
//           //  to check if brand name is already added
//           $scope.brands.push(item.brand);
//           adddedBrands.push(item.brand);
//         }
//       });
//     });
//     $scope.filterBrands = function (brand) {
//       $scope.filterBrand = brand.toLowerCase();
//       $scope.brands = brand.toLowerCase().split(" ");

//       $scope.products = $scope.products.filter(function (product) {
//         const productBrand = product.brand.toLowerCase();
//         return $scope.brands.some(function (brand) {
//           return productBrand.includes(brand);
//         });
//       });
//       console.log($scope.brands);
//       if ($scope.filteredProducts.length === 0) {
//         // no previous filter applied, filter the whole products array (if not empty)
//         if ($scope.products.length > 0) {
//           $scope.filteredProducts = $scope.products.filter(function (product) {
//             const productBrand = product.brand.toLowerCase();
//             return $scope.brands.some(function (brand) {
//               return productBrand.includes(brand);
//             });
//           });
//         }
//       } else {
//         // filter the already filtered products array (if not empty)
//         if ($scope.filteredProducts.length > 0) {
//           $scope.filteredProducts = $scope.filteredProducts.filter(function (
//             product
//           ) {
//             const productBrand = product.brand.toLowerCase();
//             return $scope.brands.some(function (brand) {
//               return productBrand.includes(brand);
//             });
//           });
//         }
//       }
//     };

//     $scope.newItm = {
//       item: "",
//       type: "",
//     };
//     $scope.getItem = function (item) {
//       $scope.myItem = item;
//     };
//     $scope.myItem = "";

//     $scope.getItem = function (item) {
//       $scope.myItem = item;
//     };
//     $scope.getProducts = function () {
//       if ($scope.myItem == "") {
//         return $scope.products;
//       } else {
//         if ($scope.myItem.includes("range")) {
//           return $scope.filterByPrice($scope.myItem);
//         } else {
//           let newArr = [...$scope.products].filter((item) => {
//             if (item.description.includes($scope.myItem)) {
//               return item;
//             }
//           });

//           return newArr;
//         }
//       }
//     };
  

//     // clear all filters
//     $scope.clearFilters = function () {
//       $scope.filterKeyword = "";
//       $scope.filteredProducts = [];
//       $scope.myItem = "";
//       $scope.selectedPriceRange = "";
//     };

//     $scope.filterByPrice = function (range) {
//       // Loop through products and push to appropriate array
//       var filtered = []; // create a new array to hold filtered products

//       for (let i = 0; i < $scope.products.length; i++) {
//         const price = parseFloat($scope.products[i].price.replace(",", ""));

//         if (range === "range1" && price >= 0 && price <= 400) {
//           filtered.push($scope.products[i]);
//         } else if (range === "range2" && price >= 401 && price <= 800) {
//           filtered.push($scope.products[i]);
//         } else if (range === "range3" && price >= 801 && price <= 1200) {
//           filtered.push($scope.products[i]);
//         } else if (range === "range4" && price >= 1201 && price <= 1600) {
//           filtered.push($scope.products[i]);
//         } else if (range === "range5" && price >= 1601 && price <= 2000) {
//           filtered.push($scope.products[i]);
//         }
//       }

//       $scope.selectedPriceRange = range; // update the selected range
//       // console.log($scope.selectedPriceRange);
//       // console.log(filtered);
//       return filtered; // update the filteredProducts array
//     };
//   });

// module.filter("unsafe", function ($sce) {
//   return function (val) {
//     return $sce.trustAsHtml(val);
//   };
// });


