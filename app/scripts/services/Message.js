(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);


    Message.getByRoomId = function(roomId) {
            // Filter the messages by their room ID.
        var filteredMessages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        return filteredMessages;
    };

    Message.send = function(newMessage,userName,roomId) {
        // Send method logic
        var message = {
          content: newMessage,
          username: userName,
          roomId: roomId
        };

        messages.$add(message);
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
