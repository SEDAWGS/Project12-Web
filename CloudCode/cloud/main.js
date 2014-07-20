Parse.Cloud.define("querySublets", function(request, response) {
	var query = new Parse.Query("SLObject");
	query.equalTo("tags", request.params.query);
	query.find({
		success: function(results) {
			response.success(results);
		},
		error: function() {
			response.error("No Objects found,");
		}
	});
});