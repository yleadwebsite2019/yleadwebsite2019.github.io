$("#menu-close").click(function(){
	$("#menu-close").fadeToggle('fast', function(){
		$("#menu-open").fadeToggle('fast');
	});
});
$("#menu-open").click(function(){
	$("#menu-open").fadeToggle('fast', function(){
		$("#menu-close").fadeToggle('fast');
	});
});
$("#ask").hover(function(){
	$("#ask").stop().animate({width: "250px"});
});
$("#ask").mouseleave(function(){
	$("#ask").stop().animate({width: "50px"});
});
$(document).ready(function(){
	$("#dos").hover(function(){
		$("#dos-list").stop().fadeIn();
	});
	$("#dos").mouseleave(function(){
		$("#dos-list").stop().fadeOut();
	});
	$("#donts").hover(function(){
		$("#donts-list").stop().fadeIn();
	});
	$("#donts").mouseleave(function(){
		$("#donts-list").stop().fadeOut();
	});
	$('.food-carousel').carousel()
});