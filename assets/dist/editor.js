var Editor = function() {
    "use strict";

    function t() {}

    function e(t) {
        for (var e, n, o = 1, i = arguments.length; o < i; o++) {
            n = arguments[o];
            for (e in n) t[e] = n[e]
        }
        return t
    }

    function n(t, e) {
        e.appendChild(t)
    }

    function o(t, e, n) {
        e.insertBefore(t, n)
    }

    function i(t) {
        t.parentNode.removeChild(t)
    }

    function r(t, e) {
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }

    function s(t) {
        for (var e = 0; e < t.length; e += 1) t[e] && t[e].d()
    }

    function a() {
        return document.createDocumentFragment()
    }

    function l(t) {
        return document.createElement(t)
    }

    function c(t) {
        return document.createTextNode(t)
    }

    function d(t, e, n) {
        t.addEventListener(e, n, !1)
    }

    function u(t, e, n) {
        t.removeEventListener(e, n, !1)
    }

    function f(t, e, n) {
        t.setAttribute(e, n)
    }

    function h(t, e, n) {
        t.style.setProperty(e, n)
    }

    function _() {
        return Object.create(null)
    }

    function m(e) {
        this.destroy = t, this.fire("destroy"), this.set = this.get = t, !1 !== e && this._fragment.u(), this._fragment.d(), this._fragment = this._state = null
    }

    function v(t, e) {
        return t !== e || t && "object" == typeof t || "function" == typeof t
    }

    function p(t, e, n, o, i) {
        for (var r in e)
            if (n[r]) {
                var s = o[r],
                    a = i[r],
                    l = e[r];
                if (l)
                    for (var c = 0; c < l.length; c += 1) {
                        var d = l[c];
                        d.__calling || (d.__calling = !0, d.call(t, s, a), d.__calling = !1)
                    }
            }
    }

    function g(t, e) {
        t.options = e, t._observers = {
            pre: _(),
            post: _()
        }, t._handlers = _(), t._root = e._root || t, t._yield = e._yield, t._bind = e._bind
    }

    function y(t) {
        for (; t && t.length;) t.pop()()
    }

    function b(t, e) {
        for (var n = "" + t; n.length < e;) n = "0" + n;
        return n
    }

    function w(t) {
        if (!t) return "#ffffff";
        var e = "#" === t.charAt(0) ? t.substring(1, 7) : t;
        return .299 * parseInt(e.substring(0, 2), 16) + .587 * parseInt(e.substring(2, 4), 16) + .114 * parseInt(e.substring(4, 6), 16) > 186 ? "#000000" : "#ffffff"
    }

    function x() {
        var t = (new Date).getTimezoneOffset();
        return (t < 0 ? "+" : "-") + b(parseInt(Math.abs(t / 60)), 2) + b(Math.abs(t % 60), 2)
    }

    function k(t) {
        return t.getFullYear() + "-" + b(t.getMonth() + 1, 2) + "-" + b(t.getDate(), 2)
    }

    function C(t) {
        return b(t.getHours(), 2) + ":" + b(t.getMinutes(), 2)
    }

    function N() {
        return {
            show: !1,
            title: "This is the title of the Modal and it might be very long",
            color: "#f5f5f5"
        }
    }

    function T() {
        var t = this;
        this.observe("show", function(e) {
            e ? (t.fire("modalOpen"), document.querySelector("html").style.overflow = "hidden") : (t.fire("modalClose"), document.querySelector("html").style.overflow = "")
        })
    }

    function S(t) {
        f(t, "svelte-3331023524", "")
    }

    function E(t, e) {
        function s(t) {
            var n = e.get();
            e.set({
                show: n.show && 27 !== t.keyCode
            })
        }

        function a(t) {
            e.set({
                show: !1
            })
        }

        function _(t) {
            e.set({
                show: !1
            })
        }
        var m, v, p, g, y, b, x, k, C, N, T, E, O, D = e._slotted.default;
        return window.addEventListener("keydown", s), {
            c: function() {
                m = c("\n"), v = l("div"), g = l("div"), y = c("\n  "), b = l("div"), x = l("div"), k = l("span"), C = c(t.title), N = c("\n      "), (T = l("button")).textContent = "×", E = c("\n    "), O = l("div"), this.h()
            },
            h: function() {
                S(v), v.className = p = "modal " + (t.show ? "active" : ""), S(g), g.className = "modal-background", d(g, "click", a), S(b), b.className = "modal-container", S(x), x.className = "modal-header", h(x, "background-color", t.color), S(k), k.className = "modal-title", h(k, "color", w(t.color)), S(T), T.className = "modal-close", f(T, "aria-label", "close"), h(T, "color", w(t.color)), d(T, "click", _), S(O), O.className = "modal-body"
            },
            m: function(t, e) {
                o(m, t, e), o(v, t, e), n(g, v), n(y, v), n(b, v), n(x, b), n(k, x), n(C, k), n(N, x), n(T, x), n(E, b), n(O, b), D && n(D, O)
            },
            p: function(t, e) {
                t.show && p !== (p = "modal " + (e.show ? "active" : "")) && (v.className = p), t.color && (h(x, "background-color", e.color), h(k, "color", w(e.color))), t.title && (C.data = e.title), t.color && h(T, "color", w(e.color))
            },
            u: function() {
                i(m), i(v), D && r(O, D)
            },
            d: function() {
                window.removeEventListener("keydown", s), u(g, "click", a), u(T, "click", _)
            }
        }
    }

    function O(t) {
        g(this, t), this._state = e(N(), t.data), this._slotted = t.slots || {};
        var n = T.bind(this);
        t._root ? this._root._oncreate.push(n) : this._oncreate = [n], this.slots = {}, this._fragment = E(this._state, this), t.target && (this._fragment.c(), this._fragment.m(t.target, t.anchor || null), y(this._oncreate))
    }

    function D(t, e) {
        return new Date(t + "T" + (e || "12:00") + x())
    }

    function M(t, e) {
        return new Date(t + "T" + (e || "12:00") + x())
    }

    function A() {
        return {
            calendar: null,
            show: !1,
            mode: "create",
            entry: {},
            monthNames: [],
            newTitleText: "Add New Entry",
            editTitleText: "Edit Entry",
            start_date: "",
            start_time: "",
            end_date: "",
            end_time: "",
            color: "",
            colorOptions: ["#00008b", "#B03060", "#FE9A76", "#FFD700", "#32CD32", "#016936", "#008080", "#0E6EB8", "#EE82EE", "#B413EC", "#A52A2A", "#A0A0A0", "#000000"]
        }
    }

    function I() {
        var t = this,
            e = this.get("calendar");
        this.set({
            monthNames: e.get("monthNames"),
            defaultColor: e.get("defaultColor")
        }), this.reset(), e.on("newClicked", function(e) {
            var n = e.day.date,
                o = n.toISOString().substr(0, 10);
            n.setHours(10), t.set({
                show: !0,
                mode: "create",
                start_date: o,
                end_date: o,
                start_time: "12:00",
                end_time: "12:00",
                entry: {
                    title: "",
                    color: t.get("defaultColor"),
                    all_day: !1,
                    content: ""
                }
            })
        }), e.on("editClicked", function(n) {
            var o = Object.assign({}, n.entry);
            e.set({
                showModal: !1
            });
            var i = k(o._start),
                r = C(o._start),
                s = k(o._end),
                a = C(o._end);
            t.set({
                entry: o,
                start_date: i,
                start_time: r,
                end_date: s,
                end_time: a,
                show: !0,
                mode: "edit"
            })
        }), e.on("deleteClicked", function(n) {
            var o = n.entry;
            confirm("Really delete? There is no undo.") && (t.delete(o), e.set({
                showModal: !1
            }))
        }), e.on("entryClicked", function(n) {
            var o = n.entry;
            t.set({
                entry: o
            }), e.set({
                modalButtons: [{
                    text: "Edit",
                    id: "editClicked"
                }, {
                    text: "Delete",
                    id: "deleteClicked"
                }]
            })
        })
    }

    function Y(t) {
        f(t, "svelte-1864723738", "")
    }

    function B(t, e) {
        function o() {
            at = !0;
            var t = e.get();
            t.entry.title = g.value, e.set({
                entry: t.entry
            }), at = !1
        }

        function i() {
            var t = e.get();
            t.entry.all_day = k.checked, e.set({
                entry: t.entry
            })
        }

        function r() {
            lt = !0, e.set({
                start_date: D.value
            }), lt = !1
        }

        function f() {
            dt = !0, e.set({
                end_date: U.value
            }), dt = !1
        }

        function h() {
            ft = !0;
            var t = e.get();
            t.entry.content = it.value, e.set({
                entry: t.entry
            }), ft = !1
        }

        function _(t) {
            e.submit()
        }
        for (var m, v, p, g, y, b, w, x, k, C, N, T, S, E, D, M, A, I, B, q, H, z, P, R, U, $, G, J, K, Q, V, W, X, Z, tt, et, nt, ot, it, rt, st, at = !1, lt = !1, ct = t.entry.all_day ? t._start.toDateString() : t._start.toString(), dt = !1, ut = t.entry.all_day ? t._end.toDateString() : t._end.toString(), ft = !1, ht = !t.entry.all_day && F(t, e), _t = !t.entry.all_day && L(t, e), mt = t.colorOptions, vt = [], pt = 0; pt < mt.length; pt += 1) vt[pt] = j(t, mt, mt[pt], pt, e);
        var gt = new O({
            _root: e._root,
            slots: {
                default: a()
            },
            data: {
                show: t.show,
                title: "create" === t.mode ? t.newTitleText : t.editTitleText,
                color: t.entry.color
            }
        });
        return gt.on("modalClose", function(t) {
            e.set({
                show: !1
            })
        }), gt.on("modalOpen", function(t) {
            e.set({
                show: !0
            })
        }), {
            c: function() {
                m = l("div"), (v = l("label")).textContent = "Entry Title", p = c("\n    "), g = l("input"), y = c("\n  "), b = l("div"), (w = l("label")).textContent = "All Day", x = c("\n    "), k = l("input"), C = c("\n  "), N = l("div"), T = l("div"), (S = l("label")).textContent = "Start", E = c("\n      "), D = l("input"), M = c("\n    "), ht && ht.c(), A = c("\n  "), I = l("p"), B = c(ct), q = c("\n  "), H = l("div"), z = l("div"), (P = l("label")).textContent = "End", R = c("\n      "), U = l("input"), $ = c("\n    "), _t && _t.c(), G = c("\n  "), J = l("p"), K = c(ut), Q = c("\n\n  "), V = l("div"), (W = l("label")).textContent = "Entry Color", X = c("\n    "), Z = l("div");
                for (var t = 0; t < vt.length; t += 1) vt[t].c();
                tt = c("\n  "), et = l("div"), (nt = l("label")).textContent = "Content", ot = c("\n    "), it = l("textarea"), rt = c("\n  "), (st = l("button")).textContent = "Submit", gt._fragment.c(), this.h()
            },
            h: function() {
                Y(m), m.className = "field", Y(v), Y(g), g.id = "entry-title", g.placeholder = "Enter a short but descriptive title", d(g, "input", o), Y(b), b.className = "field", Y(w), Y(k), k.type = "checkbox", d(k, "change", i), Y(N), N.className = "field-group", Y(T), T.className = "field", Y(S), Y(D), D.type = "text", D.placeholder = "YYYY-MM-DD", d(D, "input", r), Y(I), I.className = "feedback", Y(H), H.className = "field-group", Y(z), z.className = "field", Y(P), Y(U), U.type = "text", U.placeholder = "YYYY-MM-DD", d(U, "input", f), Y(J), J.className = "feedback", Y(V), V.className = "field", Y(W), Y(Z), Y(et), et.className = "field", Y(nt), Y(it), d(it, "input", h), Y(st), st.className = "button", d(st, "click", _)
            },
            m: function(o, i) {
                n(m, gt._slotted.default), n(v, m), n(p, m), n(g, m), g.value = t.entry.title, n(y, gt._slotted.default), n(b, gt._slotted.default), n(w, b), n(x, b), n(k, b), k.checked = t.entry.all_day, n(C, gt._slotted.default), n(N, gt._slotted.default), n(T, N), n(S, T), n(E, T), n(D, T), D.value = t.start_date, n(M, N), ht && ht.m(N, null), n(A, gt._slotted.default), n(I, gt._slotted.default), n(B, I), n(q, gt._slotted.default), n(H, gt._slotted.default), n(z, H), n(P, z), n(R, z), n(U, z), U.value = t.end_date, n($, H), _t && _t.m(H, null), n(G, gt._slotted.default), n(J, gt._slotted.default), n(K, J), n(Q, gt._slotted.default), n(V, gt._slotted.default), n(W, V), n(X, V), n(Z, V);
                for (var r = 0; r < vt.length; r += 1) vt[r].m(Z, null);
                n(tt, gt._slotted.default), n(et, gt._slotted.default), n(nt, et), n(ot, et), n(it, et), it.value = t.entry.content, n(rt, gt._slotted.default), n(st, gt._slotted.default), e.refs.submitButton = st, gt._mount(o, i)
            },
            p: function(t, n) {
                at || (g.value = n.entry.title), k.checked = n.entry.all_day, lt || (D.value = n.start_date), n.entry.all_day ? ht && (ht.u(), ht.d(), ht = null) : ht ? ht.p(t, n) : ((ht = F(n, e)).c(), ht.m(N, null)), (t.entry || t._start) && ct !== (ct = n.entry.all_day ? n._start.toDateString() : n._start.toString()) && (B.data = ct), dt || (U.value = n.end_date), n.entry.all_day ? _t && (_t.u(), _t.d(), _t = null) : _t ? _t.p(t, n) : ((_t = L(n, e)).c(), _t.m(H, null)), (t.entry || t._end) && ut !== (ut = n.entry.all_day ? n._end.toDateString() : n._end.toString()) && (K.data = ut);
                var o = n.colorOptions;
                if (t.color || t.colorOptions) {
                    for (var i = 0; i < o.length; i += 1) vt[i] ? vt[i].p(t, n, o, o[i], i) : (vt[i] = j(n, o, o[i], i, e), vt[i].c(), vt[i].m(Z, null));
                    for (; i < vt.length; i += 1) vt[i].u(), vt[i].d();
                    vt.length = o.length
                }
                ft || (it.value = n.entry.content);
                var r = {};
                t.show && (r.show = n.show), (t.mode || t.newTitleText || t.editTitleText) && (r.title = "create" === n.mode ? n.newTitleText : n.editTitleText), t.entry && (r.color = n.entry.color), gt._set(r)
            },
            u: function() {
                ht && ht.u(), _t && _t.u();
                for (var t = 0; t < vt.length; t += 1) vt[t].u();
                gt._unmount()
            },
            d: function() {
                u(g, "input", o), u(k, "change", i), u(D, "input", r), ht && ht.d(), u(U, "input", f), _t && _t.d(), s(vt), u(it, "input", h), u(st, "click", _), e.refs.submitButton === st && (e.refs.submitButton = null), gt.destroy(!1)
            }
        }
    }

    function F(t, e) {
        function r() {
            _ = !0, e.set({
                start_time: h.value
            }), _ = !1
        }
        var s, a, f, h, _ = !1;
        return {
            c: function() {
                s = l("div"), (a = l("label")).textContent = "Time From", f = c("\n      "), h = l("input"), this.h()
            },
            h: function() {
                Y(s), s.className = "field", Y(a), Y(h), h.type = "text", h.placeholder = "optional", d(h, "input", r)
            },
            m: function(e, i) {
                o(s, e, i), n(a, s), n(f, s), n(h, s), h.value = t.start_time
            },
            p: function(t, e) {
                _ || (h.value = e.start_time)
            },
            u: function() {
                i(s)
            },
            d: function() {
                u(h, "input", r)
            }
        }
    }

    function L(t, e) {
        function r() {
            _ = !0, e.set({
                end_time: h.value
            }), _ = !1
        }
        var s, a, f, h, _ = !1;
        return {
            c: function() {
                s = l("div"), (a = l("label")).textContent = "Time To", f = c("\n      "), h = l("input"), this.h()
            },
            h: function() {
                Y(s), s.className = "field", Y(a), Y(h), h.type = "text", h.placeholder = "optional", d(h, "input", r)
            },
            m: function(e, i) {
                o(s, e, i), n(a, s), n(f, s), n(h, s), h.value = t.end_time
            },
            p: function(t, e) {
                _ || (h.value = e.end_time)
            },
            u: function() {
                i(s)
            },
            d: function() {
                u(h, "input", r)
            }
        }
    }

    function j(t, e, n, r, s) {
        var a, c;
        return {
            c: function() {
                a = l("span"), this.h()
            },
            h: function() {
                Y(a), a.className = c = "color " + (t.color === n ? "selected" : ""), h(a, "background-color", n), d(a, "click", q), a._svelte = {
                    component: s,
                    colorOptions: e,
                    hex_index: r
                }
            },
            m: function(t, e) {
                o(a, t, e)
            },
            p: function(t, e, n, o, i) {
                (t.color || t.colorOptions) && c !== (c = "color " + (e.color === o ? "selected" : "")) && (a.className = c), t.colorOptions && h(a, "background-color", o), a._svelte.colorOptions = n, a._svelte.hex_index = i
            },
            u: function() {
                i(a)
            },
            d: function() {
                u(a, "click", q)
            }
        }
    }

    function q(t) {
        var e = this._svelte.component,
            n = this._svelte.colorOptions[this._svelte.hex_index];
        e.setDeep("entry.color", n)
    }

    function H(t) {
        g(this, t), this.refs = {}, this._state = e(A(), t.data), this._recompute({
            start_date: 1,
            start_time: 1,
            end_date: 1,
            end_time: 1
        }, this._state);
        var n = I.bind(this);
        t._root ? this._root._oncreate.push(n) : (this._oncreate = [n], this._beforecreate = [], this._aftercreate = []), this._fragment = B(this._state, this), t.target && (this._fragment.c(), this._fragment.m(t.target, t.anchor || null), this._lock = !0, y(this._beforecreate), y(this._oncreate), y(this._aftercreate), this._lock = !1)
    }
    var z = {
        destroy: m,
        get: function(t) {
            return t ? this._state[t] : this._state
        },
        fire: function(t, e) {
            var n = t in this._handlers && this._handlers[t].slice();
            if (n)
                for (var o = 0; o < n.length; o += 1) n[o].call(this, e)
        },
        observe: function(t, e, n) {
            var o = n && n.defer ? this._observers.post : this._observers.pre;
            return (o[t] || (o[t] = [])).push(e), n && !1 === n.init || (e.__calling = !0, e.call(this, this._state[t]), e.__calling = !1), {
                cancel: function() {
                    var n = o[t].indexOf(e);
                    ~n && o[t].splice(n, 1)
                }
            }
        },
        on: function(t, e) {
            if ("teardown" === t) return this.on("destroy", e);
            var n = this._handlers[t] || (this._handlers[t] = []);
            return n.push(e), {
                cancel: function() {
                    var t = n.indexOf(e);
                    ~t && n.splice(t, 1)
                }
            }
        },
        set: function(t) {
            this._set(e({}, t)), this._root._lock || (this._root._lock = !0, y(this._root._beforecreate), y(this._root._oncreate), y(this._root._aftercreate), this._root._lock = !1)
        },
        teardown: m,
        _recompute: t,
        _set: function(t) {
            var n = this._state,
                o = {},
                i = !1;
            for (var r in t) v(t[r], n[r]) && (o[r] = i = !0);
            i && (this._state = e({}, n, t), this._recompute(o, this._state), this._bind && this._bind(o, this._state), p(this, this._observers.pre, o, this._state, n), this._fragment.p(o, this._state), p(this, this._observers.post, o, this._state, n))
        },
        _mount: function(t, e) {
            this._fragment.m(t, e)
        },
        _unmount: function() {
            this._fragment.u()
        }
    };
    return e(O.prototype, z), e(H.prototype, {
        setDeep: function(t, e) {
            if (void 0 !== t) {
                var n = t.replace(/\[(\d+)\]/g, ".$1").split("."),
                    o = n.pop();
                if (void 0 === n[0]) {
                    var i = {};
                    return i[o] = e, void this.set(i)
                }
                for (var r = this.get(n[0]), s = 1; s < n.length; s++) r = r[n[s]];
                r[o] = e;
                var a = {};
                a[n[0]] = this.get(n[0]), this.set(a)
            }
        },
        reset: function() {
            this.set({
                start_date: "",
                start_time: "12:00",
                end_date: "",
                end_time: "12:00",
                entry: {
                    title: "",
                    color: this.get("defaultColor"),
                    content: ""
                }
            })
        },
        submit: function() {
            var t = this.get("mode");
            "create" === t && this.create(), "edit" === t && this.update()
        },
        update: function() {
            var t = this.get("calendar"),
                e = this.get("entry");
            if (!e.id) return !1;
            var n = t.get("entries"),
                o = n.findIndex(function(t) {
                    return t.id === e.id
                });
            if (o < 0) return !1;
            e.start = this.get("_start").toISOString(), e.end = this.get("_end").toISOString(), n.splice(o, 1, e), t.set({
                entries: n
            }), this.set({
                show: !1
            }), this.reset(), this.fire("entryUpdated", {
                entry: e
            })
        },
        create: function() {
            var t = this.get("calendar"),
                e = this.get("entry");
            e.start = this.get("_start").toISOString(), e.end = this.get("_end").toISOString(), e.id = Math.random().toString(36).substr(2);
            var n = t.get("entries");
            n.push(e), t.set({
                entries: n
            }), this.set({
                show: !1
            }), this.fire("entryCreated", {
                entry: e
            })
        },
        delete: function(t) {
            var e = this.get("calendar");
            if (!t.id) return !1;
            var n = e.get("entries"),
                o = n.findIndex(function(e) {
                    return e.id === t.id
                });
            if (o < 0) return !1;
            n.splice(o, 1), e.set({
                entries: n
            }), this.reset(), this.set({
                show: !1
            }), this.fire("entryDeleted", {
                entry: t
            })
        }
    }, z), H.prototype._recompute = function(t, e) {
        (t.start_date || t.start_time) && v(e._start, e._start = D(e.start_date, e.start_time)) && (t._start = !0), (t.end_date || t.end_time) && v(e._end, e._end = M(e.end_date, e.end_time)) && (t._end = !0)
    }, H
}();