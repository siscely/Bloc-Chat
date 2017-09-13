(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.
        var filteredMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        console.log(filteredMessages);
        return filteredMessages;
        };
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
