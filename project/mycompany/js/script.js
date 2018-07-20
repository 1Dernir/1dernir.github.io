
// responsive menu

menu.onclick = function respMenu() {
	var menu = document.getElementById('topNav');

	if (menu.className === "top__nav") {
		menu.classList.add("responsive");
	}
	else {
		menu.className = "top__nav";
	}
}

// smooth scrolling

$(function(){
	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	})
});