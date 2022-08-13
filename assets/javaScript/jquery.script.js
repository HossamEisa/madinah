jQuery(document).ready(function () {
	"use strict";

	/* Responsive Navigation Function Start */
	(function ($) {
		$('#navigation').cmsmastersResponsiveNav();
	})(jQuery);


});



/* CMSMasters Media Width */
function cmsmasters_media_width() {
	var media_width = parseInt(jQuery('.cmsmasters_responsive_width').css('width'));
	return media_width;
}