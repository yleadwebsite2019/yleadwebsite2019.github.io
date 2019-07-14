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
});

var map;

function initMap() {
	map=new google.maps.Map(document.getElementById("googleMap"),{
		center:new google.maps.LatLng(1.3521,103.8198),
		zoom:12,
		gestureHandling: 'greedy',
		
	});

	var fusionopolis = new google.maps.Marker({
		position: {lat: 1.2989379, lng: 103.7861973},
		map: map,
		title: 'fusionopolis',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var fusionopoliswindow = new google.maps.InfoWindow({
		content: '<div class="iw-container"><h4 class="title">Fusionopolis</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/fusionopolis.jpg"><div class="lj-description col">Fusionopolis is one of Singapore’s leading research hubs for Information and Communication Technologies. Fusionopolis plays a pivotal role in developing key technologies that aid in creating a Smart City. As Leaders of Tomorrow, participants will get the chance to learn about the endless possibilities that science and technology can bring, and the importance of taking the lead to harness and utilise technology to its fullest potential in order to improve our society.</div></div></div>'
	});
	fusionopolis.addListener('click', function() {
		fusionopoliswindow.open(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.open(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.close(map, mtc),
		rvhswindow.close(map, rvhs);
	});
	fusionopolis.addListener('mouseover', function() {
		fusionopoliswindow.open(map, fusionopolis);
	});
	fusionopolis.addListener('mouseout',function() {
		fusionopoliswindow.close(map, fusionopolis);
	});
	google.maps.event.addListener(fusionopoliswindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});

	var smg = new google.maps.Marker({
		position: {lat: 1.3079276, lng: 103.8470409},
		map: map,
		title: 'smg',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var smgwindow = new google.maps.InfoWindow({
		content: '<div class="iw-container"><h4 class="title">Singapore Mobility Gallery</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/smg.jpg"><div class="lj-description col">Officially re-launched by Prime Minister Lee Hsien Loong on 19 September 2018, Singapore Mobility Gallery features 7 exhibit zones that showcase various facets of Singapore’s dynamic and comprehensive land transport system. It gives a behind-the-scenes look at how the Land Transport Authority plans, designs and builds our transport system while balancing efficiency, liveability and inclusivity as it leverages technology for smarter urban mobility. Participants can look forward to an interesting learning experience through interactive games and virtual reality (VR) activities that give them insights into the roles people play in the transport industry. </div></div></div>'
	});
	smg.addListener('mouseover', function() {
		smgwindow.open(map, smg);
	});
	smg.addListener('mouseout',function() {
		smgwindow.close(map, smg);
	});
	smg.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.open(map, smg),
		shgwindow.close(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.close(map, mtc),
		rvhswindow.close(map, rvhs);
	});
	google.maps.event.addListener(smgwindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});


	var shg = new google.maps.Marker({
		position: {lat: 1.2961955, lng: 103.8442711},
		map: map,
		title: 'shg',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var shgwindow = new google.maps.InfoWindow({
		content: '<div class="iw-container"><h4 class="title">Singapore History Gallery @ National Museum of Singapore</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/shg.png"><div class="lj-description col">The Singapore History Gallery is located within the vicinity of the National Museum of Singapore. The gallery adopts a storytelling approach, unveiling different perspectives, through tales of Singapore’s history, into four main chapters- Singapura (1299 – 1818), Crown Colony (1819 – 1941), Syonan-To (1942 – 1945) and Singapore (1945 – present). Participants are able to learn about the challenges Singapore faced in the past and how its leaders approached and solved the challenges. This will equip them with different perspectives and skills in solving challenges which are crucial for Leaders of Tomorrow to possess. </div></div></div>'
	});
	shg.addListener('mouseover', function() {
		shgwindow.open(map, shg);
	});
	shg.addListener('mouseout',function() {
		shgwindow.close(map, shg);
	});
	shg.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.open(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.close(map, mtc),
		rvhswindow.close(map, rvhs);
	});
	google.maps.event.addListener(shgwindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});


	var hdg = new google.maps.Marker({
		position: {lat: 1.2790878, lng: 103.8435399},
		map: map,
		title: 'hdg',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var hdgwindow = new google.maps.InfoWindow({
		content: "<div class='iw-container'><h4 class='title'>Harmony in Diversity gallery</h4><div class='row'><img class='popover-image col-auto' height='100%'' width='100%'' src='../static/programs/hdg.jpg'><div class='lj-description col'>The Harmony in Diversity gallery was developed by the Ministry of Home Affairs and launched by former President Tony Tan Keng Yam on 2 September 2016. The Gallery aims to promote an appreciation of Singapore's rich religious diversity. Participants are able to gain a deeper understanding of Singapore’s turbulent history due to many racial conflicts. They will understand why it is important for them to be proud of and play a part in preserving our racial diversity and harmony as Singapore has come a long way in achieving these. </div></div></div>"
	});
	hdg.addListener('mouseover', function() {
		hdgwindow.open(map, hdg);
	});
	hdg.addListener('mouseout',function() {
		hdgwindow.close(map, hdg);
	});
	hdg.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.close(map, shg),
		hdgwindow.open(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.close(map, mtc),
		rvhswindow.close(map, rvhs);
	});
	google.maps.event.addListener(hdgwindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});


	var smag = new google.maps.Marker({
		position: {lat: 1.2708997, lng: 103.8610656},
		map: map,
		title: 'smag',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var smagwindow = new google.maps.InfoWindow({
		content: '<div class="iw-container container"><h4 class="title">Singapore Maritime Gallery</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/smag.jpg"><div class="lj-description col">The Singapore Maritime Gallery is a gallery which comprises the history of Singapore’s free port from the time when it was first developed by the British in the 1800’s to becoming one of the busiest ports in the world today. There are interactive exhibits to help participants comprehend how ships work. Through the informative exhibits, participants will better understand how the maritime industry in Singapore has evolved and its importance to our economy.</div></div></div>'
	});
	smag.addListener('mouseover', function() {
		smagwindow.open(map, smag);
	});
	smag.addListener('mouseout',function() {
		smagwindow.close(map, smag);
	});
	smag.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.close(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.open(map, smag),
		rvhswindow.close(map, rvhs);
	});
	google.maps.event.addListener(smagwindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});


	var mtc = new google.maps.Marker({
		position: {lat: 1.2835401, lng: 103.8270143},
		map: map,
		title: 'mtc',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var mtcwindow = new google.maps.InfoWindow({
		content: '<div class="iw-container container"><h4 class="title">Make The Change</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/mtc.jpg"><div class="lj-description col">Make The Change is an innovative spin-off from the private design academy, M.A.D. School. MTC strongly believes in empowering and transforming the community through design, thus it organises programmes like Entrepreneurship 101 to inspire youths to become change makers within the community. Participants will understand how this social enterprise tackles pertinent social problems in today’s world. </div></div></div>'
	});
	mtc.addListener('mouseover', function() {
		mtcwindow.open(map, mtc);
	});
	mtc.addListener('mouseout',function() {
		mtcwindow.close(map, mtc);
	});
	mtc.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.close(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.open(map, mtc),
		rvhswindow.close(map, rvhs);
	});
	google.maps.event.addListener(mtcwindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});


	var rvhs = new google.maps.Marker({
		position: {lat: 1.3439106, lng: 103.7096272},
		map: map,
		title: 'River Valley High School',
		icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
	});
	var rvhswindow = new google.maps.InfoWindow({
		content: '<div class="iw-container"><h4 class="title">RIVER VALLEY HIGH SCHOOL (RVHS)</h4><div class="row"><img class="popover-image col-auto" height="100%" width="100%" src="../static/programs/rvhs.png"><div class="lj-description col">The location in which YLEAD 2019 is held. Founded in 1956, River Valley High School is a forward-looking educational institution steeped in history and eastern culture. Since it was founded more than 55 years ago, RVHS has nurtured many generations of Singaporeans and has garnered many awards and accolades.</div></div></div>'
	});
	rvhs.addListener('mouseover', function() {
		rvhswindow.open(map, rvhs);
	});
	rvhs.addListener('mouseout',function() {
		rvhswindow.close(map, rvhs);
	});
	rvhs.addListener('click', function() {
		fusionopoliswindow.close(map, fusionopolis),
		smgwindow.close(map, smg),
		shgwindow.close(map, shg),
		hdgwindow.close(map, hdg),
		smagwindow.close(map, smag),
		mtcwindow.close(map, mtc),
		rvhswindow.open(map, rvhs);
	});
	google.maps.event.addListener(rvhswindow, 'domready', function() {
		var iwOuter = $('.gm-style-iw');
		var iwBackground = iwOuter.prev();
		iwBackground.children(':nth-child(2)').css({'display' : 'none'});
		iwBackground.children(':nth-child(4)').css({'display' : 'none'});
		var iwCloseBtn = iwOuter.next();
		iwCloseBtn.css({ 'display': 'none', });
	});

	google.maps.event.addListener(map, 'zoom_changed', function () {
		if (map.getZoom() < 11) map.setZoom(11);
	});
	var strictBounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(1.243911, 103.659627),
		new google.maps.LatLng(1.443911, 103.959627)
	);
	google.maps.event.addListener(map, 'center_changed', function () {
		if (strictBounds.contains(map.getCenter())) 
			return;
		var c = map.getCenter(),
			x = c.lng(),
			y = c.lat(),
			maxX = strictBounds.getNorthEast().lng(),
			maxY = strictBounds.getNorthEast().lat(),
			minX = strictBounds.getSouthWest().lng(),
			minY = strictBounds.getSouthWest().lat();
		if (x < minX) x = minX;
		if (x > maxX) x = maxX;
		if (y < minY) y = minY;
		if (y > maxY) y = maxY;
		map.setCenter(new google.maps.LatLng(y, x));
	});
	var carousel5 = $(".carousel-5"),
		currdeg1  = 0;
	$(".next5").on("click", { d: "n" }, rotate5);
	$(".prev5").on("click", { d: "p" }, rotate5);
	function rotate5(e){
		if(e.data.d=="n"){
			currdeg1 = currdeg1 - 72;
		}
		if(e.data.d=="p"){
			currdeg1 = currdeg1 + 72;
		}
		carousel5.css({
			"-webkit-transform": "rotateY("+currdeg1+"deg)",
			"-moz-transform": "rotateY("+currdeg1+"deg)",
			"-o-transform": "rotateY("+currdeg1+"deg)",
			"transform": "rotateY("+currdeg1+"deg)"
		});
	}
	var carousel3 = $(".carousel-3"),
		currdeg2  = 0;
	$(".next3").on("click", { d: "n" }, rotate3);
	$(".prev3").on("click", { d: "p" }, rotate3);
	function rotate3(e){
		if(e.data.d=="n"){
			currdeg2 = currdeg2 - 120;
		}
		if(e.data.d=="p"){
			currdeg2 = currdeg2 + 120;
		}
		carousel3.css({
			"-webkit-transform": "rotateY("+currdeg2+"deg)",
			"-moz-transform": "rotateY("+currdeg2+"deg)",
			"-o-transform": "rotateY("+currdeg2+"deg)",
			"transform": "rotateY("+currdeg2+"deg)"
		});
	}
	var carousel4 = $(".carousel-4"),
		currdeg3  = 0;
	$(".next4").on("click", { d: "n" }, rotate4);
	$(".prev4").on("click", { d: "p" }, rotate4);
	function rotate4(e){
		if(e.data.d=="n"){
			currdeg3 = currdeg3 - 90;
		}
		if(e.data.d=="p"){
			currdeg3 = currdeg3 + 90;
		}
		carousel4.css({
			"-webkit-transform": "rotateY("+currdeg3+"deg)",
			"-moz-transform": "rotateY("+currdeg3+"deg)",
			"-o-transform": "rotateY("+currdeg3+"deg)",
			"transform": "rotateY("+currdeg3+"deg)"
		});
	}

	$("#reflection-1-1").hover(function(){
		$("#text-1-1").stop().fadeIn()
	});
	$("#reflection-1-1").mouseleave(function(){
		$("#text-1-1").stop().fadeOut()
	});
	$("#reflection-1-2").hover(function(){
		$("#text-1-2").stop().fadeIn()
	});
	$("#reflection-1-2").mouseleave(function(){
		$("#text-1-2").stop().fadeOut()
	});
	$("#reflection-1-3").hover(function(){
		$("#text-1-3").stop().fadeIn()
	});
	$("#reflection-1-3").mouseleave(function(){
		$("#text-1-3").stop().fadeOut()
	});
	$("#reflection-1-4").hover(function(){
		$("#text-1-4").stop().fadeIn()
	});
	$("#reflection-1-4").mouseleave(function(){
		$("#text-1-4").stop().fadeOut()
	});
	$("#reflection-1-5").hover(function(){
		$("#text-1-5").stop().fadeIn()
	});
	$("#reflection-1-5").mouseleave(function(){
		$("#text-1-5").stop().fadeOut()
	});

	$("#reflection-2-1").hover(function(){
		$("#text-2-1").stop().fadeIn()
	});
	$("#reflection-2-1").mouseleave(function(){
		$("#text-2-1").stop().fadeOut()
	});
	$("#reflection-2-2").hover(function(){
		$("#text-2-2").stop().fadeIn()
	});
	$("#reflection-2-2").mouseleave(function(){
		$("#text-2-2").stop().fadeOut()
	});
	$("#reflection-2-3").hover(function(){
		$("#text-2-3").stop().fadeIn()
	});
	$("#reflection-2-3").mouseleave(function(){
		$("#text-2-3").stop().fadeOut()
	});
	$("#reflection-2-4").hover(function(){
		$("#text-2-4").stop().fadeIn()
	});
	$("#reflection-2-4").mouseleave(function(){
		$("#text-2-4").stop().fadeOut()
	});
	$("#reflection-2-5").hover(function(){
		$("#text-2-5").stop().fadeIn()
	});
	$("#reflection-2-5").mouseleave(function(){
		$("#text-2-5").stop().fadeOut()
	});

	$("#reflection-3-1").hover(function(){
		$("#text-3-1").stop().fadeIn()
	});
	$("#reflection-3-1").mouseleave(function(){
		$("#text-3-1").stop().fadeOut()
	});
	$("#reflection-3-2").hover(function(){
		$("#text-3-2").stop().fadeIn()
	});
	$("#reflection-3-2").mouseleave(function(){
		$("#text-3-2").stop().fadeOut()
	});
	$("#reflection-3-3").hover(function(){
		$("#text-3-3").stop().fadeIn()
	});
	$("#reflection-3-3").mouseleave(function(){
		$("#text-3-3").stop().fadeOut()
	});

	$("#reflection-4-1").hover(function(){
		$("#text-4-1").stop().fadeIn()
	});
	$("#reflection-4-1").mouseleave(function(){
		$("#text-4-1").stop().fadeOut()
	});
	$("#reflection-4-2").hover(function(){
		$("#text-4-2").stop().fadeIn()
	});
	$("#reflection-4-2").mouseleave(function(){
		$("#text-4-2").stop().fadeOut()
	});
	$("#reflection-4-3").hover(function(){
		$("#text-4-3").stop().fadeIn()
	});
	$("#reflection-4-3").mouseleave(function(){
		$("#text-4-3").stop().fadeOut()
	});

	$("#reflection-5-1").hover(function(){
		$("#text-5-1").stop().fadeIn()
	});
	$("#reflection-5-1").mouseleave(function(){
		$("#text-5-1").stop().fadeOut()
	});
	$("#reflection-5-2").hover(function(){
		$("#text-5-2").stop().fadeIn()
	});
	$("#reflection-5-2").mouseleave(function(){
		$("#text-5-2").stop().fadeOut()
	});
	$("#reflection-5-3").hover(function(){
		$("#text-5-3").stop().fadeIn()
	});
	$("#reflection-5-3").mouseleave(function(){
		$("#text-5-3").stop().fadeOut()
	});
	$("#reflection-5-4").hover(function(){
		$("#text-5-4").stop().fadeIn()
	});
	$("#reflection-5-4").mouseleave(function(){
		$("#text-5-4").stop().fadeOut()
	});

}

