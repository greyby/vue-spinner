import { defineComponent as d, computed as a, withDirectives as y, openBlock as u, createElementBlock as c, createElementVNode as t, normalizeStyle as n, vShow as p } from "vue";
const v = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [l, o] of i)
    s[l] = o;
  return s;
}, w = d({
  name: "PulseLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      width: e.size,
      height: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })), spinnerDelay1: { animationDelay: "0.12s" }, spinnerDelay2: { animationDelay: "0.24s" }, spinnerDelay3: { animationDelay: "0.36s" } };
  }
}), B = { class: "v-spinner" };
function R(e, i, s, l, o, r) {
  return y((u(), c("div", B, [
    t("div", {
      class: "v-pulse v-pulse1",
      style: n([e.spinnerStyle, e.spinnerDelay1])
    }, null, 4),
    t("div", {
      class: "v-pulse v-pulse2",
      style: n([e.spinnerStyle, e.spinnerDelay2])
    }, null, 4),
    t("div", {
      class: "v-pulse v-pulse3",
      style: n([e.spinnerStyle, e.spinnerDelay3])
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const k = /* @__PURE__ */ v(w, [["render", R], ["__scopeId", "data-v-9215e0dc"]]), C = d({
  name: "GridLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = (L) => Math.random() * L, s = () => i(100) / 100 - 0.2 + "s", l = () => i(100) / 100 + 0.6 + "s", o = a(() => ({
      backgroundColor: e.color,
      width: e.size,
      height: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })), r = () => ({
      animationDelay: s(),
      animationDuration: l()
    }), g = a(r), S = a(r), f = a(r), m = a(r), h = a(r), $ = a(r), b = a(r), D = a(r), z = a(r), _ = a(() => ({
      width: parseFloat(e.size) * 3 + parseFloat(e.margin) * 6 + "px",
      fontSize: 0
    }));
    return {
      spinnerStyle: o,
      containerStyle: _,
      animationStyle1: g,
      animationStyle2: S,
      animationStyle3: f,
      animationStyle4: m,
      animationStyle5: h,
      animationStyle6: $,
      animationStyle7: b,
      animationStyle8: D,
      animationStyle9: z
    };
  }
});
function I(e, i, s, l, o, r) {
  return y((u(), c("div", {
    class: "v-spinner",
    style: n(e.containerStyle)
  }, [
    t("div", {
      class: "v-grid v-grid1",
      style: n([e.spinnerStyle, e.animationStyle1])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid2",
      style: n([e.spinnerStyle, e.animationStyle2])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid3",
      style: n([e.spinnerStyle, e.animationStyle3])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid4",
      style: n([e.spinnerStyle, e.animationStyle4])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid5",
      style: n([e.spinnerStyle, e.animationStyle5])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid6",
      style: n([e.spinnerStyle, e.animationStyle6])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid7",
      style: n([e.spinnerStyle, e.animationStyle7])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid8",
      style: n([e.spinnerStyle, e.animationStyle8])
    }, null, 4),
    t("div", {
      class: "v-grid v-grid9",
      style: n([e.spinnerStyle, e.animationStyle9])
    }, null, 4)
  ], 4)), [
    [p, e.loading]
  ]);
}
const F = /* @__PURE__ */ v(C, [["render", I], ["__scopeId", "data-v-cffaffec"]]), P = d({
  name: "ClipLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "35px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      height: e.size,
      width: e.size,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: e.color + " " + e.color + " transparent",
      borderRadius: e.radius,
      background: "transparent"
    })) };
  }
}), M = { class: "v-spinner" };
function q(e, i, s, l, o, r) {
  return y((u(), c("div", M, [
    t("div", {
      class: "v-clip",
      style: n(e.spinnerStyle)
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const E = /* @__PURE__ */ v(P, [["render", q], ["__scopeId", "data-v-8e9283de"]]), G = d({
  name: "RiseLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })) };
  }
}), N = { class: "v-spinner" };
function O(e, i, s, l, o, r) {
  return y((u(), c("div", N, [
    t("div", {
      class: "v-rise v-rise-odd",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-rise v-rise-even",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-rise v-rise-odd",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-rise v-rise-even",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-rise v-rise-odd",
      style: n(e.spinnerStyle)
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const Q = /* @__PURE__ */ v(G, [["render", O], ["__scopeId", "data-v-9445d389"]]), T = d({
  name: "BeatLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })) };
  }
}), V = { class: "v-spinner" };
function W(e, i, s, l, o, r) {
  return y((u(), c("div", V, [
    t("div", {
      class: "v-beat v-beat-odd",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-beat v-beat-even",
      style: n(e.spinnerStyle)
    }, null, 4),
    t("div", {
      class: "v-beat v-beat-odd",
      style: n(e.spinnerStyle)
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const j = /* @__PURE__ */ v(T, [["render", W], ["__scopeId", "data-v-0b357e00"]]), A = d({
  name: "SyncLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })), spinnerDelay1: { animationDelay: "0.07s" }, spinnerDelay2: { animationDelay: "0.14s" }, spinnerDelay3: { animationDelay: "0.21s" } };
  }
}), H = { class: "v-spinner" };
function J(e, i, s, l, o, r) {
  return y((u(), c("div", H, [
    t("div", {
      class: "v-sync v-sync1",
      style: n([e.spinnerStyle, e.spinnerDelay1])
    }, null, 4),
    t("div", {
      class: "v-sync v-sync2",
      style: n([e.spinnerStyle, e.spinnerDelay2])
    }, null, 4),
    t("div", {
      class: "v-sync v-sync3",
      style: n([e.spinnerStyle, e.spinnerDelay3])
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const K = /* @__PURE__ */ v(A, [["render", J], ["__scopeId", "data-v-8ae4833c"]]), U = d({
  name: "RotateLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "15px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size,
      margin: e.margin,
      borderRadius: e.radius
    })) };
  }
}), X = { class: "v-spinner" };
function Y(e, i, s, l, o, r) {
  return y((u(), c("div", X, [
    t("div", {
      class: "v-rotate v-rotate1",
      style: n(e.spinnerStyle)
    }, [
      t("div", {
        class: "v-rotate v-rotate2",
        style: n(e.spinnerStyle)
      }, null, 4),
      t("div", {
        class: "v-rotate v-rotate3",
        style: n(e.spinnerStyle)
      }, null, 4)
    ], 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const Z = /* @__PURE__ */ v(U, [["render", Y], ["__scopeId", "data-v-89d6b83d"]]), x = d({
  name: "FadeLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    height: {
      type: String,
      default: "15px"
    },
    width: {
      type: String,
      default: "5px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "20px"
    }
  },
  setup(e) {
    const i = a(() => ({
      backgroundColor: e.color,
      height: e.height,
      width: e.width,
      margin: e.margin,
      borderRadius: e.radius
    })), s = a(() => "-" + e.radius), l = a(
      () => parseFloat(e.radius) / 2 + parseFloat(e.radius) / 5.5 + "px"
    ), o = a(() => "-" + l.value), r = a(() => ({
      top: e.radius,
      left: 0,
      animationDelay: "0.12s"
    })), g = a(() => ({
      top: l.value,
      left: l.value,
      animationDelay: "0.24s",
      transform: "rotate(-45deg)"
    })), S = a(() => ({
      top: 0,
      left: e.radius,
      animationDelay: "0.36s",
      transform: "rotate(90deg)"
    })), f = a(() => ({
      top: o.value,
      left: l.value,
      animationDelay: "0.48s",
      transform: "rotate(45deg)"
    })), m = a(() => ({
      top: s.value,
      left: 0,
      animationDelay: "0.60s"
    })), h = a(() => ({
      top: o.value,
      left: o.value,
      animationDelay: "0.72s",
      transform: "rotate(-45deg)"
    })), $ = a(() => ({
      top: 0,
      left: s.value,
      animationDelay: "0.84s",
      transform: "rotate(90deg)"
    })), b = a(() => ({
      top: l.value,
      left: o.value,
      animationDelay: "0.96s",
      transform: "rotate(45deg)"
    }));
    return {
      spinnerStyle: i,
      animationStyle1: r,
      animationStyle2: g,
      animationStyle3: S,
      animationStyle4: f,
      animationStyle5: m,
      animationStyle6: h,
      animationStyle7: $,
      animationStyle8: b
    };
  }
}), ee = {
  class: "v-spinner",
  style: { position: "relative", fontSize: 0 }
};
function ne(e, i, s, l, o, r) {
  return y((u(), c("div", ee, [
    t("div", {
      class: "v-fade v-fade1",
      style: n([e.spinnerStyle, e.animationStyle1])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade2",
      style: n([e.spinnerStyle, e.animationStyle2])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade3",
      style: n([e.spinnerStyle, e.animationStyle3])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade4",
      style: n([e.spinnerStyle, e.animationStyle4])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade5",
      style: n([e.spinnerStyle, e.animationStyle5])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade6",
      style: n([e.spinnerStyle, e.animationStyle6])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade7",
      style: n([e.spinnerStyle, e.animationStyle7])
    }, null, 4),
    t("div", {
      class: "v-fade v-fade8",
      style: n([e.spinnerStyle, e.animationStyle8])
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const te = /* @__PURE__ */ v(x, [["render", ne], ["__scopeId", "data-v-578435e1"]]), ae = d({
  name: "PacmanLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "25px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = { animationDelay: "0.25s" }, s = { animationDelay: "0.50s" }, l = { animationDelay: "0.75s" }, o = { animationDelay: "1s" }, r = a(() => ({
      backgroundColor: e.color,
      width: "10px",
      height: "10px",
      margin: e.margin,
      borderRadius: e.radius
    })), g = a(() => e.size + " solid transparent"), S = a(() => e.size + " solid " + e.color), f = a(() => ({
      width: 0,
      height: 0,
      borderTop: S.value,
      borderRight: g.value,
      borderBottom: S.value,
      borderLeft: S.value,
      borderRadius: e.size
    })), m = a(() => ({
      transform: "translate(0, " + -parseFloat(e.size) / 4 + "px)",
      position: "absolute",
      top: "25px",
      left: "100px"
    }));
    return {
      spinnerStyle: r,
      spinnerStyle1: f,
      ballPositionStyle: m,
      spinnerDelay2: i,
      spinnerDelay3: s,
      spinnerDelay4: l,
      spinnerDelay5: o
    };
  }
}), ie = {
  class: "v-spinner",
  style: { position: "relative", fontSize: 0 }
};
function se(e, i, s, l, o, r) {
  return y((u(), c("div", ie, [
    t("div", {
      class: "v-pacman v-pacman1",
      style: n(e.spinnerStyle1)
    }, null, 4),
    t("div", {
      class: "v-pacman v-pacman-ball",
      style: n([e.spinnerStyle, e.ballPositionStyle, e.spinnerDelay2])
    }, null, 4),
    t("div", {
      class: "v-pacman v-pacman-ball",
      style: n([e.spinnerStyle, e.ballPositionStyle, e.spinnerDelay3])
    }, null, 4),
    t("div", {
      class: "v-pacman v-pacman-ball",
      style: n([e.spinnerStyle, e.ballPositionStyle, e.spinnerDelay4])
    }, null, 4),
    t("div", {
      class: "v-pacman v-pacman-ball",
      style: n([e.spinnerStyle, e.ballPositionStyle, e.spinnerDelay5])
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const le = /* @__PURE__ */ v(ae, [["render", se], ["__scopeId", "data-v-9a86d86b"]]), re = d({
  name: "SquareLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "50px"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size
    })) };
  }
}), oe = { class: "v-spinner" };
function de(e, i, s, l, o, r) {
  return y((u(), c("div", oe, [
    t("div", {
      class: "v-square",
      style: n(e.spinnerStyle)
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const ye = /* @__PURE__ */ v(re, [["render", de], ["__scopeId", "data-v-9268cf51"]]), ue = d({
  name: "ScaleLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    height: {
      type: String,
      default: "35px"
    },
    width: {
      type: String,
      default: "4px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "2px"
    }
  },
  setup(e) {
    return {
      spinnerStyle: a(() => ({
        backgroundColor: e.color,
        height: e.height,
        width: e.width,
        margin: e.margin,
        borderRadius: e.radius
      })),
      spinnerDelay1: { animationDelay: "0.1s" },
      spinnerDelay2: { animationDelay: "0.2s" },
      spinnerDelay3: { animationDelay: "0.3s" },
      spinnerDelay4: { animationDelay: "0.4s" },
      spinnerDelay5: { animationDelay: "0.5s" }
    };
  }
}), ce = { class: "v-spinner" };
function pe(e, i, s, l, o, r) {
  return y((u(), c("div", ce, [
    t("div", {
      class: "v-scale v-scale1",
      style: n([e.spinnerStyle, e.spinnerDelay1])
    }, null, 4),
    t("div", {
      class: "v-scale v-scale2",
      style: n([e.spinnerStyle, e.spinnerDelay2])
    }, null, 4),
    t("div", {
      class: "v-scale v-scale3",
      style: n([e.spinnerStyle, e.spinnerDelay3])
    }, null, 4),
    t("div", {
      class: "v-scale v-scale4",
      style: n([e.spinnerStyle, e.spinnerDelay4])
    }, null, 4),
    t("div", {
      class: "v-scale v-scale5",
      style: n([e.spinnerStyle, e.spinnerDelay5])
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const ve = /* @__PURE__ */ v(ue, [["render", pe], ["__scopeId", "data-v-865c85c7"]]), Se = d({
  name: "SkewLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "20px"
    }
  },
  setup(e) {
    return { spinnerStyle: a(() => ({
      height: 0,
      width: 0,
      borderLeft: e.size + " solid transparent",
      borderRight: e.size + " solid transparent",
      borderBottom: e.size + " solid " + e.color
    })) };
  }
}), ge = { class: "v-spinner" };
function fe(e, i, s, l, o, r) {
  return y((u(), c("div", ge, [
    t("div", {
      class: "v-skew",
      style: n(e.spinnerStyle)
    }, null, 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const me = /* @__PURE__ */ v(Se, [["render", fe], ["__scopeId", "data-v-cb1fb368"]]), he = d({
  name: "MoonLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "60px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = a(() => parseFloat(e.size) / 7), s = a(() => ({
      height: e.size,
      width: e.size,
      borderRadius: e.radius,
      margin: e.margin
    })), l = a(() => ({
      height: i.value + "px",
      width: i.value + "px",
      borderRadius: e.radius
    })), o = a(() => ({
      top: parseFloat(e.size) / 2 - i.value / 2 + "px",
      backgroundColor: e.color
    })), r = a(() => ({
      border: i.value + "px solid " + e.color
    }));
    return { spinnerStyle: s, spinnerMoonStyle: l, animationStyle2: o, animationStyle3: r };
  }
}), $e = { class: "v-spinner" };
function be(e, i, s, l, o, r) {
  return y((u(), c("div", $e, [
    t("div", {
      class: "v-moon v-moon1",
      style: n(e.spinnerStyle)
    }, [
      t("div", {
        class: "v-moon v-moon2",
        style: n([e.spinnerMoonStyle, e.animationStyle2])
      }, null, 4),
      t("div", {
        class: "v-moon v-moon3",
        style: n([e.spinnerStyle, e.animationStyle3])
      }, null, 4)
    ], 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const De = /* @__PURE__ */ v(he, [["render", be], ["__scopeId", "data-v-361ae858"]]), ze = d({
  name: "RingLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "60px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = a(() => ({
      height: e.size,
      width: e.size,
      border: parseFloat(e.size) / 10 + "px solid " + e.color,
      opacity: 0.4,
      borderRadius: e.radius
    })), s = a(() => ({
      height: e.size,
      width: e.size,
      position: "relative"
    }));
    return { spinnerStyle: i, spinnerBasicStyle: s };
  }
}), _e = { class: "v-spinner" };
function Le(e, i, s, l, o, r) {
  return y((u(), c("div", _e, [
    t("div", {
      class: "v-ring v-ring1",
      style: n(e.spinnerBasicStyle)
    }, [
      t("div", {
        class: "v-ring v-ring2",
        style: n(e.spinnerStyle)
      }, null, 4),
      t("div", {
        class: "v-ring v-ring3",
        style: n(e.spinnerStyle)
      }, null, 4)
    ], 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const we = /* @__PURE__ */ v(ze, [["render", Le], ["__scopeId", "data-v-13f2892c"]]), Be = d({
  name: "BounceLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "60px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = a(() => ({
      backgroundColor: e.color,
      height: e.size,
      width: e.size,
      borderRadius: e.radius,
      opacity: 0.6,
      position: "absolute",
      top: 0,
      left: 0
    })), s = a(() => ({
      height: e.size,
      width: e.size,
      position: "relative"
    }));
    return { spinnerStyle: i, spinnerBasicStyle: s };
  }
}), Re = { class: "v-spinner" };
function ke(e, i, s, l, o, r) {
  return y((u(), c("div", Re, [
    t("div", {
      class: "v-bounce v-bounce1",
      style: n(e.spinnerBasicStyle)
    }, [
      t("div", {
        class: "v-bounce v-bounce2",
        style: n(e.spinnerStyle)
      }, null, 4),
      t("div", {
        class: "v-bounce v-bounce3",
        style: n(e.spinnerStyle)
      }, null, 4)
    ], 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const Ce = /* @__PURE__ */ v(Be, [["render", ke], ["__scopeId", "data-v-ea5f21fd"]]), Ie = d({
  name: "DotLoader",
  props: {
    loading: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String,
      default: "#5dc596"
    },
    size: {
      type: String,
      default: "60px"
    },
    margin: {
      type: String,
      default: "2px"
    },
    radius: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    const i = a(() => ({
      backgroundColor: e.color,
      height: parseFloat(e.size) / 2 + "px",
      width: parseFloat(e.size) / 2 + "px",
      borderRadius: e.radius
    })), s = a(() => ({
      height: e.size,
      width: e.size,
      position: "relative"
    }));
    return { spinnerStyle: i, spinnerBasicStyle: s };
  }
}), Fe = { class: "v-spinner" };
function Pe(e, i, s, l, o, r) {
  return y((u(), c("div", Fe, [
    t("div", {
      class: "v-dot v-dot1",
      style: n(e.spinnerBasicStyle)
    }, [
      t("div", {
        class: "v-dot v-dot2",
        style: n(e.spinnerStyle)
      }, null, 4),
      t("div", {
        class: "v-dot v-dot3",
        style: n(e.spinnerStyle)
      }, null, 4)
    ], 4)
  ], 512)), [
    [p, e.loading]
  ]);
}
const Me = /* @__PURE__ */ v(Ie, [["render", Pe], ["__scopeId", "data-v-e4693416"]]), Ee = {
  PulseLoader: k,
  GridLoader: F,
  ClipLoader: E,
  RiseLoader: Q,
  BeatLoader: j,
  SyncLoader: K,
  RotateLoader: Z,
  FadeLoader: te,
  PacmanLoader: le,
  SquareLoader: ye,
  ScaleLoader: ve,
  SkewLoader: me,
  MoonLoader: De,
  RingLoader: we,
  BounceLoader: Ce,
  DotLoader: Me
};
export {
  j as BeatLoader,
  Ce as BounceLoader,
  E as ClipLoader,
  Me as DotLoader,
  te as FadeLoader,
  F as GridLoader,
  De as MoonLoader,
  le as PacmanLoader,
  k as PulseLoader,
  we as RingLoader,
  Q as RiseLoader,
  Z as RotateLoader,
  ve as ScaleLoader,
  me as SkewLoader,
  ye as SquareLoader,
  K as SyncLoader,
  Ee as default
};
