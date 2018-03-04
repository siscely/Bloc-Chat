## Bloc Frontend Project Starter

A starter application for student projects in Bloc's [Frontend Web Development Course](https://www.bloc.io/frontend-development-bootcamp).

## Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/Bloc/bloc-frontend-project-starter.git <your-frontend-project-name>
```

## Reset Git

This will be your personal project. So all of the past commit history that we used to build this starter app aren't needed. Also you will want to be able to push/pull code from your personal remote (Github) repository and NOT Bloc's remote (Github) repository.

Remove the existing local Git repository:

```
$ rm -r -f .git
```

Initialize a new Git repository, add all of these existing files, and commit them:

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

Go to Github and create a new repository. Add that new repository as the proper remote. Then push your initial commit.

```
$ git remote add origin <URL TO NEW GITHUB REPO>
$ git push origin master
```

## Configuration

The project uses Node to run a JS server in development. This will be important when we want to use urls /album or /collection instead of the basic album.html or collection.html. It may  help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.


## Use in Brackets Live Preview

To use the application with the Live Preview functionality of the Brackets text editor, go to __File > Project Settings__ and add `http://localhost:3000` to the Base URL field.

![Screenshot of project settings URL in Brackets](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/bloc-frontend-project-starter/live_preview_project_settings.png)

The text in the application will not update on every keystroke, but changes will automatically push when you save the file.

## Directory Structure

```
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── bloc-logo-white.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```


### Assets/Images

Add images to the `app/assets/images` directory. To reference images in HTML, use the path `/assets/images/<image file name>.jpg`. For example, to include the image called `bloc-white-logo.png`, the path for the `src` attribute in the HTML would be:

```html
<img src="/assets/images/bloc-white-logo.png">
```

__Note:__ A sample image has been added to `app/images`. To remove the image from the application, run the following command from the root of repo:

```bash
$ rm -f app/assets/images/bloc-white-logo.png
```

To reference any other assets, like the music in Bloc Jams, use the path `assets/<asset-type>/<asset-file-name>`.

### Difference between Pages and Templates

The `templates` directory should hold any HTML files used as templates in Angular states configured by UI Router. All other HTML files belong in the `pages` directory.

## Bloc Chat

## Description
In this project you'll use Firebase to build an application that sends and receives messages in real time.

## Install NodeJS

## Clone the Starter Project
To speed up the process of setup, Bloc has created a starter project on GitHub. This repo includes common application files, configuration files, and a NodeJS server file (server.js). These files must be downloaded locally and reconfigured to the specifics of your application. Starting in the directory where you want your project to live, follow these steps:

Clone the Bloc starter project repo and give it a new name. Change project-name to the application name that you want.

$ git clone https://github.com/Bloc/bloc-frontend-project-starter.git project-name

Change into the app directory: $ cd project-name

Run $ npm install to download and install the needed dependencies
Start the node server: npm start
Open a web browser and go to http://localhost:3000
Remember: Press CTRL + C to stop the server.

Reset Git and Push To Github

Remove the existing Git local repository and history: $ rm -r -f .git
Reinitialize Git: $ git init
Re-stage your existing files: $ git add .
Create an initial commit of your existing files: $ git commit -m 'initial commit'
Create a new GitHub repository at GitHub
Add that remote to your project: $ git remote add origin <link to your github repository>
Push your initial commit to your new repository: $ git push origin master
Add the Project to GitHub
Create a new GitHub repository at http://www.github.com
DO NOT add a README to your repo on GitHub
Add that remote to your project: $ git remote add origin <link to your github repository>
Now push your code to GitHub $ git push -u origin master
Add Angular to the Project

In your editor, open app/index.html and add the Angular reference to the body of the document. Make sure that it is referenced above the app.js reference. The app.js reference will be dependent on the Angular library and must come after (below) the Angular reference.
```
app/index.html
 <!DOCTYPE html>
 <html>
 <head lang="en">
     <meta charset="UTF-8">
     <title>Bloc Base Project</title>
     <link rel="stylesheet" href="/styles/main.css">
 </head>
 <body>
     <!-- Angular -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

     <!-- Application Files -->
     <script src="/scripts/app.js"></script>
 </body>
 </html>
 ```
