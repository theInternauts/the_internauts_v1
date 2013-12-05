$(document).ready(function() {
	console.log("loaded")
	$('body').addClass('js')
	var $menu = $('#menu')
	var $menulink = $('.menu-link')

	$menulink.click(function() {
		$menulink.toggleClass('active')
		$menu.toggleClass('active')
		return false
	})
});
