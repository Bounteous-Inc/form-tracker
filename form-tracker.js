(function($) {
$(document).ready(function() { 
	$(':input').blur(function () {
		if($(this).val().length > 0) {
			_gaq.push(['_trackEvent', 'INSERT FORM NAME HERE', 'completed', $(this).attr('name')]);
		} 
		else {
			_gaq.push(['_trackEvent', 'INSERT FORM NAME HERE', 'skipped', $(this).attr('name')]);
	});
});
})(jQuery);