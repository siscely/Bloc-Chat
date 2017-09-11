(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;
      this.createRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

// $scope
// this
