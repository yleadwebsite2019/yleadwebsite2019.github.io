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
	$("#content").hover(function(){
		$("#description").stop().fadeIn();
	});
	$("#content").mouseleave(function(){
		$("#description").stop().fadeOut();
	});
	$("#changemakers").hover(function(){
		$("#description-changemakers").stop().fadeIn();
	});
	$("#smart_city").hover(function(){
		$("#description-smart_city").stop().fadeIn();
	});
	$("#changemakers").mouseleave(function(){
		$("#description-changemakers").stop().fadeOut();
	});
	$("#smart_city").mouseleave(function(){
		$("#description-smart_city").stop().fadeOut();
	});
});