function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function animateVisible(t, e) {
    if ("boolean" == typeof t && e) {
        var n = parseFloat(getComputedStyle(e).getPropertyValue("--animation-duration"));
        t ? (e.classList.remove("hidden"), setTimeout(function() {
            e.style.maxHeight = "300px"
        }, n)) : (e.style.maxHeight = "0", setTimeout(function() {
            e.classList.add("hidden")
        }, n))
    }
}
async function confirmDelete(t) {
    let e = t.dataset.confirmDelete,
        n = t.dataset.deleteItem,
        i = prompt(e + "Type DELETE to confirm deletion.");
    if (null !== i)
        if ("DELETE" === (i = i.toUpperCase())) try {
            const e = await fetch(t.href, {
                method: "DELETE",
                headers: {
                    "X-CSRF-Token": getCSRFToken(),
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            });
            if (e.ok) {
                const t = e.headers.get("content-type");
                if (t && -1 !== t.indexOf("application/json")) {
                    const t = await e.json();
                    alert(t.msg)
                } else alert("The " + n + " has been deleted");
                window.location.href = "/my-profile"
            } else alert("Failed to delete the " + n + ".")
        } catch (o) {
            console.error("Error:", o), alert("Network error or unauthorized request.")
        } else alert("Deletion canceled. You did not type 'DELETE'.")
}

function getCSRFToken() {
    return document.querySelector("meta[name='csrf-token']").getAttribute("content")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, e) {
            function n(t, e) {
                return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
            }
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                o = i.length >>> 0;
            if (0 === o) return !1;
            for (var r = 0 | e, s = Math.max(r >= 0 ? r : o - Math.abs(r), 0); s < o;) {
                if (n(i[s], t)) return !0;
                s++
            }
            return !1
        }
    }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
        value: function(t) {
            "use strict";
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (null != i)
                    for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
            }
            return e
        },
        writable: !0,
        configurable: !0
    }), Object.entries || (Object.entries = function(t) {
        for (var e = Object.keys(t), n = e.length, i = new Array(n); n--;) i[n] = [e[n], t[e[n]]];
        return i
    }), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(t) {
        t.hasOwnProperty("replaceWith") || Object.defineProperty(t, "replaceWith", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = document.createDocumentFragment();
                t.forEach(function(t) {
                    var n = t instanceof Node;
                    e.appendChild(n ? t : document.createTextNode(String(t)))
                }), this.parentNode.replaceChild(e, this)
            }
        })
    }),
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    function(t, e) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, n) {
        "use strict";

        function i(t, e, n) {
            var i, o = (e = e || at).createElement("script");
            if (o.text = t, n)
                for (i in xt) n[i] && (o[i] = n[i]);
            e.head.appendChild(o).parentNode.removeChild(o)
        }

        function o(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? pt[ft.call(t)] || "object" : typeof t
        }

        function r(t) {
            var e = !!t && "length" in t && t.length,
                n = o(t);
            return !bt(t) && !wt(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function s(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }

        function a(t, e, n) {
            return bt(e) ? St.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? St.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? St.grep(t, function(t) {
                return ht.call(e, t) > -1 !== n
            }) : St.filter(e, t, n)
        }

        function l(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function c(t) {
            var e = {};
            return St.each(t.match(Rt) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function u(t) {
            return t
        }

        function d(t) {
            throw t
        }

        function h(t, e, n, i) {
            var o;
            try {
                t && bt(o = t.promise) ? o.call(t).done(e).fail(n) : t && bt(o = t.then) ? o.call(t, e, n) : e.apply(undefined, [t].slice(i))
            } catch (t) {
                n.apply(undefined, [t])
            }
        }

        function p() {
            at.removeEventListener("DOMContentLoaded", p), t.removeEventListener("load", p), St.ready()
        }

        function f(t, e) {
            return e.toUpperCase()
        }

        function m(t) {
            return t.replace(qt, "ms-").replace($t, f)
        }

        function g() {
            this.expando = St.expando + g.uid++
        }

        function v(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Wt.test(t) ? JSON.parse(t) : t)
        }

        function y(t, n, i) {
            var o;
            if (i === undefined && 1 === t.nodeType)
                if (o = "data-" + n.replace(zt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(o))) {
                    try {
                        i = v(i)
                    } catch (e) {}
                    Bt.set(t, n, i)
                } else i = undefined;
            return i
        }

        function b(t, e, n, i) {
            var o, r, s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return St.css(t, e, "")
                },
                l = a(),
                c = n && n[3] || (St.cssNumber[e] ? "" : "px"),
                u = (St.cssNumber[e] || "px" !== c && +l) && Vt.exec(St.css(t, e));
            if (u && u[3] !== c) {
                for (l /= 2, c = c || u[3], u = +l || 1; s--;) St.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
                u *= 2, St.style(t, e, u + c), n = n || []
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function w(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Yt[i];
            return o || (e = n.body.appendChild(n.createElement(i)), o = St.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Yt[i] = o, o)
        }

        function x(t, e) {
            for (var n, i, o = [], r = 0, s = t.length; r < s; r++)(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = Ht.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Kt(i) && (o[r] = w(i))) : "none" !== n && (o[r] = "none", Ht.set(i, "display", n)));
            for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
            return t
        }

        function C(t, e) {
            var n;
            return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], e === undefined || e && s(t, e) ? St.merge([t], n) : n
        }

        function S(t, e) {
            for (var n = 0, i = t.length; n < i; n++) Ht.set(t[n], "globalEval", !e || Ht.get(e[n], "globalEval"))
        }

        function E(t, e, n, i, r) {
            for (var s, a, l, c, u, d, h = e.createDocumentFragment(), p = [], f = 0, m = t.length; f < m; f++)
                if ((s = t[f]) || 0 === s)
                    if ("object" === o(s)) St.merge(p, s.nodeType ? [s] : s);
                    else if (ie.test(s)) {
                for (a = a || h.appendChild(e.createElement("div")), l = (Jt.exec(s) || ["", ""])[1].toLowerCase(), c = te[l] || te._default, a.innerHTML = c[1] + St.htmlPrefilter(s) + c[2], d = c[0]; d--;) a = a.lastChild;
                St.merge(p, a.childNodes), (a = h.firstChild).textContent = ""
            } else p.push(e.createTextNode(s));
            for (h.textContent = "", f = 0; s = p[f++];)
                if (i && St.inArray(s, i) > -1) r && r.push(s);
                else if (u = St.contains(s.ownerDocument, s), a = C(h.appendChild(s), "script"), u && S(a), n)
                for (d = 0; s = a[d++];) Zt.test(s.type || "") && n.push(s);
            return h
        }

        function k() {
            return !0
        }

        function T() {
            return !1
        }

        function _() {
            try {
                return at.activeElement
            } catch (t) {}
        }

        function A(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n, n = undefined), e) A(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = T;
            else if (!o) return t;
            return 1 === r && (s = o, (o = function(t) {
                return St().off(t), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = St.guid++)), t.each(function() {
                St.event.add(this, e, o, i, n)
            })
        }

        function L(t, e) {
            return s(t, "table") && s(11 !== e.nodeType ? e : e.firstChild, "tr") && St(t).children("tbody")[0] || t
        }

        function D(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function P(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function I(t, e) {
            var n, i, o, r, s, a, l, c;
            if (1 === e.nodeType) {
                if (Ht.hasData(t) && (r = Ht.access(t), s = Ht.set(e, r), c = r.events))
                    for (o in delete s.handle, s.events = {}, c)
                        for (n = 0, i = c[o].length; n < i; n++) St.event.add(e, o, c[o][n]);
                Bt.hasData(t) && (a = Bt.access(t), l = St.extend({}, a), Bt.set(e, l))
            }
        }

        function O(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function R(t, e, n, o) {
            e = ut.apply([], e);
            var r, s, a, l, c, u, d = 0,
                h = t.length,
                p = h - 1,
                f = e[0],
                m = bt(f);
            if (m || h > 1 && "string" == typeof f && !yt.checkClone && ue.test(f)) return t.each(function(i) {
                var r = t.eq(i);
                m && (e[0] = f.call(this, i, r.html())), R(r, e, n, o)
            });
            if (h && (s = (r = E(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
                for (l = (a = St.map(C(r, "script"), D)).length; d < h; d++) c = r, d !== p && (c = St.clone(c, !0, !0), l && St.merge(a, C(c, "script"))), n.call(t[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, St.map(a, P), d = 0; d < l; d++) c = a[d], Zt.test(c.type || "") && !Ht.access(c, "globalEval") && St.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? St._evalUrl && St._evalUrl(c.src) : i(c.textContent.replace(de, ""), u, c))
            }
            return t
        }

        function j(t, e, n) {
            for (var i, o = e ? St.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || St.cleanData(C(i)), i.parentNode && (n && St.contains(i.ownerDocument, i) && S(C(i, "script")), i.parentNode.removeChild(i));
            return t
        }

        function N(t, e, n) {
            var i, o, r, s, a = t.style;
            return (n = n || pe(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || St.contains(t.ownerDocument, t) || (s = St.style(t, e)), !yt.pixelBoxStyles() && he.test(s) && fe.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), s !== undefined ? s + "" : s
        }

        function M(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }

        function q(t) {
            if (t in we) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = be.length; n--;)
                if ((t = be[n] + e) in we) return t
        }

        function $(t) {
            var e = St.cssProps[t];
            return e || (e = St.cssProps[t] = q(t) || t), e
        }

        function F(t, e, n) {
            var i = Vt.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }

        function H(t, e, n, i, o, r) {
            var s = "width" === e ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += St.css(t, n + Qt[s], !0, o)), i ? ("content" === n && (l -= St.css(t, "padding" + Qt[s], !0, o)), "margin" !== n && (l -= St.css(t, "border" + Qt[s] + "Width", !0, o))) : (l += St.css(t, "padding" + Qt[s], !0, o), "padding" !== n ? l += St.css(t, "border" + Qt[s] + "Width", !0, o) : a += St.css(t, "border" + Qt[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l
        }

        function B(t, e, n) {
            var i = pe(t),
                o = N(t, e, i),
                r = "border-box" === St.css(t, "boxSizing", !1, i),
                s = r;
            if (he.test(o)) {
                if (!n) return o;
                o = "auto"
            }
            return s = s && (yt.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === St.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + H(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
        }

        function W(t, e, n, i, o) {
            return new W.prototype.init(t, e, n, i, o)
        }

        function z() {
            Ce && (!1 === at.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(z) : t.setTimeout(z, St.fx.interval), St.fx.tick())
        }

        function U() {
            return t.setTimeout(function() {
                xe = undefined
            }), xe = Date.now()
        }

        function V(t, e) {
            var n, i = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = Qt[i])] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function Q(t, e, n) {
            for (var i, o = (Y.tweeners[e] || []).concat(Y.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function K(t, e, n) {
            var i, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
                h = this,
                p = {},
                f = t.style,
                m = t.nodeType && Kt(t),
                g = Ht.get(t, "fxshow");
            for (i in n.queue || (null == (s = St._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, St.queue(t, "fx").length || s.empty.fire()
                    })
                })), e)
                if (o = e[i], Se.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || g[i] === undefined) continue;
                        m = !0
                    }
                    p[i] = g && g[i] || St.style(t, i)
                } if ((l = !St.isEmptyObject(e)) || !St.isEmptyObject(p))
                for (i in d && 1 === t.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = g && g.display) && (c = Ht.get(t, "display")), "none" === (u = St.css(t, "display")) && (c ? u = c : (x([t], !0), c = t.style.display || c, u = St.css(t, "display"), x([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === St.css(t, "float") && (l || (h.done(function() {
                        f.display = c
                    }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                        f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                    })), l = !1, p) l || (g ? "hidden" in g && (m = g.hidden) : g = Ht.access(t, "fxshow", {
                    display: c
                }), r && (g.hidden = !m), m && x([t], !0), h.done(function() {
                    for (i in m || x([t]), Ht.remove(t, "fxshow"), p) St.style(t, i, p[i])
                })), l = Q(m ? g[i] : 0, i, h), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }

        function X(t, e) {
            var n, i, o, r, s;
            for (n in t)
                if (o = e[i = m(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = St.cssHooks[i]) && "expand" in s)
                    for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                else e[i] = o
        }

        function Y(t, e, n) {
            var i, o, r = 0,
                s = Y.prefilters.length,
                a = St.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = xe || U(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                    return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: St.extend({}, e),
                    opts: St.extend(!0, {
                        specialEasing: {},
                        easing: St.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: xe || U(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = St.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (X(u, c.opts.specialEasing); r < s; r++)
                if (i = Y.prefilters[r].call(c, t, u, c.opts)) return bt(i.stop) && (St._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
            return St.map(u, Q, c), bt(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), St.fx.timer(St.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }

        function G(t) {
            return (t.match(Rt) || []).join(" ")
        }

        function J(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Z(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(Rt) || []
        }

        function tt(t, e, n, i) {
            var r;
            if (Array.isArray(e)) St.each(e, function(e, o) {
                n || je.test(t) ? i(t, o) : tt(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
            });
            else if (n || "object" !== o(e)) i(t, e);
            else
                for (r in e) tt(t + "[" + r + "]", e[r], n, i)
        }

        function et(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(Rt) || [];
                if (bt(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function nt(t, e, n, i) {
            function o(a) {
                var l;
                return r[a] = !0, St.each(t[a] || [], function(t, a) {
                    var c = a(e, n, i);
                    return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                s = t === Qe;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function it(t, e) {
            var n, i, o = St.ajaxSettings.flatOptions || {};
            for (n in e) e[n] !== undefined && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && St.extend(!0, t, i), t
        }

        function ot(t, e, n) {
            for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), i === undefined && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in a)
                    if (a[o] && a[o].test(i)) {
                        l.unshift(o);
                        break
                    } if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        r = o;
                        break
                    }
                    s || (s = o)
                }
                r = r || s
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function rt(t, n, i, o) {
            var r, s, a, l, c, u = {},
                d = t.dataTypes.slice();
            if (d[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (s = d.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = n), !c && o && t.dataFilter && (n = t.dataFilter(n, t.dataType)), c = s, s = d.shift())
                    if ("*" === s) s = c;
                    else if ("*" !== c && c !== s) {
                if (!(a = u[c + " " + s] || u["* " + s]))
                    for (r in u)
                        if ((l = r.split(" "))[1] === s && (a = u[c + " " + l[0]] || u["* " + l[0]])) {
                            !0 === a ? a = u[r] : !0 !== u[r] && (s = l[0], d.unshift(l[1]));
                            break
                        } if (!0 !== a)
                    if (a && t.throws) n = a(n);
                    else try {
                        n = a(n)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + c + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: n
            }
        }
        var st = [],
            at = t.document,
            lt = Object.getPrototypeOf,
            ct = st.slice,
            ut = st.concat,
            dt = st.push,
            ht = st.indexOf,
            pt = {},
            ft = pt.toString,
            mt = pt.hasOwnProperty,
            gt = mt.toString,
            vt = gt.call(Object),
            yt = {},
            bt = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            wt = function(t) {
                return null != t && t === t.window
            },
            xt = {
                type: !0,
                src: !0,
                noModule: !0
            },
            Ct = "3.3.1",
            St = function(t, e) {
                return new St.fn.init(t, e)
            },
            Et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        St.fn = St.prototype = {
            jquery: Ct,
            constructor: St,
            length: 0,
            toArray: function() {
                return ct.call(this)
            },
            get: function(t) {
                return null == t ? ct.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = St.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return St.each(this, t)
            },
            map: function(t) {
                return this.pushStack(St.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(ct.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: dt,
            sort: st.sort,
            splice: st.splice
        }, St.extend = St.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || bt(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], s !== (i = t[e]) && (c && i && (St.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && St.isPlainObject(n) ? n : {}, s[e] = St.extend(c, r, i)) : i !== undefined && (s[e] = i));
            return s
        }, St.extend({
            expando: "jQuery" + (Ct + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== ft.call(t)) && (!(e = lt(t)) || "function" == typeof(n = mt.call(e, "constructor") && e.constructor) && gt.call(n) === vt)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t) {
                i(t)
            },
            each: function(t, e) {
                var n, i = 0;
                if (r(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(Et, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (r(Object(t)) ? St.merge(n, "string" == typeof t ? [t] : t) : dt.call(n, t)), n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : ht.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
                return t.length = o, t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, o, s = 0,
                    a = [];
                if (r(t))
                    for (i = t.length; s < i; s++) null != (o = e(t[s], s, n)) && a.push(o);
                else
                    for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
                return ut.apply([], a)
            },
            guid: 1,
            support: yt
        }), "function" == typeof Symbol && (St.fn[Symbol.iterator] = st[Symbol.iterator]), St.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            pt["[object " + e + "]"] = e.toLowerCase()
        });
        var kt =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(t) {
                function n(t, e, n, i) {
                    var o, r, s, a, l, c, u, d = e && e.ownerDocument,
                        p = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
                    if (!i && ((e ? e.ownerDocument || e : B) !== R && O(e), e = e || R, N)) {
                        if (11 !== p && (l = yt.exec(t)))
                            if (o = l[1]) {
                                if (9 === p) {
                                    if (!(s = e.getElementById(o))) return n;
                                    if (s.id === o) return n.push(s), n
                                } else if (d && (s = d.getElementById(o)) && F(e, s) && s.id === o) return n.push(s), n
                            } else {
                                if (l[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                                if ((o = l[3]) && S.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(o)), n
                            } if (S.qsa && !Q[t + " "] && (!M || !M.test(t))) {
                            if (1 !== p) d = e, u = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(Ct, St) : e.setAttribute("id", a = H), r = (c = _(t)).length; r--;) c[r] = "#" + a + " " + f(c[r]);
                                u = c.join(","), d = bt.test(t) && h(e.parentNode) || e
                            }
                            if (u) try {
                                return Z.apply(n, d.querySelectorAll(u)), n
                            } catch (m) {} finally {
                                a === H && e.removeAttribute("id")
                            }
                        }
                    }
                    return L(t.replace(lt, "$1"), e, n, i)
                }

                function i() {
                    function t(n, i) {
                        return e.push(n + " ") > E.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function o(t) {
                    return t[H] = !0, t
                }

                function r(t) {
                    var n = R.createElement("fieldset");
                    try {
                        return !!t(n)
                    } catch (e) {
                        return !1
                    } finally {
                        n.parentNode && n.parentNode.removeChild(n), n = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function c(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function d(t) {
                    return o(function(e) {
                        return e = +e, o(function(n, i) {
                            for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function h(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function p() {}

                function f(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                    return i
                }

                function m(t, e, n) {
                    var i = e.dir,
                        o = e.next,
                        r = o || i,
                        s = n && "parentNode" === r,
                        a = z++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || s) return t(e, n, o);
                        return !1
                    } : function(e, n, l) {
                        var c, u, d, h = [W, a];
                        if (l) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || s) && t(e, n, l)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || s)
                                    if (u = (d = e[H] || (e[H] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                    else {
                                        if ((c = u[r]) && c[0] === W && c[1] === a) return h[2] = c[2];
                                        if (u[r] = h, h[2] = t(e, n, l)) return !0
                                    } return !1
                    }
                }

                function g(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function v(t, e, i) {
                    for (var o = 0, r = e.length; o < r; o++) n(t, e[o], i);
                    return i
                }

                function y(t, e, n, i, o) {
                    for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
                    return s
                }

                function b(t, e, n, i, r, s) {
                    return i && !i[H] && (i = b(i)), r && !r[H] && (r = b(r, s)), o(function(o, s, a, l) {
                        var c, u, d, h = [],
                            p = [],
                            f = s.length,
                            m = o || v(e || "*", a.nodeType ? [a] : a, []),
                            g = !t || !o && e ? m : y(m, h, t, a, l),
                            b = n ? r || (o ? t : f || i) ? [] : s : g;
                        if (n && n(g, b, a, l), i)
                            for (c = y(b, p), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(g[p[u]] = d));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(g[u] = d);
                                    r(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = r ? et(o, d) : h[u]) > -1 && (o[c] = !(s[c] = d))
                            }
                        } else b = y(b === s ? b.splice(f, b.length) : b), r ? r(null, s, b, l) : Z.apply(s, b)
                    })
                }

                function w(t) {
                    for (var e, n, i, o = t.length, r = E.relative[t[0].type], s = r || E.relative[" "], a = r ? 1 : 0, l = m(function(t) {
                            return t === e
                        }, s, !0), c = m(function(t) {
                            return et(e, t) > -1
                        }, s, !0), u = [function(t, n, i) {
                            var o = !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                            return e = null, o
                        }]; a < o; a++)
                        if (n = E.relative[t[a].type]) u = [m(g(u), n)];
                        else {
                            if ((n = E.filter[t[a].type].apply(null, t[a].matches))[H]) {
                                for (i = ++a; i < o && !E.relative[t[i].type]; i++);
                                return b(a > 1 && g(u), a > 1 && f(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(lt, "$1"), n, a < i && w(t.slice(a, i)), i < o && w(t = t.slice(i)), i < o && f(t))
                            }
                            u.push(n)
                        } return g(u)
                }

                function x(t, e) {
                    var i = e.length > 0,
                        r = t.length > 0,
                        s = function(o, s, a, l, c) {
                            var u, d, h, p = 0,
                                f = "0",
                                m = o && [],
                                g = [],
                                v = D,
                                b = o || r && E.find.TAG("*", c),
                                w = W += null == v ? 1 : Math.random() || .1,
                                x = b.length;
                            for (c && (D = s === R || s || c); f !== x && null != (u = b[f]); f++) {
                                if (r && u) {
                                    for (d = 0, s || u.ownerDocument === R || (O(u), a = !N); h = t[d++];)
                                        if (h(u, s || R, a)) {
                                            l.push(u);
                                            break
                                        } c && (W = w)
                                }
                                i && ((u = !h && u) && p--, o && m.push(u))
                            }
                            if (p += f, i && f !== p) {
                                for (d = 0; h = e[d++];) h(m, g, s, a);
                                if (o) {
                                    if (p > 0)
                                        for (; f--;) m[f] || g[f] || (g[f] = G.call(l));
                                    g = y(g)
                                }
                                Z.apply(l, g), c && !o && g.length > 0 && p + e.length > 1 && n.uniqueSort(l)
                            }
                            return c && (W = w, D = v), m
                        };
                    return i ? o(s) : s
                }
                var C, S, E, k, T, _, A, L, D, P, I, O, R, j, N, M, q, $, F, H = "sizzle" + 1 * new Date,
                    B = t.document,
                    W = 0,
                    z = 0,
                    U = i(),
                    V = i(),
                    Q = i(),
                    K = function(t, e) {
                        return t === e && (I = !0), 0
                    },
                    X = {}.hasOwnProperty,
                    Y = [],
                    G = Y.pop,
                    J = Y.push,
                    Z = Y.push,
                    tt = Y.slice,
                    et = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    it = "[\\x20\\t\\r\\n\\f]",
                    ot = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    rt = "\\[" + it + "*(" + ot + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
                    st = ":(" + ot + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                    at = new RegExp(it + "+", "g"),
                    lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                    ct = new RegExp("^" + it + "*," + it + "*"),
                    ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                    dt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                    ht = new RegExp(st),
                    pt = new RegExp("^" + ot + "$"),
                    ft = {
                        ID: new RegExp("^#(" + ot + ")"),
                        CLASS: new RegExp("^\\.(" + ot + ")"),
                        TAG: new RegExp("^(" + ot + "|[*])"),
                        ATTR: new RegExp("^" + rt),
                        PSEUDO: new RegExp("^" + st),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                    },
                    mt = /^(?:input|select|textarea|button)$/i,
                    gt = /^h\d$/i,
                    vt = /^[^{]+\{\s*\[native \w/,
                    yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /[+~]/,
                    wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                    xt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    Ct = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    St = function(t, e) {
                        return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    Et = function() {
                        O()
                    },
                    kt = m(function(t) {
                        return !0 === t.disabled && ("form" in t || "label" in t)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Z.apply(Y = tt.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
                } catch (e) {
                    Z = {
                        apply: Y.length ? function(t, e) {
                            J.apply(t, tt.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                for (C in S = n.support = {}, T = n.isXML = function(t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, O = n.setDocument = function(t) {
                        var e, n, i = t ? t.ownerDocument || t : B;
                        return i !== R && 9 === i.nodeType && i.documentElement ? (j = (R = i).documentElement, N = !T(R), B !== R && (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Et, !1) : n.attachEvent && n.attachEvent("onunload", Et)), S.attributes = r(function(t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), S.getElementsByTagName = r(function(t) {
                            return t.appendChild(R.createComment("")), !t.getElementsByTagName("*").length
                        }), S.getElementsByClassName = vt.test(R.getElementsByClassName), S.getById = r(function(t) {
                            return j.appendChild(t).id = H, !R.getElementsByName || !R.getElementsByName(H).length
                        }), S.getById ? (E.filter.ID = function(t) {
                            var e = t.replace(wt, xt);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }, E.find.ID = function(t, e) {
                            if ("undefined" != typeof e.getElementById && N) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }) : (E.filter.ID = function(t) {
                            var e = t.replace(wt, xt);
                            return function(t) {
                                var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }, E.find.ID = function(t, e) {
                            if ("undefined" != typeof e.getElementById && N) {
                                var n, i, o, r = e.getElementById(t);
                                if (r) {
                                    if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                                    for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                        if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                                }
                                return []
                            }
                        }), E.find.TAG = S.getElementsByTagName ? function(t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : S.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                            var n, i = [],
                                o = 0,
                                r = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return r
                        }, E.find.CLASS = S.getElementsByClassName && function(t, e) {
                            if ("undefined" != typeof e.getElementsByClassName && N) return e.getElementsByClassName(t)
                        }, q = [], M = [], (S.qsa = vt.test(R.querySelectorAll)) && (r(function(t) {
                            j.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll("[id~=" + H + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + H + "+*").length || M.push(".#.+[+~]")
                        }), r(function(t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = R.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), j.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                        })), (S.matchesSelector = vt.test($ = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(t) {
                            S.disconnectedMatch = $.call(t, "*"), $.call(t, "[s!='']:x"), q.push("!=", st)
                        }), M = M.length && new RegExp(M.join("|")), q = q.length && new RegExp(q.join("|")), e = vt.test(j.compareDocumentPosition), F = e || vt.test(j.contains) ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function(t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, K = e ? function(t, e) {
                            if (t === e) return I = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !S.sortDetached && e.compareDocumentPosition(t) === n ? t === R || t.ownerDocument === B && F(B, t) ? -1 : e === R || e.ownerDocument === B && F(B, e) ? 1 : P ? et(P, t) - et(P, e) : 0 : 4 & n ? -1 : 1)
                        } : function(t, e) {
                            if (t === e) return I = !0, 0;
                            var n, i = 0,
                                o = t.parentNode,
                                r = e.parentNode,
                                s = [t],
                                l = [e];
                            if (!o || !r) return t === R ? -1 : e === R ? 1 : o ? -1 : r ? 1 : P ? et(P, t) - et(P, e) : 0;
                            if (o === r) return a(t, e);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (n = e; n = n.parentNode;) l.unshift(n);
                            for (; s[i] === l[i];) i++;
                            return i ? a(s[i], l[i]) : s[i] === B ? -1 : l[i] === B ? 1 : 0
                        }, R) : R
                    }, n.matches = function(t, e) {
                        return n(t, null, null, e)
                    }, n.matchesSelector = function(t, i) {
                        if ((t.ownerDocument || t) !== R && O(t), i = i.replace(dt, "='$1']"), S.matchesSelector && N && !Q[i + " "] && (!q || !q.test(i)) && (!M || !M.test(i))) try {
                            var o = $.call(t, i);
                            if (o || S.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o
                        } catch (e) {}
                        return n(i, R, null, [t]).length > 0
                    }, n.contains = function(t, e) {
                        return (t.ownerDocument || t) !== R && O(t), F(t, e)
                    }, n.attr = function(t, e) {
                        (t.ownerDocument || t) !== R && O(t);
                        var n = E.attrHandle[e.toLowerCase()],
                            i = n && X.call(E.attrHandle, e.toLowerCase()) ? n(t, e, !N) : undefined;
                        return i !== undefined ? i : S.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }, n.escape = function(t) {
                        return (t + "").replace(Ct, St)
                    }, n.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, n.uniqueSort = function(t) {
                        var e, n = [],
                            i = 0,
                            o = 0;
                        if (I = !S.detectDuplicates, P = !S.sortStable && t.slice(0), t.sort(K), I) {
                            for (; e = t[o++];) e === t[o] && (i = n.push(o));
                            for (; i--;) t.splice(n[i], 1)
                        }
                        return P = null, t
                    }, k = n.getText = function(t) {
                        var e, n = "",
                            i = 0,
                            o = t.nodeType;
                        if (o) {
                            if (1 === o || 9 === o || 11 === o) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                            } else if (3 === o || 4 === o) return t.nodeValue
                        } else
                            for (; e = t[i++];) n += k(e);
                        return n
                    }, (E = n.selectors = {
                        cacheLength: 50,
                        createPseudo: o,
                        match: ft,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(t) {
                                return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = _(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(wt, xt).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                } : function(t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function(t) {
                                var e = U[t + " "];
                                return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && U(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, e, i) {
                                return function(o) {
                                    var r = n.attr(o, t);
                                    return null == r ? "!=" === e : !e || (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === e && (r === i || r.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, o) {
                                var r = "nth" !== t.slice(0, 3),
                                    s = "last" !== t.slice(-4),
                                    a = "of-type" === e;
                                return 1 === i && 0 === o ? function(t) {
                                    return !!t.parentNode
                                } : function(e, n, l) {
                                    var c, u, d, h, p, f, m = r !== s ? "nextSibling" : "previousSibling",
                                        g = e.parentNode,
                                        v = a && e.nodeName.toLowerCase(),
                                        y = !l && !a,
                                        b = !1;
                                    if (g) {
                                        if (r) {
                                            for (; m;) {
                                                for (h = e; h = h[m];)
                                                    if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                f = m = "only" === t && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                            for (b = (p = (c = (u = (d = (h = g)[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === W && c[1]) && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                                if (1 === h.nodeType && ++b && h === e) {
                                                    u[t] = [W, p, b];
                                                    break
                                                }
                                        } else if (y && (b = p = (c = (u = (d = (h = e)[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] || [])[0] === W && c[1]), !1 === b)
                                            for (;
                                                (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[H] || (h[H] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[t] = [W, b]), h !== e)););
                                        return (b -= o) === i || b % i == 0 && b / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, e) {
                                var i, r = E.pseudos[t] || E.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                                return r[H] ? r(e) : r.length > 1 ? (i = [t, t, "", e], E.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                                    for (var i, o = r(t, e), s = o.length; s--;) t[i = et(t, o[s])] = !(n[i] = o[s])
                                }) : function(t) {
                                    return r(t, 0, i)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: o(function(t) {
                                var e = [],
                                    n = [],
                                    i = A(t.replace(lt, "$1"));
                                return i[H] ? o(function(t, e, n, o) {
                                    for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                                }) : function(t, o, r) {
                                    return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                                }
                            }),
                            has: o(function(t) {
                                return function(e) {
                                    return n(t, e).length > 0
                                }
                            }),
                            contains: o(function(t) {
                                return t = t.replace(wt, xt),
                                    function(e) {
                                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: o(function(t) {
                                return pt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                                    function(e) {
                                        var n;
                                        do {
                                            if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var n = t.location && t.location.hash;
                                return n && n.slice(1) === e.id
                            },
                            root: function(t) {
                                return t === j
                            },
                            focus: function(t) {
                                return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: u(!1),
                            disabled: u(!0),
                            checked: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !E.pseudos.empty(t)
                            },
                            header: function(t) {
                                return gt.test(t.nodeName)
                            },
                            input: function(t) {
                                return mt.test(t.nodeName)
                            },
                            button: function(t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function(t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: d(function() {
                                return [0]
                            }),
                            last: d(function(t, e) {
                                return [e - 1]
                            }),
                            eq: d(function(t, e, n) {
                                return [n < 0 ? n + e : n]
                            }),
                            even: d(function(t, e) {
                                for (var n = 0; n < e; n += 2) t.push(n);
                                return t
                            }),
                            odd: d(function(t, e) {
                                for (var n = 1; n < e; n += 2) t.push(n);
                                return t
                            }),
                            lt: d(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                                return t
                            }),
                            gt: d(function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                return t
                            })
                        }
                    }).pseudos.nth = E.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) E.pseudos[C] = l(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) E.pseudos[C] = c(C);
                return p.prototype = E.filters = E.pseudos, E.setFilters = new p, _ = n.tokenize = function(t, e) {
                    var i, o, r, s, a, l, c, u = V[t + " "];
                    if (u) return e ? 0 : u.slice(0);
                    for (a = t, l = [], c = E.preFilter; a;) {
                        for (s in i && !(o = ct.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = ut.exec(a)) && (i = o.shift(), r.push({
                                value: i,
                                type: o[0].replace(lt, " ")
                            }), a = a.slice(i.length)), E.filter) !(o = ft[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: s,
                            matches: o
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? n.error(t) : V(t, l).slice(0)
                }, A = n.compile = function(t, e) {
                    var n, i = [],
                        o = [],
                        r = Q[t + " "];
                    if (!r) {
                        for (e || (e = _(t)), n = e.length; n--;)(r = w(e[n]))[H] ? i.push(r) : o.push(r);
                        (r = Q(t, x(o, i))).selector = t
                    }
                    return r
                }, L = n.select = function(t, e, n, i) {
                    var o, r, s, a, l, c = "function" == typeof t && t,
                        u = !i && _(t = c.selector || t);
                    if (n = n || [], 1 === u.length) {
                        if ((r = u[0] = u[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && N && E.relative[r[1].type]) {
                            if (!(e = (E.find.ID(s.matches[0].replace(wt, xt), e) || [])[0])) return n;
                            c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                        }
                        for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !E.relative[a = s.type]);)
                            if ((l = E.find[a]) && (i = l(s.matches[0].replace(wt, xt), bt.test(r[0].type) && h(e.parentNode) || e))) {
                                if (r.splice(o, 1), !(t = i.length && f(r))) return Z.apply(n, i), n;
                                break
                            }
                    }
                    return (c || A(t, u))(i, e, !N, n, !e || bt.test(t) && h(e.parentNode) || e), n
                }, S.sortStable = H.split("").sort(K).join("") === H, S.detectDuplicates = !!I, O(), S.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(R.createElement("fieldset"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), S.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(nt, function(t, e, n) {
                    var i;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), n
            }(t);
        St.find = kt, St.expr = kt.selectors, St.expr[":"] = St.expr.pseudos, St.uniqueSort = St.unique = kt.uniqueSort, St.text = kt.getText, St.isXMLDoc = kt.isXML, St.contains = kt.contains, St.escapeSelector = kt.escape;
        var Tt = function(t, e, n) {
                for (var i = [], o = n !== undefined;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && St(t).is(n)) break;
                        i.push(t)
                    } return i
            },
            _t = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            At = St.expr.match.needsContext,
            Lt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        St.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? St.find.matchesSelector(i, t) ? [i] : [] : St.find.matches(t, St.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, St.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(St(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (St.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) St.find(t, o[e], n);
                return i > 1 ? St.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(a(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(a(this, t || [], !0))
            },
            is: function(t) {
                return !!a(this, "string" == typeof t && At.test(t) ? St(t) : t || [], !1).length
            }
        });
        var Dt, Pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (St.fn.init = function(t, e, n) {
            var i, o;
            if (!t) return this;
            if (n = n || Dt, "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Pt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof St ? e[0] : e, St.merge(this, St.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : at, !0)), Lt.test(i[1]) && St.isPlainObject(e))
                        for (i in e) bt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (o = at.getElementById(i[2])) && (this[0] = o, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : bt(t) ? n.ready !== undefined ? n.ready(t) : t(St) : St.makeArray(t, this)
        }).prototype = St.fn, Dt = St(at);
        var It = /^(?:parents|prev(?:Until|All))/,
            Ot = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        St.fn.extend({
            has: function(t) {
                var e = St(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (St.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    s = "string" != typeof t && St(t);
                if (!At.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && St.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            } return this.pushStack(r.length > 1 ? St.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ht.call(St(t), this[0]) : ht.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(St.uniqueSort(St.merge(this.get(), St(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), St.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Tt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return Tt(t, "parentNode", n)
            },
            next: function(t) {
                return l(t, "nextSibling")
            },
            prev: function(t) {
                return l(t, "previousSibling")
            },
            nextAll: function(t) {
                return Tt(t, "nextSibling")
            },
            prevAll: function(t) {
                return Tt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return Tt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return Tt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return _t((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return _t(t.firstChild)
            },
            contents: function(t) {
                return s(t, "iframe") ? t.contentDocument : (s(t, "template") && (t = t.content || t), St.merge([], t.childNodes))
            }
        }, function(t, e) {
            St.fn[t] = function(n, i) {
                var o = St.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = St.filter(i, o)), this.length > 1 && (Ot[t] || St.uniqueSort(o), It.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var Rt = /[^\x20\t\r\n\f]+/g;
        St.Callbacks = function(t) {
            t = "string" == typeof t ? c(t) : St.extend({}, t);
            var e, n, i, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = r || t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                d = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                            St.each(e, function(e, n) {
                                bt(n) ? t.unique && d.has(n) || s.push(n) : n && n.length && "string" !== o(n) && i(n)
                            })
                        }(arguments), n && !e && u()), this
                    },
                    remove: function() {
                        return St.each(arguments, function(t, e) {
                            for (var n;
                                (n = St.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? St.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = a = [], n || e || (s = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || u()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, St.extend({
            Deferred: function(n) {
                var i = [
                        ["notify", "progress", St.Callbacks("memory"), St.Callbacks("memory"), 2],
                        ["resolve", "done", St.Callbacks("once memory"), St.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", St.Callbacks("once memory"), St.Callbacks("once memory"), 1, "rejected"]
                    ],
                    o = "pending",
                    r = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        "catch": function(t) {
                            return r.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return St.Deferred(function(e) {
                                St.each(i, function(n, i) {
                                    var o = bt(t[i[4]]) && t[i[4]];
                                    s[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && bt(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(n, o, r) {
                            function s(n, i, o, r) {
                                return function() {
                                    var l = this,
                                        c = arguments,
                                        h = function() {
                                            var t, e;
                                            if (!(n < a)) {
                                                if ((t = o.apply(l, c)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" == typeof t || "function" == typeof t) && t.then, bt(e) ? r ? e.call(t, s(a, i, u, r), s(a, i, d, r)) : (a++, e.call(t, s(a, i, u, r), s(a, i, d, r), s(a, i, u, i.notifyWith))) : (o !== u && (l = undefined, c = [t]), (r || i.resolveWith)(l, c))
                                            }
                                        },
                                        p = r ? h : function() {
                                            try {
                                                h()
                                            } catch (e) {
                                                St.Deferred.exceptionHook && St.Deferred.exceptionHook(e, p.stackTrace), n + 1 >= a && (o !== d && (l = undefined, c = [e]), i.rejectWith(l, c))
                                            }
                                        };
                                    n ? p() : (St.Deferred.getStackHook && (p.stackTrace = St.Deferred.getStackHook()), t.setTimeout(p))
                                }
                            }
                            var a = 0;
                            return St.Deferred(function(t) {
                                i[0][3].add(s(0, t, bt(r) ? r : u, t.notifyWith)), i[1][3].add(s(0, t, bt(n) ? n : u)), i[2][3].add(s(0, t, bt(o) ? o : d))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? St.extend(t, r) : r
                        }
                    },
                    s = {};
                return St.each(i, function(t, e) {
                    var n = e[2],
                        a = e[5];
                    r[e[1]] = n.add, a && n.add(function() {
                        o = a
                    }, i[3 - t][2].disable, i[3 - t][3].disable, i[0][2].lock, i[0][3].lock), n.add(e[3].fire), s[e[0]] = function() {
                        return s[e[0] + "With"](this === s ? undefined : this, arguments), this
                    }, s[e[0] + "With"] = n.fireWith
                }), r.promise(s), n && n.call(s, s), s
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = ct.call(arguments),
                    r = St.Deferred(),
                    s = function(t) {
                        return function(n) {
                            i[t] = this, o[t] = arguments.length > 1 ? ct.call(arguments) : n, --e || r.resolveWith(i, o)
                        }
                    };
                if (e <= 1 && (h(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || bt(o[n] && o[n].then))) return r.then();
                for (; n--;) h(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        St.Deferred.exceptionHook = function(e, n) {
            t.console && t.console.warn && e && jt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
        }, St.readyException = function(e) {
            t.setTimeout(function() {
                throw e
            })
        };
        var Nt = St.Deferred();
        St.fn.ready = function(t) {
            return Nt.then(t)["catch"](function(t) {
                St.readyException(t)
            }), this
        }, St.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --St.readyWait : St.isReady) || (St.isReady = !0, !0 !== t && --St.readyWait > 0 || Nt.resolveWith(at, [St]))
            }
        }), St.ready.then = Nt.then, "complete" === at.readyState || "loading" !== at.readyState && !at.documentElement.doScroll ? t.setTimeout(St.ready) : (at.addEventListener("DOMContentLoaded", p), t.addEventListener("load", p));
        var Mt = function(t, e, n, i, r, s, a) {
                var l = 0,
                    c = t.length,
                    u = null == n;
                if ("object" === o(n))
                    for (l in r = !0, n) Mt(t, e, l, n[l], !0, s, a);
                else if (i !== undefined && (r = !0, bt(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(St(t), n)
                    })), e))
                    for (; l < c; l++) e(t[l], n, a ? i : i.call(t[l], l, e(t[l], n)));
                return r ? t : u ? e.call(t) : c ? e(t[0], n) : s
            },
            qt = /^-ms-/,
            $t = /-([a-z])/g,
            Ft = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        g.uid = 1, g.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[m(e)] = n;
                else
                    for (i in e) o[m(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return e === undefined ? this.cache(t) : t[this.expando] && t[this.expando][m(e)]
            },
            access: function(t, e, n) {
                return e === undefined || e && "string" == typeof e && n === undefined ? this.get(t, e) : (this.set(t, e, n), n !== undefined ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (i !== undefined) {
                    if (e !== undefined) {
                        n = (e = Array.isArray(e) ? e.map(m) : (e = m(e)) in i ? [e] : e.match(Rt) || []).length;
                        for (; n--;) delete i[e[n]]
                    }(e === undefined || St.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = undefined : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return e !== undefined && !St.isEmptyObject(e)
            }
        };
        var Ht = new g,
            Bt = new g,
            Wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            zt = /[A-Z]/g;
        St.extend({
            hasData: function(t) {
                return Bt.hasData(t) || Ht.hasData(t)
            },
            data: function(t, e, n) {
                return Bt.access(t, e, n)
            },
            removeData: function(t, e) {
                Bt.remove(t, e)
            },
            _data: function(t, e, n) {
                return Ht.access(t, e, n)
            },
            _removeData: function(t, e) {
                Ht.remove(t, e)
            }
        }), St.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    s = r && r.attributes;
                if (t === undefined) {
                    if (this.length && (o = Bt.get(r), 1 === r.nodeType && !Ht.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = m(i.slice(5)), y(r, i, o[i]));
                        Ht.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Bt.set(this, t)
                }) : Mt(this, function(e) {
                    var n;
                    if (r && e === undefined) return (n = Bt.get(r, t)) !== undefined ? n : (n = y(r, t)) !== undefined ? n : void 0;
                    this.each(function() {
                        Bt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Bt.remove(this, t)
                })
            }
        }), St.extend({
            queue: function(t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = Ht.get(t, e), n && (!i || Array.isArray(n) ? i = Ht.access(t, e, St.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = St.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = St._queueHooks(t, e),
                    s = function() {
                        St.dequeue(t, e)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return Ht.get(t, n) || Ht.access(t, n, {
                    empty: St.Callbacks("once memory").add(function() {
                        Ht.remove(t, [e + "queue", n])
                    })
                })
            }
        }), St.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? St.queue(this[0], t) : e === undefined ? this : this.each(function() {
                    var n = St.queue(this, t, e);
                    St._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && St.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    St.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    o = St.Deferred(),
                    r = this,
                    s = this.length,
                    a = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; s--;)(n = Ht.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Vt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"),
            Qt = ["Top", "Right", "Bottom", "Left"],
            Kt = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && St.contains(t.ownerDocument, t) && "none" === St.css(t, "display")
            },
            Xt = function(t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
                return o
            },
            Yt = {};
        St.fn.extend({
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Kt(this) ? St(this).show() : St(this).hide()
                })
            }
        });
        var Gt = /^(?:checkbox|radio)$/i,
            Jt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Zt = /^$|^module$|\/(?:java|ecma)script/i,
            te = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        te.optgroup = te.option, te.tbody = te.tfoot = te.colgroup = te.caption = te.thead, te.th = te.td;
        var ee, ne, ie = /<|&#?\w+;/;
        ee = at.createDocumentFragment().appendChild(at.createElement("div")), (ne = at.createElement("input")).setAttribute("type", "radio"), ne.setAttribute("checked", "checked"), ne.setAttribute("name", "t"), ee.appendChild(ne), yt.checkClone = ee.cloneNode(!0).cloneNode(!0).lastChild.checked, ee.innerHTML = "<textarea>x</textarea>", yt.noCloneChecked = !!ee.cloneNode(!0).lastChild.defaultValue;
        var oe = at.documentElement,
            re = /^key/,
            se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            ae = /^([^.]*)(?:\.(.+)|)/;
        St.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = Ht.get(t);
                if (g)
                    for (n.handler && (n = (r = n).handler, o = r.selector), o && St.find.matchesSelector(oe, o), n.guid || (n.guid = St.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return void 0 !== St && St.event.triggered !== e.type ? St.event.dispatch.apply(t, arguments) : undefined
                        }), c = (e = (e || "").match(Rt) || [""]).length; c--;) p = m = (a = ae.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = St.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = St.event.special[p] || {}, u = St.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && St.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, f, s) || t.addEventListener && t.addEventListener(p, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), St.event.global[p] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, c, u, d, h, p, f, m, g = Ht.hasData(t) && Ht.get(t);
                if (g && (l = g.events)) {
                    for (c = (e = (e || "").match(Rt) || [""]).length; c--;)
                        if (p = m = (a = ae.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = St.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
                            s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || St.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) St.event.remove(t, p + e[c], n, i, !0);
                    St.isEmptyObject(l) && Ht.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, s, a = St.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Ht.get(this, "events") || {})[a.type] || [],
                    u = St.event.special[a.type] || {};
                for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = St.event.handlers.call(this, a, c), e = 0;
                        (o = s[e++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, (i = ((St.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) !== undefined && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s, a = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (r = [], s = {}, n = 0; n < l; n++) s[o = (i = e[n]).selector + " "] === undefined && (s[o] = i.needsContext ? St(o, this).index(c) > -1 : St.find(o, this, null, [c]).length), s[o] && r.push(i);
                            r.length && a.push({
                                elem: c,
                                handlers: r
                            })
                        } return c = this, l < e.length && a.push({
                    elem: c,
                    handlers: e.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(St.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: bt(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[St.expando] ? t : new St.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== _() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === _() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && s(this, "input")) return this.click(), !1
                    },
                    _default: function(t) {
                        return s(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, St.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, St.Event = function(t, e) {
            if (!(this instanceof St.Event)) return new St.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? k : T, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && St.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[St.expando] = !0
        }, St.Event.prototype = {
            constructor: St.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = k, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = k, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = k, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, St.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && re.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && e !== undefined && se.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, St.event.addProp), St.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            St.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || St.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), St.fn.extend({
            on: function(t, e, n, i) {
                return A(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return A(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, St(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = T), this.each(function() {
                    St.event.remove(this, t, n, e)
                })
            }
        });
        var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ce = /<script|<style|<link/i,
            ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
            de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        St.extend({
            htmlPrefilter: function(t) {
                return t.replace(le, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a = t.cloneNode(!0),
                    l = St.contains(t.ownerDocument, t);
                if (!(yt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || St.isXMLDoc(t)))
                    for (s = C(a), i = 0, o = (r = C(t)).length; i < o; i++) O(r[i], s[i]);
                if (e)
                    if (n)
                        for (r = r || C(t), s = s || C(a), i = 0, o = r.length; i < o; i++) I(r[i], s[i]);
                    else I(t, a);
                return (s = C(a, "script")).length > 0 && S(s, !l && C(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, n, i, o = St.event.special, r = 0;
                    (n = t[r]) !== undefined; r++)
                    if (Ft(n)) {
                        if (e = n[Ht.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? St.event.remove(n, i) : St.removeEvent(n, i, e.handle);
                            n[Ht.expando] = undefined
                        }
                        n[Bt.expando] && (n[Bt.expando] = undefined)
                    }
            }
        }), St.fn.extend({
            detach: function(t) {
                return j(this, t, !0)
            },
            remove: function(t) {
                return j(this, t)
            },
            text: function(t) {
                return Mt(this, function(t) {
                    return t === undefined ? St.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return R(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || L(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return R(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = L(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return R(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (St.cleanData(C(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return St.clone(this, t, e)
                })
            },
            html: function(t) {
                return Mt(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (t === undefined && 1 === n.nodeType) return n.innerHTML;
                    if ("string" == typeof t && !ce.test(t) && !te[(Jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = St.htmlPrefilter(t);
                        try {
                            for (; i < o; i++) 1 === (n = this[i] || {}).nodeType && (St.cleanData(C(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (e) {}
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return R(this, arguments, function(e) {
                    var n = this.parentNode;
                    St.inArray(this, t) < 0 && (St.cleanData(C(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), St.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            St.fn[t] = function(t) {
                for (var n, i = [], o = St(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), St(o[s])[e](n), dt.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var he = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"),
            pe = function(e) {
                var n = e.ownerDocument.defaultView;
                return n && n.opener || (n = t), n.getComputedStyle(e)
            },
            fe = new RegExp(Qt.join("|"), "i");
        ! function() {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(c);
                    var e = t.getComputedStyle(c);
                    i = "1%" !== e.top, a = 12 === n(e.marginLeft), c.style.right = "60%", s = 36 === n(e.right), o = 36 === n(e.width), c.style.position = "absolute", r = 36 === c.offsetWidth || "absolute", oe.removeChild(l), c = null
                }
            }

            function n(t) {
                return Math.round(parseFloat(t))
            }
            var i, o, r, s, a, l = at.createElement("div"),
                c = at.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", yt.clearCloneStyle = "content-box" === c.style.backgroundClip, St.extend(yt, {
                boxSizingReliable: function() {
                    return e(), o
                },
                pixelBoxStyles: function() {
                    return e(), s
                },
                pixelPosition: function() {
                    return e(), i
                },
                reliableMarginLeft: function() {
                    return e(), a
                },
                scrollboxSize: function() {
                    return e(), r
                }
            }))
        }();
        var me = /^(none|table(?!-c[ea]).+)/,
            ge = /^--/,
            ve = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ye = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            be = ["Webkit", "Moz", "ms"],
            we = at.createElement("div").style;
        St.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = N(t, "opacity");
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
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = m(e),
                        l = ge.test(e),
                        c = t.style;
                    if (l || (e = $(a)), s = St.cssHooks[e] || St.cssHooks[a], n === undefined) return s && "get" in s && (o = s.get(t, !1, i)) !== undefined ? o : c[e];
                    "string" === (r = typeof n) && (o = Vt.exec(n)) && o[1] && (n = b(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (St.cssNumber[a] ? "" : "px")), yt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && (n = s.set(t, n, i)) === undefined || (l ? c.setProperty(e, n) : c[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = m(e);
                return ge.test(e) || (e = $(a)), (s = St.cssHooks[e] || St.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), o === undefined && (o = N(t, e, i)), "normal" === o && e in ye && (o = ye[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), St.each(["height", "width"], function(t, e) {
            St.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n) return !me.test(St.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? B(t, e, i) : Xt(t, ve, function() {
                        return B(t, e, i)
                    })
                },
                set: function(t, n, i) {
                    var o, r = pe(t),
                        s = "border-box" === St.css(t, "boxSizing", !1, r),
                        a = i && H(t, e, i, s, r);
                    return s && yt.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - H(t, e, "border", !1, r) - .5)), a && (o = Vt.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = St.css(t, e)), F(t, n, a)
                }
            }
        }), St.cssHooks.marginLeft = M(yt.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), St.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            St.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Qt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, "margin" !== t && (St.cssHooks[t + e].set = F)
        }), St.fn.extend({
            css: function(t, e) {
                return Mt(this, function(t, e, n) {
                    var i, o, r = {},
                        s = 0;
                    if (Array.isArray(e)) {
                        for (i = pe(t), o = e.length; s < o; s++) r[e[s]] = St.css(t, e[s], !1, i);
                        return r
                    }
                    return n !== undefined ? St.style(t, e, n) : St.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), St.Tween = W, W.prototype = {
            constructor: W,
            init: function(t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || St.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (St.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = W.propHooks[this.prop];
                return this.options.duration ? this.pos = e = St.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = St.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    St.fx.step[t.prop] ? St.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[St.cssProps[t.prop]] && !St.cssHooks[t.prop] ? t.elem[t.prop] = t.now : St.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, St.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, St.fx = W.prototype.init, St.fx.step = {};
        var xe, Ce, Se = /^(?:toggle|show|hide)$/,
            Ee = /queueHooks$/;
        St.Animation = St.extend(Y, {
                tweeners: {
                    "*": [function(t, e) {
                        var n = this.createTween(t, e);
                        return b(n.elem, t, Vt.exec(e), n), n
                    }]
                },
                tweener: function(t, e) {
                    bt(t) ? (e = t, t = ["*"]) : t = t.match(Rt);
                    for (var n, i = 0, o = t.length; i < o; i++) n = t[i], Y.tweeners[n] = Y.tweeners[n] || [], Y.tweeners[n].unshift(e)
                },
                prefilters: [K],
                prefilter: function(t, e) {
                    e ? Y.prefilters.unshift(t) : Y.prefilters.push(t)
                }
            }), St.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? St.extend({}, t) : {
                    complete: n || !n && e || bt(t) && t,
                    duration: t,
                    easing: n && e || e && !bt(e) && e
                };
                return St.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in St.fx.speeds ? i.duration = St.fx.speeds[i.duration] : i.duration = St.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    bt(i.old) && i.old.call(this), i.queue && St.dequeue(this, i.queue)
                }, i
            }, St.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Kt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var o = St.isEmptyObject(t),
                        r = St.speed(e, n, i),
                        s = function() {
                            var e = Y(this, St.extend({}, t), r);
                            (o || Ht.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = undefined), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = St.timers,
                            s = Ht.get(this);
                        if (o) s[o] && s[o].stop && i(s[o]);
                        else
                            for (o in s) s[o] && s[o].stop && Ee.test(o) && i(s[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || St.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = Ht.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = St.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, St.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), St.each(["toggle", "show", "hide"], function(t, e) {
                var n = St.fn[e];
                St.fn[e] = function(t, i, o) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(V(e, !0), t, i, o)
                }
            }), St.each({
                slideDown: V("show"),
                slideUp: V("hide"),
                slideToggle: V("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                St.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), St.timers = [], St.fx.tick = function() {
                var t, e = 0,
                    n = St.timers;
                for (xe = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || St.fx.stop(), xe = undefined
            }, St.fx.timer = function(t) {
                St.timers.push(t), St.fx.start()
            }, St.fx.interval = 13, St.fx.start = function() {
                Ce || (Ce = !0, z())
            }, St.fx.stop = function() {
                Ce = null
            }, St.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, St.fn.delay = function(e, n) {
                return e = St.fx && St.fx.speeds[e] || e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = at.createElement("input"),
                    e = at.createElement("select").appendChild(at.createElement("option"));
                t.type = "checkbox", yt.checkOn = "" !== t.value, yt.optSelected = e.selected, (t = at.createElement("input")).value = "t", t.type = "radio", yt.radioValue = "t" === t.value
            }();
        var ke, Te = St.expr.attrHandle;
        St.fn.extend({
            attr: function(t, e) {
                return Mt(this, St.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    St.removeAttr(this, t)
                })
            }
        }), St.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? St.prop(t, e, n) : (1 === r && St.isXMLDoc(t) || (o = St.attrHooks[e.toLowerCase()] || (St.expr.match.bool.test(e) ? ke : undefined)), n !== undefined ? null === n ? void St.removeAttr(t, e) : o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = St.find.attr(t, e)) ? undefined : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!yt.radioValue && "radio" === e && s(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(Rt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), ke = {
            set: function(t, e, n) {
                return !1 === e ? St.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, St.each(St.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = Te[e] || St.find.attr;
            Te[e] = function(t, e, i) {
                var o, r, s = e.toLowerCase();
                return i || (r = Te[s], Te[s] = o, o = null != n(t, e, i) ? s : null, Te[s] = r), o
            }
        });
        var _e = /^(?:input|select|textarea|button)$/i,
            Ae = /^(?:a|area)$/i;
        St.fn.extend({
            prop: function(t, e) {
                return Mt(this, St.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[St.propFix[t] || t]
                })
            }
        }), St.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r) return 1 === r && St.isXMLDoc(t) || (e = St.propFix[e] || e, o = St.propHooks[e]), n !== undefined ? o && "set" in o && (i = o.set(t, n, e)) !== undefined ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = St.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : _e.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), yt.optSelected || (St.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), St.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            St.propFix[this.toLowerCase()] = this
        }), St.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (bt(t)) return this.each(function(e) {
                    St(this).addClass(t.call(this, e, J(this)))
                });
                if ((e = Z(t)).length)
                    for (; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
                            for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = G(i)) && n.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (bt(t)) return this.each(function(e) {
                    St(this).removeClass(t.call(this, e, J(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Z(t)).length)
                    for (; n = this[l++];)
                        if (o = J(n), i = 1 === n.nodeType && " " + G(o) + " ") {
                            for (s = 0; r = e[s++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            o !== (a = G(i)) && n.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var n = typeof t,
                    i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : bt(t) ? this.each(function(n) {
                    St(this).toggleClass(t.call(this, n, J(this), e), e)
                }) : this.each(function() {
                    var e, o, r, s;
                    if (i)
                        for (o = 0, r = St(this), s = Z(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else t !== undefined && "boolean" !== n || ((e = J(this)) && Ht.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ht.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + G(J(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Le = /\r/g;
        St.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = bt(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, St(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = St.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = St.valHooks[this.type] || St.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, o, "value") !== undefined || (this.value = o))
                })) : o ? (e = St.valHooks[o.type] || St.valHooks[o.nodeName.toLowerCase()]) && "get" in e && (n = e.get(o, "value")) !== undefined ? n : "string" == typeof(n = o.value) ? n.replace(Le, "") : null == n ? "" : n : void 0
            }
        }), St.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = St.find.attr(t, "value");
                        return null != e ? e : G(St.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options,
                            r = t.selectedIndex,
                            a = "select-one" === t.type,
                            l = a ? null : [],
                            c = a ? r + 1 : o.length;
                        for (i = r < 0 ? c : a ? r : 0; i < c; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !s(n.parentNode, "optgroup"))) {
                                if (e = St(n).val(), a) return e;
                                l.push(e)
                            } return l
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = St.makeArray(e), s = o.length; s--;)((i = o[s]).selected = St.inArray(St.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), St.each(["radio", "checkbox"], function() {
            St.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = St.inArray(St(t).val(), e) > -1
                }
            }, yt.checkOn || (St.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), yt.focusin = "onfocusin" in t;
        var De = /^(?:focusinfocus|focusoutblur)$/,
            Pe = function(t) {
                t.stopPropagation()
            };
        St.extend(St.event, {
            trigger: function(e, n, i, o) {
                var r, s, a, l, c, u, d, h, p = [i || at],
                    f = mt.call(e, "type") ? e.type : e,
                    m = mt.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = h = a = i = i || at, 3 !== i.nodeType && 8 !== i.nodeType && !De.test(f + St.event.triggered) && (f.indexOf(".") > -1 && (f = (m = f.split(".")).shift(), m.sort()), c = f.indexOf(":") < 0 && "on" + f, (e = e[St.expando] ? e : new St.Event(f, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = i), n = null == n ? [e] : St.makeArray(n, [e]), d = St.event.special[f] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!o && !d.noBubble && !wt(i)) {
                        for (l = d.delegateType || f, De.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (i.ownerDocument || at) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (r = 0;
                        (s = p[r++]) && !e.isPropagationStopped();) h = s, e.type = r > 1 ? l : d.bindType || f, (u = (Ht.get(s, "events") || {})[e.type] && Ht.get(s, "handle")) && u.apply(s, n), (u = c && s[c]) && u.apply && Ft(s) && (e.result = u.apply(s, n), !1 === e.result && e.preventDefault());
                    return e.type = f, o || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ft(i) || c && bt(i[f]) && !wt(i) && ((a = i[c]) && (i[c] = null), St.event.triggered = f, e.isPropagationStopped() && h.addEventListener(f, Pe), i[f](), e.isPropagationStopped() && h.removeEventListener(f, Pe), St.event.triggered = undefined, a && (i[c] = a)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = St.extend(new St.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                St.event.trigger(i, null, e)
            }
        }), St.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    St.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return St.event.trigger(t, e, n, !0)
            }
        }), yt.focusin || St.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                St.event.simulate(e, t.target, St.event.fix(t))
            };
            St.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Ht.access(i, e);
                    o || i.addEventListener(t, n, !0), Ht.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Ht.access(i, e) - 1;
                    o ? Ht.access(i, e, o) : (i.removeEventListener(t, n, !0), Ht.remove(i, e))
                }
            }
        });
        var Ie = t.location,
            Oe = Date.now(),
            Re = /\?/;
        St.parseXML = function(n) {
            var i;
            if (!n || "string" != typeof n) return null;
            try {
                i = (new t.DOMParser).parseFromString(n, "text/xml")
            } catch (e) {
                i = undefined
            }
            return i && !i.getElementsByTagName("parsererror").length || St.error("Invalid XML: " + n), i
        };
        var je = /\[\]$/,
            Ne = /\r?\n/g,
            Me = /^(?:submit|button|image|reset|file)$/i,
            qe = /^(?:input|select|textarea|keygen)/i;
        St.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = bt(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !St.isPlainObject(t)) St.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (n in t) tt(n, t[n], e, o);
            return i.join("&")
        }, St.fn.extend({
            serialize: function() {
                return St.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = St.prop(this, "elements");
                    return t ? St.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !St(this).is(":disabled") && qe.test(this.nodeName) && !Me.test(t) && (this.checked || !Gt.test(t))
                }).map(function(t, e) {
                    var n = St(this).val();
                    return null == n ? null : Array.isArray(n) ? St.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ne, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Ne, "\r\n")
                    }
                }).get()
            }
        });
        var $e = /%20/g,
            Fe = /#.*$/,
            He = /([?&])_=[^&]*/,
            Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ze = /^(?:GET|HEAD)$/,
            Ue = /^\/\//,
            Ve = {},
            Qe = {},
            Ke = "*/".concat("*"),
            Xe = at.createElement("a");
        Xe.href = Ie.href, St.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ie.href,
                type: "GET",
                isLocal: We.test(Ie.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ke,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": St.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? it(it(t, St.ajaxSettings), e) : it(St.ajaxSettings, t)
            },
            ajaxPrefilter: et(Ve),
            ajaxTransport: et(Qe),
            ajax: function(n, i) {
                function o(e, n, i, o) {
                    var l, u, p, f, x, C = n;
                    d || (d = !0, c && t.clearTimeout(c), r = undefined, a = o || "", E.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, i && (f = ot(m, E, i)), f = rt(m, f, E, l), l ? (m.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (St.lastModified[s] = x), (x = E.getResponseHeader("etag")) && (St.etag[s] = x)), 204 === e || "HEAD" === m.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = f.state, u = f.data, l = !(p = f.error))) : (p = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", l ? y.resolveWith(g, [u, C, E]) : y.rejectWith(g, [E, C, p]), E.statusCode(w), w = undefined, h && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, m, l ? u : p]), b.fireWith(g, [E, C]), h && (v.trigger("ajaxComplete", [E, m]), --St.active || St.event.trigger("ajaxStop")))
                }
                "object" == typeof n && (i = n, n = undefined), i = i || {};
                var r, s, a, l, c, u, d, h, p, f, m = St.ajaxSetup({}, i),
                    g = m.context || m,
                    v = m.context && (g.nodeType || g.jquery) ? St(g) : St.event,
                    y = St.Deferred(),
                    b = St.Callbacks("once memory"),
                    w = m.statusCode || {},
                    x = {},
                    C = {},
                    S = "canceled",
                    E = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (d) {
                                if (!l)
                                    for (l = {}; e = Be.exec(a);) l[e[1].toLowerCase()] = e[2];
                                e = l[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return d ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == d && (t = C[t.toLowerCase()] = C[t.toLowerCase()] || t, x[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == d && (m.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (d) E.always(t[E.status]);
                                else
                                    for (e in t) w[e] = [w[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || S;
                            return r && r.abort(e), o(0, e), this
                        }
                    };
                if (y.promise(E), m.url = ((n || m.url || Ie.href) + "").replace(Ue, Ie.protocol + "//"), m.type = i.method || i.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(Rt) || [""], null == m.crossDomain) {
                    u = at.createElement("a");
                    try {
                        u.href = m.url, u.href = u.href, m.crossDomain = Xe.protocol + "//" + Xe.host != u.protocol + "//" + u.host
                    } catch (e) {
                        m.crossDomain = !0
                    }
                }
                if (m.data && m.processData && "string" != typeof m.data && (m.data = St.param(m.data, m.traditional)), nt(Ve, m, i, E), d) return E;
                for (p in (h = St.event && m.global) && 0 == St.active++ && St.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !ze.test(m.type), s = m.url.replace(Fe, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace($e, "+")) : (f = m.url.slice(s.length), m.data && (m.processData || "string" == typeof m.data) && (s += (Re.test(s) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (s = s.replace(He, "$1"), f = (Re.test(s) ? "&" : "?") + "_=" + Oe++ + f), m.url = s + f), m.ifModified && (St.lastModified[s] && E.setRequestHeader("If-Modified-Since", St.lastModified[s]), St.etag[s] && E.setRequestHeader("If-None-Match", St.etag[s])), (m.data && m.hasContent && !1 !== m.contentType || i.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(p, m.headers[p]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, E, m) || d)) return E.abort();
                if (S = "abort", b.add(m.complete), E.done(m.success), E.fail(m.error), r = nt(Qe, m, i, E)) {
                    if (E.readyState = 1, h && v.trigger("ajaxSend", [E, m]), d) return E;
                    m.async && m.timeout > 0 && (c = t.setTimeout(function() {
                        E.abort("timeout")
                    }, m.timeout));
                    try {
                        d = !1, r.send(x, o)
                    } catch (e) {
                        if (d) throw e;
                        o(-1, e)
                    }
                } else o(-1, "No Transport");
                return E
            },
            getJSON: function(t, e, n) {
                return St.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return St.get(t, undefined, e, "script")
            }
        }), St.each(["get", "post"], function(t, e) {
            St[e] = function(t, n, i, o) {
                return bt(n) && (o = o || i, i = n, n = undefined), St.ajax(St.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, St.isPlainObject(t) && t))
            }
        }), St._evalUrl = function(t) {
            return St.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, St.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (bt(t) && (t = t.call(this[0])), e = St(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return bt(t) ? this.each(function(e) {
                    St(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = St(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = bt(t);
                return this.each(function(n) {
                    St(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    St(this).replaceWith(this.childNodes)
                }), this
            }
        }), St.expr.pseudos.hidden = function(t) {
            return !St.expr.pseudos.visible(t)
        }, St.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, St.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var Ye = {
                0: 200,
                1223: 204
            },
            Ge = St.ajaxSettings.xhr();
        yt.cors = !!Ge && "withCredentials" in Ge, yt.ajax = Ge = !!Ge, St.ajaxTransport(function(n) {
            var i, o;
            if (yt.cors || Ge && !n.crossDomain) return {
                send: function(r, s) {
                    var a, l = n.xhr();
                    if (l.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    for (a in n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) l.setRequestHeader(a, r[a]);
                    i = function(t) {
                        return function() {
                            i && (i = o = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === t ? l.abort() : "error" === t ? "number" != typeof l.status ? s(0, "error") : s(l.status, l.statusText) : s(Ye[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                                binary: l.response
                            } : {
                                text: l.responseText
                            }, l.getAllResponseHeaders()))
                        }
                    }, l.onload = i(), o = l.onerror = l.ontimeout = i("error"), l.onabort !== undefined ? l.onabort = o : l.onreadystatechange = function() {
                        4 === l.readyState && t.setTimeout(function() {
                            i && o()
                        })
                    }, i = i("abort");
                    try {
                        l.send(n.hasContent && n.data || null)
                    } catch (e) {
                        if (i) throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), St.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), St.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return St.globalEval(t), t
                }
            }
        }), St.ajaxPrefilter("script", function(t) {
            t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), St.ajaxTransport("script", function(t) {
            var e, n;
            if (t.crossDomain) return {
                send: function(i, o) {
                    e = St("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), at.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Je, Ze = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        St.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ze.pop() || St.expando + "_" + Oe++;
                return this[t] = !0, t
            }
        }), St.ajaxPrefilter("json jsonp", function(e, n, i) {
            var o, r, s, a = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = bt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(tn, "$1" + o) : !1 !== e.jsonp && (e.url += (Re.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return s || St.error(o + " was not called"), s[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
                s = arguments
            }, i.always(function() {
                r === undefined ? St(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ze.push(o)), s && bt(r) && r(s[0]), s = r = undefined
            }), "script"
        }), yt.createHTMLDocument = ((Je = at.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Je.childNodes.length), St.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (yt.createHTMLDocument ? ((i = (e = at.implementation.createHTMLDocument("")).createElement("base")).href = at.location.href, e.head.appendChild(i)) : e = at), r = !n && [], (o = Lt.exec(t)) ? [e.createElement(o[1])] : (o = E([t], e, r), r && r.length && St(r).remove(), St.merge([], o.childNodes)));
            var i, o, r
        }, St.fn.load = function(t, e, n) {
            var i, o, r, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = G(t.slice(a)), t = t.slice(0, a)), bt(e) ? (n = e, e = undefined) : e && "object" == typeof e && (o = "POST"), s.length > 0 && St.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, s.html(i ? St("<div>").append(St.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }), this
        }, St.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            St.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), St.expr.pseudos.animated = function(t) {
            return St.grep(St.timers, function(e) {
                return t === e.elem
            }).length
        }, St.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, c = St.css(t, "position"),
                    u = St(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), r = St.css(t, "top"), l = St.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), bt(e) && (e = e.call(t, n, St.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, St.fn.extend({
            offset: function(t) {
                if (arguments.length) return t === undefined ? this : this.each(function(e) {
                    St.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === St.css(i, "position")) e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === St.css(t, "position");) t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((o = St(t).offset()).top += St.css(t, "borderTopWidth", !0), o.left += St.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - St.css(i, "marginTop", !0),
                        left: e.left - o.left - St.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === St.css(t, "position");) t = t.offsetParent;
                    return t || oe
                })
            }
        }), St.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            St.fn[t] = function(i) {
                return Mt(this, function(t, i, o) {
                    var r;
                    if (wt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), o === undefined) return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }), St.each(["top", "left"], function(t, e) {
            St.cssHooks[e] = M(yt.pixelPosition, function(t, n) {
                if (n) return n = N(t, e), he.test(n) ? St(t).position()[e] + "px" : n
            })
        }), St.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            St.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                St.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return Mt(this, function(e, n, o) {
                        var r;
                        return wt(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : o === undefined ? St.css(e, n, a) : St.style(e, n, o, a)
                    }, e, s ? o : undefined, s)
                }
            })
        }), St.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            St.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), St.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), St.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), St.proxy = function(t, e) {
            var n, i, o;
            return "string" == typeof e && (n = t[e], e = t, t = n), bt(t) ? (i = ct.call(arguments, 2), (o = function() {
                return t.apply(e || this, i.concat(ct.call(arguments)))
            }).guid = t.guid = t.guid || St.guid++, o) : undefined
        }, St.holdReady = function(t) {
            t ? St.readyWait++ : St.ready(!0)
        }, St.isArray = Array.isArray, St.parseJSON = JSON.parse, St.nodeName = s, St.isFunction = bt, St.isWindow = wt, St.camelCase = m, St.type = o, St.now = Date.now, St.isNumeric = function(t) {
            var e = St.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return St
        });
        var en = t.jQuery,
            nn = t.$;
        return St.noConflict = function(e) {
            return t.$ === St && (t.$ = nn), e && t.jQuery === St && (t.jQuery = en), St
        }, n || (t.jQuery = t.$ = St), St
    }),
    /*
    Turbolinks 5.2.0
    Copyright © 2018 Basecamp, LLC
     */
    function() {
        var t = this;
        (function() {
            (function() {
                this.Turbolinks = {
                    supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
                    visit: function(t, n) {
                        return e.controller.visit(t, n)
                    },
                    clearCache: function() {
                        return e.controller.clearCache()
                    },
                    setProgressBarDelay: function(t) {
                        return e.controller.setProgressBarDelay(t)
                    }
                }
            }).call(this)
        }).call(t);
        var e = t.Turbolinks;
        (function() {
            (function() {
                var t, n, i, o = [].slice;
                e.copyObject = function(t) {
                    var e, n, i;
                    for (e in n = {}, t) i = t[e], n[e] = i;
                    return n
                }, e.closest = function(e, n) {
                    return t.call(e, n)
                }, t = function() {
                    var t;
                    return null != (t = document.documentElement.closest) ? t : function(t) {
                        var e;
                        for (e = this; e;) {
                            if (e.nodeType === Node.ELEMENT_NODE && n.call(e, t)) return e;
                            e = e.parentNode
                        }
                    }
                }(), e.defer = function(t) {
                    return setTimeout(t, 1)
                }, e.throttle = function(t) {
                    var e;
                    return e = null,
                        function() {
                            var n, i;
                            return n = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame((i = this, function() {
                                return e = null, t.apply(i, n)
                            }))
                        }
                }, e.dispatch = function(t, e) {
                    var n, o, r, s, a, l;
                    return l = (a = null != e ? e : {}).target, n = a.cancelable, o = a.data, (r = document.createEvent("Events")).initEvent(t, !0, !0 === n), r.data = null != o ? o : {}, r.cancelable && !i && (s = r.preventDefault, r.preventDefault = function() {
                        return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        }), s.call(this)
                    }), (null != l ? l : document).dispatchEvent(r), r
                }, i = function() {
                    var t;
                    return (t = document.createEvent("Events")).initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented
                }(), e.match = function(t, e) {
                    return n.call(t, e)
                }, n = function() {
                    var t, e, n, i;
                    return null != (e = null != (n = null != (i = (t = document.documentElement).matchesSelector) ? i : t.webkitMatchesSelector) ? n : t.msMatchesSelector) ? e : t.mozMatchesSelector
                }(), e.uuid = function() {
                    var t, e, n;
                    for (n = "", t = e = 1; 36 >= e; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return n
                }
            }).call(this),
                function() {
                    e.Location = function() {
                        function t(t) {
                            var e, n;
                            null == t && (t = ""), (n = document.createElement("a")).href = t.toString(), this.absoluteURL = n.href, 2 > (e = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
                        }
                        var e, n, i, o;
                        return t.wrap = function(t) {
                            return t instanceof this ? t : new this(t)
                        }, t.prototype.getOrigin = function() {
                            return this.absoluteURL.split("/", 3).join("/")
                        }, t.prototype.getPath = function() {
                            var t, e;
                            return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                        }, t.prototype.getPathComponents = function() {
                            return this.getPath().split("/").slice(1)
                        }, t.prototype.getLastPathComponent = function() {
                            return this.getPathComponents().slice(-1)[0]
                        }, t.prototype.getExtension = function() {
                            var t, e;
                            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                        }, t.prototype.isHTML = function() {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                        }, t.prototype.isPrefixedBy = function(t) {
                            var e;
                            return e = n(t), this.isEqualTo(t) || o(this.absoluteURL, e)
                        }, t.prototype.isEqualTo = function(t) {
                            return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                        }, t.prototype.toCacheKey = function() {
                            return this.requestURL
                        }, t.prototype.toJSON = function() {
                            return this.absoluteURL
                        }, t.prototype.toString = function() {
                            return this.absoluteURL
                        }, t.prototype.valueOf = function() {
                            return this.absoluteURL
                        }, n = function(t) {
                            return e(t.getOrigin() + t.getPath())
                        }, e = function(t) {
                            return i(t, "/") ? t : t + "/"
                        }, o = function(t, e) {
                            return t.slice(0, e.length) === e
                        }, i = function(t, e) {
                            return t.slice(-e.length) === e
                        }, t
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.HttpRequest = function() {
                        function n(n, i, o) {
                            this.delegate = n, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(i).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR()
                        }
                        return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function() {
                            var t;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                        }, n.prototype.cancel = function() {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0
                        }, n.prototype.requestProgressed = function(t) {
                            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                        }, n.prototype.requestLoaded = function() {
                            return this.endRequest((t = this, function() {
                                var e;
                                return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                            }));
                            var t
                        }, n.prototype.requestFailed = function() {
                            return this.endRequest((t = this, function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                            }));
                            var t
                        }, n.prototype.requestTimedOut = function() {
                            return this.endRequest((t = this, function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                            }));
                            var t
                        }, n.prototype.requestCanceled = function() {
                            return this.endRequest()
                        }, n.prototype.notifyApplicationBeforeRequestStart = function() {
                            return e.dispatch("turbolinks:request-start", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, n.prototype.notifyApplicationAfterRequestEnd = function() {
                            return e.dispatch("turbolinks:request-end", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, n.prototype.createXHR = function() {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                        }, n.prototype.endRequest = function(t) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                        }, n.prototype.setProgress = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                        }, n.prototype.destroy = function() {
                            var t;
                            return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                        }, n
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.ProgressBar = function() {
                        function e() {
                            this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                        }
                        var n;
                        return n = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function() {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                        }, e.prototype.hide = function() {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((t = this, function() {
                                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                            }))) : void 0;
                            var t
                        }, e.prototype.setValue = function(t) {
                            return this.value = t, this.refresh()
                        }, e.prototype.installStylesheetElement = function() {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                        }, e.prototype.installProgressElement = function() {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                        }, e.prototype.fadeProgressElement = function(t) {
                            return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
                        }, e.prototype.uninstallProgressElement = function() {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                        }, e.prototype.startTrickling = function() {
                            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
                        }, e.prototype.stopTrickling = function() {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null
                        }, e.prototype.trickle = function() {
                            return this.setValue(this.value + Math.random() / 100)
                        }, e.prototype.refresh = function() {
                            return requestAnimationFrame((t = this, function() {
                                return t.progressElement.style.width = 10 + 90 * t.value + "%"
                            }));
                            var t
                        }, e.prototype.createStylesheetElement = function() {
                            var t;
                            return (t = document.createElement("style")).type = "text/css", t.textContent = this.constructor.defaultCSS, t
                        }, e.prototype.createProgressElement = function() {
                            var t;
                            return (t = document.createElement("div")).className = "turbolinks-progress-bar", t
                        }, e
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.BrowserAdapter = function() {
                        function n(n) {
                            this.controller = n, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar
                        }
                        var i, o, r;
                        return r = e.HttpRequest, i = r.NETWORK_FAILURE, o = r.TIMEOUT_FAILURE, n.prototype.visitProposedToLocationWithAction = function(t, e) {
                            return this.controller.startVisitToLocationWithAction(t, e)
                        }, n.prototype.visitStarted = function(t) {
                            return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                        }, n.prototype.visitRequestStarted = function(t) {
                            return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                        }, n.prototype.visitRequestProgressed = function(t) {
                            return this.progressBar.setValue(t.progress)
                        }, n.prototype.visitRequestCompleted = function(t) {
                            return t.loadResponse()
                        }, n.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                            switch (e) {
                                case i:
                                case o:
                                    return this.reload();
                                default:
                                    return t.loadResponse()
                            }
                        }, n.prototype.visitRequestFinished = function() {
                            return this.hideProgressBar()
                        }, n.prototype.visitCompleted = function(t) {
                            return t.followRedirect()
                        }, n.prototype.pageInvalidated = function() {
                            return this.reload()
                        }, n.prototype.showProgressBarAfterDelay = function() {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                        }, n.prototype.showProgressBar = function() {
                            return this.progressBar.show()
                        }, n.prototype.hideProgressBar = function() {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                        }, n.prototype.reload = function() {
                            return window.location.reload()
                        }, n
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.History = function() {
                        function n(e) {
                            this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this)
                        }
                        return n.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                        }, n.prototype.push = function(t, n) {
                            return t = e.Location.wrap(t), this.update("push", t, n)
                        }, n.prototype.replace = function(t, n) {
                            return t = e.Location.wrap(t), this.update("replace", t, n)
                        }, n.prototype.onPopState = function(t) {
                            var n, i, o, r;
                            return this.shouldHandlePopState() && (r = null != (i = t.state) ? i.turbolinks : void 0) ? (n = e.Location.wrap(window.location), o = r.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, o)) : void 0
                        }, n.prototype.onPageLoad = function() {
                            return e.defer(function(t) {
                                return function() {
                                    return t.pageLoaded = !0
                                }
                            }(this))
                        }, n.prototype.shouldHandlePopState = function() {
                            return this.pageIsLoaded()
                        }, n.prototype.pageIsLoaded = function() {
                            return this.pageLoaded || "complete" === document.readyState
                        }, n.prototype.update = function(t, e, n) {
                            var i;
                            return i = {
                                turbolinks: {
                                    restorationIdentifier: n
                                }
                            }, history[t + "State"](i, null, e)
                        }, n
                    }()
                }.call(this),
                function() {
                    e.HeadDetails = function() {
                        function t(t) {
                            var e, n, i, s, a;
                            for (this.elements = {}, n = 0, s = t.length; s > n; n++)(a = t[n]).nodeType === Node.ELEMENT_NODE && (i = a.outerHTML, (null != (e = this.elements)[i] ? e[i] : e[i] = {
                                type: r(a),
                                tracked: o(a),
                                elements: []
                            }).elements.push(a))
                        }
                        var e, n, i, o, r;
                        return t.fromHeadElement = function(t) {
                            var e;
                            return new this(null != (e = null != t ? t.childNodes : void 0) ? e : [])
                        }, t.prototype.hasElementWithKey = function(t) {
                            return t in this.elements
                        }, t.prototype.getTrackedElementSignature = function() {
                            var t;
                            return function() {
                                var e, n;
                                for (t in n = [], e = this.elements) e[t].tracked && n.push(t);
                                return n
                            }.call(this).join("")
                        }, t.prototype.getScriptElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("script", t)
                        }, t.prototype.getStylesheetElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                        }, t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
                            var n, i, o, r, s, a;
                            for (i in s = [], o = this.elements) a = (r = o[i]).type, n = r.elements, a !== t || e.hasElementWithKey(i) || s.push(n[0]);
                            return s
                        }, t.prototype.getProvisionalElements = function() {
                            var t, e, n, i, o, r, s;
                            for (e in n = [], i = this.elements) s = (o = i[e]).type, r = o.tracked, t = o.elements, null != s || r ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                            return n
                        }, t.prototype.getMetaValue = function(t) {
                            var e;
                            return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0
                        }, t.prototype.findMetaElementByName = function(t) {
                            var n, i, o, r;
                            for (o in n = void 0, r = this.elements) i = r[o].elements, e(i[0], t) && (n = i[0]);
                            return n
                        }, r = function(t) {
                            return n(t) ? "script" : i(t) ? "stylesheet" : void 0
                        }, o = function(t) {
                            return "reload" === t.getAttribute("data-turbolinks-track")
                        }, n = function(t) {
                            return "script" === t.tagName.toLowerCase()
                        }, i = function(t) {
                            var e;
                            return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
                        }, e = function(t, e) {
                            return "meta" === t.tagName.toLowerCase() && t.getAttribute("name") === e
                        }, t
                    }()
                }.call(this),
                function() {
                    e.Snapshot = function() {
                        function t(t, e) {
                            this.headDetails = t, this.bodyElement = e
                        }
                        return t.wrap = function(t) {
                            return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t)
                        }, t.fromHTMLString = function(t) {
                            var e;
                            return (e = document.createElement("html")).innerHTML = t, this.fromHTMLElement(e)
                        }, t.fromHTMLElement = function(t) {
                            var n, i, o;
                            return i = t.querySelector("head"), n = null != (o = t.querySelector("body")) ? o : document.createElement("body"), new this(e.HeadDetails.fromHeadElement(i), n)
                        }, t.prototype.clone = function() {
                            return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                        }, t.prototype.getRootLocation = function() {
                            var t, n;
                            return n = null != (t = this.getSetting("root")) ? t : "/", new e.Location(n)
                        }, t.prototype.getCacheControlValue = function() {
                            return this.getSetting("cache-control")
                        }, t.prototype.getElementForAnchor = function(t) {
                            try {
                                return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']")
                            } catch (e) {}
                        }, t.prototype.getPermanentElements = function() {
                            return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementById = function(t) {
                            return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementsPresentInSnapshot = function(t) {
                            var e, n, i, o, r;
                            for (r = [], n = 0, i = (o = this.getPermanentElements()).length; i > n; n++) e = o[n], t.getPermanentElementById(e.id) && r.push(e);
                            return r
                        }, t.prototype.findFirstAutofocusableElement = function() {
                            return this.bodyElement.querySelector("[autofocus]")
                        }, t.prototype.hasAnchor = function(t) {
                            return null != this.getElementForAnchor(t)
                        }, t.prototype.isPreviewable = function() {
                            return "no-preview" !== this.getCacheControlValue()
                        }, t.prototype.isCacheable = function() {
                            return "no-cache" !== this.getCacheControlValue()
                        }, t.prototype.isVisitable = function() {
                            return "reload" !== this.getSetting("visit-control")
                        }, t.prototype.getSetting = function(t) {
                            return this.headDetails.getMetaValue("turbolinks-" + t)
                        }, t
                    }()
                }.call(this),
                function() {
                    var t = [].slice;
                    e.Renderer = function() {
                        function e() {}
                        var n;
                        return e.render = function() {
                            var e, n, i;
                            return n = arguments[0], e = arguments[1], (i = function(t, e, n) {
                                n.prototype = t.prototype;
                                var i = new n,
                                    o = t.apply(i, e);
                                return Object(o) === o ? o : i
                            }(this, 3 <= arguments.length ? t.call(arguments, 2) : [], function() {})).delegate = n, i.render(e), i
                        }, e.prototype.renderView = function(t) {
                            return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                        }, e.prototype.invalidateView = function() {
                            return this.delegate.viewInvalidated()
                        }, e.prototype.createScriptElement = function(t) {
                            var e;
                            return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent, e.async = !1, n(e, t), e)
                        }, n = function(t, e) {
                            var n, i, o, r, s, a, l;
                            for (a = [], n = 0, i = (r = e.attributes).length; i > n; n++) o = (s = r[n]).name, l = s.value, a.push(t.setAttribute(o, l));
                            return a
                        }, e
                    }()
                }.call(this),
                function() {
                    var t, n, i = function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            for (var i in e) o.call(e, i) && (t[i] = e[i]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        o = {}.hasOwnProperty;
                    e.SnapshotRenderer = function(e) {
                        function o(t, e, n) {
                            this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
                        }
                        return i(o, e), o.prototype.render = function(t) {
                            return this.shouldRender() ? (this.mergeHead(), this.renderView((e = this, function() {
                                return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t()
                            }))) : this.invalidateView();
                            var e
                        }, o.prototype.mergeHead = function() {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                        }, o.prototype.replaceBody = function() {
                            var t;
                            return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t)
                        }, o.prototype.shouldRender = function() {
                            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                        }, o.prototype.trackedElementsAreIdentical = function() {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                        }, o.prototype.copyNewHeadStylesheetElements = function() {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > e; e++) t = i[e], o.push(document.head.appendChild(t));
                            return o
                        }, o.prototype.copyNewHeadScriptElements = function() {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadScriptElements()).length; n > e; e++) t = i[e], o.push(document.head.appendChild(this.createScriptElement(t)));
                            return o
                        }, o.prototype.removeCurrentHeadProvisionalElements = function() {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > e; e++) t = i[e], o.push(document.head.removeChild(t));
                            return o
                        }, o.prototype.copyNewHeadProvisionalElements = function() {
                            var t, e, n, i, o;
                            for (o = [], e = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > e; e++) t = i[e], o.push(document.head.appendChild(t));
                            return o
                        }, o.prototype.relocateCurrentBodyPermanentElements = function() {
                            var e, i, o, r, s, a, l;
                            for (l = [], e = 0, i = (a = this.getCurrentBodyPermanentElements()).length; i > e; e++) r = a[e], s = t(r), o = this.newSnapshot.getPermanentElementById(r.id), n(r, s.element), n(o, r), l.push(s);
                            return l
                        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(t) {
                            var e, i, o, r, s, a;
                            for (a = [], o = 0, r = t.length; r > o; o++) i = (s = t[o]).element, e = s.permanentElement.cloneNode(!0), a.push(n(i, e));
                            return a
                        }, o.prototype.activateNewBodyScriptElements = function() {
                            var t, e, i, o, r, s;
                            for (s = [], e = 0, o = (r = this.getNewBodyScriptElements()).length; o > e; e++) i = r[e], t = this.createScriptElement(i), s.push(n(i, t));
                            return s
                        }, o.prototype.assignNewBody = function() {
                            return document.body = this.newBody
                        }, o.prototype.focusFirstAutofocusableElement = function() {
                            var t;
                            return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0
                        }, o.prototype.getNewHeadStylesheetElements = function() {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                        }, o.prototype.getNewHeadScriptElements = function() {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                        }, o.prototype.getCurrentHeadProvisionalElements = function() {
                            return this.currentHeadDetails.getProvisionalElements()
                        }, o.prototype.getNewHeadProvisionalElements = function() {
                            return this.newHeadDetails.getProvisionalElements()
                        }, o.prototype.getCurrentBodyPermanentElements = function() {
                            return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                        }, o.prototype.getNewBodyScriptElements = function() {
                            return this.newBody.querySelectorAll("script")
                        }, o
                    }(e.Renderer), t = function(t) {
                        var e;
                        return (e = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
                            element: e,
                            permanentElement: t
                        }
                    }, n = function(t, e) {
                        var n;
                        return (n = t.parentNode) ? n.replaceChild(e, t) : void 0
                    }
                }.call(this),
                function() {
                    var t = function(t, e) {
                            function i() {
                                this.constructor = t
                            }
                            for (var o in e) n.call(e, o) && (t[o] = e[o]);
                            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                        },
                        n = {}.hasOwnProperty;
                    e.ErrorRenderer = function(e) {
                        function n(t) {
                            var e;
                            (e = document.createElement("html")).innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body")
                        }
                        return t(n, e), n.prototype.render = function(t) {
                            return this.renderView((e = this, function() {
                                return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t()
                            }));
                            var e
                        }, n.prototype.replaceHeadAndBody = function() {
                            var t, e;
                            return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t)
                        }, n.prototype.activateBodyScriptElements = function() {
                            var t, e, n, i, o, r;
                            for (r = [], e = 0, n = (i = this.getScriptElements()).length; n > e; e++) o = i[e], t = this.createScriptElement(o), r.push(o.parentNode.replaceChild(t, o));
                            return r
                        }, n.prototype.getScriptElements = function() {
                            return document.documentElement.querySelectorAll("script")
                        }, n
                    }(e.Renderer)
                }.call(this),
                function() {
                    e.View = function() {
                        function t(t) {
                            this.delegate = t, this.htmlElement = document.documentElement
                        }
                        return t.prototype.getRootLocation = function() {
                            return this.getSnapshot().getRootLocation()
                        }, t.prototype.getElementForAnchor = function(t) {
                            return this.getSnapshot().getElementForAnchor(t)
                        }, t.prototype.getSnapshot = function() {
                            return e.Snapshot.fromHTMLElement(this.htmlElement)
                        }, t.prototype.render = function(t, e) {
                            var n, i, o;
                            return o = t.snapshot, n = t.error, i = t.isPreview, this.markAsPreview(i), null != o ? this.renderSnapshot(o, i, e) : this.renderError(n, e)
                        }, t.prototype.markAsPreview = function(t) {
                            return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                        }, t.prototype.renderSnapshot = function(t, n, i) {
                            return e.SnapshotRenderer.render(this.delegate, i, this.getSnapshot(), e.Snapshot.wrap(t), n)
                        }, t.prototype.renderError = function(t, n) {
                            return e.ErrorRenderer.render(this.delegate, n, t)
                        }, t
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.ScrollManager = function() {
                        function n(n) {
                            this.delegate = n, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll)
                        }
                        return n.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                        }, n.prototype.scrollToElement = function(t) {
                            return t.scrollIntoView()
                        }, n.prototype.scrollToPosition = function(t) {
                            var e, n;
                            return e = t.x, n = t.y, window.scrollTo(e, n)
                        }, n.prototype.onScroll = function() {
                            return this.updatePosition({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            })
                        }, n.prototype.updatePosition = function(t) {
                            var e;
                            return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                        }, n
                    }()
                }.call(this),
                function() {
                    e.SnapshotCache = function() {
                        function t(t) {
                            this.size = t, this.keys = [], this.snapshots = {}
                        }
                        var n;
                        return t.prototype.has = function(t) {
                            return n(t) in this.snapshots
                        }, t.prototype.get = function(t) {
                            var e;
                            if (this.has(t)) return e = this.read(t), this.touch(t), e
                        }, t.prototype.put = function(t, e) {
                            return this.write(t, e), this.touch(t), e
                        }, t.prototype.read = function(t) {
                            var e;
                            return e = n(t), this.snapshots[e]
                        }, t.prototype.write = function(t, e) {
                            var i;
                            return i = n(t), this.snapshots[i] = e
                        }, t.prototype.touch = function(t) {
                            var e, i;
                            return i = n(t), (e = this.keys.indexOf(i)) > -1 && this.keys.splice(e, 1), this.keys.unshift(i), this.trim()
                        }, t.prototype.trim = function() {
                            var t, e, n, i, o;
                            for (o = [], t = 0, n = (i = this.keys.splice(this.size)).length; n > t; t++) e = i[t], o.push(delete this.snapshots[e]);
                            return o
                        }, n = function(t) {
                            return e.Location.wrap(t).toCacheKey()
                        }, t
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.Visit = function() {
                        function n(n, i, o) {
                            this.controller = n, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                        }
                        var i;
                        return n.prototype.start = function() {
                            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                        }, n.prototype.cancel = function() {
                            var t;
                            return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                        }, n.prototype.complete = function() {
                            var t;
                            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                        }, n.prototype.fail = function() {
                            var t;
                            return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                        }, n.prototype.changeHistory = function() {
                            var t, e;
                            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = i(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
                        }, n.prototype.issueRequest = function() {
                            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                        }, n.prototype.getCachedSnapshot = function() {
                            var t;
                            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
                        }, n.prototype.hasCachedSnapshot = function() {
                            return null != this.getCachedSnapshot()
                        }, n.prototype.loadCachedSnapshot = function() {
                            var t, e;
                            return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function() {
                                var n;
                                return this.cacheSnapshot(), this.controller.render({
                                    snapshot: e,
                                    isPreview: t
                                }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
                            })) : void 0
                        }, n.prototype.loadResponse = function() {
                            return null != this.response ? this.render(function() {
                                var t, e;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                    error: this.response
                                }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                                    snapshot: this.response
                                }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                            }) : void 0
                        }, n.prototype.followRedirect = function() {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                        }, n.prototype.requestStarted = function() {
                            var t;
                            return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
                        }, n.prototype.requestProgressed = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                        }, n.prototype.requestCompletedWithResponse = function(t, n) {
                            return this.response = t, null != n && (this.redirectedToLocation = e.Location.wrap(n)), this.adapter.visitRequestCompleted(this)
                        }, n.prototype.requestFailedWithStatusCode = function(t, e) {
                            return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                        }, n.prototype.requestFinished = function() {
                            var t;
                            return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                        }, n.prototype.performScroll = function() {
                            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                        }, n.prototype.scrollToRestoredPosition = function() {
                            var t, e;
                            return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t), !0) : void 0
                        }, n.prototype.scrollToAnchor = function() {
                            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                        }, n.prototype.scrollToTop = function() {
                            return this.controller.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, n.prototype.recordTimingMetric = function(t) {
                            var e;
                            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                        }, n.prototype.getTimingMetrics = function() {
                            return e.copyObject(this.timingMetrics)
                        }, i = function(t) {
                            switch (t) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, n.prototype.shouldIssueRequest = function() {
                            return "restore" !== this.action || !this.hasCachedSnapshot()
                        }, n.prototype.cacheSnapshot = function() {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                        }, n.prototype.render = function(t) {
                            return this.cancelRender(), this.frame = requestAnimationFrame((e = this, function() {
                                return e.frame = null, t.call(e)
                            }));
                            var e
                        }, n.prototype.cancelRender = function() {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0
                        }, n
                    }()
                }.call(this),
                function() {
                    var t = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    e.Controller = function() {
                        function n() {
                            this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
                        }
                        return n.prototype.start = function() {
                            return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                        }, n.prototype.disable = function() {
                            return this.enabled = !1
                        }, n.prototype.stop = function() {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                        }, n.prototype.clearCache = function() {
                            return this.cache = new e.SnapshotCache(10)
                        }, n.prototype.visit = function(t, n) {
                            var i, o;
                            return null == n && (n = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (i = null != (o = n.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, i)) : window.location = t : void 0
                        }, n.prototype.startVisitToLocationWithAction = function(t, n, i) {
                            var o;
                            return e.supported ? (o = this.getRestorationDataForIdentifier(i), this.startVisit(t, n, {
                                restorationData: o
                            })) : window.location = t
                        }, n.prototype.setProgressBarDelay = function(t) {
                            return this.progressBarDelay = t
                        }, n.prototype.startHistory = function() {
                            return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                        }, n.prototype.stopHistory = function() {
                            return this.history.stop()
                        }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, n) {
                            return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
                        }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, n) {
                            return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
                        }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, n) {
                            var i;
                            return this.restorationIdentifier = n, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: i,
                                historyChanged: !0
                            }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated()
                        }, n.prototype.getCachedSnapshotForLocation = function(t) {
                            var e;
                            return null != (e = this.cache.get(t)) ? e.clone() : void 0
                        }, n.prototype.shouldCacheSnapshot = function() {
                            return this.view.getSnapshot().isCacheable()
                        }, n.prototype.cacheSnapshot = function() {
                            var t, n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), n = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function(e) {
                                return function() {
                                    return e.cache.put(t, n.clone())
                                }
                            }(this))) : void 0
                        }, n.prototype.scrollToAnchor = function(t) {
                            var e;
                            return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, n.prototype.scrollToElement = function(t) {
                            return this.scrollManager.scrollToElement(t)
                        }, n.prototype.scrollToPosition = function(t) {
                            return this.scrollManager.scrollToPosition(t)
                        }, n.prototype.scrollPositionChanged = function(t) {
                            return this.getCurrentRestorationData().scrollPosition = t
                        }, n.prototype.render = function(t, e) {
                            return this.view.render(t, e)
                        }, n.prototype.viewInvalidated = function() {
                            return this.adapter.pageInvalidated()
                        }, n.prototype.viewWillRender = function(t) {
                            return this.notifyApplicationBeforeRender(t)
                        }, n.prototype.viewRendered = function() {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                        }, n.prototype.pageLoaded = function() {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                        }, n.prototype.clickCaptured = function() {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                        }, n.prototype.clickBubbled = function(t) {
                            var e, n, i;
                            return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(i, {
                                action: e
                            })) : void 0
                        }, n.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
                            return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
                        }, n.prototype.applicationAllowsVisitingLocation = function(t) {
                            return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
                        }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, n) {
                            return e.dispatch("turbolinks:click", {
                                target: t,
                                data: {
                                    url: n.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, n.prototype.notifyApplicationBeforeVisitingLocation = function(t) {
                            return e.dispatch("turbolinks:before-visit", {
                                data: {
                                    url: t.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, n.prototype.notifyApplicationAfterVisitingLocation = function(t) {
                            return e.dispatch("turbolinks:visit", {
                                data: {
                                    url: t.absoluteURL
                                }
                            })
                        }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                            return e.dispatch("turbolinks:before-cache")
                        }, n.prototype.notifyApplicationBeforeRender = function(t) {
                            return e.dispatch("turbolinks:before-render", {
                                data: {
                                    newBody: t
                                }
                            })
                        }, n.prototype.notifyApplicationAfterRender = function() {
                            return e.dispatch("turbolinks:render")
                        }, n.prototype.notifyApplicationAfterPageLoad = function(t) {
                            return null == t && (t = {}), e.dispatch("turbolinks:load", {
                                data: {
                                    url: this.location.absoluteURL,
                                    timing: t
                                }
                            })
                        }, n.prototype.startVisit = function(t, e, n) {
                            var i;
                            return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                        }, n.prototype.createVisit = function(t, n, i) {
                            var o, r, s, a, l;
                            return a = (r = null != i ? i : {}).restorationIdentifier, s = r.restorationData, o = r.historyChanged, (l = new e.Visit(this, t, n)).restorationIdentifier = null != a ? a : e.uuid(), l.restorationData = e.copyObject(s), l.historyChanged = o, l.referrer = this.location, l
                        }, n.prototype.visitCompleted = function(t) {
                            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                        }, n.prototype.clickEventIsSignificant = function(t) {
                            return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                        }, n.prototype.getVisitableLinkForNode = function(t) {
                            return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0
                        }, n.prototype.getVisitableLocationForLink = function(t) {
                            var n;
                            return n = new e.Location(t.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0
                        }, n.prototype.getActionForLink = function(t) {
                            var e;
                            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                        }, n.prototype.nodeIsVisitable = function(t) {
                            var n;
                            return !(n = e.closest(t, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks")
                        }, n.prototype.locationIsVisitable = function(t) {
                            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                        }, n.prototype.getCurrentRestorationData = function() {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                        }, n.prototype.getRestorationDataForIdentifier = function(t) {
                            var e;
                            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                        }, n
                    }()
                }.call(this),
                function() {
                    ! function() {
                        var t, e;
                        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
                            for (; t = t.parentNode;)
                                if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
                    }()
                }.call(this),
                function() {
                    var t, n, i;
                    e.start = function() {
                        return n() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0
                    }, n = function() {
                        return null == window.Turbolinks && (window.Turbolinks = e), i()
                    }, t = function() {
                        var t;
                        return (t = new e.Controller).adapter = new e.BrowserAdapter(t), t
                    }, (i = function() {
                        return window.Turbolinks === e
                    })() && e.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
    }.call(this),
    function() {
        var t = this;
        (function() {
            (function() {
                this.Rails = {
                    linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                    buttonClickSelector: {
                        selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                        exclude: "form button"
                    },
                    inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                    formSubmitSelector: "form",
                    formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                    formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                    formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                    fileInputSelector: "input[name][type=file]:not([disabled])",
                    linkDisableSelector: "a[data-disable-with], a[data-disable]",
                    buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
                }
            }).call(this)
        }).call(t);
        var e = t.Rails;
        (function() {
            (function() {
                var t;
                t = null, e.loadCSPNonce = function() {
                    var e;
                    return t = null != (e = document.querySelector("meta[name=csp-nonce]")) ? e.content : void 0
                }, e.cspNonce = function() {
                    return null != t ? t : e.loadCSPNonce()
                }
            }).call(this),
                function() {
                    var t, n;
                    n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, e.matches = function(t, e) {
                        return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
                    }, t = "_ujsData", e.getData = function(e, n) {
                        var i;
                        return null != (i = e[t]) ? i[n] : void 0
                    }, e.setData = function(e, n, i) {
                        return null == e[t] && (e[t] = {}), e[t][n] = i
                    }, e.$ = function(t) {
                        return Array.prototype.slice.call(document.querySelectorAll(t))
                    }
                }.call(this),
                function() {
                    var t, n, i;
                    t = e.$, i = e.csrfToken = function() {
                        var t;
                        return (t = document.querySelector("meta[name=csrf-token]")) && t.content
                    }, n = e.csrfParam = function() {
                        var t;
                        return (t = document.querySelector("meta[name=csrf-param]")) && t.content
                    }, e.CSRFProtection = function(t) {
                        var e;
                        if (null != (e = i())) return t.setRequestHeader("X-CSRF-Token", e)
                    }, e.refreshCSRFTokens = function() {
                        var e, o;
                        if (o = i(), e = n(), null != o && null != e) return t('form input[name="' + e + '"]').forEach(function(t) {
                            return t.value = o
                        })
                    }
                }.call(this),
                function() {
                    var t, n, i, o;
                    i = e.matches, "function" != typeof(t = window.CustomEvent) && ((t = function(t, e) {
                        var n;
                        return (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
                    }).prototype = window.Event.prototype, o = t.prototype.preventDefault, t.prototype.preventDefault = function() {
                        var t;
                        return t = o.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        }), t
                    }), n = e.fire = function(e, n, i) {
                        var o;
                        return o = new t(n, {
                            bubbles: !0,
                            cancelable: !0,
                            detail: i
                        }), e.dispatchEvent(o), !o.defaultPrevented
                    }, e.stopEverything = function(t) {
                        return n(t.target, "ujs:everythingStopped"), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()
                    }, e.delegate = function(t, e, n, o) {
                        return t.addEventListener(n, function(t) {
                            var n;
                            for (n = t.target; n instanceof Element && !i(n, e);) n = n.parentNode;
                            if (n instanceof Element && !1 === o.call(n, t)) return t.preventDefault(), t.stopPropagation()
                        })
                    }
                }.call(this),
                function() {
                    var t, n, i, o, r, s;
                    o = e.cspNonce, n = e.CSRFProtection, e.fire, t = {
                        "*": "*/*",
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript",
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    }, e.ajax = function(t) {
                        var e;
                        return t = r(t), e = i(t, function() {
                            var n, i;
                            return i = s(null != (n = e.response) ? n : e.responseText, e.getResponseHeader("Content-Type")), 2 === Math.floor(e.status / 100) ? "function" == typeof t.success && t.success(i, e.statusText, e) : "function" == typeof t.error && t.error(i, e.statusText, e), "function" == typeof t.complete ? t.complete(e, e.statusText) : void 0
                        }), !(null != t.beforeSend && !t.beforeSend(e, t)) && (e.readyState === XMLHttpRequest.OPENED ? e.send(t.data) : void 0)
                    }, r = function(e) {
                        return e.url = e.url || location.href, e.type = e.type.toUpperCase(), "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data), null == t[e.dataType] && (e.dataType = "*"), e.accept = t[e.dataType], "*" !== e.dataType && (e.accept += ", */*; q=0.01"), e
                    }, i = function(t, e) {
                        var i;
                        return (i = new XMLHttpRequest).open(t.type, t.url, !0), i.setRequestHeader("Accept", t.accept), "string" == typeof t.data && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n(i), i.withCredentials = !!t.withCredentials, i.onreadystatechange = function() {
                            if (i.readyState === XMLHttpRequest.DONE) return e(i)
                        }, i
                    }, s = function(t, e) {
                        var n, i;
                        if ("string" == typeof t && "string" == typeof e)
                            if (e.match(/\bjson\b/)) try {
                                    t = JSON.parse(t)
                                } catch (r) {} else if (e.match(/\b(?:java|ecma)script\b/))(i = document.createElement("script")).setAttribute("nonce", o()), i.text = t, document.head.appendChild(i).parentNode.removeChild(i);
                                else if (e.match(/\b(xml|html|svg)\b/)) {
                            n = new DOMParser, e = e.replace(/;.+/, "");
                            try {
                                t = n.parseFromString(t, e)
                            } catch (r) {}
                        }
                        return t
                    }, e.href = function(t) {
                        return t.href
                    }, e.isCrossDomain = function(t) {
                        var e, n;
                        (e = document.createElement("a")).href = location.href, n = document.createElement("a");
                        try {
                            return n.href = t, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                        } catch (i) {
                            return i, !0
                        }
                    }
                }.call(this),
                function() {
                    var t, n;
                    t = e.matches, n = function(t) {
                        return Array.prototype.slice.call(t)
                    }, e.serializeElement = function(e, i) {
                        var o, r;
                        return o = [e], t(e, "form") && (o = n(e.elements)), r = [], o.forEach(function(e) {
                            if (e.name && !e.disabled) return t(e, "select") ? n(e.options).forEach(function(t) {
                                if (t.selected) return r.push({
                                    name: e.name,
                                    value: t.value
                                })
                            }) : e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type) ? r.push({
                                name: e.name,
                                value: e.value
                            }) : void 0
                        }), i && r.push(i), r.map(function(t) {
                            return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
                        }).join("&")
                    }, e.formElements = function(e, i) {
                        return t(e, "form") ? n(e.elements).filter(function(e) {
                            return t(e, i)
                        }) : n(e.querySelectorAll(i))
                    }
                }.call(this),
                function() {
                    var t, n, i;
                    n = e.fire, i = e.stopEverything, e.handleConfirm = function(e) {
                        if (!t(this)) return i(e)
                    }, t = function(t) {
                        var e, i, o;
                        if (!(o = t.getAttribute("data-confirm"))) return !0;
                        if (e = !1, n(t, "confirm")) {
                            try {
                                e = confirm(o)
                            } catch (r) {}
                            i = n(t, "confirm:complete", [e])
                        }
                        return e && i
                    }
                }.call(this),
                function() {
                    var t, n, i, o, r, s, a, l, c, u, d;
                    c = e.matches, l = e.getData, u = e.setData, d = e.stopEverything, a = e.formElements, e.handleDisabledElement = function(t) {
                        if (this.disabled) return d(t)
                    }, e.enableElement = function(t) {
                        var n;
                        return n = t instanceof Event ? t.target : t, c(n, e.linkDisableSelector) ? s(n) : c(n, e.buttonDisableSelector) || c(n, e.formEnableSelector) ? o(n) : c(n, e.formSubmitSelector) ? r(n) : void 0
                    }, e.disableElement = function(o) {
                        var r;
                        return r = o instanceof Event ? o.target : o, c(r, e.linkDisableSelector) ? i(r) : c(r, e.buttonDisableSelector) || c(r, e.formDisableSelector) ? t(r) : c(r, e.formSubmitSelector) ? n(r) : void 0
                    }, i = function(t) {
                        var e;
                        return null != (e = t.getAttribute("data-disable-with")) && (u(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e), t.addEventListener("click", d), u(t, "ujs:disabled", !0)
                    }, s = function(t) {
                        var e;
                        return null != (e = l(t, "ujs:enable-with")) && (t.innerHTML = e, u(t, "ujs:enable-with", null)), t.removeEventListener("click", d), u(t, "ujs:disabled", null)
                    }, n = function(n) {
                        return a(n, e.formDisableSelector).forEach(t)
                    }, t = function(t) {
                        var e;
                        return null != (e = t.getAttribute("data-disable-with")) && (c(t, "button") ? (u(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e) : (u(t, "ujs:enable-with", t.value), t.value = e)), t.disabled = !0, u(t, "ujs:disabled", !0)
                    }, r = function(t) {
                        return a(t, e.formEnableSelector).forEach(o)
                    }, o = function(t) {
                        var e;
                        return null != (e = l(t, "ujs:enable-with")) && (c(t, "button") ? t.innerHTML = e : t.value = e, u(t, "ujs:enable-with", null)), t.disabled = !1, u(t, "ujs:disabled", null)
                    }
                }.call(this),
                function() {
                    var t;
                    t = e.stopEverything, e.handleMethod = function(n) {
                        var i, o, r, s, a, l, c;
                        if (c = (l = this).getAttribute("data-method")) return a = e.href(l), o = e.csrfToken(), i = e.csrfParam(), r = document.createElement("form"), s = "<input name='_method' value='" + c + "' type='hidden' />", null == i || null == o || e.isCrossDomain(a) || (s += "<input name='" + i + "' value='" + o + "' type='hidden' />"), s += '<input type="submit" />', r.method = "post", r.action = a, r.target = l.target, r.innerHTML = s, r.style.display = "none", document.body.appendChild(r), r.querySelector('[type="submit"]').click(), t(n)
                    }
                }.call(this),
                function() {
                    var t, n, i, o, r, s, a, l, c, u = [].slice;
                    s = e.matches, i = e.getData, l = e.setData, n = e.fire, c = e.stopEverything, t = e.ajax, o = e.isCrossDomain, a = e.serializeElement, r = function(t) {
                        var e;
                        return null != (e = t.getAttribute("data-remote")) && "false" !== e
                    }, e.handleRemote = function(d) {
                        var h, p, f, m, g, v, y;
                        return !r(m = this) || (n(m, "ajax:before") ? (y = m.getAttribute("data-with-credentials"), f = m.getAttribute("data-type") || "script", s(m, e.formSubmitSelector) ? (h = i(m, "ujs:submit-button"), g = i(m, "ujs:submit-button-formmethod") || m.method, v = i(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href, "GET" === g.toUpperCase() && (v = v.replace(/\?.*$/, "")), "multipart/form-data" === m.enctype ? (p = new FormData(m), null != h && p.append(h.name, h.value)) : p = a(m, h), l(m, "ujs:submit-button", null), l(m, "ujs:submit-button-formmethod", null), l(m, "ujs:submit-button-formaction", null)) : s(m, e.buttonClickSelector) || s(m, e.inputChangeSelector) ? (g = m.getAttribute("data-method"), v = m.getAttribute("data-url"), p = a(m, m.getAttribute("data-params"))) : (g = m.getAttribute("data-method"), v = e.href(m), p = m.getAttribute("data-params")), t({
                            type: g || "GET",
                            url: v,
                            data: p,
                            dataType: f,
                            beforeSend: function(t, e) {
                                return n(m, "ajax:beforeSend", [t, e]) ? n(m, "ajax:send", [t]) : (n(m, "ajax:stopped"), !1)
                            },
                            success: function() {
                                var t;
                                return t = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:success", t)
                            },
                            error: function() {
                                var t;
                                return t = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:error", t)
                            },
                            complete: function() {
                                var t;
                                return t = 1 <= arguments.length ? u.call(arguments, 0) : [], n(m, "ajax:complete", t)
                            },
                            crossDomain: o(v),
                            withCredentials: null != y && "false" !== y
                        }), c(d)) : (n(m, "ajax:stopped"), !1))
                    }, e.formSubmitButtonClick = function() {
                        var t, e;
                        if (e = (t = this).form) return t.name && l(e, "ujs:submit-button", {
                            name: t.name,
                            value: t.value
                        }), l(e, "ujs:formnovalidate-button", t.formNoValidate), l(e, "ujs:submit-button-formaction", t.getAttribute("formaction")), l(e, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
                    }, e.preventInsignificantClick = function(t) {
                        var e, n, i, o;
                        if (o = ((i = this).getAttribute("data-method") || "GET").toUpperCase(), e = i.getAttribute("data-params"), n = (t.metaKey || t.ctrlKey) && "GET" === o && !e, !(0 === t.button) || n) return t.stopImmediatePropagation()
                    }
                }.call(this),
                function() {
                    var t, n, i, o, r, s, a, l, c, u, d, h, p, f, m;
                    if (s = e.fire, i = e.delegate, l = e.getData, t = e.$, m = e.refreshCSRFTokens, n = e.CSRFProtection, p = e.loadCSPNonce, r = e.enableElement, o = e.disableElement, u = e.handleDisabledElement, c = e.handleConfirm, f = e.preventInsignificantClick, h = e.handleRemote, a = e.formSubmitButtonClick, d = e.handleMethod, "undefined" != typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                        if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                        jQuery.rails = e, jQuery.ajaxPrefilter(function(t, e, i) {
                            if (!t.crossDomain) return n(i)
                        })
                    }
                    e.start = function() {
                        if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                        return window.addEventListener("pageshow", function() {
                            return t(e.formEnableSelector).forEach(function(t) {
                                if (l(t, "ujs:disabled")) return r(t)
                            }), t(e.linkDisableSelector).forEach(function(t) {
                                if (l(t, "ujs:disabled")) return r(t)
                            })
                        }), i(document, e.linkDisableSelector, "ajax:complete", r), i(document, e.linkDisableSelector, "ajax:stopped", r), i(document, e.buttonDisableSelector, "ajax:complete", r), i(document, e.buttonDisableSelector, "ajax:stopped", r), i(document, e.linkClickSelector, "click", f), i(document, e.linkClickSelector, "click", u), i(document, e.linkClickSelector, "click", c), i(document, e.linkClickSelector, "click", o), i(document, e.linkClickSelector, "click", h), i(document, e.linkClickSelector, "click", d), i(document, e.buttonClickSelector, "click", f), i(document, e.buttonClickSelector, "click", u), i(document, e.buttonClickSelector, "click", c), i(document, e.buttonClickSelector, "click", o), i(document, e.buttonClickSelector, "click", h), i(document, e.inputChangeSelector, "change", u), i(document, e.inputChangeSelector, "change", c), i(document, e.inputChangeSelector, "change", h), i(document, e.formSubmitSelector, "submit", u), i(document, e.formSubmitSelector, "submit", c), i(document, e.formSubmitSelector, "submit", h), i(document, e.formSubmitSelector, "submit", function(t) {
                            return setTimeout(function() {
                                return o(t)
                            }, 13)
                        }), i(document, e.formSubmitSelector, "ajax:send", o), i(document, e.formSubmitSelector, "ajax:complete", r), i(document, e.formInputClickSelector, "click", f), i(document, e.formInputClickSelector, "click", u), i(document, e.formInputClickSelector, "click", c), i(document, e.formInputClickSelector, "click", a), document.addEventListener("DOMContentLoaded", m), document.addEventListener("DOMContentLoaded", p), window._rails_loaded = !0
                    }, window.Rails === e && s(document, "rails:attachBindings") && e.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
    }.call(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
    }(this, function() {
        function t(t, e, n) {
            return t < e ? e : t > n ? n : t
        }

        function e(t) {
            return 100 * (-1 + t)
        }

        function n(t, n, i) {
            var o;
            return (o = "translate3d" === d.positionUsing ? {
                transform: "translate3d(" + e(t) + "%,0,0)"
            } : "translate" === d.positionUsing ? {
                transform: "translate(" + e(t) + "%,0)"
            } : {
                "margin-left": e(t) + "%"
            }).transition = "all " + n + "ms " + i, o
        }

        function i(t, e) {
            return ("string" == typeof t ? t : s(t)).indexOf(" " + e + " ") >= 0
        }

        function o(t, e) {
            var n = s(t),
                o = n + e;
            i(n, e) || (t.className = o.substring(1))
        }

        function r(t, e) {
            var n, o = s(t);
            i(t, e) && (n = o.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
        }

        function s(t) {
            return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
        }

        function a(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        var l, c, u = {
                version: "0.2.0"
            },
            d = u.settings = {
                minimum: .08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: .02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            };
        u.configure = function(t) {
            var e, n;
            for (e in t)(n = t[e]) !== undefined && t.hasOwnProperty(e) && (d[e] = n);
            return this
        }, u.status = null, u.set = function(e) {
            var i = u.isStarted();
            e = t(e, d.minimum, 1), u.status = 1 === e ? null : e;
            var o = u.render(!i),
                r = o.querySelector(d.barSelector),
                s = d.speed,
                a = d.easing;
            return o.offsetWidth, h(function(t) {
                "" === d.positionUsing && (d.positionUsing = u.getPositioningCSS()), p(r, n(e, s, a)), 1 === e ? (p(o, {
                    transition: "none",
                    opacity: 1
                }), o.offsetWidth, setTimeout(function() {
                    p(o, {
                        transition: "all " + s + "ms linear",
                        opacity: 0
                    }), setTimeout(function() {
                        u.remove(), t()
                    }, s)
                }, s)) : setTimeout(t, s)
            }), this
        }, u.isStarted = function() {
            return "number" == typeof u.status
        }, u.start = function() {
            u.status || u.set(0);
            var t = function() {
                setTimeout(function() {
                    u.status && (u.trickle(), t())
                }, d.trickleSpeed)
            };
            return d.trickle && t(), this
        }, u.done = function(t) {
            return t || u.status ? u.inc(.3 + .5 * Math.random()).set(1) : this
        }, u.inc = function(e) {
            var n = u.status;
            return n ? ("number" != typeof e && (e = (1 - n) * t(Math.random() * n, .1, .95)), n = t(n + e, 0, .994), u.set(n)) : u.start()
        }, u.trickle = function() {
            return u.inc(Math.random() * d.trickleRate)
        }, l = 0, c = 0, u.promise = function(t) {
            return t && "resolved" !== t.state() ? (0 === c && u.start(), l++, c++, t.always(function() {
                0 == --c ? (l = 0, u.done()) : u.set((l - c) / l)
            }), this) : this
        }, u.render = function(t) {
            if (u.isRendered()) return document.getElementById("nprogress");
            o(document.documentElement, "nprogress-busy");
            var n = document.createElement("div");
            n.id = "nprogress", n.innerHTML = d.template;
            var i, r = n.querySelector(d.barSelector),
                s = t ? "-100" : e(u.status || 0),
                l = document.querySelector(d.parent);
            return p(r, {
                transition: "all 0 linear",
                transform: "translate3d(" + s + "%,0,0)"
            }), d.showSpinner || (i = n.querySelector(d.spinnerSelector)) && a(i), l != document.body && o(l, "nprogress-custom-parent"), l.appendChild(n), n
        }, u.remove = function() {
            r(document.documentElement, "nprogress-busy"), r(document.querySelector(d.parent), "nprogress-custom-parent");
            var t = document.getElementById("nprogress");
            t && a(t)
        }, u.isRendered = function() {
            return !!document.getElementById("nprogress")
        }, u.getPositioningCSS = function() {
            var t = document.body.style,
                e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
            return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
        };
        var h = function() {
                function t() {
                    var n = e.shift();
                    n && n(t)
                }
                var e = [];
                return function(n) {
                    e.push(n), 1 == e.length && t()
                }
            }(),
            p = function() {
                function t(t) {
                    return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                        return e.toUpperCase()
                    })
                }

                function e(t) {
                    var e = document.body.style;
                    if (t in e) return t;
                    for (var n, i = o.length, r = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                        if ((n = o[i] + r) in e) return n;
                    return t
                }

                function n(n) {
                    return n = t(n), r[n] || (r[n] = e(n))
                }

                function i(t, e, i) {
                    e = n(e), t.style[e] = i
                }
                var o = ["Webkit", "O", "Moz", "ms"],
                    r = {};
                return function(t, e) {
                    var n, o, r = arguments;
                    if (2 == r.length)
                        for (n in e)(o = e[n]) !== undefined && e.hasOwnProperty(n) && i(t, n, o);
                    else i(t, r[1], r[2])
                }
            }();
        return u
    }),
    /**
     * jQuery Cookie plugin
     *
     * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     *
     */
    jQuery.cookie = function(t, e, n) {
        if (arguments.length > 1 && "[object Object]" !== String(e)) {
            if (n = jQuery.extend({}, n), null !== e && e !== undefined || (n.expires = -1), "number" == typeof n.expires) {
                var i = n.expires,
                    o = n.expires = new Date;
                o.setDate(o.getDate() + i)
            }
            return e = String(e), document.cookie = [encodeURIComponent(t), "=", n.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
        }
        var r, s = (n = e || {}).raw ? function(t) {
            return t
        } : decodeURIComponent;
        return (r = new RegExp("(?:^|; )" + encodeURIComponent(t) + "=([^;]*)").exec(document.cookie)) ? s(r[1]) : null
    },
    /*
    Copyright 2012 Igor Vaynberg

    Version: 3.5.4 Timestamp: Sun Aug 30 13:30:32 EDT 2015

    This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
    General Public License version 2 (the "GPL License"). You may choose either license to govern your
    use of this software only upon the condition that you accept all of the terms of either the Apache
    License or the GPL License.

    You may obtain a copy of the Apache License and the GPL License at:

        http://www.apache.org/licenses/LICENSE-2.0
        http://www.gnu.org/licenses/gpl-2.0.html

    Unless required by applicable law or agreed to in writing, software distributed under the
    Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
    CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
    the specific language governing permissions and limitations under the Apache License and the GPL License.
    */
    function(t) {
        "undefined" == typeof t.fn.each2 && t.extend(t.fn, {
            each2: function(e) {
                for (var n = t([0]), i = -1, o = this.length; ++i < o && (n.context = n[0] = this[i]) && !1 !== e.call(n[0], i, n););
                return this
            }
        })
    }(jQuery),
    function(t, e) {
        "use strict";

        function n(e) {
            var n = t(document.createTextNode(""));
            e.before(n), n.before(e), n.remove()
        }

        function i(t) {
            function e(t) {
                return H[t] || t
            }
            return t.replace(/[^\u0000-\u007E]/g, e)
        }

        function o(t, e) {
            for (var n = 0, i = e.length; n < i; n += 1)
                if (s(t, e[n])) return n;
            return -1
        }

        function r() {
            var e = t(F);
            e.appendTo(document.body);
            var n = {
                width: e.width() - e[0].clientWidth,
                height: e.height() - e[0].clientHeight
            };
            return e.remove(), n
        }

        function s(t, n) {
            return t === n || t !== e && n !== e && (null !== t && null !== n && (t.constructor === String ? t + "" == n + "" : n.constructor === String && n + "" == t + ""))
        }

        function a(t, e, n) {
            var i, o, r;
            if (null === t || t.length < 1) return [];
            for (o = 0, r = (i = t.split(e)).length; o < r; o += 1) i[o] = n(i[o]);
            return i
        }

        function l(t) {
            return t.outerWidth(!1) - t.width()
        }

        function c(n) {
            var i = "keyup-change-value";
            n.on("keydown", function() {
                t.data(n, i) === e && t.data(n, i, n.val())
            }), n.on("keyup", function() {
                var o = t.data(n, i);
                o !== e && n.val() !== o && (t.removeData(n, i), n.trigger("keyup-change"))
            })
        }

        function u(n) {
            n.on("mousemove", function(n) {
                var i = q;
                i !== e && i.x === n.pageX && i.y === n.pageY || t(n.target).trigger("mousemove-filtered", n)
            })
        }

        function d(t, n, i) {
            var o;
            return i = i || e,
                function() {
                    var e = arguments;
                    window.clearTimeout(o), o = window.setTimeout(function() {
                        n.apply(i, e)
                    }, t)
                }
        }

        function h(t, e) {
            var n = d(t, function(t) {
                e.trigger("scroll-debounced", t)
            });
            e.on("scroll", function(t) {
                o(t.target, e.get()) >= 0 && n(t)
            })
        }

        function p(t) {
            t[0] !== document.activeElement && window.setTimeout(function() {
                var e, n = t[0],
                    i = t.val().length;
                t.focus(), (n.offsetWidth > 0 || n.offsetHeight > 0) && n === document.activeElement && (n.setSelectionRange ? n.setSelectionRange(i, i) : n.createTextRange && ((e = n.createTextRange()).collapse(!1), e.select()))
            }, 0)
        }

        function f(e) {
            var n = 0,
                i = 0;
            if ("selectionStart" in (e = t(e)[0])) n = e.selectionStart, i = e.selectionEnd - n;
            else if ("selection" in document) {
                e.focus();
                var o = document.selection.createRange();
                i = document.selection.createRange().text.length, o.moveStart("character", -e.value.length), n = o.text.length - i
            }
            return {
                offset: n,
                length: i
            }
        }

        function m(t) {
            t.preventDefault(), t.stopPropagation()
        }

        function g(t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }

        function v(e) {
            if (!R) {
                var n = e[0].currentStyle || window.getComputedStyle(e[0], null);
                (R = t(document.createElement("div")).css({
                    position: "absolute",
                    left: "-10000px",
                    top: "-10000px",
                    display: "none",
                    fontSize: n.fontSize,
                    fontFamily: n.fontFamily,
                    fontStyle: n.fontStyle,
                    fontWeight: n.fontWeight,
                    letterSpacing: n.letterSpacing,
                    textTransform: n.textTransform,
                    whiteSpace: "nowrap"
                })).attr("class", "select2-sizer"), t(document.body).append(R)
            }
            return R.text(e.val()), R.width()
        }

        function y(e, n, i) {
            var o, r, s = [];
            (o = t.trim(e.attr("class"))) && t((o = "" + o).split(/\s+/)).each2(function() {
                0 === this.indexOf("select2-") && s.push(this)
            }), (o = t.trim(n.attr("class"))) && t((o = "" + o).split(/\s+/)).each2(function() {
                0 !== this.indexOf("select2-") && (r = i(this)) && s.push(r)
            }), e.attr("class", s.join(" "))
        }

        function b(t, e, n, o) {
            var r = i(t.toUpperCase()).indexOf(i(e.toUpperCase())),
                s = e.length;
            r < 0 ? n.push(o(t)) : (n.push(o(t.substring(0, r))), n.push("<span class='select2-match'>"), n.push(o(t.substring(r, r + s))), n.push("</span>"), n.push(o(t.substring(r + s, t.length))))
        }

        function w(t) {
            var e = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            };
            return String(t).replace(/[&<>"'\/\\]/g, function(t) {
                return e[t]
            })
        }

        function x(n) {
            var i, o = null,
                r = n.quietMillis || 100,
                s = n.url,
                a = this;
            return function(l) {
                window.clearTimeout(i), i = window.setTimeout(function() {
                    var i = n.data,
                        r = s,
                        c = n.transport || t.fn.select2.ajaxDefaults.transport,
                        u = {
                            type: n.type || "GET",
                            cache: n.cache || !1,
                            jsonpCallback: n.jsonpCallback || e,
                            dataType: n.dataType || "json"
                        },
                        d = t.extend({}, t.fn.select2.ajaxDefaults.params, u);
                    i = i ? i.call(a, l.term, l.page, l.context) : null, r = "function" == typeof r ? r.call(a, l.term, l.page, l.context) : r, o && "function" == typeof o.abort && o.abort(), n.params && (t.isFunction(n.params) ? t.extend(d, n.params.call(a)) : t.extend(d, n.params)), t.extend(d, {
                        url: r,
                        dataType: n.dataType,
                        data: i,
                        success: function(t) {
                            var e = n.results(t, l.page, l);
                            l.callback(e)
                        },
                        error: function(t, e, n) {
                            var i = {
                                hasError: !0,
                                jqXHR: t,
                                textStatus: e,
                                errorThrown: n
                            };
                            l.callback(i)
                        }
                    }), o = c.call(a, d)
                }, r)
            }
        }

        function C(e) {
            var n, i, o = e,
                r = function(t) {
                    return "" + t.text
                };
            t.isArray(o) && (o = {
                results: i = o
            }), !1 === t.isFunction(o) && (i = o, o = function() {
                return i
            });
            var s = o();
            return s.text && (r = s.text, t.isFunction(r) || (n = s.text, r = function(t) {
                    return t[n]
                })),
                function(e) {
                    var n, i = e.term,
                        s = {
                            results: []
                        };
                    "" !== i ? (n = function(o, s) {
                        var a, l;
                        if ((o = o[0]).children) {
                            for (l in a = {}, o) o.hasOwnProperty(l) && (a[l] = o[l]);
                            a.children = [], t(o.children).each2(function(t, e) {
                                n(e, a.children)
                            }), (a.children.length || e.matcher(i, r(a), o)) && s.push(a)
                        } else e.matcher(i, r(o), o) && s.push(o)
                    }, t(o().results).each2(function(t, e) {
                        n(e, s.results)
                    }), e.callback(s)) : e.callback(o())
                }
        }

        function S(n) {
            var i = t.isFunction(n);
            return function(o) {
                var r = o.term,
                    s = {
                        results: []
                    },
                    a = i ? n(o) : n;
                t.isArray(a) && (t(a).each(function() {
                    var t = this.text !== e,
                        n = t ? this.text : this;
                    ("" === r || o.matcher(r, n)) && s.results.push(t ? this : {
                        id: this,
                        text: this
                    })
                }), o.callback(s))
            }
        }

        function E(e, n) {
            if (t.isFunction(e)) return !0;
            if (!e) return !1;
            if ("string" == typeof e) return !0;
            throw new Error(n + " must be a string, function, or falsy value")
        }

        function k(e, n) {
            if (t.isFunction(e)) {
                var i = Array.prototype.slice.call(arguments, 2);
                return e.apply(n, i)
            }
            return e
        }

        function T(e) {
            var n = 0;
            return t.each(e, function(t, e) {
                e.children ? n += T(e.children) : n++
            }), n
        }

        function _(t, n, i, o) {
            var r, a, l, c, u, d = t,
                h = !1;
            if (!o.createSearchChoice || !o.tokenSeparators || o.tokenSeparators.length < 1) return e;
            for (;;) {
                for (a = -1, l = 0, c = o.tokenSeparators.length; l < c && (u = o.tokenSeparators[l], !((a = t.indexOf(u)) >= 0)); l++);
                if (a < 0) break;
                if (r = t.substring(0, a), t = t.substring(a + u.length), r.length > 0 && (r = o.createSearchChoice.call(this, r, n)) !== e && null !== r && o.id(r) !== e && null !== o.id(r)) {
                    for (h = !1, l = 0, c = n.length; l < c; l++)
                        if (s(o.id(r), o.id(n[l]))) {
                            h = !0;
                            break
                        } h || i(r)
                }
            }
            return d !== t ? t : void 0
        }

        function A() {
            var e = this;
            t.each(arguments, function(t, n) {
                e[n].remove(), e[n] = null
            })
        }

        function L(e, n) {
            var i = function() {};
            return i.prototype = new e, i.prototype.constructor = i, i.prototype.parent = e.prototype, i.prototype = t.extend(i.prototype, n), i
        }
        if (window.Select2 === e) {
            var D, P, I, O, R, j, N, M, q = {
                    x: 0,
                    y: 0
                },
                $ = {
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    SPACE: 32,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    HOME: 36,
                    END: 35,
                    BACKSPACE: 8,
                    DELETE: 46,
                    isArrow: function(t) {
                        switch (t = t.which ? t.which : t) {
                            case $.LEFT:
                            case $.RIGHT:
                            case $.UP:
                            case $.DOWN:
                                return !0
                        }
                        return !1
                    },
                    isControl: function(t) {
                        switch (t.which) {
                            case $.SHIFT:
                            case $.CTRL:
                            case $.ALT:
                                return !0
                        }
                        return !!t.metaKey
                    },
                    isFunctionKey: function(t) {
                        return (t = t.which ? t.which : t) >= 112 && t <= 123
                    }
                },
                F = "<div class='select2-measure-scrollbar'></div>",
                H = {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\xc3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\xc4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\xc5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\xc6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\xc7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\xcb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\xcf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\xd1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\xd5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\xd6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\xd8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\xdc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\xdd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\xe3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\xe4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\xe5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\xe6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\xe7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\xeb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\xef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\xf1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\xf5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\xf6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\xf8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\xdf": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\xfc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\xfd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\xff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                };
            j = t(document), M = 1, O = function() {
                return M++
            }, P = L(D = L(Object, {
                bind: function(t) {
                    var e = this;
                    return function() {
                        t.apply(e, arguments)
                    }
                },
                init: function(n) {
                    var i, o, s = ".select2-results";
                    this.opts = n = this.prepareOpts(n), this.id = n.id, n.element.data("select2") !== e && null !== n.element.data("select2") && n.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = t(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = t("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    }).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (n.element.attr("id") || "autogen" + O()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", n.element.attr("title")), this.body = t(document.body), y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", n.element.attr("style")), this.container.css(k(n.containerCss, this.opts.element)), this.container.addClass(k(n.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", m), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(k(n.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", m), this.results = i = this.container.find(s), this.search = o = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", m), u(this.results), this.dropdown.on("mousemove-filtered", s, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", s, this.bind(function(t) {
                        this._touchEvent = !0, this.highlightUnderEvent(t)
                    })), this.dropdown.on("touchmove", s, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", s, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
                        this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                    })), h(80, this.results), this.dropdown.on("scroll-debounced", s, this.bind(this.loadMoreIfNeeded)), t(this.container).on("change", ".select2-input", function(t) {
                        t.stopPropagation()
                    }), t(this.dropdown).on("change", ".select2-input", function(t) {
                        t.stopPropagation()
                    }), t.fn.mousewheel && i.mousewheel(function(t, e, n, o) {
                        var r = i.scrollTop();
                        o > 0 && r - o <= 0 ? (i.scrollTop(0), m(t)) : o < 0 && i.get(0).scrollHeight - i.scrollTop() + o <= i.height() && (i.scrollTop(i.get(0).scrollHeight - i.height()), m(t))
                    }), c(o), o.on("keyup-change input paste", this.bind(this.updateResults)), o.on("focus", function() {
                        o.addClass("select2-focused")
                    }), o.on("blur", function() {
                        o.removeClass("select2-focused")
                    }), this.dropdown.on("mouseup", s, this.bind(function(e) {
                        t(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                    })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(t) {
                        t.stopPropagation()
                    }), this.lastSearchTerm = e, t.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== n.maximumInputLength && this.search.attr("maxlength", n.maximumInputLength);
                    var a = n.element.prop("disabled");
                    a === e && (a = !1), this.enable(!a);
                    var l = n.element.prop("readonly");
                    l === e && (l = !1), this.readonly(l), N = N || r(), this.autofocus = n.element.prop("autofocus"), n.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", n.searchInputPlaceholder)
                },
                destroy: function() {
                    var t = this.opts.element,
                        n = t.data("select2"),
                        i = this;
                    this.close(), t.length && t[0].detachEvent && i._sync && t.each(function() {
                        i._sync && this.detachEvent("onpropertychange", i._sync)
                    }), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, n !== e && (n.container.remove(), n.liveRegion.remove(), n.dropdown.remove(), t.removeData("select2").off(".select2"), t.is("input[type='hidden']") ? t.css("display", "") : (t.show().prop("autofocus", this.autofocus || !1), this.elementTabIndex ? t.attr({
                        tabindex: this.elementTabIndex
                    }) : t.removeAttr("tabindex"), t.show())), A.call(this, "container", "liveRegion", "dropdown", "results", "search")
                },
                optionToData: function(t) {
                    return t.is("option") ? {
                        id: t.prop("value"),
                        text: t.text(),
                        element: t.get(),
                        css: t.attr("class"),
                        disabled: t.prop("disabled"),
                        locked: s(t.attr("locked"), "locked") || s(t.data("locked"), !0)
                    } : t.is("optgroup") ? {
                        text: t.attr("label"),
                        children: [],
                        element: t.get(),
                        css: t.attr("class")
                    } : void 0
                },
                prepareOpts: function(n) {
                    var i, o, r, l, c = this;
                    if ("select" === (i = n.element).get(0).tagName.toLowerCase() && (this.select = o = n.element), o && t.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                            if (this in n) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                        }), n.debug = n.debug || t.fn.select2.defaults.debug, n.debug && console && console.warn && (null != n.id && console.warn("Select2: The `id` option has been removed in Select2 4.0.0, consider renaming your `id` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != n.text && console.warn("Select2: The `text` option has been removed in Select2 4.0.0, consider renaming your `text` property or mapping the property before your data makes it to Select2. You can read more at https://select2.github.io/announcements-4.0.html#changed-id"), null != n.sortResults && console.warn("Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. "), null != n.selectOnBlur && console.warn("Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0."), null != n.ajax && null != n.ajax.results && console.warn("Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0."), null != n.formatNoResults && console.warn("Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0."), null != n.formatSearching && console.warn("Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0."), null != n.formatInputTooShort && console.warn("Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0."), null != n.formatInputTooLong && console.warn("Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0."), null != n.formatLoading && console.warn("Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0."), null != n.formatSelectionTooBig && console.warn("Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0."), n.element.data("select2Tags") && console.warn("Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.")), null != n.element.data("tags")) {
                        var u = n.element.data("tags");
                        t.isArray(u) || (u = []), n.element.data("select2Tags", u)
                    }
                    if (null != n.sorter && (n.sortResults = n.sorter), null != n.selectOnClose && (n.selectOnBlur = n.selectOnClose), null != n.ajax && t.isFunction(n.ajax.processResults) && (n.ajax.results = n.ajax.processResults), null != n.language) {
                        var d = n.language;
                        t.isFunction(d.noMatches) && (n.formatNoMatches = d.noMatches), t.isFunction(d.searching) && (n.formatSearching = d.searching), t.isFunction(d.inputTooShort) && (n.formatInputTooShort = d.inputTooShort), t.isFunction(d.inputTooLong) && (n.formatInputTooLong = d.inputTooLong), t.isFunction(d.loadingMore) && (n.formatLoading = d.loadingMore), t.isFunction(d.maximumSelected) && (n.formatSelectionTooBig = d.maximumSelected)
                    }
                    if ("function" != typeof(n = t.extend({}, {
                            populateResults: function(i, o, r) {
                                var s, a = this.opts.id,
                                    l = this.liveRegion;
                                (s = function(i, o, u) {
                                    var d, h, p, f, m, g, v, y, b, w, x = [];
                                    for (d = 0, h = (i = n.sortResults(i, o, r)).length; d < h; d += 1) f = !(m = !0 === (p = i[d]).disabled) && a(p) !== e, g = p.children && p.children.length > 0, (v = t("<li></li>")).addClass("select2-results-dept-" + u), v.addClass("select2-result"), v.addClass(f ? "select2-result-selectable" : "select2-result-unselectable"), m && v.addClass("select2-disabled"), g && v.addClass("select2-result-with-children"), v.addClass(c.opts.formatResultCssClass(p)), v.attr("role", "presentation"), (y = t(document.createElement("div"))).addClass("select2-result-label"), y.attr("id", "select2-result-label-" + O()), y.attr("role", "option"), (w = n.formatResult(p, y, r, c.opts.escapeMarkup)) !== e && (y.html(w), v.append(y)), g && ((b = t("<ul></ul>")).addClass("select2-result-sub"), s(p.children, b, u + 1), v.append(b)), v.data("select2-data", p), x.push(v[0]);
                                    o.append(x), l.text(n.formatMatches(i.length))
                                })(o, i, 0)
                            }
                        }, t.fn.select2.defaults, n)).id && (r = n.id, n.id = function(t) {
                            return t[r]
                        }), t.isArray(n.element.data("select2Tags"))) {
                        if ("tags" in n) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + n.element.attr("id");
                        n.tags = n.element.data("select2Tags")
                    }
                    if (o ? (n.query = this.bind(function(t) {
                            var n, o, r, s = {
                                    results: [],
                                    more: !1
                                },
                                a = t.term;
                            r = function(e, n) {
                                var i;
                                e.is("option") ? t.matcher(a, e.text(), e) && n.push(c.optionToData(e)) : e.is("optgroup") && (i = c.optionToData(e), e.children().each2(function(t, e) {
                                    r(e, i.children)
                                }), i.children.length > 0 && n.push(i))
                            }, n = i.children(), this.getPlaceholder() !== e && n.length > 0 && (o = this.getPlaceholderOption()) && (n = n.not(o)), n.each2(function(t, e) {
                                r(e, s.results)
                            }), t.callback(s)
                        }), n.id = function(t) {
                            return t.id
                        }) : "query" in n || ("ajax" in n ? ((l = n.element.data("ajax-url")) && l.length > 0 && (n.ajax.url = l), n.query = x.call(n.element, n.ajax)) : "data" in n ? n.query = C(n.data) : "tags" in n && (n.query = S(n.tags), n.createSearchChoice === e && (n.createSearchChoice = function(e) {
                            return {
                                id: t.trim(e),
                                text: t.trim(e)
                            }
                        }), n.initSelection === e && (n.initSelection = function(e, i) {
                            var o = [];
                            t(a(e.val(), n.separator, n.transformVal)).each(function() {
                                var e = {
                                        id: this,
                                        text: this
                                    },
                                    i = n.tags;
                                t.isFunction(i) && (i = i()), t(i).each(function() {
                                    if (s(this.id, e.id)) return e = this, !1
                                }), o.push(e)
                            }), i(o)
                        }))), "function" != typeof n.query) throw "query function not defined for Select2 " + n.element.attr("id");
                    if ("top" === n.createSearchChoicePosition) n.createSearchChoicePosition = function(t, e) {
                        t.unshift(e)
                    };
                    else if ("bottom" === n.createSearchChoicePosition) n.createSearchChoicePosition = function(t, e) {
                        t.push(e)
                    };
                    else if ("function" != typeof n.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                    return n
                },
                monitorSource: function() {
                    var n, i = this.opts.element,
                        o = this;
                    i.on("change.select2", this.bind(function() {
                        !0 !== this.opts.element.data("select2-change-triggered") && this.initSelection()
                    })), this._sync = this.bind(function() {
                        var t = i.prop("disabled");
                        t === e && (t = !1), this.enable(!t);
                        var n = i.prop("readonly");
                        n === e && (n = !1), this.readonly(n), this.container && (y(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(k(this.opts.containerCssClass, this.opts.element))), this.dropdown && (y(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(k(this.opts.dropdownCssClass, this.opts.element)))
                    }), i.length && i[0].attachEvent && i.each(function() {
                        this.attachEvent("onpropertychange", o._sync)
                    }), (n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) !== e && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new n(function(e) {
                        t.each(e, o._sync)
                    }), this.propertyObserver.observe(i.get(0), {
                        attributes: !0,
                        subtree: !1
                    }))
                },
                triggerSelect: function(e) {
                    var n = t.Event("select2-selecting", {
                        val: this.id(e),
                        object: e,
                        choice: e
                    });
                    return this.opts.element.trigger(n), !n.isDefaultPrevented()
                },
                triggerChange: function(e) {
                    e = e || {}, e = t.extend({}, e, {
                        type: "change",
                        val: this.val()
                    }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(e), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
                },
                isInterfaceEnabled: function() {
                    return !0 === this.enabledInterface
                },
                enableInterface: function() {
                    var t = this._enabled && !this._readonly,
                        e = !t;
                    return t !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", e), this.close(), this.enabledInterface = t, !0)
                },
                enable: function(t) {
                    t === e && (t = !0), this._enabled !== t && (this._enabled = t, this.opts.element.prop("disabled", !t), this.enableInterface())
                },
                disable: function() {
                    this.enable(!1)
                },
                readonly: function(t) {
                    t === e && (t = !1), this._readonly !== t && (this._readonly = t, this.opts.element.prop("readonly", t), this.enableInterface())
                },
                opened: function() {
                    return !!this.container && this.container.hasClass("select2-dropdown-open")
                },
                positionDropdown: function() {
                    var e, n, i, o, r, s = this.dropdown,
                        a = this.container,
                        l = a.offset(),
                        c = a.outerHeight(!1),
                        u = a.outerWidth(!1),
                        d = s.outerHeight(!1),
                        h = t(window),
                        p = h.width(),
                        f = h.height(),
                        m = h.scrollLeft() + p,
                        g = h.scrollTop() + f,
                        v = l.top + c,
                        y = l.left,
                        b = v + d <= g,
                        w = l.top - d >= h.scrollTop(),
                        x = s.outerWidth(!1),
                        C = function() {
                            return y + x <= m
                        },
                        S = function() {
                            return l.left + m + a.outerWidth(!1) > x
                        };
                    s.hasClass("select2-drop-above") ? (n = !0, !w && b && (i = !0, n = !1)) : (n = !1, !b && w && (i = !0, n = !0)), i && (s.hide(), l = this.container.offset(), c = this.container.outerHeight(!1), u = this.container.outerWidth(!1), d = s.outerHeight(!1), m = h.scrollLeft() + p, g = h.scrollTop() + f, v = l.top + c, y = l.left, x = s.outerWidth(!1), s.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (r = t(".select2-results", s)[0], s.addClass("select2-drop-auto-width"), s.css("width", ""), (x = s.outerWidth(!1) + (r.scrollHeight === r.clientHeight ? 0 : N.width)) > u ? u = x : x = u, d = s.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (v -= (e = this.body.offset()).top, y -= e.left), !C() && S() && (y = l.left + this.container.outerWidth(!1) - x), o = {
                        left: y,
                        width: u
                    }, n ? (this.container.addClass("select2-drop-above"), s.addClass("select2-drop-above"), d = s.outerHeight(!1), o.top = l.top - d, o.bottom = "auto") : (o.top = v, o.bottom = "auto", this.container.removeClass("select2-drop-above"), s.removeClass("select2-drop-above")), o = t.extend(o, k(this.opts.dropdownCss, this.opts.element)), s.css(o)
                },
                shouldOpen: function() {
                    var e;
                    return !this.opened() && (!1 !== this._enabled && !0 !== this._readonly && (e = t.Event("select2-opening"), this.opts.element.trigger(e), !e.isDefaultPrevented()))
                },
                clearDropdownAlignmentPreference: function() {
                    this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
                },
                open: function() {
                    return !!this.shouldOpen() && (this.opening(), j.on("mousemove.select2Event", function(t) {
                        q.x = t.pageX, q.y = t.pageY
                    }), !0)
                },
                opening: function() {
                    var e, i = this.containerEventName,
                        o = "scroll." + i,
                        r = "resize." + i,
                        s = "orientationchange." + i;
                    this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), 0 === (e = t("#select2-drop-mask")).length && ((e = t(document.createElement("div"))).attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), e.hide(), e.appendTo(this.body), e.on("mousedown touchstart click", function(i) {
                        n(e);
                        var o, r = t("#select2-drop");
                        r.length > 0 && ((o = r.data("select2")).opts.selectOnBlur && o.selectHighlighted({
                            noFocus: !0
                        }), o.close(), i.preventDefault(), i.stopPropagation())
                    })), this.dropdown.prev()[0] !== e[0] && this.dropdown.before(e), t("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), e.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                    var a = this;
                    this.container.parents().add(window).each(function() {
                        t(this).on(r + " " + o + " " + s, function() {
                            a.opened() && a.positionDropdown()
                        })
                    })
                },
                close: function() {
                    if (this.opened()) {
                        var e = this.containerEventName,
                            n = "scroll." + e,
                            i = "resize." + e,
                            o = "orientationchange." + e;
                        this.container.parents().add(window).each(function() {
                            t(this).off(n).off(i).off(o)
                        }), this.clearDropdownAlignmentPreference(), t("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), j.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.search.removeAttr("aria-activedescendant"), this.opts.element.trigger(t.Event("select2-close"))
                    }
                },
                externalSearch: function(t) {
                    this.open(), this.search.val(t), this.updateResults(!1)
                },
                clearSearch: function() {},
                prefillNextSearchTerm: function() {
                    if ("" !== this.search.val()) return !1;
                    var t = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
                    return t !== e && (this.search.val(t), this.search.select(), !0)
                },
                getMaximumSelectionSize: function() {
                    return k(this.opts.maximumSelectionSize, this.opts.element)
                },
                ensureHighlightVisible: function() {
                    var e, n, i, o, r, s, a, l, c = this.results;
                    (n = this.highlight()) < 0 || (0 != n ? (e = this.findHighlightableChoices().find(".select2-result-label"), o = (l = ((i = t(e[n])).offset() || {}).top || 0) + i.outerHeight(!0), n === e.length - 1 && (a = c.find("li.select2-more-results")).length > 0 && (o = a.offset().top + a.outerHeight(!0)), o > (r = c.offset().top + c.outerHeight(!1)) && c.scrollTop(c.scrollTop() + (o - r)), (s = l - c.offset().top) < 0 && "none" != i.css("display") && c.scrollTop(c.scrollTop() + s)) : c.scrollTop(0))
                },
                findHighlightableChoices: function() {
                    return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
                },
                moveHighlight: function(e) {
                    for (var n = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < n.length;) {
                        var o = t(n[i += e]);
                        if (o.hasClass("select2-result-selectable") && !o.hasClass("select2-disabled") && !o.hasClass("select2-selected")) {
                            this.highlight(i);
                            break
                        }
                    }
                },
                highlight: function(e) {
                    var n, i, r = this.findHighlightableChoices();
                    if (0 === arguments.length) return o(r.filter(".select2-highlighted")[0], r.get());
                    e >= r.length && (e = r.length - 1), e < 0 && (e = 0), this.removeHighlight(), (n = t(r[e])).addClass("select2-highlighted"), this.search.attr("aria-activedescendant", n.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(n.text()), (i = n.data("select2-data")) && this.opts.element.trigger({
                        type: "select2-highlight",
                        val: this.id(i),
                        choice: i
                    })
                },
                removeHighlight: function() {
                    this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                },
                touchMoved: function() {
                    this._touchMoved = !0
                },
                clearTouchMoved: function() {
                    this._touchMoved = !1
                },
                countSelectableResults: function() {
                    return this.findHighlightableChoices().length
                },
                highlightUnderEvent: function(e) {
                    var n = t(e.target).closest(".select2-result-selectable");
                    if (n.length > 0 && !n.is(".select2-highlighted")) {
                        var i = this.findHighlightableChoices();
                        this.highlight(i.index(n))
                    } else 0 == n.length && this.removeHighlight()
                },
                loadMoreIfNeeded: function() {
                    var t = this.results,
                        e = t.find("li.select2-more-results"),
                        n = this.resultsPage + 1,
                        i = this,
                        o = this.search.val(),
                        r = this.context;
                    0 !== e.length && e.offset().top - t.offset().top - t.height() <= this.opts.loadMorePadding && (e.addClass("select2-active"), this.opts.query({
                        element: this.opts.element,
                        term: o,
                        page: n,
                        context: r,
                        matcher: this.opts.matcher,
                        callback: this.bind(function(s) {
                            i.opened() && (i.opts.populateResults.call(this, t, s.results, {
                                term: o,
                                page: n,
                                context: r
                            }), i.postprocessResults(s, !1, !1), !0 === s.more ? (e.detach().appendTo(t).html(i.opts.escapeMarkup(k(i.opts.formatLoadMore, i.opts.element, n + 1))), window.setTimeout(function() {
                                i.loadMoreIfNeeded()
                            }, 10)) : e.remove(), i.positionDropdown(), i.resultsPage = n, i.context = s.context, this.opts.element.trigger({
                                type: "select2-loaded",
                                items: s
                            }))
                        })
                    }))
                },
                tokenize: function() {},
                updateResults: function(n) {
                    function i() {
                        c.removeClass("select2-active"), h.positionDropdown(), u.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? h.liveRegion.text(u.text()) : h.liveRegion.text(h.opts.formatMatches(u.find('.select2-result-selectable:not(".select2-selected")').length))
                    }

                    function o(t) {
                        u.html(t), i()
                    }
                    var r, a, l, c = this.search,
                        u = this.results,
                        d = this.opts,
                        h = this,
                        p = c.val(),
                        f = t.data(this.container, "select2-last-term");
                    if ((!0 === n || !f || !s(p, f)) && (t.data(this.container, "select2-last-term", p), !0 === n || !1 !== this.showSearchInput && this.opened())) {
                        l = ++this.queryCount;
                        var m = this.getMaximumSelectionSize();
                        if (!(m >= 1 && (r = this.data(), t.isArray(r) && r.length >= m && E(d.formatSelectionTooBig, "formatSelectionTooBig")))) return c.val().length < d.minimumInputLength ? (E(d.formatInputTooShort, "formatInputTooShort") ? o("<li class='select2-no-results'>" + k(d.formatInputTooShort, d.element, c.val(), d.minimumInputLength) + "</li>") : o(""), void(n && this.showSearch && this.showSearch(!0))) : void(d.maximumInputLength && c.val().length > d.maximumInputLength ? E(d.formatInputTooLong, "formatInputTooLong") ? o("<li class='select2-no-results'>" + k(d.formatInputTooLong, d.element, c.val(), d.maximumInputLength) + "</li>") : o("") : (d.formatSearching && 0 === this.findHighlightableChoices().length && o("<li class='select2-searching'>" + k(d.formatSearching, d.element) + "</li>"), c.addClass("select2-active"), this.removeHighlight(), (a = this.tokenize()) != e && null != a && c.val(a), this.resultsPage = 1, d.query({
                            element: d.element,
                            term: c.val(),
                            page: this.resultsPage,
                            context: null,
                            matcher: d.matcher,
                            callback: this.bind(function(r) {
                                var a;
                                if (l == this.queryCount)
                                    if (this.opened())
                                        if (r.hasError !== e && E(d.formatAjaxError, "formatAjaxError")) o("<li class='select2-ajax-error'>" + k(d.formatAjaxError, d.element, r.jqXHR, r.textStatus, r.errorThrown) + "</li>");
                                        else {
                                            if (this.context = r.context === e ? null : r.context, this.opts.createSearchChoice && "" !== c.val() && (a = this.opts.createSearchChoice.call(h, c.val(), r.results)) !== e && null !== a && h.id(a) !== e && null !== h.id(a) && 0 === t(r.results).filter(function() {
                                                    return s(h.id(this), h.id(a))
                                                }).length && this.opts.createSearchChoicePosition(r.results, a), 0 === r.results.length && E(d.formatNoMatches, "formatNoMatches")) return o("<li class='select2-no-results'>" + k(d.formatNoMatches, d.element, c.val()) + "</li>"), void(this.showSearch && this.showSearch(c.val()));
                                            u.empty(), h.opts.populateResults.call(this, u, r.results, {
                                                term: c.val(),
                                                page: this.resultsPage,
                                                context: null
                                            }), !0 === r.more && E(d.formatLoadMore, "formatLoadMore") && (u.append("<li class='select2-more-results'>" + d.escapeMarkup(k(d.formatLoadMore, d.element, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                                h.loadMoreIfNeeded()
                                            }, 10)), this.postprocessResults(r, n), i(), this.opts.element.trigger({
                                                type: "select2-loaded",
                                                items: r
                                            })
                                        }
                                else this.search.removeClass("select2-active")
                            })
                        })));
                        o("<li class='select2-selection-limit'>" + k(d.formatSelectionTooBig, d.element, m) + "</li>")
                    }
                },
                cancel: function() {
                    this.close()
                },
                blur: function() {
                    this.opts.selectOnBlur && this.selectHighlighted({
                        noFocus: !0
                    }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                },
                focusSearch: function() {
                    p(this.search)
                },
                selectHighlighted: function(t) {
                    if (this._touchMoved) this.clearTouchMoved();
                    else {
                        var e = this.highlight(),
                            n = this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data");
                        n ? (this.highlight(e), this.onSelect(n, t)) : t && t.noFocus && this.close()
                    }
                },
                getPlaceholder: function() {
                    var t;
                    return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((t = this.getPlaceholderOption()) !== e ? t.text() : e)
                },
                getPlaceholderOption: function() {
                    if (this.select) {
                        var n = this.select.children("option").first();
                        if (this.opts.placeholderOption !== e) return "first" === this.opts.placeholderOption && n || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                        if ("" === t.trim(n.text()) && "" === n.val()) return n
                    }
                },
                initContainerWidth: function() {
                    function e() {
                        var e, n, i, o, r;
                        if ("off" === this.opts.width) return null;
                        if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                        if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                            if ("string" == typeof(e = this.opts.element.attr("style")))
                                for (o = 0, r = (n = e.split(";")).length; o < r; o += 1)
                                    if (null !== (i = n[o].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) && i.length >= 1) return i[1];
                            return "resolve" === this.opts.width ? (e = this.opts.element.css("width")).indexOf("%") > 0 ? e : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
                        }
                        return t.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                    }
                    var n = e.call(this);
                    null !== n && this.container.css("width", n)
                }
            }), {
                createContainer: function() {
                    return t(document.createElement("div")).attr({
                        "class": "select2-container"
                    }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""))
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                },
                opening: function() {
                    var e, n, i;
                    this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), !1 !== this.showSearchInput && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), (e = this.search.get(0)).createTextRange ? ((n = e.createTextRange()).collapse(!1), n.select()) : e.setSelectionRange && (i = this.search.val().length, e.setSelectionRange(i, i))), this.prefillNextSearchTerm(), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(t.Event("select2-open"))
                },
                close: function() {
                    this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                },
                focus: function() {
                    this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                },
                isFocused: function() {
                    return this.container.hasClass("select2-container-active")
                },
                cancel: function() {
                    this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
                },
                destroy: function() {
                    t("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), A.call(this, "selection", "focusser")
                },
                initContainer: function() {
                    var e, i, o = this.container,
                        r = this.dropdown,
                        s = O();
                    this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = e = o.find(".select2-choice"), this.focusser = o.find(".select2-focusser"), e.find(".select2-chosen").attr("id", "select2-chosen-" + s), this.focusser.attr("aria-labelledby", "select2-chosen-" + s), this.results.attr("id", "select2-results-" + s), this.search.attr("aria-owns", "select2-results-" + s), this.focusser.attr("id", "s2id_autogen" + s), i = t("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.on("focus.select2", this.bind(function() {
                        this.focus()
                    })), this.focusser.prev().text(i.text()).attr("for", this.focusser.attr("id"));
                    var a = this.opts.element.attr("title");
                    this.opts.element.attr("title", a || i.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(t("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled() && 229 != t.keyCode)
                            if (t.which !== $.PAGE_UP && t.which !== $.PAGE_DOWN) switch (t.which) {
                                case $.UP:
                                case $.DOWN:
                                    return this.moveHighlight(t.which === $.UP ? -1 : 1), void m(t);
                                case $.ENTER:
                                    return this.selectHighlighted(), void m(t);
                                case $.TAB:
                                    return void this.selectHighlighted({
                                        noFocus: !0
                                    });
                                case $.ESC:
                                    return this.cancel(t), void m(t)
                            } else m(t)
                    })), this.search.on("blur", this.bind(function() {
                        document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                            this.opened() && this.results && this.results.length > 1 && this.search.focus()
                        }), 0)
                    })), this.focusser.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled() && t.which !== $.TAB && !$.isControl(t) && !$.isFunctionKey(t) && t.which !== $.ESC) {
                            if (!1 !== this.opts.openOnEnter || t.which !== $.ENTER) {
                                if (t.which == $.DOWN || t.which == $.UP || t.which == $.ENTER && this.opts.openOnEnter) {
                                    if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return;
                                    return this.open(), void m(t)
                                }
                                return t.which == $.DELETE || t.which == $.BACKSPACE ? (this.opts.allowClear && this.clear(), void m(t)) : void 0
                            }
                            m(t)
                        }
                    })), c(this.focusser), this.focusser.on("keyup-change input", this.bind(function(t) {
                        if (this.opts.minimumResultsForSearch >= 0) {
                            if (t.stopPropagation(), this.opened()) return;
                            this.open()
                        }
                    })), e.on("mousedown touchstart", "abbr", this.bind(function(t) {
                        this.isInterfaceEnabled() && (this.clear(), g(t), this.close(), this.selection && this.selection.focus())
                    })), e.on("mousedown touchstart", this.bind(function(i) {
                        n(e), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), m(i)
                    })), r.on("mousedown touchstart", this.bind(function() {
                        this.opts.shouldFocusInput(this) && this.search.focus()
                    })), e.on("focus", this.bind(function(t) {
                        m(t)
                    })), this.focusser.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })).on("blur", this.bind(function() {
                        this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(t.Event("select2-blur")))
                    })), this.search.on("focus", this.bind(function() {
                        this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active")
                    })), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
                },
                clear: function(e) {
                    var n = this.selection.data("select2-data");
                    if (n) {
                        var i = t.Event("select2-clearing");
                        if (this.opts.element.trigger(i), i.isDefaultPrevented()) return;
                        var o = this.getPlaceholderOption();
                        this.opts.element.val(o ? o.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), !1 !== e && (this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(n),
                            choice: n
                        }), this.triggerChange({
                            removed: n
                        }))
                    }
                },
                initSelection: function() {
                    if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                    else {
                        var t = this;
                        this.opts.initSelection.call(null, this.opts.element, function(n) {
                            n !== e && null !== n && (t.updateSelection(n), t.close(), t.setPlaceholder(), t.lastSearchTerm = t.search.val())
                        })
                    }
                },
                isPlaceholderOptionSelected: function() {
                    var t;
                    return this.getPlaceholder() !== e && ((t = this.getPlaceholderOption()) !== e && t.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === e || null === this.opts.element.val())
                },
                prepareOpts: function() {
                    var e = this.parent.prepareOpts.apply(this, arguments),
                        n = this;
                    return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                        var i = t.find("option").filter(function() {
                            return this.selected && !this.disabled
                        });
                        e(n.optionToData(i))
                    } : "data" in e && (e.initSelection = e.initSelection || function(n, i) {
                        var o = n.val(),
                            r = null;
                        e.query({
                            matcher: function(t, n, i) {
                                var a = s(o, e.id(i));
                                return a && (r = i), a
                            },
                            callback: t.isFunction(i) ? function() {
                                i(r)
                            } : t.noop
                        })
                    }), e
                },
                getPlaceholder: function() {
                    return this.select && this.getPlaceholderOption() === e ? e : this.parent.getPlaceholder.apply(this, arguments)
                },
                setPlaceholder: function() {
                    var t = this.getPlaceholder();
                    if (this.isPlaceholderOptionSelected() && t !== e) {
                        if (this.select && this.getPlaceholderOption() === e) return;
                        this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(t)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                    }
                },
                postprocessResults: function(t, e, n) {
                    var i = 0,
                        o = this;
                    if (this.findHighlightableChoices().each2(function(t, e) {
                            if (s(o.id(e.data("select2-data")), o.opts.element.val())) return i = t, !1
                        }), !1 !== n && (!0 === e && i >= 0 ? this.highlight(i) : this.highlight(0)), !0 === e) {
                        var r = this.opts.minimumResultsForSearch;
                        r >= 0 && this.showSearch(T(t.results) >= r)
                    }
                },
                showSearch: function(e) {
                    this.showSearchInput !== e && (this.showSearchInput = e, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !e), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !e), t(this.dropdown, this.container).toggleClass("select2-with-searchbox", e))
                },
                onSelect: function(t, e) {
                    if (this.triggerSelect(t)) {
                        var n = this.opts.element.val(),
                            i = this.data();
                        this.opts.element.val(this.id(t)), this.updateSelection(t), this.opts.element.trigger({
                            type: "select2-selected",
                            val: this.id(t),
                            choice: t
                        }), this.lastSearchTerm = this.search.val(), this.close(), e && e.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), s(n, this.id(t)) || this.triggerChange({
                            added: t,
                            removed: i
                        })
                    }
                },
                updateSelection: function(t) {
                    var n, i, o = this.selection.find(".select2-chosen");
                    this.selection.data("select2-data", t), o.empty(), null !== t && (n = this.opts.formatSelection(t, o, this.opts.escapeMarkup)), n !== e && o.append(n), (i = this.opts.formatSelectionCssClass(t, o)) !== e && o.addClass(i), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== e && this.container.addClass("select2-allowclear")
                },
                val: function() {
                    var t, n = !1,
                        i = null,
                        o = this,
                        r = this.data();
                    if (0 === arguments.length) return this.opts.element.val();
                    if (t = arguments[0], arguments.length > 1 && (n = arguments[1], this.opts.debug && console && console.warn && console.warn('Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. The `change` event will always be triggered in 4.0.0.')), this.select) this.opts.debug && console && console.warn && console.warn('Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'), this.select.val(t).find("option").filter(function() {
                        return this.selected
                    }).each2(function(t, e) {
                        return i = o.optionToData(e), !1
                    }), this.updateSelection(i), this.setPlaceholder(), n && this.triggerChange({
                        added: i,
                        removed: r
                    });
                    else {
                        if (!t && 0 !== t) return void this.clear(n);
                        if (this.opts.initSelection === e) throw new Error("cannot call val() if initSelection() is not defined");
                        this.opts.element.val(t), this.opts.initSelection(this.opts.element, function(t) {
                            o.opts.element.val(t ? o.id(t) : ""), o.updateSelection(t), o.setPlaceholder(), n && o.triggerChange({
                                added: t,
                                removed: r
                            })
                        })
                    }
                },
                clearSearch: function() {
                    this.search.val(""), this.focusser.val("")
                },
                data: function(t) {
                    var n, i = !1;
                    if (0 === arguments.length) return (n = this.selection.data("select2-data")) == e && (n = null), n;
                    this.opts.debug && console && console.warn && console.warn('Select2: The `select2("data")` method can no longer set selected values in 4.0.0, consider using the `.val()` method instead.'), arguments.length > 1 && (i = arguments[1]), t ? (n = this.data(), this.opts.element.val(t ? this.id(t) : ""), this.updateSelection(t), i && this.triggerChange({
                        added: t,
                        removed: n
                    })) : this.clear(i)
                }
            }), I = L(D, {
                createContainer: function() {
                    return t(document.createElement("div")).attr({
                        "class": "select2-container select2-container-multi"
                    }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""))
                },
                prepareOpts: function() {
                    var e = this.parent.prepareOpts.apply(this, arguments),
                        n = this;
                    return "select" === e.element.get(0).tagName.toLowerCase() ? e.initSelection = function(t, e) {
                        var i = [];
                        t.find("option").filter(function() {
                            return this.selected && !this.disabled
                        }).each2(function(t, e) {
                            i.push(n.optionToData(e))
                        }), e(i)
                    } : "data" in e && (e.initSelection = e.initSelection || function(n, i) {
                        var o = a(n.val(), e.separator, e.transformVal),
                            r = [];
                        e.query({
                            matcher: function(n, i, a) {
                                var l = t.grep(o, function(t) {
                                    return s(t, e.id(a))
                                }).length;
                                return l && r.push(a), l
                            },
                            callback: t.isFunction(i) ? function() {
                                for (var t = [], n = 0; n < o.length; n++)
                                    for (var a = o[n], l = 0; l < r.length; l++) {
                                        var c = r[l];
                                        if (s(a, e.id(c))) {
                                            t.push(c), r.splice(l, 1);
                                            break
                                        }
                                    }
                                i(t)
                            } : t.noop
                        })
                    }), e
                },
                selectChoice: function(t) {
                    var e = this.container.find(".select2-search-choice-focus");
                    e.length && t && t[0] == e[0] || (e.length && this.opts.element.trigger("choice-deselected", e), e.removeClass("select2-search-choice-focus"), t && t.length && (this.close(), t.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", t)))
                },
                destroy: function() {
                    t("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), A.call(this, "searchContainer", "selection")
                },
                initContainer: function() {
                    var e, n = ".select2-choices";
                    this.searchContainer = this.container.find(".select2-search-field"), this.selection = e = this.container.find(n);
                    var i = this;
                    this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
                        i.search[0].focus(), i.selectChoice(t(this))
                    }), this.search.attr("id", "s2id_autogen" + O()), this.search.prev().text(t("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.on("focus.select2", this.bind(function() {
                        this.focus()
                    })), this.search.on("input paste", this.bind(function() {
                        this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
                    })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(t) {
                        if (this.isInterfaceEnabled()) {
                            ++this.keydowns;
                            var n = e.find(".select2-search-choice-focus"),
                                i = n.prev(".select2-search-choice:not(.select2-locked)"),
                                o = n.next(".select2-search-choice:not(.select2-locked)"),
                                r = f(this.search);
                            if (n.length && (t.which == $.LEFT || t.which == $.RIGHT || t.which == $.BACKSPACE || t.which == $.DELETE || t.which == $.ENTER)) {
                                var s = n;
                                return t.which == $.LEFT && i.length ? s = i : t.which == $.RIGHT ? s = o.length ? o : null : t.which === $.BACKSPACE ? this.unselect(n.first()) && (this.search.width(10), s = i.length ? i : o) : t.which == $.DELETE ? this.unselect(n.first()) && (this.search.width(10), s = o.length ? o : null) : t.which == $.ENTER && (s = null), this.selectChoice(s), m(t), void(s && s.length || this.open())
                            }
                            if ((t.which === $.BACKSPACE && 1 == this.keydowns || t.which == $.LEFT) && 0 == r.offset && !r.length) return this.selectChoice(e.find(".select2-search-choice:not(.select2-locked)").last()), void m(t);
                            if (this.selectChoice(null), this.opened()) switch (t.which) {
                                case $.UP:
                                case $.DOWN:
                                    return this.moveHighlight(t.which === $.UP ? -1 : 1), void m(t);
                                case $.ENTER:
                                    return this.selectHighlighted(), void m(t);
                                case $.TAB:
                                    return this.selectHighlighted({
                                        noFocus: !0
                                    }), void this.close();
                                case $.ESC:
                                    return this.cancel(t), void m(t)
                            }
                            if (t.which !== $.TAB && !$.isControl(t) && !$.isFunctionKey(t) && t.which !== $.BACKSPACE && t.which !== $.ESC) {
                                if (t.which === $.ENTER) {
                                    if (!1 === this.opts.openOnEnter) return;
                                    if (t.altKey || t.ctrlKey || t.shiftKey || t.metaKey) return
                                }
                                this.open(), t.which !== $.PAGE_UP && t.which !== $.PAGE_DOWN || m(t), t.which === $.ENTER && m(t)
                            }
                        }
                    })), this.search.on("keyup", this.bind(function() {
                        this.keydowns = 0, this.resizeSearch()
                    })), this.search.on("blur", this.bind(function(e) {
                        this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger(t.Event("select2-blur"))
                    })), this.container.on("click", n, this.bind(function(e) {
                        this.isInterfaceEnabled() && (t(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                    })), this.container.on("focus", n, this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(t.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                    })), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
                },
                enableInterface: function() {
                    this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                },
                initSelection: function() {
                    if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                        var t = this;
                        this.opts.initSelection.call(null, this.opts.element, function(n) {
                            n !== e && null !== n && (t.updateSelection(n), t.close(), t.clearSearch())
                        })
                    }
                },
                clearSearch: function() {
                    var t = this.getPlaceholder(),
                        n = this.getMaxSearchWidth();
                    t !== e && 0 === this.getVal().length && !1 === this.search.hasClass("select2-focused") ? (this.search.val(t).addClass("select2-default"), this.search.width(n > 0 ? n : this.container.css("width"))) : this.search.val("").width(10)
                },
                clearPlaceholder: function() {
                    this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                },
                opening: function() {
                    this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), this.prefillNextSearchTerm(), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(t.Event("select2-open"))
                },
                close: function() {
                    this.opened() && this.parent.close.apply(this, arguments)
                },
                focus: function() {
                    this.close(), this.search.focus()
                },
                isFocused: function() {
                    return this.search.hasClass("select2-focused")
                },
                updateSelection: function(e) {
                    var n = {},
                        i = [],
                        o = this;
                    t(e).each(function() {
                        o.id(this) in n || (n[o.id(this)] = 0, i.push(this))
                    }), this.selection.find(".select2-search-choice").remove(), this.addSelectedChoice(i), o.postprocessResults()
                },
                tokenize: function() {
                    var t = this.search.val();
                    null != (t = this.opts.tokenizer.call(this, t, this.data(), this.bind(this.onSelect), this.opts)) && t != e && (this.search.val(t), t.length > 0 && this.open())
                },
                onSelect: function(t, e) {
                    this.triggerSelect(t) && "" !== t.text && (this.addSelectedChoice(t), this.opts.element.trigger({
                        type: "selected",
                        val: this.id(t),
                        choice: t
                    }), this.lastSearchTerm = this.search.val(), this.clearSearch(), this.updateResults(), !this.select && this.opts.closeOnSelect || this.postprocessResults(t, !1, !0 === this.opts.closeOnSelect), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.prefillNextSearchTerm() && this.updateResults(), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                        added: t
                    }), e && e.noFocus || this.focusSearch())
                },
                cancel: function() {
                    this.close(), this.focusSearch()
                },
                addSelectedChoice: function(e) {
                    var n = this.getVal(),
                        i = this;
                    t(e).each(function() {
                        n.push(i.createChoice(this))
                    }), this.setVal(n)
                },
                createChoice: function(n) {
                    var i, o, r = !n.locked,
                        s = t("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                        a = t("<li class='select2-search-choice select2-locked'><div></div></li>"),
                        l = r ? s : a,
                        c = this.id(n);
                    return (i = this.opts.formatSelection(n, l.find("div"), this.opts.escapeMarkup)) != e && l.find("div").replaceWith(t("<div></div>").html(i)), (o = this.opts.formatSelectionCssClass(n, l.find("div"))) != e && l.addClass(o), r && l.find(".select2-search-choice-close").on("mousedown", m).on("click dblclick", this.bind(function(e) {
                        this.isInterfaceEnabled() && (this.unselect(t(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), m(e), this.close(), this.focusSearch())
                    })).on("focus", this.bind(function() {
                        this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                    })), l.data("select2-data", n), l.insertBefore(this.searchContainer), c
                },
                unselect: function(e) {
                    var n, i, r = this.getVal();
                    if (0 === (e = e.closest(".select2-search-choice")).length) throw "Invalid argument: " + e + ". Must be .select2-search-choice";
                    if (n = e.data("select2-data")) {
                        var s = t.Event("select2-removing");
                        if (s.val = this.id(n), s.choice = n, this.opts.element.trigger(s), s.isDefaultPrevented()) return !1;
                        for (;
                            (i = o(this.id(n), r)) >= 0;) r.splice(i, 1), this.setVal(r), this.select && this.postprocessResults();
                        return e.remove(), this.opts.element.trigger({
                            type: "select2-removed",
                            val: this.id(n),
                            choice: n
                        }), this.triggerChange({
                            removed: n
                        }), !0
                    }
                },
                postprocessResults: function(t, e, n) {
                    var i = this.getVal(),
                        r = this.results.find(".select2-result"),
                        s = this.results.find(".select2-result-with-children"),
                        a = this;
                    r.each2(function(t, e) {
                        o(a.id(e.data("select2-data")), i) >= 0 && (e.addClass("select2-selected"), e.find(".select2-result-selectable").addClass("select2-selected"))
                    }), s.each2(function(t, e) {
                        e.is(".select2-result-selectable") || 0 !== e.find(".select2-result-selectable:not(.select2-selected)").length || e.addClass("select2-selected")
                    }), -1 == this.highlight() && !1 !== n && !0 === this.opts.closeOnSelect && a.highlight(0), !this.opts.createSearchChoice && !r.filter(".select2-result:not(.select2-selected)").length > 0 && (!t || t && !t.more && 0 === this.results.find(".select2-no-results").length) && E(a.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + k(a.opts.formatNoMatches, a.opts.element, a.search.val()) + "</li>")
                },
                getMaxSearchWidth: function() {
                    return this.selection.width() - l(this.search)
                },
                resizeSearch: function() {
                    var t, e, n, i, o = l(this.search);
                    t = v(this.search) + 10, e = this.search.offset().left, (i = (n = this.selection.width()) - (e - this.selection.offset().left) - o) < t && (i = n - o), i < 40 && (i = n - o), i <= 0 && (i = t), this.search.width(Math.floor(i))
                },
                getVal: function() {
                    var t;
                    return this.select ? null === (t = this.select.val()) ? [] : t : a(t = this.opts.element.val(), this.opts.separator, this.opts.transformVal)
                },
                setVal: function(e) {
                    if (this.select) this.select.val(e);
                    else {
                        var n = [],
                            i = {};
                        t(e).each(function() {
                            this in i || (n.push(this), i[this] = 0)
                        }), this.opts.element.val(0 === n.length ? "" : n.join(this.opts.separator))
                    }
                },
                buildChangeDetails: function(t, e) {
                    e = e.slice(0), t = t.slice(0);
                    for (var n = 0; n < e.length; n++)
                        for (var i = 0; i < t.length; i++)
                            if (s(this.opts.id(e[n]), this.opts.id(t[i]))) {
                                e.splice(n, 1), n--, t.splice(i, 1);
                                break
                            } return {
                        added: e,
                        removed: t
                    }
                },
                val: function(n, i) {
                    var o, r = this;
                    if (0 === arguments.length) return this.getVal();
                    if ((o = this.data()).length || (o = []), !n && 0 !== n) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(i && this.triggerChange({
                        added: this.data(),
                        removed: o
                    }));
                    if (this.setVal(n), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), i && this.triggerChange(this.buildChangeDetails(o, this.data()));
                    else {
                        if (this.opts.initSelection === e) throw new Error("val() cannot be called if initSelection() is not defined");
                        this.opts.initSelection(this.opts.element, function(e) {
                            var n = t.map(e, r.id);
                            r.setVal(n), r.updateSelection(e), r.clearSearch(), i && r.triggerChange(r.buildChangeDetails(o, r.data()))
                        })
                    }
                    this.clearSearch()
                },
                onSortStart: function() {
                    if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                    this.search.width(0), this.searchContainer.hide()
                },
                onSortEnd: function() {
                    var e = [],
                        n = this;
                    this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                        e.push(n.opts.id(t(this).data("select2-data")))
                    }), this.setVal(e), this.triggerChange()
                },
                data: function(e, n) {
                    var i, o, r = this;
                    if (0 === arguments.length) return this.selection.children(".select2-search-choice").map(function() {
                        return t(this).data("select2-data")
                    }).get();
                    o = this.data(), e || (e = []), i = t.map(e, function(t) {
                            return r.opts.id(t)
                        }), this.setVal(i), this.updateSelection(e), this.clearSearch(),
                        n && this.triggerChange(this.buildChangeDetails(o, this.data()))
                }
            }), t.fn.select2 = function() {
                var n, i, r, s, a, l = Array.prototype.slice.call(arguments, 0),
                    c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                    u = ["opened", "isFocused", "container", "dropdown"],
                    d = ["val", "data"],
                    h = {
                        search: "externalSearch"
                    };
                return this.each(function() {
                    if (0 === l.length || "object" == typeof l[0])(n = 0 === l.length ? {} : t.extend({}, l[0])).element = t(this), "select" === n.element.get(0).tagName.toLowerCase() ? a = n.element.prop("multiple") : (a = n.multiple || !1, "tags" in n && (n.multiple = a = !0)), (i = a ? new window.Select2["class"].multi : new window.Select2["class"].single).init(n);
                    else {
                        if ("string" != typeof l[0]) throw "Invalid arguments to select2 plugin: " + l;
                        if (o(l[0], c) < 0) throw "Unknown method: " + l[0];
                        if (s = e, (i = t(this).data("select2")) === e) return;
                        if ("container" === (r = l[0]) ? s = i.container : "dropdown" === r ? s = i.dropdown : (h[r] && (r = h[r]), s = i[r].apply(i, l.slice(1))), o(l[0], u) >= 0 || o(l[0], d) >= 0 && 1 == l.length) return !1
                    }
                }), s === e ? this : s
            }, t.fn.select2.defaults = {
                debug: !1,
                width: "copy",
                loadMorePadding: 0,
                closeOnSelect: !0,
                openOnEnter: !0,
                containerCss: {},
                dropdownCss: {},
                containerCssClass: "",
                dropdownCssClass: "",
                formatResult: function(t, e, n, i) {
                    var o = [];
                    return b(this.text(t), n.term, o, i), o.join("")
                },
                transformVal: function(e) {
                    return t.trim(e)
                },
                formatSelection: function(t, n, i) {
                    return t ? i(this.text(t)) : e
                },
                sortResults: function(t) {
                    return t
                },
                formatResultCssClass: function(t) {
                    return t.css
                },
                formatSelectionCssClass: function() {
                    return e
                },
                minimumResultsForSearch: 0,
                minimumInputLength: 0,
                maximumInputLength: null,
                maximumSelectionSize: 0,
                id: function(t) {
                    return t == e ? null : t.id
                },
                text: function(e) {
                    return e && this.data && this.data.text ? t.isFunction(this.data.text) ? this.data.text(e) : e[this.data.text] : e.text
                },
                matcher: function(t, e) {
                    return i("" + e).toUpperCase().indexOf(i("" + t).toUpperCase()) >= 0
                },
                separator: ",",
                tokenSeparators: [],
                tokenizer: _,
                escapeMarkup: w,
                blurOnChange: !1,
                selectOnBlur: !1,
                adaptContainerCssClass: function(t) {
                    return t
                },
                adaptDropdownCssClass: function() {
                    return null
                },
                nextSearchTerm: function() {
                    return e
                },
                searchInputPlaceholder: "",
                createSearchChoicePosition: "top",
                shouldFocusInput: function(t) {
                    return !("ontouchstart" in window || navigator.msMaxTouchPoints > 0) || !(t.opts.minimumResultsForSearch < 0)
                }
            }, t.fn.select2.locales = [], t.fn.select2.locales.en = {
                formatMatches: function(t) {
                    return 1 === t ? "One result is available, press enter to select it." : t + " results are available, use up and down arrow keys to navigate."
                },
                formatNoMatches: function() {
                    return "No matches found"
                },
                formatAjaxError: function() {
                    return "Loading failed"
                },
                formatInputTooShort: function(t, e) {
                    var n = e - t.length;
                    return "Please enter " + n + " or more character" + (1 == n ? "" : "s")
                },
                formatInputTooLong: function(t, e) {
                    var n = t.length - e;
                    return "Please delete " + n + " character" + (1 == n ? "" : "s")
                },
                formatSelectionTooBig: function(t) {
                    return "You can only select " + t + " item" + (1 == t ? "" : "s")
                },
                formatLoadMore: function() {
                    return "Loading more results\u2026"
                },
                formatSearching: function() {
                    return "Searching\u2026"
                }
            }, t.extend(t.fn.select2.defaults, t.fn.select2.locales.en), t.fn.select2.ajaxDefaults = {
                transport: t.ajax,
                params: {
                    type: "GET",
                    cache: !1,
                    dataType: "json"
                }
            }, window.Select2 = {
                query: {
                    ajax: x,
                    local: C,
                    tags: S
                },
                util: {
                    debounce: d,
                    markMatch: b,
                    escapeMarkup: w,
                    stripDiacritics: i
                },
                "class": {
                    abstract: D,
                    single: P,
                    multi: I
                }
            }
        }
    }(jQuery),
    function() {
        var t, e, n;
        n = document, (e = function() {
            function t(t, e, s) {
                var a, l, c, u, d;
                if (null == e && (e = {}), t.nodeType) this.e = t;
                else if ("" !== t) {
                    if ("string" == typeof e && (s || (s = {}), s.text = e, e = s), this.e = n.createElement(r(t, e)), e["class"] && (this.e.className = o(e["class"])) && delete e["class"], e.text && (this.e.innerText = o(e.text)) && delete e.text, e.html && (this.e.innerHTML = o(e.html)) && delete e.html, e.css && (u = this.e.style) && (a = e.css) && delete e.css)
                        for (c in a) null != (d = a[c]) && (u[c] = d);
                    for (l in i(e), e) d = e[l], this.e.setAttribute(l, d)
                } else this.e = n.createTextNode(e)
            }
            var e, i, o, r;
            return i = function(t) {
                var e, n, i, o;
                for (e in t)
                    if (n = t[e], "object" == typeof t[e]) {
                        for (i in n) o = n[i], t[e + "-" + i.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()] = o;
                        delete t[e]
                    }
            }, e = /[.#]/, r = function(t, n) {
                var i, o, r, s, a, l, c;
                if (!e.test(t)) return t;
                for (n["class"] || (n["class"] = []), "string" == typeof n["class"] && (n["class"] = [n["class"]]), e.test(t.charAt(0)) && (t = "div" + t), c = (o = (l = t.split(e)).shift()).length, i = n["class"], r = 0, s = l.length; r < s; r++) a = l[r], "#" === t.charAt(c) ? n.id = a : i.push(a), c += a.length + 1;
                return n["class"].length || delete n["class"], o
            }, o = function(t) {
                var e, n, i;
                if ("object" != typeof t) return t;
                for (i = [], e = -1, n = t.length; ++e < n;) t[e] && i.push(t[e]);
                return i.join(" ")
            }, t.prototype.append = function() {
                var t, e, n, i;
                (t = arguments) && t[0] && "splice" in t[0] && (t = t[0]);
                for (e = 0, n = t.length; e < n; e++)(i = t[e]) && ("_brew" in i && (i = i.dom()), this.e.appendChild(i));
                return this
            }, t.prototype.prepend = function() {
                var t, e, n, i;
                (t = arguments) && t[0] && "splice" in t[0] && (t = t[0]);
                for (e = 0, n = t.length; e < n; e++)(i = t[e]) && ("_brew" in i && (i = i.dom()), this.e.insertBefore(i, this.e.firstChild));
                return this
            }, t.prototype.dom = function() {
                return this.e
            }, t.prototype.html = function() {
                var t;
                return (t = n.createElement("div")).appendChild(this.e), t.innerHTML
            }, t
        }()).prototype.asDOM = e.prototype.dom, e.prototype.asHTML = e.prototype.html, e.prototype._brew = 1, this.DOMBrew = t = function() {
            var t, i, o, r, s, a;
            if ("object" == typeof(t = arguments)[0] && "splice" in t[0] ? a = t[0] : t.length > 1 && "object" == typeof t[1] && "_brew" in t[1] && (a = t), a) {
                for (i = n.createDocumentFragment(), o = 0, r = a.length; o < r; o++) s = a[o], i.appendChild(s.e ? s.e : s);
                t = [i]
            }
            return new e(t[0], t[1], t[2])
        }, t.text = function(t) {
            return new e("", t)
        }, t.VERSION = t.version = "1.5.0", "Microsoft Internet Explorer" !== navigator.appName && !("innerText" in HTMLElement.prototype) && "__defineGetter__" in HTMLElement && (HTMLElement.prototype.__defineGetter__("innerText", function() {
            return this.textContent
        }), HTMLElement.prototype.__defineSetter__("innerText", function(t) {
            return this.textContent = t
        }))
    }.call(this),
    /*!
     * typeahead.js 0.10.5
     * https://github.com/twitter/typeahead.js
     * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
     */
    function(t) {
        var n = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return void 0 === t
                    },
                    toStr: function(t) {
                        return n.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        function i(t, e) {
                            return n(e, t)
                        }
                        t.each(e, i)
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, o) {
                            if (!(i = n.call(null, o, t, e))) return !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, o) {
                            if (i = n.call(null, o, t, e)) return !1
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    getUniqueId: (e = 0, function() {
                        return e++
                    }),
                    templatify: function(e) {
                        function n() {
                            return String(e)
                        }
                        return t.isFunction(e) ? e : n
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, o;
                        return function() {
                            var r, s, a = this,
                                l = arguments;
                            return r = function() {
                                i = null, n || (o = t.apply(a, l))
                            }, s = n && !i, clearTimeout(i), i = setTimeout(r, e), s && (o = t.apply(a, l)), o
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, o, r, s, a;
                        return s = 0, a = function() {
                                s = new Date, o = null, r = t.apply(n, i)
                            },
                            function() {
                                var l = new Date,
                                    c = e - (l - s);
                                return n = this, i = arguments, c <= 0 ? (clearTimeout(o), o = null, s = l, r = t.apply(n, i)) : o || (o = setTimeout(a, c)), r
                            }
                    },
                    noop: function() {}
                };
                var e
            }(),
            i = "0.10.5",
            o = function() {
                "use strict";

                function t(t) {
                    return (t = n.toStr(t)) ? t.split(/\s+/) : []
                }

                function e(t) {
                    return (t = n.toStr(t)) ? t.split(/\W+/) : []
                }

                function i(t) {
                    return function() {
                        var e = [].slice.call(arguments, 0);
                        return function(i) {
                            var o = [];
                            return n.each(e, function(e) {
                                o = o.concat(t(n.toStr(i[e])))
                            }), o
                        }
                    }
                }
                return {
                    nonword: e,
                    whitespace: t,
                    obj: {
                        nonword: i(e),
                        whitespace: i(t)
                    }
                }
            }(),
            r = function() {
                "use strict";

                function e(e) {
                    this.maxSize = n.isNumber(e) ? e : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
                }

                function i() {
                    this.head = this.tail = null
                }

                function o(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return n.mixin(e.prototype, {
                    set: function(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key]), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new o(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function(t) {
                        var e = this.hash[t];
                        if (e) return this.list.moveToFront(e), e.val
                    },
                    reset: function() {
                        this.size = 0, this.hash = {}, this.list = new i
                    }
                }), n.mixin(i.prototype, {
                    add: function(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function(t) {
                        this.remove(t), this.add(t)
                    }
                }), e
            }(),
            s = function() {
                "use strict";

                function t(t) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + n.escapeRegExChars(this.prefix))
                }

                function e() {
                    return (new Date).getTime()
                }

                function i(t) {
                    return JSON.stringify(n.isUndefined(t) ? null : t)
                }

                function o(t) {
                    return JSON.parse(t)
                }
                var r, s;
                try {
                    (r = window.localStorage).setItem("~~~", "!"), r.removeItem("~~~")
                } catch (a) {
                    r = null
                }
                return s = r && window.JSON ? {
                    _prefix: function(t) {
                        return this.prefix + t
                    },
                    _ttlKey: function(t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    get: function(t) {
                        return this.isExpired(t) && this.remove(t), o(r.getItem(this._prefix(t)))
                    },
                    set: function(t, o, s) {
                        return n.isNumber(s) ? r.setItem(this._ttlKey(t), i(e() + s)) : r.removeItem(this._ttlKey(t)), r.setItem(this._prefix(t), i(o))
                    },
                    remove: function(t) {
                        return r.removeItem(this._ttlKey(t)), r.removeItem(this._prefix(t)), this
                    },
                    clear: function() {
                        var t, e, n = [],
                            i = r.length;
                        for (t = 0; t < i; t++)(e = r.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                        for (t = n.length; t--;) this.remove(n[t]);
                        return this
                    },
                    isExpired: function(t) {
                        var i = o(r.getItem(this._ttlKey(t)));
                        return !!(n.isNumber(i) && e() > i)
                    }
                } : {
                    get: n.noop,
                    set: n.noop,
                    remove: n.noop,
                    clear: n.noop,
                    isExpired: n.noop
                }, n.mixin(t.prototype, s), t
            }(),
            a = function() {
                "use strict";

                function e(e) {
                    e = e || {}, this.cancelled = !1, this.lastUrl = null, this._send = e.transport ? i(e.transport) : t.ajax, this._get = e.rateLimiter ? e.rateLimiter(this._get) : this._get, this._cache = !1 === e.cache ? new r(0) : l
                }

                function i(e) {
                    return function(i, o) {
                        function r(t) {
                            n.defer(function() {
                                a.resolve(t)
                            })
                        }

                        function s(t) {
                            n.defer(function() {
                                a.reject(t)
                            })
                        }
                        var a = t.Deferred();
                        return e(i, o, r, s), a
                    }
                }
                var o = 0,
                    s = {},
                    a = 6,
                    l = new r(10);
                return e.setMaxPendingRequests = function(t) {
                    a = t
                }, e.resetCache = function() {
                    l.reset()
                }, n.mixin(e.prototype, {
                    _get: function(t, e, n) {
                        function i(e) {
                            n && n(null, e), u._cache.set(t, e)
                        }

                        function r() {
                            n && n(!0)
                        }

                        function l() {
                            o--, delete s[t], u.onDeckRequestArgs && (u._get.apply(u, u.onDeckRequestArgs), u.onDeckRequestArgs = null)
                        }
                        var c, u = this;
                        this.cancelled || t !== this.lastUrl || ((c = s[t]) ? c.done(i).fail(r) : o < a ? (o++, s[t] = this._send(t, e).done(i).fail(r).always(l)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(t, e, i) {
                        var o;
                        return n.isFunction(e) && (i = e, e = {}), this.cancelled = !1, this.lastUrl = t, (o = this._cache.get(t)) ? n.defer(function() {
                            i && i(null, o)
                        }) : this._get(t, e, i), !!o
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }), e
            }(),
            l = function() {
                "use strict";

                function e(e) {
                    (e = e || {}).datumTokenizer && e.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = e.datumTokenizer, this.queryTokenizer = e.queryTokenizer, this.reset()
                }

                function i(t) {
                    return t = n.filter(t, function(t) {
                        return !!t
                    }), t = n.map(t, function(t) {
                        return t.toLowerCase()
                    })
                }

                function o() {
                    return {
                        ids: [],
                        children: {}
                    }
                }

                function r(t) {
                    for (var e = {}, n = [], i = 0, o = t.length; i < o; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                    return n
                }

                function s(t, e) {
                    function n(t, e) {
                        return t - e
                    }
                    var i = 0,
                        o = 0,
                        r = [];
                    t = t.sort(n), e = e.sort(n);
                    for (var s = t.length, a = e.length; i < s && o < a;) t[i] < e[o] ? i++ : t[i] > e[o] ? o++ : (r.push(t[i]), i++, o++);
                    return r
                }
                return n.mixin(e.prototype, {
                    bootstrap: function(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function(t) {
                        var e = this;
                        t = n.isArray(t) ? t : [t], n.each(t, function(t) {
                            var r, s;
                            r = e.datums.push(t) - 1, s = i(e.datumTokenizer(t)), n.each(s, function(t) {
                                var n, i, s;
                                for (n = e.trie, i = t.split(""); s = i.shift();)(n = n.children[s] || (n.children[s] = o())).ids.push(r)
                            })
                        })
                    },
                    get: function(t) {
                        var e, o, a = this;
                        return e = i(this.queryTokenizer(t)), n.each(e, function(t) {
                            var e, n, i, r;
                            if (o && 0 === o.length) return !1;
                            for (e = a.trie, n = t.split(""); e && (i = n.shift());) e = e.children[i];
                            if (!e || 0 !== n.length) return o = [], !1;
                            r = e.ids.slice(0), o = o ? s(o, r) : r
                        }), o ? n.map(r(o), function(t) {
                            return a.datums[t]
                        }) : []
                    },
                    reset: function() {
                        this.datums = [], this.trie = o()
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), e
            }(),
            c = function() {
                "use strict";

                function e(t) {
                    return t.local || null
                }

                function o(e) {
                    var o, r;
                    return r = {
                        url: null,
                        thumbprint: "",
                        ttl: 864e5,
                        filter: null,
                        ajax: {}
                    }, (o = e.prefetch || null) && (o = n.isString(o) ? {
                        url: o
                    } : o, (o = n.mixin(r, o)).thumbprint = i + o.thumbprint, o.ajax.type = o.ajax.type || "GET", o.ajax.dataType = o.ajax.dataType || "json", !o.url && t.error("prefetch requires url to be set")), o
                }

                function r(e) {
                    function i(t) {
                        return function(e) {
                            return n.debounce(e, t)
                        }
                    }

                    function o(t) {
                        return function(e) {
                            return n.throttle(e, t)
                        }
                    }
                    var r, s;
                    return s = {
                        url: null,
                        cache: !0,
                        wildcard: "%QUERY",
                        replace: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        send: null,
                        filter: null,
                        ajax: {}
                    }, (r = e.remote || null) && (r = n.isString(r) ? {
                        url: r
                    } : r, (r = n.mixin(s, r)).rateLimiter = /^throttle$/i.test(r.rateLimitBy) ? o(r.rateLimitWait) : i(r.rateLimitWait), r.ajax.type = r.ajax.type || "GET", r.ajax.dataType = r.ajax.dataType || "json", delete r.rateLimitBy, delete r.rateLimitWait, !r.url && t.error("remote requires url to be set")), r
                }
                return {
                    local: e,
                    prefetch: o,
                    remote: r
                }
            }();
        ! function(e) {
            "use strict";

            function i(e) {
                e && (e.local || e.prefetch || e.remote) || t.error("one of local, prefetch, or remote is required"), this.limit = e.limit || 5, this.sorter = r(e.sorter), this.dupDetector = e.dupDetector || u, this.local = c.local(e), this.prefetch = c.prefetch(e), this.remote = c.remote(e), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new l({
                    datumTokenizer: e.datumTokenizer,
                    queryTokenizer: e.queryTokenizer
                }), this.storage = this.cacheKey ? new s(this.cacheKey) : null
            }

            function r(t) {
                function e(e) {
                    return e.sort(t)
                }

                function i(t) {
                    return t
                }
                return n.isFunction(t) ? e : i
            }

            function u() {
                return !1
            }
            var d, h;
            d = e.Bloodhound, h = {
                data: "data",
                protocol: "protocol",
                thumbprint: "thumbprint"
            }, e.Bloodhound = i, i.noConflict = function() {
                return e.Bloodhound = d, i
            }, i.tokenizers = o, n.mixin(i.prototype, {
                _loadPrefetch: function(e) {
                    function n(t) {
                        r.clear(), r.add(e.filter ? e.filter(t) : t), r._saveToStorage(r.index.serialize(), e.thumbprint, e.ttl)
                    }
                    var i, o, r = this;
                    return (i = this._readFromStorage(e.thumbprint)) ? (this.index.bootstrap(i), o = t.Deferred().resolve()) : o = t.ajax(e.url, e.ajax).done(n), o
                },
                _getFromRemote: function(t, e) {
                    function n(t, n) {
                        e(t ? [] : r.remote.filter ? r.remote.filter(n) : n)
                    }
                    var i, o, r = this;
                    if (this.transport) return t = t || "", o = encodeURIComponent(t), i = this.remote.replace ? this.remote.replace(this.remote.url, t) : this.remote.url.replace(this.remote.wildcard, o), this.transport.get(i, this.remote.ajax, n)
                },
                _cancelLastRemoteRequest: function() {
                    this.transport && this.transport.cancel()
                },
                _saveToStorage: function(t, e, n) {
                    this.storage && (this.storage.set(h.data, t, n), this.storage.set(h.protocol, location.protocol, n), this.storage.set(h.thumbprint, e, n))
                },
                _readFromStorage: function(t) {
                    var e, n = {};
                    return this.storage && (n.data = this.storage.get(h.data), n.protocol = this.storage.get(h.protocol), n.thumbprint = this.storage.get(h.thumbprint)), e = n.thumbprint !== t || n.protocol !== location.protocol, n.data && !e ? n.data : null
                },
                _initialize: function() {
                    function e() {
                        o.add(n.isFunction(r) ? r() : r)
                    }
                    var i, o = this,
                        r = this.local;
                    return i = this.prefetch ? this._loadPrefetch(this.prefetch) : t.Deferred().resolve(), r && i.done(e), this.transport = this.remote ? new a(this.remote) : null, this.initPromise = i.promise()
                },
                initialize: function(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function(t) {
                    this.index.add(t)
                },
                get: function(t, e) {
                    function i(t) {
                        var i = r.slice(0);
                        n.each(t, function(t) {
                            return !n.some(i, function(e) {
                                return o.dupDetector(t, e)
                            }) && i.push(t), i.length < o.limit
                        }), e && e(o.sorter(i))
                    }
                    var o = this,
                        r = [],
                        s = !1;
                    r = this.index.get(t), (r = this.sorter(r).slice(0, this.limit)).length < this.limit ? s = this._getFromRemote(t, i) : this._cancelLastRemoteRequest(), s || (r.length > 0 || !this.transport) && e && e(r)
                },
                clear: function() {
                    this.index.reset()
                },
                clearPrefetchCache: function() {
                    this.storage && this.storage.clear()
                },
                clearRemoteCache: function() {
                    this.transport && a.resetCache()
                },
                ttAdapter: function() {
                    return n.bind(this.get, this)
                }
            })
        }(this);
        var u = {
                wrapper: '<span class="twitter-typeahead"></span>',
                dropdown: '<span class="tt-dropdown-menu"></span>',
                dataset: '<div class="tt-dataset-%CLASS%"></div>',
                suggestions: '<span class="tt-suggestions"></span>',
                suggestion: '<div class="tt-suggestion"></div>'
            },
            d = function() {
                "use strict";
                var t = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: "1"
                    },
                    input: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    inputWithNoHint: {
                        position: "relative",
                        verticalAlign: "top"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    },
                    suggestions: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    },
                    ltr: {
                        left: "0",
                        right: "auto"
                    },
                    rtl: {
                        left: "auto",
                        right: " 0"
                    }
                };
                return n.isMsie() && n.mixin(t.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), n.isMsie() && n.isMsie() <= 7 && n.mixin(t.input, {
                    marginTop: "-1px"
                }), t
            }(),
            h = function() {
                "use strict";

                function e(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                var i = "typeahead:";
                return n.mixin(e.prototype, {
                    trigger: function(t) {
                        var e = [].slice.call(arguments, 1);
                        this.$el.trigger(i + t, e)
                    }
                }), e
            }(),
            p = function() {
                "use strict";

                function t(t, e, n, i) {
                    var o;
                    if (!n) return this;
                    for (e = e.split(l), n = i ? a(n, i) : n, this._callbacks = this._callbacks || {}; o = e.shift();) this._callbacks[o] = this._callbacks[o] || {
                        sync: [],
                        async: []
                    }, this._callbacks[o][t].push(n);
                    return this
                }

                function e(e, n, i) {
                    return t.call(this, "async", e, n, i)
                }

                function n(e, n, i) {
                    return t.call(this, "sync", e, n, i)
                }

                function i(t) {
                    var e;
                    if (!this._callbacks) return this;
                    for (t = t.split(l); e = t.shift();) delete this._callbacks[e];
                    return this
                }

                function o(t) {
                    var e, n, i, o, s;
                    if (!this._callbacks) return this;
                    for (t = t.split(l), i = [].slice.call(arguments, 1);
                        (e = t.shift()) && (n = this._callbacks[e]);) o = r(n.sync, this, [e].concat(i)), s = r(n.async, this, [e].concat(i)), o() && c(s);
                    return this
                }

                function r(t, e, n) {
                    function i() {
                        for (var i, o = 0, r = t.length; !i && o < r; o += 1) i = !1 === t[o].apply(e, n);
                        return !i
                    }
                    return i
                }

                function s() {
                    return window.setImmediate ? function(t) {
                        setImmediate(function() {
                            t()
                        })
                    } : function(t) {
                        setTimeout(function() {
                            t()
                        }, 0)
                    }
                }

                function a(t, e) {
                    return t.bind ? t.bind(e) : function() {
                        t.apply(e, [].slice.call(arguments, 0))
                    }
                }
                var l = /\s+/,
                    c = s();
                return {
                    onSync: n,
                    onAsync: e,
                    off: i,
                    trigger: o
                }
            }(),
            f = function(t) {
                "use strict";

                function e(t, e, i) {
                    for (var o, r = [], s = 0, a = t.length; s < a; s++) r.push(n.escapeRegExChars(t[s]));
                    return o = i ? "\\b(" + r.join("|") + ")\\b" : "(" + r.join("|") + ")", e ? new RegExp(o) : new RegExp(o, "i")
                }
                var i = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(o) {
                    function r(e) {
                        var n, i, r;
                        return (n = a.exec(e.data)) && (r = t.createElement(o.tagName), o.className && (r.className = o.className), (i = e.splitText(n.index)).splitText(n[0].length), r.appendChild(i.cloneNode(!0)), e.parentNode.replaceChild(r, i)), !!n
                    }

                    function s(t, e) {
                        for (var n, i = 3, o = 0; o < t.childNodes.length; o++)(n = t.childNodes[o]).nodeType === i ? o += e(n) ? 1 : 0 : s(n, e)
                    }
                    var a;
                    (o = n.mixin({}, i, o)).node && o.pattern && (o.pattern = n.isArray(o.pattern) ? o.pattern : [o.pattern], a = e(o.pattern, o.caseSensitive, o.wordsOnly), s(o.node, r))
                }
            }(window.document),
            m = function() {
                "use strict";

                function e(e) {
                    var o, r, a, l, c = this;
                    (e = e || {}).input || t.error("input is missing"), o = n.bind(this._onBlur, this), r = n.bind(this._onFocus, this), a = n.bind(this._onKeydown, this), l = n.bind(this._onInput, this), this.$hint = t(e.hint), this.$input = t(e.input).on("blur.tt", o).on("focus.tt", r).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = n.noop), n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                        s[t.which || t.keyCode] || n.defer(n.bind(c._onInput, c, t))
                    }) : this.$input.on("input.tt", l), this.query = this.$input.val(), this.$overflowHelper = i(this.$input)
                }

                function i(e) {
                    return t('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: e.css("font-family"),
                        fontSize: e.css("font-size"),
                        fontStyle: e.css("font-style"),
                        fontVariant: e.css("font-variant"),
                        fontWeight: e.css("font-weight"),
                        wordSpacing: e.css("word-spacing"),
                        letterSpacing: e.css("letter-spacing"),
                        textIndent: e.css("text-indent"),
                        textRendering: e.css("text-rendering"),
                        textTransform: e.css("text-transform")
                    }).insertAfter(e)
                }

                function o(t, n) {
                    return e.normalizeQuery(t) === e.normalizeQuery(n)
                }

                function r(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
                var s;
                return s = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, e.normalizeQuery = function(t) {
                    return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, n.mixin(e.prototype, p, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.trigger("focused")
                    },
                    _onKeydown: function(t) {
                        var e = s[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function() {
                        this._checkInputValue()
                    },
                    _managePreventDefault: function(t, e) {
                        var n, i, o;
                        switch (t) {
                            case "tab":
                                i = this.getHint(), o = this.getInputValue(), n = i && i !== o && !r(e);
                                break;
                            case "up":
                            case "down":
                                n = !r(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !r(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkInputValue: function() {
                        var t, e, n;
                        n = !!(e = o(t = this.getInputValue(), this.query)) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getQuery: function() {
                        return this.query
                    },
                    setQuery: function(t) {
                        this.query = t
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(t, e) {
                        this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query, !0)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var t, e, n;
                        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                    },
                    getLanguageDirection: function() {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    hasOverflow: function() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function() {
                        var t, e, i;
                        return t = this.$input.val().length, e = this.$input[0].selectionStart, n.isNumber(e) ? e === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length)
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    }
                }), e
            }(),
            g = function() {
                "use strict";

                function e(e) {
                    (e = e || {}).templates = e.templates || {}, e.source || t.error("missing source"), e.name && !r(e.name) && t.error("invalid dataset name: " + e.name), this.query = null, this.highlight = !!e.highlight, this.name = e.name || n.getUniqueId(), this.source = e.source, this.displayFn = i(e.display || e.displayKey), this.templates = o(e.templates, this.displayFn), this.$el = t(u.dataset.replace("%CLASS%", this.name))
                }

                function i(t) {
                    function e(e) {
                        return e[t]
                    }
                    return t = t || "value", n.isFunction(t) ? t : e
                }

                function o(t, e) {
                    function i(t) {
                        return "<p>" + e(t) + "</p>"
                    }
                    return {
                        empty: t.empty && n.templatify(t.empty),
                        header: t.header && n.templatify(t.header),
                        footer: t.footer && n.templatify(t.footer),
                        suggestion: t.suggestion || i
                    }
                }

                function r(t) {
                    return /^[_a-zA-Z0-9-]+$/.test(t)
                }
                var s = "ttDataset",
                    a = "ttValue",
                    l = "ttDatum";
                return e.extractDatasetName = function(e) {
                    return t(e).data(s)
                }, e.extractValue = function(e) {
                    return t(e).data(a)
                }, e.extractDatum = function(e) {
                    return t(e).data(l)
                }, n.mixin(e.prototype, p, {
                    _render: function(e, i) {
                        function o() {
                            return m.templates.empty({
                                query: e,
                                isEmpty: !0
                            })
                        }

                        function r() {
                            function o(e) {
                                var n;
                                return (n = t(u.suggestion).append(m.templates.suggestion(e)).data(s, m.name).data(a, m.displayFn(e)).data(l, e)).children().each(function() {
                                    t(this).css(d.suggestionChild)
                                }), n
                            }
                            var r, c;
                            return r = t(u.suggestions).css(d.suggestions), c = n.map(i, o), r.append.apply(r, c), m.highlight && f({
                                className: "tt-highlight",
                                node: r[0],
                                pattern: e
                            }), r
                        }

                        function c() {
                            return m.templates.header({
                                query: e,
                                isEmpty: !p
                            })
                        }

                        function h() {
                            return m.templates.footer({
                                query: e,
                                isEmpty: !p
                            })
                        }
                        if (this.$el) {
                            var p, m = this;
                            this.$el.empty(), !(p = i && i.length) && this.templates.empty ? this.$el.html(o()).prepend(m.templates.header ? c() : null).append(m.templates.footer ? h() : null) : p && this.$el.html(r()).prepend(m.templates.header ? c() : null).append(m.templates.footer ? h() : null), this.trigger("rendered")
                        }
                    },
                    getRoot: function() {
                        return this.$el
                    },
                    update: function(t) {
                        function e(e) {
                            n.canceled || t !== n.query || n._render(t, e)
                        }
                        var n = this;
                        this.query = t, this.canceled = !1, this.source(t, e)
                    },
                    cancel: function() {
                        this.canceled = !0
                    },
                    clear: function() {
                        this.cancel(), this.$el.empty(), this.trigger("rendered")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = null
                    }
                }), e
            }(),
            v = function() {
                "use strict";

                function e(e) {
                    var o, r, s, a = this;
                    (e = e || {}).menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = n.map(e.datasets, i), o = n.bind(this._onSuggestionClick, this), r = n.bind(this._onSuggestionMouseEnter, this), s = n.bind(this._onSuggestionMouseLeave, this), this.$menu = t(e.menu).on("click.tt", ".tt-suggestion", o).on("mouseenter.tt", ".tt-suggestion", r).on("mouseleave.tt", ".tt-suggestion", s), n.each(this.datasets, function(t) {
                        a.$menu.append(t.getRoot()), t.onSync("rendered", a._onRendered, a)
                    })
                }

                function i(t) {
                    return new g(t)
                }
                return n.mixin(e.prototype, p, {
                    _onSuggestionClick: function(e) {
                        this.trigger("suggestionClicked", t(e.currentTarget))
                    },
                    _onSuggestionMouseEnter: function(e) {
                        this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
                    },
                    _onSuggestionMouseLeave: function() {
                        this._removeCursor()
                    },
                    _onRendered: function() {
                        function t(t) {
                            return t.isEmpty()
                        }
                        this.isEmpty = n.every(this.datasets, t), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
                    },
                    _hide: function() {
                        this.$menu.hide()
                    },
                    _show: function() {
                        this.$menu.css("display", "block")
                    },
                    _getSuggestions: function() {
                        return this.$menu.find(".tt-suggestion")
                    },
                    _getCursor: function() {
                        return this.$menu.find(".tt-cursor").first()
                    },
                    _setCursor: function(t, e) {
                        t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
                    },
                    _removeCursor: function() {
                        this._getCursor().removeClass("tt-cursor")
                    },
                    _moveCursor: function(t) {
                        var e, n, i, o;
                        this.isOpen && (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 !== (i = ((i = e.index(n) + t) + 1) % (e.length + 1) - 1) ? (i < -1 && (i = e.length - 1), this._setCursor(o = e.eq(i)), this._ensureVisible(o)) : this.trigger("cursorRemoved"))
                    },
                    _ensureVisible: function(t) {
                        var e, n, i, o;
                        n = (e = t.position().top) + t.outerHeight(!0), i = this.$menu.scrollTop(), o = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), e < 0 ? this.$menu.scrollTop(i + e) : o < n && this.$menu.scrollTop(i + (n - o))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function(t) {
                        this.$menu.css("ltr" === t ? d.ltr : d.rtl)
                    },
                    moveCursorUp: function() {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function() {
                        this._moveCursor(1)
                    },
                    getDatumForSuggestion: function(t) {
                        var e = null;
                        return t.length && (e = {
                            raw: g.extractDatum(t),
                            value: g.extractValue(t),
                            datasetName: g.extractDatasetName(t)
                        }), e
                    },
                    getDatumForCursor: function() {
                        return this.getDatumForSuggestion(this._getCursor().first())
                    },
                    getDatumForTopSuggestion: function() {
                        return this.getDatumForSuggestion(this._getSuggestions().first())
                    },
                    update: function(t) {
                        function e(e) {
                            e.update(t)
                        }
                        n.each(this.datasets, e)
                    },
                    empty: function() {
                        function t(t) {
                            t.clear()
                        }
                        n.each(this.datasets, t), this.isEmpty = !0
                    },
                    isVisible: function() {
                        return this.isOpen && !this.isEmpty
                    },
                    destroy: function() {
                        function t(t) {
                            t.destroy()
                        }
                        this.$menu.off(".tt"), this.$menu = null, n.each(this.datasets, t)
                    }
                }), e
            }(),
            y = function() {
                "use strict";

                function i(e) {
                    var i, r, s;
                    (e = e || {}).input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!e.autoselect, this.minLength = n.isNumber(e.minLength) ? e.minLength : 1, this.$node = o(e.input, e.withHint), i = this.$node.find(".tt-dropdown-menu"), r = this.$node.find(".tt-input"), s = this.$node.find(".tt-hint"), r.on("blur.tt", function(t) {
                        var e, o, s;
                        e = document.activeElement, o = i.is(e), s = i.has(e).length > 0, n.isMsie() && (o || s) && (t.preventDefault(), t.stopImmediatePropagation(), n.defer(function() {
                            r.focus()
                        }))
                    }), i.on("mousedown.tt", function(t) {
                        t.preventDefault()
                    }), this.eventBus = e.eventBus || new h({
                        el: r
                    }), this.dropdown = new v({
                        menu: i,
                        datasets: e.datasets
                    }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new m({
                        input: r,
                        hint: s
                    }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
                }

                function o(n, i) {
                    var o, s, l, c;
                    o = t(n), s = t(u.wrapper).css(d.wrapper), l = t(u.dropdown).css(d.dropdown), (c = o.clone().css(d.hint).css(r(o))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                        autocomplete: "off",
                        spellcheck: "false",
                        tabindex: -1
                    }), o.data(a, {
                        dir: o.attr("dir"),
                        autocomplete: o.attr("autocomplete"),
                        spellcheck: o.attr("spellcheck"),
                        style: o.attr("style")
                    }), o.addClass("tt-input").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(i ? d.input : d.inputWithNoHint);
                    try {
                        !o.attr("dir") && o.attr("dir", "auto")
                    } catch (e) {}
                    return o.wrap(s).parent().prepend(i ? c : null).append(l)
                }

                function r(t) {
                    return {
                        backgroundAttachment: t.css("background-attachment"),
                        backgroundClip: t.css("background-clip"),
                        backgroundColor: t.css("background-color"),
                        backgroundImage: t.css("background-image"),
                        backgroundOrigin: t.css("background-origin"),
                        backgroundPosition: t.css("background-position"),
                        backgroundRepeat: t.css("background-repeat"),
                        backgroundSize: t.css("background-size")
                    }
                }

                function s(t) {
                    var e = t.find(".tt-input");
                    n.each(e.data(a), function(t, i) {
                        n.isUndefined(t) ? e.removeAttr(i) : e.attr(i, t)
                    }), e.detach().removeData(a).removeClass("tt-input").insertAfter(t), t.remove()
                }
                var a = "ttAttrs";
                return n.mixin(i.prototype, {
                    _onSuggestionClicked: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
                    },
                    _onCursorMoved: function() {
                        var t = this.dropdown.getDatumForCursor();
                        this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
                    },
                    _onCursorRemoved: function() {
                        this.input.resetInputValue(), this._updateHint()
                    },
                    _onDatasetRendered: function() {
                        this._updateHint()
                    },
                    _onOpened: function() {
                        this._updateHint(), this.eventBus.trigger("opened")
                    },
                    _onClosed: function() {
                        this.input.clearHint(), this.eventBus.trigger("closed")
                    },
                    _onFocused: function() {
                        this.isActivated = !0, this.dropdown.open()
                    },
                    _onBlurred: function() {
                        this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
                    },
                    _onEnterKeyed: function(t, e) {
                        var n, i;
                        n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
                    },
                    _onTabKeyed: function(t, e) {
                        var n;
                        (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
                    },
                    _onEscKeyed: function() {
                        this.dropdown.close(), this.input.resetInputValue()
                    },
                    _onUpKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
                    },
                    _onDownKeyed: function() {
                        var t = this.input.getQuery();
                        this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this._autocomplete()
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this._autocomplete()
                    },
                    _onQueryChanged: function(t, e) {
                        this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint(), this.dropdown.open()
                    },
                    _setLanguageDirection: function() {
                        var t;
                        this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
                    },
                    _updateHint: function() {
                        var t, e, i, o, r;
                        (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (e = this.input.getInputValue(), i = m.normalizeQuery(e), o = n.escapeRegExChars(i), (r = new RegExp("^(?:" + o + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(e + r[1]) : this.input.clearHint()) : this.input.clearHint()
                    },
                    _autocomplete: function(t) {
                        var e, n, i, o;
                        e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && ((o = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(o.value), this.eventBus.trigger("autocompleted", o.raw, o.datasetName))
                    },
                    _select: function(t) {
                        this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), n.defer(n.bind(this.dropdown.empty, this.dropdown))
                    },
                    open: function() {
                        this.dropdown.open()
                    },
                    close: function() {
                        this.dropdown.close()
                    },
                    setVal: function(t) {
                        t = n.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
                    },
                    getVal: function() {
                        return this.input.getQuery()
                    },
                    destroy: function() {
                        this.input.destroy(), this.dropdown.destroy(), s(this.$node), this.$node = null
                    }
                }), i
            }();
        ! function() {
            "use strict";
            var e, i, o;
            e = t.fn.typeahead, i = "ttTypeahead", o = {
                initialize: function(e, o) {
                    function r() {
                        var r, s = t(this);
                        n.each(o, function(t) {
                            t.highlight = !!e.highlight
                        }), r = new y({
                            input: s,
                            eventBus: new h({
                                el: s
                            }),
                            withHint: !!n.isUndefined(e.hint) || !!e.hint,
                            minLength: e.minLength,
                            autoselect: e.autoselect,
                            datasets: o
                        }), s.data(i, r)
                    }
                    return o = n.isArray(o) ? o : [].slice.call(arguments, 1), e = e || {}, this.each(r)
                },
                open: function() {
                    function e() {
                        var e;
                        (e = t(this).data(i)) && e.open()
                    }
                    return this.each(e)
                },
                close: function() {
                    function e() {
                        var e;
                        (e = t(this).data(i)) && e.close()
                    }
                    return this.each(e)
                },
                val: function(e) {
                    function n() {
                        var n;
                        (n = t(this).data(i)) && n.setVal(e)
                    }

                    function o(t) {
                        var e, n;
                        return (e = t.data(i)) && (n = e.getVal()), n
                    }
                    return arguments.length ? this.each(n) : o(this.first())
                },
                destroy: function() {
                    function e() {
                        var e, n = t(this);
                        (e = n.data(i)) && (e.destroy(), n.removeData(i))
                    }
                    return this.each(e)
                }
            }, t.fn.typeahead = function(e) {
                var n;
                return o[e] && "initialize" !== e ? (n = this.filter(function() {
                    return !!t(this).data(i)
                }), o[e].apply(n, [].slice.call(arguments, 1))) : o.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function() {
                return t.fn.typeahead = e, this
            }
        }()
    }(window.jQuery),
    function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n = !1;
            return function() {
                n || (t.call(), n = !0, setTimeout(function() {
                    n = !1
                }, e))
            }
        }

        function o(n) {
            document.body.contains(ut[0]) && !n || (Z && ut.hide(), Y.on("touchstart.testMouse", function() {
                Y.off("touchstart.testMouse"), tt = !0, ut.addClass("mobile")
            }), H.off().on("click", P.toggle), B.off().on("click", "a", L.click), J && ut.addClass("msie"), ut.off().on("click", "img", function(t) {
                t.stopPropagation()
            }), t(e.body).append(ut), D = e.documentElement)
        }

        function r(t, e, n) {
            1 == e ? (O.css({
                transform: "translateX(25%)",
                transition: ".2s",
                opacity: 0
            }), I(_)) : -1 == e && (O.css({
                transform: "translateX(-25%)",
                transition: ".2s",
                opacity: 0
            }), I(A)), 1 == n ? M.prop("checked", !0) : -1 == n && M.prop("checked", !1)
        }

        function s(t) {
            var n, i = e.createElement("p").style,
                o = ["ms", "O", "Moz", "Webkit"];
            if ("" == i[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.slice(1), n = o.length; n--;)
                if ("" == i[o[n] + t]) return o[n] + t
        }

        function a(e) {
            var n = e.keyCode,
                i = C.keys;
            return t.inArray(n, i.close) >= 0 && b() || t.inArray(n, i.next) >= 0 && !C.single && d(A) || t.inArray(n, i.prev) >= 0 && !C.single && d(_) || !0
        }

        function l(t, e, n) {
            1 == n ? d(A) : -1 == n && d(_)
        }

        function c() {
            return d("pbPrevBtn" == this.id ? _ : A), !1
        }

        function u(t) {
            k = X, X = t, E = K[t][0], _ = (X || (C.loop ? K.length : 0)) - 1, A = (X + 1) % K.length || (C.loop ? 0 : -1)
        }

        function d(t) {
            if (!C.loop && (X == K.length - 1 && t == A || 0 == X && t == _)) return;
            I(t)
        }

        function h() {
            var e = K[X][0];
            return e += (t("<a>").prop("href", K[X][0])[0].search ? "&" : "?") + "vq=hd720&wmode=opaque", t("<iframe>").prop({
                scrolling: "no",
                frameborder: 0,
                allowTransparency: !0,
                src: e
            }).attr({
                webkitAllowFullScreen: !0,
                mozallowfullscreen: !0,
                allowFullScreen: !0
            })
        }

        function p() {
            var t;
            $.off(ot).removeClass("change"), C.captionTmpl && (t = C.captionTmpl.replace(/{title}/g, K[X][1]).replace(/{currentImageIdx}/g, X + 1).replace(/{totalImagesCount}/g, K.length), $.html(t))
        }

        function f() {
            ut.addClass("error"), O[0].src = nt, st.onerror = null
        }

        function m(e) {
            function n() {
                W.removeAttr("style"), clearTimeout(o), ut.removeClass("video"), "video" == T ? (O.attr("src", nt), i.off(ot).css({
                    transition: "none"
                }), R.addClass("prepare"), ut.addClass("video")) : O.replaceWith(O = t('<img src="' + E + '" class="prepare">')), setTimeout(function() {
                    ut.removeClass("pbHide next prev"), O.add(R).removeAttr("style").removeClass("prepare").on(ot, g), J && g()
                }, 50)
            }
            var i, o;
            o = setTimeout(n, 2e3), F.fadeOut(300, function() {
                ut.removeClass("pbLoading"), F.removeAttr("style")
            }), ut.addClass("pbHide"), O.add(R).removeClass("zoomable"), e || "video" != S[k].rel ? i = O : (i = R, O.addClass("prepare")), e || J ? n() : i.on(ot, n)
        }

        function g() {
            O.add(R).off(ot).addClass("zoomable"), "video" == T ? R.removeClass("pbHide") : H && C.autoplay && P.play(), x && "function" == typeof x.callback && x.callback(S[X])
        }

        function v(t, e) {
            t.preventDefault(), t.stopPropagation();
            var n, i = x.thumbsList;
            i.css("height", i[0].clientHeight + 10 * e), n = q[0].clientHeight / 2, W[0].style.cssText = "margin-top: -" + n + "px; padding: " + n + "px 0;", B.hide().show(0)
        }

        function y() {
            clearTimeout(P.autoPlayTimer), Y.off("mousemove.photobox"), st.onload = function() {}, st.src = at.src = lt.src = E
        }

        function b() {
            function e() {
                "" != ut[0].className && (ut.removeClass("show pbHide error pbLoading"), O.removeAttr("class").removeAttr("style").off().data("zoom", 1), O[0].src = nt, q.find(".title").empty(), Z && setTimeout(function() {
                    ut.hide()
                }, 200), C.hideFlash && t("iframe, object, embed").css("visibility", "visible"))
            }
            if (!ut.hasClass("show")) return !1;
            y(), R.find("iframe").prop("src", "").empty(), w.prototype.setup(), pt.clear(),
                ut.removeClass("on video").addClass("pbHide"), X = -1, O.on(ot, e), J && e(), setTimeout(function() {
                    x = null
                }, 1e3), setTimeout(e, 500), "function" == typeof C.afterClose && C.afterClose(ut)
        }
        var w, x, C, S, E, k, T, _, A, L, D, P, I, O, R, j, N, M, q, $, F, H, B, W, z, U, V, Q, K = [],
            X = -1,
            Y = t(e),
            G = t(n),
            J = !("placeholder" in e.createElement("input")),
            Z = ((z = t("<p>")[0]).style.cssText = "pointer-events:auto", !z.style.pointerEvents),
            tt = !1,
            et = t(),
            nt = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            it = (s("transformOrigin"), s("transition")),
            ot = "transitionend webkitTransitionEnd oTransitionEnd otransitionend",
            rt = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            },
            st = {},
            at = new Image,
            lt = new Image,
            ct = {
                single: !1,
                beforeShow: null,
                afterClose: null,
                loop: !0,
                thumb: null,
                thumbs: !0,
                thumbAttr: "data-src",
                captionTmpl: '<div class="title">{title}</div><div class="counter">({currentImageIdx}/{totalImagesCount})</div>',
                autoplay: !1,
                time: 3e3,
                history: !1,
                hideFlash: !0,
                zoomable: !0,
                rotatable: !0,
                wheelNextPrev: !0,
                keys: {
                    close: [27, 88, 67],
                    prev: [37, 80],
                    next: [39, 78]
                }
            },
            ut = t('<div id="pbOverlay">').append(M = t('<input type="checkbox" id="pbThumbsToggler" checked hidden>'), F = t('<div class="pbLoader"><b></b><b></b><b></b></div>'), j = t('<div id="pbPrevBtn" class="prevNext"><b></b></div>').on("click", c), N = t('<div id="pbNextBtn" class="prevNext"><b></b></div>').on("click", c), W = t('<div class="pbWrapper">').append(O = t("<img>"), R = t('<div class="pbVideo">')), t('<div id="pbCloseBtn">').on("click", b)[0], H = t('<div id="pbAutoplayBtn">').append(t('<div class="pbProgress">')), q = t('<div id="pbCaption">').append('<label for="pbThumbsToggler" title="Show/hide thumbnails"></label>', '<button title="Rotate right" class="rotateBtn">&#10227;</button>', $ = t('<div class="pbCaptionText">'), B = t("<div>").addClass("pbThumbs")));
        t.fn.photobox = function(e, n, i) {
            return o(), this.each(function() {
                var r = t(this).data("_photobox");
                return r ? ("destroy" === e && r.destroy(), this) : ("string" != typeof e && (e = "a"), "prepareDOM" === e ? (o(!0), this) : (n = t.extend({}, ct, n || {}), x = new w(n, this, e), t(this).data("_photobox", x), void(x.callback = i)))
            })
        }, (w = function(n, i, o) {
            this.options = t.extend({}, n), this.target = o, this.selector = t(i || e), this.thumbsList = null;
            var r = this.imageLinksFilter(this.selector.find(o));
            this.imageLinks = r[0], this.images = r[1], this.init()
        }).prototype = {
            init: function() {
                this.DOM = this.DOM(), this.DOM.rotateBtn.toggleClass("show", this.options.rotatable), this.observerTimeout = null, this.events.binding.call(this)
            },
            DOM: function() {
                var t = {};
                return t.scope = ut, t.rotateBtn = t.scope.find(".rotateBtn"), t
            },
            observeDOM: (U = n.MutationObserver || n.WebKitMutationObserver, V = n.addEventListener, function(e, n) {
                if (U) {
                    var i = this;
                    new U(function(t) {
                        (t[0].addedNodes.length || t[0].removedNodes.length) && n(i)
                    }).observe(e, {
                        childList: !0,
                        subtree: !0
                    })
                } else V && (e.addEventListener("DOMNodeInserted", t.proxy(n, i), !1), e.addEventListener("DOMNodeRemoved", t.proxy(n, i), !1))
            }),
            open: function(e) {
                var n = t.inArray(e, this.imageLinks);
                return -1 != n && (C = this.options, K = this.images, S = this.imageLinks, x = this, this.setup(1), ut.on(ot, function() {
                    ut.off(ot).addClass("on"), I(n, !0)
                }).addClass("show"), J && ut.trigger("MSTransitionEnd"), !1)
            },
            imageLinksFilter: function(e) {
                function n() {
                    var e, n = t(this),
                        a = "";
                    return s.content = n[0].getAttribute("title") || "", o.options.thumb && (e = n.find(o.options.thumb)[0]), o.options.thumb && e || (e = n.find("img")[0]), e && (i = e.getAttribute("data-pb-captionlink"), a = e.getAttribute(o.options.thumbAttr) || e.getAttribute("src"), s.content = e.getAttribute("alt") || e.getAttribute("title") || ""), i && (2 == (i = i.split("[")).length ? (s.linkText = i[0], s.linkHref = i[1].slice(0, -1)) : (s.linkText = i, s.linkHref = i), s.content += ' <a href="' + s.linkHref + '">' + s.linkText + "</a>"), r.push([n[0].href, s.content, a]), !0
                }
                var i, o = this,
                    r = [],
                    s = {};
                return [e.filter(n), r]
            },
            setup: function(e) {
                var n = e ? "on" : "off";
                C.thumbs && (tt || B[n]("mouseenter.photobox", L.calc)[n]("mousemove.photobox", L.move)), e ? (O.css({
                    transition: "0s"
                }).removeAttr("style"), ut.show(), B.html(this.thumbsList).trigger("mouseenter.photobox"), C.thumbs ? ut.addClass("thumbs") : (M.prop("checked", !1), ut.removeClass("thumbs")), this.images.length < 2 || C.single ? ut.removeClass("thumbs hasArrows hasCounter hasAutoplay") : (ut.addClass("hasArrows hasCounter"), C.time > 1e3 ? (ut.addClass("hasAutoplay"), C.autoplay ? P.progress.start() : P.pause()) : ut.removeClass("hasAutoplay")), C.hideFlash && t("iframe, object, embed").css("visibility", "hidden")) : G.off("resize.photobox"), Y.off("keydown.photobox")[n]({
                    "keydown.photobox": a
                }), tt && (ut.removeClass("hasArrows"), W[n]("swipe", r)), C.zoomable && (ut[n]({
                    "mousewheel.photobox": t.proxy(this.events.callbacks.onScrollZoom, this)
                }), J || B[n]({
                    "mousewheel.photobox": v
                })), !C.single && C.wheelNextPrev && ut[n]({
                    "mousewheel.photobox": i(l, 1e3)
                })
            },
            destroy: function() {
                C = this.options, this.selector.off("click.photobox", this.target).removeData("_photobox"), b()
            },
            events: {
                binding: function() {
                    var e = this;
                    this.selector.one("mouseenter.photobox", this.target, function() {
                        e.thumbsList = L.generate.apply(e)
                    }), this.selector.on("click.photobox", this.target, function(t) {
                        t.preventDefault(), e.open(this)
                    }), J || 1 != this.selector[0].nodeType || this.observeDOM(this.selector[0], t.proxy(this.events.callbacks.onDOMchanges, this)), this.DOM.rotateBtn.on("click", this.events.callbacks.onRotateBtnClick)
                },
                callbacks: {
                    onDOMchanges: function() {
                        var t = this;
                        clearTimeout(this.observerTimeout), t.observerTimeout = setTimeout(function() {
                            var e, n = t.imageLinksFilter(t.selector.find(t.target)),
                                i = 0;
                            if (t.imageLinks.length != n[0].length) {
                                if (t.imageLinks = n[0], t.images = n[1], x && t.selector == x.selector)
                                    for (K = t.images, S = t.imageLinks, e = K.length; e--;) K[e][0] == E && !0;
                                t.thumbsList = L.generate.apply(t), B.html(t.thumbsList), t.images.length && E && t.options.thumbs && (-1 == (i = t.thumbsList.find('a[href="' + E + '"]').eq(0).parent().index()) && (i = 0), L.changeActive(i, 0))
                            }
                        }, 50)
                    },
                    onRotateBtnClick: function() {
                        var t = O.data("rotation") || 0,
                            e = O.data("zoom") || 1;
                        t += 90, O.removeClass("zoomable").addClass("rotating"), O.css("transform", "rotate(" + t + "deg) scale(" + e + ")").data("rotation", t).on(ot, function() {
                            O.addClass("zoomable").removeClass("rotating")
                        })
                    },
                    onScrollZoom: function(t, e, n) {
                        if (n) return !1;
                        var i = this;
                        if ("video" == T) {
                            var o = R.data("zoom") || 1;
                            if ((o += e / 10) < .5) return !1;
                            R.data("zoom", o).css({
                                width: 624 * o,
                                height: 351 * o
                            })
                        } else rt(function() {
                            var t, n = O.data("zoom") || 1,
                                o = O.data("rotation") || 0,
                                r = O.data("position") || "50% 50%",
                                s = O[0].getBoundingClientRect();
                            (n += e / 10) < .1 && (n = .1), O.data("zoom", n), t = "scale(" + n + ") rotate(" + o + "deg)", s.height > D.clientHeight || s.width > D.clientWidth ? (Y.on("mousemove.photobox", i.events.callbacks.onMouseMoveimageReposition), t += " translate(" + r + ")") : Y.off("mousemove.photobox"), O.css({
                                transform: t
                            })
                        });
                        return !1
                    },
                    onMouseMoveimageReposition: function(t) {
                        rt(function() {
                            var e, n = 1.5,
                                i = (t.clientY / D.clientHeight * 100 - 50) / n,
                                o = (t.clientX / D.clientWidth * 100 - 50) / n,
                                r = O.data("rotation") || 0,
                                s = r / 90 % 4 || 0,
                                a = O.data("zoom") || 1;
                            e = 1 == s || 3 == s ? i.toFixed(2) + "%, " + -o.toFixed(2) + "%" : o.toFixed(2) + "%, " + i.toFixed(2) + "%", O.data("position", e), O[0].style.transform = "rotate(" + r + "deg) scale(" + a + ") translate(" + e + ")"
                        })
                    }
                }
            }
        }, L = function() {
            var e, n, i, o = 0,
                r = 0,
                s = 0,
                a = 0,
                l = null;
            return {
                generate: function() {
                    var e, n, i, o, r, s = t("<ul>"),
                        a = [],
                        l = this.imageLinks.length;
                    for (r = 0; r < l; r++) i = this.imageLinks[r], (n = this.images[r][2]) && (e = this.images[r][1], o = i.rel ? " class='" + i.rel + "'" : "", a.push("<li" + o + '><a href="' + i.href + '"><img src="' + n + '" alt="" title="' + e + '" /></a></li>'));
                    return s.html(a.join("")), s
                },
                click: function(e) {
                    e.preventDefault(), et.removeClass("active"), et = t(this).parent().addClass("active");
                    var n = t(this.parentNode).index();
                    return I(n, 0, 1)
                },
                changeActiveTimeout: null,
                changeActive: function(t, e, n) {
                    if (C.thumbs) {
                        et.index();
                        et.removeClass("active"), et = B.find("li").eq(t).addClass("active"), !n && et[0] && (clearTimeout(this.changeActiveTimeout), this.changeActiveTimeout = setTimeout(function() {
                            var t = et[0].offsetLeft + et[0].clientWidth / 2 - D.clientWidth / 2;
                            e ? B.delay(800) : B.stop(), B.animate({
                                scrollLeft: t
                            }, 500, "swing")
                        }, 200))
                    }
                },
                calc: function(t) {
                    return n = B[0], o = n.clientWidth, r = n.scrollWidth, e = .15 * o, s = B.offset().left, a = t.pageX - e - s, i = (r - o) * (a / (o - 2 * e)), B.animate({
                        scrollLeft: i
                    }, 200), clearTimeout(l), l = setTimeout(function() {
                        l = null
                    }, 200), this
                },
                move: function(t) {
                    if (!l) {
                        var i, a = t.pageX - e - s;
                        a < 0 && (a = 0), i = (r - o) * (a / (o - 2 * e)), rt(function() {
                            n.scrollLeft = i
                        })
                    }
                }
            }
        }(), P = {
            autoPlayTimer: !1,
            play: function() {
                P.autoPlayTimer = setTimeout(function() {
                    I(A)
                }, C.time), P.progress.start(), H.removeClass("play"), P.setTitle("Click to stop autoplay"), C.autoplay = !0
            },
            pause: function() {
                clearTimeout(P.autoPlayTimer), P.progress.reset(), H.addClass("play"), P.setTitle("Click to resume autoplay"), C.autoplay = !1
            },
            progress: {
                reset: function() {
                    H.find("div").removeAttr("style"), setTimeout(function() {
                        H.removeClass("playing")
                    }, 200)
                },
                start: function() {
                    J || H.find("div").css(it, C.time + "ms"), H.addClass("playing")
                }
            },
            setTitle: function(t) {
                t && H.prop("title", t + " (every " + C.time / 1e3 + " seconds)")
            },
            toggle: function(t) {
                t.stopPropagation(), P[C.autoplay ? "pause" : "play"]()
            }
        }, I = function(t, e, n) {
            if (!Q) {
                if (Q = setTimeout(function() {
                        Q = null
                    }, 150), Y.off("mousemove.photobox"), (!t || t < 0) && (t = 0), C.loop || (N.toggleClass("pbHide", t == K.length - 1), j.toggleClass("pbHide", 0 == t)), "function" == typeof C.beforeShow && C.beforeShow(S[t]), ut.removeClass("error"), X >= 0 && ut.addClass(t > X ? "next" : "prev"), u(t), y(), R.empty(), st.onerror = null, O.add(R).data("zoom", 1), "video" == (T = "video" == S[t].rel ? "video" : "image")) R.html(h()).addClass("pbHide"), m(e);
                else {
                    var i = setTimeout(function() {
                        ut.addClass("pbLoading")
                    }, 50);
                    J && ut.addClass("pbHide"), C.autoplay && P.progress.reset(), (st = new Image).onload = function() {
                        st.onload = null, _ >= 0 && (at.src = K[_][0]), A >= 0 && (lt.src = K[A][0]), clearTimeout(i), m(e)
                    }, st.onerror = f, st.src = E
                }
                $.on(ot, p).addClass("change"), (e || J) && p(), L.changeActive(t, e, n), pt.save()
            }
        };
        var dt, ht, pt = {
            save: function() {
                "pushState" in window.history && decodeURIComponent(window.location.hash.slice(1)) != E && C.history && window.history.pushState("photobox", e.title + "-" + K[X][1], window.location.pathname + window.location.search + "#" + encodeURIComponent(E))
            },
            load: function() {
                if (C && !C.history) return !1;
                var e = decodeURIComponent(window.location.hash.slice(1));
                !e && ut.hasClass("show") && b(), t('a[href="' + e + '"]').trigger("click.photobox")
            },
            clear: function() {
                C.history && "pushState" in window.history && window.history.pushState("photobox", e.title, window.location.pathname + window.location.search)
            }
        };
        window.onpopstate = (dt = window.onpopstate, function(t) {
            dt && dt.apply(this, arguments), "photobox" == t.state && pt.load()
        }), t.event.special.swipe = {
            setup: function() {
                t(this).bind("touchstart", t.event.special.swipe.handler)
            },
            teardown: function() {
                t(this).unbind("touchstart", t.event.special.swipe.handler)
            },
            handler: function(e) {
                function n() {
                    u.removeEventListener("touchmove", i), o = r = null
                }

                function i(i) {
                    i.preventDefault();
                    var a = o - i.touches[0].pageX,
                        d = r - i.touches[0].pageY;
                    return Math.abs(a) >= 20 ? (n(), l = a > 0 ? -1 : 1) : Math.abs(d) >= 20 && (n(), c = d > 0 ? 1 : -1), e.type = "swipe", s.unshift(e, l, c), (t.event.dispatch || t.event.handle).apply(u, s)
                }
                var o, r, s = [].slice.call(arguments, 1),
                    a = e.originalEvent.touches,
                    l = 0,
                    c = 0,
                    u = this;
                e = t.event.fix(e), 1 == a.length && (o = a[0].pageX, r = a[0].pageY, this.addEventListener("touchmove", i, !1))
            }
        }, ht = function(t) {
            function e(e) {
                var s = e || window.event,
                    a = l.call(arguments, 1),
                    c = 0,
                    d = 0,
                    h = 0,
                    p = 0,
                    f = 0,
                    m = 0;
                if ((e = t.event.fix(s)).type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (c = h = -1 * s.deltaY), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                    if (1 === s.deltaMode) {
                        var g = t.data(this, "mousewheel-line-height");
                        c *= g, h *= g, d *= g
                    } else if (2 === s.deltaMode) {
                        var v = t.data(this, "mousewheel-page-height");
                        c *= v, h *= v, d *= v
                    }
                    if (p = Math.max(Math.abs(h), Math.abs(d)), (!r || r > p) && (r = p, i(s, p) && (r /= 40)), i(s, p) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / r), d = Math[d >= 1 ? "floor" : "ceil"](d / r), h = Math[h >= 1 ? "floor" : "ceil"](h / r), u.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        f = e.clientX - y.left, m = e.clientY - y.top
                    }
                    return e.deltaX = d, e.deltaY = h, e.deltaFactor = r, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, d, h), o && clearTimeout(o), o = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
                }
            }

            function n() {
                r = null
            }

            function i(t, e) {
                return u.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
            }
            var o, r, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                l = Array.prototype.slice;
            if (t.event.fixHooks)
                for (var c = s.length; c;) t.event.fixHooks[s[--c]] = t.event.mouseHooks;
            var u = t.event.special.mousewheel = {
                version: "3.1.11",
                setup: function() {
                    if (this.addEventListener)
                        for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
                    else this.onmousewheel = e;
                    t.data(this, "mousewheel-line-height", u.getLineHeight(this)), t.data(this, "mousewheel-page-height", u.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
                    else this.onmousewheel = null;
                    t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(e) {
                    var n = t(e)["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                    return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10)
                },
                getPageHeight: function(e) {
                    return t(e).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            t.fn.extend({
                mousewheel: function(t) {
                    return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                },
                unmousewheel: function(t) {
                    return this.unbind("mousewheel", t)
                }
            })
        }, "function" == typeof define && define.amd ? define(["jquery"], ht) : "object" == typeof exports ? module.exports = ht : ht(jQuery), window._photobox = {
            DOM: {
                overlay: ut
            },
            close: b,
            history: pt,
            defaults: ct
        }
    }(jQuery, document, window);
var sortable = function() {
    "use strict";

    function t(t, e, n) {
        if (void 0 === n) return t && t.h5s && t.h5s.data && t.h5s.data[e];
        t.h5s = t.h5s || {}, t.h5s.data = t.h5s.data || {}, t.h5s.data[e] = n
    }

    function e(t, e) {
        if (!(t instanceof NodeList || t instanceof HTMLCollection || t instanceof Array)) throw new Error("You must provide a nodeList/HTMLCollection/Array of elements to be filtered.");
        return "string" != typeof e ? Array.from(t) : Array.from(t).filter(function(t) {
            return 1 === t.nodeType && t.matches(e)
        })
    }

    function n(t) {
        if (!(t instanceof HTMLElement)) throw new Error("Please provide a sortable to the store function.");
        return T.has(t) || T.set(t, new _), T.get(t)
    }

    function i(t, e, o) {
        if (t instanceof Array)
            for (var r = 0; r < t.length; ++r) i(t[r], e, o);
        else t.addEventListener(e, o), n(t).setData("event" + e, o)
    }

    function o(t, e) {
        if (t instanceof Array)
            for (var i = 0; i < t.length; ++i) o(t[i], e);
        else t.removeEventListener(e, n(t).getData("event" + e)), n(t).deleteData("event" + e)
    }

    function r(t, e, n) {
        if (t instanceof Array)
            for (var i = 0; i < t.length; ++i) r(t[i], e, n);
        else t.setAttribute(e, n)
    }

    function s(t, e) {
        if (t instanceof Array)
            for (var n = 0; n < t.length; ++n) s(t[n], e);
        else t.removeAttribute(e)
    }

    function a(t) {
        if (!t.parentElement || 0 === t.getClientRects().length) throw new Error("target element must be part of the dom");
        var e = t.getClientRects()[0];
        return {
            left: e.left + window.pageXOffset,
            right: e.right + window.pageXOffset,
            top: e.top + window.pageYOffset,
            bottom: e.bottom + window.pageYOffset
        }
    }

    function l(t, e) {
        if (!(t instanceof HTMLElement && (e instanceof NodeList || e instanceof HTMLCollection || e instanceof Array))) throw new Error("You must provide an element and a list of elements.");
        return Array.from(e).indexOf(t)
    }

    function c(t) {
        if (!(t instanceof HTMLElement)) throw new Error("Element is not a node element.");
        return null !== t.parentNode
    }

    function u(t) {
        if (!(t instanceof HTMLElement)) throw new Error("You must provide a valid dom element");
        var e = window.getComputedStyle(t);
        return ["height", "padding-top", "padding-bottom"].map(function(t) {
            var n = parseInt(e.getPropertyValue(t), 10);
            return isNaN(n) ? 0 : n
        }).reduce(function(t, e) {
            return t + e
        })
    }

    function d(t, e) {
        if (!(t instanceof Array)) throw new Error("You must provide a Array of HTMLElements to be filtered.");
        return "string" != typeof e ? t : t.filter(function(t) {
            return t.querySelector(e) instanceof HTMLElement || t.shadowRoot && t.shadowRoot.querySelector(e) instanceof HTMLElement
        }).map(function(t) {
            return t.querySelector(e) || t.shadowRoot && t.shadowRoot.querySelector(e)
        })
    }

    function h(t) {
        return t.composedPath && t.composedPath()[0] || t.target
    }

    function p(t, e) {
        if (!0 === t.isSortable) {
            var i = n(t).getConfig("acceptFrom");
            if (null !== i && !1 !== i && "string" != typeof i) throw new Error('HTML5Sortable: Wrong argument, "acceptFrom" must be "null", "false", or a valid selector string.');
            if (null !== i) return !1 !== i && 0 < i.split(",").filter(function(t) {
                return 0 < t.length && e.matches(t)
            }).length;
            if (t === e) return !0;
            if (void 0 !== n(t).getConfig("connectWith") && null !== n(t).getConfig("connectWith")) return n(t).getConfig("connectWith") === n(e).getConfig("connectWith")
        }
        return !1
    }

    function f(t, r) {
        if ("string" == typeof n(t).getConfig("hoverClass")) {
            var s = n(t).getConfig("hoverClass").split(" ");
            !0 === r ? (i(t, "mousemove", function(t, e) {
                var n = this;
                if (void 0 === e && (e = 250), "function" != typeof t) throw new Error("You must provide a function as the first argument for throttle.");
                if ("number" != typeof e) throw new Error("You must provide a number as the second argument for throttle.");
                var i = null;
                return function() {
                    for (var o = [], r = 0; r < arguments.length; r++) o[r - 0] = arguments[r];
                    var s = Date.now();
                    (null === i || e <= s - i) && (i = s, t.apply(n, o))
                }
            }(function(i) {
                0 === i.buttons && e(t.children, n(t).getConfig("items")).forEach(function(t) {
                    var e, n;
                    t !== i.target ? (e = t.classList).remove.apply(e, s) : (n = t.classList).add.apply(n, s)
                })
            }, n(t).getConfig("throttleTime"))), i(t, "mouseleave", function() {
                e(t.children, n(t).getConfig("items")).forEach(function(t) {
                    var e;
                    (e = t.classList).remove.apply(e, s)
                })
            })) : (o(t, "mousemove"), o(t, "mouseleave"))
        }
    }

    function m(t, e) {
        if (e.composedPath) return e.composedPath().find(function(t) {
            return t.isSortable
        });
        for (; !0 !== t.isSortable;) t = t.parentElement;
        return t
    }

    function g(n, i) {
        var o = t(n, "opts"),
            r = e(n.children, o.items).filter(function(t) {
                return t.contains(i) || t.shadowRoot && t.shadowRoot.contains(i)
            });
        return 0 < r.length ? r[0] : i
    }

    function v(o, s) {
        var d = String(s);
        return s = s || {}, "string" == typeof o && (o = document.querySelectorAll(o)), o instanceof HTMLElement && (o = [o]), o = Array.prototype.slice.call(o), /serialize/.test(d) ? o.map(function(n) {
            var i = t(n, "opts");
            return function(n, i, o) {
                if (void 0 === i && (i = function(t) {
                        return t
                    }), void 0 === o && (o = function(t) {
                        return t
                    }), !(n instanceof HTMLElement) || 1 == !n.isSortable) throw new Error("You need to provide a sortableContainer to be serialized.");
                if ("function" != typeof i || "function" != typeof o) throw new Error("You need to provide a valid serializer for items and the container.");
                var r = t(n, "opts").items,
                    s = e(n.children, r),
                    a = s.map(function(t) {
                        return {
                            parent: n,
                            node: t,
                            html: t.outerHTML,
                            index: l(t, s)
                        }
                    });
                return {
                    container: o({
                        node: n,
                        itemCount: a.length
                    }),
                    items: a.map(function(t) {
                        return i(t, n)
                    })
                }
            }(n, i.itemSerializer, i.containerSerializer)
        }) : (o.forEach(function(o) {
            if (/enable|disable|destroy/.test(d)) return v[d](o);
            ["connectWith", "disableIEFix"].forEach(function(t) {
                s.hasOwnProperty(t) && null !== s[t] && console.warn('HTML5Sortable: You are using the deprecated configuration "' + t + '". This will be removed in an upcoming version, make sure to migrate to the new options when updating.')
            }), s = Object.assign({}, I, n(o).config, s), n(o).config = s, t(o, "opts", s), o.isSortable = !0, M(o);
            var _, A = e(o.children, s.items);
            if (null !== s.placeholder && void 0 !== s.placeholder) {
                var O = document.createElement(o.tagName);
                s.placeholder instanceof HTMLElement ? O.appendChild(s.placeholder) : O.innerHTML = s.placeholder, _ = O.children[0]
            }
            n(o).placeholder = function(t, e, n) {
                if (void 0 === n && (n = "sortable-placeholder"), !(t instanceof HTMLElement)) throw new Error("You must provide a valid element as a sortable.");
                if (!(e instanceof HTMLElement) && void 0 !== e) throw new Error("You must provide a valid element as a placeholder or set ot to undefined.");
                return void 0 === e && (["UL", "OL"].includes(t.tagName) ? e = document.createElement("li") : ["TABLE", "TBODY"].includes(t.tagName) ? (e = document.createElement("tr")).innerHTML = '<td colspan="100"></td>' : e = document.createElement("div")), "string" == typeof n && (i = e.classList).add.apply(i, n.split(" ")), e;
                var i
            }(o, _, s.placeholderClass), t(o, "items", s.items), s.acceptFrom ? t(o, "acceptFrom", s.acceptFrom) : s.connectWith && t(o, "connectWith", s.connectWith), N(o), r(A, "role", "option"), r(A, "aria-grabbed", "false"), f(o, !0), i(o, "dragstart", function(t) {
                var n = h(t);
                if (!0 !== n.isSortable && (t.stopImmediatePropagation(), (!s.handle || n.matches(s.handle)) && "false" !== n.getAttribute("draggable"))) {
                    var i = m(n, t),
                        o = g(i, n);
                    S = e(i.children, s.items), x = S.indexOf(o), C = l(o, i.children), w = i,
                        function(t, e, n) {
                            if (!(t instanceof Event)) throw new Error("setDragImage requires a DragEvent as the first argument.");
                            if (!(e instanceof HTMLElement)) throw new Error("setDragImage requires the dragged element as the second argument.");
                            if (n || (n = P), t.dataTransfer && t.dataTransfer.setDragImage) {
                                var i = n(e, a(e), t);
                                if (!(i.element instanceof HTMLElement) || "number" != typeof i.posX || "number" != typeof i.posY) throw new Error("The customDragImage function you provided must return and object with the properties element[string], posX[integer], posY[integer].");
                                t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setData("text/plain", h(t).id), t.dataTransfer.setDragImage(i.element, i.posX, i.posY)
                            }
                        }(t, o, s.customDragImage), b = u(o), o.classList.add(s.draggingClass), r(y = R(o, i), "aria-grabbed", "true"), i.dispatchEvent(new CustomEvent("sortstart", {
                            detail: {
                                origin: {
                                    elementIndex: C,
                                    index: x,
                                    container: w
                                },
                                item: y,
                                originalTarget: n
                            }
                        }))
                }
            }), i(o, "dragenter", function(i) {
                var r = h(i),
                    s = m(r, i);
                s && s !== E && (k = e(s.children, t(s, "items")).filter(function(t) {
                    return t !== n(o).placeholder
                }), s.dispatchEvent(new CustomEvent("sortenter", {
                    detail: {
                        origin: {
                            elementIndex: C,
                            index: x,
                            container: w
                        },
                        destination: {
                            container: s,
                            itemsBeforeUpdate: k
                        },
                        item: y,
                        originalTarget: r
                    }
                }))), E = s
            }), i(o, "dragend", function() {
                if (y) {
                    y.classList.remove(s.draggingClass), r(y, "aria-grabbed", "false"), "true" === y.getAttribute("aria-copied") && "true" !== t(y, "dropped") && y.remove(), y.style.display = y.oldDisplay, delete y.oldDisplay;
                    var e = Array.from(T.values()).map(function(t) {
                        return t.placeholder
                    }).filter(function(t) {
                        return t instanceof HTMLElement
                    }).filter(c)[0];
                    e && e.remove(), o.dispatchEvent(new CustomEvent("sortstop", {
                        detail: {
                            origin: {
                                elementIndex: C,
                                index: x,
                                container: w
                            },
                            item: y
                        }
                    })), b = y = E = null
                }
            }), i(o, "drop", function(i) {
                if (p(o, y.parentElement)) {
                    i.preventDefault(), i.stopPropagation(), t(y, "dropped", "true");
                    var r = Array.from(T.values()).map(function(t) {
                        return t.placeholder
                    }).filter(function(t) {
                        return t instanceof HTMLElement
                    }).filter(c)[0];
                    D(r, y), r.remove(), o.dispatchEvent(new CustomEvent("sortstop", {
                        detail: {
                            origin: {
                                elementIndex: C,
                                index: x,
                                container: w
                            },
                            item: y
                        }
                    }));
                    var a = n(o).placeholder,
                        u = e(w.children, s.items).filter(function(t) {
                            return t !== a
                        }),
                        d = !0 === this.isSortable ? this : this.parentElement,
                        h = e(d.children, t(d, "items")).filter(function(t) {
                            return t !== a
                        }),
                        f = l(y, Array.from(y.parentElement.children).filter(function(t) {
                            return t !== a
                        })),
                        m = l(y, h);
                    C === f && w === d || o.dispatchEvent(new CustomEvent("sortupdate", {
                        detail: {
                            origin: {
                                elementIndex: C,
                                index: x,
                                container: w,
                                itemsBeforeUpdate: S,
                                items: u
                            },
                            destination: {
                                index: m,
                                elementIndex: f,
                                container: d,
                                itemsBeforeUpdate: k,
                                items: h
                            },
                            item: y
                        }
                    }))
                }
            });
            var j, q, $, F = (j = function(t, i, o) {
                    if (y)
                        if (s.forcePlaceholderSize && (n(t).placeholder.style.height = b + "px"), -1 < Array.from(t.children).indexOf(i)) {
                            var r = u(i),
                                c = l(n(t).placeholder, i.parentElement.children),
                                d = l(i, i.parentElement.children);
                            if (b < r) {
                                var h = r - b,
                                    p = a(i).top;
                                if (c < d && o < p) return;
                                if (d < c && p + r - h < o) return
                            }
                            void 0 === y.oldDisplay && (y.oldDisplay = y.style.display), "none" !== y.style.display && (y.style.display = "none");
                            var f = !1;
                            try {
                                f = a(i).top + i.offsetHeight / 2 <= o
                            } catch (i) {
                                f = c < d
                            }
                            f ? D(i, n(t).placeholder) : L(i, n(t).placeholder), Array.from(T.values()).filter(function(t) {
                                return void 0 !== t.placeholder
                            }).forEach(function(e) {
                                e.placeholder !== n(t).placeholder && e.placeholder.remove()
                            })
                        } else {
                            var m = Array.from(T.values()).filter(function(t) {
                                return void 0 !== t.placeholder
                            }).map(function(t) {
                                return t.placeholder
                            }); - 1 !== m.indexOf(i) || t !== i || e(i.children, s.items).length || (m.forEach(function(t) {
                                return t.remove()
                            }), i.appendChild(n(t).placeholder))
                        }
                }, void 0 === (q = s.debounce) && (q = 0), function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                    clearTimeout($), $ = setTimeout(function() {
                        j.apply(void 0, t)
                    }, q)
                }),
                H = function(i) {
                    var o = i.target,
                        r = !0 === o.isSortable ? o : m(o, i);
                    if (o = g(r, o), y && p(r, y.parentElement) && "true" !== t(r, "_disabled")) {
                        var s = t(r, "opts");
                        parseInt(s.maxItems) && e(r.children, t(r, "items")).length >= parseInt(s.maxItems) && y.parentElement !== r || (i.preventDefault(), i.stopPropagation(), i.dataTransfer.dropEffect = !0 === n(r).getConfig("copy") ? "copy" : "move", F(r, o, i.pageY))
                    }
                };
            i(A.concat(o), "dragover", H), i(A.concat(o), "dragenter", H)
        }), o)
    }
    var y, b, w, x, C, S, E, k, T = new Map,
        _ = function() {
            function t() {
                this._config = new Map, this._placeholder = void 0, this._data = new Map
            }
            return Object.defineProperty(t.prototype, "config", {
                get: function() {
                    var t = {};
                    return this._config.forEach(function(e, n) {
                        t[n] = e
                    }), t
                },
                set: function(t) {
                    if ("object" != typeof t) throw new Error("You must provide a valid configuration object to the config setter.");
                    var e = Object.assign({}, t);
                    this._config = new Map(Object.entries(e))
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setConfig = function(t, e) {
                if (!this._config.has(t)) throw new Error("Trying to set invalid configuration item: " + t);
                this._config.set(t, e)
            }, t.prototype.getConfig = function(t) {
                if (!this._config.has(t)) throw new Error("Invalid configuration item requested: " + t);
                return this._config.get(t)
            }, Object.defineProperty(t.prototype, "placeholder", {
                get: function() {
                    return this._placeholder
                },
                set: function(t) {
                    if (!(t instanceof HTMLElement) && null !== t) throw new Error("A placeholder must be an html element or null.");
                    this._placeholder = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.setData = function(t, e) {
                if ("string" != typeof t) throw new Error("The key must be a string.");
                this._data.set(t, e)
            }, t.prototype.getData = function(t) {
                if ("string" != typeof t) throw new Error("The key must be a string.");
                return this._data.get(t)
            }, t.prototype.deleteData = function(t) {
                if ("string" != typeof t) throw new Error("The key must be a string.");
                return this._data["delete"](t)
            }, t
        }(),
        A = function(t, e, n) {
            if (!(t instanceof HTMLElement && t.parentElement instanceof HTMLElement)) throw new Error("target and element must be a node");
            t.parentElement.insertBefore(e, "before" === n ? t : t.nextElementSibling)
        },
        L = function(t, e) {
            return A(t, e, "before")
        },
        D = function(t, e) {
            return A(t, e, "after")
        },
        P = function(t, e, n) {
            return {
                element: t,
                posX: n.pageX - e.left,
                posY: n.pageY - e.top
            }
        },
        I = {
            items: null,
            connectWith: null,
            disableIEFix: null,
            acceptFrom: null,
            copy: !1,
            placeholder: null,
            placeholderClass: "sortable-placeholder",
            draggingClass: "sortable-dragging",
            hoverClass: !1,
            debounce: 0,
            throttleTime: 100,
            maxItems: 0,
            itemSerializer: void 0,
            containerSerializer: void 0,
            customDragImage: null
        },
        O = function(t) {
            o(t, "dragstart"), o(t, "dragend"), o(t, "dragover"), o(t, "dragenter"), o(t, "drop"), o(t, "mouseenter"), o(t, "mouseleave")
        },
        R = function(t, e) {
            var i = t;
            return !0 === n(e).getConfig("copy") && (r(i = t.cloneNode(!0), "aria-copied", "true"), t.parentElement.appendChild(i), i.style.display = "none", i.oldDisplay = t.style.display), i
        },
        j = function(n) {
            var i, r, a, l = t(n, "opts") || {},
                c = e(n.children, l.items),
                u = d(c, l.handle);
            o(n, "dragover"), o(n, "dragenter"), o(n, "drop"), (r = i = n).h5s && delete r.h5s.data, s(i, "aria-dropeffect"), o(u, "mousedown"), O(c), s(a = c, "aria-grabbed"), s(a, "aria-copied"), s(a, "draggable"), s(a, "role")
        },
        N = function(n) {
            var o = t(n, "opts"),
                s = e(n.children, o.items),
                a = d(s, o.handle);
            r(n, "aria-dropeffect", "move"), t(n, "_disabled", "false"), r(a, "draggable", "true"), !1 === o.disableIEFix && "function" == typeof(document || window.document).createElement("span").dragDrop && i(a, "mousedown", function() {
                if (-1 !== s.indexOf(this)) this.dragDrop();
                else {
                    for (var t = this.parentElement; - 1 === s.indexOf(t);) t = t.parentElement;
                    t.dragDrop()
                }
            })
        },
        M = function(n) {
            var i = t(n, "opts"),
                r = e(n.children, i.items),
                s = d(r, i.handle);
            t(n, "_disabled", "false"), O(r), o(s, "mousedown"), o(n, "dragover"), o(n, "dragenter"), o(n, "drop")
        };
    return v.destroy = function(t) {
        j(t)
    }, v.enable = function(t) {
        N(t)
    }, v.disable = function(n) {
        var i, s, a;
        s = t(i = n, "opts"), a = d(e(i.children, s.items), s.handle), r(i, "aria-dropeffect", "none"), t(i, "_disabled", "true"), r(a, "draggable", "false"), o(a, "mousedown")
    }, v
}();
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
! function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top;
        return null != n && o <= n ? "top" : null != i && l + (a ? s : e) >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (t.style[n] !== undefined) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        return t(this).one("bsTransitionEnd", function() {
            n = !0
        }), setTimeout(function() {
            n || t(i).trigger(t.support.transition.end)
        }, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
            n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)
        }
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, r.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, h);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : r ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, s)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + i;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }, n.prototype.getUID = function(t) {
        do {
            t += ~~(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery),
function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, s)), "string" == typeof e ? r[e](i) : s.show && r.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === r ? [] : r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition) return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse") ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
            i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = i.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function() {
    var t = this;
    (function() {
        (function() {
            var t = [].slice;
            this.ActionCable = {
                INTERNAL: {
                    message_types: {
                        welcome: "welcome",
                        ping: "ping",
                        confirmation: "confirm_subscription",
                        rejection: "reject_subscription"
                    },
                    default_mount_path: "/cable",
                    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
                },
                WebSocket: window.WebSocket,
                logger: window.console,
                createConsumer: function(t) {
                    var n;
                    return null == t && (t = null != (n = this.getConfig("url")) ? n : this.INTERNAL.default_mount_path), new e.Consumer(this.createWebSocketURL(t))
                },
                getConfig: function(t) {
                    var e;
                    return null != (e = document.head.querySelector("meta[name='action-cable-" + t + "']")) ? e.getAttribute("content") : void 0
                },
                createWebSocketURL: function(t) {
                    var e;
                    return t && !/^wss?:/i.test(t) ? ((e = document.createElement("a")).href = t, e.href = e.href, e.protocol = e.protocol.replace("http", "ws"), e.href) : t
                },
                startDebugging: function() {
                    return this.debugging = !0
                },
                stopDebugging: function() {
                    return this.debugging = null
                },
                log: function() {
                    var e, n;
                    if (e = 1 <= arguments.length ? t.call(arguments, 0) : [], this.debugging) return e.push(Date.now()), (n = this.logger).log.apply(n, ["[ActionCable]"].concat(t.call(e)))
                }
            }
        }).call(this)
    }).call(t);
    var e = t.ActionCable;
    (function() {
        (function() {
            var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            e.ConnectionMonitor = function() {
                function n(e) {
                    this.connection = e, this.visibilityDidChange = t(this.visibilityDidChange, this), this.reconnectAttempts = 0
                }
                var i, o, r;
                return n.pollInterval = {
                    min: 3,
                    max: 30
                }, n.staleThreshold = 6, n.prototype.start = function() {
                    if (!this.isRunning()) return this.startedAt = o(), delete this.stoppedAt, this.startPolling(), document.addEventListener("visibilitychange", this.visibilityDidChange), e.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
                }, n.prototype.stop = function() {
                    if (this.isRunning()) return this.stoppedAt = o(), this.stopPolling(), document.removeEventListener("visibilitychange", this.visibilityDidChange), e.log("ConnectionMonitor stopped")
                }, n.prototype.isRunning = function() {
                    return null != this.startedAt && null == this.stoppedAt
                }, n.prototype.recordPing = function() {
                    return this.pingedAt = o()
                }, n.prototype.recordConnect = function() {
                    return this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, e.log("ConnectionMonitor recorded connect")
                }, n.prototype.recordDisconnect = function() {
                    return this.disconnectedAt = o(), e.log("ConnectionMonitor recorded disconnect")
                }, n.prototype.startPolling = function() {
                    return this.stopPolling(), this.poll()
                }, n.prototype.stopPolling = function() {
                    return clearTimeout(this.pollTimeout)
                }, n.prototype.poll = function() {
                    return this.pollTimeout = setTimeout((t = this, function() {
                        return t.reconnectIfStale(), t.poll()
                    }), this.getPollInterval());
                    var t
                }, n.prototype.getPollInterval = function() {
                    var t, e, n, o;
                    return n = (o = this.constructor.pollInterval).min, e = o.max, t = 5 * Math.log(this.reconnectAttempts + 1), Math.round(1e3 * i(t, n, e))
                }, n.prototype.reconnectIfStale = function() {
                    if (this.connectionIsStale()) return e.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + r(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? e.log("ConnectionMonitor skipping reopening recent disconnect") : (e.log("ConnectionMonitor reopening"), this.connection.reopen())
                }, n.prototype.connectionIsStale = function() {
                    var t;
                    return r(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
                }, n.prototype.disconnectedRecently = function() {
                    return this.disconnectedAt && r(this.disconnectedAt) < this.constructor.staleThreshold
                }, n.prototype.visibilityDidChange = function() {
                    if ("visible" === document.visibilityState) return setTimeout((t = this, function() {
                        if (t.connectionIsStale() || !t.connection.isOpen()) return e.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState), t.connection.reopen()
                    }), 200);
                    var t
                }, o = function() {
                    return (new Date).getTime()
                }, r = function(t) {
                    return (o() - t) / 1e3
                }, i = function(t, e, n) {
                    return Math.max(e, Math.min(n, t))
                }, n
            }()
        }).call(this),
            function() {
                var t, n, i, o, r, s = [].slice,
                    a = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    },
                    l = [].indexOf || function(t) {
                        for (var e = 0, n = this.length; e < n; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    };
                o = e.INTERNAL, n = o.message_types, i = o.protocols, r = 2 <= i.length ? s.call(i, 0, t = i.length - 1) : (t = 0, []), i[t++], e.Connection = function() {
                    function t(t) {
                        this.consumer = t, this.open = a(this.open, this), this.subscriptions = this.consumer.subscriptions, this.monitor = new e.ConnectionMonitor(this), this.disconnected = !0
                    }
                    return t.reopenDelay = 500, t.prototype.send = function(t) {
                        return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)), !0)
                    }, t.prototype.open = function() {
                        return this.isActive() ? (e.log("Attempted to open WebSocket, but existing socket is " + this.getState()), !1) : (e.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + i), null != this.webSocket && this.uninstallEventHandlers(), this.webSocket = new e.WebSocket(this.consumer.url, i), this.installEventHandlers(), this.monitor.start(), !0)
                    }, t.prototype.close = function(t) {
                        var e;
                        if ((null != t ? t : {
                                allowReconnect: !0
                            }).allowReconnect || this.monitor.stop(), this.isActive()) return null != (e = this.webSocket) ? e.close() : void 0
                    }, t.prototype.reopen = function() {
                        var t;
                        if (e.log("Reopening WebSocket, current state is " + this.getState()), !this.isActive()) return this.open();
                        try {
                            return this.close()
                        } catch (n) {
                            return t = n, e.log("Failed to reopen WebSocket", t)
                        } finally {
                            e.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
                        }
                    }, t.prototype.getProtocol = function() {
                        var t;
                        return null != (t = this.webSocket) ? t.protocol : void 0
                    }, t.prototype.isOpen = function() {
                        return this.isState("open")
                    }, t.prototype.isActive = function() {
                        return this.isState("open", "connecting")
                    }, t.prototype.isProtocolSupported = function() {
                        var t;
                        return t = this.getProtocol(), l.call(r, t) >= 0
                    }, t.prototype.isState = function() {
                        var t, e;
                        return e = 1 <= arguments.length ? s.call(arguments, 0) : [], t = this.getState(), l.call(e, t) >= 0
                    }, t.prototype.getState = function() {
                        var t, e;
                        for (e in WebSocket)
                            if (WebSocket[e] === (null != (t = this.webSocket) ? t.readyState : void 0)) return e.toLowerCase();
                        return null
                    }, t.prototype.installEventHandlers = function() {
                        var t, e;
                        for (t in this.events) e = this.events[t].bind(this), this.webSocket["on" + t] = e
                    }, t.prototype.uninstallEventHandlers = function() {
                        var t;
                        for (t in this.events) this.webSocket["on" + t] = function() {}
                    }, t.prototype.events = {
                        message: function(t) {
                            var e, i, o;
                            if (this.isProtocolSupported()) switch (e = (o = JSON.parse(t.data)).identifier, i = o.message, o.type) {
                                case n.welcome:
                                    return this.monitor.recordConnect(), this.subscriptions.reload();
                                case n.ping:
                                    return this.monitor.recordPing();
                                case n.confirmation:
                                    return this.subscriptions.notify(e, "connected");
                                case n.rejection:
                                    return this.subscriptions.reject(e);
                                default:
                                    return this.subscriptions.notify(e, "received", i)
                            }
                        },
                        open: function() {
                            if (e.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return e.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({
                                allowReconnect: !1
                            })
                        },
                        close: function() {
                            if (e.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", {
                                willAttemptReconnect: this.monitor.isRunning()
                            })
                        },
                        error: function() {
                            return e.log("WebSocket onerror event")
                        }
                    }, t
                }()
            }.call(this),
            function() {
                var t = [].slice;
                e.Subscriptions = function() {
                    function n(t) {
                        this.consumer = t, this.subscriptions = []
                    }
                    return n.prototype.create = function(t, n) {
                        var i, o, r;
                        return o = "object" == typeof(i = t) ? i : {
                            channel: i
                        }, r = new e.Subscription(this.consumer, o, n), this.add(r)
                    }, n.prototype.add = function(t) {
                        return this.subscriptions.push(t), this.consumer.ensureActiveConnection(), this.notify(t, "initialized"), this.sendCommand(t, "subscribe"), t
                    }, n.prototype.remove = function(t) {
                        return this.forget(t), this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"), t
                    }, n.prototype.reject = function(t) {
                        var e, n, i, o, r;
                        for (o = [], e = 0, n = (i = this.findAll(t)).length; e < n; e++) r = i[e], this.forget(r), this.notify(r, "rejected"), o.push(r);
                        return o
                    }, n.prototype.forget = function(t) {
                        var e;
                        return this.subscriptions = function() {
                            var n, i, o, r;
                            for (r = [], n = 0, i = (o = this.subscriptions).length; n < i; n++)(e = o[n]) !== t && r.push(e);
                            return r
                        }.call(this), t
                    }, n.prototype.findAll = function(t) {
                        var e, n, i, o, r;
                        for (o = [], e = 0, n = (i = this.subscriptions).length; e < n; e++)(r = i[e]).identifier === t && o.push(r);
                        return o
                    }, n.prototype.reload = function() {
                        var t, e, n, i, o;
                        for (i = [], t = 0, e = (n = this.subscriptions).length; t < e; t++) o = n[t], i.push(this.sendCommand(o, "subscribe"));
                        return i
                    }, n.prototype.notifyAll = function() {
                        var e, n, i, o, r, s, a;
                        for (n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], s = [], i = 0, o = (r = this.subscriptions).length; i < o; i++) a = r[i], s.push(this.notify.apply(this, [a, n].concat(t.call(e))));
                        return s
                    }, n.prototype.notify = function() {
                        var e, n, i, o, r, s, a;
                        for (s = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], r = [], i = 0, o = (a = "string" == typeof s ? this.findAll(s) : [s]).length; i < o; i++) s = a[i], r.push("function" == typeof s[n] ? s[n].apply(s, e) : void 0);
                        return r
                    }, n.prototype.sendCommand = function(t, e) {
                        var n;
                        return n = t.identifier, this.consumer.send({
                            command: e,
                            identifier: n
                        })
                    }, n
                }()
            }.call(this),
            function() {
                e.Subscription = function() {
                    function t(t, n, i) {
                        this.consumer = t, null == n && (n = {}), this.identifier = JSON.stringify(n), e(this, i)
                    }
                    var e;
                    return t.prototype.perform = function(t, e) {
                        return null == e && (e = {}), e.action = t, this.send(e)
                    }, t.prototype.send = function(t) {
                        return this.consumer.send({
                            command: "message",
                            identifier: this.identifier,
                            data: JSON.stringify(t)
                        })
                    }, t.prototype.unsubscribe = function() {
                        return this.consumer.subscriptions.remove(this)
                    }, e = function(t, e) {
                        var n, i;
                        if (null != e)
                            for (n in e) i = e[n], t[n] = i;
                        return t
                    }, t
                }()
            }.call(this),
            function() {
                e.Consumer = function() {
                    function t(t) {
                        this.url = t, this.subscriptions = new e.Subscriptions(this), this.connection = new e.Connection(this)
                    }
                    return t.prototype.send = function(t) {
                        return this.connection.send(t)
                    }, t.prototype.connect = function() {
                        return this.connection.open()
                    }, t.prototype.disconnect = function() {
                        return this.connection.close({
                            allowReconnect: !1
                        })
                    }, t.prototype.ensureActiveConnection = function() {
                        if (!this.connection.isActive()) return this.connection.open()
                    }, t
                }()
            }.call(this)
    }).call(this), "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}.call(this),
    function() {
        this.App || (this.App = {}), App.cable = ActionCable.createConsumer()
    }.call(this),
    function() {
        App.crypto_notification = {
            subscriptions: {},
            createSubscription: function(t, e) {
                var n, i;
                return n = App.cable.subscriptions.create({
                    channel: t,
                    room: e
                }, {
                    received: (i = this, function(t) {
                        return i.appendLine(t, e)
                    })
                }), this.subscriptions[e] = n
            },
            appendLine: function(t, e) {
                var n, i;
                if (null != t) return $("[data-buttons-swap='" + e + "'] .btn-default").hide(1e3), $("[data-buttons-swap='" + e + "'] .btn-primary").html("Back to my profile"), i = "fa-clock", n = '<div class="badge badge-' + t.status + ' pr-2">\n  <i class="fa ' + i + ' pr-1"></i>\n  <span class="text-uppercase">' + t.status + "</span>\n</div>", "success" === t.status ? i = "fa-check" : "warning" === t.status && (i = "fa-exclamation-triangle", $("[data-ws-room='" + e + "']").after("<div class='alert alert-warning'>We received <strong>" + t.amount / 1e8 + " BTC</strong>, which is different from the expected amount. This actual sum will be added to your balance.</div>")), $("[data-ws-room='" + e + "']").html(n), this.subscriptions[e].unsubscribe(), App.cable.disconnect()
            }
        }
    }.call(this),
    function() {
        this.App = this.App || {};
        var t = this.App,
            e = "Turbolinks" in window && window.Turbolinks.supported,
            n = e && "clearCache" in window.Turbolinks,
            i = !1,
            o = [],
            r = function() {
                o.forEach(function(t) {
                    t()
                }), i = !0
            };
        t.onPageLoad = function(e) {
            o.push(e), !i && t.DOMContentLoadedFired && e()
        }, n ? (window.Turbolinks.controller.lastRenderedLocation && document.addEventListener("DOMContentLoaded", function() {
            r()
        }), document.addEventListener("turbolinks:load", function() {
            r()
        })) : (t.DOMContentLoadedFired || document.addEventListener("DOMContentLoaded", function() {
            r()
        }), e && document.addEventListener("page:load", function() {
            r()
        }))
    }.call(window), window.App.onPageLoad(function() {
        window.Rails.refreshCSRFTokens()
    }),
    function() {
        var t;
        (t = jQuery).fn.disable = function() {
            return this.each(function() {
                return t(this).attr("disabled", "disabled").addClass("disabled")
            }), this
        }, t.fn.enable = function() {
            return this.each(function() {
                return t(this).removeAttr("disabled").removeClass("disabled")
            }), this
        }, t.fn.disableForm = function() {
            var t;
            return t = this, this.find(":input:disabled").data("disabled", !0), this.find(":input:not(:disabled)").data("disabled", !1).each(function() {
                return t.find("label[for='" + this.id + "']").disable()
            }), this.find(":input").disable()
        }, t.fn.restoreForm = function() {
            var e;
            return e = this, this.find(":input").each(function() {
                var n, i;
                return i = (n = t(this)).data("disabled") ? "disable" : "enable", n[0].id && e.find("label[for='" + n[0].id + "']")[i](), n[i](), !0
            })
        }
    }.call(this), (window.App = window.App || {}).assetServer = "https://d257pz9kz95xf4.cloudfront.net", window.app = window.app || {}, window.app.data = window.app.data || {}, window.app.data.i18n = {
        en: {
            "activerecord.errors.full_messages.image_size_error": "Image too big",
            "common.loading": "Loading",
            "common.main_image": "main image",
            "common.new": "New",
            "common.please_confirm_deletion": "Delete?",
            "credit_card_form.errors.address.blank": "Please enter your address",
            "credit_card_form.errors.city.blank": "Please enter your city",
            "credit_card_form.errors.csc.invalid": "Invalid",
            "credit_card_form.errors.expire_month.blank": "Please specify month",
            "credit_card_form.errors.expire_year.blank": "Please specify year",
            "credit_card_form.errors.first_name.alpha": "Please enter letters only",
            "credit_card_form.errors.first_name.blank": "Please enter your first name as it is written on the card",
            "credit_card_form.errors.last_name.alpha": "Please enter letters only",
            "credit_card_form.errors.last_name.blank": "Please enter your last name as it is written on the card",
            "credit_card_form.errors.number.blank": "Please enter the card number",
            "credit_card_form.errors.number.invalid": "Invalid card number",
            "credit_card_form.errors.number.unsupported": "We support Mastercard and Visa cards only",
            "credit_card_form.errors.phone.blank": "Please enter your phone",
            "credit_card_form.errors.zip.blank": "Please enter your zip/postal code",
            "errors.full_messages.invalid_email": "Please enter a valid email address",
            "errors.full_messages.invalid_phone": "Please enter a valid phone number",
            "errors.full_messages.invalid_url": "Please enter a valid URL",
            "errors.messages.accepted": "must be accepted",
            "errors.messages.blank": "can't be blank",
            "errors.messages.email": "This question contains personal data, please reply privately",
            "errors.messages.extension_white_list_error": "You can only upload %{things} in the following formats: %{allowed_types}",
            "errors.messages.invalid": "is invalid",
            "errors.messages.is_not_a_number": "should be a number",
            "errors.messages.phone": "This question contains personal data, please reply privately",
            "errors.messages.too_long": {
                one: "is too long (maximum is 1 character)",
                other: "is too long (maximum is %{count} characters)"
            },
            "errors.messages.too_short": {
                one: "is too short (minimum is 1 character)",
                other: "is too short (minimum is %{count} characters)"
            },
            "listings_show.add_bookmark": "Add bookmark",
            "listings_show.remove_bookmark": "Remove bookmark"
        }
    },
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.WHATWGFetch = {})
    }(this, function(t) {
        "use strict";

        function n(t) {
            return t && DataView.prototype.isPrototypeOf(t)
        }

        function i(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function o(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function r(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: e === undefined,
                        value: e
                    }
                }
            };
            return w.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function s(t) {
            this.map = {}, t instanceof s ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }

        function a(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function l(t) {
            return new Promise(function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            })
        }

        function c(t) {
            var e = new FileReader,
                n = l(e);
            return e.readAsArrayBuffer(t), n
        }

        function u(t) {
            var e = new FileReader,
                n = l(e);
            return e.readAsText(t), n
        }

        function d(t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), i = 0; i < e.length; i++) n[i] = String.fromCharCode(e[i]);
            return n.join("")
        }

        function h(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function p() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : w.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : w.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : w.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : w.arrayBuffer && w.blob && n(t) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : w.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || C(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : w.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, w.blob && (this.blob = function() {
                var t = a(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c)
            }), this.text = function() {
                var t = a(this);
                if (t) return t;
                if (this._bodyBlob) return u(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, w.formData && (this.formData = function() {
                return this.text().then(g)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function f(t) {
            var e = t.toUpperCase();
            return S.indexOf(e) > -1 ? e : t
        }

        function m(t, e) {
            var n = (e = e || {}).body;
            if (t instanceof m) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new s(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new s(e.headers)), this.method = f(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function g(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var n = t.split("="),
                        i = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(i), decodeURIComponent(o))
                }
            }), e
        }

        function v(t) {
            var e = new s;
            return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                var n = t.split(":"),
                    i = n.shift().trim();
                if (i) {
                    var o = n.join(":").trim();
                    e.append(i, o)
                }
            }), e
        }

        function y(t, e) {
            e || (e = {}), this.type = "default", this.status = e.status === undefined ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new s(e.headers), this.url = e.url || "", this._initBody(t)
        }

        function b(e, n) {
            return new Promise(function(i, o) {
                function r() {
                    a.abort()
                }
                var s = new m(e, n);
                if (s.signal && s.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                var a = new XMLHttpRequest;
                a.onload = function() {
                    var t = {
                        status: a.status,
                        statusText: a.statusText,
                        headers: v(a.getAllResponseHeaders() || "")
                    };
                    t.url = "responseURL" in a ? a.responseURL : t.headers.get("X-Request-URL");
                    var e = "response" in a ? a.response : a.responseText;
                    i(new y(e, t))
                }, a.onerror = function() {
                    o(new TypeError("Network request failed"))
                }, a.ontimeout = function() {
                    o(new TypeError("Network request failed"))
                }, a.onabort = function() {
                    o(new t.DOMException("Aborted", "AbortError"))
                }, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && w.blob && (a.responseType = "blob"), s.headers.forEach(function(t, e) {
                    a.setRequestHeader(e, t)
                }), s.signal && (s.signal.addEventListener("abort", r), a.onreadystatechange = function() {
                    4 === a.readyState && s.signal.removeEventListener("abort", r)
                }), a.send("undefined" == typeof s._bodyInit ? null : s._bodyInit)
            })
        }
        var w = {
            searchParams: "URLSearchParams" in self,
            iterable: "Symbol" in self && "iterator" in Symbol,
            blob: "FileReader" in self && "Blob" in self && function() {
                try {
                    return new Blob, !0
                } catch (e) {
                    return !1
                }
            }(),
            formData: "FormData" in self,
            arrayBuffer: "ArrayBuffer" in self
        };
        if (w.arrayBuffer) var x = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            C = ArrayBuffer.isView || function(t) {
                return t && x.indexOf(Object.prototype.toString.call(t)) > -1
            };
        s.prototype.append = function(t, e) {
            t = i(t), e = o(e);
            var n = this.map[t];
            this.map[t] = n ? n + ", " + e : e
        }, s.prototype["delete"] = function(t) {
            delete this.map[i(t)]
        }, s.prototype.get = function(t) {
            return t = i(t), this.has(t) ? this.map[t] : null
        }, s.prototype.has = function(t) {
            return this.map.hasOwnProperty(i(t))
        }, s.prototype.set = function(t, e) {
            this.map[i(t)] = o(e)
        }, s.prototype.forEach = function(t, e) {
            for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
        }, s.prototype.keys = function() {
            var t = [];
            return this.forEach(function(e, n) {
                t.push(n)
            }), r(t)
        }, s.prototype.values = function() {
            var t = [];
            return this.forEach(function(e) {
                t.push(e)
            }), r(t)
        }, s.prototype.entries = function() {
            var t = [];
            return this.forEach(function(e, n) {
                t.push([n, e])
            }), r(t)
        }, w.iterable && (s.prototype[Symbol.iterator] = s.prototype.entries);
        var S = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        m.prototype.clone = function() {
            return new m(this, {
                body: this._bodyInit
            })
        }, p.call(m.prototype), p.call(y.prototype), y.prototype.clone = function() {
            return new y(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new s(this.headers),
                url: this.url
            })
        }, y.error = function() {
            var t = new y(null, {
                status: 0,
                statusText: ""
            });
            return t.type = "error", t
        };
        var E = [301, 302, 303, 307, 308];
        y.redirect = function(t, e) {
            if (-1 === E.indexOf(e)) throw new RangeError("Invalid status code");
            return new y(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        }, t.DOMException = self.DOMException;
        try {
            new t.DOMException
        } catch (k) {
            t.DOMException = function(t, e) {
                this.message = t, this.name = e;
                var n = Error(t);
                this.stack = n.stack
            }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
        }
        b.polyfill = !0, self.fetch || (self.fetch = b, self.Headers = s, self.Request = m, self.Response = y), t.Headers = s, t.Request = m, t.Response = y, t.fetch = b, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }),
    function() {
        function t(t) {
            var e = 0;
            return function() {
                return e < t.length ? {
                    done: !1,
                    value: t[e++]
                } : {
                    done: !0
                }
            }
        }

        function n() {
            n = function() {}, x.Symbol || (x.Symbol = C)
        }

        function i() {
            n();
            var e = x.Symbol.iterator;
            e || (e = x.Symbol.iterator = x.Symbol("iterator")), "function" != typeof Array.prototype[e] && w(Array.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return o(t(this))
                }
            }), i = function() {}
        }

        function o(t) {
            return i(), (t = {
                next: t
            })[x.Symbol.iterator] = function() {
                return this
            }, t
        }

        function r(e) {
            var n = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
            return n ? n.call(e) : {
                next: t(e)
            }
        }

        function s() {
            this.h = !1, this.c = null, this.o = void 0, this.b = 1, this.m = this.u = 0, this.g = null
        }

        function l(t) {
            if (t.h) throw new TypeError("Generator is already running");
            t.h = !0
        }

        function c(t, e, n) {
            return t.b = n, {
                value: e
            }
        }

        function u(t) {
            for (var e in this.A = t, this.l = [], t) this.l.push(e);
            this.l.reverse()
        }

        function d(t) {
            this.a = new s, this.B = t
        }

        function h(t, e) {
            l(t.a);
            var n = t.a.c;
            return n ? p(t, "return" in n ? n["return"] : function(t) {
                return {
                    value: t,
                    done: !0
                }
            }, e, t.a["return"]) : (t.a["return"](e), f(t))
        }

        function p(t, e, n, i) {
            try {
                var o = e.call(t.a.c, n);
                if (!(o instanceof Object)) throw new TypeError("Iterator result " + o + " is not an object");
                if (!o.done) return t.a.h = !1, o;
                var r = o.value
            } catch (g) {
                return t.a.c = null, t.a.j(g), f(t)
            }
            return t.a.c = null, i.call(t.a, r), f(t)
        }

        function f(t) {
            for (; t.a.b;) try {
                var n = t.B(t.a);
                if (n) return t.a.h = !1, {
                    value: n.value,
                    done: !1
                }
            } catch (e) {
                t.a.o = void 0, t.a.j(e)
            }
            if (t.a.h = !1, t.a.g) {
                if (n = t.a.g, t.a.g = null, n.w) throw n.v;
                return {
                    value: n["return"],
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }

        function m(t) {
            this.next = function(e) {
                return t.i(e)
            }, this["throw"] = function(e) {
                return t.j(e)
            }, this["return"] = function(e) {
                return h(t, e)
            }, i(), this[Symbol.iterator] = function() {
                return this
            }
        }

        function v(t, e) {
            var n = new m(new d(e));
            return T && T(n, t.prototype), n
        }
        var y, b, w = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
                t != Array.prototype && t != Object.prototype && (t[e] = n.value)
            },
            x = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
            C = function() {
                var t = 0;
                return function(e) {
                    return "jscomp_symbol_" + (e || "") + t++
                }
            }();
        if ("function" == typeof Object.setPrototypeOf) b = Object.setPrototypeOf;
        else {
            var S;
            t: {
                var E = {
                        s: !0
                    },
                    k = {};
                try {
                    k.__proto__ = E, S = k.s;
                    break t
                } catch (a) {}
                S = !1
            }
            b = S ? function(t, e) {
                if (t.__proto__ = e, t.__proto__ !== e) throw new TypeError(t + " is not extensible");
                return t
            } : null
        }
        var T = b;
        if (s.prototype.i = function(t) {
                this.o = t
            }, s.prototype.j = function(t) {
                this.g = {
                    v: t,
                    w: !0
                }, this.b = this.u || this.m
            }, s.prototype["return"] = function(t) {
                this.g = {
                    "return": t
                }, this.b = this.m
            }, d.prototype.i = function(t) {
                return l(this.a), this.a.c ? p(this, this.a.c.next, t, this.a.i) : (this.a.i(t), f(this))
            }, d.prototype.j = function(t) {
                return l(this.a), this.a.c ? p(this, this.a.c["throw"], t, this.a.i) : (this.a.j(t), f(this))
            }, "function" == typeof Blob && ("undefined" == typeof FormData || !FormData.prototype.keys)) {
            var _ = function(t, e) {
                    for (var n = 0; n < t.length; n++) e(t[n])
                },
                A = function(t, e, n) {
                    return e instanceof Blob ? [String(t), e, void 0 !== n ? n + "" : "string" == typeof e.name ? e.name : "blob"] : [String(t), String(e)]
                },
                L = function(t, e) {
                    if (t.length < e) throw new TypeError(e + " argument required, but only " + t.length + " present.")
                },
                D = function(t) {
                    var e = r(t);
                    return t = e.next().value, e = e.next().value, t instanceof Blob && (t = new File([t], e, {
                        type: t.type,
                        lastModified: t.lastModified
                    })), t
                },
                P = "object" == typeof window ? window : "object" == typeof self ? self : this,
                I = P.FormData,
                O = P.XMLHttpRequest && P.XMLHttpRequest.prototype.send,
                R = P.Request && P.fetch,
                j = P.navigator && P.navigator.sendBeacon;
            n();
            var N = P.Symbol && Symbol.toStringTag;
            N && (Blob.prototype[N] || (Blob.prototype[N] = "Blob"), "File" in P && !File.prototype[N] && (File.prototype[N] = "File"));
            try {
                new File([], "")
            } catch (a) {
                P.File = function(t, e, n) {
                    return t = new Blob(t, n), n = n && void 0 !== n.lastModified ? new Date(n.lastModified) : new Date, Object.defineProperties(t, {
                        name: {
                            value: e
                        },
                        lastModifiedDate: {
                            value: n
                        },
                        lastModified: {
                            value: +n
                        },
                        toString: {
                            value: function() {
                                return "[object File]"
                            }
                        }
                    }), N && Object.defineProperty(t, N, {
                        value: "File"
                    }), t
                }
            }
            n(), i();
            var M = function(t) {
                if (this.f = Object.create(null), !t) return this;
                var e = this;
                _(t.elements, function(t) {
                    if (t.name && !t.disabled && "submit" !== t.type && "button" !== t.type)
                        if ("file" === t.type) {
                            var n = t.files && t.files.length ? t.files : [new File([], "", {
                                type: "application/octet-stream"
                            })];
                            _(n, function(n) {
                                e.append(t.name, n)
                            })
                        } else "select-multiple" === t.type || "select-one" === t.type ? _(t.options, function(n) {
                            !n.disabled && n.selected && e.append(t.name, n.value)
                        }) : "checkbox" === t.type || "radio" === t.type ? t.checked && e.append(t.name, t.value) : (n = "textarea" === t.type ? t.value.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : t.value, e.append(t.name, n))
                })
            };
            if ((y = M.prototype).append = function(t, e, n) {
                    L(arguments, 2);
                    var i = r(A.apply(null, arguments));
                    t = i.next().value, e = i.next().value, n = i.next().value, (i = this.f)[t] || (i[t] = []), i[t].push([e, n])
                }, y["delete"] = function(t) {
                    L(arguments, 1), delete this.f[String(t)]
                }, y.entries = function t() {
                    var e, n, i, o, s, a, l = this;
                    return v(t, function(t) {
                        switch (t.b) {
                            case 1:
                                e = l.f, i = new u(e);
                            case 2:
                                var d;
                                t: {
                                    for (d = i; 0 < d.l.length;) {
                                        var h = d.l.pop();
                                        if (h in d.A) {
                                            d = h;
                                            break t
                                        }
                                    }
                                    d = null
                                }
                                if (null == (n = d)) {
                                    t.b = 0;
                                    break
                                }
                                o = r(e[n]), s = o.next();
                            case 5:
                                if (s.done) {
                                    t.b = 2;
                                    break
                                }
                                return a = s.value, c(t, [n, D(a)], 6);
                            case 6:
                                s = o.next(), t.b = 5
                        }
                    })
                }, y.forEach = function(t, e) {
                    L(arguments, 1);
                    for (var n = r(this), i = n.next(); !i.done; i = n.next()) {
                        var o = r(i.value);
                        i = o.next().value, o = o.next().value, t.call(e, o, i, this)
                    }
                }, y.get = function(t) {
                    L(arguments, 1);
                    var e = this.f;
                    return e[t = String(t)] ? D(e[t][0]) : null
                }, y.getAll = function(t) {
                    return L(arguments, 1), (this.f[String(t)] || []).map(D)
                }, y.has = function(t) {
                    return L(arguments, 1), String(t) in this.f
                }, y.keys = function e() {
                    var t, n, i, o, s = this;
                    return v(e, function(e) {
                        if (1 == e.b && (t = r(s), n = t.next()), 3 != e.b) return n.done ? void(e.b = 0) : (i = n.value, o = r(i), c(e, o.next().value, 3));
                        n = t.next(), e.b = 2
                    })
                }, y.set = function() {
                    L(arguments, 2);
                    var t = A.apply(null, arguments);
                    this.f[t[0]] = [
                        [t[1], t[2]]
                    ]
                }, y.values = function o() {
                    var t, e, n, i, s = this;
                    return v(o, function(o) {
                        if (1 == o.b && (t = r(s), e = t.next()), 3 != o.b) return e.done ? void(o.b = 0) : (n = e.value, (i = r(n)).next(), c(o, i.next().value, 3));
                        e = t.next(), o.b = 2
                    })
                }, M.prototype._asNative = function() {
                    for (var t = new I, e = r(this), n = e.next(); !n.done; n = e.next()) {
                        var i = r(n.value);
                        n = i.next().value, i = i.next().value, t.append(n, i)
                    }
                    return t
                }, M.prototype._blob = function() {
                    for (var t = "----formdata-polyfill-" + Math.random(), e = [], n = r(this), i = n.next(); !i.done; i = n.next()) {
                        var o = r(i.value);
                        i = o.next().value, o = o.next().value, e.push("--" + t + "\r\n"), o instanceof Blob ? e.push('Content-Disposition: form-data; name="' + i + '"; filename="' + o.name + '"\r\n', "Content-Type: " + (o.type || "application/octet-stream") + "\r\n\r\n", o, "\r\n") : e.push('Content-Disposition: form-data; name="' + i + '"\r\n\r\n' + o + "\r\n")
                    }
                    return e.push("--" + t + "--"), new Blob(e, {
                        type: "multipart/form-data; boundary=" + t
                    })
                }, M.prototype[Symbol.iterator] = function() {
                    return this.entries()
                }, M.prototype.toString = function() {
                    return "[object FormData]"
                }, N && (M.prototype[N] = "FormData"), O && (P.XMLHttpRequest.prototype.send = function(t) {
                    t instanceof M ? (t = t._blob(), this.setRequestHeader("Content-Type", t.type), O.call(this, t)) : O.call(this, t)
                }), R) {
                var q = P.fetch;
                P.fetch = function(t, e) {
                    return e && e.body && e.body instanceof M && (e.body = e.body._blob()), q.call(this, t, e)
                }
            }
            j && (P.navigator.sendBeacon = function(t, e) {
                return e instanceof M && (e = e._asNative()), j.call(this, t, e)
            }), P.FormData = M
        }
    }();
var _slicedToArray = function() {
        function t(t, e) {
            var n = [],
                i = !0,
                o = !1,
                r = undefined;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (l) {
                o = !0, r = l
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return n
        }
        return function(e, n) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _createClass = function() {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        return function(e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e
        }
    }();
window.App.FieldValidator = function() {
        var t = "has-error",
            e = "validation-error",
            n = "hidden",
            i = function() {
                function i(t, n) {
                    var o = this;
                    _classCallCheck(this, i), this.input = t, this.validations = n, this.input.addEventListener("change", function() {
                        o.checkAndShowValidity()
                    }), this.input.addEventListener("input", function() {
                        o.clearValidationErrors()
                    }), this.fieldContainer = t.parentElement, this.errorMessageContainer = t.parentElement.querySelector("." + e)
                }
                return _createClass(i, [{
                    key: "checkAndShowValidity",
                    value: function() {
                        var t = this.getFirstInvalidMessage();
                        return t ? (this.showValidationError(t), !1) : (this.clearValidationErrors(), !0)
                    }
                }, {
                    key: "showValidationError",
                    value: function(i) {
                        this.fieldContainer.classList.add(t), null === this.errorMessageContainer ? (this.errorMessageContainer = document.createElement("div"), this.errorMessageContainer.classList.add(e), this.fieldContainer.appendChild(this.errorMessageContainer)) : this.errorMessageContainer.classList.remove(n), this.errorMessageContainer.textContent = i
                    }
                }, {
                    key: "clearValidationErrors",
                    value: function() {
                        this.errorMessageContainer && this.errorMessageContainer.classList.add(n), this.fieldContainer.classList.remove(t)
                    }
                }, {
                    key: "getFirstInvalidMessage",
                    value: function() {
                        var t = this,
                            e = this.validations.find(function(e) {
                                var n = _slicedToArray(e, 2);
                                n[0];
                                return !(0, n[1])(t.input)
                            });
                        return e ? e[0] : null
                    }
                }]), i
            }();
        return i.validate = function(t) {
            var e = !0,
                n = null,
                i = !0,
                o = !1,
                r = undefined;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done); i = !0) {
                    var l = s.value;
                    l.checkAndShowValidity() || (e = !1, n = n || l.input)
                }
            } catch (c) {
                o = !0, r = c
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (o) throw r
                }
            }
            return n && n.focus(), e
        }, i
    }(),
    function() {
        window.App.InterruptXhrRedirectTo = function(t) {
            if ("object" == typeof t && t.redirectTo) return setTimeout(function() {
                return Turbolinks.visit(t.redirectTo)
            }), !0
        }
    }.call(this),
    function() {
        var t, e;
        t = jQuery, e = function() {
            return !t.trim(this.value) || /(?:\[has_|(?:_(?:false|true|only))\])/.test(this.name) && 0 == +this.value
        }, t.fn.emptyInputs = function() {
            return t(this).find(":input").filter(e)
        }
    }.call(this),
    function() {
        var t = !1,
            e = !1,
            n = [];
        window.onGoogleJsApiLoaded = function() {
            t = !0, e = !1, n.forEach(function(t) {
                t()
            }), n = []
        }, window.App.loadGoogleJsApi = function(i) {
            if (t) i();
            else if (n.push(i), !e) {
                e = !0;
                var o = document.createElement("script");
                o.src = "https://www.google.com/jsapi?callback=onGoogleJsApiLoaded", document.head.appendChild(o)
            }
        }
    }(),
    function() {
        var t, e, n;
        e = function(t, e) {
            var n;
            return (n = window.app.data.i18n)[t] && n[t][e] || n.en[e] || "translation missing " + t + "." + e
        }, n = function(t, e) {
            var n;
            return t.one && (n = e.count) && (t = 1 === (n = +n) ? t.one : t.other), t.replace(/%\{([^\}]*)\}/g, function(t, n) {
                var i;
                return null != (i = e[n]) ? i : t
            })
        }, t = function() {
            function t() {}
            return t.locale = function() {
                return app.data.locale
            }, t.rtl = function() {
                var t;
                return "ar" === (t = this.locale()) || "he" === t || "fa" === t
            }, t.t = function(t, i) {
                var o, r;
                return o = this.locale(), r = e(o, t), r = n(r, i || {}), (null != i ? i.punctuation : void 0) && (r += i.punctuation), r
            }, t
        }(), window.I18n = t
    }.call(this);
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
! function() {
    function t(t) {
        for (; !t.hasAttribute("data-my-listing-question-answer-response-container");) t = t.parentElement;
        return t
    }
    var e = window.App,
        n = window.I18n,
        i = e.FieldValidator,
        o = "[data-my-listing-questions-answer-form]",
        r = "[data-my-listing-question-ignore-form]",
        s = "hidden",
        a = 2,
        l = /[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]{5,15}\d/gm,
        c = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/,
        u = function() {
            function t(e) {
                var n = this;
                _classCallCheck(this, t), this.dom = {
                    pendingCountWrapper: e.querySelector("[data-my-listing-questions-pending-count-wrapper]")
                }, this.dom.pendingCount = this.dom.pendingCountWrapper && this.dom.pendingCountWrapper.querySelector(".badge"), this.pendingCount = this.dom.pendingCount ? +this.dom.pendingCount.textContent : 0;
                var i = function(t, e) {
                    n.handleQuestionAnsweredOrIgnored(t, e)
                };
                this.answerForms = Array.prototype.map.call(e.querySelectorAll("[data-my-listing-question]"), function(t) {
                    return new d(t, i)
                })
            }
            return _createClass(t, [{
                key: "handleQuestionAnsweredOrIgnored",
                value: function(t, e) {
                    this.answerForms.splice(this.answerForms.indexOf(t), 1), e && (this.pendingCount -= 1, this.updateView())
                }
            }, {
                key: "updateView",
                value: function() {
                    null !== this.dom.pendingCount && (this.dom.pendingCount.textContent = this.pendingCount), null !== this.dom.pendingCountWrapper && 0 === this.pendingCount && this.dom.pendingCountWrapper.classList.add(s)
                }
            }]), t
        }(),
        d = function() {
            function e(t, n) {
                _classCallCheck(this, e), this.initFromDom(t), this.answeredOrIgnoredCallback = n
            }
            return _createClass(e, [{
                key: "initFromDom",
                value: function(e) {
                    var n = this,
                        i = e.querySelector(o),
                        s = e.querySelector(r);
                    this.dom = {
                        root: e,
                        submitError: e.querySelector("[data-my-listing-question-submit-error]"),
                        ignoreForm: s,
                        ignoreFormSubmitButton: s.querySelector('button[type="submit"]'),
                        answerForm: i,
                        answerTextarea: i ? i.querySelector("textarea") : null,
                        answerPubliclyButton: i ? i.querySelector('button[value="answer"]') : null,
                        answerPrivatelyButton: i ? i.querySelector('button[value="answer_privately"]') : null,
                        answerResponseContainer: i ? t(i) : null,
                        questionText: e.querySelector(".question-block").querySelector(".question").textContent
                    }, i && this.initAnswerForm(), s.addEventListener("submit", function(t) {
                        t.preventDefault(), n.submitIgnoreForm()
                    })
                }
            }, {
                key: "initAnswerForm",
                value: function() {
                    var t = this;
                    this.clickedSubmitButton = null;
                    var e = function(e) {
                        t.clickedSubmitButton = e.target
                    };
                    this.dom.answerPubliclyButton.addEventListener("click", e), this.dom.answerPrivatelyButton.addEventListener("click", e), this.dom.answerForm.addEventListener("submit", function(e) {
                        e.preventDefault(), i.validate(t.answerFormValidators) && t.submitAnswerForm()
                    }), c.test(this.dom.questionText) || l.test(this.dom.questionText) || this.dom.answerPubliclyButton.classList.remove("hidden"), this.answerFormValidators = [new i(this.dom.answerTextarea, [
                        [n.t("errors.messages.phone"), function() {
                            return !(t.dom.questionText && t.clickedSubmitButton && "answer" === t.clickedSubmitButton.value && l.test(t.dom.questionText))
                        }],
                        [n.t("errors.messages.email"), function() {
                            return !(t.dom.questionText && t.clickedSubmitButton && "answer" === t.clickedSubmitButton.value && c.test(t.dom.questionText))
                        }],
                        [n.t("errors.messages.blank"), function(t) {
                            return !!t.value.trim()
                        }],
                        [n.t("errors.messages.too_short", {
                            count: a
                        }), function(t) {
                            return t.value.trim().length >= a
                        }]
                    ])]
                }
            }, {
                key: "submitAnswerForm",
                value: function() {
                    var t = this,
                        e = new FormData;
                    e.append(this.dom.answerTextarea.name, this.dom.answerTextarea.value), this.clickedSubmitButton && e.append(this.clickedSubmitButton.name, this.clickedSubmitButton.value), e.append("_method", "patch");
                    var n = this.isPending();
                    this.setSubmitting(!0), fetch(this.dom.answerForm.action, {
                        body: e,
                        headers: {
                            "X-CSRF-Token": Rails.csrfToken()
                        },
                        credentials: "same-origin",
                        method: "post"
                    }).then(function(t) {
                        if (t.headers.get("X-Already-Answered")) return Turbolinks.visit(t.headers.get("X-Already-Answered")), t.text();
                        if (t.ok) return t.text();
                        throw new Error("Something went wrong (" + t.status + " " + t.statusText + ")")
                    }).then(function(e) {
                        t.dom.answerResponseContainer.innerHTML = e, t.dom.answerResponseContainer.querySelector(o) ? t.initFromDom(t.dom.root) : t.answeredOrIgnoredCallback(t, n)
                    })["catch"](function(e) {
                        t.setSubmitting(!1), t.setSubmitError(e.toLocaleString())
                    })
                }
            }, {
                key: "submitIgnoreForm",
                value: function() {
                    var t = this,
                        e = new FormData;
                    e.append("_method", "patch"), this.setSubmitting(!0);
                    var n = this.isPending();
                    fetch(this.dom.ignoreForm.action, {
                        body: e,
                        headers: {
                            "X-CSRF-Token": Rails.csrfToken()
                        },
                        credentials: "same-origin",
                        method: "post"
                    }).then(function(t) {
                        if (t.ok) return t.text();
                        throw new Error("Something went wrong (" + t.status + " " + t.statusText + ")")
                    }).then(function(e) {
                        t.dom.root.innerHTML = e, t.answeredOrIgnoredCallback(t, n)
                    })["catch"](function(e) {
                        t.setSubmitting(!1), t.setSubmitError(e.toLocaleString())
                    })
                }
            }, {
                key: "setSubmitting",
                value: function(t) {
                    this.dom.ignoreFormSubmitButton.disabled = t, this.dom.answerForm && (this.dom.answerTextarea.disabled = t, this.dom.answerPubliclyButton.disabled = t, this.dom.answerPrivatelyButton.disabled = t), t && this.dom.submitError.classList.add(s)
                }
            }, {
                key: "setSubmitError",
                value: function(t) {
                    this.dom.submitError.textContent = t, this.dom.submitError.classList.remove(s)
                }
            }, {
                key: "isPending",
                value: function() {
                    return null !== this.dom.answerForm
                }
            }]), e
        }();
    e.onPageLoad(function() {
        var t = document.querySelector("[data-my-listing-questions]");
        null !== t && new u(t)
    })
}(),
function() {
    var t;
    (t = jQuery).scrollTo = function(e, n) {
        var i, o, r;
        return null == n && (n = 200), i = (e = t(e)).offset(), r = t(window).scrollTop(), o = t(window).height() - 85, i.top < r ? (t("html,body").animate({
            scrollTop: Math.max(i.top - n, 0)
        }, "fast"), t(window).triggerHandler("scroll")) : i.top > r + o ? (t("html,body").animate({
            scrollTop: Math.min(i.top - n, t(document).height() - o)
        }, "fast"), t(window).triggerHandler("scroll")) : void 0
    }, window.App.onPageLoad(function() {
        var e;
        return (e = t("[scroll-to-on-load]")).length && t.scrollTo(e.get(0)), t("[data-scroll-to-href]").on("click", function(e) {
            return e.preventDefault(), t.scrollTo(document.querySelector(e.target.getAttribute("data-scroll-to-href")))
        })
    })
}.call(this), window.Turbolinks.HttpRequest.prototype.requestLoaded = function() {
        return this.endRequest(function() {
            var t = this.xhr.status;
            200 <= t && t < 300 || 403 === t || 404 === t ? this.delegate.requestCompletedWithResponse(this.xhr.responseText, this.xhr.getResponseHeader("Turbolinks-Location")) : (this.failed = !0, this.delegate.requestFailedWithStatusCode(t, this.xhr.responseText))
        }.bind(this))
    }, document.addEventListener("turbolinks:before-cache", function() {
        $(".select2-container").select2("destroy"), Array.prototype.forEach.call(document.querySelectorAll(".select2-drop, .select2-drop-mask"), function(t) {
            t.parentNode.removeChild(t)
        })
    }),
    function() {
        var t, e;
        e = {
            src: function(e) {
                return t.assetServer + e
            }
        }, (t = window.App).AssetHost = e
    }.call(this),
    function() {
        var t, e = [].slice;
        (t = function() {
            function t() {}
            return t.prototype.eventHandlers = function(t) {
                return (this.listeners || (this.listeners = {}))[t] || []
            }, t.prototype.trigger = function(t, e, n) {
                var i, o, r;
                for (null == e && (e = {}), null == n && (n = this), null == this.debug && (this.debug = "production" !== app.environment), this.listeners || (this.listeners = {}), e.eventName || (e.eventName = t), i = 0, o = (r = this.listeners[t] || []).length; i < o; i++) r[i].call(n, e);
                return this
            }, t.prototype.bind = function() {
                var t, n, i, o, r, s, a;
                for (i = 2 <= arguments.length ? e.call(arguments, 0, o = arguments.length - 1) : (o = 0, []), a = arguments[o++], this.listeners || (this.listeners = {}), r = 0, s = i.length; r < s; r++) n = i[r], ((t = this.listeners)[n] || (t[n] = [])).push(a);
                return this
            }, t.prototype.one = function() {
                var t, n, i, o, r, s, a, l;
                for (n = 2 <= arguments.length ? e.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), s = arguments[i++], a = this, l = function() {
                        var t, e, i, o;
                        for (o = s.apply(this, arguments), e = 0, i = n.length; e < i; e++) t = n[e], a.unbind(t, l);
                        return o
                    }, o = 0, r = n.length; o < r; o++) t = n[o], this.bind(t, l);
                return this
            }, t.prototype.unbind = function(t, e) {
                var n, i;
                return null == e && (e = null), this.listeners || (this.listeners = []), i = this.listeners[t] || [], e ? ~(n = i.indexOf(e)) || i.splice(n, 1) : this.listeners[t] = [], this
            }, t
        }()).prototype.on = t.prototype.bind, t.prototype.fire = t.prototype.trigger, window.App.EventModel = t
    }.call(this),
    function() {
        var t, e, n, i;
        t = window.jQuery, e = {
            domain: "." + app.domain,
            path: "/",
            expires: ((i = new Date).setHours(0), i.setMinutes(0), i.setSeconds(0), new Date(+i + 31536e6))
        }, n = t.cookie, t.cookie = function(i, o, r) {
            return null == r && (r = {}), null == o ? n(i) : n(i, o, t.extend({}, e, r))
        }
    }.call(this),
    function() {
        window.jQuery.fn.disableSelection = function() {
            return this.attr("unselectable", "on").css("user-select", "none").on("selectstart", !1)
        }
    }.call(this),
    function() {
        var t, e, n = [].slice;
        t = window.jQuery, e = function(t, e) {
            var n, i, o, r, s;
            for (n = {}, o = 0, r = (s = t.events || []).length; o < r; o++) e[i = s[o]] && (n[i] = e[i], delete e[i]);
            return n
        }, window.App.jQueryWidget = function(i, o) {
            return jQuery.fn[o] = function() {
                var r, s;
                return s = arguments[0], r = 2 <= arguments.length ? n.call(arguments, 1) : [], null == s && (s = {}), "string" == typeof s ? (this.each(function() {
                    var e;
                    return (e = t(this).data(o))[s].apply(e, r)
                }), this) : (this.each(function() {
                    var n, r, a, l, c, u;
                    if (!(n = t(this)).data(o)) {
                        for (a in u = t.extend(!0, {}, i.defaults, s || {}, n.data()), r = e(i, u), l = new i(n, u), r) c = r[a], l.bind(a, c);
                        return n.data(o, l)
                    }
                }), this)
            }
        }
    }.call(this),
    function() {
        var t;
        t = window.DOMBrew, window.App.loadingIndicator = function(e, n) {
            return null == e && (e = "medium"), null == n && (n = {}), e = {
                medium: "",
                big: ".fa-2x"
            } [e], n.title || (n.title = I18n.t("common.loading", {
                punctuation: "..."
            })), t("i.fa.fa-spinner.fa-spin" + e, n).dom()
        }
    }.call(this),
    function() {
        var t, e, n, i, o, r, s, a = {}.hasOwnProperty;
        t = DOMBrew, r = {}, o = {}, s = /([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, i = document, n = {
            highlight: function(e, o) {
                var r, s, a, l, c, u;
                if (!o) return i.createTextNode(e);
                for (l = n.normalize(o), r = n.fold(e.trim()), u = new RegExp(l, "gi"), c = [], s = 0; null !== (a = u.exec(r));) c.push(i.createTextNode(e.slice(s, a.index))), c.push(t("em", e.slice(a.index, a.index + a[0].length))), s = u.lastIndex;
                return c.push(i.createTextNode(e.slice(s, e.length))), t(c).dom()
            },
            fold: function(t) {
                var n, i, r;
                if (r = o[t]) return r;
                for (i in r = t, e) a.call(e, i) && (n = e[i], r = r.replace(n, i));
                return o[t] = r
            },
            normalize: function(t) {
                var e;
                return (e = r[t]) ? e : r[t] = n.fold(t.replace(s, "\\$1").trim())
            }
        }, e = {
            0: /[\u2070\u2080\u24ea\uff10]/gi,
            1: /[\xb9\u2081\u2460\uff11]/gi,
            2: /[\xb2\u2082\u2461\uff12]/gi,
            3: /[\xb3\u2083\u2462\uff13]/gi,
            4: /[\u2074\u2084\u2463\uff14]/gi,
            5: /[\u2075\u2085\u2464\uff15]/gi,
            6: /[\u2076\u2086\u2465\uff16]/gi,
            7: /[\u2077\u2087\u2466\uff17]/gi,
            8: /[\u2078\u2088\u2467\uff18]/gi,
            9: /[\u2079\u2089\u2468\uff19]/gi,
            a: /[\xaa\xe0-\xe5\u0101\u0103\u0105\u01ce\u01df\u01e1\u01fb\u0201\u0203\u0227\u1d43\u1e01\u1e9a\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u24d0\uff41]/gi,
            b: /[\u1d47\u1e03\u1e05\u1e07\u24d1\uff42]/gi,
            c: /[\xe7\u0107\u0109\u010b\u010d\u1d9c\u1e09\u24d2\uff43]/gi,
            d: /[\u010f\u1d48\u1e0b\u1e0d\u1e0f\u1e11\u1e13\u217e\u24d3\uff44]/gi,
            e: /[\xe8-\xeb\u0113\u0115\u0117\u0119\u011b\u0205\u0207\u0229\u1d49\u1e15\u1e17\u1e19\u1e1b\u1e1d\u1eb9\u1ebb\u1ebd\u1ebf\u1ec1\u1ec3\u1ec5\u1ec7\u2091\u212f\u24d4\uff45]/gi,
            f: /[\u1da0\u1e1f\u24d5\uff46]/gi,
            g: /[\u011d\u011f\u0121\u0123\u01e7\u01f5\u1d4d\u1e21\u210a\u24d6\uff47]/gi,
            h: /[\u0125\u021f\u02b0\u1e23\u1e25\u1e27\u1e29\u1e2b\u1e96\u210e\u24d7\uff48]/gi,
            i: /[\xec-\xef\u0129\u012b\u012d\u012f\u0133\u01d0\u0209\u020b\u1d62\u1e2d\u1e2f\u1ec9\u1ecb\u2071\u2139\u2170\u24d8\uff49]/gi,
            j: /[\u0135\u01f0\u02b2\u24d9\u2c7c\uff4a]/gi,
            k: /[\u0137\u01e9\u1d4f\u1e31\u1e33\u1e35\u24da\uff4b]/gi,
            l: /[\u013a\u013c\u013e\u0140\u01c9\u02e1\u1e37\u1e39\u1e3b\u1e3d\u2113\u217c\u24db\uff4c]/gi,
            m: /[\u1d50\u1e3f\u1e41\u1e43\u217f\u24dc\uff4d]/gi,
            n: /[\xf1\u0144\u0146\u0148\u01f9\u1e45\u1e47\u1e49\u1e4b\u207f\u24dd\uff4e]/gi,
            o: /[\xba\xf2-\xf6\u014d\u014f\u0151\u01a1\u01d2\u01eb\u01ed\u020d\u020f\u022b\u022d\u022f\u0231\u1d52\u1e4d\u1e4f\u1e51\u1e53\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3\u2092\u2134\u24de\uff4f]/gi,
            p: /[\u1d56\u1e55\u1e57\u24df\uff50]/gi,
            q: /[\u02a0\u24e0\uff51]/gi,
            r: /[\u0155\u0157\u0159\u0211\u0213\u02b3\u1d63\u1e59\u1e5b\u1e5d\u1e5f\u24e1\uff52]/gi,
            s: /[\u015b\u015d\u015f\u0161\u017f\u0219\u02e2\u1e61\u1e63\u1e65\u1e67\u1e69\u1e9b\u24e2\uff53]/gi,
            t: /[\u0163\u0165\u021b\u1d57\u1e6b\u1e6d\u1e6f\u1e71\u1e97\u24e3\uff54]/gi,
            u: /[\xf9-\xfc\u0169\u016b\u016d\u016f\u0171\u0173\u01b0\u01d4\u01d6\u01d8\u01da\u01dc\u0215\u0217\u1d58\u1d64\u1e73\u1e75\u1e77\u1e79\u1e7b\u1ee5\u1ee7\u1ee9\u1eeb\u1eed\u1eef\u1ef1\u24e4\uff55]/gi,
            v: /[\u1d5b\u1d65\u1e7d\u1e7f\u2174\u24e5\uff56]/gi,
            w: /[\u0175\u02b7\u1e81\u1e83\u1e85\u1e87\u1e89\u1e98\u24e6\uff57]/gi,
            x: /[\u02e3\u1e8b\u1e8d\u2093\u2179\u24e7\uff58]/gi,
            y: /[\xfd\xff\u0177\u0233\u02b8\u1e8f\u1e99\u1ef3\u1ef5\u1ef7\u1ef9\u24e8\uff59]/gi,
            z: /[\u017a\u017c\u017e\u1dbb\u1e91\u1e93\u1e95\u24e9\uff5a]/gi
        }, window.App.TextUtils = n
    }.call(this),
    function() {
        var t;
        t = function() {
            function t() {}
            return t.maleId = 2, t
        }(), window.App.Gender = t
    }.call(this),
    function() {
        function t(t, e) {
            return {
                datumTokenizer: i,
                queryTokenizer: o,
                remote: e ? t + "&xc=" + e : t
            }
        }

        function e(e, n) {
            a[e] = a[e] || {};
            var i = a[e];
            return i[n] || (i[n] = new Bloodhound(t(s[e], n)), i[n].initialize().fail(function() {
                return console.log("failed to initialize " + e + " xc=" + n)
            })), i[n]
        }

        function n(t) {
            if (!t.classList.contains("typeahead-city-bound")) {
                t.classList.add("typeahead-city-bound"), t.addEventListener("focus", function() {
                    r.input.setQuery(t.value), t.value = ""
                });
                var n = {
                        autoselect: !0,
                        highlight: !0
                    },
                    i = {
                        name: "location",
                        displayKey: "name",
                        source: e(t.getAttribute("data-source") || "city", t.getAttribute("data-exclude-countries") || "").ttAdapter(),
                        templates: {
                            suggestion: function(e) {
                                var n = "";
                                return window.app.data.genderKey && "false" !== t.getAttribute("data-counter") && (n = "<span class='counter'>" + e.listings_count[window.app.data.genderKey] + "</span>"), "<span>" + n + ' <span class="fs ' + e.country_code + '"></span> ' + e.name + "</span>"
                            }
                        }
                    },
                    o = jQuery(t);
                o.typeahead(n, i);
                var r = o.data("ttTypeahead");
                if (r.dropdown.datasets[0].copy = r.dropdown.datasets[0]._render, r.dropdown.datasets[0].intercept = function(t, e) {
                        this.data = e, this.copy(t, e)
                    }, r.dropdown.datasets[0]._render = r.dropdown.datasets[0].intercept, "undefined" != typeof MutationObserver && !l) {
                    var s = jQuery(".tt-dataset-location")[0];
                    s && (l = new MutationObserver(function(t) {
                        var e, n, i;
                        if (r.dropdown.isOpen && r.dropdown.datasets[0].data) {
                            var s = r.dropdown.datasets[0].data;
                            t[0].addedNodes && s && o.val().length > 2 && (e = r.dropdown._getSuggestions(), n = 0, i = undefined, $.each(s, function(t, e) {
                                e && 0 === e.name.toLowerCase().indexOf(o.val().toLowerCase()) && (n++, i = t)
                            }), 1 === n && (r.dropdown._setCursor(e.eq(i)), e.eq(i).trigger("click")))
                        }
                    })).observe(s, {
                        childList: !0
                    })
                }
                r.$node.addClass("form-control"), o.on("typeahead:selected", function(t, e) {
                    console.log("city set"), o.data("ttSelectedUrl", e.url), o.trigger("city:select", e)
                }), o.on("typeahead:opened", function() {
                    return r.dropdown.$menu.addClass("tt-is-open")
                });
                var a = t.getAttribute("placeholder"),
                    c = function(t) {
                        return o.prop("placeholder", t)
                    },
                    u = r.input.setHint;
                r.setHintValue = function(t) {
                    c(t ? "" : a), u.call(r.input, t)
                }, o.val() && c(""), o.closest("form").on("submit", function() {
                    var t = jQuery(this),
                        e = o.data("ttSelectedUrl");
                    if (e) {
                        var n = document.createElement("input");
                        n.name = o.prop("name"), n.type = "hidden", n.value = e, t.append(n), o.prop("disabled", !0)
                    } else o.prop("value") && (document.location.search = "?utf8=\u2713&location=" + o.prop("value"))
                })
            }
        }
        var i = Bloodhound.tokenizers.obj.whitespace("name"),
            o = Bloodhound.tokenizers.whitespace,
            r = 8,
            s = {
                location: "/api/search_location.json?limit=" + r + "&q=%QUERY",
                country: "/api/search_country.json?limit=" + r + "&q=%QUERY",
                city: "/api/search_city.json?limit=" + r + "&q=%QUERY"
            },
            a = {},
            l = !1;
        jQuery.fn.typeaheadCity = function() {
            this.each(function() {
                n(this)
            })
        }, window.App.onPageLoad(function() {
            return jQuery(".typeahead-city:not(.no-typeahead)").typeaheadCity()
        }), document.addEventListener("turbolinks:before-cache", function() {
            var t = jQuery(".typeahead-city-bound");
            t.typeahead("destroy"), l = !1, t.removeClass("typeahead-city-bound")
        })
    }(),
    function() {
        var t, e, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        t = window.jQuery, e = window.DOMBrew, i = window.App.EventModel, n = function() {
            function n(e, n) {
                this.ui = {
                    form: e
                }, this.options = n, n.container && (n.selfContained = !1), n.container ? this.ui.container = e.closest(n.container) : n.selfContained ? this.ui.container = t('<div class="ajax-form-response"></div>') : this.ui.container = e.parent(), this.bindListeners()
            }
            return o(n, i), n.events = ["load", "loadBeforeInit"], n.defaults = {
                selfContained: !1
            }, n.prototype.setLoading = function(n) {
                return n ? (this.ui.loadingIndicator = t(e(".loading-indicator").dom()).append(window.App.loadingIndicator("big")), this.ui.container.addClass("ajax-form-loading").prepend(this.ui.loadingIndicator)) : (this.ui.container.removeClass("ajax-form-loading"), this.ui.loadingIndicator.get(0).parentNode ? this.ui.loadingIndicator.remove() : void 0)
            }, n.prototype.bindListeners = function() {
                var n, i, o, r, s;
                return r = this, i = this.ui.form, n = this.ui.container, s = this.options.selfContained, o = null, i.find(":submit").click(function() {
                    return o = this
                }), i.submit(function(a) {
                    var l, c;
                    return a.preventDefault(), l = i.serializeArray(), o && o.name && o.value && l.push({
                        name: o.name,
                        value: o.value
                    }), (c = t.post(i.attr("action"), l)).done(function(t) {
                        var o;
                        if (r.setLoading(!1), !window.App.InterruptXhrRedirectTo(t)) return o = i.prop("id"), n.html(t), o && (i = r.ui.form = n.find("form#" + o).data("ajaxForm", null)), setTimeout(function() {
                            return n.find(".ajax-form").ajaxForm(), r.fire("load", {
                                response: t
                            })
                        });
                        n.empty().append(e("p.alert.alert-success").append(e("i.fa.fa-check-circle")).append(e.text(" Redirecting...")).dom())
                    }), c.fail(function(t) {
                        var i;
                        return r.setLoading(!1), i = (null != t ? t.responseText : void 0) || (null != t ? t.statusText : void 0) || t, n.empty().append(e("p.alert.alert-danger", "Error: " + i).dom()), r.fire("error", i)
                    }), s && i.get(0).replaceWith(n.get(0)), r.setLoading(!0)
                }), this
            }, n
        }(), window.App.jQueryWidget(n, "ajaxForm")
    }.call(this),
    function() {
        var t, e, n, i, o, r = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            s = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) a.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            a = {}.hasOwnProperty;
        t = window.jQuery, e = window.DOMBrew, i = window.App.EventModel, o = function() {
            return e("button.close", {
                type: "button",
                "data-dismiss": "modal",
                "aria-hidden": !0
            }).append(e("i.fa.fa-times")).dom()
        }, n = function() {
            function n(n, i) {
                var o, s;
                this.handleError = r(this.handleError, this), this.options = i, this.ui = {
                    trigger: n,
                    overlay: t(e(".modal", {
                        "class": i.overlayClass
                    }).append(e(".modal-dialog", {
                        "class": i.modalDialogClass || "modal-lg"
                    }).append(e(".modal-content"))).dom())
                }, i.targetUrl || (i.targetUrl = n.attr("href")), o = this, n.bind(i.triggerEvent, function(t) {
                    if ("click" !== i.triggerEvent || !(t.ctrlKey || t.shiftKey || t.metaKey)) return t.preventDefault(), o.toggle(!0)
                }), this.ui.overlay.appendTo(document.body).modal(i).on("hide.bs.modal", (s = this, function() {
                    return s.fire("close")
                }))
            }
            return s(n, i), n.events = ["load", "beforeInit", "open", "close", "success"], n.defaults = {
                ajaxForm: !0,
                triggerEvent: "click",
                keyboard: !1,
                show: !1
            }, n.prototype.addGoodies = function() {
                var n, i, r, s, a;
                if (this.fire("beforeInit"), a = this, (s = (i = this.ui.overlay).find("[data-override-modal-dialog-class]").data("overrideModalDialogClass")) && i.find(".modal-dialog").attr("class", "modal-dialog " + s), i.find('button.close[data-dismiss="modal"]').length || i.find(".modal-header").prepend(o()), this.options.ajaxForm && (n = i.find("form")).length && ((r = n.ajaxForm({
                        container: ".modal-content"
                    }).data("ajaxForm")).on("load", function() {
                        return a.addGoodies()
                    }), r.on("error", function(t) {
                        return i.find(".modal-content").empty(), a.handleError(t)
                    })), this.options.returnTo && (n = i.find("form")).length) return t(e("input", {
                    name: "return_to",
                    value: this.options.returnTo,
                    type: "hidden"
                }).dom()).appendTo(n)
            }, n.prototype.addLoadingIndicator = function(t, e) {
                return this.laTimeout = setTimeout((n = this, function() {
                    if (t.find(".modal-content").append(n.la = window.App.loadingIndicator("big")), e) return e()
                }), 350);
                var n
            }, n.prototype.clearLoadingIndicator = function() {
                return clearTimeout(this.laTimeout), this.la && t(this.la).remove(), this.la = null
            }, n.prototype.handleError = function(t) {
                return this.ui.overlay.find(".modal-content").append(e(".modal-header").append(o(), e("h1.modal-title", "Error")).dom(), e(".modal-body").append(e("p.alert.alert-danger", "Error: " + t)).dom())
            }, n.prototype.loadAndShow = function() {
                var t, e;
                return t = this.ui.overlay, this.addLoadingIndicator(t, (e = this, function() {
                    return e._show()
                })), t.find(".modal-content").load(this.options.targetUrl, function(e) {
                    return function(n, i) {
                        return e._show(), e.clearLoadingIndicator(t), "error" === i ? e.handleError(n) : (e.addGoodies(), e.loaded = !0, e.fire("load"))
                    }
                }(this))
            }, n.prototype._show = function() {
                return this.ui.overlay.data("bs.modal").show(), this.ui.overlay.find('input:visible:not(:checkbox,:button)[value=""],input:visible:not(:checkbox,:button):not([value]),textarea:visible:empty').first().focus()
            }, n.prototype._hide = function() {
                return this.ui.overlay.data("bs.modal").hide()
            }, n.prototype.toggle = function(t) {
                return t ? this.loaded ? this._show() : this.loadAndShow() : this._hide()
            }, n.prototype.unload = function() {
                return this.ui.overlay.find(".modal-content").empty(), this.loaded = !1
            }, n
        }(), document.addEventListener("keydown", function(e) {
            var n = "Escape" === e.key,
                i = document.querySelector(".modal.in"),
                o = document.querySelector("#age-check");
            n && i && !o && (t(".modal.in").length > 1 ? t(".modal.in").last().data("bs.modal").hide() : t(".modal.in").data("bs.modal").hide())
        }), window.App.jQueryWidget(n, "ajaxOverlay")
    }.call(this),
    function() {
        var t;
        t = "[data-btn-link]", window.App.onPageLoad(function() {
            return $(t).each(function() {
                var t;
                return (t = $(this)).on("btn-link:start", function() {
                    if (!t.data("btn-link:working")) return t.addClass("disabled"), t.append('<span class="btn-link-spinner">&nbsp;<i class="fa fa-spinner fa-spin"></i></span>'), t.data("btn-link:working", !0)
                }), t.on("btn-link:done", function() {
                    if (t.data("btn-link:working")) return t.removeClass("disabled").find(".btn-link-spinner").remove(), t.data("btn-link:working", !1)
                }), setTimeout(function() {
                    var e;
                    return e = "click", t.data("confirm") && (e = "confirm:complete"), t.on(e, function(e) {
                        return !1 !== e.detail[0] && (t.triggerHandler("btn-link:start"), !0)
                    })
                })
            })
        }), document.addEventListener("turbolinks:before-cache", function() {
            return $(t).triggerHandler("btn-link:done")
        })
    }.call(this),
    function() {
        var t, e, n, i;
        t = window.jQuery, e = window.DOMBrew, n = window.File && window.FileReader && window.FileList && window.Blob, i = function() {
            function i(t, e) {
                this.ui = {
                    field: t
                }, this.options = e, this.isDOMInitialized() ? this.findDOM() : this.buildDOM(), this.bindEvents()
            }
            return i.defaults = {
                width: 128,
                height: 128,
                maxFileSize: 8388608,
                html5: !0,
                resize: "fill",
                gravity: "North"
            }, i.prototype.isDOMInitialized = function() {
                return "1" === this.ui.field[0].getAttribute("data-picture-field-dom-built")
            }, i.prototype.findDOM = function() {
                var e;
                return e = this.ui.field[0].parentElement, this.ui.removeControl = t(e.querySelector("button.remove-picture")), this.ui.removeField = t(e.querySelector('input[type="hidden"]')), this.ui.preview = t(e.querySelector("div.preview"))
            }, i.prototype.buildDOM = function() {
                return this.ui.removeControl = t(e("button.btn-link.remove-picture", "Remove photo", {
                    type: "button"
                }).prepend(e("i.fa.fa-times.fa-inline")).dom()), this.ui.removeField = t(e("input", {
                    type: "hidden",
                    name: this.ui.field.prop("name").replace(/(\[)?([^\[\]]+)(\])?$/, "$1remove_$2$3")
                }).dom()), this.ui.preview = t(e("div.preview", {
                    css: {
                        height: this.options.height + "px",
                        width: this.options.width + "px",
                        overflow: "hidden"
                    }
                }).dom()), this.options.url && this.ui.preview.append(e("img", {
                    src: this.options.url,
                    width: this.options.width,
                    height: this.options.height
                }).dom()), this.ui.field.wrap('<div class="picture-field-container"></div>'), this.ui.field.before(e(".preview-box").append(this.ui.preview[0], this.ui.removeField[0], this.ui.removeControl[0]).dom()), this.options.url || (this.ui.removeControl.hide(), this.ui.preview.hide()), this.ui.field[0].setAttribute("data-picture-field-dom-built", "1")
            }, i.prototype.bindEvents = function() {
                var t, i, o;
                return i = this, o = this, t = function() {
                    return o.ui.preview.empty(), o.ui.removeField.val(1), o.ui.field[0].value = null, o.ui.removeControl.hide(), o.ui.preview.hide()
                }, this.ui.removeControl.click(t), this.ui.field.change(function() {
                    var o, r, s, a;
                    if (i.ui.removeField.val(0), i.ui.removeControl.show(), i.ui.preview.show(), r = n ? null != (a = i.ui.field[0].files[0]) ? a.name : void 0 : i.ui.field.val()) return r = r.replace(/.*[\/\\]/, ""), /\.(?:jpg|jpeg|gif|png|bmp)$/i.test(r) ? n && i.ui.field[0].files[0].size > i.maxFileSize ? (t(), void window.alert(I18n.t("activerecord.errors.full_messages.image_size_error"))) : i.options.html5 && n && (s = new FileReader).readAsDataURL ? (s.onload = function(t) {
                        if ("data:" !== t.target.result) return i.ui.preview.empty().append(e("img.new-img", {
                            css: {
                                display: "none"
                            },
                            src: t.target.result
                        }).dom()), i.ui.preview.find("img").on("load", function() {
                            return "fit" === i.options.resize ? this.height <= i.options.height && this.width <= i.options.width || (this.height < this.width ? this.style.maxWidth = i.options.width + "px" : this.style.maxHeight = i.options.height + "px") : "fill" === i.options.resize && (this.height > this.width ? this.style.width = options.width + "px" : (this.style.height = options.height + "px", "North" === i.options.gravity && (this.style.marginLeft = "-" + Math.round(.5 * (i.options.height / this.height * this.width - i.options.width)) + "px"))), this.style.display = "inline"
                        })
                    }, s.readAsDataURL(i.ui.field[0].files[0])) : void 0 : (o = (o = r.match(/\.[^.]*$/)) ? o[0] : "", t(), void window.alert(I18n.t("errors.messages.extension_white_list_error", {
                        things: "images",
                        allowed_types: "jpg, jpeg, gif, png, bmp",
                        extension: o
                    })));
                    i.ui.preview.find("img.new-img").length && t()
                })
            }, i
        }(), window.App.jQueryWidget(i, "pictureField")
    }.call(this),
    function() {
        var t, e, n;
        t = window.jQuery, n = "[data-btn-submit]", e = function() {
            return t(n).each(function() {
                var e;
                if (!(e = t(this)).data("hasBtnSubmit")) return e.data("hasBtnSubmit", !0), setTimeout(function() {
                    return e.closest("form[action]").submit(function() {
                        return setTimeout(function() {
                            return e.prop("disabled", !0), e.append('<span class="btn-submit-spinner">&nbsp;<i class="fa fa-spinner fa-spin"></i></span>')
                        })
                    })
                })
            })
        }, window.App.onPageLoad(e), t(document).on("ajaxComplete", e), document.addEventListener("turbolinks:before-cache", function() {
            return t(n).filter(function() {
                return this.disabled || /\bdisabled\b/.test(this.className)
            }).prop("disabled", !1), t(".btn-submit-spinner:visible").remove()
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            function t(t, e) {
                this.options = e, this.ui = {
                    list: t
                }, this.ui.list.on("change", 'input[type="checkbox"]', function() {
                    return $(this).parent().toggleClass("checked", $(this).is(":checked"))
                }), this.ui.list.find("input:checked").each(function() {
                    return $(this).parent().addClass("checked")
                }), this.ui.list.find("li").click(function(t) {
                    if (!$(t.target).is("label,:checkbox")) return $(this).find(":checkbox").trigger("click")
                }), this.ui.list.find("label").disableSelection()
            }
            return t.defaults = {}, t
        }(), window.App.jQueryWidget(t, "checkBoxList")
    }.call(this), document.addEventListener("click", function(t) {
        const e = t.target.closest("[data-confirm-delete]");
        e && (t.preventDefault(), confirmDelete(e))
    }), document.addEventListener("click", function(t) {
        if (!t.target.closest("[data-copy-btn]")) return;
        let e = t.target.closest("[data-copy-btn]"),
            n = e.getAttribute("data-copy-btn"),
            i = document.querySelector(n),
            o = e.querySelector("span[data-text]"),
            r = o.innerHTML;
        navigator.clipboard.writeText(i.textContent || i.value).then(() => {
            o.innerHTML = o.getAttribute("data-text"), setTimeout(() => {
                o.innerHTML = r
            }, 2500)
        })["catch"](t => {
            console.error("Failed to copy text: ", t)
        })
    }),
    function() {
        var t;
        t = function() {
            function t(e, n) {
                n.user && (e.prop("id") || e.prop("id", "twitter-embed-" + (t.serialId += 1)), this.ui = {
                    container: e
                }, this.options = n, n.id || (n.id = this.ui.container.prop("id")), t.queueInit(this))
            }
            return t.defaults = {
                version: 2,
                type: "profile",
                rpp: 4,
                interval: 45e3,
                width: "auto",
                height: 300,
                theme: {
                    shell: {
                        background: "rgba(33,33,33,0.5)",
                        color: "#ffffff"
                    },
                    tweets: {
                        background: "inherit",
                        color: "#ffffff",
                        links: "#f4b727"
                    }
                },
                features: {
                    scrollbar: !1,
                    loop: !1,
                    live: !1,
                    behavior: "default"
                }
            }, t.prototype.initWidget = function() {
                return new TWTR.Widget(this.options).setUser(this.options.user).render().start()
            }, t.serialId = 0, t.twitterLoaded = function() {
                return window.TWTR && TWTR.Widget
            }, t.initQueue = [], t.loadTwitterScript = function() {
                if (!this.twitterScriptLoadingStarted) return this.twitterScriptLoadingStarted = !0, jQuery.getScript("https://widgets.twimg.com/j/2/widget.js", function() {
                    var e, n, i, o, r;
                    for (o = [], e = 0, n = (i = t.initQueue).length; e < n; e++) r = i[e], o.push(r.initWidget());
                    return o
                })
            }, t.queueInit = function(t) {
                return this.loadTwitterScript(), this.twitterLoaded() ? t.initWidget() : this.initQueue.push(t)
            }, t
        }(), window.App.jQueryWidget(t, "embeddedTweets")
    }.call(this),
    function() {
        var t, e, n, i, o, r, s, a, l = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) c.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            c = {}.hasOwnProperty;
        t = window.jQuery, e = window.DOMBrew, n = window.App.EventModel, window.App.AssetHost, i = window.File && window.FileReader && window.FileList && window.Blob, s = function(t, e) {
            return "_" === (t = t.replace(/[\[\]]+/g, "_"))[t.length - 1] && (t = t.slice(0, -1)), e && (t += "_" + e), t
        }, a = 2e9, r = function() {
            function n(t, e) {
                null == e && (e = {}), this.thumbSize = e.thumbSize, this.options = e, this.newImage = !e.exists, this.ui = {
                    record: t
                }, this.ownerName = e.ownerName, this.collectionName = e.collectionName, this.fileName = e.fileName, this.id = e.id, this.newImage && (this.id || (this.id = ++a), this.buildRecord()), t.find("img").on("load", function() {
                    return i(this, e.thumbSize)
                })
            }
            var i;
            return n.defaults = {
                thumbSize: {
                    width: 75,
                    height: 56
                }
            }, n.prototype.isNew = function() {
                return this.newImage
            }, n.prototype.id = function() {
                return this.id
            }, n.prototype.imageAttrName = function(t) {
                return this.ownerName + "[" + this.collectionName + "][" + this.id + "]" + (t ? "[" + t + "]" : void 0)
            }, n.prototype.buildRecord = function() {
                var n, i, o;
                n = this.ownerName + "[main_image_id]", o = e(this.ui.record[0]).append(e("i.fa.fa-times.fa-lg.delete"), e("span.img-name", this.fileName), e("span.icon.icon-picture.img-placeholder")), i = t('<div class="img-pending p-1"> <details data-popover="up"> <summary class="d-flex align-items-center justify-content-between"><span class="small text-uppercase fw-bold">Pending</span> <svg id="query" data-icon="query" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none"></path><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11.85,18c-0.7,0-1.26-0.56-1.26-1.26 c0-0.71,0.56-1.25,1.26-1.25c0.71,0,1.25,0.54,1.25,1.25C13.1,17.43,12.56,18,11.85,18z M14.86,10.6 c-0.76,1.11-1.48,1.46-1.87,2.17c-0.09,0.17-0.15,0.31-0.19,0.59c-0.06,0.46-0.43,0.82-0.9,0.82h-0.04c-0.53,0-0.95-0.45-0.9-0.98 c0.03-0.33,0.11-0.68,0.3-1c0.49-0.87,1.42-1.39,1.96-2.16c0.57-0.81,0.25-2.33-1.37-2.33c-0.74,0-1.21,0.39-1.51,0.85 C10.12,8.9,9.66,9.02,9.27,8.86c-0.5-0.21-0.72-0.83-0.41-1.29C9.47,6.66,10.49,6,11.83,6c1.48,0,2.49,0.67,3.01,1.52 C15.28,8.24,15.54,9.59,14.86,10.6z"></path></svg> </summary> <div class="popover-content p-1 mb-0">New photos need to be reviewed by a moderator.</div> </details> </div>'), o.append(i), this.options.mainImage && o.prepend(e("label", I18n.t("common.main_image"), {
                    "for": this.ownerName + "_main_image_id_" + this.id
                }), e("input.main-img.radio", {
                    type: "radio",
                    name: n,
                    id: s(n, this.id),
                    value: this.id
                }))
            }, n.prototype.removeFromDOM = function() {
                var t;
                return (t = this.ui.record).find("input.destroy").val(1).prop("disabled", !1).appendTo(this.ui.record.parent()), t.hide(200, function() {
                    return t.remove()
                }), t.find(":input").prop("disabled", !0), this
            }, n.prototype.resize = function() {
                return i(this.ui.record.find("img")[0], this.options.thumbSize)
            }, i = function(t, e) {
                if ("img-placeholder" !== t.className) {
                    if (!(t.height <= e.height && t.width <= e.width)) return t.className = t.height < t.width ? "thumb wide" : "thumb tall";
                    t.className = "thumb"
                }
            }, n
        }(), window.App.jQueryWidget(r, "uploaderImage"), o = function() {
            function o(n, i) {
                var o, s, a, l, c, u;
                for (null == i && (i = {}), this.images = [], this.ui = {
                        container: n,
                        form: n.closest("form")
                    }, o = 0, s = (l = ["fileField", "maxImages", "maxFileSize"]).length; o < s; o++) this[a = l[o]] = i[a];
                c = this, this.options = i, n.find(".record").each(function() {
                    return c.images.push(t(this).uploaderImage({
                        exists: !0,
                        id: +this.id.replace(/^\D*/, ""),
                        ownerName: i.ownerName,
                        collectionName: i.collectionName,
                        thumbSize: i.thumbSize,
                        mainImage: i.mainImage
                    }).data("uploaderImage"))
                }), r.call(this), n.on("click", ".delete", function() {
                    var e;
                    if (!c.options.confirmDeletion || window.confirm(I18n.t("common.please_confirm_deletion"))) return (e = t(this).closest(".record")).children('input[type="radio"]').prop("checked") ? alert("Main image can't be removed") : c.removeImage(e)
                }), i.mainImage && (this.on("imageAdded", (u = this, function(e) {
                    if (!u.mainImageId()) return t(e.input).closest(".record").find("input:radio").prop("checked", !0)
                })), this.on("imageRemoved", function(t) {
                    return function() {
                        if (t.images.length && !t.mainImageId()) return t.images[0].ui.record.find("input:radio").prop("checked", !0)
                    }
                }(this)), this.ui.form.submit(function(t) {
                    return function() {
                        var e, n;
                        if ((n = (e = t.ui.container.find('input[name$="[main_image_id]"]:checked:enabled')).closest(".record").data("uploaderImage")) && n.isNew()) return e.attr("name", n.imageAttrName("main_image"))
                    }
                }(this))), this.setImageCount(this.images.length), this.updateSortable(), this.on("imageAdded", function(t) {
                    return function() {
                        return t.updateSortable()
                    }
                }(this)), this.on("imageRemoved", function(t) {
                    return function() {
                        return t.updateSortable()
                    }
                }(this)), n.closest("form").submit(function() {
                    var i;
                    return i = t(this), n.children(".image").toArray().map(function(t, e) {
                        return [t, e + 1]
                    }).forEach(function(n) {
                        var o, r, s, a;
                        return s = n[0], a = n[1], r = (o = t(s)).find('input[name$="[photo_cache]"]').add(o.find('input[type="file"]')).get(0).name.replace(/\[\w+\]$/, ""), i.append(e("input", {
                            type: "hidden",
                            name: r + "[order_id]",
                            value: a
                        }).dom())
                    })
                })
            }
            var r, s;
            return l(o, n), o.events = ["imageAdded", "imageRemoved"], o.defaults = {
                single: !1,
                html5Preview: !1,
                mainImage: !1,
                maxImages: !1,
                confirmDeletion: !0,
                maxFileSize: 8388608,
                uploadLabel: "Upload",
                replaceLabel: "Change Photo"
            }, o.prototype.buildFileInput = function() {
                var n;
                return n = e(".record.image-input.new-img").append(e(".file.optional.add-img").append(this.options.uploadLabel ? e("label.file.optional", this.options.uploadLabel, {
                    "for": "mi-new-image-input"
                }) : void 0, e("input.file.optional", {
                    type: "file",
                    accept: "image/*",
                    id: "mi-new-image-input",
                    size: 30
                }))).dom(), this.ui.newImage = t(n), n
            }, r = function() {
                var e;
                return this.ui.fileDiv && this.ui.fileDiv.remove(), this.ui.fileDiv = t(this.buildFileInput()).appendTo(this.ui.container), e = this, this.ui.fileDiv.find('input[type="file"]').one("change", function() {
                    return s.call(e, this)
                })
            }, s = function(n) {
                var o, s, a, l;
                return this, a = (a = i ? n.files[0].name : n.value).replace(/.*[\/\\]/, ""), /\.(?:jpg|jpeg|gif|png)$/i.test(a) ? i && n.files[0].size > this.maxFileSize ? (r.call(this), void window.alert(I18n.t("activerecord.errors.full_messages.image_size_error"))) : (o = t(e(".record.image").dom()), this.options.single && 1 === this.images.length && this.images[0].destroy(), this.images.push(o.uploaderImage({
                    exists: !1,
                    fileName: a || I18n.t("common.new"),
                    ownerName: this.options.ownerName,
                    collectionName: this.options.collectionName,
                    thumbSize: this.options.thumbSize,
                    mainImage: this.options.mainImage
                }).data("uploaderImage")), o.appendTo(this.ui.container), r.call(this), n.name = o.data("uploaderImage").imageAttrName(this.fileField), n.id = null, n.style.display = "none", o.append(n), i && this.options.html5Preview && (this.images[this.images.length - 1].ui.record.find(".img-name").hide(), (l = new FileReader).readAsDataURL && (l.readAsDataURL(n.files[0]), l.onload = function(t) {
                    if ("data:" !== t.target.result) return o.get(0).querySelector(".img-placeholder").replaceWith(e("img", {
                        src: t.target.result
                    }).dom()), o.find("img").on("load", function() {
                        return o.data("uploaderImage").resize()
                    })
                })), this.setImageCount(this.images.length), this.fire("imageAdded", {
                    thumb: o[0],
                    input: o.find('input[type="file"]')[0]
                })) : (r.call(this), s = (s = a.match(/\.[^.]*$/)) ? s[0] : "", void window.alert(I18n.t("errors.messages.extension_white_list_error", {
                    things: "images",
                    allowed_types: "jpg, jpeg, gif, png, bmp",
                    extension: s
                })))
            }, o.prototype.removeImage = function(t) {
                var e, n, i, o;
                for (n = 0, i = (o = this.images).length; n < i; n++)
                    if ((e = o[n]).ui.record.is(t)) {
                        e.removeFromDOM(), this.images.splice(this.images.indexOf(e), 1);
                        break
                    } return this.setImageCount(this.images.length), this.fire("imageRemoved")
            }, o.prototype.mainImageId = function() {
                return this.ui.container.find('input[name$="[main_image_id]"]:checked:enabled').val()
            }, o.prototype.setImageCount = function(t) {
                var e;
                return this.imageCount === t ? this : (this.imageCount = t, e = this.maxImages && this.imageCount >= this.maxImages, this.options.single ? e ? this.ui.newImage.find("label").text(this.options.replaceLabel) : this.ui.newImage.find("label").text(this.options.uploadLabel) : this.ui.newImage.toggle(!e), this)
            }, o.prototype.updateSortable = function() {
                return sortable(this.ui.container.get(0), {
                    items: ".image.record",
                    placeholder: '<div class="sortable-placeholder image record"></div>'
                })
            }, o
        }(), window.App.jQueryWidget(o, "multiImageUploader")
    }.call(this), document.addEventListener("click", function(t) {
        var e = document.querySelector("details[data-popover][open]");
        e && e && !t.target.closest("details[data-popover][open]") && e.removeAttribute("open")
    }),
    function() {
        window.App.onPageLoad(function() {
            return $("a[data-remote-link]").on("ajax:success", function(t) {
                var e, n;
                if (e = t.detail[0], n = t.detail[1], !window.App.InterruptXhrRedirectTo(e)) return $(this).triggerHandler("btn-link:done"), console.log("bad response status=" + n + " data=", e)
            })
        })
    }.call(this),
    function() {
        var t, e;
        t = window.DOMBrew, e = function() {
            function e(t, e) {
                var n;
                null == e && (e = {}), this.options = e, this.ui = {
                    container: t
                }, (n = t.find('input[type="radio"]')).length ? (this.options.totalStars = n.length, this.initEditable()) : this.initDisplay()
            }
            return e.defaults = {
                totalStars: 5
            }, e.prototype.buildStars = function(e) {
                var n;
                return null == e && (e = this.options.totalStars), this.ui.container.append(t(".stars").append(function() {
                    var i, o, r;
                    for (r = [], n = i = 1, o = e; 1 <= o ? i <= o : i >= o; n = 1 <= o ? ++i : --i) r.push(t("span.star", {
                        data: {
                            val: n
                        }
                    }));
                    return r
                }()).dom()), this.ui.stars = this.ui.container.find(".stars > .star")
            }, e.prototype.initEditable = function() {
                var t, e, n;
                return (t = this.ui.container).addClass("editable"), t.find("label.radio-inline,span.radio-inline").hide(), n = t.find('input[type="radio"]').val(), this.buildStars(), (e = this.ui.stars).bind("mouseenter mouseleave", function() {
                    return $(this).prevAll().add(this).toggleClass("hover")
                }), e.click(function() {
                    return n = +$(this).attr("data-val"), e.removeClass("selected"), $(this).prevAll().add(this).addClass("selected"), t.find("input[value='" + n + "']").prop("checked", !0).trigger("change")
                })
            }, e.prototype.initDisplay = function() {
                var t;
                return t = this.options.val || parseInt(this.ui.container.text()), this.buildStars(), this.ui.stars.filter(function(e) {
                    return e < t
                }).addClass("selected")
            }, e.prototype.destroy = function() {
                return this.ui.container.get(0).removeChild(this.ui.stars.get(0).parentElement)
            }, e
        }(), window.App.jQueryWidget(e, "starRating")
    }.call(this),
    function() {
        var t, e, n, i, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            },
            r = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty;
        t = window.jQuery, e = window.DOMBrew, n = window.App.EventModel, i = function() {
            function i(n, i) {
                this.enableFieldset = o(this.enableFieldset, this), this.disableFieldset = o(this.disableFieldset, this), this.hide = o(this.hide, this), this.show = o(this.show, this), this.toggle = o(this.toggle, this), this.options = i, this.ui = {
                    stateInput: t(e("input", {
                        type: "hidden",
                        value: !1
                    }).dom()),
                    trigger: n,
                    icon: n.find("span"),
                    target: t(this.options.target || n.attr("href"))
                }, this.options.closeTrigger && (this.ui.close = this.ui.target.find(this.options.closeTrigger), this.ui.close.click(this.toggle)), this.ui.fields = this.ui.target.find(":input"), i.stateParam && (this.ui.stateInput.attr("name", this.ui.target.prop("id")), this.ui.target.append(this.ui.stateInput), -1 !== location.href.indexOf(this.ui.stateInput.attr("name") + "=true") || this.ui.target.is(":visible") ? (this.ui.stateInput.val("true"), this.show()) : (this.ui.stateInput.val("false"), this.hide(), this.disableFieldset())), this.ui.trigger.click(this.toggle)
            }
            return r(i, n), i.events = ["show", "hide", "hidden"], i.defaults = {
                preventDefault: !0,
                effect: function(t, e) {
                    return "show" === t ? this.ui.target.slideDown(this.options.animationDuration, e) : this.ui.target.slideUp(this.options.animationDuration, e)
                },
                animationDuration: 250,
                stateParam: !0,
                target: null,
                iconMore: "icon-arrow-down",
                iconLess: "icon-arrow-up",
                closeTrigger: ".close",
                disableWhenHidden: !0,
                hideTriggerOnExpand: !1
            }, i.prototype.toggle = function(t) {
                return null != this.options.preventDefault && t.preventDefault(), "true" === this.ui.stateInput.val() ? this.hide() : this.show()
            }, i.prototype.show = function() {
                if (this.options.hideTriggerOnExpand && this.ui.trigger.hide(), !this.visible) return this.visible = !0, this.ui.trigger.addClass("expanded"), this.ui.stateInput.val("true"), this.options.effect.call(this, "show"), this.ui.icon.removeClass(this.options.iconMore), this.ui.icon.addClass(this.options.iconLess), this.options.disableWhenHidden && this.enableFieldset(), this.fire("show")
            }, i.prototype.hide = function() {
                var t;
                if (this.visible) return this.visible = !1, this.ui.stateInput.val("false"), this.options.effect.call(this, "hide", (t = this, function() {
                    if (!t.visible) return t.ui.trigger.removeClass("expanded") && t.trigger("hidden")
                })), this.ui.icon.removeClass(this.options.iconLess), this.ui.icon.addClass(this.options.iconMore), this.options.disableWhenHidden && this.disableFieldset(), this.fire("hide")
            }, i.prototype.disableFieldset = function() {
                return this.ui.target.attr("disabled", "disabled"), this.ui.fields.attr("disabled", "disabled")
            }, i.prototype.enableFieldset = function() {
                return this.ui.target.removeAttr("disabled"), this.ui.fields.removeAttr("disabled")
            }, i
        }(), window.App.jQueryWidget(i, "toggler")
    }.call(this),
    function() {
        $.fn.turbolinksForm = function() {
            var t;
            return t = function(t) {
                return t.preventDefault(), $(this).turbolinksSubmit()
            }, $(this).each(function() {
                return $(this).submit(t)
            })
        }, $.fn.turbolinksSubmit = function() {
            var t, e, n, i;
            return i = (t = $(this)).attr("action"), t.emptyInputs().prop("disabled", !0).addClass("empty-auto-disabled"), i = "" + i + ("?utf8=%E2%9C%93" === (e = (/\?/.test(i) ? "&" : "?") + $.param(t.serializeArray())) || "?" === e ? "" : e), n = function() {
                return t.emptyInputs().prop("disabled", !1).removeClass("empty-auto-disabled")
            }, $(document).one("turbolinks:before-cache", n), Turbolinks.visit(i)
        }, window.App.onPageLoad(function() {
            return $(".turbolinks-form,[turbolinks-form]").each(function() {
                return $(this).turbolinksForm()
            })
        })
    }.call(this),
    function() {
        var t, e, n, i, o, r = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            s = {}.hasOwnProperty,
            a = [].slice;
        t = window.jQuery, e = window.DOMBrew, i = window.App.EventModel, n = t(window), o = function() {
            function o(n, i) {
                var r, a, c, d;
                for (a in this.errorCount = 0, this.selector = i.selector, this.options = t.extend({}, i), c = this.options) c[a], "$" === a[0] && delete this.options[a];
                i.selector && delete i.selector, I18n.rtl() && (i.errorPositionMy = "right top", i.errorPositionAt = "left top", i.errorPositionOffset = "-10 0"), this.ui = {
                    container: n
                }, this.bindAll(), d = this, n.submit(function(e) {
                    var i, r, s, a, l, c, u, h;
                    for (r = 0, s = (c = d.validatables).length; r < s; r++)
                        for (i = c[r], l = 0, a = (u = t(i).data("boundValidations")).length; l < a; l++) h = u[l], d.validateField(h);
                    if (d.isValid()) {
                        if (d.trigger("submitSuccess"), d.options.recordSubmit) return window.App.recordSubmit(n.get(0), "success", d.options.recordSubmitSubField)
                    } else if (e.preventDefault(), e.stopImmediatePropagation(), o.scrollToFirstError(n), d.trigger("submitFail"), d.options.recordSubmit) return window.App.recordSubmit(n.get(0), "validation_fail", d.options.recordSubmitSubField)
                }), (r = t._data(n[0], "events").submit).unshift(r[r.length - 1]), r.splice(r.length - 1), this.on("fieldInvalid", function(n) {
                    var i, o, r;
                    return r = t(n.target), s(r).addClass("error"), (i = (o = l(r)).find(".validation-error").text(n.message).prepend(e("span.tooltip").dom())).length || (i = t(e(".validation-error", n.message).prepend(e("span.tooltip")).dom()).appendTo(o).hide()), u(r, this.options, i, o)
                }), this.on("fieldValid", function(e) {
                    var n;
                    if (0 == +((n = t(e.target)).data("errorCount") || 0)) return s(n).removeClass("error"), l(n).find(".validation-error").addClass("hiding").fadeOut(250)
                })
            }
            var s, l, c, u, d, h, p, f;
            return r(o, i), o.events = ["fieldValid", "fieldInvalid", "beforeValidate", "submitFail", "submitSuccess"], o.defaults = {
                selector: ".validate",
                errorPositionMy: "left top",
                errorPositionAt: "right top",
                errorPositionOffset: "10 0",
                tooltipClass: "tooltip",
                recordSubmit: !1,
                recordSubmitSubField: null
            }, d = function(t) {
                return function(e) {
                    return t.test(e.trim())
                }
            }, h = function(t) {
                try {
                    return jQuery("<div>" + t + "</div>").text().trim().length
                } catch (e) {
                    return e, t.trim().replace(/<[^>]*>/g, "").replace(/\s+/g, " ").length
                }
            }, f = o.validators = {
                date: function() {
                    var t, e, n, i;
                    return t = (n = 1 <= arguments.length ? a.call(arguments, 0) : [])[0], e = n[1], i = n[2], !(t || e || i) || +e - 1 === new Date(Date.parse(i + "/" + e + "/" + t)).getMonth()
                },
                presence: function() {
                    var t, e, n;
                    for (t = 0, e = (n = 1 <= arguments.length ? a.call(arguments, 0) : []).length; t < e; t++)
                        if (!n[t]) return !1;
                    return !0
                },
                presenceAny: function() {
                    var t, e, n;
                    for (t = 0, e = (n = 1 <= arguments.length ? a.call(arguments, 0) : []).length; t < e; t++)
                        if (n[t]) return !0;
                    return !1
                },
                acceptance: function(t) {
                    return !0 === t
                },
                emailFormat: d(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([-a-z0-9]{2,24})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i),
                urlFormat: function(t) {
                    return !t || !(t = t.trim()) || (/\w{3,5}:\/\//.test(t) || (t = "http://" + t, this.value = t), /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test(t))
                },
                doesNotContainUrls: function(t) {
                    return !/(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/i.test(t)
                },
                doesNotContainEmails: function(t) {
                    return !/[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([-a-z0-9]{2,24})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?/i.test(t)
                },
                doesNotContainPhones: function(t) {
                    var e;
                    return e = t.replace(/[^\w,'"&:;\/$\n]/g, ""), !/\d{7,}/i.test(e)
                },
                numericality: d(/^[\s\d]*$/),
                min: function(t, e) {
                    return t >= +e || !t
                },
                max: function(t, e) {
                    return t <= +e || !t
                },
                minlength: function(t, e) {
                    return t.length >= +e || 0 === t.length
                },
                maxlength: function(t, e) {
                    return t.length <= +e || 0 === t.length
                },
                textMinlength: function(t, e) {
                    return h(t) >= +e
                },
                textMaxlength: function(t, e) {
                    return h(t) <= +e
                },
                length: function(t, e, n) {
                    return f.minlength(t, e) && f.maxlength(t, n)
                },
                textLength: function(t, e, n) {
                    return f.textMinlength(t, e) && f.textMaxlength(t, n)
                },
                phone: function(e, n) {
                    return n = t.trim(n), !isNaN(+e) && (!n || !(n.replace(/\D+/g, "").length < 5) && !(n.length > 30))
                }
            }, p = o.validatorMessages = {
                date: I18n.t("errors.messages.invalid"),
                presence: I18n.t("errors.messages.blank"),
                presenceAny: "Please choose one",
                emailFormat: I18n.t("errors.full_messages.invalid_email"),
                urlFormat: I18n.t("errors.full_messages.invalid_url"),
                numericality: I18n.t("errors.messages.is_not_a_number"),
                acceptance: I18n.t("errors.messages.accepted"),
                phone: I18n.t("errors.full_messages.invalid_phone"),
                min: function(t, e) {
                    return "Minimum is " + e
                },
                max: function(t, e) {
                    return "Maximum is " + e
                },
                minlength: function(t, e) {
                    return I18n.t("errors.messages.too_short", {
                        count: e
                    })
                },
                maxlength: function(t, e) {
                    return I18n.t("errors.messages.too_long", {
                        count: e
                    })
                },
                doesNotContainUrls: "Web addresses cannot be displayed in name or description - please remove them",
                doesNotContainEmails: "Please remove your email - messages will be sent to the email below",
                doesNotContainPhones: "Please remove your phone number and put it in the 'Phone' field below",
                length: function(t, e, n) {
                    return f.minlength(t, e) ? p.maxlength(t, n) : p.minlength(t, e)
                },
                textLength: function(t, e, n) {
                    return f.textMinlength(t, e) ? p.maxlength(t, n) : p.minlength(t, e)
                }
            }, o.prototype.isValid = function() {
                return 0 === this.errorCount && !this.ui.container.find(".validation-error:not(.hiding):visible").length
            }, u = function(e, n, i, o) {
                var r;
                if (i.find(".tooltip").addClass(e.data("tooltipClass") || n.tooltipClass), (r = t(e.data("validationsErrorTarget"))).length && r.is(":visible") || (r = o.find(":input:visible,label:visible"), r = e.is("div") ? r.first() : r.last()), r.length) return i.removeClass("hiding").show()
            }, o.prototype.unbind = function(e) {
                var n;
                return e = t(e)[0], (n = this.validatables.indexOf(e)) > -1 && this.validatables.splice(n, 1), this.errorCount -= +(t(e).data("errorCount") || 0), s(t(e)).removeClass("error"), l(t(e)).find(".validation-error").remove()
            }, o.prototype.bindAll = function() {
                var e, n, i, r, s, a, l, c, u;
                if (this.validatables = [], l = this, this.ui.container.find(this.selector).each(function() {
                        var e, n, i, r, s, a, c, u, d, h;
                        if ((h = (e = t(this)).data("validations")) && (l.validatables.push(this), !e.data("boundValidations"))) {
                            for (d = [], i = 0, r = (c = h.split(/\s+/)).length; i < r; i++) a = (u = (a = c[i]).split("("))[0], n = (n = u[1]) ? n.slice(0, -1).split(/,\s*/) : [], s = e.data("validations" + (a.charAt(0).toUpperCase() + a.slice(1)) + "Message") || o.validatorMessages[a], d.push(l.bindValidation({
                                input: this,
                                message: s,
                                test: o.validators[a],
                                validationArgs: n,
                                name: a,
                                custom: !1
                            }));
                            return d
                        }
                    }), this.options.customValidations)
                    for (a in s = this.options.customValidations)(u = s[a]) && ("object" != typeof u[0] && (u = [u]), this.ui.container.find(a).each(function() {
                        var e, n, i, o;
                        if (l.validatables.push(this), !t(this).data("boundCustomValidations")) {
                            for (i = [], e = 0, n = u.length; e < n; e++) "object" != typeof(o = u[e]) || o.length < 2 || i.push(l.bindValidation({
                                input: this,
                                message: o[0],
                                test: o[1],
                                name: o[2] || "*custom",
                                custom: !0
                            }));
                            return i
                        }
                    }));
                for (e = [], r = (c = this.validatables).length, n = 0; n < r;) {
                    for (i = n + 1; i < r;) c[n] === c[i] && (i = ++n), i++;
                    e.push(c[n]), n++
                }
                return this.validatables = e, this
            }, l = function(e) {
                var n, i;
                return (i = e.data("validationsErrorContainer")) ? t(i) : e.is("div:not(.validation-error)") ? e : (n = e.closest(".col-form-right,.col-form-offset,.form-group")).length ? n : e.parent()
            }, s = function(e) {
                var n;
                return (n = t(e.data("validationsErrorBorder"))).length ? n : (n = t(e.data("validationsErrorTarget"))).length ? n : e.is(":checkbox,:radio") ? e.parent() : e.is("div") ? e.find("> label") : e
            }, c = function(t) {
                return t.prop("name") || (t = t.parent().find("[name]")), t.is(":checkbox,:radio") ? t.prop("checked") : t.val()
            }, o.prototype.clearErrors = function() {
                var e, n, i, o, r, s, a;
                for (this.ui.container.find(".validation-error").each(function() {
                        return t(this).parent().find(".error").removeClass("error"), t(this).remove()
                    }), this.errorCount = 0, n = 0, i = (s = this.validatables).length; n < i; n++)
                    for (e = s[n], t(e).data("errorCount", 0), r = 0, o = (a = t(e).data("boundValidations")).length; r < o; r++) delete a[r].wasValid;
                return this
            }, o.prototype.validateField = function(e) {
                var n, i, o, r, s, a;
                return n = t(e.input), this.fire("beforeValidate", {
                    validation: e
                }), n.trigger("beforeValidation"), (s = n.is(":input") ? [c(n)] : n.find(":input:not(.fake)").map(function() {
                    return c(t(this))
                }).toArray()).push.apply(s, e.args), o = !!n.prop("disabled") || e.test.apply(e.input, s), "string" != typeof(r = e.message) && (r = r.apply(e.input, s)), (a = e.wasValid) !== o && (e.wasValid = o, o ? !1 === a && (this.errorCount -= 1, n.data("errorCount", (n.data("errorCount") || 0) - 1)) : (this.errorCount += 1, n.data("errorCount", (n.data("errorCount") || 0) + 1))), i = o ? "fieldValid" : "fieldInvalid", this.fire(i, {
                    valid: o,
                    message: r,
                    target: e.input
                }), o
            }, o.prototype.bindValidation = function(e) {
                var n, i, o, r, s, a;
                return null == e && (e = {}), n = t(e.input), s = this, a = {
                    input: e.input,
                    message: e.message,
                    test: e.test,
                    args: e.validationArgs || [],
                    name: e.name
                }, r = function() {
                    return s.validateField(a)
                }, o = n.is(":input") ? n : n.find(":input"), n.data("validationsWaitForSubmit") || (o.length > 1 ? (o.bind("blur", function() {
                    return setTimeout(function() {
                        if (0 === o.filter(":focus").length || t(a.input).data("errorCount") > 0) return r()
                    })
                }), o.bind("change", function() {
                    if (t(a.input).data("errorCount") > 0) return r()
                })) : (i = o).is("input:not(:checkbox),textarea") ? i.blur(r) : i.is(":checkbox,select") && i.bind("change blur", r)), n.data("boundValidations", n.data("boundValidations") || []), n.data("boundValidations").push(a), e.custom && (n.data("boundCustomValidations", n.data("boundCustomValidations") || []), n.data("boundCustomValidations").push(a)), n.is('input[type="text"],textarea,input[type="email"]') && n.focusin(function() {
                    var t;
                    return t = a.test, a.test = function() {
                        return !0
                    }, r(), a.test = t
                }), this
            }, o.scrollToFirstError = function(e) {
                var i, o, r, s;
                if (null == e && (e = t(document.body)), (i = e.find(".validation-error:visible").first()).length) return o = i.offset(), s = n.scrollTop(), r = n.height() - 85, o.top < s ? (t("html,body").animate({
                    scrollTop: Math.max(o.top - 115, 0)
                }, "slow"), n.triggerHandler("scroll")) : o.top > s + r ? (t("html,body").animate({
                    scrollTop: Math.min(o.top - 115, t(document).height() - r)
                }, "slow"), n.triggerHandler("scroll")) : void 0
            }, o.repositionErrors = function(e) {
                null == e && (e = document), t(e).find(".validation-error:visible:not(.hiding)").each(function() {
                    var e, n, i;
                    return e = t(this), i = function() {
                        return e.remove(), s(n).removeClass("error"), n.closest("div").removeClass("field-with-errors")
                    }, (n = e.parent().find(":input")).one("keydown", i), n.one("change", i), u(n, t.extend({}, o.defaults, e.data()), e, l(e))
                }), setTimeout(function() {
                    return o.scrollToFirstError(t(e))
                })
            }, o
        }(), window.App.FormValidator = o, window.App.jQueryWidget(o, "validate")
    }.call(this), (() => {
        class t {
            constructor(t) {
                this.modal = t.querySelector("#camVerifyModal"), this.video = t.querySelector("video#cap"), this.preview_frame = t.querySelector("div#preview_frame"), this.button_open = t.querySelector("button#open"), this.button_cap = t.querySelector("button#get_frm"), this.btn_reset = t.querySelector("[data-reset-frame]"), this.reselect = t.querySelector("[data-btn-change]"), this.btn_submit = t.querySelector("[data-btn-submit]"), this.spinner = window.App.loadingIndicator("big"), this.canvas = t.querySelector("#frame_capture"), this.canvas_ops = t.querySelector("#canvas_ops"), this.canvas_ops_ready = t.querySelector("#canvas_ops_ready"), this.input_base_64 = document.querySelector("input#img_frame"), this.input_base_64_grid = document.querySelector("input#img_grid"), this.frames = [], this.fInterval = [], this.form = document.querySelector("#new_verification_request"), null == this.form && (this.form = document.querySelector("#new_verification_request_comment")), -1 !== window.location.pathname.indexOf("verification_request") || (this.form.action = window.location), this.faceMode = !1, this.ctx = this.canvas.getContext("2d"), this.ctx_ops = this.canvas_ops.getContext("2d"), this.ctx_ops_ready = this.canvas_ops_ready.getContext("2d"), this.offscreen = !1, this.isCanvasSupported() ? ("undefined" == typeof OffscreenCanvas ? this.offscreen = t.querySelector("#offscreen") : this.offscreen = new OffscreenCanvas(300, 300), this.offscreen_ctx = this.offscreen.getContext("2d", {
                    willReadFrequently: !0
                }), this.stream = null, this.URL = null, this.label = "", this.timer = !1, this.camera_mode = ", mode: ?", this.image = new Image, this.timestamp = null, this.bindEvents()) : alert("Please update your browser")
            }
            constraints() {
                return {
                    audio: !1,
                    video: {
                        width: {
                            ideal: 1920
                        },
                        height: {
                            ideal: 1080
                        },
                        facingMode: !1 === this.faceMode ? "environment" : "user"
                    }
                }
            }
            bindEvents() {
                function t() {
                    clearInterval(e), n.setAttribute("data-timer", 3)
                }
                let e;
                const n = document.querySelector("[data-timer]"),
                    i = () => {
                        let t = parseInt(document.querySelector("[data-timer]").getAttribute("data-timer"), 10) || 3;
                        const e = setInterval(() => {
                            --t > 0 ? document.querySelector("[data-timer]").setAttribute("data-timer", t) : (this.start_timer(2e3), this.capture_frame(!0), $(this.modal).removeClass("obscure"), clearInterval(e))
                        }, 1e3)
                    };
                $(this.modal).on("shown.bs.modal", function() {
                    $("#open .fa-spinner").hide(), $("#open .fa-video").show()
                }), $(this.modal).on("hidden.bs.modal", function() {
                    this.stream && (this.stream.getTracks().forEach(t => t.stop()), clearInterval(this.timer))
                }.bind(this)), this.video.onloadedmetadata = (() => {
                    this.video.play(), this.start_timer(250), this.button_cap.classList.remove("hidden"), $(this.modal).modal("show")
                }), this.button_open.onclick = (() => {
                    this.frames = [], this.fInterval = [], $("#open .fa-spinner").show(), $("#open .fa-video").hide(), this.stream && this.stream.getTracks().forEach(t => t.stop()), this.getMedia()
                }), this.button_cap.onclick = (() => {
                    this.video.srcObject && ($(this.modal).addClass("obscure"), i())
                }), this.btn_reset.onclick = (() => {
                    this.frames = [], this.fInterval = [], this.reset_frame(), t()
                }), $(this.modal).on("hide.bs.modal", () => {
                    this.reset_frame(), t()
                }), this.reselect.onclick = (() => {
                    this.frames = [], this.fInterval = [], this.reset_frame(), this.faceMode = !this.faceMode, clearInterval(this.timer), this.stream.getTracks().forEach(t => t.stop()), this.streamActions(), t()
                })
            }
            getMedia() {
                navigator.mediaDevices.getUserMedia(this.constraints()).then(t => {
                    navigator.mediaDevices.enumerateDevices().then(t => {
                        t.filter(t => "videoinput" == t.kind).length < 2 && document.querySelector("[data-btn-change]").classList.add("hidden")
                    }), this.stream = t;
                    let e = t.getVideoTracks()[0];
                    const n = e.getSettings();
                    n.facingMode && (this.camera_mode = ", mode: " + n.facingMode), this.label = e.label, this.video.srcObject = t
                })["catch"](t => {
                    console.error(`${t.name}: ${t.message}`)
                })
            }
            streamActions() {
                this.video.pause(), this.video.srcObject = null, this.getMedia()
            }
            start_timer(t) {
                clearInterval(this.timer), this.timer = setInterval(function() {
                    this.timeout_ops()
                }.bind(this), t)
            }
            timeout_ops() {
                this.capture_frame(!1)
            }
            reset_frame() {
                this.preview_frame.classList.add("hidden"), this.capture_frame(!1), this.button_cap.classList.remove("hidden"), this.btn_reset.classList.add("hidden"), this.btn_submit.disabled = !0, this.video.classList.remove("invisible")
            }
            capture_frame(t = !0) {
                let e = 800,
                    n = 800,
                    i = 0,
                    o = this.video.videoWidth / this.video.videoHeight,
                    r = Math.min(this.video.videoWidth, e),
                    s = Math.min(this.video.videoHeight, n);
                if (r / s > o ? r = Math.floor(s * o) : s = Math.floor(r / o), this.canvas.width = r, this.canvas.height = s, this.offscreen.width = r, this.offscreen.height = s, t) this.ctx.drawImage(this.video, 0, 0, r, s), this.input_base_64.value = this.canvas.toDataURL("image/jpeg", .7), null == document.getElementById("preview_img") ? (this.image.id = "preview_img", this.image.src = this.input_base_64.value, this.preview_frame.appendChild(this.image), this.preview_frame.classList.remove("hidden"), this.video.classList.add("invisible")) : (this.image.src = this.input_base_64.value, this.preview_frame.classList.remove("hidden"), this.video.classList.add("invisible")), this.canvas_ops_ready.width = 3 * r, this.canvas_ops_ready.height = 3 * s, this.ctx_ops_ready.drawImage(this.canvas_ops, 0, 0), this.input_base_64_grid.value = this.canvas_ops_ready.toDataURL("image/jpeg", .7), this.button_cap.classList.add("hidden"), this.btn_reset.classList.remove("hidden"), this.btn_submit.removeAttribute("disabled");
                else {
                    null !== this.timestamp ? (i = (new Date - this.timestamp) / 1e3, this.fInterval.push(i)) : this.fInterval.push(0), this.timestamp = new Date, this.offscreen_ctx.drawImage(this.video, 0, 0, r, s), this.offscreen_ctx.strokeStyle = "yellow", this.offscreen_ctx.strokeRect(1, 1, r - 1, s - 1), this.frames.push(this.offscreen_ctx.getImageData(0, 0, r, s)), this.frames = this.frames.slice(-10), this.fInterval = this.fInterval.slice(-10), this.canvas_ops.width = 3 * r, this.canvas_ops.height = 3 * s;
                    let t = 0;
                    t: for (let e = 0; e < 3; e += 1)
                        for (let n = 0; n < 3; n += 1) {
                            if (this.ctx_ops.putImageData(this.frames[t], r * n, s * e), this.paintSimilarity(t, n, e, r, s), this.frames.length - 1 === t) break t;
                            t++
                        }
                    this.ctx_ops.font = "14px Helvetica, Arial, sans-serif", this.ctx_ops.fillStyle = "#0000005e", this.ctx_ops.fillRect(2, 3 * s - 20, r / 2, 20), this.ctx_ops.fillStyle = "yellow", this.ctx_ops.fillText(this.label + this.camera_mode, 10, 3 * s - 5), 9 === this.frames.length && this.start_timer(1e3)
                }
            }
            paintSimilarity(t, e, n, i, o) {
                if (t > 0) {
                    let r = this.calcSimilar(this.frames[t - 1], this.frames[t]);
                    this.ctx_ops.fillStyle = "#0000005e", this.ctx_ops.fillRect(i + i * e - 49, o * n, 49, 100 === r ? 35 : 20), this.ctx_ops.font = "14px Helvetica, Arial, sans-serif", this.ctx_ops.fillStyle = "yellow", this.ctx_ops.fillText(this.fInterval[t].toFixed(2) + "s", i + i * e - 37, o * n + 15), 100 === r && (this.ctx_ops.fillStyle = "#FF4F4F", this.ctx_ops.fillText("Same!", i + i * e - 46, o * n + 31))
                }
            }
            calcSimilar(t, e) {
                let n = t.data.length / 4,
                    i = 0;
                for (let n = 0; n < t.data.length; n += 4) {
                    Math.abs(t.data[n] - e.data[n]) + Math.abs(t.data[n + 1] - e.data[n + 1]) + Math.abs(t.data[n + 2] - e.data[n + 2]) > 0 && i++
                }
                return 100 - i / n * 100
            }
            isCanvasSupported() {
                const t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }
        }
        App.onPageLoad(() => {
            const e = document.querySelector(".video_capture");
            null !== e && (navigator.mediaDevices || navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(n => {
                if (n.some(t => "videoinput" === t.kind)) {
                    const n = new t(e);
                    document.addEventListener("turbolinks:before-cache", () => {
                        n.stream && n.stream.getTracks().forEach(t => t.stop())
                    })
                } else document.addEventListener("click", function(t) {
                    t.target.closest("button#open") && alert("Camera not available. Please enable your camera and reload the page.")
                }, !1)
            }) : alert("Please update your browser"))
        })
    })(),
    function() {
        var t, e, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            },
            r = {}.hasOwnProperty;
        t = window.jQuery, e = window.DOMBrew, n = window.App.EventModel, i = function() {
            function i(n, i) {
                var o, r, s;
                this.options = i, this.serviceUrl = i.serviceUrl, this.ui = {
                    url: n.find("input.video-url"),
                    add: n.find(".embed"),
                    rm: n.find(".remove").hide(),
                    rmField: n.find("input.rm-video"),
                    preview: t(e(".video-preview").dom()).appendTo(n)
                }, o = this, r = function() {
                    return o.replaceVideo(o.ui.url.val().trim())
                }, this.ui.rm.click(function() {
                    return o.removeVideo(), t("input.video-url").removeClass("error"), t("#video-embedder").find(".validation-error").fadeOut(250)
                }), this.ui.add.click(r), this.ui.url.change(function() {
                    return this.value && o.ui.rmField.val(null)
                }).keypress((s = this, function(t) {
                    if (13 === t.keyCode) return t.stopPropagation(), t.preventDefault(), s.ui.add.triggerHandler("click"), !1
                })), this.urlWas = "", r()
            }
            return o(i, n), i.events = ["videoChanged"], i.defaults = {
                serviceUrl: null,
                width: 640,
                height: 500
            }, i.prototype.replaceVideo = function(e) {
                var n;
                e && e !== this.urlWas && (this.ui.rmField.val(null), this.ui.add.hide(), this.ui.url.prop("readonly", !0), e = this.serviceUrl + "?url=" + encodeURIComponent(this.ui.url.val().trim()) + "&width=" + this.options.width + "&height=" + this.options.height, this.ui.preview.empty().append(window.App.loadingIndicator("big")).load(e, (n = this, function(i, o) {
                    return n.ui.add.removeClass("disabled"), "error" === o ? (n.ui.preview.empty().append('<p class="alert alert-warning">Error</p>'), n.ui.url.prop("readonly", !1), void n.ui.add.show()) : (n.ui.rm.show(), t("#video-embedder .video-preview").children().is(".validation-error") && t("input.video-url").addClass("error"), /class=['"][^"']*(error|alert-warning)[^"']*['"]/.test(i) && (n.removeVideo(!1), e = "", n.ui.url.get(0).focus()), e !== n.urlWas && n.fire("videoChanged", {
                        urlWas: n.urlWas,
                        url: e
                    }), n.urlWas = e)
                })))
            }, i.prototype.removeVideo = function(t) {
                null == t && (t = !0), this.ui.rmField.val(1), this.ui.rm.hide(), this.ui.add.show(), this.ui.url.prop("readonly", !1), t && this.ui.preview.empty(), this.fire("videoChanged", {
                    urlWas: this.urlWas,
                    url: ""
                }), this.urlWas = ""
            }, i
        }(), window.App.jQueryWidget(i, "videoEmbedder")
    }.call(this),
    function() {
        window.App.onPageLoad(function() {
            return $("[navbar-affix]").each(function() {
                var t, e, n;
                return (e = $(this)).affix({
                    offset: {
                        top: e.prevAll().map(function() {
                            return $(this).outerHeight()
                        }).toArray().reduce(function(t, e) {
                            return t + e
                        }, 0)
                    }
                }), n = e.outerHeight(), t = $("#content"), e.on("affix.bs.affix", function() {
                    return t.css("padding-top", n + "px")
                }), e.on("affixed-top.bs.affix", function() {
                    return t.css("padding-top", 0)
                })
            })
        })
    }.call(this),
    function() {
        var t, e, n, i;
        t = jQuery, n = function() {
            return t("form[data-newsletter-location-subscribe]").each(function() {
                var e;
                return (e = t(this)).submit(function(n) {
                    var i;
                    return n.preventDefault(), (i = t.post(e.attr("action"), e.serializeArray())).done(function(t) {
                        window.App.InterruptXhrRedirectTo(t)
                    }), i.fail(function(n) {
                        return e.replace(t('<p class="text-danger"></p>').text((null != n ? n.responseText : void 0) || (null != n ? n.statusText : void 0) || n))
                    })
                })
            })
        }, i = function() {
            var n;
            if ((n = t("[data-newsletter-modal-toggle]")).length) return n.ajaxOverlay({
                modalDialogClass: "modal-sm",
                beforeInit: e,
                close: function() {
                    if (this.ui.overlay.find("[data-modal-notice-response-btn]").length) return Turbolinks.visit(document.location.href)
                }
            })
        }, e = function() {
            return t("[data-newsletter-settings]").each(function() {
                var e, n, i;
                if (!(e = t(this)).data("bound")) return e.data("bound", !0), e.find(".typeahead-city:not(.no-typeahead)").typeaheadCity(), i = e.attr("data-city-field-template"), t("a[data-newsletter-add-city]").click(function(e) {
                    return e.preventDefault(), t(i.replace(/replaced_by_js/g, Date.now())).insertBefore(this.parentNode).find('input[type="text"]').typeaheadCity().focus(), n()
                }), e.on("click", ".delete-location", function() {
                    var n;
                    return (n = t(this).closest(".input.city")).find('[name$="[_destroy]"]').appendTo(e).val(1), n.remove()
                }), (n = function() {
                    var e;
                    return e = 300, t(".twitter-typeahead").each(function() {
                        return t(this).css("z-index", e), e -= 1
                    })
                })(), !0
            })
        }, window.App.onPageLoad(function() {
            return n(), i(), e()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            var e;
            return e = t('input[name="account[display_name]"]'), t('input[name="account[email]"]').change(function() {
                return e.val(t(this).val().replace(/\@.*/, "").replace(/^\d+/, "").replace(/[^\w \d_]/g, ""))
            })
        })
    }.call(this),
    function() {
        var t, e, n;
        t = window.jQuery, n = null, e = function() {
            return n = document.getElementById("activity-stream-load-more")
        }, window.App.onPageLoad(function() {
            var i, o, r, s;
            if ((o = t("form[activity-nav-form]")).length && ((i = o.find('[name="q[city_url]"]')).on("city:select", function() {
                    return o.triggerHandler("submit")
                }), o.submit(function() {
                    var e;
                    return (e = i.data("ttSelectedUrl")) && o.attr("action", o.attr("action").replace(new RegExp("-" + window.app.location.url + "([-/_]|$)"), "-" + e + "$1")), o.find('[name="q[city_url]"]').prop("disabled", !0), t(document).one("turbolinks:before-cache", function() {
                        return i.prop("disabled", !1)
                    })
                })), e(), n) return r = t(n), s = function(i) {
                var o, a;
                return i.preventDefault(), a = r.prop("href"), o = window.App.loadingIndicator("big", {
                    "class": "margin-top"
                }), r.replaceWith(o), n = null, t.get(a, function(i) {
                    var a;
                    return a = t(i).toArray(), Element.prototype.replaceWith.apply(o.parentNode, a), e(), (r = t(n)).click(s)
                })
            }, r.click(s)
        }), document.addEventListener("turbolinks:before-cache", function() {
            return n = null
        }), document.addEventListener("scroll", function() {
            var t, e;
            if (n) return t = window.pageYOffset, e = window.innerHeight, document.body.offsetHeight - (t + e) < 3e3 ? n.click() : void 0
        })
    }.call(this),
    function() {
        var t;
        t = function() {
            return $.cookie("age_check", "confirmed"), document.cookie = "age_check=confirmed", $("#age-check").modal("hide")
        }, window.App.onPageLoad(function() {
            var e, n, i;
            if ((n = $("#age-check")).length && !$.cookie("age_check") && !/[?&]no-age-check/.test(document.location.href)) return e = n.find("input.typeahead-city"), i = (e.val() || "").toLowerCase(), e.on("city:select", t),
                function() {
                    return n.modal({
                        modalDialogClass: "modal-md",
                        backdrop: "static",
                        keyboard: !1,
                        show: !0
                    }).find("form").submit(function(o) {
                        return o.preventDefault(), t(), setTimeout(function() {
                            var t;
                            if ((t = (e.val() || "").toLowerCase()) && t !== i) return n.find("form").submit()
                        })
                    }).end().find("[data-age-confirm-btn]").on("click", function() {
                        return t()
                    })
                }()
        })
    }.call(this),
    function() {
        var t, e, n;
        t = window.jQuery, window.DOMBrew, t.fn.selectBox = function() {
            return this.each(function() {
                var e;
                if (!(e = t(this)).data("select2")) return e.select2({
                    minimumResultsForSearch: 12
                }), e.data("validationsErrorTarget", e.parent().find(".select2-container"))
            }), this
        }, e = function(t, e, n) {
            return t ? n(t.text).split(" ")[0] : void 0
        }, t.fn.callingCodeCombobox = function() {
            return this.each(function() {
                var n;
                if (!(n = t(this)).data("select2")) return n.select2({
                    containerCssClass: "calling-code-select-container",
                    dropdownCssClass: "calling-code-select-dropdown",
                    formatSelection: e
                })
            })
        }, t.fn.currencyCombobox = function() {
            return this.each(function() {
                var n;
                if (!(n = t(this)).data("select2")) return n.select2({
                    containerCssClass: "currency-select-container",
                    dropdownCssClass: "currency-select-dropdown",
                    formatSelection: e
                })
            })
        }, t.fn.cityCombobox = function() {
            return this.each(function() {
                var e, n;
                return (n = t(this)).combobox({
                    canBeBlank: !1,
                    renderInputText: function(t) {
                        return t && t.value ? t.text.split(" (")[0] : ""
                    },
                    selectTextOnInputFocus: !1,
                    inputFocus: function(e) {
                        return t(e.target).val(""), !0
                    },
                    listUpdated: function() {
                        if (!this.ui.list.children().length) return this.ui.list.html("<em>No locations found...</em>")
                    }
                }), (e = n.data("combobox").ui.input).before('<i class="fa fa-map-marker-alt"></i>'), e.parent().find("i.dropdown").remove()
            })
        }, n = function() {
            return t("select.combobox").select2({
                minimumResultsForSearch: 12
            }), t("select[data-select-box],select.select-box").selectBox(), t("select.calling-code-combobox").callingCodeCombobox(), t("select[data-currency-combobox]").currencyCombobox(), t("select.city-combobox").cityCombobox(), t(":input[data-select-tags]").selectBox(), t(".select-box-display").each(function() {
                return t(this).parent().disableSelection()
            })
        }, window.App.onPageLoad(n), t(document).bind("ajaxComplete", n)
    }.call(this),
    function() {
        window.App.onPageLoad(function() {
            if (Array.prototype.forEach.call(document.querySelectorAll("[show-contact-us-form]"), function(t) {
                    return t.addEventListener("click", function() {
                        return document.querySelector(".large-message-form-wrapper").style.display = "block"
                    })
                }), "#contact-us-form-open" === location.hash) return document.querySelector(".large-message-form-wrapper").style.display = "block", document.querySelector(".intro").style.display = "none"
        }), "/contact-us" === location.pathname && document.querySelectorAll("form div.has-error").length > 0 && (document.querySelector(".large-message-form-wrapper").style.display = "block")
    }.call(this),
    function() {
        function t() {
            const t = this;
            for (const e of t.getAttribute("data-track").split(" ")) {
                const t = e.split("/");
                t.unshift("send", "event"), window.ga ? ga.apply(null, t) : window.console && window.JSON && console.log(`mock ga(${t.map(function(t){return JSON.stringify(t)}).join(", ")})`)
            }
        }

        function e() {
            jQuery("form.track-event").submit(t), jQuery("a.track-event").click(t)
        }
        window.App.onPageLoad(e), jQuery(document).bind("ajaxComplete", e)
    }(),
    function() {}.call(this),
    function() {
        window.App.onPageLoad(function() {
            return $(".home-location-select .typeahead-city").on("city:select", function(t) {
                return $(t.target).closest("form").find(":submit").prop("disabled", !0).addClass("disabled"), Turbolinks.visit("/?location=" + t.target.value)
            })
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t("#inbound-links textarea").focus(function() {
                var e;
                return (e = t(this)).select(), e.mouseup(function() {
                    return e.unbind("mouseup"), !1
                })
            })
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".ajax-form").ajaxForm()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".ajax-overlay").ajaxOverlay()
        }), t(document).bind("ajaxComplete", function() {
            return t(".ajax-overlay").ajaxOverlay()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".check_boxes").checkBoxList()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".embedded-tweets").embeddedTweets()
        })
    }.call(this),
    function() {
        window.App.onPageLoad(function() {
            var t, e, n, i, o;
            for (o = [], e = 0, n = (i = document.querySelectorAll(".js-only")).length; e < n; e++) t = i[e], o.push(t.classList.remove("js-only"));
            return o
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".multi-image-uploader").multiImageUploader()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t("input.picture-field").pictureField()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".star-rating").starRating()
        }), document.addEventListener("turbolinks:before-cache", function() {
            return t(".star-rating").starRating("destroy")
        }), t(document).bind("ajaxComplete", function() {
            return t(".star-rating").starRating()
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".toggler").toggler()
        })
    }.call(this),
    function() {
        var t, e, n;
        t = window.jQuery, e = window.App.FormValidator, n = function() {
            return t("form.validate").validate(), e.repositionErrors()
        }, window.App.onPageLoad(n), t(document).bind("ajaxComplete", n)
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t(".video-embedder").videoEmbedder()
        })
    }.call(this),
    function() {
        var t, e, n;
        t = window.jQuery, e = window.DOMBrew, n = function(t) {
            var e;
            return (e = document.createElement("script")).src = t, document.querySelector("head").appendChild(e)
        }, window.App.onPageLoad(function() {
            return t("a.contact-website , a.contact-onlyfans").on("click", function() {
                return n(this.getAttribute("data-click-stat"))
            }), t("a.girl-action").on("click", function(n) {
                var i, o;
                return n.preventDefault(), o = this, t("a.girl-action").each(function() {
                    var e;
                    if (this !== o) return (e = t(this).data("actionForm")) ? t(e).hide() : void 0
                }), t(this).data("actionForm") ? t(t(this).data("actionForm")).slideToggle(300) : (i = t(e("div").append(window.App.loadingIndicator("medium")).dom()).load(this.href, function() {
                    return t(".star-rating").starRating(), i.find("form").validate().ajaxForm().find(".select-box").selectBox()
                }), t(this).parent().after(i), t(this).data("actionForm", i[0]))
            })
        })
    }.call(this);
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
if (function() {
        var t = window.I18n,
            e = window.Rails,
            n = "active",
            i = "data-is-listing-bookmarked",
            o = !!window.app.accountEmail,
            r = function() {
                function r(t, e) {
                    var n = this;
                    _classCallCheck(this, r), this.dom = {
                        toggle: t,
                        toggleText: t.querySelector("span.sr-only")
                    }, this.isBookmarkedUpdatedCallback = e, this.isBookmarked = "yes" === t.getAttribute(i), o ? (this.updateView(), this.dom.toggle.addEventListener("click", function(t) {
                        return n.handleClick(t)
                    })) : jQuery(t).ajaxOverlay({
                        overlayClass: "user-action-modal"
                    })
                }
                return _createClass(r, [{
                    key: "updateView",
                    value: function() {
                        this.isBookmarked ? (this.dom.toggle.setAttribute(i, "yes"), this.dom.toggle.classList.add(n), this.dom.toggleText.textContent = t.t("listings_show.remove_bookmark")) : (this.dom.toggle.setAttribute(i, "no"), this.dom.toggle.classList.remove(n), this.dom.toggleText.textContent = t.t("listings_show.add_bookmark"))
                    }
                }, {
                    key: "handleClick",
                    value: function(t) {
                        var n = this;
                        t.preventDefault(), this.setLoading(!0), fetch(this.dom.toggle.href, {
                            credentials: "same-origin",
                            headers: {
                                "Content-Type": "application/json",
                                "X-CSRF-Token": e.csrfToken()
                            }
                        }).then(function(t) {
                            if (t.ok) return t.json();
                            throw new Error("Something went wrong (" + t.statusText + ")")
                        }).then(function(t) {
                            n.setLoading(!1), n.setIsBookmarked(t.added), n.dom.toggle.blur(), n.isBookmarkedUpdatedCallback(n.isBookmarked)
                        })["catch"](function(t) {
                            n.setLoading(!1), console.error(t)
                        })
                    }
                }, {
                    key: "setIsBookmarked",
                    value: function(t) {
                        this.isBookmarked = t, this.updateView()
                    }
                }, {
                    key: "setLoading",
                    value: function(t) {
                        t ? this.dom.toggle.classList.add("loading") : this.dom.toggle.classList.remove("loading")
                    }
                }]), r
            }(),
            s = function() {
                function t(e) {
                    var n = this;
                    _classCallCheck(this, t), this.toggles = Array.prototype.map.call(e, function(t) {
                        var e = new r(t, function(t) {
                            return n.handleChange(e, t)
                        });
                        return e
                    })
                }
                return _createClass(t, [{
                    key: "handleChange",
                    value: function(t, e) {
                        var n = !0,
                            i = !1,
                            o = undefined;
                        try {
                            for (var r, s = this.toggles[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                                var a = r.value;
                                a !== t && a.setIsBookmarked(e)
                            }
                        } catch (l) {
                            i = !0, o = l
                        } finally {
                            try {
                                !n && s["return"] && s["return"]()
                            } finally {
                                if (i) throw o
                            }
                        }
                    }
                }]), t
            }();
        window.App.onPageLoad(function() {
            new s(document.querySelectorAll("a.listing-bookmark-toggle"))
        })
    }(), function() {
        var t, e, n, i;
        App.FormValidator, t = window.DOMBrew, e = window.App.Gender, i = function(t) {
            return isNaN(+t) && !/[.,:!; ]/.test(t)
        }, n = function(t) {
            var e, n, o, r, s;
            for (r = o = t.length, n = 0, s = 0; n < o;) e = t.charAt(n), i(e) ? e === e.toUpperCase() && s++ : r--, n++;
            return 0 !== r && s / r > .8
        }, window.App.onPageLoad(function() {
            var i, o, r, s, a, l, c, u, d, h, p, f, m, g, v, y, b, w, x;
            if ((c = $("form.listing")).length) return /(new|edit)/.test(location.href) && (f = function() {
                var t, e;
                if ((t = $('[name="listing[city_url]"]').val()) && !/\.{3}/.test(t) && $(".validation-error:visible").length) return e = location.href + (/\?/.test(location.href) ? "&" : "?") + "from-redir", location.href = e
            }, /[?&]from-redir/.test(location.href) || setTimeout(f, 1200)), (g = navigator.userAgent.match(/Firefox\/(\d+)/)) && +g[1] < 26 && $("#listing_name").focus(function() {
                if (!$(this).val()) return $(this).prop("placeholder", null)
            }), w = function() {
                var t, e, n, i, o, r;
                if (c = $(this).closest("form"), (t = $("#listing_contact_email_address")).prop("disabled", !this.checked).toggleClass("disabled", !this.checked), !this.checked && !t.val().trim().length) {
                    for (o = [], e = 0, n = (i = t.data("boundValidations")).length; e < n; e++) r = i[e], o.push(c.data("validate").validateField(r));
                    return o
                }
            }, (s = $("form.listing #show-contact-form")).change(w), w.call(s[0]), x = function() {
                return $(this).closest(".inline-group").find(":input:not(:checkbox,:hidden)").prop("disabled", !this.checked).toggleClass("disabled", !this.checked)
            }, $("#fees :checkbox").change(x).each(x), v = 6, m = function(t) {
                return t.find("select").select2()
            }, y = function() {
                var t;
                return t = u.filter(":visible").length < v, i.toggle(t)
            }, u = $("[language-fields]"), d = $("[language-fields-parent]"), u.each(function() {
                return m($(this))
            }), i = $("[add-language-btn]"), p = i.data("template"), y(), i.click(function(t) {
                var e;
                return t.preventDefault(), e = $(p.replace(/new_record_tpl_id/g, +new Date)), m(e), d.append(e), u = $("[language-fields]"), y()
            }), 0 === u.length && i.click().click(), d.on("click", "[rm-lang-field]", function() {
                var t;
                return (t = $(this).parent()).find("input.destroy").val(!0), t.hide(), y()
            }), (r = $("div.phone_number:last")).find('input[type="text"]:last').val() || (r.hide(), (h = $(t("a#add-phone", "+ Add another phone", {
                href: "#add-alternate-phone",
                "class": "btn btn-dark"
            }).dom())).click(function(t) {
                return t.preventDefault(), h.hide(), r.show(150)
            }), r.before(h)), o = $(t("p.alert.alert-warning").append(t.text("Please reduce the amount of CAPITAL LETTERS you are using. Listings in CAPS look less professional and tend to receive fewer enquiries.")).dom()), $("#listing_description").bind("change blur", function() {
                var t, e, i;
                return t = $(this), n(t.val()) ? (e = t.offset(), i = Math.round(.8 * t.width()), o.appendTo(document.body).show().css({
                    position: "absolute",
                    maxWidth: i,
                    left: e.left + t.width() / 2 - i / 2,
                    top: e.top + 60
                })) : o.remove()
            }), $("#listing_description").focus(function() {
                return o.remove()
            }), $(".price > select").change(function() {
                var t;
                return t = $(this), $(".price > select").each(function() {
                    if (!t.is(this)) return $(this).val(t.val())
                })
            }), $(".price > input").blur(function() {
                var t;
                return (t = $(this)).val((t.val() || "").replace(/\.00\b/, "").replace(/\D/g, ""))
            }), $(".price > input, .price > select").change(function() {
                var t, e;
                if (e = (t = $(this).closest(".form-group")).find("> input").val()) return $.ajax({
                    type: "GET",
                    url: $("#fees").data("outlierPriceCheckUrl"),
                    data: {
                        value: e,
                        currency: t.find("> select").val(),
                        gender_id: +$('[name="listing[gender_id]"]:checked').val(),
                        location: $('[name="listing[city_url]"]').val()
                    }
                }).done(function(e) {
                    return t.parent().parent().find(".average-price-alert").toggle(e.outlier_price)
                }).fail(function() {
                    throw new Error("Something went wrong")
                })
            }), l = $("#listing_cup_size_id"), a = l.parent().parent(), (b = function() {
                var t;
                return t = +$('[name="listing[gender_id]"]:checked').val() !== e.maleId, a.toggle(t), l.prop("disabled", !t)
            })(), $('[name="listing[gender_id]"]').change(b), c.validate().data("validate").bind("submitSuccess", function() {
                var t, e, n;
                if (e = $('[name="listing[gender_id]"]:checked'), t = $('[name="listing[city_url]"]'), /\/new/.test(location.href) && (n = t.val() + ":" + e.next().text(), "undefined" != typeof ga && null !== ga)) return ga("send", "event", "new-listing", "submit", n)
            })
        })
    }.call(this), function() {
        var t, e;
        t = window.jQuery, e = window.DOMBrew, window.App.onPageLoad(function() {
            var n, i, o, r, s;
            if ((r = t("#browse-search")).length) return r.submit(function() {
                var e, n, i, o;
                return o = t(this), i = o.find('[name="q[price_search_lteq_currency_eq]"]'), +o.find('[name="q[price_search_lteq]"]').val() || i.prop("disabled", !0), (n = (e = o.find('[name="q[city_name_eq]"]')).data("ttSelectedUrl")) && o.attr("action", o.attr("action").replace(new RegExp("-" + window.app.location.url + "([-/_]|$)"), "-" + n + "$1")), e.prop("disabled", !0), t(document).one("turbolinks:before-cache", function() {
                    return e.add(i).prop("disabled", !1)
                })
            }), (n = t("#search-more")).length && (o = t("#toggle-search-more").find(".fa"), s = function(t) {
                return t ? o.addClass("fa-minus").removeClass("fa-plus") : o.addClass("fa-plus").removeClass("fa-minus")
            }, n.on("shown.bs.modal", function() {
                return s(!0)
            }).on("hidden.bs.modal", function() {
                return s(!1)
            }), s(!1), t("form[data-proxy-form]").each(function() {
                var n, i;
                return n = t(this), i = t(n.data("target")), n.submit(function(t) {
                    return t.preventDefault(), i.triggerHandler("submit")
                }), i.submit(function() {
                    var o, r;
                    return o = t(e(function() {
                        var t, i, o, s;
                        for (s = [], t = 0, i = (o = n.serializeArray()).length; t < i; t++) r = o[t], s.push(e("input", {
                            type: "hidden",
                            name: r.name,
                            value: r.value
                        }));
                        return s
                    }()).dom()), t(document).one("turbolinks:before-cache", function() {
                        return o.remove()
                    }), i.append(o)
                })
            }), t("[data-close-modal]").click(function() {
                return t(this).closest(".modal").modal("hide")
            }), (i = t("#q_city_name_eq")).attr("name", "q_c_n_eq"), i.on("city:select", function() {
                return i.attr("name", "q[city_name_eq]"), r.triggerHandler("submit")
            })), r.turbolinksForm()
        })
    }.call(this), function() {
        window.App.onPageLoad(function() {
            return $("#show-buy-more a").click(function(t) {
                return t.preventDefault(), $("#show-buy-more").remove(), $("#buy-credits").find("h2").removeClass("purchasing-hidden"), $("#buy-credits .purchasing").show(150)
            })
        })
    }.call(this), function() {
        var t, e;
        t = window.jQuery, e = window.DOMBrew, window.App.onPageLoad(function() {
            var n;
            return t("#dbbnpromo .close").click(function() {
                var t;
                return (t = new Date).setDate(t.getDate() + 7), document.cookie = "dbbnpromo=dismissed; expires=" + t.toUTCString() + "; path=/"
            }), t("a.reply-to-review").click(function(n) {
                var i;
                return n.preventDefault(), i = t(e("div").append(window.App.loadingIndicator("medium")).dom()).load(this.href, function() {
                    return i.find("form").validate().ajaxForm()
                }), this.replaceWith(i.get(0))
            }), t("#upgradeCall").modal({
                modalDialogClass: "modal-lg",
                show: !0
            }), (n = t("#listing-form-submit")).click(function(e) {
                var i, o;
                if (o = t("#listing_city_url").val(), e.target.getAttribute("data-current-city") !== o) return e.preventDefault(), i = e.target.getAttribute("data-listing-id"), t.get("/my-profile/" + i + "/recalculate_enhancement/" + o).done(function(e) {
                    var i;
                    return null != e ? ((i = document.createElement("div")).innerHTML = e, document.body.appendChild(i), t(i.firstChild).modal()) : n.closest("form").submit()
                })
            }), t(document).on("click", "#price_difference_continue", function() {
                return n.closest("form").submit()
            })
        })
    }.call(this), function() {
        NProgress.configure({
            speed: 200,
            trickleRate: .03,
            trickleSpeed: 300,
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="np-spinner" role="spinner"><div class="np-spinner-icon"></div></div>'
        }), document.addEventListener("turbolinks:request-start", function() {
            return NProgress.start()
        }), document.addEventListener("turbolinks:request-end", function() {
            return NProgress.done(), NProgress.remove()
        }), document.addEventListener("turbolinks:before-cache", function() {
            return NProgress.remove()
        })
    }.call(this), function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            var e;
            if (e = document.getElementById("old-browser-notice")) return t("#hide-ie-notice-forever").on("click", function() {
                return t(e).slideUp(300), t.cookie("hide_old_ie_notice", "yes")
            })
        })
    }.call(this), document.querySelector('[name="credit_card[csid]"]')) {
    var _$ = ["=", ";expires=", "(^| )", "=([^;]*)(;|$)", "", "", "ccpspay", "", "ccpspay", "ccpspay", "OLD", "script", "text/javascript", "UTF-8", "load", "onreadystatechange", "loaded", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "x", "", "", "&@", "csid"];

    function a(t, e) {
        var n = 180,
            i = new Date;
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), window.document.cookie = t + _$[0] + window.escape(e) + _$[1] + i.toGMTString()
    }

    function b(t) {
        var e, n = new RegExp(_$[2] + t + _$[3]);
        return (e = window.document.cookie.match(n)) ? window.unescape(e[2]) : null
    }

    function c() {
        for (var t = _$[4], e = 1; e <= 32; e++) {
            t += Math.floor(16 * Math.random()).toString(16)
        }
        return (t += (new Date).getTime()).toUpperCase()
    }
    var d = _$[5];

    function e(t, e) {
        var n = window.document.createElement(_$[11]);
        n.type = _$[12], n.charset = _$[13], n.src = t, n.addEventListener ? n.addEventListener(_$[14], function() {
            e()
        }, !1) : n.attachEvent && n.attachEvent(_$[15], function() {
            window.event.srcElement.readyState == _$[16] && e()
        }), window.document.body.appendChild(n)
    }
    null == (d = b(_$[6])) || d == _$[7] ? (d = a(_$[8], c()), d = b(_$[9])) : d += _$[10];
    var f = c(),
        g = _$[17];
    g = navigator.systemLanguage || window.navigator.systemLanguage || navigator.language;
    var h = _$[18];
    h = navigator.browserLanguage || window.navigator.browserLanguage || navigator.language;
    var i = _$[19];
    i = navigator.appCodeName || window.navigator.appCodeName;
    var j = _$[20];
    j = navigator.appMinorVersion || window.navigator.appMinorVersion;
    var k = _$[21];
    k = navigator.appName || window.navigator.appName;
    var l = _$[22];
    l = navigator.appVersion || window.navigator.appVersion;
    var m = _$[23];
    m = navigator.cookieEnabled || window.navigator.cookieEnabled;
    var n = _$[24];
    n = d;
    var o = _$[25];
    o = navigator.onLine || window.navigator.onLine;
    var p = _$[26];
    p = navigator.platform || window.navigator.platform;
    var q = _$[27];
    q = navigator.userAgent || window.navigator.userAgent;
    var r = _$[28];
    r = navigator.userLanguage || window.navigator.userLanguage;
    var s = _$[29];
    s = String(window.screen.fontSmoothingEnabled);
    var t = _$[30];
    t = String(window.screen.width + _$[31] + window.screen.height);
    var u = _$[32];
    u = String(window.screen.colorDepth);
    var v = new Array;
    v[0] = g, v[1] = h, v[2] = i, v[3] = j, v[4] = k, v[5] = l, v[6] = m, v[7] = n, v[8] = o, v[9] = p, v[10] = q, v[11] = r, v[12] = s, v[13] = t, v[14] = u, v[15] = (new Date).getTimezoneOffset() / 60 * -1, v[16] = window.location.host, v[17] = f, v[18] = _$[33];
    var w = v.join(_$[34]);
    window.document.getElementById(_$[35]).value = w.toUpperCase()
}(function() {
    var t, e, n, i;
    t = window.jQuery, window.DOMBrew, t(document), i = {
        history: !1,
        zoomable: !1,
        thumbAttr: "data-thumb-url"
    }, e = function() {
        var e;
        return (e = t(".pb-thumbnails")).length && e
    }, n = function() {
        var t;
        if (t = e()) return t.photobox(".pb-photo-link", i)
    }, window.App.onPageLoad(n), document.addEventListener("turbolinks:before-cache", function() {
        var t;
        if (t = e()) return t.photobox("destroy")
    })
}).call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            var e, n;
            return e = function(e) {
                return t(e).closest("div,ul").data("activeClass") || "checked"
            }, t(n = "input.boolean,input.radio_buttons,.toggle-li-radio input").change(function() {
                var n;
                return n = e(this), t(this).closest("div,ul").find("." + n).removeClass(n), t(this).parent().toggleClass(n, t(this).is(":checked"))
            }), t(n).filter(":checked").each(function() {
                return t(this).parent().addClass(e(this))
            }), t("li.radio").click(function(e) {
                if (!t(e.target).is("label,:radio")) return t(this).find(":radio").click()
            })
        })
    }.call(this),
    function() {
        var t;
        t = window.jQuery, window.App.onPageLoad(function() {
            return t("a.share-on-twitter").click(function(e) {
                var n;
                return n = t(e.target), t.ajax({
                    async: !1,
                    type: "POST",
                    url: "/t",
                    data: {
                        url: n.data("itemLink") || location.pathname
                    },
                    dataType: "text",
                    success: function(t) {
                        return "undefined" != typeof _gaq && null !== _gaq && _gaq.push(["_trackSocial", "twitter", "escort-share"]), n.attr("href", "https://twitter.com/home?status=" + encodeURIComponent("I am now featured on Massage Republic - " + t))
                    }
                })
            }), t("a.share-on-facebook").click(function() {
                if ("undefined" != typeof _gaq && null !== _gaq) return _gaq.push(["_trackSocial", "facebook", "escort-share"])
            }), t("a.share-on-google-plus").click(function() {
                if ("undefined" != typeof _gaq && null !== _gaq) return _gaq.push(["_trackSocial", "google-plus", "escort-share"])
            })
        })
    }.call(this),
    function() {
        function t(t) {
            var e = {};
            return Array.prototype.forEach.call(t.querySelectorAll(".validation-error:not(.hiding)"), function(t) {
                var n = t.parentNode.querySelector('input:not([type="hidden"]),textarea,select').name;
                n && (e[n] = t.textContent)
            }), e
        }

        function e(t) {
            var e = {};
            return Array.from(new FormData(t).entries()).forEach(function(t) {
                for (var n = t[0], i = t[1], r = n.match(o), s = e, a = 0; a < r.length - 1; ++a) {
                    var l = r[a];
                    if ("" === l) return void(console.warn && console.warn("non tail array position in " + n));
                    s[l] = s[l] || ("" === r[a + 1] ? [] : {}), s = s[l]
                }
                var c = r[r.length - 1];
                if ("" === c) {
                    if (!Array.isArray(s)) return void(console.warn && console.warn("array/object conflict in " + n));
                    s.push(i)
                } else {
                    if (Array.isArray(s)) return void(console.warn && console.warn("object/array conflict in " + n));
                    s[c] = i
                }
            }), e
        }

        function n() {
            return window.FormData && FormData.prototype.entries && navigator.sendBeacon && Array.from && Array.isArray
        }
        var i = window.Rails,
            o = /[a-zA-Z0-9_]+|(?=\[])/g;
        window.App.recordSubmit = function(o, r, s) {
            if (!n()) return !0;
            var a = e(o);
            s && (a = _defineProperty({}, s, a[s]));
            var l = t(o),
                c = new FormData;
            return c.append("authenticity_token", i.csrfToken()), c.append("submit_attempt", JSON.stringify({
                name: o.id.replace(/_\d+$/, ""),
                data: a,
                errors: l,
                status: r
            })), navigator.sendBeacon("/api/record_submit_attempt", c), !0
        }
    }(),
    function() {
        var t, e;
        t = window.jQuery, e = function() {
            return t('[data-toggle="tooltip"]').each(function() {
                var e;
                if ((e = t(this)).tooltip(), this.getAttribute("destroy-on-init")) return e.tooltip("destroy")
            }), t('[data-toggle="html-tooltip"]').each(function() {
                return t(this).tooltip({
                    html: !0
                })
            }), t(".help-tooltip").each(function() {
                return t(this).tooltip({
                    placement: this.getAttribute("data-placement") || "right",
                    html: !0
                })
            })
        }, window.App.onPageLoad(e), t(document).bind("ajaxComplete", e), document.addEventListener("turbolinks:load", function() {
            t('[data-toggle="tooltip"]').next(".tooltip.in").length && t('[data-toggle="tooltip"]').next(".tooltip.in").remove()
        })
    }.call(this);
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
! function() {
    var t = window.Rails,
        e = function() {
            function e(t) {
                _classCallCheck(this, e), this.initiated = !1, this.finished = !1, this.bidFormInput = {}, this.url = "", this.inc = {}, this.dec = {}, this.timer = {}, this.interval = {}, this.price = 0, this.proxy = 0, this.last_bid = 0, this.bidFrom = {}, this.hours = 0, this.minutes = 0, this.seconds = 0, this.days = 0, this.bidFormInputValue = 0, this.remain_secs = 0, this.canInit() && (this.initiated = !0, this.init(t))
            }
            return _createClass(e, [{
                key: "canInit",
                value: function() {
                    return this.bidFormInput = document.getElementById("proxy_bid_amount"), this.inc = document.getElementById("increase"), this.dec = document.getElementById("decrease"), this.price = document.getElementById("price"), this.timer = document.getElementById("timerSpan"), this.bidFrom = document.getElementById("bidFrom"), !!this.timer
                }
            }, {
                key: "init",
                value: function(t) {
                    this.opts = t || {}, this.initialValue = t.initialValue, this.remain_secs = t.remain_secs, this.proxy = t.proxy, this.url = t.url, this.inc && this.prepBtns(), this.prepTime()
                }
            }, {
                key: "prepBtns",
                value: function() {
                    $ && ($(this.inc).replaceWith($(this.inc).clone()), $(this.dec).replaceWith($(this.dec).clone()), $(this.bidFrom).on("submit", this, this.submitForm)), document.getElementById("increase").addEventListener("click", this.increaseValue.bind(this)), document.getElementById("decrease").addEventListener("click", this.decreaseValue.bind(this))
                }
            }, {
                key: "prepTime",
                value: function() {
                    this.timer && this.startTimer()
                }
            }, {
                key: "increaseValue",
                value: function(t) {
                    if (t.target.closest("#increase")) {
                        var e = parseInt(this.bidFormInput.value, 10);
                        e += 10, this.bidFormInput.value = e
                    }
                }
            }, {
                key: "decreaseValue",
                value: function(t) {
                    if (t.target.closest("#decrease")) {
                        var e = parseInt(this.bidFormInput.value, 10);
                        e = (e -= 10) <= this.initialValue ? this.initialValue : e, this.bidFormInput.value = e
                    }
                }
            }, {
                key: "startTimer",
                value: function() {
                    this.timer && this.remain_secs && (this.ticktock(), this.days >= 1 ? this.timer.textContent = (this.days > 1 ? this.days + " days " : this.days + " day ") + (this.hours > 0 ? this.hours + " h " : "") : this.interval = setInterval(function() {
                        this.ticktock(), 0 === this.hours && this.minutes < 52 && (this.minutes > 9 ? 50 === this.seconds && this.sync() : this.minutes < 10 && this.minutes >= 2 ? this.seconds % 30 == 0 && this.sync() : this.minutes < 2 && this.seconds % 5 == 0 && this.sync()), this.timer.textContent = this.hours + " h " + this.minutes_l + " min " + this.seconds_l + " sec", --this.remain_secs <= 0 && (this.stopThis(), location.reload())
                    }.bind(this), 1e3))
                }
            }, {
                key: "ticktock",
                value: function() {
                    this.days = Math.floor(this.remain_secs / 86400 % 24), this.hours = Math.floor(this.remain_secs / 3600 % 24), this.minutes = Math.floor(this.remain_secs / 60 % 60), this.seconds = Math.floor(this.remain_secs % 60), this.minutes_l = this.minutes < 10 ? "0" + this.minutes : this.minutes, this.seconds_l = this.seconds < 10 ? "0" + this.seconds : this.seconds
                }
            }, {
                key: "stopThis",
                value: function() {
                    clearInterval(this.interval)
                }
            }, {
                key: "submitForm",
                value: function(e) {
                    var n = this;
                    return $(".flash-notice").remove(), e.preventDefault(), e.data.hours < 1 ? (fetch(this.action, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            "X-Requested-With": "XMLHttpRequest",
                            "X-CSRF-Token": t.csrfToken()
                        },
                        credentials: "same-origin",
                        body: $(this).serialize(),
                        method: "post"
                    }).then(function(t) {
                        if (t.ok) {
                            console.log("ok");
                            var e = t.headers.get("content-type");
                            return e && -1 !== e.indexOf("application/json") ? t.json().then(function(t) {
                                t.error && location.reload()
                            }) : t.text()
                        }
                    }).then(function(t) {
                        $("#content .content__auctions").replaceWith(t), $("#content").prepend($(".flash-notice")), window.auction.restart(auc_ops)
                    })["catch"](function() {
                        n.stopThis(), location.reload()
                    }), !1) : this.submit()
                }
            }, {
                key: "sync",
                value: function() {
                    var e = this;
                    this.finished && this.stopThis(), this.bidFormInput && (this.bidFormInputValue = this.bidFormInput.value), fetch(window.location, {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "X-CSRF-Token": t.csrfToken()
                        },
                        credentials: "same-origin",
                        method: "get"
                    }).then(function(t) {
                        if (t.ok) {
                            var e = t.headers.get("content-type");
                            return e && -1 !== e.indexOf("application/json") ? t.json().then(function(t) {
                                t.error && location.reload()
                            }) : t.text()
                        }
                    }).then(function(t) {
                        $("#content .content__auctions").replaceWith(t), $("#content").prepend($(".flash-notice")), window.auction ? window.auction.restart(auc_ops) : e.stopThis(), e.bidFormInput && (e.bidFormInput.value = e.bidFormInputValue, e.bidFormInput.focus())
                    })["catch"](function() {
                        e.stopThis(), location.reload()
                    })
                }
            }, {
                key: "log",
                value: function() {}
            }, {
                key: "restart",
                value: function(t) {
                    this.canInit() && (this.initiated = !0, clearInterval(this.interval), this.init(t))
                }
            }]), e
        }();
    window.App.onPageLoad(function() {
        document.getElementById("timerSpan") ? window.auction ? window.auction.restart(auc_ops) : window.auction = new e(auc_ops) : window.auction && (window.auction.stopThis(), window.auction = !1)
    })
}();
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
! function() {
    var t = window.Rails,
        e = function() {
            function e() {
                if (_classCallCheck(this, e), this.opts = !1, this.currentRevPage = 0, this.currentQuePage = 0, this.revContainer = document.getElementById("listing-reviews"), this.queContainer = document.getElementById("listing-questions"), this.revNav = {}, this.queNav = {}, this.spinQue = !1, this.spinRev = !1, this.spinner = window.App.loadingIndicator("big"), this.revContainer) {
                    var t = $(this.revContainer);
                    this.revNav = t.find("ul.pagination li"), this.revNav.click(this.navigate.bind(this)), this.opts = t.find("ul.pagination").data("page"), this.spinRev = t.find("div.spinbox")
                }
                if (this.queContainer) {
                    t = $(this.queContainer);
                    this.queNav = t.find("ul.pagination li"), this.queNav.click(this.navigate.bind(this)), this.spinQue = t.find("div.spinbox"), this.opts || (this.opts = t.find("ul.pagination").data("page"))
                }
            }
            return _createClass(e, [{
                key: "navigate",
                value: function(t) {
                    var e = $(t.currentTarget),
                        n = e.data("nav"),
                        i = e.data("type");
                    if (n && i) {
                        var o = {};
                        "question" === i ? (this.spinQue.html(this.spinner), "prev" === n ? this.currentQuePage > 0 ? (this.currentQuePage--, 0 === this.currentQuePage && this.queNav.eq(0).addClass("inactive"), this.queNav.eq(1).removeClass("inactive")) : (this.currentQuePage++, this.currentQuePage === this.opts.que_cnt && this.queNav.eq(1).addClass("inactive")) : (0 === this.currentQuePage && this.queNav.eq(0).removeClass("inactive"), this.currentQuePage++, this.currentQuePage === this.opts.que_cnt && this.queNav.eq(1).addClass("inactive"))) : (this.spinRev.html(this.spinner), "prev" === n ? this.currentRevPage > 0 ? (this.currentRevPage--, 0 === this.currentRevPage && this.revNav.eq(0).addClass("inactive"), this.revNav.eq(1).removeClass("inactive")) : (this.currentRevPage++, this.currentRevPage === this.opts.rev_cnt && this.revNav.eq(1).addClass("inactive")) : (0 === this.currentRevPage && this.revNav.eq(0).removeClass("inactive"), this.currentRevPage++, this.currentRevPage === this.opts.rev_cnt && this.revNav.eq(1).addClass("inactive"))), o[i] = "review" === i ? this.currentRevPage : this.currentQuePage;
                        var r = "?" + new URLSearchParams(o).toString();
                        this.getPage(r, i, n)
                    }
                }
            }, {
                key: "getPage",
                value: function(e, n, i) {
                    var o = this,
                        r = window.location.toString().split("?");
                    fetch(r[0] + e, {
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "X-CSRF-Token": t.csrfToken()
                        },
                        credentials: "same-origin",
                        method: "get"
                    }).then(function(t) {
                        if (t.ok) return t.text()
                    }).then(function(t) {
                        var e = JSON.parse(t);
                        o.spinQue && o.spinQue.html(""), o.spinRev && o.spinRev.html(""), e.length > 0 ? ("question" === e.type ? $("#listing-questions ul.que").html(e.html) : $("#listing-reviews ul.revs").html(e.html), $(".star-rating").starRating(), document.querySelector("#additional-details").scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })) : "question" === n ? "next" === i && o.queNav.eq(1).addClass("inactive") : "next" === i && o.revNav.eq(1).addClass("inactive")
                    })["catch"](function(t) {
                        console.log(t), location.reload()
                    })
                }
            }, {
                key: "log",
                value: function() {}
            }]), e
        }();
    window.App.onPageLoad(function() {
        document.getElementById("listing-content") && (document.getElementById("listing-reviews") || document.getElementById("listing-questions")) && (window.lstCntPagination || (window.lstCntPagination = new e))
    })
}(), 0 != $("#redirectModal").length && $("#redirectModal").modal({
        keyboard: !1,
        backdrop: "static",
        show: !0
    }),
    function(t, e) {
        "object" == typeof module && module.exports ? (module.exports = e(t), module.exports["default"] = module.exports) : t.timeago = e(t)
    }("undefined" != typeof window ? window : this, function() {
        function t(t) {
            return t instanceof Date ? t : isNaN(t) ? /^\d+$/.test(t) ? new Date(e(t)) : (t = (t || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(t)) : new Date(e(t))
        }

        function e(t) {
            return parseInt(t)
        }

        function n(t, n, i) {
            n = h[n] ? n : h[i] ? i : "en";
            for (var o = 0, r = t < 0 ? 1 : 0, s = t = Math.abs(t); t >= p[o] && o < f; o++) t /= p[o];
            return (t = e(t)) > (0 === (o *= 2) ? 9 : 1) && (o += 1), h[n](t, o, s)[r].replace("%s", t)
        }

        function i(e, n) {
            return ((n = n ? t(n) : new Date) - t(e)) / 1e3
        }

        function o(t) {
            for (var e = 1, n = 0, i = Math.abs(t); t >= p[n] && n < f; n++) t /= p[n], e *= p[n];
            return i = (i %= e) ? e - i : e, Math.ceil(i)
        }

        function r(t) {
            return s(t, "data-timeago") || s(t, "datetime")
        }

        function s(t, e) {
            return t.getAttribute ? t.getAttribute(e) : t.attr ? t.attr(e) : void 0
        }

        function a(t, e) {
            return t.setAttribute ? t.setAttribute(m, e) : t.attr ? t.attr(m, e) : void 0
        }

        function l(t, e) {
            this.nowDate = t, this.defaultLocale = e || "en"
        }

        function c(t, e) {
            return new l(t, e)
        }
        var u = "second_minute_hour_day_week_month_year".split("_"),
            d = "\u79d2_\u5206\u949f_\u5c0f\u65f6_\u5929_\u5468_\u6708_\u5e74".split("_"),
            h = {
                en: function(t, e) {
                    if (0 === e) return ["just now", "right now"];
                    var n = u[parseInt(e / 2)];
                    return t > 1 && (n += "s"), [t + " " + n + " ago", "in " + t + " " + n]
                },
                zh_CN: function(t, e) {
                    if (0 === e) return ["\u521a\u521a", "\u7247\u523b\u540e"];
                    var n = d[parseInt(e / 2)];
                    return [t + n + "\u524d", t + n + "\u540e"]
                }
            },
            p = [60, 60, 24, 7, 365 / 7 / 12, 12],
            f = 6,
            m = "data-tid",
            g = {};
        return l.prototype.doRender = function(t, e, r) {
            var s, l = i(e, this.nowDate),
                c = this;
            t.innerHTML = n(l, r, this.defaultLocale), g[s = setTimeout(function() {
                c.doRender(t, e, r), delete g[s]
            }, Math.min(1e3 * o(l), 2147483647))] = 0, a(t, s)
        }, l.prototype.format = function(t, e) {
            return n(i(t, this.nowDate), e, this.defaultLocale)
        }, l.prototype.render = function(t, e) {
            t.length === undefined && (t = [t]);
            for (var n = 0, i = t.length; n < i; n++) this.doRender(t[n], r(t[n]), e)
        }, l.prototype.setLocale = function(t) {
            this.defaultLocale = t
        }, c.register = function(t, e) {
            h[t] = e
        }, c.cancel = function(t) {
            var e;
            if (t)(e = s(t, m)) && (clearTimeout(e), delete g[e]);
            else {
                for (e in g) clearTimeout(e);
                g = {}
            }
        }, c
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["module", "exports"], e);
        else if ("undefined" != typeof exports) e(module, exports);
        else {
            var n = {
                exports: {}
            };
            e(n, n.exports), t.autosize = n.exports
        }
    }(this, function(t, e) {
        "use strict";

        function n(t) {
            function e(e) {
                var n = t.style.width;
                t.style.width = "0px", t.offsetWidth, t.style.width = n, t.style.overflowY = e
            }

            function n() {
                if (0 !== t.scrollHeight) {
                    var e = function(t) {
                            for (var e = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && e.push({
                                node: t.parentNode,
                                scrollTop: t.parentNode.scrollTop
                            }), t = t.parentNode;
                            return e
                        }(t),
                        n = document.documentElement && document.documentElement.scrollTop;
                    t.style.height = "", t.style.height = t.scrollHeight + r + "px", s = t.clientWidth, e.forEach(function(t) {
                        t.node.scrollTop = t.scrollTop
                    }), n && (document.documentElement.scrollTop = n)
                }
            }

            function i() {
                n();
                var i = Math.round(parseFloat(t.style.height)),
                    o = window.getComputedStyle(t, null),
                    r = "content-box" === o.boxSizing ? Math.round(parseFloat(o.height)) : t.offsetHeight;
                if (r < i ? "hidden" === o.overflowY && (e("scroll"), n(), r = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== o.overflowY && (e("hidden"), n(), r = "content-box" === o.boxSizing ? Math.round(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight), c !== r) {
                    c = r;
                    var s = l("autosize:resized");
                    try {
                        t.dispatchEvent(s)
                    } catch (i) {}
                }
            }
            if (t && t.nodeName && "TEXTAREA" === t.nodeName && !a.has(t)) {
                var o, r = null,
                    s = null,
                    c = null,
                    u = function() {
                        t.clientWidth !== s && i()
                    },
                    d = function(e) {
                        window.removeEventListener("resize", u, !1), t.removeEventListener("input", i, !1), t.removeEventListener("keyup", i, !1), t.removeEventListener("autosize:destroy", d, !1), t.removeEventListener("autosize:update", i, !1), Object.keys(e).forEach(function(n) {
                            t.style[n] = e[n]
                        }), a["delete"](t)
                    }.bind(t, {
                        height: t.style.height,
                        resize: t.style.resize,
                        overflowY: t.style.overflowY,
                        overflowX: t.style.overflowX,
                        wordWrap: t.style.wordWrap
                    });
                t.addEventListener("autosize:destroy", d, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener("keyup", i, !1), window.addEventListener("resize", u, !1), t.addEventListener("input", i, !1), t.addEventListener("autosize:update", i, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", a.set(t, {
                    destroy: d,
                    update: i
                }), "vertical" === (o = window.getComputedStyle(t, null)).resize ? t.style.resize = "none" : "both" === o.resize && (t.style.resize = "horizontal"), r = "content-box" === o.boxSizing ? -(parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)) : parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), isNaN(r) && (r = 0), i()
            }
        }

        function i(t) {
            var e = a.get(t);
            e && e.destroy()
        }

        function o(t) {
            var e = a.get(t);
            e && e.update()
        }
        var r, s, a = "function" == typeof Map ? new Map : (r = [], s = [], {
                has: function(t) {
                    return -1 < r.indexOf(t)
                },
                get: function(t) {
                    return s[r.indexOf(t)]
                },
                set: function(t, e) {
                    -1 === r.indexOf(t) && (r.push(t), s.push(e))
                },
                "delete": function(t) {
                    var e = r.indexOf(t); - 1 < e && (r.splice(e, 1), s.splice(e, 1))
                }
            }),
            l = function(t) {
                return new Event(t, {
                    bubbles: !0
                })
            };
        try {
            new Event("test")
        } catch (t) {
            l = function(t) {
                var e = document.createEvent("Event");
                return e.initEvent(t, !0, !1), e
            }
        }
        var c = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(t) {
            return t
        }).destroy = function(t) {
            return t
        }, c.update = function(t) {
            return t
        }) : ((c = function(t) {
            return t && Array.prototype.forEach.call(t.length ? t : [t], function(t) {
                return n(t)
            }), t
        }).destroy = function(t) {
            return t && Array.prototype.forEach.call(t.length ? t : [t], i), t
        }, c.update = function(t) {
            return t && Array.prototype.forEach.call(t.length ? t : [t], o), t
        }), e["default"] = c, t.exports = e["default"]
    }),
    function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 5)
    }([function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            r = n(2),
            s = (r && r.__esModule, function() {
                function t(e, n, o) {
                    i(this, t), this.data = e, this.term = n, this.strategy = o
                }
                return o(t, [{
                    key: "replace",
                    value: function(t, e) {
                        var n = this.strategy.replace(this.data);
                        if (null !== n) {
                            Array.isArray(n) && (e = n[1] + e, n = n[0]);
                            var i = this.strategy.matchText(t);
                            if (i) return n = n.replace(/\$&/g, i[0]).replace(/\$(\d)/g, function(t, e) {
                                return i[parseInt(e, 10)]
                            }), [
                                [t.slice(0, i.index), n, t.slice(i.index + i[0].length)].join(""), e
                            ]
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.strategy.template(this.data, this.term)
                    }
                }]), t
            }());
        e["default"] = s
    }, function(t) {
        "use strict";

        function e() {}

        function n(t, e, n) {
            this.fn = t, this.context = e, this.once = n || !1
        }

        function i() {
            this._events = new e, this._eventsCount = 0
        }
        var o = Object.prototype.hasOwnProperty,
            r = "~";
        Object.create && (e.prototype = Object.create(null), (new e).__proto__ || (r = !1)), i.prototype.eventNames = function() {
            var t, e, n = [];
            if (0 === this._eventsCount) return n;
            for (e in t = this._events) o.call(t, e) && n.push(r ? e.slice(1) : e);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
        }, i.prototype.listeners = function(t, e) {
            var n = r ? r + t : t,
                i = this._events[n];
            if (e) return !!i;
            if (!i) return [];
            if (i.fn) return [i.fn];
            for (var o = 0, s = i.length, a = new Array(s); o < s; o++) a[o] = i[o].fn;
            return a
        }, i.prototype.emit = function(t, e, n, i, o, s) {
            var a = r ? r + t : t;
            if (!this._events[a]) return !1;
            var l, c, u = this._events[a],
                d = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(t, u.fn, void 0, !0), d) {
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, e), !0;
                    case 3:
                        return u.fn.call(u.context, e, n), !0;
                    case 4:
                        return u.fn.call(u.context, e, n, i), !0;
                    case 5:
                        return u.fn.call(u.context, e, n, i, o), !0;
                    case 6:
                        return u.fn.call(u.context, e, n, i, o, s), !0
                }
                for (c = 1, l = new Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
                u.fn.apply(u.context, l)
            } else {
                var h, p = u.length;
                for (c = 0; c < p; c++) switch (u[c].once && this.removeListener(t, u[c].fn, void 0, !0), d) {
                    case 1:
                        u[c].fn.call(u[c].context);
                        break;
                    case 2:
                        u[c].fn.call(u[c].context, e);
                        break;
                    case 3:
                        u[c].fn.call(u[c].context, e, n);
                        break;
                    case 4:
                        u[c].fn.call(u[c].context, e, n, i);
                        break;
                    default:
                        if (!l)
                            for (h = 1, l = new Array(d - 1); h < d; h++) l[h - 1] = arguments[h];
                        u[c].fn.apply(u[c].context, l)
                }
            }
            return !0
        }, i.prototype.on = function(t, e, i) {
            var o = new n(e, i || this),
                s = r ? r + t : t;
            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : (this._events[s] = o, this._eventsCount++), this
        }, i.prototype.once = function(t, e, i) {
            var o = new n(e, i || this, !0),
                s = r ? r + t : t;
            return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : (this._events[s] = o, this._eventsCount++), this
        }, i.prototype.removeListener = function(t, n, i, o) {
            var s = r ? r + t : t;
            if (!this._events[s]) return this;
            if (!n) return 0 == --this._eventsCount ? this._events = new e : delete this._events[s], this;
            var a = this._events[s];
            if (a.fn) a.fn !== n || o && !a.once || i && a.context !== i || (0 == --this._eventsCount ? this._events = new e : delete this._events[s]);
            else {
                for (var l = 0, c = [], u = a.length; l < u; l++)(a[l].fn !== n || o && !a[l].once || i && a[l].context !== i) && c.push(a[l]);
                c.length ? this._events[s] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new e : delete this._events[s]
            }
            return this
        }, i.prototype.removeAllListeners = function(t) {
            var n;
            return t ? (n = r ? r + t : t, this._events[n] && (0 == --this._eventsCount ? this._events = new e : delete this._events[n])) : (this._events = new e, this._eventsCount = 0), this
        }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
            return this
        }, i.prefixed = r, i.EventEmitter = i, t.exports = i
    }, function(t, e) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function i(t) {
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            r = function() {
                function t(e) {
                    n(this, t), this.props = e, this.cache = e.cache ? {} : null
                }
                return o(t, [{
                    key: "destroy",
                    value: function() {
                        return this.cache = null, this
                    }
                }, {
                    key: "search",
                    value: function(t, e, n) {
                        this.cache ? this.searchWithCache(t, e, n) : this.props.search(t, e, n)
                    }
                }, {
                    key: "replace",
                    value: function(t) {
                        return this.props.replace(t)
                    }
                }, {
                    key: "searchWithCache",
                    value: function(t, e, n) {
                        var i = this;
                        this.cache && this.cache[t] ? e(this.cache[t]) : this.props.search(t, function(n) {
                            i.cache && (i.cache[t] = n), e(n)
                        }, n)
                    }
                }, {
                    key: "matchText",
                    value: function(t) {
                        return "function" == typeof this.match ? this.match(t) : t.match(this.match)
                    }
                }, {
                    key: "match",
                    get: function() {
                        return this.props.match
                    }
                }, {
                    key: "index",
                    get: function() {
                        return "number" == typeof this.props.index ? this.props.index : 2
                    }
                }, {
                    key: "template",
                    get: function() {
                        return this.props.template || i
                    }
                }]), t
            }();
        e["default"] = r
    }, function(t, e) {
        "use strict";

        function n(t) {
            var e = t.getBoundingClientRect(),
                n = t.ownerDocument,
                i = n.defaultView,
                o = n.documentElement,
                r = {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                };
            return o && (r.top -= o.clientTop, r.left -= o.clientLeft), r
        }

        function i(t) {
            return t >= s && t <= a
        }

        function o(t) {
            var e = window.getComputedStyle(t);
            return i(e.lineHeight.charCodeAt(0)) ? i(e.lineHeight.charCodeAt(e.lineHeight.length - 1)) ? parseFloat(e.lineHeight) * parseFloat(e.fontSize) : parseFloat(e.lineHeight) : r(t.nodeName, e)
        }

        function r(t, e) {
            var n = document.body;
            if (!n) return 0;
            var i = document.createElement(t);
            i.innerHTML = "&nbsp;", i.style.fontSize = e.fontSize, i.style.fontFamily = e.fontFamily, i.style.padding = "0", n.appendChild(i), i instanceof HTMLTextAreaElement && (i.rows = 1);
            var o = i.offsetHeight;
            return n.removeChild(i), o
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.calculateElementOffset = n, e.getLineHeightPx = o, e.calculateLineHeightPx = r;
        var s = (e.createCustomEvent = "function" == typeof window.CustomEvent ? function(t, e) {
                return new document.defaultView.CustomEvent(t, {
                    cancelable: e && e.cancelable || !1,
                    detail: e && e.detail || void 0
                })
            } : function(t, e) {
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, !1, e && e.cancelable || !1, e && e.detail || void 0), n
            }, "0".charCodeAt(0)),
            a = "9".charCodeAt(0)
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            l = i(n(1)),
            c = n(3),
            u = (i(n(0)), function() {
                function t() {
                    return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return s(t, l["default"]), a(t, [{
                    key: "destroy",
                    value: function() {
                        return this
                    }
                }, {
                    key: "applySearchResult",
                    value: function() {
                        throw new Error("Not implemented.")
                    }
                }, {
                    key: "getCursorOffset",
                    value: function() {
                        throw new Error("Not implemented.")
                    }
                }, {
                    key: "getBeforeCursor",
                    value: function() {
                        throw new Error("Not implemented.")
                    }
                }, {
                    key: "emitMoveEvent",
                    value: function(t) {
                        var e = (0, c.createCustomEvent)("move", {
                            cancelable: !0,
                            detail: {
                                code: t
                            }
                        });
                        return this.emit("move", e), e
                    }
                }, {
                    key: "emitEnterEvent",
                    value: function() {
                        var t = (0, c.createCustomEvent)("enter", {
                            cancelable: !0
                        });
                        return this.emit("enter", t), t
                    }
                }, {
                    key: "emitChangeEvent",
                    value: function() {
                        var t = (0, c.createCustomEvent)("change", {
                            detail: {
                                beforeCursor: this.getBeforeCursor()
                            }
                        });
                        return this.emit("change", t), t
                    }
                }, {
                    key: "emitEscEvent",
                    value: function() {
                        var t = (0, c.createCustomEvent)("esc", {
                            cancelable: !0
                        });
                        return this.emit("esc", t), t
                    }
                }, {
                    key: "getCode",
                    value: function(t) {
                        return 9 === t.keyCode ? "ENTER" : 13 === t.keyCode ? "ENTER" : 27 === t.keyCode ? "ESC" : 38 === t.keyCode ? "UP" : 40 === t.keyCode ? "DOWN" : 78 === t.keyCode && t.ctrlKey ? "DOWN" : 80 === t.keyCode && t.ctrlKey ? "UP" : "OTHER"
                    }
                }]), t
            }());
        e["default"] = u
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            var i = e(n(7)),
                o = e(n(12)),
                r = void 0;
            (r = t.Textcomplete && t.Textcomplete.editors ? t.Textcomplete.editors : {}).Textarea = o["default"], t.Textcomplete = i["default"], t.Textcomplete.editors = r
        }).call(e, n(6))
    }, function(t) {
        var e;
        e = function() {
            return this
        }();
        try {
            e = e || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            l = i(n(8)),
            c = i((i(n(4)), n(10))),
            u = i(n(2)),
            d = i((i(n(0)), n(1))),
            h = ["handleChange", "handleEnter", "handleEsc", "handleHit", "handleMove", "handleSelect"],
            p = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    o(this, t);
                    var i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i.completer = new l["default"], i.isQueryInFlight = !1, i.nextPendingQuery = null, i.dropdown = new c["default"](n.dropdown || {}), i.editor = e, i.options = n, h.forEach(function(t) {
                        i[t] = i[t].bind(i)
                    }), i.startListening(), i
                }
                return s(t, d["default"]), a(t, [{
                    key: "destroy",
                    value: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return this.completer.destroy(), this.dropdown.destroy(), t && this.editor.destroy(), this.stopListening(), this
                    }
                }, {
                    key: "hide",
                    value: function() {
                        return this.dropdown.deactivate(), this
                    }
                }, {
                    key: "register",
                    value: function(t) {
                        var e = this;
                        return t.forEach(function(t) {
                            e.completer.registerStrategy(new u["default"](t))
                        }), this
                    }
                }, {
                    key: "trigger",
                    value: function(t) {
                        return this.isQueryInFlight ? this.nextPendingQuery = t : (this.isQueryInFlight = !0, this.nextPendingQuery = null, this.completer.run(t)), this
                    }
                }, {
                    key: "handleHit",
                    value: function(t) {
                        var e = t.searchResults;
                        e.length ? this.dropdown.render(e, this.editor.getCursorOffset()) : this.dropdown.deactivate(), this.isQueryInFlight = !1, null !== this.nextPendingQuery && this.trigger(this.nextPendingQuery)
                    }
                }, {
                    key: "handleMove",
                    value: function(t) {
                        "UP" === t.detail.code ? this.dropdown.up(t) : this.dropdown.down(t)
                    }
                }, {
                    key: "handleEnter",
                    value: function(t) {
                        var e = this.dropdown.getActiveItem();
                        e ? (this.dropdown.select(e), t.preventDefault()) : this.dropdown.deactivate()
                    }
                }, {
                    key: "handleEsc",
                    value: function(t) {
                        this.dropdown.shown && (this.dropdown.deactivate(), t.preventDefault())
                    }
                }, {
                    key: "handleChange",
                    value: function(t) {
                        null != t.detail.beforeCursor ? this.trigger(t.detail.beforeCursor) : this.dropdown.deactivate()
                    }
                }, {
                    key: "handleSelect",
                    value: function(t) {
                        this.emit("select", t), t.defaultPrevented || this.editor.applySearchResult(t.detail.searchResult)
                    }
                }, {
                    key: "startListening",
                    value: function() {
                        var t = this;
                        this.editor.on("move", this.handleMove).on("enter", this.handleEnter).on("esc", this.handleEsc).on("change", this.handleChange), this.dropdown.on("select", this.handleSelect), ["show", "shown", "render", "rendered", "selected", "hidden", "hide"].forEach(function(e) {
                            t.dropdown.on(e, function() {
                                return t.emit(e)
                            })
                        }), this.completer.on("hit", this.handleHit)
                    }
                }, {
                    key: "stopListening",
                    value: function() {
                        this.completer.removeAllListeners(), this.dropdown.removeAllListeners(), this.editor.removeListener("move", this.handleMove).removeListener("enter", this.handleEnter).removeListener("esc", this.handleEsc).removeListener("change", this.handleChange)
                    }
                }]), t
            }();
        e["default"] = p
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            l = i(n(1)),
            c = i(n(9)),
            u = (i((i(n(0)), n(2))), ["handleQueryResult"]),
            d = function() {
                function t() {
                    o(this, t);
                    var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.strategies = [], u.forEach(function(t) {
                        e[t] = e[t].bind(e)
                    }), e
                }
                return s(t, l["default"]), a(t, [{
                    key: "destroy",
                    value: function() {
                        return this.strategies.forEach(function(t) {
                            return t.destroy()
                        }), this
                    }
                }, {
                    key: "registerStrategy",
                    value: function(t) {
                        return this.strategies.push(t), this
                    }
                }, {
                    key: "run",
                    value: function(t) {
                        var e = this.extractQuery(t);
                        e ? e.execute(this.handleQueryResult) : this.handleQueryResult([])
                    }
                }, {
                    key: "extractQuery",
                    value: function(t) {
                        for (var e = 0; e < this.strategies.length; e++) {
                            var n = c["default"].build(this.strategies[e], t);
                            if (n) return n
                        }
                        return null
                    }
                }, {
                    key: "handleQueryResult",
                    value: function(t) {
                        this.emit("hit", {
                            searchResults: t
                        })
                    }
                }]), t
            }();
        e["default"] = d
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            s = i(n(0)),
            a = (i(n(2)), function() {
                function t(e, n, i) {
                    o(this, t), this.strategy = e, this.term = n, this.match = i
                }
                return r(t, null, [{
                    key: "build",
                    value: function(e, n) {
                        if ("function" == typeof e.props.context) {
                            var i = e.props.context(n);
                            if ("string" == typeof i) n = i;
                            else if (!i) return null
                        }
                        var o = e.matchText(n);
                        return o ? new t(e, o[e.index], o) : null
                    }
                }]), r(t, [{
                    key: "execute",
                    value: function(t) {
                        var e = this;
                        this.strategy.search(this.term, function(n) {
                            t(n.map(function(t) {
                                return new s["default"](t, e.term, e.strategy)
                            }))
                        }, this.match)
                    }
                }]), t
            }());
        e["default"] = a
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            l = i(n(1)),
            c = i(n(11)),
            u = (i(n(0)), n(3)),
            d = "dropdown-menu textcomplete-dropdown",
            h = function() {
                function t(e) {
                    o(this, t);
                    var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    n.shown = !1, n.items = [], n.activeItem = null, n.footer = e.footer, n.header = e.header, n.maxCount = e.maxCount || 10, n.el.className = e.className || d, n.rotate = !e.hasOwnProperty("rotate") || e.rotate, n.placement = e.placement, n.itemOptions = e.item || {};
                    var i = e.style;
                    return i && Object.keys(i).forEach(function(t) {
                        n.el.style[t] = i[t]
                    }), n
                }
                return s(t, l["default"]), a(t, null, [{
                    key: "createElement",
                    value: function() {
                        var t = document.createElement("ul"),
                            e = t.style;
                        e.display = "none", e.position = "absolute", e.zIndex = "10000";
                        var n = document.body;
                        return n && n.appendChild(t), t
                    }
                }]), a(t, [{
                    key: "destroy",
                    value: function() {
                        var t = this.el.parentNode;
                        return t && t.removeChild(this.el), this.clear()._el = null, this
                    }
                }, {
                    key: "render",
                    value: function(t, e) {
                        var n = this,
                            i = (0, u.createCustomEvent)("render", {
                                cancelable: !0
                            });
                        if (this.emit("render", i), i.defaultPrevented) return this;
                        var o = t.map(function(t) {
                                return t.data
                            }),
                            r = t.slice(0, this.maxCount || t.length).map(function(t) {
                                return new c["default"](t, n.itemOptions)
                            });
                        return this.clear().setStrategyId(t[0]).renderEdge(o, "header").append(r).renderEdge(o, "footer").show().setOffset(e), this.emit("rendered", (0, u.createCustomEvent)("rendered")), this
                    }
                }, {
                    key: "deactivate",
                    value: function() {
                        return this.hide().clear()
                    }
                }, {
                    key: "select",
                    value: function(t) {
                        var e = {
                                searchResult: t.searchResult
                            },
                            n = (0, u.createCustomEvent)("select", {
                                cancelable: !0,
                                detail: e
                            });
                        return this.emit("select", n), n.defaultPrevented ? this : (this.deactivate(), this.emit("selected", (0, u.createCustomEvent)("selected", {
                            detail: e
                        })), this)
                    }
                }, {
                    key: "up",
                    value: function(t) {
                        return this.shown ? this.moveActiveItem("prev", t) : this
                    }
                }, {
                    key: "down",
                    value: function(t) {
                        return this.shown ? this.moveActiveItem("next", t) : this
                    }
                }, {
                    key: "getActiveItem",
                    value: function() {
                        return this.activeItem
                    }
                }, {
                    key: "append",
                    value: function(t) {
                        var e = this,
                            n = document.createDocumentFragment();
                        return t.forEach(function(t) {
                            e.items.push(t), t.appended(e), n.appendChild(t.el)
                        }), this.el.appendChild(n), this
                    }
                }, {
                    key: "setOffset",
                    value: function(t) {
                        var e = document.documentElement;
                        if (e) {
                            var n = this.el.offsetWidth;
                            if (t.left) {
                                var i = e.clientWidth;
                                t.left + n > i && (t.left = i - n), this.el.style.left = t.left + "px"
                            } else t.right && (t.right - n < 0 && (t.right = 0), this.el.style.right = t.right + "px");
                            this.isPlacementTop() ? this.el.style.bottom = e.clientHeight - t.top + t.lineHeight + "px" : this.el.style.top = t.top + "px"
                        }
                        return this
                    }
                }, {
                    key: "show",
                    value: function() {
                        if (!this.shown) {
                            var t = (0, u.createCustomEvent)("show", {
                                cancelable: !0
                            });
                            if (this.emit("show", t), t.defaultPrevented) return this;
                            this.el.style.display = "block", this.shown = !0, this.emit("shown", (0, u.createCustomEvent)("shown"))
                        }
                        return this
                    }
                }, {
                    key: "hide",
                    value: function() {
                        if (this.shown) {
                            var t = (0, u.createCustomEvent)("hide", {
                                cancelable: !0
                            });
                            if (this.emit("hide", t), t.defaultPrevented) return this;
                            this.el.style.display = "none", this.shown = !1, this.emit("hidden", (0, u.createCustomEvent)("hidden"))
                        }
                        return this
                    }
                }, {
                    key: "clear",
                    value: function() {
                        return this.el.innerHTML = "", this.items.forEach(function(t) {
                            return t.destroy()
                        }), this.items = [], this
                    }
                }, {
                    key: "moveActiveItem",
                    value: function(t, e) {
                        var n = "next" === t ? this.activeItem ? this.activeItem.next : this.items[0] : this.activeItem ? this.activeItem.prev : this.items[this.items.length - 1];
                        return n && (n.activate(), e.preventDefault()), this
                    }
                }, {
                    key: "setStrategyId",
                    value: function(t) {
                        var e = t && t.strategy.props.id;
                        return e ? this.el.setAttribute("data-strategy", e) : this.el.removeAttribute("data-strategy"), this
                    }
                }, {
                    key: "renderEdge",
                    value: function(t, e) {
                        var n = ("header" === e ? this.header : this.footer) || "",
                            i = "function" == typeof n ? n(t) : n,
                            o = document.createElement("li");
                        return o.classList.add("textcomplete-" + e), o.innerHTML = i, this.el.appendChild(o), this
                    }
                }, {
                    key: "isPlacementTop",
                    value: function() {
                        return "top" === this.placement
                    }
                }, {
                    key: "el",
                    get: function() {
                        return this._el || (this._el = t.createElement()), this._el
                    }
                }]), t
            }();
        e["default"] = h
    }, function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DEFAULT_CLASS_NAME = void 0;
        var o = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            r = n(0),
            s = (r && r.__esModule, e.DEFAULT_CLASS_NAME = "textcomplete-item"),
            a = ["onClick", "onMouseover"],
            l = function() {
                function t(e, n) {
                    var o = this;
                    i(this, t), this.searchResult = e, this.active = !1, this.className = n.className || s, this.activeClassName = this.className + " active", a.forEach(function(t) {
                        o[t] = o[t].bind(o)
                    })
                }
                return o(t, [{
                    key: "destroy",
                    value: function() {
                        this.el.removeEventListener("mousedown", this.onClick, !1), this.el.removeEventListener("mouseover", this.onMouseover, !1), this.el.removeEventListener("touchstart", this.onClick, !1), this.active && (this.dropdown.activeItem = null), this._el = null
                    }
                }, {
                    key: "appended",
                    value: function(t) {
                        this.dropdown = t, this.siblings = t.items, this.index = this.siblings.length - 1
                    }
                }, {
                    key: "activate",
                    value: function() {
                        if (!this.active) {
                            var t = this.dropdown.getActiveItem();
                            t && t.deactivate(), this.dropdown.activeItem = this, this.active = !0, this.el.className = this.activeClassName
                        }
                        return this
                    }
                }, {
                    key: "deactivate",
                    value: function() {
                        return this.active && (this.active = !1, this.el.className = this.className, this.dropdown.activeItem = null), this
                    }
                }, {
                    key: "onClick",
                    value: function(t) {
                        t.preventDefault(), this.dropdown.select(this)
                    }
                }, {
                    key: "onMouseover",
                    value: function() {
                        this.activate()
                    }
                }, {
                    key: "el",
                    get: function() {
                        if (this._el) return this._el;
                        var t = document.createElement("li");
                        t.className = this.active ? this.activeClassName : this.className;
                        var e = document.createElement("a");
                        return e.innerHTML = this.searchResult.render(), t.appendChild(e), this._el = t, t.addEventListener("mousedown", this.onClick), t.addEventListener("mouseover", this.onMouseover), t.addEventListener("touchstart", this.onClick), t
                    }
                }, {
                    key: "next",
                    get: function() {
                        var t = void 0;
                        if (this.index === this.siblings.length - 1) {
                            if (!this.dropdown.rotate) return null;
                            t = 0
                        } else t = this.index + 1;
                        return this.siblings[t]
                    }
                }, {
                    key: "prev",
                    get: function() {
                        var t = void 0;
                        if (0 === this.index) {
                            if (!this.dropdown.rotate) return null;
                            t = this.siblings.length - 1
                        } else t = this.index - 1;
                        return this.siblings[t]
                    }
                }]), t
            }();
        e["default"] = l
    }, function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function o(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }

        function s(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            l = function m(t, e, n) {
                null === t && (t = Function.prototype);
                var i = Object.getOwnPropertyDescriptor(t, e);
                if (void 0 === i) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : m(o, e, n)
                }
                if ("value" in i) return i.value;
                var r = i.get;
                return void 0 !== r ? r.call(n) : void 0
            },
            c = i(n(13)),
            u = i(n(4)),
            d = n(3),
            h = (i(n(0)), n(14)),
            p = ["onInput", "onKeydown"],
            f = function() {
                function t(e) {
                    o(this, t);
                    var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return n.el = e, p.forEach(function(t) {
                        n[t] = n[t].bind(n)
                    }), n.startListening(), n
                }
                return s(t, u["default"]), a(t, [{
                    key: "destroy",
                    value: function() {
                        return l(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this.stopListening(), this.el = null, this
                    }
                }, {
                    key: "applySearchResult",
                    value: function(t) {
                        var e = this.getBeforeCursor();
                        if (null != e) {
                            var n = t.replace(e, this.getAfterCursor());
                            this.el.focus(), Array.isArray(n) && ((0, c["default"])(this.el, n[0], n[1]), this.el.dispatchEvent(new Event("input")))
                        }
                    }
                }, {
                    key: "getCursorOffset",
                    value: function() {
                        var t = (0, d.calculateElementOffset)(this.el),
                            e = this.getElScroll(),
                            n = this.getCursorPosition(),
                            i = (0, d.getLineHeightPx)(this.el),
                            o = t.top - e.top + n.top + i,
                            r = t.left - e.left + n.left;
                        return "rtl" !== this.el.dir ? {
                            top: o,
                            left: r,
                            lineHeight: i
                        } : {
                            top: o,
                            right: document.documentElement ? document.documentElement.clientWidth - r : 0,
                            lineHeight: i
                        }
                    }
                }, {
                    key: "getBeforeCursor",
                    value: function() {
                        return this.el.selectionStart !== this.el.selectionEnd ? null : this.el.value.substring(0, this.el.selectionEnd)
                    }
                }, {
                    key: "getAfterCursor",
                    value: function() {
                        return this.el.value.substring(this.el.selectionEnd)
                    }
                }, {
                    key: "getElScroll",
                    value: function() {
                        return {
                            top: this.el.scrollTop,
                            left: this.el.scrollLeft
                        }
                    }
                }, {
                    key: "getCursorPosition",
                    value: function() {
                        return h(this.el, this.el.selectionEnd)
                    }
                }, {
                    key: "onInput",
                    value: function() {
                        this.emitChangeEvent()
                    }
                }, {
                    key: "onKeydown",
                    value: function(t) {
                        var e = this.getCode(t),
                            n = void 0;
                        "UP" === e || "DOWN" === e ? n = this.emitMoveEvent(e) : "ENTER" === e ? n = this.emitEnterEvent() : "ESC" === e && (n = this.emitEscEvent()), n && n.defaultPrevented && t.preventDefault()
                    }
                }, {
                    key: "startListening",
                    value: function() {
                        this.el.addEventListener("input", this.onInput), this.el.addEventListener("keydown", this.onKeydown)
                    }
                }, {
                    key: "stopListening",
                    value: function() {
                        this.el.removeEventListener("input", this.onInput), this.el.removeEventListener("keydown", this.onKeydown)
                    }
                }]), t
            }();
        e["default"] = f
    }, function(t, e) {
        "use strict";

        function n() {
            if ("undefined" != typeof Event) return new Event("input", {
                bubbles: !0,
                cancelable: !0
            });
            var t = document.createEvent("Event");
            return t.initEvent("input", !0, !0), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e["default"] = function(t, e, i) {
            for (var o = t.value, r = e + (i || ""), s = document.activeElement, a = 0, l = 0; a < o.length && a < r.length && o[a] === r[a];) a++;
            for (; o.length - l - 1 >= 0 && r.length - l - 1 >= 0 && o[o.length - l - 1] === r[r.length - l - 1];) l++;
            a = Math.min(a, Math.min(o.length, r.length) - l), t.setSelectionRange(a, o.length - l);
            var c = r.substring(a, r.length - l);
            return t.focus(), document.execCommand("insertText", !1, c) || (t.value = r, t.dispatchEvent(n())), t.setSelectionRange(e.length, e.length), s && s.focus(), t
        }
    }, function(t) {
        ! function() {
            function e(t, e, r) {
                if (!i) throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
                var s = r && r.debug || !1;
                if (s) {
                    var a = document.querySelector("#input-textarea-caret-position-mirror-div");
                    a && a.parentNode.removeChild(a)
                }
                var l = document.createElement("div");
                l.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(l);
                var c = l.style,
                    u = window.getComputedStyle ? getComputedStyle(t) : t.currentStyle;
                c.whiteSpace = "pre-wrap", "INPUT" !== t.nodeName && (c.wordWrap = "break-word"), c.position = "absolute", s || (c.visibility = "hidden"), n.forEach(function(t) {
                    c[t] = u[t]
                }), o ? t.scrollHeight > parseInt(u.height) && (c.overflowY = "scroll") : c.overflow = "hidden", l.textContent = t.value.substring(0, e), "INPUT" === t.nodeName && (l.textContent = l.textContent.replace(/\s/g, " "));
                var d = document.createElement("span");
                d.textContent = t.value.substring(e) || ".", l.appendChild(d);
                var h = {
                    top: d.offsetTop + parseInt(u.borderTopWidth),
                    left: d.offsetLeft + parseInt(u.borderLeftWidth)
                };
                return s ? d.style.backgroundColor = "#aaa" : document.body.removeChild(l), h
            }
            var n = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"],
                i = "undefined" != typeof window,
                o = i && null != window.mozInnerScreenX;
            void 0 !== t && void 0 !== t.exports ? t.exports = e : i && (window.getCaretCoordinates = e)
        }()
    }]), window.Thredded = window.Thredded || {},
    function() {
        var t = "Turbolinks" in window && window.Turbolinks.supported,
            e = t && "clearCache" in window.Turbolinks,
            n = !1,
            i = [],
            o = function() {
                i.forEach(function(t) {
                    t()
                }), n = !0
            };
        window.Thredded.onPageLoad = function(t) {
            i.push(t), !n && window.Thredded.DOMContentLoadedFired && t()
        }, e ? (window.Turbolinks.controller.lastRenderedLocation && document.addEventListener("DOMContentLoaded", function() {
            o()
        }), document.addEventListener("turbolinks:load", function() {
            o()
        })) : (window.Thredded.DOMContentLoadedFired || document.addEventListener("DOMContentLoaded", function() {
            o()
        }), t && document.addEventListener("page:load", function() {
            o()
        }))
    }(),
    window.Thredded.onPageLoad(function() {
        "Rails" in window ? window.Rails.refreshCSRFTokens() : "jQuery" in window && "rails" in window.jQuery && window.jQuery.rails.refreshCSRFTokens()
    }), window.Thredded.debounce = function(t, e, n) {
        var i = null;
        return function() {
            var o = this,
                r = arguments,
                s = function() {
                    i = null, n || t.apply(o, r)
                },
                a = n && !i;
            clearTimeout(i), i = setTimeout(s, e || 200), a && t.apply(o, r)
        }
    }, window.Thredded.escapeHtml = function(t) {
        var e = document.createElement("div");
        return e.textContent = t, e.innerHTML
    }, window.Thredded.hideSoftKeyboard = function() {
        var t = document.activeElement;
        t && t.blur && t.blur()
    }, window.Thredded.serializeForm = function(t) {
        return Array.prototype.map.call(t.querySelectorAll("[name]"), function(t) {
            return encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value)
        }).join("&")
    },
    function() {
        var t = window.Thredded,
            e = "[data-thredded-currently-online]",
            n = "thredded--is-expanded",
            i = function(t) {
                t.target.classList.add(n)
            },
            o = function(t) {
                t.target.classList.remove(n)
            },
            r = function(t) {
                t.target.classList.toggle(n)
            },
            s = function(t) {
                t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", o), t.addEventListener("touchstart", r)
            };
        t.onPageLoad(function() {
            Array.prototype.forEach.call(document.querySelectorAll(e), function(t) {
                s(t)
            })
        })
    }(),
    function() {
        var t = "[data-thredded-flash-message]";
        document.addEventListener("turbolinks:before-cache", function() {
            Array.prototype.forEach.call(document.querySelectorAll(t), function(t) {
                t.parentNode.removeChild(t)
            })
        })
    }(),
    function() {
        var t = window.Thredded;
        t.UserTextcomplete = {
            DROPDOWN_CLASS_NAME: "thredded--textcomplete-dropdown",
            formatUser: function(e) {
                var n = e.avatar_url,
                    i = e.name,
                    o = e.display_name;
                return "<div class='thredded--textcomplete-user-result'><img class='thredded--textcomplete-user-result__avatar' src='" + t.escapeHtml(n) + "' ><span class='thredded--textcomplete-user-result__name'>" + t.escapeHtml(i) + "</span>" + (i !== o && o ? "<span class='thredded--textcomplete-user-result__display_name'>" + t.escapeHtml(o) + "</span>" : "") + "</div>"
            },
            searchFn: function(t) {
                var e = t.url,
                    n = t.autocompleteMinLength;
                return function(t, i, o) {
                    if (t.length < n) i([]);
                    else {
                        var r = new XMLHttpRequest;
                        r.open("GET", e + "?q=" + t, !0), r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.onload = function() {
                            r.status < 200 || r.status >= 400 ? i([]) : i(JSON.parse(r.responseText).results.map(function(t) {
                                var e = t.avatar_url,
                                    n = t.id,
                                    i = t.display_name;
                                return {
                                    avatar_url: e,
                                    id: n,
                                    name: t.name,
                                    display_name: i,
                                    match: o
                                }
                            }))
                        }, r.send()
                    }
                }
            }
        }, document.addEventListener("turbolinks:before-cache", function() {
            Array.prototype.forEach.call(document.getElementsByClassName(t.UserTextcomplete.DROPDOWN_CLASS_NAME), function(t) {
                t.parentNode.removeChild(t)
            })
        })
    }();
var ThreddedMentionAutocompletion = {
    MATCH_RE: /(^@|\s@)"?([\w., \-()]+[\w.,\-()])$/,
    DROPDOWN_MAX_COUNT: 6,
    init: function(t, e) {
        var n = new Textcomplete.editors.Textarea(e),
            i = new Textcomplete(n, {
                dropdown: {
                    className: Thredded.UserTextcomplete.DROPDOWN_CLASS_NAME,
                    maxCount: ThreddedMentionAutocompletion.DROPDOWN_MAX_COUNT
                }
            });
        i.on("rendered", function() {
            i.dropdown.items.length && i.dropdown.items[0].activate()
        }), i.register([{
            match: ThreddedMentionAutocompletion.MATCH_RE,
            search: Thredded.UserTextcomplete.searchFn({
                url: t.getAttribute("data-autocomplete-url"),
                autocompleteMinLength: parseInt(t.getAttribute("data-autocomplete-min-length"), 10)
            }),
            template: Thredded.UserTextcomplete.formatUser,
            replace: function(t) {
                var e = t.name,
                    n = t.match[1];
                return /[., ()]/.test(e) ? n + '"' + e + '" ' : "" + n + e + " "
            }
        }])
    }
};
window.ThreddedMentionAutocompletion = ThreddedMentionAutocompletion,
    function() {
        var t = window.Thredded,
            e = ".thredded--post--content--spoiler",
            n = "thredded--post--content--spoiler--is-open";
        t.spoilers = {
            init: function(t) {
                var n = this;
                Array.prototype.forEach.call(t.querySelectorAll(e), function(t) {
                    t.addEventListener("mousedown", function(t) {
                        t.stopPropagation(), n.toggle(t.currentTarget)
                    }), t.addEventListener("keypress", function(t) {
                        " " !== event.key && "Enter" !== event.key || (t.preventDefault(), t.stopPropagation(), n.toggle(t.currentTarget))
                    })
                })
            },
            toggle: function(t) {
                var e = t.classList.contains(n);
                t.classList.toggle(n), t.setAttribute("aria-expanded", e ? "false" : "true"), t.firstElementChild.setAttribute("aria-hidden", e ? "false" : "true"), t.lastElementChild.setAttribute("aria-hidden", e ? "true" : "false")
            }
        }, t.onPageLoad(function() {
            t.spoilers.init(document)
        })
    }();
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
! function() {
    var t = window.Thredded,
        e = "[data-thredded-preview-area]",
        n = "[data-thredded-preview-area-post]",
        i = function() {
            function i(o, r) {
                var s = this;
                _classCallCheck(this, i);
                var a = o.querySelector(e);
                if (a && r) {
                    this.form = o, this.preview = a, this.previewPost = o.querySelector(n), this.previewUrl = this.preview.getAttribute("data-thredded-preview-url");
                    var l = null,
                        c = t.debounce(function() {
                            l !== r.value && (s.updatePreview(), l = r.value)
                        }, 200, !1);
                    r.addEventListener("input", c, !1), this.requestId = 0
                }
            }
            return _createClass(i, [{
                key: "updatePreview",
                value: function() {
                    var e = this;
                    this.requestId++;
                    var n = this.requestId,
                        i = new XMLHttpRequest;
                    i.open(this.form.method, this.previewUrl, !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.onload = function() {
                        i.status >= 200 && i.status < 400 && n === e.requestId && e.onPreviewResponse(i.responseText)
                    }, i.send(t.serializeForm(this.form))
                }
            }, {
                key: "onPreviewResponse",
                value: function(e) {
                    this.preview.style.display = "block", this.previewPost.innerHTML = e, t.spoilers.init(this.previewPost)
                }
            }]), i
        }();
    window.ThreddedPreviewArea = i
}(),
function() {
    var t = window.Thredded,
        e = window.ThreddedMentionAutocompletion,
        n = window.ThreddedPreviewArea,
        i = window.autosize,
        o = "[data-thredded-post-form]",
        r = 'textarea[name$="[content]"]',
        s = function(t) {
            var o = t.querySelector(r);
            i(o), new n(t, o), e.init(t, o)
        },
        a = function(t) {
            i.destroy(t.querySelector(r))
        };
    t.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            s(t)
        })
    }), document.addEventListener("turbolinks:before-cache", function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            a(t)
        })
    })
}(),
function() {
    function t(t) {
        if (!(0 !== t.button || t.ctrlKey || t.altKey || t.metaKey || t.shiftKey)) {
            t.preventDefault();
            var n = document.getElementById("post_content");
            n.scrollIntoView(), n.value = "...", e(t.target.getAttribute("data-thredded-quote-post"), function(t) {
                if (n.ownerDocument.body.contains(n)) {
                    n.focus(), n.value = t;
                    var e = document.createEvent("Event");
                    e.initEvent("autosize:update", !0, !1), n.dispatchEvent(e), n.scrollIntoView()
                }
            }, function(t) {
                n.value = t
            })
        }
    }

    function e(t, e, n) {
        var i = new XMLHttpRequest;
        i.open("GET", t, !0), i.onload = function() {
            i.status >= 200 && i.status < 400 ? e(i.responseText) : n("Error (" + i.status + "): " + i.statusText + " " + i.responseText)
        }, i.onerror = function() {
            n("Network Error")
        }, i.send()
    }
    window.Thredded.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-thredded-quote-post]"), function(e) {
            e.addEventListener("click", t)
        })
    })
}(),
function() {
    var t = window.Thredded;
    t.isSubmitHotkey = function(t) {
        return t.ctrlKey && (13 === t.keyCode || 10 === t.keyCode)
    }, document.addEventListener("keypress", function(e) {
        if (t.isSubmitHotkey(e)) {
            var n = document.querySelector('[data-thredded-submit-hotkey] [type="submit"]');
            if (!n) return;
            e.preventDefault(), n.focus(), n.click()
        }
    })
}(),
function() {
    var t, e, n = "#thredded--container [data-time-ago]",
        i = window.Thredded;
    "timeago" in window ? (e = window.timeago, i.onPageLoad(function() {
        var t = document.querySelector("#thredded--container");
        t && e().render(document.querySelectorAll(n), t.getAttribute("data-thredded-locale").replace("-", "_"))
    }), document.addEventListener("turbolinks:before-cache", function() {
        e.cancel()
    })) : "jQuery" in window && "timeago" in jQuery.fn && (t = window.jQuery, i.onPageLoad(function() {
        var e = t.timeago.settings.allowFuture;
        t.timeago.settings.allowFuture = !0, t(n).timeago(), t.timeago.settings.allowFuture = e
    }))
}(),
function() {
    var t = window.Thredded,
        e = window.ThreddedMentionAutocompletion,
        n = window.ThreddedPreviewArea,
        i = window.autosize,
        o = "[data-thredded-topic-form]",
        r = '[name$="topic[title]"]',
        s = 'textarea[name$="[content]"]',
        a = "thredded--is-compact",
        l = "thredded--is-expanded",
        c = 27,
        u = function(t) {
            var o = t.querySelector(s);
            if (o && (i(o), new n(t, o), e.init(t, o), t.classList.contains(a))) {
                var l = t.querySelector(r);
                l.addEventListener("focus", function() {
                    d(t, !0)
                }), [l, o].forEach(function(e) {
                    e.addEventListener("keydown", function(e) {
                        e.keyCode === c && (e.target.blur(), d(t, !1))
                    }), e.addEventListener("blur", function() {
                        var e = function n(e) {
                            t.contains(e.target) || l.value || o.value || d(t, !1), document.body.removeEventListener("touchend", n), document.body.removeEventListener("mouseup", n)
                        };
                        document.body.addEventListener("mouseup", e), document.body.addEventListener("touchend", e)
                    })
                })
            }
        },
        d = function(t, e) {
            e ? (t.classList.remove(a), t.classList.add(l)) : (t.classList.remove(l), t.classList.add(a))
        },
        h = function(t) {
            var e = t.querySelector(s);
            e && i.destroy(e)
        };
    t.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            u(t)
        })
    }), document.addEventListener("turbolinks:before-cache", function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            h(t)
        })
    })
}(),
function() {
    function t(t) {
        var e = t.match(/\/page-(\d)$/);
        return e ? +e[1] : 1
    }

    function e(t, e) {
        return Math.ceil(t / e)
    }

    function n(t, e) {
        do {
            t = t.parentNode
        } while (t && t.tagName !== e);
        return t
    }

    function i(t) {
        return n(t, "ARTICLE")
    }

    function o(t) {
        return n(t, "LI")
    }

    function r(n) {
        var r = +n.getAttribute("data-thredded-topic-posts-per-page") || 25,
            s = "private" === n.getAttribute("data-thredded-topics"),
            a = document.querySelector("[data-unread-followed-count]");
        n.addEventListener("click", function(n) {
            var d = n.target;
            if ("A" === d.tagName && "H1" === d.parentNode.tagName) {
                var h = i(d);
                if (t(d.href) === e(+h.querySelector(u).textContent, r)) {
                    if (!s && a && h.hasAttribute("data-followed") && h.hasAttribute("data-unread")) {
                        var p = +a.textContent - 1;
                        if (0 === p) {
                            var f = o(a);
                            f.parentElement.removeChild(f)
                        } else a.textContent = p.toLocaleString()
                    }
                    h.classList.add(c), h.classList.remove(l), h.removeAttribute("data-unread")
                }
            }
        })
    }
    var s = window.Thredded,
        a = "[data-thredded-topics]",
        l = "thredded--topic-unread",
        c = "thredded--topic-read",
        u = ".thredded--topics--posts-count";
    s.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll(a), r)
    })
}(),
function() {
    var t = window.Thredded,
        e = window.Turbolinks;
    t.onPageLoad(function() {
        e && e.supported && Array.prototype.forEach.call(document.querySelectorAll("[data-thredded-turboform]"), function(t) {
            t.addEventListener("submit", n)
        })
    });
    var n = function(n) {
        n.preventDefault();
        var i = n.currentTarget;
        e.visit(i.action + (-1 === i.action.indexOf("?") ? "?" : "&") + t.serializeForm(i)), t.hideSoftKeyboard()
    }
}();
_createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }
}();
! function() {
    var t = window.Thredded,
        e = "[data-thredded-user-preferences-form]",
        n = "data-thredded-bound-messageboard-pref",
        i = "data-thredded-update-checkbox-on-change",
        o = function() {
            function t(e, n, i) {
                var o = this;
                _classCallCheck(this, t), this.messageboardCheckbox = e.querySelector('[type="checkbox"][name="' + i + '"]'), this.messageboardCheckbox && (this.messageboardCheckbox.addEventListener("change", function() {
                    o.rememberMessageboardChecked()
                }), this.rememberMessageboardChecked(), this.genericCheckbox = e.querySelector('[type="checkbox"][name="' + n + '"]'), this.genericCheckbox.addEventListener("change", function() {
                    o.updateMessageboardCheckbox()
                }), this.updateMessageboardCheckbox())
            }
            return _createClass(t, [{
                key: "rememberMessageboardChecked",
                value: function() {
                    this.messageboardCheckedWas = this.messageboardCheckbox.checked
                }
            }, {
                key: "updateMessageboardCheckbox",
                value: function() {
                    var t = this.genericCheckbox.checked;
                    this.messageboardCheckbox.disabled = !t, this.messageboardCheckbox.checked = !!t && this.messageboardCheckedWas
                }
            }]), t
        }(),
        r = function a(t, e, n) {
            _classCallCheck(this, a);
            var i = t.querySelector('[type="checkbox"][name="' + n + '"]');
            i && e.addEventListener("change", function() {
                i.checked = e.checked
            })
        },
        s = function l(t) {
            _classCallCheck(this, l), Array.prototype.forEach.call(t.querySelectorAll("input[" + n + "]"), function(e) {
                new o(t, e.name, e.getAttribute(n))
            }), Array.prototype.forEach.call(t.querySelectorAll("input[" + i + "]"), function(e) {
                new r(t, e, e.getAttribute(i))
            })
        };
    t.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll(e), function(t) {
            new s(t)
        })
    })
}(),
function() {
    function t(t) {
        for (var e = [], n = [], i = 0, o = !1, r = !1, s = 0; s < t.length; ++s) {
            var a = t.charAt(s);
            switch (a) {
                case '"':
                    o = !o;
                    break;
                case " ":
                    r && n.push(a);
                    break;
                case ",":
                    o ? n.push(a) : (r = !1, n.length && (e.push({
                        name: n.join(""),
                        index: i
                    }), n.length = 0));
                    break;
                default:
                    r || (i = s), r = !0, n.push(a)
            }
        }
        return n.length && (e.current = {
            name: n.join(""),
            index: i
        }), e
    }

    function e(t) {
        i.destroy(t)
    }
    var n = window.Thredded,
        i = window.autosize,
        o = "[data-thredded-users-select]";
    n.UsersSelect = {
        DROPDOWN_MAX_COUNT: 6
    };
    var r = function(e) {
        i(e), e.addEventListener("keypress", function(t) {
            13 !== t.keyCode && 10 !== t.keyCode || t.preventDefault()
        });
        var o = new Textcomplete.editors.Textarea(e),
            r = new Textcomplete(o, {
                dropdown: {
                    className: n.UserTextcomplete.DROPDOWN_CLASS_NAME,
                    maxCount: n.UsersSelect.DROPDOWN_MAX_COUNT
                }
            });
        e.addEventListener("blur", function() {
            r.hide()
        });
        var s = n.UserTextcomplete.searchFn({
            url: e.getAttribute("data-autocomplete-url"),
            autocompleteMinLength: parseInt(e.getAttribute("data-autocomplete-min-length"), 10)
        });
        r.on("rendered", function() {
            r.dropdown.items.length && r.dropdown.items[0].activate()
        }), r.register([{
            index: 0,
            match: function(e) {
                var n = t(e);
                if (n.current) {
                    var i = n.current,
                        o = i.name,
                        r = i.index,
                        s = [o];
                    return s.index = r, s
                }
                return null
            },
            search: function(n, i, o) {
                s(n, function(n) {
                    var o = t(e.value).map(function(t) {
                        return t.name
                    });
                    i(n.filter(function(t) {
                        return -1 === o.indexOf(t.name)
                    }))
                }, o)
            },
            template: n.UserTextcomplete.formatUser,
            replace: function(t) {
                var e = t.name;
                return /,/.test(e) ? '"' + e + '", ' : e + ", "
            }
        }])
    };
    window.Thredded.onPageLoad(function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            r(t)
        })
    }), document.addEventListener("turbolinks:before-cache", function() {
        Array.prototype.forEach.call(document.querySelectorAll(o), function(t) {
            e(t)
        })
    })
}(), ThreddedMentionAutocompletion.MATCH_RE = /(^@|\s@)"?(\w+)$/;