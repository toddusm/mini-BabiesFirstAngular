var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends = ["Eric", "Elias", "Robb", "Ben"];



$scope.friendAdded = function() {
	var frnd = $scope.newFriend;
	$scope.friends.push(frnd);
	$scope.newFriend = '';
}

});