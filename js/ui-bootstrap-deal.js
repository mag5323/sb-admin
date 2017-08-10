angular.module('ui.bootstrap.deal', ['ui.bootstrap'])
.controller('ModalDemoCtrl', function($rootScope, $scope, $log, $uibModal) {
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
});
