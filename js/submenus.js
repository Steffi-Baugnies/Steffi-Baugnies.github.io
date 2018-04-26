$(function(){
	$(".nav-link").bind("click", function() {
		toggleSubMenu(this);
	});
});

var shownElement; 
function toggleSubMenu(navItem){
	if(shownElement != null){
		shownElement.slideToggle(); 
	}
	shownElement = $(navItem).parent().find("ul"); 
	shownElement.slideToggle(); 
}