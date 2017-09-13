(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.currentRoom = null;
      this.rooms = Room.all;
      this.messages = null;
      this.createRoom = Room.add;
      this.checkUsername = currentUser;

      this.selectRoom = function(room){
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    }
  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();

// $scope
// this
