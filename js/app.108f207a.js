(function (t) {
  function e(e) {
    for (
      var n, o, s = e[0], c = e[1], h = e[2], l = 0, f = [];
      l < s.length;
      l++
    )
      (o = s[l]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && f.push(r[o][0]),
        (r[o] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    u && u(e);
    while (f.length) f.shift()();
    return a.push.apply(a, h || []), i();
  }
  function i() {
    for (var t, e = 0; e < a.length; e++) {
      for (var i = a[e], n = !0, s = 1; s < i.length; s++) {
        var c = i[s];
        0 !== r[c] && (n = !1);
      }
      n && (a.splice(e--, 1), (t = o((o.s = i[0]))));
    }
    return t;
  }
  var n = {},
    r = { app: 0 },
    a = [];
  function o(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = t),
    (o.c = n),
    (o.d = function (t, e, i) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = e), (s = s.slice());
  for (var h = 0; h < s.length; h++) e(s[h]);
  var u = c;
  a.push([0, "chunk-vendors"]), i();
})({
  0: function (t, e, i) {
    t.exports = i("56d7");
  },
  "034f": function (t, e, i) {
    "use strict";
    var n = i("85ec"),
      r = i.n(n);
    r.a;
  },
  "265a": function (t, e, i) {},
  "50c0": function (t, e, i) {
    t.exports = i.p + "img/0.f5d4ef55.png";
  },
  "56d7": function (t, e, i) {
    "use strict";
    i.r(e);
    i("e260"), i("e6cf"), i("cca6"), i("a79d");
    var n = i("2b0e"),
      r = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { staticClass: "box" },
          [
            i("h1", [t._v("💫  旋转的愿望之环 💫")], { staticStyle: { margin: "30px 30px 30px 30px" } }),
            i("demo1", { staticStyle: { margin: "30px auto" } }),
            t._m(0),
            t._m(1),
            t._m(2),
            i("p"),
            t._m(3),
            t._m(4),
          ],
          1
        );
      },
      a = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("p", [
            i("span", [t._v("愿望盒&实现盒")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("p", []);
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("p", [
            i("span", [t._v("© 2021 Wish Box Powered by ANON SYS, Inc.")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("p", []);
        },
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i("p", []);
        },
      ],
      o = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "box" },
          [
            n("img", { attrs: { src: i("6c5d"), width: "100%" } }),
            n("img", { staticClass: "pointer", attrs: { src: i("d209") } }),
            n("LuckyWheel", {
              ref: "LuckyWheel",
              staticClass: "luck-draw",
              attrs: {
                prizes: t.prizes,
                buttons: t.buttons,
                "default-style": t.defaultStyle,
                "default-config": t.defaultConfig,
              },
              on: { start: t.startCallBack, end: t.endCallBack },
            }),
          ],
          1
        );
      },
      s = [],
      c =
        (i("1d8f"),
        i("790c"),
        i("4df2"),
        {
          data: function () {
            return {
              prizes: [],
              buttons: [
                {
                  radius: "40px",
                  imgs: [{ src: i("6ba5"), width: "140%", top: "-135%" }],
                },
              ],
              defaultStyle: {
                fontColor: "#000",
                fontSize: "13px",
                fontStyle: "SimHei",
              },
              defaultConfig: { offsetDegree: 20 },
            };
          },
          mounted: function () {
            this.getPrizesList();
          },
          methods: {
            getPrizesList: function () {
              var t = this;
              this.prizes = [];
              var e = [
                { name: "香水", img: i("50c0"), color: "#f443365c" },
                { name: "拍写真", img: i("50c0"), color: "#7f5ce58f" },
                { name: "Swith游戏机", img: i("50c0"), color: "#e91e6399" },
                { name: "谢谢惠顾", img: i("50c0"), color: "#9c27b08c" },
                { name: "化妆品", img: i("50c0"), color: "#2767b036" },
                { name: "小米投影仪", img: i("50c0"), color: "#5cdbe599" },
                { name: "Iphone 13", img: i("50c0"), color: "#5ce59699" },
                { name: "谢谢惠顾", img: i("50c0"), color: "#a0e55c99" },
                { name: "清空购物车", img: i("50c0"), color: "#e5e45c99" },
                { name: "面膜", img: i("50c0"), color: "#e5b85c99" },
                { name: "谢谢惠顾", img: i("50c0"), color: "#e58c5c99" },
                { name: "床上四件套", img: i("50c0"), color: "#e55c5c6b" },
                { name: "服饰套装", img: i("50c0"), color: "#625ce56b" },
                { name: "AJ鞋子", img: i("50c0"), color: "#5ce5c952" },
                { name: "皮肤管理", img: i("50c0"), color: "#5ce56a9c" },
                { name: "海底捞", img: i("50c0"), color: "#e5e45c9c" },
                { name: "拍立得", img: i("50c0"), color: "#e5b85c9c" },
                { name: "泡泡玛特", img: i("50c0"), color: "#e5795c9c" },
                { name: "Airpods Pro", img: i("50c0"), color: "#2f6c46b8" },
                { name: "隐藏款", img: i("50c0"), color: "#98ff1eb8" },
                { name: "谢谢惠顾", img: i("50c0"), color: "#b3e55cde" },
              ];
              e.forEach(function (e, i) {
                t.prizes.push({
                  name: e.name,
                  background: e.color,
                  fonts: [{ text: e.name, top: "12%" }],
                  imgs: [{ src: e.img, width: "45%", top: "60%" }],
                });
              });
            },
            startCallBack: function () {
              var t = this;
              this.$refs.LuckyWheel.play(),
                setTimeout(function () {
                  t.$refs.LuckyWheel.stop((8 * Math.random()) >> 0);
                }, 2e3);
            },
            endCallBack: function (t) {
              alert("恭喜凡凡获得".concat(t.name));
            },
          },
        }),
      h = c,
      u = (i("7e2e"), i("2877")),
      l = Object(u["a"])(h, o, s, !1, null, "668a2fbc", null),
      f = l.exports,
      d = { components: { demo1: f } },
      g = d,
      p = (i("034f"), Object(u["a"])(g, r, a, !1, null, null, null)),
      m = p.exports,
      v = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      b = [
        function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "div",
            {
              staticStyle: {
                background: "#ff4a4c",
                "border-radius": "4px",
                color: "#eee",
                "text-align": "center",
                padding: "10px 20px",
              },
            }
          );
        },
      ],
      w = {},
      y = w,
      x = Object(u["a"])(y, v, b, !1, null, null, null),
      z = x.exports,
      k = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { ref: "luckDraw", staticStyle: { overflow: "hidden" } },
          [i("canvas")]
        );
      },
      I = [],
      S =
        (i("99af"),
        i("cb29"),
        i("7db0"),
        i("4160"),
        i("caad"),
        i("d81d"),
        i("13d5"),
        i("fb6a"),
        i("a9e3"),
        i("ac1f"),
        i("2532"),
        i("5319"),
        i("1276"),
        i("159b"),
        i("3835")),
      C = i("5530"),
      A = i("2909"),
      j =
        (i("a623"),
        i("4de4"),
        i("a15b"),
        i("45fc"),
        i("d3b7"),
        i("25f0"),
        function (t) {
          for (
            var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            i[n - 1] = arguments[n];
          return i.some(function (e) {
            return (
              Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === e
            );
          });
        }),
      E = function (t) {
        return [].filter
          .call(t, function (t) {
            return "\n" !== t;
          })
          .join("");
      },
      W =
        (window.devicePixelRatio,
        function t(e) {
          var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "";
          return (
            j(e, "object") && (e = [e]),
            e.every(function (e, r) {
              for (var a in i) {
                if (1 === i[a] && !e.hasOwnProperty(a))
                  return !!console.error(
                    "参数 "
                      .concat(n, "[")
                      .concat(r, "] 缺少 ")
                      .concat(a, " 属性")
                  );
                if (
                  j(i[a], "object") &&
                  e[a] &&
                  !t(
                    e[a],
                    i[a],
                    n ? "".concat(n, "[").concat(r, "].").concat(a) : a
                  )
                )
                  return !1;
              }
              return !0;
            })
          );
        }),
      R = function (t) {
        var e = t.padding
            .replace(/px/g, "")
            .split(" ")
            .map(function (t) {
              return ~~t;
            }) || [0],
          i = 0,
          n = 0,
          r = 0,
          a = 0;
        switch (e.length) {
          case 1:
            i = n = r = a = e[0];
            break;
          case 2:
            (i = n = e[0]), (r = a = e[1]);
            break;
          case 3:
            (i = e[0]), (r = a = e[1]), (n = e[2]);
            break;
          default:
            (i = e[0]), (n = e[1]), (r = e[2]), (a = e[3]);
        }
        var o = {
          paddingTop: i,
          paddingBottom: n,
          paddingLeft: r,
          paddingRight: a,
        };
        for (var s in o)
          o[s] =
            t.hasOwnProperty(s) && j(t[s], "string", "number")
              ? ~~String(t[s]).replace(/px/g, "")
              : o[s];
        return [i, n, r, a];
      },
      T =
        (i("b680"),
        i("498a"),
        function (t) {
          return (Math.PI / 180) * t;
        }),
      F = function (t, e) {
        return [+(Math.cos(t) * e).toFixed(8), +(Math.sin(t) * e).toFixed(8)];
      },
      O = function (t, e) {
        var i = -t / e,
          n = -i * t + e;
        return [i, n];
      },
      D = function t(e, i, n, r) {
        var a =
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (Math.abs(r - n).toFixed(8) >= T(180).toFixed(8)) {
          var o = (r + n) / 2;
          return (
            a
              ? (t(e, i, n, o, a, 1), t(e, i, o, r, a, 1))
              : (t(e, i, o, r, a, 1), t(e, i, n, o, a, 1)),
            !1
          );
        }
        if (!a) {
          var s = [r, n];
          (n = s[0]), (r = s[1]);
        }
        var c = F(n, i),
          h = Object(S["a"])(c, 2),
          u = h[0],
          l = h[1],
          f = F(r, i),
          d = Object(S["a"])(f, 2),
          g = d[0],
          p = d[1],
          m = O(u, l),
          v = Object(S["a"])(m, 2),
          b = v[0],
          w = v[1],
          y = O(g, p),
          x = Object(S["a"])(y, 2),
          z = x[0],
          k = x[1],
          I = (k - w) / (b - z),
          C = (z * w - b * k) / (z - b);
        isNaN(I) &&
          (Math.abs(u) == i.toFixed(8) && (I = u),
          Math.abs(g) == i.toFixed(8) && (I = g)),
          b === 1 / 0 || b === -1 / 0
            ? (C = z * I + k)
            : (z !== 1 / 0 && z !== -1 / 0) || (C = b * I + w),
          e.lineTo(u, l),
          e.arcTo(I, C, g, p, i);
      },
      H = function (t, e, i, n, r, a, o) {
        e || (e = a);
        var s = T((90 / Math.PI / i) * a),
          c = T((90 / Math.PI / e) * a),
          h = n + s,
          u = r - s,
          l = n + c,
          f = r - c;
        t.beginPath(),
          (t.fillStyle = o),
          t.moveTo.apply(t, Object(A["a"])(F(h, i))),
          D(t, i, h, u, !0),
          f > l
            ? D(t, e, l, f, !1)
            : t.lineTo.apply(
                t,
                Object(A["a"])(
                  F((n + r) / 2, a / 2 / Math.abs(Math.sin((n - r) / 2)))
                )
              ),
          t.closePath(),
          t.fill();
      },
      L = function (t, e, i, n, r, a, o) {
        var s = Math.min(n, r);
        a > s / 2 && (a = s / 2),
          t.beginPath(),
          (t.fillStyle = o),
          t.moveTo(e + a, i),
          t.lineTo(e + a, i),
          t.lineTo(e + n - a, i),
          t.arcTo(e + n, i, e + n, i + a, a),
          t.lineTo(e + n, i + r - a),
          t.arcTo(e + n, i + r, e + n - a, i + r, a),
          t.lineTo(e + a, i + r),
          t.arcTo(e, i + r, e, i + r - a, a),
          t.lineTo(e, i + a),
          t.arcTo(e, i, e + a, i, a),
          t.closePath(),
          t.fill();
      },
      M = function (t, e, i, n, r, a) {
        var o,
          s = /linear-gradient\((.+)\)/
            .exec(a)[1]
            .split(",")
            .map(function (t) {
              return t.trim();
            }),
          c = s.shift();
        if (c.includes("deg")) {
          c = c.slice(0, -3) % 360;
          var h = function (t) {
            return Math.tan((t / 180) * Math.PI);
          };
          c >= 0 && c < 45
            ? (o = [e, i + r, e + n, i + r - n * h(c - 0)])
            : c >= 45 && c < 90
            ? (o = [e, i + r, e + n - r * h(c - 45), i])
            : c >= 90 && c < 135
            ? (o = [e + n, i + r, e + n - r * h(c - 90), i])
            : c >= 135 && c < 180
            ? (o = [e + n, i + r, e, i + n * h(c - 135)])
            : c >= 180 && c < 225
            ? (o = [e + n, i, e, i + n * h(c - 180)])
            : c >= 225 && c < 270
            ? (o = [e + n, i, e + r * h(c - 225), i + r])
            : c >= 270 && c < 315
            ? (o = [e, i, e + r * h(c - 270), i + r])
            : c >= 315 &&
              c < 360 &&
              (o = [e, i, e + n, i + r - n * h(c - 315)]);
        } else
          c.includes("top")
            ? (o = [e, i + r, e, i])
            : c.includes("bottom")
            ? (o = [e, i, e, i + r])
            : c.includes("left")
            ? (o = [e + n, i, e, i])
            : c.includes("right") && (o = [e, i, e + n, i]);
        var u = t.createLinearGradient.apply(
          t,
          Object(A["a"])(
            o.map(function (t) {
              return t >> 0;
            })
          )
        );
        return s.reduce(function (t, e, i) {
          var n = e.split(" ");
          return (
            1 === n.length
              ? t.addColorStop(i, n[0])
              : 2 === n.length && t.addColorStop.apply(t, Object(A["a"])(n)),
            t
          );
        }, u);
      },
      P = function (t, e, i, n) {
        return t >= n && (t = n), i * (t /= n) * t + e;
      },
      U = function (t, e, i, n) {
        return t >= n && (t = n), -i * (t /= n) * (t - 2) + e;
      },
      q = {
        props: {
          prizes: {
            type: Array,
            validator: function (t) {
              return W(
                { prizes: t },
                { prizes: { x: 1, y: 1, imgs: { src: 1 }, fonts: { text: 1 } } }
              );
            },
            default: function () {
              return [];
            },
          },
          button: {
            type: Object,
            validator: function (t) {
              return W(
                { button: [t] },
                { button: { x: 1, y: 1, imgs: { src: 1 }, fonts: { text: 1 } } }
              );
            },
          },
          blocks: {
            type: Array,
            validator: function (t) {
              return W(
                { blocks: t },
                { blocks: { padding: 1, background: 1 } }
              );
            },
            default: function () {
              return [];
            },
          },
          defaultStyle: {
            type: Object,
            default: function () {
              return {};
            },
          },
          activeStyle: {
            type: Object,
            default: function () {
              return {};
            },
          },
          defaultConfig: {
            type: Object,
            default: function () {
              return {};
            },
          },
          cols: { type: [String, Number], default: 3 },
          rows: { type: [String, Number], default: 3 },
          demo: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            cells: [],
            cellImgs: new Array(this.cols * this.rows).fill().map(function (t) {
              return [];
            }),
            dpr: 2,
            ctx: null,
            startTime: 0,
            currIndex: 0,
            prizeFlag: void 0,
            prizeArea: {},
            animationId: 0,
            timer: 0,
            htmlFontSize: 16,
          };
        },
        computed: {
          prizeIndex: function () {
            return this.currIndex % this.prizes.length >> 0;
          },
          _defaultStyle: function () {
            var t = {
              borderRadius: 20,
              fontColor: "#000",
              fontSize: "19px",
              fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
              fontWeight: "500",
              textAlign: "center",
              background: "#fff",
              shadow: "",
              wordWrap: !0,
              lengthLimit: "90%",
            };
            for (var e in this.defaultStyle) t[e] = this.defaultStyle[e];
            return (
              (t.borderRadius = this.getLength(t.borderRadius) * this.dpr), t
            );
          },
          _activeStyle: function () {
            var t = { background: "#ffce98", shadow: "" };
            for (var e in this.activeStyle) t[e] = this.activeStyle[e];
            return t;
          },
          _defaultConfig: function () {
            var t = {
              gutter: 5,
              speed: 20,
              accelerationTime: 2500,
              decelerationTime: 2500,
            };
            for (var e in this.defaultConfig) t[e] = this.defaultConfig[e];
            return (
              (t.gutter = this.getLength(t.gutter) * this.dpr),
              (t.speed /= 40),
              t
            );
          },
        },
        watch: {
          prizes: {
            handler: function (t, e) {
              var i = this,
                n = [];
              return (
                e
                  ? t &&
                    t.forEach(function (t, r) {
                      var a = [],
                        o = e[r];
                      o
                        ? t.imgs &&
                          t.imgs.forEach(function (t, e) {
                            var n = o.imgs[e];
                            n && i.cellImgs[r][e]
                              ? t.src !== n.src && (a[e] = t)
                              : (a[e] = t);
                          })
                        : (a = t.imgs),
                        (n[r] = a);
                    })
                  : (n = t.map(function (t) {
                      return t.imgs;
                    })),
                this.init(n)
              );
            },
            deep: !0,
          },
          button: {
            handler: function (t, e) {
              var i = this,
                n = [],
                r = this.cols * this.rows - 1;
              if (e && e.imgs) {
                if (t.imgs) {
                  var a = [];
                  t.imgs.forEach(function (t, n) {
                    var o = e.imgs[n];
                    o && i.cellImgs[r][n]
                      ? t.src !== o.src && (a[n] = t)
                      : (a[n] = t);
                  }),
                    (n[r] = a);
                }
              } else n[r] = t.imgs;
              return this.init(n);
            },
            deep: !0,
          },
          blocks: {
            handler: function () {
              this.init();
            },
            deep: !0,
          },
        },
        mounted: function () {
          (this.dpr = window.devicePixelRatio),
            (this.dpr = 1.3 * (!this.dpr || this.dpr < 2 ? 2 : this.dpr)),
            (window.dpr = this.dpr);
          var t = [];
          this.prizes &&
            (t = this.prizes.map(function (t) {
              return t.imgs;
            })),
            this.button && (t[this.cols * this.rows - 1] = this.button.imgs),
            this.init(t),
            window.addEventListener("resize", this.init.bind(this));
        },
        methods: {
          init: function (t) {
            var e = this;
            this.htmlFontSize = getComputedStyle(
              window.document.documentElement
            ).fontSize.slice(0, -2);
            var i = this.dpr,
              n = (this._defaultStyle, this._defaultConfig),
              r = this.$refs.luckDraw;
            if (!r) return !1;
            var a = this.$refs.luckDraw.childNodes[0];
            (this.ctx = a.getContext("2d")),
              (this.boxWidth = a.width = r.offsetWidth * i),
              (this.boxHeight = a.height = r.offsetHeight * i);
            var o = function (t) {
              return ((t * i - t) / (t * i)) * (i / 2) * 100;
            };
            (a.style = "transform: scale("
              .concat(1 / i, ") translate(\n        ")
              .concat(-o(this.boxWidth), "%,\n        ")
              .concat(-o(this.boxHeight), "%\n      )")),
              (this.startTime = 0),
              (this.currIndex = this.prizeIndex),
              (this.prizeFlag = void 0),
              clearInterval(this.timer),
              cancelAnimationFrame(this.animationId),
              (this.cells = Object(A["a"])(this.prizes)),
              this.button &&
                (this.cells[this.cols * this.rows - 1] = Object(C["a"])(
                  Object(C["a"])({}, this.button),
                  {},
                  { index: null }
                )),
              this.cells.forEach(function (t) {
                (t.col = t.col || 1), (t.row = t.row || 1);
              }),
              (this.blockData = []),
              (this.prizeArea = this.blocks.reduce(
                function (t, n) {
                  var r = t.x,
                    a = t.y,
                    o = t.w,
                    s = t.h,
                    c = R(n).map(function (t) {
                      return t * i;
                    }),
                    h = Object(S["a"])(c, 4),
                    u = h[0],
                    l = h[1],
                    f = h[2],
                    d = h[3];
                  return (
                    e.blockData.push([
                      r,
                      a,
                      o,
                      s,
                      n.borderRadius ? e.getLength(n.borderRadius) * i : 0,
                      n.background,
                    ]),
                    { x: r + f, y: a + u, w: o - f - d, h: s - u - l }
                  );
                },
                { x: 0, y: 0, w: this.boxWidth, h: this.boxHeight }
              )),
              (this.cellWidth =
                (this.prizeArea.w - n.gutter * (this.cols - 1)) / this.cols),
              (this.cellHeight =
                (this.prizeArea.h - n.gutter * (this.rows - 1)) / this.rows);
            var s = function () {
                e.draw(),
                  e.demo && e.walk(),
                  e.button &&
                    (a.onclick = function (t) {
                      var i = e.getGeometricProperty([
                          e.button.x,
                          e.button.y,
                          e.button.col || 1,
                          e.button.row || 1,
                        ]),
                        n = Object(S["a"])(i, 4),
                        r = n[0],
                        a = n[1],
                        o = n[2],
                        s = n[3];
                      return (
                        !(
                          t.offsetX < r ||
                          t.offsetY < a ||
                          t.offsetX > r + o ||
                          t.offsetY > a + s
                        ) &&
                        !e.startTime &&
                        void e.$emit("start", t)
                      );
                    });
              },
              c = 0,
              h = 0;
            j(t, "array") &&
              (this.draw(),
              t.forEach(function (t, i) {
                if (!t) return !1;
                t.forEach(function (t, n) {
                  h++,
                    e.loadAndCacheImg(i, n, function () {
                      c++, h === c && s.call(e);
                    });
                });
              })),
              h || s.call(this);
          },
          loadAndCacheImg: function (t, e, i) {
            var n = this,
              r = this.cells[t];
            if (!r) return !1;
            var a = r.imgs[e];
            this.cellImgs[t] || (this.cellImgs[t] = []);
            var o = new Image();
            (this.cellImgs[t][e] = { defaultImg: o }), (o.src = a.src);
            var s = 0,
              c = 1;
            if (
              ((o.onload = function () {
                s++, s === c && i.call(n);
              }),
              !a.activeSrc)
            )
              return !1;
            c++;
            var h = new Image();
            (this.cellImgs[t][e].activeImg = h),
              (h.src = a.activeSrc),
              (h.onload = function () {
                s++, s === c && i.call(n);
              });
          },
          computedWidthAndHeight: function (t, e, i) {
            if (!e.width && !e.height) return [t.width, t.height];
            if (e.width && !e.height) {
              var n = this.getWidth(e.width, i.col);
              return [n, t.height * (n / t.width)];
            }
            if (!e.width && e.height) {
              var r = this.getHeight(e.height, i.row);
              return [t.width * (r / t.height), r];
            }
            return [
              this.getWidth(e.width, i.col),
              this.getHeight(e.height, i.row),
            ];
          },
          draw: function () {
            var t = this,
              e = this.ctx,
              i = this.dpr,
              n = this._defaultStyle,
              r = this._activeStyle;
            e.clearRect(0, 0, this.boxWidth, this.boxWidth),
              this.blockData.forEach(function (i) {
                var n = Object(S["a"])(i, 6),
                  r = n[0],
                  a = n[1],
                  o = n[2],
                  s = n[3],
                  c = n[4],
                  h = n[5];
                L(e, r, a, o, s, c, t.handleBackground(r, a, o, s, h));
              }),
              this.cells.forEach(function (a, o) {
                var s = t.getGeometricProperty([a.x, a.y, a.col, a.row]),
                  c = Object(S["a"])(s, 4),
                  h = c[0],
                  u = c[1],
                  l = c[2],
                  f = c[3],
                  d = o === t.prizeIndex,
                  g = (d ? r.shadow : a.shadow || n.shadow)
                    .replace(/px/g, "")
                    .split(",")[0]
                    .split(" ")
                    .map(function (t, e) {
                      return e < 3 ? t * i : t;
                    });
                4 === g.length &&
                  ((e.shadowColor = g[3]),
                  (e.shadowOffsetX = g[0]),
                  (e.shadowOffsetY = g[1]),
                  (e.shadowBlur = g[2]),
                  g[0] > 0 ? (l -= g[0]) : ((l += g[0]), (h -= g[0])),
                  g[1] > 0 ? (f -= g[1]) : ((f += g[1]), (u -= g[1]))),
                  L(
                    e,
                    h,
                    u,
                    l,
                    f,
                    a.borderRadius
                      ? t.getLength(a.borderRadius) * i
                      : n.borderRadius,
                    t.handleBackground(h, u, l, f, a.background, d)
                  ),
                  (e.shadowColor = "rgba(255, 255, 255, 0)"),
                  (e.shadowOffsetX = 0),
                  (e.shadowOffsetY = 0),
                  (e.shadowBlur = 0),
                  a.imgs &&
                    a.imgs.forEach(function (i, n) {
                      if (!t.cellImgs[o]) return !1;
                      var r = t.cellImgs[o][n];
                      if (!r) return !1;
                      var s = (d && r.activeImg) || r.defaultImg,
                        c = t.computedWidthAndHeight(s, i, a),
                        l = Object(S["a"])(c, 2),
                        f = l[0],
                        g = l[1];
                      e.drawImage(
                        s,
                        h + t.getOffsetX(f, a.col),
                        u + t.getHeight(i.top, a.row),
                        f,
                        g
                      );
                    }),
                  a.fonts &&
                    a.fonts.forEach(function (o) {
                      var s =
                          d && r.fontStyle
                            ? r.fontStyle
                            : o.fontStyle || n.fontStyle,
                        c =
                          d && r.fontWeight
                            ? r.fontWeight
                            : o.fontWeight || n.fontWeight,
                        l =
                          d && r.fontSize
                            ? t.getLength(r.fontSize)
                            : t.getLength(o.fontSize || n.fontSize),
                        f =
                          d && r.lineHeight
                            ? r.lineHeight
                            : o.lineHeight ||
                              n.lineHeight ||
                              o.fontSize ||
                              n.fontSize;
                      (e.font = ""
                        .concat(c, " ")
                        .concat(l * i, "px ")
                        .concat(s)),
                        (e.fillStyle =
                          d && r.fontColor
                            ? r.fontColor
                            : o.fontColor || n.fontColor);
                      var g = [],
                        p = String(o.text);
                      if (
                        o.hasOwnProperty("wordWrap") ? o.wordWrap : n.wordWrap
                      ) {
                        p = E(p);
                        for (var m = "", v = 0; v < p.length; v++) {
                          m += p[v];
                          var b = e.measureText(m).width,
                            w = t.getWidth(
                              o.lengthLimit || n.lengthLimit,
                              a.col
                            );
                          b > w && (g.push(m.slice(0, -1)), (m = p[v]));
                        }
                        m && g.push(m), g.length || g.push(p);
                      } else g = p.split("\n");
                      g.forEach(function (n, r) {
                        e.fillText(
                          n,
                          h + t.getOffsetX(e.measureText(n).width, a.col),
                          u +
                            t.getHeight(o.top, a.row) +
                            (r + 1) * t.getLength(f) * i
                        );
                      });
                    });
              });
          },
          handleBackground: function (t, e, i, n, r) {
            var a =
                arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              o = this.ctx,
              s = this._defaultStyle,
              c = this._activeStyle;
            return (
              (r = a ? c.background : r || s.background),
              r.includes("linear-gradient") && (r = M(o, t, e, i, n, r)),
              r
            );
          },
          play: function () {
            if (this.startTime) return !1;
            clearInterval(this.timer),
              cancelAnimationFrame(this.animationId),
              (this.startTime = Date.now()),
              (this.prizeFlag = void 0),
              this.run();
          },
          stop: function (t) {
            this.prizeFlag = t % this.prizes.length;
          },
          run: function () {
            var t = this.currIndex,
              e = this.prizes,
              i = this.prizeFlag,
              n = this.startTime,
              r = this._defaultConfig,
              a = Date.now() - n;
            if (a >= r.accelerationTime && void 0 !== i)
              return (
                (this.endTime = Date.now()),
                (this.stopIndex = t),
                (this.endIndex = 5 * e.length + i - (t >> 0)),
                cancelAnimationFrame(this.animationId),
                this.slowDown()
              );
            (this.currIndex =
              (t + P(a, 0.1, r.speed, r.accelerationTime)) % e.length),
              this.draw(),
              (this.animationId = window.requestAnimationFrame(this.run));
          },
          slowDown: function () {
            var t = this.prizes,
              e = this.prizeFlag,
              i = this.stopIndex,
              n = this.endIndex,
              r = this._defaultConfig,
              a = Date.now() - this.endTime;
            if (a > r.decelerationTime)
              return (
                (this.startTime = 0),
                this.$emit(
                  "end",
                  Object(C["a"])(
                    {},
                    t.find(function (t, i) {
                      return i === e;
                    })
                  )
                ),
                cancelAnimationFrame(this.animationId)
              );
            (this.currIndex = U(a, i, n, r.decelerationTime) % t.length),
              this.draw(),
              (this.animationId = window.requestAnimationFrame(this.slowDown));
          },
          getGeometricProperty: function (t) {
            var e = Object(S["a"])(t, 4),
              i = e[0],
              n = e[1],
              r = e[2],
              a = e[3],
              o = this._defaultConfig,
              s = this.cellWidth,
              c = this.cellHeight,
              h = [
                this.prizeArea.x + (s + o.gutter) * i,
                this.prizeArea.y + (c + o.gutter) * n,
              ];
            return (
              r &&
                a &&
                h.push(s * r + o.gutter * (r - 1), c * a + o.gutter * (a - 1)),
              h
            );
          },
          getLength: function (t) {
            return j(t, "number")
              ? t
              : j(t, "string")
              ? this.changeUnits(t, { clean: !0 })
              : 0;
          },
          getWidth: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return j(t, "number")
              ? t * this.dpr
              : j(t, "string")
              ? this.changeUnits(t, {
                  denominator:
                    this.cellWidth * e + this._defaultConfig.gutter * (e - 1),
                })
              : 0;
          },
          getHeight: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return j(t, "number")
              ? t * this.dpr
              : j(t, "string")
              ? this.changeUnits(t, {
                  denominator:
                    this.cellHeight * e + this._defaultConfig.gutter * (e - 1),
                })
              : 0;
          },
          changeUnits: function (t, e) {
            var i = this,
              n = e.denominator,
              r = void 0 === n ? 1 : n,
              a = e.clean,
              o = void 0 !== a && a;
            return Number(
              t.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function (t, e, n) {
                switch (n) {
                  case "%":
                    e *= r / 100;
                    break;
                  case "px":
                    e *= 1;
                    break;
                  case "rem":
                    e *= i.htmlFontSize;
                    break;
                  default:
                    e *= 1;
                    break;
                }
                return o || "%" === n ? e : e * i.dpr;
              })
            );
          },
          getOffsetX: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
            return (
              (this.cellWidth * e + this._defaultConfig.gutter * (e - 1) - t) /
              2
            );
          },
          walk: function () {
            var t = this;
            clearInterval(this.timer),
              (this.timer = setInterval(function () {
                (t.currIndex += 1), t.draw();
              }, 1300));
          },
        },
      },
      _ = q,
      Y = Object(u["a"])(_, k, I, !1, null, null, null),
      B = Y.exports,
      X = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          { ref: "luckDraw", staticStyle: { overflow: "hidden" } },
          [i("canvas")]
        );
      },
      N = [],
      G = function (t, e, i, n) {
        return t >= n && (t = n), i * (t /= n) * t + e;
      },
      J = function (t, e, i, n) {
        return t >= n && (t = n), -i * (t /= n) * (t - 2) + e;
      },
      K = {
        props: {
          blocks: {
            type: Array,
            validator: function (t) {
              return W(
                { blocks: t },
                { blocks: { padding: 1, background: 1 } }
              );
            },
            default: function () {
              return [];
            },
          },
          prizes: {
            type: Array,
            validator: function (t) {
              return W(
                { prizes: t },
                { prizes: { fonts: { text: 1 }, imgs: { src: 1 } } }
              );
            },
            default: function () {
              return [];
            },
          },
          buttons: {
            type: Array,
            validator: function (t) {
              return W(
                { buttons: t },
                { buttons: { fonts: { text: 1 }, imgs: { src: 1 } } }
              );
            },
            default: function () {
              return [];
            },
          },
          defaultStyle: {
            type: Object,
            default: function () {
              return {};
            },
          },
          defaultConfig: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        data: function () {
          return {
            ctx: null,
            startTime: 0,
            prizeFlag: void 0,
            animationId: null,
            Radius: 0,
            prizeDeg: 360,
            prizeRadian: 0,
            prizeRadius: 0,
            maxBtnRadius: 0,
            rotateDeg: 0,
            prizeImgs: [],
            btnImgs: [],
            htmlFontSize: 16,
          };
        },
        computed: {
          _defaultStyle: function () {
            var t = {
              fontSize: "19px",
              fontColor: "#000",
              fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
              fontWeight: "500",
              background: "#fff",
              wordWrap: !0,
              lengthLimit: "90%",
            };
            for (var e in this.defaultStyle) t[e] = this.defaultStyle[e];
            return t;
          },
          _defaultConfig: function () {
            var t = {
              gutter: "0px",
              offsetDegree: 0,
              speed: 20,
              accelerationTime: 2500,
              decelerationTime: 2500,
            };
            for (var e in this.defaultConfig) t[e] = this.defaultConfig[e];
            return t;
          },
        },
        watch: {
          prizes: {
            handler: function (t, e) {
              var i = this,
                n = [];
              return (
                e
                  ? t &&
                    t.forEach(function (t, r) {
                      var a = [],
                        o = e[r];
                      o
                        ? t.imgs &&
                          t.imgs.forEach(function (t, e) {
                            var n = o.imgs[e];
                            n && i.prizeImgs[r] && i.prizeImgs[r][e]
                              ? t.src !== n.src && (a[e] = t)
                              : (a[e] = t);
                          })
                        : (a = t.imgs),
                        (n[r] = a);
                    })
                  : (n = t.map(function (t) {
                      return t.imgs;
                    })),
                this.init(n)
              );
            },
            deep: !0,
          },
          buttons: {
            handler: function (t, e) {
              var i = this,
                n = [];
              return (
                e
                  ? t &&
                    t.forEach(function (t, r) {
                      var a = [],
                        o = e[r];
                      o && o.imgs
                        ? t.imgs &&
                          t.imgs.forEach(function (t, e) {
                            var n = o.imgs[e];
                            n && i.btnImgs[r] && i.btnImgs[r][e]
                              ? t.src !== n.src && (a[e] = t)
                              : (a[e] = t);
                          })
                        : (a = t.imgs),
                        (n[r] = a);
                    })
                  : (n = t.map(function (t) {
                      return t.imgs;
                    })),
                this.init(
                  [].concat(
                    Object(A["a"])(new Array(this.prizes.length).fill()),
                    Object(A["a"])(n)
                  )
                )
              );
            },
            deep: !0,
          },
          blocks: {
            handler: function () {
              this.init();
            },
            deep: !0,
          },
        },
        mounted: function () {
          var t;
          (this.dpr = window.devicePixelRatio),
            (this.dpr = 1.3 * (!this.dpr || this.dpr < 2 ? 2 : this.dpr)),
            (window.dpr = this.dpr);
          var e = [];
          this.prizes &&
            (e = this.prizes.map(function (t) {
              return t.imgs;
            })),
            this.buttons &&
              (t = e).push.apply(
                t,
                Object(A["a"])(
                  this.buttons.map(function (t) {
                    return t.imgs;
                  })
                )
              ),
            this.init(e),
            window.addEventListener("resize", this.init.bind(this));
        },
        methods: {
          init: function (t) {
            var e = this;
            this.htmlFontSize = getComputedStyle(
              window.document.documentElement
            ).fontSize.slice(0, -2);
            var i = this.dpr,
              n = this.$refs.luckDraw;
            if (!n) return !1;
            var r = this.$refs.luckDraw.childNodes[0];
            this.ctx = r.getContext("2d");
            var a = this.ctx;
            (r.width = r.height = n.offsetWidth * i),
              (this.Radius = r.width / 2);
            var o = function (t) {
              return ((t * i - t) / (t * i)) * (i / 2) * 100;
            };
            (r.style = "transform: scale("
              .concat(1 / i, ") translate(\n        ")
              .concat(-o(2 * this.Radius), "%,\n        ")
              .concat(-o(2 * this.Radius), "%\n      )")),
              a.translate(this.Radius, this.Radius);
            var s = function () {
                e.draw(),
                  (r.onclick = function (t) {
                    return (
                      a.beginPath(),
                      a.arc(0, 0, e.maxBtnRadius, 0, 2 * Math.PI, !1),
                      !!a.isPointInPath(t.offsetX, t.offsetY) &&
                        !e.startTime &&
                        void e.$emit("start", t)
                    );
                  });
              },
              c = 0,
              h = 0;
            j(t, "array") &&
              (this.draw(),
              t.forEach(function (t, i) {
                if (!t) return !1;
                t.forEach(function (t, n) {
                  h++,
                    e.loadAndCacheImg(i, n, function () {
                      c++, h === c && s.call(e);
                    });
                });
              })),
              h || s.call(this);
          },
          loadAndCacheImg: function (t, e, i) {
            var n = this,
              r = t < this.prizes.length,
              a = r ? "prizes" : "buttons",
              o = r ? "prizeImgs" : "btnImgs";
            t = r ? t : t - this.prizes.length;
            var s = this[a][t];
            if (!s) return !1;
            var c = s.imgs[e];
            if (!c) return !1;
            var h = new Image();
            this[o][t] || (this[o][t] = []),
              (this[o][t][e] = h),
              (h.src = c.src),
              (h.onload = function () {
                return i.call(n);
              });
          },
          computedWidthAndHeight: function (t, e, i, n) {
            if (!e.width && !e.height) return [t.width, t.height];
            if (e.width && !e.height) {
              var r = this.getWidth(e.width, i);
              return [r, t.height * (r / t.width)];
            }
            if (!e.width && e.height) {
              var a = this.getHeight(e.height, n);
              return [t.width * (a / t.height), a];
            }
            return [this.getWidth(e.width, i), this.getHeight(e.height, n)];
          },
          draw: function () {
            var t = this,
              e = this.ctx,
              i = this.dpr,
              n = this._defaultStyle,
              r = this._defaultConfig;
            e.clearRect(
              -this.Radius,
              -this.Radius,
              2 * this.Radius,
              2 * this.Radius
            ),
              (this.prizeRadius = this.blocks.reduce(function (n, r) {
                return (
                  e.beginPath(),
                  (e.fillStyle = r.background),
                  e.arc(0, 0, n, 0, 2 * Math.PI, !1),
                  e.fill(),
                  n - t.getLength(r.padding.split(" ")[0]) * i
                );
              }, this.Radius)),
              (this.prizeDeg = 360 / this.prizes.length),
              (this.prizeRadian = T(this.prizeDeg));
            var a = T(-90 + this.rotateDeg + r.offsetDegree),
              o = function (i) {
                return t.getOffsetX(e.measureText(i).width);
              },
              s = function (e, r, a) {
                var o =
                  e.lineHeight || n.lineHeight || e.fontSize || n.fontSize;
                return t.getHeight(e.top, r) + (a + 1) * t.getLength(o) * i;
              };
            e.save(),
              this.prizes.forEach(function (c, h) {
                var u = a + h * t.prizeRadian,
                  l = t.prizeRadius - t.maxBtnRadius;
                H(
                  e,
                  t.maxBtnRadius,
                  t.prizeRadius,
                  u - t.prizeRadian / 2,
                  u + t.prizeRadian / 2,
                  t.getLength(r.gutter) * i,
                  c.background || n.background
                );
                var f = Math.cos(u) * t.prizeRadius,
                  d = Math.sin(u) * t.prizeRadius;
                e.translate(f, d),
                  e.rotate(u + T(90)),
                  c.imgs &&
                    c.imgs.forEach(function (i, n) {
                      if (!t.prizeImgs[h]) return !1;
                      var r = t.prizeImgs[h][n];
                      if (!r)
                        return console.error(
                          "错误273: prizes[".concat(h, "]没有奖品图片")
                        );
                      var a = t.computedWidthAndHeight(
                          r,
                          i,
                          t.prizeRadian * t.prizeRadius,
                          l
                        ),
                        o = Object(S["a"])(a, 2),
                        s = o[0],
                        c = o[1];
                      e.drawImage(
                        r,
                        t.getOffsetX(s),
                        t.getHeight(i.top, l),
                        s,
                        c
                      );
                    }),
                  c.fonts &&
                    c.fonts.forEach(function (a) {
                      var c = a.fontColor || n.fontColor,
                        h = a.fontWeight || n.fontWeight,
                        u = t.getLength(a.fontSize || n.fontSize),
                        f = a.fontStyle || n.fontStyle;
                      (e.fillStyle = c),
                        (e.font = ""
                          .concat(h, " ")
                          .concat(u * i, "px ")
                          .concat(f));
                      var d = [],
                        g = String(a.text);
                      if (
                        a.hasOwnProperty("wordWrap") ? a.wordWrap : n.wordWrap
                      ) {
                        g = E(g);
                        for (var p = "", m = 0; m < g.length; m++) {
                          p += g[m];
                          var v = e.measureText(p).width,
                            b =
                              (t.prizeRadius - s(a, l, d.length)) *
                                Math.tan(t.prizeRadian / 2) *
                                2 -
                              t.getLength(r.gutter) * i;
                          v > t.getWidth(a.lengthLimit || n.lengthLimit, b) &&
                            (d.push(p.slice(0, -1)), (p = g[m]));
                        }
                        p && d.push(p), d.length || d.push(g);
                      } else d = g.split("\n");
                      d.filter(function (t) {
                        return !!t;
                      }).forEach(function (t, i) {
                        e.fillText(t, o(t), s(a, l, i));
                      });
                    }),
                  e.rotate(T(360) - u - T(90)),
                  e.translate(-f, -d);
              }),
              e.restore(),
              this.buttons.forEach(function (r, a) {
                var c = t.getHeight(r.radius);
                (t.maxBtnRadius = Math.max(t.maxBtnRadius, c)),
                  e.beginPath(),
                  (e.fillStyle = r.background),
                  e.arc(0, 0, c, 0, 2 * Math.PI, !1),
                  e.fill(),
                  r.pointer &&
                    (e.beginPath(),
                    (e.fillStyle = r.background),
                    e.moveTo(-c, 0),
                    e.lineTo(c, 0),
                    e.lineTo(0, 2 * -c),
                    e.closePath(),
                    e.fill()),
                  r.imgs &&
                    r.imgs.forEach(function (i, n) {
                      if (!t.btnImgs[a]) return !1;
                      var o = t.btnImgs[a][n];
                      if (!o) return console.error("错误339: 没有按钮图片");
                      var s = t.computedWidthAndHeight(
                          o,
                          i,
                          2 * t.getHeight(r.radius),
                          2 * t.getHeight(r.radius)
                        ),
                        h = Object(S["a"])(s, 2),
                        u = h[0],
                        l = h[1];
                      e.drawImage(
                        o,
                        t.getOffsetX(u),
                        t.getHeight(i.top, c),
                        u,
                        l
                      );
                    }),
                  r.fonts &&
                    r.fonts.forEach(function (r) {
                      var a = r.fontColor || n.fontColor,
                        h = r.fontWeight || n.fontWeight,
                        u = t.getLength(r.fontSize || n.fontSize),
                        l = r.fontStyle || n.fontStyle;
                      (e.fillStyle = a),
                        (e.font = ""
                          .concat(h, " ")
                          .concat(u * i, "px ")
                          .concat(l)),
                        String(r.text)
                          .split("\n")
                          .forEach(function (t, i) {
                            e.fillText(t, o(t), s(r, c, i));
                          });
                    });
              });
          },
          play: function () {
            if (this.startTime) return !1;
            cancelAnimationFrame(this.animationId),
              (this.startTime = Date.now()),
              (this.prizeFlag = void 0),
              this.run();
          },
          stop: function (t) {
            this.prizeFlag = t % this.prizes.length;
          },
          run: function () {
            var t = this.prizeFlag,
              e = this.prizeDeg,
              i = this.rotateDeg,
              n = this._defaultConfig,
              r = Date.now() - this.startTime;
            if (r >= n.accelerationTime && void 0 !== t)
              return (
                (this.endTime = Date.now()),
                (this.stopDeg = i),
                (this.endDeg = 1800 - t * e - i - n.offsetDegree),
                cancelAnimationFrame(this.animationId),
                this.slowDown()
              );
            (this.rotateDeg = (i + G(r, 0, n.speed, n.accelerationTime)) % 360),
              this.draw(),
              (this.animationId = window.requestAnimationFrame(this.run));
          },
          slowDown: function () {
            var t = this.prizes,
              e = this.prizeFlag,
              i = this.stopDeg,
              n = this.endDeg,
              r = this._defaultConfig,
              a = Date.now() - this.endTime;
            if (a >= r.decelerationTime)
              return (
                (this.startTime = 0),
                this.$emit(
                  "end",
                  Object(C["a"])(
                    {},
                    t.find(function (t, i) {
                      return i === e;
                    })
                  )
                ),
                cancelAnimationFrame(this.animationId)
              );
            (this.rotateDeg = J(a, i, n, r.decelerationTime) % 360),
              this.draw(),
              (this.animationId = window.requestAnimationFrame(this.slowDown));
          },
          getLength: function (t) {
            return j(t, "number")
              ? t
              : j(t, "string")
              ? this.changeUnits(t, { clean: !0 })
              : 0;
          },
          getWidth: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.prizeRadian * this.prizeRadius;
            return j(t, "number")
              ? t * this.dpr
              : j(t, "string")
              ? this.changeUnits(t, { denominator: e })
              : 0;
          },
          getHeight: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.prizeRadius;
            return j(t, "number")
              ? t * this.dpr
              : j(t, "string")
              ? this.changeUnits(t, { denominator: e })
              : 0;
          },
          changeUnits: function (t, e) {
            var i = this,
              n = e.denominator,
              r = void 0 === n ? 1 : n,
              a = e.clean,
              o = void 0 !== a && a;
            return Number(
              t.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function (t, e, n) {
                switch (n) {
                  case "%":
                    e *= r / 100;
                    break;
                  case "px":
                    e *= 1;
                    break;
                  case "rem":
                    e *= i.htmlFontSize;
                    break;
                  default:
                    e *= 1;
                    break;
                }
                return o || "%" === n ? e : e * i.dpr;
              })
            );
          },
          getOffsetX: function (t) {
            return -t / 2;
          },
        },
      },
      Z = K,
      V = Object(u["a"])(Z, X, N, !1, null, null, null),
      Q = V.exports,
      $ = function (t, e) {
        t.component("LuckDraw", z),
          t.component("LuckyGrid", B),
          t.component("LuckyWheel", Q);
      };
    "undefined" !== typeof window && window.Vue && $(window.Vue);
    var tt = { install: $ };
    n["a"].use(tt),
      (n["a"].config.productionTip = !1),
      new n["a"]({
        render: function (t) {
          return t(m);
        },
      }).$mount("#app");
  },
  "6ba5": function (t, e, i) {
    t.exports = i.p + "img/button.d70eabaf.png";
  },
  "6c5d": function (t, e, i) {
    t.exports = i.p + "img/bg.2daf906c.png";
  },
  "7e2e": function (t, e, i) {
    "use strict";
    var n = i("265a"),
      r = i.n(n);
    r.a;
  },
  "85ec": function (t, e, i) {},
  "8b24": function (t, e, i) {
    t.exports = i.p + "img/1.b23749dd.png";
  },
  d209: function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
});
