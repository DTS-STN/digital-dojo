var Calendar = function() {
    "use strict";

    function t() {}

    function n(t) {
        for (var n, e, o = 1, r = arguments.length; o < r; o++) {
            e = arguments[o];
            for (n in e) t[n] = e[n]
        }
        return t
    }

    function e(t, n) {
        n.appendChild(t)
    }

    function o(t, n, e) {
        n.insertBefore(t, e)
    }

    function r(t) {
        t.parentNode.removeChild(t)
    }

    function a(t, n) {
        for (; t.firstChild;) n.appendChild(t.firstChild)
    }

    function i(t) {
        for (var n = 0; n < t.length; n += 1) t[n] && t[n].d()
    }

    function c() {
        return document.createDocumentFragment()
    }

    function u(t) {
        return document.createElement(t)
    }

    function l(t) {
        return document.createTextNode(t)
    }

    function s() {
        return document.createComment("")
    }

    function f(t, n, e) {
        t.addEventListener(n, e, !1)
    }

    function h(t, n, e) {
        t.removeEventListener(n, e, !1)
    }

    function d(t, n, e) {
        t.setAttribute(n, e)
    }

    function m(t, n, e) {
        t.style.setProperty(n, e)
    }

    function v() {
        return Object.create(null)
    }

    function _(n) {
        this.destroy = t, this.fire("destroy"), this.set = this.get = t, !1 !== n && this._fragment.u(), this._fragment.d(), this._fragment = this._state = null
    }

    function g(t, n) {
        return t !== n || t && "object" == typeof t || "function" == typeof t
    }

    function y(t, n, e, o, r) {
        for (var a in n)
            if (e[a]) {
                var i = o[a],
                    c = r[a],
                    u = n[a];
                if (u)
                    for (var l = 0; l < u.length; l += 1) {
                        var s = u[l];
                        s.__calling || (s.__calling = !0, s.call(t, i, c), s.__calling = !1)
                    }
            }
    }

    function p(t, n) {
        t.options = n, t._observers = {
            pre: v(),
            post: v()
        }, t._handlers = v(), t._root = n._root || t, t._yield = n._yield, t._bind = n._bind
    }

    function w(t) {
        for (; t && t.length;) t.pop()()
    }

    function b(t, n) {
        for (var e = new Date, o = e.getFullYear() === t && e.getMonth() === n, r = [], a = new Date(t, n, 1).getDay(), i = [], c = [31, t % 100 != 0 && t % 4 == 0 || t % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n], u = 0; u < a; u++) i.push({
            number: ""
        });
        for (var l = 1; l <= c; l++) {
            var s = t + "-" + x(n + 1, 2) + "-" + x(l, 2),
                f = new Date(s);
            i.push({
                dateString: s,
                date: f,
                number: l,
                today: o && e.getDate() === l
            })
        }
        for (var h = 0; h < i.length; h += 7) r.push(i.slice(h, h + 7));
        for (var d = r[r.length - 1], m = 7 - d.length, v = 0; v < m; v++) d.push({
            number: ""
        });
        return r
    }

    function x(t, n) {
        for (var e = "" + t; e.length < n;) e = "0" + e;
        return e
    }

    function N(t) {
        if (!t) return "#ffffff";
        var n = "#" === t.charAt(0) ? t.substring(1, 7) : t;
        return .299 * parseInt(n.substring(0, 2), 16) + .587 * parseInt(n.substring(2, 4), 16) + .114 * parseInt(n.substring(4, 6), 16) > 186 ? "#000000" : "#ffffff"
    }

    function E(t, n, e) {
        return t ? t.length <= n ? t : t.substr(0, n) + "..." : e || " "
    }

    function D() {
        return {
            show: !1,
            title: "This is the title of the Modal and it might be very long",
            color: "#f5f5f5"
        }
    }

    function k() {
        var t = this;
        this.observe("show", function(n) {
            n ? (t.fire("modalOpen"), document.querySelector("html").style.overflow = "hidden") : (t.fire("modalClose"), document.querySelector("html").style.overflow = "")
        })
    }

    function T(t) {
        d(t, "svelte-3331023524", "")
    }

    function C(t, n) {
        function i(t) {
            var e = n.get();
            n.set({
                show: e.show && 27 !== t.keyCode
            })
        }

        function c(t) {
            n.set({
                show: !1
            })
        }

        function s(t) {
            n.set({
                show: !1
            })
        }
        var v, _, g, y, p, w, b, x, E, D, k, C, S, M = n._slotted.default;
        return window.addEventListener("keydown", i), {
            c: function() {
                v = l("\n"), _ = u("div"), y = u("div"), p = l("\n  "), w = u("div"), b = u("div"), x = u("span"), E = l(t.title), D = l("\n      "), (k = u("button")).textContent = "×", C = l("\n    "), S = u("div"), this.h()
            },
            h: function() {
                T(_), _.className = g = "modal " + (t.show ? "active" : ""), T(y), y.className = "modal-background", f(y, "click", c), T(w), w.className = "modal-container", T(b), b.className = "modal-header", m(b, "background-color", t.color), T(x), x.className = "modal-title", m(x, "color", N(t.color)), T(k), k.className = "modal-close", d(k, "aria-label", "close"), m(k, "color", N(t.color)), f(k, "click", s), T(S), S.className = "modal-body"
            },
            m: function(t, n) {
                o(v, t, n), o(_, t, n), e(y, _), e(p, _), e(w, _), e(b, w), e(x, b), e(E, x), e(D, b), e(k, b), e(C, w), e(S, w), M && e(M, S)
            },
            p: function(t, n) {
                t.show && g !== (g = "modal " + (n.show ? "active" : "")) && (_.className = g), t.color && (m(b, "background-color", n.color), m(x, "color", N(n.color))), t.title && (E.data = n.title), t.color && m(k, "color", N(n.color))
            },
            u: function() {
                r(v), r(_), M && a(S, M)
            },
            d: function() {
                window.removeEventListener("keydown", i), h(y, "click", c), h(k, "click", s)
            }
        }
    }

    function S(t) {
        p(this, t), this._state = n(D(), t.data), this._slotted = t.slots || {};
        var e = k.bind(this);
        t._root ? this._root._oncreate.push(e) : this._oncreate = [e], this.slots = {}, this._fragment = C(this._state, this), t.target && (this._fragment.c(), this._fragment.m(t.target, t.anchor || null), w(this._oncreate))
    }

    function M(t) {
        return t.map(function(t) {
            if (t.id || (t.id = Math.random().toString(36).substr(2)), t.color || (t.color = calendar.get("defaultColor")), void 0 === t.all_day && (t.all_day = !1), t.contrastColor = N(t.color), t._start = new Date(t.start), t.days = [t.start.substr(0, 10)], t.end) {
                t._end = new Date(t.end);
                var n = new Date(+t._start),
                    e = new Date(+t._end);
                [n, e].forEach(function(t) {
                    t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)
                });
                for (var o = Math.round((e - n) / 1e3 / 60 / 60 / 24), r = 0; r < o; r++) {
                    var a = new Date(+t._start);
                    a.setDate(a.getDate() + r + 1), t.days.push(a.toISOString().substr(0, 10))
                }
            } else t._end = t._start;
            return t
        })
    }

    function B(t, n, e) {
        var o = b(t, n),
            r = M(e),
            a = 0;
        return {
            weeks: o.map(function(t) {
                return t.map(function(t) {
                    return t.entries = r.filter(function(n) {
                        return n.days.indexOf(t.dateString) > -1
                    }).sort(function(t, n) {
                        return +t._start - +n._start
                    }), a += t.entries.length, t
                })
            }),
            numEntries: a
        }
    }

    function L() {
        return {
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            month: (new Date).getMonth(),
            day: (new Date).getDate(),
            year: (new Date).getFullYear(),
            escape: !0,
            previousText: "Prev",
            nextText: "Next",
            calendarText: "Calendar",
            listText: "List",
            untitledText: "Untitled",
            emptyText: "No Events To Display",
            view: "calendar",
            defaultColor: "#00008b",
            showModal: !1,
            activeEntry: null,
            showNew: !1,
            entries: [],
            message: "",
            banner: "",
            modalButtons: []
        }
    }

    function O(t) {
        d(t, "svelte-3638396833", "")
    }

    function F(t, n) {
        function a(t) {
            var e = n.get();
            n.set({
                month: 0 === e.month ? 11 : e.month - 1,
                year: 0 === e.month ? e.year - 1 : e.year
            })
        }

        function i(t) {
            var e = n.get();
            n.set({
                month: (e.month + 1) % 12,
                year: 11 === e.month ? e.year + 1 : e.year
            })
        }

        function d(t) {
            n.set({
                view: "calendar"
            })
        }

        function m(t) {
            n.set({
                view: "list"
            })
        }
        var v, _, g, y, p, w, b, x, N, E, D, k, T, C, M, B, L, F, I, J, j, q, P, Y, U, W, $, z, G, K, Q = t.monthNames[t.month],
            R = t.message && A(t, n),
            V = t.banner && H(t, n),
            X = it(t),
            Z = X(t, n),
            nt = t.activeEntry && tt(t, n),
            ot = t.modalButtons.length > 1 && et(t, n),
            rt = new S({
                _root: n._root,
                slots: {
                    default: c()
                },
                data: {
                    show: t.showModal,
                    title: t.activeEntry ? t.activeEntry.title : t.untitledText,
                    color: t.activeEntry ? t.activeEntry.color : t.defaultColor
                }
            });
        return rt.on("modalClose", function(t) {
            n.set({
                showModal: !1
            })
        }), rt.on("modalOpen", function(t) {
            n.set({
                showModal: !0
            })
        }), {
            c: function() {
                v = u("div"), _ = u("div"), g = u("div"), y = u("div"), p = u("button"), w = l(t.previousText), b = l("\n        "), x = u("button"), N = l(t.nextText), E = l("\n      "), D = u("span"), k = l(t.year), T = l(" "), C = l(Q), M = l("\n        "), R && R.c(), B = l("\n    "), L = u("div"), F = u("div"), I = u("button"), j = l(t.calendarText), q = l("\n        "), P = u("button"), U = l(t.listText), W = l("\n  "), V && V.c(), $ = l("\n  "), Z.c(), z = l("\n\n"), nt && nt.c(), G = l("\n  "), ot && ot.c(), K = s(), rt._fragment.c(), this.h()
            },
            h: function() {
                O(v), O(_), _.id = "header", O(g), g.className = "left", O(y), y.className = "nav-buttons", O(p), f(p, "click", a), O(x), f(x, "click", i), O(D), D.className = "title", O(L), L.className = "right", O(F), F.className = "view-buttons", O(I), I.className = J = "calendar" === t.view ? "active" : "", f(I, "click", d), O(P), P.className = Y = "list" === t.view ? "active" : "", f(P, "click", m)
            },
            m: function(t, n) {
                o(v, t, n), e(_, v), e(g, _), e(y, g), e(p, y), e(w, p), e(b, y), e(x, y), e(N, x), e(E, g), e(D, g), e(k, D), e(T, D), e(C, D), e(M, D), R && R.m(D, null), e(B, _), e(L, _), e(F, L), e(I, F), e(j, I), e(q, F), e(P, F), e(U, P), e(W, v), V && V.m(v, null), e($, v), Z.m(v, null), o(z, t, n), nt && nt.m(rt._slotted.default, null), e(G, rt._slotted.default), ot && ot.m(rt._slotted.default, null), e(K, rt._slotted.default), rt._mount(t, n)
            },
            p: function(t, e) {
                t.previousText && (w.data = e.previousText), t.nextText && (N.data = e.nextText), t.year && (k.data = e.year), (t.monthNames || t.month) && Q !== (Q = e.monthNames[e.month]) && (C.data = Q), e.message ? R ? R.p(t, e) : ((R = A(e, n)).c(), R.m(D, null)) : R && (R.u(), R.d(), R = null), t.view && J !== (J = "calendar" === e.view ? "active" : "") && (I.className = J), t.calendarText && (j.data = e.calendarText), t.view && Y !== (Y = "list" === e.view ? "active" : "") && (P.className = Y), t.listText && (U.data = e.listText), e.banner ? V ? V.p(t, e) : ((V = H(e, n)).c(), V.m(v, $)) : V && (V.u(), V.d(), V = null), X === (X = it(e)) && Z ? Z.p(t, e) : (Z.u(), Z.d(), (Z = X(e, n)).c(), Z.m(v, null)), e.activeEntry ? nt ? nt.p(t, e) : ((nt = tt(e, n)).c(), nt.m(G.parentNode, G)) : nt && (nt.u(), nt.d(), nt = null), e.modalButtons.length > 1 ? ot ? ot.p(t, e) : ((ot = et(e, n)).c(), ot.m(K.parentNode, K)) : ot && (ot.u(), ot.d(), ot = null);
                var o = {};
                t.showModal && (o.show = e.showModal), (t.activeEntry || t.untitledText) && (o.title = e.activeEntry ? e.activeEntry.title : e.untitledText), (t.activeEntry || t.defaultColor) && (o.color = e.activeEntry ? e.activeEntry.color : e.defaultColor), rt._set(o)
            },
            u: function() {
                r(v), R && R.u(), V && V.u(), Z.u(), r(z), nt && nt.u(), ot && ot.u(), rt._unmount()
            },
            d: function() {
                h(p, "click", a), h(x, "click", i), R && R.d(), h(I, "click", d), h(P, "click", m), V && V.d(), Z.d(), nt && nt.d(), ot && ot.d(), rt.destroy(!1)
            }
        }
    }

    function A(n, a) {
        var i, c;
        return {
            c: function() {
                i = u("small"), c = l(n.message), this.h()
            },
            h: function() {
                O(i), i.className = "message"
            },
            m: function(t, n) {
                o(i, t, n), e(c, i)
            },
            p: function(t, n) {
                t.message && (c.data = n.message)
            },
            u: function() {
                r(i)
            },
            d: t
        }
    }

    function H(n, a) {
        var i, c;
        return {
            c: function() {
                i = u("div"), c = l(n.banner), this.h()
            },
            h: function() {
                O(i), i.className = "banner"
            },
            m: function(t, n) {
                o(i, t, n), e(c, i)
            },
            p: function(t, n) {
                t.banner && (c.data = n.banner)
            },
            u: function() {
                r(i)
            },
            d: t
        }
    }

    function I(n, a, i, c, s) {
        var f, h, d = i;
        return {
            c: function() {
                f = u("th"), h = l(d), this.h()
            },
            h: function() {
                O(f)
            },
            m: function(t, n) {
                o(f, t, n), e(h, f)
            },
            p: function(t, n, e, o, r) {
                t.dayNames && d !== (d = o) && (h.data = d)
            },
            u: function() {
                r(f)
            },
            d: t
        }
    }

    function J(t, n, e, a, c) {
        for (var l, s = e, f = [], h = 0; h < s.length; h += 1) f[h] = j(t, n, e, a, s, s[h], h, c);
        return {
            c: function() {
                l = u("tr");
                for (var t = 0; t < f.length; t += 1) f[t].c();
                this.h()
            },
            h: function() {
                O(l)
            },
            m: function(t, n) {
                o(l, t, n);
                for (var e = 0; e < f.length; e += 1) f[e].m(l, null)
            },
            p: function(t, n, e, o, r) {
                var a = o;
                if (t.monthData || t.defaultColor || t.untitledText || t.showNew) {
                    for (var i = 0; i < a.length; i += 1) f[i] ? f[i].p(t, n, e, o, r, a, a[i], i) : (f[i] = j(n, e, o, r, a, a[i], i, c), f[i].c(), f[i].m(l, null));
                    for (; i < f.length; i += 1) f[i].u(), f[i].d();
                    f.length = a.length
                }
            },
            u: function() {
                r(l);
                for (var t = 0; t < f.length; t += 1) f[t].u()
            },
            d: function() {
                i(f)
            }
        }
    }

    function j(t, n, a, c, s, f, h, d) {
        for (var m, v, _, g, y, p, w = f.number, b = f.entries, x = [], N = 0; N < b.length; N += 1) x[N] = q(t, n, a, c, s, f, h, b, b[N], N, d);
        var E = t.showNew && P(t, n, a, c, s, f, h, d);
        return {
            c: function() {
                m = u("td"), _ = u("span"), g = l(w), y = l("\n                ");
                for (var t = 0; t < x.length; t += 1) x[t].c();
                p = l("\n                "), E && E.c(), this.h()
            },
            h: function() {
                O(m), m.className = v = ("" === f.number ? "filler" : "") + " " + (f.today ? "today" : ""), O(_), _.className = "day-number"
            },
            m: function(t, n) {
                o(m, t, n), e(_, m), e(g, _), e(y, m);
                for (var r = 0; r < x.length; r += 1) x[r].m(m, null);
                e(p, m), E && E.m(m, null)
            },
            p: function(t, n, e, o, r, a, i, c) {
                t.monthData && v !== (v = ("" === i.number ? "filler" : "") + " " + (i.today ? "today" : "")) && (m.className = v), t.monthData && w !== (w = i.number) && (g.data = w);
                var u = i.entries;
                if (t.monthData || t.defaultColor || t.untitledText) {
                    for (var l = 0; l < u.length; l += 1) x[l] ? x[l].p(t, n, e, o, r, a, i, c, u, u[l], l) : (x[l] = q(n, e, o, r, a, i, c, u, u[l], l, d), x[l].c(), x[l].m(m, p));
                    for (; l < x.length; l += 1) x[l].u(), x[l].d();
                    x.length = u.length
                }
                n.showNew ? E ? E.p(t, n, e, o, r, a, i, c) : ((E = P(n, e, o, r, a, i, c, d)).c(), E.m(m, null)) : E && (E.u(), E.d(), E = null)
            },
            u: function() {
                r(m);
                for (var t = 0; t < x.length; t += 1) x[t].u();
                E && E.u()
            },
            d: function() {
                i(x), E && E.d()
            }
        }
    }

    function q(t, n, a, i, c, s, d, v, _, g, y) {
        var p, w, b, x, N = E(_.title, 30, t.untitledText);
        return {
            c: function() {
                p = u("span"), x = l(N), this.h()
            },
            h: function() {
                O(p), p.className = w = "entry " + (_.content ? "has-content" : ""), m(p, "background-color", _.color || t.defaultColor), m(p, "color", _.contrastColor), p.title = b = _.title, f(p, "click", ot), p._svelte = {
                    component: y,
                    entries_1: v,
                    entry_index: g
                }
            },
            m: function(t, n) {
                o(p, t, n), e(x, p)
            },
            p: function(t, n, e, o, r, a, i, c, u, l, s) {
                t.monthData && w !== (w = "entry " + (l.content ? "has-content" : "")) && (p.className = w), (t.monthData || t.defaultColor) && m(p, "background-color", l.color || n.defaultColor), t.monthData && m(p, "color", l.contrastColor), t.monthData && b !== (b = l.title) && (p.title = b), p._svelte.entries_1 = u, p._svelte.entry_index = s, (t.monthData || t.untitledText) && N !== (N = E(l.title, 30, n.untitledText)) && (x.data = N)
            },
            u: function() {
                r(p)
            },
            d: function() {
                h(p, "click", ot)
            }
        }
    }

    function P(t, n, e, a, i, c, l, s) {
        var d;
        return {
            c: function() {
                (d = u("div")).textContent = "+", this.h()
            },
            h: function() {
                O(d), d.className = "add-new", f(d, "click", rt), d._svelte = {
                    component: s,
                    week_1: i,
                    weekday_index: l
                }
            },
            m: function(t, n) {
                o(d, t, n)
            },
            p: function(t, n, e, o, r, a, i, c) {
                d._svelte.week_1 = a, d._svelte.weekday_index = c
            },
            u: function() {
                r(d)
            },
            d: function() {
                h(d, "click", rt)
            }
        }
    }

    function Y(n, a) {
        var i, c;
        return {
            c: function() {
                i = u("div"), c = l(n.emptyText), this.h()
            },
            h: function() {
                O(i), i.className = "no-entries"
            },
            m: function(t, n) {
                o(i, t, n), e(c, i)
            },
            p: function(t, n) {
                t.emptyText && (c.data = n.emptyText)
            },
            u: function() {
                r(i)
            },
            d: t
        }
    }

    function U(t, n, e, a, c) {
        for (var u, l = e, f = [], h = 0; h < l.length; h += 1) f[h] = W(t, n, e, a, l, l[h], h, c);
        return {
            c: function() {
                for (var t = 0; t < f.length; t += 1) f[t].c();
                u = s()
            },
            m: function(t, n) {
                for (var e = 0; e < f.length; e += 1) f[e].m(t, n);
                o(u, t, n)
            },
            p: function(t, n, e, o, r) {
                var a = o;
                if (t.monthData || t.defaultColor || t.untitledText) {
                    for (var i = 0; i < a.length; i += 1) f[i] ? f[i].p(t, n, e, o, r, a, a[i], i) : (f[i] = W(n, e, o, r, a, a[i], i, c), f[i].c(), f[i].m(u.parentNode, u));
                    for (; i < f.length; i += 1) f[i].u(), f[i].d();
                    f.length = a.length
                }
            },
            u: function() {
                for (var t = 0; t < f.length; t += 1) f[t].u();
                r(u)
            },
            d: function() {
                i(f)
            }
        }
    }

    function W(t, n, e, a, i, c, u, l) {
        var f, h = c.entries.length > 0 && G(t, n, e, a, i, c, u, l);
        return {
            c: function() {
                h && h.c(), f = s()
            },
            m: function(t, n) {
                h && h.m(t, n), o(f, t, n)
            },
            p: function(t, n, e, o, r, a, i, c) {
                i.entries.length > 0 ? h ? h.p(t, n, e, o, r, a, i, c) : ((h = G(n, e, o, r, a, i, c, l)).c(), h.m(f.parentNode, f)) : h && (h.u(), h.d(), h = null)
            },
            u: function() {
                h && h.u(), r(f)
            },
            d: function() {
                h && h.d()
            }
        }
    }

    function $(t, n, a, i, c, s, d, v, _, g, y) {
        var p, w, b, x, N, D, k = E(_.title, 70, t.untitledText),
            T = !_.all_day && 1 === _.days.length && z(t, n, a, i, c, s, d, v, _, g, y);
        return {
            c: function() {
                p = u("p"), w = u("span"), b = l("\n                "), T && T.c(), x = l("\n                "), N = u("span"), D = l(k), this.h()
            },
            h: function() {
                O(p), O(w), w.className = "dot", m(w, "background-color", _.color || t.defaultColor), O(N), N.className = "row-entry-title", f(N, "click", at), N._svelte = {
                    component: y,
                    entries_1: v,
                    entry_index: g
                }
            },
            m: function(t, n) {
                o(p, t, n), e(w, p), e(b, p), T && T.m(p, null), e(x, p), e(N, p), e(D, N)
            },
            p: function(t, n, e, o, r, a, i, c, u, l, s) {
                (t.monthData || t.defaultColor) && m(w, "background-color", l.color || n.defaultColor), l.all_day || 1 !== l.days.length ? T && (T.u(), T.d(), T = null) : T ? T.p(t, n, e, o, r, a, i, c, u, l, s) : ((T = z(n, e, o, r, a, i, c, u, l, s, y)).c(), T.m(p, x)), N._svelte.entries_1 = u, N._svelte.entry_index = s, (t.monthData || t.untitledText) && k !== (k = E(l.title, 70, n.untitledText)) && (D.data = k)
            },
            u: function() {
                r(p), T && T.u()
            },
            d: function() {
                T && T.d(), h(N, "click", at)
            }
        }
    }

    function z(n, a, i, c, s, f, h, d, m, v, _) {
        var g, y, p, w, b = m._start.toTimeString().substr(0, 5),
            x = m._end.toTimeString().substr(0, 5);
        return {
            c: function() {
                g = u("span"), y = l(b), p = l(" - "), w = l(x), this.h()
            },
            h: function() {
                O(g), g.className = "row-entry-time"
            },
            m: function(t, n) {
                o(g, t, n), e(y, g), e(p, g), e(w, g)
            },
            p: function(t, n, e, o, r, a, i, c, u, l, s) {
                t.monthData && b !== (b = l._start.toTimeString().substr(0, 5)) && (y.data = b), t.monthData && x !== (x = l._end.toTimeString().substr(0, 5)) && (w.data = x)
            },
            u: function() {
                r(g)
            },
            d: t
        }
    }

    function G(t, n, a, c, s, f, h, d) {
        for (var m, v, _, g, y = f.date.toDateString(), p = f.entries, w = [], b = 0; b < p.length; b += 1) w[b] = $(t, n, a, c, s, f, h, p, p[b], b, d);
        return {
            c: function() {
                m = u("div"), v = l(y), _ = l("\n          "), g = u("div");
                for (var t = 0; t < w.length; t += 1) w[t].c();
                this.h()
            },
            h: function() {
                O(m), m.className = "row-header", O(g), g.className = "row-content"
            },
            m: function(t, n) {
                o(m, t, n), e(v, m), o(_, t, n), o(g, t, n);
                for (var r = 0; r < w.length; r += 1) w[r].m(g, null)
            },
            p: function(t, n, e, o, r, a, i, c) {
                t.monthData && y !== (y = i.date.toDateString()) && (v.data = y);
                var u = i.entries;
                if (t.monthData || t.defaultColor || t.untitledText) {
                    for (var l = 0; l < u.length; l += 1) w[l] ? w[l].p(t, n, e, o, r, a, i, c, u, u[l], l) : (w[l] = $(n, e, o, r, a, i, c, u, u[l], l, d), w[l].c(), w[l].m(g, null));
                    for (; l < w.length; l += 1) w[l].u(), w[l].d();
                    w.length = u.length
                }
            },
            u: function() {
                r(m), r(_), r(g);
                for (var t = 0; t < w.length; t += 1) w[t].u()
            },
            d: function() {
                i(w)
            }
        }
    }

    function K(t, n) {
        for (var a, c, s, f, h, d = t.dayNames, m = [], v = 0; v < d.length; v += 1) m[v] = I(t, d, d[v], v, n);
        for (var _ = t.monthData.weeks, g = [], v = 0; v < _.length; v += 1) g[v] = J(t, _, _[v], v, n);
        return {
            c: function() {
                a = u("table"), c = u("thead"), s = u("tr");
                for (t = 0; t < m.length; t += 1) m[t].c();
                f = l("\n      "), h = u("tbody");
                for (var t = 0; t < g.length; t += 1) g[t].c();
                this.h()
            },
            h: function() {
                O(a), O(c), O(s), O(h)
            },
            m: function(t, n) {
                o(a, t, n), e(c, a), e(s, c);
                for (r = 0; r < m.length; r += 1) m[r].m(s, null);
                e(f, a), e(h, a);
                for (var r = 0; r < g.length; r += 1) g[r].m(h, null)
            },
            p: function(t, e) {
                var o = e.dayNames;
                if (t.dayNames) {
                    for (a = 0; a < o.length; a += 1) m[a] ? m[a].p(t, e, o, o[a], a) : (m[a] = I(e, o, o[a], a, n), m[a].c(), m[a].m(s, null));
                    for (; a < m.length; a += 1) m[a].u(), m[a].d();
                    m.length = o.length
                }
                var r = e.monthData.weeks;
                if (t.monthData || t.defaultColor || t.untitledText || t.showNew) {
                    for (var a = 0; a < r.length; a += 1) g[a] ? g[a].p(t, e, r, r[a], a) : (g[a] = J(e, r, r[a], a, n), g[a].c(), g[a].m(h, null));
                    for (; a < g.length; a += 1) g[a].u(), g[a].d();
                    g.length = r.length
                }
            },
            u: function() {
                r(a);
                for (t = 0; t < m.length; t += 1) m[t].u();
                for (var t = 0; t < g.length; t += 1) g[t].u()
            },
            d: function() {
                i(m), i(g)
            }
        }
    }

    function Q(t, n) {
        for (var e, a, c = 0 === t.monthData.numEntries && Y(t, n), u = t.monthData.weeks, f = [], h = 0; h < u.length; h += 1) f[h] = U(t, u, u[h], h, n);
        return {
            c: function() {
                c && c.c(), e = l("\n    ");
                for (var t = 0; t < f.length; t += 1) f[t].c();
                a = s()
            },
            m: function(t, n) {
                c && c.m(t, n), o(e, t, n);
                for (var r = 0; r < f.length; r += 1) f[r].m(t, n);
                o(a, t, n)
            },
            p: function(t, o) {
                0 === o.monthData.numEntries ? c ? c.p(t, o) : ((c = Y(o, n)).c(), c.m(e.parentNode, e)) : c && (c.u(), c.d(), c = null);
                var r = o.monthData.weeks;
                if (t.monthData || t.defaultColor || t.untitledText) {
                    for (var i = 0; i < r.length; i += 1) f[i] ? f[i].p(t, o, r, r[i], i) : (f[i] = U(o, r, r[i], i, n), f[i].c(), f[i].m(a.parentNode, a));
                    for (; i < f.length; i += 1) f[i].u(), f[i].d();
                    f.length = r.length
                }
            },
            u: function() {
                c && c.u(), r(e);
                for (var t = 0; t < f.length; t += 1) f[t].u();
                r(a)
            },
            d: function() {
                c && c.d(), i(f)
            }
        }
    }

    function R(n, e) {
        var a, i, c, s, f, h = n.activeEntry.all_day ? n.activeEntry._end.toDateString() : n.activeEntry._end.toString();
        return {
            c: function() {
                a = u("br"), i = l("\n        "), (c = u("strong")).textContent = "End:", s = l(" "), f = l(h), this.h()
            },
            h: function() {
                O(a), O(c)
            },
            m: function(t, n) {
                o(a, t, n), o(i, t, n), o(c, t, n), o(s, t, n), o(f, t, n)
            },
            p: function(t, n) {
                t.activeEntry && h !== (h = n.activeEntry.all_day ? n.activeEntry._end.toDateString() : n.activeEntry._end.toString()) && (f.data = h)
            },
            u: function() {
                r(a), r(i), r(c), r(s), r(f)
            },
            d: t
        }
    }

    function V(n, e) {
        var a, i, c;
        return {
            c: function() {
                a = u("img"), this.h()
            },
            h: function() {
                O(a), a.src = i = n.activeEntry.image, a.alt = c = n.activeEntry.title
            },
            m: function(t, n) {
                o(a, t, n)
            },
            p: function(t, n) {
                t.activeEntry && i !== (i = n.activeEntry.image) && (a.src = i), t.activeEntry && c !== (c = n.activeEntry.title) && (a.alt = c)
            },
            u: function() {
                r(a)
            },
            d: t
        }
    }

    function X(n, e) {
        var a, i = n.activeEntry.content;
        return {
            c: function() {
                a = l(i)
            },
            m: function(t, n) {
                o(a, t, n)
            },
            p: function(t, n) {
                t.activeEntry && i !== (i = n.activeEntry.content) && (a.data = i)
            },
            u: function() {
                r(a)
            },
            d: t
        }
    }

    function Z(n, e) {
        var a, i = n.activeEntry.content;
        return {
            c: function() {
                a = u("div"), this.h()
            },
            h: function() {
                O(a), m(a, "white-space", "pre")
            },
            m: function(t, n) {
                o(a, t, n), a.innerHTML = i
            },
            p: function(t, n) {
                t.activeEntry && i !== (i = n.activeEntry.content) && (a.innerHTML = i)
            },
            u: function() {
                a.innerHTML = "", r(a)
            },
            d: t
        }
    }

    function tt(t, n) {
        var a, i, c, f, h, d, m, v, _ = t.activeEntry.all_day ? t.activeEntry._start.toDateString() : t.activeEntry._start.toString(),
            g = t.activeEntry.end && R(t, n),
            y = t.activeEntry.image && V(t, n),
            p = ct(t),
            w = p(t, n);
        return {
            c: function() {
                a = u("div"), (i = u("strong")).textContent = "Start:", c = l(" "), f = l(_), h = l("\n      "), g && g.c(), d = l("\n    "), y && y.c(), m = l("\n    "), w.c(), v = s(), this.h()
            },
            h: function() {
                O(a), a.className = "entry-meta", O(i)
            },
            m: function(t, n) {
                o(a, t, n), e(i, a), e(c, a), e(f, a), e(h, a), g && g.m(a, null), o(d, t, n), y && y.m(t, n), o(m, t, n), w.m(t, n), o(v, t, n)
            },
            p: function(t, e) {
                t.activeEntry && _ !== (_ = e.activeEntry.all_day ? e.activeEntry._start.toDateString() : e.activeEntry._start.toString()) && (f.data = _), e.activeEntry.end ? g ? g.p(t, e) : ((g = R(e, n)).c(), g.m(a, null)) : g && (g.u(), g.d(), g = null), e.activeEntry.image ? y ? y.p(t, e) : ((y = V(e, n)).c(), y.m(m.parentNode, m)) : y && (y.u(), y.d(), y = null), p === (p = ct(e)) && w ? w.p(t, e) : (w.u(), w.d(), (w = p(e, n)).c(), w.m(v.parentNode, v))
            },
            u: function() {
                r(a), g && g.u(), r(d), y && y.u(), r(m), w.u(), r(v)
            },
            d: function() {
                g && g.d(), y && y.d(), w.d()
            }
        }
    }

    function nt(t, n, a, i, c) {
        var s, d, m = a.text;
        return {
            c: function() {
                s = u("button"), d = l(m), this.h()
            },
            h: function() {
                O(s), s.className = "button", f(s, "click", ut), s._svelte = {
                    component: c,
                    modalButtons: n,
                    button_index: i
                }
            },
            m: function(t, n) {
                o(s, t, n), e(d, s)
            },
            p: function(t, n, e, o, r) {
                s._svelte.modalButtons = e, s._svelte.button_index = r, t.modalButtons && m !== (m = o.text) && (d.data = m)
            },
            u: function() {
                r(s)
            },
            d: function() {
                h(s, "click", ut)
            }
        }
    }

    function et(t, n) {
        for (var e, a = t.modalButtons, c = [], l = 0; l < a.length; l += 1) c[l] = nt(t, a, a[l], l, n);
        return {
            c: function() {
                e = u("div");
                for (var t = 0; t < c.length; t += 1) c[t].c();
                this.h()
            },
            h: function() {
                O(e), e.className = "modal-buttons"
            },
            m: function(t, n) {
                o(e, t, n);
                for (var r = 0; r < c.length; r += 1) c[r].m(e, null)
            },
            p: function(t, o) {
                var r = o.modalButtons;
                if (t.modalButtons || t.activeEntry) {
                    for (var a = 0; a < r.length; a += 1) c[a] ? c[a].p(t, o, r, r[a], a) : (c[a] = nt(o, r, r[a], a, n), c[a].c(), c[a].m(e, null));
                    for (; a < c.length; a += 1) c[a].u(), c[a].d();
                    c.length = r.length
                }
            },
            u: function() {
                r(e);
                for (var t = 0; t < c.length; t += 1) c[t].u()
            },
            d: function() {
                i(c)
            }
        }
    }

    function ot(t) {
        var n = this._svelte.component,
            e = this._svelte.entries_1[this._svelte.entry_index];
        n.loadEntry(e)
    }

    function rt(t) {
        var n = this._svelte.component,
            e = this._svelte.week_1[this._svelte.weekday_index];
        n.fire("newClicked", {
            day: e
        })
    }

    function at(t) {
        var n = this._svelte.component,
            e = this._svelte.entries_1[this._svelte.entry_index];
        n.loadEntry(e)
    }

    function it(t) {
        return "calendar" === t.view ? K : Q
    }

    function ct(t) {
        return t.escape ? X : Z
    }

    function ut(t) {
        var n = this._svelte.component,
            e = this._svelte.modalButtons[this._svelte.button_index],
            o = n.get();
        n.fire(e.id, {
            entry: o.activeEntry
        })
    }

    function lt(t) {
        p(this, t), this._state = n(L(), t.data), this._recompute({
            year: 1,
            month: 1,
            entries: 1
        }, this._state), t._root || (this._oncreate = [], this._beforecreate = [], this._aftercreate = []), this._fragment = F(this._state, this), t.target && (this._fragment.c(), this._fragment.m(t.target, t.anchor || null), this._lock = !0, w(this._beforecreate), w(this._oncreate), w(this._aftercreate), this._lock = !1)
    }
    var st = {
        destroy: _,
        get: function(t) {
            return t ? this._state[t] : this._state
        },
        fire: function(t, n) {
            var e = t in this._handlers && this._handlers[t].slice();
            if (e)
                for (var o = 0; o < e.length; o += 1) e[o].call(this, n)
        },
        observe: function(t, n, e) {
            var o = e && e.defer ? this._observers.post : this._observers.pre;
            return (o[t] || (o[t] = [])).push(n), e && !1 === e.init || (n.__calling = !0, n.call(this, this._state[t]), n.__calling = !1), {
                cancel: function() {
                    var e = o[t].indexOf(n);
                    ~e && o[t].splice(e, 1)
                }
            }
        },
        on: function(t, n) {
            if ("teardown" === t) return this.on("destroy", n);
            var e = this._handlers[t] || (this._handlers[t] = []);
            return e.push(n), {
                cancel: function() {
                    var t = e.indexOf(n);
                    ~t && e.splice(t, 1)
                }
            }
        },
        set: function(t) {
            this._set(n({}, t)), this._root._lock || (this._root._lock = !0, w(this._root._beforecreate), w(this._root._oncreate), w(this._root._aftercreate), this._root._lock = !1)
        },
        teardown: _,
        _recompute: t,
        _set: function(t) {
            var e = this._state,
                o = {},
                r = !1;
            for (var a in t) g(t[a], e[a]) && (o[a] = r = !0);
            r && (this._state = n({}, e, t), this._recompute(o, this._state), this._bind && this._bind(o, this._state), y(this, this._observers.pre, o, this._state, e), this._fragment.p(o, this._state), y(this, this._observers.post, o, this._state, e))
        },
        _mount: function(t, n) {
            this._fragment.m(t, n)
        },
        _unmount: function() {
            this._fragment.u()
        }
    };
    return n(S.prototype, st), n(lt.prototype, {
        setDeep: function(t, n) {
            if (void 0 !== t) {
                var e = t.replace(/\[(\d+)\]/g, ".$1").split("."),
                    o = e.pop();
                if (void 0 === e[0]) {
                    var r = {};
                    return r[o] = n, void this.set(r)
                }
                for (var a = this.get(e[0]), i = 1; i < e.length; i++) a = a[e[i]];
                a[o] = n;
                var c = {};
                c[e[0]] = this.get(e[0]), this.set(c)
            }
        },
        loadEntry: function(t) {
            this.fire("entryClicked", {
                entry: t
            }), this.set({
                showModal: !0,
                activeEntry: t
            })
        }
    }, st), lt.prototype._recompute = function(t, n) {
        (t.year || t.month || t.entries) && g(n.monthData, n.monthData = B(n.year, n.month, n.entries)) && (t.monthData = !0)
    }, lt
}();