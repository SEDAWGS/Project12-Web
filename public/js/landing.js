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

	$("#signupButton").click(function() {
		$("#signup-dialog").dialog({
				modal: true,
				draggable: false,
				resizable: false,
			    position: ['center', 'top'],
			    show: 'blind',
			    hide: 'blind',
				width: 400,
				dialogClass: 'ui-dialog-osx',
				buttons: {
					"OK": function() {
						$(this).dialog("close");
					}
				}
			});
	});

	$("#loginButton").click(function() {
		$("#login-dialog").dialog({
				modal: true,
				draggable: false,
				resizable: false,
			    position: ['center', 'top'],
			    show: 'blind',
			    hide: 'blind',
				width: 400,
				dialogClass: 'ui-dialog-osx',
				buttons: {
					"OK": function() {
						$(this).dialog("close");
					}
				}
			});
	});
});