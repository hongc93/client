/*
 * jQuery Basic Table
 * Author: Jerry Low
 */
(function(e) {
	e.fn.basictable = function(t) {
		var n = function(t, n) {
			var i = [];
			n.tableWrap && t.wrap('<div class="bt-wrapper"></div>');
			var s = "";
			t.find("thead tr th").length ? s = "thead th": t.find("tbody tr th").length ? s = "tbody tr th": t.find("th").length ? s = "tr:first th": s = "tr:first td",
			e.each(t.find(s),
			function() {
				var t = e(this),
				n = parseInt(t.attr("colspan"), 10) || 1,
				r = t.closest("tr").index();
				i[r] || (i[r] = []);
				for (var s = 0; s < n; s++) i[r].push(t)
			}),
			e.each(t.find("tbody tr"),
			function() {
				r(e(this), i, n)
			}),
			e.each(t.find("tfoot tr"),
			function() {
				r(e(this), i, n)
			})
		},
		r = function(t, n, r) {
			t.children().each(function() {
				var t = e(this);
				if (t.html() !== "" && t.html() !== "&nbsp;" || !!r.showEmptyCells) {
					var i = t.index(),
					s = "";
					for (var o = 0; o < n.length; o++) {
						o != 0 && (s += ": ");
						var u = n[o][i];
						s += u.text()
					}
					t.attr("data-th", s),
					r.contentWrap && !t.children().hasClass("bt-content") && t.wrapInner('<span class="bt-content" />')
				} else t.addClass("bt-hide")
			})
		},
		i = function(t) {
			e.each(t.find("td"),
			function() {
				var t = e(this),
				n = t.children(".bt-content").html();
				t.html(n)
			})
		},
		s = function(t, n) {
			n.forceResponsive ? e(window).width() <= n.breakpoint ? o(t, n) : u(t, n) : t.removeClass("bt").outerWidth() > t.parent().width() ? o(t, n) : u(t, n)
		},
		o = function(e, t) {
			e.addClass("bt"),
			t.tableWrap && e.parent(".bt-wrapper").addClass("active")
		},
		u = function(e, t) {
			e.removeClass("bt"),
			t.tableWrap && e.parent(".bt-wrapper").removeClass("active")
		},
		a = function(e, t) {
			e.find("td").removeAttr("data-th"),
			t.tableWrap && e.unwrap(),
			t.contentWrap && i(e),
			e.removeData("basictable")
		},
		f = function(e) {
			e.data("basictable") && s(e, e.data("basictable"))
		};
		this.each(function() {
			var r = e(this);
			if (r.length === 0 || r.data("basictable")) return r.data("basictable") && (t == "destroy" ? a(r, r.data("basictable")) : t === "start" ? o(r, r.data("basictable")) : t === "stop" ? u(r, r.data("basictable")) : s(r, r.data("basictable"))),
			!1;
			var i = e.extend({},
			e.fn.basictable.defaults, t),
			l = {
				breakpoint: i.breakpoint,
				contentWrap: i.contentWrap,
				forceResponsive: i.forceResponsive,
				noResize: i.noResize,
				tableWrap: i.tableWrap,
				showEmptyCells: i.showEmptyCells
			};
			r.data("basictable", l),
			n(r, r.data("basictable")),
			l.noResize || (s(r, r.data("basictable")), e(window).bind("resize.basictable",
			function() {
				f(r)
			}))
		})
	},
	e.fn.basictable.defaults = {
		breakpoint: 568,
		contentWrap: !0,
		forceResponsive: !0,
		noResize: !1,
		tableWrap: !1,
		showEmptyCells: !1
	}
})(jQuery);