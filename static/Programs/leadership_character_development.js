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