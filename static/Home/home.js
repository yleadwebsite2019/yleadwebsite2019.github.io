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


$("#loading-1").fadeIn(200);
$("#loading-2").delay(100).fadeIn(200);
$("#loading-3").delay(200).fadeIn(200);
$("#loading-4").delay(300).fadeIn(200);
$("#loading-5").delay(400).fadeIn(200);
$("#loading-6").delay(500).fadeIn(200);
$("#loading-7").delay(600).fadeIn(200);
$("#loading-8").delay(700).fadeIn(200);
$("#loading-9").delay(800).fadeIn(200);
$("#loading-10").delay(900).fadeIn(200);
$("#loading-11").delay(1000).fadeIn(200);
$("#loading-12").delay(1100).fadeIn(200);
$("#loading-13").delay(1200).fadeIn(200);
$("#loading-14").delay(1300).fadeIn(200);
$("#loading-15").delay(1400).fadeIn(200);
$("#loading-16").delay(1500).fadeIn(200);
$("#loading-17").delay(1600).fadeIn(200);
$("#loading-18").delay(1700).fadeIn(200);
$("#loading-19").delay(1800).fadeIn(200);
$("#loading-20").delay(1900).fadeIn(200);
$("#loading-21").delay(2000).fadeIn(200);
$("#loading-22").delay(2100).fadeIn(200);
$("#loading-screen").delay(2600).fadeOut(1000);

