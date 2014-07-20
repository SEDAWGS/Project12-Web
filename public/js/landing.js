$().ready(function() {
	Parse.initialize("LWsbarkfgcHFuK02rv0zQ3IvMfbCaicxnZN6KvnK", "AFjkKZ4IlBhhBBp1cZ5STLVB27sJTLauvy8l2rZE");

	// $("#submit").click(function(){
	// 	console.log($("#user").val());
	// 	console.log($("#pass").val());

	// 	Parse.User.logIn($("#user").val(), $("#pass").val(), {
	// 		success: function(user) {
	// 			alert ('login succesful!');
	// 		},
	// 		error: function(user, error) {
	// 			alert('Login failed. Error ' + error.code + ': ' + error.message);
	// 		}
	// 	 });
	// });

	$("#signUpButton").click(function() {
		var email = $("#emailField").val().trim();
		var password = $("#passwordField").val();
		if (validateEmail(email) && password != null && password != ''){
			var user = new Parse.User();
			user.set("username", email);
			user.set("password", password);
			user.set("email", email);
			user.signUp(null, {
			  success: function(user) {
			  	$("#signupModal").modal("hide");
			    $("#loginModal").modal("show");
			  },
			  error: function(user, error) {
			    alert("Error " + error.code + ": " + error.message);
			  }
			});
		}
		else if (!validateEmail(email)) {
			alert('Enter a legit email!');
		} 
		else {
			alert('Enter a password!');
		}
	});

	// $('#search').focus(function() {
		
	// });

	$("#search").keypress(function() {
		$(".main").animate({
			"top": "10",
			"width": "25%"
		}, 200, "linear", function() {
			$("#mainTitle").hide();
		});
	});

});

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 