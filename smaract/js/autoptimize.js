/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
	function(a, b, c) {
		function d(c) {
			var d = b.console;
			f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
		}

		function e(b, c, e, f) {
			if(Object.defineProperty) try {
				return void Object.defineProperty(b, c, {
					configurable: !0,
					enumerable: !0,
					get: function() {
						return d(f), e
					},
					set: function(a) {
						d(f), e = a
					}
				})
			} catch(g) {}
			a._definePropertyBroken = !0, b[c] = e
		}
		a.migrateVersion = "1.4.1";
		var f = {};
		a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
			f = {}, a.migrateWarnings.length = 0
		}, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
		var g = a("<input/>", {
				size: 1
			}).attr("size") && a.attrFn,
			h = a.attr,
			i = a.attrHooks.value && a.attrHooks.value.get || function() {
				return null
			},
			j = a.attrHooks.value && a.attrHooks.value.set || function() {
				return c
			},
			k = /^(?:input|button)$/i,
			l = /^[238]$/,
			m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
			n = /^(?:checked|selected)$/i;
		e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
			var j = e.toLowerCase(),
				o = b && b.nodeType;
			return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
				get: function(b, d) {
					var e, f = a.prop(b, d);
					return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
				},
				set: function(b, c, d) {
					var e;
					return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
				}
			}, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
		}, a.attrHooks.value = {
			get: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
			},
			set: function(a, b) {
				var c = (a.nodeName || "").toLowerCase();
				return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
			}
		};
		var o, p, q = a.fn.init,
			r = a.find,
			s = a.parseJSON,
			t = /^\s*</,
			u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
			v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
			w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
		a.fn.init = function(b, e, f) {
			var g, h;
			return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
		}, a.fn.init.prototype = a.fn, a.find = function(a) {
			var b = Array.prototype.slice.call(arguments);
			if("string" == typeof a && u.test(a)) try {
				document.querySelector(a)
			} catch(c) {
				a = a.replace(v, function(a, b, c, d) {
					return "[" + b + c + '"' + d + '"]'
				});
				try {
					document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
				} catch(e) {
					d("Attribute selector with '#' was not fixed: " + b[0])
				}
			}
			return r.apply(this, b)
		};
		var x;
		for(x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
		a.parseJSON = function(a) {
			return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
		}, a.uaMatch = function(a) {
			a = a.toLowerCase();
			var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: b[1] || "",
				version: b[2] || "0"
			}
		}, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
			function b(a, c) {
				return new b.fn.init(a, c)
			}
			a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
				var f = a.fn.init.call(this, d, e, c);
				return f instanceof b ? f : b(f)
			}, b.fn.init.prototype = b.fn;
			var c = b(document);
			return d("jQuery.sub() is deprecated"), b
		}, a.fn.size = function() {
			return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
		};
		var y = !1;
		a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
			var d = a.cssHooks[c] && a.cssHooks[c].get;
			d && (a.cssHooks[c].get = function() {
				var a;
				return y = !0, a = d.apply(this, arguments), y = !1, a
			})
		}), a.swap = function(a, b, c, e) {
			var f, g, h = {};
			y || d("jQuery.swap() is undocumented and deprecated");
			for(g in b) h[g] = a.style[g], a.style[g] = b[g];
			f = c.apply(a, e || []);
			for(g in b) a.style[g] = h[g];
			return f
		}, a.ajaxSetup({
			converters: {
				"text json": a.parseJSON
			}
		});
		var z = a.fn.data;
		a.fn.data = function(b) {
			var e, f, g = this[0];
			return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
		};
		var A = /\/(java|ecma)script/i;
		a.clean || (a.clean = function(b, c, e, f) {
			c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
			var g, h, i, j, k = [];
			if(a.merge(k, a.buildFragment(b, c).childNodes), e)
				for(i = function(a) {
						return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
					}, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
			return k
		});
		var B = a.event.add,
			C = a.event.remove,
			D = a.event.trigger,
			E = a.fn.toggle,
			F = a.fn.live,
			G = a.fn.die,
			H = a.fn.load,
			I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
			J = new RegExp("\\b(?:" + I + ")\\b"),
			K = /(?:^|\s)hover(\.\S+|)\b/,
			L = function(b) {
				return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
			};
		a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
			a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
		}, a.event.remove = function(a, b, c, d, e) {
			C.call(this, a, L(b) || "", c, d, e)
		}, a.each(["load", "unload", "error"], function(b, c) {
			a.fn[c] = function() {
				var a = Array.prototype.slice.call(arguments, 0);
				return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
			}
		}), a.fn.toggle = function(b, c) {
			if(!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
			d("jQuery.fn.toggle(handler, handler...) is deprecated");
			var e = arguments,
				f = b.guid || a.guid++,
				g = 0,
				h = function(c) {
					var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
					return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
				};
			for(h.guid = f; g < e.length;) e[g++].guid = f;
			return this.click(h)
		}, a.fn.live = function(b, c, e) {
			return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
		}, a.fn.die = function(b, c) {
			return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
		}, a.event.trigger = function(a, b, c, e) {
			return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
		}, a.each(I.split("|"), function(b, c) {
			a.event.special[c] = {
				setup: function() {
					var b = this;
					return b !== document && (a.event.add(document, c + "." + a.guid, function() {
						a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
					}), a._data(this, c, a.guid++)), !1
				},
				teardown: function() {
					return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
				}
			}
		}), a.event.special.ready = {
			setup: function() {
				this === document && d("'ready' event is deprecated")
			}
		};
		var M = a.fn.andSelf || a.fn.addBack,
			N = a.fn.find;
		if(a.fn.andSelf = function() {
				return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
			}, a.fn.find = function(a) {
				var b = N.apply(this, arguments);
				return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
			}, a.Callbacks) {
			var O = a.Deferred,
				P = [
					["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
					["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
					["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
				];
			a.Deferred = function(b) {
				var c = O(),
					e = c.promise();
				return c.pipe = e.pipe = function() {
					var b = arguments;
					return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
						a.each(P, function(f, g) {
							var h = a.isFunction(b[f]) && b[f];
							c[g[1]](function() {
								var b = h && h.apply(this, arguments);
								b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
							})
						}), b = null
					}).promise()
				}, c.isResolved = function() {
					return d("deferred.isResolved is deprecated"), "resolved" === c.state()
				}, c.isRejected = function() {
					return d("deferred.isRejected is deprecated"), "rejected" === c.state()
				}, b && b.call(c, c), c
			}
		}
	}(jQuery, window);
var mecSingleEventDisplayer = {
	getSinglePage: function(id, occurrence, ajaxurl, layout) {
		if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
		jQuery('.mec-modal-result').addClass('mec-modal-preloader');
		jQuery.ajax({
			url: ajaxurl,
			data: "action=mec_load_single_page&id=" + id + (occurrence != null ? "&occurrence=" + occurrence : "") + "&layout=" + layout,
			type: "get",
			success: function(response) {
				jQuery('.mec-modal-result').removeClass("mec-modal-preloader");
				lity(response);
			},
			error: function() {}
		});
	}
};
(function($) {
	$.fn.mecSearchForm = function(options) {
		var settings = $.extend({
			id: 0,
			search_form_element: '',
			atts: '',
			callback: function() {}
		}, options);
		$("#mec_sf_category_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_location_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_organizer_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_label_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_s_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_month_" + settings.id).on('change', function(e) {
			search();
		});
		$("#mec_sf_year_" + settings.id).on('change', function(e) {
			if($("#mec_sf_month_" + settings.id).val() === 'ignore_date') $("#mec_sf_month_" + settings.id).val('01');
			search();
		});

		function search() {
			var s = $("#mec_sf_s_" + settings.id).length ? $("#mec_sf_s_" + settings.id).val() : '';
			var category = $("#mec_sf_category_" + settings.id).length ? $("#mec_sf_category_" + settings.id).val() : '';
			var location = $("#mec_sf_location_" + settings.id).length ? $("#mec_sf_location_" + settings.id).val() : '';
			var organizer = $("#mec_sf_organizer_" + settings.id).length ? $("#mec_sf_organizer_" + settings.id).val() : '';
			var label = $("#mec_sf_label_" + settings.id).length ? $("#mec_sf_label_" + settings.id).val() : '';
			var month = $("#mec_sf_month_" + settings.id).length ? $("#mec_sf_month_" + settings.id).val() : '';
			var year = $("#mec_sf_year_" + settings.id).length ? $("#mec_sf_year_" + settings.id).val() : '';
			var skip_date = false;
			if(month === 'ignore_date') skip_date = true;
			if(skip_date === true) {
				month = '';
				year = '';
			}
			var atts = settings.atts + '&sf[s]=' + s + '&sf[month]=' + month + '&sf[year]=' + year + '&sf[category]=' + category + '&sf[location]=' + location + '&sf[organizer]=' + organizer + '&sf[label]=' + label;
			settings.callback(atts);
		}
	};
}(jQuery));
(function($) {
	$.fn.mecGoogleMaps = function(options) {
		var settings = $.extend({
			latitude: 0,
			longitude: 0,
			autoinit: true,
			zoom: 14,
			icon: '../img/m-01.png',
			markers: {},
			sf: {},
			HTML5geolocation: 0,
			getDirection: 0,
			directionOptions: {
				form: '#mec_get_direction_form',
				reset: '.mec-map-get-direction-reset',
				addr: '#mec_get_direction_addr',
				destination: {},
			},
		}, options);
		var bounds;
		var map;
		var infowindow;
		var loadedMarkers = new Array();
		var canvas = this;
		var DOM = canvas[0];
		if(settings.autoinit) init();

		function init() {
			if(settings.sf.container !== '') {
				$(settings.sf.container).mecSearchForm({
					id: settings.id,
					atts: settings.atts,
					callback: function(atts) {
						settings.atts = atts;
						getMarkers();
					}
				});
			}
			bounds = new google.maps.LatLngBounds();
			var center = new google.maps.LatLng(settings.latitude, settings.longitude);
			var mapOptions = {
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				center: center,
				zoom: settings.zoom,
				styles: settings.styles,
			};
			map = new google.maps.Map(DOM, mapOptions);
			infowindow = new google.maps.InfoWindow({
				pixelOffset: new google.maps.Size(0, -37)
			});
			loadMarkers(settings.markers);
			if(settings.getDirection === 1) initSimpleGetDirection();
			else if(settings.getDirection === 2) initAdvancedGetDirection();
			if(settings.HTML5geolocation && navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					var zoom = map.getZoom();
					if(zoom <= 6) zoom = zoom + 5;
					else if(zoom <= 10) zoom = zoom + 3;
					else if(zoom <= 14) zoom = zoom + 2;
					else if(zoom <= 18) zoom = zoom + 1;
					map.panTo(center);
					map.setZoom(zoom);
				});
			}
		}

		function loadMarkers(markers) {
			var f = 0;
			for(var i in markers) {
				f++;
				var dataMarker = markers[i];
				var marker = new RichMarker({
					position: new google.maps.LatLng(dataMarker.latitude, dataMarker.longitude),
					map: map,
					event_ids: dataMarker.event_ids,
					infowindow: dataMarker.infowindow,
					lightbox: dataMarker.lightbox,
					icon: (dataMarker.icon ? dataMarker.icon : settings.icon),
					content: '<div class="mec-marker-container"><span class="mec-marker-wrap"><span class="mec-marker">' + dataMarker.count + '</span><span class="mec-marker-pulse-wrap"><span class="mec-marker-pulse"></span></span></span></div>',
					shadow: 'none'
				});
				google.maps.event.addListener(marker, 'mouseover', function(event) {
					infowindow.close();
					infowindow.setContent(this.infowindow);
					infowindow.open(map, this);
				});
				google.maps.event.addListener(marker, 'click', function(event) {
					lity(this.lightbox);
				});
				bounds.extend(marker.position);
				loadedMarkers.push(marker);
			}
			if(f > 1) map.fitBounds(bounds);
			if(f === 1) {
				map.setCenter(new google.maps.LatLng(dataMarker.latitude, dataMarker.longitude));
			}
		}

		function getMarkers() {
			$("#mec_googlemap_canvas" + settings.id).addClass("mec-loading");
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_map_get_markers&" + settings.atts,
				dataType: "json",
				type: "post",
				success: function(response) {
					removeMarkers();
					loadMarkers(response.markers);
					$("#mec_googlemap_canvas" + settings.id).removeClass("mec-loading");
				},
				error: function() {
					$("#mec_googlemap_canvas" + settings.id).removeClass("mec-loading");
				}
			});
		}

		function removeMarkers() {
			bounds = new google.maps.LatLngBounds();
			if(loadedMarkers) {
				for(i = 0; i < loadedMarkers.length; i++) loadedMarkers[i].setMap(null);
				loadedMarkers.length = 0;
			}
		}
		var directionsDisplay;
		var directionsService;
		var startMarker;
		var endMarker;

		function initSimpleGetDirection() {
			$(settings.directionOptions.form).on('submit', function(event) {
				event.preventDefault();
				var from = $(settings.directionOptions.addr).val();
				var dest = new google.maps.LatLng(settings.directionOptions.destination.latitude, settings.directionOptions.destination.longitude);
				if(typeof directionsDisplay !== 'undefined') {
					directionsDisplay.setMap(null);
					startMarker.setMap(null);
					endMarker.setMap(null);
				}
				$(canvas).fadeTo(300, .4);
				directionsDisplay = new google.maps.DirectionsRenderer({
					suppressMarkers: true
				});
				directionsService = new google.maps.DirectionsService();
				var request = {
					origin: from,
					destination: dest,
					travelMode: google.maps.DirectionsTravelMode.DRIVING
				};
				directionsService.route(request, function(response, status) {
					if(status === google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
						directionsDisplay.setMap(map);
						var leg = response.routes[0].legs[0];
						startMarker = new google.maps.Marker({
							position: leg.start_location,
							map: map,
							icon: settings.directionOptions.startMarker,
						});
						endMarker = new google.maps.Marker({
							position: leg.end_location,
							map: map,
							icon: settings.directionOptions.endMarker,
						});
					}
					$(canvas).fadeTo(300, 1);
				});
				$(settings.directionOptions.reset).removeClass('mec-util-hidden');
			});
			$(settings.directionOptions.reset).on('click', function(event) {
				$(settings.directionOptions.addr).val('');
				$(settings.directionOptions.form).submit();
				$(settings.directionOptions.reset).addClass('mec-util-hidden');
			});
		}

		function initAdvancedGetDirection() {
			$(settings.directionOptions.form).on('submit', function(event) {
				event.preventDefault();
				var from = $(settings.directionOptions.addr).val();
				var url = 'https://maps.google.com/?saddr=' + encodeURIComponent(from) + '&daddr=' + settings.directionOptions.destination.latitude + ',' + settings.directionOptions.destination.longitude;
				window.open(url);
			});
		}
		return {
			init: function() {
				init();
			}
		};
	};
}(jQuery));
(function($) {
	$.fn.mecFullCalendar = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			skin: '',
		}, options);
		setListeners();
		var sf;

		function setListeners() {
			if(settings.sf.container !== '') {
				sf = $(settings.sf.container).mecSearchForm({
					id: settings.id,
					atts: settings.atts,
					callback: function(atts) {
						settings.atts = atts;
						search();
					}
				});
			}
			$("#mec_skin_" + settings.id + " .mec-totalcal-box .mec-totalcal-view span").on('click', function(e) {
				e.preventDefault();
				var skin = $(this).data('skin');
				$(this).addClass('mec-totalcalview-selected').siblings().removeClass('mec-totalcalview-selected');
				loadSkin(skin);
			});
		}

		function loadSkin(skin) {
			settings.skin = skin;
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_full_calendar_switch_skin&skin=" + skin + "&" + settings.atts + "&apply_sf_date=1&sed=" + settings.sed_method,
				dataType: "json",
				type: "post",
				success: function(response) {
					$("#mec_full_calendar_container_" + settings.id).html(response);
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
				},
				error: function() {}
			});
		}

		function search() {
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_full_calendar_switch_skin&skin=" + settings.skin + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					$("#mec_full_calendar_container_" + settings.id).html(response);
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
				},
				error: function() {}
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecYearlyView = function(options) {
		var active_year;
		var settings = $.extend({
			today: null,
			id: 0,
			events_label: 'Events',
			event_label: 'Event',
			year_navigator: 0,
			atts: '',
			next_year: {},
			sf: {},
			ajax_url: '',
		}, options);
		if(settings.year_navigator) initYearNavigator();
		if(settings.year_navigator) setYear(settings.next_year.year, true);
		setListeners();
		$(document).on("click", "#mec_skin_events_" + settings.id + " .mec-load-more-button", function() {
			var year = $(this).parent().parent().parent().data('year-id');
			loadMoreButton(year);
		});
		if(settings.sf.container !== '') {
			sf = $(settings.sf.container).mecSearchForm({
				id: settings.id,
				atts: settings.atts,
				callback: function(atts) {
					settings.atts = atts;
					search(active_year);
				}
			});
		}

		function initYearNavigator() {
			$("#mec_skin_" + settings.id + " .mec-load-year").off("click");
			$("#mec_skin_" + settings.id + " .mec-load-year").on("click", function() {
				var year = $(this).data("mec-year");
				setYear(year);
			});
		}

		function search(year) {
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_yearly_view_load_year&mec_year=" + year + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					active_year = response.current_year.year;
					$("#mec_skin_events_" + settings.id).html('<div class="mec-year-container" id="mec_yearly_view_year_' + settings.id + '_' + response.current_year.id + '" data-year-id="' + response.current_year.id + '">' + response.year + '</div>');
					$("#mec_skin_" + settings.id + " .mec-yearly-title-sec").append('<div class="mec-year-navigator" id="mec_year_navigator_' + settings.id + '_' + response.current_year.id + '">' + response.navigator + '</div>');
					initYearNavigator();
					setListeners();
					toggleYear(response.current_year.id);
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
				},
				error: function() {}
			});
		}

		function setYear(year, do_in_background) {
			if(typeof do_in_background === "undefined") do_in_background = false;
			var year_id = year;
			active_year = year;
			if($("#mec_yearly_view_year_" + settings.id + "_" + year_id).length) {
				toggleYear(year_id);
			} else {
				if(!do_in_background) {
					if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
					jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
				}
				$.ajax({
					url: settings.ajax_url,
					data: "action=mec_yearly_view_load_year&mec_year=" + year + "&" + settings.atts + "&apply_sf_date=0",
					dataType: "json",
					type: "post",
					success: function(response) {
						$("#mec_skin_events_" + settings.id).append('<div class="mec-year-container" id="mec_yearly_view_year_' + settings.id + '_' + response.current_year.id + '" data-year-id="' + response.current_year.id + '">' + response.year + '</div>');
						$("#mec_skin_" + settings.id + " .mec-yearly-title-sec").append('<div class="mec-year-navigator" id="mec_year_navigator_' + settings.id + '_' + response.current_year.id + '">' + response.navigator + '</div>');
						initYearNavigator();
						setListeners();
						if(!do_in_background) {
							toggleYear(response.current_year.id);
							$('.mec-modal-result').removeClass("mec-month-navigator-loading");
							$("#mec_sf_year_" + settings.id).val(year);
						} else {
							$("#mec_yearly_view_year_" + settings.id + "_" + response.current_year.id).hide();
							$("#mec_year_navigator_" + settings.id + "_" + response.current_year.id).hide();
						}
					},
					error: function() {}
				});
			}
		}

		function toggleYear(year_id) {
			$("#mec_skin_" + settings.id + " .mec-year-navigator").hide();
			$("#mec_year_navigator_" + settings.id + "_" + year_id).show();
			$("#mec_skin_" + settings.id + " .mec-year-container").hide();
			$("#mec_yearly_view_year_" + settings.id + "_" + year_id).show();
		}
		var sf;

		function setListeners() {
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-agenda-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}

		function loadMoreButton(year) {
			var $max_count, $current_count = 0;
			$max_count = $("#mec_yearly_view_year_" + settings.id + "_" + year + " .mec-yearly-max").data('count');
			$current_count = $("#mec_yearly_view_year_" + settings.id + "_" + year + " .mec-util-hidden").length;
			if($current_count > 10) {
				for(var i = 0; i < 10; i++) {
					$("#mec_yearly_view_year_" + settings.id + "_" + year + " .mec-util-hidden").slice(0, 2).each(function() {
						$(this).removeClass('mec-util-hidden');
					});
				}
			}
			if($current_count < 10 && $current_count != 0) {
				for(var j = 0; j < $current_count; j++) {
					$("#mec_yearly_view_year_" + settings.id + "_" + year + " .mec-util-hidden").slice(0, 2).each(function() {
						$(this).removeClass('mec-util-hidden');
						$("#mec_yearly_view_year_" + settings.id + "_" + year + " .mec-load-more-wrap").css('display', 'none');
					});
				}
			}
		}
	};
}(jQuery));
(function($) {
	$.fn.mecMonthlyView = function(options) {
		var active_month;
		var active_year;
		var settings = $.extend({
			today: null,
			id: 0,
			events_label: 'Events',
			event_label: 'Event',
			month_navigator: 0,
			atts: '',
			active_month: {},
			next_month: {},
			sf: {},
			ajax_url: '',
		}, options);
		if(settings.month_navigator) initMonthNavigator();
		setMonth(settings.next_month.year, settings.next_month.month, true);
		active_month = settings.active_month.month;
		active_year = settings.active_month.year;
		setListeners();
		if(settings.sf.container !== '') {
			sf = $(settings.sf.container).mecSearchForm({
				id: settings.id,
				atts: settings.atts,
				callback: function(atts) {
					settings.atts = atts;
					search(active_year, active_month);
				}
			});
		}

		function initMonthNavigator() {
			$("#mec_skin_" + settings.id + " .mec-load-month").off("click");
			$("#mec_skin_" + settings.id + " .mec-load-month").on("click", function() {
				var year = $(this).data("mec-year");
				var month = $(this).data("mec-month");
				setMonth(year, month);
			});
		}

		function search(year, month) {
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_monthly_view_load_month&mec_year=" + year + "&mec_month=" + month + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					active_month = response.current_month.month;
					active_year = response.current_month.year;
					$("#mec_skin_events_" + settings.id).html('<div class="mec-month-container" id="mec_monthly_view_month_' + settings.id + '_' + response.current_month.id + '" data-month-id="' + response.current_month.id + '">' + response.month + '</div>');
					$("#mec_skin_" + settings.id + " .mec-skin-monthly-view-month-navigator-container").html('<div class="mec-month-navigator" id="mec_month_navigator_' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
					$("#mec_skin_" + settings.id + " .mec-calendar-events-side").html('<div class="mec-month-side" id="mec_month_side_' + settings.id + '_' + response.current_month.id + '">' + response.events_side + '</div>');
					initMonthNavigator();
					setListeners();
					toggleMonth(response.current_month.id);
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
				},
				error: function() {}
			});
		}

		function setMonth(year, month, do_in_background) {
			if(typeof do_in_background === "undefined") do_in_background = false;
			var month_id = year + "" + month;
			if(!do_in_background) {
				active_month = month;
				active_year = year;
			}
			if($("#mec_monthly_view_month_" + settings.id + "_" + month_id).length) {
				toggleMonth(month_id);
			} else {
				if(!do_in_background) {
					if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
					jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
				}
				$.ajax({
					url: settings.ajax_url,
					data: "action=mec_monthly_view_load_month&mec_year=" + year + "&mec_month=" + month + "&" + settings.atts + "&apply_sf_date=0",
					dataType: "json",
					type: "post",
					success: function(response) {
						$("#mec_skin_events_" + settings.id).append('<div class="mec-month-container" id="mec_monthly_view_month_' + settings.id + '_' + response.current_month.id + '" data-month-id="' + response.current_month.id + '">' + response.month + '</div>');
						$("#mec_skin_" + settings.id + " .mec-skin-monthly-view-month-navigator-container").append('<div class="mec-month-navigator" id="mec_month_navigator_' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
						$("#mec_skin_" + settings.id + " .mec-calendar-events-side").append('<div class="mec-month-side" id="mec_month_side_' + settings.id + '_' + response.current_month.id + '">' + response.events_side + '</div>');
						initMonthNavigator();
						setListeners();
						if(!do_in_background) {
							toggleMonth(response.current_month.id);
							$('.mec-modal-result').removeClass("mec-month-navigator-loading");
							$("#mec_sf_month_" + settings.id).val(month);
							$("#mec_sf_year_" + settings.id).val(year);
						} else {
							$("#mec_monthly_view_month_" + settings.id + "_" + response.current_month.id).hide();
							$("#mec_month_navigator_" + settings.id + "_" + response.current_month.id).hide();
							$("#mec_month_side_" + settings.id + "_" + response.current_month.id).hide();
						}
					},
					error: function() {}
				});
			}
		}

		function toggleMonth(month_id) {
			var active_month = $("#mec_skin_" + settings.id + " .mec-month-container-selected").data("month-id");
			var active_day = $("#mec_monthly_view_month_" + settings.id + "_" + active_month + " .mec-selected-day").data("day");
			if(active_day <= 9) active_day = "0" + active_day;
			$("#mec_skin_" + settings.id + " .mec-month-navigator").hide();
			$("#mec_month_navigator_" + settings.id + "_" + month_id).show();
			$("#mec_skin_" + settings.id + " .mec-month-container").hide();
			$("#mec_monthly_view_month_" + settings.id + "_" + month_id).show();
			$("#mec_skin_" + settings.id + " .mec-month-container").removeClass("mec-month-container-selected");
			$("#mec_monthly_view_month_" + settings.id + "_" + month_id).addClass("mec-month-container-selected");
			$("#mec_skin_" + settings.id + " .mec-month-side").hide();
			$("#mec_month_side_" + settings.id + "_" + month_id).show();
		}
		var sf;

		function setListeners() {
			$("#mec_skin_" + settings.id + " .mec-has-event").off("click");
			$("#mec_skin_" + settings.id + " .mec-has-event").on('click', function(e) {
				e.preventDefault();
				var $this = $(this),
					data_mec_cell = $this.data('mec-cell'),
					month_id = $this.data('month');
				$("#mec_monthly_view_month_" + settings.id + "_" + month_id + " .mec-calendar-day").removeClass('mec-selected-day');
				$this.addClass('mec-selected-day');
				$('#mec_month_side_' + settings.id + '_' + month_id + ' .mec-calendar-events-sec:not([data-mec-cell=' + data_mec_cell + '])').slideUp();
				$('#mec_month_side_' + settings.id + '_' + month_id + ' .mec-calendar-events-sec[data-mec-cell=' + data_mec_cell + ']').slideDown();
				$('#mec_monthly_view_month_' + settings.id + '_' + month_id + ' .mec-calendar-events-sec:not([data-mec-cell=' + data_mec_cell + '])').slideUp();
				$('#mec_monthly_view_month_' + settings.id + '_' + month_id + ' .mec-calendar-events-sec[data-mec-cell=' + data_mec_cell + ']').slideDown();
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecWeeklyView = function(options) {
		var active_year;
		var active_month;
		var active_week;
		var active_week_number;
		var settings = $.extend({
			today: null,
			week: 1,
			id: 0,
			changeWeekElement: '.mec-load-week',
			month_navigator: 0,
			atts: '',
			ajax_url: '',
			sf: {}
		}, options);
		if(settings.sf.container !== '') {
			$(settings.sf.container).mecSearchForm({
				id: settings.id,
				atts: settings.atts,
				callback: function(atts) {
					settings.atts = atts;
					search(active_year, active_month, active_week);
				}
			});
		}
		setThisWeek(settings.month_id + settings.week);
		setListeners();
		if(settings.month_navigator) initMonthNavigator(settings.month_id);

		function setListeners() {
			$(settings.changeWeekElement).off('click').on('click', function() {
				var week = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('week-id');
				var max_weeks = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('max-weeks');
				var new_week_number = active_week_number;
				if($(this).hasClass('mec-previous-month')) {
					week = parseInt(week) - 1;
					new_week_number--;
				} else {
					week = parseInt(week) + 1;
					new_week_number++;
				}
				if(new_week_number <= 1 || new_week_number >= max_weeks) {
					$(this).css({
						'opacity': .6,
						'cursor': 'default'
					});
					$(this).find('i').css({
						'opacity': .6,
						'cursor': 'default'
					});
				} else {
					$('#mec_skin_' + settings.id + ' .mec-load-week, #mec_skin_' + settings.id + ' .mec-load-week i').css({
						'opacity': 1,
						'cursor': 'pointer'
					});
				}
				if(new_week_number === 0 || new_week_number > max_weeks) {} else {
					setThisWeek(week);
				}
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function setThisWeek(week) {
			if(!$('#mec_weekly_view_week_' + settings.id + '_' + week).length) {
				return setThisWeek((parseInt(week) - 1));
			}
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-week').removeClass('mec-weekly-view-week-active');
			$('#mec_weekly_view_week_' + settings.id + '_' + week).addClass('mec-weekly-view-week-active');
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-date-events').addClass('mec-util-hidden');
			$('.mec-weekly-view-week-' + settings.id + '-' + week).removeClass('mec-util-hidden');
			active_week = week;
			active_week_number = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('week-number');
			$('#mec_skin_' + settings.id + ' .mec-calendar-d-top').find('.mec-current-week').find('span').remove();
			$('#mec_skin_' + settings.id + ' .mec-calendar-d-top').find('.mec-current-week').append('<span>' + active_week_number + '</span>');
			if(active_week_number === 1) {
				$('#mec_skin_' + settings.id + ' .mec-previous-month.mec-load-week').css({
					'opacity': .6,
					'cursor': 'default'
				});
				$('#mec_skin_' + settings.id + ' .mec-previous-month.mec-load-week').find('i').css({
					'opacity': .6,
					'cursor': 'default'
				});
			}
		}

		function initMonthNavigator(month_id) {
			$('#mec_month_navigator' + settings.id + '_' + month_id + ' .mec-load-month').off('click');
			$('#mec_month_navigator' + settings.id + '_' + month_id + ' .mec-load-month').on('click', function() {
				var year = $(this).data('mec-year');
				var month = $(this).data('mec-month');
				setMonth(year, month, active_week);
			});
		}

		function search(year, month, week) {
			var week_number = (String(week).slice(-1));
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_weekly_view_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_week=" + week_number + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
					$("#mec_skin_events_" + settings.id).html('<div class="mec-month-container" id="mec_weekly_view_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
					$("#mec_skin_" + settings.id + " .mec-skin-weekly-view-month-navigator-container").html('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
					setListeners();
					toggleMonth(response.current_month.id);
					setThisWeek(response.week_id);
				},
				error: function() {}
			});
		}

		function setMonth(year, month, week) {
			var month_id = '' + year + month;
			var week_number = (String(week).slice(-1));
			active_month = month;
			active_year = year;
			if($("#mec_weekly_view_month_" + settings.id + "_" + month_id).length) {
				toggleMonth(month_id);
				setThisWeek('' + month_id + week_number);
			} else {
				if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
				jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
				$.ajax({
					url: settings.ajax_url,
					data: "action=mec_weekly_view_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_week=" + week_number + "&" + settings.atts + "&apply_sf_date=0",
					dataType: "json",
					type: "post",
					success: function(response) {
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_events_" + settings.id).append('<div class="mec-month-container" id="mec_weekly_view_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
						$("#mec_skin_" + settings.id + " .mec-skin-weekly-view-month-navigator-container").append('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
						setListeners();
						toggleMonth(response.current_month.id);
						setThisWeek(response.week_id);
						$("#mec_sf_month_" + settings.id).val(month);
						$("#mec_sf_year_" + settings.id).val(year);
					},
					error: function() {}
				});
			}
		}

		function toggleMonth(month_id) {
			$('#mec_skin_' + settings.id + ' .mec-month-container').addClass('mec-util-hidden');
			$('#mec_weekly_view_month_' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			$('#mec_skin_' + settings.id + ' .mec-month-navigator').addClass('mec-util-hidden');
			$('#mec_month_navigator' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			if(settings.month_navigator) initMonthNavigator(month_id);
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecDailyView = function(options) {
		var active_month;
		var active_year;
		var active_day;
		var settings = $.extend({
			today: null,
			id: 0,
			changeDayElement: '.mec-daily-view-day',
			events_label: 'Events',
			event_label: 'Event',
			month_navigator: 0,
			atts: '',
			ajax_url: '',
			sf: {},
		}, options);
		active_month = settings.month;
		active_year = settings.year;
		active_day = settings.day;
		setToday(settings.today);
		setListeners();
		if(settings.month_navigator) initMonthNavigator(settings.month_id);
		initDaysSlider(settings.month_id);
		if(settings.sf.container !== '') {
			$(settings.sf.container).mecSearchForm({
				id: settings.id,
				atts: settings.atts,
				callback: function(atts) {
					settings.atts = atts;
					search(active_year, active_month, active_day);
				}
			});
		}

		function setListeners() {
			$(settings.changeDayElement).on('click', function() {
				var today = $(this).data('day-id');
				setToday(today);
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}
		var current_monthday;

		function setToday(today) {
			if(!$('#mec_daily_view_day' + settings.id + '_' + today).length) {
				setToday(parseInt(today) - 1);
				return false;
			}
			$('.mec-daily-view-day').removeClass('mec-daily-view-day-active mec-color');
			$('#mec_daily_view_day' + settings.id + '_' + today).addClass('mec-daily-view-day-active mec-color');
			$('.mec-daily-view-date-events').addClass('mec-util-hidden');
			$('#mec_daily_view_date_events' + settings.id + '_' + today).removeClass('mec-util-hidden');
			var weekday = $('#mec_daily_view_day' + settings.id + '_' + today).data('day-weekday');
			var monthday = $('#mec_daily_view_day' + settings.id + '_' + today).data('day-monthday');
			var count = $('#mec_daily_view_day' + settings.id + '_' + today).data('events-count');
			var month_id = $('#mec_daily_view_day' + settings.id + '_' + today).data('month-id');
			$('#mec_today_container' + settings.id + '_' + month_id).html('<h2>' + monthday + '</h2><h3>' + weekday + '</h3><div class="mec-today-count">' + count + ' ' + (count > 1 ? settings.events_label : settings.event_label) + '</div>');
			if(monthday <= 9) current_monthday = '0' + monthday;
			else current_monthday = monthday;
		}

		function initMonthNavigator(month_id) {
			$('#mec_month_navigator' + settings.id + '_' + month_id + ' .mec-load-month').off('click');
			$('#mec_month_navigator' + settings.id + '_' + month_id + ' .mec-load-month').on('click', function() {
				var year = $(this).data('mec-year');
				var month = $(this).data('mec-month');
				setMonth(year, month, current_monthday);
			});
		}

		function initDaysSlider(month_id, day_id) {
			if($('body').hasClass('rtl')) {
				var owl_rtl = true;
			} else {
				var owl_rtl = false;
			}
			var owl = $("#mec-owl-calendar-d-table-" + settings.id + "-" + month_id);
			owl.owlCarousel({
				items: 22,
				responsiveClass: true,
				responsive: {
					479: {
						items: 4,
					},
					767: {
						items: 7,
					},
					960: {
						items: 14,
					},
					1000: {
						items: 19,
					}
				},
				dots: false,
				loop: false,
				rtl: owl_rtl,
			});
			$("#mec_daily_view_month_" + settings.id + "_" + month_id + " .mec-table-d-next").click(function(e) {
				e.preventDefault();
				owl.trigger('next.owl.carousel');
			});
			$("#mec_daily_view_month_" + settings.id + "_" + month_id + " .mec-table-d-prev").click(function(e) {
				e.preventDefault();
				owl.trigger('prev.owl.carousel');
			});
			if(typeof day_id === 'undefined') day_id = $('.mec-daily-view-day-active').data('day-id');
			var today_str = day_id.toString().substring(6, 8);
			var today_int = parseInt(today_str);
			owl.trigger('owl.goTo', [today_int]);
		}

		function search(year, month, day) {
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_daily_view_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_day=" + day + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
					$("#mec_skin_events_" + settings.id).html('<div class="mec-month-container" id="mec_daily_view_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
					$("#mec_skin_" + settings.id + " .mec-calendar-a-month.mec-clear").html('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
					setListeners();
					active_year = response.current_month.year;
					active_month = response.current_month.month;
					active_day = '01';
					toggleMonth(response.current_month.id, '' + active_year + active_month + active_day);
					setToday('' + active_year + active_month + active_day);
				},
				error: function() {}
			});
		}

		function setMonth(year, month, day) {
			var month_id = '' + year + month;
			active_month = month;
			active_year = year;
			active_day = day;
			if($("#mec_daily_view_month_" + settings.id + "_" + month_id).length) {
				toggleMonth(month_id);
				setToday('' + month_id + day);
			} else {
				if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
				jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
				$.ajax({
					url: settings.ajax_url,
					data: "action=mec_daily_view_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_day=" + day + "&" + settings.atts + "&apply_sf_date=0",
					dataType: "json",
					type: "post",
					success: function(response) {
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_events_" + settings.id).append('<div class="mec-month-container" id="mec_daily_view_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
						$("#mec_skin_" + settings.id + " .mec-calendar-a-month.mec-clear").append('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
						setListeners();
						toggleMonth(response.current_month.id, '' + year + month + '01');
						setToday('' + year + month + '01');
						$("#mec_sf_month_" + settings.id).val(month);
						$("#mec_sf_year_" + settings.id).val(year);
					},
					error: function() {}
				});
			}
		}

		function toggleMonth(month_id, day_id) {
			$('#mec_skin_' + settings.id + ' .mec-month-container').addClass('mec-util-hidden');
			$('#mec_daily_view_month_' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			$('#mec_skin_' + settings.id + ' .mec-month-navigator').addClass('mec-util-hidden');
			$('#mec_month_navigator' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			if(settings.month_navigator) initMonthNavigator(month_id);
			initDaysSlider(month_id, day_id);
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecTimeTable = function(options) {
		var active_year;
		var active_month;
		var active_week;
		var active_week_number;
		var active_day;
		var settings = $.extend({
			today: null,
			week: 1,
			active_day: 1,
			id: 0,
			changeWeekElement: '.mec-load-week',
			month_navigator: 0,
			atts: '',
			ajax_url: '',
			sf: {}
		}, options);
		if(settings.sf.container !== '') {
			$(settings.sf.container).mecSearchForm({
				id: settings.id,
				atts: settings.atts,
				callback: function(atts) {
					settings.atts = atts;
					search(active_year, active_month, active_week, active_day);
				}
			});
		}
		setThisWeek(settings.month_id + settings.week, settings.active_day);
		setListeners();
		if(settings.month_navigator) initMonthNavigator(settings.month_id);

		function setListeners() {
			$(settings.changeWeekElement).off('click').on('click', function() {
				var week = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('week-id');
				var max_weeks = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('max-weeks');
				var new_week_number = active_week_number;
				if($(this).hasClass('mec-previous-month')) {
					week = parseInt(week) - 1;
					new_week_number--;
				} else {
					week = parseInt(week) + 1;
					new_week_number++;
				}
				if(new_week_number <= 1 || new_week_number >= max_weeks) {
					$(this).css({
						'opacity': .6,
						'cursor': 'default'
					});
					$(this).find('i').css({
						'opacity': .6,
						'cursor': 'default'
					});
				} else {
					$('#mec_skin_' + settings.id + ' .mec-load-week, #mec_skin_' + settings.id + ' .mec-load-week i').css({
						'opacity': 1,
						'cursor': 'pointer'
					});
				}
				if(new_week_number === 0 || new_week_number > max_weeks) {} else {
					setThisWeek(week);
				}
			});
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-week dt').not('.mec-timetable-has-no-event').off('click').on('click', function() {
				var day = $(this).data('date-id');
				setDay(day);
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function setThisWeek(week, day) {
			if(!$('#mec_weekly_view_week_' + settings.id + '_' + week).length) {
				return setThisWeek((parseInt(week) - 1), day);
			}
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-week').removeClass('mec-weekly-view-week-active');
			$('#mec_weekly_view_week_' + settings.id + '_' + week).addClass('mec-weekly-view-week-active');
			setDay(day);
			active_week = week;
			active_week_number = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active').data('week-number');
			$('#mec_skin_' + settings.id + ' .mec-calendar-d-top').find('.mec-current-week').find('span').remove();
			$('#mec_skin_' + settings.id + ' .mec-calendar-d-top').find('.mec-current-week').append('<span>' + active_week_number + '</span>');
			if(active_week_number === 1) {
				$('#mec_skin_' + settings.id + ' .mec-previous-month.mec-load-week').css({
					'opacity': .6,
					'cursor': 'default'
				});
				$('#mec_skin_' + settings.id + ' .mec-previous-month.mec-load-week').find('i').css({
					'opacity': .6,
					'cursor': 'default'
				});
			}
		}

		function setDay(day) {
			if(typeof day === 'undefined') {
				day = $('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active dt').not('.mec-timetable-has-no-event').first().data('date-id');
			}
			$('#mec_skin_' + settings.id + ' dt').removeClass('mec-timetable-day-active');
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-week-active dt[data-date-id="' + day + '"]').addClass('mec-timetable-day-active');
			$('#mec_skin_' + settings.id + ' .mec-weekly-view-date-events').addClass('mec-util-hidden');
			$('#mec_weekly_view_date_events' + settings.id + '_' + day).removeClass('mec-util-hidden');
		}

		function initMonthNavigator(month_id) {
			$('#mec_month_navigator' + settings.id + '_' + month_id + ' .mec-load-month').off('click').on('click', function() {
				var year = $(this).data('mec-year');
				var month = $(this).data('mec-month');
				setMonth(year, month, active_week);
			});
		}

		function search(year, month, week) {
			var week_number = (String(week).slice(-1));
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_timetable_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_week=" + week_number + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					$('.mec-modal-result').removeClass("mec-month-navigator-loading");
					$("#mec_skin_events_" + settings.id).html('<div class="mec-month-container" id="mec_timetable_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
					$("#mec_skin_" + settings.id + " .mec-skin-weekly-view-month-navigator-container").html('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
					setListeners();
					toggleMonth(response.current_month.id);
					setThisWeek(response.week_id);
				},
				error: function() {}
			});
		}

		function setMonth(year, month, week) {
			var month_id = '' + year + month;
			var week_number = (String(week).slice(-1));
			active_month = month;
			active_year = year;
			if($("#mec_timetable_month_" + settings.id + "_" + month_id).length) {
				toggleMonth(month_id);
				setThisWeek('' + month_id + week_number);
			} else {
				if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
				jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
				$.ajax({
					url: settings.ajax_url,
					data: "action=mec_timetable_load_month&mec_year=" + year + "&mec_month=" + month + "&mec_week=" + week_number + "&" + settings.atts + "&apply_sf_date=0",
					dataType: "json",
					type: "post",
					success: function(response) {
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_events_" + settings.id).append('<div class="mec-month-container" id="mec_timetable_month_' + settings.id + '_' + response.current_month.id + '">' + response.month + '</div>');
						$("#mec_skin_" + settings.id + " .mec-skin-weekly-view-month-navigator-container").append('<div class="mec-month-navigator" id="mec_month_navigator' + settings.id + '_' + response.current_month.id + '">' + response.navigator + '</div>');
						setListeners();
						toggleMonth(response.current_month.id);
						setThisWeek(response.week_id);
						$("#mec_sf_month_" + settings.id).val(month);
						$("#mec_sf_year_" + settings.id).val(year);
					},
					error: function() {}
				});
			}
		}

		function toggleMonth(month_id) {
			$('#mec_skin_' + settings.id + ' .mec-month-container').addClass('mec-util-hidden');
			$('#mec_timetable_month_' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			$('#mec_skin_' + settings.id + ' .mec-month-navigator').addClass('mec-util-hidden');
			$('#mec_month_navigator' + settings.id + '_' + month_id).removeClass('mec-util-hidden');
			if(settings.month_navigator) initMonthNavigator(month_id);
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-timetable-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecWeeklyProgram = function(options) {
		var settings = $.extend({
			id: 0,
			sf: {}
		}, options);
		console.log(settings);
		setListeners();

		function setListeners() {
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecMasonryView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			end_date: '',
			offset: 0,
			start_date: '',
		}, options);
		setListeners();
		jQuery(window).load(function() {
			initMasonry();
		});

		function initMasonry() {
			var $container = $("#mec_skin_" + settings.id + " .mec-event-masonry");
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$("#mec_skin_" + settings.id + " .mec-events-masonry-cats a").click(function() {
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 750,
						easing: 'linear',
						queue: false
					}
				});
				return false;
			});
			var $optionSets = $("#mec_skin_" + settings.id + " .mec-events-masonry-cats"),
				$optionLinks = $optionSets.find('a');
			$optionLinks.click(function() {
				var $this = $(this);
				if($this.hasClass('selected')) return false;
				var $optionSet = $this.parents('.mec-events-masonry-cats');
				$optionSet.find('.mec-masonry-cat-selected').removeClass('mec-masonry-cat-selected');
				$this.addClass('mec-masonry-cat-selected');
			});
		}

		function setListeners() {
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a, #mec_skin_" + settings.id + " .mec-booking-button").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecListView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			current_month_divider: '',
			end_date: '',
			offset: 0,
		}, options);
		setListeners();
		var sf;

		function setListeners() {
			if(settings.sf.container !== '') {
				sf = $(settings.sf.container).mecSearchForm({
					id: settings.id,
					atts: settings.atts,
					callback: function(atts) {
						settings.atts = atts;
						search();
					}
				});
			}
			$("#mec_skin_" + settings.id + " .mec-load-more-button").on("click", function() {
				loadMore();
			});
			if(settings.style === 'accordion') accordion();
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function accordion() {
			$("#mec_skin_" + settings.id + " .mec-toggle-item-inner").off("click").on("click", function(event) {
				event.preventDefault();
				var $this = $(this);
				$(this).parent().find(".mec-content-toggle").slideToggle("fast", function() {
					$this.children("i").toggleClass("mec-sl-arrow-down mec-sl-arrow-up");
				});
				var unique_id = $(this).parent().find(".mec-modal-wrap").data('unique-id');
				window['mec_init_gmap' + unique_id]();
			});
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a, #mec_skin_" + settings.id + " .mec-booking-button, #mec_skin_" + settings.id + " .mec-detail-button").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}

		function loadMore() {
			$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-load-more-loading");
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_list_load_more&mec_start_date=" + settings.end_date + "&mec_offset=" + settings.offset + "&" + settings.atts + "&current_month_divider=" + settings.current_month_divider + "&apply_sf_date=0",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
					} else {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						$("#mec_skin_events_" + settings.id).append(response.html);
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						settings.current_month_divider = response.current_month_divider;
						if(settings.sed_method != '0') {
							sed();
						}
						if(settings.style === 'accordion') accordion();
					}
				},
				error: function() {}
			});
		}

		function search() {
			$("#mec_skin_no_events_" + settings.id).addClass("mec-util-hidden");
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_list_load_more&mec_start_date=" + settings.start_date + "&" + settings.atts + "&current_month_divider=0&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_events_" + settings.id).html('');
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						$("#mec_skin_no_events_" + settings.id).removeClass("mec-util-hidden");
					} else {
						$("#mec_skin_events_" + settings.id).html(response.html);
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						if(response.count >= settings.limit) $("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						else $("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						settings.current_month_divider = response.current_month_divider;
						if(settings.sed_method != '0') {
							sed();
						}
						if(settings.style === 'accordion') accordion();
					}
				},
				error: function() {}
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecGridView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			end_date: '',
			offset: 0,
			start_date: '',
		}, options);
		setListeners();
		var sf;

		function setListeners() {
			if(settings.sf.container !== '') {
				sf = $(settings.sf.container).mecSearchForm({
					id: settings.id,
					atts: settings.atts,
					callback: function(atts) {
						settings.atts = atts;
						search();
					}
				});
			}
			$("#mec_skin_" + settings.id + " .mec-load-more-button").on("click", function() {
				loadMore();
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-event-title a, #mec_skin_" + settings.id + " .mec-booking-button").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}

		function loadMore() {
			$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-load-more-loading");
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_grid_load_more&mec_start_date=" + settings.end_date + "&mec_offset=" + settings.offset + "&" + settings.atts + "&apply_sf_date=0",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
					} else {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						$("#mec_skin_events_" + settings.id).append(response.html);
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						if(settings.sed_method != '0') {
							sed();
						}
					}
				},
				error: function() {}
			});
		}

		function search() {
			$("#mec_skin_no_events_" + settings.id).addClass("mec-util-hidden");
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_grid_load_more&mec_start_date=" + settings.start_date + "&" + settings.atts + "&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_events_" + settings.id).html('');
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						$("#mec_skin_no_events_" + settings.id).removeClass("mec-util-hidden");
					} else {
						$("#mec_skin_events_" + settings.id).html(response.html);
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						if(response.count >= settings.limit) $("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						else $("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						if(settings.sed_method != '0') {
							sed();
						}
					}
				},
				error: function() {}
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecAgendaView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			current_month_divider: '',
			end_date: '',
			offset: 0,
		}, options);
		setListeners();
		var sf;

		function setListeners() {
			if(settings.sf.container !== '') {
				sf = $(settings.sf.container).mecSearchForm({
					id: settings.id,
					atts: settings.atts,
					callback: function(atts) {
						settings.atts = atts;
						search();
					}
				});
			}
			$("#mec_skin_" + settings.id + " .mec-load-more-button").on("click", function() {
				loadMore();
			});
			if(settings.sed_method != '0') {
				sed();
			}
		}

		function sed() {
			$("#mec_skin_" + settings.id + " .mec-agenda-event-title a").off('click').on('click', function(e) {
				e.preventDefault();
				var href = $(this).attr('href');
				var id = $(this).data('event-id');
				var occurrence = get_parameter_by_name('occurrence', href);
				mecSingleEventDisplayer.getSinglePage(id, occurrence, settings.ajax_url, settings.sed_method);
			});
		}

		function loadMore() {
			$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-load-more-loading");
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_agenda_load_more&mec_start_date=" + settings.end_date + "&mec_offset=" + settings.offset + "&" + settings.atts + "&current_month_divider=" + settings.current_month_divider + "&apply_sf_date=0",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
					} else {
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						$("#mec_skin_events_" + settings.id + " .mec-events-agenda-container").append(response.html);
						$("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-load-more-loading");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						settings.current_month_divider = response.current_month_divider;
						if(settings.sed_method != '0') {
							sed();
						}
					}
				},
				error: function() {}
			});
		}

		function search() {
			$("#mec_skin_no_events_" + settings.id).addClass("mec-util-hidden");
			if(jQuery('.mec-modal-result').length === 0) jQuery('.mec-wrap').append('<div class="mec-modal-result"></div>');
			jQuery('.mec-modal-result').addClass('mec-month-navigator-loading');
			$.ajax({
				url: settings.ajax_url,
				data: "action=mec_agenda_load_more&mec_start_date=" + settings.start_date + "&" + settings.atts + "&current_month_divider=0&apply_sf_date=1",
				dataType: "json",
				type: "post",
				success: function(response) {
					if(response.count == "0") {
						$("#mec_skin_events_" + settings.id + " .mec-events-agenda-container").html('');
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						$("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						$("#mec_skin_no_events_" + settings.id).removeClass("mec-util-hidden");
					} else {
						$("#mec_skin_events_" + settings.id + " .mec-events-agenda-container").html(response.html);
						$('.mec-modal-result').removeClass("mec-month-navigator-loading");
						if(response.count >= settings.limit) $("#mec_skin_" + settings.id + " .mec-load-more-button").removeClass("mec-util-hidden");
						else $("#mec_skin_" + settings.id + " .mec-load-more-button").addClass("mec-util-hidden");
						settings.end_date = response.end_date;
						settings.offset = response.offset;
						settings.current_month_divider = response.current_month_divider;
						if(settings.sed_method != '0') {
							sed();
						}
					}
				},
				error: function() {}
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecCarouselView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			ajax_url: '',
			sf: {},
			items: 3,
			autoplay: '',
			style: 'type1',
			start_date: ''
		}, options);
		initSlider();

		function initSlider() {
			if($('body').hasClass('rtl')) {
				var owl_rtl = true;
			} else {
				var owl_rtl = false;
			}
			if(settings.style === 'type1') {
				var owl = $("#mec_skin_" + settings.id + " .mec-event-carousel-type1 .mec-owl-carousel");
				owl.owlCarousel({
					autoplay: true,
					autoplayTimeout: settings.autoplay,
					loop: true,
					items: settings.items,
					responsiveClass: true,
					responsive: {
						0: {
							items: 1,
						},
						979: {
							items: 2,
						},
						1199: {
							items: settings.count,
						}
					},
					dots: true,
					nav: false,
					autoplayHoverPause: true,
					rtl: owl_rtl,
				});
				owl.bind("mouseleave", function(event) {
					$("#mec_skin_" + settings.id + " .mec-owl-carousel").trigger('play.owl.autoplay');
				});
			} else {
				$("#mec_skin_" + settings.id + " .mec-owl-carousel").owlCarousel({
					autoplay: true,
					loop: true,
					autoplayTimeout: settings.autoplay,
					items: settings.items,
					dots: false,
					nav: true,
					responsiveClass: true,
					responsive: {
						0: {
							items: 1,
						},
						979: {
							items: 2,
						},
						1199: {
							items: settings.count,
						}
					},
					autoplayHoverPause: true,
					navText: ["<i class='mec-sl-arrow-left'></i>", " <i class='mec-sl-arrow-right'></i>"],
					rtl: owl_rtl,
				});
				$("#mec_skin_" + settings.id + " .mec-owl-carousel").bind("mouseleave", function(event) {
					$("#mec_skin_" + settings.id + " .mec-owl-carousel").trigger('play.owl.autoplay');
				});
			}
		}
	};
}(jQuery));
(function($) {
	$.fn.mecSliderView = function(options) {
		var settings = $.extend({
			id: 0,
			atts: '',
			autoplay: false,
			ajax_url: '',
			sf: {},
			start_date: ''
		}, options);
		initSlider();

		function initSlider() {
			if($('body').hasClass('rtl')) {
				var owl_rtl = true;
			} else {
				var owl_rtl = false;
			}
			$("#mec_skin_" + settings.id + " .mec-owl-carousel").owlCarousel({
				autoplay: true,
				autoplayTimeout: settings.autoplay,
				loop: true,
				items: 1,
				responsiveClass: true,
				responsive: {
					0: {
						items: 1,
					},
					960: {
						items: 1,
					},
					1200: {
						items: 1,
					}
				},
				dots: false,
				nav: true,
				autoplayHoverPause: true,
				navText: ["<i class='mec-sl-arrow-left'></i>", " <i class='mec-sl-arrow-right'></i>"],
				rtl: owl_rtl,
			});
		}
	};
}(jQuery));
(function($) {
	$.fn.mecCountDown = function(options, callBack) {
		var settings = $.extend({
			date: null,
			format: null
		}, options);
		var callback = callBack;
		var selector = $(this);
		startCountdown();
		var interval = setInterval(startCountdown, 1000);

		function startCountdown() {
			var eventDate = Date.parse(settings.date) / 1000;
			var currentDate = Math.floor($.now() / 1000);
			if(eventDate <= currentDate) {
				callback.call(this);
				clearInterval(interval);
			}
			var seconds = eventDate - currentDate;
			var days = Math.floor(seconds / (60 * 60 * 24));
			seconds -= days * 60 * 60 * 24;
			var hours = Math.floor(seconds / (60 * 60));
			seconds -= hours * 60 * 60;
			var minutes = Math.floor(seconds / 60);
			seconds -= minutes * 60;
			if(days == 1) selector.find(".mec-timeRefDays").text(mecdata.day);
			else selector.find(".mec-timeRefDays").text(mecdata.days);
			if(hours == 1) selector.find(".mec-timeRefHours").text(mecdata.hour);
			else selector.find(".mec-timeRefHours").text(mecdata.hours);
			if(minutes == 1) selector.find(".mec-timeRefMinutes").text(mecdata.minute);
			else selector.find(".mec-timeRefMinutes").text(mecdata.minutes);
			if(seconds == 1) selector.find(".mec-timeRefSeconds").text(mecdata.second);
			else selector.find(".mec-timeRefSeconds").text(mecdata.seconds);
			if(settings.format === "on") {
				days = (String(days).length >= 2) ? days : "0" + days;
				hours = (String(hours).length >= 2) ? hours : "0" + hours;
				minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
			}
			if(!isNaN(eventDate)) {
				selector.find(".mec-days").text(days);
				selector.find(".mec-hours").text(hours);
				selector.find(".mec-minutes").text(minutes);
				selector.find(".mec-seconds").text(seconds);
			} else {
				clearInterval(interval);
			}
		}
	};
}(jQuery));

function mec_gateway_selected(gateway_id) {
	jQuery('.mec-book-form-gateway-checkout').addClass('mec-util-hidden');
	jQuery('#mec_book_form_gateway_checkout' + gateway_id).removeClass('mec-util-hidden');
}

function mec_wrap_resize() {
	var $mec_wrap = jQuery('.mec-wrap'),
		mec_width = $mec_wrap.width();
	if(mec_width < 959) {
		$mec_wrap.addClass('mec-sm959');
	} else {
		$mec_wrap.removeClass('mec-sm959');
	}
}

function get_parameter_by_name(name, url) {
	if(!url) {
		url = window.location.href;
	}
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
(function($) {
	$(document).ready(function() {
		if($('body').hasClass('rtl')) {
			var owl_rtl = true;
		} else {
			var owl_rtl = false;
		}
		$(".mec-widget .mec-event-grid-classic").addClass('mec-owl-carousel mec-owl-theme');
		$(".mec-widget .mec-event-grid-classic").owlCarousel({
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			loop: true,
			dots: false,
			nav: true,
			navText: ["<i class='mec-sl-arrow-left'></i>", " <i class='mec-sl-arrow-right'></i>"],
			items: 1,
			autoHeight: true,
			responsiveClass: true,
			rtl: owl_rtl,
		});
		mec_wrap_resize();
		jQuery(window).bind('resize', function() {
			mec_wrap_resize();
		});
		$('.mec-event-sharing-wrap').hover(function() {
			$(this).find('.mec-event-sharing').show(0);
		}, function() {
			$(this).find('.mec-event-sharing').hide(0);
		});
		$('a[href="#mec-events-meta-group-booking"]').click(function() {
			if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if(target.length) {
					var scrollTopVal = target.offset().top - 30;
					$('html, body').animate({
						scrollTop: scrollTopVal
					}, 600);
					return false;
				}
			}
		});
	});
})(jQuery);
jQuery(document).ready(function($) {
	$('.mec_upload_image_button').click(function(event) {
		event.preventDefault();
		var frame;
		if(frame) {
			frame.open();
			return;
		}
		frame = wp.media();
		frame.on('select', function() {
			var attachment = frame.state().get('selection').first();
			$('#mec_thumbnail_img').html('<img src="' + attachment.attributes.url + '" />');
			$('#mec_thumbnail').val(attachment.attributes.url);
			$('.mec_remove_image_button').toggleClass('mec-util-hidden');
			frame.close();
		});
		frame.open();
	});
	$('.mec_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_thumbnail_img').html('');
		$('#mec_thumbnail').val('');
		$('.mec_remove_image_button').toggleClass('mec-util-hidden');
	});
	$('.mec_location_upload_image_button').click(function(event) {
		event.preventDefault();
		var frame;
		if(frame) {
			frame.open();
			return;
		}
		frame = wp.media();
		frame.on('select', function() {
			var attachment = frame.state().get('selection').first();
			$('#mec_location_thumbnail_img').html('<img src="' + attachment.attributes.url + '" />');
			$('#mec_location_thumbnail').val(attachment.attributes.url);
			$('.mec_location_remove_image_button').toggleClass('mec-util-hidden');
			frame.close();
		});
		frame.open();
	});
	$('.mec_location_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_location_thumbnail_img').html('');
		$('#mec_location_thumbnail').val('');
		$('.mec_location_remove_image_button').toggleClass('mec-util-hidden');
	});
	$('.mec_organizer_upload_image_button').click(function(event) {
		event.preventDefault();
		var frame;
		if(frame) {
			frame.open();
			return;
		}
		frame = wp.media();
		frame.on('select', function() {
			var attachment = frame.state().get('selection').first();
			$('#mec_organizer_thumbnail_img').html('<img src="' + attachment.attributes.url + '" />');
			$('#mec_organizer_thumbnail').val(attachment.attributes.url);
			$('.mec_organizer_remove_image_button').toggleClass('mec-util-hidden');
			frame.close();
		});
		frame.open();
	});
	$('.mec_organizer_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_organizer_thumbnail_img').html('');
		$('#mec_organizer_thumbnail').val('');
		$('.mec_organizer_remove_image_button').toggleClass('mec-util-hidden');
	});
	$('#mec_fes_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_fes_thumbnail_img').html('');
		$('#mec_fes_thumbnail').val('');
		$('#mec_featured_image_file').val('');
		$('#mec_fes_remove_image_button').addClass('mec-util-hidden');
	});
	$('#mec_fes_location_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_fes_location_thumbnail_img').html('');
		$('#mec_fes_location_thumbnail').val('');
		$('#mec_fes_location_thumbnail_file').val('');
		$('#mec_fes_location_remove_image_button').addClass('mec-util-hidden');
	});
	$('#mec_fes_organizer_remove_image_button').click(function(event) {
		event.preventDefault();
		$('#mec_fes_organizer_thumbnail_img').html('');
		$('#mec_fes_organizer_thumbnail').val('');
		$('#mec_fes_organizer_thumbnail_file').val('');
		$('#mec_fes_organizer_remove_image_button').addClass('mec-util-hidden');
	});
	$('#mec_start_date').datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: 'yy-mm-dd',
		gotoCurrent: true,
		yearRange: 'c-3:c+5',
	});
	$('#mec_end_date').datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: 'yy-mm-dd',
		gotoCurrent: true,
		yearRange: 'c-3:c+5',
	});
	$('#mec_date_repeat_end_at_date').datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: 'yy-mm-dd',
		gotoCurrent: true,
		yearRange: 'c-3:c+5',
	});
	$('.mec_date_picker').datepicker({
		changeYear: true,
		changeMonth: true,
		dateFormat: 'yy-mm-dd',
		gotoCurrent: true,
		yearRange: 'c-3:c+5',
	});
	$('#mec_location_id').on('change', function() {
		mec_location_toggle();
	});
	$('#mec_organizer_id').on('change', function() {
		mec_organizer_toggle();
	});
	mec_location_toggle();
	mec_organizer_toggle()
	$('#mec_repeat').on('change', function() {
		mec_repeat_toggle();
	});
	mec_repeat_toggle();
	$('#mec_repeat_type').on('change', function() {
		mec_repeat_type_toggle();
	});
	mec_repeat_type_toggle();
	$('#mec_bookings_limit_unlimited').on('change', function() {
		mec_bookings_unlimited_toggle();
	});
	$('#mec_add_in_days').on('click', function() {
		var date = $('#mec_exceptions_in_days_date').val();
		if(date === '') return false;
		var key = $('#mec_new_in_days_key').val();
		var html = $('#mec_new_in_days_raw').html().replace(/:i:/g, key).replace(/:val:/g, date);
		$('#mec_in_days').append(html);
		$('#mec_new_in_days_key').val(parseInt(key) + 1);
	});
	$('#mec_add_not_in_days').on('click', function() {
		var date = $('#mec_exceptions_not_in_days_date').val();
		if(date === '') return false;
		var key = $('#mec_new_not_in_days_key').val();
		var html = $('#mec_new_not_in_days_raw').html().replace(/:i:/g, key).replace(/:val:/g, date);
		$('#mec_not_in_days').append(html);
		$('#mec_new_not_in_days_key').val(parseInt(key) + 1);
	});
	$('#mec_add_ticket_button').on('click', function() {
		var key = $('#mec_new_ticket_key').val();
		var html = $('#mec_new_ticket_raw').html().replace(/:i:/g, key);
		$('#mec_tickets').append(html);
		$('#mec_new_ticket_key').val(parseInt(key) + 1);
	});
	$('#mec_add_hourly_schedule_button').on('click', function() {
		var key = $('#mec_new_hourly_schedule_key').val();
		var html = $('#mec_new_hourly_schedule_raw').html().replace(/:i:/g, key);
		$('#mec_hourly_schedules').append(html);
		$('#mec_new_hourly_schedule_key').val(parseInt(key) + 1);
	});
	$('#mec_add_fee_button').on('click', function() {
		var key = $('#mec_new_fee_key').val();
		var html = $('#mec_new_fee_raw').html().replace(/:i:/g, key);
		$('#mec_fees_list').append(html);
		$('#mec_new_fee_key').val(parseInt(key) + 1);
	});
	$('.mec-form-row.mec-available-color-row span').on('click', function() {
		$('.mec-form-row.mec-available-color-row span').removeClass('color-selected');
		$(this).addClass('color-selected');
	});
	$('#mec_reg_form_field_types button').on('click', function() {
		var type = $(this).data('type');
		var key = $('#mec_new_reg_field_key').val();
		var html = $('#mec_reg_field_' + type).html().replace(/:i:/g, key);
		$('#mec_reg_form_fields').append(html);
		$('#mec_new_reg_field_key').val(parseInt(key) + 1);
		mec_reg_fields_option_listeners();
	});
	mec_reg_fields_option_listeners();
});

function mec_location_toggle() {
	if(jQuery('#mec_location_id').val() != '0') jQuery('#mec_location_new_container').hide();
	else jQuery('#mec_location_new_container').show();
}

function mec_organizer_toggle() {
	if(jQuery('#mec_organizer_id').val() != '0') jQuery('#mec_organizer_new_container').hide();
	else jQuery('#mec_organizer_new_container').show();
}

function mec_repeat_toggle() {
	if(jQuery('#mec_repeat').is(':checked')) jQuery('.mec-form-repeating-event-row').show();
	else jQuery('.mec-form-repeating-event-row').hide();
}

function mec_repeat_type_toggle() {
	var repeat_type = jQuery('#mec_repeat_type').val();
	if(repeat_type == 'certain_weekdays') {
		jQuery('#mec_repeat_interval_container').hide();
		jQuery('#mec_repeat_certain_weekdays_container').show();
		jQuery('#mec_exceptions_in_days_container').hide();
	} else if(repeat_type == 'custom_days') {
		jQuery('#mec_repeat_interval_container').hide();
		jQuery('#mec_repeat_certain_weekdays_container').hide();
		jQuery('#mec_exceptions_in_days_container').show();
	} else if(repeat_type != 'daily' && repeat_type != 'weekly') {
		jQuery('#mec_repeat_interval_container').hide();
		jQuery('#mec_repeat_certain_weekdays_container').hide();
		jQuery('#mec_exceptions_in_days_container').hide();
	} else {
		jQuery('#mec_repeat_interval_container').show();
		jQuery('#mec_repeat_certain_weekdays_container').hide();
		jQuery('#mec_exceptions_in_days_container').hide();
	}
}

function mec_in_days_remove(i) {
	jQuery('#mec_in_days_row' + i).remove();
}

function mec_not_in_days_remove(i) {
	jQuery('#mec_not_in_days_row' + i).remove();
}

function mec_bookings_unlimited_toggle() {
	jQuery('#mec_bookings_limit').toggleClass('mec-util-hidden');
}

function mec_hourly_schedule_remove(i) {
	jQuery("#mec_hourly_schedule_row" + i).remove();
}

function mec_ticket_remove(i) {
	jQuery("#mec_ticket_row" + i).remove();
}

function mec_set_event_color(color) {
	try {
		jQuery("#mec_event_color").wpColorPicker('color', '#' + color);
	} catch(e) {
		jQuery("#mec_event_color").val(color);
	}
}

function mec_remove_fee(key) {
	jQuery("#mec_fee_row" + key).remove();
}

function mec_reg_fields_option_listeners() {
	jQuery('button.mec-reg-field-add-option').on('click', function() {
		var field_id = jQuery(this).data('field-id');
		var key = jQuery('#mec_new_reg_field_option_key_' + field_id).val();
		var html = jQuery('#mec_reg_field_option').html().replace(/:i:/g, key).replace(/:fi:/g, field_id);
		jQuery('#mec_reg_fields_' + field_id + '_options_container').append(html);
		jQuery('#mec_new_reg_field_option_key_' + field_id).val(parseInt(key) + 1);
	});
	if(typeof jQuery.fn.sortable !== 'undefined') {
		jQuery("#mec_reg_form_fields").sortable({
			handle: '.mec_reg_field_sort'
		});
		jQuery(".mec_reg_fields_options_container").sortable({
			handle: '.mec_reg_field_option_sort'
		});
	}
}

function mec_reg_fields_option_remove(field_key, key) {
	jQuery("#mec_reg_fields_option_" + field_key + "_" + key).remove();
}

function mec_reg_fields_remove(key) {
	jQuery("#mec_reg_fields_" + key).remove();
};
/*! Lity - v2.1.0 - 2016-09-19
 * http://sorgalla.com/lity/
 * Copyright (c) 2015-2016 Jan Sorgalla; Licensed MIT */
! function(a, b) {
	"function" == typeof define && define.amd ? define(["jquery"], function(c) {
		return b(a, c)
	}) : "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a, require("jquery")) : a.lity = b(a, a.jQuery || a.Zepto)
}("undefined" != typeof window ? window : this, function(a, b) {
	"use strict";

	function c(a) {
		var b = A();
		return L && a.length ? (a.one(L, b.resolve), setTimeout(b.resolve, 500)) : b.resolve(), b.promise()
	}

	function d(a, c, d) {
		if(1 === arguments.length) return b.extend({}, a);
		if("string" == typeof c) {
			if("undefined" == typeof d) return "undefined" == typeof a[c] ? null : a[c];
			a[c] = d
		} else b.extend(a, c);
		return this
	}

	function e(a) {
		for(var b, c = decodeURI(a.split("#")[0]).split("&"), d = {}, e = 0, f = c.length; e < f; e++) c[e] && (b = c[e].split("="), d[b[0]] = b[1]);
		return d
	}

	function f(a, c) {
		return a + (a.indexOf("?") > -1 ? "&" : "?") + b.param(c)
	}

	function g(a, b) {
		var c = a.indexOf("#");
		return -1 === c ? b : (c > 0 && (a = a.substr(c)), b + a)
	}

	function h(a) {
		return b('<span class="lity-error"/>').append(a)
	}

	function i(a, c) {
		var d = c.opener() && c.opener().data("lity-desc") || "Image with no description",
			e = b('<img src="' + a + '" alt="' + d + '"/>'),
			f = A(),
			g = function() {
				f.reject(h("Failed loading image"))
			};
		return e.on("load", function() {
			return 0 === this.naturalWidth ? g() : void f.resolve(e)
		}).on("error", g), f.promise()
	}

	function j(a, c) {
		var d, e, f;
		try {
			d = b(a)
		} catch(a) {
			return !1
		}
		return !!d.length && (e = b('<i style="display:none !important"/>'), f = d.hasClass("lity-hide"), c.element().one("lity:remove", function() {
			e.before(d).remove(), f && !d.closest(".lity-content").length && d.addClass("lity-hide")
		}), d.removeClass("lity-hide").after(e))
	}

	function k(a) {
		var c = I.exec(a);
		return !!c && n(g(a, f("https://www.youtube" + (c[2] || "") + ".com/embed/" + c[4], b.extend({
			autoplay: 1
		}, e(c[5] || "")))))
	}

	function l(a) {
		var c = J.exec(a);
		return !!c && n(g(a, f("https://player.vimeo.com/video/" + c[3], b.extend({
			autoplay: 1
		}, e(c[4] || "")))))
	}

	function m(a) {
		var b = K.exec(a);
		return !!b && n(g(a, f("https://www.google." + b[3] + "/maps?" + b[6], {
			output: b[6].indexOf("layer=c") > 0 ? "svembed" : "embed"
		})))
	}

	function n(a) {
		return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + a + '"/></div>'
	}

	function o() {
		return y.documentElement.clientHeight ? y.documentElement.clientHeight : Math.round(z.height())
	}

	function p(a) {
		var b = u();
		b && (27 === a.keyCode && b.close(), 9 === a.keyCode && q(a, b))
	}

	function q(a, b) {
		var c = b.element().find(F),
			d = c.index(y.activeElement);
		a.shiftKey && d <= 0 ? (c.get(c.length - 1).focus(), a.preventDefault()) : a.shiftKey || d !== c.length - 1 || (c.get(0).focus(), a.preventDefault())
	}

	function r() {
		b.each(C, function(a, b) {
			b.resize()
		})
	}

	function s(a) {
		1 === C.unshift(a) && (B.addClass("lity-active"), z.on({
			resize: r,
			keydown: p
		})), b("body > *").not(a.element()).addClass("lity-hidden").each(function() {
			var a = b(this);
			void 0 === a.data(E) && a.data(E, a.attr(D) || null)
		}).attr(D, "true")
	}

	function t(a) {
		var c;
		a.element().attr(D, "true"), 1 === C.length && (B.removeClass("lity-active"), z.off({
			resize: r,
			keydown: p
		})), C = b.grep(C, function(b) {
			return a !== b
		}), c = C.length ? C[0].element() : b(".lity-hidden"), c.removeClass("lity-hidden").each(function() {
			var a = b(this),
				c = a.data(E);
			c ? a.attr(D, c) : a.removeAttr(D), a.removeData(E)
		})
	}

	function u() {
		return 0 === C.length ? null : C[0]
	}

	function v(a, c, d, e) {
		var f, g = "inline",
			h = b.extend({}, d);
		return e && h[e] ? (f = h[e](a, c), g = e) : (b.each(["inline", "iframe"], function(a, b) {
			delete h[b], h[b] = d[b]
		}), b.each(h, function(b, d) {
			return !d || (!(!d.test || d.test(a, c)) || (f = d(a, c), !1 !== f ? (g = b, !1) : void 0))
		})), {
			handler: g,
			content: f || ""
		}
	}

	function w(a, e, f, g) {
		function h(a) {
			k = b(a).css("max-height", o() + "px"), j.find(".lity-loader").each(function() {
				var a = b(this);
				c(a).always(function() {
					a.remove()
				})
			}), j.removeClass("lity-loading").find(".lity-content").empty().append(k), m = !0, k.trigger("lity:ready", [l])
		}
		var i, j, k, l = this,
			m = !1,
			n = !1;
		e = b.extend({}, G, e), j = b(e.template), l.element = function() {
			return j
		}, l.opener = function() {
			return f
		}, l.options = b.proxy(d, l, e), l.handlers = b.proxy(d, l, e.handlers), l.resize = function() {
			m && !n && k.css("max-height", o() + "px").trigger("lity:resize", [l])
		}, l.close = function() {
			if(m && !n) {
				n = !0, t(l);
				var a = A();
				return g && b.contains(j, y.activeElement) && g.focus(), k.trigger("lity:close", [l]), j.removeClass("lity-opened").addClass("lity-closed"), c(k.add(j)).always(function() {
					k.trigger("lity:remove", [l]), j.remove(), j = void 0, a.resolve()
				}), a.promise()
			}
		}, i = v(a, l, e.handlers, e.handler), j.attr(D, "false").addClass("lity-loading lity-opened lity-" + i.handler).appendTo("body").focus().on("click", "[data-lity-close]", function(a) {
			b(a.target).is("[data-lity-close]") && l.close()
		}).trigger("lity:open", [l]), s(l), b.when(i.content).always(h)
	}

	function x(a, c, d) {
		a.preventDefault ? (a.preventDefault(), d = b(this), a = d.data("lity-target") || d.attr("href") || d.attr("src")) : d = b(d);
		var e = new w(a, b.extend({}, d.data("lity-options") || d.data("lity"), c), d, y.activeElement);
		if(!a.preventDefault) return e
	}
	var y = a.document,
		z = b(a),
		A = b.Deferred,
		B = b("html"),
		C = [],
		D = "aria-hidden",
		E = "lity-" + D,
		F = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
		G = {
			handler: null,
			handlers: {
				image: i,
				inline: j,
				youtube: k,
				vimeo: l,
				googlemaps: m,
				iframe: n
			},
			template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
		},
		H = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
		I = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
		J = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
		K = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
		L = function() {
			var a = y.createElement("div"),
				b = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd otransitionend",
					transition: "transitionend"
				};
			for(var c in b)
				if(void 0 !== a.style[c]) return b[c];
			return !1
		}();
	return i.test = function(a) {
		return H.test(a)
	}, x.version = "2.1.0", x.options = b.proxy(d, x, G), x.handlers = b.proxy(d, x, G.handlers), x.current = u, b(y).on("click.lity", "[data-lity]", x), x
});

/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {
		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;
		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);
		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);
		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};
		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};
		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};
		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;
		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;
		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];
		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;
		/**
		 * Current width of the plugin element.
		 */
		this._width = null;
		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];
		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];
		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];
		/**
		 * Widths of all items.
		 */
		this._widths = [];
		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};
		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];
		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};
		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};
		$.each(['onResize', 'onThrottledResize'], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));
		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));
		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));
		this.setup();
		this.initialize();
	}
	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,
		margin: 0,
		stagePadding: 0,
		merge: false,
		mergeFit: true,
		autoWidth: false,
		startPosition: 0,
		rtl: false,
		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		fallbackEasing: 'swing',
		slideTransition: '',
		info: false,
		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',
		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};
	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};
	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};
	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};
	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};
			!grid && this.$stage.children().css(css);
			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];
			cache.items = {
				merge: false,
				width: width
			};
			while(iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
				cache.items.merge = merge > 1 || cache.items.merge;
				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}
			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';
			repeat /= 2;
			while(repeat > 0) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}
			this._clones = clones;
			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];
			while(++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}
			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};
			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();
			if(grid && cache.items.merge) {
				while(iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if(grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [],
				i, n;
			for(i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;
				if((this.op(inner, '<=', begin) && (this.op(inner, '>', end))) ||
					(this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}
			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
			this.$stage.children('.center').removeClass('center');
			if(this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];
	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);
		if(this.$stage.length) {
			return;
		}
		this.$element.addClass(this.options.loadingClass);
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap($('<div/>', {
			"class": this.settings.stageOuterClass
		}));
		this.$element.append(this.$stage.parent());
	};
	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');
		if($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});
			this._mergers = this._items.map(function() {
				return 1;
			});
			this.refresh();
			return;
		}
		this.replace(this.$element.children().not(this.$stage.parent()));
		if(this.isVisible()) {
			this.refresh();
		} else {
			this.invalidate('width');
		}
		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};
	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');
		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
		if(this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();
			if(imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}
		this.initializeStage();
		this.initializeItems();
		this.registerEventHandlers();
		this.leave('initializing');
		this.trigger('initialized');
	};
	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility ?
			this.$element.is(':visible') :
			true;
	};
	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;
		if(!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if(breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});
			settings = $.extend({}, this.options, overwrites[match]);
			if(typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;
			if(settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}
		this.trigger('change', {
			property: {
				name: 'settings',
				value: settings
			}
		});
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', {
			property: {
				name: 'settings',
				value: this.settings
			}
		});
	};
	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if(this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};
	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', {
			content: item
		});
		if(!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}
		this.trigger('prepared', {
			content: event.data
		});
		return event.data;
	};
	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) {
				return this[p]
			}, this._invalidated),
			cache = {};
		while(i < n) {
			if(this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}
		this._invalidated = {};
		!this.is('valid') && this.enter('valid');
	};
	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch(dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};
	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');
		this.setup();
		this.optionsLogic();
		this.$element.addClass(this.options.refreshClass);
		this.update();
		this.$element.removeClass(this.options.refreshClass);
		this.leave('refreshing');
		this.trigger('refreshed');
	};
	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};
	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if(!this._items.length) {
			return false;
		}
		if(this._width === this.$element.width()) {
			return false;
		}
		if(!this.isVisible()) {
			return false;
		}
		this.enter('resizing');
		if(this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}
		this.invalidate('width');
		this.refresh();
		this.leave('resizing');
		this.trigger('resized');
	};
	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}
		if(this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}
		if(this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() {
				return false
			});
		}
		if(this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};
	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;
		if(event.which === 3) {
			return;
		}
		if($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}
		if(this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}
		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
		this.speed(0);
		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);
		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));
			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
			if(Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}
			event.preventDefault();
			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};
	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);
		if(!this.is('dragging')) {
			return;
		}
		event.preventDefault();
		if(this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}
		this._drag.stage.current = stage;
		this.animate(stage.x);
	};
	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
		$(document).off('.owl.core');
		this.$element.removeClass(this.options.grabClass);
		if(delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();
			this._drag.direction = direction;
			if(Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() {
					return false;
				});
			}
		}
		if(!this.is('dragging')) {
			return;
		}
		this.leave('dragging');
		this.trigger('dragged');
	};
	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();
		if(!this.settings.freeDrag) {
			$.each(coordinates, $.proxy(function(index, value) {
				if(direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				} else if(direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if(this.op(coordinate, '<', value) &&
					this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}
		if(!this.settings.loop) {
			if(this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if(this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}
		return position;
	};
	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;
		this.is('animating') && this.onTransitionEnd();
		if(animate) {
			this.enter('animating');
			this.trigger('translate');
		}
		if($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if(animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};
	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};
	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if(position === undefined) {
			return this._current;
		}
		if(this._items.length === 0) {
			return undefined;
		}
		position = this.normalize(position);
		if(this._current !== position) {
			var event = this.trigger('change', {
				property: {
					name: 'position',
					value: position
				}
			});
			if(event.data !== undefined) {
				position = this.normalize(event.data);
			}
			this._current = position;
			this.invalidate('position');
			this.trigger('changed', {
				property: {
					name: 'position',
					value: this._current
				}
			});
		}
		return this._current;
	};
	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) {
			return i
		});
	};
	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);
		if(position === undefined) {
			return;
		}
		this._speed = 0;
		this._current = position;
		this.suppress(['translate', 'translated']);
		this.animate(this.coordinates(position));
		this.release(['translate', 'translated']);
	};
	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;
		if(!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if(position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}
		return position;
	};
	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};
	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;
		if(settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if(settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if(iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while(iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if(reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if(settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}
		if(relative) {
			maximum -= this._clones.length / 2;
		}
		return Math.max(maximum, 0);
	};
	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};
	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if(position === undefined) {
			return this._items.slice();
		}
		position = this.normalize(position, true);
		return this._items[position];
	};
	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if(position === undefined) {
			return this._mergers.slice();
		}
		position = this.normalize(position, true);
		return this._mergers[position];
	};
	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) {
				return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2
			};
		if(position === undefined) {
			return $.map(this._clones, function(v, i) {
				return map(i)
			});
		}
		return $.map(this._clones, function(v, i) {
			return v === position ? map(i) : null
		});
	};
	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if(speed !== undefined) {
			this._speed = speed;
		}
		return this._speed;
	};
	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;
		if(position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}
		if(this.settings.center) {
			if(this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}
			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}
		coordinate = Math.ceil(coordinate);
		return coordinate;
	};
	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if(factor === 0) {
			return 0;
		}
		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};
	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();
		if(this.settings.loop) {
			if(!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}
			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;
			if(revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if(this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}
		this.speed(this.duration(current, position, speed));
		this.current(position);
		if(this.isVisible()) {
			this.update();
		}
	};
	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};
	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};
	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {
		if(event !== undefined) {
			event.stopPropagation();
			if((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}
		this.leave('animating');
		this.trigger('translated');
	};
	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if(this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if(window.innerWidth) {
			width = window.innerWidth;
		} else if(document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};
	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];
		if(content) {
			content = (content instanceof jQuery) ? content : $(content);
		}
		if(this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}
		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));
		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
		this.invalidate('items');
	};
	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);
		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);
		this.trigger('add', {
			content: content,
			position: position
		});
		content = this.prepare(content);
		if(this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}
		this._items[current] && this.reset(this._items[current].index());
		this.invalidate('items');
		this.trigger('added', {
			content: content,
			position: position
		});
	};
	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);
		if(position === undefined) {
			return;
		}
		this.trigger('remove', {
			content: this._items[position],
			position: position
		});
		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);
		this.invalidate('items');
		this.trigger('removed', {
			content: null,
			position: position
		});
	};
	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};
	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {
		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');
		if(this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}
		for(var i in this._plugins) {
			this._plugins[i].destroy();
		}
		this.$stage.children('.cloned').remove();
		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};
	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch(o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};
	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if(element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if(element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};
	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if(element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if(element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};
	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			handler = $.camelCase(
				$.grep(['on', name, namespace], function(v) {
					return v
				})
				.join('-').toLowerCase()
			),
			event = $.Event(
				[name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
				$.extend({
					relatedTarget: this
				}, status, data)
			);
		if(!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if(plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});
			this.register({
				type: Owl.Type.Event,
				name: name
			});
			this.$element.trigger(event);
			if(this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}
		return event;
	};
	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if(this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}
			this._states.current[name]++;
		}, this));
	};
	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};
	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if(object.type === Owl.Type.Event) {
			if(!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}
			if(!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if(_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if(object.type === Owl.Type.State) {
			if(!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}
			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};
	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};
	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};
	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = {
			x: null,
			y: null
		};
		event = event.originalEvent || event || window.event;
		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
			event.changedTouches[0] : event;
		if(event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}
		return result;
	};
	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};
	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};
	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');
			if(!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);
				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({
						type: Owl.Type.Event,
						name: event
					});
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if(e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}
			if(typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};
	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;
		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};
	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if(this._interval) {
			return;
		}
		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};
	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if(this._core.isVisible() === this._visible) {
			return;
		}
		this._visible = !this._visible;
		this._core.$element.toggleClass('owl-hidden', !this._visible);
		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};
	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;
		window.clearInterval(this._interval);
		for(handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);
/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];
		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if(!e.namespace) {
					return;
				}
				if(!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}
				if((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) {
							this.load(v)
						}, this);
					if(settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						if(settings.loop) {
							position -= settings.lazyLoadEager;
							n++;
						}
					}
					while(i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};
	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');
		if(!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}
		$elements.each($.proxy(function(index, element) {
			var $element = $(element),
				image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
			this._core.trigger('load', {
				element: $element,
				url: url
			}, 'lazy');
			if($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this)).attr('src', url);
			} else if($element.is('source')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', {
						element: $element,
						url: url
					}, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));
		this._loaded.push($item.get(0));
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;
		for(handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);
/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		this._previousHeight = null;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if(e.namespace && this._core.settings.autoHeight &&
					e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;
		$(window).on('load', function() {
			if(refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});
		$(window).resize(function() {
			if(refThis._core.settings.autoHeight) {
				if(refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}
				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});
	};
	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};
	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;
		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});
		maxheight = Math.max.apply(null, heights);
		if(maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}
		this._previousHeight = maxheight;
		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};
	AutoHeight.prototype.destroy = function() {
		var handler, property;
		for(handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);
/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};
		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;
		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if(e.namespace) {
					this._core.register({
						type: 'state',
						name: 'playing',
						tags: ['interacting']
					});
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if(!e.namespace) {
					return;
				}
				var $element = $(e.content).find('.owl-video');
				if($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};
		this._core.options = $.extend({}, Video.Defaults, this._core.options);
		this._core.$element.on(this._handlers);
		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};
	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};
	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
		var type = (function() {
				if(target.attr('data-vimeo-id')) {
					return 'vimeo';
				} else if(target.attr('data-vzaar-id')) {
					return 'vzaar'
				} else {
					return 'youtube';
				}
			})(),
			id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
			width = target.attr('data-width') || this._core.settings.videoWidth,
			height = target.attr('data-height') || this._core.settings.videoHeight,
			url = target.attr('href');
		if(url) {
			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id
					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/
			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
			if(id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if(id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if(id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}
		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};
		item.attr('data-video', url);
		this.thumbnail(target, this._videos[url]);
	};
	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';
				if(settings.lazyLoad) {
					tnLink = $('<div/>', {
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $('<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};
		target.wrap($('<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));
		if(this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}
		if(customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}
		if(video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if(video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if(video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};
	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};
	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;
		if(this._playing) {
			return;
		}
		this._core.enter('playing');
		this._core.trigger('play', null, 'video');
		item = this._core.items(this._core.relative(item.index()));
		this._core.reset(item.index());
		html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
		html.attr('height', height);
		html.attr('width', width);
		if(video.type === 'youtube') {
			html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
		} else if(video.type === 'vimeo') {
			html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
		} else if(video.type === 'vzaar') {
			html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
		}
		iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));
		this._playing = item.addClass('owl-video-playing');
	};
	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
			document.webkitFullscreenElement;
		return element && $(element).parent().hasClass('owl-video-frame');
	};
	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;
		this._core.$element.off('click.owl.video');
		for(handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);
/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;
		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if(e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if(e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};
		this.core.$element.on(this.handlers);
	};
	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};
	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {
		if(this.core.settings.items !== 1) {
			return;
		}
		if(!$.support.animation || !$.support.transition) {
			return;
		}
		this.core.speed(0);
		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;
		if(this.core.current() === this.previous) {
			return;
		}
		if(outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css({
					'left': left + 'px'
				})
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}
		if(incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};
	Animate.prototype.clear = function(e) {
		$(e.target).css({
				'left': ''
			})
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;
		for(handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);
/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De CaluwÃ©
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;
		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;
		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;
		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && e.property.name === 'settings') {
					if(this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if(e.namespace && e.property.name === 'position' && this._paused) {
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if(e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if(e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if(this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if(this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if(this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if(this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};
		this._core.$element.on(this._handlers);
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};
	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};
	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);
		if(this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}
	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};
	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;
		if(!this._core.is('rotating')) {
			this._core.enter('rotating');
		}
		timeout = timeout || this._core.settings.autoplayTimeout;
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
		if(this._paused) {
			this._time = this.read();
			this._paused = false;
		} else {
			window.clearTimeout(this._call);
		}
		this._time += this.read() % timeout - elapsed;
		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};
	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if(this._core.is('rotating')) {
			this._time = 0;
			this._paused = true;
			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};
	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if(this._core.is('rotating') && !this._paused) {
			this._time = this.read();
			this._paused = true;
			window.clearTimeout(this._call);
		}
	};
	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;
		this.stop();
		for(handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);
/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	'use strict';
	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;
		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];
		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};
		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];
		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;
		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if(e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
		this.$element.on(this._handlers);
	};
	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};
	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) :
			$('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));
		if(!settings.dotsData) {
			this._templates = [$('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML')
			];
		}
		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) :
			$('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ?
				$(e.target).index() : $(e.target).parent().index();
			e.preventDefault();
			this.to(index, settings.dotsSpeed);
		}, this));
		/*$el.on('focusin', function() {
			$(document).off(".carousel");
			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/
		for(override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};
	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;
		for(handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for(control in this._controls) {
			if(control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for(override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData ?
			1 : settings.dotsEach || settings.items;
		if(settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}
		if(settings.dots || settings.slideBy == 'page') {
			this._pages = [];
			for(i = lower, j = 0, k = 0; i < upper; i++) {
				if(j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if(Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};
	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;
		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
		if(settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}
		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
		if(settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;
			if(settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if(difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if(difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}
			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};
	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;
		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ?
				1 : settings.dotsEach || settings.items)
		};
	};
	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};
	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;
		if(settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}
		return position;
	};
	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};
	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};
	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;
		if(!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);
/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	'use strict';
	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};
		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;
		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if(e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if(e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
					if(!hash) {
						return;
					}
					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if(e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();
					if(!hash || window.location.hash.slice(1) === hash) {
						return;
					}
					window.location.hash = hash;
				}
			}, this)
		};
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);
		this.$element.on(this._handlers);
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);
			if(position === undefined || position === this._core.current()) {
				return;
			}
			this._core.to(this._core.relative(position), false, true);
		}, this));
	};
	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};
	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;
		$(window).off('hashchange.owl.navigation');
		for(handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for(property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};
	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);
/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;
(function($, window, document, undefined) {
	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);
		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if(style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});
		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}
	if(tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[$.support.transition];
	}
	if(tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[$.support.animation];
	}
	if(tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);;
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * LayerSlider is using TweenLite, TimeLineLite, EasePack & CSSPlugin
 */
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if(!''.replace(/^/, String)) {
		while(c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function(e) {
			return d[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while(c--) {
		if(k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}('!18(t,e){"4I 4J";1b i=t.5r=t.5r||t;1c(!i.3A){1b r,s,n,a,o,l=18(t){1b e,r=t.1t("."),s=i;1d(e=0;r.1f>e;e++)s[r[e]]=s=s[r[e]]||{};1a s},h=l("5p.5o"),u=1e-10,f=18(t){1b e,i=[],r=t.1f;1d(e=0;e!==r;i.24(t[e++]));1a i},p=18(){},19=18(){1b t=az.1A.a1,e=t.2h([]);1a 18(i){1a 1g!=i&&(i 2p 42||"4q"==1k i&&!!i.24&&t.2h(i)===e)}}(),c={},d=18(r,s,n,a){15.59=c[r]?c[r].59:[],c[r]=15,15.5C=1g,15.9D=n;1b o=[];15.6Q=18(h){1d(1b u,f,p,19,m=s.1f,g=m;--m>-1;)(u=c[s[m]]||1j d(s[m],[])).5C?(o[m]=u.5C,g--):h&&u.59.24(15);1c(0===g&&n)1d(f=("5p.5o."+r).1t("."),p=f.4K(),19=l(f.1I("."))[p]=15.5C=n.4i(n,o),a&&(i[p]=19,"18"==1k 3H&&3H.6R?3H((t.8U?t.8U+"/":"")+r.1t(".").4K(),[],18(){1a 19}):r===e&&"37"!=1k 2k&&2k.3n&&(2k.3n=19)),m=0;15.59.1f>m;m++)15.59[m].6Q()},15.6Q(!0)},m=t.3J=18(t,e,i,r){1a 1j d(t,e,i,r)},g=h.8z=18(t,e,i){1a e=e||18(){},m(t,[],18(){1a e},i),e};m.70=i;1b v=[0,0,1,1],x=[],y=g("2A.8A",18(t,e,i,r){15.7b=t,15.7C=i||0,15.7A=r||0,15.7a=e?v.4O(e):v},!0),T=y.8Y={},w=y.8y=18(t,e,i,r){1d(1b s,n,a,o,l=e.1t(","),u=l.1f,f=(i||"5G,6U,5A").1t(",");--u>-1;)1d(n=l[u],s=r?g("2A."+n,1g,!0):h.2A[n]||{},a=f.1f;--a>-1;)o=f[a],T[n+"."+o]=T[o+n]=s[o]=t.2C?t:t[o]||1j t};1d(n=y.1A,n.3T=!1,n.2C=18(t){1c(15.7b)1a 15.7a[0]=t,15.7b.4i(1g,15.7a);1b e=15.7C,i=15.7A,r=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);1a 1===i?r*=r:2===i?r*=r*r:3===i?r*=r*r*r:4===i&&(r*=r*r*r*r),1===e?1-r:2===e?r:.5>t?r/2:1-r/2},r=["9o","7T","bt","aW","aM,aP"],s=r.1f;--s>-1;)n=r[s]+",ba"+s,w(1j y(1g,1g,1,s),n,"6U",!0),w(1j y(1g,1g,2,s),n,"5G"+(0===s?",aH":"")),w(1j y(1g,1g,3,s),n,"5A");T.bz=h.2A.9o.5G,T.an=h.2A.7T.5A;1b b=g("8q.8p",18(t){15.4n={},15.7R=t||15});n=b.1A,n.9V=18(t,e,i,r,s){s=s||0;1b n,l,h=15.4n[t],u=0;1d(1g==h&&(15.4n[t]=h=[]),l=h.1f;--l>-1;)n=h[l],n.c===e&&n.s===i?h.3c(l,1):0===u&&s>n.2w&&(u=l+1);h.3c(u,0,{c:e,s:i,8Z:r,2w:s}),15!==a||o||a.3g()},n.bm=18(t,e){1b i,r=15.4n[t];1c(r)1d(i=r.1f;--i>-1;)1c(r[i].c===e)1a 2y r.3c(i,1)},n.8v=18(t){1b e,i,r,s=15.4n[t];1c(s)1d(e=s.1f,i=15.7R;--e>-1;)r=s[e],r&&(r.8Z?r.c.2h(r.s||i,{2f:t,2J:i}):r.c.2h(r.s||i))};1b P=t.aJ,O=t.aw,S=84.aN||18(){1a(1j 84).bs()},k=S();1d(r=["6a","bq","9U","o"],s=r.1f;--s>-1&&!P;)P=t[r[s]+"bp"],O=t[r[s]+"bk"]||t[r[s]+"a8"];g("6f",18(t,e){1b i,r,s,n,l,h=15,f=S(),19=e!==!1&&P,c=a5,d=33,m="6h",g=18(t){1b e,a,o=S()-k;o>c&&(f+=o-d),k+=o,h.3q=(k-f)/8l,e=h.3q-l,(!i||e>0||t===!0)&&(h.3C++,l+=e+(e>=n?.aF:n-e),a=!0),t!==!0&&(s=r(g)),a&&h.8v(m)};b.2h(h),h.3q=h.3C=0,h.6h=18(){g(!0)},h.7e=18(t,e){c=t||1/u,d=1i.aD(e,c,0)},h.67=18(){1g!=s&&(19&&O?O(s):ao(s),r=p,s=1g,h===a&&(o=!1))},h.3g=18(){1g!==s?h.67():h.3C>10&&(k=S()-c+5),r=0===i?p:19&&P?P:18(t){1a 6j(t,0|8l*(l-h.3q)+1)},h===a&&(o=!0),g(2)},h.6T=18(t){1a 2n.1f?(i=t,n=1/(i||60),l=15.3q+n,2y h.3g()):i},h.8j=18(t){1a 2n.1f?(h.67(),19=t,2y h.6T(i)):19},h.6T(t),6j(18(){19&&5>h.3C&&h.8j(!1)},aI)}),n=h.6f.1A=1j h.8q.8p,n.2V=h.6f;1b A=g("5N.93",18(t,e){1c(15.1w=e=e||{},15.1D=15.2i=t||0,15.2K=1P(e.4F)||0,15.1C=1,15.2l=e.1X===!0,15.1y=e.1y,15.2F=e.4y===!0,V){o||a.3g();1b i=15.1w.7l?j:V;i.1V(15,i.1p),15.1w.2W&&15.2W(!0)}});a=A.78=1j h.6f,n=A.1A,n.2z=n.1K=n.2u=n.1F=!1,n.1E=n.1p=0,n.1B=-1,n.1h=n.3i=n.3O=n.1r=n.26=1g,n.1F=!1;1b C=18(){o&&S()-k>8E&&a.3g(),6j(C,8E)};C(),n.7P=18(t,e){1a 1g!=t&&15.41(t,e),15.4y(!1).2W(!1)},n.7f=18(t,e){1a 1g!=t&&15.41(t,e),15.2W(!0)},n.aa=18(t,e){1a 1g!=t&&15.41(t,e),15.2W(!1)},n.41=18(t,e){1a 15.2R(1P(t),e!==!1)},n.ah=18(t,e){1a 15.4y(!1).2W(!1).2R(t?-15.2K:0,e!==!1,!0)},n.80=18(t,e){1a 1g!=t&&15.41(t||15.27(),e),15.4y(!0).2W(!1)},n.1G=18(){},n.4H=18(){1a 15.1p=15.1E=0,15.2u=15.1K=!1,15.1B=-1,(15.1K||!15.26)&&15.1H(!0),15},n.5c=18(){1b t,e=15.1r,i=15.1l;1a!e||!15.1K&&!15.1F&&e.5c()&&(t=e.4g())>=i&&i+15.27()/15.1C>t},n.1H=18(t,e){1a o||a.3g(),15.1K=!t,15.2l=15.5c(),e!==!0&&(t&&!15.26?15.1r.1V(15,15.1l-15.2K):!t&&15.26&&15.1r.40(15,!0)),!1},n.2s=18(){1a 15.1H(!1,!1)},n.3R=18(t,e){1a 15.2s(t,e),15},n.3m=18(t){1d(1b e=t?15:15.26;e;)e.2z=!0,e=e.26;1a 15},n.5R=18(t){1d(1b e=t.1f,i=t.4O();--e>-1;)"{5v}"===t[e]&&(i[e]=15);1a i},n.4j=18(t){1b e=15.1w;e[t].4i(e[t+"8h"]||e.5s||15,e[t+"8I"]||x)},n.ab=18(t,e,i,r){1c("bw"===(t||"").1u(0,2)){1b s=15.1w;1c(1===2n.1f)1a s[t];1g==e?4d s[t]:(s[t]=e,s[t+"8I"]=19(i)&&-1!==i.1I("").1m("{5v}")?15.5R(i):i,s[t+"8h"]=r),"4B"===t&&(15.3O=e)}1a 15},n.4F=18(t){1a 2n.1f?(15.1r.2r&&15.8M(15.1l+t-15.2K),15.2K=t,15):15.2K},n.2B=18(t){1a 2n.1f?(15.1D=15.2i=t,15.3m(!0),15.1r.2r&&15.1p>0&&15.1p<15.1D&&0!==t&&15.2R(15.1E*(t/15.1D),!0),15):(15.2z=!1,15.1D)},n.27=18(t){1a 15.2z=!1,2n.1f?15.2B(t):15.2i},n.3q=18(t,e){1a 2n.1f?(15.2z&&15.27(),15.2R(t>15.1D?15.1D:t,e)):15.1p},n.2R=18(t,e,i){1c(o||a.3g(),!2n.1f)1a 15.1E;1c(15.1r){1c(0>t&&!i&&(t+=15.27()),15.1r.2r){15.2z&&15.27();1b r=15.2i,s=15.1r;1c(t>r&&!i&&(t=r),15.1l=(15.1F?15.5g:s.1p)-(15.2F?r-t:t)/15.1C,s.2z||15.3m(!1),s.1r)1d(;s.1r;)s.1r.1p!==(s.1l+s.1E)/s.1C&&s.2R(s.1E,!0),s=s.1r}15.1K&&15.1H(!0,!1),(15.1E!==t||0===15.1D)&&(15.1G(t,e,!1),z.1f&&q())}1a 15},n.bv=n.br=18(t,e){1a 2n.1f?15.2R(15.2B()*t,e):15.1p/15.2B()},n.8M=18(t){1a 2n.1f?(t!==15.1l&&(15.1l=t,15.26&&15.26.4V&&15.26.1V(15,t-15.2K)),15):15.1l},n.aR=18(t){1a 15.1l+(0!=t?15.27():15.2B())/15.1C},n.6M=18(t){1c(!2n.1f)1a 15.1C;1c(t=t||u,15.1r&&15.1r.2r){1b e=15.5g,i=e||0===e?e:15.1r.2R();15.1l=i-(i-15.1l)*15.1C/t}1a 15.1C=t,15.3m(!1)},n.4y=18(t){1a 2n.1f?(t!=15.2F&&(15.2F=t,15.2R(15.1r&&!15.1r.2r?15.27()-15.1E:15.1E,!0)),15):15.2F},n.2W=18(t){1c(!2n.1f)1a 15.1F;1b e,i,r=15.1r;1a t!=15.1F&&r&&(o||t||a.3g(),e=r.4g(),i=e-15.5g,!t&&r.2r&&(15.1l+=i,15.3m(!1)),15.5g=t?e:1g,15.1F=t,15.2l=15.5c(),!t&&0!==i&&15.2u&&15.2B()&&15.1G(r.2r?15.1E:(e-15.1l)/15.1C,!0,!0)),15.1K&&!t&&15.1H(!0,!1),15};1b R=g("5N.95",18(t){A.2h(15,0,t),15.3N=15.2r=!0});n=R.1A=1j A,n.2V=R,n.3R().1K=!1,n.28=n.3i=n.4W=1g,n.4V=!1,n.1V=n.85=18(t,e){1b i,r;1c(t.1l=1P(e||0)+t.2K,t.1F&&15!==t.1r&&(t.5g=t.1l+(15.4g()-t.1l)/t.1C),t.26&&t.26.40(t,!0),t.26=t.1r=15,t.1K&&t.1H(!0,!0),i=15.3i,15.4V)1d(r=t.1l;i&&i.1l>r;)i=i.1n;1a i?(t.1h=i.1h,i.1h=t):(t.1h=15.28,15.28=t),t.1h?t.1h.1n=t:15.3i=t,t.1n=i,15.4W=t,15.1r&&15.3m(!0),15},n.40=18(t,e){1a t.26===15&&(e||t.1H(!1,!0),t.1n?t.1n.1h=t.1h:15.28===t&&(15.28=t.1h),t.1h?t.1h.1n=t.1n:15.3i===t&&(15.3i=t.1n),t.1h=t.1n=t.26=1g,t===15.4W&&(15.4W=15.3i),15.1r&&15.3m(!0)),15},n.1G=18(t,e,i){1b r,s=15.28;1d(15.1E=15.1p=15.1B=t;s;)r=s.1h,(s.2l||t>=s.1l&&!s.1F)&&(s.2F?s.1G((s.2z?s.27():s.2i)-(t-s.1l)*s.1C,e,i):s.1G((t-s.1l)*s.1C,e,i)),s=r},n.4g=18(){1a o||a.3g(),15.1E};1b M=g("3A",18(e,i,r){1c(A.2h(15,i,r),15.1G=M.1A.1G,1g==e)7g"7W 3V a 1g 2J.";15.2J=e="1O"!=1k e?e:M.48(e)||e;1b s,n,a,o=e.aQ||e.1f&&e!==t&&e[0]&&(e[0]===t||e[0].3S&&e[0].1v&&!e.3S),l=15.1w.5e;1c(15.7j=l=1g==l?B[M.7O]:"2E"==1k l?l>>0:B[l],(o||e 2p 42||e.24&&19(e))&&"2E"!=1k e[0])1d(15.2N=a=f(e),15.4a=[],15.3b=[],s=0;a.1f>s;s++)n=a[s],n?"1O"!=1k n?n.1f&&n!==t&&n[0]&&(n[0]===t||n[0].3S&&n[0].1v&&!n.3S)?(a.3c(s--,1),15.2N=a=a.4O(f(n))):(15.3b[s]=W(n,15,!1),1===l&&15.3b[s].1f>1&&G(n,15,1g,1,15.3b[s])):(n=a[s--]=M.48(n),"1O"==1k n&&a.3c(s+1,1)):a.3c(s--,1);1o 15.4a={},15.3b=W(e,15,!1),1===l&&15.3b.1f>1&&G(e,15,1g,1,15.3b);(15.1w.1X||0===i&&0===15.2K&&15.1w.1X!==!1)&&(15.1p=-u,15.1G(-15.2K))},!0),D=18(e){1a e&&e.1f&&e!==t&&e[0]&&(e[0]===t||e[0].3S&&e[0].1v&&!e.3S)},X=18(t,e){1b i,r={};1d(i 1x t)Y[i]||i 1x e&&"2Q"!==i&&"x"!==i&&"y"!==i&&"2D"!==i&&"3j"!==i&&"3M"!==i&&"4w"!==i||!(!N[i]||N[i]&&N[i].aX)||(r[i]=t[i],4d t[i]);t.57=r};n=M.1A=1j A,n.2V=M,n.3R().1K=!1,n.3x=0,n.1s=n.2N=n.3z=n.1Z=1g,n.56=n.3k=!1,M.4M="1.17.0",M.7B=n.2M=1j y(1g,1g,1,1),M.7O="2m",M.78=a,M.7y=9K,M.7e=18(t,e){a.7e(t,e)},M.48=t.$||t.7X||18(e){1b i=t.$||t.7X;1a i?(M.48=i,i(e)):"37"==1k 52?e:52.91?52.91(e):52.af("#"===e.1z(0)?e.1u(1):e)};1b z=[],F={},I=M.5f={9Y:19,9g:D,9Z:z},N=M.am={},E=I.a9={},L=0,Y=I.9C={4e:1,4F:1,5e:1,4E:1,6s:1,at:1,7l:1,5d:1,3o:1,4B:1,aY:1,b5:1,5h:1,b0:1,aZ:1,3Z:1,96:1,aS:1,by:1,bh:1,ac:1,69:1,aC:1,1X:1,5M:1,ar:1,1y:1,2W:1,4y:1,7n:1,2Z:1,5n:1,5s:1},B={3E:0,4A:1,2m:2,aK:3,au:4,av:5,"bo":1,"as":0},j=A.8n=1j R,V=A.ap=1j R,U=30,q=I.9P=18(){1b t,e=z.1f;1d(F={};--e>-1;)t=z[e],t&&t.3k!==!1&&(t.1G(t.3k[0],t.3k[1],!0),t.3k=!1);z.1f=0};V.1l=a.3q,j.1l=a.3C,V.2l=j.2l=!0,6j(q,1),A.8H=M.1G=18(){1b t,e,i;1c(z.1f&&q(),V.1G((a.3q-V.1l)*V.1C,!1,!1),j.1G((a.3C-j.1l)*j.1C,!1,!1),z.1f&&q(),a.3C>=U){U=a.3C+(3l(M.7y,10)||9K);1d(i 1x E){1d(e=E[i].3X,t=e.1f;--t>-1;)e[t].1K&&e.3c(t,1);0===e.1f&&4d E[i]}1c(i=V.28,(!i||i.1F)&&M.7y&&!j.28&&1===a.4n.6h.1f){1d(;i&&i.1F;)i=i.1h;i||a.67()}}},a.9V("6h",A.8H);1b W=18(t,e,i){1b r,s,n=t.6b;1c(E[n||(t.6b=n="t"+L++)]||(E[n]={2J:t,3X:[]}),e&&(r=E[n].3X,r[s=r.1f]=e,i))1d(;--s>-1;)r[s]===e&&r.3c(s,1);1a E[n].3X},Z=18(t,e,i,r){1b s,n,a=t.1w.5n;1a a&&(s=a(t,e,i,r)),a=M.5n,a&&(n=a(t,e,i,r)),s!==!1&&n!==!1},G=18(t,e,i,r,s){1b n,a,o,l;1c(1===r||r>=4){1d(l=s.1f,n=0;l>n;n++)1c((o=s[n])!==e)o.1K||o.2s(1g,t,e)&&(a=!0);1o 1c(5===r)8u;1a a}1b h,f=e.1l+u,p=[],19=0,c=0===e.1D;1d(n=s.1f;--n>-1;)(o=s[n])===e||o.1K||o.1F||(o.1r!==e.1r?(h=h||Q(e,0,c),0===Q(o,h,c)&&(p[19++]=o)):f>=o.1l&&o.1l+o.27()/o.1C>f&&((c||!o.2u)&&2e-10>=f-o.1l||(p[19++]=o)));1d(n=19;--n>-1;)1c(o=p[n],2===r&&o.2s(i,t,e)&&(a=!0),2!==r||!o.1s&&o.2u){1c(2!==r&&!Z(o,e))aV;o.1H(!1,!1)&&(a=!0)}1a a},Q=18(t,e,i){1d(1b r=t.1r,s=r.1C,n=t.1l;r.1r;){1c(n+=r.1l,s*=r.1C,r.1F)1a-1M;r=r.1r}1a n/=s,n>e?n-e:i&&n===e||!t.2u&&2*u>n-e?u:(n+=t.27()/t.1C/s)>e+u?0:n-e-u};n.7o=18(){1b t,e,i,r,s,n=15.1w,a=15.3z,o=15.1D,l=!!n.1X,h=n.4e;1c(n.3o){15.1Z&&(15.1Z.1G(-1,!0),15.1Z.3R()),s={};1d(r 1x n.3o)s[r]=n.3o[r];1c(s.5e=!1,s.1X=!0,s.2Z=l&&n.2Z!==!1,s.3o=s.4F=1g,15.1Z=M.4p(15.2J,0,s),l)1c(15.1p>0)15.1Z=1g;1o 1c(0!==o)1a}1o 1c(n.5d&&0!==o)1c(15.1Z)15.1Z.1G(-1,!0),15.1Z.3R(),15.1Z=1g;1o{0!==15.1p&&(l=!1),i={};1d(r 1x n)Y[r]&&"7n"!==r||(i[r]=n[r]);1c(i.5e=0,i.1y="82",i.2Z=l&&n.2Z!==!1,i.1X=l,15.1Z=M.4p(15.2J,0,i),l){1c(0===15.1p)1a}1o 15.1Z.7o(),15.1Z.1H(!1),15.1w.1X&&(15.1Z=1g)}1c(15.2M=h=h?h 2p y?h:"18"==1k h?1j y(h,n.69):T[h]||M.7B:M.7B,n.69 2p 42&&h.3y&&(15.2M=h.3y.4i(h,n.69)),15.7i=15.2M.7C,15.8r=15.2M.7A,15.1s=1g,15.2N)1d(t=15.2N.1f;--t>-1;)15.5m(15.2N[t],15.4a[t]={},15.3b[t],a?a[t]:1g)&&(e=!0);1o e=15.5m(15.2J,15.4a,15.3b,a);1c(e&&M.64("5S",15),a&&(15.1s||"18"!=1k 15.2J&&15.1H(!1,!1)),n.5d)1d(i=15.1s;i;)i.s+=i.c,i.c=-i.c,i=i.1h;15.3O=n.4B,15.2u=!0},n.5m=18(e,i,r,s){1b n,a,o,l,h,u;1c(1g==e)1a!1;F[e.6b]&&q(),15.1w.57||e.1v&&e!==t&&e.3S&&N.57&&15.1w.7n!==!1&&X(15.1w,e);1d(n 1x 15.1w){1c(u=15.1w[n],Y[n])u&&(u 2p 42||u.24&&19(u))&&-1!==u.1I("").1m("{5v}")&&(15.1w[n]=u=15.5R(u,15));1o 1c(N[n]&&(l=1j N[n]).72(e,15.1w[n],15)){1d(15.1s=h={1h:15.1s,t:l,p:"1Y",s:0,c:1,f:!0,n:n,5u:!0,2w:l.74},a=l.2P.1f;--a>-1;)i[l.2P[a]]=15.1s;(l.74||l.5S)&&(o=!0),(l.7x||l.9i)&&(15.56=!0)}1o 15.1s=i[n]=h={1h:15.1s,t:e,p:n,f:"18"==1k e[n],n:n,5u:!1,2w:0},h.s=h.f?e[n.1m("4Q")||"18"!=1k e["8P"+n.1u(3)]?n:"8P"+n.1u(3)]():1q(e[n]),h.c="1O"==1k u&&"="===u.1z(1)?3l(u.1z(0)+"1",10)*1P(u.1u(2)):1P(u)-h.s||0;h&&h.1h&&(h.1h.1n=h)}1a s&&15.2s(s,e)?15.5m(e,i,r,s):15.7j>1&&15.1s&&r.1f>1&&G(e,15,i,15.7j,r)?(15.2s(i,e),15.5m(e,i,r,s)):(15.1s&&(15.1w.2Z!==!1&&15.1D||15.1w.2Z&&!15.1D)&&(F[e.6b]=!0),o)},n.1G=18(t,e,i){1b r,s,n,a,o=15.1p,l=15.1D,h=15.1B;1c(t>=l)15.1E=15.1p=l,15.3x=15.2M.3T?15.2M.2C(1):1,15.2F||(r=!0,s="4E",i=i||15.1r.3N),0===l&&(15.2u||!15.1w.2Z||i)&&(15.1l===15.1r.1D&&(t=0),(0===t||0>h||h===u&&"5B"!==15.1y)&&h!==t&&(i=!0,h>u&&(s="3Z")),15.1B=a=!e||t||h===t?t:u);1o 1c(1e-7>t)15.1E=15.1p=0,15.3x=15.2M.3T?15.2M.2C(0):0,(0!==o||0===l&&h>0)&&(s="3Z",r=15.2F),0>t&&(15.2l=!1,0===l&&(15.2u||!15.1w.2Z||i)&&(h>=0&&(h!==u||"5B"!==15.1y)&&(i=!0),15.1B=a=!e||t||h===t?t:u)),15.2u||(i=!0);1o 1c(15.1E=15.1p=t,15.7i){1b f=t/l,p=15.7i,19=15.8r;(1===p||3===p&&f>=.5)&&(f=1-f),3===p&&(f*=2),1===19?f*=f:2===19?f*=f*f:3===19?f*=f*f*f:4===19&&(f*=f*f*f*f),15.3x=1===p?1-f:2===p?f:.5>t/l?f/2:1-f/2}1o 15.3x=15.2M.2C(t/l);1c(15.1p!==o||i){1c(!15.2u){1c(15.7o(),!15.2u||15.1K)1a;1c(!i&&15.1s&&(15.1w.2Z!==!1&&15.1D||15.1w.2Z&&!15.1D))1a 15.1p=15.1E=o,15.1B=h,z.24(15),2y(15.3k=[t,e]);15.1p&&!r?15.3x=15.2M.2C(15.1p/l):r&&15.2M.3T&&(15.3x=15.2M.2C(0===15.1p?0:1))}1d(15.3k!==!1&&(15.3k=!1),15.2l||!15.1F&&15.1p!==o&&t>=0&&(15.2l=!0),0===o&&(15.1Z&&(t>=0?15.1Z.1G(t,e,i):s||(s="bA")),15.1w.5h&&(0!==15.1p||0===l)&&(e||15.4j("5h"))),n=15.1s;n;)n.f?n.t[n.p](n.c*15.3x+n.s):n.t[n.p]=n.c*15.3x+n.s,n=n.1h;15.3O&&(0>t&&15.1Z&&t!==-1e-4&&15.1Z.1G(t,e,i),e||(15.1p!==o||r)&&15.4j("4B")),s&&(!15.1K||i)&&(0>t&&15.1Z&&!15.3O&&t!==-1e-4&&15.1Z.1G(t,e,i),r&&(15.1r.3N&&15.1H(!1,!1),15.2l=!1),!e&&15.1w[s]&&15.4j(s),0===l&&15.1B===u&&a!==u&&(15.1B=0))}},n.2s=18(t,e,i){1c("4A"===t&&(t=1g),1g==t&&(1g==e||e===15.2J))1a 15.3k=!1,15.1H(!1,!1);e="1O"!=1k e?e||15.2N||15.2J:M.48(e)||e;1b r,s,n,a,o,l,h,u,f,p=i&&15.1p&&i.1l===15.1l&&15.1r===i.1r;1c((19(e)||D(e))&&"2E"!=1k e[0])1d(r=e.1f;--r>-1;)15.2s(t,e[r],i)&&(l=!0);1o{1c(15.2N){1d(r=15.2N.1f;--r>-1;)1c(e===15.2N[r]){o=15.4a[r]||{},15.3z=15.3z||[],s=15.3z[r]=t?15.3z[r]||{}:"4A";8u}}1o{1c(e!==15.2J)1a!1;o=15.4a,s=15.3z=t?15.3z||{}:"4A"}1c(o){1c(h=t||o,u=t!==s&&"4A"!==s&&t!==o&&("4q"!=1k t||!t.aA),i&&(M.5n||15.1w.5n)){1d(n 1x h)o[n]&&(f||(f=[]),f.24(n));1c((f||!t)&&!Z(15,i,e,f))1a!1}1d(n 1x h)(a=o[n])&&(p&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.5u&&a.t.2s(h)&&(l=!0),a.5u&&0!==a.t.2P.1f||(a.1n?a.1n.1h=a.1h:a===15.1s&&(15.1s=a.1h),a.1h&&(a.1h.1n=a.1n),a.1h=a.1n=1g),4d o[n]),u&&(s[n]=1);!15.1s&&15.2u&&15.1H(!1,!1)}}1a l},n.4H=18(){1a 15.56&&M.64("7x",15),15.1s=15.3z=15.1Z=15.3O=1g,15.56=15.2l=15.3k=!1,15.4a=15.2N?{}:[],A.1A.4H.2h(15),15.1w.1X&&(15.1p=-u,15.1G(-15.2K)),15},n.1H=18(t,e){1c(o||a.3g(),t&&15.1K){1b i,r=15.2N;1c(r)1d(i=r.1f;--i>-1;)15.3b[i]=W(r[i],15,!0);1o 15.3b=W(15.2J,15,!0)}1a A.1A.1H.2h(15,t,e),15.56&&15.1s?M.64(t?"9i":"7x",15):!1},M.4p=18(t,e,i){1a 1j M(t,e,i)},M.6q=18(t,e,i){1a i.5d=!0,i.1X=0!=i.1X,1j M(t,e,i)},M.5Z=18(t,e,i,r){1a r.3o=i,r.1X=0!=r.1X&&0!=i.1X,1j M(t,e,r)},M.4v=18(t,e,i,r,s){1a 1j M(e,0,{4F:t,4E:e,6s:i,5s:r,3Z:e,96:i,1X:!1,2Z:!1,7l:s,5e:0})},M.4Q=18(t,e){1a 1j M(t,0,e)},M.4C=18(t,e){1c(1g==t)1a[];t="1O"!=1k t?t:M.48(t)||t;1b i,r,s,n;1c((19(t)||D(t))&&"2E"!=1k t[0]){1d(i=t.1f,r=[];--i>-1;)r=r.4O(M.4C(t[i],e));1d(i=r.1f;--i>-1;)1d(n=r[i],s=i;--s>-1;)n===r[s]&&r.3c(i,1)}1o 1d(r=W(t).4O(),i=r.1f;--i>-1;)(r[i].1K||e&&!r[i].5c())&&r.3c(i,1);1a r},M.aj=M.aq=18(t,e,i){"4q"==1k e&&(i=e,e=!1);1d(1b r=M.4C(t,e),s=r.1f;--s>-1;)r[s].2s(i,t)};1b $=g("5q.8O",18(t,e){15.2P=(t||"").1t(","),15.5t=15.2P[0],15.74=e||0,15.a3=$.1A},!0);1c(n=$.1A,$.4M="1.10.1",$.49=2,n.1s=1g,n.a6=18(t,e,i,r,s,n){1b a,o;1a 1g!=r&&(a="2E"==1k r||"="!==r.1z(1)?1P(r)-1P(i):3l(r.1z(0)+"1",10)*1P(r.1u(2)))?(15.1s=o={1h:15.1s,t:t,p:e,s:i,c:a,f:"18"==1k t[e],n:s||e,r:n},o.1h&&(o.1h.1n=o),o):2y 0},n.1Y=18(t){1d(1b e,i=15.1s,r=1e-6;i;)e=i.c*t+i.s,i.r?e=1i.3P(e):r>e&&e>-r&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i.1h},n.2s=18(t){1b e,i=15.2P,r=15.1s;1c(1g!=t[15.5t])15.2P=[];1o 1d(e=i.1f;--e>-1;)1g!=t[i[e]]&&i.3c(e,1);1d(;r;)1g!=t[r.n]&&(r.1h&&(r.1h.1n=r.1n),r.1n?(r.1n.1h=r.1h,r.1n=1g):15.1s===r&&(15.1s=r.1h)),r=r.1h;1a!1},n.9G=18(t,e){1d(1b i=15.1s;i;)(t[15.5t]||1g!=i.n&&t[i.n.1t(15.5t+"19").1I("")])&&(i.r=e),i=i.1h},M.64=18(t,e){1b i,r,s,n,a,o=e.1s;1c("5S"===t){1d(;o;){1d(a=o.1h,r=s;r&&r.2w>o.2w;)r=r.1h;(o.1n=r?r.1n:n)?o.1n.1h=o:s=o,(o.1h=r)?r.1n=o:n=o,o=a}o=e.1s=s}1d(;o;)o.5u&&"18"==1k o.t[t]&&o.t[t]()&&(i=!0),o=o.1h;1a i},$.6O=18(t){1d(1b e=t.1f;--e>-1;)t[e].49===$.49&&(N[(1j t[e]).5t]=t[e]);1a!0},m.2L=18(t){1c(!(t&&t.9J&&t.9H&&t.49))7g"ay 2L a4.";1b e,i=t.9J,r=t.6n||0,s=t.al,n={9H:"72",4Q:"1Y",3R:"2s",3P:"9G",aE:"5S"},a=g("5q."+i.1z(0).5Q()+i.1u(1)+"9Q",18(){$.2h(15,i,r),15.2P=s||[]},t.3G===!0),o=a.1A=1j $(i);o.2V=a,a.49=t.49;1d(e 1x n)"18"==1k t[e]&&(o[n[e]]=t[e]);1a a.4M=t.4M,$.6O([a]),a},r=t.3t){1d(s=0;r.1f>s;s++)r[s]();1d(n 1x c)c[n].9D||t.7d.7Q("bl aL bj bf: 5p.5o."+n)}o=!1}}("37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43,"3A");1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("8s",["5N.93","5N.95","3A"],18(t,e,i){1b r=18(t){e.2h(15,t),15.2U={},15.3N=15.1w.3N===!0,15.2r=15.1w.2r===!0,15.4V=!0,15.3O=15.1w.4B;1b i,r,s=15.1w;1d(r 1x s)i=s[r],l(i)&&-1!==i.1I("").1m("{5v}")&&(s[r]=15.5R(i));l(s.3X)&&15.1V(s.3X,0,s.b8,s.b1)},s=1e-10,n=i.5f,a=r.5f={},o=n.9g,l=n.9Y,h=n.9Z,u=n.9P,f=[],p=1J.3J.70,19=18(t){1b e,i={};1d(e 1x t)i[e]=t[e];1a i},c=a.aO=18(t,e,i,r){1b n,a=t.1r,o=a.1E,l=t.1l,h=0>t.1B||0===t.1B&&a.2F,u=h?0:s,p=h?s:0;1c(e||!15.58){1d(a.7f(l),n=t.1n;n&&n.1l===l;)n.1B=p,n=n.1n;1d(n=t.1h;n&&n.1l===l;)n.1B=u,n=n.1h;e&&e.4i(r||a.1w.5s||a,i||f),(15.58||!a.1F)&&a.41(o)}},d=18(t){1b e,i=[],r=t.1f;1d(e=0;e!==r;i.24(t[e++]));1a i},m=r.1A=1j e;1a r.4M="1.17.0",m.2V=r,m.3R().1K=m.58=!1,m.4p=18(t,e,r,s){1b n=r.5M&&p.7h||i;1a e?15.1V(1j n(t,e,r),s):15.4Q(t,r,s)},m.6q=18(t,e,r,s){1a 15.1V((r.5M&&p.7h||i).6q(t,e,r),s)},m.5Z=18(t,e,r,s,n){1b a=s.5M&&p.7h||i;1a e?15.1V(a.5Z(t,e,r,s),n):15.4Q(t,s,n)},m.6G=18(t,e,s,n,a,l,h,u){1b f,p=1j r({4E:l,6s:h,5s:u,2r:15.2r});1d("1O"==1k t&&(t=i.48(t)||t),t=t||[],o(t)&&(t=d(t)),n=n||0,0>n&&(t=d(t),t.80(),n*=-1),f=0;t.1f>f;f++)s.3o&&(s.3o=19(s.3o)),p.4p(t[f],e,19(s),f*n);1a 15.1V(p,a)},m.ax=18(t,e,i,r,s,n,a,o){1a i.1X=0!=i.1X,i.5d=!0,15.6G(t,e,i,r,s,n,a,o)},m.aB=18(t,e,i,r,s,n,a,o,l){1a r.3o=i,r.1X=0!=r.1X&&0!=i.1X,15.6G(t,e,r,s,n,a,o,l)},m.2h=18(t,e,r,s){1a 15.1V(i.4v(0,t,e,r),s)},m.4Q=18(t,e,r){1a r=15.3F(r,0,!0),1g==e.1X&&(e.1X=r===15.1p&&!15.1F),15.1V(1j i(t,0,e),r)},r.a0=18(t,e){t=t||{},1g==t.2r&&(t.2r=!0);1b s,n,a=1j r(t),o=a.1r;1d(1g==e&&(e=!0),o.40(a,!0),a.1l=0,a.1B=a.1p=a.1E=o.1p,s=o.28;s;)n=s.1h,e&&s 2p i&&s.2J===s.1w.4E||a.1V(s,s.1l-s.2K),s=n;1a o.1V(a,0),a},m.1V=18(s,n,a,o){1b h,u,f,p,19,c;1c("2E"!=1k n&&(n=15.3F(n,0,!0,s)),!(s 2p t)){1c(s 2p 42||s&&s.24&&l(s)){1d(a=a||"a2",o=o||0,h=n,u=s.1f,f=0;u>f;f++)l(p=s[f])&&(p=1j r({3X:p})),15.1V(p,h),"1O"!=1k p&&"18"!=1k p&&("ak"===a?h=p.1l+p.27()/p.1C:"ag"===a&&(p.1l-=p.4F())),h+=o;1a 15.3m(!0)}1c("1O"==1k s)1a 15.87(s,n);1c("18"!=1k s)7g"7W 1V "+s+" bi bd 26; bc bg 9h a 3V, 26, 18, bx 1O.";s=i.4v(0,s)}1c(e.1A.1V.2h(15,s,n),(15.1K||15.1p===15.1D)&&!15.1F&&15.1D<15.2B())1d(19=15,c=19.4g()>s.1l;19.1r;)c&&19.1r.2r?19.2R(19.1E,!0):19.1K&&19.1H(!0,!1),19=19.1r;1a 15},m.61=18(e){1c(e 2p t)1a 15.40(e,!1);1c(e 2p 42||e&&e.24&&l(e)){1d(1b i=e.1f;--i>-1;)15.61(e[i]);1a 15}1a"1O"==1k e?15.8g(e):15.3R(1g,e)},m.40=18(t,i){e.1A.40.2h(15,t,i);1b r=15.3i;1a r?15.1p>r.1l+r.2i/r.1C&&(15.1p=15.2B(),15.1E=15.2i):15.1p=15.1E=15.1D=15.2i=0,15},m.bb=18(t,e){1a 15.1V(t,15.3F(1g,e,!0,t))},m.85=m.aU=18(t,e,i,r){1a 15.1V(t,e||0,i,r)},m.b6=18(t,e,i,r){1a 15.1V(t,15.3F(1g,e,!0,t),i,r)},m.87=18(t,e){1a 15.2U[t]=15.3F(e),15},m.b3=18(t,e,r,s){1b n=i.4v(0,c,["{5v}",e,r,s],15);1a n.1y="5B",15.1V(n,t)},m.8g=18(t){1a 4d 15.2U[t],15},m.b2=18(t){1a 1g!=15.2U[t]?15.2U[t]:-1},m.3F=18(e,i,r,s){1b n;1c(s 2p t&&s.26===15)15.61(s);1o 1c(s&&(s 2p 42||s.24&&l(s)))1d(n=s.1f;--n>-1;)s[n]2p t&&s[n].26===15&&15.61(s[n]);1c("1O"==1k i)1a 15.3F(i,r&&"2E"==1k e&&1g==15.2U[i]?e-15.2B():0,r);1c(i=i||0,"1O"!=1k e||!76(e)&&1g==15.2U[e])1g==e&&(e=15.2B());1o{1c(n=e.1m("="),-1===n)1a 1g==15.2U[e]?r?15.2U[e]=15.2B()+i:i:15.2U[e]+i;i=3l(e.1z(n-1)+"1",10)*1P(e.1u(n+1)),e=n>1?15.3F(e.1u(0,n-1),0,r):15.2B()}1a 1P(e)+i},m.41=18(t,e){1a 15.2R("2E"==1k t?t:15.3F(t),e!==!1)},m.b4=18(){1a 15.2W(!0)},m.b9=18(t,e){1a 15.7P(t,e)},m.b7=18(t,e){1a 15.7f(t,e)},m.1G=18(t,e,i){15.1K&&15.1H(!0,!1);1b r,n,a,o,l,f=15.2z?15.27():15.2i,p=15.1p,19=15.1l,c=15.1C,d=15.1F;1c(t>=f)15.1E=15.1p=f,15.2F||15.7c()||(n=!0,o="4E",l=!!15.1r.3N,0===15.1D&&(0===t||0>15.1B||15.1B===s)&&15.1B!==t&&15.28&&(l=!0,15.1B>s&&(o="3Z"))),15.1B=15.1D||!e||t||15.1B===t?t:s,t=f+1e-4;1o 1c(1e-7>t)1c(15.1E=15.1p=0,(0!==p||0===15.1D&&15.1B!==s&&(15.1B>0||0>t&&15.1B>=0))&&(o="3Z",n=15.2F),0>t)15.2l=!1,15.1r.3N&&15.2F?(l=n=!0,o="3Z"):15.1B>=0&&15.28&&(l=!0),15.1B=t;1o{1c(15.1B=15.1D||!e||t||15.1B===t?t:s,0===t&&n)1d(r=15.28;r&&0===r.1l;)r.1D||(n=!1),r=r.1h;t=0,15.2u||(l=!0)}1o 15.1E=15.1p=15.1B=t;1c(15.1p!==p&&15.28||i||l){1c(15.2u||(15.2u=!0),15.2l||!15.1F&&15.1p!==p&&t>0&&(15.2l=!0),0===p&&15.1w.5h&&0!==15.1p&&(e||15.4j("5h")),15.1p>=p)1d(r=15.28;r&&(a=r.1h,!15.1F||d);)(r.2l||r.1l<=15.1p&&!r.1F&&!r.1K)&&(r.2F?r.1G((r.2z?r.27():r.2i)-(t-r.1l)*r.1C,e,i):r.1G((t-r.1l)*r.1C,e,i)),r=a;1o 1d(r=15.3i;r&&(a=r.1n,!15.1F||d);)(r.2l||p>=r.1l&&!r.1F&&!r.1K)&&(r.2F?r.1G((r.2z?r.27():r.2i)-(t-r.1l)*r.1C,e,i):r.1G((t-r.1l)*r.1C,e,i)),r=a;15.3O&&(e||(h.1f&&u(),15.4j("4B"))),o&&(15.1K||(19===15.1l||c!==15.1C)&&(0===15.1p||f>=15.27())&&(n&&(h.1f&&u(),15.1r.3N&&15.1H(!1,!1),15.2l=!1),!e&&15.1w[o]&&15.4j(o)))}},m.7c=18(){1d(1b t=15.28;t;){1c(t.1F||t 2p r&&t.7c())1a!0;t=t.1h}1a!1},m.5X=18(t,e,r,s){s=s||-5K;1d(1b n=[],a=15.28,o=0;a;)s>a.1l||(a 2p i?e!==!1&&(n[o++]=a):(r!==!1&&(n[o++]=a),t!==!1&&(n=n.4O(a.5X(!0,e,r)),o=n.1f))),a=a.1h;1a n},m.4C=18(t,e){1b r,s,n=15.1K,a=[],o=0;1d(n&&15.1H(!0,!0),r=i.4C(t),s=r.1f;--s>-1;)(r[s].26===15||e&&15.8J(r[s]))&&(a[o++]=r[s]);1a n&&15.1H(!1,!0),a},m.aT=18(){1a 15.4W},m.8J=18(t){1d(1b e=t.26;e;){1c(e===15)1a!0;e=e.26}1a!1},m.8T=18(t,e,i){i=i||0;1d(1b r,s=15.28,n=15.2U;s;)s.1l>=i&&(s.1l+=t),s=s.1h;1c(e)1d(r 1x n)n[r]>=i&&(n[r]+=t);1a 15.3m(!0)},m.2s=18(t,e){1c(!t&&!e)1a 15.1H(!1,!1);1d(1b i=e?15.4C(e):15.5X(!0,!0,!1),r=i.1f,s=!1;--r>-1;)i[r].2s(t,e)&&(s=!0);1a s},m.bu=18(t){1b e=15.5X(!1,!0,!0),i=e.1f;1d(15.1p=15.1E=0;--i>-1;)e[i].1H(!1,!1);1a t!==!1&&(15.2U={}),15.3m(!0)},m.4H=18(){1d(1b e=15.28;e;)e.4H(),e=e.1h;1a t.1A.4H.2h(15)},m.1H=18(t,i){1c(t===15.1K)1d(1b r=15.28;r;)r.1H(t,!0),r=r.1h;1a e.1A.1H.2h(15,t,i)},m.2R=18(){15.58=!0;1b e=t.1A.2R.4i(15,2n);1a 15.58=!1,e},m.2B=18(t){1a 2n.1f?(0!==15.2B()&&0!==t&&15.6M(15.1D/t),15):(15.2z&&15.27(),15.1D)},m.27=18(t){1c(!2n.1f){1c(15.2z){1d(1b e,i,r=0,s=15.3i,n=ad;s;)e=s.1n,s.2z&&s.27(),s.1l>n&&15.4V&&!s.1F?15.1V(s,s.1l-s.2K):n=s.1l,0>s.1l&&!s.1F&&(r-=s.1l,15.1r.2r&&(15.1l+=s.1l/15.1C),15.8T(-s.1l,!1,-5K),n=0),i=s.1l+s.2i/s.1C,i>r&&(r=i),s=e;15.1D=15.2i=r,15.2z=!1}1a 15.2i}1a 0!==15.27()&&0!==t&&15.6M(15.2i/t),15},m.2W=18(e){1c(!e)1d(1b i=15.28,r=15.1p;i;)i.1l===r&&"5B"===i.1y&&(i.1B=0),i=i.1h;1a t.1A.2W.4i(15,2n)},m.ai=18(){1d(1b e=15.1r;e.1r;)e=e.1r;1a e===t.8n},m.4g=18(){1a 15.1F?15.1E:(15.1r.4g()-15.1l)*15.1C},r},!0)}),1J.3J&&1J.3t.4K()(),18(t){"4I 4J";1b e=18(){1a(1J.5r||1J)[t]};"18"==1k 3H&&3H.6R?3H(["3A"],e):"37"!=1k 2k&&2k.3n&&(8i("./3A.6V"),2k.3n=e())}("8s");1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("2A.8x",["2A.8A"],18(t){1b e,i,r,s=1J.5r||1J,n=s.5p.5o,a=2*1i.4S,o=1i.4S/2,l=n.8z,h=18(e,i){1b r=l("2A."+e,18(){},!0),s=r.1A=1j t;1a s.2V=r,s.2C=i,r},u=t.8y||18(){},f=18(t,e,i,r){1b s=l("2A."+t,{6U:1j e,5G:1j i,5A:1j r},!0);1a u(s,t),s},p=18(t,e,i){15.t=t,15.v=e,i&&(15.5E=i,i.5D=15,15.c=i.v-e,15.8k=i.t-t)},19=18(e,i){1b r=l("2A."+e,18(t){15.23=t||0===t?t:1.aG,15.2o=1.a7*15.23},!0),s=r.1A=1j t;1a s.2V=r,s.2C=i,s.3y=18(t){1a 1j r(t)},r},c=f("8x",19("bn",18(t){1a(t-=1)*t*((15.23+1)*t+15.23)+1}),19("bC",18(t){1a t*t*((15.23+1)*t-15.23)}),19("ek",18(t){1a 1>(t*=2)?.5*t*t*((15.2o+1)*t-15.2o):.5*((t-=2)*t*((15.2o+1)*t+15.2o)+2)})),d=l("2A.6P",18(t,e,i){e=e||0===e?e:.7,1g==t?t=.7:t>1&&(t=1),15.8w=1!==t?e:0,15.23=(1-t)/2,15.2o=t,15.3K=15.23+15.2o,15.3T=i===!0},!0),m=d.1A=1j t;1a m.2V=d,m.2C=18(t){1b e=t+(.5-t)*15.8w;1a 15.23>t?15.3T?1-(t=1-t/15.23)*t:e-(t=1-t/15.23)*t*t*t*e:t>15.3K?15.3T?1-(t=(t-15.3K)/15.23)*t:e+(t-e)*(t=(t-15.3K)/15.23)*t*t*t:15.3T?1:e},d.4e=1j d(.7,.7),m.3y=d.3y=18(t,e,i){1a 1j d(t,e,i)},e=l("2A.8W",18(t){t=t||1,15.23=1/t,15.2o=t+1},!0),m=e.1A=1j t,m.2V=e,m.2C=18(t){1a 0>t?t=0:t>=1&&(t=.dX),(15.2o*t>>0)*15.23},m.3y=e.3y=18(t){1a 1j e(t)},i=l("2A.8X",18(e){e=e||{};1d(1b i,r,s,n,a,o,l=e.dp||"3E",h=[],u=0,f=0|(e.do||20),19=f,c=e.dz!==!1,d=e.dA===!0,m=e.8C 2p t?e.8C:1g,g="2E"==1k e.8B?.4*e.8B:.4;--19>-1;)i=c?1i.8t():1/f*19,r=m?m.2C(i):i,"3E"===l?s=g:"dE"===l?(n=1-i,s=n*n*g):"1x"===l?s=i*i*g:.5>i?(n=2*i,s=.5*n*n*g):(n=2*(1-i),s=.5*n*n*g),c?r+=1i.8t()*s-.5*s:19%2?r+=.5*s:r-=.5*s,d&&(r>1?r=1:0>r&&(r=0)),h[u++]={x:i,y:r};1d(h.dF(18(t,e){1a t.x-e.x}),o=1j p(1,1,1g),19=f;--19>-1;)a=h[19],o=1j p(a.x,a.y,o);15.1n=1j p(0,0,0!==o.t?o:o.5E)},!0),m=i.1A=1j t,m.2V=i,m.2C=18(t){1b e=15.1n;1c(t>e.t){1d(;e.5E&&t>=e.t;)e=e.5E;e=e.5D}1o 1d(;e.5D&&e.t>=t;)e=e.5D;1a 15.1n=e,e.v+(t-e.t)/e.8k*e.c},m.3y=18(t){1a 1j i(t)},i.4e=1j i,f("dG",h("dH",18(t){1a 1/2.75>t?7.2X*t*t:2/2.75>t?7.2X*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.2X*(t-=2.25/2.75)*t+.6W:7.2X*(t-=2.6Y/2.75)*t+.6X}),h("dI",18(t){1a 1/2.75>(t=1-t)?1-7.2X*t*t:2/2.75>t?1-(7.2X*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.2X*(t-=2.25/2.75)*t+.6W):1-(7.2X*(t-=2.6Y/2.75)*t+.6X)}),h("dJ",18(t){1b e=.5>t;1a t=e?1-2*t:2*t-1,t=1/2.75>t?7.2X*t*t:2/2.75>t?7.2X*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.2X*(t-=2.25/2.75)*t+.6W:7.2X*(t-=2.6Y/2.75)*t+.6X,e?.5*(1-t):.5*t+.5})),f("dB",h("dC",18(t){1a 1i.3f(1-(t-=1)*t)}),h("dD",18(t){1a-(1i.3f(1-t*t)-1)}),h("dK",18(t){1a 1>(t*=2)?-.5*(1i.3f(1-t*t)-1):.5*(1i.3f(1-(t-=2)*t)+1)})),r=18(e,i,r){1b s=l("2A."+e,18(t,e){15.23=t>=1?t:1,15.2o=(e||r)/(1>t?t:1),15.3K=15.2o/a*(1i.dL(1/15.23)||0),15.2o=a/15.2o},!0),n=s.1A=1j t;1a n.2V=s,n.2C=i,n.3y=18(t,e){1a 1j s(t,e)},s},f("dT",r("dU",18(t){1a 15.23*1i.3L(2,-10*t)*1i.2t((t-15.3K)*15.2o)+1},.3),r("dV",18(t){1a-(15.23*1i.3L(2,10*(t-=1))*1i.2t((t-15.3K)*15.2o))},.3),r("dW",18(t){1a 1>(t*=2)?-.5*15.23*1i.3L(2,10*(t-=1))*1i.2t((t-15.3K)*15.2o):.5*15.23*1i.3L(2,-10*(t-=1))*1i.2t((t-15.3K)*15.2o)+1},.45)),f("dS",h("dR",18(t){1a 1-1i.3L(2,-10*t)}),h("dN",18(t){1a 1i.3L(2,10*(t-1))-.6w}),h("dM",18(t){1a 1>(t*=2)?.5*1i.3L(2,10*(t-1)):.5*(2-1i.3L(2,-10*(t-1)))})),f("dO",h("dP",18(t){1a 1i.2t(t*o)}),h("dQ",18(t){1a-1i.2S(t*o)+1}),h("dy",18(t){1a-.5*(1i.2S(1i.4S*t)-1)})),l("2A.dx",{dg:18(e){1a t.8Y[e]}},!0),u(s.6P,"6P","4e,"),u(i,"8X","4e,"),u(e,"8W","4e,"),c},!0)}),1J.3J&&1J.3t.4K()();1b 1J="37"!=1k 2k&&2k.3n&&"37"!=1k 3G?3G:15||43;(1J.3t||(1J.3t=[])).24(18(){"4I 4J";1J.3J("5q.9L",["5q.8O","3A"],18(t,e){1b i,r,s,n,a=18(){t.2h(15,"57"),15.2P.1f=0,15.1Y=a.1A.1Y},o=1J.3J.70,l={},h=a.1A=1j t("57");h.2V=a,a.4M="1.17.0",a.49=2,a.6H=0,a.8G="di",a.9b=!0,h="2j",a.79={4T:h,8e:h,8d:h,51:h,2D:h,3j:h,dj:h,7q:h,7H:h,3a:h,df:""};1b u,f,p,19,c,d,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,g=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,v=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-dd-d9-9]*(?:%|\\b)/3Q,x=/(?![+-]?\\d*\\.?\\d+|[+-]|e[+-]\\d+)[^0-9]/g,y=/(?:\\d|\\-|\\+|=|#|\\.)*/g,T=/2a *= *([^)]*)/i,w=/2a:([^;]*)/i,b=/3U\\(2a *=.+?\\)/i,P=/^(6e|6r)/,O=/([A-Z])/g,S=/-([a-z])/3Q,k=/(^(?:8F\\(\\"|8F\\())|(?:(\\"\\))$|\\)$)/3Q,A=18(t,e){1a e.5Q()},C=/(?:6K|86|8f)/i,R=/(9t|9s|9r|9q)=[\\d\\-\\.e]+/3Q,M=/9A\\:6z\\.6B\\.6A\\(.+?\\)/i,D=/,(?=[^\\)]*(?:\\(|$))/3Q,X=1i.4S/3D,z=3D/1i.4S,F={},I=52,N=18(t){1a I.5I?I.5I("9m://9l.9k.9d/d8/da",t):I.db(t)},E=N("dc"),L=N("dk"),Y=a.5f={dl:l},B=dt.du,j=18(){1b t=B.1m("94"),e=N("a");1a p=-1!==B.1m("dv")&&-1===B.1m("dw")&&(-1===t||1P(B.1u(t+8,1))>3),c=p&&6>1P(B.1u(B.1m("ds/")+8,1)),19=-1!==B.1m("dr"),(/dn ([0-9]{1,}[\\.0-9]{0,})/.7S(B)||/dm\\/.*dY:([0-9]{1,}[\\.0-9]{0,})/.7S(B))&&(d=1q(4D.$1)),e?(e.1v.3B="4T:dq;2a:.55;",/^0.55/.35(e.1v.2a)):!1}(),V=18(t){1a T.35("1O"==1k t?t:(t.3e?t.3e.2x:t.1v.2x)||"")?1q(4D.$1)/1M:1},U=18(t){43.7d&&7d.7Q(t)},q="",W="",Z=18(t,e){e=e||E;1b i,r,s=e.1v;1c(2y 0!==s[t])1a t;1d(t=t.1z(0).5Q()+t.1u(1),i=["O","ev","6a","eu","ej"],r=5;--r>-1&&2y 0===s[i[r]+t];);1a r>=0?(W=3===r?"6a":i[r],q="-"+W.6i()+"-",W+t):1g},G=I.7N?I.7N.e5:18(){},Q=a.e3=18(t,e,i,r,s){1b n;1a j||"2a"!==e?(!r&&t.1v[e]?n=t.1v[e]:(i=i||G(t))?n=i[e]||i.4o(e)||i.4o(e.1N(O,"-$1").6i()):t.3e&&(n=t.3e[e]),1g==s||n&&"3E"!==n&&"2m"!==n&&"2m 2m"!==n?n:s):V(t)},$=Y.e1=18(t,i,r,s,n){1c("2j"===s||!s)1a r;1c("2m"===s||!r)1a 0;1b o,l,h,u=C.35(i),f=t,p=E.1v,19=0>r;1c(19&&(r=-r),"%"===s&&-1!==i.1m("4w"))o=r/1M*(u?t.ef:t.eb);1o{1c(p.3B="4w:0 6k 83;4z:"+Q(t,"4z")+";ei-3j:0;","%"!==s&&f.65)p[u?"92":"6C"]=r+s;1o{1c(f=t.5J||I.7D,l=f.71,h=e.78.3C,l&&u&&l.3q===h)1a l.2D*r/1M;p[u?"2D":"3j"]=r+s}f.65(E),o=1q(E[u?"4X":"4Y"]),f.7F(E),u&&"%"===s&&a.ea!==!1&&(l=f.71=f.71||{},l.3q=h,l.2D=1M*(o/r)),0!==o||n||(o=$(t,i,r,s,!0))}1a 19?-o:o},H=Y.e9=18(t,e,i){1c("7J"!==Q(t,"4z",i))1a 0;1b r="51"===e?"6K":"8a",s=Q(t,"7H"+r,i);1a t["ec"+r]-($(t,e,1q(s),s.1N(y,""))||0)},K=18(t,e){1b i,r,s,n={};1c(e=e||G(t,1g))1c(i=e.1f)1d(;--i>-1;)s=e[i],(-1===s.1m("-2Q")||6v===s)&&(n[s.1N(S,A)]=e.4o(s));1o 1d(i 1x e)(-1===i.1m("9j")||be===i)&&(n[i]=e[i]);1o 1c(e=t.3e||t.1v)1d(i 1x e)"1O"==1k i&&2y 0===n[i]&&(n[i.1N(S,A)]=e[i]);1a j||(n.2a=V(t)),r=4N(t,e,!1),n.1W=r.1W,n.21=r.21,n.2q=r.2q,n.2G=r.2G,n.x=r.x,n.y=r.y,34&&(n.z=r.z,n.22=r.22,n.29=r.29,n.36=r.36),n.88&&4d n.88,n},J=18(t,e,i,r,s){1b n,a,o,l={},h=t.1v;1d(a 1x i)"3B"!==a&&"1f"!==a&&76(a)&&(e[a]!==(n=i[a])||s&&s[a])&&-1===a.1m("ed")&&("2E"==1k n||"1O"==1k n)&&(l[a]="2m"!==n||"51"!==a&&"4T"!==a?""!==n&&"2m"!==n&&"3E"!==n||"1O"!=1k e[a]||""===e[a].1N(x,"")?n:0:H(t,a),2y 0!==h[a]&&(o=1j 62(h,a,h[a],o)));1c(r)1d(a 1x r)"3M"!==a&&(l[a]=r[a]);1a{5O:l,4R:o}},8b={2D:["6K","86"],3j:["8a","eh"]},ee=["9p","9f","9X","98"],8R=18(t,e,i){1b r=1q("2D"===e?t.4X:t.4Y),s=8b[e],n=s.1f;1d(i=i||G(t,1g);--n>-1;)r-=1q(Q(t,"7q"+s[n],i,!0))||0,r-=1q(Q(t,"4w"+s[n]+"8f",i,!0))||0;1a r},4r=18(t,e){(1g==t||""===t||"2m"===t||"2m 2m"===t)&&(t="0 0");1b i=t.1t(" "),r=-1!==t.1m("51")?"0%":-1!==t.1m("8e")?"1M%":i[0],s=-1!==t.1m("4T")?"0%":-1!==t.1m("8d")?"1M%":i[1];1a 1g==s?s="77"===r?"50%":"0":"77"===s&&(s="50%"),("77"===r||76(1q(r))&&-1===(r+"").1m("="))&&(r="50%"),t=r+" "+s+(i.1f>2?" "+i[2]:""),e&&(e.9u=-1!==r.1m("%"),e.9v=-1!==s.1m("%"),e.eg="="===r.1z(1),e.e8="="===s.1z(1),e.63=1q(r.1N(x,"")),e.6y=1q(s.1N(x,"")),e.v=t),e||t},6u=18(t,e){1a"1O"==1k t&&"="===t.1z(1)?3l(t.1z(0)+"1",10)*1q(t.1u(2)):1q(t)-1q(e)},2H=18(t,e){1a 1g==t?e:"1O"==1k t&&"="===t.1z(1)?3l(t.1z(0)+"1",10)*1q(t.1u(2))+e:1q(t)},ae=18(t,e,i,r){1b s,n,a,o,l,h=1e-6;1a 1g==t?o=e:"2E"==1k t?o=t:(s=6m,n=t.1t("19"),l="="===t.1z(1),a=(l?3l(t.1z(0)+"1",10)*1q(n[0].1u(2)):1q(n[0]))*(-1===t.1m("e7")?1:z)-(l?0:e),n.1f&&(r&&(r[i]=e+a),-1!==t.1m("e0")&&(a%=s,a!==a%(s/2)&&(a=0>a?a+s:a-s)),-1!==t.1m("dZ")&&0>a?a=(a+5K*s)%s-(0|a/s)*s:-1!==t.1m("e2")&&a>0&&(a=(a-5K*s)%s-(0|a/s)*s)),o=e+a),h>o&&o>-h&&(o=0),o},44={e6:[0,1R,1R],e4:[0,1R,0],el:[5Y,5Y,5Y],9W:[0,0,0],et:[2Y,0,0],ew:[0,2Y,2Y],er:[0,0,1R],es:[0,0,2Y],en:[1R,1R,1R],eo:[1R,0,1R],eq:[2Y,2Y,0],ep:[1R,1R,0],dh:[1R,d6,0],c6:[2Y,2Y,2Y],c7:[2Y,0,2Y],c8:[0,2Y,0],83:[1R,0,0],c9:[1R,5Y,c5],c4:[0,1R,1R],4L:[1R,1R,1R,0]},5H=18(t,e,i){1a t=0>t?t+1:t>1?t-1:t,0|1R*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},6d=a.c0=18(t){1b e,i,r,s,n,a;1a t&&""!==t?"2E"==1k t?[t>>16,1R&t>>8,1R&t]:(","===t.1z(t.1f-1)&&(t=t.1u(0,t.1f-1)),44[t]?44[t]:"#"===t.1z(0)?(4===t.1f&&(e=t.1z(1),i=t.1z(2),r=t.1z(3),t="#"+e+e+i+i+r+r),t=3l(t.1u(1),16),[t>>16,1R&t>>8,1R&t]):"6r"===t.1u(0,3)?(t=t.2O(m),s=1P(t[0])%6m/6m,n=1P(t[1])/1M,a=1P(t[2])/1M,i=.5>=a?a*(n+1):a+n-a*n,e=2*a-i,t.1f>3&&(t[3]=1P(t[3])),t[0]=5H(s+1/3,e,i),t[1]=5H(s,e,i),t[2]=5H(s-1/3,e,i),t):(t=t.2O(m)||44.4L,t[0]=1P(t[0]),t[1]=1P(t[1]),t[2]=1P(t[2]),t.1f>3&&(t[3]=1P(t[3])),t)):44.9W},3W="(?:\\\\b(?:(?:6e|6Z|6r|c1)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1d(h 1x 44)3W+="|"+h+"\\\\b";3W=4D(3W+")","3Q");1b 7k=18(t,e,i,r){1c(1g==t)1a 18(t){1a t};1b s,n=e?(t.2O(3W)||[""])[0]:"",a=t.1t(n).1I("").2O(v)||[],o=t.1u(0,t.1m(a[0])),l=")"===t.1z(t.1f-1)?")":"",h=-1!==t.1m(" ")?" ":",",u=a.1f,f=u>0?a[0].1N(m,""):"";1a u?s=e?18(t){1b e,p,19,c;1c("2E"==1k t)t+=f;1o 1c(r&&D.35(t)){1d(c=t.1N(D,"|").1t("|"),19=0;c.1f>19;19++)c[19]=s(c[19]);1a c.1I(",")}1c(e=(t.2O(3W)||[n])[0],p=t.1t(e).1I("").2O(v)||[],19=p.1f,u>19--)1d(;u>++19;)p[19]=i?p[0|(19-1)/2]:a[19];1a o+p.1I(h)+h+e+l+(-1!==t.1m("7I")?" 7I":"")}:18(t){1b e,n,p;1c("2E"==1k t)t+=f;1o 1c(r&&D.35(t)){1d(n=t.1N(D,"|").1t("|"),p=0;n.1f>p;p++)n[p]=s(n[p]);1a n.1I(",")}1c(e=t.2O(v)||[],p=e.1f,u>p--)1d(;u>++p;)e[p]=i?e[0|(p-1)/2]:a[p];1a o+e.1I(h)+l}:18(t){1a t}},68=18(t){1a t=t.1t(","),18(e,i,r,s,n,a,o){1b l,h=(i+"").1t(" ");1d(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];1a s.31(e,o,n,a)}},62=(Y.c2=18(t){15.2L.1Y(t);1d(1b e,i,r,s,n=15.1y,a=n.9T,o=n.4R,l=1e-6;o;)e=a[o.v],o.r?e=1i.3P(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o.1h;1c(n.9S&&(n.9S.1W=a.1W),1===t)1d(o=n.4R;o;){1c(i=o.t,i.2f){1c(1===i.2f){1d(s=i.1U+i.s+i.4h,r=1;i.l>r;r++)s+=i["3r"+r]+i["38"+(r+1)];i.e=s}}1o i.e=i.s+i.1U;o=o.1h}},18(t,e,i,r,s){15.t=t,15.p=e,15.v=i,15.r=s,r&&(r.1n=15,15.1h=r)}),ce=(Y.c3=18(t,e,i,r,s,n){1b a,o,l,h,u,f=r,p={},19={},c=i.3I,d=F;1d(i.3I=1g,F=e,r=u=i.31(t,e,r,s),F=d,n&&(i.3I=c,f&&(f.1n=1g,f.1n&&(f.1n.1h=1g)));r&&r!==f;){1c(1>=r.2f&&(o=r.p,19[o]=r.s+r.c,p[o]=r.s,n||(h=1j 62(r,"s",o,h,r.r),r.c=0),1===r.2f))1d(a=r.l;--a>0;)l="3r"+a,o=r.p+"19"+l,19[o]=r.1y[l],p[o]=r[l],n||(h=1j 62(r,l,o,h,r.5P[l]));r=r.1h}1a{9T:p,ca:19,4R:h,cb:u}},Y.cj=18(t,e,r,s,a,o,l,h,u,f,p){15.t=t,15.p=e,15.s=r,15.c=s,15.n=l||e,t 2p ce||n.24(15.n),15.r=h,15.2f=o||0,u&&(15.2w=u,i=!0),15.b=2y 0===f?r:f,15.e=2y 0===p?r+s:p,a&&(15.1h=a,a.1n=15)}),de=18(t,e,i,r,s,n){1b a=1j ce(t,e,i,r-i,s,-1,n);1a a.b=i,a.e=a.1U=r,a},5l=a.4u=18(t,e,i,r,s,n,a,o,l,h){i=i||n||"",a=1j ce(t,e,0,0,a,h?2:1,1g,!1,o,i,r),r+="";1b f,p,19,c,d,v,x,y,T,w,b,O,S=i.1t(", ").1I(",").1t(" "),k=r.1t(", ").1I(",").1t(" "),A=S.1f,C=u!==!1;1d((-1!==r.1m(",")||-1!==i.1m(","))&&(S=S.1I(" ").1N(D,", ").1t(" "),k=k.1I(" ").1N(D,", ").1t(" "),A=S.1f),A!==k.1f&&(S=(n||"").1t(" "),A=S.1f),a.2L=l,a.1Y=h,f=0;A>f;f++)1c(c=S[f],d=k[f],y=1q(c),y||0===y)a.4f("",y,6u(d,y),d.1N(g,""),C&&-1!==d.1m("2j"),!0);1o 1c(s&&("#"===c.1z(0)||44[c]||P.35(c)))O=","===d.1z(d.1f-1)?"),":")",c=6d(c),d=6d(d),T=c.1f+d.1f>6,T&&!j&&0===d[3]?(a["38"+a.l]+=a.l?" 4L":"4L",a.e=a.e.1t(k[f]).1I("4L")):(j||(T=!1),a.4f(T?"6Z(":"6e(",c[0],d[0]-c[0],",",!0,!0).4f("",c[1],d[1]-c[1],",",!0).4f("",c[2],d[2]-c[2],T?",":O,!0),T&&(c=4>c.1f?1:c[3],a.4f("",c,(4>d.1f?1:d[3])-c,O,!1)));1o 1c(v=c.2O(m)){1c(x=d.2O(g),!x||x.1f!==v.1f)1a a;1d(19=0,p=0;v.1f>p;p++)b=v[p],w=c.1m(b,19),a.4f(c.1u(19,w-19),1P(b),6u(x[p],b),"",C&&"2j"===c.1u(w+b.1f,2),0===p),19=w+b.1f;a["38"+a.l]+=c.1u(19)}1o a["38"+a.l]+=a.l?" "+c:c;1c(-1!==r.1m("=")&&a.1y){1d(O=a.1U+a.1y.s,f=1;a.l>f;f++)O+=a["38"+f]+a.1y["3r"+f];a.e=O+a["38"+f]}1a a.l||(a.2f=-1,a.1U=a.e),a.46||a},2b=9;1d(h=ce.1A,h.l=h.2w=0;--2b>0;)h["3r"+2b]=0,h["38"+2b]="";h.1U="",h.1h=h.1n=h.46=h.1y=h.2L=h.1Y=h.5P=1g,h.4f=18(t,e,i,r,s,n){1b a=15,o=a.l;1a a["38"+o]+=n&&o?" "+t:t||"",i||0===o||a.2L?(a.l++,a.2f=a.1Y?2:1,a["38"+a.l]=r||"",o>0?(a.1y["3r"+o]=e+i,a.5P["3r"+o]=s,a["3r"+o]=e,a.2L||(a.46=1j ce(a,"3r"+o,e,i,a.46||a,0,a.n,s,a.2w),a.46.1U=0),a):(a.1y={s:e+i},a.5P={},a.s=e,a.c=i,a.r=s,a)):(a["38"+o]+=e+(r||""),a)};1b 6o=18(t,e){e=e||{},15.p=e.39?Z(t)||t:t,l[t]=l[15.p]=15,15.3d=e.5w||7k(e.2I,e.4G,e.ck,e.4m),e.2g&&(15.31=e.2g),15.9e=e.4G,15.4m=e.4m,15.5z=e.5z,15.4t=e.2I,15.2w=e.6n||0},1Q=Y.cl=18(t,e,i){"4q"!=1k e&&(e={2g:i});1b r,s,n=t.1t(","),a=e.2I;1d(i=i||[a],r=0;n.1f>r;r++)e.39=0===r&&e.39,e.2I=i[r]||a,s=1j 6o(n[r],e)},89=18(t){1c(!l[t]){1b e=t.1z(0).5Q()+t.1u(1)+"9Q";1Q(t,{2g:18(t,i,r,s,n,a,h){1b u=o.5p.5o.5q[e];1a u?(u.ci(),l[r].31(t,i,r,s,n,a,h)):(U("ch: "+e+" 6V bB 9h cc."),n)}})}};h=6o.1A,h.4u=18(t,e,i,r,s,n){1b a,o,l,h,u,f,p=15.5z;1c(15.4m&&(D.35(i)||D.35(e)?(o=e.1N(D,"|").1t("|"),l=i.1N(D,"|").1t("|")):p&&(o=[e],l=[i])),l){1d(h=l.1f>o.1f?l.1f:o.1f,a=0;h>a;a++)e=o[a]=o[a]||15.4t,i=l[a]=l[a]||15.4t,p&&(u=e.1m(p),f=i.1m(p),u!==f&&(-1===f?o[a]=o[a].1t(p).1I(""):-1===u&&(o[a]+=" "+p)));e=o.1I(", "),i=l.1I(", ")}1a 5l(t,15.p,e,i,15.9e,15.4t,r,15.2w,s,n)},h.31=18(t,e,i,r,n,a){1a 15.4u(t.1v,15.3d(Q(t,15.p,s,!1,15.4t)),15.3d(e),n,a)},a.cd=18(t,e,i){1Q(t,{2g:18(t,r,s,n,a,o){1b l=1j ce(t,s,0,0,a,2,s,!1,i);1a l.2L=o,l.1Y=e(t,r,n.3u,s),l},6n:i})},a.9F=p||19;1b 3p,7u="2q,2G,36,x,y,z,21,2T,1W,22,29,3a,1T,1S".1t(","),be=Z("2Q"),6v=q+"2Q",4P=Z("5x"),34=1g!==Z("3a"),5a=Y.9j=18(){15.3a=1q(a.6H)||0,15.47=a.9n!==!1&&34?a.9n||"2m":!1},9a=43.cf,6F=18(t,e,i){1b r,s=I.5I("9m://9l.9k.9d/cg/2v",t),n=/([a-z])([A-Z])/g;1d(r 1x i)s.bZ(1g,r.1N(n,"$1-$2").6i(),i[r]);1a e.65(s),s},6E=I.bY,9E=18(){1b t,e,i,r=d||/94/i.35(B)&&!43.bI;1a I.5I&&!r&&(t=6F("2v",6E),e=6F("7G",t,{2D:1M,3j:50,x:1M}),i=e.9M().2D,e.1v[4P]="50% 50%",e.1v[be]="2q(0.5)",r=i===e.9M().2D&&!(19&&34),6E.7F(t)),r}(),7z=18(t,e,i,r,s){1b n,o,l,h,u,f,p,19,c,d,m,g,v,x,y=t.3w,T=6D(t,!0);y&&(v=y.2d,x=y.2c),(!r||2>(n=r.1t(" ")).1f)&&(p=t.4s(),e=4r(e).1t(" "),n=[(-1!==e[0].1m("%")?1q(e[0])/1M*p.2D:1q(e[0]))+p.x,(-1!==e[1].1m("%")?1q(e[1])/1M*p.3j:1q(e[1]))+p.y]),i.2d=h=1q(n[0]),i.2c=u=1q(n[1]),r&&T!==5L&&(f=T[0],p=T[1],19=T[2],c=T[3],d=T[4],m=T[5],g=f*c-p*19,o=h*(c/g)+u*(-19/g)+(19*m-c*d)/g,l=h*(-p/g)+u*(f/g)-(f*m-p*d)/g,h=i.2d=n[0]=o,u=i.2c=n[1]=l),y&&(s||s!==!1&&a.9b!==!1?(o=h-v,l=u-x,y.3h+=o*T[0]+l*T[2]-o,y.3s+=o*T[1]+l*T[3]-l):y.3h=y.3s=0),t.4b("1y-2v-6p",n.1I(" "))},6I=18(t){1a!!(9a&&"18"==1k t.4s&&t.99&&(!t.5J||t.5J.4s&&t.5J.99))},5L=[1,0,0,1,0,0],6D=18(t,e){1b i,r,s,n,a,o=t.3w||1j 5a,l=5V;1c(be?r=Q(t,6v,1g,!0):t.3e&&(r=t.3e.2x.2O(R),r=r&&4===r.1f?[r[0].1u(4),1P(r[2].1u(4)),1P(r[1].1u(4)),r[3].1u(4),o.x||0,o.y||0].1I(","):""),i=!r||"3E"===r||"3v(1, 0, 0, 1, 0, 0)"===r,(o.2v||t.4s&&6I(t))&&(i&&-1!==(t.1v[be]+"").1m("3v")&&(r=t.1v[be],i=0),s=t.4U("2Q"),i&&s&&(-1!==s.1m("3v")?(r=s,i=0):-1!==s.1m("5b")&&(r="3v(1,0,0,1,"+s.2O(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3Q).1I(",")+")",i=0))),i)1a 5L;1d(s=(r||"").2O(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3Q)||[],2b=s.1f;--2b>-1;)n=1P(s[2b]),s[2b]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;1a e&&s.1f>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s},4N=Y.bJ=18(t,i,r,n){1c(t.3w&&r&&!n)1a t.3w;1b o,l,h,u,f,p,19=r?t.3w||1j 5a:1j 5a,c=0>19.2q,d=2e-5,m=5V,g=34?1q(Q(t,4P,i,!1,"0 0 0").1t(" ")[2])||19.32||0:0,v=1q(a.6H)||0;1c(19.2v=!(!t.4s||!6I(t)),19.2v&&(7z(t,Q(t,4P,s,!1,"50% 50%")+"",19,t.4U("1y-2v-6p")),3p=a.9F||9E),o=6D(t),o!==5L){1c(16===o.1f){1b x,y,T,w,b,P=o[0],O=o[1],S=o[2],k=o[3],A=o[4],C=o[5],R=o[6],M=o[7],D=o[8],X=o[9],F=o[10],I=o[12],N=o[13],E=o[14],L=o[11],Y=1i.5k(R,F);19.32&&(E=-19.32,I=D*E-o[12],N=X*E-o[13],E=F*E+19.32-o[14]),19.22=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),x=A*w+D*b,y=C*w+X*b,T=R*w+F*b,D=A*-b+D*w,X=C*-b+X*w,F=R*-b+F*w,L=M*-b+L*w,A=x,C=y,R=T),Y=1i.5k(D,F),19.29=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),x=P*w-D*b,y=O*w-X*b,T=S*w-F*b,X=O*b+X*w,F=S*b+F*w,L=k*b+L*w,P=x,O=y,S=T),Y=1i.5k(O,P),19.1W=Y*z,Y&&(w=1i.2S(-Y),b=1i.2t(-Y),P=P*w+A*b,y=O*w+C*b,C=O*-b+C*w,R=S*-b+R*w,O=y),19.22&&1i.5T(19.22)+1i.5T(19.1W)>bK.9&&(19.22=19.1W=0,19.29+=3D),19.2q=(0|1i.3f(P*P+O*O)*m+.5)/m,19.2G=(0|1i.3f(C*C+X*X)*m+.5)/m,19.36=(0|1i.3f(R*R+F*F)*m+.5)/m,19.21=0,19.3a=L?1/(0>L?-L:L):0,19.x=I,19.y=N,19.z=E,19.2v&&(19.x-=19.2d-(19.2d*P-19.2c*A),19.y-=19.2c-(19.2c*O-19.2d*C))}1o 1c(!(34&&!n&&o.1f&&19.x===o[4]&&19.y===o[5]&&(19.22||19.29)||2y 0!==19.x&&"3E"===Q(t,"6S",i))){1b B=o.1f>=6,j=B?o[0]:1,V=o[1]||0,U=o[2]||0,q=B?o[3]:1;19.x=o[4]||0,19.y=o[5]||0,h=1i.3f(j*j+V*V),u=1i.3f(q*q+U*U),f=j||V?1i.5k(V,j)*z:19.1W||0,p=U||q?1i.5k(U,q)*z+f:19.21||0,1i.5T(p)>90&&bL>1i.5T(p)&&(c?(h*=-1,p+=0>=f?3D:-3D,f+=0>=f?3D:-3D):(u*=-1,p+=0>=p?3D:-3D)),19.2q=h,19.2G=u,19.1W=f,19.21=p,34&&(19.22=19.29=19.z=0,19.3a=v,19.36=1),19.2v&&(19.x-=19.2d-(19.2d*j+19.2c*U),19.y-=19.2c-(19.2d*V+19.2c*q))}19.32=g;1d(l 1x 19)d>19[l]&&19[l]>-d&&(19[l]=0)}1a r&&(t.3w=19,19.2v&&(3p&&t.1v[be]?e.4v(.6w,18(){4Z(t.1v,be)}):!3p&&t.4U("2Q")&&e.4v(.6w,18(){t.5i("2Q")}))),19},8K=18(t){1b e,i,r=15.1y,s=-r.1W*X,n=s+r.21*X,a=5V,o=(0|1i.2S(s)*r.2q*a)/a,l=(0|1i.2t(s)*r.2q*a)/a,h=(0|1i.2t(n)*-r.2G*a)/a,u=(0|1i.2S(n)*r.2G*a)/a,f=15.t.1v,p=15.t.3e;1c(p){i=l,l=-h,h=-i,e=p.2x,f.2x="";1b 19,c,m=15.t.4X,g=15.t.4Y,v="7J"!==p.4z,x="9A:6z.6B.6A(9t="+o+", 9s="+l+", 9r="+h+", 9q="+u,w=r.x+m*r.1T/1M,b=r.y+g*r.1S/1M;1c(1g!=r.63&&(19=(r.9u?.5W*m*r.63:r.63)-m/2,c=(r.9v?.5W*g*r.6y:r.6y)-g/2,w+=19-(19*o+c*l),b+=c-(19*h+c*u)),v?(19=m/2,c=g/2,x+=", 9y="+(19-(19*o+c*l)+w)+", 9x="+(c-(19*h+c*u)+b)+")"):x+=", bH=\'2m bG\')",f.2x=-1!==e.1m("6z.6B.6A(")?e.1N(M,x):x+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===u&&(v&&-1===x.1m("9y=0, 9x=0")||T.35(e)&&1M!==1q(4D.$1)||-1===e.1m("d7("&&e.1m("bD"))&&f.5i("2x")),!v){1b P,O,S,k=8>d?1:-1;1d(19=r.5U||0,c=r.66||0,r.5U=1i.3P((m-((0>o?-o:o)*m+(0>l?-l:l)*g))/2+w),r.66=1i.3P((g-((0>u?-u:u)*g+(0>h?-h:h)*m))/2+b),2b=0;4>2b;2b++)O=ee[2b],P=p[O],i=-1!==P.1m("2j")?1q(P):$(15.t,O,1q(P),P.1N(y,""))||0,S=i!==r[O]?2>2b?-r.5U:-r.66:2>2b?19-r.5U:c-r.66,f[O]=(r[O]=1i.3P(i-S*(0===2b||2===2b?1:k)))+"2j"}}},8N=Y.bE=Y.bF=18(t){1b e,i,r,s,n,a,o,l,h,u,f,p,c,d,m,g,v,x,y,T,w,b,P,O=15.1y,S=15.t.1v,k=O.1W,A=O.22,C=O.29,R=O.2q,M=O.2G,D=O.36,z=O.x,F=O.y,I=O.z,N=O.2v,E=O.3a,L=O.47;1c(!((1!==t&&0!==t||"2m"!==L||15.3V.1E!==15.3V.2i&&15.3V.1E)&&L||I||E||C||A)||3p&&N||!34)1a 2y(k||O.21||N?(k*=X,b=O.21*X,P=5V,e=1i.2S(k)*R,s=1i.2t(k)*R,i=1i.2t(k-b)*-M,n=1i.2S(k-b)*M,b&&"9z"===O.4x&&(v=1i.9B(b),v=1i.3f(1+v*v),i*=v,n*=v,O.2T&&(e*=v,s*=v)),N&&(z+=O.2d-(O.2d*e+O.2c*i)+O.3h,F+=O.2c-(O.2d*s+O.2c*n)+O.3s,3p&&(O.1T||O.1S)&&(d=15.t.4s(),z+=.5W*O.1T*d.2D,F+=.5W*O.1S*d.3j),d=1e-6,d>z&&z>-d&&(z=0),d>F&&F>-d&&(F=0)),y=(0|e*P)/P+","+(0|s*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+z+","+F+")",N&&3p?15.t.4b("2Q","3v("+y):S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 3v(":"3v(")+y):S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 3v(":"3v(")+R+",0,0,"+M+","+z+","+F+")");1c(19&&(d=1e-4,d>R&&R>-d&&(R=D=2e-5),d>M&&M>-d&&(M=D=2e-5),!E||O.z||O.22||O.29||(E=0)),k||O.21)k*=X,m=e=1i.2S(k),g=s=1i.2t(k),O.21&&(k-=O.21*X,m=1i.2S(k),g=1i.2t(k),"9z"===O.4x&&(v=1i.9B(O.21*X),v=1i.3f(1+v*v),m*=v,g*=v,O.2T&&(e*=v,s*=v))),i=-g,n=m;1o{1c(!(C||A||1!==D||E||N))1a 2y(S[be]=(O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 9I(":"9I(")+z+"2j,"+F+"2j,"+I+"2j)"+(1!==R||1!==M?" 5j("+R+","+M+")":""));e=n=1,i=s=0}h=1,r=a=o=l=u=f=0,p=E?-1/E:0,c=O.32,d=1e-6,T=",",w="0",k=C*X,k&&(m=1i.2S(k),g=1i.2t(k),o=-g,u=p*-g,r=e*g,a=s*g,h=m,p*=m,e*=m,s*=m),k=A*X,k&&(m=1i.2S(k),g=1i.2t(k),v=i*m+r*g,x=n*m+a*g,l=h*g,f=p*g,r=i*-g+r*m,a=n*-g+a*m,h*=m,p*=m,i=v,n=x),1!==D&&(r*=D,a*=D,h*=D,p*=D),1!==M&&(i*=M,n*=M,l*=M,f*=M),1!==R&&(e*=R,s*=R,o*=R,u*=R),(c||N)&&(c&&(z+=r*-c,F+=a*-c,I+=h*-c+c),N&&(z+=O.2d-(O.2d*e+O.2c*i)+O.3h,F+=O.2c-(O.2d*s+O.2c*n)+O.3s),d>z&&z>-d&&(z=w),d>F&&F>-d&&(F=w),d>I&&I>-d&&(I=0)),y=O.1T||O.1S?"5b("+O.1T+"%,"+O.1S+"%) 97(":"97(",y+=(d>e&&e>-d?w:e)+T+(d>s&&s>-d?w:s)+T+(d>o&&o>-d?w:o),y+=T+(d>u&&u>-d?w:u)+T+(d>i&&i>-d?w:i)+T+(d>n&&n>-d?w:n),A||C?(y+=T+(d>l&&l>-d?w:l)+T+(d>f&&f>-d?w:f)+T+(d>r&&r>-d?w:r),y+=T+(d>a&&a>-d?w:a)+T+(d>h&&h>-d?w:h)+T+(d>p&&p>-d?w:p)+T):y+=",0,0,0,0,1,0,",y+=z+T+F+T+I+T+(E?1+-I/E:1)+")",S[be]=y};h=5a.1A,h.x=h.y=h.z=h.21=h.2T=h.1W=h.22=h.29=h.32=h.1T=h.1S=h.3h=h.3s=0,h.2q=h.2G=h.36=1,1Q("2Q,5j,2q,2G,36,x,y,z,1W,22,29,7s,21,2T,7t,7v,7m,bM,5x,7w,7Y,7V,9R,47,4x,1T,1S,8S",{2g:18(t,e,i,r,n,o,l){1c(r.73===l)1a n;r.73=l;1b h,u,f,p,19,c,d,m,g,v=t.3w,x=r.3I=4N(t,s,!0,l.9R),y=t.1v,T=1e-6,w=7u.1f,b=l,P={},O="5x";1c("1O"==1k b.2Q&&be)f=E.1v,f[be]=b.2Q,f.6S="bN",f.4z="7J",I.7D.65(E),h=4N(E,1g,!1),I.7D.7F(E),1g!=b.1T&&(h.1T=2H(b.1T,x.1T)),1g!=b.1S&&(h.1S=2H(b.1S,x.1S));1o 1c("4q"==1k b){1c(h={2q:2H(1g!=b.2q?b.2q:b.5j,x.2q),2G:2H(1g!=b.2G?b.2G:b.5j,x.2G),36:2H(b.36,x.36),x:2H(b.x,x.x),y:2H(b.y,x.y),z:2H(b.z,x.z),1T:2H(b.1T,x.1T),1S:2H(b.1S,x.1S),3a:2H(b.7Y,x.3a)},d=b.7V,1g!=d)1c("4q"==1k d)1d(f 1x d)b[f]=d[f];1o b.1W=d;"1O"==1k b.x&&-1!==b.x.1m("%")&&(h.x=0,h.1T=2H(b.x,x.1T)),"1O"==1k b.y&&-1!==b.y.1m("%")&&(h.y=0,h.1S=2H(b.y,x.1S)),h.1W=ae("1W"1x b?b.1W:"7t"1x b?b.7t+"7p":"7s"1x b?b.7s:x.1W,x.1W,"1W",P),34&&(h.22=ae("22"1x b?b.22:"7v"1x b?b.7v+"7p":x.22||0,x.22,"22",P),h.29=ae("29"1x b?b.29:"7m"1x b?b.7m+"7p":x.29||0,x.29,"29",P)),h.21=1g==b.21?x.21:ae(b.21,x.21),h.2T=1g==b.2T?x.2T:ae(b.2T,x.2T),(u=h.2T-x.2T)&&(h.21+=u,h.1W+=u)}1d(34&&1g!=b.47&&(x.47=b.47,c=!0),x.4x=b.4x||x.4x||a.8G,19=x.47||x.z||x.22||x.29||h.z||h.22||h.29||h.3a,19||1g==b.5j||(h.36=1);--w>-1;)i=7u[w],p=h[i]-x[i],(p>T||-T>p||1g!=b[i]||1g!=F[i])&&(c=!0,n=1j ce(x,i,x[i],p,n),i 1x P&&(n.e=P[i]),n.1U=0,n.2L=o,r.2P.24(n.n));1a p=b.5x,x.2v&&(p||b.7w)&&(m=x.3h,g=x.3s,7z(t,4r(p),h,b.7w,b.8S),n=de(x,"2d",(v?x:h).2d,h.2d,n,O),n=de(x,"2c",(v?x:h).2c,h.2c,n,O),(m!==x.3h||g!==x.3s)&&(n=de(x,"3h",v?m:x.3h,x.3h,n,O),n=de(x,"3s",v?g:x.3s,x.3s,n,O)),p=3p?1g:"1L 1L"),(p||34&&19&&x.32)&&(be?(c=!0,i=4P,p=(p||Q(t,i,s,!1,"50% 50%"))+"",n=1j ce(y,i,0,0,n,-1,O),n.b=y[i],n.2L=o,34?(f=x.32,p=p.1t(" "),x.32=(p.1f>2&&(0===f||"1L"!==p[2])?1q(p[2]):f)||0,n.1U=n.e=p[0]+" "+(p[1]||"50%")+" 1L",n=1j ce(x,"32",0,0,n,-1,n.n),n.b=f,n.1U=n.e=x.32):n.1U=n.e=p):4r(p+"",x)),c&&(r.4k=x.2v&&3p||!19&&3!==15.4k?2:3),n},39:!0}),1Q("bU",{2I:"1L 1L 1L 1L #9w",39:!0,4G:!0,4m:!0,5z:"7I"}),1Q("bV",{2I:"1L",2g:18(t,e,i,n,a){e=15.3d(e);1b o,l,h,u,f,p,19,c,d,m,g,v,x,y,T,w,b=["bW","bX","bT","bS"],P=t.1v;1d(d=1q(t.4X),m=1q(t.4Y),o=e.1t(" "),l=0;b.1f>l;l++)15.p.1m("4w")&&(b[l]=Z(b[l])),f=u=Q(t,b[l],s,!1,"1L"),-1!==f.1m(" ")&&(u=f.1t(" "),f=u[0],u=u[1]),p=h=o[l],19=1q(f),v=f.1u((19+"").1f),x="="===p.1z(1),x?(c=3l(p.1z(0)+"1",10),p=p.1u(2),c*=1q(p),g=p.1u((c+"").1f-(0>c?1:0))||""):(c=1q(p),g=p.1u((c+"").1f)),""===g&&(g=r[i]||v),g!==v&&(y=$(t,"8o",19,v),T=$(t,"bO",19,v),"%"===g?(f=1M*(y/d)+"%",u=1M*(T/m)+"%"):"em"===g?(w=$(t,"8o",1,"em"),f=y/w+"em",u=T/w+"em"):(f=y+"2j",u=T+"2j"),x&&(p=1q(f)+c+g,h=1q(u)+c+g)),a=5l(P,b[l],f+" "+u,p+" "+h,!1,"1L",a);1a a},39:!0,5w:7k("1L 1L 1L 1L",!1,!0)}),1Q("bP",{2I:"0 0",2g:18(t,e,i,r,n,a){1b o,l,h,u,f,p,19="bQ-4z",c=s||G(t,1g),m=15.3d((c?d?c.4o(19+"-x")+" "+c.4o(19+"-y"):c.4o(19):t.3e.bR+" "+t.3e.cm)||"0 0"),g=15.3d(e);1c(-1!==m.1m("%")!=(-1!==g.1m("%"))&&(p=Q(t,"cn").1N(k,""),p&&"3E"!==p)){1d(o=m.1t(" "),l=g.1t(" "),L.4b("cR",p),h=2;--h>-1;)m=o[h],u=-1!==m.1m("%"),u!==(-1!==l[h].1m("%"))&&(f=0===h?t.4X-L.2D:t.4Y-L.3j,o[h]=u?1q(m)/1M*f+"2j":1M*(1q(m)/f)+"%");m=o.1I(" ")}1a 15.4u(t.1v,m,g,n,a)},5w:4r}),1Q("cS",{2I:"0 0",5w:4r}),1Q("3a",{2I:"1L",39:!0}),1Q("cT",{2I:"50% 50%",39:!0}),1Q("cU",{39:!0}),1Q("cQ",{39:!0}),1Q("cP",{39:!0}),1Q("7H",{2g:68("9X,9f,98,9p")}),1Q("7q",{2g:68("cL,cM,cN,cO")}),1Q("cV",{2I:"7G(1L,1L,1L,1L)",2g:18(t,e,i,r,n,a){1b o,l,h;1a 9>d?(l=t.3e,h=8>d?" ":",",o="7G("+l.cW+h+l.d3+h+l.d4+h+l.d5+")",e=15.3d(e).1t(",").1I(h)):(o=15.3d(Q(t,15.p,s,!1,15.4t)),e=15.3d(e)),15.4u(t.1v,o,e,n,a)}}),1Q("d2",{2I:"1L 1L 1L #9w",4G:!0,4m:!0}),1Q("7M,8D",{2g:18(t,e,i,r,s){1a s}}),1Q("4w",{2I:"1L 6k #6x",2g:18(t,e,i,r,n,a){1a 15.4u(t.1v,15.3d(Q(t,"6C",s,!1,"1L")+" "+Q(t,"d1",s,!1,"6k")+" "+Q(t,"cX",s,!1,"#6x")),15.3d(e),n,a)},4G:!0,5w:18(t){1b e=t.1t(" ");1a e[0]+" "+(e[1]||"6k")+" "+(t.2O(3W)||["#6x"])[0]}}),1Q("cY",{2g:68("6C,cZ,d0,92")}),1Q("cK,6J,9c",{2g:18(t,e,i,r,s){1b n=t.1v,a="6J"1x n?"6J":"9c";1a 1j ce(n,a,0,0,s,-1,i,!1,0,n[a],e)}});1b 9O=18(t){1b e,i=15.t,r=i.2x||Q(15.1y,"2x")||"",s=0|15.s+15.c*t;1M===s&&(-1===r.1m("cJ(")&&-1===r.1m("cu(")&&-1===r.1m("cv(")?(i.5i("2x"),e=!Q(15.1y,"2x")):(i.2x=r.1N(b,""),e=!0)),e||(15.3Y&&(i.2x=r=r||"3U(2a="+s+")"),-1===r.1m("cw")?0===s&&15.3Y||(i.2x=r+" 3U(2a="+s+")"):i.2x=r.1N(T,"2a="+s))};1Q("2a,3U,5F",{2I:"1",2g:18(t,e,i,r,n,a){1b o=1q(Q(t,"2a",s,!1,"1")),l=t.1v,h="5F"===i;1a"1O"==1k e&&"="===e.1z(1)&&(e=("-"===e.1z(0)?-1:1)*1q(e.1u(2))+o),h&&1===o&&"6c"===Q(t,"7r",s)&&0!==e&&(o=0),j?n=1j ce(l,"2a",o,e-o,n):(n=1j ce(l,"2a",1M*o,1M*(e-o),n),n.3Y=h?1:0,l.8L=1,n.2f=2,n.b="3U(2a="+n.s+")",n.e="3U(2a="+(n.s+n.c)+")",n.1y=t,n.2L=a,n.1Y=9O),h&&(n=1j ce(l,"7r",0,0,n,-1,1g,!1,0,0!==o?"6t":"6c",0===e?"6c":"6t"),n.1U="6t",r.2P.24(n.n),r.2P.24(i)),n}});1b 4Z=18(t,e){e&&(t.9N?(("6a"===e.1u(0,2)||"9U"===e.1u(0,6))&&(e="-"+e),t.9N(e.1N(O,"-$1").6i())):t.5i(e))},81=18(t){1c(15.t.54=15,1===t||0===t){15.t.4b("4l",0===t?15.b:15.e);1d(1b e=15.1y,i=15.t.1v;e;)e.v?i[e.p]=e.v:4Z(i,e.p),e=e.1h;1===t&&15.t.54===15&&(15.t.54=1g)}1o 15.t.4U("4l")!==15.e&&15.t.4b("4l",15.e)};1Q("3M",{2g:18(t,e,r,n,a,o,l){1b h,u,f,p,19,c=t.4U("4l")||"",d=t.1v.3B;1c(a=n.7E=1j ce(t,r,0,0,a,2),a.1Y=81,a.2w=-11,i=!0,a.b=c,u=K(t,s),f=t.54){1d(p={},19=f.1y;19;)p[19.p]=1,19=19.1h;f.1Y(1)}1a t.54=a,a.e="="!==e.1z(1)?e:c.1N(4D("\\\\s*\\\\b"+e.1u(2)+"\\\\b"),"")+("+"===e.1z(0)?" "+e.1u(2):""),t.4b("4l",a.e),h=J(t,u,K(t),l,p),t.4b("4l",c),a.1y=h.4R,t.1v.3B=d,a=a.46=n.31(t,h.5O,a,o)}});1b 7U=18(t){1c((1===t||0===t)&&15.1y.1E===15.1y.2i&&"82"!==15.1y.1y){1b e,i,r,s,n,a=15.t.1v,o=l.2Q.31;1c("4A"===15.e)a.3B="",s=!0;1o 1d(e=15.e.1t(" ").1I("").1t(","),r=e.1f;--r>-1;)i=e[r],l[i]&&(l[i].31===o?s=!0:i="5x"===i?4P:l[i].p),4Z(a,i);s&&(4Z(a,be),n=15.t.3w,n&&(n.2v&&15.t.5i("1y-2v-6p"),4d 15.t.3w))}};1d(1Q("cx",{2g:18(t,e,r,s,n){1a n=1j ce(t,r,0,0,n,2),n.1Y=7U,n.e=e,n.2w=-10,n.1y=s.3u,i=!0,n}}),h="ct,cs,co,cp".1t(","),2b=h.1f;2b--;)89(h[2b]);h=a.1A,h.1s=h.73=h.3I=1g,h.72=18(t,e,o){1c(!t.3S)1a!1;15.7Z=t,15.3u=o,15.7K=e,u=e.7M,i=!1,r=e.79||a.79,s=G(t,""),n=15.2P;1b h,19,d,m,g,v,x,y,T,b=t.1v;1c(f&&""===b.4c&&(h=Q(t,"4c",s),("2m"===h||""===h)&&15.6l(b,"4c",0)),"1O"==1k e&&(m=b.3B,h=K(t,s),b.3B=m+";"+e,h=J(t,h,K(t)).5O,!j&&w.35(e)&&(h.2a=1q(4D.$1)),e=h,b.3B=m),15.1s=19=e.3M?l.3M.31(t,e.3M,"3M",15,1g,1g,e):15.31(t,e,1g),15.4k){1d(T=3===15.4k,be?p&&(f=!0,""===b.4c&&(x=Q(t,"4c",s),("2m"===x||""===x)&&15.6l(b,"4c",0)),c&&15.6l(b,"7L",15.7K.7L||(T?"cq":"6c"))):b.8L=1,d=19;d&&d.1h;)d=d.1h;y=1j ce(t,"2Q",0,0,1g,2),15.5y(y,1g,d),y.1Y=be?8N:8K,y.1y=15.3I||4N(t,s,!0),y.3V=o,y.2w=-1,n.4K()}1c(i){1d(;19;){1d(v=19.1h,d=m;d&&d.2w>19.2w;)d=d.1h;(19.1n=d?d.1n:g)?19.1n.1h=19:m=19,(19.1h=d)?d.1n=19:g=19,19=v}15.1s=m}1a!0},h.31=18(t,e,i,n){1b a,o,h,f,p,19,c,d,m,g,v=t.1v;1d(a 1x e)19=e[a],o=l[a],o?i=o.31(t,19,a,15,i,n,e):(p=Q(t,a,s)+"",m="1O"==1k 19,"4G"===a||"cr"===a||"cy"===a||-1!==a.1m("cz")||m&&P.35(19)?(m||(19=6d(19),19=(19.1f>3?"6Z(":"6e(")+19.1I(",")+")"),i=5l(v,a,p,19,!0,"4L",i,0,n)):!m||-1===19.1m(" ")&&-1===19.1m(",")?(h=1q(p),c=h||0===h?p.1u((h+"").1f):"",(""===p||"2m"===p)&&("2D"===a||"3j"===a?(h=8R(t,a,s),c="2j"):"51"===a||"4T"===a?(h=H(t,a,s),c="2j"):(h="2a"!==a?0:1,c="")),g=m&&"="===19.1z(1),g?(f=3l(19.1z(0)+"1",10),19=19.1u(2),f*=1q(19),d=19.1N(y,"")):(f=1q(19),d=m?19.1N(y,""):""),""===d&&(d=a 1x r?r[a]:c),19=f||0===f?(g?f+h:f)+d:e[a],c!==d&&""!==d&&(f||0===f)&&h&&(h=$(t,a,h,c),"%"===d?(h/=$(t,a,1M,"%")/1M,e.8D!==!0&&(p=h+"%")):"em"===d?h/=$(t,a,1,"em"):"2j"!==d&&(f=$(t,a,f,d),d="2j"),g&&(f||0===f)&&(19=f+h+d)),g&&(f+=h),!h&&0!==h||!f&&0!==f?2y 0!==v[a]&&(19||"cG"!=19+""&&1g!=19)?(i=1j ce(v,a,f||h||0,0,i,-1,a,!1,0,p,19),i.1U="3E"!==19||"6S"!==a&&-1===a.1m("cH")?19:p):U("cI "+a+" 3V cF: "+e[a]):(i=1j ce(v,a,h,f-h,i,0,a,u!==!1&&("2j"===d||"4c"===a),0,p,19),i.1U=d)):i=5l(v,a,p,19,!0,1g,i,0,n)),n&&i&&!i.2L&&(i.2L=n);1a i},h.1Y=18(t){1b e,i,r,s=15.1s,n=1e-6;1c(1!==t||15.3u.1p!==15.3u.1D&&0!==15.3u.1p)1c(t||15.3u.1p!==15.3u.1D&&0!==15.3u.1p||15.3u.1B===-1e-6)1d(;s;){1c(e=s.c*t+s.s,s.r?e=1i.3P(e):n>e&&e>-n&&(e=0),s.2f)1c(1===s.2f)1c(r=s.l,2===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g;1o 1c(3===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N;1o 1c(4===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N+s.8Q+s.8V;1o 1c(5===r)s.t[s.p]=s.1U+e+s.4h+s.3Y+s.6g+s.6L+s.6N+s.8Q+s.8V+s.cE+s.cA;1o{1d(i=s.1U+e+s.4h,r=1;s.l>r;r++)i+=s["3r"+r]+s["38"+(r+1)];s.t[s.p]=i}1o-1===s.2f?s.t[s.p]=s.1U:s.1Y&&s.1Y(t);1o s.t[s.p]=e+s.1U;s=s.1h}1o 1d(;s;)2!==s.2f?s.t[s.p]=s.b:s.1Y(t),s=s.1h;1o 1d(;s;){1c(2!==s.2f)1c(s.r&&-1!==s.2f)1c(e=1i.3P(s.s+s.c),s.2f){1c(1===s.2f){1d(r=s.l,i=s.1U+e+s.4h,r=1;s.l>r;r++)i+=s["3r"+r]+s["38"+(r+1)];s.t[s.p]=i}}1o s.t[s.p]=e+s.1U;1o s.t[s.p]=s.e;1o s.1Y(t);s=s.1h}},h.cB=18(t){15.3I=15.3I||4N(15.7Z,s,!0),15.4k=15.3I.2v&&3p||!t&&3!==15.4k?2:3};1b 8m=18(){15.t[15.p]=15.e,15.1y.5y(15,15.1h,1g,!0)};h.6l=18(t,e,i){1b r=15.1s=1j ce(t,e,0,0,15.1s,2);r.e=i,r.1Y=8m,r.1y=15},h.5y=18(t,e,i,r){1a t&&(e&&(e.1n=t),t.1h&&(t.1h.1n=t.1n),t.1n?t.1n.1h=t.1h:15.1s===t&&(15.1s=t.1h,r=!0),i?i.1h=t:r||1g!==15.1s||(15.1s=t),t.1h=e,t.1n=i),t},h.2s=18(e){1b i,r,s,n=e;1c(e.5F||e.3U){n={};1d(r 1x e)n[r]=e[r];n.2a=1,n.5F&&(n.7r=1)}1a e.3M&&(i=15.7E)&&(s=i.46,s&&s.1n?15.5y(s.1n,i.1h,s.1n.1n):s===15.1s&&(15.1s=i.1h),i.1h&&15.5y(i.1h,i.1h.1h,s.1n),15.7E=1g),t.1A.2s.2h(15,n)};1b 53=18(t,e,i){1b r,s,n,a;1c(t.cC)1d(s=t.1f;--s>-1;)53(t[s],e,i);1o 1d(r=t.8c,s=r.1f;--s>-1;)n=r[s],a=n.2f,n.1v&&(e.24(K(n)),i&&i.24(n)),1!==a&&9!==a&&11!==a||!n.8c.1f||53(n,e,i)};1a a.cD=18(t,i,r){1b s,n,a,o,l=e.4p(t,i,r),h=[l],u=[],f=[],p=[],19=e.5f.9C;1d(t=l.2N||l.2J,53(t,u,p),l.1G(i,!0,!0),53(t,f),l.1G(0,!0,!0),l.1H(!0),s=p.1f;--s>-1;)1c(n=J(p[s],u[s],f[s]),n.4R){n=n.5O;1d(a 1x r)19[a]&&(n[a]=r[a]);o={};1d(a 1x n)o[a]=u[s][a];h.24(e.5Z(p[s],i,o,n))}1a h},t.6O([a]),a},!0)}),1J.3J&&1J.3t.4K()(),18(t){"4I 4J";1b e=18(){1a(1J.5r||1J)[t]};"18"==1k 3H&&3H.6R?3H(["3A"],e):"37"!=1k 2k&&2k.3n&&(8i("../3A.6V"),2k.3n=e())}("9L");', 62, 901, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|||function|_|return|var|if|for||length|null|_next|Math|new|typeof|_startTime|indexOf|_prev|else|_time|parseFloat|_timeline|_firstPT|split|substr|style|vars|in|data|charAt|prototype|_rawPrevTime|_timeScale|_duration|_totalTime|_paused|render|_enabled|join|_gsScope|_gc|0px|100|replace|string|Number|xe|255|yPercent|xPercent|xs0|add|rotation|immediateRender|setRatio|_startAt||skewX|rotationX|_p1|push||timeline|totalDuration|_first|rotationY|opacity|ge|yOrigin|xOrigin||type|parser|call|_totalDuration|px|module|_active|auto|arguments|_p2|instanceof|scaleX|smoothChildTiming|_kill|sin|_initted|svg|pr|filter|void|_dirty|easing|duration|getRatio|width|number|_reversed|scaleY|ne|defaultValue|target|_delay|plugin|_ease|_targets|match|_overwriteProps|transform|totalTime|cos|skewY|_labels|constructor|paused|5625|128|lazy||parse|zOrigin||Se|test|scaleZ|undefined|xs|prefix|perspective|_siblings|splice|format|currentStyle|sqrt|wake|xOffset|_last|height|_lazy|parseInt|_uncache|exports|startAt|Te|time|xn|yOffset|_gsQueue|_tween|matrix|_gsTransform|ratio|config|_overwrittenProps|TweenLite|cssText|frame|180|none|_parseTimeOrLabel|global|define|_transform|_gsDefine|_p3|pow|className|autoRemoveChildren|_onUpdate|round|gi|kill|nodeType|_calcEnd|alpha|tween|ue|tweens|xn1|onReverseComplete|_remove|seek|Array|window|oe||xfirst|force3D|selector|API|_propLookup|setAttribute|zIndex|delete|ease|appendXtra|rawTime|xs1|apply|_callback|_transformType|class|multi|_listeners|getPropertyValue|to|object|re|getBBox|dflt|parseComplex|delayedCall|border|skewType|reversed|position|all|onUpdate|getTweensOf|RegExp|onComplete|delay|color|invalidate|use|strict|pop|transparent|version|Ie|concat|Oe|set|firstMPT|PI|top|getAttribute|_sortChildren|_recent|offsetWidth|offsetHeight|Ye||left|document|Ue|_gsClassPT||_notifyPluginsOfEnabled|css|_forcingPlayhead|sc|ke|translate|isActive|runBackwards|overwrite|_internals|_pauseTime|onStart|removeAttribute|scale|atan2|me|_initProps|onOverwrite|greensock|com|plugins|GreenSockGlobals|callbackScope|_propName|pg|self|formatter|transformOrigin|_linkCSSP|keyword|easeInOut|isPause|gsClass|prev|next|autoAlpha|easeIn|le|createElementNS|parentNode|9999999999|ze|repeat|core|difs|rxp|toUpperCase|_swapSelfInParams|_onInitAllProps|abs|ieOffsetX|1e5|01|getChildren|192|fromTo||remove|_e|ox|_onPluginEvent|appendChild|ieOffsetY|sleep|pe|easeParams|ms|_gsTweenID|hidden|he|rgb|Ticker|xs2|tick|toLowerCase|setTimeout|solid|_addLazySet|360|priority|ve|origin|from|hsl|onCompleteParams|inherit|se|Pe|001|000|oy|DXImageTransform|Matrix|Microsoft|borderTopWidth|Fe|Re|Ce|staggerTo|defaultTransformPerspective|Xe|cssFloat|Left|xn2|timeScale|xs3|activate|SlowMo|check|amd|display|fps|easeOut|js|9375|984375|625|rgba|globals|_gsCache|_onInitTween|_lastParsedTransform|_priority||isNaN|center|ticker|suffixMap|_params|_func|_hasPausedChild|console|lagSmoothing|pause|throw|TweenMax|_easeType|_overwrite|fe|useFrames|shortRotationY|autoCSS|_init|_short|padding|visibility|rotationZ|shortRotation|we|shortRotationX|svgOrigin|_onDisable|autoSleep|De|_power|defaultEase|_type|body|_classNamePT|removeChild|rect|margin|inset|absolute|_vars|WebkitBackfaceVisibility|autoRound|defaultView|defaultOverwrite|play|log|_eventTarget|exec|Quad|je|directionalRotation|Cannot|jQuery|transformPerspective|_target|reverse|Be|isFromStart|red|Date|insert|Right|addLabel|filters|ye|Top|te|childNodes|bottom|right|Width|removeLabel|Scope|require|useRAF|gap|1e3|Ve|_rootFramesTimeline|borderLeft|EventDispatcher|events|_easePower|TimelineLite|random|break|dispatchEvent|_p|Back|register|_class|Ease|strength|template|strictUnits|2e3|url|defaultSkewType|_updateRoot|Params|_contains|Ne|zoom|startTime|Ee|TweenPlugin|get|xn3|ie|smoothOrigin|shiftChildren|GreenSockAMDPath|xs4|SteppedEase|RoughEase|map|up||querySelectorAll|borderLeftWidth|Animation|Android|SimpleTimeline|onReverseCompleteParams|matrix3d|marginBottom|getCTM|Ae|defaultSmoothOrigin|styleFloat|org|clrs|marginRight|isSelector|not|_onEnable|Transform|w3|www|http|defaultForce3D|Linear|marginLeft|M22|M21|M12|M11|oxp|oyp|999|Dy|Dx|simple|progid|tan|reservedProps|func|Me|useSVGTransformAttr|_roundProps|init|translate3d|propName|120|CSSPlugin|getBoundingClientRect|removeProperty|Le|lazyRender|Plugin|parseTransform|autoRotate|proxy|webkit|addEventListener|black|marginTop|isArray|lazyTweens|exportRoot|toString|normal|_super|definition|500|_addTween|525|CancelRequestAnimationFrame|tweenLookup|resume|eventCallback|onRepeatScope|999999999999||getElementById|start|restart|usesFrames|killTweensOf|sequence|overwriteProps|_plugins|swing|clearTimeout|_rootTimeline|killDelayedCallsTo|repeatDelay|false|onCompleteScope|allOnStart|preexisting|cancelAnimationFrame|staggerFrom|illegal|Object|_tempKill|staggerFromTo|yoyo|min|initAll|004|70158|easeNone|1500|requestAnimationFrame|concurrent|encountered|Quint|now|pauseCallback|Strong|jquery|endTime|onReverseCompleteScope|recent|insertMultiple|continue|Quart|_autoCSS|onUpdateParams|onStartScope|onStartParams|stagger|getLabelTime|addPause|stop|onUpdateScope|appendMultiple|gotoAndStop|align|gotoAndPlay|Power|append|it|the||dependency|is|onRepeatParams|into|missing|CancelAnimationFrame|GSAP|removeEventListener|BackOut|true|RequestAnimationFrame|moz|totalProgress|getTime|Cubic|clear|progress|on|or|onRepeat|linear|_dummyGS|file|BackIn|Alpha|set3DTransformRatio|setTransformRatio|expand|sizingMethod|chrome|getTransform|359|270|shortRotationZ|block|borderTop|backgroundPosition|background|backgroundPositionX|borderBottomLeftRadius|borderBottomRightRadius|boxShadow|borderRadius|borderTopLeftRadius|borderTopRightRadius|documentElement|setAttributeNS|parseColor|hsla|_setPluginRatio|_parseToProxy|cyan|203|gray|purple|green|pink|end|pt|loaded|registerSpecialProp||SVGElement|2000|Error|_cssRegister|CSSPropTween|collapsible|_registerComplexSpecialProp|backgroundPositionY|backgroundImage|physicsProps|physics2D|visible|fill|throwProps|bezier|radient|oader|pacity|clearProps|stroke|Color|xs5|_enableTransforms|slice|cascadeTo|xn4|value|NaN|Style|invalid|atrix|float|paddingTop|paddingRight|paddingBottom|paddingLeft|userSelect|backfaceVisibility|src|backgroundSize|perspectiveOrigin|transformStyle|clip|clipTop|borderTopColor|borderWidth|borderRightWidth|borderBottomWidth|borderTopStyle|textShadow|clipRight|clipBottom|clipLeft|165|gradient|1999|Z0|xhtml|createElement|div|zA||lineHeight|find|orange|compensated|fontSize|img|_specialProps|Trident|MSIE|points|taper|1px|Firefox|Version|navigator|userAgent|Safari|Chrome|EaseLookup|SineInOut|randomize|clamp|Circ|CircOut|CircIn|out|sort|Bounce|BounceOut|BounceIn|BounceInOut|CircInOut|asin|ExpoInOut|ExpoIn|Sine|SineOut|SineIn|ExpoOut|Expo|Elastic|ElasticOut|ElasticIn|ElasticInOut|999999999|rv|_cw|short|convertToPixels|ccw|getStyle|lime|getComputedStyle|aqua|rad|oyr|calculateOffset|cacheWidths|clientHeight|offset|Origin||clientWidth|oxr|Bottom|line|Webkit|BackInOut|silver||white|fuchsia|yellow|olive|blue|navy|maroon|Ms|Moz|teal'.split('|'), 0, {}));;
eval(function(p, a, c, k, e, r) {
	e = function(c) {
		return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if(!''.replace(/^/, String)) {
		while(c--) r[e(c)] = k[c] || e(c);
		k = [function(e) {
			return r[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while(c--)
		if(k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}('16 aO(t,e,i){18 a;"5n"==1P t?a=3D("#"+t):"bq"==1P t&&(a=t);18 s,o;2s(e){1i"b7":s="dX 3D b0",o=\'aU aQ 67 dC dB aK 64 62 dm dl an dj di 4c 2F 3D aC de db 22 3m 2z az 62 d9. <ay>5Z d3 2J 62 5Y d1 d0 2z 2F cZ cU 4c 3m 6V cN 2F "cM cD cz 2z 51" cx c8 2F c7 & c0 bY 3G.</ay>\';1p;1i"9J":s="5T 3D b0",o="aU aQ 67 bQ bO bN an 5T 3L ("+i+\') 4c 2F 3D aC. 3m bM at bK 3L 1.7.0 64 bJ. 5Z 9y 3D 2z 1.10.x 64 bG. bF: 5Z do 2V ec 2F 3D eb aK 2J 5Y 6V do 2V 9y 2z 2.x 3L 4c 3D ea 5a 3M 2V 9a e7 e5 e3 67 e1 7 & 8. <a 2I="96://dP.dN.2q/dA/4/5J-22-dy/#dx-13&cB-60">cu cs cr f6 bX bW 3D by bP bx.</a>\'}a.1m("12-5E"),a.4h(\'<p 1r="12-eI">!</p>\'),a.4h(\'<p 1r="12-5E-ee">3m: \'+s+"</p>"),a.4h(\'<p 1r="12-5E-8f">\'+o+"</p>")}!16(t){1d("2K"!=1P 7V)22(18 e 41 7V)14[e]=7V[e];t.9g.36=16(e){18 a="1.7.0",s=t.9g.b7,o=t(14),r=16(t,e){22(18 i=t.1K("."),a=e.1K("."),s=0;s<i.1h;++s){1d(a.1h==s)21!1;1d(1b(i[s])!=1b(a[s]))21 1b(i[s])>1b(a[s])?!1:!0}21 i.1h!=a.1h?!0:!0};1d(r("1.8.0",s)||o.1m("12-9b"),r(a,s)){1d((1P e).3A("bq|2K"))21 14.1L(16(t){1B i(14,e)});1d("11"===e){18 n=t(14).11("3m").g;1d(n)21 n}1w 1d("ck"===e){18 d=t(14).11("3m").o;1d(d)21 d}1w{1d("cd"!==e)21 14.1L(16(i){18 a=t(14).11("3m");1d(a){1d(!a.g.2P&&!a.g.4j)1d("3W"==1P e)e>0&&e<a.g.2t+1&&e!=a.g.1Z&&a.4u(e);1w 2s(e){1i"1T":a.o.73(a.g),a.1T("72");1p;1i"1X":a.o.6Z(a.g),a.1X("72");1p;1i"23":a.g.2u||(a.o.8W(a.g),a.g.2D=!0,a.23())}"bZ"===e&&a.2h(),(a.g.2u||!a.g.2u&&a.g.2D)&&"1s"==e&&(a.o.bp(a.g),a.g.2D=!1,a.g.1J.17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"], 1O[1e*="5A.3O"]\').1L(16(){2k(t(14).11("7m"))}),a.1s()),"ew"==e&&a.ba()}});18 d=t(14).11("3m").8G;1d(d)21 d}}1w aO(o,"9J",s)};18 i=16(e,d){18 l=14;l.$el=t(e).1m("12-2a"),l.$el.11("3m",l),l.4y=16(){1d(l.8G=i.aN,l.o=t.4z({},l.8G,d),l.g=t.4z({},i.6E),l.1v=t.4z({},i.aI),l.9P=t.4z({},i.9C),l.g.es=t(e).2m("12-9b")?!1:!0,l.g.er=t(e).4n(),l.g.2B&&(l.o.4E=!1),"e2"===l.o.2A&&(l.o.2A=!0),"9j"===l.o.2A&&(l.o.2A=!1),"2K"!=1P 9c&&(l.t=t.4z({},9c)),"2K"!=1P 94&&(l.ct=t.4z({},94)),!l.g.91)1d(l.g.91=!0,t("4n").17(\'8Z[7M*="5Y"]\').1h&&(l.g.ce=t("4n").17(\'8Z[7M*="5Y"]\').1f("7M").1K("5Y")[1]),t("4n").17(\'6u[1e*="5J"]\').1h&&-1!=t("4n").17(\'6u[1e*="5J"]\').1f("1e").1g("?")&&(l.g.c9=t("4n").17(\'6u[1e*="5J"]\').1f("1e").1K("?")[1].1K("=")[1]),l.o.3k&&""!=l.o.3k&&l.o.3E&&""!=l.o.3E){t(e).1m("12-"+l.o.3k);18 a=l.o.3E+l.o.3k+"/3k.19",s=t("7C");1d(t("7C").1h||(s=t("51")),t(\'6s[2I="\'+a+\'"]\').1h)o=t(\'6s[2I="\'+a+\'"]\'),l.g.3H||(l.g.3H=!0,l.g.bh=2i(16(){l.3g()},7x));1w 1d(4Q.bb){4Q.bb(a);18 o=t(\'6s[2I="\'+a+\'"]\')}1w 18 o=t(\'<6s 4R="eW" 2I="\'+a+\'" 40="8f/19" />\').1E(s);o.2J("4y",16(){l.g.3H||(l.g.3H=!0,l.g.b9=2i(16(){l.3g()},7x))}),t(1Y).2J("4y",16(){l.g.3H||(l.g.3H=!0,l.g.b8=2i(16(){l.3g()},7x))}),l.g.b5=2i(16(){l.g.3H||(l.g.3H=!0,l.3g())},1R)}1w l.3g()},l.3g=16(){t(e).4M(t(l.o.4M)),t("4n").1f("5t")?t("51").1f("5t")||t("51").1f("5t","12-6E"):t("4n").1f("5t","12-6E"),l.g.7e()===!0&&l.o.8H===!0&&(t(e).1m("12-43"),t(e).3t(".12-33-32-2a").1m("12-43"));18 i=16(){l.o.8H===!0&&l.g.7e()===!0?(t(e).1m("12-43"),t(e).3t(".12-33-32-2a").1m("12-43"),l.o.42=!1):t(1Y).1a()<l.o.9X||t(1Y).1a()>l.o.9I?(t(e).1m("12-43"),t(e).3t(".12-33-32-2a").1m("12-43")):(t(e).2l("12-43"),t(e).3t(".12-33-32-2a").2l("12-43"))};1d(t(1Y).2h(16(){i()}),i(),l.g.1y=16(){21 t(e).1a()},l.g.1F=16(){21 t(e).1c()},t(e).17(".12-3J").2l("12-3J").1m("12-1q"),t(e).17(\'.12-1q > *[1r*="12-s"]\').1L(16(){18 e=t(14).1f("1r").1K("12-s")[1].1K(" ")[0];t(14).2l("12-s"+e).1m("12-l"+e)}),l.o.9H&&(l.o.2O=l.o.9H),l.o.ci===!1&&(l.o.4O=!1),1==t(e).17(".12-1q").1h&&(l.o.42=!1,l.o.8y=!1,l.o.71=!1,l.o.6Y=!1,l.o.46=0,l.o.6X=!1,l.o.2A=!0,l.o.2O=1,l.o.3b="9j"),t(e).1U().2m("12-33-32-6S")&&0!==l.o.3X&&(t(e)[0].1N.1a="1C%"),l.o.1a?l.g.8p=l.g.2g=""+l.o.1a:l.g.8p=l.g.2g=t(e)[0].1N.1a,l.o.1c?l.g.3l=""+l.o.1c:l.g.3l=t(e)[0].1N.1c,-1==l.g.2g.1g("%")&&-1==l.g.2g.1g("1D")&&(l.g.2g+="1D"),-1==l.g.3l.1g("%")&&-1==l.g.3l.1g("1D")&&(l.g.3l+="1D"),l.o.95&&-1!=l.g.2g.1g("1D")&&-1!=l.g.3l.1g("1D")?l.g.3P=!0:l.g.3P=!1,l.o.8g===!0&&(l.o.3X=0,l.g.3P=!0,-1!=l.g.2g.1g("%")&&(l.g.2g=1b(l.g.2g)+"1D"),-1!=l.g.3l.1g("%")&&(l.g.3l=1b(l.g.3l)+"1D")),t(e).17(\'*[1r*="12-l"], *[1r*="12-bg"]\').1L(16(){t(14).1U().2m("12-1q")||t(14).cT(t(14).1U())}),t(e).17(".12-1q").1L(16(){t(14).11("5g",t(14).5g()+1).1m("12-1q-"+(t(14).5g()+1)),t(14).3f(\':2V([1r*="12-"])\').1L(16(){t(14).b2()});18 e=t("<1k>").1m("12-ca");t(14).17(".12-bg").1h?e.bV(t(14).17(".12-bg").eq("0")):e.4M(t(14))}),t(e).17(\'.12-1q, *[1r*="12-l"]\').1L(16(){1d(t(14).11("12")||t(14).1f("4R")||t(14).1f("1N")){1d(t(14).11("12"))18 e=t(14).11("12").27().1K(";");1w 1d(t(14).1f("4R")&&-1!=t(14).1f("4R").1g(":")&&-1!=t(14).1f("4R").1g(";"))18 e=t(14).1f("4R").27().1K(";");1w 18 e=t(14).1f("1N").27().1K(";");22(x=0;x<e.1h;x++){3C=e[x].1K(":"),-1!=3C[0].1g("4w")&&(3C[1]=l.9r(3C[1]));18 i="";3C[2]&&(i=":"+t.5p(3C[2]))," "!=3C[0]&&""!=3C[0]&&t(14).11(t.5p(3C[0]),t.5p(3C[1])+i)}}l.o.8x===!0&&l.o.42===!0&&(l.o.42=!1,l.g.8t=!0);18 a=t(14);a.11("4s",a[0].1N.1j),a.11("4r",a[0].1N.1n),t(14).3M("a")&&t(14).3f().1h>0&&(a=t(14).3f());18 s=a.1a(),o=a.1c();a[0].1N.1a&&-1!=a[0].1N.1a.1g("%")&&(s=a[0].1N.1a),a[0].1N.1c&&-1!=a[0].1N.1c.1g("%")&&(o=a[0].1N.1c),a.11("2Q",s),a.11("2M",o),a.11("8r",a.19("2b-1j")),a.11("7z",a.19("2b-1G")),a.11("7n",a.19("2b-1n")),a.11("8J",a.19("2b-1l"));18 r="3W"==1P 38(a.19("31"))?1A.e8(1C*38(a.19("31")))/1C:1;t(14).11("6O",r),-1==a.19("48-1j-1a").1g("1D")?a.11("6e",a[0].1N.bf):a.11("6e",a.19("48-1j-1a")),-1==a.19("48-1G-1a").1g("1D")?a.11("6k",a[0].1N.aP):a.11("6k",a.19("48-1G-1a")),-1==a.19("48-1n-1a").1g("1D")?a.11("6m",a[0].1N.9i):a.11("6m",a.19("48-1n-1a")),-1==a.19("48-1l-1a").1g("1D")?a.11("6g",a[0].1N.aF):a.11("6g",a.19("48-1l-1a")),a.11("aL",a.19("aW-b1")),a.11("br",a.19("9d-1c"))}),4Q.5l.9l)22(18 a=0;a<t(e).17(".12-1q").1h;a++)t(e).17(".12-1q").eq(a).11("cy")==4Q.5l.9l.1K("#")[1]&&(l.o.2O=a+1);t(e).17(\'*[1r*="12-8v-"]\').1L(16(){22(18 i=t(14).1f("1r").1K(" "),a=0;a<i.1h;a++)1d(-1!=i[a].1g("12-8v-")){18 s=1b(i[a].1K("12-8v-")[1]);t(14).19({dD:"cf"}).2r(16(i){i.3p(),t(e).36(s)})}}),l.g.2t=t(e).17(".12-1q").1h,l.o.6d&&l.g.2t>2?("2f"==l.o.2O,l.o.7h=!1):l.o.6d=!1,"2f"==l.o.2O&&(l.o.2O=1A.24(1A.2f()*l.g.2t+1)),l.o.5f=l.o.5f<l.g.2t+1?l.o.5f:1,l.o.5f=l.o.5f<1?1:l.o.5f,l.g.4d=1,l.o.4O&&(l.g.4d=0),l.4G.2j.3g(),l.4G.3O.3g(),l.4G.6Q.3g(),l.o.4O&&(l.o.2O=l.o.2O-1===0?l.g.2t:l.o.2O-1),l.g.1Z=l.o.2O,l.g.1J=t(e).17(".12-1q:eq("+(l.g.1Z-1)+")"),t(e).17(".12-1q").cC(\'<1k 1r="12-58"></1k>\'),l.g.i=t(e).17(".12-58"),l.o.aR&&(l.g.3s=t("<1k>").1m("12-bU-5M").1E(l.g.i)),l.o.bd&&!l.g.2B&&(l.g.3h=t("<1k>").1m("12-cW-5M").1E(l.g.i),l.g.3h.4h(t(\'<1k 1r="12-ct-1j"><1k 1r="12-ct-3v"><1k 1r="12-ct-93"><1k 1r="12-ct-98"></1k></1k></1k></1k><1k 1r="12-ct-1G"><1k 1r="12-ct-3v"><1k 1r="12-ct-93"><1k 1r="12-ct-98"></1k></1k></1k></1k><1k 1r="12-ct-bz"></1k>\'))),l.g.5o=t("<1k>").19({cb:-1,1I:"1Q"}).1m("12-9n-2a").1E(t(e)),t("<1k>").1m("12-9n-cJ").1E(l.g.5o),"cP"==t(e).19("3F")&&t(e).19("3F","9x"),l.o.6B?l.g.i.19({dW:"5q("+l.o.6B+")"}):l.g.i.19({bw:l.o.7q}),"7t"==l.o.7q&&0==l.o.6B&&l.g.i.19({3U:"1Q 7t !c5"}),t(e).17(".12-1q 28").1L(16(){1d(t(14).5r("1a").5r("1c"),l.o.3Q===!0&&l.o.4E===!0){1d("5n"!=1P t(14).11("1e")){t(14).11("1e",t(14).1f("1e"));18 e=l.o.3E+"../19/cj.cp";t(14).1f("1e",e)}}1w"5n"==1P t(14).11("1e")&&(t(14).1f("1e",t(14).11("1e")),t(14).5r("11-1e"))});18 s=t([]);1d(t(e).17("*:2V(.12-bg)").1L(16(){"2K"!=1P t(14).11("6R")&&0!==1b(t(14).11("6R"))&&(s=s.7S(t(14)))}),l.g.i.2J("cE",16(e){l.g.bn=e.82-t(14).1U().4k().1j,l.g.bs=e.8X-t(14).1U().4k().1n}),l.g.i.2J("8Y",16(e){18 i=t(14).1U().4k().1j+l.g.bn,a=t(14).1U().4k().1n+l.g.bs,o=e.82-i,r=e.8X-a;s.1L(16(){t(14).19({3K:-o/1C*1b(t(14).11("6R")),4g:-r/1C*1b(t(14).11("6R"))})})}),l.g.i.2J("eY",16(){s.1L(16(){3i.2z(14,.4,{19:{3K:0,4g:0}})})}),l.o.8y&&(t(\'<a 1r="12-1o-1T" 2I="#" />\').2r(16(i){i.3p(),t(e).36("1T")}).1E(t(e)),t(\'<a 1r="12-1o-1X" 2I="#" />\').2r(16(i){i.3p(),t(e).36("1X")}).1E(t(e)),l.o.9e&&(t(e).17(".12-1o-1T, .12-1o-1X").19({1I:"1Q"}),t(e).1S(16(){l.g.8u||(l.g.2B?t(e).17(".12-1o-1T, .12-1o-1X").19("1I","2e"):t(e).17(".12-1o-1T, .12-1o-1X").1s(!0,!0).2x(2w))},16(){l.g.2B?t(e).17(".12-1o-1T, .12-1o-1X").19("1I","1Q"):t(e).17(".12-1o-1T, .12-1o-1X").1s(!0,!0).3w(2w)}))),l.o.71||l.o.6Y){18 o=t(\'<1k 1r="12-1l-1o-2G" />\').1E(t(e));1d(l.g.2Y=o,"4D"==l.o.3b&&o.1m("12-aJ-54"),l.o.6Y&&"4D"!=l.o.3b){1d(t(\'<5s 1r="12-1l-4N" />\').1E(t(e).17(".12-1l-1o-2G")),"1S"==l.o.3b)18 r=t(\'<1k 1r="12-1H-1S"><1k 1r="12-1H-1S-58"><1k 1r="12-1H-1S-bg"></1k><1k 1r="12-1H-1S-28"><28></1k><5s></5s></1k></1k>\').1E(t(e).17(".12-1l-4N"));22(x=1;x<l.g.2t+1;x++){18 n=t(\'<a 2I="#" />\').1E(t(e).17(".12-1l-4N")).2r(16(i){i.3p(),t(e).36(t(14).5g()+1)});1d("1S"==l.o.3b){t(e).17(".12-1H-1S, .12-1H-1S-28").19({1a:l.o.7o,1c:l.o.5u});18 d=t(e).17(".12-1H-1S"),g=d.17("28").19({1c:l.o.5u}),h=t(e).17(".12-1H-1S-58").19({26:"2y",1I:"2e"});n.1S(16(){18 i,a=t(e).17(".12-1q").eq(t(14).5g());i=l.o.3Q===!0&&l.o.4E===!0?a.17(".12-4b").1h?a.17(".12-4b").11("1e"):a.17(".12-3c").1h?a.17(".12-3c").1f("1e"):a.17(".12-bg").1h?a.17(".12-bg").11("1e"):l.o.3E+l.o.3k+"/6f.4K":a.17(".12-4b").1h?a.17(".12-4b").1f("1e"):a.17(".12-3c").1h?a.17(".12-3c").1f("1e"):a.17(".12-bg").1h?a.17(".12-bg").1f("1e"):l.o.3E+l.o.3k+"/6f.4K",t(e).17(".12-1H-1S-28").19({1j:1b(d.19("2b-1j")),1n:1b(d.19("2b-1n"))}),g.2J("4y",16(){0==t(14).1a()?g.19({3F:"9x",4e:"0 1W",1j:"1W"}):g.19({3F:"c2",3K:-t(14).1a()/2,1j:"50%"})}).1f("1e",i),d.19({1I:"2e"}).1s().4i({1j:t(14).3F().1j+(t(14).1a()-d.3o())/2},7G),h.19({1I:"1Q",26:"2T"}).1s().2x(7G)},16(){h.1s().3w(7G,16(){d.19({26:"2y",1I:"2e"})})})}}"1S"==l.o.3b&&r.1E(t(e).17(".12-1l-4N")),t(e).17(".12-1l-4N a:eq("+(l.o.2O-1)+")").1m("12-1o-1V")}1d(l.o.71)18 c=t(\'<a 1r="12-1o-23" 2I="#" />\').2r(16(i){i.3p(),t(e).36("23")}).4M(t(e).17(".12-1l-1o-2G")),u=t(\'<a 1r="12-1o-1s" 2I="#" />\').2r(16(i){i.3p(),t(e).36("1s")}).1E(t(e).17(".12-1l-1o-2G"));1w"4D"!=l.o.3b&&(t(\'<5s 1r="12-1o-92 12-1o-cq" />\').4M(t(e).17(".12-1l-1o-2G")),t(\'<5s 1r="12-1o-92 12-1o-cv" />\').1E(t(e).17(".12-1l-1o-2G")));l.o.6v&&"4D"!=l.o.3b&&(o.19({1I:"1Q"}),t(e).1S(16(){l.g.8u||(l.g.2B?o.19("1I","2e"):o.1s(!0,!0).2x(2w))},16(){l.g.2B?o.19("1I","1Q"):o.1s(!0,!0).3w(2w)}))}1d("4D"==l.o.3b){l.g.3R=t(\'<1k 1r="12-1H-2G"></1k>\').1E(t(e));18 r=t(\'<1k 1r="12-1H"><1k 1r="12-1H-58"><1k 1r="12-1H-1q-2a"><1k 1r="12-1H-1q"></1k></1k></1k></1k>\').1E(l.g.3R);1d(l.g.54=t(e).17(".12-1H-1q-2a"),"6w"41 1Y?l.g.54.1m("12-cH"):l.g.54.1S(16(){t(14).1m("12-1H-1q-1S")},16(){t(14).2l("12-1H-1q-1S"),l.8a()}).8Y(16(e){18 i=1b(e.82-t(14).4k().1j)/t(14).1a()*(t(14).1a()-t(14).17(".12-1H-1q").1a());t(14).17(".12-1H-1q").1s().19({3K:i})}),t(e).17(".12-1q").1L(16(){18 i,a=t(14).5g()+1;i=l.o.3Q===!0&&l.o.4E===!0?t(14).17(".12-4b").1h?t(14).17(".12-4b").11("1e"):t(14).17(".12-3c").1h?t(14).17(".12-3c").1f("1e"):t(14).17(".12-bg").1h?t(14).17(".12-bg").11("1e"):l.o.3E+l.o.3k+"/6f.4K":t(14).17(".12-4b").1h?t(14).17(".12-4b").1f("1e"):t(14).17(".12-3c").1h?t(14).17(".12-3c").1f("1e"):t(14).17(".12-bg").1h?t(14).17(".12-bg").1f("1e"):l.o.3E+l.o.3k+"/6f.4K";18 s=t(\'<a 2I="#" 1r="12-4l-\'+a+\'"><28 1e="\'+i+\'"></a>\');s.1E(t(e).17(".12-1H-1q")),"6w"41 1Y||s.1S(16(){t(14).3f().1s().6x(2w,l.o.8j/1C)},16(){t(14).3f().2m("12-4l-1V")||t(14).3f().1s().6x(2w,l.o.8k/1C)}),s.2r(16(i){i.3p(),t(e).36(a)})}),c&&u){18 f=l.g.2Y=t(\'<1k 1r="12-1l-1o-2G 12-dH-54"></1k>\').1E(t(e));c.8n().2r(16(i){i.3p(),t(e).36("23")}).1E(f),u.8n().2r(16(i){i.3p(),t(e).36("1s")}).1E(f)}l.o.6v&&(l.g.3R.19("1I","1Q"),f&&(l.g.2Y="2e"==f.19("1I")?f:t(e).17(".12-aJ-54"),l.g.2Y.19("1I","1Q")),t(e).1S(16(){t(e).1m("12-1S"),l.g.8u||(l.g.2B?(l.g.3R.19("1I","2e"),l.g.2Y&&l.g.2Y.19("1I","2e")):(l.g.3R.1s(!0,!0).2x(2w),l.g.2Y&&l.g.2Y.1s(!0,!0).2x(2w)))},16(){t(e).2l("12-1S"),l.g.2B?(l.g.3R.19("1I","1Q"),l.g.2Y&&l.g.2Y.19("1I","1Q")):(l.g.3R.1s(!0,!0).3w(2w),l.g.2Y&&l.g.2Y.1s(!0,!0).3w(2w))}))}l.g.3Y=t(\'<1k 1r="12-3Y"></1k>\').1E(t(e)),"2e"!=l.g.3Y.19("1I")||l.g.3Y.17("28").1h||(l.g.6y=16(){l.g.3Y.19({1I:"1Q",26:"2T"}).2x(4o,16(){l.g.6y=!1})},l.g.5i=t("<28>").1f("1e",l.o.3E+l.o.3k+"/3Y.4K").1E(l.g.3Y),l.g.9p="3W"==1P 1b(t(e).19("2b-1l"))?1b(t(e).19("2b-1l")):0),l.8q(),l.o.9s&&t(e).17(".12-1q").1h>1&&t("51").6z("bA",16(t){l.g.2P||l.g.4j||(37==t.9z?(l.o.73(l.g),l.1T("72")):39==t.9z&&(l.o.6Z(l.g),l.1X("72")))}),"6w"41 1Y&&t(e).17(".12-1q").1h>1&&l.o.9B&&(l.g.i.6z("c1",16(t){18 e=t.5h?t.5h:t.9G.5h;1==e.1h&&(l.g.6A=l.g.5v=e[0].9O)}),l.g.i.6z("cc",16(t){18 e=t.5h?t.5h:t.9G.5h;1==e.1h&&(l.g.5v=e[0].9O),1A.3Z(l.g.6A-l.g.5v)>45&&t.3p()}),l.g.i.6z("ch",16(i){1A.3Z(l.g.6A-l.g.5v)>45&&(l.g.6A-l.g.5v>0?(l.o.6Z(l.g),t(e).36("1X")):(l.o.73(l.g),t(e).36("1T")))})),1==l.o.aw&&t(e).17(".12-1q").1h>1&&l.g.i.1S(16(){l.o.aH(l.g),l.g.2u&&(l.g.2N=!0,l.1s(),l.g.3s&&l.g.3s.1s(),l.g.3h&&l.g.2H&&l.g.2H.5w(),l.g.3T=(1B 55).4Y())},16(){1==l.g.2N&&(l.23(),l.g.2N=!1)}),l.8z(),l.o.1u&&(l.g.1u=t("<28>").1m("12-cO").1E(t(e)).1f("1N",l.o.aS).19({26:"2y",1I:"cQ"}).2J("4y",16(){18 i=0;l.g.1u||(i=1R),2i(16(){l.g.1u.11("2Q",l.g.1u.1a()),l.g.1u.11("2M",l.g.1u.1c()),"1W"!=l.g.1u.19("1j")&&l.g.1u.11("4s",l.g.1u[0].1N.1j),"1W"!=l.g.1u.19("1G")&&l.g.1u.11("5x",l.g.1u[0].1N.1G),"1W"!=l.g.1u.19("1n")&&l.g.1u.11("4r",l.g.1u[0].1N.1n),"1W"!=l.g.1u.19("1l")&&l.g.1u.11("5y",l.g.1u[0].1N.1l),0!=l.o.8M&&t("<a>").1E(t(e)).1f("2I",l.o.8M).1f("b3",l.o.b4).19({dI:"1Q",dS:"1Q"}).4h(l.g.1u),l.g.1u.19({1I:"1Q",26:"2T"}),l.8T()},i)}).1f("1e",l.o.1u)),t(1Y).2h(16(){l.2h()}),t(1Y).2J("dY",16(){t(1Y).2h()}),l.g.b6=!0,1==l.o.4O?(l.o.42?(l.g.2u=!0,t(e).17(".12-1o-23").1m("12-1o-23-1V")):t(e).17(".12-1o-1s").1m("12-1o-1s-1V"),l.1X()):"2K"!=1P l.g.1J[0]&&l.3Q(l.g.1J,16(){l.g.1J.2x(l.o.7g,16(){l.g.4j=!1,t(14).1m("12-1V"),l.o.5z&&t(14).1M(t(14).11("4Z")+25).eV(16(){t(14).17(".12-3c").2r(),t(14).17("2p, 6T").1L(16(){0!==1P t(14)[0].6W&&(t(14)[0].6W=0),t(14).2r()}),t(14).7p()}),l.g.1J.17(\' > *[1r*="12-l"]\').1L(16(){18 e=t(14);(!e.2m("12-2p-3J")||e.2m("12-2p-3J")&&l.o.5z===!1)&&e.11("4v")>0&&e.11("4q",2i(16(){l.7r(e)},e.11("4v")))})}),l.7s(l.g.1Z),l.o.42?(l.g.4j=!1,l.23()):t(e).17(".12-1o-1s").1m("12-1o-1s-1V")}),l.o.bt(t(e))},l.2h=16(){l.g.2h=!0,l.g.2P||(l.3z(l.g.1J,16(){l.g.2E&&l.g.2E.5B(),l.g.2h=!1}),l.g.1u&&l.8T())},l.23=16(){l.g.2u?"1T"==l.g.2c&&l.o.7h?l.1T():l.1X():(l.g.2u=!0,l.g.2P||l.g.4j||l.5M()),t(e).17(".12-1o-23").1m("12-1o-23-1V"),t(e).17(".12-1o-1s").2l("12-1o-1s-1V")},l.5M=16(){1d(t(e).17(".12-1V").11("12"))18 i=l.9P.70;1w 18 i=l.o.70;18 a=t(e).17(".12-1V").11("5C")?1b(t(e).17(".12-1V").11("5C")):i;1d(!l.o.4O&&!t(e).17(".12-1V").11("5C")){18 s=t(e).17(".12-1q:eq("+(l.o.2O-1)+")").11("5C");a=s?s:i}1d(2k(l.g.4p),l.g.3T?(l.g.4m||(l.g.4m=(1B 55).4Y()),l.g.4m>l.g.3T&&(l.g.3T=(1B 55).4Y()),l.g.3u||(l.g.3u=a),l.g.3u-=l.g.3T-l.g.4m,l.g.3T=!1,l.g.4m=(1B 55).4Y()):(l.g.3u=a,l.g.4m=(1B 55).4Y()),l.g.3u=1b(l.g.3u),l.g.4p=2i(16(){l.g.4m=l.g.3T=l.g.3u=!1,l.23()},l.g.3u),l.g.3s&&l.g.3s.4i({1a:l.g.1y()},l.g.3u,"7I",16(){t(14).19({1a:0})}),l.g.3h){18 o=l.g.3h.17(".12-ct-1G .12-ct-3v"),r=l.g.3h.17(".12-ct-1j .12-ct-3v");"1Q"==l.g.3h.19("1I")&&(o.19({3v:0}),r.19({3v:0}),l.g.3h.2x(7K)),l.g.2H?l.g.2H.cg():(l.g.2H=1B 97,l.g.2H.7S(3i.75(o[0],a/99,{34:0},{3S:7O.7Q,34:76,cA:16(){l.g.2H=!1}})),l.g.2H.7S(3i.75(r[0],a/99,{34:0},{3S:7O.7Q,34:76})))}},l.1s=16(){l.g.3T=(1B 55).4Y(),l.g.3s&&l.g.3s.1s(),l.g.3h&&l.g.2H&&l.g.2H.5w(),l.g.2N||l.g.2D||(t(e).17(".12-1o-1s").1m("12-1o-1s-1V"),t(e).17(".12-1o-23").2l("12-1o-23-1V")),2k(l.g.4p),l.g.2u=!1},l.ba=16(){2k(l.g.4p),l.g.2u=!1,2k(l.g.bh),2k(l.g.b9),2k(l.g.b8),2k(l.g.b5),2k(l.g.9f),l.g.3s&&l.g.3s.1s(),l.g.3h&&l.g.2H&&l.g.2H.5w(),t(e).17("*").1s(!0,!1).7p(),t(e).17(".12-1q >").1L(16(){t(14).11("3I")&&t(14).11("3I").5w()}),l.g.2N||l.g.2D||(t(e).17(".12-1o-1s").1m("12-1o-1s-1V"),t(e).17(".12-1o-23").2l("12-1o-23-1V"))},l.cF=16(){t(e).17("*").1s(),2k(l.g.4p),l.4u(l.g.1Z,l.g.2c)},l.9r=16(e){21"9h"==t.5p(e.27())||"7I"==t.5p(e.27())?e.27():e.2n("7X","9k").2n("7Z","9m").2n("81","9o").2n("d2","d5").2n("d7","d8").2n("da","dc").2n("dd","df").2n("dh","dn").2n("dp","dq").2n("dr","ds").2n("dv","dz").2n("5D","dE").2n("dF","dG")},l.1T=16(t){1d(l.g.1Z<2&&(l.g.4d+=1),l.g.4d>l.o.46&&l.o.46>0&&!t)l.g.4d=0,l.1s(),0==l.o.6X&&(l.o.46=0);1w{18 e=l.g.1Z<2?l.g.2t:l.g.1Z-1;l.g.2c="1T",l.4u(e,l.g.2c)}},l.1X=16(t){1d(l.o.6d)1d(t){1d(t){18 e=l.g.1Z<l.g.2t?l.g.1Z+1:1;l.g.2c="1X",l.4u(e,l.g.2c)}}1w{18 e=l.g.1Z,i=16(){e=1A.24(1A.2f()*l.g.2t)+1,e==l.g.1Z?i():(l.g.2c="1X",l.4u(e,l.g.2c))};i()}1w 1d(l.g.1Z<l.g.2t||(l.g.4d+=1),l.g.4d>l.o.46&&l.o.46>0&&!t)l.g.4d=0,l.1s(),0==l.o.6X&&(l.o.46=0);1w{18 e=l.g.1Z<l.g.2t?l.g.1Z+1:1;l.g.2c="1X",l.4u(e,l.g.2c)}},l.4G={2j:{3g:16(){18 i=-1===4Q.5l.2I.1g("9q:")?"":"79:",a=t(e).17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"]\');1d(a.1h){t("<6u>").1f({1e:"96://dJ.2j.2q/dM",40:"8f/dO"}).1E("7C");a.1h;1Y.dR=16(){a.1L(16(){1d(t(14).1U().1m("12-2p-3J"),t(14).1U(\'[1r*="12-l"]\')){18 e=i,a=t("<1k>").1m("12-5b").1E(t(14).1U());t("<28>").1E(a).1m("12-3c").1f("9t","9u 2p").1f("1e",e+"//28.2j.2q/dZ/"+t(14).1f("1e").1K("e0/")[1].1K("?")[0]+"/"+l.o.9v),t("<1k>").1E(a).1m("12-9w"),t(14).1U().19({1a:t(14).1a(),1c:t(14).1c()}).2r(16(){18 e=t(14).17("1O");1d(e.19("1I","2e"),t(14).11("4v")>0&&t(14).11("4q")&&2k(t(14).11("4q")),l.g.47||(l.g.2P=!0,l.g.2N?(0!=l.o.2A&&(l.g.2N=!1),l.g.2D=!0):l.g.2D=l.g.2u,0!=l.o.2A&&l.1s(),l.g.47=!0),"2K"==1P e.11("7d")){e.1f("1e",s);18 i=16(t){0===t.11&&(l.g.8h+=1,"1W"==l.o.2A&&1==l.g.2D&&l.g.8h==l.g.1J.17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"]\').1h&&(l.g.3u=1,l.23()))},a=16(t){t.b3.9A()};e.11("7d",1B ez.eA(e[0],{eB:{eD:a,eG:i}}))}1w e.11("7d").eH(0).9A();t(14).17(".12-5b").1M(l.g.v.d).3w(l.g.v.8i,16(){l.g.2P=!1,1==l.g.2h&&l.3z(l.g.1J,16(){l.g.2h=!1})})}),e=-1===t(14).1f("1e").1g("79")?i:"";18 s=e+t(14).1f("1e"),o="&";-1==s.1g("?")&&(o="?"),-1==s.1g("4I")?s+=o:s.2n("4I=1","4I=0"),s+="&9D=9E&6Q=1&f3=1&3L=3",t(14).11("4X",s),t(14).11("2Q",t(14).1f("1a")),t(14).11("2M",t(14).1f("1c")),t(14).1f("1e","")}})}}},6b:16(t){},1s:16(t){t.1U().17(".12-5b").2x(l.g.v.6c,16(){t.1U().17("1O").11("7d").bB(),t.1U().17("1O").19("1I","1Q")})}},3O:{3g:16(){18 i=-1===4Q.5l.2I.1g("9q:")?"":"79:";t(e).17(\'1O[1e*="5A.3O"]\').1L(16(){1d(t(14).1U().1m("12-2p-3J"),t(14).1U(\'[1r*="12-l"]\')){18 e=t(14),a=i,s=t("<1k>").1m("12-5b").1E(t(14).1U());t.bC(a+"//3O.2q/bD/bE/2p/"+t(14).1f("1e").1K("2p/")[1].1K("?")[0]+".bH?bI=?",16(i){t("<28>").1E(s).1m("12-3c").1f("9t","9u 2p").1f("1e",i[0].bL),e.11("9N",1R*1b(i[0].2o)),t("<1k>").1E(s).1m("12-9w")}),t(14).1U().19({1a:t(14).1a(),1c:t(14).1c()}).2r(16(){t(14).11("4v")>0&&t(14).11("4q")&&2k(t(14).11("4q")),l.g.2P=!0,l.g.2N?(0!=l.o.2A&&(l.g.2N=!1),l.g.2D=!0):l.g.2D=l.g.2u,0!=l.o.2A&&l.1s(),l.g.47=!0,a=-1===t(14).17("1O").11("4X").1g("79")?i:"",t(14).17("1O").1f("1e",a+t(14).17("1O").11("4X")),t(14).17(".12-5b").1M(l.g.v.d).3w(l.g.v.8i,16(){1d("1W"==l.o.2A&&1==l.g.2D){18 t=2i(16(){l.23()},e.11("9N")-l.g.v.d);e.11("7m",t)}l.g.2P=!1,1==l.g.2h&&l.3z(l.g.1J,16(){l.g.2h=!1})})});18 o="&";-1==t(14).1f("1e").1g("?")&&(o="?");18 r="&9D=9E";-1==t(14).1f("1e").1g("4I")?t(14).11("4X",t(14).1f("1e")+o+"4I=1"+r):t(14).11("4X",t(14).1f("1e").2n("4I=0","4I=1")+r),t(14).11("2Q",t(14).1f("1a")),t(14).11("2M",t(14).1f("1c")),t(14).1f("1e","")}})},6b:16(t){},1s:16(t){t.1U().17(".12-5b").2x(l.g.v.6c,16(){t.1U().17("1O").1f("1e","")})}},6Q:{3g:16(){t(e).17("2p, 6T").1L(16(){18 e="2K"!=1P t(14).1f("1a")?t(14).1f("1a"):"bR",i="2K"!=1P t(14).1f("1c")?t(14).1f("1c"):""+t(14).1c();-1===e.1g("%")&&(e=1b(e)),-1===i.1g("%")&&(i=1b(i)),"1C%"!==e||0!==i&&"0"!==i&&"1C%"!==i||(t(14).1f("1c","1C%"),i="1W"),t(14).1U().1m("12-2p-3J").19({1a:e,1c:i}).11({2Q:e,2M:i});t(14);t(14).2J("bS",16(){"1W"===l.o.2A&&l.g.2D===!0&&l.23()}),t(14).5r("1a").5r("1c").19({1a:"1C%",1c:"1C%"}).2r(16(t){l.g.47||(14.2N&&t.3p(),14.6b(),l.g.2P=!0,l.g.2N?(l.o.2A!==!1&&(l.g.2N=!1),l.g.2D=!0):l.g.2D=l.g.2u,l.o.2A!==!1&&l.1s(),l.g.47=!0,l.g.2P=!1,l.g.2h===!0&&l.3z(l.g.1J,16(){l.g.2h=!1}))})})},6b:16(t){},1s:16(t){t[0].5w()}}},l.4u=16(i,a){l.g.4m=l.g.3T=l.g.3u=!1,l.g.3s&&l.g.3s.1s().1M(2w).4i({1a:0},bT),l.g.3h&&(l.g.3h.3w(4o),l.g.2H&&l.g.2H.5F().2o(.35)),1==l.g.47&&(l.g.47=!1,l.g.2u=l.g.2D,l.g.1J.17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"]\').1L(16(){l.4G.2j.1s(t(14))}),l.g.1J.17(\'1O[1e*="5A.3O"]\').1L(16(){l.4G.3O.1s(t(14))}),l.g.1J.17("2p, 6T").1L(16(){l.4G.6Q.1s(t(14))})),t(e).17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"], 1O[1e*="5A.3O"]\').1L(16(){2k(t(14).11("7m"))}),2k(l.g.4p),l.g.5G=i,l.g.1t=t(e).17(".12-1q:eq("+(l.g.5G-1)+")"),a||(l.g.1Z<l.g.5G?l.g.2c="1X":l.g.2c="1T");18 s=0;t(e).17(\'1O[1e*="2j.2q"], 1O[1e*="4S.be"], 1O[1e*="2j-4U.2q"], 1O[1e*="5A.3O"]\').1h>0&&(s=l.g.v.6c),"2K"!=1P l.g.1t[0]&&l.3Q(l.g.1t,16(){l.4i()})},l.3Q=16(i,a){1d(l.g.4j=!0,l.g.b6&&t(e).19({26:"2T"}),l.o.3Q){18 s=[];1d("1Q"!=i.19("3U-3y")&&-1!=i.19("3U-3y").1g("5q")&&!i.2m("12-3x")&&!i.2m("12-2V-3x")){18 o=i.19("3U-3y");o=o.3A(/5q\\((.*)\\)/)[1].2n(/"/9Q,""),s[s.1h]=[o,i]}i.17("28:2V(.12-3x, .12-2V-3x)").1L(16(){l.o.4E===!0&&t(14).1f("1e",t(14).11("1e")),s[s.1h]=[t(14).1f("1e"),t(14)]}),i.17("*").1L(16(){1d("1Q"!=t(14).19("3U-3y")&&-1!=t(14).19("3U-3y").1g("5q")&&!t(14).2m("12-3x")&&!t(14).2m("12-2V-3x")){18 e=t(14).19("3U-3y");e=e.3A(/5q\\((.*)\\)/)[1].2n(/"/9Q,""),s[s.1h]=[e,t(14)]}}),0==s.1h?(t(".12-1H-2G, .12-1o-1X, .12-1o-1T, .12-1l-1o-2G").19({26:"2T"}),l.3z(i,a)):l.g.2B?l.g.5o.19("1I","2e"):l.g.5o.1M(9R).2x(2w),l.8s(s,i,a)}1w t(".12-1H-2G, .12-1o-1X, .12-1o-1T, .12-1l-1o-2G").19({26:"2T"}),l.3z(i,a)},l.8s=16(e,i,a){18 s,o,r=0,n=16(){l.g.5o.1s(!0,!0).19({1I:"1Q"}),t(".12-1H-2G, .12-1o-1X, .12-1o-1T, .12-1l-1o-2G").19({26:"2T"}),2i(16(){l.3z(i,a)},1C)},d=16(t){++r==e.1h&&i&&a&&n()},g=16(t){t[1].1m("12-3x"),i||a||t[1].1f("1e",t[1].11("1e")),d(t)},h=16(t){t[1].1m("12-2V-3x"),o=t[0].c3(t[0].c4("/")+1,t[0].1h),1Y.ad?ad.c6(\'3m 5E:\\r\\n\\r\\af ag 67 2F ai 4c 2F 3y 64 3U 3y "\'+o+\'" 3M ak 2z a ap 5l 6V 5a ar be 3H. 5Z au 2F av 4c 5H 62 ax aB 41 2F 8V.\'):cl(\'3m 5E:\\r\\n\\r\\af ag 67 2F ai 4c 2F 3y 64 3U 3y "\'+o+\'" 3M ak 2z a ap 5l 6V 5a ar be 3H. 5Z au 2F av 4c 5H 62 ax aB 41 2F 8V.\'),d(t)};t.1L(e,16(t,e){s=1B cm,s.cn=16(){g(e)},s.co=16(){h(e)},s.1e=e[0]})},l.3z=16(e,i){e.19({26:"2y",1I:"2e"}),l.g.6y&&l.g.6y(),l.8z(),"4D"==l.o.3b&&l.aG();18 a=e.3f();a.1L(16(){18 e=t(14),i=e.11("4s")?e.11("4s"):"0",a=e.11("4r")?e.11("4r"):"0";e.3M("a")&&e.3f().1h>0&&(e.19({1I:"2e"}),e=e.3f());18 s="1W",o="1W";e.11("2Q")&&("3W"==1P e.11("2Q")?s=1b(e.11("2Q"))*l.g.1x:-1!=e.11("2Q").1g("%")&&(s=e.11("2Q"))),e.11("2M")&&("3W"==1P e.11("2M")?o=1b(e.11("2M"))*l.g.1x:-1!=e.11("2M").1g("%")&&(o=e.11("2M")));18 r=e.11("8r")?1b(e.11("8r"))*l.g.1x:0,n=e.11("7z")?1b(e.11("7z"))*l.g.1x:0,d=e.11("7n")?1b(e.11("7n"))*l.g.1x:0,g=e.11("8J")?1b(e.11("8J"))*l.g.1x:0,h=e.11("6e")?1b(e.11("6e"))*l.g.1x:0,c=e.11("6k")?1b(e.11("6k"))*l.g.1x:0,u=e.11("6m")?1b(e.11("6m"))*l.g.1x:0,f=e.11("6g")?1b(e.11("6g"))*l.g.1x:0,p=e.11("aL"),m=e.11("br");1d(l.g.3P||l.o.3X>0){1d(e.3M("28")&&!e.2m("12-bg")&&e.1f("1e")&&(e.19({1a:"1W",1c:"1W"}),0!=s&&"1W"!=s||"3W"!=1P o||0==o||(s=o/e.1c()*e.1a()),0!=o&&"1W"!=o||"3W"!=1P s||0==s||(o=s/e.1a()*e.1c()),"1W"==s&&(s=e.1a()*l.g.1x),"1W"==o&&(o=e.1c()*l.g.1x),e.19({1a:s,1c:o})),e.3M("28")||e.19({1a:s,1c:o,"aW-b1":1b(p)*l.g.1x+"1D","9d-1c":1b(m)*l.g.1x+"1D"}),e.3M("1k")&&e.17("1O").11("4X")){18 v=e.17("1O");v.1f("1a",1b(v.11("2Q"))*l.g.1x).1f("1c",1b(v.11("2M"))*l.g.1x),e.19({1a:1b(v.11("2Q"))*l.g.1x,1c:1b(v.11("2M"))*l.g.1x})}e.19({2b:d+"1D "+n+"1D "+g+"1D "+r+"1D ",bf:h+"1D",aP:c+"1D",9i:u+"1D",aF:f+"1D"})}1d(e.2m("12-bg")){18 y=l.g.i;e.19({1a:"1W",1c:"1W"}),s=e.1a(),o=e.1c();18 b=l.g.1x;-1!=l.g.2g.1g("%")&&(l.g.1y()>s?(b=l.g.1y()/s,l.g.1F()>o*b&&(b=l.g.1F()/o)):l.g.1F()>o&&(b=l.g.1F()/o,l.g.1y()>s*b&&(b=l.g.1y()/s))),e.19({1a:s*b,1c:o*b,3K:y.1a()/2-s*b/2,4g:y.1c()/2-o*b/2})}1w{18 w=e;e.1U().3M("a")&&(e=e.1U());18 x=0;l.o.6h?x=l.o.6h>0?(l.g.1y()-l.o.6h)/2:0:l.o.8w&&(x=l.o.8w>0?(l.g.1y()-l.o.8w)/2:0),x=0>x?0:x,-1!=i.1g("%")?e.19({1j:l.g.1y()/1C*1b(i)-w.1a()/2-r-h}):(x>0||l.g.3P||l.o.3X>0)&&e.19({1j:x+1b(i)*l.g.1x}),-1!=a.1g("%")?e.19({1n:l.g.1F()/1C*1b(a)-w.1c()/2-d-u}):(l.g.3P||l.o.3X>0)&&e.19({1n:1b(a)*l.g.1x})}}),e.19({1I:"1Q",26:"2T"}),l.8q(),i(),t(14).7p()},l.8q=16(){1d(l.g.5i){18 t=16(){l.g.5i.1c()>0?l.g.9p>0?l.g.3Y.19({1c:l.g.5i.1c()/2}):l.g.3Y.19({1c:l.g.5i.1c(),4g:-l.g.5i.1c()/2}):2i(16(){t()},50)};t()}},l.8z=16(){1d(l.o.3X>0&&(t(1Y).1a()<l.o.3X?(l.g.3P=!0,l.g.2g=l.o.3X+"1D"):(l.g.3P=!1,l.g.2g=l.g.8p,l.g.1x=1)),t(e).3t(".12-33-32-2a").1h&&t(e).3t(".12-33-32-6S").19({1a:t(1Y).1a()}),l.g.3P){18 i=t(e).1U();l.o.8g===!0?t(e).19({1a:"1C%",1c:t(1Y).1c()}):(t(e).19({1a:i.1a()-1b(t(e).19("2b-1j"))-1b(t(e).19("2b-1G"))}),l.g.1x=t(e).1a()/1b(l.g.2g),t(e).19({1c:l.g.1x*1b(l.g.3l)}))}1w l.g.1x=1,t(e).19({1a:l.g.2g,1c:l.g.3l});1d(t(e).3t(".12-33-32-2a").1h&&(t(e).3t(".12-33-32-6S").19({1c:t(e).3q(!0)}),t(e).3t(".12-33-32-2a").19({1c:t(e).3q(!0)}),t(e).3t(".12-33-32-6S").19({1a:t(1Y).1a(),1j:-t(e).3t(".12-33-32-2a").4k().1j}),-1!=l.g.2g.1g("%"))){18 a=1b(l.g.2g),s=t("51").1a()/1C*a-(t(e).3o()-t(e).1a());t(e).1a(s)}t(e).17(".12-58, .12-1v-2a").19({1a:l.g.1y(),1c:l.g.1F()}),l.g.1J&&l.g.1t?(l.g.1J.19({1a:l.g.1y(),1c:l.g.1F()}),l.g.1t.19({1a:l.g.1y(),1c:l.g.1F()})):t(e).17(".12-1q").19({1a:l.g.1y(),1c:l.g.1F()})},l.8T=16(){l.g.1u.19({1a:l.g.1u.11("2Q")*l.g.1x,1c:l.g.1u.11("2M")*l.g.1x}),l.g.2B?l.g.1u.19("1I","2e"):l.g.1u.2x(2w);18 i=6i=6j=6a="1W";i=l.g.1u.11("4s")&&-1!=l.g.1u.11("4s").1g("%")?l.g.1y()/1C*1b(l.g.1u.11("4s"))-l.g.1u.1a()/2+1b(t(e).19("2b-1j")):1b(l.g.1u.11("4s"))*l.g.1x,l.g.1u.11("5x")&&-1!=l.g.1u.11("5x").1g("%")?6i=l.g.1y()/1C*1b(l.g.1u.11("5x"))-l.g.1u.1a()/2+1b(t(e).19("2b-1G")):6i=1b(l.g.1u.11("5x"))*l.g.1x,l.g.1u.11("4r")&&-1!=l.g.1u.11("4r").1g("%")?6j=l.g.1F()/1C*1b(l.g.1u.11("4r"))-l.g.1u.1c()/2+1b(t(e).19("2b-1n")):6j=1b(l.g.1u.11("4r"))*l.g.1x,l.g.1u.11("5y")&&-1!=l.g.1u.11("5y").1g("%")?6a=l.g.1F()/1C*1b(l.g.1u.11("5y"))-l.g.1u.1c()/2+1b(t(e).19("2b-1l")):6a=1b(l.g.1u.11("5y"))*l.g.1x,l.g.1u.19({1j:i,1G:6i,1n:6j,1l:6a})},l.aG=16(){l.8A("2J");18 i=-1==l.g.2g.1g("%")?1b(l.g.2g):l.g.1y();t(e).17(".12-1H-1q a").19({1a:1b(l.o.7o*l.g.1x),1c:1b(l.o.5u*l.g.1x)}),t(e).17(".12-1H-1q a:8B").19({4e:0}),t(e).17(".12-1H-1q").19({1c:1b(l.o.5u*l.g.1x)});18 a=t(e).17(".12-1H"),s=-1==l.o.6l.1g("%")?1b(l.o.6l):1b(i/1C*1b(l.o.6l));a.19({1a:s*1A.24(1C*l.g.1x)/1C}),a.1a()>t(e).17(".12-1H-1q").1a()&&a.19({1a:t(e).17(".12-1H-1q").1a()}),l.8A("aT")},l.7s=16(i){18 a=i?i:l.g.5G;t(e).17(".12-1H-1q a:2V(.12-4l-"+a+")").3f().1L(16(){t(14).2l("12-4l-1V").1s().6x(7E,l.o.8k/1C)}),t(e).17(".12-1H-1q a.12-4l-"+a).3f().1m("12-4l-1V").1s().6x(7E,l.o.8j/1C)},l.8a=16(){1d(!t(e).17(".12-1H-1q-2a").2m("12-1H-1q-1S")){18 i=t(e).17(".12-4l-1V").1h?t(e).17(".12-4l-1V").1U():!1;1d(i){18 a=i.3F().1j+i.1a()/2,s=t(e).17(".12-1H-1q-2a").1a()/2-a;s=s<t(e).17(".12-1H-1q-2a").1a()-t(e).17(".12-1H-1q").1a()?t(e).17(".12-1H-1q-2a").1a()-t(e).17(".12-1H-1q").1a():s,s=s>0?0:s,t(e).17(".12-1H-1q").4i({3K:s},cR)}}},l.8A=16(i){1d(l.o.6v&&!t(e).2m("12-1S"))2s(i){1i"2J":l.g.3R.19({26:"2y",1I:"2e"});1p;1i"aT":l.g.3R.19({26:"2T",1I:"1Q"})}},l.4i=16(){l.g.8h=0,t(e).17(".12-1q").1h>1&&(l.g.2P=!0),l.g.4j=!1,2k(l.g.4p),2k(l.g.cS),l.g.aX=l.g.1J,l.o.aY(l.g),"4D"==l.o.3b&&(l.7s(),"6w"41 1Y||l.8a()),l.g.1t.1m("12-aZ");18 i=8I=6n=8K=6o=8R=6p=8U=6q=dg=6r=dk="1W",d=7i=l.g.1y(),g=7j=l.g.1F(),h="1T"==l.g.2c?l.g.1J:l.g.1t,c=h.11("3n")?h.11("3n"):l.o.7k,u=l.g.7l[l.g.2c][c];2s(("1j"==u||"1G"==u)&&(d=6n=7i=6p=0,6r=0),("1n"==u||"1l"==u)&&(g=i=7j=6o=0,6q=0),u){1i"1j":8I=6o=0,6q=-l.g.1y();1p;1i"1G":i=8R=0,6q=l.g.1y();1p;1i"1n":8K=6p=0,6r=-l.g.1F();1p;1i"1l":6n=8U=0,6r=l.g.1F()}l.g.1J.19({1j:i,1G:8I,1n:6n,1l:8K}),l.g.1t.19({1a:7i,1c:7j,1j:6o,1G:8R,1n:6p,1l:8U});18 f=l.g.1J.11("5I")?1b(l.g.1J.11("5I")):l.o.6t,p=l.g.1J.11("4C")?1b(l.g.1J.11("4C")):l.o.4B,m=l.g.1J.11("4A")?l.g.1J.11("4A"):l.o.4x,v=l.g.1t.11("4Z")?1b(l.g.1t.11("4Z")):l.o.5K,y=l.g.1t.11("5L")?1b(l.g.1t.11("5L")):l.o.5m;0===y&&(y=1);18 b=l.g.1t.11("5N")?l.g.1t.11("5N"):l.o.5O,w=16(){l.g.1J.1M(f+p/15).4i({1a:d,1c:g},p,m,16(){x()})},x=16(){1d(l.g.aX.17(\' > *[1r*="12-l"]\').1L(16(){t(14).11("3I")&&t(14).11("3I").7u(),t(14).19({dK:"1Q"})}),l.g.1J=l.g.1t,l.g.dL=l.g.1Z,l.g.1Z=l.g.5G,l.o.7v(l.g),l.o.3Q&&l.o.4E){18 i=l.g.1Z==l.g.2t?1:l.g.1Z+1,a=[];t(e).17(".12-1q").eq(i-1).17("28:2V(.12-3x, .12-2V-3x)").1L(16(){a[a.1h]=[],a[a.1h-1][0]=t(14).11("1e")?t(14).11("1e"):t(14).1f("1e"),a[a.1h-1][1]=t(14)}),l.8s(a)}t(e).17(".12-1q").2l("12-1V"),t(e).17(".12-1q:eq("+(l.g.1Z-1)+")").1m("12-1V").2l("12-aZ"),t(e).17(".12-1l-4N a").2l("12-1o-1V"),t(e).17(".12-1l-4N a:eq("+(l.g.1Z-1)+")").1m("12-1o-1V"),l.g.2u&&l.5M(),l.g.2P=!1,1==l.g.2h&&l.3z(l.g.1J,16(){l.g.2h=!1})},S=16(e){18 i=l.g.1J.17(\' > *[1r*="12-l"]\');i.1L(16(){1d("2K"==1P t(14).11("7w")||"2K"!=1P t(14).11("7w")&&t(14).11("7w")!==l.g.1Z){t(14).11("2C")||l.5P(t(14)),t(14).2l("12-7y");18 i,s,o=t(14).11("3n")?t(14).11("3n"):u;2s(o){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1l":s=l.g.1F(),i=0;1p;1i"3r":s=0,i=0}1d("1B"===t(14).11("2C"))18 r="1B";1w 18 r=t(14).11("5Q")?t(14).11("5Q"):!1;2s(r){1i"1j":i=l.g.1y(),s=0;1p;1i"1G":i=-l.g.1y(),s=0;1p;1i"1n":s=l.g.1F(),i=0;1p;1i"1l":s=-l.g.1F(),i=0;1p;1i"3r":s=0,i=0;1p;1i"1B":i=t(14).11("3j")?"1j"===t(14).11("3j")?l.g.1y():"1G"===t(14).11("3j")?-l.g.1y():-1b(t(14).11("3j")):-l.1v.7A,s=t(14).11("2X")?"1n"===t(14).11("2X")?l.g.1F():"1l"===t(14).11("2X")?-l.g.1F():-1b(t(14).11("2X")):-l.1v.7B}18 n=5k=5j=4t=5d=59=2Z=30="1Q";n=t(14).11("5R")?t(14).11("5R"):l.1v.7D,5k=t(14).11("6C")?t(14).11("6C"):l.1v.7F,5j=t(14).11("6D")?t(14).11("6D"):l.1v.7H,4t=t(14).11("5S")?t(14).11("5S"):l.1v.7J,5d=t(14).11("6F")?t(14).11("6F"):l.1v.7L,59=t(14).11("6G")?t(14).11("6G"):l.1v.7N,1===4t?(2Z=t(14).11("6H")?t(14).11("6H"):l.1v.7P,30=t(14).11("6I")?t(14).11("6I"):l.1v.7R):2Z=30=4t;22(18 d=t(14).11("6J")?t(14).11("6J").1K(" "):l.1v.7T,g=0;g<d.1h;g++)-1===d[g].1g("%")&&-1!==d[g].1g("1j")&&-1!==d[g].1g("1G")&&-1!==d[g].1g("1n")&&-1!==d[g].1g("1l")&&(d[g]=""+1b(d[g])*l.g.1x+"1D");18 h=d.7U(" "),c=t(14).11("6K")?t(14).11("6K"):l.1v.7W,f=1b(t(14).19("1j")),p=1b(t(14).19("1n")),m=1b(t(14).1f("1r").1K("12-l")[1]),v=t(14).3o()>t(14).3q()?t(14).3o():t(14).3q(),y=0===1b(n)?t(14).3o():v,b=0===1b(n)?t(14).3q():v;1d(-1===m&&"1B"!==r||"1j"===t(14).11("3j")||"1G"===t(14).11("3j")?0>i?i=-(l.g.1y()-f+(2Z/2-.5)*y+1C):i>0&&(i=f+(2Z/2+.5)*y+1C):i*=l.g.1x,-1===m&&"1B"!==r||"1n"===t(14).11("2X")||"1l"===t(14).11("2X")?0>s?s=-(l.g.1F()-p+(30/2-.5)*b+1C):s>0&&(s=p+(30/2+.5)*b+1C):s*=l.g.1x,-1===m||"1B"===r)18 w=1;1w 18 x=l.g.1J.11("6L")?1b(l.g.1J.11("6L")):l.o.7Y,w=m*x;1d("1B"===t(14).11("2C"))18 S=l.1v.6t,L=l.1v.4B,T=l.1v.4x;1w 18 S=l.o.6t,L=l.o.4B,T=l.o.4x;18 I=t(14).11("5I")?1b(t(14).11("5I")):S,k=t(14).11("4C")?1b(t(14).11("4C")):L;0===k&&(k=1);18 O=t(14).11("4A")?t(14).11("4A"):T;e&&(I=0,k=e),t(14).11("4q")&&2k(t(14).11("4q"));18 C={26:"2y"},W=t(14),X={34:n,4H:5k,4J:5j,6M:5d,6N:59,4V:2Z,4T:30,x:-i*w,y:-s*w,1M:I/1R,3S:a(O),83:16(){W.19(C)}};("3r"==r||!r&&"3r"===o||"84"!==t(14).11("9F")&&"1B"===t(14).11("2C"))&&(X.31=0,C.31=t(14).11("6O")),t(14).11("3I")&&t(14).11("3I").7u(),3i.85(t(14)[0],{86:h,87:c}),t(14).11("3I",3i.2z(t(14)[0],k/1R,X))}})},L=16(){l.g.1t.1M(f+v).4i({1a:l.g.1y(),1c:l.g.1F()},y,b)},T=16(){l.g.2W&&(f=0),"16"==1P l.o.9K&&l.o.9K(l.g,f+v),l.g.1t.17(\' > *[1r*="12-l"]\').1L(16(){1d(t(14).11("2C")||l.5P(t(14)),"1B"===t(14).11("2C"))18 e="1B";1w 18 e=t(14).11("3n")?t(14).11("3n"):u;18 i,s;2s(e){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1l":s=l.g.1F(),i=0;1p;1i"3r":s=0,i=0;1p;1i"1B":i=t(14).11("5c")?"1j"===t(14).11("5c")?-l.g.1y():"1G"===t(14).11("5c")?l.g.1y():1b(t(14).11("5c")):l.1v.9L,s=t(14).11("57")?"1n"===t(14).11("57")?-l.g.1F():"1l"===t(14).11("57")?l.g.1F():1b(t(14).11("57")):l.1v.9M}18 o=88=89=6P=8b=8c=56=53="1Q";o=t(14).11("8d")?t(14).11("8d"):l.1v.9S,88=t(14).11("9T")?t(14).11("9T"):l.1v.9U,89=t(14).11("9V")?t(14).11("9V"):l.1v.9W,6P=t(14).11("8e")?t(14).11("8e"):l.1v.9Y,8b=t(14).11("9Z")?t(14).11("9Z"):l.1v.a0,8c=t(14).11("a1")?t(14).11("a1"):l.1v.a2,1===6P?(56=t(14).11("a3")?t(14).11("a3"):l.1v.a4,53=t(14).11("a5")?t(14).11("a5"):l.1v.a6):56=53=6P;22(18 r=t(14).11("a7")?t(14).11("a7").1K(" "):l.1v.a8,n=0;n<r.1h;n++)-1===r[n].1g("%")&&-1!==r[n].1g("1j")&&-1!==r[n].1g("1G")&&-1!==r[n].1g("1n")&&-1!==r[n].1g("1l")&&(r[n]=""+1b(r[n])*l.g.1x+"1D");18 d=r.7U(" "),g=t(14).11("a9")?t(14).11("a9"):l.1v.aa,h=1b(t(14).19("1j")),c=1b(t(14).19("1n")),f=1b(t(14).1f("1r").1K("12-l")[1]);-1!==t(14)[0].1N.1a.1g("%")&&t(14).19({1a:l.g.1y()/1C*1b(t(14)[0].1N.1a)});18 p=t(14).3o()>t(14).3q()?t(14).3o():t(14).3q(),m=0===1b(o)?t(14).3o():p,v=0===1b(o)?t(14).3q():p;1d(-1===f&&"1B"!==e||"1j"===t(14).11("5c")||"1G"===t(14).11("5c")?0>i?i=-(h+(56/2+.5)*m+1C):i>0&&(i=l.g.1y()-h+(56/2-.5)*m+1C):i*=l.g.1x,-1===f&&"1B"!==e||"1n"===t(14).11("57")||"1l"===t(14).11("57")?0>s?s=-(c+(53/2+.5)*v+1C):s>0&&(s=l.g.1F()-c+(53/2-.5)*v+1C):s*=l.g.1x,-1===f||"1B"===e)18 y=1;1w 18 b=l.g.1t.11("ab")?1b(l.g.1t.11("ab")):l.o.ac,y=f*b;1d("1B"===t(14).11("2C"))18 w=l.1v.5K,x=l.1v.5m,S=l.1v.5O;1w 18 w=l.o.5K,x=l.o.5m,S=l.o.5O;18 L=t(14).11("4Z")?1b(t(14).11("4Z")):w,T=t(14).11("5L")?1b(t(14).11("5L")):x,I=t(14).11("5N")?t(14).11("5N"):S,k=t(14),O=16(){k.2m("12-2p-3J")&&k.1m("12-7y"),1==l.o.5z&&(k.17(".12-3c").2r(),k.17("2p, 6T").1L(16(){0!==1P t(14)[0].6W&&(t(14)[0].6W=0),t(14).2r()})),(!k.2m("12-2p-3J")||k.2m("12-2p-3J")&&l.o.5z===!1)&&k.11("4v")>0&&k.11("4q",2i(16(){l.7r(k)},k.11("4v")))};t(14).19({3K:0,4g:0});18 C={4V:56,4T:53,6M:8b,6N:8c,34:o,4H:88,4J:89,26:"2T",x:i*y,y:s*y},W={34:0,4H:0,4J:0,6M:0,6N:0,4V:1,4T:1,3S:a(I),1M:L/1R,x:0,y:0,83:16(){O()}};(-1!=e.1g("3r")||"84"!==t(14).11("cw")&&"1B"===t(14).11("2C"))&&(C.31=0,W.31=t(14).11("6O")),t(14).11("3I")&&t(14).11("3I").7u(),3i.85(t(14)[0],{87:g,86:d}),t(14).11("3I",3i.75(t(14)[0],T/1R,C,W))})},I=16(){1d(o(t(e))&&(l.g.1t.11("52")||l.g.1t.11("5U")))1d(l.g.1t.11("52")&&l.g.1t.11("5U")){18 i=1A.24(2*1A.2f()),a=[["3d",l.g.1t.11("52")],["ae",l.g.1t.11("5U")]];O(a[i][0],a[i][1])}1w l.g.1t.11("52")?O("3d",l.g.1t.11("52")):O("ae",l.g.1t.11("5U"));1w 1d(l.g.1t.11("5V")&&l.g.1t.11("5W")){18 i=1A.24(2*1A.2f()),a=[["2d",l.g.1t.11("5V")],["ah",l.g.1t.11("5W")]];O(a[i][0],a[i][1])}1w l.g.1t.11("5V")?O("2d",l.g.1t.11("5V")):l.g.1t.11("5W")?O("ah",l.g.1t.11("5W")):O("2d","1")},k=16(){o(t(e))&&-1!=5X.1g("3d")?O("3d",5X.1K(":")[1]):-1!=5X.1g("3d")?O("2d","5H"):O("2d",5X.1K(":")[1])},O=16(t,e){18 i,a,s=-1==t.1g("cG")?l.t:l.ct,o="3d";1d(-1!=t.1g("2d")&&(o="2d"),-1!=e.1g("8B"))a=s["t"+o].1h-1,i="8B";1w 1d(-1!=e.1g("5H"))a=1A.24(1A.2f()*n(s["t"+o])),i="2f aj 5H";1w{18 r=e.1K(","),d=r.1h;a=1b(r[1A.24(1A.2f()*d)])-1,i="2f aj cI"}C(o,s["t"+o][a])},C=16(e,i){18 o=l.g.i,n=l.g.1J.17(\'*[1r*="12-l"]\').1h>0?1R:0,d=-1==i.6U.27().1g("cK")?!1:!0,g=-1==i.6U.27().1g("cL")?!1:!0,h=1P i.4a,c=1P i.49;2s(h){1i"3W":h=i.4a;1p;1i"5n":h=1A.24(1A.2f()*(1b(i.4a.1K(",")[1])-1b(i.4a.1K(",")[0])+1))+1b(i.4a.1K(",")[0]);1p;al:h=1A.24(1A.2f()*(i.4a[1]-i.4a[0]+1))+i.4a[0]}2s(c){1i"3W":c=i.49;1p;1i"5n":c=1A.24(1A.2f()*(1b(i.49.1K(",")[1])-1b(i.49.1K(",")[0])+1))+1b(i.49.1K(",")[0]);1p;al:c=1A.24(1A.2f()*(i.49[1]-i.49[0]+1))+i.49[0]}(1==l.g.7e()&&1==l.o.am||l.g.2B&&1==l.o.ao)&&(h>=15?h=7:h>=5?h=4:h>=4?h=3:h>2&&(h=2),c>=15?c=7:c>=5?c=4:c>=4?c=3:c>2&&(c=2),c>2&&h>2&&(c=2,h>4&&(h=4)));18 u=l.g.i.1a()/h,f=l.g.i.1c()/c;l.g.2E?l.g.2E.1s(!0,!0).5B().19({1I:"2e",1a:o.1a(),1c:o.1c()}):l.g.2E=t("<1k>").1m("12-1v-2a").1m("12-4L-2y").19({1a:o.1a(),1c:o.1c()}).4M(o);18 p=o.1a()-1A.24(u)*h,m=o.1c()-1A.24(f)*c,v=[];v.aq=16(){18 t,e,i,a=14.1h;1d(0==a)21!1;22(;--a;)t=1A.24(1A.2f()*(a+1)),e=14[a],i=14[t],14[a]=i,14[t]=e;21 14};22(18 y=0;h*c>y;y++)v.8l(y);2s(i.3N.cV){1i"5F":v.5F();1p;1i"as-8m":v=r(c,h,"8m");1p;1i"as-5F":v=r(c,h,"5F");1p;1i"2f":v.aq()}18 b=l.g.1J.17(".12-bg"),w=l.g.1t.17(".12-bg");1d(0==b.1h&&0==w.1h&&(e="2d",i=t.4z(!0,{},l.t.cY[0]),i.1z.2o=1,i.3N.1M=0),"3d"==e){l.g.2W=(h*c-1)*i.3N.1M;18 L=0;i.2L&&i.2L.2o&&(L+=i.2L.2o),i.29&&i.29.2o&&(L+=i.29.2o),i.2v&&i.2v.2o&&(L+=i.2v.2o),l.g.2W+=L;18 I=0;i.2L&&i.2L.1M&&(I+=i.2L.1M),i.29&&i.29.1M&&(I+=i.29.1M),i.2v&&i.2v.1M&&(I+=i.2v.1M),l.g.2W+=I}1w l.g.2W=(h*c-1)*i.3N.1M+i.1z.2o,l.g.4W=t("<1k>").1m("12-d4").1E(l.g.2E),l.g.8o=t("<1k>").1m("12-d6").1E(l.g.2E);22(18 k=l.g.2c,O=0;h*c>O;O++){18 C,W,X=O%h==0?p:0,Y=O>(c-1)*h-1?m:0,H=t("<1k>").1m("12-1v-3N").19({1a:1A.24(u)+X,1c:1A.24(f)+Y}).1E(l.g.2E);1d("3d"==e){H.1m("12-3d-2a");18 P,M=1A.24(u)+X,N=1A.24(f)+Y;P="aA"==i.29.61?1A.3Z(i.29.1z.3a)>90&&"aD"!=i.3N.aE?1A.24(M/7)+X:M:1A.3Z(i.29.1z.2S)>90&&"aD"!=i.3N.aE?1A.24(N/7)+Y:N;18 B=M/2,A=N/2,R=P/2,z=16(e,i,a,s,o,r,n,d,l){t("<1k>").1m(e).19({1a:a,1c:s,"-o-3V":"63("+o+"1D, "+r+"1D, "+n+"1D) 2S("+d+"3B) 3a("+l+"3B) 65(66) 4F(1, 1, 1)","-dt-3V":"63("+o+"1D, "+r+"1D, "+n+"1D) 2S("+d+"3B) 3a("+l+"3B) 65(66) 4F(1, 1, 1)","-du-3V":"63("+o+"1D, "+r+"1D, "+n+"1D) 2S("+d+"3B) 3a("+l+"3B) 65(66) 4F(1, 1, 1)","-74-3V":"63("+o+"1D, "+r+"1D, "+n+"1D) 2S("+d+"3B) 3a("+l+"3B) 65(66) 4F(1, 1, 1)",3V:"63("+o+"1D, "+r+"1D, "+n+"1D) 2S("+d+"3B) 3a("+l+"3B) 65(66) 4F(1, 1, 1)"}).1E(i)};z("12-3d-3G",H,0,0,0,0,-R,0,0);"dw"==i.29.61&&1A.3Z(i.29.1z.2S)>90?z("12-3d-5D",H.17(".12-3d-3G"),M,N,-B,-A,-R,76,0):z("12-3d-5D",H.17(".12-3d-3G"),M,N,-B,-A,-R,0,76),z("12-3d-1l",H.17(".12-3d-3G"),M,P,-B,A-R,0,-90,0),z("12-3d-1n",H.17(".12-3d-3G"),M,P,-B,-A-R,0,90,0),z("12-3d-aM",H.17(".12-3d-3G"),M,N,-B,-A,R,0,0),z("12-3d-1j",H.17(".12-3d-3G"),P,N,-B-R,-A,0,0,-90),z("12-3d-1G",H.17(".12-3d-3G"),P,N,B-R,-A,0,0,90),C=H.17(".12-3d-aM"),W="aA"==i.29.61?1A.3Z(i.29.1z.3a)>90?H.17(".12-3d-5D"):H.17(".12-3d-1j, .12-3d-1G"):1A.3Z(i.29.1z.2S)>90?H.17(".12-3d-5D"):H.17(".12-3d-1n, .12-3d-1l");18 D=v[O]*i.3N.1M,U=l.g.2E.17(".12-3d-2a:eq("+O+") .12-3d-3G"),F=1B 97;i.2L&&i.2L.1z?(i.2L.1z.1M=i.2L.1z.1M?(i.2L.1z.1M+D)/1R:D/1R,F.2z(U[0],i.2L.2o/1R,s(i.2L.1z,i.2L.4w))):i.29.1z.1M=i.29.1z.1M?(i.29.1z.1M+D)/1R:D/1R,F.2z(U[0],i.29.2o/1R,s(i.29.1z,i.29.4w)),i.2v&&(i.2v.1z||(i.2v.1z={}),F.2z(U[0],i.2v.2o/1R,s(i.2v.1z,i.2v.4w,"2v")))}1w{18 q=3e=2R=2U="1W",j=78=1;1d("2f"==i.1z.61)18 V=["1n","1l","1G","1j"],Q=V[1A.24(1A.2f()*V.1h)];1w 18 Q=i.1z.61;1d(-1!=i.6U.27().1g("aV")&&O%2==0&&(k="1T"==k?"1X":"1T"),"1T"==k)2s(Q){1i"1n":Q="1l";1p;1i"1l":Q="1n";1p;1i"1j":Q="1G";1p;1i"1G":Q="1j";1p;1i"8C":Q="8D";1p;1i"8E":Q="8F";1p;1i"8F":Q="8E";1p;1i"8D":Q="8C"}2s(Q){1i"1n":q=2R=-H.1c(),3e=2U=0;1p;1i"1l":q=2R=H.1c(),3e=2U=0;1p;1i"1j":q=2R=0,3e=2U=-H.1a();1p;1i"1G":q=2R=0,3e=2U=H.1a();1p;1i"8C":q=H.1c(),2R=0,3e=H.1a(),2U=0;1p;1i"8E":q=H.1c(),2R=0,3e=-H.1a(),2U=0;1p;1i"8F":q=-H.1c(),2R=0,3e=H.1a(),2U=0;1p;1i"8D":q=-H.1c(),2R=0,3e=-H.1a(),2U=0}2s(l.g.4P=i.1z.68?i.1z.68:1,1==d&&1!=l.g.4P&&(q/=2,2R/=2,3e/=2,2U/=2),i.1z.40){1i"3r":q=2R=3e=2U=0,j=0,78=1;1p;1i"dQ":j=0,78=1,1==l.g.4P&&(2R=2U=0)}1d((i.1z.3v||i.1z.2S||i.1z.3a||1!=l.g.4P)&&!l.g.2B&&"1q"!=i.1z.40?H.19({4L:"2T"}):H.19({4L:"2y"}),1==d?l.g.4W.19({4L:"2T"}):l.g.4W.19({4L:"2y"}),1==g||"1q"==i.1z.40||1==d){18 E=H.1E(l.g.4W),G=H.8n().1E(l.g.8o);C=t("<1k>").1m("12-dT").1E(E)}1w 18 G=H.1E(l.g.8o);W=t("<1k>").1m("12-dU").1E(G).19({1n:-q,1j:-3e,dV:"2e",31:j});18 Z=v[O]*i.3N.1M,5e=i.1z.3v?i.1z.3v:0,J=i.1z.2S?i.1z.2S:0,$=i.1z.3a?i.1z.3a:0;1d("1T"==k&&(5e=-5e,J=-J,$=-$),3i.75(W[0],i.1z.2o/1R,{34:5e,4H:J,4J:$,68:l.g.4P},{1M:Z/1R,1n:0,1j:0,31:78,34:0,4H:0,4J:0,68:1,3S:a(i.1z.4w)}),1==g&&(w.1h<1||w.1h>0&&(-1!=w.1f("1e").27().1g("4K")||w.1a()<l.g.1y()||w.1c()<l.g.1F()))&&3i.2z(C[0],i.1z.2o/1R,{1M:Z/1R,31:0,3S:a(i.1z.4w)}),("1q"==i.1z.40||1==d)&&-1==i.6U.27().1g("aV")){18 K=0;0!=5e&&(K=-5e),3i.2z(C[0],i.1z.2o/1R,{1M:Z/1R,1n:2R,1j:2U,34:K,68:l.g.4P,31:j,3S:a(i.1z.4w)})}}b.1h&&("3d"==e||"2d"==e&&(1==g||"1q"==i.1z.40||1==d)?C.4h(t("<28>").1f("1e",b.1f("1e")).19({1a:b[0].1N.1a,1c:b[0].1N.1c,3K:38(b.19("4e-1j"))-38(H.3F().1j),4g:38(b.19("4e-1n"))-38(H.3F().1n)})):0==l.g.4W.3f().1h&&l.g.4W.4h(t("<28>").1f("1e",b.1f("1e")).19({1a:b[0].1N.1a,1c:b[0].1N.1c,3K:38(b.19("4e-1j")),4g:38(b.19("4e-1n"))}))),w.1h&&W.4h(t("<28>").1f("1e",w.1f("1e")).19({1a:w[0].1N.1a,1c:w[0].1N.1c,3K:38(w.19("4e-1j"))-38(H.3F().1j),4g:38(w.19("4e-1n"))-38(H.3F().1n)}))}18 7a=l.g.1J,et=l.g.1t;2i(16(){7a.17(".12-bg").19({26:"2y"})},50),et.17(".12-bg").19({26:"2y"}),l.g.2E.2l("12-4L-2y"),S(n),0===n&&(n=10),2i(16(){7a.19({1a:0})},n);18 5a=1b(et.11("7b"))?1b(et.11("7b")):0,at=l.g.2W+5a>0?l.g.2W+5a:0;2i(16(){1==l.g.2h&&(l.g.2E.5B(),7a.2l("12-1V"),l.3z(et,16(){l.g.2h=!1})),T(),(et.17(".12-bg").1h<1||et.17(".12-bg").1h>0&&-1!=et.17(".12-bg").1f("1e").27().1g("4K"))&&l.g.2E.1M(7K).3w(2w,16(){t(14).5B().az()}),et.19({1a:l.g.1y(),1c:l.g.1F()})},at),l.g.2W<2w&&(l.g.2W=1R),2i(16(){l.g.2E.1m("12-4L-2y"),et.17(".12-bg").1h?(et.17(".12-bg").19({1I:"1Q",26:"2T"}),l.g.2B?(et.17(".12-bg").19("1I","2e"),2i(16(){x()},4o)):et.17(".12-bg").2x(4o,16(){x()})):x()},l.g.2W)},W=16(){l.g.1t.17(\' > *[1r*="12-l"]\').1L(16(){t(14).19({26:"2y"})}),l.g.8L=t(e).4k().1n,t(1Y).2J("4y",16(){2i(16(){l.g.8L=t(e).4k().1n},20)});18 i=16(){t(1Y).e4()+t(1Y).1c()-l.g.1F()/2>l.g.8L&&(l.g.7c=!0,l.g.8t===!0&&(l.o.42=!0,l.23()),T())};t(1Y).e6(16(){l.g.7c||i()}),i()},X=(l.g.1t.11("52")||l.g.1t.11("5V"))&&l.t||(l.g.1t.11("5U")||l.g.1t.11("5W"))&&l.ct?"1B":"5T";1d(l.g.1t.11("2C")||l.5P(l.g.1t),"1B"===l.g.1t.11("2C")&&(X="1B"),l.o.8N&&(X="bc"),l.o.4O&&!l.g.7c){1d(1==l.g.2t){18 f=0;l.o.7v(l.g)}1w{18 Y=1b(l.g.1t.11("7b"))?1b(l.g.1t.11("7b")):0,H="1B"==X?0:p;l.g.9f=2i(16(){x()},H+1A.3Z(Y))}l.g.2W=!0,l.o.8x===!0?W():(l.g.7c=!0,T()),l.g.1t.19({1a:l.g.1y(),1c:l.g.1F()}),l.g.2B||l.g.1t.17(".12-bg").19({1I:"1Q"}).2x(l.o.7g),l.g.4j=!1}1w 2s(X){1i"5T":l.g.2W=!1,l.g.2E&&l.g.2E.5B(),w(),S(),L(),T();1p;1i"1B":"2K"!=1P 5X?k():I();1p;1i"bc":C(l.o.8N.40,l.o.8N.e9)}},l.5P=16(t){18 e=!t.11("12")&&(t.11("12")||t.11("5C")||t.11("3n")||t.11("5Q")||t.11("4Z")||t.11("5I")||t.11("5L")||t.11("4C")||t.11("4v")||t.11("5N")||t.11("4A")||t.11("8e")||t.11("5S")||t.11("8d")||t.11("5R"))?"5T":"1B";t.11("2C",e)},l.7r=16(t){t.11("2C")||l.5P(t),t.2l("12-7y");18 e=l.g.1J;"1T"!=l.g.2c&&l.g.1t&&(e=l.g.1t);18 i,s,o=e.11("3n")?e.11("3n"):l.o.7k,r=l.g.7l[l.g.2c][o],n=t.11("3n")?t.11("3n"):r;2s(n){1i"1j":i=-l.g.1y(),s=0;1p;1i"1G":i=l.g.1y(),s=0;1p;1i"1n":s=-l.g.1F(),i=0;1p;1i"1l":s=l.g.1F(),i=0;1p;1i"3r":s=0,i=0}1d("1B"===t.11("2C"))18 d="1B";1w 18 d=t.11("5Q")?t.11("5Q"):!1;2s(d){1i"1j":i=l.g.1y(),s=0;1p;1i"1G":i=-l.g.1y(),s=0;1p;1i"1n":s=l.g.1F(),i=0;1p;1i"1l":s=-l.g.1F(),i=0;1p;1i"3r":s=0,i=0;1p;1i"1B":i=t.11("3j")?"1j"===t.11("3j")?l.g.1y():"1G"===t.11("3j")?-l.g.1y():-1b(t.11("3j")):-l.1v.7A,s=t.11("2X")?"1n"===t.11("2X")?l.g.1F():"1l"===t.11("2X")?-l.g.1F():-1b(t.11("2X")):-l.1v.7B}18 g=5k=5j=4t=5d=59=2Z=30="1Q";g=t.11("5R")?t.11("5R"):l.1v.7D,5k=t.11("6C")?t.11("6C"):l.1v.7F,5j=t.11("6D")?t.11("6D"):l.1v.7H,4t=t.11("5S")?t.11("5S"):l.1v.7J,5d=t.11("6F")?t.11("6F"):l.1v.7L,59=t.11("6G")?t.11("6G"):l.1v.7N,1===4t?(2Z=t.11("6H")?t.11("6H"):l.1v.7P,30=t.11("6I")?t.11("6I"):l.1v.7R):2Z=30=4t;22(18 h=t.11("6J")?t.11("6J").1K(" "):l.1v.7T,c=0;c<h.1h;c++)-1===h[c].1g("%")&&-1!==h[c].1g("1j")&&-1!==h[c].1g("1G")&&-1!==h[c].1g("1n")&&-1!==h[c].1g("1l")&&(h[c]=""+1b(h[c])*l.g.1x+"1D");18 u=h.7U(" "),f=t.11("6K")?t.11("6K"):l.1v.7W,p=1b(t.19("1j")),m=1b(t.19("1n")),v=1b(t.1f("1r").1K("12-l")[1]),y=t.3o()>t.3q()?t.3o():t.3q(),b=0===1b(g)?t.3o():y,w=0===1b(g)?t.3q():y;1d(-1===v&&"1B"!==d||"1j"===t.11("3j")||"1G"===t.11("3j")?0>i?i=-(l.g.1y()-p+(2Z/2-.5)*b+1C):i>0&&(i=p+(2Z/2+.5)*b+1C):i*=l.g.1x,-1===v&&"1B"!==d||"1n"===t.11("2X")||"1l"===t.11("2X")?0>s?s=-(l.g.1F()-m+(30/2-.5)*w+1C):s>0&&(s=m+(30/2+.5)*w+1C):s*=l.g.1x,-1===v||"1B"===d)18 x=1;1w 18 S=l.g.1J.11("6L")?1b(l.g.1J.11("6L")):l.o.7Y,x=v*S;1d("1B"===t.11("2C"))18 L=l.1v.4B,T=l.1v.4x;1w 18 L=l.o.4B,T=l.o.4x;18 I=t.11("4C")?1b(t.11("4C")):L;0===I&&(I=1);18 k=t.11("4A")?t.11("4A"):T,O={26:"2y"},C={34:g,4H:5k,4J:5j,6M:5d,6N:59,4V:2Z,4T:30,x:-i*x,y:-s*x,3S:a(k),83:16(){t.19(O)}};("3r"==d||!d&&"3r"==n||"84"!==t.11("9F")&&"1B"===t.11("2C"))&&(C.31=0,O.31=t.11("6O")),3i.85(t[0],{87:f,86:u}),3i.2z(t[0],I/1R,C)},l.4y()},a=16(t){18 e;1d(-1!==t.27().1g("9h")||-1!==t.27().1g("7I"))e=7O.7Q;1w 1d(-1!==t.27().1g("7X")){18 i=t.27().1K("7X")[1];e=1Y[i.8O(0).8P()+i.8Q(1)].9k}1w 1d(-1!==t.27().1g("81")){18 i=t.27().1K("81")[1];e=1Y[i.8O(0).8P()+i.8Q(1)].9o}1w 1d(-1!==t.27().1g("7Z")){18 i=t.27().1K("7Z")[1];e=1Y[i.8O(0).8P()+i.8Q(1)].9m}21 e},s=16(t,e,i,s){1d("2K"==1P e)18 e="ed";18 o={};21 t.3v!==s&&(o.34=t.3v),t.3a!==s&&(o.4J=t.3a),t.2S!==s&&(o.4H=t.2S),"2v"===i?o.4V=o.4T=o.bi=1:t.4F!==s&&(o.4V=o.4T=o.bi=t.4F),t.1M&&(o.1M="2v"===i?t.1M/1R:t.1M),o.3S=a(e),o},o=16(e){18 i=t("<1k>"),a=!1,s=!1,o=["ef","eg","eh","ei","ej"];3V=["ek","em","en","eo","ep"];22(18 r=o.1h-1;r>=0;r--)a=a?a:bj 0!=i[0].1N[o[r]];22(18 r=3V.1h-1;r>=0;r--)i.19("3V-1N","bk-3d"),s=s?s:"bk-3d"==i[0].1N[3V[r]];21 a&&bj 0!=i[0].1N[o[4]]&&(i.1f("5t","12-eu").1E(e),a=3===i[0].ev&&9===i[0].ex,i.b2()),a&&s},r=16(t,e,i){18 a=[];1d("8m"==i)22(18 s=0;t>s;s++)22(18 o=0;e>o;o++)a.8l(s+o*t);1w 22(18 s=t-1;s>-1;s--)22(18 o=e-1;o>-1;o--)a.8l(s+o*t);21 a},n=16(t){18 e=0;22(18 i 41 t)t.ey(i)&&++e;21 e},d=16(){bl=16(t){t=t.27();18 e=/(bm)[ \\/]([\\w.]+)/.69(t)||/(74)[ \\/]([\\w.]+)/.69(t)||/(eC)(?:.*3L|)[ \\/]([\\w.]+)/.69(t)||/(bo) ([\\w.]+)/.69(t)||t.1g("9a")<0&&/(eE)(?:.*? eF:([\\w.]+)|)/.69(t)||[];21{8S:e[1]||"",3L:e[2]||"0"}};18 t=bl(4f.44),e={};21 t.8S&&(e[t.8S]=!0,e.3L=t.3L),e.bm?e.74=!0:e.74&&(e.eJ=!0),e};i.6E={3L:"5.6.7",7e:16(){21 4f.44.3A(/eK/i)||4f.44.3A(/eL/i)||4f.44.3A(/eM/i)||4f.44.3A(/eN/i)||4f.44.3A(/eO/i)||4f.44.3A(/eP/i)||4f.44.3A(/eQ eR/i)?!0:!1},eS:16(t){21"1W"==t.19("2b-1l")||"1Q"==t.19("2b-1l")||0==t.19("2b-1l")||"eT"==t.19("2b-1l")?!0:!1},2B:d().bo&&d().3L<9?!0:!1,8t:!1,2N:!1,47:!1,2u:!1,2P:!1,2t:7f,2c:"1X",4p:7f,1y:7f,1F:7f,eU:0,7l:{1T:{1j:"1G",1G:"1j",1n:"1l",1l:"1n"},1X:{1j:"1j",1G:"1G",1n:"1n",1l:"1l"}},v:{d:4o,8i:7E,6c:4o}},i.aI={9L:80,9M:0,5m:1R,5K:0,5O:"77",2x:!0,9S:0,9U:0,9W:0,9Y:1,a4:1,a6:1,a0:0,a2:0,a8:["50%","50%","0"],aa:4o,7A:-80,7B:0,4B:9R,eX:0,4x:"77",3w:!0,7D:0,7F:0,7H:0,7J:1,7P:1,7R:1,7L:0,7N:0,7T:["50%","50%","0"],7W:4o},i.9C={70:bu},i.aN={95:!0,3X:0,6h:0,8g:!1,4M:"",42:!0,8x:!0,aw:!0,2O:1,4O:!0,7g:7K,46:0,6X:!0,7h:!1,6d:!1,3k:"eZ",3E:"/5J/f0/",7q:"7t",6B:!1,8y:!0,71:!0,6Y:!0,9s:!0,9B:!0,9e:!0,6v:!1,aR:!1,bd:!0,3b:"1S",6l:"60%",7o:1C,5u:60,8j:35,8k:1C,5z:!0,2A:"1W",9v:"f1.f2",3Q:!0,4E:!0,1u:!1,aS:"1j: -bv; 1n: -bv;",8M:!1,b4:"f4",am:!0,ao:!0,8H:!1,9X:0,9I:f5,cX:"",bt:16(t){},8W:16(t){},bp:16(t){},aH:16(t){},aY:16(t){},7v:16(t){},73:16(t){},6Z:16(t){},70:bu,7k:"1G",ac:.45,7Y:.45,5m:1R,4B:1R,5O:"77",4x:"77",5K:0,6t:0}}(3D);', 62, 937, '|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||function|find|var|css|width|parseInt|height|if|src|attr|indexOf|length|case|left|div|bottom|addClass|top|nav|break|slide|class|stop|nextLayer|yourLogo|lt|else|ratio|sliderWidth|transition|Math|new|100|px|appendTo|sliderHeight|right|thumbnail|display|curLayer|split|each|delay|style|iframe|typeof|none|1e3|hover|prev|parent|active|auto|next|window|curLayerIndex||return|for|start|floor||visibility|toLowerCase|img|animation|container|padding|prevNext||block|random|sliderOriginalWidth|resize|setTimeout|youtube|clearTimeout|removeClass|hasClass|replace|duration|video|com|click|switch|layersNum|autoSlideshow|after|300|fadeIn|hidden|to|autoPauseSlideshow|ie78|transitiontype|originalAutoSlideshow|ltContainer|the|wrapper|cttl|href|on|undefined|before|originalHeight|paused|firstSlide|isAnimating|originalWidth|T2|rotateX|visible|L2|not|totalDuration|offsetyout|bottomWrapper|curSubScaleX|curSubScaleY|opacity|fullwidth|wp|rotation||layerSlider||parseFloat||rotateY|thumbnailNavigation|videopreview||L1|children|init|circleTimer|TweenLite|offsetxout|skin|sliderOriginalHeight|LayerSlider|slidedirection|outerWidth|preventDefault|outerHeight|fade|barTimer|closest|curSlideTime|rotate|fadeOut|preloaded|image|makeResponsive|match|deg|param|jQuery|skinsPath|position|box|loaded|tr|layer|marginLeft|version|is|tile|vimeo|responsiveMode|imgPreload|thumbsWrapper|ease|pausedSlideTime|background|transform|number|responsiveUnder|shadow|abs|type|in|autoStart|forcehide|userAgent||loops|pausedByVideo|border|rows|cols|tn|of|nextLoop|margin|navigator|marginTop|append|animate|isLoading|offset|thumb|startSlideTime|html|500|slideTimer|showUntilTimer|originalTop|originalLeft|curSubScale|change|showuntil|easing|easingOut|load|extend|easingout|durationOut|durationout|always|lazyLoad|scale3d|media|rotationX|autoplay|rotationY|png|overflow|prependTo|slidebuttons|animateFirstSlide|scale2D|document|rel|youtu|scaleY|nocookie|scaleX|curTiles|videoSrc|getTime|delayin||body|transition3d|nextSubScaleY|thumbnails|Date|nextSubScaleX|offsetyin|inner|curSubSkewY|it|vpcontainer|offsetxin|curSubSkewX|_|fisrtSlide|index|touches|shadowImg|curSubRotateY|curSubRotateX|location|durationIn|string|li|trim|url|removeAttr|span|id|tnHeight|touchEndX|pause|originalRight|originalBottom|autoPlayVideos|player|empty|slidedelay|back|error|reverse|nextLayerIndex|all|delayout|layerslider|delayIn|durationin|timer|easingin|easingIn|transitionType|slideoutdirection|rotateout|scaleout|old|customtransition3d|transition2d|customtransition2d|LSCustomTransition|WordPress|Please||direction|your|translate3d|or|rotateZ|0deg|like|scale|exec|oB|play|fi|randomSlideshow|originalBorderLeft|nothumb|originalBorderBottom|layersContainer|oR|oT|originalBorderRight|tnContainerWidth|originalBorderTop|curLayerTop|nextLayerLeft|nextLayerTop|layerMarginLeft|layerMarginTop|link|delayOut|script|hoverBottomNav|ontouchstart|fadeTo|showShadow|bind|touchStartX|globalBGImage|rotatexout|rotateyout|global|skewxout|skewyout|scalexout|scaleyout|transformoriginout|perspectiveout|parallaxout|skewX|skewY|originalOpacity|nextSubScale|html5|parallaxlevel|helper|audio|name|and|currentTime|forceLoopNum|navButtons|cbNext|slideDelay|navStartStop|clicked|cbPrev|webkit|fromTo|180|easeInOutQuint|O2|http|tt|timeshift|firstSlideAnimated|ytplayer|isMobile|null|sliderFadeInDuration|twoWaySlideshow|nextLayerWidth|nextLayerHeight|slideDirection|slideDirections|videoTimer|originalPaddingTop|tnWidth|dequeue|globalBGColor|sublayerShowUntil|changeThumb|transparent|kill|cbAnimStop|originalSlide|150|videohack|originalPaddingRight|offsetXOut|offsetYOut|head|rotateOut|750|rotateXOut|250|rotateYOut|linear|scaleOut|350|skewXOut|content|skewYOut|Linear|scaleXOut|easeNone|scaleYOut|add|transformOriginOut|join|kmGS|perspectiveOut|easeinout|parallaxOut|easein||easeout|pageX|onComplete|false|set|transformOrigin|transformPerspective|nextSubRotateX|nextSubRotateY|scrollThumb|nextSubSkewX|nextSubSkewY|rotatein|scalein|text|fullScreen|numYouTubeCurSlide|fo|tnActiveOpacity|tnInactiveOpacity|push|forward|clone|nextTiles|sliderOriginalWidthRU|resizeShadow|originalPaddingLeft|preload|originalAutoStart|forceHideControls|linkto|sublayerContainer|startInViewport|navPrevNext|resizeSlider|bottomNavSizeHelper|last|topleft|bottomright|topright|bottomleft|defaults|hideOnMobile|curLayerRight|originalPaddingBottom|curLayerBottom|sliderTop|yourLogoLink|slideTransition|charAt|toUpperCase|slice|nextLayerRight|browser|resizeYourLogo|nextLayerBottom|slider|cbStart|pageY|mousemove|meta||initialized|sides|hider|layerSliderCustomTransitions|responsive|https|TimelineLite|half|2e3|compatible|norotate|layerSliderTransitions|line|hoverPrevNext|t5|fn|swing|borderTopWidth|disabled|easeInOut|hash|easeIn|loading|easeOut|shadowBtmMod|file|ieEasing|keybNav|alt|Play|youtubePreview|playvideo|relative|update|which|playVideo|touchNav|slideTransitions|wmode|opaque|fadeout|originalEvent|firstLayer|hideOver|oldjquery|cbTimeLineStart|offsetXIn|offsetYIn|videoDuration|clientX|st|gi|400|rotateIn|rotatexin|rotateXIn|rotateyin|rotateYIn|hideUnder|scaleIn|skewxin|skewXIn|skewyin|skewYIn|scalexin|scaleXIn|scaleyin|scaleYIn|transformoriginin|transformOriginIn|perspectivein|perspectiveIn|parallaxin|parallaxIn|console|custom3d|nIt|seems|custom2d|URL|from|pointing|default|optimizeForMobile||optimizeForIE78|wrong|randomize|cannot|col||check|URLs|pauseOnHover|images|strong|show|horizontal|used|library|large|depth|borderBottomWidth|resizeThumb|cbPause|layerTransitions|above|plugin|originalFontSize|front|options|lsShowNotice|borderRightWidth|looks|showBarTimer|yourLogoStyle|off|It|mirror|font|stopLayer|cbAnimStart|animating|issue|size|remove|target|yourLogoTarget|t4|showSlider|jquery|t3|t2|forcestop|createStyleSheet|forced|showCircleTimer||borderLeftWidth||t1|scaleZ|void|preserve|uaMatch|chrome|parallaxStartX|msie|cbStop|object|originalLineHeight|parallaxStartY|cbInit|4e3|10px|backgroundColor|here||center|keydown|stopVideo|getJSON|api|v2|Important|higher|json|callback|newer|least|thumbnail_large|requires|using|are|clicking|you|640|ended|450|bar|insertAfter|updating|about|Settings|redraw|Advanced|touchstart|absolute|substring|lastIndexOf|important|log|Troubleshooting|within|lswpVersion|gpuhack|zIndex|touchmove|defaultInitData|wpVersion|pointer|resume|touchend|animateFirstLayer|blank|userInitData|alert|Image|onload|onerror|gif|sideleft|read|can||You|sideright|fadein|option|deeplink|includes|onReverseComplete|entry|wrapAll|JS|mouseenter|restart|custom|touchscroll|specified|indicator|carousel|crossfad|Put|enable|yourlogo|static|bock|600|changeTimer|insertBefore|page|sequence|circle|staticImage|t2d|main|area|admin|quad|navigate|curtiles|Quad|nexttiles|quart|Quart|sliders|cubic|problems|Cubic|quint|causing|Quint|layerMarginRight|sine|copy|extra|layerMarginBottom|loads|theme|Sine||expo|Expo|circ|Circ|ms|moz|elastic|vertical|group|wordpress|Elastic|faq|another|that|cursor|Back|bounce|Bounce|below|textDecoration|www|filter|prevLayerIndex|iframe_api|kreaturamedia|javascript|support|mixed|onYouTubeIframeAPIReady|outline|curtile|nexttile|dispay|backgroundImage|multiple|orientationchange|vi|embed|IE|enabled|browsers|scrollTop|older|scroll|with|round|obj|because|Updater|use|easeInOutQuart|title|perspective|OPerspective|msPerspective|MozPerspective|WebkitPerspective|transformStyle||OTransformStyle|msTransformStyle|MozTransformStyle|WebkitTransformStyle||originalMarkup|enableCSS3||test3d|offsetHeight|forceStop|offsetLeft|hasOwnProperty|YT|Player|events|opera|onReady|mozilla|rv|onStateChange|seekTo|exclam|safari|Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows|Phone|isHideOn3D|0px|numYouTubeCurslide|queue|stylesheet|showUntil|mouseleave|v5|skins|maxresdefault|jpg|enablejsapi|_self|1e6|more'.split('|'), 0, {}));
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	while(c--) {
		if(k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}', 62, 132, '||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')));
! function(e) {
	"use strict";
	var n = function(n, t, r) {
		var i, a = e.document,
			o = a.createElement("link");
		if(t) i = t;
		else {
			var l = (a.body || a.getElementsByTagName("head")[0]).childNodes;
			i = l[l.length - 1]
		}
		var s = a.styleSheets;
		o.rel = "stylesheet", o.href = n, o.media = "only x",
			function e(n) {
				if(a.body) return n();
				setTimeout(function() {
					e(n)
				})
			}(function() {
				i.parentNode.insertBefore(o, t ? i : i.nextSibling)
			});
		var c = function(e) {
			for(var n = o.href, t = s.length; t--;)
				if(s[t].href === n) return e();
			setTimeout(function() {
				c(e)
			})
		};

		function d() {
			o.addEventListener && o.removeEventListener("load", d), o.media = r || "all"
		}
		return o.addEventListener && o.addEventListener("load", d), o.onloadcssdefined = c, c(d), o
	};
	"undefined" != typeof exports ? exports.loadCSS = n : e.loadCSS = n
}("undefined" != typeof global ? global : this), jQuery(document).ready(function(e) {
	"use strict";
	var n;
	if("undefined" != typeof wbcr_clearfy_async_links && Object.keys(wbcr_clearfy_async_links).length)
		for(n in wbcr_clearfy_async_links) wbcr_clearfy_async_links.hasOwnProperty(n) && loadCSS(wbcr_clearfy_async_links[n])
});
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	function b(b, d) {
		var e, f, g, h = b.nodeName.toLowerCase();
		return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
	}

	function c(b) {
		return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
			return "hidden" === a.css(this, "visibility")
		}).length
	}
	a.ui = a.ui || {}, a.extend(a.ui, {
		version: "1.11.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), a.fn.extend({
		scrollParent: function(b) {
			var c = this.css("position"),
				d = "absolute" === c,
				e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				f = this.parents().filter(function() {
					var b = a(this);
					return(!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
				}).eq(0);
			return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
		},
		uniqueId: function() {
			var a = 0;
			return function() {
				return this.each(function() {
					this.id || (this.id = "ui-id-" + ++a)
				})
			}
		}(),
		removeUniqueId: function() {
			return this.each(function() {
				/^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
			})
		}
	}), a.extend(a.expr[":"], {
		data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
			return function(c) {
				return !!a.data(c, b)
			}
		}) : function(b, c, d) {
			return !!a.data(b, d[3])
		},
		focusable: function(c) {
			return b(c, !isNaN(a.attr(c, "tabindex")))
		},
		tabbable: function(c) {
			var d = a.attr(c, "tabindex"),
				e = isNaN(d);
			return(e || d >= 0) && b(c, !e)
		}
	}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
		function d(b, c, d, f) {
			return a.each(e, function() {
				c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
			}), c
		}
		var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
			f = c.toLowerCase(),
			g = {
				innerWidth: a.fn.innerWidth,
				innerHeight: a.fn.innerHeight,
				outerWidth: a.fn.outerWidth,
				outerHeight: a.fn.outerHeight
			};
		a.fn["inner" + c] = function(b) {
			return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
				a(this).css(f, d(this, b) + "px")
			})
		}, a.fn["outer" + c] = function(b, e) {
			return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
				a(this).css(f, d(this, b, !0, e) + "px")
			})
		}
	}), a.fn.addBack || (a.fn.addBack = function(a) {
		return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
	}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
		return function(c) {
			return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
		}
	}(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
		focus: function(b) {
			return function(c, d) {
				return "number" == typeof c ? this.each(function() {
					var b = this;
					setTimeout(function() {
						a(b).focus(), d && d.call(b)
					}, c)
				}) : b.apply(this, arguments)
			}
		}(a.fn.focus),
		disableSelection: function() {
			var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function() {
				return this.bind(a + ".ui-disableSelection", function(a) {
					a.preventDefault()
				})
			}
		}(),
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function(b) {
			if(void 0 !== b) return this.css("zIndex", b);
			if(this.length)
				for(var c, d, e = a(this[0]); e.length && e[0] !== document;) {
					if(c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
					e = e.parent()
				}
			return 0
		}
	}), a.ui.plugin = {
		add: function(b, c, d) {
			var e, f = a.ui[b].prototype;
			for(e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
		},
		call: function(a, b, c, d) {
			var e, f = a.plugins[b];
			if(f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
				for(e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
		}
	}
});
/*!
 * jQuery UI Datepicker 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */
! function(a) {
	"function" == typeof define && define.amd ? define(["jquery", "./core"], a) : a(jQuery)
}(function(a) {
	function b(a) {
		for(var b, c; a.length && a[0] !== document;) {
			if(b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
			a = a.parent()
		}
		return 0
	}

	function c() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function d(b) {
		var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return b.delegate(c, "mouseout", function() {
			a(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).removeClass("ui-datepicker-next-hover")
		}).delegate(c, "mouseover", e)
	}

	function e() {
		a.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && a(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && a(this).addClass("ui-datepicker-next-hover"))
	}

	function f(b, c) {
		a.extend(b, c);
		for(var d in c) null == c[d] && (b[d] = c[d]);
		return b
	}
	a.extend(a.ui, {
		datepicker: {
			version: "1.11.4"
		}
	});
	var g;
	return a.extend(c.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(a) {
			return f(this._defaults, a || {}), this
		},
		_attachDatepicker: function(b, c) {
			var d, e, f;
			d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
		},
		_newInst: function(b, c) {
			var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: e,
				input: b,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: c,
				dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(b, c) {
			var d = a(b);
			c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
		},
		_attachments: function(b, c) {
			var d, e, f, g = this._get(c, "appendText"),
				h = this._get(c, "isRTL");
			c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), "focus" !== d && "both" !== d || b.focus(this._showDatepicker), "button" !== d && "both" !== d || (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
				src: f,
				alt: e,
				title: e
			}) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
				src: f,
				alt: e,
				title: e
			}) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
				return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
			}))
		},
		_autoSize: function(a) {
			if(this._get(a, "autoSize") && !a.inline) {
				var b, c, d, e, f = new Date(2009, 11, 20),
					g = this._get(a, "dateFormat");
				g.match(/[DM]/) && (b = function(a) {
					for(c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
					return d
				}, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
			}
		},
		_inlineDatepicker: function(b, c) {
			var d = a(b);
			d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(b, c, d, e, g) {
			var h, i, j, k, l, m = this._dialogInst;
			return m || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), f(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = g ? g.length ? g : [g.pageX, g.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
		},
		_destroyDatepicker: function(b) {
			var c, d = a(b),
				e = a.data(b, "datepicker");
			d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== c && "span" !== c || d.removeClass(this.markerClassName).empty(), g === e && (g = null))
		},
		_enableDatepicker: function(b) {
			var c, d, e = a(b),
				f = a.data(b, "datepicker");
			e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
				return a === b ? null : a
			}))
		},
		_disableDatepicker: function(b) {
			var c, d, e = a(b),
				f = a.data(b, "datepicker");
			e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : "div" !== c && "span" !== c || (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
				return a === b ? null : a
			}), this._disabledInputs[this._disabledInputs.length] = b)
		},
		_isDisabledDatepicker: function(a) {
			if(!a) return !1;
			for(var b = 0; b < this._disabledInputs.length; b++)
				if(this._disabledInputs[b] === a) return !0;
			return !1
		},
		_getInst: function(b) {
			try {
				return a.data(b, "datepicker")
			} catch(c) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(b, c, d) {
			var e, g, h, i, j = this._getInst(b);
			return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), g = this._getDateDatepicker(b, !0), h = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), f(j.settings, e), null !== h && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, h)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, g), this._updateAlternate(j), this._updateDatepicker(j))))
		},
		_changeDatepicker: function(a, b, c) {
			this._optionDatepicker(a, b, c)
		},
		_refreshDatepicker: function(a) {
			var b = this._getInst(a);
			b && this._updateDatepicker(b)
		},
		_setDateDatepicker: function(a, b) {
			var c = this._getInst(a);
			c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
		},
		_getDateDatepicker: function(a, b) {
			var c = this._getInst(a);
			return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
		},
		_doKeyDown: function(b) {
			var c, d, e, f = a.datepicker._getInst(b.target),
				g = !0,
				h = f.dpDiv.is(".ui-datepicker-rtl");
			if(f._keyEvent = !0, a.datepicker._datepickerShowing) switch(b.keyCode) {
				case 9:
					a.datepicker._hideDatepicker(), g = !1;
					break;
				case 13:
					return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
				case 27:
					a.datepicker._hideDatepicker();
					break;
				case 33:
					a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 34:
					a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 35:
					(b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
					break;
				case 36:
					(b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
					break;
				case 37:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 38:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
					break;
				case 39:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
					break;
				case 40:
					(b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
					break;
				default:
					g = !1
			} else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
			g && (b.preventDefault(), b.stopPropagation())
		},
		_doKeyPress: function(b) {
			var c, d, e = a.datepicker._getInst(b.target);
			if(a.datepicker._get(e, "constrainInput")) return c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || d < " " || !c || c.indexOf(d) > -1
		},
		_doKeyUp: function(b) {
			var c, d = a.datepicker._getInst(b.target);
			if(d.input.val() !== d.lastVal) try {
				c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
			} catch(e) {}
			return !0
		},
		_showDatepicker: function(c) {
			if(c = c.target || c, "input" !== c.nodeName.toLowerCase() && (c = a("input", c.parentNode)[0]), !a.datepicker._isDisabledDatepicker(c) && a.datepicker._lastInput !== c) {
				var d, e, g, h, i, j, k;
				d = a.datepicker._getInst(c), a.datepicker._curInst && a.datepicker._curInst !== d && (a.datepicker._curInst.dpDiv.stop(!0, !0), d && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(d, "beforeShow"), g = e ? e.apply(c, [c, d]) : {}, g !== !1 && (f(d.settings, g), d.lastVal = null, a.datepicker._lastInput = c, a.datepicker._setDateFromField(d), a.datepicker._inDialog && (c.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(c), a.datepicker._pos[1] += c.offsetHeight), h = !1, a(c).parents().each(function() {
					return h |= "fixed" === a(this).css("position"), !h
				}), i = {
					left: a.datepicker._pos[0],
					top: a.datepicker._pos[1]
				}, a.datepicker._pos = null, d.dpDiv.empty(), d.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), a.datepicker._updateDatepicker(d), i = a.datepicker._checkOffset(d, i, h), d.dpDiv.css({
					position: a.datepicker._inDialog && a.blockUI ? "static" : h ? "fixed" : "absolute",
					display: "none",
					left: i.left + "px",
					top: i.top + "px"
				}), d.inline || (j = a.datepicker._get(d, "showAnim"), k = a.datepicker._get(d, "duration"), d.dpDiv.css("z-index", b(a(c)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? d.dpDiv.show(j, a.datepicker._get(d, "showOptions"), k) : d.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(d) && d.input.focus(), a.datepicker._curInst = d))
			}
		},
		_updateDatepicker: function(b) {
			this.maxRows = 4, g = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
			var c, d = this._getNumberOfMonths(b),
				f = d[1],
				h = 17,
				i = b.dpDiv.find("." + this._dayOverClass + " a");
			i.length > 0 && e.apply(i.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), f > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", h * f + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
				c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(a) {
			return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
		},
		_checkOffset: function(b, c, d) {
			var e = b.dpDiv.outerWidth(),
				f = b.dpDiv.outerHeight(),
				g = b.input ? b.input.outerWidth() : 0,
				h = b.input ? b.input.outerHeight() : 0,
				i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
				j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
			return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
		},
		_findPos: function(b) {
			for(var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
			return c = a(b).offset(), [c.left, c.top]
		},
		_hideDatepicker: function(b) {
			var c, d, e, f, g = this._curInst;
			!g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
				a.datepicker._tidyDialog(g)
			}, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(a) {
			a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(b) {
			if(a.datepicker._curInst) {
				var c = a(b.target),
					d = a.datepicker._getInst(c[0]);
				(c[0].id === a.datepicker._mainDivId || 0 !== c.parents("#" + a.datepicker._mainDivId).length || c.hasClass(a.datepicker.markerClassName) || c.closest("." + a.datepicker._triggerClass).length || !a.datepicker._datepickerShowing || a.datepicker._inDialog && a.blockUI) && (!c.hasClass(a.datepicker.markerClassName) || a.datepicker._curInst === d) || a.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(b, c, d) {
			var e = a(b),
				f = this._getInst(e[0]);
			this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
		},
		_gotoToday: function(b) {
			var c, d = a(b),
				e = this._getInst(d[0]);
			this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
		},
		_selectMonthYear: function(b, c, d) {
			var e = a(b),
				f = this._getInst(e[0]);
			f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
		},
		_selectDay: function(b, c, d, e) {
			var f, g = a(b);
			a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
		},
		_clearDate: function(b) {
			var c = a(b);
			this._selectDate(c, "")
		},
		_selectDate: function(b, c) {
			var d, e = a(b),
				f = this._getInst(e[0]);
			c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(b) {
			var c, d, e, f = this._get(b, "altField");
			f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
				a(this).val(e)
			}))
		},
		noWeekends: function(a) {
			var b = a.getDay();
			return [b > 0 && b < 6, ""]
		},
		iso8601Week: function(a) {
			var b, c = new Date(a.getTime());
			return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
		},
		parseDate: function(b, c, d) {
			if(null == b || null == c) throw "Invalid arguments";
			if(c = "object" == typeof c ? c.toString() : c + "", "" === c) return null;
			var e, f, g, h, i = 0,
				j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
				l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
				m = (d ? d.dayNames : null) || this._defaults.dayNames,
				n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (d ? d.monthNames : null) || this._defaults.monthNames,
				p = -1,
				q = -1,
				r = -1,
				s = -1,
				t = !1,
				u = function(a) {
					var c = e + 1 < b.length && b.charAt(e + 1) === a;
					return c && e++, c
				},
				v = function(a) {
					var b = u(a),
						d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
						e = "y" === a ? d : 1,
						f = new RegExp("^\\d{" + e + "," + d + "}"),
						g = c.substring(i).match(f);
					if(!g) throw "Missing number at position " + i;
					return i += g[0].length, parseInt(g[0], 10)
				},
				w = function(b, d, e) {
					var f = -1,
						g = a.map(u(b) ? e : d, function(a, b) {
							return [
								[b, a]
							]
						}).sort(function(a, b) {
							return -(a[1].length - b[1].length)
						});
					if(a.each(g, function(a, b) {
							var d = b[1];
							if(c.substr(i, d.length).toLowerCase() === d.toLowerCase()) return f = b[0], i += d.length, !1
						}), f !== -1) return f + 1;
					throw "Unknown name at position " + i
				},
				x = function() {
					if(c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
					i++
				};
			for(e = 0; e < b.length; e++)
				if(t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
				else switch(b.charAt(e)) {
					case "d":
						r = v("d");
						break;
					case "D":
						w("D", l, m);
						break;
					case "o":
						s = v("o");
						break;
					case "m":
						q = v("m");
						break;
					case "M":
						q = w("M", n, o);
						break;
					case "y":
						p = v("y");
						break;
					case "@":
						h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
						break;
					case "!":
						h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
						break;
					case "'":
						u("'") ? x() : t = !0;
						break;
					default:
						x()
				}
			if(i < c.length && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
			if(p === -1 ? p = (new Date).getFullYear() : p < 100 && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= k ? 0 : -100)), s > -1)
				for(q = 1, r = s;;) {
					if(f = this._getDaysInMonth(p, q - 1), r <= f) break;
					q++, r -= f
				}
			if(h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
			return h
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
		formatDate: function(a, b, c) {
			if(!b) return "";
			var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
				f = (c ? c.dayNames : null) || this._defaults.dayNames,
				g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
				h = (c ? c.monthNames : null) || this._defaults.monthNames,
				i = function(b) {
					var c = d + 1 < a.length && a.charAt(d + 1) === b;
					return c && d++, c
				},
				j = function(a, b, c) {
					var d = "" + b;
					if(i(a))
						for(; d.length < c;) d = "0" + d;
					return d
				},
				k = function(a, b, c, d) {
					return i(a) ? d[b] : c[b]
				},
				l = "",
				m = !1;
			if(b)
				for(d = 0; d < a.length; d++)
					if(m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
					else switch(a.charAt(d)) {
						case "d":
							l += j("d", b.getDate(), 2);
							break;
						case "D":
							l += k("D", b.getDay(), e, f);
							break;
						case "o":
							l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							l += j("m", b.getMonth() + 1, 2);
							break;
						case "M":
							l += k("M", b.getMonth(), g, h);
							break;
						case "y":
							l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
							break;
						case "@":
							l += b.getTime();
							break;
						case "!":
							l += 1e4 * b.getTime() + this._ticksTo1970;
							break;
						case "'":
							i("'") ? l += "'" : m = !0;
							break;
						default:
							l += a.charAt(d)
					}
			return l
		},
		_possibleChars: function(a) {
			var b, c = "",
				d = !1,
				e = function(c) {
					var d = b + 1 < a.length && a.charAt(b + 1) === c;
					return d && b++, d
				};
			for(b = 0; b < a.length; b++)
				if(d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
				else switch(a.charAt(b)) {
					case "d":
					case "m":
					case "y":
					case "@":
						c += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						e("'") ? c += "'" : d = !0;
						break;
					default:
						c += a.charAt(b)
				}
			return c
		},
		_get: function(a, b) {
			return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
		},
		_setDateFromField: function(a, b) {
			if(a.input.val() !== a.lastVal) {
				var c = this._get(a, "dateFormat"),
					d = a.lastVal = a.input ? a.input.val() : null,
					e = this._getDefaultDate(a),
					f = e,
					g = this._getFormatConfig(a);
				try {
					f = this.parseDate(c, d, g) || e
				} catch(h) {
					d = b ? "" : d
				}
				a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
			}
		},
		_getDefaultDate: function(a) {
			return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
		},
		_determineDate: function(b, c, d) {
			var e = function(a) {
					var b = new Date;
					return b.setDate(b.getDate() + a), b
				},
				f = function(c) {
					try {
						return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
					} catch(d) {}
					for(var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
						switch(j[2] || "d") {
							case "d":
							case "D":
								h += parseInt(j[1], 10);
								break;
							case "w":
							case "W":
								h += 7 * parseInt(j[1], 10);
								break;
							case "m":
							case "M":
								g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
								break;
							case "y":
							case "Y":
								f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
						}
						j = i.exec(c)
					}
					return new Date(f, g, h)
				},
				g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
			return g = g && "Invalid Date" === g.toString() ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
		},
		_daylightSavingAdjust: function(a) {
			return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
		},
		_setDate: function(a, b, c) {
			var d = !b,
				e = a.selectedMonth,
				f = a.selectedYear,
				g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
			a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
		},
		_getDate: function(a) {
			var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
			return b
		},
		_attachHandlers: function(b) {
			var c = this._get(b, "stepMonths"),
				d = "#" + b.id.replace(/\\\\/g, "\\");
			b.dpDiv.find("[data-handler]").map(function() {
				var b = {
					prev: function() {
						a.datepicker._adjustDate(d, -c, "M")
					},
					next: function() {
						a.datepicker._adjustDate(d, +c, "M")
					},
					hide: function() {
						a.datepicker._hideDatepicker()
					},
					today: function() {
						a.datepicker._gotoToday(d)
					},
					selectDay: function() {
						return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return a.datepicker._selectMonthYear(d, this, "M"), !1
					},
					selectYear: function() {
						return a.datepicker._selectMonthYear(d, this, "Y"), !1
					}
				};
				a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(a) {
			var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
				P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
				Q = this._get(a, "isRTL"),
				R = this._get(a, "showButtonPanel"),
				S = this._get(a, "hideIfNoPrevNext"),
				T = this._get(a, "navigationAsDateFormat"),
				U = this._getNumberOfMonths(a),
				V = this._get(a, "showCurrentAtPos"),
				W = this._get(a, "stepMonths"),
				X = 1 !== U[0] || 1 !== U[1],
				Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
				Z = this._getMinMaxDate(a, "min"),
				$ = this._getMinMaxDate(a, "max"),
				_ = a.drawMonth - V,
				aa = a.drawYear;
			if(_ < 0 && (_ += 12, aa--), $)
				for(b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && b < Z ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, _ < 0 && (_ = 11, aa--);
			for(a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
				for(x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
					if(z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
						if(B += "<div class='ui-datepicker-group", U[1] > 1) switch(y) {
							case 0:
								B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
								break;
							case U[1] - 1:
								B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
								break;
							default:
								B += " ui-datepicker-group-middle", A = ""
						}
						B += "'>"
					}
					for(B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; v < 7; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
					for(B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; J < H; J++) {
						for(B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; v < 7; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && I < Z || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
						B += K + "</tr>"
					}
					_++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
				}
				u += x
			}
			return u += j, a._keyEvent = !1, u
		},
		_generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
			var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
				r = this._get(a, "changeYear"),
				s = this._get(a, "showMonthAfterYear"),
				t = "<div class='ui-datepicker-title'>",
				u = "";
			if(f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
			else {
				for(i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; k < 12; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
				u += "</select>"
			}
			if(s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
				if(a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
				else {
					for(l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
							var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
							return isNaN(b) ? m : b
						}, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; o <= p; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
					a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
				}
			return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
		},
		_adjustInstDate: function(a, b, c) {
			var d = a.drawYear + ("Y" === c ? b : 0),
				e = a.drawMonth + ("M" === c ? b : 0),
				f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
				g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
			a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), "M" !== c && "Y" !== c || this._notifyChange(a)
		},
		_restrictMinMax: function(a, b) {
			var c = this._getMinMaxDate(a, "min"),
				d = this._getMinMaxDate(a, "max"),
				e = c && b < c ? c : b;
			return d && e > d ? d : e
		},
		_notifyChange: function(a) {
			var b = this._get(a, "onChangeMonthYear");
			b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
		},
		_getNumberOfMonths: function(a) {
			var b = this._get(a, "numberOfMonths");
			return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
		},
		_getMinMaxDate: function(a, b) {
			return this._determineDate(a, this._get(a, b + "Date"), null)
		},
		_getDaysInMonth: function(a, b) {
			return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
		},
		_getFirstDayOfMonth: function(a, b) {
			return new Date(a, b, 1).getDay()
		},
		_canAdjustMonth: function(a, b, c, d) {
			var e = this._getNumberOfMonths(a),
				f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
			return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
		},
		_isInRange: function(a, b) {
			var c, d, e = this._getMinMaxDate(a, "min"),
				f = this._getMinMaxDate(a, "max"),
				g = null,
				h = null,
				i = this._get(a, "yearRange");
			return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
		},
		_getFormatConfig: function(a) {
			var b = this._get(a, "shortYearCutoff");
			return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
				shortYearCutoff: b,
				dayNamesShort: this._get(a, "dayNamesShort"),
				dayNames: this._get(a, "dayNames"),
				monthNamesShort: this._get(a, "monthNamesShort"),
				monthNames: this._get(a, "monthNames")
			}
		},
		_formatDate: function(a, b, c, d) {
			b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
			var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
			return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
		}
	}), a.fn.datepicker = function(b) {
		if(!this.length) return this;
		a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
		var c = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
			"string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
		}) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
	}, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.4", a.datepicker
});;
(function($, window, document, undefined) {
	var cookieBarNotification = $('[rel="js-cookie-bar-notification"]'),
		acceptButton = $('[rel="js-button-accept"]'),
		optOutButton = $('[rel="js-button-optout"]');

	function createCookie(key, value, expiresDays) {
		var currentDate = new Date();
		currentDate.setTime(currentDate.getTime() + (expiresDays * 24 * 60 * 60 * 1000));
		var expires = 'expires=' + currentDate.toUTCString(),
			cookie = escape(key) + '=' + escape(value) + '; Path=/;' + expires;
		document.cookie = cookie;
	}

	function readCookie(name) {
		var key = name + '=',
			cookies = document.cookie.split(';');
		for(var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while(cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1, cookie.length);
			}
			if(cookie.indexOf(key) === 0) {
				return cookie.substring(key.length, cookie.length);
			}
		}
		return null;
	}
	switch(readCookie('cookie_consent_status')) {
		case 'true':
			break;
		case null:
			cookieBarNotification.fadeIn(1200);
			acceptButton.on('click', function() {
				cookieBarNotification.fadeOut(1000);
				createCookie('cookie_consent_status', true, 30);
			});
			if(optOutButton.length > 0) {
				optOutButton.on('click', function() {
					cookieBarNotification.fadeOut(1000);
					createCookie('cookie_consent_status', true, 30);
				});
			}
			break;
		default:
			cookieBarNotification.fadeIn();
	}
})(jQuery, window, document);
/*!
 * Bootstrap v3.0.2 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */
if("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for(var c in b)
			if(void 0 !== a.style[c]) return {
				end: b[c]
			}
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b()
	})
}(jQuery), + function(a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function(b) {
		function c() {
			f.trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
	};
	var d = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
	};
	b.DEFAULTS = {
		loadingText: "loading..."
	}, b.prototype.setState = function(a) {
		var b = "disabled",
			c = this.$element,
			d = c.is("input") ? "val" : "html",
			e = c.data();
		a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
			"loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
		}, 0)
	}, b.prototype.toggle = function() {
		var a = this.$element.closest('[data-toggle="buttons"]');
		if(a.length) {
			var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
			"radio" === b.prop("type") && a.find(".active").removeClass("active")
		}
		this.$element.toggleClass("active")
	};
	var c = a.fn.button;
	a.fn.button = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof c && c;
			e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
		return a.fn.button = c, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
	})
}(jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
	};
	b.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0
	}, b.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, b.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, b.prototype.to = function(b) {
		var c = this,
			d = this.getActiveIndex();
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, b.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, b.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, b.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, b.prototype.slide = function(b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		if(!e.length) {
			if(!this.options.wrap) return;
			e = this.$element.find(".item")[h]()
		}
		this.sliding = !0, f && this.pause();
		var j = a.Event("slide.bs.carousel", {
			relatedTarget: e[0],
			direction: g
		});
		if(!e.hasClass("active")) {
			if(this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
					var b = a(i.$indicators.children()[i.getActiveIndex()]);
					b && b.addClass("active")
				})), a.support.transition && this.$element.hasClass("slide")) {
				if(this.$element.trigger(j), j.isDefaultPrevented()) return;
				e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
					e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
						i.$element.trigger("slid")
					}, 0)
				}).emulateTransitionEnd(600)
			} else {
				if(this.$element.trigger(j), j.isDefaultPrevented()) return;
				d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
			}
			return f && this.cycle(), this
		}
	};
	var c = a.fn.carousel;
	a.fn.carousel = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
				g = "string" == typeof c ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = c, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
		var c, d = a(this),
			e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), d.data()),
			g = d.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
	}), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var b = a(this);
			b.carousel(b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function() {
		if(!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if(this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if(c && c.length) {
					var d = c.data("bs.collapse");
					if(d && d.transitioning) return;
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() {
					this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if(!a.support.transition) return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}, b.prototype.hide = function() {
		if(!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if(this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
			}
		}
	}, b.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
	})
}(jQuery), + function(a) {
	"use strict";

	function b() {
		a(d).remove(), a(e).each(function(b) {
			var d = c(a(this));
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
		})
	}

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	var d = ".dropdown-backdrop",
		e = "[data-toggle=dropdown]",
		f = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	f.prototype.toggle = function(d) {
		var e = a(this);
		if(!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if(b(), !g) {
				if("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
				f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus()
			}
			return !1
		}
	}, f.prototype.keydown = function(b) {
		if(/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if(b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var f = c(d),
					g = f.hasClass("open");
				if(!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
				var h = a("[role=menu] li:not(.divider):visible a", f);
				if(h.length) {
					var i = h.index(h.filter(":focus"));
					38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
				}
			}
		}
	};
	var g = a.fn.dropdown;
	a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("dropdown");
			d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
		})
	}, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = g, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function(a) {
		return this[this.isShown ? "hide" : "show"](a)
	}, b.prototype.show = function(b) {
		var c = this,
			d = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
				c.$element.focus().trigger(e)
			}).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
		}))
	}, b.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, b.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
		}, this))
	}, b.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function(b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if(this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if(this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) {
					a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
	};
	var c = a.fn.modal;
	a.fn.modal = function(c, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
			f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		b.preventDefault(), e.modal(f, this).one("hide", function() {
			c.is(":visible") && c.focus()
		})
	}), a(document).on("show.bs.modal", ".modal", function() {
		a(document.body).addClass("modal-open")
	}).on("hidden.bs.modal", ".modal", function() {
		a(document.body).removeClass("modal-open")
	})
}(jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	b.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, b.prototype.init = function(b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		for(var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focus",
					i = "hover" == g ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, b.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, b.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show), void 0) : c.show()
	}, b.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide), void 0) : c.hide()
	}, b.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if(this.hasContent() && this.enabled) {
			if(this.$element.trigger(b), b.isDefaultPrevented()) return;
			var c = this.tip();
			this.setContent(), this.options.animation && c.addClass("fade");
			var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
				e = /\s?auto?\s?/i,
				f = e.test(d);
			f && (d = d.replace(e, "") || "top"), c.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
			var g = this.getPosition(),
				h = c[0].offsetWidth,
				i = c[0].offsetHeight;
			if(f) {
				var j = this.$element.parent(),
					k = d,
					l = document.documentElement.scrollTop || document.body.scrollTop,
					m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
					n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
					o = "body" == this.options.container ? 0 : j.offset().left;
				d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
			}
			var p = this.getCalculatedOffset(d, g, h, i);
			this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
		}
	}, b.prototype.applyPlacement = function(a, b) {
		var c, d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		if("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
			var k = 0;
			a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left")
		} else this.replaceArrow(j - f, j, "top");
		c && d.offset(a)
	}, b.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, b.prototype.hide = function() {
		function b() {
			"in" != c.hoverState && d.detach()
		}
		var c = this,
			d = this.tip(),
			e = a.Event("hide.bs." + this.type);
		return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this)
	}, b.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, b.prototype.hasContent = function() {
		return this.getTitle()
	}, b.prototype.getPosition = function() {
		var b = this.$element[0];
		return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
			width: b.offsetWidth,
			height: b.offsetHeight
		}, this.$element.offset())
	}, b.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, b.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, b.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, b.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, b.prototype.enable = function() {
		this.enabled = !0
	}, b.prototype.disable = function() {
		this.enabled = !1
	}, b.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, b.prototype.toggle = function(b) {
		var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, b.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var c = a.fn.tooltip;
	a.fn.tooltip = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof c && c;
			e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = c, this
	}
}(jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.init("popover", a, b)
	};
	if(!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, b.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, b.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	}, b.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	};
	var c = a.fn.popover;
	a.fn.popover = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof c && c;
			e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
		return a.fn.popover = c, this
	}
}(jQuery), + function(a) {
	"use strict";

	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
	}
	b.DEFAULTS = {
		offset: 10
	}, b.prototype.refresh = function() {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#\w/.test(e) && a(e);
			return f && f.length && [
				[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			c.offsets.push(this[0]), c.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			d = c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if(b >= d) return g != (a = f.last()[0]) && this.activate(a);
		for(a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
	};
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = c, this
	}, a(window).on("load", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	var b = function(b) {
		this.element = a(b)
	};
	b.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if(d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", {
					relatedTarget: e
				});
			if(b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
					b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e
					})
				})
			}
		}
	}, b.prototype.activate = function(b, c, d) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
	};
	var c = a.fn.tab;
	a.fn.tab = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
		return a.fn.tab = c, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
		b.preventDefault(), a(this).tab("show")
	})
}(jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
	};
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
		offset: 0
	}, b.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, b.prototype.checkPosition = function() {
		if(this.$element.is(":visible")) {
			var c = a(document).height(),
				d = this.$window.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom;
			"object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
			this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
				top: document.body.offsetHeight - h - this.$element.height()
			}))
		}
	};
	var c = a.fn.affix;
	a.fn.affix = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof c && c;
			e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
		return a.fn.affix = c, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
		})
	})
}(jQuery);
/*! jQuery UI - v1.10.2 - 2013-03-31
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.accordion.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
(function(e, t) {
	function i(t, i) {
		var a, n, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
	}

	function s(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var a = 0,
		n = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function(t) {
			return function(i, s) {
				return "number" == typeof i ? this.each(function() {
					var t = this;
					setTimeout(function() {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function() {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function(i) {
			if(i !== t) return this.css("zIndex", i);
			if(this.length)
				for(var s, a, n = e(this[0]); n.length && n[0] !== document;) {
					if(s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
					n = n.parent()
				}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++a)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				n.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(i) {
				return !!e.data(i, t)
			}
		}) : function(t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function(t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function(t) {
			var s = e.attr(t, "tabindex"),
				a = isNaN(s);
			return(a || s >= 0) && i(t, !a)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
		function a(t, i, s, a) {
			return e.each(n, function() {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
			r = s.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + s] = function(i) {
			return i === t ? o["inner" + s].call(this) : this.each(function() {
				e(this).css(r, a(this, i) + "px")
			})
		}, e.fn["outer" + s] = function(t, i) {
			return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
				e(this).css(r, a(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function() {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
				e.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function(t, i, s) {
				var a, n = e.ui[t].prototype;
				for(a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
			},
			call: function(e, t, i) {
				var s, a = e.plugins[t];
				if(a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
					for(s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
			}
		},
		hasScroll: function(t, i) {
			if("hidden" === e(t).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				a = !1;
			return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
		}
	})
})(jQuery);
(function(e, t) {
	var i = 0,
		s = Array.prototype.slice,
		n = e.cleanData;
	e.cleanData = function(t) {
		for(var i, s = 0; null != (i = t[s]); s++) try {
			e(i).triggerHandler("remove")
		} catch(a) {}
		n(t)
	}, e.widget = function(i, s, n) {
		var a, r, o, h, l = {},
			u = i.split(".")[0];
		i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
			return !!e.data(t, a)
		}, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
			return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
		}, e.extend(o, r, {
			version: n.version,
			_proto: e.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
			return e.isFunction(n) ? (l[i] = function() {
				var e = function() {
						return s.prototype[i].apply(this, arguments)
					},
					t = function(e) {
						return s.prototype[i].apply(this, e)
					};
				return function() {
					var i, s = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
				}
			}(), t) : (l[i] = n, t)
		}), o.prototype = e.widget.extend(h, {
			widgetEventPrefix: r ? h.widgetEventPrefix : i
		}, l, {
			constructor: o,
			namespace: u,
			widgetName: i,
			widgetFullName: a
		}), r ? (e.each(r._childConstructors, function(t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
	}, e.widget.extend = function(i) {
		for(var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
			for(n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
		return i
	}, e.widget.bridge = function(i, n) {
		var a = n.prototype.widgetFullName || i;
		e.fn[i] = function(r) {
			var o = "string" == typeof r,
				h = s.call(arguments, 1),
				l = this;
			return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
				var s, n = e.data(this, a);
				return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
			}) : this.each(function() {
				var t = e.data(this, a);
				t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
			}), l
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, s) {
			s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(e) {
					e.target === s && this.destroy()
				}
			}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(i, s) {
			var n, a, r, o = i;
			if(0 === arguments.length) return e.widget.extend({}, this.options);
			if("string" == typeof i)
				if(o = {}, n = i.split("."), i = n.shift(), n.length) {
					for(a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
					if(i = n.pop(), s === t) return a[i] === t ? null : a[i];
					a[i] = s
				} else {
					if(s === t) return this.options[i] === t ? null : this.options[i];
					o[i] = s
				}
			return this._setOptions(o), this
		},
		_setOptions: function(e) {
			var t;
			for(t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(i, s, n) {
			var a, r = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
				function h() {
					return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
				}
				"string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					u = l[1] + r.eventNamespace,
					c = l[2];
				c ? a.delegate(c, u, h) : s.bind(u, h)
			})
		},
		_off: function(e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function(e, t) {
			function i() {
				return("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, s) {
			var n, a, r = this.options[t];
			if(s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for(n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		e.Widget.prototype["_" + t] = function(s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function(t) {
	var e = 0,
		i = {},
		s = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
		version: "1.10.2",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function() {
			var e = this.options;
			this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t(),
				content: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function() {
			var e = this.options.icons;
			e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var t;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function(t, e) {
			return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
		},
		_keydown: function(e) {
			if(!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
					s = this.headers.length,
					n = this.headers.index(e.target),
					a = !1;
				switch(e.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						a = this.headers[(n + 1) % s];
						break;
					case i.LEFT:
					case i.UP:
						a = this.headers[(n - 1 + s) % s];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						a = this.headers[0];
						break;
					case i.END:
						a = this.headers[s - 1]
				}
				a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
			}
		},
		_panelKeyDown: function(e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
		},
		refresh: function() {
			var e = this.options;
			this._processPanels(), (e.active === !1 && e.collapsible === !0 || !this.headers.length) && (e.active = !1, this.active = t()), e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function() {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function() {
			var i, s = this.options,
				n = s.heightStyle,
				a = this.element.parent(),
				o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
			this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
				var i = t(this),
					s = i.attr("id"),
					n = i.next(),
					a = n.attr("id");
				s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.headers.each(function() {
				i -= t(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
				i = Math.max(i, t(this).css("height", "").height())
			}).height(i))
		},
		_activate: function(e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function(e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function(e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n[0] === s[0],
				o = a && i.collapsible,
				r = o ? t() : n.next(),
				h = s.next(),
				l = {
					oldHeader: s,
					oldPanel: h,
					newHeader: o ? t() : n,
					newPanel: r
				};
			e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function(e) {
			var i = e.newPanel,
				s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function(t, e, n) {
			var a, o, r, h = this,
				l = 0,
				c = t.length && (!e.length || t.index() < e.index()),
				u = this.options.animate || {},
				d = c && u.down || u,
				p = function() {
					h._toggleComplete(n)
				};
			return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
				duration: r,
				easing: o,
				step: function(t, e) {
					e.now = Math.round(t)
				}
			}), t.hide().animate(s, {
				duration: r,
				easing: o,
				complete: p,
				step: function(t, i) {
					i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
				}
			}), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
		},
		_toggleComplete: function(t) {
			var e = t.oldPanel;
			e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	})
})(jQuery);
! function(e) {
	e.flexslider = function(t, a) {
		var n = e(t);
		n.vars = e.extend({}, e.flexslider.defaults, a);
		var i, s = n.vars.namespace,
			r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			o = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
			l = "click touchend MSPointerUp keyup",
			c = "",
			d = "vertical" === n.vars.direction,
			u = n.vars.reverse,
			v = n.vars.itemWidth > 0,
			p = "fade" === n.vars.animation,
			m = "" !== n.vars.asNavFor,
			f = {},
			g = !0;
		e.data(t, "flexslider", n), f = {
			init: function() {
				n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = e(n.vars.selector, n), n.container = e(n.containerSelector, n), n.count = n.slides.length, n.syncExists = e(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
					var e = document.createElement("div"),
						t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
					for(var a in t)
						if(void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
					return !1
				}(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = e(n.vars.controlsContainer).length > 0 && e(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = e(n.vars.manualControls).length > 0 && e(n.vars.manualControls)), n.vars.randomize && (n.slides.sort(function() {
					return Math.round(Math.random()) - .5
				}), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === e(n.containerSelector).length || n.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
					var t = e.keyCode;
					if(!n.animating && (39 === t || 37 === t)) {
						var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
						n.flexAnimate(a, n.vars.pauseOnAction)
					}
				}), n.vars.mousewheel && n.bind("mousewheel", function(e, t) {
					e.preventDefault();
					var a = n.getTarget(0 > t ? "next" : "prev");
					n.flexAnimate(a, n.vars.pauseOnAction)
				}), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
					n.manualPlay || n.manualPause || n.pause()
				}, function() {
					n.manualPause || n.manualPlay || n.stopped || n.play()
				}), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), o && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && e(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
					n.vars.start(n)
				}, 200)
			},
			asNav: {
				setup: function() {
					n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(s + "active-slide").eq(n.currentItem).addClass(s + "active-slide"), r ? (t._slider = n, n.slides.each(function() {
						var t = this;
						t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
							e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
						}, !1), t.addEventListener("MSGestureTap", function(t) {
							t.preventDefault();
							var a = e(this),
								i = a.index();
							e(n.vars.asNavFor).data("flexslider").animating || a.hasClass("active") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
						})
					})) : n.slides.on(l, function(t) {
						t.preventDefault();
						var a = e(this),
							i = a.index(),
							r = a.offset().left - e(n).scrollLeft();
						0 >= r && a.hasClass(s + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : e(n.vars.asNavFor).data("flexslider").animating || a.hasClass(s + "active-slide") || (n.direction = n.currentItem < i ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function() {
					n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
				},
				setupPaging: function() {
					var t, a, i = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
						r = 1;
					if(n.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), n.pagingCount > 1)
						for(var o = 0; o < n.pagingCount; o++) {
							if(a = n.slides.eq(o), t = "thumbnails" === n.vars.controlNav ? '<img src="' + a.attr("data-thumb") + '"/>' : "<a>" + r + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
								var d = a.attr("data-thumbcaption");
								"" != d && void 0 != d && (t += '<span class="' + s + 'caption">' + d + "</span>")
							}
							n.controlNavScaffold.append("<li>" + t + "</li>"), r++
						}
					n.controlsContainer ? e(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", l, function(t) {
						if(t.preventDefault(), "" === c || c === t.type) {
							var a = e(this),
								i = n.controlNav.index(a);
							a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
						}
						"" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				setupManual: function() {
					n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(l, function(t) {
						if(t.preventDefault(), "" === c || c === t.type) {
							var a = e(this),
								i = n.controlNav.index(a);
							a.hasClass(s + "active") || (n.direction = i > n.currentSlide ? "next" : "prev", n.flexAnimate(i, n.vars.pauseOnAction))
						}
						"" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				set: function() {
					var t = "thumbnails" === n.vars.controlNav ? "img" : "a";
					n.controlNav = e("." + s + "control-nav li " + t, n.controlsContainer ? n.controlsContainer : n)
				},
				active: function() {
					n.controlNav.removeClass(s + "active").eq(n.animatingTo).addClass(s + "active")
				},
				update: function(t, a) {
					n.pagingCount > 1 && "add" === t ? n.controlNavScaffold.append(e("<li><a>" + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(a).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(a, t) : f.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var t = e('<ul class="' + s + 'direction-nav"><li><a class="' + s + 'prev" href="#">' + n.vars.prevText + '</a></li><li><a class="' + s + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
					n.controlsContainer ? (e(n.controlsContainer).append(t), n.directionNav = e("." + s + "direction-nav li a", n.controlsContainer)) : (n.append(t), n.directionNav = e("." + s + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(l, function(t) {
						t.preventDefault();
						var a;
						("" === c || c === t.type) && (a = n.getTarget(e(this).hasClass(s + "next") ? "next" : "prev"), n.flexAnimate(a, n.vars.pauseOnAction)), "" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				update: function() {
					var e = s + "disabled";
					1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
				}
			},
			pausePlay: {
				setup: function() {
					var t = e('<div class="' + s + 'pauseplay"><a></a></div>');
					n.controlsContainer ? (n.controlsContainer.append(t), n.pausePlay = e("." + s + "pauseplay a", n.controlsContainer)) : (n.append(t), n.pausePlay = e("." + s + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? s + "pause" : s + "play"), n.pausePlay.bind(l, function(t) {
						t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(s + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === c && (c = t.type), f.setToClearWatchedEvent()
					})
				},
				update: function(e) {
					"play" === e ? n.pausePlay.removeClass(s + "pause").addClass(s + "play").html(n.vars.playText) : n.pausePlay.removeClass(s + "play").addClass(s + "pause").html(n.vars.pauseText)
				}
			},
			touch: function() {
				function e(e) {
					n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), g = d ? n.h : n.w, S = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g, c = d ? b : x, m = d ? x : b, t.addEventListener("touchmove", a, !1), t.addEventListener("touchend", i, !1))
				}

				function a(e) {
					x = e.touches[0].pageX, b = e.touches[0].pageY, h = d ? c - b : c - x, y = d ? Math.abs(h) < Math.abs(x - m) : Math.abs(h) < Math.abs(b - m);
					var t = 500;
					(!y || Number(new Date) - S > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (h /= 0 === n.currentSlide && 0 > h || n.currentSlide === n.last && h > 0 ? Math.abs(h) / g + 2 : 1), n.setProps(f + h, "setTouch")))
				}

				function i() {
					if(t.removeEventListener("touchmove", a, !1), n.animatingTo === n.currentSlide && !y && null !== h) {
						var e = u ? -h : h,
							s = n.getTarget(e > 0 ? "next" : "prev");
						n.canAdvance(s) && (Number(new Date) - S < 550 && Math.abs(e) > 50 || Math.abs(e) > g / 2) ? n.flexAnimate(s, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
					}
					t.removeEventListener("touchend", i, !1), c = null, m = null, h = null, f = null
				}

				function s(e) {
					e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, g = d ? n.h : n.w, S = Number(new Date), f = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * g : (n.currentSlide + n.cloneOffset) * g)
				}

				function o(e) {
					e.stopPropagation();
					var a = e.target._slider;
					if(a) {
						var n = -e.translationX,
							i = -e.translationY;
						return w += d ? i : n, h = w, y = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
							t._gesture.stop()
						}) : void((!y || Number(new Date) - S > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (h = w / (0 === a.currentSlide && 0 > w || a.currentSlide === a.last && w > 0 ? Math.abs(w) / g + 2 : 1)), a.setProps(f + h, "setTouch"))))
					}
				}

				function l(e) {
					e.stopPropagation();
					var t = e.target._slider;
					if(t) {
						if(t.animatingTo === t.currentSlide && !y && null !== h) {
							var a = u ? -h : h,
								n = t.getTarget(a > 0 ? "next" : "prev");
							t.canAdvance(n) && (Number(new Date) - S < 550 && Math.abs(a) > 50 || Math.abs(a) > g / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
						}
						c = null, m = null, h = null, f = null, w = 0
					}
				}
				var c, m, f, g, h, S, y = !1,
					x = 0,
					b = 0,
					w = 0;
				r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", s, !1), t._slider = n, t.addEventListener("MSGestureChange", o, !1), t.addEventListener("MSGestureEnd", l, !1)) : t.addEventListener("touchstart", e, !1)
			},
			resize: function() {
				!n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
			},
			smoothHeight: function(e) {
				if(!d || p) {
					var t = p ? n : n.viewport;
					e ? t.animate({
						height: n.slides.eq(n.animatingTo).height()
					}, e) : t.height(n.slides.eq(n.animatingTo).height())
				}
			},
			sync: function(t) {
				var a = e(n.vars.sync).data("flexslider"),
					i = n.animatingTo;
				switch(t) {
					case "animate":
						a.flexAnimate(i, n.vars.pauseOnAction, !1, !0);
						break;
					case "play":
						a.playing || a.asNav || a.play();
						break;
					case "pause":
						a.pause()
				}
			},
			uniqueID: function(t) {
				return t.filter("[id]").add(t.find("[id]")).each(function() {
					var t = e(this);
					t.attr("id", t.attr("id") + "_clone")
				}), t
			},
			pauseInvisible: {
				visProp: null,
				init: function() {
					var e = f.pauseInvisible.getHiddenProp();
					if(e) {
						var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
						document.addEventListener(t, function() {
							f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
						})
					}
				},
				isHidden: function() {
					var e = f.pauseInvisible.getHiddenProp();
					return e ? document[e] : !1
				},
				getHiddenProp: function() {
					var e = ["webkit", "moz", "ms", "o"];
					if("hidden" in document) return "hidden";
					for(var t = 0; t < e.length; t++)
						if(e[t] + "Hidden" in document) return e[t] + "Hidden";
					return null
				}
			},
			setToClearWatchedEvent: function() {
				clearTimeout(i), i = setTimeout(function() {
					c = ""
				}, 3e3)
			}
		}, n.flexAnimate = function(t, a, i, r, l) {
			if(n.vars.animationLoop || t === n.currentSlide || (n.direction = t > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < t ? "next" : "prev"), !n.animating && (n.canAdvance(t, l) || i) && n.is(":visible")) {
				if(m && r) {
					var c = e(n.vars.asNavFor).data("flexslider");
					if(n.atEnd = 0 === t || t === n.count - 1, c.flexAnimate(t, !0, !1, !0, l), n.direction = n.currentItem < t ? "next" : "prev", c.direction = n.direction, Math.ceil((t + 1) / n.visible) - 1 === n.currentSlide || 0 === t) return n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
					n.currentItem = t, n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / n.visible)
				}
				if(n.animating = !0, n.animatingTo = t, a && n.pause(), n.vars.before(n), n.syncExists && !l && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), n.atEnd = 0 === t || t === n.last, n.vars.directionNav && f.directionNav.update(), t === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) o ? (n.slides.eq(n.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), n.slides.eq(t).css({
					opacity: 1,
					zIndex: 2
				}), n.wrapup(y)) : (n.slides.eq(n.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(t).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, n.vars.animationSpeed, n.vars.easing, n.wrapup));
				else {
					var g, h, S, y = d ? n.slides.filter(":first").height() : n.computedW;
					v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && t === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * y : 0 : n.currentSlide === n.last && 0 === t && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * y : u ? (n.count - 1 - t + n.cloneOffset) * y : (t + n.cloneOffset) * y, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
						clearTimeout(n.ensureAnimationEnd), n.wrapup(y)
					}), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
						n.wrapup(y)
					}, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
						n.wrapup(y)
					})
				}
				n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
			}
		}, n.wrapup = function(e) {
			p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
		}, n.animateSlides = function() {
			!n.animating && g && n.flexAnimate(n.getTarget("next"))
		}, n.pause = function() {
			clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
		}, n.play = function() {
			n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
		}, n.stop = function() {
			n.pause(), n.stopped = !0
		}, n.canAdvance = function(e, t) {
			var a = m ? n.pagingCount - 1 : n.last;
			return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
		}, n.getTarget = function(e) {
			return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
		}, n.setProps = function(e, t, a) {
			var i = function() {
				var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
					i = function() {
						if(v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
						switch(t) {
							case "setTotal":
								return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
							case "setTouch":
								return u ? e : e;
							case "jumpEnd":
								return u ? e : n.count * e;
							case "jumpStart":
								return u ? n.count * e : e;
							default:
								return e
						}
					}();
				return -1 * i + "px"
			}();
			n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
		}, n.setup = function(t) {
			if(p) n.slides.css({
				width: "100%",
				"float": "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === t && (o ? n.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
				zIndex: 1
			}).eq(n.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(n.currentSlide).css({
				zIndex: 2
			}).css({
				opacity: 1
			}) : n.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(n.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
			else {
				var a, i;
				"init" === t && (n.viewport = e('<div class="' + s + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (i = e.makeArray(n.slides).reverse(), n.slides = e(i), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== t && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = e(n.vars.selector, n), a = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
					n.newSlides.css({
						display: "block"
					}), n.doMath(), n.viewport.height(n.h), n.setProps(a * n.h, "init")
				}, "init" === t ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(a * n.computedW, "init"), setTimeout(function() {
					n.doMath(), n.newSlides.css({
						width: n.computedW,
						"float": "left",
						display: "block"
					}), n.vars.smoothHeight && f.smoothHeight()
				}, "init" === t ? 100 : 0))
			}
			v || n.slides.removeClass(s + "active-slide").eq(n.currentSlide).addClass(s + "active-slide"), n.vars.init(n)
		}, n.doMath = function() {
			var e = n.slides.first(),
				t = n.vars.itemMargin,
				a = n.vars.minItems,
				i = n.vars.maxItems;
			n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding
		}, n.update = function(e, t) {
			n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
		}, n.addSlide = function(t, a) {
			var i = e(t);
			n.count += 1, n.last = n.count - 1, d && u ? void 0 !== a ? n.slides.eq(n.count - a).after(i) : n.container.prepend(i) : void 0 !== a ? n.slides.eq(a).before(i) : n.container.append(i), n.update(a, "add"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
		}, n.removeSlide = function(t) {
			var a = isNaN(t) ? n.slides.index(e(t)) : t;
			n.count -= 1, n.last = n.count - 1, isNaN(t) ? e(t, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(t).remove(), n.doMath(), n.update(a, "remove"), n.slides = e(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
		}, f.init()
	}, e(window).blur(function() {
		focused = !1
	}).focus(function() {
		focused = !0
	}), e.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		fadeFirstSlide: !0,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {},
		init: function() {}
	}, e.fn.flexslider = function(t) {
		if(void 0 === t && (t = {}), "object" == typeof t) return this.each(function() {
			var a = e(this),
				n = t.selector ? t.selector : ".slides > li",
				i = a.find(n);
			1 === i.length && t.allowOneSlide === !0 || 0 === i.length ? (i.fadeIn(400), t.start && t.start(a)) : void 0 === a.data("flexslider") && new e.flexslider(this, t)
		});
		var a = e(this).data("flexslider");
		switch(t) {
			case "play":
				a.play();
				break;
			case "pause":
				a.pause();
				break;
			case "stop":
				a.stop();
				break;
			case "next":
				a.flexAnimate(a.getTarget("next"), !0);
				break;
			case "prev":
			case "previous":
				a.flexAnimate(a.getTarget("prev"), !0);
				break;
			default:
				"number" == typeof t && a.flexAnimate(t, !0)
		}
	}
}(jQuery);
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad',
	swing: function(x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function(x, t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	easeOutQuad: function(x, t, b, c, d) {
		return -c * (t /= d) * (t - 2) + b;
	},
	easeInOutQuad: function(x, t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((--t) * (t - 2) - 1) + b;
	},
	easeInCubic: function(x, t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	easeOutCubic: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
	easeInOutCubic: function(x, t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t + 2) + b;
	},
	easeInQuart: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t + b;
	},
	easeOutQuart: function(x, t, b, c, d) {
		return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	},
	easeInOutQuart: function(x, t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
		return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	},
	easeInQuint: function(x, t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	easeOutQuint: function(x, t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	easeInOutQuint: function(x, t, b, c, d) {
		if((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
		return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	},
	easeInSine: function(x, t, b, c, d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	},
	easeOutSine: function(x, t, b, c, d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	},
	easeInOutSine: function(x, t, b, c, d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	},
	easeInExpo: function(x, t, b, c, d) {
		return(t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	},
	easeOutExpo: function(x, t, b, c, d) {
		return(t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	},
	easeInOutExpo: function(x, t, b, c, d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
		return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function(x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	},
	easeOutCirc: function(x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
	easeInOutCirc: function(x, t, b, c, d) {
		if((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	},
	easeInElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if(t == 0) return b;
		if((t /= d) == 1) return b + c;
		if(!p) p = d * .3;
		if(a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	},
	easeOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if(t == 0) return b;
		if((t /= d) == 1) return b + c;
		if(!p) p = d * .3;
		if(a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	},
	easeInOutElastic: function(x, t, b, c, d) {
		var s = 1.70158;
		var p = 0;
		var a = c;
		if(t == 0) return b;
		if((t /= d / 2) == 2) return b + c;
		if(!p) p = d * (.3 * 1.5);
		if(a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else var s = p / (2 * Math.PI) * Math.asin(c / a);
		if(t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	},
	easeInBack: function(x, t, b, c, d, s) {
		if(s == undefined) s = 1.70158;
		return c * (t /= d) * t * ((s + 1) * t - s) + b;
	},
	easeOutBack: function(x, t, b, c, d, s) {
		if(s == undefined) s = 1.70158;
		return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	},
	easeInOutBack: function(x, t, b, c, d, s) {
		if(s == undefined) s = 1.70158;
		if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	},
	easeInBounce: function(x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
	},
	easeOutBounce: function(x, t, b, c, d) {
		if((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if(t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
		} else if(t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
		}
	},
	easeInOutBounce: function(x, t, b, c, d) {
		if(t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	}
});;
"function" !== typeof Object.create && (Object.create = function(f) {
	function g() {}
	g.prototype = f;
	return new g
});
(function(f, g, k) {
	var l = {
		init: function(a, b) {
			this.$elem = f(b);
			this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
			this.userOptions = a;
			this.loadContent()
		},
		loadContent: function() {
			function a(a) {
				var d, e = "";
				if("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
				else {
					for(d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
					b.$elem.html(e)
				}
				b.logIn()
			}
			var b = this,
				e;
			"function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
			"string" === typeof b.options.jsonPath ?
				(e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
		},
		logIn: function() {
			this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
			this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
			this.$elem.css({
				opacity: 0
			});
			this.orignalItems = this.options.items;
			this.checkBrowser();
			this.wrapperWidth = 0;
			this.checkVisible = null;
			this.setVars()
		},
		setVars: function() {
			if(0 === this.$elem.children().length) return !1;
			this.baseClass();
			this.eventTypes();
			this.$userItems = this.$elem.children();
			this.itemsAmount = this.$userItems.length;
			this.wrapItems();
			this.$owlItems = this.$elem.find(".owl-item");
			this.$owlWrapper = this.$elem.find(".owl-wrapper");
			this.playDirection = "next";
			this.prevItem = 0;
			this.prevArr = [0];
			this.currentItem = 0;
			this.customEvents();
			this.onStartup()
		},
		onStartup: function() {
			this.updateItems();
			this.calculateAll();
			this.buildControls();
			this.updateControls();
			this.response();
			this.moveEvents();
			this.stopOnHover();
			this.owlStatus();
			!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
			!0 === this.options.autoPlay &&
				(this.options.autoPlay = 5E3);
			this.play();
			this.$elem.find(".owl-wrapper").css("display", "block");
			this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
			this.onstartup = !1;
			this.eachMoveUpdate();
			"function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
		},
		eachMoveUpdate: function() {
			!0 === this.options.lazyLoad && this.lazyLoad();
			!0 === this.options.autoHeight && this.autoHeight();
			this.onVisibleItems();
			"function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
		},
		updateVars: function() {
			"function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
			this.watchVisibility();
			this.updateItems();
			this.calculateAll();
			this.updatePosition();
			this.updateControls();
			this.eachMoveUpdate();
			"function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
		},
		reload: function() {
			var a = this;
			g.setTimeout(function() {
				a.updateVars()
			}, 0)
		},
		watchVisibility: function() {
			var a = this;
			if(!1 === a.$elem.is(":visible")) a.$elem.css({
					opacity: 0
				}),
				g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
			else return !1;
			a.checkVisible = g.setInterval(function() {
				a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
					opacity: 1
				}, 200), g.clearInterval(a.checkVisible))
			}, 500)
		},
		wrapItems: function() {
			this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
			this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
			this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
			this.$elem.css("display", "block")
		},
		baseClass: function() {
			var a = this.$elem.hasClass(this.options.baseClass),
				b = this.$elem.hasClass(this.options.theme);
			a || this.$elem.addClass(this.options.baseClass);
			b || this.$elem.addClass(this.options.theme)
		},
		updateItems: function() {
			var a, b;
			if(!1 === this.options.responsive) return !1;
			if(!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
			a = f(this.options.responsiveBaseWidth).width();
			a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
			if(!1 !== this.options.itemsCustom)
				for(this.options.itemsCustom.sort(function(a, b) {
						return a[0] - b[0]
					}), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
			else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
				a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
			this.options.items > this.itemsAmount &&
				!0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
		},
		response: function() {
			var a = this,
				b, e;
			if(!0 !== a.options.responsive) return !1;
			e = f(g).width();
			a.resizer = function() {
				f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
					e = f(g).width();
					a.updateVars()
				}, a.options.responsiveRefreshRate))
			};
			f(g).resize(a.resizer)
		},
		updatePosition: function() {
			this.jumpTo(this.currentItem);
			!1 !== this.options.autoPlay && this.checkAp()
		},
		appendItemsSizes: function() {
			var a =
				this,
				b = 0,
				e = a.itemsAmount - a.options.items;
			a.$owlItems.each(function(c) {
				var d = f(this);
				d.css({
					width: a.itemWidth
				}).data("owl-item", Number(c));
				if(0 === c % a.options.items || c === e) c > e || (b += 1);
				d.data("owl-roundPages", b)
			})
		},
		appendWrapperSizes: function() {
			this.$owlWrapper.css({
				width: this.$owlItems.length * this.itemWidth * 2,
				left: 0
			});
			this.appendItemsSizes()
		},
		calculateAll: function() {
			this.calculateWidth();
			this.appendWrapperSizes();
			this.loops();
			this.max()
		},
		calculateWidth: function() {
			this.itemWidth = Math.round(this.$elem.width() /
				this.options.items)
		},
		max: function() {
			var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
			this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
			return a
		},
		min: function() {
			return 0
		},
		loops: function() {
			var a = 0,
				b = 0,
				e, c;
			this.positionsInArray = [0];
			this.pagesInArray = [];
			for(e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
				c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
		},
		buildControls: function() {
			if(!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
			!0 === this.options.pagination && this.buildPagination();
			!0 === this.options.navigation && this.buildButtons()
		},
		buildButtons: function() {
			var a = this,
				b = f('<div class="owl-buttons"/>');
			a.owlControls.append(b);
			a.buttonPrev =
				f("<div/>", {
					"class": "owl-prev",
					html: a.options.navigationText[0] || ""
				});
			a.buttonNext = f("<div/>", {
				"class": "owl-next",
				html: a.options.navigationText[1] || ""
			});
			b.append(a.buttonPrev).append(a.buttonNext);
			b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
				a.preventDefault()
			});
			b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
				b.preventDefault();
				f(this).hasClass("owl-next") ? a.next() : a.prev()
			})
		},
		buildPagination: function() {
			var a = this;
			a.paginationWrapper =
				f('<div class="owl-pagination"/>');
			a.owlControls.append(a.paginationWrapper);
			a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
				b.preventDefault();
				Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
			})
		},
		updatePagination: function() {
			var a, b, e, c, d, g;
			if(!1 === this.options.pagination) return !1;
			this.paginationWrapper.html("");
			a = 0;
			b = this.itemsAmount - this.itemsAmount % this.options.items;
			for(c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
				(a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
					"class": "owl-page"
				}), g = f("<span></span>", {
					text: !0 === this.options.paginationNumbers ? a : "",
					"class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
				}), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
			this.checkPagination()
		},
		checkPagination: function() {
			var a = this;
			if(!1 === a.options.pagination) return !1;
			a.paginationWrapper.find(".owl-page").each(function() {
				f(this).data("owl-roundPages") ===
					f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
			})
		},
		checkNavigation: function() {
			if(!1 === this.options.navigation) return !1;
			!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
				this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
		},
		updateControls: function() {
			this.updatePagination();
			this.checkNavigation();
			this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
		},
		destroyControls: function() {
			this.owlControls && this.owlControls.remove()
		},
		next: function(a) {
			if(this.isTransition) return !1;
			this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
			if(this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0))
				if(!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
				else return this.currentItem = this.maximumItem, !1;
			this.goTo(this.currentItem, a)
		},
		prev: function(a) {
			if(this.isTransition) return !1;
			this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
				this.options.items : 1);
			if(0 > this.currentItem)
				if(!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
				else return this.currentItem = 0, !1;
			this.goTo(this.currentItem, a)
		},
		goTo: function(a, b, e) {
			var c = this;
			if(c.isTransition) return !1;
			"function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
			a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
			c.currentItem = c.owl.currentItem = a;
			if(!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
			a = c.positionsInArray[a];
			!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
				c.isCss3Finish = !0
			}, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
				c.isCss3Finish = !0
			}, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
					c.isCss3Finish = !0
				},
				c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
			c.afterGo()
		},
		jumpTo: function(a) {
			"function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
			a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
			this.swapSpeed(0);
			!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
			this.currentItem =
				this.owl.currentItem = a;
			this.afterGo()
		},
		afterGo: function() {
			this.prevArr.push(this.currentItem);
			this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
			this.prevArr.shift(0);
			this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
			"function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
		},
		stop: function() {
			this.apStatus = "stop";
			g.clearInterval(this.autoPlayInterval)
		},
		checkAp: function() {
			"stop" !== this.apStatus && this.play()
		},
		play: function() {
			var a = this;
			a.apStatus = "play";
			if(!1 === a.options.autoPlay) return !1;
			g.clearInterval(a.autoPlayInterval);
			a.autoPlayInterval = g.setInterval(function() {
				a.next(!0)
			}, a.options.autoPlay)
		},
		swapSpeed: function(a) {
			"slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
		},
		addCssSpeed: function(a) {
			return {
				"-webkit-transition": "all " + a + "ms ease",
				"-moz-transition": "all " + a + "ms ease",
				"-o-transition": "all " + a + "ms ease",
				transition: "all " + a + "ms ease"
			}
		},
		removeTransition: function() {
			return {
				"-webkit-transition": "",
				"-moz-transition": "",
				"-o-transition": "",
				transition: ""
			}
		},
		doTranslate: function(a) {
			return {
				"-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
				"-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
				"-o-transform": "translate3d(" + a + "px, 0px, 0px)",
				"-ms-transform": "translate3d(" +
					a + "px, 0px, 0px)",
				transform: "translate3d(" + a + "px, 0px,0px)"
			}
		},
		transition3d: function(a) {
			this.$owlWrapper.css(this.doTranslate(a))
		},
		css2move: function(a) {
			this.$owlWrapper.css({
				left: a
			})
		},
		css2slide: function(a, b) {
			var e = this;
			e.isCssFinish = !1;
			e.$owlWrapper.stop(!0, !0).animate({
				left: a
			}, {
				duration: b || e.options.slideSpeed,
				complete: function() {
					e.isCssFinish = !0
				}
			})
		},
		checkBrowser: function() {
			var a = k.createElement("div");
			a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
			a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
			this.browser = {
				support3d: null !== a && 1 === a.length,
				isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
			}
		},
		moveEvents: function() {
			if(!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
		},
		eventTypes: function() {
			var a = ["s", "e", "x"];
			this.ev_types = {};
			!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
				!1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
			this.ev_types.start = a[0];
			this.ev_types.move = a[1];
			this.ev_types.end = a[2]
		},
		disabledEvents: function() {
			this.$elem.on("dragstart.owl", function(a) {
				a.preventDefault()
			});
			this.$elem.on("mousedown.disableTextSelect", function(a) {
				return f(a.target).is("input, textarea, select, option")
			})
		},
		gestures: function() {
			function a(a) {
				if(void 0 !== a.touches) return {
					x: a.touches[0].pageX,
					y: a.touches[0].pageY
				};
				if(void 0 === a.touches) {
					if(void 0 !== a.pageX) return {
						x: a.pageX,
						y: a.pageY
					};
					if(void 0 === a.pageX) return {
						x: a.clientX,
						y: a.clientY
					}
				}
			}

			function b(a) {
				"on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
			}

			function e(b) {
				b = b.originalEvent || b || g.event;
				d.newPosX = a(b).x - h.offsetX;
				d.newPosY = a(b).y - h.offsetY;
				d.newRelativeX = d.newPosX - h.relativePos;
				"function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
				(8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
				(10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
				d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
				!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
			}

			function c(a) {
				a = a.originalEvent || a || g.event;
				var c;
				a.target = a.target || a.srcElement;
				h.dragging = !1;
				!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
				d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
				0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
						a.stopImmediatePropagation();
						a.stopPropagation();
						a.preventDefault();
						f(a.target).off("click.disable")
					}),
					a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
				b("off")
			}
			var d = this,
				h = {
					offsetX: 0,
					offsetY: 0,
					baseElWidth: 0,
					relativePos: 0,
					position: null,
					minSwipe: null,
					maxSwipe: null,
					sliding: null,
					dargging: null,
					targetElement: null
				};
			d.isCssFinish = !0;
			d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
				c = c.originalEvent || c || g.event;
				var e;
				if(3 === c.which) return !1;
				if(!(d.itemsAmount <= d.options.items)) {
					if(!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
					!1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
					!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
					d.newPosX = 0;
					d.newRelativeX = 0;
					f(this).css(d.removeTransition());
					e = f(this).position();
					h.relativePos = e.left;
					h.offsetX = a(c).x - e.left;
					h.offsetY = a(c).y - e.top;
					b("on");
					h.sliding = !1;
					h.targetElement = c.target || c.srcElement
				}
			})
		},
		getNewPosition: function() {
			var a = this.closestItem();
			a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
				a = 0);
			return a
		},
		closestItem: function() {
			var a = this,
				b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
				e = a.newPosX,
				c = null;
			f.each(b, function(d, g) {
				e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
					(c = b[d + 1], a.currentItem = d + 1))
			});
			return a.currentItem
		},
		moveDirection: function() {
			var a;
			0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
			return a
		},
		customEvents: function() {
			var a = this;
			a.$elem.on("owl.next", function() {
				a.next()
			});
			a.$elem.on("owl.prev", function() {
				a.prev()
			});
			a.$elem.on("owl.play", function(b, e) {
				a.options.autoPlay = e;
				a.play();
				a.hoverStatus = "play"
			});
			a.$elem.on("owl.stop", function() {
				a.stop();
				a.hoverStatus = "stop"
			});
			a.$elem.on("owl.goTo", function(b, e) {
				a.goTo(e)
			});
			a.$elem.on("owl.jumpTo", function(b, e) {
				a.jumpTo(e)
			})
		},
		stopOnHover: function() {
			var a = this;
			!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
				a.stop()
			}), a.$elem.on("mouseout", function() {
				"stop" !== a.hoverStatus && a.play()
			}))
		},
		lazyLoad: function() {
			var a, b, e, c, d;
			if(!1 === this.options.lazyLoad) return !1;
			for(a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
				b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
		},
		lazyPreload: function(a, b) {
			function e() {
				a.data("owl-loaded", "loaded").removeClass("loading");
				b.removeAttr("data-src");
				"fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
				"function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem])
			}

			function c() {
				f += 1;
				d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
			}
			var d = this,
				f = 0,
				k;
			"DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
			c()
		},
		autoHeight: function() {
			function a() {
				var a = f(e.$owlItems[e.currentItem]).height();
				e.wrapperOuter.css("height", a + "px");
				e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
					e.wrapperOuter.addClass("autoHeight")
				}, 0)
			}

			function b() {
				d += 1;
				e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
					100) : e.wrapperOuter.css("height", "")
			}
			var e = this,
				c = f(e.$owlItems[e.currentItem]).find("img"),
				d;
			void 0 !== c.get(0) ? (d = 0, b()) : a()
		},
		completeImg: function(a) {
			return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
		},
		onVisibleItems: function() {
			var a;
			!0 === this.options.addClassActive && this.$owlItems.removeClass("active");
			this.visibleItems = [];
			for(a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
			this.owl.visibleItems = this.visibleItems
		},
		transitionTypes: function(a) {
			this.outClass = "owl-" + a + "-out";
			this.inClass = "owl-" + a + "-in"
		},
		singleItemTransition: function() {
			var a = this,
				b = a.outClass,
				e = a.inClass,
				c = a.$owlItems.eq(a.currentItem),
				d = a.$owlItems.eq(a.prevItem),
				f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
				g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
			a.isTransition = !0;
			a.$owlWrapper.addClass("owl-origin").css({
				"-webkit-transform-origin": g + "px",
				"-moz-perspective-origin": g +
					"px",
				"perspective-origin": g + "px"
			});
			d.css({
				position: "relative",
				left: f + "px"
			}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
				a.endPrev = !0;
				d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
				a.clearTransStyle(d, b)
			});
			c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
				a.endCurrent = !0;
				c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
				a.clearTransStyle(c, e)
			})
		},
		clearTransStyle: function(a,
			b) {
			a.css({
				position: "",
				left: ""
			}).removeClass(b);
			this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
		},
		owlStatus: function() {
			this.owl = {
				userOptions: this.userOptions,
				baseElement: this.$elem,
				userItems: this.$userItems,
				owlItems: this.$owlItems,
				currentItem: this.currentItem,
				prevItem: this.prevItem,
				visibleItems: this.visibleItems,
				isTouch: this.browser.isTouch,
				browser: this.browser,
				dragDirection: this.dragDirection
			}
		},
		clearEvents: function() {
			this.$elem.off(".owl owl mousedown.disableTextSelect");
			f(k).off(".owl owl");
			f(g).off("resize", this.resizer)
		},
		unWrap: function() {
			0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
			this.clearEvents();
			this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
		},
		destroy: function() {
			this.stop();
			g.clearInterval(this.checkVisible);
			this.unWrap();
			this.$elem.removeData()
		},
		reinit: function(a) {
			a = f.extend({}, this.userOptions,
				a);
			this.unWrap();
			this.init(a, this.$elem)
		},
		addItem: function(a, b) {
			var e;
			if(!a) return !1;
			if(0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
			this.unWrap();
			e = void 0 === b || -1 === b ? -1 : b;
			e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
			this.setVars()
		},
		removeItem: function(a) {
			if(0 === this.$elem.children().length) return !1;
			a = void 0 === a || -1 === a ? -1 : a;
			this.unWrap();
			this.$userItems.eq(a).remove();
			this.setVars()
		}
	};
	f.fn.owlCarousel = function(a) {
		return this.each(function() {
			if(!0 ===
				f(this).data("owl-init")) return !1;
			f(this).data("owl-init", !0);
			var b = Object.create(l);
			b.init(a, this);
			f.data(this, "owlCarousel", b)
		})
	};
	f.fn.owlCarousel.options = {
		items: 5,
		itemsCustom: !1,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: !1,
		itemsMobile: [479, 1],
		singleItem: !1,
		itemsScaleUp: !1,
		slideSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1E3,
		autoPlay: !1,
		stopOnHover: !1,
		navigation: !1,
		navigationText: ["prev", "next"],
		rewindNav: !0,
		scrollPerPage: !1,
		pagination: !0,
		paginationNumbers: !1,
		responsive: !0,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: g,
		baseClass: "owl-carousel",
		theme: "owl-theme",
		lazyLoad: !1,
		lazyFollow: !0,
		lazyEffect: "fade",
		autoHeight: !1,
		jsonPath: !1,
		jsonSuccess: !1,
		dragBeforeAnimFinish: !0,
		mouseDrag: !0,
		touchDrag: !0,
		addClassActive: !1,
		transitionStyle: !1,
		beforeUpdate: !1,
		afterUpdate: !1,
		beforeInit: !1,
		afterInit: !1,
		beforeMove: !1,
		afterMove: !1,
		afterAction: !1,
		startDragging: !1,
		afterLazyLoad: !1
	}
})(jQuery, window, document);;
window.Modernizr = function(a, b, c) {
		function x(a) {
			j.cssText = a
		}

		function y(a, b) {
			return x(prefixes.join(a + ";") + (b || ""))
		}

		function z(a, b) {
			return typeof a === b
		}

		function A(a, b) {
			return !!~("" + a).indexOf(b)
		}

		function B(a, b) {
			for(var d in a) {
				var e = a[d];
				if(!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
			}
			return !1
		}

		function C(a, b, d) {
			for(var e in a) {
				var f = b[a[e]];
				if(f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
			}
			return !1
		}

		function D(a, b, c) {
			var d = a.charAt(0).toUpperCase() + a.slice(1),
				e = (a + " " + n.join(d + " ") + d).split(" ");
			return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
		}
		var d = "2.6.2",
			e = {},
			f = !0,
			g = b.documentElement,
			h = "modernizr",
			i = b.createElement(h),
			j = i.style,
			k, l = {}.toString,
			m = "Webkit Moz O ms",
			n = m.split(" "),
			o = m.toLowerCase().split(" "),
			p = {},
			q = {},
			r = {},
			s = [],
			t = s.slice,
			u, v = {}.hasOwnProperty,
			w;
		!z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
			return v.call(a, b)
		} : w = function(a, b) {
			return b in a && z(a.constructor.prototype[b], "undefined")
		}, Function.prototype.bind || (Function.prototype.bind = function(b) {
			var c = this;
			if(typeof c != "function") throw new TypeError;
			var d = t.call(arguments, 1),
				e = function() {
					if(this instanceof e) {
						var a = function() {};
						a.prototype = c.prototype;
						var f = new a,
							g = c.apply(f, d.concat(t.call(arguments)));
						return Object(g) === g ? g : f
					}
					return c.apply(b, d.concat(t.call(arguments)))
				};
			return e
		}), p.cssanimations = function() {
			return D("animationName")
		};
		for(var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
		return e.addTest = function(a, b) {
				if(typeof a == "object")
					for(var d in a) w(a, d) && e.addTest(d, a[d]);
				else {
					a = a.toLowerCase();
					if(e[a] !== c) return e;
					b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
				}
				return e
			}, x(""), i = k = null,
			function(a, b) {
				function k(a, b) {
					var c = a.createElement("p"),
						d = a.getElementsByTagName("head")[0] || a.documentElement;
					return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
				}

				function l() {
					var a = r.elements;
					return typeof a == "string" ? a.split(" ") : a
				}

				function m(a) {
					var b = i[a[g]];
					return b || (b = {}, h++, a[g] = h, i[h] = b), b
				}

				function n(a, c, f) {
					c || (c = b);
					if(j) return c.createElement(a);
					f || (f = m(c));
					var g;
					return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
				}

				function o(a, c) {
					a || (a = b);
					if(j) return a.createDocumentFragment();
					c = c || m(a);
					var d = c.frag.cloneNode(),
						e = 0,
						f = l(),
						g = f.length;
					for(; e < g; e++) d.createElement(f[e]);
					return d
				}

				function p(a, b) {
					b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
						return r.shivMethods ? n(c, a, b) : b.createElem(c)
					}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
						return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
					}) + ");return n}")(r, b.frag)
				}

				function q(a) {
					a || (a = b);
					var c = m(a);
					return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
				}
				var c = a.html5 || {},
					d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, g = "_html5shiv",
					h = 0,
					i = {},
					j;
				(function() {
					try {
						var a = b.createElement("a");
						a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
							b.createElement("a");
							var a = b.createDocumentFragment();
							return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
						}()
					} catch(c) {
						f = !0, j = !0
					}
				})();
				var r = {
					elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: c.shivCSS !== !1,
					supportsUnknownElements: j,
					shivMethods: c.shivMethods !== !1,
					type: "default",
					shivDocument: q,
					createElement: n,
					createDocumentFragment: o
				};
				a.html5 = r, q(b)
			}(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
				return B([a])
			}, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
	}(this, this.document),
	function(a, b, c) {
		function d(a) {
			return "[object Function]" == o.call(a)
		}

		function e(a) {
			return "string" == typeof a
		}

		function f() {}

		function g(a) {
			return !a || "loaded" == a || "complete" == a || "uninitialized" == a
		}

		function h() {
			var a = p.shift();
			q = 1, a ? a.t ? m(function() {
				("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
			}, 0) : (a(), h()) : q = 0
		}

		function i(a, c, d, e, f, i, j) {
			function k(b) {
				if(!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
					"img" != a && m(function() {
						t.removeChild(l)
					}, 50);
					for(var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
				}
			}
			var j = j || B.errorTimeout,
				l = b.createElement(a),
				o = 0,
				r = 0,
				u = {
					t: d,
					s: c,
					e: f,
					a: i,
					x: j
				};
			1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
				k.call(this, r)
			}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
		}

		function j(a, b, c, d, f) {
			return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
		}

		function k() {
			var a = B;
			return a.loader = {
				load: j,
				i: 0
			}, a
		}
		var l = b.documentElement,
			m = a.setTimeout,
			n = b.getElementsByTagName("script")[0],
			o = {}.toString,
			p = [],
			q = 0,
			r = "MozAppearance" in l.style,
			s = r && !!b.createRange().compareNode,
			t = s ? l : n.parentNode,
			l = a.opera && "[object Opera]" == o.call(a.opera),
			l = !!b.attachEvent && !l,
			u = r ? "object" : l ? "script" : "img",
			v = l ? "script" : u,
			w = Array.isArray || function(a) {
				return "[object Array]" == o.call(a)
			},
			x = [],
			y = {},
			z = {
				timeout: function(a, b) {
					return b.length && (a.timeout = b[0]), a
				}
			},
			A, B;
		B = function(a) {
			function b(a) {
				var a = a.split("!"),
					b = x.length,
					c = a.pop(),
					d = a.length,
					c = {
						url: c,
						origUrl: c,
						prefixes: a
					},
					e, f, g;
				for(f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
				for(f = 0; f < b; f++) c = x[f](c);
				return c
			}

			function g(a, e, f, g, h) {
				var i = b(a),
					j = i.autoCallback;
				i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
					k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
				})))
			}

			function h(a, b) {
				function c(a, c) {
					if(a) {
						if(e(a)) c || (j = function() {
							var a = [].slice.call(arguments);
							k.apply(this, a), l()
						}), g(a, j, b, 0, h);
						else if(Object(a) === a)
							for(n in m = function() {
									var b = 0,
										c;
									for(c in a) a.hasOwnProperty(c) && b++;
									return b
								}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
								var a = [].slice.call(arguments);
								k.apply(this, a), l()
							} : j[n] = function(a) {
								return function() {
									var b = [].slice.call(arguments);
									a && a.apply(this, b), l()
								}
							}(k[n])), g(a[n], j, b, n, h))
					} else !c && l()
				}
				var h = !!a.test,
					i = a.load || a.both,
					j = a.callback || f,
					k = j,
					l = a.complete || f,
					m, n;
				c(h ? a.yep : a.nope, !!i), i && c(i)
			}
			var i, j, l = this.yepnope.loader;
			if(e(a)) g(a, 0, l, 0);
			else if(w(a))
				for(i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
			else Object(a) === a && h(a, l)
		}, B.addPrefix = function(a, b) {
			z[a] = b
		}, B.addFilter = function(a) {
			x.push(a)
		}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
			b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
		}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
			var k = b.createElement("script"),
				l, o, e = e || B.errorTimeout;
			k.src = a;
			for(o in d) k.setAttribute(o, d[o]);
			c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
				!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
			}, m(function() {
				l || (l = 1, c(1))
			}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
		}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
			var e = b.createElement("link"),
				j, c = i ? h : c || f;
			e.href = a, e.rel = "stylesheet", e.type = "text/css";
			for(j in d) e.setAttribute(j, d[j]);
			g || (n.parentNode.insertBefore(e, n), m(c, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	};
/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 */
(function($) {
	$.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
		var cfg = {
			interval: 100,
			sensitivity: 7,
			timeout: 0
		};
		if(typeof handlerIn === "object") {
			cfg = $.extend(cfg, handlerIn);
		} else if($.isFunction(handlerOut)) {
			cfg = $.extend(cfg, {
				over: handlerIn,
				out: handlerOut,
				selector: selector
			});
		} else {
			cfg = $.extend(cfg, {
				over: handlerIn,
				out: handlerIn,
				selector: handlerOut
			});
		}
		var cX, cY, pX, pY;
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};
		var compare = function(ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			if((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
				$(ob).off("mousemove.hoverIntent", track);
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob, [ev]);
			} else {
				pX = cX;
				pY = cY;
				ob.hoverIntent_t = setTimeout(function() {
					compare(ev, ob);
				}, cfg.interval);
			}
		};
		var delay = function(ev, ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob, [ev]);
		};
		var handleHover = function(e) {
			var ev = jQuery.extend({}, e);
			var ob = this;
			if(ob.hoverIntent_t) {
				ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			}
			if(e.type == "mouseenter") {
				pX = ev.pageX;
				pY = ev.pageY;
				$(ob).on("mousemove.hoverIntent", track);
				if(ob.hoverIntent_s != 1) {
					ob.hoverIntent_t = setTimeout(function() {
						compare(ev, ob);
					}, cfg.interval);
				}
			} else {
				$(ob).off("mousemove.hoverIntent", track);
				if(ob.hoverIntent_s == 1) {
					ob.hoverIntent_t = setTimeout(function() {
						delay(ev, ob);
					}, cfg.timeout);
				}
			}
		};
		return this.on({
			'mouseenter.hoverIntent': handleHover,
			'mouseleave.hoverIntent': handleHover
		}, cfg.selector);
	};
})(jQuery);
(function($) {
	$.fn.dcMegaMenu = function(options) {
		var defaults = {
			classParent: 'dc-mega',
			classContainer: 'sub-container',
			classSubParent: 'mega-hdr',
			classSubLink: 'mega-hdr',
			classWidget: 'dc-extra',
			rowItems: 3,
			speed: 'fast',
			effect: 'fade',
			event: 'hover',
			fullWidth: false,
			onLoad: function() {},
			beforeOpen: function() {},
			beforeClose: function() {}
		};
		var options = $.extend(defaults, options);
		var $dcMegaMenuObj = this;
		return $dcMegaMenuObj.each(function(options) {
			var clSubParent = defaults.classSubParent;
			var clSubLink = defaults.classSubLink;
			var clParent = defaults.classParent;
			var clContainer = defaults.classContainer;
			var clWidget = defaults.classWidget;
			megaSetup();

			function megaOver() {
				var subNav = $('.sub', this);
				$(this).addClass('mega-hover');
				if(defaults.effect == 'fade') {
					$(subNav).fadeIn(defaults.speed)
				}
				if(defaults.effect == 'slide') {
					$(subNav).show(defaults.speed)
				}
				defaults.beforeOpen.call(this)
			}

			function megaAction(obj) {
				var subNav = $('.sub', obj);
				$(obj).addClass('mega-hover');
				if(defaults.effect == 'fade') {
					$(subNav).fadeIn(defaults.speed)
				}
				if(defaults.effect == 'slide') {
					$(subNav).show(defaults.speed)
				}
				defaults.beforeOpen.call(this)
			}

			function megaOut() {
				var subNav = $('.sub', this);
				$(this).removeClass('mega-hover');
				$(subNav).hide();
				defaults.beforeClose.call(this)
			}

			function megaActionClose(obj) {
				var subNav = $('.sub', obj);
				$(obj).removeClass('mega-hover');
				$(subNav).hide();
				defaults.beforeClose.call(this)
			}

			function megaReset() {
				$('li', $dcMegaMenuObj).removeClass('mega-hover');
				$('.sub', $dcMegaMenuObj).hide()
			}

			function megaSetup() {
				$arrow = '<span class="dc-mega-icon"></span>';
				var clParentLi = clParent + '-li';
				var menuWidth = $dcMegaMenuObj.outerWidth();
				$('> li', $dcMegaMenuObj).each(function() {
					var $mainSub = $('> ul', this);
					var $primaryLink = $('> a', this);
					if($mainSub.length) {
						$primaryLink.addClass(clParent).append($arrow);
						$mainSub.addClass('sub').wrap('<div class="' + clContainer + '" />');
						var pos = $(this).position();
						pl = pos.left;
						if($('ul', $mainSub).length) {
							$(this).addClass(clParentLi);
							$('.' + clContainer, this).addClass('mega');
							$('> li', $mainSub).each(function() {
								if(!$(this).hasClass(clWidget)) {
									$(this).addClass('mega-unit');
									if($('> ul', this).length) {
										$(this).addClass(clSubParent);
										$('> a', this).addClass(clSubParent + '-a')
									} else {
										$(this).addClass(clSubLink);
										$('> a', this).addClass(clSubLink + '-a')
									}
								}
							});
							var hdrs = $('.mega-unit', this);
							rowSize = parseInt(defaults.rowItems);
							for(var i = 0; i < hdrs.length; i += rowSize) {
								hdrs.slice(i, i + rowSize).wrapAll('<div class="row" />')
							}
							$mainSub.show();
							var pw = $(this).width();
							var pr = pl + pw;
							var mr = menuWidth - pr;
							var subw = $mainSub.outerWidth();
							var totw = $mainSub.parent('.' + clContainer).outerWidth();
							var cpad = totw - subw;
							if(defaults.fullWidth == true) {
								var fw = menuWidth - cpad;
								$mainSub.parent('.' + clContainer).css({
									width: fw + 'px'
								});
								$dcMegaMenuObj.addClass('full-width')
							}
							var iw = $('.mega-unit', $mainSub).outerWidth(true);
							var rowItems = $('.row:eq(0) .mega-unit', $mainSub).length;
							var inneriw = iw * rowItems;
							var totiw = inneriw + cpad;
							$('.row', this).each(function() {
								$('.mega-unit:last', this).addClass('last');
								var maxValue = undefined;
								$('.mega-unit > a', this).each(function() {
									var val = parseInt($(this).height());
									if(maxValue === undefined || maxValue < val) {
										maxValue = val
									}
								});
								$('.mega-unit > a', this).css('height', maxValue + 'px');
								$(this).css('width', inneriw + 'px')
							});
							if(defaults.fullWidth == true) {
								params = {
									left: 0
								}
							} else {
								var ml = mr < ml ? ml + ml - mr : (totiw - pw) / 2;
								var subLeft = pl - ml;
								var params = {
									left: pl + 'px',
									marginLeft: -ml + 'px'
								};
								if(subLeft < 0) {
									params = {
										left: 0
									}
								} else if(mr < ml) {
									params = {
										right: 0
									}
								}
							}
							$('.' + clContainer, this).css(params);
							$('.row', $mainSub).each(function() {
								var rh = $(this).height();
								$('.mega-unit', this).css({
									height: rh + 'px'
								});
								$(this).parent('.row').css({
									height: rh + 'px'
								})
							});
							$mainSub.hide()
						} else {
							$('.' + clContainer, this).addClass('non-mega').css('left', pl + 'px')
						}
					}
				});
				var menuHeight = $('> li > a', $dcMegaMenuObj).outerHeight(true);
				$('.' + clContainer, $dcMegaMenuObj).css({
					top: menuHeight + 'px'
				}).css('z-index', '1000');
				if(defaults.event == 'hover') {
					var config = {
						sensitivity: 2,
						interval: 100,
						over: megaOver,
						timeout: 400,
						out: megaOut
					};
					$('li', $dcMegaMenuObj).hoverIntent(config)
				}
				if(defaults.event == 'click') {
					$('body').mouseup(function(e) {
						if(!$(e.target).parents('.mega-hover').length) {
							megaReset()
						}
					});
					$('> li > a.' + clParent, $dcMegaMenuObj).click(function(e) {
						var $parentLi = $(this).parent();
						if($parentLi.hasClass('mega-hover')) {
							megaActionClose($parentLi)
						} else {
							megaAction($parentLi)
						}
						e.preventDefault()
					})
				}
				defaults.onLoad.call(this)
			}
		})
	}
})(jQuery);
(function($, sr) {
	"use strict";
	var debounce = function(func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this,
				args = arguments;

			function delayed() {
				if(!execAsap) {
					func.apply(obj, args);
					timeout = null;
				}
			}
			if(timeout) {
				clearTimeout(timeout);
			} else if(execAsap) {
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold || 100);
		};
	};
	jQuery.fn[sr] = function(fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};
})(jQuery, 'smartresize');
(function($) {
	"use strict";
	$.fn.equalHeights = function(px) {
		$(this).each(function() {
			var currentTallest = 0;
			$(this).children().each(function() {
				if($(this).height() > currentTallest) {
					currentTallest = $(this).height();
				}
			});
			if(!px && Number.prototype.pxToEm) {
				currentTallest = currentTallest.pxToEm();
			}
			if($.browser.msie && $.browser.version === 6.0) {
				(this).children().css({
					'height': currentTallest
				});
			}
			$(this).children().css({
				'min-height': currentTallest
			});
		});
		return this;
	};
})(jQuery);
(function($) {
	"use strict";
	$.easyPieChart = function(el, options) {
		var addScaleLine, animateLine, drawLine, easeInOutQuad, renderBackground, renderScale, renderTrack, _this = this;
		this.el = el;
		this.$el = $(el);
		this.$el.data("easyPieChart", this);
		this.init = function() {
			var percent;
			_this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
			percent = parseInt(_this.$el.data('percent'), 10);
			_this.percentage = 0;
			_this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
			_this.$el.append(_this.canvas);
			if(typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
				G_vmlCanvasManager.initElement(_this.canvas);
			}
			_this.ctx = _this.canvas.getContext('2d');
			if(window.devicePixelRatio > 1.5) {
				$(_this.canvas).css({
					width: _this.options.size,
					height: _this.options.size
				});
				_this.canvas.width *= 2;
				_this.canvas.height *= 2;
				_this.ctx.scale(2, 2);
			}
			_this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
			_this.$el.addClass('easyPieChart');
			_this.$el.css({
				width: _this.options.size,
				height: _this.options.size,
				lineHeight: "" + _this.options.size + "px"
			});
			_this.update(percent);
			return _this;
		};
		this.update = function(percent) {
			if(_this.options.animate === false) {
				return drawLine(percent);
			} else {
				if(percent === 0) {
					return animateLine(0, 0);
				} else {
					return animateLine(_this.percentage, percent);
				}
			}
		};
		renderScale = function() {
			var i, _i, _results;
			_this.ctx.fillStyle = _this.options.scaleColor;
			_this.ctx.lineWidth = 1;
			_results = [];
			for(i = _i = 0; _i <= 24; i = ++_i) {
				_results.push(addScaleLine(i));
			}
			return _results;
		};
		addScaleLine = function(i) {
			var offset;
			offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
			_this.ctx.save();
			_this.ctx.rotate(i * Math.PI / 12);
			_this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
			return _this.ctx.restore();
		};
		renderTrack = function() {
			var offset;
			offset = _this.options.size / 2 - _this.options.lineWidth / 2;
			if(_this.options.scaleColor !== false) {
				offset -= _this.options.size * 0.08;
			}
			_this.ctx.beginPath();
			_this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
			_this.ctx.closePath();
			_this.ctx.strokeStyle = _this.options.trackColor;
			_this.ctx.lineWidth = _this.options.lineWidth;
			return _this.ctx.stroke();
		};
		renderBackground = function() {
			if(_this.options.trackColor !== false) {
				return renderTrack();
			}
		};
		drawLine = function(percent) {
			var offset;
			renderBackground();
			_this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
			_this.ctx.lineCap = _this.options.lineCap;
			_this.ctx.lineWidth = _this.options.lineWidth;
			offset = _this.options.size / 2 - _this.options.lineWidth / 2;
			if(_this.options.scaleColor !== false) {
				offset -= _this.options.size * 0.08;
			}
			_this.ctx.save();
			_this.ctx.rotate(-Math.PI / 2);
			_this.ctx.beginPath();
			_this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
			_this.ctx.stroke();
			return _this.ctx.restore();
		};
		animateLine = function(from, to) {
			var currentStep, fps, steps;
			fps = 30;
			steps = fps * _this.options.animate / 1000;
			currentStep = 0;
			_this.options.onStart.call(_this);
			_this.percentage = to;
			if(_this.animation) {
				clearInterval(_this.animation);
				_this.animation = false;
			}
			_this.animation = setInterval(function() {
				_this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
				renderBackground.call(_this);
				drawLine.call(_this, [easeInOutQuad(currentStep, from, to - from, steps)]);
				currentStep++;
				if((currentStep / steps) > 1) {
					clearInterval(_this.animation);
					_this.animation = false;
					return _this.options.onStop.call(_this);
				}
			}, 1000 / fps);
			return _this.animation;
		};
		easeInOutQuad = function(t, b, c, d) {
			var easeIn, easing;
			easeIn = function(t) {
				return Math.pow(t, 2);
			};
			easing = function(t) {
				if(t < 1) {
					return easeIn(t);
				} else {
					return 2 - easeIn((t / 2) * -2 + 2);
				}
			};
			t /= d / 2;
			return c / 2 * easing(t) + b;
		};
		return this.init();
	};
	$.easyPieChart.defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f2f2f2',
		scaleColor: false,
		lineCap: 'round',
		size: 110,
		lineWidth: 3,
		animate: false,
		onStart: $.noop,
		onStop: $.noop
	};
	$.fn.easyPieChart = function(options) {
		return $.each(this, function(i, el) {
			var $el;
			$el = $(el);
			if(!$el.data('easyPieChart')) {
				return $el.data('easyPieChart', new $.easyPieChart(el, options));
			}
		});
	};
	return void 0;
})(jQuery);
(function($) {
	"use strict";
	$.fn.animateNumber = function(to) {
		var $ele = $(this),
			num = parseInt($ele.html(), 10),
			up = to > num,
			num_interval = Math.abs(num - to) / 90;
		var loop = function() {
			num = up ? Math.ceil(num + num_interval) : Math.floor(num - num_interval);
			if((up && num > to) || (!up && num < to)) {
				num = to;
				clearInterval(animation);
			}
			$ele.html(num);
		};
		var intervalTime = to <= 5 ? intervalTime = 100 : to <= 25 ? intervalTime = 50 : to <= 50 ? intervalTime = 25 : 10;
		var animation = setInterval(loop, intervalTime);
	};
})(jQuery);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(window) {
	'use strict';

	function classReg(className) {
		return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
	}
	var hasClass, addClass, removeClass;
	if('classList' in document.documentElement) {
		hasClass = function(elem, c) {
			return elem.classList.contains(c);
		};
		addClass = function(elem, c) {
			elem.classList.add(c);
		};
		removeClass = function(elem, c) {
			elem.classList.remove(c);
		};
	} else {
		hasClass = function(elem, c) {
			return classReg(c).test(elem.className);
		};
		addClass = function(elem, c) {
			if(!hasClass(elem, c)) {
				elem.className = elem.className + ' ' + c;
			}
		};
		removeClass = function(elem, c) {
			elem.className = elem.className.replace(classReg(c), ' ');
		};
	}

	function toggleClass(elem, c) {
		var fn = hasClass(elem, c) ? removeClass : addClass;
		fn(elem, c);
	}
	var classie = {
		hasClass: hasClass,
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		has: hasClass,
		add: addClass,
		remove: removeClass,
		toggle: toggleClass
	};
	if(typeof define === 'function' && define.amd) {
		define(classie);
	} else {
		window.classie = classie;
	}
})(window);;
(function(window) {
	'use strict';
	var docElem = window.document.documentElement;

	function getViewportH() {
		var client = docElem['clientHeight'],
			inner = window['innerHeight'];
		if(client < inner)
			return inner;
		else
			return client;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	function getOffset(el) {
		var offsetTop = 0,
			offsetLeft = 0;
		do {
			if(!isNaN(el.offsetTop)) {
				offsetTop += el.offsetTop;
			}
			if(!isNaN(el.offsetLeft)) {
				offsetLeft += el.offsetLeft;
			}
		} while (el = el.offsetParent)
		return {
			top: offsetTop,
			left: offsetLeft
		}
	}

	function inViewport(el, h) {
		var elH = el.offsetHeight,
			scrolled = scrollY(),
			viewed = scrolled + getViewportH(),
			elTop = getOffset(el).top,
			elBottom = elTop + elH,
			h = h || 0;
		return(elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
	}

	function extend(a, b) {
		for(var key in b) {
			if(b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function AnimOnScroll(el, options) {
		this.el = el;
		this.options = extend(this.defaults, options);
		this._init();
	}
	AnimOnScroll.prototype = {
		defaults: {
			minDuration: 0,
			maxDuration: 0,
			viewportFactor: 0
		},
		_init: function() {
			this.items = Array.prototype.slice.call(document.querySelectorAll('#' + this.el.id + ' > li'));
			this.itemsCount = this.items.length;
			this.itemsRenderedCount = 0;
			this.didScroll = false;
			var self = this;
			var firstLoad = false;
			imagesLoaded(this.el, function() {
				new Masonry(self.el, {
					itemSelector: 'li.blog-item',
					transitionDuration: 0
				});
				if(Modernizr.cssanimations) {
					if(self.el.classList.contains('first-load')) {
						self.items.forEach(function(el, i) {
							if(inViewport(el)) {
								self._onScrollFn();
							}
						});
					} else {
						self.items.forEach(function(el, i) {
							if(inViewport(el)) {
								self._onScrollFn();
							}
						});
					}
					document.getElementById(self.el.id).className = document.getElementById(self.el.id).className.replace(/\bfirst-load\b/, '');
					window.addEventListener('scroll', function() {
						self._onScrollFn();
					}, false);
					window.addEventListener('resize', function() {
						self._resizeHandler();
					}, false);
				}
			});
		},
		_onScrollFn: function() {
			var self = this;
			if(!this.didScroll) {
				this.didScroll = true;
				setTimeout(function() {
					self._scrollPage();
				}, 60);
			}
		},
		_scrollPage: function() {
			var self = this;
			this.items.forEach(function(el, i) {
				if(!classie.has(el, 'shown') && !classie.has(el, 'animate') && inViewport(el, self.options.viewportFactor)) {
					setTimeout(function() {
						var perspY = scrollY() + getViewportH() / 2;
						self.el.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
						self.el.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
						self.el.style.perspectiveOrigin = '50% ' + perspY + 'px';
						self._checkTotalRendered();
						if(self.options.minDuration && self.options.maxDuration) {
							var randDuration = (Math.random() * (self.options.maxDuration - self.options.minDuration) + self.options.minDuration) + 's';
							el.style.WebkitAnimationDuration = randDuration;
							el.style.MozAnimationDuration = randDuration;
							el.style.animationDuration = randDuration;
						}
						classie.add(el, 'animate');
					}, 25);
				}
			});
			this.didScroll = false;
		},
		_resizeHandler: function() {
			var self = this;

			function delayed() {
				self._scrollPage();
				self.resizeTimeout = null;
			}
			if(this.resizeTimeout) {
				clearTimeout(this.resizeTimeout);
			}
			this.resizeTimeout = setTimeout(delayed, 1000);
		},
		_checkTotalRendered: function() {
			++this.itemsRenderedCount;
			if(this.itemsRenderedCount === this.itemsCount) {
				window.removeEventListener('scroll', this._onScrollFn);
			}
		}
	}
	window.AnimOnScroll = AnimOnScroll;
})(window);
/*!
 * Masonry PACKAGED v3.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(t) {
	"use strict";

	function e(t) {
		if(t) {
			if("string" == typeof n[t]) return t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			for(var e, o = 0, r = i.length; r > o; o++)
				if(e = i[o] + t, "string" == typeof n[e]) return e
		}
	}
	var i = "Webkit Moz ms Ms O".split(" "),
		n = document.documentElement.style;
	"function" == typeof define && define.amd ? define(function() {
		return e
	}) : t.getStyleProperty = e
})(window),
function(t) {
	"use strict";

	function e(t) {
		var e = parseFloat(t),
			i = -1 === t.indexOf("%") && !isNaN(e);
		return i && e
	}

	function i() {
		for(var t = {
				width: 0,
				height: 0,
				innerWidth: 0,
				innerHeight: 0,
				outerWidth: 0,
				outerHeight: 0
			}, e = 0, i = s.length; i > e; e++) {
			var n = s[e];
			t[n] = 0
		}
		return t
	}

	function n(t) {
		function n(t) {
			if("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var n = r(t);
				if("none" === n.display) return i();
				var h = {};
				h.width = t.offsetWidth, h.height = t.offsetHeight;
				for(var p = h.isBorderBox = !(!a || !n[a] || "border-box" !== n[a]), u = 0, f = s.length; f > u; u++) {
					var d = s[u],
						c = n[d],
						l = parseFloat(c);
					h[d] = isNaN(l) ? 0 : l
				}
				var m = h.paddingLeft + h.paddingRight,
					y = h.paddingTop + h.paddingBottom,
					g = h.marginLeft + h.marginRight,
					v = h.marginTop + h.marginBottom,
					_ = h.borderLeftWidth + h.borderRightWidth,
					b = h.borderTopWidth + h.borderBottomWidth,
					L = p && o,
					E = e(n.width);
				E !== !1 && (h.width = E + (L ? 0 : m + _));
				var I = e(n.height);
				return I !== !1 && (h.height = I + (L ? 0 : y + b)), h.innerWidth = h.width - (m + _), h.innerHeight = h.height - (y + b), h.outerWidth = h.width + g, h.outerHeight = h.height + v, h
			}
		}
		var o, a = t("boxSizing");
		return function() {
			if(a) {
				var t = document.createElement("div");
				t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[a] = "border-box";
				var i = document.body || document.documentElement;
				i.appendChild(t);
				var n = r(t);
				o = 200 === e(n.width), i.removeChild(t)
			}
		}(), n
	}
	var o = document.defaultView,
		r = o && o.getComputedStyle ? function(t) {
			return o.getComputedStyle(t, null)
		} : function(t) {
			return t.currentStyle
		},
		s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
	"function" == typeof define && define.amd ? define(["get-style-property"], n) : t.getSize = n(t.getStyleProperty)
}(window),
function(t) {
	"use strict";
	var e = document.documentElement,
		i = function() {};
	e.addEventListener ? i = function(t, e, i) {
		t.addEventListener(e, i, !1)
	} : e.attachEvent && (i = function(e, i, n) {
		e[i + n] = n.handleEvent ? function() {
			var e = t.event;
			e.target = e.target || e.srcElement, n.handleEvent.call(n, e)
		} : function() {
			var i = t.event;
			i.target = i.target || i.srcElement, n.call(e, i)
		}, e.attachEvent("on" + i, e[i + n])
	});
	var n = function() {};
	e.removeEventListener ? n = function(t, e, i) {
		t.removeEventListener(e, i, !1)
	} : e.detachEvent && (n = function(t, e, i) {
		t.detachEvent("on" + e, t[e + i]);
		try {
			delete t[e + i]
		} catch(n) {
			t[e + i] = void 0
		}
	});
	var o = {
		bind: i,
		unbind: n
	};
	"function" == typeof define && define.amd ? define(o) : t.eventie = o
}(this),
function(t) {
	"use strict";

	function e(t) {
		"function" == typeof t && (e.isReady ? t() : r.push(t))
	}

	function i(t) {
		var i = "readystatechange" === t.type && "complete" !== o.readyState;
		if(!e.isReady && !i) {
			e.isReady = !0;
			for(var n = 0, s = r.length; s > n; n++) {
				var a = r[n];
				a()
			}
		}
	}

	function n(n) {
		return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(t, "load", i), e
	}
	var o = t.document,
		r = [];
	e.isReady = !1, "function" == typeof define && define.amd ? define(["eventie"], n) : t.docReady = n(t.eventie)
}(this),
function(t) {
	"use strict";

	function e() {}

	function i(t, e) {
		if(o) return e.indexOf(t);
		for(var i = e.length; i--;)
			if(e[i] === t) return i;
		return -1
	}
	var n = e.prototype,
		o = Array.prototype.indexOf ? !0 : !1;
	n._getEvents = function() {
		return this._events || (this._events = {})
	}, n.getListeners = function(t) {
		var e, i, n = this._getEvents();
		if("object" == typeof t) {
			e = {};
			for(i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
		} else e = n[t] || (n[t] = []);
		return e
	}, n.getListenersAsObject = function(t) {
		var e, i = this.getListeners(t);
		return i instanceof Array && (e = {}, e[t] = i), e || i
	}, n.addListener = function(t, e) {
		var n, o = this.getListenersAsObject(t);
		for(n in o) o.hasOwnProperty(n) && -1 === i(e, o[n]) && o[n].push(e);
		return this
	}, n.on = n.addListener, n.defineEvent = function(t) {
		return this.getListeners(t), this
	}, n.defineEvents = function(t) {
		for(var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
		return this
	}, n.removeListener = function(t, e) {
		var n, o, r = this.getListenersAsObject(t);
		for(o in r) r.hasOwnProperty(o) && (n = i(e, r[o]), -1 !== n && r[o].splice(n, 1));
		return this
	}, n.off = n.removeListener, n.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, n.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, n.manipulateListeners = function(t, e, i) {
		var n, o, r = t ? this.removeListener : this.addListener,
			s = t ? this.removeListeners : this.addListeners;
		if("object" != typeof e || e instanceof RegExp)
			for(n = i.length; n--;) r.call(this, e, i[n]);
		else
			for(n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
		return this
	}, n.removeEvent = function(t) {
		var e, i = typeof t,
			n = this._getEvents();
		if("string" === i) delete n[t];
		else if("object" === i)
			for(e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
		else delete this._events;
		return this
	}, n.emitEvent = function(t, e) {
		var i, n, o, r = this.getListenersAsObject(t);
		for(n in r)
			if(r.hasOwnProperty(n))
				for(i = r[n].length; i--;) o = e ? r[n][i].apply(null, e) : r[n][i](), o === !0 && this.removeListener(t, r[n][i]);
		return this
	}, n.trigger = n.emitEvent, n.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, "function" == typeof define && define.amd ? define(function() {
		return e
	}) : t.EventEmitter = e
}(this),
function(t) {
	"use strict";

	function e() {}

	function i(t) {
		function i(e) {
			e.prototype.option || (e.prototype.option = function(e) {
				t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
			})
		}

		function o(e, i) {
			t.fn[e] = function(o) {
				if("string" == typeof o) {
					for(var s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
						var p = this[a],
							u = t.data(p, e);
						if(u)
							if(t.isFunction(u[o]) && "_" !== o.charAt(0)) {
								var f = u[o].apply(u, s);
								if(void 0 !== f) return f
							} else r("no such method '" + o + "' for " + e + " instance");
						else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + o + "'")
					}
					return this
				}
				return this.each(function() {
					var n = t.data(this, e);
					n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
				})
			}
		}
		if(t) {
			var r = "undefined" == typeof console ? e : function(t) {
				console.error(t)
			};
			t.bridget = function(t, e) {
				i(e), o(t, e)
			}
		}
	}
	var n = Array.prototype.slice;
	"function" == typeof define && define.amd ? define(["jquery"], i) : i(t.jQuery)
}(window),
function(t, e) {
	"use strict";

	function i(t, e) {
		return t[a](e)
	}

	function n(t) {
		if(!t.parentNode) {
			var e = document.createDocumentFragment();
			e.appendChild(t)
		}
	}

	function o(t, e) {
		n(t);
		for(var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
			if(i[o] === t) return !0;
		return !1
	}

	function r(t, e) {
		return n(t), i(t, e)
	}
	var s, a = function() {
		if(e.matchesSelector) return "matchesSelector";
		for(var t = ["webkit", "moz", "ms", "o"], i = 0, n = t.length; n > i; i++) {
			var o = t[i],
				r = o + "MatchesSelector";
			if(e[r]) return r
		}
	}();
	if(a) {
		var h = document.createElement("div"),
			p = i(h, "div");
		s = p ? i : r
	} else s = o;
	"function" == typeof define && define.amd ? define(function() {
		return s
	}) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
	"use strict";

	function e(t, e) {
		for(var i in e) t[i] = e[i];
		return t
	}

	function i(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var n = t.getSize,
		o = t.getStyleProperty,
		r = t.EventEmitter,
		s = document.defaultView,
		a = s && s.getComputedStyle ? function(t) {
			return s.getComputedStyle(t, null)
		} : function(t) {
			return t.currentStyle
		},
		h = o("transition"),
		p = o("transform"),
		u = h && p,
		f = !!o("perspective"),
		d = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "otransitionend",
			transition: "transitionend"
		}[h],
		c = ["transform", "transition", "transitionDuration", "transitionProperty"],
		l = function() {
			for(var t = {}, e = 0, i = c.length; i > e; e++) {
				var n = c[e],
					r = o(n);
				r && r !== n && (t[n] = r)
			}
			return t
		}();
	e(i.prototype, r.prototype), i.prototype._create = function() {
		this.css({
			position: "absolute"
		})
	}, i.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.prototype.getSize = function() {
		this.size = n(this.element)
	}, i.prototype.css = function(t) {
		var e = this.element.style;
		for(var i in t) {
			var n = l[i] || i;
			e[n] = t[i]
		}
	}, i.prototype.getPosition = function() {
		var t = a(this.element),
			e = this.layout.options,
			i = e.isOriginLeft,
			n = e.isOriginTop,
			o = parseInt(t[i ? "left" : "right"], 10),
			r = parseInt(t[n ? "top" : "bottom"], 10);
		o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
		var s = this.layout.size;
		o -= i ? s.paddingLeft : s.paddingRight, r -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
	}, i.prototype.layoutPosition = function() {
		var t = this.layout.size,
			e = this.layout.options,
			i = {};
		e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
	};
	var m = f ? function(t, e) {
		return "translate3d(" + t + "px, " + e + "px, 0)"
	} : function(t, e) {
		return "translate(" + t + "px, " + e + "px)"
	};
	i.prototype._transitionTo = function(t, e) {
		this.getPosition();
		var i = this.position.x,
			n = this.position.y,
			o = parseInt(t, 10),
			r = parseInt(e, 10),
			s = o === this.position.x && r === this.position.y;
		if(this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
		var a = t - i,
			h = e - n,
			p = {},
			u = this.layout.options;
		a = u.isOriginLeft ? a : -a, h = u.isOriginTop ? h : -h, p.transform = m(a, h), this.transition({
			to: p,
			onTransitionEnd: this.layoutPosition,
			isCleaning: !0
		})
	}, i.prototype.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, i.prototype.moveTo = u ? i.prototype._transitionTo : i.prototype.goTo, i.prototype.setPosition = function(t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, i.prototype._nonTransition = function(t) {
		this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd && t.onTransitionEnd.call(this)
	}, i.prototype._transition = function(t) {
		var e = this.layout.options.transitionDuration;
		if(!parseFloat(e)) return this._nonTransition(t), void 0;
		var i = t.to,
			n = [];
		for(var o in i) n.push(o);
		var r = {};
		if(r.transitionProperty = n.join(","), r.transitionDuration = e, this.element.addEventListener(d, this, !1), (t.isCleaning || t.onTransitionEnd) && this.on("transitionEnd", function(e) {
				return t.isCleaning && e._removeStyles(i), t.onTransitionEnd && t.onTransitionEnd.call(e), !0
			}), t.from) {
			this.css(t.from);
			var s = this.element.offsetHeight;
			s = null
		}
		this.css(r), this.css(i), this.isTransitioning = !0
	}, i.prototype.transition = i.prototype[h ? "_transition" : "_nonTransition"], i.prototype.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, i.prototype.onotransitionend = function(t) {
		this.ontransitionend(t)
	}, i.prototype.ontransitionend = function(t) {
		t.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1, this.emitEvent("transitionEnd", [this]))
	}, i.prototype._removeStyles = function(t) {
		var e = {};
		for(var i in t) e[i] = "";
		this.css(e)
	};
	var y = {
		transitionProperty: "",
		transitionDuration: ""
	};
	i.prototype.removeTransitionStyles = function() {
		this.css(y)
	}, i.prototype.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
	}, i.prototype.remove = h ? function() {
		var t = this;
		this.on("transitionEnd", function() {
			return t.removeElem(), !0
		}), this.hide()
	} : i.prototype.removeElem, i.prototype.reveal = function() {
		this.css({
			display: ""
		});
		var t = this.layout.options;
		this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0
		})
	}, i.prototype.hide = function() {
		this.css({
			display: ""
		});
		var t = this.layout.options;
		this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: function() {
				this.css({
					display: "none"
				})
			}
		})
	}, i.prototype.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, t.Outlayer = {
		Item: i
	}
}(window),
function(t) {
	"use strict";

	function e(t, e) {
		for(var i in e) t[i] = e[i];
		return t
	}

	function i(t) {
		return "[object Array]" === v.call(t)
	}

	function n(t) {
		var e = [];
		if(i(t)) e = t;
		else if("number" == typeof t.length)
			for(var n = 0, o = t.length; o > n; n++) e.push(t[n]);
		else e.push(t);
		return e
	}

	function o(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	}

	function r(t, i) {
		if("string" == typeof t && (t = l.querySelector(t)), !t || !_(t)) return m && m.error("Bad " + this.settings.namespace + " element: " + t), void 0;
		this.element = t, this.options = e({}, this.options), e(this.options, i);
		var n = ++L;
		this.element.outlayerGUID = n, E[n] = this, this._create(), this.options.isInitLayout && this.layout()
	}

	function s(t, i) {
		t.prototype[i] = e({}, r.prototype[i])
	}
	var a = t.Outlayer,
		h = a.Item,
		p = t.docReady,
		u = t.EventEmitter,
		f = t.eventie,
		d = t.getSize,
		c = t.matchesSelector,
		l = t.document,
		m = t.console,
		y = t.jQuery,
		g = function() {},
		v = Object.prototype.toString,
		_ = "object" == typeof HTMLElement ? function(t) {
			return t instanceof HTMLElement
		} : function(t) {
			return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
		},
		b = Array.prototype.indexOf ? function(t, e) {
			return t.indexOf(e)
		} : function(t, e) {
			for(var i = 0, n = t.length; n > i; i++)
				if(t[i] === e) return i;
			return -1
		},
		L = 0,
		E = {};
	r.prototype.settings = {
		namespace: "outlayer",
		item: a.Item
	}, r.prototype.options = {
		containerStyle: {
			position: "relative"
		},
		isInitLayout: !0,
		isOriginLeft: !0,
		isOriginTop: !0,
		isResizeBound: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	}, e(r.prototype, u.prototype), r.prototype._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
	}, r.prototype.reloadItems = function() {
		this.items = this._getItems(this.element.children)
	}, r.prototype._getItems = function(t) {
		for(var e = this._filterFindItemElements(t), i = this.settings.item, n = [], o = 0, r = e.length; r > o; o++) {
			var s = e[o],
				a = new i(s, this, this.options.itemOptions);
			n.push(a)
		}
		return n
	}, r.prototype._filterFindItemElements = function(t) {
		t = n(t);
		var e = this.options.itemSelector;
		if(!e) return t;
		for(var i = [], o = 0, r = t.length; r > o; o++) {
			var s = t[o];
			c(s, e) && i.push(s);
			for(var a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++) i.push(a[h])
		}
		return i
	}, r.prototype.getItemElements = function() {
		for(var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
		return t
	}, r.prototype.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
		this.layoutItems(this.items, t), this._isLayoutInited = !0
	}, r.prototype._init = r.prototype.layout, r.prototype._resetLayout = function() {
		this.getSize()
	}, r.prototype.getSize = function() {
		this.size = d(this.element)
	}, r.prototype._getMeasurement = function(t, e) {
		var i, n = this.options[t];
		n ? ("string" == typeof n ? i = this.element.querySelector(n) : _(n) && (i = n), this[t] = i ? d(i)[e] : n) : this[t] = 0
	}, r.prototype.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, r.prototype._getItemsForLayout = function(t) {
		for(var e = [], i = 0, n = t.length; n > i; i++) {
			var o = t[i];
			o.isIgnored || e.push(o)
		}
		return e
	}, r.prototype._layoutItems = function(t, e) {
		if(!t || !t.length) return this.emitEvent("layoutComplete", [this, t]), void 0;
		this._itemsOn(t, "layout", function() {
			this.emitEvent("layoutComplete", [this, t])
		});
		for(var i = [], n = 0, o = t.length; o > n; n++) {
			var r = t[n],
				s = this._getItemLayoutPosition(r);
			s.item = r, s.isInstant = e, i.push(s)
		}
		this._processLayoutQueue(i)
	}, r.prototype._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, r.prototype._processLayoutQueue = function(t) {
		for(var e = 0, i = t.length; i > e; e++) {
			var n = t[e];
			this._positionItem(n.item, n.x, n.y, n.isInstant)
		}
	}, r.prototype._positionItem = function(t, e, i, n) {
		n ? t.goTo(e, i) : t.moveTo(e, i)
	}, r.prototype._postLayout = function() {
		var t = this._getContainerSize();
		t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, r.prototype._getContainerSize = g, r.prototype._setContainerMeasure = function(t, e) {
		if(void 0 !== t) {
			var i = this.size;
			i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, r.prototype._itemsOn = function(t, e, i) {
		function n() {
			return o++, o === r && i.call(s), !0
		}
		for(var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) {
			var p = t[a];
			p.on(e, n)
		}
	}, r.prototype.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, r.prototype.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, r.prototype.stamp = function(t) {
		if(t = this._find(t)) {
			this.stamps = this.stamps.concat(t);
			for(var e = 0, i = t.length; i > e; e++) {
				var n = t[e];
				this.ignore(n)
			}
		}
	}, r.prototype.unstamp = function(t) {
		if(t = this._find(t))
			for(var e = 0, i = t.length; i > e; e++) {
				var n = t[e],
					o = b(this.stamps, n); - 1 !== o && this.stamps.splice(o, 1), this.unignore(n)
			}
	}, r.prototype._find = function(t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
	}, r.prototype._manageStamps = function() {
		if(this.stamps && this.stamps.length) {
			this._getBoundingRect();
			for(var t = 0, e = this.stamps.length; e > t; t++) {
				var i = this.stamps[t];
				this._manageStamp(i)
			}
		}
	}, r.prototype._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, r.prototype._manageStamp = g, r.prototype._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			i = this._boundingRect,
			n = d(t),
			o = {
				left: e.left - i.left - n.marginLeft,
				top: e.top - i.top - n.marginTop,
				right: i.right - e.right - n.marginRight,
				bottom: i.bottom - e.bottom - n.marginBottom
			};
		return o
	}, r.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, r.prototype.bindResize = function() {
		this.isResizeBound || (f.bind(t, "resize", this), this.isResizeBound = !0)
	}, r.prototype.unbindResize = function() {
		f.unbind(t, "resize", this), this.isResizeBound = !1
	}, r.prototype.onresize = function() {
		function t() {
			e.resize()
		}
		this.resizeTimeout && clearTimeout(this.resizeTimeout);
		var e = this;
		this.resizeTimeout = setTimeout(t, 100)
	}, r.prototype.resize = function() {
		var t = d(this.element),
			e = this.size && t;
		e && t.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
	}, r.prototype.addItems = function(t) {
		var e = this._getItems(t);
		if(e.length) return this.items = this.items.concat(e), e
	}, r.prototype.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, r.prototype.prepended = function(t) {
		var e = this._getItems(t);
		if(e.length) {
			var i = this.items.slice(0);
			this.items = e.concat(i), this._resetLayout(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
		}
	}, r.prototype.reveal = function(t) {
		if(t && t.length)
			for(var e = 0, i = t.length; i > e; e++) {
				var n = t[e];
				n.reveal()
			}
	}, r.prototype.hide = function(t) {
		if(t && t.length)
			for(var e = 0, i = t.length; i > e; e++) {
				var n = t[e];
				n.hide()
			}
	}, r.prototype.getItem = function(t) {
		for(var e = 0, i = this.items.length; i > e; e++) {
			var n = this.items[e];
			if(n.element === t) return n
		}
	}, r.prototype.getItems = function(t) {
		if(t && t.length) {
			for(var e = [], i = 0, n = t.length; n > i; i++) {
				var o = t[i],
					r = this.getItem(o);
				r && e.push(r)
			}
			return e
		}
	}, r.prototype.remove = function(t) {
		t = n(t);
		var e = this.getItems(t);
		this._itemsOn(e, "remove", function() {
			this.emitEvent("removeComplete", [this, e])
		});
		for(var i = 0, o = e.length; o > i; i++) {
			var r = e[i];
			r.remove();
			var s = b(this.items, r);
			this.items.splice(s, 1)
		}
	}, r.prototype.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "";
		for(var e = 0, i = this.items.length; i > e; e++) {
			var n = this.items[e];
			n.destroy()
		}
		this.unbindResize(), delete this.element.outlayerGUID
	}, r.data = function(t) {
		var e = t && t.outlayerGUID;
		return e && E[e]
	}, r.create = function(t, i) {
		function n() {
			r.apply(this, arguments)
		}
		return e(n.prototype, r.prototype), s(n, "options"), s(n, "settings"), e(n.prototype.options, i), n.prototype.settings.namespace = t, n.data = r.data, n.Item = function() {
			h.apply(this, arguments)
		}, n.Item.prototype = new r.Item, n.prototype.settings.item = n.Item, p(function() {
			for(var e = o(t), i = l.querySelectorAll(".js-" + e), r = "data-" + e + "-options", s = 0, a = i.length; a > s; s++) {
				var h, p = i[s],
					u = p.getAttribute(r);
				try {
					h = u && JSON.parse(u)
				} catch(f) {
					m && m.error("Error parsing " + r + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
					continue
				}
				var d = new n(p, h);
				y && y.data(p, t, d)
			}
		}), y && y.bridget && y.bridget(t, n), n
	}, r.Item = h, t.Outlayer = r
}(window),
function(t) {
	"use strict";

	function e(t, e) {
		var n = t.create("masonry");
		return n.prototype._resetLayout = function() {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var t = this.cols;
			for(this.colYs = []; t--;) this.colYs.push(0);
			this.maxY = 0
		}, n.prototype.measureColumns = function() {
			var t = this.items[0].element;
			this.columnWidth = this.columnWidth || e(t).outerWidth, this.columnWidth += this.gutter, this.cols = Math.floor((this.size.innerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
		}, n.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = Math.ceil(t.size.outerWidth / this.columnWidth);
			e = Math.min(e, this.cols);
			for(var n = this._getColGroup(e), o = Math.min.apply(Math, n), r = i(n, o), s = {
					x: this.columnWidth * r,
					y: o
				}, a = o + t.size.outerHeight, h = this.cols + 1 - n.length, p = 0; h > p; p++) this.colYs[r + p] = a;
			return s
		}, n.prototype._getColGroup = function(t) {
			if(1 === t) return this.colYs;
			for(var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
				var o = this.colYs.slice(n, n + t);
				e[n] = Math.max.apply(Math, o)
			}
			return e
		}, n.prototype._manageStamp = function(t) {
			var i = e(t),
				n = this._getElementOffset(t),
				o = this.options.isOriginLeft ? n.left : n.right,
				r = o + i.outerWidth,
				s = Math.floor(o / this.columnWidth);
			s = Math.max(0, s);
			var a = Math.floor(r / this.columnWidth);
			a = Math.min(this.cols - 1, a);
			for(var h = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(h, this.colYs[p])
		}, n.prototype._getContainerSize = function() {
			return this.maxY = Math.max.apply(Math, this.colYs), {
				height: this.maxY
			}
		}, n
	}
	var i = Array.prototype.indexOf ? function(t, e) {
		return t.indexOf(e)
	} : function(t, e) {
		for(var i = 0, n = t.length; n > i; i++) {
			var o = t[i];
			if(o === e) return i
		}
		return -1
	};
	"function" == typeof define && define.amd ? define(["outlayer", "get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window);
(function($) {
	var defaults = {
			topSpacing: 0,
			bottomSpacing: 0,
			className: 'is-sticky',
			wrapperClassName: 'sticky-wrapper',
			center: false,
			getWidthFrom: ''
		},
		$window = $(window),
		$document = $(document),
		sticked = [],
		windowHeight = $window.height(),
		scroller = function() {
			var scrollTop = $window.scrollTop(),
				documentHeight = $document.height(),
				dwh = documentHeight - windowHeight,
				extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
			for(var i = 0; i < sticked.length; i++) {
				var s = sticked[i],
					elementTop = s.stickyWrapper.offset().top,
					etse = elementTop - s.topSpacing - extra;
				if(scrollTop <= etse) {
					if(s.currentTop !== null) {
						s.stickyElement.css('position', '').css('top', '');
						s.stickyElement.parent().removeClass(s.className);
						s.currentTop = null;
					}
				} else {
					var newTop = documentHeight - s.stickyElement.outerHeight() -
						s.topSpacing - s.bottomSpacing - scrollTop - extra;
					if(newTop < 0) {
						newTop = newTop + s.topSpacing;
					} else {
						newTop = s.topSpacing;
					}
					if(s.currentTop != newTop) {
						s.stickyElement.css('position', 'fixed').css('top', newTop);
						if(typeof s.getWidthFrom !== 'undefined') {
							s.stickyElement.css('width', $(s.getWidthFrom).width());
						}
						s.stickyElement.parent().addClass(s.className);
						s.currentTop = newTop;
					}
				}
			}
		},
		resizer = function() {
			windowHeight = $window.height();
		},
		methods = {
			init: function(options) {
				var o = $.extend(defaults, options);
				return this.each(function() {
					var stickyElement = $(this);
					var stickyId = stickyElement.attr('id');
					var wrapper = $('<div></div>').attr('id', stickyId + '-sticky-wrapper').addClass(o.wrapperClassName);
					stickyElement.wrapAll(wrapper);
					if(o.center) {
						stickyElement.parent().css({
							width: stickyElement.outerWidth(),
							marginLeft: "auto",
							marginRight: "auto"
						});
					}
					if(stickyElement.css("float") == "right") {
						stickyElement.css({
							"float": "none"
						}).parent().css({
							"float": "right"
						});
					}
					var stickyWrapper = stickyElement.parent();
					stickyWrapper.css('height', stickyElement.outerHeight());
					sticked.push({
						topSpacing: o.topSpacing,
						bottomSpacing: o.bottomSpacing,
						stickyElement: stickyElement,
						currentTop: null,
						stickyWrapper: stickyWrapper,
						className: o.className,
						getWidthFrom: o.getWidthFrom
					});
				});
			},
			update: scroller
		};
	if(window.addEventListener) {
		window.addEventListener('scroll', scroller, false);
		window.addEventListener('resize', resizer, false);
	} else if(window.attachEvent) {
		window.attachEvent('onscroll', scroller);
		window.attachEvent('onresize', resizer);
	}
	$.fn.sticky = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if(typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.sticky');
		}
	};
	$(function() {
		setTimeout(scroller, 0);
	});
})(jQuery);
(function($) {
	$.fn.appear = function(fn, options) {
		var settings = $.extend({
			data: undefined,
			one: true,
			accX: 0,
			accY: 0
		}, options);
		return this.each(function() {
			var t = $(this);
			t.appeared = false;
			if(!fn) {
				t.trigger('appear', settings.data);
				return;
			}
			var w = $(window);
			var check = function() {
				if(!t.is(':visible')) {
					t.appeared = false;
					return;
				}
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;
				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();
				if(y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
					if(!t.appeared) t.trigger('appear', settings.data);
				} else {
					t.appeared = false;
				}
			};
			var modifiedFn = function() {
				t.appeared = true;
				if(settings.one) {
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if(i >= 0) $.fn.appear.checks.splice(i, 1);
				}
				fn.apply(this, arguments);
			};
			if(settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);
			w.scroll(check);
			$.fn.appear.checks.push(check);
			(check)();
		});
	};
	$.extend($.fn.appear, {
		checks: [],
		timeout: null,
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if(length > 0)
				while(length--)($.fn.appear.checks[length])();
		},
		run: function() {
			if($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});
	$.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if(old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});
})(jQuery);
(function($) {
	$.fn.countTo = function(options) {
		options = options || {};
		return $(this).each(function() {
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from: $(this).data('from'),
				to: $(this).data('to'),
				speed: $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals: $(this).data('decimals'),
				prefix: $(this).data('prefix'),
				suffix: $(this).data('suffix'),
				withCommas: $(this).data('with-commas'),
				ordinal: $(this).data('ordinal')
			}, options);
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			$self.data('countTo', data);
			if(data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			render(value);

			function updateTimer() {
				value += increment;
				loopCount++;
				render(value);
				if(typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				if(loopCount >= loops) {
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					if(typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}

			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.text(formattedValue);
			}
		});
	};
	$.fn.countTo.defaults = {
		from: 0,
		to: 0,
		speed: 1000,
		refreshInterval: 100,
		decimals: 0,
		prefix: '',
		suffix: '',
		withCommas: false,
		ordinal: false,
		ordinalHandler: ordinalHandler,
		formatter: formatter,
		onUpdate: null,
		onComplete: null
	};

	function ordinalHandler(settings) {
		if(settings.ordinal !== false) {
			var s = ["th", "st", "nd", "rd"],
				v = settings.to % 100;
			return s[(v - 20) % 10] || s[v] || s[0];
		}
		return '';
	}

	function numberWithCommas(value, settings) {
		if(settings.withCommas !== false) {
			var parts = value.toString().split(".");
			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			return parts.join(".");
		}
		return value;
	}

	function formatter(value, settings) {
		return settings.prefix + numberWithCommas(value.toFixed(settings.decimals), settings) + settings.suffix + settings.ordinalHandler.call(self, settings);
	}
}(jQuery));
(function(e) {
	var z = !1,
		E = !1,
		L = 5E3,
		M = 2E3,
		y = 0,
		N = function() {
			var e = document.getElementsByTagName("script"),
				e = e[e.length - 1].src.split("?")[0];
			return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
		}(),
		H = ["ms", "moz", "webkit", "o"],
		v = window.requestAnimationFrame || !1,
		w = window.cancelAnimationFrame || !1;
	if(!v)
		for(var O in H) {
			var F = H[O];
			v || (v = window[F + "RequestAnimationFrame"]);
			w || (w = window[F + "CancelAnimationFrame"] || window[F + "CancelRequestAnimationFrame"])
		}
	var A = window.MutationObserver || window.WebKitMutationObserver || !1,
		I = {
			zindex: "auto",
			cursoropacitymin: 0,
			cursoropacitymax: 1,
			cursorcolor: "#424242",
			cursorwidth: "5px",
			cursorborder: "1px solid #fff",
			cursorborderradius: "5px",
			scrollspeed: 60,
			mousescrollstep: 24,
			touchbehavior: !1,
			hwacceleration: !0,
			usetransition: !0,
			boxzoom: !1,
			dblclickzoom: !0,
			gesturezoom: !0,
			grabcursorenabled: !0,
			autohidemode: !0,
			background: "",
			iframeautoresize: !0,
			cursorminheight: 32,
			preservenativescrolling: !0,
			railoffset: !1,
			bouncescroll: !0,
			spacebarenabled: !0,
			railpadding: {
				top: 0,
				right: 0,
				left: 0,
				bottom: 0
			},
			disableoutline: !0,
			horizrailenabled: !0,
			railalign: "right",
			railvalign: "bottom",
			enabletranslate3d: !0,
			enablemousewheel: !0,
			enablekeyboard: !0,
			smoothscroll: !0,
			sensitiverail: !0,
			enablemouselockapi: !0,
			cursorfixedheight: !1,
			directionlockdeadzone: 6,
			hidecursordelay: 400,
			nativeparentscrolling: !0,
			enablescrollonselection: !0,
			overflowx: !0,
			overflowy: !0,
			cursordragspeed: 0.3,
			rtlmode: !1,
			cursordragontouch: !1,
			oneaxismousemode: "auto"
		},
		G = !1,
		P = function() {
			if(G) return G;
			var e = document.createElement("DIV"),
				c = {
					haspointerlock: "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document
				};
			c.isopera = "opera" in window;
			c.isopera12 = c.isopera && "getUserMedia" in navigator;
			c.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
			c.isie = "all" in document && "attachEvent" in e && !c.isopera;
			c.isieold = c.isie && !("msInterpolationMode" in e.style);
			c.isie7 = c.isie && !c.isieold && (!("documentMode" in document) || 7 == document.documentMode);
			c.isie8 = c.isie && "documentMode" in document && 8 == document.documentMode;
			c.isie9 = c.isie && "performance" in window && 9 <= document.documentMode;
			c.isie10 = c.isie && "performance" in window && 10 <= document.documentMode;
			c.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
			c.isie9mobile && (c.isie9 = !1);
			c.isie7mobile = !c.isie9mobile && c.isie7 && /iemobile/i.test(navigator.userAgent);
			c.ismozilla = "MozAppearance" in e.style;
			c.iswebkit = "WebkitAppearance" in e.style;
			c.ischrome = "chrome" in window;
			c.ischrome22 = c.ischrome && c.haspointerlock;
			c.ischrome26 = c.ischrome && "transition" in e.style;
			c.cantouch = "ontouchstart" in
				document.documentElement || "ontouchstart" in window;
			c.hasmstouch = window.navigator.msPointerEnabled || !1;
			c.ismac = /^mac$/i.test(navigator.platform);
			c.isios = c.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
			c.isios4 = c.isios && !("seal" in Object);
			c.isandroid = /android/i.test(navigator.userAgent);
			c.trstyle = !1;
			c.hastransform = !1;
			c.hastranslate3d = !1;
			c.transitionstyle = !1;
			c.hastransition = !1;
			c.transitionend = !1;
			for(var h = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"], l = 0; l < h.length; l++)
				if("undefined" != typeof e.style[h[l]]) {
					c.trstyle = h[l];
					break
				}
			c.hastransform = !1 != c.trstyle;
			c.hastransform && (e.style[c.trstyle] = "translate3d(1px,2px,3px)", c.hastranslate3d = /translate3d/.test(e.style[c.trstyle]));
			c.transitionstyle = !1;
			c.prefixstyle = "";
			c.transitionend = !1;
			for(var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), q = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "), t = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), l = 0; l < h.length; l++)
				if(h[l] in e.style) {
					c.transitionstyle = h[l];
					c.prefixstyle = q[l];
					c.transitionend = t[l];
					break
				}
			c.ischrome26 && (c.prefixstyle = q[1]);
			c.hastransition = c.transitionstyle;
			a: {
				h = ["-moz-grab", "-webkit-grab", "grab"];
				if(c.ischrome && !c.ischrome22 || c.isie) h = [];
				for(l = 0; l < h.length; l++)
					if(q = h[l], e.style.cursor = q, e.style.cursor == q) {
						h = q;
						break a
					}
				h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
			}
			c.cursorgrabvalue = h;
			c.hasmousecapture = "setCapture" in e;
			c.hasMutationObserver = !1 !== A;
			return G = c
		},
		Q = function(k, c) {
			function h() {
				var d = b.win;
				if("zIndex" in d) return d.zIndex();
				for(; 0 < d.length && 9 != d[0].nodeType;) {
					var c = d.css("zIndex");
					if(!isNaN(c) && 0 != c) return parseInt(c);
					d = d.parent()
				}
				return !1
			}

			function l(d, c, g) {
				c = d.css(c);
				d = parseFloat(c);
				return isNaN(d) ? (d = u[c] || 0, g = 3 == d ? g ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && d && (d += 1), g ? d : 0) : d
			}

			function q(d, c, g, f) {
				b._bind(d, c, function(b) {
					b = b ? b : window.event;
					var f = {
						original: b,
						target: b.target || b.srcElement,
						type: "wheel",
						deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
						deltaX: 0,
						deltaZ: 0,
						preventDefault: function() {
							b.preventDefault ? b.preventDefault() : b.returnValue = !1;
							return !1
						},
						stopImmediatePropagation: function() {
							b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.cancelBubble = !0
						}
					};
					"mousewheel" == c ? (f.deltaY = -0.025 * b.wheelDelta, b.wheelDeltaX && (f.deltaX = -0.025 * b.wheelDeltaX)) : f.deltaY = b.detail;
					return g.call(d, f)
				}, f)
			}

			function t(d, c, g) {
				var f, e;
				0 == d.deltaMode ? (f = -Math.floor(d.deltaX * (b.opt.mousescrollstep / 54)), e = -Math.floor(d.deltaY * (b.opt.mousescrollstep / 54))) : 1 == d.deltaMode && (f = -Math.floor(d.deltaX * b.opt.mousescrollstep), e = -Math.floor(d.deltaY * b.opt.mousescrollstep));
				c && (b.opt.oneaxismousemode && 0 == f && e) && (f = e, e = 0);
				f && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += f, b.debounced("mousewheelx", function() {
					var d = b.lastdeltax;
					b.lastdeltax = 0;
					b.rail.drag || b.doScrollLeftBy(d)
				}, 120));
				if(e) {
					if(b.opt.nativeparentscrolling && g && !b.ispage && !b.zoomactive)
						if(0 > e) {
							if(b.getScrollTop() >= b.page.maxh) return !0
						} else if(0 >= b.getScrollTop()) return !0;
					b.scrollmom && b.scrollmom.stop();
					b.lastdeltay += e;
					b.debounced("mousewheely", function() {
						var d = b.lastdeltay;
						b.lastdeltay = 0;
						b.rail.drag || b.doScrollBy(d)
					}, 120)
				}
				d.stopImmediatePropagation();
				return d.preventDefault()
			}
			var b = this;
			this.version = "3.5.1";
			this.name = "nicescroll";
			this.me = c;
			this.opt = {
				doc: e("body"),
				win: !1
			};
			e.extend(this.opt, I);
			this.opt.snapbackspeed = 80;
			if(k)
				for(var p in b.opt) "undefined" != typeof k[p] && (b.opt[p] = k[p]);
			this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
			this.ispage = /BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName);
			this.haswrapper = !1 !== b.opt.win;
			this.win = b.opt.win || (this.ispage ? e(window) : this.doc);
			this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
			this.body = e("body");
			this.iframe = this.isfixed = this.viewport = !1;
			this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
			this.istextarea = "TEXTAREA" == this.win[0].nodeName;
			this.forcescreen = !1;
			this.canshowonmouseevent = "scroll" != b.opt.autohidemode;
			this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
			this.scroll = {
				x: 0,
				y: 0
			};
			this.scrollratio = {
				x: 0,
				y: 0
			};
			this.cursorheight = 20;
			this.scrollvaluemax = 0;
			this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.checkrtlmode = !1;
			do this.id = "ascrail" + M++; while (document.getElementById(this.id));
			this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
			this.visibility = !0;
			this.hidden = this.locked = !1;
			this.cursoractive = !0;
			this.overflowx = b.opt.overflowx;
			this.overflowy = b.opt.overflowy;
			this.nativescrollingarea = !1;
			this.checkarea = 0;
			this.events = [];
			this.saved = {};
			this.delaylist = {};
			this.synclist = {};
			this.lastdeltay = this.lastdeltax = 0;
			this.detected = P();
			var f = e.extend({}, this.detected);
			this.ishwscroll = (this.canhwscroll = f.hastransform && b.opt.hwacceleration) && b.haswrapper;
			this.istouchcapable = !1;
			f.cantouch && (f.ischrome && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1);
			f.cantouch && (f.ismozilla && !f.isios && !f.isandroid) && (this.istouchcapable = !0, f.cantouch = !1);
			b.opt.enablemouselockapi || (f.hasmousecapture = !1, f.haspointerlock = !1);
			this.delayed = function(d, c, g, f) {
				var e = b.delaylist[d],
					h = (new Date).getTime();
				if(!f && e && e.tt) return !1;
				e && e.tt && clearTimeout(e.tt);
				if(e && e.last + g > h && !e.tt) b.delaylist[d] = {
					last: h + g,
					tt: setTimeout(function() {
						b.delaylist[d].tt = 0;
						c.call()
					}, g)
				};
				else if(!e || !e.tt) b.delaylist[d] = {
					last: h,
					tt: 0
				}, setTimeout(function() {
					c.call()
				}, 0)
			};
			this.debounced = function(d, c, g) {
				var f = b.delaylist[d];
				(new Date).getTime();
				b.delaylist[d] = c;
				f || setTimeout(function() {
					var c = b.delaylist[d];
					b.delaylist[d] = !1;
					c.call()
				}, g)
			};
			this.synched = function(d, c) {
				b.synclist[d] = c;
				(function() {
					b.onsync || (v(function() {
						b.onsync = !1;
						for(d in b.synclist) {
							var c = b.synclist[d];
							c && c.call(b);
							b.synclist[d] = !1
						}
					}), b.onsync = !0)
				})();
				return d
			};
			this.unsynched = function(d) {
				b.synclist[d] && (b.synclist[d] = !1)
			};
			this.css = function(d, c) {
				for(var g in c) b.saved.css.push([d, g, d.css(g)]), d.css(g, c[g])
			};
			this.scrollTop = function(d) {
				return "undefined" == typeof d ? b.getScrollTop() : b.setScrollTop(d)
			};
			this.scrollLeft = function(d) {
				return "undefined" == typeof d ? b.getScrollLeft() : b.setScrollLeft(d)
			};
			BezierClass = function(b, c, g, f, e, h, l) {
				this.st = b;
				this.ed = c;
				this.spd = g;
				this.p1 = f || 0;
				this.p2 = e || 1;
				this.p3 = h || 0;
				this.p4 = l || 1;
				this.ts = (new Date).getTime();
				this.df = this.ed - this.st
			};
			BezierClass.prototype = {
				B2: function(b) {
					return 3 * b * b * (1 - b)
				},
				B3: function(b) {
					return 3 * b * (1 - b) * (1 - b)
				},
				B4: function(b) {
					return(1 - b) * (1 - b) * (1 - b)
				},
				getNow: function() {
					var b = 1 - ((new Date).getTime() - this.ts) / this.spd,
						c = this.B2(b) + this.B3(b) + this.B4(b);
					return 0 > b ? this.ed : this.st + Math.round(this.df * c)
				},
				update: function(b, c) {
					this.st = this.getNow();
					this.ed = b;
					this.spd = c;
					this.ts = (new Date).getTime();
					this.df = this.ed - this.st;
					return this
				}
			};
			if(this.ishwscroll) {
				this.doc.translate = {
					x: 0,
					y: 0,
					tx: "0px",
					ty: "0px"
				};
				f.hastranslate3d && f.isios && this.doc.css("-webkit-backface-visibility", "hidden");
				var s = function() {
					var d = b.doc.css(f.trstyle);
					return d && "matrix" == d.substr(0, 6) ? d.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
				};
				this.getScrollTop = function(d) {
					if(!d) {
						if(d = s()) return 16 == d.length ? -d[13] : -d[5];
						if(b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow()
					}
					return b.doc.translate.y
				};
				this.getScrollLeft = function(d) {
					if(!d) {
						if(d = s()) return 16 == d.length ? -d[12] : -d[4];
						if(b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow()
					}
					return b.doc.translate.x
				};
				this.notifyScrollEvent = document.createEvent ? function(b) {
					var c = document.createEvent("UIEvents");
					c.initUIEvent("scroll", !1, !0, window, 1);
					b.dispatchEvent(c)
				} : document.fireEvent ? function(b) {
					var c = document.createEventObject();
					b.fireEvent("onscroll");
					c.cancelBubble = !0
				} : function(b, c) {};
				f.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function(d, c) {
					b.doc.translate.y = d;
					b.doc.translate.ty = -1 * d + "px";
					b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
					c || b.notifyScrollEvent(b.win[0])
				}, this.setScrollLeft = function(d, c) {
					b.doc.translate.x = d;
					b.doc.translate.tx = -1 * d + "px";
					b.doc.css(f.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)");
					c || b.notifyScrollEvent(b.win[0])
				}) : (this.setScrollTop = function(d, c) {
					b.doc.translate.y = d;
					b.doc.translate.ty = -1 * d + "px";
					b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
					c || b.notifyScrollEvent(b.win[0])
				}, this.setScrollLeft = function(d, c) {
					b.doc.translate.x = d;
					b.doc.translate.tx = -1 * d + "px";
					b.doc.css(f.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")");
					c || b.notifyScrollEvent(b.win[0])
				})
			} else this.getScrollTop = function() {
				return b.docscroll.scrollTop()
			}, this.setScrollTop = function(d) {
				return b.docscroll.scrollTop(d)
			}, this.getScrollLeft = function() {
				return b.docscroll.scrollLeft()
			}, this.setScrollLeft = function(d) {
				return b.docscroll.scrollLeft(d)
			};
			this.getTarget = function(b) {
				return !b ? !1 : b.target ? b.target : b.srcElement ? b.srcElement : !1
			};
			this.hasParent = function(b, c) {
				if(!b) return !1;
				for(var g = b.target || b.srcElement || b || !1; g && g.id != c;) g = g.parentNode || !1;
				return !1 !== g
			};
			var u = {
				thin: 1,
				medium: 3,
				thick: 5
			};
			this.getOffset = function() {
				if(b.isfixed) return {
					top: parseFloat(b.win.css("top")),
					left: parseFloat(b.win.css("left"))
				};
				if(!b.viewport) return b.win.offset();
				var d = b.win.offset(),
					c = b.viewport.offset();
				return {
					top: d.top - c.top + b.viewport.scrollTop(),
					left: d.left - c.left + b.viewport.scrollLeft()
				}
			};
			this.updateScrollBar = function(d) {
				if(b.ishwscroll) b.rail.css({
					height: b.win.innerHeight()
				}), b.railh && b.railh.css({
					width: b.win.innerWidth()
				});
				else {
					var c = b.getOffset(),
						g = c.top,
						f = c.left,
						g = g + l(b.win, "border-top-width", !0);
					b.win.outerWidth();
					b.win.innerWidth();
					var f = f + (b.rail.align ? b.win.outerWidth() -
							l(b.win, "border-right-width") - b.rail.width : l(b.win, "border-left-width")),
						e = b.opt.railoffset;
					e && (e.top && (g += e.top), b.rail.align && e.left && (f += e.left));
					b.locked || b.rail.css({
						top: g,
						left: f,
						height: d ? d.h : b.win.innerHeight()
					});
					b.zoom && b.zoom.css({
						top: g + 1,
						left: 1 == b.rail.align ? f - 20 : f + b.rail.width + 4
					});
					b.railh && !b.locked && (g = c.top, f = c.left, d = b.railh.align ? g + l(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : g + l(b.win, "border-top-width", !0), f += l(b.win, "border-left-width"), b.railh.css({
						top: d,
						left: f,
						width: b.railh.width
					}))
				}
			};
			this.doRailClick = function(d, c, g) {
				var f;
				b.locked || (b.cancelEvent(d), c ? (c = g ? b.doScrollLeft : b.doScrollTop, f = g ? (d.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (d.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, c(f)) : (c = g ? b.doScrollLeftBy : b.doScrollBy, f = g ? b.scroll.x : b.scroll.y, d = g ? d.pageX - b.railh.offset().left : d.pageY - b.rail.offset().top, g = g ? b.view.w : b.view.h, f >= d ? c(g) : c(-g)))
			};
			b.hasanimationframe = v;
			b.hascancelanimationframe = w;
			b.hasanimationframe ? b.hascancelanimationframe || (w = function() {
				b.cancelAnimationFrame = !0
			}) : (v = function(b) {
				return setTimeout(b, 15 - Math.floor(+new Date / 1E3) % 16)
			}, w = clearInterval);
			this.init = function() {
				b.saved.css = [];
				if(f.isie7mobile || f.isoperamini) return !0;
				f.hasmstouch && b.css(b.ispage ? e("html") : b.win, {
					"-ms-touch-action": "none"
				});
				b.zindex = "auto";
				b.zindex = !b.ispage && "auto" == b.opt.zindex ? h() || "auto" : b.opt.zindex;
				!b.ispage && "auto" != b.zindex && b.zindex > y && (y = b.zindex);
				b.isie && (0 == b.zindex && "auto" == b.opt.zindex) && (b.zindex = "auto");
				if(!b.ispage || !f.cantouch && !f.isieold && !f.isie9mobile) {
					var d = b.docscroll;
					b.ispage && (d = b.haswrapper ? b.win : b.doc);
					f.isie9mobile || b.css(d, {
						"overflow-y": "hidden"
					});
					b.ispage && f.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {
						"overflow-y": "hidden"
					}) : "HTML" == b.doc[0].nodeName && b.css(e("body"), {
						"overflow-y": "hidden"
					}));
					f.isios && (!b.ispage && !b.haswrapper) && b.css(e("body"), {
						"-webkit-overflow-scrolling": "touch"
					});
					var c = e(document.createElement("div"));
					c.css({
						position: "relative",
						top: 0,
						"float": "right",
						width: b.opt.cursorwidth,
						height: "0px",
						"background-color": b.opt.cursorcolor,
						border: b.opt.cursorborder,
						"background-clip": "padding-box",
						"-webkit-border-radius": b.opt.cursorborderradius,
						"-moz-border-radius": b.opt.cursorborderradius,
						"border-radius": b.opt.cursorborderradius
					});
					c.hborder = parseFloat(c.outerHeight() - c.innerHeight());
					b.cursor = c;
					var g = e(document.createElement("div"));
					g.attr("id", b.id);
					g.addClass("nicescroll-rails");
					var l, k, x = ["left", "right"],
						q;
					for(q in x) k = x[q], (l = b.opt.railpadding[k]) ? g.css("padding-" + k, l + "px") : b.opt.railpadding[k] = 0;
					g.append(c);
					g.width = Math.max(parseFloat(b.opt.cursorwidth), c.outerWidth()) + b.opt.railpadding.left + b.opt.railpadding.right;
					g.css({
						width: g.width + "px",
						zIndex: b.zindex,
						background: b.opt.background,
						cursor: "default"
					});
					g.visibility = !0;
					g.scrollable = !0;
					g.align = "left" == b.opt.railalign ? 0 : 1;
					b.rail = g;
					c = b.rail.drag = !1;
					b.opt.boxzoom && (!b.ispage && !f.isieold) && (c = document.createElement("div"), b.bind(c, "click", b.doZoom), b.zoom = e(c), b.zoom.css({
						cursor: "pointer",
						"z-index": b.zindex,
						backgroundImage: "url(" + N + "zoomico.png)",
						height: 18,
						width: 18,
						backgroundPosition: "0px 0px"
					}), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), f.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function(d) {
						1.5 < d.scale && b.doZoomIn(d);
						0.8 > d.scale && b.doZoomOut(d);
						return b.cancelEvent(d)
					}, b.bind(b.win, "gestureend", b.ongesturezoom)));
					b.railh = !1;
					if(b.opt.horizrailenabled) {
						b.css(d, {
							"overflow-x": "hidden"
						});
						c = e(document.createElement("div"));
						c.css({
							position: "relative",
							top: 0,
							height: b.opt.cursorwidth,
							width: "0px",
							"background-color": b.opt.cursorcolor,
							border: b.opt.cursorborder,
							"background-clip": "padding-box",
							"-webkit-border-radius": b.opt.cursorborderradius,
							"-moz-border-radius": b.opt.cursorborderradius,
							"border-radius": b.opt.cursorborderradius
						});
						c.wborder = parseFloat(c.outerWidth() - c.innerWidth());
						b.cursorh = c;
						var m = e(document.createElement("div"));
						m.attr("id", b.id + "-hr");
						m.addClass("nicescroll-rails");
						m.height = Math.max(parseFloat(b.opt.cursorwidth), c.outerHeight());
						m.css({
							height: m.height + "px",
							zIndex: b.zindex,
							background: b.opt.background
						});
						m.append(c);
						m.visibility = !0;
						m.scrollable = !0;
						m.align = "top" == b.opt.railvalign ? 0 : 1;
						b.railh = m;
						b.railh.drag = !1
					}
					b.ispage ? (g.css({
						position: "fixed",
						top: "0px",
						height: "100%"
					}), g.align ? g.css({
						right: "0px"
					}) : g.css({
						left: "0px"
					}), b.body.append(g), b.railh && (m.css({
						position: "fixed",
						left: "0px",
						width: "100%"
					}), m.align ? m.css({
						bottom: "0px"
					}) : m.css({
						top: "0px"
					}), b.body.append(m))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {
						position: "relative"
					}), d = "HTML" == b.win[0].nodeName ? b.body : b.win, b.zoom && (b.zoom.css({
						position: "absolute",
						top: 1,
						right: 0,
						"margin-right": g.width + 4
					}), d.append(b.zoom)), g.css({
						position: "absolute",
						top: 0
					}), g.align ? g.css({
						right: 0
					}) : g.css({
						left: 0
					}), d.append(g), m && (m.css({
						position: "absolute",
						left: 0,
						bottom: 0
					}), m.align ? m.css({
						bottom: 0
					}) : m.css({
						top: 0
					}), d.append(m))) : (b.isfixed = "fixed" == b.win.css("position"), d = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, !1 == /fixed|relative|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {
						position: "relative"
					})), g.css({
						position: d
					}), b.zoom && b.zoom.css({
						position: d
					}), b.updateScrollBar(), b.body.append(g), b.zoom && b.body.append(b.zoom), b.railh && (m.css({
						position: d
					}), b.body.append(m))), f.isios && b.css(b.win, {
						"-webkit-tap-highlight-color": "rgba(0,0,0,0)",
						"-webkit-touch-callout": "none"
					}), f.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), f.iswebkit && b.opt.disableoutline && b.win.css({
						outline: "none"
					}));
					!1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({
						opacity: b.opt.cursoropacitymax
					}), b.railh && b.railh.css({
						opacity: b.opt.cursoropacitymax
					})) : !0 === b.opt.autohidemode || "leave" === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && f.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.locked = !1);
					if(f.isie9mobile) b.scrollmom = new J(b), b.onmangotouch = function(d) {
						d = b.getScrollTop();
						var c = b.getScrollLeft();
						if(d == b.scrollmom.lastscrolly && c == b.scrollmom.lastscrollx) return !0;
						var g = d - b.mangotouch.sy,
							f = c - b.mangotouch.sx;
						if(0 != Math.round(Math.sqrt(Math.pow(f, 2) + Math.pow(g, 2)))) {
							var n = 0 > g ? -1 : 1,
								e = 0 > f ? -1 : 1,
								h = +new Date;
							b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy);
							80 < h - b.mangotouch.tm || b.mangotouch.dry != n || b.mangotouch.drx != e ? (b.scrollmom.stop(), b.scrollmom.reset(c, d), b.mangotouch.sy = d, b.mangotouch.ly = d, b.mangotouch.sx = c, b.mangotouch.lx = c, b.mangotouch.dry = n, b.mangotouch.drx = e, b.mangotouch.tm = h) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - f, b.mangotouch.sy - g), b.mangotouch.tm = h, g = Math.max(Math.abs(b.mangotouch.ly - d), Math.abs(b.mangotouch.lx - c)), b.mangotouch.ly = d, b.mangotouch.lx = c, 2 < g && (b.mangotouch.lazy = setTimeout(function() {
								b.mangotouch.lazy = !1;
								b.mangotouch.dry = 0;
								b.mangotouch.drx = 0;
								b.mangotouch.tm = 0;
								b.scrollmom.doMomentum(30)
							}, 100)))
						}
					}, g = b.getScrollTop(), m = b.getScrollLeft(), b.mangotouch = {
						sy: g,
						ly: g,
						dry: 0,
						sx: m,
						lx: m,
						drx: 0,
						lazy: !1,
						tm: 0
					}, b.bind(b.docscroll, "scroll", b.onmangotouch);
					else {
						if(f.cantouch || b.istouchcapable || b.opt.touchbehavior || f.hasmstouch) {
							b.scrollmom = new J(b);
							b.ontouchstart = function(d) {
								if(d.pointerType && 2 != d.pointerType) return !1;
								b.hasmoving = !1;
								if(!b.locked) {
									if(f.hasmstouch)
										for(var c = d.target ? d.target : !1; c;) {
											var g = e(c).getNiceScroll();
											if(0 < g.length && g[0].me == b.me) break;
											if(0 < g.length) return !1;
											if("DIV" == c.nodeName && c.id == b.id) break;
											c = c.parentNode ? c.parentNode : !1
										}
									b.cancelScroll();
									if((c = b.getTarget(d)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return b.stopPropagation(d);
									!("clientX" in d) && "changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
									b.forcescreen && (g = d, d = {
										original: d.original ? d.original : d
									}, d.clientX = g.screenX, d.clientY = g.screenY);
									b.rail.drag = {
										x: d.clientX,
										y: d.clientY,
										sx: b.scroll.x,
										sy: b.scroll.y,
										st: b.getScrollTop(),
										sl: b.getScrollLeft(),
										pt: 2,
										dl: !1
									};
									if(b.ispage || !b.opt.directionlockdeadzone) b.rail.drag.dl = "f";
									else {
										var g = e(window).width(),
											n = e(window).height(),
											h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
											l = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
											n = Math.max(0, l - n),
											g = Math.max(0, h - g);
										b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? 0 < n ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable ? 0 < g ? "h" : !1 : !1;
										b.rail.drag.ck || (b.rail.drag.dl = "f")
									}
									b.opt.touchbehavior && (b.isiframe && f.isie) && (g = b.win.position(), b.rail.drag.x += g.left, b.rail.drag.y += g.top);
									b.hasmoving = !1;
									b.lastmouseup = !1;
									b.scrollmom.reset(d.clientX, d.clientY);
									if(!f.cantouch && !this.istouchcapable && !f.hasmstouch) {
										if(!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !b.ispage && f.hasmousecapture && c.setCapture(), b.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function(d) {
											if(b.hasmoving) return !1;
											c._onclick.call(this, d)
										}), b.cancelEvent(d)) : b.stopPropagation(d);
										/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type")) && (pc = {
											tg: c,
											click: !1
										}, b.preventclick = pc)
									}
								}
							};
							b.ontouchend = function(d) {
								if(d.pointerType && 2 != d.pointerType) return !1;
								if(b.rail.drag && 2 == b.rail.drag.pt && (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.lastmouseup = !0, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), !f.cantouch))) return b.cancelEvent(d)
							};
							var t = b.opt.touchbehavior && b.isiframe && !f.hasmousecapture;
							b.ontouchmove = function(d, c) {
								if(d.pointerType && 2 != d.pointerType) return !1;
								if(b.rail.drag && 2 == b.rail.drag.pt) {
									if(f.cantouch && "undefined" == typeof d.original) return !0;
									b.hasmoving = !0;
									b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick);
									d = e.extend({
										original: d
									}, d);
									"changedTouches" in d && (d.clientX = d.changedTouches[0].clientX, d.clientY = d.changedTouches[0].clientY);
									if(b.forcescreen) {
										var g = d;
										d = {
											original: d.original ? d.original : d
										};
										d.clientX = g.screenX;
										d.clientY = g.screenY
									}
									g = ofy = 0;
									if(t && !c) {
										var n = b.win.position(),
											g = -n.left;
										ofy = -n.top
									}
									var h = d.clientY + ofy,
										n = h - b.rail.drag.y,
										l = d.clientX + g,
										k = l - b.rail.drag.x,
										r = b.rail.drag.st - n;
									b.ishwscroll && b.opt.bouncescroll ? 0 > r ? r = Math.round(r / 2) : r > b.page.maxh && (r = b.page.maxh + Math.round((r - b.page.maxh) / 2)) : (0 > r && (h = r = 0), r > b.page.maxh && (r = b.page.maxh, h = 0));
									if(b.railh && b.railh.scrollable) {
										var m = b.rail.drag.sl - k;
										b.ishwscroll && b.opt.bouncescroll ? 0 > m ? m = Math.round(m / 2) : m > b.page.maxw && (m = b.page.maxw + Math.round((m - b.page.maxw) / 2)) : (0 > m && (l = m = 0), m > b.page.maxw && (m = b.page.maxw, l = 0))
									}
									g = !1;
									if(b.rail.drag.dl) g = !0, "v" == b.rail.drag.dl ? m = b.rail.drag.sl : "h" == b.rail.drag.dl && (r = b.rail.drag.st);
									else {
										var n = Math.abs(n),
											k = Math.abs(k),
											x = b.opt.directionlockdeadzone;
										if("v" == b.rail.drag.ck) {
											if(n > x && k <= 0.3 * n) return b.rail.drag = !1, !0;
											k > x && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
										} else if("h" == b.rail.drag.ck) {
											if(k > x && n <= 0.3 * k) return b.rail.drag = !1, !0;
											n > x && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
										}
									}
									b.synched("touchmove", function() {
										b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(r), b.scrollmom.update(l, h), b.railh && b.railh.scrollable ? (b.setScrollLeft(m), b.showCursor(r, m)) : b.showCursor(r), f.isie10 && document.selection.clear())
									});
									f.ischrome && b.istouchcapable && (g = !1);
									if(g) return b.cancelEvent(d)
								}
							}
						}
						b.onmousedown = function(d, c) {
							if(!(b.rail.drag && 1 != b.rail.drag.pt)) {
								if(b.locked) return b.cancelEvent(d);
								b.cancelScroll();
								b.rail.drag = {
									x: d.clientX,
									y: d.clientY,
									sx: b.scroll.x,
									sy: b.scroll.y,
									pt: 1,
									hr: !!c
								};
								var g = b.getTarget(d);
								!b.ispage && f.hasmousecapture && g.setCapture();
								b.isiframe && !f.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {
									"pointer-events": "none"
								}));
								return b.cancelEvent(d)
							}
						};
						b.onmouseup = function(d) {
							if(b.rail.drag && (f.hasmousecapture && document.releaseCapture(), b.isiframe && !f.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 1 == b.rail.drag.pt)) return b.rail.drag = !1, b.cancelEvent(d)
						};
						b.onmousemove = function(d) {
							if(b.rail.drag && 1 == b.rail.drag.pt) {
								if(f.ischrome && 0 == d.which) return b.onmouseup(d);
								b.cursorfreezed = !0;
								if(b.rail.drag.hr) {
									b.scroll.x = b.rail.drag.sx + (d.clientX -
										b.rail.drag.x);
									0 > b.scroll.x && (b.scroll.x = 0);
									var c = b.scrollvaluemaxw;
									b.scroll.x > c && (b.scroll.x = c)
								} else b.scroll.y = b.rail.drag.sy + (d.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), c = b.scrollvaluemax, b.scroll.y > c && (b.scroll.y = c);
								b.synched("mousemove", function() {
									b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
								});
								return b.cancelEvent(d)
							}
						};
						if(f.cantouch || b.opt.touchbehavior) b.onpreventclick = function(d) {
							if(b.preventclick) return b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(d)
						}, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = f.isios ? !1 : function(d) {
							return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(d)) : !0
						}, b.opt.grabcursorenabled && f.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {
							cursor: f.cursorgrabvalue
						}), b.css(b.rail, {
							cursor: f.cursorgrabvalue
						}));
						else {
							var p = function(d) {
								if(b.selectiondrag) {
									if(d) {
										var c = b.win.outerHeight();
										d = d.pageY - b.selectiondrag.top;
										0 < d && d < c && (d = 0);
										d >= c && (d -= c);
										b.selectiondrag.df = d
									}
									0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function() {
										p()
									}, 50))
								}
							};
							b.hasTextSelected = "getSelection" in document ? function() {
								return 0 < document.getSelection().rangeCount
							} : "selection" in document ? function() {
								return "None" != document.selection.type
							} : function() {
								return !1
							};
							b.onselectionstart = function(d) {
								b.ispage || (b.selectiondrag = b.win.offset())
							};
							b.onselectionend = function(d) {
								b.selectiondrag = !1
							};
							b.onselectiondrag = function(d) {
								b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function() {
									p(d)
								}, 250)
							}
						}
						f.hasmstouch && (b.css(b.rail, {
							"-ms-touch-action": "none"
						}), b.css(b.cursor, {
							"-ms-touch-action": "none"
						}), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function(b) {
							b.preventDefault()
						}), b.bind(b.cursor, "contextmenu", function(b) {
							b.preventDefault()
						}));
						this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove));
						b.bind(b.cursor, "mousedown", b.onmousedown);
						b.bind(b.cursor, "mouseup", b.onmouseup);
						b.railh && (b.bind(b.cursorh, "mousedown", function(d) {
							b.onmousedown(d, !0)
						}), b.bind(b.cursorh, "mouseup", function(d) {
							if(!(b.rail.drag && 2 == b.rail.drag.pt)) return b.rail.drag = !1, b.hasmoving = !1, b.hideCursor(), f.hasmousecapture && document.releaseCapture(), b.cancelEvent(d)
						}));
						if(b.opt.cursordragontouch || !f.cantouch && !b.opt.touchbehavior) b.rail.css({
							cursor: "default"
						}), b.railh && b.railh.css({
							cursor: "default"
						}), b.jqbind(b.rail, "mouseenter", function() {
							b.canshowonmouseevent && b.showCursor();
							b.rail.active = !0
						}), b.jqbind(b.rail, "mouseleave", function() {
							b.rail.active = !1;
							b.rail.drag || b.hideCursor()
						}), b.opt.sensitiverail && (b.bind(b.rail, "click", function(d) {
							b.doRailClick(d, !1, !1)
						}), b.bind(b.rail, "dblclick", function(d) {
							b.doRailClick(d, !0, !1)
						}), b.bind(b.cursor, "click", function(d) {
							b.cancelEvent(d)
						}), b.bind(b.cursor, "dblclick", function(d) {
							b.cancelEvent(d)
						})), b.railh && (b.jqbind(b.railh, "mouseenter", function() {
							b.canshowonmouseevent && b.showCursor();
							b.rail.active = !0
						}), b.jqbind(b.railh, "mouseleave", function() {
							b.rail.active = !1;
							b.rail.drag || b.hideCursor()
						}), b.opt.sensitiverail && (b.bind(b.railh, "click", function(d) {
							b.doRailClick(d, !1, !0)
						}), b.bind(b.railh, "dblclick", function(d) {
							b.doRailClick(d, !0, !0)
						}), b.bind(b.cursorh, "click", function(d) {
							b.cancelEvent(d)
						}), b.bind(b.cursorh, "dblclick", function(d) {
							b.cancelEvent(d)
						})));
						!f.cantouch && !b.opt.touchbehavior ? (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function() {
							b.canshowonmouseevent && b.showCursor();
							b.rail.active = !0
						}), b.jqbind(b.zoom, "mouseleave", function() {
							b.rail.active = !1;
							b.rail.drag || b.hideCursor()
						}))) : (b.bind(f.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch && (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mousemove", b.onmousemove), b.cursorh && b.bind(b.cursorh, "mousedown", function(d) {
							b.onmousedown(d, !0)
						}), b.cursorh && b.bind(b.cursorh, "mousemove", b.onmousemove)));
						b.opt.enablemousewheel && (b.isiframe || b.bind(f.isie && b.ispage ? document : b.win, "mousewheel", b.onmousewheel), b.bind(b.rail, "mousewheel", b.onmousewheel), b.railh && b.bind(b.railh, "mousewheel", b.onmousewheelhr));
						!b.ispage && (!f.cantouch && !/HTML|BODY/.test(b.win[0].nodeName)) && (b.win.attr("tabindex") || b.win.attr({
							tabindex: L++
						}), b.jqbind(b.win, "focus", function(d) {
							z = b.getTarget(d).id || !0;
							b.hasfocus = !0;
							b.canshowonmouseevent && b.noticeCursor()
						}), b.jqbind(b.win, "blur", function(d) {
							z = !1;
							b.hasfocus = !1
						}), b.jqbind(b.win, "mouseenter", function(d) {
							E = b.getTarget(d).id || !0;
							b.hasmousefocus = !0;
							b.canshowonmouseevent && b.noticeCursor()
						}), b.jqbind(b.win, "mouseleave", function() {
							E = !1;
							b.hasmousefocus = !1;
							b.rail.drag || b.hideCursor()
						}))
					}
					b.onkeypress = function(d) {
						if(b.locked && 0 == b.page.maxh) return !0;
						d = d ? d : window.e;
						var c = b.getTarget(d);
						if(c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp)) return !0;
						if(b.hasfocus || b.hasmousefocus && !z || b.ispage && !z && !E) {
							c = d.keyCode;
							if(b.locked && 27 != c) return b.cancelEvent(d);
							var g = d.ctrlKey || !1,
								n = d.shiftKey || !1,
								f = !1;
							switch(c) {
								case 38:
								case 63233:
									b.doScrollBy(72);
									f = !0;
									break;
								case 40:
								case 63235:
									b.doScrollBy(-72);
									f = !0;
									break;
								case 37:
								case 63232:
									b.railh && (g ? b.doScrollLeft(0) : b.doScrollLeftBy(72), f = !0);
									break;
								case 39:
								case 63234:
									b.railh && (g ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), f = !0);
									break;
								case 33:
								case 63276:
									b.doScrollBy(b.view.h);
									f = !0;
									break;
								case 34:
								case 63277:
									b.doScrollBy(-b.view.h);
									f = !0;
									break;
								case 36:
								case 63273:
									b.railh && g ? b.doScrollPos(0, 0) : b.doScrollTo(0);
									f = !0;
									break;
								case 35:
								case 63275:
									b.railh && g ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh);
									f = !0;
									break;
								case 32:
									b.opt.spacebarenabled && (n ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), f = !0);
									break;
								case 27:
									b.zoomactive && (b.doZoom(), f = !0)
							}
							if(f) return b.cancelEvent(d)
						}
					};
					b.opt.enablekeyboard && b.bind(document, f.isopera && !f.isopera12 ? "keypress" : "keydown", b.onkeypress);
					b.bind(window, "resize", b.lazyResize);
					b.bind(window, "orientationchange", b.lazyResize);
					b.bind(window, "load", b.lazyResize);
					if(f.ischrome && !b.ispage && !b.haswrapper) {
						var s = b.win.attr("style"),
							g = parseFloat(b.win.css("width")) + 1;
						b.win.css("width", g);
						b.synched("chromefix", function() {
							b.win.attr("style", s)
						})
					}
					b.onAttributeChange = function(d) {
						b.lazyResize(250)
					};
					!b.ispage && !b.haswrapper && (!1 !== A ? (b.observer = new A(function(d) {
						d.forEach(b.onAttributeChange)
					}), b.observer.observe(b.win[0], {
						childList: !0,
						characterData: !1,
						attributes: !0,
						subtree: !1
					}), b.observerremover = new A(function(d) {
						d.forEach(function(d) {
							if(0 < d.removedNodes.length)
								for(var c in d.removedNodes)
									if(d.removedNodes[c] == b.win[0]) return b.remove()
						})
					}), b.observerremover.observe(b.win[0].parentNode, {
						childList: !0,
						characterData: !1,
						attributes: !1,
						subtree: !1
					})) : (b.bind(b.win, f.isie && !f.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), f.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function(d) {
						d.target == b.win[0] && b.remove()
					})));
					!b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom);
					b.istextarea && b.bind(b.win, "mouseup", b.lazyResize);
					b.checkrtlmode = !0;
					b.lazyResize(30)
				}
				if("IFRAME" == this.doc[0].nodeName) {
					var K = function(d) {
						b.iframexd = !1;
						try {
							var c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
						} catch(g) {
							b.iframexd = !0, c = !1
						}
						if(b.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
						b.forcescreen = !0;
						b.isiframe && (b.iframe = {
							doc: e(c),
							html: b.doc.contents().find("html")[0],
							body: b.doc.contents().find("body")[0]
						}, b.getContentSize = function() {
							return {
								w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
								h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
							}
						}, b.docscroll = e(b.iframe.body));
						!f.isios && (b.opt.iframeautoresize && !b.isiframe) && (b.win.scrollTop(0), b.doc.height(""), d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight), b.doc.height(d));
						b.lazyResize(30);
						f.isie7 && b.css(e(b.iframe.html), {
							"overflow-y": "hidden"
						});
						b.css(e(b.iframe.body), {
							"overflow-y": "hidden"
						});
						f.isios && b.haswrapper && b.css(e(c.body), {
							"-webkit-transform": "translate3d(0,0,0)"
						});
						"contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(c, "scroll", b.onscroll);
						b.opt.enablemousewheel && b.bind(c, "mousewheel", b.onmousewheel);
						b.opt.enablekeyboard && b.bind(c, f.isopera ? "keypress" : "keydown", b.onkeypress);
						if(f.cantouch || b.opt.touchbehavior) b.bind(c, "mousedown", b.ontouchstart), b.bind(c, "mousemove", function(d) {
							b.ontouchmove(d, !0)
						}), b.opt.grabcursorenabled && f.cursorgrabvalue && b.css(e(c.body), {
							cursor: f.cursorgrabvalue
						});
						b.bind(c, "mouseup", b.ontouchend);
						b.zoom && (b.opt.dblclickzoom && b.bind(c, "dblclick", b.doZoom), b.ongesturezoom && b.bind(c, "gestureend", b.ongesturezoom))
					};
					this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
						K.call(b.doc[0], !1)
					}, 500);
					b.bind(this.doc, "load", K)
				}
			};
			this.showCursor = function(d, c) {
				b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0);
				if(b.rail) {
					b.autohidedom && (b.autohidedom.stop().css({
						opacity: b.opt.cursoropacitymax
					}), b.cursoractive = !0);
					if(!b.rail.drag || 1 != b.rail.drag.pt) "undefined" != typeof d && !1 !== d && (b.scroll.y = Math.round(1 * d / b.scrollratio.y)), "undefined" != typeof c && (b.scroll.x = Math.round(1 * c / b.scrollratio.x));
					b.cursor.css({
						height: b.cursorheight,
						top: b.scroll.y
					});
					b.cursorh && (!b.rail.align && b.rail.visibility ? b.cursorh.css({
						width: b.cursorwidth,
						left: b.scroll.x + b.rail.width
					}) : b.cursorh.css({
						width: b.cursorwidth,
						left: b.scroll.x
					}), b.cursoractive = !0);
					b.zoom && b.zoom.stop().css({
						opacity: b.opt.cursoropacitymax
					})
				}
			};
			this.hideCursor = function(d) {
				!b.cursortimeout && (b.rail && b.autohidedom && !(b.hasmousefocus && "leave" == b.opt.autohidemode)) && (b.cursortimeout = setTimeout(function() {
					if(!b.rail.active || !b.showonmouseevent) b.autohidedom.stop().animate({
						opacity: b.opt.cursoropacitymin
					}), b.zoom && b.zoom.stop().animate({
						opacity: b.opt.cursoropacitymin
					}), b.cursoractive = !1;
					b.cursortimeout = 0
				}, d || b.opt.hidecursordelay))
			};
			this.noticeCursor = function(d, c, g) {
				b.showCursor(c, g);
				b.rail.active || b.hideCursor(d)
			};
			this.getContentSize = b.ispage ? function() {
				return {
					w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
					h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}
			} : b.haswrapper ? function() {
				return {
					w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
					h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
				}
			} : function() {
				return {
					w: b.docscroll[0].scrollWidth,
					h: b.docscroll[0].scrollHeight
				}
			};
			this.onResize = function(d, c) {
				if(!b || !b.win) return !1;
				if(!b.haswrapper && !b.ispage) {
					if("none" == b.win.css("display")) return b.visibility && b.hideRail().hideRailHr(), !1;
					!b.hidden && !b.visibility && b.showRail().showRailHr()
				}
				var g = b.page.maxh,
					f = b.page.maxw,
					e = b.view.w;
				b.view = {
					w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
					h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
				};
				b.page = c ? c : b.getContentSize();
				b.page.maxh = Math.max(0, b.page.h - b.view.h);
				b.page.maxw = Math.max(0, b.page.w - b.view.w);
				if(b.page.maxh == g && b.page.maxw == f && b.view.w == e) {
					if(b.ispage) return b;
					g = b.win.offset();
					if(b.lastposition && (f = b.lastposition, f.top == g.top && f.left == g.left)) return b;
					b.lastposition = g
				}
				0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail.scrollable = !1) : b.rail.scrollable = !0;
				0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh.scrollable = !1) : b.railh.scrollable = !0;
				b.locked = 0 == b.page.maxh && 0 == b.page.maxw;
				if(b.locked) return b.ispage || b.updateScrollBar(b.view), !1;
				!b.hidden && !b.visibility ? b.showRail().showRailHr() : !b.hidden && !b.railh.visibility && b.showRailHr();
				b.istextarea && (b.win.css("resize") && "none" != b.win.css("resize")) && (b.view.h -= 20);
				b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)));
				b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight);
				b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)));
				b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth);
				b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder;
				b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder);
				b.checkrtlmode && b.railh && (b.checkrtlmode = !1, b.opt.rtlmode && 0 == b.scroll.x && b.setScrollLeft(b.page.maxw));
				b.ispage || b.updateScrollBar(b.view);
				b.scrollratio = {
					x: b.page.maxw / b.scrollvaluemaxw,
					y: b.page.maxh / b.scrollvaluemax
				};
				b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor());
				b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y));
				return b
			};
			this.resize = b.onResize;
			this.lazyResize = function(d) {
				d = isNaN(d) ? 30 : d;
				b.delayed("resize", b.resize, d);
				return b
			};
			this._bind = function(d, c, g, f) {
				b.events.push({
					e: d,
					n: c,
					f: g,
					b: f,
					q: !1
				});
				d.addEventListener ? d.addEventListener(c, g, f || !1) : d.attachEvent ? d.attachEvent("on" + c, g) : d["on" + c] = g
			};
			this.jqbind = function(d, c, g) {
				b.events.push({
					e: d,
					n: c,
					f: g,
					q: !0
				});
				e(d).bind(c, g)
			};
			this.bind = function(d, c, g, e) {
				var h = "jquery" in d ? d[0] : d;
				"mousewheel" == c ? "onwheel" in b.win ? b._bind(h, "wheel", g, e || !1) : (d = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", q(h, d, g, e || !1), "DOMMouseScroll" == d && q(h, "MozMousePixelScroll", g, e || !1)) : h.addEventListener ? (f.cantouch && /mouseup|mousedown|mousemove/.test(c) && b._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function(b) {
					if(b.touches) {
						if(2 > b.touches.length) {
							var d = b.touches.length ? b.touches[0] : b;
							d.original = b;
							g.call(this, d)
						}
					} else b.changedTouches && (d = b.changedTouches[0], d.original = b, g.call(this, d))
				}, e || !1), b._bind(h, c, g, e || !1), f.cantouch && "mouseup" == c && b._bind(h, "touchcancel", g, e || !1)) : b._bind(h, c, function(d) {
					if((d = d || window.event || !1) && d.srcElement) d.target = d.srcElement;
					"pageY" in d || (d.pageX = d.clientX + document.documentElement.scrollLeft, d.pageY = d.clientY + document.documentElement.scrollTop);
					return !1 === g.call(h, d) || !1 === e ? b.cancelEvent(d) : !0
				})
			};
			this._unbind = function(b, c, g, f) {
				b.removeEventListener ? b.removeEventListener(c, g, f) : b.detachEvent ? b.detachEvent("on" + c, g) : b["on" + c] = !1
			};
			this.unbindAll = function() {
				for(var d = 0; d < b.events.length; d++) {
					var c = b.events[d];
					c.q ? c.e.unbind(c.n, c.f) : b._unbind(c.e, c.n, c.f, c.b)
				}
			};
			this.cancelEvent = function(b) {
				b = b.original ? b.original : b ? b : window.event || !1;
				if(!b) return !1;
				b.preventDefault && b.preventDefault();
				b.stopPropagation && b.stopPropagation();
				b.preventManipulation && b.preventManipulation();
				b.cancelBubble = !0;
				b.cancel = !0;
				return b.returnValue = !1
			};
			this.stopPropagation = function(b) {
				b = b.original ? b.original : b ? b : window.event || !1;
				if(!b) return !1;
				if(b.stopPropagation) return b.stopPropagation();
				b.cancelBubble && (b.cancelBubble = !0);
				return !1
			};
			this.showRail = function() {
				if(0 != b.page.maxh && (b.ispage || "none" != b.win.css("display"))) b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block");
				return b
			};
			this.showRailHr = function() {
				if(!b.railh) return b;
				if(0 != b.page.maxw && (b.ispage || "none" != b.win.css("display"))) b.railh.visibility = !0, b.railh.css("display", "block");
				return b
			};
			this.hideRail = function() {
				b.visibility = !1;
				b.rail.visibility = !1;
				b.rail.css("display", "none");
				return b
			};
			this.hideRailHr = function() {
				if(!b.railh) return b;
				b.railh.visibility = !1;
				b.railh.css("display", "none");
				return b
			};
			this.show = function() {
				b.hidden = !1;
				b.locked = !1;
				return b.showRail().showRailHr()
			};
			this.hide = function() {
				b.hidden = !0;
				b.locked = !0;
				return b.hideRail().hideRailHr()
			};
			this.toggle = function() {
				return b.hidden ? b.show() : b.hide()
			};
			this.remove = function() {
				b.stop();
				b.cursortimeout && clearTimeout(b.cursortimeout);
				b.doZoomOut();
				b.unbindAll();
				f.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange);
				!1 !== b.observer && b.observer.disconnect();
				!1 !== b.observerremover && b.observerremover.disconnect();
				b.events = null;
				b.cursor && b.cursor.remove();
				b.cursorh && b.cursorh.remove();
				b.rail && b.rail.remove();
				b.railh && b.railh.remove();
				b.zoom && b.zoom.remove();
				for(var d = 0; d < b.saved.css.length; d++) {
					var c = b.saved.css[d];
					c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
				}
				b.saved = !1;
				b.me.data("__nicescroll", "");
				var g = e.nicescroll;
				g.each(function(d) {
					if(this && this.id === b.id) {
						delete g[d];
						for(var c = ++d; c < g.length; c++, d++) g[d] = g[c];
						g.length--;
						g.length && delete g[g.length]
					}
				});
				for(var h in b) b[h] = null, delete b[h];
				b = null
			};
			this.scrollstart = function(d) {
				this.onscrollstart = d;
				return b
			};
			this.scrollend = function(d) {
				this.onscrollend = d;
				return b
			};
			this.scrollcancel = function(d) {
				this.onscrollcancel = d;
				return b
			};
			this.zoomin = function(d) {
				this.onzoomin = d;
				return b
			};
			this.zoomout = function(d) {
				this.onzoomout = d;
				return b
			};
			this.isScrollable = function(b) {
				b = b.target ? b.target : b;
				if("OPTION" == b.nodeName) return !0;
				for(; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
					var c = e(b),
						c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if(/scroll|auto/.test(c)) return b.clientHeight != b.scrollHeight;
					b = b.parentNode ? b.parentNode : !1
				}
				return !1
			};
			this.getViewport = function(b) {
				for(b = b && b.parentNode ? b.parentNode : !1; b && 1 == b.nodeType && !/BODY|HTML/.test(b.nodeName);) {
					var c = e(b);
					if(/fixed|absolute/.test(c.css("position"))) return c;
					var g = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
					if(/scroll|auto/.test(g) && b.clientHeight != b.scrollHeight || 0 < c.getNiceScroll().length) return c;
					b = b.parentNode ? b.parentNode : !1
				}
				return !1
			};
			this.onmousewheel = function(d) {
				if(b.locked) return b.debounced("checkunlock", b.resize, 250), !0;
				if(b.rail.drag) return b.cancelEvent(d);
				"auto" == b.opt.oneaxismousemode && 0 != d.deltaX && (b.opt.oneaxismousemode = !1);
				if(b.opt.oneaxismousemode && 0 == d.deltaX && !b.rail.scrollable) return b.railh && b.railh.scrollable ? b.onmousewheelhr(d) : !0;
				var c = +new Date,
					g = !1;
				b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
				b.checkarea = c;
				if(b.nativescrollingarea) return !0;
				if(d = t(d, !1, g)) b.checkarea = 0;
				return d
			};
			this.onmousewheelhr = function(d) {
				if(b.locked || !b.railh.scrollable) return !0;
				if(b.rail.drag) return b.cancelEvent(d);
				var c = +new Date,
					g = !1;
				b.opt.preservenativescrolling && b.checkarea + 600 < c && (b.nativescrollingarea = b.isScrollable(d), g = !0);
				b.checkarea = c;
				return b.nativescrollingarea ? !0 : b.locked ? b.cancelEvent(d) : t(d, !0, g)
			};
			this.stop = function() {
				b.cancelScroll();
				b.scrollmon && b.scrollmon.stop();
				b.cursorfreezed = !1;
				b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
				b.noticeCursor();
				return b
			};
			this.getTransitionSpeed = function(c) {
				var f = Math.round(10 * b.opt.scrollspeed);
				c = Math.min(f, Math.round(c / 20 * b.opt.scrollspeed));
				return 20 < c ? c : 0
			};
			b.opt.smoothscroll ? b.ishwscroll && f.hastransition && b.opt.usetransition ? (this.prepareTransition = function(c, e) {
				var g = e ? 20 < c ? c : 0 : b.getTransitionSpeed(c),
					h = g ? f.prefixstyle + "transform " + g + "ms ease-out" : "";
				if(!b.lasttransitionstyle || b.lasttransitionstyle != h) b.lasttransitionstyle = h, b.doc.css(f.transitionstyle, h);
				return g
			}, this.doScrollLeft = function(c, f) {
				var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function(c, f) {
				var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function(c, e, g) {
				var h = b.getScrollTop(),
					l = b.getScrollLeft();
				(0 > (b.newscrolly - h) * (e - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
				!1 == b.opt.bouncescroll && (0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > c ? c = 0 : c > b.page.maxw && (c = b.page.maxw));
				if(b.scrollrunning && c == b.newscrollx && e == b.newscrolly) return !1;
				b.newscrolly = e;
				b.newscrollx = c;
				b.newscrollspeed = g || !1;
				if(b.timer) return !1;
				b.timer = setTimeout(function() {
					var g = b.getScrollTop(),
						h = b.getScrollLeft(),
						l, k;
					l = c - h;
					k = e - g;
					l = Math.round(Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)));
					l = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(l);
					b.newscrollspeed && 1 >= b.newscrollspeed && (l *= b.newscrollspeed);
					b.prepareTransition(l, !0);
					b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
					0 < l && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
						type: "scrollstart",
						current: {
							x: h,
							y: g
						},
						request: {
							x: c,
							y: e
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						},
						speed: l
					}), f.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, f.transitionend, b.onScrollEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollEnd, l)), b.timerscroll = {
						bz: new BezierClass(g, b.newscrolly, l, 0, 0, 0.58, 1),
						bh: new BezierClass(h, b.newscrollx, l, 0, 0, 0.58, 1)
					}, b.cursorfreezed || (b.timerscroll.tm = setInterval(function() {
						b.showCursor(b.getScrollTop(), b.getScrollLeft())
					}, 60)));
					b.synched("doScroll-set", function() {
						b.timer = 0;
						b.scrollendtrapped && (b.scrollrunning = !0);
						b.setScrollTop(b.newscrolly);
						b.setScrollLeft(b.newscrollx);
						if(!b.scrollendtrapped) b.onScrollEnd()
					})
				}, 50)
			}, this.cancelScroll = function() {
				if(!b.scrollendtrapped) return !0;
				var c = b.getScrollTop(),
					e = b.getScrollLeft();
				b.scrollrunning = !1;
				f.transitionend || clearTimeout(f.transitionend);
				b.scrollendtrapped = !1;
				b._unbind(b.doc, f.transitionend, b.onScrollEnd);
				b.prepareTransition(0);
				b.setScrollTop(c);
				b.railh && b.setScrollLeft(e);
				b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
				b.timerscroll = !1;
				b.cursorfreezed = !1;
				b.showCursor(c, e);
				return b
			}, this.onScrollEnd = function() {
				b.scrollendtrapped && b._unbind(b.doc, f.transitionend, b.onScrollEnd);
				b.scrollendtrapped = !1;
				b.prepareTransition(0);
				b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm);
				b.timerscroll = !1;
				var c = b.getScrollTop(),
					e = b.getScrollLeft();
				b.setScrollTop(c);
				b.railh && b.setScrollLeft(e);
				b.noticeCursor(!1, c, e);
				b.cursorfreezed = !1;
				0 > c ? c = 0 : c > b.page.maxh && (c = b.page.maxh);
				0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw);
				if(c != b.newscrolly || e != b.newscrollx) return b.doScrollPos(e, c, b.opt.snapbackspeed);
				b.onscrollend && b.scrollrunning && b.onscrollend.call(b, {
					type: "scrollend",
					current: {
						x: e,
						y: c
					},
					end: {
						x: b.newscrollx,
						y: b.newscrolly
					}
				});
				b.scrollrunning = !1
			}) : (this.doScrollLeft = function(c, f) {
				var g = b.scrollrunning ? b.newscrolly : b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function(c, f) {
				var g = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function(c, f, g) {
				function e() {
					if(b.cancelAnimationFrame) return !0;
					b.scrollrunning = !0;
					if(p = 1 - p) return b.timer = v(e) || 1;
					var c = 0,
						d = sy = b.getScrollTop();
					if(b.dst.ay) {
						var d = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly,
							g = d - sy;
						if(0 > g && d < b.newscrolly || 0 < g && d > b.newscrolly) d = b.newscrolly;
						b.setScrollTop(d);
						d == b.newscrolly && (c = 1)
					} else c = 1;
					var f = sx = b.getScrollLeft();
					if(b.dst.ax) {
						f = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx;
						g = f - sx;
						if(0 > g && f < b.newscrollx || 0 < g && f > b.newscrollx) f = b.newscrollx;
						b.setScrollLeft(f);
						f == b.newscrollx && (c += 1)
					} else c += 1;
					2 == c ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > d ? d = 0 : d > b.page.maxh && (d = b.page.maxh), 0 > f ? f = 0 : f > b.page.maxw && (f = b.page.maxw), f != b.newscrollx || d != b.newscrolly ? b.doScrollPos(f, d) : b.onscrollend && b.onscrollend.call(b, {
						type: "scrollend",
						current: {
							x: sx,
							y: sy
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						}
					})) : b.timer = v(e) || 1
				}
				f = "undefined" == typeof f || !1 === f ? b.getScrollTop(!0) : f;
				if(b.timer && b.newscrolly == f && b.newscrollx == c) return !0;
				b.timer && w(b.timer);
				b.timer = 0;
				var h = b.getScrollTop(),
					l = b.getScrollLeft();
				(0 > (b.newscrolly - h) * (f - h) || 0 > (b.newscrollx - l) * (c - l)) && b.cancelScroll();
				b.newscrolly = f;
				b.newscrollx = c;
				if(!b.bouncescroll || !b.rail.visibility) 0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh);
				if(!b.bouncescroll || !b.railh.visibility) 0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw);
				b.dst = {};
				b.dst.x = c - l;
				b.dst.y = f - h;
				b.dst.px = l;
				b.dst.py = h;
				var k = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
				b.dst.ax = b.dst.x / k;
				b.dst.ay = b.dst.y / k;
				var m = 0,
					q = k;
				0 == b.dst.x ? (m = h, q = f, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (m = l, q = c, b.dst.ax = 1, b.dst.px = 0);
				k = b.getTransitionSpeed(k);
				g && 1 >= g && (k *= g);
				b.bzscroll = 0 < k ? b.bzscroll ? b.bzscroll.update(q, k) : new BezierClass(m, q, k, 0, 1, 0, 1) : !1;
				if(!b.timer) {
					(h == b.page.maxh && f >= b.page.maxh || l == b.page.maxw && c >= b.page.maxw) && b.checkContentSize();
					var p = 1;
					b.cancelAnimationFrame = !1;
					b.timer = 1;
					b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
						type: "scrollstart",
						current: {
							x: l,
							y: h
						},
						request: {
							x: c,
							y: f
						},
						end: {
							x: b.newscrollx,
							y: b.newscrolly
						},
						speed: k
					});
					e();
					(h == b.page.maxh && f >= h || l == b.page.maxw && c >= l) && b.checkContentSize();
					b.noticeCursor()
				}
			}, this.cancelScroll = function() {
				b.timer && w(b.timer);
				b.timer = 0;
				b.bzscroll = !1;
				b.scrollrunning = !1;
				return b
			}) : (this.doScrollLeft = function(c, f) {
				var g = b.getScrollTop();
				b.doScrollPos(c, g, f)
			}, this.doScrollTop = function(c, f) {
				var g = b.getScrollLeft();
				b.doScrollPos(g, c, f)
			}, this.doScrollPos = function(c, f, g) {
				var e = c > b.page.maxw ? b.page.maxw : c;
				0 > e && (e = 0);
				var h = f > b.page.maxh ? b.page.maxh : f;
				0 > h && (h = 0);
				b.synched("scroll", function() {
					b.setScrollTop(h);
					b.setScrollLeft(e)
				})
			}, this.cancelScroll = function() {});
			this.doScrollBy = function(c, f) {
				var g = 0,
					g = f ? Math.floor((b.scroll.y - c) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - c;
				if(b.bouncescroll) {
					var e = Math.round(b.view.h / 2);
					g < -e ? g = -e : g > b.page.maxh + e && (g = b.page.maxh + e)
				}
				b.cursorfreezed = !1;
				py = b.getScrollTop(!0);
				if(0 > g && 0 >= py) return b.noticeCursor();
				if(g > b.page.maxh && py >= b.page.maxh) return b.checkContentSize(), b.noticeCursor();
				b.doScrollTop(g)
			};
			this.doScrollLeftBy = function(c, f) {
				var g = 0,
					g = f ? Math.floor((b.scroll.x - c) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - c;
				if(b.bouncescroll) {
					var e = Math.round(b.view.w / 2);
					g < -e ? g = -e : g > b.page.maxw + e && (g = b.page.maxw + e)
				}
				b.cursorfreezed = !1;
				px = b.getScrollLeft(!0);
				if(0 > g && 0 >= px || g > b.page.maxw && px >= b.page.maxw) return b.noticeCursor();
				b.doScrollLeft(g)
			};
			this.doScrollTo = function(c, f) {
				f && Math.round(c * b.scrollratio.y);
				b.cursorfreezed = !1;
				b.doScrollTop(c)
			};
			this.checkContentSize = function() {
				var c = b.getContentSize();
				(c.h != b.page.h || c.w != b.page.w) && b.resize(!1, c)
			};
			b.onscroll = function(c) {
				b.rail.drag || b.cursorfreezed || b.synched("scroll", function() {
					b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y));
					b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)));
					b.noticeCursor()
				})
			};
			b.bind(b.docscroll, "scroll", b.onscroll);
			this.doZoomIn = function(c) {
				if(!b.zoomactive) {
					b.zoomactive = !0;
					b.zoomrestore = {
						style: {}
					};
					var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
						g = b.win[0].style,
						l;
					for(l in h) {
						var k = h[l];
						b.zoomrestore.style[k] = "undefined" != typeof g[k] ? g[k] : ""
					}
					b.zoomrestore.style.width = b.win.css("width");
					b.zoomrestore.style.height = b.win.css("height");
					b.zoomrestore.padding = {
						w: b.win.outerWidth() - b.win.width(),
						h: b.win.outerHeight() - b.win.height()
					};
					f.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
					b.win.css({
						position: f.isios4 ? "absolute" : "fixed",
						top: 0,
						left: 0,
						"z-index": y + 100,
						margin: "0px"
					});
					h = b.win.css("backgroundColor");
					("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) && b.win.css("backgroundColor", "#fff");
					b.rail.css({
						"z-index": y + 101
					});
					b.zoom.css({
						"z-index": y + 102
					});
					b.zoom.css("backgroundPosition", "0px -18px");
					b.resizeZoom();
					b.onzoomin && b.onzoomin.call(b);
					return b.cancelEvent(c)
				}
			};
			this.doZoomOut = function(c) {
				if(b.zoomactive) return b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), f.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({
					"z-index": b.zindex
				}), b.zoom.css({
					"z-index": b.zindex
				}), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(c)
			};
			this.doZoom = function(c) {
				return b.zoomactive ? b.doZoomOut(c) : b.doZoomIn(c)
			};
			this.resizeZoom = function() {
				if(b.zoomactive) {
					var c = b.getScrollTop();
					b.win.css({
						width: e(window).width() - b.zoomrestore.padding.w + "px",
						height: e(window).height() - b.zoomrestore.padding.h + "px"
					});
					b.onResize();
					b.setScrollTop(Math.min(b.page.maxh, c))
				}
			};
			this.init();
			e.nicescroll.push(this)
		},
		J = function(e) {
			var c = this;
			this.nc = e;
			this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
			this.snapy = this.snapx = !1;
			this.demuly = this.demulx = 0;
			this.lastscrolly = this.lastscrollx = -1;
			this.timer = this.chky = this.chkx = 0;
			this.time = function() {
				return +new Date
			};
			this.reset = function(e, l) {
				c.stop();
				var k = c.time();
				c.steptime = 0;
				c.lasttime = k;
				c.speedx = 0;
				c.speedy = 0;
				c.lastx = e;
				c.lasty = l;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.update = function(e, l) {
				var k = c.time();
				c.steptime = k - c.lasttime;
				c.lasttime = k;
				var k = l - c.lasty,
					t = e - c.lastx,
					b = c.nc.getScrollTop(),
					p = c.nc.getScrollLeft(),
					b = b + k,
					p = p + t;
				c.snapx = 0 > p || p > c.nc.page.maxw;
				c.snapy = 0 > b || b > c.nc.page.maxh;
				c.speedx = t;
				c.speedy = k;
				c.lastx = e;
				c.lasty = l
			};
			this.stop = function() {
				c.nc.unsynched("domomentum2d");
				c.timer && clearTimeout(c.timer);
				c.timer = 0;
				c.lastscrollx = -1;
				c.lastscrolly = -1
			};
			this.doSnapy = function(e, l) {
				var k = !1;
				0 > l ? (l = 0, k = !0) : l > c.nc.page.maxh && (l = c.nc.page.maxh, k = !0);
				0 > e ? (e = 0, k = !0) : e > c.nc.page.maxw && (e = c.nc.page.maxw, k = !0);
				k && c.nc.doScrollPos(e, l, c.nc.opt.snapbackspeed)
			};
			this.doMomentum = function(e) {
				var l = c.time(),
					k = e ? l + e : c.lasttime;
				e = c.nc.getScrollLeft();
				var t = c.nc.getScrollTop(),
					b = c.nc.page.maxh,
					p = c.nc.page.maxw;
				c.speedx = 0 < p ? Math.min(60, c.speedx) : 0;
				c.speedy = 0 < b ? Math.min(60, c.speedy) : 0;
				k = k && 60 >= l - k;
				if(0 > t || t > b || 0 > e || e > p) k = !1;
				e = c.speedx && k ? c.speedx : !1;
				if(c.speedy && k && c.speedy || e) {
					var f = Math.max(16, c.steptime);
					50 < f && (e = f / 50, c.speedx *= e, c.speedy *= e, f = 50);
					c.demulxy = 0;
					c.lastscrollx = c.nc.getScrollLeft();
					c.chkx = c.lastscrollx;
					c.lastscrolly = c.nc.getScrollTop();
					c.chky = c.lastscrolly;
					var s = c.lastscrollx,
						u = c.lastscrolly,
						d = function() {
							var e = 600 < c.time() - l ? 0.04 : 0.02;
							if(c.speedx && (s = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = s, 0 > s || s > p)) e = 0.1;
							if(c.speedy && (u = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = u, 0 > u || u > b)) e = 0.1;
							c.demulxy = Math.min(1, c.demulxy + e);
							c.nc.synched("domomentum2d", function() {
								c.speedx && (c.nc.getScrollLeft() != c.chkx && c.stop(), c.chkx = s, c.nc.setScrollLeft(s));
								c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = u, c.nc.setScrollTop(u));
								c.timer || (c.nc.hideCursor(), c.doSnapy(s, u))
							});
							1 > c.demulxy ? c.timer = setTimeout(d, f) : (c.stop(), c.nc.hideCursor(), c.doSnapy(s, u))
						};
					d()
				} else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
			}
		},
		B = e.fn.scrollTop;
	e.cssHooks.pageYOffset = {
		get: function(k, c, h) {
			return(c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : B.call(k)
		},
		set: function(k, c) {
			var h = e.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : B.call(k, c);
			return this
		}
	};
	e.fn.scrollTop = function(k) {
		if("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollTop() : B.call(this)
		}
		return this.each(function() {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : B.call(e(this), k)
		})
	};
	var C = e.fn.scrollLeft;
	e.cssHooks.pageXOffset = {
		get: function(k, c, h) {
			return(c = e.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : C.call(k)
		},
		set: function(k, c) {
			var h = e.data(k, "__nicescroll") || !1;
			h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : C.call(k, c);
			return this
		}
	};
	e.fn.scrollLeft = function(k) {
		if("undefined" == typeof k) {
			var c = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
			return c && c.ishwscroll ? c.getScrollLeft() : C.call(this)
		}
		return this.each(function() {
			var c = e.data(this, "__nicescroll") || !1;
			c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : C.call(e(this), k)
		})
	};
	var D = function(k) {
		var c = this;
		this.length = 0;
		this.name = "nicescrollarray";
		this.each = function(e) {
			for(var h = 0, k = 0; h < c.length; h++) e.call(c[h], k++);
			return c
		};
		this.push = function(e) {
			c[c.length] = e;
			c.length++
		};
		this.eq = function(e) {
			return c[e]
		};
		if(k)
			for(a = 0; a < k.length; a++) {
				var h = e.data(k[a], "__nicescroll") || !1;
				h && (this[this.length] = h, this.length++)
			}
		return this
	};
	(function(e, c, h) {
		for(var l = 0; l < c.length; l++) h(e, c[l])
	})(D.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(e, c) {
		e[c] = function() {
			var e = arguments;
			return this.each(function() {
				this[c].apply(this, e)
			})
		}
	});
	e.fn.getNiceScroll = function(k) {
		return "undefined" == typeof k ? new D(this) : this[k] && e.data(this[k], "__nicescroll") || !1
	};
	e.extend(e.expr[":"], {
		nicescroll: function(k) {
			return e.data(k, "__nicescroll") ? !0 : !1
		}
	});
	e.fn.niceScroll = function(k, c) {
		"undefined" == typeof c && ("object" == typeof k && !("jquery" in k)) && (c = k, k = !1);
		var h = new D;
		"undefined" == typeof c && (c = {});
		k && (c.doc = e(k), c.win = e(this));
		var l = !("doc" in c);
		!l && !("win" in c) && (c.win = e(this));
		this.each(function() {
			var k = e(this).data("__nicescroll") || !1;
			k || (c.doc = l ? e(this) : c.doc, k = new Q(c, e(this)), e(this).data("__nicescroll", k));
			h.push(k)
		});
		return 1 == h.length ? h[0] : h
	};
	window.NiceScroll = {
		getjQuery: function() {
			return e
		}
	};
	e.nicescroll || (e.nicescroll = new D, e.nicescroll.options = I)
})(jQuery);
(function($) {
	function Countdown() {
		this.regional = [];
		this.regional[''] = {
			labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
			labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
			compactLabels: ['y', 'm', 'w', 'd'],
			whichLabels: null,
			digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
			timeSeparator: ':',
			isRTL: false
		};
		this._defaults = {
			until: null,
			since: null,
			timezone: null,
			serverSync: null,
			format: 'dHMS',
			layout: '',
			compact: false,
			significant: 0,
			description: '',
			expiryUrl: '',
			expiryText: '',
			alwaysExpire: false,
			onExpiry: null,
			onTick: null,
			tickInterval: 1
		};
		$.extend(this._defaults, this.regional['']);
		this._serverSyncs = [];
		var c = (typeof Date.now == 'function' ? Date.now : function() {
			return new Date().getTime()
		});
		var d = (window.performance && typeof window.performance.now == 'function');

		function timerCallBack(a) {
			var b = (a < 1e12 ? (d ? (performance.now() + performance.timing.navigationStart) : c()) : a || c());
			if(b - f >= 1000) {
				x._updateTargets();
				f = b
			}
			e(timerCallBack)
		}
		var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
		var f = 0;
		if(!e || $.noRequestAnimationFrame) {
			$.noRequestAnimationFrame = null;
			setInterval(function() {
				x._updateTargets()
			}, 980)
		} else {
			f = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || c();
			e(timerCallBack)
		}
	}
	var Y = 0;
	var O = 1;
	var W = 2;
	var D = 3;
	var H = 4;
	var M = 5;
	var S = 6;
	$.extend(Countdown.prototype, {
		markerClassName: 'hasCountdown',
		propertyName: 'countdown',
		_rtlClass: 'countdown_rtl',
		_sectionClass: 'countdown_section',
		_amountClass: 'countdown_amount',
		_rowClass: 'countdown_row',
		_holdingClass: 'countdown_holding',
		_showClass: 'countdown_show',
		_descrClass: 'countdown_descr',
		_timerTargets: [],
		setDefaults: function(a) {
			this._resetExtraLabels(this._defaults, a);
			$.extend(this._defaults, a || {})
		},
		UTCDate: function(a, b, c, e, f, g, h, i) {
			if(typeof b == 'object' && b.constructor == Date) {
				i = b.getMilliseconds();
				h = b.getSeconds();
				g = b.getMinutes();
				f = b.getHours();
				e = b.getDate();
				c = b.getMonth();
				b = b.getFullYear()
			}
			var d = new Date();
			d.setUTCFullYear(b);
			d.setUTCDate(1);
			d.setUTCMonth(c || 0);
			d.setUTCDate(e || 1);
			d.setUTCHours(f || 0);
			d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
			d.setUTCSeconds(h || 0);
			d.setUTCMilliseconds(i || 0);
			return d
		},
		periodsToSeconds: function(a) {
			return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
		},
		_attachPlugin: function(a, b) {
			a = $(a);
			if(a.hasClass(this.markerClassName)) {
				return
			}
			var c = {
				options: $.extend({}, this._defaults),
				_periods: [0, 0, 0, 0, 0, 0, 0]
			};
			a.addClass(this.markerClassName).data(this.propertyName, c);
			this._optionPlugin(a, b)
		},
		_addTarget: function(a) {
			if(!this._hasTarget(a)) {
				this._timerTargets.push(a)
			}
		},
		_hasTarget: function(a) {
			return($.inArray(a, this._timerTargets) > -1)
		},
		_removeTarget: function(b) {
			this._timerTargets = $.map(this._timerTargets, function(a) {
				return(a == b ? null : a)
			})
		},
		_updateTargets: function() {
			for(var i = this._timerTargets.length - 1; i >= 0; i--) {
				this._updateCountdown(this._timerTargets[i])
			}
		},
		_optionPlugin: function(a, b, c) {
			a = $(a);
			var d = a.data(this.propertyName);
			if(!b || (typeof b == 'string' && c == null)) {
				var e = b;
				b = (d || {}).options;
				return(b && e ? b[e] : b)
			}
			if(!a.hasClass(this.markerClassName)) {
				return
			}
			b = b || {};
			if(typeof b == 'string') {
				var e = b;
				b = {};
				b[e] = c
			}
			if(b.layout) {
				b.layout = b.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
			}
			this._resetExtraLabels(d.options, b);
			var f = (d.options.timezone != b.timezone);
			$.extend(d.options, b);
			this._adjustSettings(a, d, b.until != null || b.since != null || f);
			var g = new Date();
			if((d._since && d._since < g) || (d._until && d._until > g)) {
				this._addTarget(a[0])
			}
			this._updateCountdown(a, d)
		},
		_updateCountdown: function(a, b) {
			var c = $(a);
			b = b || c.data(this.propertyName);
			if(!b) {
				return
			}
			c.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
			if($.isFunction(b.options.onTick)) {
				var d = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
				if(b.options.tickInterval == 1 || this.periodsToSeconds(d) % b.options.tickInterval == 0) {
					b.options.onTick.apply(a, [d])
				}
			}
			var e = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
			if(e && !b._expiring) {
				b._expiring = true;
				if(this._hasTarget(a) || b.options.alwaysExpire) {
					this._removeTarget(a);
					if($.isFunction(b.options.onExpiry)) {
						b.options.onExpiry.apply(a, [])
					}
					if(b.options.expiryText) {
						var f = b.options.layout;
						b.options.layout = b.options.expiryText;
						this._updateCountdown(a, b);
						b.options.layout = f
					}
					if(b.options.expiryUrl) {
						window.location = b.options.expiryUrl
					}
				}
				b._expiring = false
			} else if(b._hold == 'pause') {
				this._removeTarget(a)
			}
			c.data(this.propertyName, b)
		},
		_resetExtraLabels: function(a, b) {
			var c = false;
			for(var n in b) {
				if(n != 'whichLabels' && n.match(/[Ll]abels/)) {
					c = true;
					break
				}
			}
			if(c) {
				for(var n in a) {
					if(n.match(/[Ll]abels[02-9]|compactLabels1/)) {
						a[n] = null
					}
				}
			}
		},
		_adjustSettings: function(a, b, c) {
			var d;
			var e = 0;
			var f = null;
			for(var i = 0; i < this._serverSyncs.length; i++) {
				if(this._serverSyncs[i][0] == b.options.serverSync) {
					f = this._serverSyncs[i][1];
					break
				}
			}
			if(f != null) {
				e = (b.options.serverSync ? f : 0);
				d = new Date()
			} else {
				var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a, []) : null);
				d = new Date();
				e = (g ? d.getTime() - g.getTime() : 0);
				this._serverSyncs.push([b.options.serverSync, e])
			}
			var h = b.options.timezone;
			h = (h == null ? -d.getTimezoneOffset() : h);
			if(c || (!c && b._until == null && b._since == null)) {
				b._since = b.options.since;
				if(b._since != null) {
					b._since = this.UTCDate(h, this._determineTime(b._since, null));
					if(b._since && e) {
						b._since.setMilliseconds(b._since.getMilliseconds() + e)
					}
				}
				b._until = this.UTCDate(h, this._determineTime(b.options.until, d));
				if(e) {
					b._until.setMilliseconds(b._until.getMilliseconds() + e)
				}
			}
			b._show = this._determineShow(b)
		},
		_destroyPlugin: function(a) {
			a = $(a);
			if(!a.hasClass(this.markerClassName)) {
				return
			}
			this._removeTarget(a[0]);
			a.removeClass(this.markerClassName).empty().removeData(this.propertyName)
		},
		_pausePlugin: function(a) {
			this._hold(a, 'pause')
		},
		_lapPlugin: function(a) {
			this._hold(a, 'lap')
		},
		_resumePlugin: function(a) {
			this._hold(a, null)
		},
		_hold: function(a, b) {
			var c = $.data(a, this.propertyName);
			if(c) {
				if(c._hold == 'pause' && !b) {
					c._periods = c._savePeriods;
					var d = (c._since ? '-' : '+');
					c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
					this._addTarget(a)
				}
				c._hold = b;
				c._savePeriods = (b == 'pause' ? c._periods : null);
				$.data(a, this.propertyName, c);
				this._updateCountdown(a, c)
			}
		},
		_getTimesPlugin: function(a) {
			var b = $.data(a, this.propertyName);
			return(!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
		},
		_determineTime: function(k, l) {
			var m = function(a) {
				var b = new Date();
				b.setTime(b.getTime() + a * 1000);
				return b
			};
			var n = function(a) {
				a = a.toLowerCase();
				var b = new Date();
				var c = b.getFullYear();
				var d = b.getMonth();
				var e = b.getDate();
				var f = b.getHours();
				var g = b.getMinutes();
				var h = b.getSeconds();
				var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
				var j = i.exec(a);
				while(j) {
					switch(j[2] || 's') {
						case 's':
							h += parseInt(j[1], 10);
							break;
						case 'm':
							g += parseInt(j[1], 10);
							break;
						case 'h':
							f += parseInt(j[1], 10);
							break;
						case 'd':
							e += parseInt(j[1], 10);
							break;
						case 'w':
							e += parseInt(j[1], 10) * 7;
							break;
						case 'o':
							d += parseInt(j[1], 10);
							e = Math.min(e, x._getDaysInMonth(c, d));
							break;
						case 'y':
							c += parseInt(j[1], 10);
							e = Math.min(e, x._getDaysInMonth(c, d));
							break
					}
					j = i.exec(a)
				}
				return new Date(c, d, e, f, g, h, 0)
			};
			var o = (k == null ? l : (typeof k == 'string' ? n(k) : (typeof k == 'number' ? m(k) : k)));
			if(o) o.setMilliseconds(0);
			return o
		},
		_getDaysInMonth: function(a, b) {
			return 32 - new Date(a, b, 32).getDate()
		},
		_normalLabels: function(a) {
			return a
		},
		_generateHTML: function(c) {
			var d = this;
			c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
			var e = false;
			var f = 0;
			var g = c.options.significant;
			var h = $.extend({}, c._show);
			for(var i = Y; i <= S; i++) {
				e |= (c._show[i] == '?' && c._periods[i] > 0);
				h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
				f += (h[i] ? 1 : 0);
				g -= (c._periods[i] > 0 ? 1 : 0)
			}
			var j = [false, false, false, false, false, false, false];
			for(var i = S; i >= Y; i--) {
				if(c._show[i]) {
					if(c._periods[i]) {
						j[i] = true
					} else {
						j[i] = g > 0;
						g--
					}
				}
			}
			var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
			var l = c.options.whichLabels || this._normalLabels;
			var m = function(a) {
				var b = c.options['compactLabels' + l(c._periods[a])];
				return(h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
			};
			var n = function(a) {
				var b = c.options['labels' + l(c._periods[a])];
				return((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + x._sectionClass + '">' + '<span class="' + x._amountClass + '">' + d._translateDigits(c, c._periods[a]) + '</span><span class="amount_label">' + (b ? b[a] : k[a]) + '</span></span>' : '')
			};
			return(c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + n(Y) + n(O) + n(W) + n(D) + n(H) + n(M) + n(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
		},
		_buildLayout: function(c, d, e, f, g, h) {
			var j = c.options[f ? 'compactLabels' : 'labels'];
			var k = c.options.whichLabels || this._normalLabels;
			var l = function(a) {
				return(c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
			};
			var m = function(a, b) {
				return c.options.digits[Math.floor(a / b) % 10]
			};
			var o = {
				desc: c.options.description,
				sep: c.options.timeSeparator,
				yl: l(Y),
				yn: this._minDigits(c, c._periods[Y], 1),
				ynn: this._minDigits(c, c._periods[Y], 2),
				ynnn: this._minDigits(c, c._periods[Y], 3),
				y1: m(c._periods[Y], 1),
				y10: m(c._periods[Y], 10),
				y100: m(c._periods[Y], 100),
				y1000: m(c._periods[Y], 1000),
				ol: l(O),
				on: this._minDigits(c, c._periods[O], 1),
				onn: this._minDigits(c, c._periods[O], 2),
				onnn: this._minDigits(c, c._periods[O], 3),
				o1: m(c._periods[O], 1),
				o10: m(c._periods[O], 10),
				o100: m(c._periods[O], 100),
				o1000: m(c._periods[O], 1000),
				wl: l(W),
				wn: this._minDigits(c, c._periods[W], 1),
				wnn: this._minDigits(c, c._periods[W], 2),
				wnnn: this._minDigits(c, c._periods[W], 3),
				w1: m(c._periods[W], 1),
				w10: m(c._periods[W], 10),
				w100: m(c._periods[W], 100),
				w1000: m(c._periods[W], 1000),
				dl: l(D),
				dn: this._minDigits(c, c._periods[D], 1),
				dnn: this._minDigits(c, c._periods[D], 2),
				dnnn: this._minDigits(c, c._periods[D], 3),
				d1: m(c._periods[D], 1),
				d10: m(c._periods[D], 10),
				d100: m(c._periods[D], 100),
				d1000: m(c._periods[D], 1000),
				hl: l(H),
				hn: this._minDigits(c, c._periods[H], 1),
				hnn: this._minDigits(c, c._periods[H], 2),
				hnnn: this._minDigits(c, c._periods[H], 3),
				h1: m(c._periods[H], 1),
				h10: m(c._periods[H], 10),
				h100: m(c._periods[H], 100),
				h1000: m(c._periods[H], 1000),
				ml: l(M),
				mn: this._minDigits(c, c._periods[M], 1),
				mnn: this._minDigits(c, c._periods[M], 2),
				mnnn: this._minDigits(c, c._periods[M], 3),
				m1: m(c._periods[M], 1),
				m10: m(c._periods[M], 10),
				m100: m(c._periods[M], 100),
				m1000: m(c._periods[M], 1000),
				sl: l(S),
				sn: this._minDigits(c, c._periods[S], 1),
				snn: this._minDigits(c, c._periods[S], 2),
				snnn: this._minDigits(c, c._periods[S], 3),
				s1: m(c._periods[S], 1),
				s10: m(c._periods[S], 10),
				s100: m(c._periods[S], 100),
				s1000: m(c._periods[S], 1000)
			};
			var p = e;
			for(var i = Y; i <= S; i++) {
				var q = 'yowdhms'.charAt(i);
				var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
				p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
			}
			$.each(o, function(n, v) {
				var a = new RegExp('\\{' + n + '\\}', 'g');
				p = p.replace(a, v)
			});
			return p
		},
		_minDigits: function(a, b, c) {
			b = '' + b;
			if(b.length >= c) {
				return this._translateDigits(a, b)
			}
			b = '0000000000' + b;
			return this._translateDigits(a, b.substr(b.length - c))
		},
		_translateDigits: function(b, c) {
			return('' + c).replace(/[0-9]/g, function(a) {
				return b.options.digits[a]
			})
		},
		_determineShow: function(a) {
			var b = a.options.format;
			var c = [];
			c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
			c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
			c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
			c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
			c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
			c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
			c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
			return c
		},
		_calculatePeriods: function(c, d, e, f) {
			c._now = f;
			c._now.setMilliseconds(0);
			var g = new Date(c._now.getTime());
			if(c._since) {
				if(f.getTime() < c._since.getTime()) {
					c._now = f = g
				} else {
					f = c._since
				}
			} else {
				g.setTime(c._until.getTime());
				if(f.getTime() > c._until.getTime()) {
					c._now = f = g
				}
			}
			var h = [0, 0, 0, 0, 0, 0, 0];
			if(d[Y] || d[O]) {
				var i = x._getDaysInMonth(f.getFullYear(), f.getMonth());
				var j = x._getDaysInMonth(g.getFullYear(), g.getMonth());
				var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
				var l = function(a) {
					return(a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
				};
				var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
				h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
				h[O] = (d[O] ? m - h[Y] * 12 : 0);
				f = new Date(f.getTime());
				var n = (f.getDate() == i);
				var o = x._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
				if(f.getDate() > o) {
					f.setDate(o)
				}
				f.setFullYear(f.getFullYear() + h[Y]);
				f.setMonth(f.getMonth() + h[O]);
				if(n) {
					f.setDate(o)
				}
			}
			var p = Math.floor((g.getTime() - f.getTime()) / 1000);
			var q = function(a, b) {
				h[a] = (d[a] ? Math.floor(p / b) : 0);
				p -= h[a] * b
			};
			q(W, 604800);
			q(D, 86400);
			q(H, 3600);
			q(M, 60);
			q(S, 1);
			if(p > 0 && !c._since) {
				var r = [1, 12, 4.3482, 7, 24, 60, 60];
				var s = S;
				var t = 1;
				for(var u = S; u >= Y; u--) {
					if(d[u]) {
						if(h[s] >= t) {
							h[s] = 0;
							p = 1
						}
						if(p > 0) {
							h[u]++;
							p = 0;
							s = u;
							t = 1
						}
					}
					t *= r[u]
				}
			}
			if(e) {
				for(var u = Y; u <= S; u++) {
					if(e && h[u]) {
						e--
					} else if(!e) {
						h[u] = 0
					}
				}
			}
			return h
		}
	});
	var w = ['getTimes'];

	function isNotChained(a, b) {
		if(a == 'option' && (b.length == 0 || (b.length == 1 && typeof b[0] == 'string'))) {
			return true
		}
		return $.inArray(a, w) > -1
	}
	$.fn.countdown = function(a) {
		var b = Array.prototype.slice.call(arguments, 1);
		if(isNotChained(a, b)) {
			return x['_' + a + 'Plugin'].apply(x, [this[0]].concat(b))
		}
		return this.each(function() {
			if(typeof a == 'string') {
				if(!x['_' + a + 'Plugin']) {
					throw 'Unknown command: ' + a;
				}
				x['_' + a + 'Plugin'].apply(x, [this].concat(b))
			} else {
				x._attachPlugin(this, a || {})
			}
		})
	};
	var x = $.countdown = new Countdown()
})(jQuery);
(function($) {
	var $window = $(window);
	var windowHeight = $window.height();
	$window.resize(function() {
		windowHeight = $window.height();
	});
	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		$this.each(function() {
			firstTop = $this.offset().top;
		});
		if(outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
		if(arguments.length < 1 || xpos === null) xpos = "50%";
		if(arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if(arguments.length < 3 || outerHeight === null) outerHeight = true;

		function update() {
			var pos = $window.scrollTop();
			$this.each(function() {
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				if(top + height < pos || top > pos + windowHeight) {
					return;
				}
				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}
		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
(function($) {
	$.belowthefold = function(element, settings) {
		var fold = $(window).height() + $(window).scrollTop();
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.abovethetop = function(element, settings) {
		var top = $(window).scrollTop();
		return top >= $(element).offset().top + $(element).height() - settings.threshold;
	};
	$.rightofscreen = function(element, settings) {
		var fold = $(window).width() + $(window).scrollLeft();
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.leftofscreen = function(element, settings) {
		var left = $(window).scrollLeft();
		return left >= $(element).offset().left + $(element).width() - settings.threshold;
	};
	$.inviewport = function(element, settings) {
		return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	};
	$.extend($.expr[':'], {
		"below-the-fold": function(a, i, m) {
			return $.belowthefold(a, {
				threshold: 0
			});
		},
		"above-the-top": function(a, i, m) {
			return $.abovethetop(a, {
				threshold: 0
			});
		},
		"left-of-screen": function(a, i, m) {
			return $.leftofscreen(a, {
				threshold: 0
			});
		},
		"right-of-screen": function(a, i, m) {
			return $.rightofscreen(a, {
				threshold: 0
			});
		},
		"in-viewport": function(a, i, m) {
			return $.inviewport(a, {
				threshold: 50
			});
		}
	});
})(jQuery);;
(function($, window, document, undefined) {
	var Stickem = function(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data("stickem-options");
		this.$win = $(window);
	};
	Stickem.prototype = {
		defaults: {
			item: '.stickem',
			container: '.stickem-container',
			stickClass: 'stickit',
			endStickClass: 'stickit-end',
			offset: 0,
			start: 0,
			onStick: null,
			onUnstick: null
		},
		init: function() {
			var _self = this;
			_self.config = $.extend({}, _self.defaults, _self.options, _self.metadata);
			_self.setWindowHeight();
			_self.getItems();
			_self.bindEvents();
			return _self;
		},
		bindEvents: function() {
			var _self = this;
			_self.$win.on('scroll.stickem', $.proxy(_self.handleScroll, _self));
			_self.$win.on('resize.stickem', $.proxy(_self.handleResize, _self));
		},
		destroy: function() {
			var _self = this;
			_self.$win.off('scroll.stickem');
			_self.$win.off('resize.stickem');
		},
		getItem: function(index, element) {
			var _self = this;
			var $this = $(element);
			var item = {
				$elem: $this,
				elemHeight: $this.height(),
				$container: $this.parents(_self.config.container),
				isStuck: false
			};
			if(_self.windowHeight > item.elemHeight) {
				item.containerHeight = item.$container.outerHeight();
				item.containerInner = {
					border: {
						bottom: parseInt(item.$container.css('border-bottom'), 10) || 0,
						top: parseInt(item.$container.css('border-top'), 10) || 0
					},
					padding: {
						bottom: parseInt(item.$container.css('padding-bottom'), 10) || 0,
						top: parseInt(item.$container.css('padding-top'), 10) || 0
					}
				};
				item.containerInnerHeight = item.$container.height();
				item.containerStart = item.$container.offset().top - _self.config.offset + _self.config.start + item.containerInner.padding.top + item.containerInner.border.top;
				item.scrollFinish = item.containerStart - _self.config.start + (item.containerInnerHeight - item.elemHeight);
				if(item.containerInnerHeight > item.elemHeight) {
					_self.items.push(item);
				}
			} else {
				item.$elem.removeClass(_self.config.stickClass + ' ' + _self.config.endStickClass);
			}
		},
		getItems: function() {
			var _self = this;
			_self.items = [];
			_self.$elem.find(_self.config.item).each($.proxy(_self.getItem, _self));
		},
		handleResize: function() {
			var _self = this;
			_self.getItems();
			_self.setWindowHeight();
		},
		handleScroll: function() {
			var _self = this;
			if(_self.items.length > 0) {
				var pos = _self.$win.scrollTop();
				for(var i = 0, len = _self.items.length; i < len; i++) {
					var item = _self.items[i];
					if((item.isStuck && (pos < item.containerStart || pos > item.scrollFinish)) || pos > item.scrollFinish) {
						item.$elem.removeClass(_self.config.stickClass);
						if(pos > item.scrollFinish) {
							item.$elem.addClass(_self.config.endStickClass);
						}
						item.isStuck = false;
						if(_self.config.onUnstick) {
							_self.config.onUnstick(item);
						}
					} else if(item.isStuck === false && pos > item.containerStart && pos < item.scrollFinish) {
						item.$elem.removeClass(_self.config.endStickClass).addClass(_self.config.stickClass);
						item.isStuck = true;
						if(_self.config.onStick) {
							_self.config.onStick(item);
						}
					}
				}
			}
		},
		setWindowHeight: function() {
			var _self = this;
			_self.windowHeight = _self.$win.height() - _self.config.offset;
		}
	};
	Stickem.defaults = Stickem.prototype.defaults;
	$.fn.stickem = function(options) {
		this.destroy = function() {
			this.each(function() {
				new Stickem(this, options).destroy();
			});
		};
		return this.each(function() {
			new Stickem(this, options).init();
		});
	};
})(jQuery, window, document);
(function($) {
	$.fn.vCenter = function() {
		return this.each(function() {
			var height = $(this).outerHeight();
			$(this).css('margin-bottom', -height / 2);
		});
	};
})(jQuery);
(function($) {
	$.fn.vCenterTop = function() {
		return this.each(function() {
			var height = $(this).outerHeight();
			$(this).css('margin-top', -height / 2);
		});
	};
})(jQuery);
! function($, window, undefined) {
	function getPixel(e, t) {
		return parseInt(e.css(t), 10) || 0
	}

	function within(e, t, o) {
		return t > e ? t : e > o ? o : e
	}

	function getViewport() {
		var e = window,
			t = "inner";
		return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
			width: e[t + "Width"],
			height: e[t + "Height"]
		}
	}

	function removeHash() {
		var e = getScrollXY();
		window.location.hash = "", window.scrollTo(e.x, e.y)
	}

	function doAjax(e, t) {
		var e = "http://ilightbox.net/getSource/jsonp.php?url=" + encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
		$.ajax({
			url: e,
			dataType: "jsonp"
		}), iLCallback = function(e) {
			t.call(this, e)
		}
	}

	function findImageInElement(e) {
		var t = $("*", e),
			o = new Array;
		return t.each(function() {
			var e = "",
				t = this;
			if("none" != $(t).css("background-image") ? e = $(t).css("background-image") : "undefined" != typeof $(t).attr("src") && "img" == t.nodeName.toLowerCase() && (e = $(t).attr("src")), -1 == e.indexOf("gradient")) {
				e = e.replace(/url\(\"/g, ""), e = e.replace(/url\(/g, ""), e = e.replace(/\"\)/g, ""), e = e.replace(/\)/g, "");
				for(var i = e.split(","), n = 0; n < i.length; n++)
					if(i[n].length > 0 && -1 == $.inArray(i[n], o)) {
						var r = "";
						browser.msie && browser.version < 9 && (r = "?" + floor(3e3 * random())), o.push(i[n] + r)
					}
			}
		}), o
	}

	function getExtension(e) {
		var t = e.split(".").pop().toLowerCase(),
			o = -1 !== t.indexOf("?") ? t.split("?").pop() : "";
		return t.replace(o, "")
	}

	function getTypeByExtension(e) {
		var t, o = getExtension(e);
		return t = -1 !== extensions.image.indexOf(o) ? "image" : -1 !== extensions.video.indexOf(o) ? "video" : "iframe"
	}

	function percentToValue(e, t) {
		return parseInt(t / 100 * e)
	}

	function parseURI(e) {
		var t = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
		return t ? {
			href: t[0] || "",
			protocol: t[1] || "",
			authority: t[2] || "",
			host: t[3] || "",
			hostname: t[4] || "",
			port: t[5] || "",
			pathname: t[6] || "",
			search: t[7] || "",
			hash: t[8] || ""
		} : null
	}

	function absolutizeURI(e, t) {
		function o(e) {
			var t = [];
			return e.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(e) {
				"/.." === e ? t.pop() : t.push(e)
			}), t.join("").replace(/^\//, "/" === e.charAt(0) ? "/" : "")
		}
		return t = parseURI(t || ""), e = parseURI(e || ""), t && e ? (t.protocol || e.protocol) + (t.protocol || t.authority ? t.authority : e.authority) + o(t.protocol || t.authority || "/" === t.pathname.charAt(0) ? t.pathname : t.pathname ? (e.authority && !e.pathname ? "/" : "") + e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1) + t.pathname : e.pathname) + (t.protocol || t.authority || t.pathname ? t.search : t.search || e.search) + t.hash : null
	}

	function version_compare(e, t, o) {
		this.php_js = this.php_js || {}, this.php_js.ENV = this.php_js.ENV || {};
		var i = 0,
			n = 0,
			r = 0,
			a = {
				dev: -6,
				alpha: -5,
				a: -5,
				beta: -4,
				b: -4,
				RC: -3,
				rc: -3,
				"#": -2,
				p: 1,
				pl: 1
			},
			s = function(e) {
				return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
			},
			l = function(e) {
				return e ? isNaN(e) ? a[e] || -7 : parseInt(e, 10) : 0
			};
		for(e = s(e), t = s(t), n = max(e.length, t.length), i = 0; n > i; i++)
			if(e[i] != t[i]) {
				if(e[i] = l(e[i]), t[i] = l(t[i]), e[i] < t[i]) {
					r = -1;
					break
				}
				if(e[i] > t[i]) {
					r = 1;
					break
				}
			}
		if(!o) return r;
		switch(o) {
			case ">":
			case "gt":
				return r > 0;
			case ">=":
			case "ge":
				return r >= 0;
			case "<=":
			case "le":
				return 0 >= r;
			case "==":
			case "=":
			case "eq":
				return 0 === r;
			case "<>":
			case "!=":
			case "ne":
				return 0 !== r;
			case "":
			case "<":
			case "lt":
				return 0 > r;
			default:
				return null
		}
	}

	function getScrollXY() {
		var e = 0,
			t = 0;
		return "number" == typeof window.pageYOffset ? (t = window.pageYOffset, e = window.pageXOffset) : document.body && (document.body.scrollLeft || document.body.scrollTop) ? (t = document.body.scrollTop, e = document.body.scrollLeft) : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft), {
			x: e,
			y: t
		}
	}

	function AC_QuickTimeVersion() {
		return gQTGeneratorVersion
	}

	function _QTComplain(e, t) {
		t = t.replace("%%", e), alert(t)
	}

	function _QTAddAttribute(e, t, o) {
		var i;
		return i = gTagAttrs[e + t], null == i && (i = gTagAttrs[t]), null != i ? (0 == t.indexOf(e) && null == o && (o = t.substring(e.length)), null == o && (o = t), o + '="' + i + '" ') : ""
	}

	function _QTAddObjectAttr(e, t) {
		return 0 == e.indexOf("emb#") ? "" : (0 == e.indexOf("obj#") && null == t && (t = e.substring(4)), _QTAddAttribute("obj#", e, t))
	}

	function _QTAddEmbedAttr(e, t) {
		return 0 == e.indexOf("obj#") ? "" : (0 == e.indexOf("emb#") && null == t && (t = e.substring(4)), _QTAddAttribute("emb#", e, t))
	}

	function _QTAddObjectParam(e, t) {
		var o, i = "",
			n = t ? " />" : ">";
		return -1 == e.indexOf("emb#") && (o = gTagAttrs["obj#" + e], null == o && (o = gTagAttrs[e]), 0 == e.indexOf("obj#") && (e = e.substring(4)), null != o && (i = '  <param name="' + e + '" value="' + o + '"' + n + "\n")), i
	}

	function _QTDeleteTagAttrs() {
		for(var e = 0; e < arguments.length; e++) {
			var t = arguments[e];
			delete gTagAttrs[t], delete gTagAttrs["emb#" + t], delete gTagAttrs["obj#" + t]
		}
	}

	function _QTGenerate(e, t, o) {
		if(4 > o.length || 0 != o.length % 2) return _QTComplain(e, gArgCountErr), "";
		gTagAttrs = [], gTagAttrs.src = o[0], gTagAttrs.width = o[1], gTagAttrs.height = o[2], gTagAttrs.classid = "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B", gTagAttrs.pluginspage = "http://www.apple.com/quicktime/download/", e = o[3], (null == e || "" == e) && (e = "6,0,2,0"), gTagAttrs.codebase = "http://www.apple.com/qtactivex/qtplugin.cab#version=" + e;
		for(var i, n = 4; n < o.length; n += 2) i = o[n].toLowerCase(), e = o[n + 1], "name" == i || "id" == i ? gTagAttrs.name = e : gTagAttrs[i] = e;
		o = "<object " + _QTAddObjectAttr("classid") + _QTAddObjectAttr("width") + _QTAddObjectAttr("height") + _QTAddObjectAttr("codebase") + _QTAddObjectAttr("name", "id") + _QTAddObjectAttr("tabindex") + _QTAddObjectAttr("hspace") + _QTAddObjectAttr("vspace") + _QTAddObjectAttr("border") + _QTAddObjectAttr("align") + _QTAddObjectAttr("class") + _QTAddObjectAttr("title") + _QTAddObjectAttr("accesskey") + _QTAddObjectAttr("noexternaldata") + ">\n" + _QTAddObjectParam("src", t), n = "  <embed " + _QTAddEmbedAttr("src") + _QTAddEmbedAttr("width") + _QTAddEmbedAttr("height") + _QTAddEmbedAttr("pluginspage") + _QTAddEmbedAttr("name") + _QTAddEmbedAttr("align") + _QTAddEmbedAttr("tabindex"), _QTDeleteTagAttrs("src", "width", "height", "pluginspage", "classid", "codebase", "name", "tabindex", "hspace", "vspace", "border", "align", "noexternaldata", "class", "title", "accesskey");
		for(i in gTagAttrs) e = gTagAttrs[i], null != e && (n += _QTAddEmbedAttr(i), o += _QTAddObjectParam(i, t));
		return o + n + "> </embed>\n</object>"
	}

	function QT_GenerateOBJECTText() {
		return _QTGenerate("QT_GenerateOBJECTText", !1, arguments)
	}
	var extensions = {
			image: ["bmp", "gif", "jpeg", "jpg", "png", "tiff", "tif", "jfif", "jpe"],
			iframe: ["asp", "aspx", "cgi", "cfm", "htm", "html", "jsp", "php", "pl", "php3", "php4", "php5", "phtml", "rb", "rhtml", "shtml", "txt"],
			video: ["avi", "mov", "mpg", "mpeg", "movie", "mp4", "webm", "ogv", "ogg", "3gp", "m4v"]
		},
		$win = $(window),
		$doc = $(document),
		browser, transform, gpuAcceleration, fullScreenApi = "",
		supportTouch = !!("ontouchstart" in window) && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		clickEvent = supportTouch ? "itap.iLightBox" : "click.iLightBox",
		touchStartEvent = supportTouch ? "touchstart.iLightBox" : "mousedown.iLightBox",
		touchStopEvent = supportTouch ? "touchend.iLightBox" : "mouseup.iLightBox",
		touchMoveEvent = supportTouch ? "touchmove.iLightBox" : "mousemove.iLightBox",
		abs = Math.abs,
		sqrt = Math.sqrt,
		round = Math.round,
		max = Math.max,
		min = Math.min,
		floor = Math.floor,
		random = Math.random,
		pluginspages = {
			quicktime: "http://www.apple.com/quicktime/download"
		},
		iLightBox = function(e, t, o, i) {
			var n = this;
			if(n.options = t, n.selector = e.selector || e, n.context = e.context, n.instant = i, o.length < 1 ? n.attachItems() : n.items = o, n.vars = {
					total: n.items.length,
					start: 0,
					current: null,
					next: null,
					prev: null,
					BODY: $("body"),
					loadRequests: 0,
					overlay: $('<div class="ilightbox-overlay"></div>'),
					loader: $('<div class="ilightbox-loader"><div></div></div>'),
					toolbar: $('<div class="ilightbox-toolbar"></div>'),
					innerToolbar: $('<div class="ilightbox-inner-toolbar"></div>'),
					title: $('<div class="ilightbox-title"></div>'),
					closeButton: $('<a class="ilightbox-close" title="' + n.options.text.close + '"></a>'),
					fullScreenButton: $('<a class="ilightbox-fullscreen" title="' + n.options.text.enterFullscreen + '"></a>'),
					innerPlayButton: $('<a class="ilightbox-play" title="' + n.options.text.slideShow + '"></a>'),
					innerNextButton: $('<a class="ilightbox-next-button" title="' + n.options.text.next + '"></a>'),
					innerPrevButton: $('<a class="ilightbox-prev-button" title="' + n.options.text.previous + '"></a>'),
					holder: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + '" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-next" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					prevPhoto: $('<div class="ilightbox-holder' + (supportTouch ? " supportTouch" : "") + ' ilightbox-prev" ondragstart="return false;"><div class="ilightbox-container"></div></div>'),
					nextButton: $('<a class="ilightbox-button ilightbox-next-button" ondragstart="return false;" title="' + n.options.text.next + '"><span></span></a>'),
					prevButton: $('<a class="ilightbox-button ilightbox-prev-button" ondragstart="return false;" title="' + n.options.text.previous + '"><span></span></a>'),
					thumbnails: $('<div class="ilightbox-thumbnails" ondragstart="return false;"><div class="ilightbox-thumbnails-container"><a class="ilightbox-thumbnails-dragger"></a><div class="ilightbox-thumbnails-grid"></div></div></div>'),
					thumbs: !1,
					nextLock: !1,
					prevLock: !1,
					hashLock: !1,
					isMobile: !1,
					mobileMaxWidth: 980,
					isInFullScreen: !1,
					isSwipe: !1,
					mouseID: 0,
					cycleID: 0,
					isPaused: 0
				}, n.vars.hideableElements = n.vars.nextButton.add(n.vars.prevButton), n.normalizeItems(), n.availPlugins(), n.options.startFrom = n.options.startFrom > 0 && n.options.startFrom >= n.vars.total ? n.vars.total - 1 : n.options.startFrom, n.options.startFrom = n.options.randomStart ? floor(random() * n.vars.total) : n.options.startFrom, n.vars.start = n.options.startFrom, i ? n.instantCall() : n.patchItemsEvents(), n.options.linkId && (n.hashChangeHandler(), $win.iLightBoxHashChange(function() {
					n.hashChangeHandler()
				})), supportTouch) {
				var r = /(click|mouseenter|mouseleave|mouseover|mouseout)/gi,
					a = "itap";
				n.options.caption.show = n.options.caption.show.replace(r, a), n.options.caption.hide = n.options.caption.hide.replace(r, a), n.options.social.show = n.options.social.show.replace(r, a), n.options.social.hide = n.options.social.hide.replace(r, a)
			}
			n.options.controls.arrows && $.extend(n.options.styles, {
				nextOffsetX: 0,
				prevOffsetX: 0,
				nextOpacity: 0,
				prevOpacity: 0
			})
		};
	iLightBox.prototype = {
			showLoader: function() {
				var e = this;
				e.vars.loadRequests += 1, "horizontal" == e.options.path.toLowerCase() ? e.vars.loader.stop().animate({
					top: "-30px"
				}, e.options.show.speed, "easeOutCirc") : e.vars.loader.stop().animate({
					left: "-30px"
				}, e.options.show.speed, "easeOutCirc")
			},
			hideLoader: function() {
				var e = this;
				e.vars.loadRequests -= 1, e.vars.loadRequests = e.vars.loadRequests < 0 ? 0 : e.vars.loadRequests, "horizontal" == e.options.path.toLowerCase() ? e.vars.loadRequests <= 0 && e.vars.loader.stop().animate({
					top: "-192px"
				}, e.options.show.speed, "easeInCirc") : e.vars.loadRequests <= 0 && e.vars.loader.stop().animate({
					left: "-192px"
				}, e.options.show.speed, "easeInCirc")
			},
			createUI: function() {
				var e = this;
				e.ui = {
					currentElement: e.vars.holder,
					nextElement: e.vars.nextPhoto,
					prevElement: e.vars.prevPhoto,
					currentItem: e.vars.current,
					nextItem: e.vars.next,
					prevItem: e.vars.prev,
					hide: function() {
						e.closeAction()
					},
					refresh: function() {
						arguments.length > 0 ? e.repositionPhoto(!0) : e.repositionPhoto()
					},
					fullscreen: function() {
						e.fullScreenAction()
					}
				}
			},
			attachItems: function() {
				var iL = this,
					itemsObject = new Array,
					items = new Array;
				$(iL.selector, iL.context).each(function() {
					var t = $(this),
						URL = t.attr(iL.options.attr) || null,
						options = t.data("options") && eval("({" + t.data("options") + "})") || {},
						caption = t.data("caption"),
						title = t.data("title"),
						type = t.data("type") || getTypeByExtension(URL);
					items.push({
						URL: URL,
						caption: caption,
						title: title,
						type: type,
						options: options
					}), iL.instant || itemsObject.push(t)
				}), iL.items = items, iL.itemsObject = itemsObject
			},
			normalizeItems: function() {
				var e = this,
					t = new Array;
				$.each(e.items, function(o, i) {
					"string" == typeof i && (i = {
						url: i
					});
					var n = i.url || i.URL || null,
						r = i.options || {},
						a = i.caption || null,
						s = i.title || null,
						l = i.type ? i.type.toLowerCase() : getTypeByExtension(n),
						c = "object" != typeof n ? getExtension(n) : "";
					r.thumbnail = r.thumbnail || ("image" == l ? n : null), r.videoType = r.videoType || null, r.skin = r.skin || e.options.skin, r.width = r.width || null, r.height = r.height || null, r.mousewheel = "undefined" != typeof r.mousewheel ? r.mousewheel : !0, r.swipe = "undefined" != typeof r.swipe ? r.swipe : !0, r.social = "undefined" != typeof r.social ? r.social : e.options.social.buttons && $.extend({}, {}, e.options.social.buttons), "video" == l && (r.html5video = "undefined" != typeof r.html5video ? r.html5video : {}, r.html5video.webm = r.html5video.webm || r.html5video.WEBM || null, r.html5video.controls = "undefined" != typeof r.html5video.controls ? r.html5video.controls : "controls", r.html5video.preload = r.html5video.preload || "metadata", r.html5video.autoplay = "undefined" != typeof r.html5video.autoplay ? r.html5video.autoplay : !1), r.width && r.height || ("video" == l ? (r.width = 1280, r.height = 720) : "iframe" == l && (r.width = "100%", r.height = "90%")), delete i.url, i.index = o, i.URL = n, i.caption = a, i.title = s, i.type = l, i.options = r, i.ext = c, t.push(i)
				}), e.items = t
			},
			instantCall: function() {
				var e = this,
					t = e.vars.start;
				e.vars.current = t, e.vars.next = e.items[t + 1] ? t + 1 : null, e.vars.prev = e.items[t - 1] ? t - 1 : null, e.addContents(), e.patchEvents()
			},
			addContents: function() {
				var e = this,
					t = e.vars,
					o = e.options,
					i = getViewport(),
					n = o.path.toLowerCase(),
					r = t.total > 0 && e.items.filter(function(e) {
						return -1 === ["image", "video"].indexOf(e.type) && "undefined" == typeof e.recognized && (o.smartRecognition || e.options.smartRecognition)
					}),
					a = r.length > 0;
				o.mobileOptimizer && !o.innerToolbar && (t.isMobile = i.width <= t.mobileMaxWidth), t.overlay.addClass(o.skin).hide().css("opacity", o.overlay.opacity), o.linkId && t.overlay[0].setAttribute("linkid", o.linkId), o.controls.toolbar && (t.toolbar.addClass(o.skin).append(t.closeButton), o.controls.fullscreen && t.toolbar.append(t.fullScreenButton), o.controls.slideshow && t.toolbar.append(t.innerPlayButton), t.total > 1 && t.toolbar.append(t.innerPrevButton).append(t.innerNextButton)), t.BODY.addClass("ilightbox-noscroll").append(t.overlay).append(t.loader).append(t.holder).append(t.nextPhoto).append(t.prevPhoto), o.innerToolbar || t.BODY.append(t.toolbar), o.controls.arrows && t.BODY.append(t.nextButton).append(t.prevButton), o.controls.thumbnail && t.total > 1 && (t.BODY.append(t.thumbnails), t.thumbnails.addClass(o.skin).addClass("ilightbox-" + n), $("div.ilightbox-thumbnails-grid", t.thumbnails).empty(), t.thumbs = !0);
				var s = "horizontal" == o.path.toLowerCase() ? {
					left: parseInt(i.width / 2 - t.loader.outerWidth() / 2)
				} : {
					top: parseInt(i.height / 2 - t.loader.outerHeight() / 2)
				};
				t.loader.addClass(o.skin).css(s), t.nextButton.add(t.prevButton).addClass(o.skin), "horizontal" == n && t.loader.add(t.nextButton).add(t.prevButton).addClass("horizontal"), t.BODY[t.isMobile ? "addClass" : "removeClass"]("isMobile"), o.infinite || (t.prevButton.add(t.prevButton).add(t.innerPrevButton).add(t.innerNextButton).removeClass("disabled"), 0 == t.current && t.prevButton.add(t.innerPrevButton).addClass("disabled"), t.current >= t.total - 1 && t.nextButton.add(t.innerNextButton).addClass("disabled")), o.show.effect ? (t.overlay.stop().fadeIn(o.show.speed), t.toolbar.stop().fadeIn(o.show.speed)) : (t.overlay.show(), t.toolbar.show());
				var l = r.length;
				a ? (e.showLoader(), $.each(r, function() {
					var i = function(i) {
						var n = -1,
							r = (e.items.filter(function(e, t) {
								return e.URL == i.url && (n = t), e.URL == i.url
							}), e.items[n]);
						i && $.extend(!0, r, {
							URL: i.source,
							type: i.type,
							recognized: !0,
							options: {
								html5video: i.html5video,
								width: "image" == i.type ? 0 : i.width || r.width,
								height: "image" == i.type ? 0 : i.height || r.height,
								thumbnail: r.options.thumbnail || i.thumbnail
							}
						}), l--, 0 == l && (e.hideLoader(), t.dontGenerateThumbs = !1, e.generateThumbnails(), o.show.effect ? setTimeout(function() {
							e.generateBoxes()
						}, o.show.speed) : e.generateBoxes())
					};
					e.ogpRecognition(this, i)
				})) : o.show.effect ? setTimeout(function() {
					e.generateBoxes()
				}, o.show.speed) : e.generateBoxes(), e.createUI(), window.iLightBox = {
					close: function() {
						e.closeAction()
					},
					fullscreen: function() {
						e.fullScreenAction()
					},
					moveNext: function() {
						e.moveTo("next")
					},
					movePrev: function() {
						e.moveTo("prev")
					},
					goTo: function(t) {
						e.goTo(t)
					},
					refresh: function() {
						e.refresh()
					},
					reposition: function() {
						arguments.length > 0 ? e.repositionPhoto(!0) : e.repositionPhoto()
					},
					setOption: function(t) {
						e.setOption(t)
					},
					destroy: function() {
						e.closeAction(), e.dispatchItemsEvents()
					}
				}, o.linkId && (t.hashLock = !0, window.location.hash = o.linkId + "/" + t.current, setTimeout(function() {
					t.hashLock = !1
				}, 55)), o.slideshow.startPaused || (e.resume(), t.innerPlayButton.removeClass("ilightbox-play").addClass("ilightbox-pause")), "function" == typeof e.options.callback.onOpen && e.options.callback.onOpen.call(e)
			},
			loadContent: function(e, t, o) {
				var i, n, r = this;
				switch(r.createUI(), e.speed = o || r.options.effects.loadedFadeSpeed, "current" == t && (r.vars.lockWheel = e.options.mousewheel ? !1 : !0, r.vars.lockSwipe = e.options.swipe ? !1 : !0), t) {
					case "current":
						i = r.vars.holder, n = r.vars.current;
						break;
					case "next":
						i = r.vars.nextPhoto, n = r.vars.next;
						break;
					case "prev":
						i = r.vars.prevPhoto, n = r.vars.prev
				}
				if(i.removeAttr("style class").addClass("ilightbox-holder" + (supportTouch ? " supportTouch" : "")).addClass(e.options.skin), $("div.ilightbox-inner-toolbar", i).remove(), e.title || r.options.innerToolbar) {
					var a = r.vars.innerToolbar.clone();
					if(e.title && r.options.show.title) {
						var s = r.vars.title.clone();
						s.empty().html(e.title), a.append(s)
					}
					r.options.innerToolbar && a.append(r.vars.total > 1 ? r.vars.toolbar.clone() : r.vars.toolbar), i.prepend(a)
				}
				r.loadSwitcher(e, i, n, t)
			},
			loadSwitcher: function(e, t, o, i) {
				var n = this,
					r = n.options,
					a = {
						element: t,
						position: o
					};
				switch(e.type) {
					case "image":
						"function" == typeof r.callback.onBeforeLoad && r.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, a), n.loadImage(e.URL, function(s) {
							"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a);
							var l = s ? s.width : 400,
								c = s ? s.height : 200;
							t.data({
								naturalWidth: l,
								naturalHeight: c
							}), $("div.ilightbox-container", t).empty().append(s ? '<img src="' + e.URL + '" class="ilightbox-image" />' : '<span class="ilightbox-alert">' + r.errors.loadImage + "</span>"), "function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a), n.configureHolder(e, i, t)
						});
						break;
					case "video":
						t.data({
							naturalWidth: e.options.width,
							naturalHeight: e.options.height
						}), n.addContent(t, e), "function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a), n.configureHolder(e, i, t);
						break;
					case "iframe":
						n.showLoader(), t.data({
							naturalWidth: e.options.width,
							naturalHeight: e.options.height
						});
						var s = n.addContent(t, e);
						"function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a), "function" == typeof r.callback.onBeforeLoad && r.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, a), s.bind("load", function() {
							"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a), n.hideLoader(), n.configureHolder(e, i, t), s.unbind("load")
						});
						break;
					case "inline":
						var s = $(e.URL),
							l = n.addContent(t, e),
							c = findImageInElement(t);
						t.data({
							naturalWidth: n.items[o].options.width || s.outerWidth(),
							naturalHeight: n.items[o].options.height || s.outerHeight()
						}), l.children().eq(0).show(), "function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a), "function" == typeof r.callback.onBeforeLoad && r.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, a), n.loadImage(c, function() {
							"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a), n.configureHolder(e, i, t)
						});
						break;
					case "ajax":
						var u = e.options.ajax || {};
						"function" == typeof r.callback.onBeforeLoad && r.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, a), n.showLoader(), $.ajax({
							url: e.URL || r.ajaxSetup.url,
							data: u.data || null,
							dataType: u.dataType || "html",
							type: u.type || r.ajaxSetup.type,
							cache: u.cache || r.ajaxSetup.cache,
							crossDomain: u.crossDomain || r.ajaxSetup.crossDomain,
							global: u.global || r.ajaxSetup.global,
							ifModified: u.ifModified || r.ajaxSetup.ifModified,
							username: u.username || r.ajaxSetup.username,
							password: u.password || r.ajaxSetup.password,
							beforeSend: u.beforeSend || r.ajaxSetup.beforeSend,
							complete: u.complete || r.ajaxSetup.complete,
							success: function(s, l, c) {
								n.hideLoader();
								var d = $(s),
									h = $("div.ilightbox-container", t),
									p = n.items[o].options.width || parseInt(d[0].getAttribute("width")),
									f = n.items[o].options.height || parseInt(d[0].getAttribute("height")),
									g = d[0].getAttribute("width") && d[0].getAttribute("height") ? {
										overflow: "hidden"
									} : {};
								h.empty().append($('<div class="ilightbox-wrapper"></div>').css(g).html(d)), t.show().data({
									naturalWidth: p || h.outerWidth(),
									naturalHeight: f || h.outerHeight()
								}).hide(), "function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a);
								var m = findImageInElement(t);
								n.loadImage(m, function() {
									"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a), n.configureHolder(e, i, t)
								}), r.ajaxSetup.success(s, l, c), "function" == typeof u.success && u.success(s, l, c)
							},
							error: function(s, l, c) {
								"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a), n.hideLoader(), $("div.ilightbox-container", t).empty().append('<span class="ilightbox-alert">' + r.errors.loadContents + "</span>"), n.configureHolder(e, i, t), r.ajaxSetup.error(s, l, c), "function" == typeof u.error && u.error(s, l, c)
							}
						});
						break;
					case "html":
						var s, d = e.URL;
						if(container = $("div.ilightbox-container", t), d[0].nodeName) s = d.clone();
						else {
							var h = $(d);
							s = h.selector ? $("<div>" + h + "</div>") : h
						}
						var p = n.items[o].options.width || parseInt(s.attr("width")),
							f = n.items[o].options.height || parseInt(s.attr("height"));
						n.addContent(t, e), s.appendTo(document.documentElement).hide(), "function" == typeof r.callback.onRender && r.callback.onRender.call(n, n.ui, o), "function" == typeof e.options.onRender && e.options.onRender.call(n, a);
						var c = findImageInElement(t);
						"function" == typeof r.callback.onBeforeLoad && r.callback.onBeforeLoad.call(n, n.ui, o), "function" == typeof e.options.onBeforeLoad && e.options.onBeforeLoad.call(n, a), n.loadImage(c, function() {
							"function" == typeof r.callback.onAfterLoad && r.callback.onAfterLoad.call(n, n.ui, o), "function" == typeof e.options.onAfterLoad && e.options.onAfterLoad.call(n, a), t.show().data({
								naturalWidth: p || container.outerWidth(),
								naturalHeight: f || container.outerHeight()
							}).hide(), s.remove(), n.configureHolder(e, i, t)
						})
				}
			},
			configureHolder: function(e, t, o) {
				var i = this,
					n = i.vars,
					r = i.options;
				if("current" != t && o.addClass("next" == t ? "ilightbox-next" : "ilightbox-prev"), "current" == t) var a = n.current;
				else if("next" == t) var s = r.styles.nextOpacity,
					a = n.next;
				else var s = r.styles.prevOpacity,
					a = n.prev;
				var l = {
					element: o,
					position: a
				};
				i.items[a].options.width = i.items[a].options.width || 0, i.items[a].options.height = i.items[a].options.height || 0, "current" == t ? r.show.effect ? o.css(transform, gpuAcceleration).fadeIn(e.speed, function() {
					if(o.css(transform, ""), e.caption) {
						i.setCaption(e, o);
						var t = $("div.ilightbox-caption", o),
							n = parseInt(t.outerHeight() / o.outerHeight() * 100);
						r.caption.start & 50 >= n && t.fadeIn(r.effects.fadeSpeed)
					}
					var s = e.options.social;
					s && (i.setSocial(s, e.URL, o), r.social.start && $("div.ilightbox-social", o).fadeIn(r.effects.fadeSpeed)), i.generateThumbnails(), "function" == typeof r.callback.onShow && r.callback.onShow.call(i, i.ui, a), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)
				}) : (o.show(), i.generateThumbnails(), "function" == typeof r.callback.onShow && r.callback.onShow.call(i, i.ui, a), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)) : r.show.effect ? o.fadeTo(e.speed, s, function() {
					"next" == t ? n.nextLock = !1 : n.prevLock = !1, i.generateThumbnails(), "function" == typeof r.callback.onShow && r.callback.onShow.call(i, i.ui, a), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)
				}) : (o.css({
					opacity: s
				}).show(), "next" == t ? n.nextLock = !1 : n.prevLock = !1, i.generateThumbnails(), "function" == typeof r.callback.onShow && r.callback.onShow.call(i, i.ui, a), "function" == typeof e.options.onShow && e.options.onShow.call(i, l)), setTimeout(function() {
					i.repositionPhoto()
				}, 0)
			},
			generateBoxes: function() {
				var e = this,
					t = e.vars,
					o = e.options;
				o.infinite && t.total >= 3 ? (t.current == t.total - 1 && (t.next = 0), 0 == t.current && (t.prev = t.total - 1)) : o.infinite = !1, e.loadContent(e.items[t.current], "current", o.show.speed), e.items[t.next] && e.loadContent(e.items[t.next], "next", o.show.speed), e.items[t.prev] && e.loadContent(e.items[t.prev], "prev", o.show.speed)
			},
			generateThumbnails: function() {
				var e = this,
					t = e.vars,
					o = e.options,
					i = null;
				if(t.thumbs && !e.vars.dontGenerateThumbs) {
					var n = t.thumbnails,
						r = $("div.ilightbox-thumbnails-container", n),
						a = $("div.ilightbox-thumbnails-grid", r),
						s = 0;
					a.removeAttr("style").empty(), $.each(e.items, function(l, c) {
						var u = t.current == l ? "ilightbox-active" : "",
							d = t.current == l ? o.thumbnails.activeOpacity : o.thumbnails.normalOpacity,
							h = c.options.thumbnail,
							p = $('<div class="ilightbox-thumbnail"></div>'),
							f = $('<div class="ilightbox-thumbnail-icon"></div>');
						p.css({
							opacity: 0
						}).addClass(u), "video" == c.type && "undefined" == typeof c.options.icon ? (f.addClass("ilightbox-thumbnail-video"), p.append(f)) : c.options.icon && (f.addClass("ilightbox-thumbnail-" + c.options.icon), p.append(f)), h && e.loadImage(h, function(t) {
							s++, t ? p.data({
								naturalWidth: t.width,
								naturalHeight: t.height
							}).append('<img src="' + h + '" border="0" />') : p.data({
								naturalWidth: o.thumbnails.maxWidth,
								naturalHeight: o.thumbnails.maxHeight
							}), clearTimeout(i), i = setTimeout(function() {
								e.positionThumbnails(n, r, a)
							}, 20), setTimeout(function() {
								p.fadeTo(o.effects.loadedFadeSpeed, d)
							}, 20 * s)
						}), a.append(p)
					}), e.vars.dontGenerateThumbs = !0
				}
			},
			positionThumbnails: function(e, t, o) {
				var i = this,
					n = i.vars,
					r = i.options,
					a = getViewport(),
					s = r.path.toLowerCase();
				e || (e = n.thumbnails), t || (t = $("div.ilightbox-thumbnails-container", e)), o || (o = $("div.ilightbox-thumbnails-grid", t));
				var l = $(".ilightbox-thumbnail", o),
					c = "horizontal" == s ? a.width - r.styles.pageOffsetX : l.eq(0).outerWidth() - r.styles.pageOffsetX,
					u = "horizontal" == s ? l.eq(0).outerHeight() - r.styles.pageOffsetY : a.height - r.styles.pageOffsetY,
					d = "horizontal" == s ? 0 : c,
					h = "horizontal" == s ? u : 0,
					p = $(".ilightbox-active", o),
					f = {};
				arguments.length < 3 && (l.css({
					opacity: r.thumbnails.normalOpacity
				}), p.css({
					opacity: r.thumbnails.activeOpacity
				})), l.each(function() {
					var e = $(this),
						t = e.data(),
						o = "horizontal" == s ? 0 : r.thumbnails.maxWidth;
					height = "horizontal" == s ? r.thumbnails.maxHeight : 0, dims = i.getNewDimenstions(o, height, t.naturalWidth, t.naturalHeight, !0), e.css({
						width: dims.width,
						height: dims.height
					}), "horizontal" == s && e.css({
						"float": "left"
					}), "horizontal" == s ? d += e.outerWidth() : h += e.outerHeight()
				}), f = {
					width: d,
					height: h
				}, o.css(f), f = {};
				var g = o.offset(),
					m = p.length ? p.offset() : {
						top: parseInt(u / 2),
						left: parseInt(c / 2)
					};
				g.top = g.top - $doc.scrollTop(), g.left = g.left - $doc.scrollLeft(), m.top = m.top - g.top - $doc.scrollTop(), m.left = m.left - g.left - $doc.scrollLeft(), "horizontal" == s ? (f.top = 0, f.left = parseInt(c / 2 - m.left - p.outerWidth() / 2)) : (f.top = parseInt(u / 2 - m.top - p.outerHeight() / 2), f.left = 0), arguments.length < 3 ? o.stop().animate(f, r.effects.repositionSpeed, "easeOutCirc") : o.css(f)
			},
			loadImage: function(e, t) {
				$.isArray(e) || (e = [e]);
				var o = this,
					i = e.length;
				i > 0 ? (o.showLoader(), $.each(e, function(n) {
					var r = new Image;
					r.onload = function() {
						i -= 1, 0 == i && (o.hideLoader(), t(r))
					}, r.onerror = r.onabort = function() {
						i -= 1, 0 == i && (o.hideLoader(), t(!1))
					}, r.src = e[n]
				})) : t(!1)
			},
			patchItemsEvents: function() {
				var e = this,
					t = e.vars,
					o = supportTouch ? "itap.iL" : "click.iL",
					i = supportTouch ? "click.iL" : "itap.iL";
				if(e.context && e.selector) {
					var n = $(e.selector, e.context);
					$(e.context).on(o, e.selector, function() {
						var o = $(this),
							i = n.index(o);
						return t.current = i, t.next = e.items[i + 1] ? i + 1 : null, t.prev = e.items[i - 1] ? i - 1 : null, e.addContents(), e.patchEvents(), !1
					}).on(i, e.selector, function() {
						return !1
					})
				} else $.each(e.itemsObject, function(n, r) {
					r.on(o, function() {
						return t.current = n, t.next = e.items[n + 1] ? n + 1 : null, t.prev = e.items[n - 1] ? n - 1 : null, e.addContents(), e.patchEvents(), !1
					}).on(i, function() {
						return !1
					})
				})
			},
			dispatchItemsEvents: function() {
				{
					var e = this;
					e.vars, e.options
				}
				e.context && e.selector ? $(e.context).off(".iL", e.selector) : $.each(e.itemsObject, function(e, t) {
					t.off(".iL")
				})
			},
			refresh: function() {
				var e = this;
				e.dispatchItemsEvents(), e.attachItems(), e.normalizeItems(), e.patchItemsEvents()
			},
			patchEvents: function() {
				function e(e) {
					o.isMobile || (o.mouseID || o.hideableElements.show(), o.mouseID = clearTimeout(o.mouseID), -1 === c.indexOf(e.target) && (o.mouseID = setTimeout(function() {
						o.hideableElements.hide(), o.mouseID = clearTimeout(o.mouseID)
					}, 3e3)))
				}
				var t = this,
					o = t.vars,
					i = t.options,
					n = i.path.toLowerCase(),
					r = $(".ilightbox-holder"),
					a = fullScreenApi.fullScreenEventName + ".iLightBox",
					s = 1e3,
					l = verticalDistanceThreshold = 100,
					c = [o.nextButton[0], o.prevButton[0], o.nextButton[0].firstChild, o.prevButton[0].firstChild];
				$win.bind("resize.iLightBox", function() {
					var e = getViewport();
					i.mobileOptimizer && !i.innerToolbar && (o.isMobile = e.width <= o.mobileMaxWidth), o.BODY[o.isMobile ? "addClass" : "removeClass"]("isMobile"), t.repositionPhoto(null), supportTouch && (clearTimeout(o.setTime), o.setTime = setTimeout(function() {
						var e = getScrollXY().y;
						window.scrollTo(0, e - 30), window.scrollTo(0, e + 30), window.scrollTo(0, e)
					}, 2e3)), o.thumbs && t.positionThumbnails()
				}).bind("keydown.iLightBox", function(e) {
					if(i.controls.keyboard) switch(e.keyCode) {
						case 13:
							e.shiftKey && i.keyboard.shift_enter && t.fullScreenAction();
							break;
						case 27:
							i.keyboard.esc && t.closeAction();
							break;
						case 37:
							i.keyboard.left && !o.lockKey && t.moveTo("prev");
							break;
						case 38:
							i.keyboard.up && !o.lockKey && t.moveTo("prev");
							break;
						case 39:
							i.keyboard.right && !o.lockKey && t.moveTo("next");
							break;
						case 40:
							i.keyboard.down && !o.lockKey && t.moveTo("next")
					}
				}), fullScreenApi.supportsFullScreen && $win.bind(a, function() {
					t.doFullscreen()
				});
				var u = [i.caption.show + ".iLightBox", i.caption.hide + ".iLightBox", i.social.show + ".iLightBox", i.social.hide + ".iLightBox"].filter(function(e, t, o) {
						return o.lastIndexOf(e) === t
					}),
					d = "";
				$.each(u, function(e, t) {
					0 != e && (d += " "), d += t
				}), $doc.on(clickEvent, ".ilightbox-overlay", function() {
					i.overlay.blur && t.closeAction()
				}).on(clickEvent, ".ilightbox-next, .ilightbox-next-button", function() {
					t.moveTo("next")
				}).on(clickEvent, ".ilightbox-prev, .ilightbox-prev-button", function() {
					t.moveTo("prev")
				}).on(clickEvent, ".ilightbox-thumbnail", function() {
					var e = $(this),
						i = $(".ilightbox-thumbnail", o.thumbnails),
						n = i.index(e);
					n != o.current && t.goTo(n)
				}).on(d, ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(e) {
					var t = $("div.ilightbox-caption", o.holder),
						n = $("div.ilightbox-social", o.holder),
						r = i.effects.fadeSpeed;
					o.nextLock || o.prevLock ? (e.type != i.caption.show || t.is(":visible") ? e.type == i.caption.hide && t.is(":visible") && t.fadeOut(r) : t.fadeIn(r), e.type != i.social.show || n.is(":visible") ? e.type == i.social.hide && n.is(":visible") && n.fadeOut(r) : n.fadeIn(r)) : (e.type != i.caption.show || t.is(":visible") ? e.type == i.caption.hide && t.is(":visible") && t.stop().fadeOut(r) : t.stop().fadeIn(r), e.type != i.social.show || n.is(":visible") ? e.type == i.social.hide && n.is(":visible") && n.stop().fadeOut(r) : n.stop().fadeIn(r))
				}).on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-wrapper", function(e) {
					o.lockWheel = "mouseenter" == e.type ? !0 : !1
				}).on(clickEvent, ".ilightbox-toolbar a.ilightbox-close, .ilightbox-toolbar a.ilightbox-fullscreen, .ilightbox-toolbar a.ilightbox-play, .ilightbox-toolbar a.ilightbox-pause", function() {
					var e = $(this);
					e.hasClass("ilightbox-fullscreen") ? t.fullScreenAction() : e.hasClass("ilightbox-play") ? (t.resume(), e.addClass("ilightbox-pause").removeClass("ilightbox-play")) : e.hasClass("ilightbox-pause") ? (t.pause(), e.addClass("ilightbox-play").removeClass("ilightbox-pause")) : t.closeAction()
				}).on(touchMoveEvent, ".ilightbox-overlay, .ilightbox-thumbnails-container", function(e) {
					e.preventDefault()
				}), i.controls.arrows && !supportTouch && $doc.on("mousemove.iLightBox", e), i.controls.slideshow && i.slideshow.pauseOnHover && $doc.on("mouseenter.iLightBox mouseleave.iLightBox", ".ilightbox-holder:not(.ilightbox-next, .ilightbox-prev)", function(e) {
					"mouseenter" == e.type && o.cycleID ? t.pause() : "mouseleave" == e.type && o.isPaused && t.resume()
				});
				var h = $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails");
				i.controls.mousewheel && h.on("mousewheel.iLightBox", function(e, i) {
					o.lockWheel || (e.preventDefault(), 0 > i ? t.moveTo("next") : i > 0 && t.moveTo("prev"))
				}), i.controls.swipe && r.on(touchStartEvent, function(e) {
					function a(e) {
						var t = $(this),
							o = m[e],
							i = [v.coords[0] - d.coords[0], v.coords[1] - d.coords[1]];
						t[0].style["horizontal" == n ? "left" : "top"] = ("horizontal" == n ? o.left - i[0] : o.top - i[1]) + "px"
					}

					function c(e) {
						if(v) {
							var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
							d = {
								time: (new Date).getTime(),
								coords: [t.pageX - f, t.pageY - p]
							}, r.each(a), e.preventDefault()
						}
					}

					function u() {
						r.each(function() {
							var e = $(this),
								t = e.data("offset") || {
									top: e.offset().top - p,
									left: e.offset().left - f
								},
								o = t.top,
								i = t.left;
							e.css(transform, gpuAcceleration).stop().animate({
								top: o,
								left: i
							}, 500, "easeOutCirc", function() {
								e.css(transform, "")
							})
						})
					}
					if(!(o.nextLock || o.prevLock || 1 == o.total || o.lockSwipe)) {
						o.BODY.addClass("ilightbox-closedhand");
						var d, h = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
							p = $doc.scrollTop(),
							f = $doc.scrollLeft(),
							g = [r.eq(0).offset(), r.eq(1).offset(), r.eq(2).offset()],
							m = [{
								top: g[0].top - p,
								left: g[0].left - f
							}, {
								top: g[1].top - p,
								left: g[1].left - f
							}, {
								top: g[2].top - p,
								left: g[2].left - f
							}],
							v = {
								time: (new Date).getTime(),
								coords: [h.pageX - f, h.pageY - p]
							};
						r.bind(touchMoveEvent, c), $doc.one(touchStopEvent, function() {
							r.unbind(touchMoveEvent, c), o.BODY.removeClass("ilightbox-closedhand"), v && d && ("horizontal" == n && d.time - v.time < s && abs(v.coords[0] - d.coords[0]) > l && abs(v.coords[1] - d.coords[1]) < verticalDistanceThreshold ? v.coords[0] > d.coords[0] ? o.current != o.total - 1 || i.infinite ? (o.isSwipe = !0, t.moveTo("next")) : u() : 0 != o.current || i.infinite ? (o.isSwipe = !0, t.moveTo("prev")) : u() : "vertical" == n && d.time - v.time < s && abs(v.coords[1] - d.coords[1]) > l && abs(v.coords[0] - d.coords[0]) < verticalDistanceThreshold ? v.coords[1] > d.coords[1] ? o.current != o.total - 1 || i.infinite ? (o.isSwipe = !0, t.moveTo("next")) : u() : 0 != o.current || i.infinite ? (o.isSwipe = !0, t.moveTo("prev")) : u() : u()), v = d = undefined
						})
					}
				})
			},
			goTo: function(e) {
				var t = this,
					o = t.vars,
					i = t.options,
					n = e - o.current;
				if(i.infinite && (e == o.total - 1 && 0 == o.current && (n = -1), o.current == o.total - 1 && 0 == e && (n = 1)), 1 == n) t.moveTo("next");
				else if(-1 == n) t.moveTo("prev");
				else {
					if(o.nextLock || o.prevLock) return !1;
					"function" == typeof i.callback.onBeforeChange && i.callback.onBeforeChange.call(t, t.ui), i.linkId && (o.hashLock = !0, window.location.hash = i.linkId + "/" + e), t.items[e] && (t.items[e].options.mousewheel ? t.vars.lockWheel = !1 : o.lockWheel = !0, o.lockSwipe = t.items[e].options.swipe ? !1 : !0), $.each([o.holder, o.nextPhoto, o.prevPhoto], function(e, t) {
						t.css(transform, gpuAcceleration).fadeOut(i.effects.loadedFadeSpeed)
					}), o.current = e, o.next = e + 1, o.prev = e - 1, t.createUI(), setTimeout(function() {
						t.generateBoxes()
					}, i.effects.loadedFadeSpeed + 50), $(".ilightbox-thumbnail", o.thumbnails).removeClass("ilightbox-active").eq(e).addClass("ilightbox-active"), t.positionThumbnails(), i.linkId && setTimeout(function() {
						o.hashLock = !1
					}, 55), i.infinite || (o.nextButton.add(o.prevButton).add(o.innerPrevButton).add(o.innerNextButton).removeClass("disabled"), 0 == o.current && o.prevButton.add(o.innerPrevButton).addClass("disabled"), o.current >= o.total - 1 && o.nextButton.add(o.innerNextButton).addClass("disabled")), t.resetCycle(), "function" == typeof i.callback.onAfterChange && i.callback.onAfterChange.call(t, t.ui)
				}
			},
			moveTo: function(e) {
				var t = this,
					o = t.vars,
					i = t.options,
					n = i.path.toLowerCase(),
					r = getViewport(),
					a = i.effects.switchSpeed;
				if(o.nextLock || o.prevLock) return !1;
				var s = "next" == e ? o.next : o.prev;
				if(i.linkId && (o.hashLock = !0, window.location.hash = i.linkId + "/" + s), "next" == e) {
					if(!t.items[s]) return !1;
					var l = o.nextPhoto,
						c = o.holder,
						u = o.prevPhoto,
						d = "ilightbox-prev",
						h = "ilightbox-next"
				} else if("prev" == e) {
					if(!t.items[s]) return !1;
					var l = o.prevPhoto,
						c = o.holder,
						u = o.nextPhoto,
						d = "ilightbox-next",
						h = "ilightbox-prev"
				}
				"function" == typeof i.callback.onBeforeChange && i.callback.onBeforeChange.call(t, t.ui), "next" == e ? o.nextLock = !0 : o.prevLock = !0;
				var p = $("div.ilightbox-caption", c),
					f = $("div.ilightbox-social", c);
				if(p.length && p.stop().fadeOut(a, function() {
						$(this).remove()
					}), f.length && f.stop().fadeOut(a, function() {
						$(this).remove()
					}), t.items[s].caption) {
					t.setCaption(t.items[s], l);
					var g = $("div.ilightbox-caption", l),
						m = parseInt(g.outerHeight() / l.outerHeight() * 100);
					i.caption.start && 50 >= m && g.fadeIn(a)
				}
				var v = t.items[s].options.social;
				v && (t.setSocial(v, t.items[s].URL, l), i.social.start && $("div.ilightbox-social", l).fadeIn(i.effects.fadeSpeed)), $.each([l, c, u], function(e, t) {
					t.removeClass("ilightbox-next ilightbox-prev")
				});
				var b = l.data("offset"),
					x = r.width - i.styles.pageOffsetX,
					w = r.height - i.styles.pageOffsetY,
					y = b.newDims.width,
					S = b.newDims.height,
					T = b.thumbsOffset,
					L = b.diff,
					k = parseInt(w / 2 - S / 2 - L.H - T.H / 2),
					A = parseInt(x / 2 - y / 2 - L.W - T.W / 2);
				l.css(transform, gpuAcceleration).animate({
					top: k,
					left: A,
					opacity: 1
				}, a, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
					l.css(transform, "")
				}), $("div.ilightbox-container", l).animate({
					width: y,
					height: S
				}, a, o.isSwipe ? "easeOutCirc" : "easeInOutCirc");
				var I = c.data("offset"),
					C = I.object;
				L = I.diff, y = I.newDims.width, S = I.newDims.height, y = parseInt(y * i.styles["next" == e ? "prevScale" : "nextScale"]), S = parseInt(S * i.styles["next" == e ? "prevScale" : "nextScale"]), k = parseInt("horizontal" == n ? w / 2 - C.offsetY - S / 2 - L.H - T.H / 2 : w - C.offsetX - L.H - T.H / 2), "prev" == e ? A = parseInt("horizontal" == n ? x - C.offsetX - L.W - T.W / 2 : x / 2 - y / 2 - L.W - C.offsetY - T.W / 2) : (k = "horizontal" == n ? k : parseInt(C.offsetX - L.H - S - T.H / 2), A = parseInt("horizontal" == n ? C.offsetX - L.W - y - T.W / 2 : x / 2 - C.offsetY - y / 2 - L.W - T.W / 2)), $("div.ilightbox-container", c).animate({
					width: y,
					height: S
				}, a, o.isSwipe ? "easeOutCirc" : "easeInOutCirc"), c.addClass(d).css(transform, gpuAcceleration).animate({
					top: k,
					left: A,
					opacity: i.styles.prevOpacity
				}, a, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
					c.css(transform, ""), $(".ilightbox-thumbnail", o.thumbnails).removeClass("ilightbox-active").eq(s).addClass("ilightbox-active"), t.positionThumbnails(), t.items[s] && (o.lockWheel = t.items[s].options.mousewheel ? !1 : !0, o.lockSwipe = t.items[s].options.swipe ? !1 : !0), o.isSwipe = !1, "next" == e ? (o.nextPhoto = u, o.prevPhoto = c, o.holder = l, o.nextPhoto.hide(), o.next = o.next + 1, o.prev = o.current, o.current = o.current + 1, i.infinite && (o.current > o.total - 1 && (o.current = 0), o.current == o.total - 1 && (o.next = 0), 0 == o.current && (o.prev = o.total - 1)), t.createUI(), t.items[o.next] ? t.loadContent(t.items[o.next], "next") : o.nextLock = !1) : (o.prevPhoto = u, o.nextPhoto = c, o.holder = l, o.prevPhoto.hide(), o.next = o.current, o.current = o.prev, o.prev = o.current - 1, i.infinite && (o.current == o.total - 1 && (o.next = 0), 0 == o.current && (o.prev = o.total - 1)), t.createUI(), t.items[o.prev] ? t.loadContent(t.items[o.prev], "prev") : o.prevLock = !1), i.linkId && setTimeout(function() {
						o.hashLock = !1
					}, 55), i.infinite || (o.nextButton.add(o.prevButton).add(o.innerPrevButton).add(o.innerNextButton).removeClass("disabled"), 0 == o.current && o.prevButton.add(o.innerPrevButton).addClass("disabled"), o.current >= o.total - 1 && o.nextButton.add(o.innerNextButton).addClass("disabled")), t.repositionPhoto(), t.resetCycle(), "function" == typeof i.callback.onAfterChange && i.callback.onAfterChange.call(t, t.ui)
				}), k = "horizontal" == n ? getPixel(u, "top") : parseInt("next" == e ? -(w / 2) - u.outerHeight() : 2 * k), A = "horizontal" == n ? parseInt("next" == e ? -(x / 2) - u.outerWidth() : 2 * A) : getPixel(u, "left"), u.css(transform, gpuAcceleration).animate({
					top: k,
					left: A,
					opacity: i.styles.nextOpacity
				}, a, o.isSwipe ? "easeOutCirc" : "easeInOutCirc", function() {
					u.css(transform, "")
				}).addClass(h)
			},
			setCaption: function(e, t) {
				var o = $('<div class="ilightbox-caption"></div>');
				e.caption && (o.html(e.caption), $("div.ilightbox-container", t).append(o))
			},
			normalizeSocial: function(e, t) {
				var o = this,
					i = (o.vars, o.options),
					n = window.location.href;
				return $.each(e, function(o, r) {
					if(!r) return !0;
					var a, s, l = o.toLowerCase();
					switch(l) {
						case "facebook":
							a = "http://www.facebook.com/share.php?v=4&src=bm&u={URL}", s = "Share on Facebook";
							break;
						case "twitter":
							a = "http://twitter.com/home?status={URL}", s = "Share on Twitter";
							break;
						case "googleplus":
							a = "https://plus.google.com/share?url={URL}", s = "Share on Google+";
							break;
						case "delicious":
							a = "http://delicious.com/post?url={URL}", s = "Share on Delicious";
							break;
						case "digg":
							a = "http://digg.com/submit?phase=2&url={URL}", s = "Share on Digg";
							break;
						case "reddit":
							a = "http://reddit.com/submit?url={URL}", s = "Share on reddit"
					}
					e[o] = {
						URL: r.URL && absolutizeURI(n, r.URL) || i.linkId && window.location.href || "string" != typeof t && n || t && absolutizeURI(n, t) || n,
						source: r.source || a || r.URL && absolutizeURI(n, r.URL) || t && absolutizeURI(n, t),
						text: r.text || s || "Share on " + o,
						width: "undefined" == typeof r.width || isNaN(r.width) ? 640 : parseInt(r.width),
						height: r.height || 360
					}
				}), e
			},
			setSocial: function(e, t, o) {
				var i = this,
					n = $('<div class="ilightbox-social"></div>'),
					r = "<ul>";
				e = i.normalizeSocial(e, t), $.each(e, function(e, t) {
					var o = (e.toLowerCase(), t.source.replace(/\{URL\}/g, encodeURIComponent(t.URL).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")));
					r += '<li class="' + e + '"><a href="' + o + '" onclick="javascript:window.open(this.href' + (t.width <= 0 || t.height <= 0 ? "" : ", '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=" + t.height + ",width=" + t.width + ",left=40,top=40'") + ');return false;" title="' + t.text + '" target="_blank"></a></li>'
				}), r += "</ul>", n.html(r), $("div.ilightbox-container", o).append(n)
			},
			fullScreenAction: function() {
				{
					var e = this;
					e.vars
				}
				fullScreenApi.supportsFullScreen ? fullScreenApi.isFullScreen() ? fullScreenApi.cancelFullScreen(document.documentElement) : fullScreenApi.requestFullScreen(document.documentElement) : e.doFullscreen()
			},
			doFullscreen: function() {
				var e = this,
					t = e.vars,
					o = getViewport(),
					i = e.options;
				if(i.fullAlone) {
					var n = t.holder,
						r = e.items[t.current],
						a = o.width,
						s = o.height,
						l = [n, t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.overlay, t.toolbar, t.thumbnails, t.loader],
						c = [t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.loader, t.thumbnails];
					if(t.isInFullScreen) t.isInFullScreen = t.lockKey = t.lockWheel = t.lockSwipe = !1, t.overlay.css({
						opacity: e.options.overlay.opacity
					}), $.each(c, function(e, t) {
						t.show()
					}), t.fullScreenButton.attr("title", i.text.enterFullscreen), n.data({
						naturalWidth: n.data("naturalWidthOld"),
						naturalHeight: n.data("naturalHeightOld"),
						naturalWidthOld: null,
						naturalHeightOld: null
					}), $.each(l, function(e, t) {
						t.removeClass("ilightbox-fullscreen")
					}), "function" == typeof i.callback.onExitFullScreen && i.callback.onExitFullScreen.call(e, e.ui);
					else {
						if(t.isInFullScreen = t.lockKey = t.lockWheel = t.lockSwipe = !0, t.overlay.css({
								opacity: 1
							}), $.each(c, function(e, t) {
								t.hide()
							}), t.fullScreenButton.attr("title", i.text.exitFullscreen), -1 != i.fullStretchTypes.indexOf(r.type)) n.data({
							naturalWidthOld: n.data("naturalWidth"),
							naturalHeightOld: n.data("naturalHeight"),
							naturalWidth: a,
							naturalHeight: s
						});
						else {
							var o = r.options.fullViewPort || i.fullViewPort || "",
								u = a,
								d = s,
								h = n.data("naturalWidth"),
								p = n.data("naturalHeight");
							if("fill" == o.toLowerCase()) d = u / h * p, s > d && (u = s / p * h, d = s);
							else if("fit" == o.toLowerCase()) {
								var f = e.getNewDimenstions(u, d, h, p, !0);
								u = f.width, d = f.height
							} else if("stretch" == o.toLowerCase()) u = u, d = d;
							else {
								var g = h > u || p > d ? !0 : !1,
									f = e.getNewDimenstions(u, d, h, p, g);
								u = f.width, d = f.height
							}
							n.data({
								naturalWidthOld: n.data("naturalWidth"),
								naturalHeightOld: n.data("naturalHeight"),
								naturalWidth: u,
								naturalHeight: d
							})
						}
						$.each(l, function(e, t) {
							t.addClass("ilightbox-fullscreen")
						}), "function" == typeof i.callback.onEnterFullScreen && i.callback.onEnterFullScreen.call(e, e.ui)
					}
				} else t.isInFullScreen = t.isInFullScreen ? !1 : !0;
				e.repositionPhoto(!0)
			},
			closeAction: function() {
				var e = this,
					t = e.vars,
					o = e.options;
				$win.unbind(".iLightBox"), $doc.off(".iLightBox"), t.isInFullScreen && fullScreenApi.cancelFullScreen(document.documentElement), $(".ilightbox-overlay, .ilightbox-holder, .ilightbox-thumbnails").off(".iLightBox"), o.hide.effect ? t.overlay.stop().fadeOut(o.hide.speed, function() {
					t.overlay.remove(), t.BODY.removeClass("ilightbox-noscroll").off(".iLightBox")
				}) : (t.overlay.remove(), t.BODY.removeClass("ilightbox-noscroll").off(".iLightBox"));
				var i = [t.toolbar, t.holder, t.nextPhoto, t.prevPhoto, t.nextButton, t.prevButton, t.loader, t.thumbnails];
				$.each(i, function(e, t) {
					t.removeAttr("style").remove()
				}), t.dontGenerateThumbs = t.isInFullScreen = !1, window.iLightBox = null, o.linkId && (t.hashLock = !0, removeHash(), setTimeout(function() {
					t.hashLock = !1
				}, 55)), "function" == typeof o.callback.onHide && o.callback.onHide.call(e, e.ui)
			},
			repositionPhoto: function() {
				var e = this,
					t = e.vars,
					o = e.options,
					i = o.path.toLowerCase(),
					n = getViewport(),
					r = n.width,
					a = n.height,
					s = t.isInFullScreen && o.fullAlone || t.isMobile ? 0 : "horizontal" == i ? 0 : t.thumbnails.outerWidth(),
					l = t.isMobile ? t.toolbar.outerHeight() : t.isInFullScreen && o.fullAlone ? 0 : "horizontal" == i ? t.thumbnails.outerHeight() : 0,
					c = t.isInFullScreen && o.fullAlone ? r : r - o.styles.pageOffsetX,
					u = t.isInFullScreen && o.fullAlone ? a : a - o.styles.pageOffsetY,
					d = "horizontal" == i ? parseInt(e.items[t.next] || e.items[t.prev] ? 2 * (o.styles.nextOffsetX + o.styles.prevOffsetX) : 30 >= c / 10 ? 30 : c / 10) : parseInt(30 >= c / 10 ? 30 : c / 10) + s,
					h = "horizontal" == i ? parseInt(30 >= u / 10 ? 30 : u / 10) + l : parseInt(e.items[t.next] || e.items[t.prev] ? 2 * (o.styles.nextOffsetX + o.styles.prevOffsetX) : 30 >= u / 10 ? 30 : u / 10),
					p = {
						type: "current",
						width: c,
						height: u,
						item: e.items[t.current],
						offsetW: d,
						offsetH: h,
						thumbsOffsetW: s,
						thumbsOffsetH: l,
						animate: arguments.length,
						holder: t.holder
					};
				e.repositionEl(p), e.items[t.next] && (p = $.extend(p, {
					type: "next",
					item: e.items[t.next],
					offsetX: o.styles.nextOffsetX,
					offsetY: o.styles.nextOffsetY,
					holder: t.nextPhoto
				}), e.repositionEl(p)), e.items[t.prev] && (p = $.extend(p, {
					type: "prev",
					item: e.items[t.prev],
					offsetX: o.styles.prevOffsetX,
					offsetY: o.styles.prevOffsetY,
					holder: t.prevPhoto
				}), e.repositionEl(p));
				var f = "horizontal" == i ? {
					left: parseInt(c / 2 - t.loader.outerWidth() / 2)
				} : {
					top: parseInt(u / 2 - t.loader.outerHeight() / 2)
				};
				t.loader.css(f)
			},
			repositionEl: function(e) {
				var t = this,
					o = t.vars,
					i = t.options,
					n = i.path.toLowerCase(),
					r = "current" == e.type && o.isInFullScreen && i.fullAlone ? e.width : e.width - e.offsetW,
					a = "current" == e.type && o.isInFullScreen && i.fullAlone ? e.height : e.height - e.offsetH,
					s = e.item,
					l = e.item.options,
					c = e.holder,
					u = e.offsetX || 0,
					d = e.offsetY || 0,
					h = e.thumbsOffsetW,
					p = e.thumbsOffsetH;
				"current" == e.type ? ("number" == typeof l.width && l.width && (r = o.isInFullScreen && i.fullAlone && (-1 != i.fullStretchTypes.indexOf(s.type) || l.fullViewPort || i.fullViewPort) ? r : l.width > r ? r : l.width), "number" == typeof l.height && l.height && (a = o.isInFullScreen && i.fullAlone && (-1 != i.fullStretchTypes.indexOf(s.type) || l.fullViewPort || i.fullViewPort) ? a : l.height > a ? a : l.height)) : ("number" == typeof l.width && l.width && (r = l.width > r ? r : l.width), "number" == typeof l.height && l.height && (a = l.height > a ? a : l.height)), a = parseInt(a - $(".ilightbox-inner-toolbar", c).outerHeight());
				var f = "string" == typeof l.width && -1 != l.width.indexOf("%") ? percentToValue(parseInt(l.width.replace("%", "")), e.width) : c.data("naturalWidth"),
					g = "string" == typeof l.height && -1 != l.height.indexOf("%") ? percentToValue(parseInt(l.height.replace("%", "")), e.height) : c.data("naturalHeight"),
					m = "string" == typeof l.width && -1 != l.width.indexOf("%") || "string" == typeof l.height && -1 != l.height.indexOf("%") ? {
						width: f,
						height: g
					} : t.getNewDimenstions(r, a, f, g),
					v = $.extend({}, m, {});
				"prev" == e.type || "next" == e.type ? (f = parseInt(m.width * ("next" == e.type ? i.styles.nextScale : i.styles.prevScale)), g = parseInt(m.height * ("next" == e.type ? i.styles.nextScale : i.styles.prevScale))) : (f = m.width, g = m.height);
				var b = parseInt((getPixel(c, "padding-left") + getPixel(c, "padding-right") + getPixel(c, "border-left-width") + getPixel(c, "border-right-width")) / 2),
					x = parseInt((getPixel(c, "padding-top") + getPixel(c, "padding-bottom") + getPixel(c, "border-top-width") + getPixel(c, "border-bottom-width") + $(".ilightbox-inner-toolbar", c).outerHeight()) / 2);
				switch(e.type) {
					case "current":
						var w = parseInt(e.height / 2 - g / 2 - x - p / 2),
							y = parseInt(e.width / 2 - f / 2 - b - h / 2);
						break;
					case "next":
						var w = parseInt("horizontal" == n ? e.height / 2 - d - g / 2 - x - p / 2 : e.height - u - x - p / 2),
							y = parseInt("horizontal" == n ? e.width - u - b - h / 2 : e.width / 2 - f / 2 - b - d - h / 2);
						break;
					case "prev":
						var w = parseInt("horizontal" == n ? e.height / 2 - d - g / 2 - x - p / 2 : u - x - g - p / 2),
							y = parseInt("horizontal" == n ? u - b - f - h / 2 : e.width / 2 - d - f / 2 - b - h / 2)
				}
				c.data("offset", {
					top: w,
					left: y,
					newDims: v,
					diff: {
						W: b,
						H: x
					},
					thumbsOffset: {
						W: h,
						H: p
					},
					object: e
				}), e.animate > 0 && i.effects.reposition ? (c.css(transform, gpuAcceleration).stop().animate({
					top: w,
					left: y
				}, i.effects.repositionSpeed, "easeOutCirc", function() {
					c.css(transform, "")
				}), $("div.ilightbox-container", c).stop().animate({
					width: f,
					height: g
				}, i.effects.repositionSpeed, "easeOutCirc"), $("div.ilightbox-inner-toolbar", c).stop().animate({
					width: f
				}, i.effects.repositionSpeed, "easeOutCirc", function() {
					$(this).css("overflow", "visible")
				})) : (c.css({
					top: w,
					left: y
				}), $("div.ilightbox-container", c).css({
					width: f,
					height: g
				}), $("div.ilightbox-inner-toolbar", c).css({
					width: f
				}))
			},
			resume: function(e) {
				var t = this,
					o = t.vars,
					i = t.options;
				!i.slideshow.pauseTime || i.controls.slideshow && o.total <= 1 || e < o.isPaused || (o.isPaused = 0, o.cycleID && (o.cycleID = clearTimeout(o.cycleID)), o.cycleID = setTimeout(function() {
					o.current == o.total - 1 ? t.goTo(0) : t.moveTo("next")
				}, i.slideshow.pauseTime))
			},
			pause: function(e) {
				{
					var t = this,
						o = t.vars;
					t.options
				}
				e < o.isPaused || (o.isPaused = e || 100, o.cycleID && (o.cycleID = clearTimeout(o.cycleID)))
			},
			resetCycle: function() {
				var e = this,
					t = e.vars,
					o = e.options;
				o.controls.slideshow && t.cycleID && !t.isPaused && e.resume()
			},
			getNewDimenstions: function(e, t, o, i, n) {
				var r = this;
				factor = e ? t ? min(e / o, t / i) : e / o : t / i, n || (factor > r.options.maxScale ? factor = r.options.maxScale : factor < r.options.minScale && (factor = r.options.minScale));
				var a = r.options.keepAspectRatio ? round(o * factor) : e,
					s = r.options.keepAspectRatio ? round(i * factor) : t;
				return {
					width: a,
					height: s,
					ratio: factor
				}
			},
			setOption: function(e) {
				var t = this;
				t.options = $.extend(!0, t.options, e || {}), t.refresh()
			},
			availPlugins: function() {
				var e = this,
					t = document.createElement("video");
				e.plugins = {
					quicktime: parseInt(PluginDetect.getVersion("QuickTime")) >= 0 ? !0 : !1,
					html5H264: !(!t.canPlayType || !t.canPlayType("video/mp4").replace(/no/, "")),
					html5WebM: !(!t.canPlayType || !t.canPlayType("video/webm").replace(/no/, "")),
					html5Vorbis: !(!t.canPlayType || !t.canPlayType("video/ogg").replace(/no/, "")),
					html5QuickTime: !(!t.canPlayType || !t.canPlayType("video/quicktime").replace(/no/, ""))
				}
			},
			addContent: function(e, t) {
				var o, i = this;
				switch(t.type) {
					case "video":
						var n = !1,
							r = t.videoType,
							a = t.options.html5video;
						("video/mp4" == r || "mp4" == t.ext || "m4v" == t.ext || a.h264) && i.plugins.html5H264 ? (t.ext = "mp4", t.URL = a.h264 || t.URL) : a.webm && i.plugins.html5WebM ? (t.ext = "webm", t.URL = a.webm || t.URL) : a.ogg && i.plugins.html5Vorbis && (t.ext = "ogv", t.URL = a.ogg || t.URL), !i.plugins.html5H264 || "video/mp4" != r && "mp4" != t.ext && "m4v" != t.ext ? !i.plugins.html5WebM || "video/webm" != r && "webm" != t.ext ? !i.plugins.html5Vorbis || "video/ogg" != r && "ogv" != t.ext ? !i.plugins.html5QuickTime || "video/quicktime" != r && "mov" != t.ext && "qt" != t.ext || (n = !0, r = "video/quicktime") : (n = !0, r = "video/ogg") : (n = !0, r = "video/webm") : (n = !0, r = "video/mp4"), n ? o = $("<video />", {
							width: "100%",
							height: "100%",
							preload: a.preload,
							autoplay: a.autoplay,
							poster: a.poster,
							controls: a.controls
						}).append($("<source />", {
							src: t.URL,
							type: r
						})) : i.plugins.quicktime ? (o = $("<object />", {
							type: "video/quicktime",
							pluginspage: pluginspages.quicktime
						}).attr({
							data: t.URL,
							width: "100%",
							height: "100%"
						}).append($("<param />", {
							name: "src",
							value: t.URL
						})).append($("<param />", {
							name: "autoplay",
							value: "false"
						})).append($("<param />", {
							name: "loop",
							value: "false"
						})).append($("<param />", {
							name: "scale",
							value: "tofit"
						})), browser.msie && (o = QT_GenerateOBJECTText(t.URL, "100%", "100%", "", "SCALE", "tofit", "AUTOPLAY", "false", "LOOP", "false"))) : o = $("<span />", {
							"class": "ilightbox-alert",
							html: i.options.errors.missingPlugin.replace("{pluginspage}", pluginspages.quicktime).replace("{type}", "QuickTime")
						});
						break;
					case "iframe":
						o = $("<iframe />").attr({
							width: "number" == typeof t.options.width && t.options.width && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.width : "100%",
							height: "number" == typeof t.options.height && t.options.height && "1" == i.options.minScale && "1" == i.options.maxScale ? t.options.height : "100%",
							src: t.URL,
							frameborder: 0,
							hspace: 0,
							vspace: 0,
							scrolling: supportTouch ? "auto" : "scroll",
							webkitAllowFullScreen: "",
							mozallowfullscreen: "",
							allowFullScreen: ""
						});
						break;
					case "inline":
						o = $('<div class="ilightbox-wrapper"></div>').html($(t.URL).clone(!0));
						break;
					case "html":
						var o, s = t.URL;
						if(s[0].nodeName) o = $('<div class="ilightbox-wrapper"></div>').html(s);
						else {
							var l = $(t.URL),
								c = l.selector ? $("<div>" + l + "</div>") : l;
							o = $('<div class="ilightbox-wrapper"></div>').html(c)
						}
				}
				return $("div.ilightbox-container", e).empty().html(o), "video" === o[0].tagName.toLowerCase() && browser.webkit && setTimeout(function() {
					var e = o[0].currentSrc + "?" + floor(3e4 * random());
					o[0].currentSrc = e, o[0].src = e
				}), o
			},
			ogpRecognition: function(e, t) {
				var o = this,
					i = e.URL;
				o.showLoader(), doAjax(i, function(e) {
					if(o.hideLoader(), e) {
						var i = new Object;
						if(i.length = !1, i.url = e.url, 200 == e.status) {
							var n = e.results,
								r = n.type,
								a = n.source;
							i.source = a.src, i.width = a.width && parseInt(a.width) || 0, i.height = a.height && parseInt(a.height) || 0, i.type = r, i.thumbnail = a.thumbnail || n.images[0], i.html5video = n.html5video || {}, i.length = !0, -1 != a.type.indexOf("video/") ? i.type = "video" : -1 != a.type.indexOf("/html") ? i.type = "iframe" : -1 != a.type.indexOf("image/") && (i.type = "image")
						} else if("undefined" != typeof e.response) throw e.response;
						t.call(this, i.length ? i : !1)
					}
				})
			},
			hashChangeHandler: function(e) {
				var t = this,
					o = t.vars,
					i = t.options,
					n = e || window.location.href,
					r = parseURI(n).hash,
					a = r.split("/"),
					s = a[1];
				if(!(o.hashLock || "#" + i.linkId != a[0] && r.length > 1))
					if(s) {
						var l = a[1] || 0;
						if(t.items[l]) {
							var c = $(".ilightbox-overlay");
							c.length && c.attr("linkid") == i.linkId ? t.goTo(l) : t.itemsObject[l].trigger(supportTouch ? "itap" : "click")
						} else {
							var c = $(".ilightbox-overlay");
							c.length && t.closeAction()
						}
					} else {
						var c = $(".ilightbox-overlay");
						c.length && t.closeAction()
					}
			}
		}, $.fn.iLightBox = function() {
			var e = arguments,
				t = $.isPlainObject(e[0]) ? e[0] : e[1],
				o = $.isArray(e[0]) || "string" == typeof e[0] ? e[0] : e[1];
			t || (t = {});
			var i = $.extend(!0, {
					attr: "href",
					path: "vertical",
					skin: "dark",
					linkId: !1,
					infinite: !1,
					startFrom: 0,
					randomStart: !1,
					keepAspectRatio: !0,
					maxScale: 1,
					minScale: .2,
					innerToolbar: !1,
					smartRecognition: !1,
					mobileOptimizer: !0,
					fullAlone: !0,
					fullViewPort: null,
					fullStretchTypes: "video",
					overlay: {
						blur: !0,
						opacity: .85
					},
					controls: {
						arrows: !1,
						slideshow: !1,
						toolbar: !0,
						fullscreen: !0,
						thumbnail: !0,
						keyboard: !0,
						mousewheel: !0,
						swipe: !0
					},
					keyboard: {
						left: !0,
						right: !0,
						up: !0,
						down: !0,
						esc: !0,
						shift_enter: !0
					},
					show: {
						effect: !0,
						speed: 300,
						title: !0
					},
					hide: {
						effect: !0,
						speed: 300
					},
					caption: {
						start: !0,
						show: "mouseenter",
						hide: "mouseleave"
					},
					social: {
						start: !0,
						show: "mouseenter",
						hide: "mouseleave",
						buttons: !1
					},
					styles: {
						pageOffsetX: 0,
						pageOffsetY: 0,
						nextOffsetX: 45,
						nextOffsetY: 0,
						nextOpacity: 1,
						nextScale: 1,
						prevOffsetX: 45,
						prevOffsetY: 0,
						prevOpacity: 1,
						prevScale: 1
					},
					thumbnails: {
						maxWidth: 120,
						maxHeight: 80,
						normalOpacity: 1,
						activeOpacity: .6
					},
					effects: {
						reposition: !0,
						repositionSpeed: 200,
						switchSpeed: 500,
						loadedFadeSpeed: 180,
						fadeSpeed: 200
					},
					slideshow: {
						pauseTime: 5e3,
						pauseOnHover: !1,
						startPaused: !0
					},
					text: {
						close: "Press Esc to close",
						enterFullscreen: "Enter Fullscreen (Shift+Enter)",
						exitFullscreen: "Exit Fullscreen (Shift+Enter)",
						slideShow: "Slideshow",
						next: "Next",
						previous: "Previous"
					},
					errors: {
						loadImage: "An error occurred when trying to load photo.",
						loadContents: "An error occurred when trying to load contents.",
						missingPlugin: "The content your are attempting to view requires the <a href='{pluginspage}' target='_blank'>{type} plugin</a>."
					},
					ajaxSetup: {
						url: "",
						beforeSend: function() {},
						cache: !1,
						complete: function() {},
						crossDomain: !1,
						error: function() {},
						success: function() {},
						global: !0,
						ifModified: !1,
						username: null,
						password: null,
						type: "GET"
					},
					callback: {}
				}, t),
				n = $.isArray(o) || "string" == typeof o ? !0 : !1;
			if(o = $.isArray(o) ? o : new Array, "string" == typeof e[0] && (o[0] = e[0]), version_compare($.fn.jquery, "1.8", ">=")) {
				var r = new iLightBox($(this), i, o, n);
				return {
					close: function() {
						r.closeAction()
					},
					fullscreen: function() {
						r.fullScreenAction()
					},
					moveNext: function() {
						r.moveTo("next")
					},
					movePrev: function() {
						r.moveTo("prev")
					},
					goTo: function(e) {
						r.goTo(e)
					},
					refresh: function() {
						r.refresh()
					},
					reposition: function() {
						arguments.length > 0 ? r.repositionPhoto(!0) : r.repositionPhoto()
					},
					setOption: function(e) {
						r.setOption(e)
					},
					destroy: function() {
						r.closeAction(), r.dispatchItemsEvents()
					}
				}
			}
			throw "The jQuery version that was loaded is too old. iLightBox requires jQuery 1.8+"
		}, $.iLightBox = function() {
			return $.fn.iLightBox(arguments[0], arguments[1])
		}, $.extend($.easing, {
			easeInCirc: function(e, t, o, i, n) {
				return -i * (sqrt(1 - (t /= n) * t) - 1) + o
			},
			easeOutCirc: function(e, t, o, i, n) {
				return i * sqrt(1 - (t = t / n - 1) * t) + o
			},
			easeInOutCirc: function(e, t, o, i, n) {
				return(t /= n / 2) < 1 ? -i / 2 * (sqrt(1 - t * t) - 1) + o : i / 2 * (sqrt(1 - (t -= 2) * t) + 1) + o
			}
		}),
		function() {
			$.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function() {});
			var e = {
				startEvent: "touchstart.iTap",
				endEvent: "touchend.iTap"
			};
			$.event.special.itap = {
				setup: function() {
					var t, o, i = this,
						n = $(this);
					n.bind(e.startEvent, function() {
						t = getScrollXY(), n.one(e.endEvent, function(e) {
							o = getScrollXY();
							var n = e || window.event;
							e = $.event.fix(n), e.type = "itap", t && o && t.x == o.x && t.y == o.y && ($.event.dispatch || $.event.handle).call(i, e), t = o = undefined
						})
					})
				},
				teardown: function() {
					$(this).unbind(e.startEvent)
				}
			}
		}(),
		function() {
			if(fullScreenApi = {
					supportsFullScreen: !1,
					isFullScreen: function() {
						return !1
					},
					requestFullScreen: function() {},
					cancelFullScreen: function() {},
					fullScreenEventName: "",
					prefix: ""
				}, browserPrefixes = "webkit moz o ms khtml".split(" "), "undefined" != typeof document.cancelFullScreen) fullScreenApi.supportsFullScreen = !0;
			else
				for(var e = 0, t = browserPrefixes.length; t > e; e++)
					if(fullScreenApi.prefix = browserPrefixes[e], "undefined" != typeof document[fullScreenApi.prefix + "CancelFullScreen"]) {
						fullScreenApi.supportsFullScreen = !0;
						break
					}
			fullScreenApi.supportsFullScreen && (fullScreenApi.fullScreenEventName = fullScreenApi.prefix + "fullscreenchange", fullScreenApi.isFullScreen = function() {
				switch(this.prefix) {
					case "":
						return document.fullScreen;
					case "webkit":
						return document.webkitIsFullScreen;
					default:
						return document[this.prefix + "FullScreen"]
				}
			}, fullScreenApi.requestFullScreen = function(e) {
				return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
			}, fullScreenApi.cancelFullScreen = function() {
				return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
			})
		}(),
		function() {
			function e(e) {
				e = e.toLowerCase();
				var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
				return {
					browser: t[1] || "",
					version: t[2] || "0"
				}
			}
			var t = e(navigator.userAgent);
			browser = {}, t.browser && (browser[t.browser] = !0, browser.version = t.version), browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0)
		}(),
		function() {
			function e(e) {
				for(var i = 0, n = t.length; n > i; i++) {
					var r = t[i] ? t[i] + e.charAt(0).toUpperCase() + e.slice(1) : e;
					if(o.style[r] !== undefined) return r
				}
			}
			var t = ["", "webkit", "moz", "ms", "o"],
				o = document.createElement("div");
			transform = e("transform") || "", gpuAcceleration = e("perspective") ? "translateZ(0) " : ""
		}();
	var PluginDetect = {
		version: "0.7.9",
		name: "PluginDetect",
		handler: function(e, t, o) {
			return function() {
				e(t, o)
			}
		},
		openTag: "<",
		isDefined: function(e) {
			return "undefined" != typeof e
		},
		isArray: function(e) {
			return /array/i.test(Object.prototype.toString.call(e))
		},
		isFunc: function(e) {
			return "function" == typeof e
		},
		isString: function(e) {
			return "string" == typeof e
		},
		isNum: function(e) {
			return "number" == typeof e
		},
		isStrNum: function(e) {
			return "string" == typeof e && /\d/.test(e)
		},
		getNumRegx: /[\d][\d\.\_,-]*/,
		splitNumRegx: /[\.\_,-]/g,
		getNum: function(e, t) {
			var o = this,
				i = o.isStrNum(e) ? (o.isDefined(t) ? new RegExp(t) : o.getNumRegx).exec(e) : null;
			return i ? i[0] : null
		},
		compareNums: function(e, t, o) {
			var i, n, r, a = this,
				s = parseInt;
			if(a.isStrNum(e) && a.isStrNum(t)) {
				if(a.isDefined(o) && o.compareNums) return o.compareNums(e, t);
				for(i = e.split(a.splitNumRegx), n = t.split(a.splitNumRegx), r = 0; r < min(i.length, n.length); r++) {
					if(s(i[r], 10) > s(n[r], 10)) return 1;
					if(s(i[r], 10) < s(n[r], 10)) return -1
				}
			}
			return 0
		},
		formatNum: function(e, t) {
			var o, i, n = this;
			if(!n.isStrNum(e)) return null;
			for(n.isNum(t) || (t = 4), t--, i = e.replace(/\s/g, "").split(n.splitNumRegx).concat(["0", "0", "0", "0"]), o = 0; 4 > o; o++) /^(0+)(.+)$/.test(i[o]) && (i[o] = RegExp.$2), (o > t || !/\d/.test(i[o])) && (i[o] = "0");
			return i.slice(0, 4).join(",")
		},
		$$hasMimeType: function(e) {
			return function(t) {
				if(!e.isIE && t) {
					var o, i, n, r = e.isArray(t) ? t : e.isString(t) ? [t] : [];
					for(n = 0; n < r.length; n++)
						if(e.isString(r[n]) && /[^\s]/.test(r[n]) && (o = navigator.mimeTypes[r[n]], i = o ? o.enabledPlugin : 0, i && (i.name || i.description))) return o
				}
				return null
			}
		},
		findNavPlugin: function(e, t, o) {
			var i, n, r, a = this,
				s = new RegExp(e, "i"),
				l = !a.isDefined(t) || t ? /\d/ : 0,
				c = o ? new RegExp(o, "i") : 0,
				u = navigator.plugins,
				d = "";
			for(i = 0; i < u.length; i++)
				if(r = u[i].description || d, n = u[i].name || d, (s.test(r) && (!l || l.test(RegExp.leftContext + RegExp.rightContext)) || s.test(n) && (!l || l.test(RegExp.leftContext + RegExp.rightContext))) && (!c || !c.test(r) && !c.test(n))) return u[i];
			return null
		},
		getMimeEnabledPlugin: function(e, t, o) {
			var i, n, r, a, s = this,
				l = new RegExp(t, "i"),
				c = "",
				u = o ? new RegExp(o, "i") : 0,
				d = s.isString(e) ? [e] : e;
			for(a = 0; a < d.length; a++)
				if((i = s.hasMimeType(d[a])) && (i = i.enabledPlugin) && (r = i.description || c, n = i.name || c, (l.test(r) || l.test(n)) && (!u || !u.test(r) && !u.test(n)))) return i;
			return 0
		},
		getPluginFileVersion: function(e, t) {
			var o, i, n, r, a = this,
				s = -1;
			if(a.OS > 2 || !e || !e.version || !(o = a.getNum(e.version))) return t;
			if(!t) return o;
			for(o = a.formatNum(o), t = a.formatNum(t), i = t.split(a.splitNumRegx), n = o.split(a.splitNumRegx), r = 0; r < i.length; r++) {
				if(s > -1 && r > s && "0" != i[r]) return t;
				if(n[r] != i[r] && (-1 == s && (s = r), "0" != i[r])) return t
			}
			return o
		},
		AXO: window.ActiveXObject,
		getAXO: function(e) {
			var t = null,
				o = this;
			try {
				t = new o.AXO(e)
			} catch(i) {}
			return t
		},
		convertFuncs: function(e) {
			var t, o, i = /^[\$][\$]/;
			for(t in e)
				if(i.test(t)) try {
					o = t.slice(2), o.length > 0 && !e[o] && (e[o] = e[t](e), delete e[t])
				} catch(n) {}
		},
		initObj: function(e, t, o) {
			var i, n;
			if(e) {
				if(1 == e[t[0]] || o)
					for(i = 0; i < t.length; i += 2) e[t[i]] = t[i + 1];
				for(i in e) n = e[i], n && 1 == n[t[0]] && this.initObj(n, t)
			}
		},
		initScript: function() {
			var e, t = this,
				o = navigator,
				i = document,
				n = o.userAgent || "",
				r = o.vendor || "",
				a = o.platform || "",
				s = o.product || "";
			t.initObj(t, ["$", t]);
			for(e in t.Plugins) t.Plugins[e] && t.initObj(t.Plugins[e], ["$", t, "$$", t.Plugins[e]], 1);
			if(t.convertFuncs(t), t.OS = 100, a) {
				var l = ["Win", 1, "Mac", 2, "Linux", 3, "FreeBSD", 4, "iPhone", 21.1, "iPod", 21.2, "iPad", 21.3, "Win.*CE", 22.1, "Win.*Mobile", 22.2, "Pocket\\s*PC", 22.3, "", 100];
				for(e = l.length - 2; e >= 0; e -= 2)
					if(l[e] && new RegExp(l[e], "i").test(a)) {
						t.OS = l[e + 1];
						break
					}
			}
			if(t.head = i.getElementsByTagName("head")[0] || i.getElementsByTagName("body")[0] || i.body || null, t.isIE = new Function("return/*@cc_on!@*/!1")(), t.verIE = t.isIE && /MSIE\s*(\d+\.?\d*)/i.test(n) ? parseFloat(RegExp.$1, 10) : null, t.verIEfull = null, t.docModeIE = null, t.isIE) {
				var c, u = document.createElement("div");
				try {
					u.style.behavior = "url(#default#clientcaps)", t.verIEfull = u.getComponentVersion("{89820200-ECBD-11CF-8B85-00AA005B4383}", "componentid").replace(/,/g, ".")
				} catch(d) {}
				c = parseFloat(t.verIEfull || "0", 10), t.docModeIE = i.documentMode || (/back/i.test(i.compatMode || "") ? 5 : c) || t.verIE, t.verIE = c || t.docModeIE
			}
			if(t.ActiveXEnabled = !1, t.isIE) {
				var e, h = ["Msxml2.XMLHTTP", "Msxml2.DOMDocument", "Microsoft.XMLDOM", "ShockwaveÂ§.ShockwaveFlash", "TDCCtl.TDCCtl", "Shell.UIHelper", "Scripting.Dictionary", "wmplayer.ocx"];
				for(e = 0; e < h.length; e++)
					if(t.getAXO(h[e])) {
						t.ActiveXEnabled = !0;
						break
					}
			}
			t.isGecko = /Gecko/i.test(s) && /Gecko\s*\/\s*\d/i.test(n), t.verGecko = t.isGecko ? t.formatNum(/rv\s*\:\s*([\.\,\d]+)/i.test(n) ? RegExp.$1 : "0.9") : null, t.isChrome = /Chrome\s*\/\s*(\d[\d\.]*)/i.test(n), t.verChrome = t.isChrome ? t.formatNum(RegExp.$1) : null, t.isSafari = (/Apple/i.test(r) || !r && !t.isChrome) && /Safari\s*\/\s*(\d[\d\.]*)/i.test(n), t.verSafari = t.isSafari && /Version\s*\/\s*(\d[\d\.]*)/i.test(n) ? t.formatNum(RegExp.$1) : null, t.isOpera = /Opera\s*[\/]?\s*(\d+\.?\d*)/i.test(n), t.verOpera = t.isOpera ? parseFloat(RegExp.$1, 10) : null, t.addWinEvent("load", t.handler(t.runWLfuncs, t))
		},
		init: function(e) {
			var t, e, o = this,
				i = {
					status: -3,
					plugin: 0
				};
			return o.isString(e) ? 1 == e.length ? (o.getVersionDelimiter = e, i) : (e = e.toLowerCase().replace(/\s/g, ""), t = o.Plugins[e], t && t.getVersion ? (i.plugin = t, o.isDefined(t.installed) || (t.installed = null, t.version = null, t.version0 = null, t.getVersionDone = null, t.pluginName = e), o.garbage = !1, o.isIE && !o.ActiveXEnabled && "java" !== e ? (i.status = -2, i) : (i.status = 1, i)) : i) : i
		},
		fPush: function(e, t) {
			var o = this;
			o.isArray(t) && (o.isFunc(e) || o.isArray(e) && e.length > 0 && o.isFunc(e[0])) && t.push(e)
		},
		callArray: function(e) {
			var t, o = this;
			if(o.isArray(e))
				for(t = 0; t < e.length; t++) {
					if(null === e[t]) return;
					o.call(e[t]), e[t] = null
				}
		},
		call: function(e) {
			var t = this,
				o = t.isArray(e) ? e.length : -1;
			o > 0 && t.isFunc(e[0]) ? e[0](t, o > 1 ? e[1] : 0, o > 2 ? e[2] : 0, o > 3 ? e[3] : 0) : t.isFunc(e) && e(t)
		},
		getVersionDelimiter: ",",
		$$getVersion: function(e) {
			return function(t, o, i) {
				var n, r, a = e.init(t);
				return a.status < 0 ? null : (n = a.plugin, 1 != n.getVersionDone && (n.getVersion(null, o, i), null === n.getVersionDone && (n.getVersionDone = 1)), e.cleanup(), r = n.version || n.version0, r = r ? r.replace(e.splitNumRegx, e.getVersionDelimiter) : r)
			}
		},
		cleanup: function() {
			var e = this;
			e.garbage && e.isDefined(window.CollectGarbage) && window.CollectGarbage()
		},
		isActiveXObject: function(e, t) {
			var o = this,
				i = !1,
				n = '<object width="1" height="1" style="display:none" ' + e.getCodeBaseVersion(t) + ">" + e.HTML + o.openTag + "/object>";
			if(!o.head) return i;
			o.head.insertBefore(document.createElement("object"), o.head.firstChild), o.head.firstChild.outerHTML = n;
			try {
				o.head.firstChild.classid = e.classID
			} catch(r) {}
			try {
				o.head.firstChild.object && (i = !0)
			} catch(r) {}
			try {
				i && o.head.firstChild.readyState < 4 && (o.garbage = !0)
			} catch(r) {}
			return o.head.removeChild(o.head.firstChild), i
		},
		codebaseSearch: function(e, t) {
			var o = this;
			if(!o.ActiveXEnabled || !e) return null;
			e.BIfuncs && e.BIfuncs.length && null !== e.BIfuncs[e.BIfuncs.length - 1] && o.callArray(e.BIfuncs);
			var i, n = e.SEARCH;
			if(o.isStrNum(t)) return n.match && n.min && o.compareNums(t, n.min) <= 0 ? !0 : n.match && n.max && o.compareNums(t, n.max) >= 0 ? !1 : (i = o.isActiveXObject(e, t), i && (!n.min || o.compareNums(t, n.min) > 0) && (n.min = t), i || n.max && !(o.compareNums(t, n.max) < 0) || (n.max = t), i);
			var r, a, s, l, c, u = [0, 0, 0, 0],
				d = [].concat(n.digits),
				h = n.min ? 1 : 0,
				p = function(t, i) {
					var n = [].concat(u);
					return n[t] = i, o.isActiveXObject(e, n.join(","))
				};
			if(n.max) {
				for(l = n.max.split(o.splitNumRegx), r = 0; r < l.length; r++) l[r] = parseInt(l[r], 10);
				l[0] < d[0] && (d[0] = l[0])
			}
			if(n.min) {
				for(c = n.min.split(o.splitNumRegx), r = 0; r < c.length; r++) c[r] = parseInt(c[r], 10);
				c[0] > u[0] && (u[0] = c[0])
			}
			if(c && l)
				for(r = 1; r < c.length && c[r - 1] == l[r - 1]; r++) l[r] < d[r] && (d[r] = l[r]), c[r] > u[r] && (u[r] = c[r]);
			if(n.max)
				for(r = 1; r < d.length; r++)
					if(l[r] > 0 && 0 == d[r] && d[r - 1] < n.digits[r - 1]) {
						d[r - 1] += 1;
						break
					}
			for(r = 0; r < d.length; r++) {
				for(s = {}, a = 0; 20 > a && !(d[r] - u[r] < 1) && (i = round((d[r] + u[r]) / 2), !s["a" + i]); a++) s["a" + i] = 1, p(r, i) ? (u[r] = i, h = 1) : d[r] = i;
				if(d[r] = u[r], !h && p(r, u[r]) && (h = 1), !h) break
			}
			return h ? u.join(",") : null
		},
		addWinEvent: function(e, t) {
			var o, i = this,
				n = window;
			i.isFunc(t) && (n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent ? n.attachEvent("on" + e, t) : (o = n["on" + e], n["on" + e] = i.winHandler(t, o)))
		},
		winHandler: function(e, t) {
			return function() {
				e(), "function" == typeof t && t()
			}
		},
		WLfuncs0: [],
		WLfuncs: [],
		runWLfuncs: function(e) {
			e.winLoaded = !0, e.callArray(e.WLfuncs0), e.callArray(e.WLfuncs), e.onDoneEmptyDiv && e.onDoneEmptyDiv()
		},
		winLoaded: !1,
		$$onWindowLoaded: function(e) {
			return function(t) {
				e.winLoaded ? e.call(t) : e.fPush(t, e.WLfuncs)
			}
		},
		div: null,
		divID: "plugindetect",
		divWidth: 50,
		pluginSize: 1,
		emptyDiv: function() {
			var e, t, o, i, n, r = this;
			if(r.div && r.div.childNodes)
				for(e = r.div.childNodes.length - 1; e >= 0; e--) {
					if(o = r.div.childNodes[e], o && o.childNodes)
						for(t = o.childNodes.length - 1; t >= 0; t--) {
							n = o.childNodes[t];
							try {
								o.removeChild(n)
							} catch(a) {}
						}
					if(o) try {
						r.div.removeChild(o)
					} catch(a) {}
				}
			if(r.div || (i = document.getElementById(r.divID), i && (r.div = i)), r.div && r.div.parentNode) {
				try {
					r.div.parentNode.removeChild(r.div)
				} catch(a) {}
				r.div = null
			}
		},
		DONEfuncs: [],
		onDoneEmptyDiv: function() {
			var e, t, o = this;
			if(o.winLoaded && (!o.WLfuncs || !o.WLfuncs.length || null === o.WLfuncs[o.WLfuncs.length - 1])) {
				for(e in o)
					if(t = o[e], t && t.funcs) {
						if(3 == t.OTF) return;
						if(t.funcs.length && null !== t.funcs[t.funcs.length - 1]) return
					}
				for(e = 0; e < o.DONEfuncs.length; e++) o.callArray(o.DONEfuncs);
				o.emptyDiv()
			}
		},
		getWidth: function(e) {
			if(e) {
				var t = e.scrollWidth || e.offsetWidth,
					o = this;
				if(o.isNum(t)) return t
			}
			return -1
		},
		getTagStatus: function(e, t, o, i) {
			var n = this,
				r = e.span,
				a = n.getWidth(r),
				s = o.span,
				l = n.getWidth(s),
				c = t.span,
				u = n.getWidth(c);
			if(!(r && s && c && n.getDOMobj(e))) return -2;
			if(u > l || 0 > a || 0 > l || 0 > u || u <= n.pluginSize || n.pluginSize < 1) return 0;
			if(a >= u) return -1;
			try {
				if(a == n.pluginSize && (!n.isIE || 4 == n.getDOMobj(e).readyState)) {
					if(!e.winLoaded && n.winLoaded) return 1;
					if(e.winLoaded && n.isNum(i) && (n.isNum(e.count) || (e.count = i), i - e.count >= 10)) return 1
				}
			} catch(d) {}
			return 0
		},
		getDOMobj: function(e, t) {
			var o = this,
				i = e ? e.span : 0,
				n = i && i.firstChild ? 1 : 0;
			try {
				n && t && o.div.focus()
			} catch(r) {}
			return n ? i.firstChild : null
		},
		setStyle: function(e, t) {
			var o, i = e.style;
			if(i && t)
				for(o = 0; o < t.length; o += 2) try {
					i[t[o]] = t[o + 1]
				} catch(n) {}
		},
		insertDivInBody: function(e, t) {
			var o = this,
				i = "pd33993399",
				n = null,
				r = t ? window.top.document : window.document,
				a = r.getElementsByTagName("body")[0] || r.body;
			if(!a) try {
				r.write('<div id="' + i + '">.' + o.openTag + "/div>"), n = r.getElementById(i)
			} catch(s) {}
			a = r.getElementsByTagName("body")[0] || r.body, a && (a.insertBefore(e, a.firstChild), n && a.removeChild(n))
		},
		insertHTML: function(e, t, o, i) {
			var n, r, a, s = document,
				l = this,
				c = s.createElement("span"),
				u = ["outlineStyle", "none", "borderStyle", "none", "padding", "0px", "margin", "0px", "visibility", "visible"],
				d = "outline-style:none;border-style:none;padding:0px;margin:0px;visibility:visible;";
			if(l.isDefined(i) || (i = ""), l.isString(e) && /[^\s]/.test(e)) {
				for(e = e.toLowerCase().replace(/\s/g, ""), n = l.openTag + e + ' width="' + l.pluginSize + '" height="' + l.pluginSize + '" ', n += 'style="' + d + 'display:inline;" ', r = 0; r < t.length; r += 2) /[^\s]/.test(t[r + 1]) && (n += t[r] + '="' + t[r + 1] + '" ');
				for(n += ">", r = 0; r < o.length; r += 2) /[^\s]/.test(o[r + 1]) && (n += l.openTag + 'param name="' + o[r] + '" value="' + o[r + 1] + '" />');
				n += i + l.openTag + "/" + e + ">"
			} else n = i;
			if(l.div || (a = s.getElementById(l.divID), a ? l.div = a : (l.div = s.createElement("div"), l.div.id = l.divID), l.setStyle(l.div, u.concat(["width", l.divWidth + "px", "height", l.pluginSize + 3 + "px", "fontSize", l.pluginSize + 3 + "px", "lineHeight", l.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "block"])), a || (l.setStyle(l.div, ["position", "absolute", "right", "0px", "top", "0px"]), l.insertDivInBody(l.div))), l.div && l.div.parentNode) {
				l.setStyle(c, u.concat(["fontSize", l.pluginSize + 3 + "px", "lineHeight", l.pluginSize + 3 + "px", "verticalAlign", "baseline", "display", "inline"]));
				try {
					c.innerHTML = n
				} catch(h) {}
				try {
					l.div.appendChild(c)
				} catch(h) {}
				return {
					span: c,
					winLoaded: l.winLoaded,
					tagName: e,
					outerHTML: n
				}
			}
			return {
				span: null,
				winLoaded: l.winLoaded,
				tagName: "",
				outerHTML: n
			}
		},
		Plugins: {
			quicktime: {
				mimeType: ["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"],
				progID: "QuickTimeCheckObject.QuickTimeCheck.1",
				progID0: "QuickTime.QuickTime",
				classID: "clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",
				minIEver: 7,
				HTML: '<param name="src" value="" /><param name="controller" value="false" />',
				getCodeBaseVersion: function(e) {
					return 'codebase="#version=' + e + '"'
				},
				SEARCH: {
					min: 0,
					max: 0,
					match: 0,
					digits: [16, 128, 128, 0]
				},
				getVersion: function(e) {
					var t, o = this,
						i = o.$,
						n = null,
						r = null;
					if(i.isIE) {
						if(i.isStrNum(e) && (t = e.split(i.splitNumRegx), t.length > 3 && parseInt(t[3], 10) > 0 && (t[3] = "9999"), e = t.join(",")), i.isStrNum(e) && i.verIE >= o.minIEver && o.canUseIsMin() > 0) return o.installed = o.isMin(e), void(o.getVersionDone = 0);
						o.getVersionDone = 1, !n && i.verIE >= o.minIEver && (n = o.CDBASE2VER(i.codebaseSearch(o))), n || (r = i.getAXO(o.progID), r && r.QuickTimeVersion && (n = r.QuickTimeVersion.toString(16), n = parseInt(n.charAt(0), 16) + "." + parseInt(n.charAt(1), 16) + "." + parseInt(n.charAt(2), 16)))
					} else i.hasMimeType(o.mimeType) && (r = 3 != i.OS ? i.findNavPlugin("QuickTime.*Plug-?in", 0) : null, r && r.name && (n = i.getNum(r.name)));
					o.installed = n ? 1 : r ? 0 : -1, o.version = i.formatNum(n, 3)
				},
				cdbaseUpper: ["7,60,0,0", "0,0,0,0"],
				cdbaseLower: ["7,50,0,0", null],
				cdbase2ver: [function(e, t) {
					var o = t.split(e.$.splitNumRegx);
					return [o[0], o[1].charAt(0), o[1].charAt(1), o[2]].join(",")
				}, null],
				CDBASE2VER: function(e) {
					var t, o = this,
						i = o.$,
						n = o.cdbaseUpper,
						r = o.cdbaseLower;
					if(e)
						for(e = i.formatNum(e), t = 0; t < n.length; t++)
							if(n[t] && i.compareNums(e, n[t]) < 0 && r[t] && i.compareNums(e, r[t]) >= 0 && o.cdbase2ver[t]) return o.cdbase2ver[t](o, e);
					return e
				},
				canUseIsMin: function() {
					var e, t = this,
						o = t.$,
						i = t.canUseIsMin,
						n = t.cdbaseUpper,
						r = t.cdbaseLower;
					if(!i.value)
						for(i.value = -1, e = 0; e < n.length; e++) {
							if(n[e] && o.codebaseSearch(t, n[e])) {
								i.value = 1;
								break
							}
							if(r[e] && o.codebaseSearch(t, r[e])) {
								i.value = -1;
								break
							}
						}
					return t.SEARCH.match = 1 == i.value ? 1 : 0, i.value
				},
				isMin: function(e) {
					var t = this,
						o = t.$;
					return o.codebaseSearch(t, e) ? .7 : -1
				}
			},
			zz: 0
		}
	};
	PluginDetect.initScript();
	var gArgCountErr = 'The "%%" function requires an even number of arguments.\nArguments should be in the form "atttributeName", "attributeValue", ...',
		gTagAttrs = null,
		gQTGeneratorVersion = 1;
	! function() {
		function e(e) {
			return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
		}
		var t, o = document,
			i = $.event.special,
			n = o.documentMode,
			r = "oniLightBoxHashChange" in window && (void 0 === n || n > 7);
		$.fn.iLightBoxHashChange = function(e) {
			return e ? this.bind("iLightBoxHashChange", e) : this.trigger("iLightBoxHashChange")
		}, $.fn.iLightBoxHashChange.delay = 50, i.iLightBoxHashChange = $.extend(i.iLightBoxHashChange, {
			setup: function() {
				return r ? !1 : void $(t.start)
			},
			teardown: function() {
				return r ? !1 : void $(t.stop)
			}
		}), t = function() {
			function t() {
				var o = e(),
					n = c(a);
				o !== a ? (l(a = o, n), $(window).trigger("iLightBoxHashChange")) : n !== a && (location.href = location.href.replace(/#.*/, "") + n), i = setTimeout(t, $.fn.iLightBoxHashChange.delay)
			}
			var i, n = {},
				a = e(),
				s = function(e) {
					return e
				},
				l = s,
				c = s;
			return n.start = function() {
				i || t()
			}, n.stop = function() {
				i && clearTimeout(i), i = void 0
			}, browser.msie && !r && function() {
				var i, r;
				n.start = function() {
					i || (r = (r = $.fn.iLightBoxHashChange.src) && r + e(), i = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
						r || l(e()), t()
					}).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow, o.onpropertychange = function() {
						try {
							"title" === event.propertyName && (i.document.title = o.title)
						} catch(e) {}
					})
				}, n.stop = s, c = function() {
					return e(i.location.href)
				}, l = function(e, t) {
					var n = i.document,
						r = $.fn.iLightBoxHashChange.domain;
					e !== t && (n.title = o.title, n.open(), r && n.write('<script>document.domain="' + r + '"</script>'), n.close(), i.location.hash = e)
				}
			}(), n
		}()
	}(), Array.prototype.filter || (Array.prototype.filter = function(e) {
		if(null == this) throw new TypeError;
		var t = Object(this),
			o = t.length >>> 0;
		if("function" != typeof e) throw new TypeError;
		for(var i = [], n = arguments[1], r = 0; o > r; r++)
			if(r in t) {
				var a = t[r];
				e.call(n, a, r, t) && i.push(a)
			}
		return i
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
		var o;
		if(null == this) throw new TypeError('"this" is null or not defined');
		var i = Object(this),
			n = i.length >>> 0;
		if(0 === n) return -1;
		var r = +t || 0;
		if(1 / 0 === abs(r) && (r = 0), r >= n) return -1;
		for(o = max(r >= 0 ? r : n - abs(r), 0); n > o;) {
			if(o in i && i[o] === e) return o;
			o++
		}
		return -1
	}), Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(e) {
		if(null == this) throw new TypeError;
		var t = Object(this),
			o = t.length >>> 0;
		if(0 === o) return -1;
		var i = o;
		arguments.length > 1 && (i = Number(arguments[1]), i != i ? i = 0 : 0 != i && i != 1 / 0 && i != -(1 / 0) && (i = (i > 0 || -1) * floor(abs(i))));
		for(var n = i >= 0 ? min(i, o - 1) : o - abs(i); n >= 0; n--)
			if(n in t && t[n] === e) return n;
		return -1
	})
}(jQuery, this);
/*!
 * Isotope PACKAGED v2.1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function(t) {
	function e() {}

	function i(t) {
		function i(e) {
			e.prototype.option || (e.prototype.option = function(e) {
				t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
			})
		}

		function n(e, i) {
			t.fn[e] = function(n) {
				if("string" == typeof n) {
					for(var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
						var p = this[a],
							h = t.data(p, e);
						if(h)
							if(t.isFunction(h[n]) && "_" !== n.charAt(0)) {
								var f = h[n].apply(h, s);
								if(void 0 !== f) return f
							} else r("no such method '" + n + "' for " + e + " instance");
						else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
					}
					return this
				}
				return this.each(function() {
					var o = t.data(this, e);
					o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
				})
			}
		}
		if(t) {
			var r = "undefined" == typeof console ? e : function(t) {
				console.error(t)
			};
			return t.bridget = function(t, e) {
				i(e), n(t, e)
			}, t.bridget
		}
	}
	var o = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window),
function(t) {
	function e(e) {
		var i = t.event;
		return i.target = i.target || i.srcElement || e, i
	}
	var i = document.documentElement,
		o = function() {};
	i.addEventListener ? o = function(t, e, i) {
		t.addEventListener(e, i, !1)
	} : i.attachEvent && (o = function(t, i, o) {
		t[i + o] = o.handleEvent ? function() {
			var i = e(t);
			o.handleEvent.call(o, i)
		} : function() {
			var i = e(t);
			o.call(t, i)
		}, t.attachEvent("on" + i, t[i + o])
	});
	var n = function() {};
	i.removeEventListener ? n = function(t, e, i) {
		t.removeEventListener(e, i, !1)
	} : i.detachEvent && (n = function(t, e, i) {
		t.detachEvent("on" + e, t[e + i]);
		try {
			delete t[e + i]
		} catch(o) {
			t[e + i] = void 0
		}
	});
	var r = {
		bind: o,
		unbind: n
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
	function e(t) {
		"function" == typeof t && (e.isReady ? t() : s.push(t))
	}

	function i(t) {
		var i = "readystatechange" === t.type && "complete" !== r.readyState;
		e.isReady || i || o()
	}

	function o() {
		e.isReady = !0;
		for(var t = 0, i = s.length; i > t; t++) {
			var o = s[t];
			o()
		}
	}

	function n(n) {
		return "complete" === r.readyState ? o() : (n.bind(r, "DOMContentLoaded", i), n.bind(r, "readystatechange", i), n.bind(t, "load", i)), e
	}
	var r = t.document,
		s = [];
	e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], n) : "object" == typeof exports ? module.exports = n(require("eventie")) : t.docReady = n(t.eventie)
}(window),
function() {
	function t() {}

	function e(t, e) {
		for(var i = t.length; i--;)
			if(t[i].listener === e) return i;
		return -1
	}

	function i(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	var o = t.prototype,
		n = this,
		r = n.EventEmitter;
	o.getListeners = function(t) {
		var e, i, o = this._getEvents();
		if(t instanceof RegExp) {
			e = {};
			for(i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
		} else e = o[t] || (o[t] = []);
		return e
	}, o.flattenListeners = function(t) {
		var e, i = [];
		for(e = 0; t.length > e; e += 1) i.push(t[e].listener);
		return i
	}, o.getListenersAsObject = function(t) {
		var e, i = this.getListeners(t);
		return i instanceof Array && (e = {}, e[t] = i), e || i
	}, o.addListener = function(t, i) {
		var o, n = this.getListenersAsObject(t),
			r = "object" == typeof i;
		for(o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
			listener: i,
			once: !1
		});
		return this
	}, o.on = i("addListener"), o.addOnceListener = function(t, e) {
		return this.addListener(t, {
			listener: e,
			once: !0
		})
	}, o.once = i("addOnceListener"), o.defineEvent = function(t) {
		return this.getListeners(t), this
	}, o.defineEvents = function(t) {
		for(var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
		return this
	}, o.removeListener = function(t, i) {
		var o, n, r = this.getListenersAsObject(t);
		for(n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
		return this
	}, o.off = i("removeListener"), o.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, o.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, o.manipulateListeners = function(t, e, i) {
		var o, n, r = t ? this.removeListener : this.addListener,
			s = t ? this.removeListeners : this.addListeners;
		if("object" != typeof e || e instanceof RegExp)
			for(o = i.length; o--;) r.call(this, e, i[o]);
		else
			for(o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
		return this
	}, o.removeEvent = function(t) {
		var e, i = typeof t,
			o = this._getEvents();
		if("string" === i) delete o[t];
		else if(t instanceof RegExp)
			for(e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
		else delete this._events;
		return this
	}, o.removeAllListeners = i("removeEvent"), o.emitEvent = function(t, e) {
		var i, o, n, r, s = this.getListenersAsObject(t);
		for(n in s)
			if(s.hasOwnProperty(n))
				for(o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
		return this
	}, o.trigger = i("emitEvent"), o.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, o.setOnceReturnValue = function(t) {
		return this._onceReturnValue = t, this
	}, o._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, o._getEvents = function() {
		return this._events || (this._events = {})
	}, t.noConflict = function() {
		return n.EventEmitter = r, t
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : n.EventEmitter = t
}.call(this),
	function(t) {
		function e(t) {
			if(t) {
				if("string" == typeof o[t]) return t;
				t = t.charAt(0).toUpperCase() + t.slice(1);
				for(var e, n = 0, r = i.length; r > n; n++)
					if(e = i[n] + t, "string" == typeof o[e]) return e
			}
		}
		var i = "Webkit Moz ms Ms O".split(" "),
			o = document.documentElement.style;
		"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
			return e
		}) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
	}(window),
	function(t) {
		function e(t) {
			var e = parseFloat(t),
				i = -1 === t.indexOf("%") && !isNaN(e);
			return i && e
		}

		function i() {}

		function o() {
			for(var t = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, e = 0, i = s.length; i > e; e++) {
				var o = s[e];
				t[o] = 0
			}
			return t
		}

		function n(i) {
			function n() {
				if(!d) {
					d = !0;
					var o = t.getComputedStyle;
					if(p = function() {
							var t = o ? function(t) {
								return o(t, null)
							} : function(t) {
								return t.currentStyle
							};
							return function(e) {
								var i = t(e);
								return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
							}
						}(), h = i("boxSizing")) {
						var n = document.createElement("div");
						n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[h] = "border-box";
						var s = document.body || document.documentElement;
						s.appendChild(n);
						var a = p(n);
						f = 200 === e(a.width), s.removeChild(n)
					}
				}
			}

			function a(t) {
				if(n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
					var i = p(t);
					if("none" === i.display) return o();
					var r = {};
					r.width = t.offsetWidth, r.height = t.offsetHeight;
					for(var a = r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), d = 0, l = s.length; l > d; d++) {
						var c = s[d],
							y = i[c];
						y = u(t, y);
						var m = parseFloat(y);
						r[c] = isNaN(m) ? 0 : m
					}
					var g = r.paddingLeft + r.paddingRight,
						v = r.paddingTop + r.paddingBottom,
						_ = r.marginLeft + r.marginRight,
						I = r.marginTop + r.marginBottom,
						L = r.borderLeftWidth + r.borderRightWidth,
						z = r.borderTopWidth + r.borderBottomWidth,
						b = a && f,
						x = e(i.width);
					x !== !1 && (r.width = x + (b ? 0 : g + L));
					var S = e(i.height);
					return S !== !1 && (r.height = S + (b ? 0 : v + z)), r.innerWidth = r.width - (g + L), r.innerHeight = r.height - (v + z), r.outerWidth = r.width + _, r.outerHeight = r.height + I, r
				}
			}

			function u(e, i) {
				if(t.getComputedStyle || -1 === i.indexOf("%")) return i;
				var o = e.style,
					n = o.left,
					r = e.runtimeStyle,
					s = r && r.left;
				return s && (r.left = e.currentStyle.left), o.left = i, i = o.pixelLeft, o.left = n, s && (r.left = s), i
			}
			var p, h, f, d = !1;
			return a
		}
		var r = "undefined" == typeof console ? i : function(t) {
				console.error(t)
			},
			s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("desandro-get-style-property")) : t.getSize = n(t.getStyleProperty)
	}(window),
	function(t) {
		function e(t, e) {
			return t[s](e)
		}

		function i(t) {
			if(!t.parentNode) {
				var e = document.createDocumentFragment();
				e.appendChild(t)
			}
		}

		function o(t, e) {
			i(t);
			for(var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length; r > n; n++)
				if(o[n] === t) return !0;
			return !1
		}

		function n(t, o) {
			return i(t), e(t, o)
		}
		var r, s = function() {
			if(t.matchesSelector) return "matchesSelector";
			for(var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length; o > i; i++) {
				var n = e[i],
					r = n + "MatchesSelector";
				if(t[r]) return r
			}
		}();
		if(s) {
			var a = document.createElement("div"),
				u = e(a, "div");
			r = u ? e : n
		} else r = o;
		"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
			return r
		}) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
	}(Element.prototype),
	function(t) {
		function e(t, e) {
			for(var i in e) t[i] = e[i];
			return t
		}

		function i(t) {
			for(var e in t) return !1;
			return e = null, !0
		}

		function o(t) {
			return t.replace(/([A-Z])/g, function(t) {
				return "-" + t.toLowerCase()
			})
		}

		function n(t, n, r) {
			function a(t, e) {
				t && (this.element = t, this.layout = e, this.position = {
					x: 0,
					y: 0
				}, this._create())
			}
			var u = r("transition"),
				p = r("transform"),
				h = u && p,
				f = !!r("perspective"),
				d = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "otransitionend",
					transition: "transitionend"
				}[u],
				l = ["transform", "transition", "transitionDuration", "transitionProperty"],
				c = function() {
					for(var t = {}, e = 0, i = l.length; i > e; e++) {
						var o = l[e],
							n = r(o);
						n && n !== o && (t[o] = n)
					}
					return t
				}();
			e(a.prototype, t.prototype), a.prototype._create = function() {
				this._transn = {
					ingProperties: {},
					clean: {},
					onEnd: {}
				}, this.css({
					position: "absolute"
				})
			}, a.prototype.handleEvent = function(t) {
				var e = "on" + t.type;
				this[e] && this[e](t)
			}, a.prototype.getSize = function() {
				this.size = n(this.element)
			}, a.prototype.css = function(t) {
				var e = this.element.style;
				for(var i in t) {
					var o = c[i] || i;
					e[o] = t[i]
				}
			}, a.prototype.getPosition = function() {
				var t = s(this.element),
					e = this.layout.options,
					i = e.isOriginLeft,
					o = e.isOriginTop,
					n = parseInt(t[i ? "left" : "right"], 10),
					r = parseInt(t[o ? "top" : "bottom"], 10);
				n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
				var a = this.layout.size;
				n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
			}, a.prototype.layoutPosition = function() {
				var t = this.layout.size,
					e = this.layout.options,
					i = {};
				e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
			};
			var y = f ? function(t, e) {
				return "translate3d(" + t + "px, " + e + "px, 0)"
			} : function(t, e) {
				return "translate(" + t + "px, " + e + "px)"
			};
			a.prototype._transitionTo = function(t, e) {
				this.getPosition();
				var i = this.position.x,
					o = this.position.y,
					n = parseInt(t, 10),
					r = parseInt(e, 10),
					s = n === this.position.x && r === this.position.y;
				if(this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
				var a = t - i,
					u = e - o,
					p = {},
					h = this.layout.options;
				a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
					to: p,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			}, a.prototype.goTo = function(t, e) {
				this.setPosition(t, e), this.layoutPosition()
			}, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
				this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
			}, a.prototype._nonTransition = function(t) {
				this.css(t.to), t.isCleaning && this._removeStyles(t.to);
				for(var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
			}, a.prototype._transition = function(t) {
				if(!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
				var e = this._transn;
				for(var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
				for(i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
				if(t.from) {
					this.css(t.from);
					var o = this.element.offsetHeight;
					o = null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			};
			var m = p && o(p) + ",opacity";
			a.prototype.enableTransition = function() {
				this.isTransitioning || (this.css({
					transitionProperty: m,
					transitionDuration: this.layout.options.transitionDuration
				}), this.element.addEventListener(d, this, !1))
			}, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
				this.ontransitionend(t)
			}, a.prototype.onotransitionend = function(t) {
				this.ontransitionend(t)
			};
			var g = {
				"-webkit-transform": "transform",
				"-moz-transform": "transform",
				"-o-transform": "transform"
			};
			a.prototype.ontransitionend = function(t) {
				if(t.target === this.element) {
					var e = this._transn,
						o = g[t.propertyName] || t.propertyName;
					if(delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
						var n = e.onEnd[o];
						n.call(this), delete e.onEnd[o]
					}
					this.emitEvent("transitionEnd", [this])
				}
			}, a.prototype.disableTransition = function() {
				this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
			}, a.prototype._removeStyles = function(t) {
				var e = {};
				for(var i in t) e[i] = "";
				this.css(e)
			};
			var v = {
				transitionProperty: "",
				transitionDuration: ""
			};
			return a.prototype.removeTransitionStyles = function() {
				this.css(v)
			}, a.prototype.removeElem = function() {
				this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
			}, a.prototype.remove = function() {
				if(!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
				var t = this;
				this.on("transitionEnd", function() {
					return t.removeElem(), !0
				}), this.hide()
			}, a.prototype.reveal = function() {
				delete this.isHidden, this.css({
					display: ""
				});
				var t = this.layout.options;
				this.transition({
					from: t.hiddenStyle,
					to: t.visibleStyle,
					isCleaning: !0
				})
			}, a.prototype.hide = function() {
				this.isHidden = !0, this.css({
					display: ""
				});
				var t = this.layout.options;
				this.transition({
					from: t.visibleStyle,
					to: t.hiddenStyle,
					isCleaning: !0,
					onTransitionEnd: {
						opacity: function() {
							this.isHidden && this.css({
								display: "none"
							})
						}
					}
				})
			}, a.prototype.destroy = function() {
				this.css({
					position: "",
					left: "",
					right: "",
					top: "",
					bottom: "",
					transition: "",
					transform: ""
				})
			}, a
		}
		var r = t.getComputedStyle,
			s = r ? function(t) {
				return r(t, null)
			} : function(t) {
				return t.currentStyle
			};
		"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : "object" == typeof exports ? module.exports = n(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
	}(window),
	function(t) {
		function e(t, e) {
			for(var i in e) t[i] = e[i];
			return t
		}

		function i(t) {
			return "[object Array]" === f.call(t)
		}

		function o(t) {
			var e = [];
			if(i(t)) e = t;
			else if(t && "number" == typeof t.length)
				for(var o = 0, n = t.length; n > o; o++) e.push(t[o]);
			else e.push(t);
			return e
		}

		function n(t, e) {
			var i = l(e, t); - 1 !== i && e.splice(i, 1)
		}

		function r(t) {
			return t.replace(/(.)([A-Z])/g, function(t, e, i) {
				return e + "-" + i
			}).toLowerCase()
		}

		function s(i, s, f, l, c, y) {
			function m(t, i) {
				if("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
				this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
				var o = ++g;
				this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
			}
			var g = 0,
				v = {};
			return m.namespace = "outlayer", m.Item = y, m.defaults = {
				containerStyle: {
					position: "relative"
				},
				isInitLayout: !0,
				isOriginLeft: !0,
				isOriginTop: !0,
				isResizeBound: !0,
				isResizingContainer: !0,
				transitionDuration: "0.4s",
				hiddenStyle: {
					opacity: 0,
					transform: "scale(0.001)"
				},
				visibleStyle: {
					opacity: 1,
					transform: "scale(1)"
				}
			}, e(m.prototype, f.prototype), m.prototype.option = function(t) {
				e(this.options, t)
			}, m.prototype._create = function() {
				this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
			}, m.prototype.reloadItems = function() {
				this.items = this._itemize(this.element.children)
			}, m.prototype._itemize = function(t) {
				for(var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
					var s = e[n],
						a = new i(s, this);
					o.push(a)
				}
				return o
			}, m.prototype._filterFindItemElements = function(t) {
				t = o(t);
				for(var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
					var s = t[n];
					if(d(s))
						if(e) {
							c(s, e) && i.push(s);
							for(var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
						} else i.push(s)
				}
				return i
			}, m.prototype.getItemElements = function() {
				for(var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
				return t
			}, m.prototype.layout = function() {
				this._resetLayout(), this._manageStamps();
				var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				this.layoutItems(this.items, t), this._isLayoutInited = !0
			}, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
				this.getSize()
			}, m.prototype.getSize = function() {
				this.size = l(this.element)
			}, m.prototype._getMeasurement = function(t, e) {
				var i, o = this.options[t];
				o ? ("string" == typeof o ? i = this.element.querySelector(o) : d(o) && (i = o), this[t] = i ? l(i)[e] : o) : this[t] = 0
			}, m.prototype.layoutItems = function(t, e) {
				t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
			}, m.prototype._getItemsForLayout = function(t) {
				for(var e = [], i = 0, o = t.length; o > i; i++) {
					var n = t[i];
					n.isIgnored || e.push(n)
				}
				return e
			}, m.prototype._layoutItems = function(t, e) {
				function i() {
					o.emitEvent("layoutComplete", [o, t])
				}
				var o = this;
				if(!t || !t.length) return i(), void 0;
				this._itemsOn(t, "layout", i);
				for(var n = [], r = 0, s = t.length; s > r; r++) {
					var a = t[r],
						u = this._getItemLayoutPosition(a);
					u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
				}
				this._processLayoutQueue(n)
			}, m.prototype._getItemLayoutPosition = function() {
				return {
					x: 0,
					y: 0
				}
			}, m.prototype._processLayoutQueue = function(t) {
				for(var e = 0, i = t.length; i > e; e++) {
					var o = t[e];
					this._positionItem(o.item, o.x, o.y, o.isInstant)
				}
			}, m.prototype._positionItem = function(t, e, i, o) {
				o ? t.goTo(e, i) : t.moveTo(e, i)
			}, m.prototype._postLayout = function() {
				this.resizeContainer()
			}, m.prototype.resizeContainer = function() {
				if(this.options.isResizingContainer) {
					var t = this._getContainerSize();
					t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
				}
			}, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
				if(void 0 !== t) {
					var i = this.size;
					i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
				}
			}, m.prototype._itemsOn = function(t, e, i) {
				function o() {
					return n++, n === r && i.call(s), !0
				}
				for(var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
					var p = t[a];
					p.on(e, o)
				}
			}, m.prototype.ignore = function(t) {
				var e = this.getItem(t);
				e && (e.isIgnored = !0)
			}, m.prototype.unignore = function(t) {
				var e = this.getItem(t);
				e && delete e.isIgnored
			}, m.prototype.stamp = function(t) {
				if(t = this._find(t)) {
					this.stamps = this.stamps.concat(t);
					for(var e = 0, i = t.length; i > e; e++) {
						var o = t[e];
						this.ignore(o)
					}
				}
			}, m.prototype.unstamp = function(t) {
				if(t = this._find(t))
					for(var e = 0, i = t.length; i > e; e++) {
						var o = t[e];
						n(o, this.stamps), this.unignore(o)
					}
			}, m.prototype._find = function(t) {
				return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
			}, m.prototype._manageStamps = function() {
				if(this.stamps && this.stamps.length) {
					this._getBoundingRect();
					for(var t = 0, e = this.stamps.length; e > t; t++) {
						var i = this.stamps[t];
						this._manageStamp(i)
					}
				}
			}, m.prototype._getBoundingRect = function() {
				var t = this.element.getBoundingClientRect(),
					e = this.size;
				this._boundingRect = {
					left: t.left + e.paddingLeft + e.borderLeftWidth,
					top: t.top + e.paddingTop + e.borderTopWidth,
					right: t.right - (e.paddingRight + e.borderRightWidth),
					bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
				}
			}, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
				var e = t.getBoundingClientRect(),
					i = this._boundingRect,
					o = l(t),
					n = {
						left: e.left - i.left - o.marginLeft,
						top: e.top - i.top - o.marginTop,
						right: i.right - e.right - o.marginRight,
						bottom: i.bottom - e.bottom - o.marginBottom
					};
				return n
			}, m.prototype.handleEvent = function(t) {
				var e = "on" + t.type;
				this[e] && this[e](t)
			}, m.prototype.bindResize = function() {
				this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
			}, m.prototype.unbindResize = function() {
				this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
			}, m.prototype.onresize = function() {
				function t() {
					e.resize(), delete e.resizeTimeout
				}
				this.resizeTimeout && clearTimeout(this.resizeTimeout);
				var e = this;
				this.resizeTimeout = setTimeout(t, 100)
			}, m.prototype.resize = function() {
				this.isResizeBound && this.needsResizeLayout() && this.layout()
			}, m.prototype.needsResizeLayout = function() {
				var t = l(this.element),
					e = this.size && t;
				return e && t.innerWidth !== this.size.innerWidth
			}, m.prototype.addItems = function(t) {
				var e = this._itemize(t);
				return e.length && (this.items = this.items.concat(e)), e
			}, m.prototype.appended = function(t) {
				var e = this.addItems(t);
				e.length && (this.layoutItems(e, !0), this.reveal(e))
			}, m.prototype.prepended = function(t) {
				var e = this._itemize(t);
				if(e.length) {
					var i = this.items.slice(0);
					this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
				}
			}, m.prototype.reveal = function(t) {
				var e = t && t.length;
				if(e)
					for(var i = 0; e > i; i++) {
						var o = t[i];
						o.reveal()
					}
			}, m.prototype.hide = function(t) {
				var e = t && t.length;
				if(e)
					for(var i = 0; e > i; i++) {
						var o = t[i];
						o.hide()
					}
			}, m.prototype.getItem = function(t) {
				for(var e = 0, i = this.items.length; i > e; e++) {
					var o = this.items[e];
					if(o.element === t) return o
				}
			}, m.prototype.getItems = function(t) {
				if(t && t.length) {
					for(var e = [], i = 0, o = t.length; o > i; i++) {
						var n = t[i],
							r = this.getItem(n);
						r && e.push(r)
					}
					return e
				}
			}, m.prototype.remove = function(t) {
				t = o(t);
				var e = this.getItems(t);
				if(e && e.length) {
					this._itemsOn(e, "remove", function() {
						this.emitEvent("removeComplete", [this, e])
					});
					for(var i = 0, r = e.length; r > i; i++) {
						var s = e[i];
						s.remove(), n(s, this.items)
					}
				}
			}, m.prototype.destroy = function() {
				var t = this.element.style;
				t.height = "", t.position = "", t.width = "";
				for(var e = 0, i = this.items.length; i > e; e++) {
					var o = this.items[e];
					o.destroy()
				}
				this.unbindResize();
				var n = this.element.outlayerGUID;
				delete v[n], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
			}, m.data = function(t) {
				var e = t && t.outlayerGUID;
				return e && v[e]
			}, m.create = function(t, i) {
				function o() {
					m.apply(this, arguments)
				}
				return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
					y.apply(this, arguments)
				}, o.Item.prototype = new y, s(function() {
					for(var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
						var f, d = i[s],
							l = d.getAttribute(n);
						try {
							f = l && JSON.parse(l)
						} catch(c) {
							u && u.error("Error parsing " + n + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + c);
							continue
						}
						var y = new o(d, f);
						p && p.data(d, t, y)
					}
				}), p && p.bridget && p.bridget(t, o), o
			}, m.Item = y, m
		}
		var a = t.document,
			u = t.console,
			p = t.jQuery,
			h = function() {},
			f = Object.prototype.toString,
			d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
				return t instanceof HTMLElement
			} : function(t) {
				return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
			},
			l = Array.prototype.indexOf ? function(t, e) {
				return t.indexOf(e)
			} : function(t, e) {
				for(var i = 0, o = t.length; o > i; i++)
					if(t[i] === e) return i;
				return -1
			};
		"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
	}(window),
	function(t) {
		function e(t) {
			function e() {
				t.Item.apply(this, arguments)
			}
			e.prototype = new t.Item, e.prototype._create = function() {
				this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
			}, e.prototype.updateSortData = function() {
				if(!this.isIgnored) {
					this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
					var t = this.layout.options.getSortData,
						e = this.layout._sorters;
					for(var i in t) {
						var o = e[i];
						this.sortData[i] = o(this.element, this)
					}
				}
			};
			var i = e.prototype.destroy;
			return e.prototype.destroy = function() {
				i.apply(this, arguments), this.css({
					display: ""
				})
			}, e
		}
		"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
	}(window),
	function(t) {
		function e(t, e) {
			function i(t) {
				this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
			}
			return function() {
				function t(t) {
					return function() {
						return e.prototype[t].apply(this.isotope, arguments)
					}
				}
				for(var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
					var s = o[n];
					i.prototype[s] = t(s)
				}
			}(), i.prototype.needsVerticalResizeLayout = function() {
				var e = t(this.isotope.element),
					i = this.isotope.size && e;
				return i && e.innerHeight !== this.isotope.size.innerHeight
			}, i.prototype._getMeasurement = function() {
				this.isotope._getMeasurement.apply(this, arguments)
			}, i.prototype.getColumnWidth = function() {
				this.getSegmentSize("column", "Width")
			}, i.prototype.getRowHeight = function() {
				this.getSegmentSize("row", "Height")
			}, i.prototype.getSegmentSize = function(t, e) {
				var i = t + e,
					o = "outer" + e;
				if(this._getMeasurement(i, o), !this[i]) {
					var n = this.getFirstItemSize();
					this[i] = n && n[o] || this.isotope.size["inner" + e]
				}
			}, i.prototype.getFirstItemSize = function() {
				var e = this.isotope.filteredItems[0];
				return e && e.element && t(e.element)
			}, i.prototype.layout = function() {
				this.isotope.layout.apply(this.isotope, arguments)
			}, i.prototype.getSize = function() {
				this.isotope.getSize(), this.size = this.isotope.size
			}, i.modes = {}, i.create = function(t, e) {
				function o() {
					i.apply(this, arguments)
				}
				return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
			}, i
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
	}(window),
	function(t) {
		function e(t, e) {
			var o = t.create("masonry");
			return o.prototype._resetLayout = function() {
				this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
				var t = this.cols;
				for(this.colYs = []; t--;) this.colYs.push(0);
				this.maxY = 0
			}, o.prototype.measureColumns = function() {
				if(this.getContainerWidth(), !this.columnWidth) {
					var t = this.items[0],
						i = t && t.element;
					this.columnWidth = i && e(i).outerWidth || this.containerWidth
				}
				this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
			}, o.prototype.getContainerWidth = function() {
				var t = this.options.isFitWidth ? this.element.parentNode : this.element,
					i = e(t);
				this.containerWidth = i && i.innerWidth
			}, o.prototype._getItemLayoutPosition = function(t) {
				t.getSize();
				var e = t.size.outerWidth % this.columnWidth,
					o = e && 1 > e ? "round" : "ceil",
					n = Math[o](t.size.outerWidth / this.columnWidth);
				n = Math.min(n, this.cols);
				for(var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
						x: this.columnWidth * a,
						y: s
					}, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
				return u
			}, o.prototype._getColGroup = function(t) {
				if(2 > t) return this.colYs;
				for(var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
					var n = this.colYs.slice(o, o + t);
					e[o] = Math.max.apply(Math, n)
				}
				return e
			}, o.prototype._manageStamp = function(t) {
				var i = e(t),
					o = this._getElementOffset(t),
					n = this.options.isOriginLeft ? o.left : o.right,
					r = n + i.outerWidth,
					s = Math.floor(n / this.columnWidth);
				s = Math.max(0, s);
				var a = Math.floor(r / this.columnWidth);
				a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
				for(var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
			}, o.prototype._getContainerSize = function() {
				this.maxY = Math.max.apply(Math, this.colYs);
				var t = {
					height: this.maxY
				};
				return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
			}, o.prototype._getContainerFitWidth = function() {
				for(var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
				return(this.cols - t) * this.columnWidth - this.gutter
			}, o.prototype.needsResizeLayout = function() {
				var t = this.containerWidth;
				return this.getContainerWidth(), t !== this.containerWidth
			}, o
		}
		var i = Array.prototype.indexOf ? function(t, e) {
			return t.indexOf(e)
		} : function(t, e) {
			for(var i = 0, o = t.length; o > i; i++) {
				var n = t[i];
				if(n === e) return i
			}
			return -1
		};
		"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
	}(window),
	function(t) {
		function e(t, e) {
			for(var i in e) t[i] = e[i];
			return t
		}

		function i(t, i) {
			var o = t.create("masonry"),
				n = o.prototype._getElementOffset,
				r = o.prototype.layout,
				s = o.prototype._getMeasurement;
			e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
			var a = o.prototype.measureColumns;
			o.prototype.measureColumns = function() {
				this.items = this.isotope.filteredItems, a.call(this)
			};
			var u = o.prototype._manageStamp;
			return o.prototype._manageStamp = function() {
				this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
			}, o
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry)
	}(window),
	function(t) {
		function e(t) {
			var e = t.create("fitRows");
			return e.prototype._resetLayout = function() {
				this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
			}, e.prototype._getItemLayoutPosition = function(t) {
				t.getSize();
				var e = t.size.outerWidth + this.gutter,
					i = this.isotope.size.innerWidth + this.gutter;
				0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
				var o = {
					x: this.x,
					y: this.y
				};
				return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
			}, e.prototype._getContainerSize = function() {
				return {
					height: this.maxY
				}
			}, e
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
	}(window),
	function(t) {
		function e(t) {
			var e = t.create("vertical", {
				horizontalAlignment: 0
			});
			return e.prototype._resetLayout = function() {
				this.y = 0
			}, e.prototype._getItemLayoutPosition = function(t) {
				t.getSize();
				var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
					i = this.y;
				return this.y += t.size.outerHeight, {
					x: e,
					y: i
				}
			}, e.prototype._getContainerSize = function() {
				return {
					height: this.y
				}
			}, e
		}
		"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
	}(window),
	function(t) {
		function e(t, e) {
			for(var i in e) t[i] = e[i];
			return t
		}

		function i(t) {
			return "[object Array]" === h.call(t)
		}

		function o(t) {
			var e = [];
			if(i(t)) e = t;
			else if(t && "number" == typeof t.length)
				for(var o = 0, n = t.length; n > o; o++) e.push(t[o]);
			else e.push(t);
			return e
		}

		function n(t, e) {
			var i = f(e, t); - 1 !== i && e.splice(i, 1)
		}

		function r(t, i, r, u, h) {
			function f(t, e) {
				return function(i, o) {
					for(var n = 0, r = t.length; r > n; n++) {
						var s = t[n],
							a = i.sortData[s],
							u = o.sortData[s];
						if(a > u || u > a) {
							var p = void 0 !== e[s] ? e[s] : e,
								h = p ? 1 : -1;
							return(a > u ? 1 : -1) * h
						}
					}
					return 0
				}
			}
			var d = t.create("isotope", {
				layoutMode: "masonry",
				isJQueryFiltering: !0,
				sortAscending: !0
			});
			d.Item = u, d.LayoutMode = h, d.prototype._create = function() {
				this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
				for(var e in h.modes) this._initLayoutMode(e)
			}, d.prototype.reloadItems = function() {
				this.itemGUID = 0, t.prototype.reloadItems.call(this)
			}, d.prototype._itemize = function() {
				for(var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
					var n = e[i];
					n.id = this.itemGUID++
				}
				return this._updateItemsSortData(e), e
			}, d.prototype._initLayoutMode = function(t) {
				var i = h.modes[t],
					o = this.options[t] || {};
				this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
			}, d.prototype.layout = function() {
				return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
			}, d.prototype._layout = function() {
				var t = this._getIsInstant();
				this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
			}, d.prototype.arrange = function(t) {
				this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
			}, d.prototype._init = d.prototype.arrange, d.prototype._getIsInstant = function() {
				var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				return this._isInstant = t, t
			}, d.prototype._filter = function(t) {
				function e() {
					f.reveal(n), f.hide(r)
				}
				var i = this.options.filter;
				i = i || "*";
				for(var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
					var p = t[a];
					if(!p.isIgnored) {
						var h = s(p);
						h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
					}
				}
				var f = this;
				return this._isInstant ? this._noTransition(e) : e(), o
			}, d.prototype._getFilterTest = function(t) {
				return s && this.options.isJQueryFiltering ? function(e) {
					return s(e.element).is(t)
				} : "function" == typeof t ? function(e) {
					return t(e.element)
				} : function(e) {
					return r(e.element, t)
				}
			}, d.prototype.updateSortData = function(t) {
				var e;
				t ? (t = o(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
			}, d.prototype._getSorters = function() {
				var t = this.options.getSortData;
				for(var e in t) {
					var i = t[e];
					this._sorters[e] = l(i)
				}
			}, d.prototype._updateItemsSortData = function(t) {
				for(var e = t && t.length, i = 0; e && e > i; i++) {
					var o = t[i];
					o.updateSortData()
				}
			};
			var l = function() {
				function t(t) {
					if("string" != typeof t) return t;
					var i = a(t).split(" "),
						o = i[0],
						n = o.match(/^\[(.+)\]$/),
						r = n && n[1],
						s = e(r, o),
						u = d.sortDataParsers[i[1]];
					return t = u ? function(t) {
						return t && u(s(t))
					} : function(t) {
						return t && s(t)
					}
				}

				function e(t, e) {
					var i;
					return i = t ? function(e) {
						return e.getAttribute(t)
					} : function(t) {
						var i = t.querySelector(e);
						return i && p(i)
					}
				}
				return t
			}();
			d.sortDataParsers = {
				parseInt: function(t) {
					return parseInt(t, 10)
				},
				parseFloat: function(t) {
					return parseFloat(t)
				}
			}, d.prototype._sort = function() {
				var t = this.options.sortBy;
				if(t) {
					var e = [].concat.apply(t, this.sortHistory),
						i = f(e, this.options.sortAscending);
					this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
				}
			}, d.prototype._mode = function() {
				var t = this.options.layoutMode,
					e = this.modes[t];
				if(!e) throw Error("No layout mode: " + t);
				return e.options = this.options[t], e
			}, d.prototype._resetLayout = function() {
				t.prototype._resetLayout.call(this), this._mode()._resetLayout()
			}, d.prototype._getItemLayoutPosition = function(t) {
				return this._mode()._getItemLayoutPosition(t)
			}, d.prototype._manageStamp = function(t) {
				this._mode()._manageStamp(t)
			}, d.prototype._getContainerSize = function() {
				return this._mode()._getContainerSize()
			}, d.prototype.needsResizeLayout = function() {
				return this._mode().needsResizeLayout()
			}, d.prototype.appended = function(t) {
				var e = this.addItems(t);
				if(e.length) {
					var i = this._filterRevealAdded(e);
					this.filteredItems = this.filteredItems.concat(i)
				}
			}, d.prototype.prepended = function(t) {
				var e = this._itemize(t);
				if(e.length) {
					var i = this.items.slice(0);
					this.items = e.concat(i), this._resetLayout(), this._manageStamps();
					var o = this._filterRevealAdded(e);
					this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
				}
			}, d.prototype._filterRevealAdded = function(t) {
				var e = this._noTransition(function() {
					return this._filter(t)
				});
				return this.layoutItems(e, !0), this.reveal(e), t
			}, d.prototype.insert = function(t) {
				var e = this.addItems(t);
				if(e.length) {
					var i, o, n = e.length;
					for(i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
					var r = this._filter(e);
					for(this._noTransition(function() {
							this.hide(r)
						}), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
					for(this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
					this.reveal(r)
				}
			};
			var c = d.prototype.remove;
			return d.prototype.remove = function(t) {
				t = o(t);
				var e = this.getItems(t);
				if(c.call(this, t), e && e.length)
					for(var i = 0, r = e.length; r > i; i++) {
						var s = e[i];
						n(s, this.filteredItems)
					}
			}, d.prototype.shuffle = function() {
				for(var t = 0, e = this.items.length; e > t; t++) {
					var i = this.items[t];
					i.sortData.random = Math.random()
				}
				this.options.sortBy = "random", this._sort(), this._layout()
			}, d.prototype._noTransition = function(t) {
				var e = this.options.transitionDuration;
				this.options.transitionDuration = 0;
				var i = t.call(this);
				return this.options.transitionDuration = e, i
			}, d.prototype.getFilteredItemElements = function() {
				for(var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
				return t
			}, d
		}
		var s = t.jQuery,
			a = String.prototype.trim ? function(t) {
				return t.trim()
			} : function(t) {
				return t.replace(/^\s+|\s+$/g, "")
			},
			u = document.documentElement,
			p = u.textContent ? function(t) {
				return t.textContent
			} : function(t) {
				return t.innerText
			},
			h = Object.prototype.toString,
			f = Array.prototype.indexOf ? function(t, e) {
				return t.indexOf(e)
			} : function(t, e) {
				for(var i = 0, o = t.length; o > i; i++)
					if(t[i] === e) return i;
				return -1
			};
		"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
	}(window);
/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 */
(function() {
	"use strict";

	function e() {}

	function t(e, t) {
		for(var n = e.length; n--;)
			if(e[n].listener === t) return n;
		return -1
	}
	var n = e.prototype;
	n.getListeners = function(e) {
		var t, n, i = this._getEvents();
		if("object" == typeof e) {
			t = {};
			for(n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else t = i[e] || (i[e] = []);
		return t
	}, n.flattenListeners = function(e) {
		var t, n = [];
		for(t = 0; e.length > t; t += 1) n.push(e[t].listener);
		return n
	}, n.getListenersAsObject = function(e) {
		var t, n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n), t || n
	}, n.addListener = function(e, n) {
		var i, r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for(i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
			listener: n,
			once: !1
		});
		return this
	}, n.on = n.addListener, n.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	}, n.once = n.addOnceListener, n.defineEvent = function(e) {
		return this.getListeners(e), this
	}, n.defineEvents = function(e) {
		for(var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
		return this
	}, n.removeListener = function(e, n) {
		var i, r, o = this.getListenersAsObject(e);
		for(r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	}, n.off = n.removeListener, n.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	}, n.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	}, n.manipulateListeners = function(e, t, n) {
		var i, r, o = e ? this.removeListener : this.addListener,
			s = e ? this.removeListeners : this.addListeners;
		if("object" != typeof t || t instanceof RegExp)
			for(i = n.length; i--;) o.call(this, t, n[i]);
		else
			for(i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
		return this
	}, n.removeEvent = function(e) {
		var t, n = typeof e,
			i = this._getEvents();
		if("string" === n) delete i[e];
		else if("object" === n)
			for(t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
		else delete this._events;
		return this
	}, n.emitEvent = function(e, t) {
		var n, i, r, o, s = this.getListenersAsObject(e);
		for(r in s)
			if(s.hasOwnProperty(r))
				for(i = s[r].length; i--;) n = s[r][i], o = n.listener.apply(this, t || []), (o === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, s[r][i].listener);
		return this
	}, n.trigger = n.emitEvent, n.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	}, n.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e, this
	}, n._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, n._getEvents = function() {
		return this._events || (this._events = {})
	}, "function" == typeof define && define.amd ? define(function() {
		return e
	}) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
	function(e) {
		"use strict";
		var t = document.documentElement,
			n = function() {};
		t.addEventListener ? n = function(e, t, n) {
			e.addEventListener(t, n, !1)
		} : t.attachEvent && (n = function(t, n, i) {
			t[n + i] = i.handleEvent ? function() {
				var t = e.event;
				t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
			} : function() {
				var n = e.event;
				n.target = n.target || n.srcElement, i.call(t, n)
			}, t.attachEvent("on" + n, t[n + i])
		});
		var i = function() {};
		t.removeEventListener ? i = function(e, t, n) {
			e.removeEventListener(t, n, !1)
		} : t.detachEvent && (i = function(e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch(i) {
				e[t + n] = void 0
			}
		});
		var r = {
			bind: n,
			unbind: i
		};
		"function" == typeof define && define.amd ? define(r) : e.eventie = r
	}(this),
	function(e) {
		"use strict";

		function t(e, t) {
			for(var n in t) e[n] = t[n];
			return e
		}

		function n(e) {
			return "[object Array]" === c.call(e)
		}

		function i(e) {
			var t = [];
			if(n(e)) t = e;
			else if("number" == typeof e.length)
				for(var i = 0, r = e.length; r > i; i++) t.push(e[i]);
			else t.push(e);
			return t
		}

		function r(e, n) {
			function r(e, n, s) {
				if(!(this instanceof r)) return new r(e, n);
				"string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? s = n : t(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
				var a = this;
				setTimeout(function() {
					a.check()
				})
			}

			function c(e) {
				this.img = e
			}
			r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
				this.images = [];
				for(var e = 0, t = this.elements.length; t > e; e++) {
					var n = this.elements[e];
					"IMG" === n.nodeName && this.addImage(n);
					for(var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
						var s = i[r];
						this.addImage(s)
					}
				}
			}, r.prototype.addImage = function(e) {
				var t = new c(e);
				this.images.push(t)
			}, r.prototype.check = function() {
				function e(e, r) {
					return t.options.debug && a && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
				}
				var t = this,
					n = 0,
					i = this.images.length;
				if(this.hasAnyBroken = !1, !i) return this.complete(), void 0;
				for(var r = 0; i > r; r++) {
					var o = this.images[r];
					o.on("confirm", e), o.check()
				}
			}, r.prototype.progress = function(e) {
				this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
				var t = this;
				setTimeout(function() {
					t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
				})
			}, r.prototype.complete = function() {
				var e = this.hasAnyBroken ? "fail" : "done";
				this.isComplete = !0;
				var t = this;
				setTimeout(function() {
					if(t.emit(e, t), t.emit("always", t), t.jqDeferred) {
						var n = t.hasAnyBroken ? "reject" : "resolve";
						t.jqDeferred[n](t)
					}
				})
			}, o && (o.fn.imagesLoaded = function(e, t) {
				var n = new r(this, e, t);
				return n.jqDeferred.promise(o(this))
			});
			var f = {};
			return c.prototype = new e, c.prototype.check = function() {
				var e = f[this.img.src];
				if(e) return this.useCached(e), void 0;
				if(f[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
				var t = this.proxyImage = new Image;
				n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
			}, c.prototype.useCached = function(e) {
				if(e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
				else {
					var t = this;
					e.on("confirm", function(e) {
						return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
					})
				}
			}, c.prototype.confirm = function(e, t) {
				this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
			}, c.prototype.handleEvent = function(e) {
				var t = "on" + e.type;
				this[t] && this[t](e)
			}, c.prototype.onload = function() {
				this.confirm(!0, "onload"), this.unbindProxyEvents()
			}, c.prototype.onerror = function() {
				this.confirm(!1, "onerror"), this.unbindProxyEvents()
			}, c.prototype.unbindProxyEvents = function() {
				n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
			}, r
		}
		var o = e.jQuery,
			s = e.console,
			a = s !== void 0,
			c = Object.prototype.toString;
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
	}(window);
(function(e, t, n) {
	"use strict";
	t.infinitescroll = function(n, r, i) {
		this.element = t(i);
		if(!this._create(n, r)) {
			this.failed = true
		}
	};
	t.infinitescroll.defaults = {
		loading: {
			finished: n,
			finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
			img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
			msg: null,
			msgText: "<em>Loading the next set of posts...</em>",
			selector: null,
			speed: "fast",
			start: n
		},
		state: {
			isDuringAjax: false,
			isInvalidPage: false,
			isDestroyed: false,
			isDone: false,
			isPaused: false,
			isBeyondMaxPage: false,
			currPage: 1
		},
		debug: false,
		behavior: n,
		binder: t(e),
		nextSelector: "div.navigation a:first",
		navSelector: "div.navigation",
		contentSelector: null,
		extraScrollPx: 150,
		itemSelector: "div.post",
		animate: false,
		pathParse: n,
		dataType: "html",
		appendCallback: true,
		bufferPx: 40,
		errorCallback: function() {},
		infid: 0,
		pixelsFromNavToBottom: n,
		path: n,
		prefill: false,
		maxPage: n
	};
	t.infinitescroll.prototype = {
		_binding: function(t) {
			var r = this,
				i = r.options;
			i.v = "2.0b2.120520";
			if(!!i.behavior && this["_binding_" + i.behavior] !== n) {
				this["_binding_" + i.behavior].call(this);
				return
			}
			if(t !== "bind" && t !== "unbind") {
				this._debug("Binding value  " + t + " not valid");
				return false
			}
			if(t === "unbind") {
				this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
			} else {
				this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() {
					r.scroll()
				})
			}
			this._debug("Binding", t)
		},
		_create: function(i, s) {
			var o = t.extend(true, {}, t.infinitescroll.defaults, i);
			this.options = o;
			var u = t(e);
			var a = this;
			if(!a._validate(i)) {
				return false
			}
			var f = t(o.nextSelector).attr("href");
			if(!f) {
				this._debug("Navigation selector not found");
				return false
			}
			o.path = o.path || this._determinepath(f);
			o.contentSelector = o.contentSelector || this.element;
			o.loading.selector = o.loading.selector || o.contentSelector;
			o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>");
			(new Image).src = o.loading.img;
			if(o.pixelsFromNavToBottom === n) {
				o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top;
				this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom)
			}
			var l = this;
			o.loading.start = o.loading.start || function() {
				t(o.navSelector).hide();
				o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function() {
					this.beginAjax(o)
				}, l))
			};
			o.loading.finished = o.loading.finished || function() {
				if(!o.state.isBeyondMaxPage) o.loading.msg.fadeOut(o.loading.speed)
			};
			o.callback = function(e, r, i) {
				if(!!o.behavior && e["_callback_" + o.behavior] !== n) {
					e["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, i)
				}
				if(s) {
					s.call(t(o.contentSelector)[0], r, o, i)
				}
				if(o.prefill) {
					u.bind("resize.infinite-scroll", e._prefill)
				}
			};
			if(i.debug) {
				if(Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
					["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(e) {
						console[e] = this.call(console[e], console)
					}, Function.prototype.bind)
				}
			}
			this._setup();
			if(o.prefill) {
				this._prefill()
			}
			return true
		},
		_prefill: function() {
			function s() {
				return r.options.contentSelector.height() <= i.height()
			}
			var r = this;
			var i = t(e);
			this._prefill = function() {
				if(s()) {
					r.scroll()
				}
				i.bind("resize.infinite-scroll", function() {
					if(s()) {
						i.unbind("resize.infinite-scroll");
						r.scroll()
					}
				})
			};
			this._prefill()
		},
		_debug: function() {
			if(true !== this.options.debug) {
				return
			}
			if(typeof console !== "undefined" && typeof console.log === "function") {
				if(Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
					console.log(Array.prototype.slice.call(arguments).toString())
				} else {
					console.log(Array.prototype.slice.call(arguments))
				}
			} else if(!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
				Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
			}
		},
		_determinepath: function(t) {
			var r = this.options;
			if(!!r.behavior && this["_determinepath_" + r.behavior] !== n) {
				return this["_determinepath_" + r.behavior].call(this, t)
			}
			if(!!r.pathParse) {
				this._debug("pathParse manual");
				return r.pathParse(t, this.options.state.currPage + 1)
			} else if(t.match(/^(.*?)\b2\b(.*?$)/)) {
				t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1)
			} else if(t.match(/^(.*?)2(.*?$)/)) {
				if(t.match(/^(.*?page=)2(\/.*|$)/)) {
					t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
					return t
				}
				t = t.match(/^(.*?)2(.*?$)/).slice(1)
			} else {
				if(t.match(/^(.*?page=)1(\/.*|$)/)) {
					t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
					return t
				} else {
					this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
					r.state.isInvalidPage = true
				}
			}
			this._debug("determinePath", t);
			return t
		},
		_error: function(t) {
			var r = this.options;
			if(!!r.behavior && this["_error_" + r.behavior] !== n) {
				this["_error_" + r.behavior].call(this, t);
				return
			}
			if(t !== "destroy" && t !== "end") {
				t = "unknown"
			}
			this._debug("Error", t);
			if(t === "end" || r.state.isBeyondMaxPage) {
				this._showdonemsg()
			}
			r.state.isDone = true;
			r.state.currPage = 1;
			r.state.isPaused = false;
			r.state.isBeyondMaxPage = false;
			this._binding("unbind")
		},
		_loadcallback: function(i, s, o) {
			var u = this.options,
				a = this.options.callback,
				f = u.state.isDone ? "done" : !u.appendCallback ? "no-append" : "append",
				l;
			if(!!u.behavior && this["_loadcallback_" + u.behavior] !== n) {
				this["_loadcallback_" + u.behavior].call(this, i, s);
				return
			}
			switch(f) {
				case "done":
					this._showdonemsg();
					return false;
				case "no-append":
					if(u.dataType === "html") {
						s = "<div>" + s + "</div>";
						s = t(s).find(u.itemSelector)
					}
					break;
				case "append":
					var c = i.children();
					if(c.length === 0) {
						return this._error("end")
					}
					l = document.createDocumentFragment();
					while(i[0].firstChild) {
						l.appendChild(i[0].firstChild)
					}
					this._debug("contentSelector", t(u.contentSelector)[0]);
					t(u.contentSelector)[0].appendChild(l);
					s = c.get();
					break
			}
			u.loading.finished.call(t(u.contentSelector)[0], u);
			if(u.animate) {
				var h = t(e).scrollTop() + t(u.loading.msg).height() + u.extraScrollPx + "px";
				t("html,body").animate({
					scrollTop: h
				}, 800, function() {
					u.state.isDuringAjax = false
				})
			}
			if(!u.animate) {
				u.state.isDuringAjax = false
			}
			a(this, s, o);
			if(u.prefill) {
				this._prefill()
			}
		},
		_nearbottom: function() {
			var i = this.options,
				s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
			if(!!i.behavior && this["_nearbottom_" + i.behavior] !== n) {
				return this["_nearbottom_" + i.behavior].call(this)
			}
			this._debug("math:", s, i.pixelsFromNavToBottom);
			return s - i.bufferPx < i.pixelsFromNavToBottom
		},
		_pausing: function(t) {
			var r = this.options;
			if(!!r.behavior && this["_pausing_" + r.behavior] !== n) {
				this["_pausing_" + r.behavior].call(this, t);
				return
			}
			if(t !== "pause" && t !== "resume" && t !== null) {
				this._debug("Invalid argument. Toggling pause value instead")
			}
			t = t && (t === "pause" || t === "resume") ? t : "toggle";
			switch(t) {
				case "pause":
					r.state.isPaused = true;
					break;
				case "resume":
					r.state.isPaused = false;
					break;
				case "toggle":
					r.state.isPaused = !r.state.isPaused;
					break
			}
			this._debug("Paused", r.state.isPaused);
			return false
		},
		_setup: function() {
			var t = this.options;
			if(!!t.behavior && this["_setup_" + t.behavior] !== n) {
				this["_setup_" + t.behavior].call(this);
				return
			}
			this._binding("bind");
			return false
		},
		_showdonemsg: function() {
			var r = this.options;
			if(!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
				this["_showdonemsg_" + r.behavior].call(this);
				return
			}
			r.loading.msg.find("img").hide().parent().find("div").addClass('all-loaded').html(r.loading.finishedMsg).animate({
				opacity: 1
			}, 2e3, function() {
				t(this).parent().fadeOut(r.loading.speed)
			});
			r.errorCallback.call(t(r.contentSelector)[0], "done")
		},
		_validate: function(n) {
			for(var r in n) {
				if(r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) {
					this._debug("Your " + r + " found no elements.");
					return false
				}
			}
			return true
		},
		bind: function() {
			this._binding("bind")
		},
		destroy: function() {
			this.options.state.isDestroyed = true;
			this.options.loading.finished();
			return this._error("destroy")
		},
		pause: function() {
			this._pausing("pause")
		},
		resume: function() {
			this._pausing("resume")
		},
		beginAjax: function(r) {
			var i = this,
				s = r.path,
				o, u, a, f;
			r.state.currPage++;
			if(r.maxPage != n && r.state.currPage > r.maxPage) {
				r.state.isBeyondMaxPage = true;
				this.destroy();
				return
			}
			o = t(r.contentSelector).is("table, tbody") ? t("<tbody/>") : t("<div/>");
			u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
			i._debug("heading into ajax", u);
			a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
			if(r.appendCallback && r.dataType === "html") {
				a += "+callback"
			}
			switch(a) {
				case "html+callback":
					i._debug("Using HTML via .load() method");
					o.load(u + " " + r.itemSelector, n, function(t) {
						i._loadcallback(o, t, u)
					});
					break;
				case "html":
					i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
					t.ajax({
						url: u,
						dataType: r.dataType,
						complete: function(t, n) {
							f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
							if(f) {
								i._loadcallback(o, t.responseText, u)
							} else {
								i._error("end")
							}
						}
					});
					break;
				case "json":
					i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
					t.ajax({
						dataType: "json",
						type: "GET",
						url: u,
						success: function(e, t, s) {
							f = typeof s.isResolved !== "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
							if(r.appendCallback) {
								if(r.template !== n) {
									var a = r.template(e);
									o.append(a);
									if(f) {
										i._loadcallback(o, a)
									} else {
										i._error("end")
									}
								} else {
									i._debug("template must be defined.");
									i._error("end")
								}
							} else {
								if(f) {
									i._loadcallback(o, e, u)
								} else {
									i._error("end")
								}
							}
						},
						error: function() {
							i._debug("JSON ajax request failed.");
							i._error("end")
						}
					});
					break
			}
		},
		retrieve: function(r) {
			r = r || null;
			var i = this,
				s = i.options;
			if(!!s.behavior && this["retrieve_" + s.behavior] !== n) {
				this["retrieve_" + s.behavior].call(this, r);
				return
			}
			if(s.state.isDestroyed) {
				this._debug("Instance is destroyed");
				return false
			}
			s.state.isDuringAjax = true;
			s.loading.start.call(t(s.contentSelector)[0], s)
		},
		scroll: function() {
			var t = this.options,
				r = t.state;
			if(!!t.behavior && this["scroll_" + t.behavior] !== n) {
				this["scroll_" + t.behavior].call(this);
				return
			}
			if(r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
				return
			}
			if(!this._nearbottom()) {
				return
			}
			this.retrieve()
		},
		toggle: function() {
			this._pausing()
		},
		unbind: function() {
			this._binding("unbind")
		},
		update: function(n) {
			if(t.isPlainObject(n)) {
				this.options = t.extend(true, this.options, n)
			}
		}
	};
	t.fn.infinitescroll = function(n, r) {
		var i = typeof n;
		switch(i) {
			case "string":
				var s = Array.prototype.slice.call(arguments, 1);
				this.each(function() {
					var e = t.data(this, "infinitescroll");
					if(!e) {
						return false
					}
					if(!t.isFunction(e[n]) || n.charAt(0) === "_") {
						return false
					}
					e[n].apply(e, s)
				});
				break;
			case "object":
				this.each(function() {
					var e = t.data(this, "infinitescroll");
					if(e) {
						e.update(n)
					} else {
						e = new t.infinitescroll(n, r, this);
						if(!e.failed) {
							t.data(this, "infinitescroll", e)
						}
					}
				});
				break
		}
		return this
	};
	var r = t.event,
		i;
	r.special.smartscroll = {
		setup: function() {
			t(this).bind("scroll", r.special.smartscroll.handler)
		},
		teardown: function() {
			t(this).unbind("scroll", r.special.smartscroll.handler)
		},
		handler: function(e, n) {
			var r = this,
				s = arguments;
			e.type = "smartscroll";
			if(i) {
				clearTimeout(i)
			}
			i = setTimeout(function() {
				t(r).trigger("smartscroll", s)
			}, n === "execAsap" ? 0 : 100)
		}
	};
	t.fn.smartscroll = function(e) {
		return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
	}
})(window, jQuery);
(function() {
	"use strict";
	var page = {
		init: function() {
			jQuery.browser = {};
			jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
			jQuery.browser.msieMobile10 = /iemobile\/10\.0/.test(navigator.userAgent.toLowerCase());
			if(isMobileAlt) {
				body.addClass("mobile-browser");
			} else {
				body.addClass("standard-browser");
			}
			if(isIEMobile) {
				body.addClass("ie-mobile");
			}
			if(isAppleDevice) {
				body.addClass("apple-mobile-browser");
			}
			if(body.hasClass("woocommerce-page") && !body.hasClass("woocommerce")) {
				body.addClass("woocommerce");
			}
			if(IEVersion && IEVersion < 10) {
				body.addClass('browser-ie');
			}
			var pattern = /MSIE\s([\d]+)/,
				ua = navigator.userAgent,
				matched = ua.match(pattern);
			if(matched) {
				body.addClass('browser-ie10');
			}
			if(jQuery.browser.mozilla) {
				body.addClass('browser-ff');
			}
			var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
			if(isIE11) {
				body.addClass('browser-ie11');
			}
			if(jQuery('#one-page-nav').length > 0) {
				page.onePageNav();
			}
			if(jQuery('#back-to-top').length > 0) {
				$window.scroll(function() {
					page.backToTop();
				});
			}
			if(!isMobileAlt) {
				body.on('mousedown', '.caroufredsel_wrapper', function() {
					jQuery(this).addClass('isSwiping');
				});
				body.on('mouseup', '.caroufredsel_wrapper', function() {
					jQuery(this).removeClass('isSwiping');
				});
			}
			if(jQuery('.fancy-heading').length > 0) {
				page.fancyHeading();
			}
			if(isMobile && !jQuery.browser.msieMobile10 && !isIEMobile) {
				page.niceScroll();
			}
			if(jQuery('#page-wrap').has('.full-width-display-wrap')) {
				page.fullscreenMedia();
				$window.smartresize(function() {
					page.fullscreenMedia();
				});
			}
			jQuery(".modal").each(function() {
				jQuery(this).appendTo("body");
			});
			jQuery('a[data-toggle="modal"]').on('click', function() {
				setTimeout(function() {
					map.init();
				}, 300);
				return true;
			});
			jQuery(".modal-backdrop, .modal .close, .modal .btn").on("click", function() {
				jQuery(".modal iframe").each(function() {
					var thisModal = jQuery(this);
					thisModal.attr("src", thisModal.attr("src"));
				});
			});
			if(body.hasClass('single-post')) {
				var replyTitle = jQuery('#respond').find('h3');
				var originalText = jQuery('#respond').find('h3').html();
				replyTitle.addClass('spb-heading');
				replyTitle.html('<span>' + originalText + '</span>');
			}
			jQuery('a.smooth-scroll-link').on('click', function(e) {
				var linkHref = jQuery(this).attr('href');
				if(linkHref.indexOf('#') === 0) {
					var spacerHeight = jQuery(linkHref).height(),
						headerHeight = 0;
					if(jQuery('.sticky-header').length > 0) {
						headerHeight = jQuery('.sticky-header').height();
					}
					if(jQuery('#wpadminbar').length > 0) {
						headerHeight = headerHeight + 28;
					}
					jQuery('html, body').stop().animate({
						scrollTop: jQuery(linkHref).offset().top + spacerHeight - headerHeight - 10
					}, 1000, 'easeInOutExpo');
					e.preventDefault();
				} else {
					return e;
				}
			});
			if(!isMobileAlt && sfIncluded.hasClass('stickysidebars') && jQuery('.sidebar').length > 0) {
				page.stickySidebars();
			}
			if(!isMobileAlt && jQuery('.sticky-details').length > 0) {}
			jQuery('.activity-time-since,.bp-secondary-action').on('click', function(e) {
				e.preventDefault();
				jQuery('.viewer').css('display', 'none');
				window.location = jQuery(this).attr('href');
			});
		},
		fitVids: function() {},
		niceScroll: function() {
			jQuery("html").niceScroll({
				scrollspeed: 50,
				zindex: 999,
				mousescrollstep: 30,
				horizrailenabled: false
			});
		},
		fancyHeading: function() {
			jQuery('body,html').scrollTop(0);
			if(jQuery('.fancy-heading').hasClass('fancy-image')) {
				jQuery('.fancy-heading').parallax("50%", 0.5);
			}
			setTimeout(function() {
				jQuery('.fancy-heading').slideDown({
					duration: 600,
					easing: "easeInOutQuart"
				});
			}, 200);
			$window.scroll(function() {
				if($window.width() > 767) {
					var scrollTop = $window.scrollTop();
					var isSafari = deviceAgent.indexOf("safari") != -1 && deviceAgent.indexOf("chrome") == -1;
					if(!(isSafari)) {
						var paddingBottom = (120 - scrollTop / 5 > 0) ? 120 - scrollTop / 5 : 0,
							letterSpacing = (scrollTop / 35 < 10) ? scrollTop / 35 : 10;
						jQuery(".fancy-heading").css("opacity", 1 - scrollTop / 300).css('padding-bottom', paddingBottom + "px");
						jQuery(".fancy-heading .heading-text").css("opacity", 1 - scrollTop / 180).css("letter-spacing", letterSpacing);
					}
				}
			});
		},
		fullscreenMedia: function() {
			var fullscreenMedia = jQuery('.full-width-display-wrap'),
				container = jQuery('#page-wrap'),
				mediaOffset = container.offset().left,
				windowWidth = $window.width();
			if(windowWidth > 768) {
				mediaOffset = mediaOffset;
			} else {
				mediaOffset = 24;
			}
			if(jQuery('#container').hasClass('boxed-layout')) {
				windowWidth = jQuery('#container').width() + 2;
				if(windowWidth > 1026) {
					mediaOffset = 45;
				} else if(windowWidth > 770) {
					mediaOffset = 30;
				} else if(windowWidth > 482) {
					mediaOffset = 24;
				} else {
					mediaOffset = 7;
				}
			}
			fullscreenMedia.find('figure').css('width', windowWidth).css('margin-left', '-' + mediaOffset + 'px');
			if(!fullscreenMedia.find('figure').is(":visible")) {
				fullscreenMedia.find('figure').slideDown(500);
			} else {
				var slider = fullscreenMedia.find('.item-slider').data('flexslider');
				if(slider) {
					slider.resize();
				}
			}
			if(fullscreenMedia.find('.portfolio-options-bar').length > 0) {
				setTimeout(function() {
					fullscreenMedia.find('.portfolio-options-bar').animate({
						opacity: 1
					}, 200);
				}, 700);
			}
		},
		fullWidthArea: function() {
			var fullWidthArea = jQuery('.full-width-area'),
				container = jQuery('#page-wrap'),
				mediaOffset = container.offset().left,
				windowWidth = $window.width();
			if(windowWidth > 768) {
				mediaOffset = mediaOffset;
			} else {
				mediaOffset = 24;
			}
			if(jQuery('#container').hasClass('boxed-layout')) {
				windowWidth = jQuery('#container').width() + 2;
				if(windowWidth > 1026) {
					mediaOffset = 45;
				} else if(windowWidth > 770) {
					mediaOffset = 30;
				} else if(windowWidth > 482) {
					mediaOffset = 24;
				} else {
					mediaOffset = 7;
				}
			}
			fullWidthArea.each(function() {
				jQuery(this).css('width', windowWidth).css('margin-left', '-' + mediaOffset + 'px');
			});
		},
		onePageNav: function() {
			var onePageNav = jQuery('#one-page-nav'),
				onePageNavList = onePageNav.find('ul'),
				onePageNavItems = "",
				mainContent = jQuery('.page-content');
			mainContent.find('.blank_spacer').each(function() {
				var linkID = jQuery(this).attr('id'),
					linkName = jQuery(this).data('spacername');
				if(linkID && linkName.length > 0) {
					onePageNavItems += '<li><a href="#' + linkID + '" rel="tooltip" data-original-title="' + linkName + '" data-placement="left"><i></i></a></li>';
				}
			});
			if(onePageNavItems.length > 0) {
				onePageNavList.append(onePageNavItems);
				onePageNav.vCenter();
				setTimeout(function() {
					onePageNav.stop().animate({
						'right': '40px',
						'opacity': 1
					}, 1000, "easeOutQuart");
					jQuery('#one-page-nav ul li a').bind('click', function(e) {
						var anchor = jQuery(this),
							spacerHeight = jQuery(anchor.attr('href')).height(),
							headerHeight = 0;
						if(jQuery('.sticky-header').length > 0) {
							headerHeight = jQuery('.sticky-header').height();
						}
						if(jQuery('#wpadminbar').length > 0) {
							headerHeight = headerHeight + 28;
						}
						jQuery('html, body').stop().animate({
							scrollTop: jQuery(anchor.attr('href')).offset().top + spacerHeight - headerHeight - 30
						}, 1000, 'easeInOutExpo');
						e.preventDefault();
					});
					$window.scroll(function() {
						var currentSection = jQuery('.blank_spacer:in-viewport:first').data('spacername');
						if(onePageNav.is(':visible') && currentSection) {
							onePageNavList.find('li').removeClass('selected');
							onePageNavList.find('li a[data-original-title="' + currentSection + '"]').parent().addClass('selected');
						}
					});
				}, 1000);
			}
		},
		backToTop: function() {
			var scrollPosition = $window.scrollTop();
			if(scrollPosition > 300) {
				jQuery('#back-to-top').stop().animate({
					'bottom': '10px',
					'opacity': 1
				}, 300, "easeOutQuart");
			} else if(scrollPosition < 300) {
				jQuery('#back-to-top').stop().animate({
					'bottom': '-40px',
					'opacity': 0
				}, 300, "easeInQuart");
			}
		},
		stickySidebars: function() {
			var stickyWidget = jQuery('.sticky-widget'),
				sidebar = stickyWidget.parent(),
				content = jQuery('.page-content'),
				offset = 24;
			if(jQuery('.sticky-header').length > 0) {
				offset = offset + jQuery('.sticky-header').height() > 0 ? jQuery('.sticky-header').height() : jQuery('#header-section').height();
			}
			if(jQuery('#wpadminbar').length > 0) {
				offset = offset + 32;
			}
			page.initStickyWidget(stickyWidget, sidebar, offset);
			$window.smartresize(function() {
				jQuery('.inner-page-wrap').stickem().destroy();
				page.resizeStickyWidget(stickyWidget, sidebar);
				page.initStickyWidget(stickyWidget, sidebar, offset);
			});
		},
		initStickyWidget: function(stickyWidget, sidebar, offset) {
			jQuery('.inner-page-wrap').stickem({
				item: '.sticky-widget',
				container: '.inner-page-wrap',
				offset: offset + 24,
				onStick: function() {
					page.resizeStickyWidget(stickyWidget, sidebar);
				}
			});
		},
		resizeStickyWidget: function(stickyWidget, sidebar) {
			var headerHeight = 0,
				content = jQuery('.page-content'),
				sidebarHeight = sidebar.find('.sidebar-widget-wrap').height(),
				contentHeight = content.height();
			if(jQuery('.sticky-header').length > 0) {
				headerHeight = jQuery('.sticky-header').height() > 0 ? jQuery('.sticky-header').height() : jQuery('#header-section').height();
			}
			if(jQuery('#wpadminbar').length > 0) {
				headerHeight = headerHeight + 32;
			}
			stickyWidget.css('width', sidebar.width()).css('top', headerHeight + 30);
			if(contentHeight > sidebarHeight) {
				sidebar.css('height', contentHeight);
			} else {
				sidebar.css('height', sidebarHeight);
			}
		},
		getViewportHeight: function() {
			var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
			return height;
		},
		checkIE: function() {
			var undef, v = 3,
				div = document.createElement('div'),
				all = div.getElementsByTagName('i');
			while(div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
			return v > 4 ? v : undef;
		}
	};
	var superSearch = {
		init: function() {
			var deviceAgent = navigator.userAgent.toLowerCase(),
				agentID = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/);
			jQuery('.search-go').vCenter();
			jQuery('.search-options .ss-dropdown').on('click', function(e) {
				e.preventDefault();
				var option = jQuery(this),
					dropdown = option.find('ul');
				if(agentID) {
					if(dropdown.hasClass('show-dropdown')) {
						dropdown.removeClass('show-dropdown');
					} else {
						dropdown.addClass('show-dropdown');
					}
				} else {
					if(dropdown.hasClass('show-dropdown')) {
						dropdown.css('top', 30);
						dropdown.removeClass('show-dropdown');
					} else {
						dropdown.css('top', -10);
						dropdown.addClass('show-dropdown');
					}
				}
			});
			jQuery('.ss-option').on('click', function(e) {
				e.preventDefault();
				var selectedOption = jQuery(this).attr('data-attr_value');
				var parentOption = jQuery(this).parent().parent().parent();
				parentOption.find('li').removeClass('selected');
				jQuery(this).parent().addClass('selected');
				parentOption.attr('data-attr_value', selectedOption);
				parentOption.find('span').text(jQuery(this).text());
			});
			jQuery('.swift-search-link').on('click', function(e) {
				e.preventDefault();
				if(jQuery('#header > div').hasClass('is-sticky')) {
					jQuery('body,html').animate({
						scrollTop: 0
					}, 400);
					jQuery('body').addClass('header-aux-opening');
					setTimeout(function() {
						header.headerAuxShow('super-search');
					}, 500);
				} else {
					header.headerAuxShow('super-search');
				}
			});
			jQuery('.super-search-go').on('click', function(e) {
				e.preventDefault();
				var parentSearch = jQuery(this).parents('.sf-super-search'),
					filterURL = superSearch.urlBuilder(parentSearch),
					homeURL = jQuery(this).attr('data-home_url'),
					shopURL = jQuery(this).attr('data-shop_url');
				if(filterURL.indexOf("product_cat") >= 0) {
					location.href = homeURL + filterURL;
				} else {
					location.href = shopURL + filterURL;
				}
			});
			jQuery('.super-search-close').on('click', function(e) {
				e.preventDefault();
				header.headerAuxClose();
			});
		},
		urlBuilder: function(searchInstance) {
			var queryString = "";
			jQuery(searchInstance).find('.search-options .ss-dropdown').each(function() {
				var attr = jQuery(this).attr('id');
				var attrValue = jQuery(this).attr('data-attr_value');
				if(attrValue !== "") {
					if(attr === "product_cat") {
						if(queryString === "") {
							queryString += "?product_cat=" + attrValue;
						} else {
							queryString += "&product_cat=" + attrValue;
						}
					} else {
						if(queryString === "") {
							queryString += "?filter_" + attr + "=" + attrValue;
						} else {
							queryString += "&filter_" + attr + "=" + attrValue;
						}
					}
				}
			});
			jQuery('.search-options input').each(function() {
				var attr = jQuery(this).attr('name');
				var attrValue = jQuery(this).attr('value');
				if(queryString === "") {
					queryString += "?" + attr + "=" + attrValue;
				} else {
					queryString += "&" + attr + "=" + attrValue;
				}
			});
			return queryString;
		}
	};
	var header = {
		init: function() {
			var stickyHeaderMobile = !isMobileAlt,
				lastAjaxSearchValue = "",
				searchTimer = false;
			if(sfIncluded.hasClass('sticky-header-mobile')) {
				stickyHeaderMobile = true;
			}
			if(body.hasClass('header-overlay')) {
				header.headerOverlaySet();
				$window.smartresize(function() {
					header.headerOverlaySet();
				});
			}
			if(body.hasClass('mini-header-enabled') && stickyHeaderMobile) {
				header.stickyHeaderInit();
				$window.scroll(function() {
					var scrollTop = $window.scrollTop(),
						stickyHeader = jQuery('.sticky-header'),
						headerHeight = jQuery('#header-section').height(),
						headerTop = jQuery('#header-section').offset().top;
					if(jQuery('#top-bar').length > 0) {
						headerHeight = headerHeight + jQuery('#top-bar').height();
					}
					if(scrollTop >= headerTop + headerHeight + 30) {
						stickyHeader.addClass('sticky-header-resized');
					} else if(stickyHeader.hasClass('sticky-header-resized')) {
						stickyHeader.removeClass('sticky-header-resized');
					}
				});
			}
			jQuery('.header-search-link').on('click', function(e) {
				e.preventDefault();
				if(jQuery('#header > div').hasClass('is-sticky')) {
					jQuery('body,html').animate({
						scrollTop: 0
					}, 400);
					jQuery('body').addClass('header-aux-opening');
					setTimeout(function() {
						header.headerAuxShow('search');
					}, 500);
				} else {
					header.headerAuxShow('search');
				}
			});
			jQuery('.header-search-link-alt').on('click', function(e) {
				e.preventDefault();
				var ajaxSearchWrap = jQuery('.ajax-search-wrap');
				if(ajaxSearchWrap.is(':visible')) {
					ajaxSearchWrap.fadeOut(300);
					setTimeout(function() {
						jQuery('.ajax-search-results').slideUp(100).empty();
						jQuery('.ajax-search-form input[name=s]').val('');
					}, 300);
				} else {
					ajaxSearchWrap.fadeIn(300);
					setTimeout(function() {
						jQuery('.ajax-search-form input[name=s]').focus();
						jQuery("#container").bind("click", function(e) {
							var ajaxSearchWrap = jQuery('.ajax-search-wrap');
							if(!jQuery(e.target).closest('.ajax-search-wrap').length) {
								ajaxSearchWrap.fadeOut(300);
								setTimeout(function() {
									jQuery('.ajax-search-results').slideUp(100).empty();
									jQuery('.ajax-search-form input[name=s]').val('');
								}, 300);
								jQuery("#container").unbind("click");
							}
						});
					}, 300);
				}
			});
			jQuery('.ajax-search-form input[name=s]').on('keyup', function(e) {
				var searchvalue = e.currentTarget.value;
				clearTimeout(searchTimer);
				if(lastAjaxSearchValue != jQuery.trim(searchvalue) && searchvalue.length >= 3) {
					searchTimer = setTimeout(function() {
						header.ajaxSearch(e);
					}, 400);
				}
			});
			jQuery('#header-search-close').on('click', function(e) {
				e.preventDefault();
				header.headerAuxClose();
			});
			jQuery('#header-search input').on('blur', function() {
				header.headerAuxClose();
			});
			$window.scroll(function() {
				var scrollTop = $window.scrollTop();
				if(scrollTop > 100 && jQuery('body').hasClass('header-aux-open') && !jQuery('body').hasClass('header-aux-opening')) {
					header.headerAuxClose();
				}
			});
		},
		stickyHeaderInit: function() {
			var spacing = 0;
			if(jQuery('#wpadminbar').length > 0) {
				spacing = jQuery('#wpadminbar').height();
			}
			if(isMobileAlt && sfIncluded.hasClass('sticky-header-mobile')) {
				jQuery('.header-wrap').sticky({
					topSpacing: spacing
				});
			} else {
				jQuery('.sticky-header').sticky({
					topSpacing: spacing
				});
			}
		},
		headerOverlaySet: function() {
			var headerWrapHeight = jQuery('.header-wrap').height();
			if(jQuery('#main-container').find('#swift-slider').length === 0 && jQuery('#main-container').find('.home-slider-wrap').length === 0 && jQuery('#main-container').find('.page-heading').length === 0) {
				jQuery('.inner-page-wrap').animate({
					'padding-top': headerWrapHeight + 30
				}, 300);
			} else if(!(jQuery('#main-container').find('#swift-slider').length > 0 || jQuery('#main-container').find('.home-slider-wrap').length > 0)) {
				if(jQuery('.page-heading').hasClass('fancy-heading')) {
					jQuery('.page-heading').animate({
						'padding-top': headerWrapHeight + 110
					}, 300);
				} else {
					jQuery('.page-heading').animate({
						'padding-top': headerWrapHeight + 35
					}, 300);
				}
			}
			if(jQuery('#main-container').find('#swift-slider').length > 0 || jQuery('#main-container').find('.home-slider-wrap').length > 0) {
				if(jQuery('.page-heading').hasClass('fancy-heading')) {
					jQuery('.page-heading').css('padding-top', 120);
				} else {
					jQuery('.page-heading').css('padding-top', 35);
				}
			}
		},
		headerAuxShow: function(type) {
			jQuery('body').addClass('header-aux-open');
			if(type == "search") {
				if(jQuery('body > #super-search:visible')) {
					header.headerSuperSearchFadeOut();
				}
				if(IEVersion && IEVersion < 9) {
					jQuery('#header-search').show();
				} else {
					jQuery('#header-search').animate({
						'opacity': 1
					}, 500).css('z-index', '100');
				}
				jQuery('#header-search input').focus();
			} else if(type == "super-search") {
				if(jQuery('#header-search:visible')) {
					header.headerSearchFadeOut();
				}
				if(IEVersion && IEVersion < 9) {
					setTimeout(function() {
						jQuery('body > #super-search').show();
					}, 400);
				} else {
					setTimeout(function() {
						jQuery('body > #super-search').animate({
							'opacity': 1
						}, 500).css('z-index', '100');
					}, 400);
				}
				jQuery('body').addClass('ss-open');
			}
			setTimeout(function() {
				jQuery('body').removeClass('header-aux-opening');
			}, 500);
		},
		headerAuxClose: function() {
			jQuery('body').removeClass('header-aux-open');
			jQuery('body').addClass('header-aux-closing');
			header.headerSearchFadeOut();
			header.headerSuperSearchFadeOut();
			setTimeout(function() {
				jQuery('body').removeClass('header-aux-closing');
			}, 700);
		},
		headerSearchFadeOut: function() {
			if(IEVersion && IEVersion < 9) {
				jQuery('#header-search').hide();
			} else {
				jQuery('#header-search').animate({
					'opacity': 0
				}, 500).css('z-index', '');
			}
		},
		headerSuperSearchFadeOut: function() {
			if(IEVersion && IEVersion < 9) {
				jQuery('body > #super-search').hide();
			} else {
				jQuery('body > #super-search').animate({
					'opacity': 0
				}, 500).css('z-index', '');
			}
			jQuery('body').removeClass('ss-open');
		},
		ajaxSearch: function(e) {
			var searchInput = jQuery(e.currentTarget),
				searchValues = searchInput.parents('form').serialize() + '&action=sf_ajaxsearch',
				results = jQuery('.ajax-search-results'),
				loadingIndicator = jQuery('.ajax-search-wrap .ajax-loading');
			jQuery.ajax({
				url: ajaxurl,
				type: "POST",
				data: searchValues,
				beforeSend: function() {
					loadingIndicator.fadeIn(50);
				},
				success: function(response) {
					if(response === 0) {
						response = "";
					} else {
						results.html(response);
					}
				},
				complete: function() {
					loadingIndicator.fadeOut(200);
					results.slideDown(400);
				}
			});
		}
	};
	var nav = {
		init: function() {
			jQuery("ul.sub-menu").parents('.menu-item').addClass('parent');
			jQuery('.menu li.parent > a').on('click', function(e) {
				if(jQuery('#container').width() < 1024 || body.hasClass('standard-browser')) {
					return e;
				}
				var directDropdown = jQuery(this).parent().find('ul.sub-menu').first();
				if(directDropdown.css('opacity') === '1' || directDropdown.css('opacity') === 1) {
					return e;
				} else {
					e.preventDefault();
				}
			});
			var menuTop = 40;
			var menuTopReset = 80;
			jQuery("nav.std-menu").find(".menu li.parent").hoverIntent({
				over: function() {
					if(jQuery('#container').width() > 767 || body.hasClass('responsive-fixed')) {
						var subMenuWidth = jQuery(this).find('ul.sub-menu').first().outerWidth(true);
						var mainMenuItemWidth = jQuery(this).outerWidth(true);
						var menuLeft = '-' + (Math.round(subMenuWidth / 2) - Math.round(mainMenuItemWidth / 2)) + 'px';
						var menuContainer = jQuery(this).parent().parent();
						if(menuContainer.hasClass("top-menu") || menuContainer.parent().hasClass("top-menu")) {
							if(menuContainer.parent().parent().hasClass("tb-right")) {
								menuLeft = "";
							} else {
								menuLeft = "-1px";
							}
							menuTop = 31;
							menuTopReset = 40;
						} else if(menuContainer.hasClass("header-menu")) {
							menuLeft = "-1px";
							menuTop = 28;
							menuTopReset = 40;
						} else if(menuContainer.hasClass("search-nav")) {
							menuTop = 44;
							menuTopReset = 64;
						} else if(jQuery('#header-section').hasClass('header-1') || jQuery('#header-section').hasClass('header-2')) {
							menuTop = 47;
							menuTopReset = 67;
						} else {
							menuTop = 44;
							menuTopReset = 64;
						}
						if(jQuery(this).find('ul.sub-menu').first().parent().parent().hasClass("sub-menu")) {
							menuLeft = jQuery(this).find('ul.sub-menu').first().parent().parent().outerWidth(true) - 2;
						}
						jQuery(this).find('ul.sub-menu').first().addClass('show-dropdown').css('top', menuTop);
					}
				},
				out: function() {
					if(jQuery('#container').width() > 767 || body.hasClass('responsive-fixed')) {
						jQuery(this).find('.sub-menu').first().removeClass('show-dropdown').css('top', menuTopReset);
					}
				}
			});
			jQuery(".shopping-bag-item").on("mouseenter", function() {
				var subMenuTop = 44,
					subMenuTopReset = 64;
				if(jQuery(this).parent().parent().hasClass("top-menu")) {
					subMenuTop = 31;
					subMenuTopReset = 40;
				} else if(jQuery(this).parent().parent().hasClass("mini-menu")) {
					subMenuTop = 40;
					menuTopReset = 60;
				} else if(jQuery('#header-section').hasClass('header-1') || jQuery('#header-section').hasClass('header-2')) {
					subMenuTop = 47;
					menuTopReset = 67;
				}
				jQuery(this).find('ul.sub-menu').first().addClass('show-dropdown').css('top', subMenuTop);
			}).on("mouseleave", function() {
				if(jQuery('#container').width() > 767 || body.hasClass('responsive-fixed')) {
					jQuery(this).find('ul.sub-menu').first().removeClass('show-dropdown').css('top', 56);
				}
			});
			jQuery('.menu-item').on('click', 'a', function(e) {
				var isMobile = false;
				if(jQuery(this).parents('#mobile-menu').length > 0) {
					isMobile = true;
				}
				var linkHref = jQuery(this).attr('href');
				if(linkHref.indexOf('#') === 0) {
					var spacerHeight = jQuery(linkHref).height(),
						headerHeight = 0;
					if(jQuery('.sticky-header').length > 0) {
						headerHeight = jQuery('.sticky-header').outerHeight();
					}
					if(jQuery('#wpadminbar').length > 0) {
						headerHeight += jQuery('#wpadminbar').outerHeight();
					}
					if(jQuery(linkHref).length > 0) {
						jQuery('html, body').stop().animate({
							scrollTop: jQuery(linkHref).offset().top + spacerHeight - headerHeight - 20
						}, 1000, 'easeInOutExpo');
					}
					if(isMobile) {
						nav.hideMobileMenu();
					}
					e.preventDefault();
				} else {
					return e;
				}
			});
			jQuery('.mobile-menu-show').on('click', function(e) {
				e.preventDefault();
				if(body.hasClass('mobile-menu-open')) {
					nav.hideMobileMenu();
				} else {
					nav.showMobileMenu();
				}
			});
			jQuery('.mobile-menu-close').on('click', function(e) {
				e.preventDefault();
				nav.hideMobileMenu();
			});
			$window.smartresize(function() {
				if(jQuery('#container').width() > 767 || body.hasClass('responsive-fixed')) {
					var menus = jQuery('nav').find('ul.menu');
					menus.each(function() {
						jQuery(this).css("display", "");
					});
				}
			});
			var currentLanguage = jQuery('li.aux-languages').find('.current-language').html();
			if(currentLanguage !== "") {
				jQuery('li.aux-languages > a').html(currentLanguage);
			}
			nav.currentScrollIndication();
			$window.scroll(function() {
				nav.currentScrollIndication();
			});
		},
		load: function() {
			if((!isMobile || $window.width() > 768) && !sfIncluded.hasClass('disable-megamenu')) {
				nav.megaMenu();
			}
		},
		currentScrollIndication: function() {
			var adjustment = 0;
			if(body.hasClass('sticky-header-enabled')) {
				adjustment = jQuery('.header-wrap').height();
			}
			var inview = inview = jQuery('.blank_spacer:in-viewport:first').attr('id'),
				menuItems = jQuery('#main-navigation .menu li a'),
				link;
			if(inview !== "" && typeof inview != 'undefined') {
				link = menuItems.filter('[href="#' + inview + '"]');
			}
			menuItems.parent().removeClass('current-scroll-item');
			menuItems.parent().parent().find('.current-menu-item').removeClass('indicator-disabled');
			if(typeof inview != 'undefined' && link.length > 0 && !link.hasClass('.current-scroll-item')) {
				menuItems.parent().removeClass('current-scroll-item');
				menuItems.parent().parent().find('.current-menu-item').addClass('indicator-disabled');
				link.parent().addClass('current-scroll-item');
			}
		},
		megaMenu: function() {
			jQuery('#main-navigation .menu').dcMegaMenu({
				rowItems: '5',
				speed: 200,
				effect: 'fade',
				fullWidth: true
			});
			var mainNav = jQuery('#main-navigation'),
				mainNavHeight = mainNav.height(),
				subMenu = mainNav.find('.sub-container');
			subMenu.each(function() {
				jQuery(this).css('top', mainNavHeight);
			});
		},
		showMobileMenu: function() {
			body.addClass('mobile-menu-open');
			setTimeout(function() {
				jQuery('#container').on('click', nav.containerClick);
			}, 500);
		},
		hideMobileMenu: function() {
			body.removeClass('mobile-menu-open');
			jQuery('#container').off('click', nav.containerClick);
		},
		containerClick: function() {
			body.removeClass('mobile-menu-open');
			nav.hideMobileMenu();
		}
	};
	var woocommerce = {
		init: function() {
			jQuery(document).on('click', '.add_to_wishlist', function() {
				jQuery(this).parent().parent().find('.yith-wcwl-wishlistaddedbrowse').show().removeClass("hide").addClass("show");
				jQuery(this).hide().addClass("hide").removeClass("show");
			});
			woocommerce.productQuantityAdjust();
			jQuery('.add_to_cart_button').on('click', function() {
				var button = jQuery(this);
				var added_text = button.attr("data-added_text");
				button.addClass("product-added");
				button.find('span').text(added_text);
			});
			jQuery('.show-products-link').on('click', function(e) {
				e.preventDefault();
				var linkHref = jQuery(this).attr('href').replace('?', ''),
					currentURL = document.location.href.replace('/page/2', '').replace('/page/3', '').replace('/page/4', '').replace('/page/5', '').replace('/page/6', '').replace('/page/7', '').replace('/page/8', '').replace('/page/9', ''),
					currentQuery = document.location.search;
				if(currentQuery.indexOf('?show') >= 0) {
					window.location = jQuery(this).attr('href');
				} else if(currentQuery.indexOf('?') >= 0) {
					window.location = currentURL + '&' + linkHref;
				} else {
					window.location = currentURL + '?' + linkHref;
				}
			});
			jQuery('ul.products li').hover(function() {
				var imageOverlay = jQuery(this).find('.image-overlay');
				imageOverlay.animate({
					top: jQuery(this).height() * -1
				}, 400);
			}, function() {
				var imageOverlay = jQuery(this).find('.image-overlay');
				imageOverlay.animate({
					top: 0
				}, 400);
			});
			if(jQuery.fn.imagesLoaded) {
				$window.smartresize(function() {});
			}
			jQuery('.shipping-calculator-form input').keypress(function(e) {
				if(e.which == 10 || e.which == 13) {
					jQuery(".update-totals-button button").click();
				}
			});
		},
		productSetup: function() {
			jQuery('ul.products').imagesLoaded(function() {
				var captionVisible = jQuery(this).first('li.type-product').find('figure > figcaption').is(":visible");
				jQuery('ul.products li.type-product').each(function() {
					var productImageHeight = jQuery(this).find('.product-image > img').height();
					if(jQuery('#container').width() <= 1024 && captionVisible) {
						productImageHeight = productImageHeight + 20;
					}
					jQuery(this).find('figure').css('padding-bottom', productImageHeight + 'px');
				});
			});
		},
		variations: function() {
			jQuery('.single_variation_wrap').on("show_variation", function() {
				if(jQuery('#sf-included').hasClass('has-productzoom')) {
					jQuery('.zoomContainer').remove();
					setTimeout(function() {
						jQuery('.product-slider-image').each(function() {
							jQuery(this).data('zoom-image', jQuery(this).parent().find('a.zoom').attr('href'));
						});
						var currentImage = jQuery('#product-img-slider li:first').find('.product-slider-image');
						woocommerce.productZoom(currentImage);
						jQuery('#product-img-slider').flexslider(0);
					}, 500);
				} else {
					setTimeout(function() {
						jQuery('#product-img-slider').flexslider(0);
						var flexViewport = jQuery('#product-img-slider').find('.flex-viewport'),
							flexsliderHeight = flexViewport.find('ul.slides').css('height');
					}, 500);
				}
				setTimeout(function() {
					jQuery('.product-slider-image').each(function() {
						var zoomImage = jQuery(this).attr('src');
						jQuery(this).parent().find('a.zoom').attr('href', zoomImage).attr('data-o_href', '').attr('data-o_href', zoomImage);
						lightbox.destroy();
						lightbox.init();
					});
				}, 600);
			});
		},
		productZoom: function(zoomObject) {
			if(isMobileAlt) {
				return;
			}
			zoomObject.elevateZoom({
				zoomType: "inner",
				cursor: "crosshair",
				zoomParent: '#product-img-slider',
				responsive: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 750
			});
		},
		productQuantityAdjust: function() {
			jQuery(document).on('click', '.qty-plus', function(e) {
				e.preventDefault();
				var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
					newValue = parseInt(quantityInput.val(), 10) + 1,
					maxValue = parseInt(quantityInput.attr('max'), 10);
				if(!maxValue) {
					maxValue = 9999999999;
				}
				if(newValue <= maxValue) {
					quantityInput.val(newValue);
					quantityInput.change();
				}
			});
			jQuery(document).on('click', '.qty-minus', function(e) {
				e.preventDefault();
				var quantityInput = jQuery(this).parents('.quantity').find('input.qty'),
					newValue = parseInt(quantityInput.val(), 10) - 1,
					minValue = parseInt(quantityInput.attr('min'), 10);
				if(!minValue) {
					minValue = 1;
				}
				if(newValue >= minValue) {
					quantityInput.val(newValue);
					quantityInput.change();
				}
			});
		}
	};
	var flexSlider = {
		init: function() {
			var hasProductZoom = false;
			if(jQuery('#sf-included').hasClass('has-productzoom') && !body.hasClass('mobile-browser')) {
				hasProductZoom = true;
			}
			if(jQuery('.recent-posts').length > 0) {
				flexSlider.thumb();
			}
			if(jQuery('#product-img-nav ul.slides li').length > 1) {
				jQuery('#product-img-nav').flexslider({
					animation: "slide",
					directionNav: false,
					controlNav: false,
					animationLoop: false,
					slideshow: false,
					itemWidth: 70,
					itemMargin: 30,
					asNavFor: '#product-img-slider'
				});
			} else {
				jQuery('#product-img-nav').css('display', 'none');
			}
			var currentImage = "";
			jQuery('#product-img-slider').flexslider({
				animation: "slide",
				controlNav: false,
				smoothHeight: true,
				animationLoop: false,
				slideshow: sliderAuto,
				slideshowSpeed: sliderSlideSpeed,
				animationDuration: sliderAnimSpeed,
				sync: "#product-img-nav",
				start: function(productSlider) {
					if(hasProductZoom) {
						if(productSlider.slides) {
							currentImage = productSlider.slides.eq(productSlider.currentSlide).find('.product-slider-image');
							woocommerce.productZoom(currentImage);
						} else {
							currentImage = jQuery('#product-img-slider').find('.product-slider-image');
							woocommerce.productZoom(currentImage);
						}
					}
				},
				before: function() {
					if(hasProductZoom) {
						jQuery('.zoomContainer').remove();
					}
				},
				after: function(productSlider) {
					if(hasProductZoom) {
						currentImage = productSlider.slides.eq(productSlider.currentSlide).find('.product-slider-image');
						woocommerce.productZoom(currentImage);
					}
				}
			});
			var flexUseCSS = true;
			if(isMobileAlt) {
				flexUseCSS = false;
			}
			jQuery('.item-slider').flexslider({
				useCSS: flexUseCSS,
				animation: "slide",
				slideDirection: "horizontal",
				slideshow: sliderAuto,
				slideshowSpeed: sliderSlideSpeed,
				animationDuration: sliderAnimSpeed,
				smoothHeight: true,
				directionNav: true,
				controlNav: true,
				keyboardNav: false,
				mousewheel: false,
				prevText: "Prev",
				nextText: "Next",
				pausePlay: true,
				pauseText: '',
				playText: '',
				randomize: false,
				slideToStart: 0,
				animationLoop: true,
				pauseOnAction: true,
				pauseOnHover: false,
				controlsContainer: "",
				manualControls: "",
				start: function() {},
				before: function() {},
				after: function() {},
				end: function() {}
			});
			jQuery('#swift-slider').flexslider({
				animation: "slide",
				slideDirection: "horizontal",
				slideshow: sliderAuto,
				slideshowSpeed: sliderSlideSpeed,
				animationDuration: sliderAnimSpeed,
				directionNav: true,
				controlNav: false,
				keyboardNav: false,
				mousewheel: false,
				prevText: "Prev",
				nextText: "Next",
				pausePlay: false,
				animationLoop: true,
				pauseOnAction: true,
				pauseOnHover: true,
				start: function(postsSlider) {
					jQuery('.swift-slider-loading').fadeOut(200);
					if(postsSlider.slides) {
						postsSlider.slides.eq(postsSlider.currentSlide - 1).addClass('flex-active-slide');
						if(postsSlider.slides.eq(postsSlider.currentSlide).has('.flex-caption-large')) {
							var chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.fw-chart');
							if(body.hasClass("browser-ie")) {
								chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.chart');
							}
							chart.each(function() {
								var countValue = parseInt(jQuery(this).attr('data-count'), 10);
								jQuery(this).data('easyPieChart').update(80);
								jQuery(this).find('span').replaceWith("<span>0</span>");
								jQuery(this).find('span').animateNumber(countValue);
							});
						}
						postsSlider.slides.eq(postsSlider.currentSlide).find('.comment-chart:not(.fw-chart) span').replaceWith("<span>0</span>");
					}
				},
				before: function(postsSlider) {
					if(postsSlider.slides) {
						if(postsSlider.slides.eq(postsSlider.currentSlide - 1).has('.flex-caption-large')) {
							var chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.fw-chart');
							if(body.hasClass("browser-ie")) {
								chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.chart');
							}
							chart.each(function() {
								jQuery(this).data('easyPieChart').update(0);
								jQuery(this).find('span').replaceWith("<span>0</span>");
							});
						}
						setTimeout(function() {
							postsSlider.slides.eq(postsSlider.currentSlide).addClass('flex-active-slide');
							if(postsSlider.slides.eq(postsSlider.currentSlide).has('.flex-caption-large')) {
								var chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.fw-chart');
								if(body.hasClass("browser-ie")) {
									chart = postsSlider.slides.eq(postsSlider.currentSlide).find('.chart');
								}
								chart.each(function() {
									var countValue = parseInt(jQuery(this).attr('data-count'), 10);
									jQuery(this).data('easyPieChart').update(80);
									jQuery(this).find('span').animateNumber(countValue);
								});
							}
						}, 1000);
					}
				}
			});
			jQuery('.content-slider').each(function() {
				var slider = jQuery(this),
					autoplay = ((slider.attr('data-autoplay') === "yes") ? true : false);
				slider.flexslider({
					animation: "fade",
					slideshow: autoplay,
					slideshowSpeed: sliderSlideSpeed,
					animationDuration: sliderAnimSpeed,
					smoothHeight: true,
					directionNav: true,
					controlNav: false,
					pauseOnHover: true,
					start: function() {}
				});
			});
			jQuery('#swift-slider li').each(function() {
				jQuery(this).find('.chart').each(function() {
					jQuery(this).easyPieChart({
						animate: 1000,
						size: 70,
						barColor: jQuery(this).attr('data-barcolor'),
						trackColor: 'transparent',
						scaleColor: false
					});
					jQuery(this).find('span').replaceWith("<span>0</span>");
				});
			});
			jQuery('#swift-slider li').hover(function() {
				jQuery(this).find('.flex-caption-details').removeClass('closing');
				jQuery(this).find('.flex-caption-details').addClass('open');
			}, function() {
				jQuery(this).find('.flex-caption-details').addClass('closing');
				jQuery(this).find('.flex-caption-details').removeClass('open');
			});
			jQuery('.caption-details-inner').on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
				var chart = jQuery(this).find('.chart');
				if(jQuery(this).parent().hasClass('closing')) {
					chart.each(function() {
						jQuery(this).data('easyPieChart').update(0);
						jQuery(this).find('span').replaceWith("<span>0</span>");
					});
					jQuery(this).parent().removeClass('closing');
				} else if(jQuery(this).parent().hasClass('open')) {
					chart.each(function() {
						var countValue = parseInt(jQuery(this).attr('data-count'), 10);
						jQuery(this).data('easyPieChart').update(80);
						jQuery(this).find('span').animateNumber(countValue);
					});
				}
			});
		},
		thumb: function() {
			jQuery('.thumb-slider').flexslider({
				animation: "fade",
				slideDirection: "horizontal",
				slideshow: sliderAuto,
				slideshowSpeed: sliderSlideSpeed,
				animationDuration: sliderAnimSpeed,
				directionNav: true,
				controlNav: false,
				keyboardNav: false,
				smoothHeight: true
			});
		},
		gallery: function() {
			jQuery('.spb_gallery_widget').each(function() {
				var gallerySlider = jQuery(this).find('.gallery-slider'),
					galleryNav = jQuery(this).find('.gallery-nav'),
					galleryAuto = gallerySlider.data('autoplay');
				if(galleryAuto === "yes") {
					galleryAuto = true;
				} else {
					galleryAuto = false;
				}
				galleryNav.flexslider({
					animation: "slide",
					directionNav: true,
					controlNav: false,
					animationLoop: false,
					slideshow: false,
					itemWidth: 100,
					itemMargin: 30,
					asNavFor: gallerySlider
				});
				gallerySlider.flexslider({
					animation: gallerySlider.data('transition'),
					slideshow: galleryAuto,
					smoothHeight: true,
					slideshowSpeed: sliderSlideSpeed,
					animationDuration: sliderAnimSpeed,
					controlNav: false,
					animationLoop: galleryAuto,
					sync: galleryNav
				});
			});
		}
	};
	var portfolioContainer = jQuery('.portfolio-wrap').find('.filterable-items');
	var portfolio = {
		init: function() {
			if(portfolioContainer.hasClass('masonry-items')) {
				portfolio.masonrySetup();
			} else {
				portfolio.standardSetup();
			}
			$window.smartresize(function() {
				portfolio.windowResized();
			});
			jQuery('.filtering li').each(function() {
				var itemCount = 0;
				var filter = jQuery(this),
					filterName = jQuery(this).find('a').attr('class'),
					portfolioItems = jQuery(this).parent().parent().parent().parent().find('.filterable-items');
				portfolioItems.find('.portfolio-item').each(function() {
					if(jQuery(this).hasClass(filterName)) {
						filter.addClass('has-items');
						itemCount++;
					}
				});
				if(jQuery(this).hasClass('all')) {
					itemCount = portfolioItems.children('li').length;
					jQuery(this).find('.item-count').text(itemCount);
				} else {
					jQuery(this).find('.item-count').text(itemCount);
				}
			}).parents('.portfolio-filter-tabs').animate({
				opacity: 1
			}, 400);
			jQuery('.filtering li').on('click', 'a', function(e) {
				e.preventDefault();
				jQuery(this).parent().parent().find('li').removeClass('selected');
				jQuery(this).parent().addClass('selected');
				var selector = jQuery(this).data('filter');
				var portfolioItems = jQuery(this).parent().parent().parent().parent().parent().find('.filterable-items');
				portfolioItems.isotope({
					filter: selector
				});
			});
			jQuery('.filter-wrap > a').on('click', function(e) {
				e.preventDefault();
				jQuery(this).parent().find('.filter-slide-wrap').slideToggle();
			});
		},
		standardSetup: function() {
			portfolioContainer.imagesLoaded(function() {
				portfolio.setItemHeight();
				flexSlider.thumb();
				portfolioContainer.animate({
					opacity: 1
				}, 800);
				portfolioContainer.isotope({
					animationEngine: 'best-available',
					animationOptions: {
						duration: 300,
						easing: 'easeInOutQuad',
						queue: false
					},
					resizable: true,
					layoutMode: 'fitRows'
				});
				portfolioContainer.isotope("layout");
			});
		},
		masonrySetup: function() {
			portfolioContainer.imagesLoaded(function() {
				flexSlider.thumb();
				portfolioContainer.animate({
					opacity: 1
				}, 800);
				portfolioContainer.isotope({
					itemSelector: '.portfolio-item',
					animationEngine: 'best-available',
					animationOptions: {
						duration: 300,
						easing: 'easeInOutQuad',
						queue: false
					},
					resizable: true
				});
			});
		},
		setItemHeight: function() {
			if(!portfolioContainer.hasClass('masonry-items')) {
				portfolioContainer.children().css('min-height', '0');
				portfolioContainer.equalHeights();
			}
		},
		windowResized: function() {
			if(!portfolioContainer.hasClass('masonry-items')) {
				portfolio.setItemHeight();
			}
			if(portfolioContainer.hasClass('full-width-area')) {
				setTimeout(function() {
					portfolioContainer.isotope("layout");
				}, 500);
			} else {
				portfolioContainer.isotope("layout");
			}
		},
		portfolioShowcaseInit: function() {
			flexSlider.thumb();
			portfolio.portfolioShowcaseWrap();
			portfolio.portfolioShowcaseItems();
			$window.smartresize(function() {
				portfolio.portfolioShowcaseWrap();
				portfolio.portfolioShowcaseItems();
			});
		},
		portfolioShowcaseWrap: function() {
			var portfolioShowcaseWrap = jQuery('.portfolio-showcase-wrap'),
				container = jQuery('#page-wrap'),
				mediaOffset = container.offset().left,
				windowWidth = $window.width() + 2;
			if(windowWidth > 768) {
				mediaOffset = mediaOffset - 15;
			} else {
				mediaOffset = 7;
			}
			if(jQuery('#container').hasClass('boxed-layout')) {
				windowWidth = jQuery('#container').width() + 2;
				if(windowWidth > 1026) {
					mediaOffset = 30;
				} else if(windowWidth > 770) {
					mediaOffset = 17;
				} else if(windowWidth > 482) {
					mediaOffset = 11;
				} else {
					mediaOffset = 7;
				}
			}
			portfolioShowcaseWrap.css('width', windowWidth);
			portfolioShowcaseWrap.css('margin-left', '-' + mediaOffset + 'px');
			portfolioShowcaseWrap.animate({
				opacity: 1
			}, 600);
		},
		portfolioShowcaseItems: function() {
			jQuery('.portfolio-showcase-wrap').each(function() {
				var contWidth = $window.width();
				if(jQuery('#container').hasClass('boxed-layout')) {
					contWidth = jQuery('#container').width();
				}
				var thisShowcase = jQuery(this),
					columns = thisShowcase.find('.portfolio-showcase-items').data('columns'),
					windowWidth = contWidth + 2,
					itemWidth = Math.floor(windowWidth / columns),
					maximisedWidth = Math.floor(windowWidth * 40 / 100),
					reducedWidth = Math.floor(windowWidth / 5),
					deselectedLeft = (itemWidth / 2 - maximisedWidth / 2) / 0.75,
					resetLeft = (reducedWidth / 2 - maximisedWidth / 2) / 1.3,
					isAnimating = !1,
					speed = 300;
				var showcaseItem = thisShowcase.find('li.portfolio-item');
				if(columns === 5) {
					maximisedWidth = Math.floor(windowWidth * 25 / 100);
					reducedWidth = Math.floor(windowWidth / 5.33);
					deselectedLeft = (itemWidth / 2 - maximisedWidth / 2) / 0.75;
					resetLeft = (reducedWidth / 2 - maximisedWidth / 2) / 1.3;
					showcaseItem.css("width", itemWidth);
					showcaseItem.css("height", maximisedWidth / 1.5);
					showcaseItem.find('.main-image').css("width", maximisedWidth);
					showcaseItem.find('.main-image').css("left", resetLeft);
					showcaseItem.find('.main-image').css("top", -maximisedWidth / 6);
					speed = 200;
				} else {
					showcaseItem.css("width", itemWidth);
					showcaseItem.css("height", maximisedWidth / 2);
					showcaseItem.find('.main-image').css("width", maximisedWidth);
					showcaseItem.find('.main-image').css("left", resetLeft);
				}
				showcaseItem.each(function() {
					if(windowWidth > 768) {
						jQuery(this).mouseenter(function() {
							if(!isAnimating) {
								isAnimating = !0;
								jQuery(this).removeClass("deselected-item");
								thisShowcase.find(".deselected-item").stop().animate({
									width: reducedWidth
								}, speed);
								thisShowcase.find(".deselected-item").find(".main-image").stop().animate({
									left: deselectedLeft
								}, speed);
								jQuery(this).find(".main-image").stop().animate({
									left: 0
								}, speed);
								jQuery(this).stop().animate({
									width: maximisedWidth
								}, speed + 1, function() {
									jQuery(this).find(".item-info").stop().show();
									jQuery(this).find(".item-info").stop().animate({
										bottom: 0
									}, speed, "easeInOutQuart");
								});
							}
						});
						jQuery(this).mouseleave(function() {
							if(isAnimating) {
								isAnimating = !1;
								jQuery(this).addClass("deselected-item");
								thisShowcase.find(".portfolio-item").stop().animate({
									width: itemWidth
								}, speed);
								thisShowcase.find(".portfolio-item .main-image").stop().animate({
									left: resetLeft
								}, speed);
								jQuery(this).find(".item-info").stop().animate({
									bottom: -80
								}, speed, function() {
									jQuery(this).find(".item-info").stop().hide();
								});
							}
						});
					}
				});
			});
		},
		stickyDetails: function() {
			var offset = 0,
				navSelectorElement = '.media-wrap',
				footerOffset = 160;
			if(jQuery('.page-heading').length > 0) {
				offset += jQuery('.page-heading').outerHeight(true);
			}
			if(jQuery('.inner-page-wrap').hasClass('portfolio-type-standard')) {
				offset += 130;
			}
			if(jQuery('.related-projects').length > 0) {
				footerOffset = 520;
			}
			jQuery('.sticky-details').stickySidebar({
				headerSelector: '.header-wrap',
				navSelector: navSelectorElement,
				contentSelector: '.article-body-wrap',
				footerSelector: '#footer-wrap',
				sidebarTopMargin: 0,
				footerThreshold: footerOffset,
				offset: offset
			});
			jQuery('.sticky-details').css('max-width', jQuery('.sticky-details').outerWidth(true));
			portfolio.stickyDetailsScroll();
			$window.scroll(function() {
				portfolio.stickyDetailsScroll();
			});
		},
		stickyDetailsScroll: function() {
			var contentElement = jQuery('.article-body-wrap');
			if(jQuery('.inner-page-wrap').hasClass('portfolio-type-fw-media')) {
				contentElement = jQuery('.portfolio-detail-description');
			}
			if(jQuery('.sticky-details').hasClass('sticky')) {
				jQuery('.sticky-details').css('margin-left', contentElement.outerWidth(true));
			} else {
				jQuery('.sticky-details').css('margin-left', 0);
			}
		},
	};
	var blogItems = jQuery('.blog-wrap').find('.blog-items');
	var blog = {
		init: function() {
			if(blogItems.hasClass('masonry-items')) {
				blog.masonryBlog();
			} else {
				flexSlider.thumb();
			}
			jQuery('.blog-slideout-trigger').on('click', function(e) {
				e.preventDefault();
				var blogWrap = jQuery(this).parent().parent().parent().parent();
				var filterPanel = blogWrap.find('.filter-wrap .filter-slide-wrap');
				var auxType = jQuery(this).attr('data-aux');
				blogWrap.find('.aux-list li').addClass('col-sm-2');
				blogWrap.find('.aux-list li a span').each(function() {
					jQuery(this).html(jQuery(this).html().replace("(", "").replace(")", ""));
				});
				if(jQuery(this).parent().hasClass('selected') && !filterPanel.is(':animated')) {
					blogWrap.find('.blog-aux-options li').removeClass('selected');
					filterPanel.slideUp(400);
					return;
				}
				blogWrap.find('.blog-aux-options li').removeClass('selected');
				jQuery(this).parent().addClass('selected');
				if(filterPanel.is(':visible')) {
					filterPanel.slideUp(400);
					setTimeout(function() {
						blogWrap.find('.aux-list').css('display', 'none');
						blogWrap.find('.aux-' + auxType).css('display', 'block');
						filterPanel.slideDown();
					}, 600);
				} else {
					blogWrap.find('.aux-list').css('display', 'none');
					blogWrap.find('.aux-' + auxType).css('display', 'block');
					filterPanel.slideDown();
				}
			});
		},
		masonryBlog: function() {
			flexSlider.thumb();
			if(!(IEVersion && IEVersion < 9)) {
				var scrollAnimateElement = new AnimOnScroll(document.getElementById('blogGrid'), {
					minDuration: 0.4,
					maxDuration: 0.7,
					viewportFactor: 0.2
				});
			}
			blogItems.imagesLoaded(function() {
				flexSlider.thumb();
			});
		},
		infiniteScroll: function() {
			if(!(IEVersion && IEVersion < 9)) {
				var infScrollData = jQuery('#inf-scroll-params');
				var infiniteScroll = {
					loading: {
						img: infScrollData.data('loadingimage'),
						msgText: infScrollData.data('msgtext'),
						finishedMsg: infScrollData.data('finishedmsg')
					},
					"nextSelector": ".pagenavi li.next a",
					"navSelector": ".pagenavi",
					"itemSelector": ".blog-item",
					"contentSelector": ".blog-items:not(.carousel-items)"
				};
				jQuery(infiniteScroll.contentSelector).infinitescroll(infiniteScroll, function() {
					if(blogItems.parent().find('.pagination-wrap').hasClass('load-more')) {
						jQuery('.load-more-btn').fadeIn(400);
					}
					lightbox.destroy();
					lightbox.init();
					blogItems.imagesLoaded(function() {
						if(blogItems.hasClass('masonry-items')) {
							flexSlider.thumb();
							blog.masonryBlog();
						} else {
							flexSlider.thumb();
						}
					});
				});
				if(blogItems.parent().find('.pagination-wrap').hasClass('load-more')) {
					$window.unbind('.infscr');
					jQuery('.load-more-btn').on('click', function(e) {
						e.preventDefault();
						jQuery(infiniteScroll.contentSelector).infinitescroll('retrieve');
						jQuery('.load-more-btn').fadeOut(400);
					});
				}
			} else {
				jQuery('.pagination-wrap').removeClass('hidden');
			}
		}
	};
	var carouselWidgets = {
		init: function() {
			var carousel = jQuery('.carousel-items'),
				carouselAuto = sfOptionParams.data('carousel-autoplay'),
				carouselPSpeed = sfOptionParams.data('carousel-pagespeed'),
				carouselSSpeed = sfOptionParams.data('carousel-slidespeed'),
				carouselPagination = sfOptionParams.data('carousel-pagination'),
				carouselPDirection = 'ltr',
				desktopWidth = 1199;
			if(body.hasClass('vertical-header')) {
				desktopWidth = desktopWidth + jQuery('#header-section').width();
			}
			if(carouselAuto) {
				carouselAuto = true;
			} else {
				carouselAuto = false;
			}
			if(carouselPagination) {
				carouselPagination = true;
			} else {
				carouselPagination = false;
			}
			if(isRTL) {
				carouselPDirection = 'rtl';
			}
			carousel.each(function() {
				var carouselInstance = jQuery('#' + jQuery(this).attr('id')),
					carouselColumns = parseInt(carouselInstance.attr("data-columns"), 10),
					desktopCarouselItems = 4 > carouselColumns ? carouselColumns : 4,
					desktopSmallCarouselItems = 3 > carouselColumns ? carouselColumns : 3,
					mobileCarouselItems = 1,
					carouselAutoplay = carouselAuto;
				if(carouselInstance.hasClass('clients-items')) {
					mobileCarouselItems = 2;
				}
				if(carouselInstance.hasClass('testimonials')) {
					desktopCarouselItems = 1;
					desktopSmallCarouselItems = 1;
					mobileCarouselItems = 1;
				}
				if(carouselInstance.data('auto')) {
					carouselAutoplay = true;
				}
				carouselInstance.imagesLoaded(function() {
					if(!carouselInstance.hasClass('no-gutters')) {
						var carouselWidth = carouselInstance.width();
						if(isRTL) {
							carouselInstance.css('margin-right', '-15px').css('width', carouselWidth + 30);
						} else {
							carouselInstance.css('margin-left', '-15px').css('width', carouselWidth + 30);
						}
					}
					carouselInstance.owlCarousel({
						items: carouselColumns,
						itemsDesktop: [desktopWidth, desktopCarouselItems],
						itemsDesktopSmall: [desktopWidth - 220, desktopSmallCarouselItems],
						itemsMobile: [479, mobileCarouselItems],
						paginationSpeed: carouselPSpeed,
						slideSpeed: carouselSSpeed,
						autoPlay: carouselAutoplay,
						autoPlayDirection: carouselPDirection,
						pagination: carouselPagination,
						autoHeight: false,
						beforeUpdate: function() {
							if(!carouselInstance.hasClass('no-gutters')) {
								var carouselWidth = carouselInstance.parent().width();
								carouselInstance.css('width', carouselWidth + 30);
							}
						},
						afterUpdate: function() {
							setTimeout(function() {
								flexSlider.thumb();
							}, 200);
						},
						afterInit: function() {
							flexSlider.thumb();
							$window.trigger('resize');
							setTimeout(function() {
								parallax.init(true);
							}, 200);
						},
						afterAction: function() {
							var carouselNext = carouselInstance.parents('.carousel-wrap').find('.carousel-next'),
								carouselPrev = carouselInstance.parents('.carousel-wrap').find('.carousel-prev');
							if(this.itemsAmount > this.visibleItems.length) {
								carouselNext.show();
								carouselPrev.show();
								carouselNext.removeClass('disabled');
								carouselPrev.removeClass('disabled');
								if(this.currentItem === 0) {
									carouselPrev.addClass('disabled');
								}
								if(this.currentItem == this.maximumItem) {
									carouselNext.addClass('disabled');
								}
							} else {
								carouselNext.hide();
								carouselPrev.hide();
							}
						}
					}).animate({
						'opacity': 1
					}, 800);
				});
			});
			jQuery('.carousel-next').click(function(e) {
				e.preventDefault();
				var carousel = jQuery(this).closest('.spb_content_element').find('.owl-carousel');
				if(isRTL) {
					carousel.data('owlCarousel').prev();
				} else {
					carousel.data('owlCarousel').next();
				}
			});
			jQuery('.carousel-prev').click(function(e) {
				e.preventDefault();
				var carousel = jQuery(this).closest('.spb_content_element').find('.owl-carousel');
				if(isRTL) {
					carousel.data('owlCarousel').next();
				} else {
					carousel.data('owlCarousel').prev();
				}
			});
		},
		carouselSwipeIndicator: function(carousel) {
			carousel.appear(function() {
				var swipeIndicator = jQuery(this).parents('.carousel-wrap').find('.sf-swipe-indicator');
				setTimeout(function() {
					swipeIndicator.fadeIn(500);
				}, 400);
				setTimeout(function() {
					swipeIndicator.addClass('animate');
				}, 1000);
				setTimeout(function() {
					swipeIndicator.fadeOut(400);
				}, 3000);
			});
		},
		carouselMinHeight: function(carousel) {
			var minHeight = parseInt(carousel.find('.carousel-item:not(.no-thumb)').eq(0).css('height'));
			carousel.find('.owl-item').each(function() {
				jQuery(this).css('min-height', minHeight + 'px');
			});
		}
	};
	var widgets = {
		init: function() {
			if(sfIncluded.hasClass('has-chart')) {
				jQuery('.chart-shortcode').each(function() {
					jQuery(this).easyPieChart({
						animate: 1000,
						lineCap: 'round',
						lineWidth: jQuery(this).attr('data-linewidth'),
						size: jQuery(this).attr('data-size'),
						barColor: jQuery(this).attr('data-barcolor'),
						trackColor: jQuery(this).attr('data-trackcolor'),
						scaleColor: 'transparent'
					});
				});
			}
			widgets.accordion();
			widgets.tabs();
			widgets.toggle();
			widgets.fullWidthVideo();
			widgets.introAnimations();
			widgets.iconBoxes();
			widgets.countAssets();
			if(sfIncluded.hasClass('has-countdown')) {
				widgets.countdownAssets();
			}
			if(sfIncluded.hasClass('has-imagebanner')) {
				widgets.imageBanners();
			}
			jQuery('ul.nav-tabs li a, .spb_accordion_section > h3 a').click(function() {
				setTimeout(function() {
					$window.trigger('resize');
				}, 200);
			});
			widgets.resizeAssets();
			$window.smartresize(function() {
				widgets.resizeAssets();
			});
			jQuery('[rel=tooltip]').tooltip();
		},
		resizeAssets: function() {
			var carousels = jQuery('.carousel-active .carousel-items,.carousel-active .products');
			var assets = jQuery('.alt-bg');
			var assetWidth = 0;
			if(jQuery('#container').width() < 460 && body.hasClass('responsive-fluid')) {
				assetWidth = jQuery('#container').width() - 40;
				carousels.find('.carousel-item,.product').each(function() {
					jQuery(this).css("width", assetWidth + "px");
				});
			} else if(jQuery('#container').width() < 768 && body.hasClass('responsive-fluid')) {
				if(carousels.hasClass('testimonials')) {
					assetWidth = jQuery('#container').width() - 40;
				} else {
					assetWidth = Math.floor(jQuery('#container').width() / 2) - 35;
				}
				carousels.find('.carousel-item,.product').each(function() {
					jQuery(this).css("width", assetWidth + "px");
				});
			} else if(body.hasClass('responsive-fluid')) {
				carousels.find('.carousel-item,.product').each(function() {
					jQuery(this).css("width", "");
				});
			}
			if(jQuery('#container').width() < 768 && body.hasClass('responsive-fluid')) {
				assetWidth = jQuery('#container').width();
				assets.each(function() {
					jQuery(this).css("width", assetWidth + "px");
				});
			} else {
				assets.each(function() {
					jQuery(this).css("width", "");
				});
			}
		},
		accordion: function() {
			jQuery('.spb_accordion').each(function() {
				var spb_tabs, active_tab = false,
					active_attr = parseInt(jQuery(this).attr('data-active'), 10);
				if(jQuery.type(active_attr) === "number") {
					active_tab = active_attr;
				}
				spb_tabs = jQuery(this).find('.spb_accordion_wrapper').accordion({
					header: "> div > h3",
					autoHeight: true,
					collapsible: true,
					active: active_tab,
					heightStyle: "content"
				});
			}).fadeIn(400);
		},
		tabs: function() {
			jQuery('.spb_tabs').each(function() {
				jQuery(this).find('.tab-pane').first().addClass('active');
				jQuery(this).find('.tab-pane').removeClass('load');
			});
			jQuery('.spb_tour').each(function() {
				jQuery(this).find('.tab-pane').first().addClass('active');
				jQuery(this).find('.tab-pane').removeClass('load');
			});
			setTimeout(function() {
				if(jQuery('.spb_tabs').length > 0) {
					var url = document.location.toString();
					if(url.match('#') && jQuery('.nav-tabs a[href="#' + url.split('#')[1] + '"]').length > 0) {
						var thisTab = jQuery('.nav-tabs a[href="#' + url.split('#')[1] + '"]'),
							parentTabs = thisTab.parents('.spb_tabs'),
							tabHash = url.split('#')[1];
						jQuery('.nav-tabs a[href="#' + tabHash + '"]').tab('show');
					}
					jQuery('.nav-tabs a').click(function(e) {
						var hash = e.target.hash;
						if(history.pushState) {
							history.pushState(null, null, hash);
						} else {
							location.hash = hash;
						}
					});
				}
			}, 50);
		},
		toggle: function() {
			jQuery('.spb_toggle').click(function() {
				if(jQuery(this).hasClass('spb_toggle_title_active')) {
					jQuery(this).removeClass('spb_toggle_title_active').next().slideUp(500);
				} else {
					jQuery(this).addClass('spb_toggle_title_active').next().slideDown(500);
				}
			});
			jQuery('.spb_toggle_content').each(function() {
				if(jQuery(this).next().is('h4.spb_toggle') === false) {
					jQuery('<div class="last_toggle_el_margin"></div>').insertAfter(this);
				}
			});
		},
		initSkillBars: function() {
			widgets.animateSkillBars();
			jQuery('a.ui-tabs-anchor').click(function() {
				widgets.animateSkillBars();
			});
		},
		animateSkillBars: function() {
			jQuery('.progress').each(function() {
				var progress = jQuery(this);
				progress.appear(function() {
					var progressValue = progress.find('.bar').attr('data-value');
					if(!progress.hasClass('animated')) {
						progress.addClass('animated');
						progress.find('.bar').animate({
							width: progressValue + "%"
						}, 800, function() {
							progress.parent().find('.bar-text .progress-value').fadeIn(600);
						});
					}
				});
			});
		},
		charts: function() {
			widgets.animateCharts();
		},
		animateCharts: function() {
			jQuery('.chart-shortcode').each(function() {
				var chart = jQuery(this);
				chart.appear(function() {
					if(!jQuery(this).hasClass('animated')) {
						jQuery(this).addClass('animated');
						var animatePercentage = parseInt(jQuery(this).attr('data-animatepercent'), 10);
						jQuery(this).data('easyPieChart').update(animatePercentage);
					}
				});
			});
		},
		fullWidthVideo: function() {
			jQuery(document).on('click', '.fw-video-link', function() {
				if(jQuery(this).data('video') !== "") {
					widgets.openFullWidthVideo(jQuery(this));
				}
				return false;
			});
			jQuery(document).on('click', '.fw-video-close', function() {
				widgets.closeFullWidthVideo();
			});
		},
		openFullWidthVideo: function(element) {
			jQuery('.fw-video-close').addClass('is-open');
			jQuery('.fw-video-spacer').animate({
				height: windowheight
			}, 1000, 'easeInOutExpo');
			jQuery('.fw-video-area').css('display', 'block').animate({
				top: 0,
				height: '100%'
			}, 1000, 'easeInOutExpo', function() {
				jQuery('.fw-video-area').append('<iframe class="fw-video" src="' + element.data('video') + '" width="100%" height="100%" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>');
			});
		},
		closeFullWidthVideo: function() {
			jQuery('.fw-video-close').removeClass('is-open');
			jQuery('.fw-video-spacer').animate({
				height: 0
			}, 1000, 'easeInOutExpo', function() {});
			jQuery('.fw-video-area').animate({
				top: '-100%'
			}, 1000, 'easeInOutExpo', function() {
				jQuery('.fw-video-area').css('display', 'none');
				jQuery('.fw-video-area .fw-video').remove();
			});
			jQuery('.fw-video-area video').each(function() {
				this.pause();
			});
			setTimeout(function() {
				jQuery('.fw-video-area').find('iframe').remove();
			}, 1500);
			return false;
		},
		introAnimations: function() {
			if(!isMobileAlt) {
				jQuery('.sf-animation').each(function() {
					var animatedItem = jQuery(this),
						itemAnimation = animatedItem.data('animation'),
						itemDelay = animatedItem.data('delay');
					animatedItem.appear(function() {
						if(itemAnimation == 'fade-from-left') {
							animatedItem.delay(itemDelay).animate({
								'opacity': 1,
								'left': '0px'
							}, 600, 'easeOutCubic');
						} else if(itemAnimation == 'fade-from-right') {
							animatedItem.delay(itemDelay).animate({
								'opacity': 1,
								'right': '0px'
							}, 600, 'easeOutCubic');
						} else if(itemAnimation == 'fade-from-bottom') {
							if(animatedItem.hasClass('image-banner-content')) {
								animatedItem.delay(itemDelay).animate({
									'opacity': 1,
									'bottom': '50%'
								}, 1000, 'easeOutCubic');
							} else {
								animatedItem.delay(itemDelay).animate({
									'opacity': 1,
									'bottom': '0px'
								}, 600, 'easeOutCubic');
							}
						} else if(itemAnimation == 'fade-in') {
							animatedItem.delay(itemDelay).animate({
								'opacity': 1
							}, 600, 'easeOutCubic');
						} else if(itemAnimation == 'grow') {
							setTimeout(function() {
								animatedItem.addClass('sf-animate');
							}, itemDelay);
						} else {
							setTimeout(function() {
								animatedItem.addClass('sf-animate');
							}, itemDelay);
						}
					}, {
						accX: 0,
						accY: -150
					}, 'easeInCubic');
				});
			}
		},
		iconBoxes: function() {
			if(isMobileAlt) {
				jQuery('.sf-icon-box').on('click', function() {
					jQuery(this).addClass('sf-mobile-hover');
				});
			} else {
				jQuery('.sf-icon-box').hover(function() {
					jQuery(this).addClass('sf-hover');
				}, function() {
					jQuery(this).removeClass('sf-hover');
				});
			}
		},
		countAssets: function() {
			jQuery('.sf-count-asset').each(function() {
				var countAsset = jQuery(this),
					countNumber = countAsset.find('.count-number'),
					countDivider = countAsset.find('.count-divider').find('span'),
					countSubject = countAsset.find('.count-subject');
				if(!isMobileAlt) {
					countAsset.appear(function() {
						countNumber.countTo({
							onComplete: function() {
								countDivider.animate({
									'width': 50
								}, 400, 'easeOutCubic');
								countSubject.delay(100).animate({
									'opacity': 1,
									'bottom': '0px'
								}, 600, 'easeOutCubic');
							}
						});
					}, {
						accX: 0,
						accY: -150
					}, 'easeInCubic');
				} else {
					countNumber.countTo({
						onComplete: function() {
							countDivider.animate({
								'width': 50
							}, 400, 'easeOutCubic');
							countSubject.delay(100).animate({
								'opacity': 1,
								'bottom': '0px'
							}, 600, 'easeOutCubic');
						}
					});
				}
			});
		},
		countdownAssets: function() {
			jQuery('.sf-countdown').each(function() {
				var countdownInstance = jQuery(this),
					year = parseInt(countdownInstance.data('year'), 10),
					month = parseInt(countdownInstance.data('month'), 10),
					day = parseInt(countdownInstance.data('day'), 10),
					hour = parseInt(countdownInstance.data('hour'), 10),
					countdownDate = new Date(year, month - 1, day, hour),
					type = countdownInstance.data('type');
				var labelStrings = jQuery('#countdown-locale'),
					pluralLabels = [labelStrings.data('label_years'), labelStrings.data('label_months'), labelStrings.data('label_weeks'), labelStrings.data('label_days'), labelStrings.data('label_hours'), labelStrings.data('label_mins'), labelStrings.data('label_secs')],
					singularLabels = [labelStrings.data('label_year'), labelStrings.data('label_month'), labelStrings.data('label_week'), labelStrings.data('label_day'), labelStrings.data('label_hour'), labelStrings.data('label_min'), labelStrings.data('label_sec')];
				if(type == "countup") {
					countdownInstance.countdown({
						since: countdownDate,
						format: 'dHMS',
						labels: pluralLabels,
						labels1: singularLabels,
						onExpiry: function() {
							setTimeout(function() {
								countdownInstance.fadeOut(500);
							}, 1000);
						}
					});
				} else {
					countdownInstance.countdown({
						until: countdownDate,
						since: null,
						format: 'dHMS',
						labels: pluralLabels,
						labels1: singularLabels,
						onExpiry: function() {
							setTimeout(function() {
								countdownInstance.fadeOut(500);
							}, 1000);
						}
					});
				}
			});
		},
		imageBanners: function() {
			jQuery('.sf-image-banner').each(function() {
				jQuery(this).find('.image-banner-content').vCenter();
			});
		}
	};
	var teamMembers = {
		init: function() {
			var team = jQuery('.team-members.carousel-items');
			team.imagesLoaded(function() {
				team.equalHeights();
			});
			$window.smartresize(function() {
				jQuery('.team-members.carousel-items').children().css('min-height', '0');
				jQuery('.team-members.carousel-items').equalHeights();
			});
		}
	};
	var parallax = {
		init: function(reset) {
			jQuery('.spb_parallax_asset').each(function(reset) {
				var parallaxAsset = jQuery(this),
					parallaxContent = parallaxAsset.find('div:first');
				if(parallaxAsset.hasClass('sf-parallax-video')) {
					if(!isMobileAlt) {
						parallax.parallaxVideoInit();
					} else {
						parallaxAsset.find('video').remove();
						parallaxContent.animate({
							'opacity': 1,
						}, 300, 'easeOutExpo');
					}
					$window.smartresize(function() {
						parallax.parallaxVideoResize(parallaxAsset);
					});
				} else if(parallaxAsset.hasClass('parallax-window-height')) {
					parallaxAsset.css('height', '');
					var assetHeight = $window.height();
					if(parallaxAsset.height() > assetHeight && !reset) {
						assetHeight = parallaxAsset.height();
					}
					parallaxAsset.height(assetHeight - (parseInt(parallaxAsset.css('padding-top'), 10) * 2));
					if(parallaxAsset.data('v-center') === "true") {
						parallaxAsset.find('div:first').vCenterTop();
					}
					parallaxContent.animate({
						'opacity': 1,
					}, 300, 'easeOutExpo');
					parallax.windowImageResize(parallaxAsset);
					$window.smartresize(function() {
						parallax.windowImageResize(parallaxAsset);
					});
				}
				if(parallaxAsset.hasClass('parallax-stellar')) {
					var parallaxSpeed = parallaxAsset.data('stellar-background-ratio');
					parallaxAsset.parallax("50%", parallaxSpeed);
				}
			});
		},
		videoScroll: function(asset) {
			var offsetTop = asset.offset().top,
				windowTop = $window.scrollTop(),
				defaultHeight = parseInt(asset.data('height-default'), 10),
				diff = windowTop - offsetTop,
				currentTop = asset.find('.spb_content_wrapper').css('top'),
				heightDifference = defaultHeight - diff * 1.5;
			if(windowTop > offsetTop) {
				asset.css('height', heightDifference);
				asset.find('.spb_content_wrapper').css('opacity', 1 - (diff / 300));
				if(asset.hasClass('parallax-window-height') && asset.data('v-center') === "true") {
					asset.find('.spb_content_wrapper').css('top', currentTop + (diff / 4));
				} else if(asset.data('v-center') === "true") {
					asset.find('.spb_content_wrapper').css('top', (diff / 3));
				}
			} else {
				asset.css('height', defaultHeight);
				asset.find('.spb_content_wrapper').css('opacity', 1);
				if(asset.hasClass('parallax-video-height') && asset.data('v-center') === "true") {
					asset.find('.spb_content_wrapper').css('top', '50%');
				} else {
					asset.find('.spb_content_wrapper').css('top', 0);
				}
			}
		},
		windowImageResize: function(asset) {
			if(asset.hasClass('spb-row-container')) {
				var rowContentHeight = asset.find('> .spb_content_element').height();
				if(asset.hasClass('parallax-window-height')) {
					if(rowContentHeight < $window.height()) {
						rowContentHeight = $window.height();
					}
				}
				asset.height(rowContentHeight);
				if(asset.data('v-center')) {
					asset.find('> .spb_content_element').vCenterTop();
				}
			} else {
				var assetHeight = asset.height();
				if(asset.hasClass('parallax-window-height')) {
					if(assetHeight < $window.height()) {
						assetHeight = $window.height();
					}
				}
				asset.height(assetHeight - asset.css('padding-top') / 2);
				asset.find('.spb_content_wrapper').vCenterTop();
			}
		},
		parallaxVideoInit: function() {
			jQuery('.spb_parallax_asset.sf-parallax-video').each(function() {
				var parallaxAsset = jQuery(this),
					parallaxVideo = parallaxAsset.find('video'),
					parallaxVideoWidth = parallaxVideo.width(),
					parallaxContent = parallaxAsset.find('div:first'),
					parallaxAssetHeight = 0;
				if(parallaxAsset.hasClass('parallax-window-height')) {
					if(parallaxContent.height() > $window.height()) {
						parallaxAssetHeight = parallaxContent.height();
					} else {
						parallaxAssetHeight = $window.height();
					}
					parallaxAsset.animate({
						'height': parallaxAssetHeight
					}, 400);
					setTimeout(function() {
						parallax.parallaxVideoResize(parallaxAsset);
						parallaxContent.animate({
							'opacity': 1,
						}, 300, 'easeOutExpo');
					}, 500);
					setTimeout(function() {
						parallaxAsset.find('.video-overlay').animate({
							'opacity': 0.8
						}, 200);
					}, 100);
					if(parallaxAsset.data('v-center') === "true") {
						parallaxContent.vCenterTop();
					}
					setTimeout(function() {
						parallaxContent.animate({
							'opacity': 1,
							'top': '50%'
						}, 600, 'easeOutExpo');
					}, 600);
					parallaxAsset.attr('data-height-default', parallaxVideo.height());
				} else {
					parallax.scaleVideo(parallaxAsset);
				}
				if($window.width() < parallaxVideoWidth) {
					parallaxVideo.css('left', -(parallaxVideoWidth - $window.width()) / 2);
				}
				var videoInstance = parallaxVideo.get(0);
				videoInstance.load();
				videoInstance.addEventListener('loadeddata', function() {
					parallax.parallaxVideoResize(parallaxAsset);
				});
			});
		},
		parallaxVideoResize: function(parallaxAsset) {
			var parallaxContent = parallaxAsset.find('div:first'),
				parallaxAssetHeight = 0;
			if(parallaxAsset.hasClass('parallax-window-height')) {
				if(parallaxContent.height() > $window.height()) {
					parallaxAssetHeight = parallaxContent.height();
				} else {
					parallaxAssetHeight = $window.height();
				}
				parallaxAsset.animate({
					'height': parallaxAssetHeight
				}, 400);
				if(parallaxAsset.data('v-center') === "true") {
					parallaxContent.vCenterTop();
				}
			}
			parallax.scaleVideo(parallaxAsset);
		},
		scaleVideo: function(parallaxAsset) {
			var video = parallaxAsset.find('video'),
				assetHeight = parallaxAsset.outerHeight(),
				assetWidth = parallaxAsset.outerWidth(),
				videoWidth = video[0].videoWidth,
				videoHeight = video[0].videoHeight;
			var scale_h = assetWidth / videoWidth;
			var scale_v = assetHeight / videoHeight;
			var scale = scale_h > scale_v ? scale_h : scale_v;
			var min_w = videoWidth / videoHeight * (assetHeight + 20);
			if(scale * videoWidth < min_w) {
				scale = min_w / videoWidth;
			}
			video.width(Math.ceil(scale * videoWidth + 2));
			video.height(Math.ceil(scale * videoHeight + 50));
			video.css('margin-top', -(video.height() - assetHeight) / 2);
			video.css('margin-left', -(video.width() - assetWidth) / 2);
		},
	};
	var lightbox = {
		init: function() {
			if(!lightboxEnabled) {
				return;
			}
			var lightboxSocial = {};
			if(lightboxSharing) {
				lightboxSocial = {
					facebook: {
						source: 'https://www.facebook.com/sharer/sharer.php?u={URL}',
						text: 'Share on Facebook'
					},
					twitter: true,
					googleplus: true,
					pinterest: {
						source: "https://pinterest.com/pin/create/bookmarklet/?url={URL}",
						text: "Share on Pinterest"
					}
				};
			}
			var galleryArr = [];
			jQuery('[data-rel^="ilightbox["]').each(function() {
				var attr = this.getAttribute("data-rel");
				if(jQuery(this).hasClass('ilightbox-enabled')) {
					return;
				}
				if(jQuery.inArray(attr, galleryArr) == -1) {
					galleryArr.push(attr);
				}
			});
			jQuery.each(galleryArr, function(b, c) {
				jQuery('[data-rel="' + c + '"]').iLightBox({
					skin: lightboxSkin,
					social: {
						buttons: lightboxSocial
					},
					minScale: 0.1,
					maxScale: 0.6,
					path: 'horizontal',
					thumbnails: {
						maxWidth: 120,
						maxHeight: 120
					},
					controls: {
						arrows: lightboxControlArrows,
						thumbnail: lightboxThumbs
					}
				});
				jQuery('[data-rel="' + c + '"]').addClass('ilightbox-enabled');
			});
		},
		destroy: function() {
			if(!lightboxEnabled) {
				return;
			}
			jQuery('[data-rel="ilightbox[product]"]').removeClass('ilightbox-enabled').iLightBox().destroy();
			jQuery('[data-rel="ilightbox[posts]"]').removeClass('ilightbox-enabled').iLightBox().destroy();
		}
	};
	var map = {
		init: function() {
			var maps = jQuery('.map-canvas');
			maps.each(function(index, element) {
				var mapContainer = element,
					mapAddress = mapContainer.getAttribute('data-address'),
					mapZoom = mapContainer.getAttribute('data-zoom'),
					mapType = mapContainer.getAttribute('data-maptype'),
					mapColor = mapContainer.getAttribute('data-mapcolor'),
					mapSaturation = mapContainer.getAttribute('data-mapsaturation'),
					pinLogoURL = mapContainer.getAttribute('data-pinimage'),
					pinLink = mapContainer.getAttribute('data-pinlink');
				map.getCoordinates(mapAddress, mapContainer, mapZoom, mapType, mapColor, mapSaturation, pinLogoURL, pinLink);
			});
			jQuery('ul.nav-tabs li a').click(function() {
				var thisTabHref = jQuery(this).attr('href');
				if(jQuery(thisTabHref).find('.spb_gmaps_widget').length > 0) {
					map.init();
				}
			});
			jQuery('.spb_accordion_section > h3 a').click(function() {
				var thisAccordion = jQuery(this).parents('.spb_accordion_section');
				if(thisAccordion.find('.spb_gmaps_widget').length > 0) {
					map.init();
				}
			});
		},
		getCoordinates: function(address, mapContainer, mapZoom, mapType, mapColor, mapSaturation, pinLogoURL, pinLink) {
			var geocoder;
			geocoder = new google.maps.Geocoder();
			geocoder.geocode({
				'address': address
			}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {
					if(mapSaturation == "mono") {
						mapSaturation = -100;
					} else {
						mapSaturation = -20;
					}
					var styles = [{
						stylers: [{
							hue: mapColor
						}, {
							saturation: mapSaturation
						}]
					}];
					var styledMap = new google.maps.StyledMapType(styles, {
						name: "Styled Map"
					});
					var mapTypeIdentifier = "",
						companyPos = "",
						isDraggable = true,
						mapCoordinates = results[0].geometry.location,
						latitude = results[0].geometry.location.lat(),
						longitude = results[0].geometry.location.lng();
					if(isMobileAlt) {
						isDraggable = false;
					}
					if(mapType === "SATELLITE") {
						mapTypeIdentifier = google.maps.MapTypeId.SATELLITE;
					} else if(mapType === "TERRAIN") {
						mapTypeIdentifier = google.maps.MapTypeId.TERRAIN;
					} else if(mapType === "HYBRID") {
						mapTypeIdentifier = google.maps.MapTypeId.HYBRID;
					} else {
						mapTypeIdentifier = google.maps.MapTypeId.ROADMAP;
					}
					var latlng = new google.maps.LatLng(latitude, longitude);
					var settings = {
						zoom: parseInt(mapZoom, 10),
						scrollwheel: false,
						center: latlng,
						draggable: isDraggable,
						mapTypeControl: true,
						mapTypeControlOptions: {
							style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
						},
						navigationControl: true,
						navigationControlOptions: {
							style: google.maps.NavigationControlStyle.SMALL
						},
						mapTypeId: mapTypeIdentifier
					};
					var mapInstance = new google.maps.Map(mapContainer, settings);
					var companyMarker = "";
					jQuery(mapContainer).appear(function() {
						setTimeout(function() {
							if(pinLogoURL) {
								var companyLogo = new google.maps.MarkerImage(pinLogoURL, new google.maps.Size(150, 75), new google.maps.Point(0, 0), new google.maps.Point(75, 75));
								companyPos = new google.maps.LatLng(latitude, longitude);
								companyMarker = new google.maps.Marker({
									position: mapCoordinates,
									map: mapInstance,
									icon: companyLogo,
									animation: google.maps.Animation.DROP
								});
							} else {
								companyPos = new google.maps.LatLng(latitude, longitude);
								companyMarker = new google.maps.Marker({
									position: mapCoordinates,
									map: mapInstance,
									animation: google.maps.Animation.DROP
								});
							}
							google.maps.event.addListener(companyMarker, 'click', function() {
								if(pinLink === "") {
									pinLink = 'http://maps.google.com/maps?q=' + companyPos;
								}
								window.open(pinLink);
							});
							google.maps.event.addDomListener(window, 'resize', function() {
								mapInstance.setCenter(companyPos);
							});
						}, 1000);
					});
					if(mapColor !== "") {
						mapInstance.mapTypes.set('map_style', styledMap);
						mapInstance.setMapTypeId('map_style');
					}
				} else {
					console.log(status);
				}
			});
		}
	};
	var reloadFunctions = {
		init: function() {
			jQuery('img[title]').each(function() {
				jQuery(this).removeAttr('title');
			});
			if(!isAppleDevice) {
				jQuery('embed').show();
			}
			jQuery('.animate-top').on('click', function(e) {
				e.preventDefault();
				jQuery('body,html').animate({
					scrollTop: 0
				}, 800, 'easeOutCubic');
			});
		},
		load: function() {
			if(!isMobile) {
				jQuery('.tooltip').each(function() {
					jQuery(this).css('marginLeft', '-' + Math.round((jQuery(this).outerWidth(true) / 2)) + 'px');
				});
				jQuery('.comment-avatar').hover(function() {
					jQuery(this).find('.tooltip').stop().animate({
						bottom: '44px',
						opacity: 1
					}, 500, 'easeInOutExpo');
				}, function() {
					jQuery(this).find('.tooltip').stop().animate({
						bottom: '25px',
						opacity: 0
					}, 400, 'easeInOutExpo');
				});
				jQuery('.grid-image').hover(function() {
					jQuery(this).find('.tooltip').stop().animate({
						bottom: '85px',
						opacity: 1
					}, 500, 'easeInOutExpo');
				}, function() {
					jQuery(this).find('.tooltip').stop().animate({
						bottom: '65px',
						opacity: 0
					}, 400, 'easeInOutExpo');
				});
				setTimeout(function() {
					var urlHash = document.location.toString();
					if(urlHash.match('#')) {
						var hash = urlHash.split('#')[1];
						if(jQuery('#' + hash).length > 0) {
							var headerHeight = 0;
							if(jQuery('.sticky-header').length > 0) {
								headerHeight = jQuery('.sticky-header').height();
							}
							if(jQuery('#wpadminbar').length > 0) {
								headerHeight = headerHeight + 28;
							}
							jQuery('html, body').stop().animate({
								scrollTop: jQuery('#' + hash).offset().top - headerHeight - 30
							}, 600, 'easeInOutExpo');
						}
					}
				}, 200);
			}
		}
	};
	var $window = jQuery(window),
		body = jQuery('body'),
		sfIncluded = jQuery('#sf-included'),
		sfOptionParams = jQuery('#sf-option-params'),
		windowheight = page.getViewportHeight(),
		deviceAgent = navigator.userAgent.toLowerCase(),
		isMobile = deviceAgent.match(/(iphone|ipod|android|iemobile)/),
		isMobileAlt = deviceAgent.match(/(iphone|ipod|ipad|android|iemobile)/),
		isAppleDevice = deviceAgent.match(/(iphone|ipod|ipad)/),
		isIEMobile = deviceAgent.match(/(iemobile)/),
		IEVersion = page.checkIE(),
		isRTL = false,
		lightboxEnabled = sfOptionParams.data('lightbox-enabled') ? true : false,
		lightboxControlArrows = sfOptionParams.data('lightbox-nav') === "arrows" ? true : false,
		lightboxThumbs = sfOptionParams.data('lightbox-thumbs') ? true : false,
		lightboxSkin = sfOptionParams.data('lightbox-skin') === "dark" ? "metro-black" : "metro-white",
		lightboxSharing = sfOptionParams.data('lightbox-sharing') ? true : false,
		sliderAuto = sfOptionParams.data('slider-autoplay') ? true : false,
		sliderSlideSpeed = sfOptionParams.data('slider-slidespeed'),
		sliderAnimSpeed = sfOptionParams.data('slider-animspeed');
	var onReady = {
		init: function() {
			page.init();
			if(jQuery('.sf-super-search').length > 0) {
				superSearch.init();
			}
			if(jQuery('#header-section').length > 0) {
				header.init();
			}
			nav.init();
			lightbox.init();
			if(sfIncluded.hasClass('has-products') || body.hasClass('woocommerce-cart') || body.hasClass('woocommerce-account')) {
				woocommerce.init();
			}
			if(sfIncluded.hasClass('has-portfolio')) {
				portfolio.init();
			}
			if(sfIncluded.hasClass('has-portfolio-showcase')) {
				portfolio.portfolioShowcaseInit();
			}
			if(sfIncluded.hasClass('has-blog')) {
				blog.init();
			}
			if(sfIncluded.hasClass('has-infscroll') && !isMobile) {
				blog.infiniteScroll();
			}
			widgets.init();
			if(sfIncluded.hasClass('has-team')) {}
			if(sfIncluded.hasClass('has-carousel')) {
				carouselWidgets.init();
			}
			if(sfIncluded.hasClass('has-parallax')) {
				parallax.init();
			}
			reloadFunctions.init();
		}
	};
	var onLoad = {
		init: function() {
			nav.load();
			flexSlider.init();
			if(sfIncluded.hasClass('has-gallery')) {
				flexSlider.gallery();
			}
			if(sfIncluded.hasClass('has-chart')) {
				widgets.charts();
			}
			if(sfIncluded.hasClass('has-progress-bar')) {
				widgets.initSkillBars();
			}
			if(sfIncluded.hasClass('has-map')) {
				map.init();
			}
			reloadFunctions.load();
			woocommerce.variations();
			var anchorID = window.location.hash;
			if(anchorID !== "" && jQuery(anchorID).length > 0) {
				setTimeout(function() {
					var anchorPosition = jQuery(anchorID).offset();
					jQuery('body,html').scrollTop(anchorPosition.top - 200);
				}, 300);
			}
		}
	};
	jQuery(document).ready(onReady.init);
	jQuery(window).load(onLoad.init);
})(jQuery);
'use strict';
(function(d, f, h, k) {
	function l(a, c) {
		var b = this;
		this.element = a;
		this.$ubermenu = d(this.element);
		this.orientation = this.$ubermenu.hasClass("ubermenu-vertical") ? "v" : "h";
		this.settings = d.extend({}, t, c);
		this._defaults = t;
		this._name = "ubermenu";
		this.settings.debug && this.settings.debug_onscreen && (d("body").append('<div id="uber-onscreen-debug" style="color:#eee;z-index:10000;background:#222;position:fixed;left:0; bottom:0; width:100%; height:50%; padding:10px;overflow:scroll;"> '), this.debug_target =
			d("#uber-onscreen-debug"), this.debug_target.on("click", function() {
				100 > d(this).height() ? d(this).height("50%") : d(this).height("50px")
			}));
		this.log("-- START UBERMENU DEBUG --");
		this.suppress_clicks = this.events_disabled = !1;
		(this.touchenabled = "ontouchstart" in f || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints) ? this.$ubermenu.addClass("ubermenu-touch"): this.$ubermenu.addClass("ubermenu-notouch");
		f.navigator.pointerEnabled ? (this.touchStart = "pointerdown", this.touchEnd = "pointerup", this.touchMove =
			"pointermove", this.suppress_clicks = !0) : f.navigator.msPointerEnabled ? (this.touchStart = "MSPointerDown", this.touchEnd = "MSPointerUp", this.touchMove = "MSPointerMove", this.suppress_clicks = !0) : (this.touchStart = "touchstart", this.touchEnd = "touchend", this.touchMove = "touchmove");
		this.toggleevent = "touchend" == this.touchEnd ? this.touchEnd + " click" : this.touchEnd;
		this.transitionend = "transitionend.ubermenu webkitTransitionEnd.ubermenu msTransitionEnd.ubermenu oTransitionEnd.ubermenu";
		(this.transitions = uber_supports("transition") &&
			!this.$ubermenu.hasClass("ubermenu-transition-none")) || this.$ubermenu.addClass("ubermenu-no-transitions");
		var e = navigator.userAgent.toLowerCase();
		this.log(e);
		this.allow_trigger_overrides = !0;
		this.noTouchEnd = !1;
		var g = this.settings.android = /android/.test(e),
			r = this.settings.windowsmobile = /iemobile/.test(e);
		if(g || r)
			if(g && !(/chrome/.test(e) || /firefox/.test(e) || /opera/.test(e)) || r) this.settings.touchOffClose = !1, this.disableTransitions(), g && !r && (this.$ubermenu.removeClass("ubermenu-trigger-hover_intent").removeClass("ubermenu-trigger-hover").addClass("ubermenu-trigger-click"),
				this.allow_trigger_overrides = this.settings.touchEvents = !1);
		r && (this.log("disable touchoff close and accessibility"), this.settings.touchOffClose = !1, this.settings.accessible = !1, this.settings.mouseEvents = !1);
		!/chrome/.test(e) && /safari/.test(e) && /version\/5/.test(e) && this.disableTransitions();
		var l = this.last_width = f.innerWidth,
			k = b.$ubermenu.find(".ubermenu-item-level-0.ubermenu-align-right");
		k.length && d(f).ubersmartresize(function() {
			l = f.innerWidth;
			b.last_width <= b.settings.breakpoint && l >= b.settings.breakpoint &&
				(k.hide(), k[0].offsetHeight, k.show());
			b.last_width = l
		});
		this.settings.clicktest && (this.touchEnd = "click");
		this.init()
	}
	var t = {
			breakpoint: uber_op("responsive_breakpoint", {
				datatype: "numeric"
			}, 959),
			touchEvents: !0,
			mouseEvents: !0,
			retractors: !0,
			touchOffClose: uber_op("touch_off_close", {
				datatype: "boolean"
			}, !0),
			moveThreshold: 10,
			submenuAnimationDuration: 500,
			ignoreDummies: !0,
			clicktest: !1,
			windowstest: !1,
			debug: !1,
			debug_onscreen: !1,
			remove_conflicts: uber_op("remove_conflicts", {
				datatype: "boolean"
			}, !0),
			reposition_on_load: uber_op("reposition_on_load", {
				datatype: "boolean"
			}, !1),
			accessible: uber_op("accessible", {
				datatype: "boolean"
			}, !0),
			retractor_display_strategy: uber_op("retractor_display_strategy", {
				datatype: "string"
			}, "responsive"),
			intent_delay: uber_op("intent_delay", {
				datatype: "numeric"
			}, 300),
			intent_interval: uber_op("intent_interval", {
				datatype: "numeric"
			}, 100),
			intent_threshold: uber_op("intent_threshold", {
				datatype: "numeric"
			}, 300),
			scrollto_offset: uber_op("scrollto_offset", {
				datatype: "numeric"
			}, 0),
			scrollto_duration: uber_op("scrollto_duration", {
					datatype: "numeric"
				},
				1E3),
			collapse_after_scroll: uber_op("collapse_after_scroll", {
				datatype: "boolean"
			}, !0)
		},
		p, m, n, q;
	l.prototype = {
		init: function() {
			this.log("Initializing UberMenu");
			this.$ubermenu.removeClass("ubermenu-nojs");
			this.removeConflicts();
			this.initializeSubmenuToggleTouchEvents();
			this.initializeSubmenuToggleMouseEvents();
			this.initializeRetractors();
			this.initializeResponsiveToggle();
			this.initializeTouchoffClose();
			this.initializeTabs();
			this.initializeSubmenuPositioning();
			this.initializeSegmentCurrentStates();
			this.initializeAccessibilityOnTab();
			this.initializeImageLazyLoad()
		},
		removeConflicts: function() {
			this.settings.remove_conflicts && this.$ubermenu.find(".ubermenu-item, .ubermenu-target, .ubermenu-submenu").add(this.$ubermenu).removeAttr("style").unbind().off()
		},
		initializeAccessibilityOnTab: function() {
			if(this.settings.accessible) {
				var a = this;
				d("body").on("keydown.ubermenu", function(c) {
					9 == (c.keyCode || c.which) && (d("body").off("keydown.ubermenu"), a.initializeAccessibility())
				})
			}
		},
		initializeImageLazyLoad: function() {
			var a = this;
			d(".ubermenu-item-level-0").one("ubermenuopen",
				function() {
					d(this).find(".ubermenu-image-lazyload").each(function() {
						d(this).data("srcset") && d(this).attr("srcset", d(this).data("srcset")).attr("sizes", d(this).data("sizes"));
						d(this).attr("src", d(this).data("src")).removeClass("ubermenu-image-lazyload")
					});
					setTimeout(function() {
						a.clearTabSizes();
						a.sizeTabs()
					}, 300)
				})
		},
		initializeAccessibility: function() {
			var a = this;
			a.$current_focus = !1;
			a.mousedown = !1;
			a.$ubermenu.addClass("ubermenu-accessible");
			a.$ubermenu.on("focus", ".ubermenu-target, a, input, select, textarea",
				function() {
					if(!a.mousedown) {
						var c = d(this);
						a.$current_focus = c;
						var b = c.parent(".ubermenu-item");
						b.length && (b.is(".ubermenu-item-level-0") && a.closeAllSubmenus(), b.is(".ubermenu-has-submenu-drop") && setTimeout(function() {
							c.is(":focus") && (b.siblings(".ubermenu-has-submenu-drop").each(function() {
								a.closeSubmenu(d(this), "umac", a)
							}), a.openSubmenu(b, "umac", a))
						}, 500), c.on("blur.ubermenu", ".ubermenu-target, a, input, select, textarea", function(b) {
							a.mousedown || (a.$current_focus = !1, d(this).off("blur.ubermenu"),
								setTimeout(function() {
									a.$current_focus || a.closeAllSubmenus()
								}, 500));
							a.mousedown = !1
						}))
					}
					a.mousedown = !1
				});
			a.$ubermenu.on("mousedown", function(c) {
				a.mousedown = !0;
				setTimeout(function() {
					a.mousedown = !1
				}, 100)
			})
		},
		initializeSubmenuPositioning: function() {
			var a = this;
			a.positionSubmenus();
			d(f).ubersmartresize(function() {
				a.positionSubmenus()
			});
			this.settings.reposition_on_load && d(f).load(function() {
				a.positionSubmenus()
			})
		},
		initializeSubmenuToggleTouchEvents: function() {
			if(this.settings.touchEvents) {
				var a = this;
				this.$ubermenu.on(this.touchStart,
					".ubermenu-target:not(.shiftnav-toggle)",
					function(c) {
						a.handleTouchInteraction(c, this, a)
					});
				this.$ubermenu.on("click", ".ubermenu-has-submenu-drop > .ubermenu-target, .ubermenu-tab.ubermenu-item-has-children > .ubermenu-target", function(c) {
					a.handleClicks(c, this, a)
				})
			}
		},
		initializeSubmenuToggleMouseEvents: function(a) {
			a = a || this;
			if(a.settings.mouseEvents && !a.settings.clicktest && !a.settings.windowstest) {
				a.log("initializeSubmenuToggleMouseEvents");
				var c = "hover";
				a.$ubermenu.hasClass("ubermenu-trigger-click") ?
					c = "click" : a.$ubermenu.hasClass("ubermenu-trigger-hover_intent") && (c = "hover_intent");
				"click" == c ? this.suppress_clicks || (this.$ubermenu.on("click.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
						a.handleMouseClick(b, this, a)
					}), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not(.ubermenu-has-submenu-drop):not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
						a.handleLink(b, this, a)
					})) : "hover_intent" ==
					c ? (this.$ubermenu.on("mouseenter.mouse_intent", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger])", function(b) {
						a.handleMouseIntent(b, this, a)
					}), this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
						a.handleLink(b, this, a)
					})) : (this.$ubermenu.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-item.ubermenu-has-submenu-drop:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
							a.handleMouseover(b, this, a)
						}),
						this.$ubermenu.on("click.ubermenu-click-target", ".ubermenu-item:not([data-ubermenu-trigger]) > .ubermenu-target", function(b) {
							a.handleLink(b, this, a)
						}));
				if(this.allow_trigger_overrides) a.$ubermenu.find(".ubermenu-item[data-ubermenu-trigger]").each(function() {
					var b = d(this);
					c = b.data("ubermenu-trigger");
					if("click" == c) {
						if(!this.suppress_clicks) b.on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
							a.handleMouseClick(b, this, a)
						})
					} else if("hover_intent" == c) b.on("mouseenter.mouse_intent", function(b) {
						a.handleMouseIntent(b,
							this, a)
					});
					else b.on("mouseenter.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
						a.handleMouseover(b, this, a)
					})
				});
				else a.$ubermenu.find(".ubermenu-tab").on("click.ubermenu-submenu-toggle", ".ubermenu-target", function(b) {
					a.handleMouseClick(b, this, a)
				})
			}
		},
		disableSubmenuToggleMouseEvents: function() {
			this.log("disableSubmenuToggleMouseEvents");
			this.events_disabled = !0
		},
		reenableSubmenuToggleMouseEvents: function(a) {
			a = a || this;
			a.log("reenableSubmenuToggleMouseEvents");
			a.events_disabled = !1
		},
		initializeRetractors: function() {
			if(this.settings.retractors) {
				var a =
					this;
				this.$ubermenu.on("click", ".ubermenu-retractor", function(c) {
					a.handleSubmenuRetractorEnd(c, this, a)
				});
				if(this.settings.touchEvents) this.$ubermenu.on(this.touchStart, ".ubermenu-retractor", function(c) {
					a.handleSubmenuRetractorStart(c, this, a)
				});
				this.touchenabled || "touch" != a.settings.retractor_display_strategy || (this.$ubermenu.find(".ubermenu-retractor-mobile").remove(), this.$ubermenu.find(".ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top").removeClass("ubermenu-submenu-retractor-top-2"))
			}
		},
		initializeResponsiveToggle: function() {
			var a = this,
				c = ".ubermenu-responsive-toggle[data-ubermenu-target=" + a.$ubermenu.attr("id") + "], .ubermenu-responsive-toggle[data-ubermenu-target=_any_]";
			a.log("initializeResponsiveToggle " + this.toggleevent);
			d(h).on(this.toggleevent, c, function(b) {
				a.handleResponsiveToggle(b, this, a)
			})
		},
		initializeTouchoffClose: function() {
			if(this.settings.touchOffClose) {
				var a = this;
				d(h).on(this.touchStart + ".ubermenu_touchoff", function(c) {
					a.handleTouchoffCloseStart(c, this, a)
				});
				d(h).on(this.touchEnd +
					".ubermenu_touchoff",
					function(c) {
						a.handleTouchoffClose(c, this, "touch", a)
					});
				if(!this.suppress_clicks) d(h).on("mouseup.ubermenu_clickoff", function(c) {
					a.handleTouchoffClose(c, this, "click", a)
				})
			}
		},
		initializeTabs: function() {
			var a = this,
				c = f.innerWidth <= a.settings.breakpoint ? !0 : !1;
			a.$tab_blocks = a.$ubermenu.find(".ubermenu-tabs");
			a.$tab_blocks = d(a.$tab_blocks.get().reverse());
			d(f).load(function() {
				a.sizeTabs()
			});
			a.windowwidth = f.innerWidth;
			d(f).ubersmartresize(function() {
				a.oldwindowwidth = a.windowwidth;
				a.windowwidth =
					f.innerWidth;
				a.windowwidth != a.oldwindowwidth && (a.clearTabSizes(a), a.sizeTabs(), a.checkActiveTabs(a))
			});
			a.$ubermenu.find(".ubermenu-item-level-0.ubermenu-has-submenu-drop").on("ubermenuopen.sizetabs", function() {
				d(this).off("ubermenuopen.sizetabs");
				a.sizeTabs()
			});
			c || a.initializeActiveTab(a)
		},
		checkActiveTabs: function(a) {
			f.innerWidth <= a.settings.breakpoint ? a.$tab_blocks.find(".ubermenu-tab.ubermenu-active").removeClass("ubermenu-active") : a.initializeActiveTab(a)
		},
		initializeActiveTab: function(a) {
			a.$ubermenu.find(".ubermenu-tabs-show-default > .ubermenu-tabs-group").each(function() {
				0 ===
					d(this).find("> .ubermenu-tab.ubermenu-active").length && a.openSubmenu(d(this).find("> .ubermenu-tab").first(), "tab default", a)
			})
		},
		clearTabSizes: function(a) {
			(a || this).$ubermenu.find(".ubermenu-submenu , .ubermenu-tabs , .ubermenu-tab-content-panel , .ubermenu-tabs-group").css("min-height", "")
		},
		sizeTabs: function() {
			var a = f.innerWidth <= this.settings.breakpoint ? !0 : !1;
			a || (this.initializeActiveTab(this), this.$tab_blocks.each(function() {
				var c = !1;
				!d(this).hasClass("ubermenu-tab-layout-top") && !d(this).hasClass("ubermenu-tab-layout-bottom") ||
					a || (c = !0);
				var b = 0,
					e;
				e = a ? d(this).parentsUntil(".ubermenu").add(d(this).parents(".ubermenu")) : d(this).parentsUntil(".ubermenu-item-level-0");
				e.addClass("ubermenu-test-dimensions");
				var g = d(this).find(" > .ubermenu-tabs-group > .ubermenu-tab > .ubermenu-tab-content-panel");
				g.each(function() {
					d(this).addClass("ubermenu-test-dimensions");
					d(this).outerHeight() > b && (b = d(this).outerHeight());
					d(this).removeClass("ubermenu-test-dimensions")
				});
				var f = d(this).find("> .ubermenu-tabs-group");
				c ? d(this).css("min-height",
					b + f.outerHeight()) : (f.outerHeight() > b && (b = d(this).outerHeight()), f.css("min-height", b));
				a ? (d(this).closest(".ubermenu-submenu-drop").css("min-height", b), g.css("min-height", !1)) : (d(this).closest(".ubermenu-submenu-drop").css("min-height", !1), g.css("min-height", b));
				e.removeClass("ubermenu-test-dimensions")
			}))
		},
		initializeSegmentCurrentStates: function() {
			this.$ubermenu.find(".ubermenu-current-menu-item").first().parents(".ubermenu-item:not( .ubermenu-nocurrent )").addClass("ubermenu-current-menu-ancestor")
		},
		disableTransitions: function() {
			this.transitions = !1;
			this.$ubermenu.removeClass("ubermenu-transition-slide").removeClass("ubermenu-transition-fade").removeClass("ubermenu-transition-shift").addClass("ubermenu-no-transitions").addClass("ubermenu-transition-none")
		},
		handleClicks: function(a, c, b) {
			d(c).data("ubermenu-killClick") && (a.preventDefault(), b.log("killed click after touchend ", a))
		},
		handleTouchInteraction: function(a, c, b) {
			a.stopPropagation();
			0 <= a.type.indexOf("pointer") && b.disableTransitions();
			c = d(c);
			c.parent().off("mouseleave.mouse_intent_none");
			b.log("touchstart " + a.type + " " + c.text(), a);
			c.on(b.touchEnd, function(a) {
				b.handleTap(a, this, b)
			});
			c.on(b.touchMove, function(a) {
				b.preventInteractionOnScroll(a, this, b)
			});
			a.originalEvent.touches ? (c.data("ubermenu-startX", a.originalEvent.touches[0].clientX), c.data("ubermenu-startY", a.originalEvent.touches[0].clientY)) : a.originalEvent.clientY && (c.offset(), c.data("ubermenu-startX", a.originalEvent.clientX), c.data("ubermenu-startY", a.originalEvent.clientY))
		},
		preventInteractionOnScroll: function(a,
			c, b) {
			b.log("touchmove interaction " + a.type, a);
			c = d(c);
			if(a.originalEvent.touches) Math.abs(a.originalEvent.touches[0].clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")) > b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"), b.resetHandlers(c, "preventScroll touches", b)) : b.log("diff = " + Math.abs(a.originalEvent.touches[0].clientY - c.data("ubermenu-startY")));
			else if(a.originalEvent.clientY) {
				var e =
					c.data(e);
				Math.abs(a.originalEvent.clientX - c.data("ubermenu-startX")) > b.settings.moveThreshold || Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")) > b.settings.moveThreshold ? (b.log("Preventing interaction on scroll, reset handlers (standard)"), b.resetHandlers(c, "preventScroll client", b)) : b.log("diff = " + a.originalEvent.clientY + " - " + c.data("ubermenu-startY") + " = " + Math.abs(a.originalEvent.clientY - c.data("ubermenu-startY")))
			} else b.log("no touch points found!")
		},
		handleTap: function(a, c, b) {
			a.preventDefault();
			a.stopPropagation();
			var e = d(c);
			if(e.data("ubermenu-killTouch")) b.log("kill tap"), a.preventDefault(), a.stopPropagation();
			else {
				var g = e.parent();
				b.log("handleTap [" + e.text() + "]", a.type);
				e.data("ubermenu-killClick", !0);
				e.data("ubermenu-killHover", !0);
				setTimeout(function() {
					e.data("ubermenu-killClick", !1).data("ubermenu-killHover", !1)
				}, 1E3);
				b.closeSubmenuInstantly(g.siblings(".ubermenu-active"));
				g.hasClass("ubermenu-has-submenu-drop") ? g.hasClass("ubermenu-active") ? ((!g.hasClass("ubermenu-tab") || f.innerWidth <=
					b.settings.breakpoint) && b.closeSubmenu(g, "toggleUberMenuActive", b), b.handleLink(a, c, b, !0)) : b.openSubmenu(g, "toggle", b) : b.handleLink(a, c, b, !0)
			}
			e.data("ubermenu-killTouch", !1);
			b.resetHandlers(e, "handleTap", b)
		},
		handleLink: function(a, c, b, e) {
			e = e || !1;
			b.log("handleLink");
			var g = d(c);
			if(g.is("a")) {
				var l = g.attr("href"),
					k = g.data("ubermenu-scrolltarget");
				if(k) {
					c = d(k).first();
					if(0 < c.length) {
						a.preventDefault();
						g.trigger("ubermenuscrollto");
						a = g.parent(".ubermenu-item");
						a.addClass("ubermenu-current-menu-item");
						a.siblings().removeClass("ubermenu-current-menu-item").removeClass("ubermenu-current-menu-parent").removeClass("uberemnu-current-menu-ancestor");
						var h = !1;
						d("html,body").animate({
							scrollTop: c.offset().top - b.settings.scrollto_offset
						}, b.settings.scrollto_duration, "swing", function() {
							h || (b.closeSubmenu(g.closest(".ubermenu-item-level-0"), "handeLink", b), b.settings.collapse_after_scroll && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && b.toggleMenuCollapse("toggle", !1, b), g.trigger("ubermenuscrollto_complete"), h = !0)
						});
						return !1
					}
					l && -1 == l.indexOf("#") && (-1 == k.indexOf("#") && (k = "#" + k), f.location = l + k, a.preventDefault())
				}
				l ? e && a.isDefaultPrevented() &&
					(b.log("default prevented, follow link"), "_blank" == g.attr("target") ? f.open(l, "_blank") : f.location = l) : a.preventDefault()
			}
		},
		handleMouseClick: function(a, c, b) {
			b.log("handleMouseClick", a);
			var e = d(c);
			if(e.data("ubermenu-killClick")) b.log("handleMouseClick: killClick");
			else {
				var g = e.parent(".ubermenu-item");
				g.length && (g.hasClass("ubermenu-active") ? (e.is("a") && b.handleLink(a, c, b), g.hasClass("ubermenu-tab") || b.closeSubmenu(g, "retract")) : g.hasClass("ubermenu-has-submenu-drop") && (a.preventDefault(), b.closeSubmenuInstantly(g.siblings(".ubermenu-active")),
					b.openSubmenu(g, "click", b)))
			}
		},
		handleMouseIntent: function(a, c, b) {
			b.log("handleMouseIntent");
			var e = d(c);
			e.data("mouse_intent_timer") && e.data("mouse_intent_timer", clearTimeout(e.data("mouse_intent_timer")));
			var g = e.find(".ubermenu-target");
			g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent"), a.preventDefault(), a.stopPropagation()) : (n = a.pageX, q = a.pageY, e.on("mousemove.mouse_intent", b.trackMouse), e.data("mouse_intent_timer", setTimeout(function() {
					b.compare(a, e, b.handleMouseIntentSuccess, b)
				}, b.settings.intent_interval)),
				e.on("mouseleave.mouse_intent_none", function() {
					d(this).data("mouse_intent_timer", clearTimeout(d(this).data("mouse_intent_timer")));
					e.data("mouse_intent_state", 0);
					e.off("mouseleave.mouse_intent_none");
					g.data("ubermenu-killHover") ? (b.log("killHover MouseIntent_Cancel"), a.preventDefault(), a.stopPropagation()) : b.closeSubmenu(e, "mouse_intent_cancel", b)
				}))
		},
		handleMouseIntentSuccess: function(a, c, b) {
			b.log("handleMouseIntentSuccess");
			c.off("mouseleave.mouse_intent_none");
			var d = c.find(".ubermenu-target");
			if(d.data("ubermenu-killHover")) b.log("Kill hover on IntentSuccess"),
				a.preventDefault(), a.stopPropagation();
			else if(d.data("ubermenu-killHover", !1), b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab")) c.on("mouseleave.mouse_intent", function(a) {
				b.handleMouseIntentLeave(a, this, b)
			})
		},
		handleMouseIntentLeave: function(a, c, b) {
			var e = d(c);
			e.data("mouse_intent_timer") && e.data("mouse_intent_timer", clearTimeout(e.data("mouse_intent_timer")));
			e.off("mousemove.mouse_intent", b.trackMouse);
			1 == e.data("mouse_intent_state") && e.data("mouse_intent_timer", setTimeout(function() {
				b.delayMouseLeave(a,
					e, b.handleMouseIntentLeaveSuccess, b)
			}, b.settings.intent_delay))
		},
		handleMouseIntentLeaveSuccess: function(a, c, b) {
			c.off("mouseleave.mouse_intent");
			c.find("> .ubermenu-target").data("ubermenu-killHover") || b.closeSubmenu(c, "mouse_intent_leave", b)
		},
		delayMouseLeave: function(a, c, b, d) {
			c.data("mouse_intent_timer", clearTimeout(c.data("mouse_intent_timer")));
			c.data("mouse_intent_state", 0);
			return b.apply(c, [a, c, d])
		},
		trackMouse: function(a) {
			p = a.pageX;
			m = a.pageY
		},
		compare: function(a, c, b, d) {
			c.data("mouse_intent_timer",
				clearTimeout(c.data("mouse_intent_timer")));
			if(Math.abs(n - p) + Math.abs(q - m) < d.settings.intent_threshold) return c.off("mousemove.mouse_intent", d.track), c.data("mouse_intent_state", 1), b.apply(c, [a, c, d]);
			n = p;
			q = m;
			c.data("mouse_intent_timer", setTimeout(function() {
				d.compare(a, c, b, d)
			}, d.settings.intent_interval))
		},
		triggerSubmenu: function(a, c, b) {
			b.closeSubmenuInstantly(c.siblings(".ubermenu-active, .ubermenu-in-transition"));
			b.openSubmenu(c, "mouseenter", b)
		},
		handleMouseover: function(a, c, b) {
			if(!b.events_disabled) {
				var e =
					d(c);
				e.data("ubermenu-killTouch", !0);
				setTimeout(function() {
					e.data("ubermenu-killTouch", !1)
				}, 1E3);
				b.log("handleMouseenter, add mouseleave", a);
				c = e.parent(".ubermenu-item");
				if(c.length && !c.hasClass("ubermenu-active") && (b.triggerSubmenu(a, c, b), !c.hasClass("ubermenu-tab"))) c.on("mouseleave.ubermenu-submenu-toggle", function(a) {
					b.handleMouseleave(a, this, b)
				})
			}
		},
		handleMouseleave: function(a, c, b) {
			b.log("handleMouseleave, remove mouseleave", a);
			d(c).off("mouseleave.ubermenu-submenu-toggle");
			b.closeSubmenu(d(c),
				"mouseout")
		},
		handleSubmenuRetractorStart: function(a, c, b) {
			a.preventDefault();
			a.stopPropagation();
			d(c).on(b.touchEnd, function(a) {
				b.handleSubmenuRetractorEnd(a, this, b)
			});
			b.log("handleSubmenuRetractorStart " + d(c).text())
		},
		handleSubmenuRetractorEnd: function(a, c, b) {
			a.preventDefault();
			a.stopPropagation();
			a = d(c).closest(".ubermenu-item");
			b.closeSubmenu(a, "handleSubmenuRetractor");
			d(c).off(b.touchEnd);
			b.log("handleSubmenuRetractorEnd " + a.find("> .ubermenu-target").text());
			return !1
		},
		handleResponsiveToggle: function(a,
			c, b) {
			b.log("handleResponsiveToggle " + a.type, a);
			a.preventDefault();
			a.stopPropagation();
			if("touchend" == a.type) b.$ubermenu.data("ubermenu-prevent-click", !0), setTimeout(function() {
				b.$ubermenu.data("ubermenu-prevent-click", !1)
			}, 500);
			else if("click" == a.type && b.$ubermenu.data("ubermenu-prevent-click")) {
				b.$ubermenu.data("ubermenu-prevent-click", !1);
				return
			}
			b.toggleMenuCollapse("toggle", c, b)
		},
		handleTouchoffCloseStart: function(a, c, b) {
			b.touchoffclosestart = d(f).scrollTop()
		},
		handleTouchoffClose: function(a, c, b,
			e) {
			d(a.target).closest(".ubermenu").length || "click" != b && e.touchoffclosestart != d(f).scrollTop() || (e.log("touchoff close ", a), e.closeAllSubmenus() && (e.disableSubmenuToggleMouseEvents(), f.setTimeout(function() {
				e.reenableSubmenuToggleMouseEvents(e)
			}, e.settings.submenuAnimationDuration)))
		},
		toggleMenuCollapse: function(a, c, b) {
			b = b || this;
			c = c || ".ubermenu-resposive-toggle";
			c = "object" == typeof c ? d(c) : d(c + '[data-ubermenu-target="' + b.$ubermenu.attr("id") + '"]');
			a = a || "toggle";
			"toggle" == a && (a = b.$ubermenu.hasClass("ubermenu-responsive-collapse") ?
				"open" : "close");
			"open" == a ? (b.$ubermenu.removeClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledopen")) : (b.$ubermenu.addClass("ubermenu-responsive-collapse"), c.trigger("ubermenutoggledclose"));
			c.toggleClass("ubermenu-responsive-toggle-open");
			b.transitions && !b.$ubermenu.hasClass("ubermenu-responsive-nocollapse") && (b.$ubermenu.addClass("ubermenu-in-transition"), b.$ubermenu.on(b.transitionend + "_toggleubermenu", function() {
				b.$ubermenu.removeClass("ubermenu-in-transition");
				b.$ubermenu.off(b.transitionend +
					"_toggleubermenu")
			}))
		},
		positionSubmenus: function() {
			var a = this;
			"h" == a.orientation && a.$ubermenu.find(".ubermenu-submenu-drop.ubermenu-submenu-align-center").each(function() {
				var c = d(this).parent(".ubermenu-item"),
					b = d(this),
					e;
				if(a.$ubermenu.hasClass("ubermenu-bound")) e = c.closest(".ubermenu , .ubermenu-submenu");
				else if(a.$ubermenu.hasClass("ubermenu-bound-inner")) e = c.closest(".ubermenu-nav , .ubermenu-submenu");
				else {
					var g = c.closest(".ubermenu-submenu");
					e = 0 === g.length ? a.$ubermenu.offsetParent() : g
				}
				var g =
					b.outerWidth(),
					f = c.outerWidth(),
					l = c.offset().left,
					c = e.width();
				e = e.offset().left;
				f = l + f / 2 - (e + g / 2);
				f = 0 < f ? f : 0;
				g > c ? f = (g - c) / -2 : f + g > c && (b.css({
					right: 0,
					left: "auto"
				}), f = !1);
				!1 !== f && b.css("left", f)
			})
		},
		openSubmenu: function(a, c, b) {
			b = b || this;
			b.log("Open Submenu " + c);
			a.hasClass("ubermenu-active") || (a.addClass("ubermenu-active"), b.transitions && (a.addClass("ubermenu-in-transition"), a.find("> .ubermenu-submenu").on(b.transitionend + "_opensubmenu", function() {
				b.log("finished submenu open transition");
				a.removeClass("ubermenu-in-transition");
				d(this).off(b.transitionend + "_opensubmenu")
			})), a.trigger("ubermenuopen"))
		},
		closeSubmenu: function(a, c, b) {
			b = b || this;
			b.log("closeSubmenu " + a.find(">a").text() + " [" + c + "]");
			a.hasClass("ubermenu-item-has-children") && a.hasClass("ubermenu-active") && (b.transitions && a.addClass("ubermenu-in-transition"), a.each(function() {
				var a = d(this),
					c = a.find("> ul");
				if(b.transitions) c.on(b.transitionend + "_closesubmenu", function() {
					b.log("finished submenu close transition");
					a.removeClass("ubermenu-in-transition");
					c.off(b.transitionend +
						"_closesubmenu")
				})
			}));
			a.removeClass("ubermenu-active");
			a.trigger("ubermenuclose")
		},
		closeSubmenuInstantly: function(a) {
			0 !== a.length && (a.addClass("ubermenu-notransition"), a.removeClass("ubermenu-active").removeClass("ubermenu-in-transition"), a[0].offsetHeight, a.removeClass("ubermenu-notransition"), a.trigger("ubermenuclose"))
		},
		closeAllSubmenus: function() {
			var a = this.$ubermenu.find(".ubermenu-item-level-0.ubermenu-active");
			a.length && this.closeSubmenuInstantly(a);
			return a.length
		},
		resetHandlers: function(a,
			c, b) {
			b.log("ResetHandlers: " + c);
			a.off(this.touchEnd);
			a.off(this.touchMove);
			a = a.parent();
			a.off("mousemove.mouse_intent");
			a.off("mouseleave.mouse_intent_none");
			a.data("mouse_intent_timer", clearTimeout(a.data("mouse_intent_timer")));
			a.data("mouse_intent_state", 0)
		},
		log: function(a, c, b) {
			b = b || this;
			b.settings.debug && (b.settings.debug_onscreen ? this.debug_target.prepend('<div class="um-debug-content">' + a + "</div>") : console.log(a, c))
		}
	};
	d.fn.ubermenu = function(a) {
		var c = arguments;
		if(a === k || "object" === typeof a) return this.each(function() {
			d.data(this,
				"plugin_ubermenu") || d.data(this, "plugin_ubermenu", new l(this, a))
		});
		if("string" === typeof a && "_" !== a[0] && "init" !== a) {
			var b;
			this.each(function() {
				var e = d.data(this, "plugin_ubermenu");
				e instanceof l && "function" === typeof e[a] && (b = e[a].apply(e, Array.prototype.slice.call(c, 1)));
				"destroy" === a && d.data(this, "plugin_ubermenu", null)
			});
			return b !== k ? b : this
		}
	}
})(jQuery, window, document);
(function(d) {
	function f(f) {
		h || (h = !0, "undefined" != typeof console && "window.load" == f && console.log("UberMenu initialized via " + f), "." == window.location.hash.substring(1, 2) ? (f = d(window.location.hash.substring(1)), f.length && window.scrollTo(0, f.offset().top - ubermenu_data.scrollto_offset)) : window.location.hash.length && setTimeout(function() {
				var f = d(window.location.hash);
				f.length && window.scrollTo(0, f.offset().top - ubermenu_data.scrollto_offset)
			}, 100), d("#wp-admin-bar-ubermenu_loading").remove(), d(".ubermenu").ubermenu({}),
			"undefined" !== typeof google && "undefined" !== typeof google.maps && "undefined" !== typeof google.maps.LatLng && d(".ubermenu-map-canvas").each(function() {
				var f = d(this),
					k = f.attr("data-zoom") ? parseInt(f.attr("data-zoom")) : 8,
					h = f.attr("data-lat") ? new google.maps.LatLng(f.attr("data-lat"), f.attr("data-lng")) : new google.maps.LatLng(40.7143528, -74.0059731),
					m = new google.maps.Map(this, {
						zoom: k,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						center: h
					});
				f.attr("data-address") ? (new google.maps.Geocoder).geocode({
						address: f.attr("data-address")
					},
					function(a, c) {
						c == google.maps.GeocoderStatus.OK && (m.setCenter(a[0].geometry.location), h = a[0].geometry.location, new google.maps.Marker({
							map: m,
							position: a[0].geometry.location,
							title: f.attr("data-mapTitle")
						}))
					}) : new google.maps.Marker({
					map: m,
					position: h,
					title: f.attr("data-mapTitle")
				});
				var n = d(this).closest(".ubermenu-has-submenu-drop"),
					q = function() {
						google.maps.event.trigger(m, "resize");
						m.setCenter(h);
						n.off("ubermenuopen", q)
					};
				n.on("ubermenuopen", q)
			}))
	}
	var h = !1;
	jQuery(function(d) {
		f("document.ready")
	});
	d(window).load(function() {
		f("window.load")
	})
})(jQuery);

function uber_op(d, f, h) {
	if(!ubermenu_data.hasOwnProperty(d)) return h;
	d = ubermenu_data[d];
	if(f.hasOwnProperty("datatype")) switch(f.datatype) {
		case "numeric":
			d = parseInt(d);
			break;
		case "boolean":
			d = "on" == d || 1 == d || "1" == d ? !0 : !1
	}
	return d
}(function(d, f) {
	var h = function(d, f, h) {
		var p;
		return function() {
			var m = this,
				n = arguments;
			p ? clearTimeout(p) : h && d.apply(m, n);
			p = setTimeout(function() {
				h || d.apply(m, n);
				p = null
			}, f || 100)
		}
	};
	jQuery.fn[f] = function(d) {
		return d ? this.bind("resize", h(d)) : this.trigger(f)
	}
})(jQuery, "ubersmartresize");
var uber_supports = function() {
	var d = document.createElement("div"),
		f = ["Khtml", "Ms", "O", "Moz", "Webkit"];
	return function(h) {
		var k = f.length;
		if(h in d.style) return !0;
		for(h = h.replace(/^[a-z]/, function(d) {
				return d.toUpperCase()
			}); k--;)
			if(f[k] + h in d.style) return !0;
		return !1
	}
}();

function uberMenu_openMega(d) {
	jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d))
}

function uberMenu_openFlyout(d) {
	jQuery(".ubermenu").ubermenu("openSubmenu", jQuery(d))
}

function uberMenu_close(d) {
	jQuery(".ubermenu").ubermenu("closeSubmenu", jQuery(d))
}

function uberMenu_redrawSubmenus() {
	jQuery(".ubermenu").ubermenu("positionSubmenus")
};
! function(a, b) {
	"use strict";

	function c() {
		if(!e) {
			e = !0;
			var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
				h = !!navigator.userAgent.match(/Trident.*rv:11\./),
				i = b.querySelectorAll("iframe.wp-embedded-content");
			for(c = 0; c < i.length; c++) {
				if(d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
				if(g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
			}
		}
	}
	var d = !1,
		e = !1;
	if(b.querySelector)
		if(a.addEventListener) d = !0;
	if(a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
		if(a.wp.receiveEmbedMessage = function(c) {
				var d = c.data;
				if(d.secret || d.message || d.value)
					if(!/[^a-zA-Z0-9]/.test(d.secret)) {
						var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
							k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
						for(e = 0; e < k.length; e++) k[e].style.display = "none";
						for(e = 0; e < j.length; e++)
							if(f = j[e], c.source === f.contentWindow) {
								if(f.removeAttribute("style"), "height" === d.message) {
									if(g = parseInt(d.value, 10), g > 1e3) g = 1e3;
									else if(~~g < 200) g = 200;
									f.height = g
								}
								if("link" === d.message)
									if(h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
										if(b.activeElement === f) a.top.location.href = d.value
							} else;
					}
			}, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);