Include AngularUI Router
UI-Router is more flexible and features behaviors not found in the Angular default router. With UI-Router, an application can be in different states that determine what to display when a user navigates to a specific route. In the file app/index.html, add the AngularUI Router reference to the body of the page.
```
app/index.html
 <body>
     <!-- Angular -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
 
     <!-- AngularUI Router -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>

     <!-- Application Files -->
     <script src="/scripts/app.js"></script>
 </body>
 ````
UI-Router will take care of replacing the contents of <ui-view></ui-view> with a template when a user navigates to the proper route. Each template can be unique, while the shared code is kept in the global file. Since UI-Router uses JavaScript to switch the views, the browser won't load a new HTML document when a user navigates to a new route. Add the <ui-view></ui-view> directive element to your index file.
```
app/index.html
 <body>
     <ui-view></ui-view>

     <!-- Angular -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

     <!-- AngularUI Router -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>

     <!-- Application Files -->
     <script src="/scripts/app.js"></script>
 </body>
 ```
Include AngularFire

AngularFire is the officially supported AngularJS binding for Firebase. The combination of Angular and Firebase provides a three-way data binding between your HTML, your JavaScript, and the Firebase database.

## Create an Account
The first thing we need to do is sign up for a free Firebase account. A brand new Firebase project will automatically be created for you which you will use in conjunction with AngularFire to authenticate users and store and sync data.

## Add Script Dependencies
In order to use AngularFire and Firebase in a project, include the following script tags at the bottom of the body of your index.html file:
```
app/index.html
 <body>
     <ui-view></ui-view>

     <!-- Angular -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

     <!-- AngularUI Router -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>

     <!-- FireBase -->
     <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
     <!-- AngularFire -->
     <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>

     <!-- Application Files -->
     <script src="/scripts/app.js"></script>
 </body>
 ```
Initialize the Firebase SDK
Go to https://console.firebase.google.com/
Create a new project
Name the project and choose your country/region
From the Overview page, click the button to 'Add Firebase to your web app'.
That will popup a message with some pre-filled JS code that looks like the below code snippet. Copy/paste that snippet into bottom of the body tag in your index.html file:
```
app/index.html
 <body>
      <ui-view></ui-view>

     <!-- Angular -->
     <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

     <!-- AngularUI Router -->
     <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min.js"></script>

     <!-- FireBase -->
     <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
     <!-- AngularFire -->
     <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
     <script>
       // Initialize Firebase
       var config = {
         apiKey: <your unique api key>,
         authDomain: <your unique auth url>,
         databaseURL: <your unique db url>,
         storageBucket: <your unique bucket url>,
         messagingSenderId: <your unique messagingSenderId>
       };
       firebase.initializeApp(config);
     </script>

     <!-- Application Files -->
     <script src="/scripts/app.js"></script>
 </body>
 ```
Set Firebase read/write to true

Go to https://console.firebase.google.com
Choose the bloc-chat application
Click on 'Database' link in the sidebar
Click the 'Rules' tab from the navigation tabs
Set the read and write rules to true:
console.firebase.google.com/project//database/rules
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
## Bootstrapping Angular
Add the ngApp directive to the <html> tag to initialize the Angular application in the index. Remember to use a camelCase format for the application name. 

app/index.html
```
 <!DOCTYPE html>
 <html ng-app="projectName">
 <head lang="en">