$(document).ready(function(){
	var countDownDate = new Date("July 22, 2019 07:30:00").getTime();
	var x = setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		document.getElementById("countdown_days").innerHTML = days ;
		document.getElementById("countdown_hours").innerHTML = hours ;
		document.getElementById("countdown_minutes").innerHTML = minutes;
		document.getElementById("countdown_seconds").innerHTML = seconds;
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown-timer").innerHTML = "Y.LEAD 2018 HAS ENDED!";
		}
	}, 1000);
	;(function($, window, document, undefined){
		var pluginName = 'circleMenu',
			defaults = {
				depth: 0,
				item_diameter: 30,
				circle_radius: 80,
				angle:{
					start: 0,
					end: 90
				},
				speed: 500,
				delay: 1000,
				step_out: 20,
				step_in: -20,
				trigger: 'hover',
				transition_function: 'ease'
			};

		function vendorPrefixes(items,prop,value){
			['-webkit-','-moz-','-o-','-ms-',''].forEach(function(prefix){
				items.css(prefix+prop,value);
			});
		}

		function CircleMenu(element, options){
			this._timeouts = [];
			this.element = $(element);
			this.options = $.extend({}, defaults, options);
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
			this.hook();
		}

		CircleMenu.prototype.init = function(){
			var self = this,
				directions = {
					'bottom-half':[180,0],
				},
				dir;

			self._state = 'closed';
			self.element.addClass(pluginName+'-closed');

			if(typeof self.options.direction === 'string'){
				dir = directions[self.options.direction.toLowerCase()];
				if(dir){
					self.options.angle.start = dir[0];
					self.options.angle.end = dir[1];
				}
			}

			self.menu_items = self.element.children('li:not(:first-child)');
			self.initCss();
			self.item_count = self.menu_items.length;
			self._step = (self.options.angle.end - self.options.angle.start) / (self.item_count-1);
			self.menu_items.each(function(index){
				var $item = $(this),
					angle = (self.options.angle.start + (self._step * index)) * (Math.PI/180),
					x = Math.round(self.options.circle_radius * Math.cos(angle)),
					y = Math.round(self.options.circle_radius * Math.sin(angle));

				$item.data('plugin_'+pluginName+'-pos-x', x);
				$item.data('plugin_'+pluginName+'-pos-y', y);
				$item.on('click', function(){
					self.select(index+2);
				});
			});

			// Initialize event hooks from options
			['open','close','init','select'].forEach(function(evt){
				var fn;

				if(self.options[evt]){
					fn = self.options[evt];
					self.element.on(pluginName+'-'+evt, function(){
						return fn.apply(self,arguments);
					});
					delete self.options[evt];
				}
			});

			self.submenus = self.menu_items.children('ul');
			self.submenus.circleMenu($.extend({},self.options,{depth:self.options.depth+1}));

			self.trigger('init');
		};
		CircleMenu.prototype.trigger = function(){
			var args = [],
				i, len;

			for(i = 0, len = arguments.length; i < len; i++){
				args.push(arguments[i]);
			}
			this.element.trigger(pluginName+'-'+args.shift(), args);
		};
		CircleMenu.prototype.hook = function(){
			var self = this;

			if(self.options.trigger === 'hover'){
				self.element.on('mouseenter',function(evt){
					self.open();
				}).on('mouseleave',function(evt){
					self.close();
				});
			}else if(self.options.trigger === 'click'){
				self.element.children('li:first-child').on('click',function(evt){
					evt.preventDefault();
					if(self._state === 'closed' || self._state === 'closing'){
						self.open();
					}else{
						self.close(true);
					}
					return false;
				});
			}else if(self.options.trigger === 'none'){
				// Do nothing
			}
		};
		CircleMenu.prototype.open = function(){
			var self = this,
				$self = this.element,
				start = 0,
				set;

			self.clearTimeouts();
			if(self._state === 'open') return self;
			$self.addClass(pluginName+'-open');
			$self.removeClass(pluginName+'-closed');
			if(self.options.step_out >= 0){
				set = self.menu_items;
			}else{
				set = $(self.menu_items.get().reverse());
			}
			set.each(function(index){
				var $item = $(this);

				self._timeouts.push(setTimeout(function(){
					$item.css({
						left: $item.data('plugin_'+pluginName+'-pos-x')+'px',
						top: $item.data('plugin_'+pluginName+'-pos-y')+'px'
					});
					vendorPrefixes($item,'transform','scale(1)');
				}, start + Math.abs(self.options.step_out) * index));
			});
			self._timeouts.push(setTimeout(function(){
				if(self._state === 'opening') self.trigger('open');
				self._state = 'open';
			},start+Math.abs(self.options.step_out) * set.length));
			self._state = 'opening';
			return self;
		};
		CircleMenu.prototype.close = function(immediate){
			var self = this,
				$self = this.element,
				do_animation = function do_animation(){
				var start = 0,
					set;

				self.submenus.circleMenu('close');
				self.clearTimeouts();
				if(self._state === 'closed') return self;
				if(self.options.step_in >= 0){
					set = self.menu_items;
				}else{
					set = $(self.menu_items.get().reverse());
				}
				set.each(function(index){
					var $item = $(this);

					self._timeouts.push(setTimeout(function(){
						$item.css({top:0,left:0});
						vendorPrefixes($item,'transform','scale(.5)');
					}, start + Math.abs(self.options.step_in) * index));
				});
				self._timeouts.push(setTimeout(function(){
					if(self._state === 'closing') self.trigger('close');
					self._state = 'closed';
				},start+Math.abs(self.options.step_in) * set.length));
				$self.removeClass(pluginName+'-open');
				$self.addClass(pluginName+'-closed');
				self._state = 'closing';
				return self;
			};
			if(immediate){
				do_animation();
			}else{
				self._timeouts.push(setTimeout(do_animation,self.options.delay));
			}
			return this;
		};
		CircleMenu.prototype.select = function(index){
			var self = this,
				selected, set_other;

			if(self._state === 'open' || self._state === 'opening'){
				self.clearTimeouts();
				set_other = self.element.children('li:not(:nth-child('+index+'),:first-child)');
				selected = self.element.children('li:nth-child('+index+')');
				self.trigger('select',selected);
				vendorPrefixes(selected.add(set_other), 'transition', 'all 500ms ease-out');
				vendorPrefixes(selected, 'transform', 'scale(2)');
				vendorPrefixes(set_other, 'transform', 'scale(0)');
				selected.css('opacity','0');
				set_other.css('opacity','0');
				self.element.removeClass(pluginName+'-open');
				setTimeout(function(){self.initCss();},500);
			}
		};
		CircleMenu.prototype.clearTimeouts = function(){
			var timeout;

			while(timeout = this._timeouts.shift()){
				clearTimeout(timeout);
			}
		};
		CircleMenu.prototype.initCss = function(){
			var self = this, 
				$items;

			self._state = 'closed';
			self.element.removeClass(pluginName+'-open');
			self.element.css({
				'list-style': 'none',
				'margin': 0,
				'padding': 0,
				'width': self.options.item_diameter+'px'
			});
			$items = self.element.children('li');
			$items.attr('style','');
			$items.css({
				'display': 'block',
				'width': self.options.item_diameter+'px',
				'height': self.options.item_diameter+'px',
				'text-align': 'center',
				'line-height': self.options.item_diameter+'px',
				'position': 'absolute',
				'z-index': 1,
				'opacity': ''
			});
			self.element.children('li:first-child').css({'z-index': 1000-self.options.depth});
			self.menu_items.css({
				top:0,
				left:0
			});
			vendorPrefixes($items, 'border-radius', self.options.item_diameter+'px');
			vendorPrefixes(self.menu_items, 'transform', 'scale(.5)');
			setTimeout(function(){
				vendorPrefixes($items, 'transition', 'all '+self.options.speed+'ms '+self.options.transition_function);
			},0);
		};

		$.fn[pluginName] = function(options){
			return this.each(function(){
				var obj = $.data(this, 'plugin_'+pluginName),
					commands = {
					'init':function(){obj.init();},
					'open':function(){obj.open();},
					'close':function(){obj.close(true);}
				};
				if(typeof options === 'string' && obj && commands[options]){
					commands[options]();
				}
				if(!obj){
					$.data(this, 'plugin_' + pluginName, new CircleMenu(this, options));
				}
			});
		};
	})(jQuery, window, document);
	$('#modal-video-background').click(function(e){
		if ($(e.target).closest('#modal-video').length ===0){
			$('#modal-video-background').fadeOut(),
			$('#massdance')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		};
	});
	$('#dot').click(function(){
		$('#modal-video-background').fadeIn();
	});
});