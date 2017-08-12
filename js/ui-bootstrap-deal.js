angular.module('ui.bootstrap.deal', ['ui.bootstrap', 'daterangepicker'])
.controller('ModalDemoCtrl', function($scope, $log, $uibModal, $http) {
  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $uibModalInstance, $log) {
          $scope.deal = {
            label: {id: '3', name: 'Nissan'},
            category: {id: '3', name: 'Nissan'}
          };

          $scope.labels = {
            availableOptions: [
              {id: '1', name: 'Toyota'},
              {id: '2', name: 'Honda'},
              {id: '3', name: 'Nissan'}
            ]
          };
          $scope.categories = {
            availableOptions: [
              {id: '1', name: 'SUV'},
              {id: '2', name: 'Hatchback'},
              {id: '3', name: 'Sedan'}
            ]
          };

          $scope.submit = function () {
            console.log($scope.deal);
            $uibModalInstance.dismiss('cancel');
          }
          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }
    });

    modalInstance.result.then(function ($scope) {
      console.log('close');
    }, function () {
      console.log('dismiss');
    });
  };

  $http.get('https://reqres.in/api/users?page=4').then(function (response) {
    $scope.dealData = response.data;

    // pagination;
    $scope.totalItems = response.data.total;
    $scope.currentPage = 1;

    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };
  });
})
.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.search = {
    dt: {startDate: new Date(), endDate: new Date()}
  };
});
