!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length, n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
        if (ot.isFunction(e))return ot.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType)return ot.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (gt.test(e))return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function (t) {
            return J.call(e, t) > -1 !== n
        })
    }

    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return ot.each(t.match(bt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        Q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), ot.ready()
    }

    function a() {
        this.expando = ot.expando + a.uid++
    }

    function l(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)if (i = "data-" + e.replace(At, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : St.test(n) ? ot.parseJSON(n) : n)
            } catch (t) {
            }
            kt.set(t, e, n)
        } else n = void 0;
        return n
    }

    function u(t, e, n, i) {
        var r, o = 1, s = 20, a = i ? function () {
            return i.cur()
        } : function () {
            return ot.css(t, e, "")
        }, l = a(), u = n && n[3] || (ot.cssNumber[e] ? "" : "px"), c = (ot.cssNumber[e] || "px" !== u && +l) && Nt.exec(ot.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, ot.style(t, e, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function c(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }

    function h(t, e) {
        for (var n = 0, i = t.length; i > n; n++)Et.set(t[n], "globalEval", !e || Et.get(e[n], "globalEval"))
    }

    function p(t, e, n, i, r) {
        for (var o, s, a, l, u, p, d = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)if (o = t[g], o || 0 === o)if ("object" === ot.type(o))ot.merge(f, o.nodeType ? [o] : o); else if (zt.test(o)) {
            for (s = s || d.appendChild(e.createElement("div")), a = (It.exec(o) || ["", ""])[1].toLowerCase(), l = $t[a] || $t._default, s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], p = l[0]; p--;)s = s.lastChild;
            ot.merge(f, s.childNodes), s = d.firstChild, s.textContent = ""
        } else f.push(e.createTextNode(o));
        for (d.textContent = "", g = 0; o = f[g++];)if (i && ot.inArray(o, i) > -1)r && r.push(o); else if (u = ot.contains(o.ownerDocument, o), s = c(d.appendChild(o), "script"), u && h(s), n)for (p = 0; o = s[p++];)Lt.test(o.type || "") && n.push(o);
        return d
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (t) {
        }
    }

    function m(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e)m(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1)r = f; else if (!r)return t;
        return 1 === o && (s = r, r = function (t) {
            return ot().off(t), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = ot.guid++)), t.each(function () {
            ot.event.add(this, e, r, i, n)
        })
    }

    function v(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Bt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        var n, i, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (Et.hasData(t) && (o = Et.access(t), s = Et.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)for (n = 0, i = u[r].length; i > n; n++)ot.event.add(e, r, u[r][n])
            }
            kt.hasData(t) && (a = kt.access(t), l = ot.extend({}, a), kt.set(e, l))
        }
    }

    function b(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Ot.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function _(t, e, n, i) {
        e = G.apply([], e);
        var r, o, s, a, l, u, h = 0, d = t.length, f = d - 1, g = e[0], m = ot.isFunction(g);
        if (m || d > 1 && "string" == typeof g && !it.checkClone && Rt.test(g))return t.each(function (r) {
            var o = t.eq(r);
            m && (e[0] = g.call(this, r, o.html())), _(o, e, n, i)
        });
        if (d && (r = p(e, t[0].ownerDocument, !1, t, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (s = ot.map(c(r, "script"), y), a = s.length; d > h; h++)l = r, h !== f && (l = ot.clone(l, !0, !0), a && ot.merge(s, c(l, "script"))), n.call(t[h], l, h);
            if (a)for (u = s[s.length - 1].ownerDocument, ot.map(s, w), h = 0; a > h; h++)l = s[h], Lt.test(l.type || "") && !Et.access(l, "globalEval") && ot.contains(u, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(Xt, "")))
        }
        return t
    }

    function C(t, e, n) {
        for (var i, r = e ? ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++)n || 1 !== i.nodeType || ot.cleanData(c(i)), i.parentNode && (n && ot.contains(i.ownerDocument, i) && h(c(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function T(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body), i = ot.css(n[0], "display");
        return n.detach(), i
    }

    function E(t) {
        var e = Q, n = Vt[t];
        return n || (n = T(t, e), "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ut[0].contentDocument, e.write(), e.close(), n = T(t, e), Ut.detach()), Vt[t] = n), n
    }

    function k(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Yt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)), n && !it.pixelMarginRight() && Qt.test(s) && Zt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function S(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function A(t) {
        if (t in ie)return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ne.length; n--;)if (t = ne[n] + e, t in ie)return t
    }

    function D(t, e, n) {
        var i = Nt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function N(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ot.css(t, n + jt[o], !0, r)), i ? ("content" === n && (s -= ot.css(t, "padding" + jt[o], !0, r)), "margin" !== n && (s -= ot.css(t, "border" + jt[o] + "Width", !0, r))) : (s += ot.css(t, "padding" + jt[o], !0, r), "padding" !== n && (s += ot.css(t, "border" + jt[o] + "Width", !0, r)));
        return s
    }

    function j(e, n, i) {
        var r = !0, o = "width" === n ? e.offsetWidth : e.offsetHeight, s = Yt(e), a = "border-box" === ot.css(e, "boxSizing", !1, s);
        if (Q.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = k(e, n, s), (0 > o || null == o) && (o = e.style[n]), Qt.test(o))return o;
            r = a && (it.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
        }
        return o + N(e, n, i || (a ? "border" : "content"), r, s) + "px"
    }

    function P(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)i = t[s], i.style && (o[s] = Et.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Pt(i) && (o[s] = Et.access(i, "olddisplay", E(i.nodeName)))) : (r = Pt(i), "none" === n && r || Et.set(i, "olddisplay", r ? n : ot.css(i, "display"))));
        for (s = 0; a > s; s++)i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function O(t, e, n, i, r) {
        return new O.prototype.init(t, e, n, i, r)
    }

    function I() {
        return t.setTimeout(function () {
            re = void 0
        }), re = ot.now()
    }

    function L(t, e) {
        var n, i = 0, r = {height: t};
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)n = jt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function $(t, e, n) {
        for (var i, r = (M.tweeners[e] || []).concat(M.tweeners["*"]), o = 0, s = r.length; s > o; o++)if (i = r[o].call(n, e, t))return i
    }

    function z(t, e, n) {
        var i, r, o, s, a, l, u, c, h = this, p = {}, d = t.style, f = t.nodeType && Pt(t), g = Et.get(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = ot.css(t, "display"), c = "none" === u ? Et.get(t, "olddisplay") || E(t.nodeName) : u, "inline" === c && "none" === ot.css(t, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in e)if (r = e[i], se.exec(r)) {
            if (delete e[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                if ("show" !== r || !g || void 0 === g[i])continue;
                f = !0
            }
            p[i] = g && g[i] || ot.style(t, i)
        } else u = void 0;
        if (ot.isEmptyObject(p))"inline" === ("none" === u ? E(t.nodeName) : u) && (d.display = u); else {
            g ? "hidden" in g && (f = g.hidden) : g = Et.access(t, "fxshow", {}), o && (g.hidden = !f), f ? ot(t).show() : h.done(function () {
                ot(t).hide()
            }), h.done(function () {
                var e;
                Et.remove(t, "fxshow");
                for (e in p)ot.style(t, e, p[e])
            });
            for (i in p)s = $(f ? g[i] : 0, i, h), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, r, o, s;
        for (n in t)if (i = ot.camelCase(n), r = e[i], o = t[n], ot.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ot.cssHooks[i], s && "expand" in s) {
            o = s.expand(o), delete t[i];
            for (n in o)n in t || (t[n] = o[n], e[n] = r)
        } else e[i] = r
    }

    function M(t, e, n) {
        var i, r, o = 0, s = M.prefilters.length, a = ot.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var e = re || I(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++)u.tweens[s].run(o);
            return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
        }, u = a.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {specialEasing: {}, easing: ot.easing._default}, n),
            originalProperties: e,
            originalOptions: n,
            startTime: re || I(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var i = ot.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(i), i
            },
            stop: function (e) {
                var n = 0, i = e ? u.tweens.length : 0;
                if (r)return this;
                for (r = !0; i > n; n++)u.tweens[n].run(1);
                return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
            }
        }), c = u.props;
        for (H(c, u.opts.specialEasing); s > o; o++)if (i = M.prefilters[o].call(u, t, c, u.opts))return ot.isFunction(i.stop) && (ot._queueHooks(u.elem, u.opts.queue).stop = ot.proxy(i.stop, i)), i;
        return ot.map(c, $, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function q(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function F(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0, o = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function W(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ot.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }

        var o = {}, s = t === Ee;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function R(t, e) {
        var n, i, r = ot.ajaxSettings.flatOptions || {};
        for (n in e)void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ot.extend(!0, t, i), t
    }

    function B(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)for (r in a)if (a[r] && a[r].test(i)) {
            l.unshift(r);
            break
        }
        if (l[0] in n)o = l[0]; else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function X(t, e, n, i) {
        var r, o, s, a, l, u = {}, c = t.dataTypes.slice();
        if (c[1])for (s in t.converters)u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)for (r in u)if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && t.throws)e = s(e); else try {
                e = s(e)
            } catch (t) {
                return {state: "parsererror", error: s ? t : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: e}
    }

    function U(t, e, n, i) {
        var r;
        if (ot.isArray(e))ot.each(e, function (e, r) {
            n || De.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        }); else if (n || "object" !== ot.type(e))i(t, e); else for (r in e)U(t + "[" + r + "]", e[r], n, i)
    }

    function V(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }

    var Z = [], Q = t.document, Y = Z.slice, G = Z.concat, K = Z.push, J = Z.indexOf, tt = {}, et = tt.toString, nt = tt.hasOwnProperty, it = {}, rt = "2.2.1", ot = function (t, e) {
        return new ot.fn.init(t, e)
    }, st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, lt = /-([\da-z])/gi, ut = function (t, e) {
        return e.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: rt, constructor: ot, selector: "", length: 0, toArray: function () {
            return Y.call(this)
        }, get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
        }, pushStack: function (t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        }, each: function (t) {
            return ot.each(this, t)
        }, map: function (t) {
            return this.pushStack(ot.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        }, slice: function () {
            return this.pushStack(Y.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: K, sort: Z.sort, splice: Z.splice
    }, ot.extend = ot.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)if (null != (t = arguments[a]))for (e in t)n = s[e], i = t[e], s !== i && (u && i && (ot.isPlainObject(i) || (r = ot.isArray(i))) ? (r ? (r = !1, o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {}, s[e] = ot.extend(u, o, i)) : void 0 !== i && (s[e] = i));
        return s
    }, ot.extend({
        expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
            throw new Error(t)
        }, noop: function () {
        }, isFunction: function (t) {
            return "function" === ot.type(t)
        }, isArray: Array.isArray, isWindow: function (t) {
            return null != t && t === t.window
        }, isNumeric: function (t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        }, isPlainObject: function (t) {
            return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !nt.call(t.constructor.prototype, "isPrototypeOf"))
        }, isEmptyObject: function (t) {
            var e;
            for (e in t)return !1;
            return !0
        }, type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        }, globalEval: function (t) {
            var e, n = eval;
            t = ot.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        }, camelCase: function (t) {
            return t.replace(at, "ms-").replace(lt, ut)
        }, nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function (t, e) {
            var i, r = 0;
            if (n(t))for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++); else for (r in t)if (e.call(t[r], r, t[r]) === !1)break;
            return t
        }, trim: function (t) {
            return null == t ? "" : (t + "").replace(st, "")
        }, makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
        }, inArray: function (t, e, n) {
            return null == e ? -1 : J.call(e, t, n)
        }, merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++)t[r++] = e[i];
            return t.length = r, t
        }, grep: function (t, e, n) {
            for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)i = !e(t[o], o), i !== a && r.push(t[o]);
            return r
        }, map: function (t, e, i) {
            var r, o, s = 0, a = [];
            if (n(t))for (r = t.length; r > s; s++)o = e(t[s], s, i), null != o && a.push(o); else for (s in t)o = e(t[s], s, i), null != o && a.push(o);
            return G.apply([], a)
        }, guid: 1, proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), ot.isFunction(t) ? (i = Y.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(Y.call(arguments)))
            }, r.guid = t.guid = t.guid || ot.guid++, r) : void 0
        }, now: Date.now, support: it
    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Z[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, h, d, f = e && e.ownerDocument, g = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g)return n;
            if (!i && ((e ? e.ownerDocument || e : q) !== P && j(e), e = e || P, I)) {
                if (11 !== g && (u = vt.exec(t)))if (r = u[1]) {
                    if (9 === g) {
                        if (!(s = e.getElementById(r)))return n;
                        if (s.id === r)return n.push(s), n
                    } else if (f && (s = f.getElementById(r)) && H(e, s) && s.id === r)return n.push(s), n
                } else {
                    if (u[2])return K.apply(n, e.getElementsByTagName(t)), n;
                    if ((r = u[3]) && b.getElementsByClassName && e.getElementsByClassName)return K.apply(n, e.getElementsByClassName(r)), n
                }
                if (b.qsa && !X[t + " "] && (!L || !L.test(t))) {
                    if (1 !== g)f = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(wt, "\\$&") : e.setAttribute("id", a = M), h = E(t), o = h.length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;)h[o] = l + " " + p(h[o]);
                        d = h.join(","), f = yt.test(t) && c(e.parentNode) || e
                    }
                    if (d)try {
                        return K.apply(n, f.querySelectorAll(d)), n
                    } catch (t) {
                    } finally {
                        a === M && e.removeAttribute("id")
                    }
                }
            }
            return S(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            var e = [];
            return t
        }

        function i(t) {
            return t[M] = !0, t
        }

        function r(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;)_.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === e)return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;)n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function h() {
        }

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)i += t[e].value;
            return i
        }

        function d(t, e, n) {
            var i = e.dir, r = n && "parentNode" === i, o = W++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)if (1 === e.nodeType || r)return t(e, n, o)
            } : function (e, n, s) {
                var a, l, u, c = [F, o];
                if (s) {
                    for (; e = e[i];)if ((1 === e.nodeType || r) && t(e, n, s))return !0
                } else for (; e = e[i];)if (1 === e.nodeType || r) {
                    if (u = e[M] || (e[M] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === o)return c[2] = a[2];
                    if (l[i] = c, c[2] = t(e, n, s))return !0
                }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)if (!t[r](e, n, i))return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)e(t, n[r], i);
            return i
        }

        function m(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function v(t, e, n, r, o, s) {
            return r && !r[M] && (r = v(r)), o && !o[M] && (o = v(o, s)), i(function (i, s, a, l) {
                var u, c, h, p = [], d = [], f = s.length, v = i || g(e || "*", a.nodeType ? [a] : a, []), y = !t || !i && e ? v : m(v, p, t, a, l), w = n ? o || (i ? t : f || r) ? [] : s : y;
                if (n && n(y, w, a, l), r)for (u = m(w, d), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (w[d[c]] = !(y[d[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = w.length; c--;)(h = w[c]) && u.push(y[c] = h);
                            o(null, w = [], u, l)
                        }
                        for (c = w.length; c--;)(h = w[c]) && (u = o ? tt(i, h) : p[c]) > -1 && (i[u] = !(s[u] = h))
                    }
                } else w = m(w === s ? w.splice(f, w.length) : w), o ? o(null, s, w, l) : K.apply(s, w)
            })
        }

        function y(t) {
            for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function (t) {
                return t === e
            }, s, !0), u = d(function (t) {
                return tt(e, t) > -1
            }, s, !0), c = [function (t, n, i) {
                var r = !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null, r
            }]; r > a; a++)if (n = _.relative[t[a].type])c = [d(f(c), n)]; else {
                if (n = _.filter[t[a].type].apply(null, t[a].matches), n[M]) {
                    for (i = ++a; r > i && !_.relative[t[i].type]; i++);
                    return v(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({value: " " === t[a - 2].type ? "*" : ""})).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                }
                c.push(n)
            }
            return f(c)
        }

        function w(t, n) {
            var r = n.length > 0, o = t.length > 0, s = function (i, s, a, l, u) {
                var c, h, p, d = 0, f = "0", g = i && [], v = [], y = A, w = i || o && _.find.TAG("*", u), x = F += null == y ? 1 : Math.random() || .1, b = w.length;
                for (u && (A = s === P || s || u); f !== b && null != (c = w[f]); f++) {
                    if (o && c) {
                        for (h = 0, s || c.ownerDocument === P || (j(c), a = !I); p = t[h++];)if (p(c, s || P, a)) {
                            l.push(c);
                            break
                        }
                        u && (F = x)
                    }
                    r && ((c = !p && c) && d--, i && g.push(c))
                }
                if (d += f, r && f !== d) {
                    for (h = 0; p = n[h++];)p(g, v, s, a);
                    if (i) {
                        if (d > 0)for (; f--;)g[f] || v[f] || (v[f] = Y.call(l));
                        v = m(v)
                    }
                    K.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                }
                return u && (F = x, A = y), g
            };
            return r ? i(s) : s
        }

        var x, b, _, C, T, E, k, S, A, D, N, j, P, O, I, L, $, z, H, M = "sizzle" + 1 * new Date, q = t.document, F = 0, W = 0, R = n(), B = n(), X = n(), U = function (t, e) {
            return t === e && (N = !0), 0
        }, V = 1 << 31, Z = {}.hasOwnProperty, Q = [], Y = Q.pop, G = Q.push, K = Q.push, J = Q.slice, tt = function (t, e) {
            for (var n = 0, i = t.length; i > n; n++)if (t[n] === e)return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]", ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", st = new RegExp(nt + "+", "g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(ot), pt = new RegExp("^" + it + "$"), dt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + rt),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, ft = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/, wt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), bt = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, _t = function () {
            j()
        };
        try {
            K.apply(Q = J.call(q.childNodes), q.childNodes), Q[q.childNodes.length].nodeType
        } catch (t) {
            K = {
                apply: Q.length ? function (t, e) {
                    G.apply(t, J.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        b = e.support = {}, T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, j = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : q;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, O = P.documentElement, I = !T(P), (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), b.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = r(function (t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = mt.test(P.getElementsByClassName), b.getById = r(function (t) {
                return O.appendChild(t).id = M, !P.getElementsByName || !P.getElementsByName(M).length
            }), b.getById ? (_.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && I) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, _.filter.ID = function (t) {
                var e = t.replace(xt, bt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete _.find.ID, _.filter.ID = function (t) {
                var e = t.replace(xt, bt);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), _.find.TAG = b.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [], r = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, _.find.CLASS = b.getElementsByClassName && function (t, e) {
                    return "undefined" != typeof e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
                }, $ = [], L = [], (b.qsa = mt.test(P.querySelectorAll)) && (r(function (t) {
                O.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]")
            }), r(function (t) {
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
            })), (b.matchesSelector = mt.test(z = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (t) {
                b.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), $.push("!=", ot)
            }), L = L.length && new RegExp(L.join("|")), $ = $.length && new RegExp($.join("|")), e = mt.test(O.compareDocumentPosition), H = e || mt.test(O.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)for (; e = e.parentNode;)if (e === t)return !0;
                return !1
            }, U = e ? function (t, e) {
                if (t === e)return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === q && H(q, t) ? -1 : e === P || e.ownerDocument === q && H(q, e) ? 1 : D ? tt(D, t) - tt(D, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e)return N = !0, 0;
                var n, i = 0, r = t.parentNode, o = e.parentNode, a = [t], l = [e];
                if (!r || !o)return t === P ? -1 : e === P ? 1 : r ? -1 : o ? 1 : D ? tt(D, t) - tt(D, e) : 0;
                if (r === o)return s(t, e);
                for (n = t; n = n.parentNode;)a.unshift(n);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (; a[i] === l[i];)i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }, P) : P
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== P && j(t), n = n.replace(ct, "='$1']"), b.matchesSelector && I && !X[n + " "] && (!$ || !$.test(n)) && (!L || !L.test(n)))try {
                var i = z.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)return i
            } catch (t) {
            }
            return e(n, P, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== P && j(t), H(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== P && j(t);
            var n = _.attrHandle[e.toLowerCase()], i = n && Z.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== i ? i : b.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [], i = 0, r = 0;
            if (N = !b.detectDuplicates, D = !b.sortStable && t.slice(0), t.sort(U), N) {
                for (; e = t[r++];)e === t[r] && (i = n.push(r));
                for (; i--;)t.splice(n[i], 1)
            }
            return D = null, t
        }, C = e.getText = function (t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)n += C(t)
                } else if (3 === r || 4 === r)return t.nodeValue
            } else for (; e = t[i++];)n += C(e);
            return n
        }, _ = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(xt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                }, CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                }, PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(xt, bt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                }, CLASS: function (t) {
                    var e = R[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && R(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                }, ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, p, d, f, g = o !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, w = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = e; p = p[g];)if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)return !1;
                                    f = g = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                for (p = m, h = p[M] || (p[M] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], d = u[0] === F && u[1], w = d && u[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (w = d = 0) || f.pop();)if (1 === p.nodeType && ++w && p === e) {
                                    c[t] = [F, d, w];
                                    break
                                }
                            } else if (y && (p = e, h = p[M] || (p[M] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), u = c[t] || [], d = u[0] === F && u[1], w = d), w === !1)for (; (p = ++d && p && p[g] || (w = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (h = p[M] || (p[M] = {}), c = h[p.uniqueID] || (h[p.uniqueID] = {}), c[t] = [F, w]), p !== e)););
                            return w -= r, w === i || w % i === 0 && w / i >= 0
                        }
                    }
                }, PSEUDO: function (t, n) {
                    var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[M] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;)i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [], n = [], r = k(t.replace(at, "$1"));
                    return r[M] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }), has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }), contains: i(function (t) {
                    return t = t.replace(xt, bt), function (e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }), lang: i(function (t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, bt).toLowerCase(), function (e) {
                        var n;
                        do if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                }, root: function (t) {
                    return t === O
                }, focus: function (t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                }, enabled: function (t) {
                    return t.disabled === !1
                }, disabled: function (t) {
                    return t.disabled === !0
                }, checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                }, selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                }, empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                    return !0
                }, parent: function (t) {
                    return !_.pseudos.empty(t)
                }, header: function (t) {
                    return gt.test(t.nodeName)
                }, input: function (t) {
                    return ft.test(t.nodeName)
                }, button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                }, text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                }, first: u(function () {
                    return [0]
                }), last: u(function (t, e) {
                    return [e - 1]
                }), eq: u(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }), even: u(function (t, e) {
                    for (var n = 0; e > n; n += 2)t.push(n);
                    return t;
                }), odd: u(function (t, e) {
                    for (var n = 1; e > n; n += 2)t.push(n);
                    return t
                }), lt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;)t.push(i);
                    return t
                }), gt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;)t.push(i);
                    return t
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[x] = a(x);
        for (x in{submit: !0, reset: !0})_.pseudos[x] = l(x);
        return h.prototype = _.filters = _.pseudos, _.setFilters = new h, E = e.tokenize = function (t, n) {
            var i, r, o, s, a, l, u, c = B[t + " "];
            if (c)return n ? 0 : c.slice(0);
            for (a = t, l = [], u = _.preFilter; a;) {
                (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (s in _.filter)!(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i)break
            }
            return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, k = e.compile = function (t, e) {
            var n, i = [], r = [], o = X[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;)o = y(e[n]), o[M] ? i.push(o) : r.push(o);
                o = X(t, w(r, i)), o.selector = t
            }
            return o
        }, S = e.select = function (t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t, h = !i && E(t = u.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && I && _.relative[o[1].type]) {
                    if (e = (_.find.ID(s.matches[0].replace(xt, bt), e) || [])[0], !e)return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);)if ((l = _.find[a]) && (i = l(s.matches[0].replace(xt, bt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                    if (o.splice(r, 1), t = i.length && p(o), !t)return K.apply(n, i), n;
                    break
                }
            }
            return (u || k(t, h))(i, e, !I, n, !e || yt.test(t) && c(e.parentNode) || e), n
        }, b.sortStable = M.split("").sort(U).join("") === M, b.detectDuplicates = !!N, j(), b.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var ht = function (t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
            if (r && ot(t).is(n))break;
            i.push(t)
        }
        return i
    }, pt = function (t, e) {
        for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
        return n
    }, dt = ot.expr.match.needsContext, ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, gt = /^.[^:#\[\.,]*$/;
    ot.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function (t) {
            var e, n = this.length, i = [], r = this;
            if ("string" != typeof t)return this.pushStack(ot(t).filter(function () {
                for (e = 0; n > e; e++)if (ot.contains(r[e], this))return !0
            }));
            for (e = 0; n > e; e++)ot.find(t, r[e], i);
            return i = this.pushStack(n > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
        }, filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        }, not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        }, is: function (t) {
            return !!i(this, "string" == typeof t && dt.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, yt = ot.fn.init = function (t, e, n) {
        var i, r;
        if (!t)return this;
        if (n = n || mt, "string" == typeof t) {
            if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !i || !i[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), ft.test(i[1]) && ot.isPlainObject(e))for (i in e)ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return r = Q.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
    };
    yt.prototype = ot.fn, mt = ot(Q);
    var wt = /^(?:parents|prev(?:Until|All))/, xt = {children: !0, contents: !0, next: !0, prev: !0};
    ot.fn.extend({
        has: function (t) {
            var e = ot(t, this), n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)if (ot.contains(this, e[t]))return !0
            })
        }, closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = dt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        }, index: function (t) {
            return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        }, addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        }, parents: function (t) {
            return ht(t, "parentNode")
        }, parentsUntil: function (t, e, n) {
            return ht(t, "parentNode", n)
        }, next: function (t) {
            return r(t, "nextSibling")
        }, prev: function (t) {
            return r(t, "previousSibling")
        }, nextAll: function (t) {
            return ht(t, "nextSibling")
        }, prevAll: function (t) {
            return ht(t, "previousSibling")
        }, nextUntil: function (t, e, n) {
            return ht(t, "nextSibling", n)
        }, prevUntil: function (t, e, n) {
            return ht(t, "previousSibling", n)
        }, siblings: function (t) {
            return pt((t.parentNode || {}).firstChild, t)
        }, children: function (t) {
            return pt(t.firstChild)
        }, contents: function (t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function (t, e) {
        ot.fn[t] = function (n, i) {
            var r = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ot.filter(i, r)), this.length > 1 && (xt[t] || ot.uniqueSort(r), wt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var bt = /\S+/g;
    ot.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, i, r, s = [], a = [], l = -1, u = function () {
            for (r = t.once, i = e = !0; a.length; l = -1)for (n = a.shift(); ++l < s.length;)s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
            t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
        }, c = {
            add: function () {
                return s && (n && !e && (l = s.length - 1, a.push(n)), function e(n) {
                    ot.each(n, function (n, i) {
                        ot.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== ot.type(i) && e(i)
                    })
                }(arguments), n && !e && u()), this
            }, remove: function () {
                return ot.each(arguments, function (t, e) {
                    for (var n; (n = ot.inArray(e, s, n)) > -1;)s.splice(n, 1), l >= n && l--
                }), this
            }, has: function (t) {
                return t ? ot.inArray(t, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return r = a = [], s = n = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return r = a = [], n || (s = n = ""), this
            }, locked: function () {
                return !!r
            }, fireWith: function (t, n) {
                return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return c
    }, ot.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var t = arguments;
                    return ot.Deferred(function (n) {
                        ot.each(e, function (e, o) {
                            var s = ot.isFunction(t[e]) && t[e];
                            r[o[1]](function () {
                                var t = s && s.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                            })
                        }), t = null
                    }).promise()
                }, promise: function (t) {
                    return null != t ? ot.extend(t, i) : i
                }
            }, r = {};
            return i.pipe = i.then, ot.each(e, function (t, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        }, when: function (t) {
            var e, n, i, r = 0, o = Y.call(arguments), s = o.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, l = 1 === a ? t : ot.Deferred(), u = function (t, n, i) {
                return function (r) {
                    n[t] = this, i[t] = arguments.length > 1 ? Y.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)o[r] && ot.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var _t;
    ot.fn.ready = function (t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1, readyWait: 1, holdReady: function (t) {
            t ? ot.readyWait++ : ot.ready(!0)
        }, ready: function (t) {
            (t === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (_t.resolveWith(Q, [ot]), ot.fn.triggerHandler && (ot(Q).triggerHandler("ready"), ot(Q).off("ready"))))
        }
    }), ot.ready.promise = function (e) {
        return _t || (_t = ot.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(ot.ready) : (Q.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), _t.promise(e)
    }, ot.ready.promise();
    var Ct = function (t, e, n, i, r, o, s) {
        var a = 0, l = t.length, u = null == n;
        if ("object" === ot.type(n)) {
            r = !0;
            for (a in n)Ct(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== i && (r = !0, ot.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                return u.call(ot(t), n)
            })), e))for (; l > a; a++)e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
    }, Tt = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    a.uid = 1, a.prototype = {
        register: function (t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), t[this.expando]
        }, cache: function (t) {
            if (!Tt(t))return {};
            var e = t[this.expando];
            return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        }, set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e)r[e] = n; else for (i in e)r[i] = e[i];
            return r
        }, get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        }, access: function (t, e, n) {
            var i;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, ot.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
        }, remove: function (t, e) {
            var n, i, r, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e)this.register(t); else {
                    ot.isArray(e) ? i = e.concat(e.map(ot.camelCase)) : (r = ot.camelCase(e), e in o ? i = [e, r] : (i = r, i = i in o ? [i] : i.match(bt) || [])), n = i.length;
                    for (; n--;)delete o[i[n]]
                }
                (void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        }, hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var Et = new a, kt = new a, St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, At = /[A-Z]/g;
    ot.extend({
        hasData: function (t) {
            return kt.hasData(t) || Et.hasData(t)
        }, data: function (t, e, n) {
            return kt.access(t, e, n)
        }, removeData: function (t, e) {
            kt.remove(t, e)
        }, _data: function (t, e, n) {
            return Et.access(t, e, n)
        }, _removeData: function (t, e) {
            Et.remove(t, e)
        }
    }), ot.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = kt.get(o), 1 === o.nodeType && !Et.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(o, i, r[i])));
                    Et.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                kt.set(this, t)
            }) : Ct(this, function (e) {
                var n, i;
                if (o && void 0 === e) {
                    if (n = kt.get(o, t) || kt.get(o, t.replace(At, "-$&").toLowerCase()), void 0 !== n)return n;
                    if (i = ot.camelCase(t), n = kt.get(o, i), void 0 !== n)return n;
                    if (n = l(o, i, void 0), void 0 !== n)return n
                } else i = ot.camelCase(t), this.each(function () {
                    var n = kt.get(this, i);
                    kt.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && kt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (t) {
            return this.each(function () {
                kt.remove(this, t)
            })
        }
    }), ot.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Et.get(t, e), n && (!i || ot.isArray(n) ? i = Et.access(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (t, e) {
            e = e || "fx";
            var n = ot.queue(t, e), i = n.length, r = n.shift(), o = ot._queueHooks(t, e), s = function () {
                ot.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Et.get(t, n) || Et.access(t, n, {
                    empty: ot.Callbacks("once memory").add(function () {
                        Et.remove(t, [e + "queue", n])
                    })
                })
        }
    }), ot.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        }, dequeue: function (t) {
            return this.each(function () {
                ot.dequeue(this, t)
            })
        }, clearQueue: function (t) {
            return this.queue(t || "fx", [])
        }, promise: function (t, e) {
            var n, i = 1, r = ot.Deferred(), o = this, s = this.length, a = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)n = Et.get(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Nt = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"), jt = ["Top", "Right", "Bottom", "Left"], Pt = function (t, e) {
        return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    }, Ot = /^(?:checkbox|radio)$/i, It = /<([\w:-]+)/, Lt = /^$|\/(?:java|ecma)script/i, $t = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td;
    var zt = /<|&#?\w+;/;
    !function () {
        var t = Q.createDocumentFragment(), e = t.appendChild(Q.createElement("div")), n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ht = /^key/, Mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, qt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, l, u, c, h, p, d, f, g, m = Et.get(t);
            if (m)for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                return "undefined" != typeof ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
            }), e = (e || "").match(bt) || [""], u = e.length; u--;)a = qt.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d && (h = ot.event.special[d] || {}, d = (r ? h.delegateType : h.bindType) || d, h = ot.event.special[d] || {}, c = ot.extend({
                type: d,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && ot.expr.match.needsContext.test(r),
                namespace: f.join(".")
            }, o), (p = l[d]) || (p = l[d] = [], p.delegateCount = 0, h.setup && h.setup.call(t, i, f, s) !== !1 || t.addEventListener && t.addEventListener(d, s)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), ot.event.global[d] = !0)
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, u, c, h, p, d, f, g, m = Et.hasData(t) && Et.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;)if (a = qt.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                    for (h = ot.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;)c = p[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                    s && !p.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || ot.removeEvent(t, d, m.handle), delete l[d])
                } else for (d in l)ot.event.remove(t, d + e[u], n, i, !0);
                ot.isEmptyObject(l) && Et.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            t = ot.event.fix(t);
            var e, n, i, r, o, s = [], a = Y.call(arguments), l = (Et.get(this, "events") || {})[t.type] || [], u = ot.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = ot.event.handlers.call(this, t, l), e = 0; (r = s[e++]) && !t.isPropagationStopped();)for (t.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))for (; l !== this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                for (i = [], n = 0; a > n; n++)o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? ot(r, this).index(l) > -1 : ot.find(r, this, null, [l]).length), i[r] && i.push(o);
                i.length && s.push({elem: l, handlers: i})
            }
            return a < e.length && s.push({elem: this, handlers: e.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || Q, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[ot.expando])return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Mt.test(r) ? this.mouseHooks : Ht.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ot.Event(o), e = i.length; e--;)n = i[e], t[n] = o[n];
            return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (t) {
                    return ot.nodeName(t.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, ot.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, ot.Event = function (t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ot.event.special[t] = {
            delegateType: e, bindType: e, handle: function (t) {
                var n, i = this, r = t.relatedTarget, o = t.handleObj;
                return (!r || r !== i && !ot.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), ot.fn.extend({
        on: function (t, e, n, i) {
            return m(this, t, e, n, i)
        }, one: function (t, e, n, i) {
            return m(this, t, e, n, i, 1)
        }, off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t)this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function () {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Wt = /<script|<style|<link/i, Rt = /checked\s*(?:[^=]|=\s*.checked.)/i, Bt = /^true\/(.*)/, Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function (t) {
            return t.replace(Ft, "<$1></$2>")
        }, clone: function (t, e, n) {
            var i, r, o, s, a = t.cloneNode(!0), l = ot.contains(t.ownerDocument, t);
            if (!(it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))for (s = c(a), o = c(t), i = 0, r = o.length; r > i; i++)b(o[i], s[i]);
            if (e)if (n)for (o = o || c(t), s = s || c(a), i = 0, r = o.length; r > i; i++)x(o[i], s[i]); else x(t, a);
            return s = c(a, "script"), s.length > 0 && h(s, !l && c(t, "script")), a
        }, cleanData: function (t) {
            for (var e, n, i, r = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)if (Tt(n)) {
                if (e = n[Et.expando]) {
                    if (e.events)for (i in e.events)r[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, e.handle);
                    n[Et.expando] = void 0
                }
                n[kt.expando] && (n[kt.expando] = void 0)
            }
        }
    }), ot.fn.extend({
        domManip: _, detach: function (t) {
            return C(this, t, !0)
        }, remove: function (t) {
            return C(this, t)
        }, text: function (t) {
            return Ct(this, function (t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        }, append: function () {
            return _(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.appendChild(t)
                }
            })
        }, prepend: function () {
            return _(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = v(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        }, before: function () {
            return _(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        }, after: function () {
            return _(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        }, empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
            return this
        }, clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ot.clone(this, t, e)
            })
        }, html: function (t) {
            return Ct(this, function (t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                if ("string" == typeof t && !Wt.test(t) && !$t[(It.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; i > n; n++)e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {
                    }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        }, replaceWith: function () {
            var t = [];
            return _(this, arguments, function (e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ot.fn[t] = function (t) {
            for (var n, i = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++)n = s === o ? this : this.clone(!0), ot(r[s])[e](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Ut, Vt = {
        HTML: "block",
        BODY: "block"
    }, Zt = /^margin/, Qt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"), Yt = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, Gt = function (t, e, n, i) {
        var r, o, s = {};
        for (o in e)s[o] = t.style[o], t.style[o] = e[o];
        r = n.apply(t, i || []);
        for (o in e)t.style[o] = s[o];
        return r
    }, Kt = Q.documentElement;
    !function () {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top, o = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(s)
        }

        var n, i, r, o, s = Q.createElement("div"), a = Q.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(it, {
            pixelPosition: function () {
                return e(), n
            }, boxSizingReliable: function () {
                return null == i && e(), i
            }, pixelMarginRight: function () {
                return null == i && e(), r
            }, reliableMarginLeft: function () {
                return null == i && e(), o
            }, reliableMarginRight: function () {
                var e, n = a.appendChild(Q.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Kt.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), Kt.removeChild(s), a.removeChild(n), e
            }
        }))
    }();
    var Jt = /^(none|table(?!-c[ea]).+)/, te = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ee = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ne = ["Webkit", "O", "Moz", "ms"], ie = Q.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = k(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ot.camelCase(e), l = t.style;
                return e = ot.cssProps[a] || (ot.cssProps[a] = A(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Nt.exec(n)) && r[1] && (n = u(t, e, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (ot.cssNumber[a] ? "" : "px")), it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = A(a) || a), s = ot.cssHooks[e] || ot.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = k(t, e, i)), "normal" === r && e in ee && (r = ee[e]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ot.each(["height", "width"], function (t, e) {
        ot.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Gt(t, te, function () {
                    return j(t, e, i)
                }) : j(t, e, i) : void 0
            }, set: function (t, n, i) {
                var r, o = i && Yt(t), s = i && N(t, e, i, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return s && (r = Nt.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = ot.css(t, e)), D(t, n, s)
            }
        }
    }), ot.cssHooks.marginLeft = S(it.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Gt(t, {marginLeft: 0}, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), ot.cssHooks.marginRight = S(it.reliableMarginRight, function (t, e) {
        return e ? Gt(t, {display: "inline-block"}, k, [t, "marginRight"]) : void 0
    }), ot.each({margin: "", padding: "", border: "Width"}, function (t, e) {
        ot.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[t + jt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Zt.test(t) || (ot.cssHooks[t + e].set = D)
    }), ot.fn.extend({
        css: function (t, e) {
            return Ct(this, function (t, e, n) {
                var i, r, o = {}, s = 0;
                if (ot.isArray(e)) {
                    for (i = Yt(t), r = e.length; r > s; s++)o[e[s]] = ot.css(t, e[s], !1, i);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        }, show: function () {
            return P(this, !0)
        }, hide: function () {
            return P(this)
        }, toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Pt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = O, O.prototype = {
        constructor: O, init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ot.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this)
        }, run: function (t) {
            var e, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            }, set: function (t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function (t) {
            return t
        }, swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }, _default: "swing"
    }, ot.fx = O.prototype.init, ot.fx.step = {};
    var re, oe, se = /^(?:toggle|show|hide)$/, ae = /queueHooks$/;
    ot.Animation = ot.extend(M, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return u(n.elem, t, Nt.exec(e), n), n
            }]
        }, tweener: function (t, e) {
            ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(bt);
            for (var n, i = 0, r = t.length; r > i; i++)n = t[i], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(e)
        }, prefilters: [z], prefilter: function (t, e) {
            e ? M.prefilters.unshift(t) : M.prefilters.push(t)
        }
    }), ot.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: n || !n && e || ot.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ot.isFunction(e) && e
        };
        return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
        }, i
    }, ot.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(Pt).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
        }, animate: function (t, e, n, i) {
            var r = ot.isEmptyObject(t), o = ot.speed(e, n, i), s = function () {
                var e = M(this, ot.extend({}, t), o);
                (r || Et.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0, r = null != t && t + "queueHooks", o = ot.timers, s = Et.get(this);
                if (r)s[r] && s[r].stop && i(s[r]); else for (r in s)s[r] && s[r].stop && ae.test(r) && i(s[r]);
                for (r = o.length; r--;)o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                (e || !n) && ot.dequeue(this, t)
            })
        }, finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = Et.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = ot.timers, s = i ? i.length : 0;
                for (n.finish = !0, ot.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; s > e; e++)i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ot.each(["toggle", "show", "hide"], function (t, e) {
        var n = ot.fn[e];
        ot.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, r)
        }
    }), ot.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (t, e) {
        ot.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ot.timers = [], ot.fx.tick = function () {
        var t, e = 0, n = ot.timers;
        for (re = ot.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
        n.length || ot.fx.stop(),
            re = void 0
    }, ot.fx.timer = function (t) {
        ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
    }, ot.fx.interval = 13, ot.fx.start = function () {
        oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval))
    }, ot.fx.stop = function () {
        t.clearInterval(oe), oe = null
    }, ot.fx.speeds = {slow: 600, fast: 200, _default: 400}, ot.fn.delay = function (e, n) {
        return e = ot.fx ? ot.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(r)
            }
        })
    }, function () {
        var t = Q.createElement("input"), e = Q.createElement("select"), n = e.appendChild(Q.createElement("option"));
        t.type = "checkbox", it.checkOn = "" !== t.value, it.optSelected = n.selected, e.disabled = !0, it.optDisabled = !n.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", it.radioValue = "t" === t.value
    }();
    var le, ue = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function (t, e) {
            return Ct(this, ot.attr, t, e, arguments.length > 1)
        }, removeAttr: function (t) {
            return this.each(function () {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), r = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? le : void 0)), void 0 !== n ? null === n ? void ot.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = ot.find.attr(t, e), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (t, e) {
                    if (!it.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }, removeAttr: function (t, e) {
            var n, i, r = 0, o = e && e.match(bt);
            if (o && 1 === t.nodeType)for (; n = o[r++];)i = ot.propFix[n] || n, ot.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        }
    }), le = {
        set: function (t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ue[e] || ot.find.attr;
        ue[e] = function (t, e, i) {
            var r, o;
            return i || (o = ue[e], ue[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ue[e] = o), r
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i, he = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function (t, e) {
            return Ct(this, ot.prop, t, e, arguments.length > 1)
        }, removeProp: function (t) {
            return this.each(function () {
                delete this[ot.propFix[t] || t]
            })
        }
    }), ot.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, r = ot.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        }, propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), it.optSelected || (ot.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ot.propFix[this.toLowerCase()] = this
    });
    var pe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t))return this.each(function (e) {
                ot(this).addClass(t.call(this, e, q(this)))
            });
            if ("string" == typeof t && t)for (e = t.match(bt) || []; n = this[l++];)if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                for (s = 0; o = e[s++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                a = ot.trim(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ot.isFunction(t))return this.each(function (e) {
                ot(this).removeClass(t.call(this, e, q(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof t && t)for (e = t.match(bt) || []; n = this[l++];)if (r = q(n), i = 1 === n.nodeType && (" " + r + " ").replace(pe, " ")) {
                for (s = 0; o = e[s++];)for (; i.indexOf(" " + o + " ") > -1;)i = i.replace(" " + o + " ", " ");
                a = ot.trim(i), r !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
                ot(this).toggleClass(t.call(this, n, q(this), e), e)
            }) : this.each(function () {
                var e, i, r, o;
                if ("string" === n)for (i = 0, r = ot(this), o = t.match(bt) || []; e = o[i++];)r.hasClass(e) ? r.removeClass(e) : r.addClass(e); else(void 0 === t || "boolean" === n) && (e = q(this), e && Et.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Et.get(this, "__className__") || ""))
            })
        }, hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)if (1 === n.nodeType && (" " + q(n) + " ").replace(pe, " ").indexOf(e) > -1)return !0;
            return !1
        }
    });
    var de = /\r/g;
    ot.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ot.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, ot(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ot.isArray(r) && (r = ot.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(de, "") : null == n ? "" : n)) : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function (t) {
                    return ot.trim(t.value)
                }
            }, select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)if (n = i[l], (n.selected || l === r) && (it.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                        if (e = ot(n).val(), o)return e;
                        s.push(e)
                    }
                    return s
                }, set: function (t, e) {
                    for (var n, i, r = t.options, o = ot.makeArray(e), s = r.length; s--;)i = r[s], (i.selected = ot.inArray(ot.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function () {
        ot.valHooks[this] = {
            set: function (t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        }, it.checkOn || (ot.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var fe = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function (e, n, i, r) {
            var o, s, a, l, u, c, h, p = [i || Q], d = nt.call(e, "type") ? e.type : e, f = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(d + ot.event.triggered) && (d.indexOf(".") > -1 && (f = d.split("."), d = f.shift(), f.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[ot.expando] ? e : new ot.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), h = ot.event.special[d] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !ot.isWindow(i)) {
                    for (l = h.delegateType || d, fe.test(l + d) || (s = s.parentNode); s; s = s.parentNode)p.push(s), a = s;
                    a === (i.ownerDocument || Q) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = p[o++]) && !e.isPropagationStopped();)e.type = o > 1 ? l : h.bindType || d, c = (Et.get(s, "events") || {})[e.type] && Et.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Tt(s) && (e.result = c.apply(s, n), e.result === !1 && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || h._default && h._default.apply(p.pop(), n) !== !1 || !Tt(i) || u && ot.isFunction(i[d]) && !ot.isWindow(i) && (a = i[u], a && (i[u] = null), ot.event.triggered = d, i[d](), ot.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        }, simulate: function (t, e, n) {
            var i = ot.extend(new ot.Event, n, {type: t, isSimulated: !0});
            ot.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                ot.event.trigger(t, e, this)
            })
        }, triggerHandler: function (t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ot.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), it.focusin = "onfocusin" in t, it.focusin || ot.each({focus: "focusin", blur: "focusout"}, function (t, e) {
        var n = function (t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this, r = Et.access(i, e);
                r || i.addEventListener(t, n, !0), Et.access(i, e, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = Et.access(i, e) - 1;
                r ? Et.access(i, e, r) : (i.removeEventListener(t, n, !0), Et.remove(i, e))
            }
        }
    });
    var ge = t.location, me = ot.now(), ve = /\?/;
    ot.parseJSON = function (t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e)return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), n
    };
    var ye = /#.*$/, we = /([?&])_=[^&]*/, xe = /^(.*?):[ \t]*([^\r\n]*)$/gm, be = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _e = /^(?:GET|HEAD)$/, Ce = /^\/\//, Te = {}, Ee = {}, ke = "*/".concat("*"), Se = Q.createElement("a");
    Se.href = ge.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: be.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ke,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ot.parseJSON, "text xml": ot.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (t, e) {
            return e ? R(R(t, ot.ajaxSettings), e) : R(ot.ajaxSettings, t)
        },
        ajaxPrefilter: F(Te),
        ajaxTransport: F(Ee),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var u, h, y, w, b, C = n;
                2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, s = a || "", _.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && (w = B(p, _, i)), w = X(p, w, _, u), u ? (p.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (ot.lastModified[o] = b), b = _.getResponseHeader("etag"), b && (ot.etag[o] = b)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = w.state, h = w.data, y = w.error, u = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || C) + "", u ? g.resolveWith(d, [h, C, _]) : g.rejectWith(d, [_, C, y]), _.statusCode(v), v = void 0, c && f.trigger(u ? "ajaxSuccess" : "ajaxError", [_, p, u ? h : y]), m.fireWith(d, [_, C]), c && (f.trigger("ajaxComplete", [_, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, o, s, a, l, u, c, h, p = ot.ajaxSetup({}, n), d = p.context || p, f = p.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, g = ot.Deferred(), m = ot.Callbacks("once memory"), v = p.statusCode || {}, y = {}, w = {}, x = 0, b = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === x) {
                        if (!a)for (a = {}; e = xe.exec(s);)a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? s : null
                },
                setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return x || (t = w[n] = w[n] || t, y[t] = e), this
                },
                overrideMimeType: function (t) {
                    return x || (p.mimeType = t), this
                },
                statusCode: function (t) {
                    var e;
                    if (t)if (2 > x)for (e in t)v[e] = [v[e], t[e]]; else _.always(t[_.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || b;
                    return r && r.abort(e), i(0, e), this
                }
            };
            if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, p.url = ((e || p.url || ge.href) + "").replace(ye, "").replace(Ce, ge.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(bt) || [""], null == p.crossDomain) {
                u = Q.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Se.protocol + "//" + Se.host != u.protocol + "//" + u.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), W(Te, p, n, _), 2 === x)return _;
            c = ot.event && p.global, c && 0 === ot.active++ && ot.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !_e.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (ve.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = we.test(o) ? o.replace(we, "$1_=" + me++) : o + (ve.test(o) ? "&" : "?") + "_=" + me++)), p.ifModified && (ot.lastModified[o] && _.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && _.setRequestHeader("If-None-Match", ot.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", p.contentType), _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers)_.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(d, _, p) === !1 || 2 === x))return _.abort();
            b = "abort";
            for (h in{success: 1, error: 1, complete: 1})_[h](p[h]);
            if (r = W(Ee, p, n, _)) {
                if (_.readyState = 1, c && f.trigger("ajaxSend", [_, p]), 2 === x)return _;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    _.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, r.send(y, i)
                } catch (t) {
                    if (!(2 > x))throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function (t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function (t, e) {
        ot[e] = function (t, n, i, r) {
            return ot.isFunction(n) && (r = r || i, i = n, n = void 0), ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ot.isPlainObject(t) && t))
        }
    }), ot._evalUrl = function (t) {
        return ot.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    }, ot.fn.extend({
        wrapAll: function (t) {
            var e;
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                return t
            }).append(this)), this)
        }, wrapInner: function (t) {
            return ot.isFunction(t) ? this.each(function (e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ot(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        }, wrap: function (t) {
            var e = ot.isFunction(t);
            return this.each(function (n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function (t) {
        return !ot.expr.filters.visible(t)
    }, ot.expr.filters.visible = function (t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    };
    var Ae = /%20/g, De = /\[\]$/, Ne = /\r?\n/g, je = /^(?:submit|button|image|reset|file)$/i, Pe = /^(?:input|select|textarea|keygen)/i;
    ot.param = function (t, e) {
        var n, i = [], r = function (t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t))ot.each(t, function () {
            r(this.name, this.value)
        }); else for (n in t)U(n, t[n], e, r);
        return i.join("&").replace(Ae, "+")
    }, ot.fn.extend({
        serialize: function () {
            return ot.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Pe.test(this.nodeName) && !je.test(t) && (this.checked || !Ot.test(t))
            }).map(function (t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                    return {name: e.name, value: t.replace(Ne, "\r\n")}
                }) : {name: e.name, value: n.replace(Ne, "\r\n")}
            }).get()
        }
    }), ot.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (t) {
        }
    };
    var Oe = {0: 200, 1223: 204}, Ie = ot.ajaxSettings.xhr();
    it.cors = !!Ie && "withCredentials" in Ie, it.ajax = Ie = !!Ie, ot.ajaxTransport(function (e) {
        var n, i;
        return it.cors || Ie && !e.crossDomain ? {
            send: function (r, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (s in e.xhrFields)a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r)a.setRequestHeader(s, r[s]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Oe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n)throw t
                }
            }, abort: function () {
                n && n()
            }
        } : void 0
    }), ot.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), ot.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = ot("<script>").prop({charset: t.scriptCharset, src: t.url}).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Q.head.appendChild(e[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Le = [], $e = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var t = Le.pop() || ot.expando + "_" + me++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = e.jsonp !== !1 && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace($e, "$1" + r) : e.jsonp !== !1 && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || ot.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === o ? ot(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, Le.push(r)), s && ot.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), it.createHTMLDocument = function () {
        var t = Q.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), ot.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (it.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
        var i = ft.exec(t), r = !n && [];
        return i ? [e.createElement(i[1])] : (i = p([t], e, r), r && r.length && ot(r).remove(), ot.merge([], i.childNodes))
    };
    var ze = ot.fn.load;
    ot.fn.load = function (t, e, n) {
        if ("string" != typeof t && ze)return ze.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a > -1 && (i = ot.trim(t.slice(a)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ot.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
                s.each(function () {
                    n.apply(s, o || [t.responseText, e, t])
                })
            }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ot.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function (t) {
        return ot.grep(ot.timers, function (e) {
            return t === e.elem
        }).length
    }, ot.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, u, c = ot.css(t, "position"), h = ot(t), p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, ot.fn.extend({
        offset: function (t) {
            if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
            return o ? (e = o.documentElement, ot.contains(e, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : void 0
        }, position: function () {
            if (this[0]) {
                var t, e, n = this[0], i = {top: 0, left: 0};
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), i.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ot.css(n, "marginTop", !0),
                    left: e.left - i.left - ot.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");)t = t.offsetParent;
                return t || Kt
            })
        }
    }), ot.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function (i) {
            return Ct(this, function (t, i, r) {
                var o = V(t);
                return void 0 === r ? o ? o[e] : t[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), ot.each(["top", "left"], function (t, e) {
        ot.cssHooks[e] = S(it.pixelPosition, function (t, n) {
            return n ? (n = k(t, e), Qt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }), ot.each({Height: "height", Width: "width"}, function (t, e) {
        ot.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
            ot.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" : "border");
                return Ct(this, function (e, n, i) {
                    var r;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? ot.css(e, n, s) : ot.style(e, n, i, s)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), ot.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        }, unbind: function (t, e) {
            return this.off(t, null, e)
        }, delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        }, undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }, size: function () {
            return this.length
        }
    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ot
    });
    var He = t.jQuery, Me = t.$;
    return ot.noConflict = function (e) {
        return t.$ === ot && (t.$ = Me), e && t.jQuery === ot && (t.jQuery = He), ot
    }, e || (t.jQuery = t.$ = ot), ot
}), function () {
    var t, e, n, i, r, o = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = [].indexOf || function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t)return e;
            return -1
        };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e)i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
            var r;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (r = document.createEvent("CustomEvent"), r.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (r = document.createEventObject(), r.eventType = t) : r.eventName = t, r
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
            function t() {
                this.keys = [], this.values = []
            }

            return t.prototype.get = function (t) {
                var e, n, i, r, o;
                for (o = this.keys, e = i = 0, r = o.length; r > i; e = ++i)if (n = o[e], n === t)return this.values[e]
            }, t.prototype.set = function (t, e) {
                var n, i, r, o, s;
                for (s = this.keys, n = r = 0, o = s.length; o > r; n = ++r)if (i = s[n], i === t)return void(this.values[n] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function () {
            function t() {
                "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }

            return t.notSupported = !0, t.prototype.observe = function () {
            }, t
        }()), i = this.getComputedStyle || function (t) {
            return this.getPropertyValue = function (e) {
                var n;
                return "float" === e && (e = "styleFloat"), r.test(e) && e.replace(r, function (t, e) {
                    return e.toUpperCase()
                }), (null != (n = t.currentStyle) ? n[e] : void 0) || null
            }, this
        }, r = /(\-([a-z]){1})/g, this.WOW = function () {
        function r(t) {
            null == t && (t = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.resetAnimation = o(this.resetAnimation, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null
        }, r.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, r.prototype.start = function () {
            var e, n, i, r;
            if (this.stopped = !1, this.boxes = function () {
                    var t, n, i, r;
                    for (i = this.element.querySelectorAll("." + this.config.boxClass), r = [], t = 0, n = i.length; n > t; t++)e = i[t], r.push(e);
                    return r
                }.call(this), this.all = function () {
                    var t, n, i, r;
                    for (i = this.boxes, r = [], t = 0, n = i.length; n > t; t++)e = i[t], r.push(e);
                    return r
                }.call(this), this.boxes.length)if (this.disabled())this.resetStyle(); else for (r = this.boxes, n = 0, i = r.length; i > n; n++)e = r[n], this.applyStyle(e, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function (t) {
                return function (e) {
                    var n, i, r, o, s;
                    for (s = [], n = 0, i = e.length; i > n; n++)o = e[n], s.push(function () {
                        var t, e, n, i;
                        for (n = o.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++)r = n[t], i.push(this.doSync(r));
                        return i
                    }.call(t));
                    return s
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, r.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, r.prototype.sync = function () {
            return t.notSupported ? this.doSync(this.element) : void 0
        }, r.prototype.doSync = function (t) {
            var e, n, i, r, o;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, r = t.querySelectorAll("." + this.config.boxClass), o = [], n = 0, i = r.length; i > n; n++)e = r[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), o.push(this.scrolled = !0)) : o.push(void 0);
                return o
            }
        }, r.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, r.prototype.applyStyle = function (t, e) {
            var n, i, r;
            return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), r = t.getAttribute("data-wow-iteration"), this.animate(function (o) {
                return function () {
                    return o.customStyle(t, e, i, n, r)
                }
            }(this))
        }, r.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), r.prototype.resetStyle = function () {
            var t, e, n, i, r;
            for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++)t = i[e], r.push(t.style.visibility = "visible");
            return r
        }, r.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, r.prototype.customStyle = function (t, e, n, i, r) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), r && this.vendorSet(t.style, {animationIterationCount: r}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function (t, e) {
            var n, i, r, o;
            i = [];
            for (n in e)r = e[n], t["" + n] = r, i.push(function () {
                var e, i, s, a;
                for (s = this.vendors, a = [], e = 0, i = s.length; i > e; e++)o = s[e], a.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                return a
            }.call(this));
            return i
        }, r.prototype.vendorCSS = function (t, e) {
            var n, r, o, s, a, l;
            for (a = i(t), s = a.getPropertyCSSValue(e), o = this.vendors, n = 0, r = o.length; r > n; n++)l = o[n], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
            return s
        }, r.prototype.animationName = function (t) {
            var e;
            try {
                e = this.vendorCSS(t, "animation-name").cssText
            } catch (n) {
                e = i(t).getPropertyValue("animation-name")
            }
            return "none" === e ? "" : e
        }, r.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, r.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, r.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, r.prototype.scrollCallback = function () {
            var t;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var e, n, i, r;
                for (i = this.boxes, r = [], e = 0, n = i.length; n > e; e++)t = i[e], t && (this.isVisible(t) ? this.show(t) : r.push(t));
                return r
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, r.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;)t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;)e += t.offsetTop;
            return e
        }, r.prototype.isVisible = function (t) {
            var e, n, i, r, o;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, o = window.pageYOffset, r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, r >= i && e >= o
        }, r.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, r.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, r
    }()
}.call(this), !function (t, e, n, i) {
    function r(e, n) {
        this.settings = null, this.options = t.extend({}, r.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)), t.each(r.Plugins, t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(r.Workers, t.proxy(function (e, n) {
            this._pipe.push({filter: n.filter, run: t.proxy(n.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this.settings.margin || "", n = !this.settings.autoWidth, i = this.settings.rtl, r = {
                width: "auto",
                "margin-left": i ? e : "",
                "margin-right": i ? "" : e
            };
            !n && this.$stage.children().css(r), t.css = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, n = null, i = this._items.length, r = !this.settings.autoWidth, o = [];
            for (t.items = {
                merge: !1,
                width: e
            }; i--;)n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, o[i] = r ? e * n : this._items[i].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var e = [], n = this._items, i = this.settings, r = Math.max(2 * i.items, 4), o = 2 * Math.ceil(n.length / 2), s = i.loop && n.length ? i.rewind ? r : Math.max(r, o) : 0, a = "", l = "";
            for (s /= 2; s--;)e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < e;)i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var t = this.settings.stagePadding, e = this._coordinates, n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            var e = this._coordinates.length, n = !this.settings.autoWidth, i = this.$stage.children();
            if (n && t.items.merge)for (; e--;)t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css); else n && (t.css.width = t.items.width, i.css(t.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var t, e, n, i, r = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding, s = this.coordinates(this.current()) + o, a = s + this.width() * r, l = [];
            for (n = 0, i = this._coordinates.length; i > n; n++)t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + o * r, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], r.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, n, r;
            e = this.$element.find("img"), n = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, r = this.$element.children(n).width(), e.length && 0 >= r && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.setup = function () {
        var e = this.viewport(), n = this.options.responsive, i = -1, r = null;
        n ? (t.each(n, function (t) {
            e >= t && t > i && (i = Number(t))
        }), r = t.extend({}, this.options, n[i]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (e) {
        var n = this.trigger("prepare", {content: e});
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {content: n.data}), n.data
    }, r.prototype.update = function () {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function (t) {
            return this[t]
        }, this._invalidated), r = {}; n > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function (t) {
        switch (t = t || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, r.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function (e) {
        var i = null;
        3 !== e.which && (t.support.transform ? (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), i = {
            x: i[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        }) : (i = this.$stage.position(), i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function (t) {
        var e = null, n = null, i = null, r = this.difference(this._drag.pointer, this.pointer(t)), o = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
    }, r.prototype.onDragEnd = function (e) {
        var i = this.difference(this._drag.pointer, this.pointer(e)), r = this._drag.stage.current, o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function (e, n) {
        var i = -1, r = 30, o = this.width(), s = this.coordinates();
        return this.settings.freeDrag || t.each(s, t.proxy(function (t, a) {
            return "left" === n && e > a - r && a + r > e ? i = t : "right" === n && e > a - o - r && a - o + r > e ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] || a - o) && (i = "left" === n ? t + 1 : t), -1 === i
        }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
    }, r.prototype.animate = function (e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({left: e + "px"}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: e + "px"})
    }, r.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, r.prototype.current = function (t) {
        if (t === i)return this._current;
        if (0 === this._items.length)return i;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {property: {name: "position", value: t}});
            e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (t, e) {
            return e
        })
    }, r.prototype.reset = function (t) {
        t = this.normalize(t), t !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (t, e) {
        var n = this._items.length, r = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || 1 > n ? t = i : (0 > t || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2), t
    }, r.prototype.relative = function (t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, r.prototype.maximum = function (t) {
        var e, n, i, r = this.settings, o = this._coordinates.length;
        if (r.loop)o = this._clones.length / 2 + this._items.length - 1; else if (r.autoWidth || r.merge) {
            for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && (n += this._items[e].width() + this.settings.margin, !(n > i)););
            o = e + 1
        } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, r.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2
    }, r.prototype.items = function (t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, r.prototype.mergers = function (t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, r.prototype.clones = function (e) {
        var n = this._clones.length / 2, r = n + this._items.length, o = function (t) {
            return t % 2 === 0 ? r + t / 2 : n - (t + 1) / 2
        };
        return e === i ? t.map(this._clones, function (t, e) {
            return o(e)
        }) : t.map(this._clones, function (t, n) {
            return t === e ? o(n) : null
        })
    }, r.prototype.speed = function (t) {
        return t !== i && (this._speed = t), this._speed
    }, r.prototype.coordinates = function (e) {
        var n, r = 1, o = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy(function (t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, o = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * r) : n = this._coordinates[o] || 0, n = Math.ceil(n))
    }, r.prototype.duration = function (t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, r.prototype.to = function (t, e) {
        var n = this.current(), i = null, r = t - this.relative(n), o = (r > 0) - (0 > r), s = this._items.length, a = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), t = n + r, i = ((t - a) % s + s) % s + a, i !== t && l >= i - r && i - r > 0 && (n = i - r, t = i, this.reset(n))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, r.prototype.next = function (t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, r.prototype.prev = function (t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, r.prototype.onTransitionEnd = function (t) {
        return (t === i || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
    }, r.prototype.viewport = function () {
        var i;
        if (this.options.responsiveBaseElement !== e)i = t(this.options.responsiveBaseElement).width(); else if (e.innerWidth)i = e.innerWidth; else {
            if (!n.documentElement || !n.documentElement.clientWidth)throw"Can not detect viewport width.";
            i = n.documentElement.clientWidth
        }
        return i
    }, r.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (e, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: n
        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: n
        })
    }, r.prototype.remove = function (t) {
        t = this.normalize(t, !0), t !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, r.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (t) {
                n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, r.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), this.settings.responsive !== !1 && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
        for (var i in this._plugins)this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function (t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
            case"<":
                return i ? t > n : n > t;
            case">":
                return i ? n > t : t > n;
            case">=":
                return i ? n >= t : t >= n;
            case"<=":
                return i ? t >= n : n >= t
        }
    }, r.prototype.on = function (t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }, r.prototype.off = function (t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }, r.prototype.trigger = function (e, n, i, o, s) {
        var a = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }, l = t.camelCase(t.grep(["on", e, i], function (t) {
            return t
        }).join("-").toLowerCase()), u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({relatedTarget: this}, a, n));
        return this._supress[e] || (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(u)
        }), this.register({
            type: r.Type.Event,
            name: e
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, r.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, r.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (t, e) {
            this._states.current[e]--
        }, this))
    }, r.prototype.register = function (e) {
        if (e.type === r.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function (t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === r.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, i) {
            return t.inArray(n, this._states.tags[e.name]) === i
        }, this)))
    }, r.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (t, e) {
            this._supress[e] = !0
        }, this))
    }, r.prototype.release = function (e) {
        t.each(e, t.proxy(function (t, e) {
            delete this._supress[e]
        }, this))
    }, r.prototype.pointer = function (t) {
        var n = {x: null, y: null};
        return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
    }, r.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t))
    }, r.prototype.difference = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
    }, t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var i = t(this), o = i.data("owl.carousel");
            o || (o = new r(this, "object" == typeof e && e), i.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
                o.register({
                    type: r.Type.Event,
                    name: n
                }), o.$element.on(n + ".owl.carousel.core", t.proxy(function (t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, n)
        })
    }, t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var t, n;
        e.clearInterval(this._interval);
        for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))"function" != typeof this[n] && (this[n] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))for (var n = this._core.settings, r = n.center && Math.ceil(n.items / 2) || n.items, o = n.center && -1 * r || 0, s = (e.property && e.property.value !== i ? e.property.value : this._core.current()) + o, a = this._core.clones().length, l = t.proxy(function (t, e) {
                    this.load(e)
                }, this); o++ < r;)this.load(a / 2 + this._core.relative(s)), a && t.each(this._core.clones(this._core.relative(s)), l), s++
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {lazyLoad: !1}, r.prototype.load = function (n) {
        var i = this._core.$stage.children().eq(n), r = i && i.find(".owl-lazy");
        !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function (n, i) {
            var r, o = t(i), s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: s
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
                o.css("opacity", 1), this._core.trigger("loaded", {element: o, url: s}, "lazy")
            }, this)).attr("src", s) : (r = new Image, r.onload = t.proxy(function () {
                o.css({"background-image": "url(" + s + ")", opacity: "1"}), this._core.trigger("loaded", {
                    element: o,
                    url: s
                }, "lazy")
            }, this), r.src = s)
        }, this)), this._loaded.push(i.get(0)))
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers)this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this), "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, r.prototype.update = function () {
        var e = this._core._current, n = e + this._core.settings.items, i = this._core.$stage.children().toArray().slice(e, n), r = [], o = 0;
        t.each(i, function (e, n) {
            r.push(t(n).height())
        }), o = Math.max.apply(null, r), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
            this.play(t)
        }, this))
    };
    r.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, r.prototype.fetch = function (t, e) {
        var n = function () {
            return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }(), i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"), r = t.attr("data-width") || this._core.settings.videoWidth, o = t.attr("data-height") || this._core.settings.videoHeight, s = t.attr("href");
        if (!s)throw new Error("Missing video URL.");
        if (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1)n = "youtube"; else if (i[3].indexOf("vimeo") > -1)n = "vimeo"; else {
            if (!(i[3].indexOf("vzaar") > -1))throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        i = i[6], this._videos[s] = {
            type: n,
            id: i,
            width: r,
            height: o
        }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, r.prototype.thumbnail = function (e, n) {
        var i, r, o, s = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : "", a = e.find("img"), l = "src", u = "", c = this._core.settings, h = function (t) {
            r = '<div class="owl-video-play-icon"></div>', i = c.lazyLoad ? '<div class="owl-video-tn ' + u + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after(r)
        };
        return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(o)) : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t[0].thumbnail_large, h(o)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (t) {
                o = t.framegrab_url, h(o)
            }
        }))
    }, r.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function (e) {
        var n, i = t(e.target), r = i.closest("." + this._core.settings.itemClass), o = this._videos[r.attr("data-video")], s = o.width || "100%", a = o.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === o.type ? n = '<iframe width="' + s + '" height="' + a + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? n = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + s + '" height="' + a + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (n = '<iframe frameborder="0"height="' + a + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + n + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function () {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this.core = e, this.core.options = t.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
            "change.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this), "translate.owl.carousel": t.proxy(function (t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), r = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, s = this.core.settings.animateOut;
            this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({left: e + "px"}).addClass("animated owl-animated-out").addClass(s)), o && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
        }
    }, r.prototype.clear = function (e) {
        t(e.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers)this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    var r = function (e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": t.proxy(function (t, e, n) {
                t.namespace && this.play(e, n)
            }, this), "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype.play = function (t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, r.prototype._getNextTimeout = function (i, r) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(r || this._core.settings.autoplaySpeed)
        }, this), i || this._core.settings.autoplayTimeout)
    }, r.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, r.prototype.stop = function () {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, r.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, r.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers)this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var r = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this), "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this), "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function () {
        var e, n = this._core.settings;
        this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.prev(n.navSpeed)
        }, this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function (t) {
            this.next(n.navSpeed)
        }, this)), n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function (e) {
            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, n.dotsSpeed)
        }, this));
        for (e in this._overrides)this._core[e] = t.proxy(this[e], this)
    }, r.prototype.destroy = function () {
        var t, e, n, i;
        for (t in this._handlers)this.$element.off(t, this._handlers[t]);
        for (e in this._controls)this._controls[e].remove();
        for (i in this.overides)this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))"function" != typeof this[n] && (this[n] = null)
    }, r.prototype.update = function () {
        var t, e, n, i = this._core.clones().length / 2, r = i + this._core.items().length, o = this._core.maximum(!0), s = this._core.settings, a = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy)for (this._pages = [], t = i, e = 0, n = 0; r > t; t++) {
            if (e >= a || 0 === e) {
                if (this._pages.push({start: Math.min(o, t - i), end: t - i + a - 1}), Math.min(o, t - i) === o)break;
                e = 0, ++n
            }
            e += this._core.mergers(this._core.relative(t))
        }
    }, r.prototype.draw = function () {
        var e, n = this._core.settings, i = this._core.items().length <= n.items, r = this._core.relative(this._core.current()), o = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : 0 > e && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, r.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t, n) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, r.prototype.getPosition = function (e) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += r.slideBy : n -= r.slideBy), n
    }, r.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, r.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, r.prototype.to = function (e, n, i) {
        var r;
        !i && this._pages.length ? (r = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    "use strict";
    var r = function (n) {
        this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n)return;
                    this._hashes[n] = e.content
                }
            }, this), "changed.owl.carousel": t.proxy(function (n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current())), r = t.map(this._hashes, function (t, e) {
                        return t === i ? e : null
                    }).join();
                    if (!r || e.location.hash.slice(1) === r)return;
                    e.location.hash = r
                }
            }, this)
        }, this._core.options = t.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function (t) {
            var n = e.location.hash.substring(1), r = this._core.$stage.children(), o = this._hashes[n] && r.index(this._hashes[n]);
            o !== i && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
        }, this))
    };
    r.Defaults = {URLhashListener: !1}, r.prototype.destroy = function () {
        var n, i;
        t(e).off("hashchange.owl.navigation");
        for (n in this._handlers)this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document), function (t, e, n, i) {
    function r(e, n) {
        var r = !1, o = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
            return s[e] !== i ? (r = !n || e, !1) : void 0
        }), r
    }

    function o(t) {
        return r(t, !0)
    }

    var s = t("<support>").get(0).style, a = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, u = {
        csstransforms: function () {
            return !!r("transform")
        }, csstransforms3d: function () {
            return !!r("perspective")
        }, csstransitions: function () {
            return !!r("transition")
        }, cssanimations: function () {
            return !!r("animation")
        }
    };
    u.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), u.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), !function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (t) {
    var e, n, i, r, o, s, a = "Close", l = "BeforeClose", u = "AfterClose", c = "BeforeAppend", h = "MarkupParse", p = "Open", d = "Change", f = "mfp", g = "." + f, m = "mfp-ready", v = "mfp-removing", y = "mfp-prevent-close", w = function () {
    }, x = !!window.jQuery, b = t(window), _ = function (t, n) {
        e.ev.on(f + t + g, n)
    }, C = function (e, n, i, r) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e, i && (o.innerHTML = i), r ? n && n.appendChild(o) : (o = t(o), n && o.appendTo(n)), o
    }, T = function (n, i) {
        e.ev.triggerHandler(f + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
    }, E = function (n) {
        return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
    }, k = function () {
        t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e)
    }, S = function () {
        var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== t.transition)return !0;
        for (; e.length;)if (e.pop() + "Transition" in t)return !0;
        return !1
    };
    w.prototype = {
        constructor: w, init: function () {
            var n = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = S(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
        }, open: function (n) {
            var r;
            if (n.isObj === !1) {
                e.items = n.items.toArray(), e.index = 0;
                var s, a = n.items;
                for (r = 0; r < a.length; r++)if (s = a[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                    e.index = r;
                    break
                }
            } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
            if (e.isOpen)return void e.updateItemHTML();
            e.types = [], o = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = C("bg").on("click" + g, function () {
                e.close()
            }), e.wrap = C("wrap").attr("tabindex", -1).on("click" + g, function (t) {
                e._checkIfClose(t.target) && e.close()
            }), e.container = C("container", e.wrap)), e.contentContainer = C("content"), e.st.preloader && (e.preloader = C("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (r = 0; r < l.length; r++) {
                var u = l[r];
                u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
            }
            T("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(h, function (t, e, n, i) {
                n.close_replaceWith = E(i.type)
            }), o += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                overflow: e.st.overflowY,
                overflowX: "hidden",
                overflowY: e.st.overflowY
            }) : e.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }), e.st.enableEscapeKey && i.on("keyup" + g, function (t) {
                27 === t.keyCode && e.close()
            }), b.on("resize" + g, function () {
                e.updateSize()
            }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
            var c = e.wH = b.height(), d = {};
            if (e.fixedContentPos && e._hasScrollBar(c)) {
                var f = e._getScrollbarSize();
                f && (d.marginRight = f)
            }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : d.overflow = "hidden");
            var v = e.st.mainClass;
            return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), T("BuildControls"), t("html").css(d), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), i.on("focusin" + g, e._onFocusIn)
            }, 16), e.isOpen = !0, e.updateSize(c), T(p), n
        }, close: function () {
            e.isOpen && (T(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        }, _close: function () {
            T(a);
            var n = v + " " + m + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                var r = {marginRight: ""};
                e.isIE7 ? t("body, html").css("overflow", "") : r.overflow = "", t("html").css(r)
            }
            i.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, T(u)
        }, updateSize: function (t) {
            if (e.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                e.wrap.css("height", i), e.wH = i
            } else e.wH = t || b.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), T("Resize")
        }, updateItemHTML: function () {
            var n = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
            var i = n.type;
            if (T("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                var o = !!e.st[i] && e.st[i].markup;
                T("FirstMarkupParse", o), o ? e.currTemplate[i] = t(o) : e.currTemplate[i] = !0
            }
            r && r !== n.type && e.container.removeClass("mfp-" + r + "-holder");
            var s = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
            e.appendContent(s, i), n.preloaded = !0, T(d, n), r = n.type, e.container.prepend(e.contentContainer), T("AfterChange")
        }, appendContent: function (t, n) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", T(c), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
        }, parseEl: function (n) {
            var i, r = e.items[n];
            if (r.tagName ? r = {el: t(r)} : (i = r.type, r = {data: r, src: r.src}), r.el) {
                for (var o = e.types, s = 0; s < o.length; s++)if (r.el.hasClass("mfp-" + o[s])) {
                    i = o[s];
                    break
                }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
            }
            return r.type = i || e.st.type || "inline", r.index = n, r.parsed = !0, e.items[n] = r, T("ElementParse", r), e.items[n]
        }, addGroup: function (t, n) {
            var i = function (i) {
                i.mfpEl = this, e._openClick(i, t, n)
            };
            n || (n = {});
            var r = "click.magnificPopup";
            n.mainEl = t, n.items ? (n.isObj = !0, t.off(r).on(r, i)) : (n.isObj = !1, n.delegate ? t.off(r).on(r, n.delegate, i) : (n.items = t, t.off(r).on(r, i)))
        }, _openClick: function (n, i, r) {
            var o = void 0 !== r.midClick ? r.midClick : t.magnificPopup.defaults.midClick;
            if (o || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var s = void 0 !== r.disableOn ? r.disableOn : t.magnificPopup.defaults.disableOn;
                if (s)if (t.isFunction(s)) {
                    if (!s.call(e))return !0
                } else if (b.width() < s)return !0;
                n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), r.el = t(n.mfpEl), r.delegate && (r.items = i.find(r.delegate)), e.open(r)
            }
        }, updateStatus: function (t, i) {
            if (e.preloader) {
                n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                var r = {status: t, text: i};
                T("UpdateStatus", r), t = r.status, i = r.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), n = t
            }
        }, _checkIfClose: function (n) {
            if (!t(n).hasClass(y)) {
                var i = e.st.closeOnContentClick, r = e.st.closeOnBgClick;
                if (i && r)return !0;
                if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0])return !0;
                if (n === e.content[0] || t.contains(e.content[0], n)) {
                    if (i)return !0
                } else if (r && t.contains(document, n))return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || b.height())
        }, _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        }, _onFocusIn: function (n) {
            return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (e._setFocus(), !1)
        }, _parseMarkup: function (e, n, i) {
            var r;
            i.data && (n = t.extend(i.data, n)), T(h, [e, n, i]), t.each(n, function (n, i) {
                if (void 0 === i || i === !1)return !0;
                if (r = n.split("_"), r.length > 1) {
                    var o = e.find(g + "-" + r[0]);
                    if (o.length > 0) {
                        var s = r[1];
                        "replaceWith" === s ? o[0] !== i[0] && o.replaceWith(i) : "img" === s ? o.is("img") ? o.attr("src", i) : o.replaceWith(t("<img>").attr("src", i).attr("class", o.attr("class"))) : o.attr(r[1], i)
                    }
                } else e.find(g + "-" + n).html(i)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function (e, n) {
            return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = n || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, n) {
            n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function (n) {
        k();
        var i = t(this);
        if ("string" == typeof n)if ("open" === n) {
            var r, o = x ? i.data("magnificPopup") : i[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
            o.items ? r = o.items[s] : (r = i, o.delegate && (r = r.find(o.delegate)), r = r.eq(s)), e._openClick({mfpEl: r}, i, o)
        } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1)); else n = t.extend(!0, {}, n), x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
        return i
    };
    var A, D, N, j = "inline", P = function () {
        N && (D.after(N.addClass(A)).detach(), N = null)
    };
    t.magnificPopup.registerModule(j, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                e.types.push(j), _(a + "." + j, function () {
                    P()
                })
            }, getInline: function (n, i) {
                if (P(), n.src) {
                    var r = e.st.inline, o = t(n.src);
                    if (o.length) {
                        var s = o[0].parentNode;
                        s && s.tagName && (D || (A = r.hiddenClass, D = C(A), A = "mfp-" + A), N = o.after(D).detach().removeClass(A)), e.updateStatus("ready")
                    } else e.updateStatus("error", r.tNotFound), o = t("<div>");
                    return n.inlineElement = o, o
                }
                return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
            }
        }
    });
    var O, I = "ajax", L = function () {
        O && t(document.body).removeClass(O)
    }, $ = function () {
        L(), e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                e.types.push(I), O = e.st.ajax.cursor, _(a + "." + I, $), _("BeforeChange." + I, $)
            }, getAjax: function (n) {
                O && t(document.body).addClass(O), e.updateStatus("loading");
                var i = t.extend({
                    url: n.src, success: function (i, r, o) {
                        var s = {data: i, xhr: o};
                        T("ParseAjax", s), e.appendContent(t(s.data), I), n.finished = !0, L(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass(m)
                        }, 16), e.updateStatus("ready"), T("AjaxContentAdded")
                    }, error: function () {
                        L(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(i), ""
            }
        }
    });
    var z, H = function (n) {
        if (n.data && void 0 !== n.data.title)return n.data.title;
        var i = e.st.image.titleSrc;
        if (i) {
            if (t.isFunction(i))return i.call(e, n);
            if (n.el)return n.el.attr(i) || ""
        }
        return ""
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var n = e.st.image, i = ".image";
                e.types.push("image"), _(p + i, function () {
                    "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
                }), _(a + i, function () {
                    n.cursor && t(document.body).removeClass(n.cursor), b.off("resize" + g)
                }), _("Resize" + i, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
            }, resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var n = 0;
                    e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, T("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (t) {
                var n = 0, i = t.img[0], r = function (o) {
                    z && clearInterval(z), z = setInterval(function () {
                        return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(z), n++, void(3 === n ? r(10) : 40 === n ? r(50) : 100 === n && r(500)))
                    }, o)
                };
                r(1)
            }, getImage: function (n, i) {
                var r = 0, o = function () {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(o, 100) : s()))
                }, s = function () {
                    n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                }, a = e.st.image, l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")), n.img = t(u).on("load.mfploader", o).on("error.mfploader", s), u.src = n.src, l.is("img") && (n.img = n.img.clone()), u = n.img[0], u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return e._parseMarkup(i, {
                    title: H(n),
                    img_replaceWith: n.img
                }, n), e.resizeImage(), n.hasSize ? (z && clearInterval(z), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
            }
        }
    });
    var M, q = function () {
        return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, n = e.st.zoom, i = ".zoom";
                if (n.enabled && e.supportsTransition) {
                    var r, o, s = n.duration, u = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), i = "all " + n.duration / 1e3 + "s " + n.easing, r = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, o = "transition";
                        return r["-webkit-" + o] = r["-moz-" + o] = r["-o-" + o] = r[o] = i, e.css(r), e
                    }, c = function () {
                        e.content.css("visibility", "visible")
                    };
                    _("BuildControls" + i, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t)return void c();
                            o = u(t), o.css(e._getOffset()), e.wrap.append(o), r = setTimeout(function () {
                                o.css(e._getOffset(!0)), r = setTimeout(function () {
                                    c(), setTimeout(function () {
                                        o.remove(), t = o = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), _(l + i, function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(r), e.st.removalDelay = s, !t) {
                                if (t = e._getItemToZoom(), !t)return;
                                o = u(t)
                            }
                            o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function () {
                                o.css(e._getOffset())
                            }, 16)
                        }
                    }), _(a + i, function () {
                        e._allowZoom() && (c(), o && o.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === e.currItem.type
            }, _getItemToZoom: function () {
                return !!e.currItem.hasSize && e.currItem.img
            }, _getOffset: function (n) {
                var i;
                i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var r = i.offset(), o = parseInt(i.css("padding-top"), 10), s = parseInt(i.css("padding-bottom"), 10);
                r.top -= t(window).scrollTop() - o;
                var a = {width: i.width(), height: (x ? i.innerHeight() : i[0].offsetHeight) - s - o};
                return q() ? a["-moz-transform"] = a.transform = "translate(" + r.left + "px," + r.top + "px)" : (a.left = r.left, a.top = r.top), a
            }
        }
    });
    var F = "iframe", W = "//about:blank", R = function (t) {
        if (e.currTemplate[F]) {
            var n = e.currTemplate[F].find("iframe");
            n.length && (t || (n[0].src = W), e.isIE8 && n.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule(F, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                e.types.push(F), _("BeforeChange", function (t, e, n) {
                    e !== n && (e === F ? R() : n === F && R(!0))
                }), _(a + "." + F, function () {
                    R()
                })
            }, getIframe: function (n, i) {
                var r = n.src, o = e.st.iframe;
                t.each(o.patterns, function () {
                    return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                });
                var s = {};
                return o.srcAction && (s[o.srcAction] = r), e._parseMarkup(i, s, n), e.updateStatus("ready"), i
            }
        }
    });
    var B = function (t) {
        var n = e.items.length;
        return t > n - 1 ? t - n : 0 > t ? n + t : t
    }, X = function (t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var n = e.st.gallery, r = ".mfp-gallery";
                return e.direction = !0, !(!n || !n.enabled) && (o += " mfp-gallery", _(p + r, function () {
                    n.navigateByImgClick && e.wrap.on("click" + r, ".mfp-img", function () {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), i.on("keydown" + r, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), _("UpdateStatus" + r, function (t, n) {
                    n.text && (n.text = X(n.text, e.currItem.index, e.items.length))
                }), _(h + r, function (t, i, r, o) {
                    var s = e.items.length;
                    r.counter = s > 1 ? X(n.tCounter, o.index, s) : ""
                }), _("BuildControls" + r, function () {
                    if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                        var i = n.arrowMarkup, r = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y), o = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        r.click(function () {
                            e.prev()
                        }), o.click(function () {
                            e.next()
                        }), e.container.append(r.add(o))
                    }
                }), _(d + r, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void _(a + r, function () {
                    i.off(r), e.wrap.off("click" + r), e.arrowRight = e.arrowLeft = null
                }))
            }, next: function () {
                e.direction = !0, e.index = B(e.index + 1), e.updateItemHTML()
            }, prev: function () {
                e.direction = !1, e.index = B(e.index - 1), e.updateItemHTML()
            }, goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, n = e.st.gallery.preload, i = Math.min(n[0], e.items.length), r = Math.min(n[1], e.items.length);
                for (t = 1; t <= (e.direction ? r : i); t++)e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? i : r); t++)e._preloadItem(e.index - t)
            }, _preloadItem: function (n) {
                if (n = B(n), !e.items[n].preloaded) {
                    var i = e.items[n];
                    i.parsed || (i = e.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    t.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, n = t.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (_("ImageHasSize." + U, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / n, width: "100%"})
                    }), _("ElementParse." + U, function (e, i) {
                        i.src = t.replaceSrc(i, n)
                    }))
                }
            }
        }
    }), k()
});