function highlightactive() {
	var page_name = $("#page_name").text();
	var selected_a = $( ".navbar-nav a:contains("+page_name+")" );
	selected_a.addClass("active");
}