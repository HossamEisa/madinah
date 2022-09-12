/**
 * @package 	WordPress
 * @subpackage 	Schule
 * @version		1.0.0
 * 
 * Theme Scripts
 * Created by CMSMasters
 * 
 */


jQuery(document).ready(function () {
	"use strict";

	/* Menu item custom colors */
	(function (jQuery) {
		jQuery('.menu-item > a[data-color]').each(function () {
			jQuery(this).attr('style', jQuery(this).data('color'));
		});
	})(jQuery);

	if (jQuery('#navigation').length) {
		jQuery(document).ready(cmsmasters_mov_bar_run);
		jQuery(window).on('resize', cmsmasters_mov_bar_run);
	}
	/* Cmsmasters Moving bar */
	function cmsmasters_mov_bar_run() {
		if (jQuery('#navigation > .current-menu-ancestor').length > 0 && jQuery('#navigation > .current-menu-item').length > 0) {
			cmsmasters_mov_bar('#navigation', '.current-menu-item');
		} else if (jQuery('#navigation > .current-menu-ancestor').length > 0) {
			cmsmasters_mov_bar('#navigation', '.current-menu-ancestor');
		} else {
			cmsmasters_mov_bar('#navigation', '.current-menu-item');
		}

		function cmsmasters_mov_bar(jQueryselector, jQueryreaction_class) {

			var parent_class_li = jQuery(jQueryselector).children();
			var parent_class_li_r = jQuery(jQueryselector).children(jQueryreaction_class);

			setTimeout(function () {
				if (parent_class_li_r.length > 0) {
					parent_class_li_r.addClass('cmsmasters_active');
					var currentleft = parent_class_li_r.position().left;
					var currentwidth = parent_class_li_r.css('width');
					var parent_class_li_mov = jQuery(jQueryselector).children('.cmsmasters_mov_bar');
					parent_class_li_mov.css({
						"left": currentleft,
						"width": currentwidth
					});
				} else {
					parent_class_li.first().addClass('cmsmasters_active');
					var currentleft = jQuery(jQueryselector + ' .cmsmasters_active').position().left + "px";
					var currentwidth = jQuery(jQueryselector + ' .cmsmasters_active').css('width');
					var parent_class_li_mov = jQuery(jQueryselector).children('.cmsmasters_mov_bar');
					parent_class_li_mov.css({
						"left": currentleft,
						"width": currentwidth
					});
				}
			}, 100);
			parent_class_li.hover(function () {
				parent_class_li.removeClass('cmsmasters_active');
				jQuery(this).addClass('cmsmasters_active');
				var currentleft = jQuery(jQueryselector + ' .cmsmasters_active').position().left + "px";
				var currentwidth = jQuery(jQueryselector + ' .cmsmasters_active').css('width');
				var parent_class_li_mov = jQuery(jQueryselector).children('.cmsmasters_mov_bar');
				parent_class_li_mov.css({
					"left": currentleft,
					"width": currentwidth
				});
			}, function () {
				if (parent_class_li_r.length > 0) {
					parent_class_li_r.addClass('cmsmasters_active');
					var currentleft = parent_class_li_r.position().left + "px";
					var currentwidth = parent_class_li_r.css('width');
					var parent_class_li_mov = jQuery(jQueryselector).children('.cmsmasters_mov_bar');
					parent_class_li_mov.css({
						"left": currentleft,
						"width": currentwidth
					});
				} else {
					parent_class_li.first().addClass('cmsmasters_active');
					var currentleft = jQuery(jQueryselector + ' .cmsmasters_active').position().left + "px";
					var currentwidth = jQuery(jQueryselector + ' .cmsmasters_active').css('width');
					var parent_class_li_mov = jQuery(jQueryselector).children('.cmsmasters_mov_bar');
					parent_class_li_mov.css({
						"left": currentleft,
						"width": currentwidth
					});
				}

			});
		}
	}
});



/*!
 * Responsive Navigation Function
 */
