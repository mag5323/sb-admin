angular.module('ui.bootstrap.deal', ['ui.bootstrap', 'daterangepicker'])
.controller('ModalDemoCtrl', function($scope, $log, $uibModal, $http) {
  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
        animation: true,
        backdrop: true,
        templateUrl: 'myModalContent.html',
        controller: function ($scope, $uibModalInstance, $log) {
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
})
.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.search = {
    dt: {startDate: new Date(), endDate: new Date()}
  };
});

