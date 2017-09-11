(function() {
    function HomeCtrl(Room, Message) {
      this.rooms = Room.all;
      this.createRoom = Room.add;
      this.getMessage = Message.getByRoomId;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', Message, HomeCtrl]);
})();

// $scope
// this