...
```
In app.js, use an IIFE to build the structure for your JavaScript code. Invoke angular and connect it to your application's name with the module method.

app/scripts/app.js
```
 (function() {
     angular
         .module('projectName', [])
 })();
 ```
Include ui.router and firebase as dependencies.

app/scripts/app.js
```
 (function() {
     angular
         .module('projectName', ['ui.router', 'firebase'])
 })();
 ```
Add a configuration function and pass it to the angular config method and inject the $stateProvider and $locationProvider. Use the providers to define your first state which will hold the main view for the application.

app/scripts/app.js
```
 (function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             });
     }
     
     angular
         .module('projectName', ['ui.router', 'firebase'])
         .config(config);
 })();
 ```
## Create a Controller
Create a Home controller. You will have to create the controllers directory.

app/scripts/controllers/HomeCtrl.js
```
(function() {
    function HomeCtrl() {
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', [HomeCtrl]);
})();
```
## Create a Template
The last file we need to add is a template for the "home" state. Create this template app/templates/home.html. The templates directory may not exist. If it doesn't, then create the directory first. Add some html to the template so you can test visually whether or not it is working.

app/templates/home.html
 <h1>Home Page</h1>
That is is all the markup you need for the template to start. You just want enough to allow for manual testing. Angular will replace the <ui-view></ui-view> directive element in the index.html file with the html you put in the template, creating a full valid html file.

## Test your App
Start the node server: $ npm start
Open a web browser and go to http://localhost:3000
You should see the words "Home Page" in large letters in your browser. Check the Chrome inspector for any errors in the JavaScript console. If the text shows and there are no errors, you have succeeded. 

## Finish with Git
You have made several more changes to your project since your last commit. Add and commit the remaining changes before you start adding any new features. You are still on the master branch which is fine for the initial setup. However, once you start adding features, make sure you're always creating a feature branch and adding any changes to it.

Stage all the files in your project $ git add .
Commit all the files with a message $ git commit -m "Finished basic setup"
Push your work to GitHub $ git push origin master

### List Chat Rooms
As a user, I want to see a list of available chat rooms

## Create fake 'rooms' in Firebase
Log into firebase, click the 'Database' link on the sidebar
Add a 'rooms' key to the db. Add rooms as the key, but instead of value, click the  + to add sub objects under rooms
Add a few generic rooms to the database. Put something like name: 'room1', value: 'room1' in as root elements of the db. It should look something like this:
```
bloc-chat-1482f
|__rooms
    |__1:"room1"
    |__2:"room2"
    |__3:"room3"
  ```
### Create a Factory
list of chat rooms mockup
How can I query a list of Rooms from Firebase?*

Create a Room factory in Angular that defines all Room-related API queries. Create a reference to your Firebase database inside, and inject the $firebaseArray service provided by AngularFire:
```
(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref();
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
```
Use Firebase's child() method (called on an instance of its API object) to either query an existing set of data or reference one you intend to populate with data in the future. Use the $firebaseArray service to ensure the data is returned as an array:
```
(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
```
Remember to add a html <script> tag with a src link to Room.js from your  index.html file!

## Create a Controller
How can I display my queried Rooms in the view?*

Create a controller and associate it with the home template in a $state. Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable. Display the rooms in the template using ng-repeat.

### Test Your Code
Launch Bloc Chat, verify that empty chat rooms appear.

## Create Chat Rooms
As a user, I want to create chat rooms

### Modify the Factory
How do I create Room objects with AngularFire?*

You can call AngularFire's $add() on any array created or retrieved with the  $firebaseArray service. In this case, the array is the data stored in the rooms variable in the Room service. Use the AngularFire method $add() inside a Room factory method add. This will give the application the ability to add rooms to the firebase database. You don't want AngularFire specifics leaking into the rest of our application. To avoid this leaking, we will create an abstract method in the service. This may seem like unnecessary duplication of another add method, but this purposeful abstraction will create a nice barrier between AngularFire and the application's controllers. This is the main purpose for creating this service and a foundation for decoupled code.
```
(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        //Use the firebase method $add here
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
```
The Room service method add should take a room object as an argument. This room object will need to be created outside of this service. Where could you create the room object? 

There needs to be a form that you can use to submit the new room's data using  ngClick or ngSubmit. The room object was created in home.html file and when the user clicks a room, it gets passed to the controller.

### Test Your Code
Launch Bloc Chat, verify that your array of rooms updates in real time as soon as you create one.

## List Messages
As a user, I want to see a list of messages in each chat room

### Create a Container
How can I display an individual room's content?*

room with message list
Chat rooms tend to be designed so that only one room's messages show at a time. Create and style a container for holding a list of messages to the right of the list of available chat rooms. The active room should be stored in a $scope object in the main controller, so that the title of the active room changes every time you visit a different room. The active room should be triggered by clicking on the name of the room in the sidebar.

### Associate Messages With a Room
How can I associate messages with a room so that only an active room's messages show when I've selected it?*

Associating objects with other related objects, like rooms with messages, requires using a reference to the parent data (in this case, the room) in the child data. When creating a message object, each message object in your Firebase database should have four properties:
```
{
    username: "<USERNAME HERE>",
    content: "<CONTENT OF THE MESSAGE HERE>",
    sentAt: "<TIME MESSAGE WAS SENT HERE>",
    roomId: "<ROOM UID HERE>"
}
 ```
The last property, roomId, references the room where the message was sent. The ID is generated every time an object saves to Firebase, and can be viewed on the Firebase web interface.

Create a few rooms using the method you programmed in the last story so that you can use the IDs generated from those rooms to complete this story. Firebase UIDs (or unique identifiers) are strings of randomly generated characters like -Jf1GqAZWtS94xlfZA4a.

Create a few messages manually on the Firebase dashboard with the above data structure, and associate them all with one of your rooms so you can test querying messages with the rooms.

### Query Messages with a Factory
Create a Message factory in Angular that defines all Message-related API queries. Create a reference to your Firebase database inside, and inject the $firebaseArray service provided by AngularFire:
```
(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
```
How can I query messages for an active room?*

Using the child() method on the $firebaseArray service again, query messages instead of rooms this time. To get the messages for a given room, you need to chain the child() method with Firebase's orderByChild()1 method, targeting the roomId child.

Recall that roomId is a nested property of each message object. A nested property in Firebase is equivalent to a child, hence its compatibility with the  orderByChild() method.

Messages depend on the ID of a room, you will need to pass an argument into the  getByRoomId method that contains the roomId associated with a rooms message. With the roomId, use Firebase's equalTo() method to find all messages whose  roomId property is equal to the roomId in the argument:
```
(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
    };

    return Message;
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
```
### Test Your Code
1. Launch Bloc Chat.
1. Verify that messages appear when selecting a conversation.
1. Verify that switching chat rooms replaces the messages with those associated with the new chat room.

### Footnotes
The event listener (.on('<event name>')) chained to the orderByChild() method is not required because messages will always be ordered by roomId in this application.
 
## Set Username
As a user, I want to set my username to display in chat rooms

### Use Cookies
How can I efficiently store a username?*

A username is a string identifying a user. A common way to store a string in your browser is to use cookies. Angular has an external module for including the services and methods associated with cookies. To integrate the module:

Include the Angular cookies module via a <script> tag in index.html:  https://ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-cookies.js, where X.Y.Z is the AngularJS version you are running.
Inject the ngCookies module into your Angular app's dependency array.
How can I require each user to enter a username when they visit Bloc Chat for the first time?*
### Prompt the User
How can a user enter a username?*

```
 <form ng-submit="home.createUsername(home.userName)" ng-if="!home.checkUsername()">
    <div>
        <label>Set a username</label></br></br>
        <label>This name will appear when you send messages:</label></br></br>
        <input type="text" ng-model="home.userName"></br>
    </div>
    <div class="button">
    </br><button type="submit"> Set username</button>
    </div>
</form>
```


```
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
  
 }

 angular
   .module('blocChat')
   .factory('User', ['$cookies', BlocChatCookies]);

})();
```
### Test Your Code
1. Launch Bloc Chat.
1. Verify that a modal prompts you for a username.
1. Verify that you cannot dismiss the modal.
1. Verify that submitting an empty username (or whitespace) does not succeed.
1. Verify that providing a username grants access to Bloc Chat.
1. Verify that the username is saved to the appropriate cookie.

## Send Messages
As a user, I want to send messages associated with my username in a chat room

### Message Factory
message bar at the bottom of the chat

How can I send messages?*

Add a method to your Message factory called send, that takes a message object as an argument and submits it to your Firebase server:
```
(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // .. logic for filtering messages
    };

    Message.send = function(newMessage) {
        // Send method logic
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
```
Create a controller method that is invoked via ngClick or ngSubmit on the frontend.

### Associate Messages with Usernames
How can I make sure that the messages that a user sends are associated with their username?*

In the message object detailed earlier, there was a username property that held a string referring to the user crafting the message. Populate that property with the current user's username by injecting the $cookies service and referencing the current user object on it.

### Test Your Code
1. Launch Bloc Chat, open a chat room.
1. Verify that messages are submitted to the active chat room.
1. Verify that your username is associated with each message you create.
1. Verify that new messages are associated with no chat rooms other than the active.

