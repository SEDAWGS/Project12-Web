Parse.Cloud.define("querySublets", function(request, response) {
	var query = new Parse.Query("SLObject");
	var searchQuery = request.params.query;
	if (serachQuery == null || searchQuery == '') {
		response.error("No Search Defined");
	}
	query.equalTo("tags", searchQuery.toLowerCase());
	query.find({
		success: function(results) {
			response.success(results);
		},
		error: function() {
			response.error("No Objects found,");
		}
	});
});