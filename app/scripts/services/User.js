(function() {
 function BlocChatCookies($cookies) {
   var user = {};
   var currentUser = $cookies.get('blocChatCurrentUser');
   // a function to get the username
   user.getUsername = function(){
     return $cookies.get('blocChatCurrentUser');
   }
   // a function to create the username
   user.createUsername = function(currentUser){
     $cookies.put('blocChatCurrentUser', currentUser);
   }

   return user;
  //  if (!currentUser || currentUser === '') {
  //    // Do something to allow users to set their username
  //  }
 }

 angular
   .module('blocChat')
   .factory('User', ['$cookies', BlocChatCookies]);

})();
