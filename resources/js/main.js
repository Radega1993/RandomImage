window.onload = function getImageTag() {
		// Your web app's Firebase configuration
		
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		  
		var storageRef = firebase.storage();
	  	
	  	var random = Math.floor(Math.random() * 29) +1;
	    var imgRef = "images/rand"
	  	var extension = ".jpeg"
	  	var fullImgPath = imgRef + random + extension;

	   	var storageRef = firebase.storage().ref();
        var spaceRef = storageRef.child(fullImgPath);
        storageRef.child(fullImgPath).getDownloadURL().then(function(url) {

        	var test = url;
            document.querySelector('#mainimg').src = test;
		    
		});
	   }