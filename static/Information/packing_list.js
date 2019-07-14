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
$("#overseas-button").click(function(){
	$(".buttons").stop().fadeOut();
	$("#local").stop().fadeOut(function(){
		$("#overseas").stop().fadeIn();
		$(".buttons").stop().fadeIn();
	});
});
$("#local-button").click(function(){
	$(".buttons").stop().fadeOut();
	$("#overseas").stop().fadeOut(function(){
		$("#local").stop().fadeIn()
		$(".buttons").stop().fadeIn();
	});
});