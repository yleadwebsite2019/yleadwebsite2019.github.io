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
$(function() {
	$("#carousel").Cloud9Carousel( {
		autoPlay: 1,
		bringToFront: true,
		frontItemClass: "item-active",
		mirror: {
			gap: 12,
			height: 1,
			opacity: 0.4,
		},
		onLoaded: function() {
			$("#carousel").css( 'visibility', 'visible' )
			$("#carousel").css( 'display', 'none' )
			$("#carousel").fadeIn( 1500 )
		},
		onRendered: function(){
			var t = Math.cos(($(carousel).data("carousel").floatIndex() % 1) * 2 * Math.PI)
			$("#descriptions").css('opacity', 0.5 + (0.5 * t)) 
				if ($("#L").hasClass("item-active")){
					$("#L").css("color","orange"),
					$("#E").css("color","black"),
					$("#A").css("color","black"),
					$("#D").css("color","black");
				}else if ($("#E").hasClass("item-active")){
					$("#L").css("color","black"),
					$("#E").css("color","orange"),
					$("#A").css("color","black"),
					$("#D").css("color","black");
				}else if ($("#A").hasClass("item-active")){
					$("#L").css("color","black"),
					$("#E").css("color","black"),
					$("#A").css("color","orange"),
					$("#D").css("color","black");
				}else if ($("#D").hasClass("item-active")){
					$("#L").css("color","black"),
					$("#E").css("color","black"),
					$("#A").css("color","black"),
					$("#D").css("color","orange");
				};
				if ($("#L").hasClass("item-active")){
					$("#L-description").css("display","block"),
					$("#E-description").css("display","none"),
					$("#A-description").css("display","none"),
					$("#D-description").css("display","none");
				};
				if ($("#E").hasClass("item-active")){
					$("#L-description").css("display","none"),
					$("#E-description").css("display","block"),
					$("#A-description").css("display","none"),
					$("#D-description").css("display","none");
				};
				if ($("#A").hasClass("item-active")){
					$("#L-description").css("display","none"),
					$("#E-description").css("display","none"),
					$("#A-description").css("display","block"),
					$("#D-description").css("display","none");
				};
				if ($("#D").hasClass("item-active")){
					$("#L-description").css("display","none"),
					$("#E-description").css("display","none"),
					$("#A-description").css("display","none"),
					$("#D-description").css("display","block");
				};
		},
	});
});