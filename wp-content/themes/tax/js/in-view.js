$(document).ready(function(){function a(a){var b=$(window).scrollTop(),c=b+$(window).height(),d=$(a).offset().top,e=d+$(a).height();return e<=c&&d>=b}$(window).scroll(function(){a(".rotate-wrap")&&$(".our-work").addClass("animate")})});