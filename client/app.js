var app = angular.module('neo4j', []);
app.controller('neo4jCtrl', function ($scope, $http, $timeout) {
    $scope.item = '';
    // getting from neo4j
    $timeout(function(){
        $http.get('/home')
            .then(function (responseData) {
                $timeout(function(){
                    $scope.showdata = responseData.data;
                    console.log("tahir",$scope.showdata);
                    console.log(typeof $scope.showdata);

                },0);
                console.log("tahir",responseData.data);
            }, function (responseErr) {
                console.log('Response Error ', responseErr);
            });

    },0);


    $scope.add = function (item) {
        item1 = {
            item: item
        };
        console.log(item1);
        $http.post('/add', item1)
            .success(function (data) {
                console.log(data)
            })
    };
/*    $scope.show = function () {

     };*/
      $scope.delete = function (item) {
     $http.delete('/', item)
     .success(function (data) {
     $scope.showdata = data
     })
     }
});