! function (s) {
	"use strict";
	s.fn.cmsmastersResponsiveNav = function (n) {
		var t = {
				submenu: "ul.sub-menu, ul.children",
				respButton: ".responsive_nav",
				startWidth: 1024
			},
			e = this,
			i = {};
		i = {
			init: function () {
				i.o = s.extend({}, t, n), i.el = e, i.v = {}, i.v.pLinkText = "", i.v.subLinkToggle = void 0, i.setVars(), i.restartNav()
			},
			setVars: function () {
				i.v.submenu = i.el.find(i.o.submenu), i.v.subLink = i.v.submenu.closest("li").find("> a"), i.v.respButton = s(i.o.respButton), i.v.startWidth = i.o.startWidth, i.v.win = s(window), i.v.trigger = !1, i.v.counter = 0, i.startEvent()
			},
			buildNav: function () {
				i.v.trigger = !0, i.v.counter = 1, i.v.subLink.each(function () {
					"" === s(this).text() && (i.v.pLinkText = s(this).closest("ul").closest("li").find("> a").text(), s(this).addClass("cmsmasters_resp_nav_custom_text").html('<span class="nav_item_wrap"><span class="nav_title">' + i.v.counter + '. ' + i.v.pLinkText + '</span></span>'), i.v.counter += 1), s(this).append('<span class="cmsmasters_resp_nav_toggle cmsmasters_theme_icon_resp_nav_slide_down" />')
				}), i.v.subLinkToggle = i.v.subLink.find("> span.cmsmasters_resp_nav_toggle"), i.v.submenu.hide(), i.attachEvents()
			},
			restartNav: function () {
				!i.v.trigger && cmsmasters_media_width() <= i.v.startWidth ? i.buildNav() : i.v.trigger && cmsmasters_media_width() > i.v.startWidth && i.destroyNav()
			},
			resetNav: function () {
				i.v.subLinkToggle.removeClass("cmsmasters_theme_icon_resp_nav_slide_up").addClass("cmsmasters_theme_icon_resp_nav_slide_down"), i.v.submenu.hide()
			},
			destroyNav: function () {
				i.v.subLink.each(function () {
					s(this).hasClass("cmsmasters_resp_nav_custom_text") && s(this).removeClass("cmsmasters_resp_nav_custom_text").text(""), s(this).find("span.cmsmasters_resp_nav_toggle").remove()
				}), i.v.submenu.css("display", ""), i.v.trigger = !1, i.detachEvents()
			},
			startEvent: function () {
				i.v.win.on("resize", function () {
					i.restartNav()
				})
			},
			attachEvents: function () {
				i.v.subLinkToggle.on("click", function () {
					return s(this).hasClass("cmsmasters_theme_icon_resp_nav_slide_up") ? (s(this).removeClass("cmsmasters_theme_icon_resp_nav_slide_up").addClass("cmsmasters_theme_icon_resp_nav_slide_down").closest("li").find("ul.sub-menu, ul.children").hide(), s(this).closest("li").find("span.cmsmasters_resp_nav_toggle").removeClass("cmsmasters_theme_icon_resp_nav_slide_up").addClass("cmsmasters_theme_icon_resp_nav_slide_down")) : (s(this).removeClass("cmsmasters_theme_icon_resp_nav_slide_down").addClass("cmsmasters_theme_icon_resp_nav_slide_up"), s(this).closest("li").find("> ul.sub-menu, > ul.children").show(), s(this).closest("li").find("> div > ul.sub-menu, > div > ul.children").show()), !1
				}), i.v.respButton.on("click", function () {
					i.v.trigger && s(this).hasClass("active") && i.resetNav()
				})
			},
			detachEvents: function () {
				i.v.subLinkToggle.off("click")
			}
		}, i.init()
	}
}(jQuery);



jQuery(document).ready(function () {
	"use strict";

	/* Responsive Navigation Function Start */
	(function ($) {
		jQuery('#navigation').cmsmastersResponsiveNav();


		var section = document.querySelector('#services');
		var hasEntered = false;

		if (section !== null) {
			window.addEventListener('scroll', (e) => {
				var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

				if (shouldAnimate && !hasEntered) {
					hasEntered = true;

					$('.anim-value').each(function () {
						$(this).prop('Counter', 0).animate({
							Counter: $(this).text()
						}, {
							duration: 6000,
							easing: 'swing',
							step: function (now) {
								$(this).text(Math.ceil(now));
							}
						});
					});

				}
			});
		}
	
	})(jQuery);





});



/* CMSMasters Media Width */
function cmsmasters_media_width() {
	var media_width = parseInt(jQuery('.cmsmasters_responsive_width').css('width'));
	return media_width;
}



////////////////////////////////////////////
// back to top
////////////////////////////////////////////
const scrollBtnX = document.querySelector(".back-to-top");
if (scrollBtnX != null) {
	const btnVisibility = () => {
		if (window.scrollY > 400) {
			scrollBtnX.style.visibility = "visible";
		} else {
			scrollBtnX.style.visibility = "hidden";
		}
	};

	document.addEventListener("scroll", () => {
		btnVisibility();
	});

	scrollBtnX.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});
}