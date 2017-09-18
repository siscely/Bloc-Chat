(function() {
    function HomeCtrl(Room, Message, User) {
      this.currentRoom = null;
      this.rooms = Room.all;
      this.messages = null;
      this.createRoom = Room.add;
      this.checkUsername = User.getUsername;
      this.createUsername = User.createUsername;
      this.sendMessage = Message.send;

      this.selectRoom = function(room){
        this.currentRoom = room;
        this.messages = Message.getByRoomId(room.$id);
      }
  }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'User', HomeCtrl]);
})();

// $scope
// this
