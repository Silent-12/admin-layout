import { ref as T, defineAsyncComponent as Ue, defineComponent as Q, computed as M, openBlock as m, createElementBlock as p, Fragment as Y, renderList as ee, createBlock as U, resolveDynamicComponent as Qe, unref as i, withCtx as N, renderSlot as xe, createVNode as w, normalizeClass as ne, createElementVNode as h, toDisplayString as O, createCommentVNode as X, watch as he, withDirectives as ue, withModifiers as Me, normalizeStyle as J, vShow as de, createTextVNode as we, useCssVars as vt, onUnmounted as ke, Transition as Je, onMounted as Te, nextTick as ye, watchEffect as pt, shallowRef as yt, resolveComponent as Ze, KeepAlive as bt, Teleport as _t, normalizeProps as xt, guardReactiveProps as At, createSlots as Tt, isRef as et } from "vue";
import { AoSvgIcon as z, AoLogo as wt, AoIconButton as ve } from "@ao/admin-components";
import { useRouter as $e, useRoute as Fe } from "vue-router";
import { ElDropdown as tt, ElDropdownMenu as nt, ElDropdownItem as ot, ElButton as st, ElMessage as Ce, ElSubMenu as St, ElMenuItem as kt, ElScrollbar as at, ElMenu as Ct, ElDrawer as Et, ElSwitch as Mt, ElInputNumber as Bt, ElSelect as $t, ElOption as Lt, ElDialog as It, ElInput as Dt } from "element-plus";
import { useI18n as Ee } from "vue-i18n";
import { defineStore as Le, storeToRefs as oe } from "pinia";
import { usePreferredDark as lt, useWindowSize as it, useFullscreen as Ht, useElementSize as qe, useTimeoutFn as Rt, useBreakpoints as Ft } from "@vueuse/core";
import { Search as Ot } from "@element-plus/icons-vue";
import "nprogress";
const Pt = { theme: { title: "主题风格", list: ["浅色", "深色", "系统"] }, menu: { title: "菜单风格" }, color: { title: "系统主题色" }, basics: { title: "基础配置", list: { multiTab: "开启多标签栏", accordion: "侧边栏自动收起", collapseSidebar: "显示折叠侧边栏按钮", fastEnter: "显示快速入口", language: "显示多语言选择", notification: "显示通知入口" } }, actions: { resetConfig: "重置配置", resetFailed: "重置失败，请刷新页面后重试" } }, Nt = { btn: { refresh: "刷新", fixed: "固定当前标签", unfixed: "取消固定", closeLeft: "关闭左侧", closeRight: "关闭右侧", closeOther: "关闭其他", closeAll: "关闭全部" } }, Vt = { title: "通知", btnRead: "标为已读", bar: ["通知", "消息", "代办"], text: ["暂无"], viewAll: "查看全部" }, Wt = { placeholder: "搜索页面", historyTitle: "搜索历史", switchKeydown: "切换", selectKeydown: "选择", exitKeydown: "关闭" }, Gt = { search: { title: "搜索" } }, Kt = {
  setting: Pt,
  worktab: Nt,
  notice: Vt,
  search: Wt,
  topBar: Gt
}, Ut = { theme: { title: "Theme Style", list: ["Light", "Dark", "System"] }, menu: { title: "Menu Style" }, color: { title: "Theme Color" }, basics: { title: "Basic Config", list: { multiTab: "Show work tab", accordion: "Sidebar accordion", collapseSidebar: "Show sidebar button", fastEnter: "Show fast enter", language: "Show multilingual selection", notification: "Show notification entry" } }, actions: { resetConfig: "Reset Config", resetFailed: "Reset failed, please refresh the page and try again" } }, qt = { btn: { refresh: "Refresh", fixed: "Pin current tab", unfixed: "Unpin current tab", closeLeft: "Close left", closeRight: "Close right", closeOther: "Close other", closeAll: "Close all" } }, Xt = { title: "Notice", btnRead: "Mark as read", bar: ["Notice", "Message", "Todo"], text: ["No"], viewAll: "View all" }, zt = { placeholder: "Search page", historyTitle: "Search history", switchKeydown: "Navigate", selectKeydown: "Select", exitKeydown: "Close" }, jt = { search: { title: "Search" } }, Yt = {
  setting: Ut,
  worktab: qt,
  notice: Xt,
  search: zt,
  topBar: jt
}, Qt = "4", Jt = T("zh");
let be = {};
const Zt = (e) => {
  be = {
    router: e.router,
    i18n: e.i18n,
    menuSource: e.menuSource,
    language: e.language,
    onLanguageChange: e.onLanguageChange,
    config: e.config
  };
}, rt = () => be.router, en = () => be.i18n, Se = () => be.menuSource?.() ?? {
  menuList: [],
  applicationList: [],
  currentApplication: void 0,
  homePath: ""
}, ct = () => be.language ?? Jt, tn = () => be.onLanguageChange, nn = () => be.config?.systemName ?? void 0 ?? "Ao Admin", on = [
  {
    name: "设置面板",
    key: "settings-panel",
    component: Ue(() => Promise.resolve().then(() => Ls)),
    enabled: !0
  },
  {
    name: "全局搜索",
    key: "global-search",
    component: Ue(() => Promise.resolve().then(() => Js)),
    enabled: !0
  }
], sn = () => on.filter((e) => e.enabled !== !1), an = /* @__PURE__ */ Q({
  name: "AoGlobalComponent",
  __name: "AoGlobalComponent",
  setup(e) {
    const t = M(() => sn());
    return (n, s) => (m(!0), p(Y, null, ee(t.value, (c) => (m(), U(Qe(c.component), {
      key: c.key
    }))), 128));
  }
});
function ut(e) {
  return !e.path?.trim() || e.path.startsWith("http://") || e.path.startsWith("https://") || e.meta.isHide && e.meta.isFullPage !== !0 || e.meta.link && !e.meta.isIframe ? !1 : e.children?.length ? !0 : !!(e.component || e.meta.isIframe === !0);
}
function dt(e) {
  for (const t of e)
    if (ut(t)) {
      if (t.children?.length) {
        const n = dt(t.children);
        if (n) return n;
        continue;
      }
      return t.path.startsWith("/") ? t.path : `/${t.path}`;
    }
  return "";
}
function ra(e, t) {
  return [...e].sort((n, s) => s.path.length - n.path.length).find((n) => t === n.path || t.startsWith(`${n.path}/`));
}
const ca = (e) => {
  const { title: t } = e.meta;
  t && setTimeout(() => {
    document.title = `${fe(String(t))} - ${nn()}`;
  }, 150);
}, fe = (e) => {
  if (e) {
    if (e.startsWith("menus.")) {
      const t = en();
      return t ? t.global.te(e) ? t.global.t(e) : e.split(".").pop() || e : e;
    }
    return e;
  }
  return "";
}, ln = { class: "menu-txt" }, rn = /* @__PURE__ */ Q({
  name: "AoFastEnter",
  __name: "AoFastEnter",
  setup(e) {
    const t = $e(), n = M(() => Se().applicationList), s = M(() => Se().currentApplication), c = (r) => {
      const l = dt(r.children || []);
      if (!l || r.path === s.value?.path)
        return;
      const o = t.resolve({ path: l }).href;
      window.open(o, "_blank", "noopener");
    };
    return (r, l) => (m(), U(i(tt), {
      "popper-class": "langDropDownStyle",
      onCommand: c
    }, {
      dropdown: N(() => [
        w(i(nt), null, {
          default: N(() => [
            (m(!0), p(Y, null, ee(n.value, (o) => (m(), p("div", {
              key: o.path,
              class: "lang-btn-item"
            }, [
              w(i(ot), {
                command: o,
                class: ne({ "is-selected": o.path === s.value?.path })
              }, {
                default: N(() => [
                  h("span", ln, O(i(fe)(o.meta.title)), 1),
                  o.path === s.value?.path ? (m(), U(i(z), {
                    key: 0,
                    style: { "margin-left": "5px" },
                    icon: "ri:check-fill"
                  })) : X("", !0)
                ]),
                _: 2
              }, 1032, ["command", "class"])
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      default: N(() => [
        xe(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), cn = { class: "notification-panel__header" }, un = { class: "notification-panel__title" }, dn = { class: "notification-panel__read-btn" }, hn = { class: "notification-panel__tabs" }, mn = ["onClick"], fn = { class: "notification-panel__content" }, gn = { class: "notification-panel__scroll scrollbar-thin" }, vn = { class: "notification-item__body" }, pn = { class: "notification-item__title" }, yn = { class: "notification-item__time" }, bn = { class: "notification-item__avatar-box" }, _n = ["src"], xn = { class: "notification-item__body" }, An = { class: "notification-item__msg-title" }, Tn = { class: "notification-item__time" }, wn = { class: "pending-item__time" }, Sn = { class: "notification-empty" }, kn = { class: "notification-empty__text" }, Cn = { class: "notification-panel__footer" }, En = "https://dummyimage.com/160x160.png", Mn = "https://dummyimage.com/160x160.png", Bn = "https://dummyimage.com/160x160.png", $n = "https://dummyimage.com/80x80.png", Ln = "https://dummyimage.com/80x80.png", In = "https://dummyimage.com/80x80.png", Dn = /* @__PURE__ */ Q({
  name: "AoNotification",
  __name: "AoNotification",
  props: {
    value: { type: Boolean }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const { t: n } = Ee(), s = e, c = t, r = T(!1), l = T(!1), o = T(0), g = () => {
      const B = T([
        {
          title: "xxxxxxxxxx",
          time: "2024-6-13 0:10",
          type: "email"
        },
        {
          title: "xxxxxxxxxx",
          time: "2024-4-21 8:05",
          type: "message"
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-3-17 21:12",
          type: "collection"
        },
        {
          title: "xxxxxxxxxx",
          time: "2024-02-14 0:20",
          type: "user"
        },
        {
          title: "xxxxxxxxxx",
          time: "2024-1-20 0:15",
          type: "notice"
        }
      ]), $ = T([
        {
          title: "xxxxxxxxxx",
          time: "2021-2-26 23:50",
          avatar: En
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-2-21 8:05",
          avatar: Mn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-1-17 21:12",
          avatar: Bn
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-01-14 0:20",
          avatar: $n
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-20 0:15",
          avatar: Ln
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-17 22:06",
          avatar: In
        }
      ]), a = T([]), u = M(() => [
        {
          name: M(() => n("notice.bar[0]")),
          num: B.value.length
        },
        {
          name: M(() => n("notice.bar[1]")),
          num: $.value.length
        },
        {
          name: M(() => n("notice.bar[2]")),
          num: a.value.length
        }
      ]);
      return {
        noticeList: B,
        msgList: $,
        pendingList: a,
        barList: u
      };
    }, f = () => {
      const B = {
        email: {
          icon: "ri:mail-line",
          iconClass: "notice-icon--email"
        },
        message: {
          icon: "ri:volume-down-line",
          iconClass: "notice-icon--message"
        },
        collection: {
          icon: "ri:heart-3-line",
          iconClass: "notice-icon--collection"
        },
        user: {
          icon: "ri:volume-down-line",
          iconClass: "notice-icon--user"
        },
        notice: {
          icon: "ri:notification-3-line",
          iconClass: "notice-icon--notice"
        }
      };
      return {
        getNoticeStyle: (a) => {
          const u = {
            icon: "ri:arrow-right-circle-line",
            iconClass: "notice-icon--notice"
          };
          return B[a] || u;
        }
      };
    }, E = () => ({
      showNotice: ($) => {
        $ ? (l.value = !0, setTimeout(() => {
          r.value = !0;
        }, 5)) : (r.value = !1, setTimeout(() => {
          l.value = !1;
        }, 350));
      }
    }), y = (B, $, a, u) => {
      const _ = (S) => {
        o.value = S;
      }, R = M(() => {
        const x = [B.value, $.value, a.value][o.value];
        return x && x.length === 0;
      });
      return {
        changeBar: _,
        currentTabIsEmpty: R,
        handleViewAll: () => {
          const x = {
            0: u.handleNoticeAll,
            1: u.handleMsgAll,
            2: u.handlePendingAll
          }[o.value];
          x?.(), c("update:value", !1);
        }
      };
    }, H = () => ({
      handleNoticeAll: () => {
        console.log("查看全部通知");
      },
      handleMsgAll: () => {
        console.log("查看全部消息");
      },
      handlePendingAll: () => {
        console.log("查看全部待办");
      }
    }), { noticeList: L, msgList: v, pendingList: k, barList: I } = g(), { getNoticeStyle: A } = f(), { showNotice: G } = E(), { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: Z } = H(), { changeBar: ae, currentTabIsEmpty: q, handleViewAll: le } = y(
      L,
      v,
      k,
      { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: Z }
    );
    return he(
      () => s.value,
      (B) => {
        G(B);
      }
    ), (B, $) => ue((m(), p("div", {
      class: "ao-notification-panel ao-card-sm notification-panel",
      style: J({
        transform: r.value ? "scaleY(1)" : "scaleY(0.9)",
        opacity: r.value ? 1 : 0
      }),
      onClick: $[0] || ($[0] = Me(() => {
      }, ["stop"]))
    }, [
      h("div", cn, [
        h("span", un, O(B.$t("notice.title")), 1),
        h("span", dn, O(B.$t("notice.btnRead")), 1)
      ]),
      h("ul", hn, [
        (m(!0), p(Y, null, ee(i(I), (a, u) => (m(), p("li", {
          key: u,
          class: ne(["notification-panel__tab", { "bar-active": o.value === u }]),
          onClick: (_) => i(ae)(u)
        }, O(a.name) + " (" + O(a.num) + ") ", 11, mn))), 128))
      ]),
      h("div", fn, [
        h("div", gn, [
          ue(h("ul", null, [
            (m(!0), p(Y, null, ee(i(L), (a, u) => (m(), p("li", {
              key: u,
              class: "notification-item"
            }, [
              h("div", {
                class: ne(["notification-item__icon", [i(A)(a.type).iconClass]])
              }, [
                w(i(z), {
                  class: "notification-item__icon-svg",
                  icon: i(A)(a.type).icon
                }, null, 8, ["icon"])
              ], 2),
              h("div", vn, [
                h("h4", pn, O(a.title), 1),
                h("p", yn, O(a.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, o.value === 0]
          ]),
          ue(h("ul", null, [
            (m(!0), p(Y, null, ee(i(v), (a, u) => (m(), p("li", {
              key: u,
              class: "notification-item"
            }, [
              h("div", bn, [
                h("img", {
                  src: a.avatar,
                  class: "notification-item__avatar"
                }, null, 8, _n)
              ]),
              h("div", xn, [
                h("h4", An, O(a.title), 1),
                h("p", Tn, O(a.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, o.value === 1]
          ]),
          ue(h("ul", null, [
            (m(!0), p(Y, null, ee(i(k), (a, u) => (m(), p("li", {
              key: u,
              class: "pending-item"
            }, [
              h("h4", null, O(a.title), 1),
              h("p", wn, O(a.time), 1)
            ]))), 128))
          ], 512), [
            [de, o.value === 2]
          ]),
          ue(h("div", Sn, [
            w(i(z), {
              icon: "system-uicons:inbox",
              class: "notification-empty__icon"
            }),
            h("p", kn, O(B.$t("notice.text[0]")) + O(i(I)[o.value].name), 1)
          ], 512), [
            [de, i(q)]
          ])
        ]),
        h("div", Cn, [
          w(i(st), {
            class: "notification-panel__view-all",
            onClick: i(le)
          }, {
            default: N(() => [
              we(O(B.$t("notice.viewAll")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      $[1] || ($[1] = h("div", { class: "notification-panel__bottom-spacer" }, null, -1))
    ], 4)), [
      [de, l.value]
    ]);
  }
}), se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, c] of t)
    n[s] = c;
  return n;
}, Hn = /* @__PURE__ */ se(Dn, [["__scopeId", "data-v-0905206f"]]);
var j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.AUTO = "auto", e))(j || {}), pe = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.DESIGN = "design", e))(pe || {}), He = /* @__PURE__ */ ((e) => (e.ZH = "zh", e.EN = "en", e))(He || {});
const Rn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////29vj9/f34+Pox8uq3AAABTElEQVRo3u2VwW3EMAwEhcs1QKuBE5QCYlfg9N9UcjHyMUQQtlaASOz89jWwzCUTIYQQQgghhJCUPleBo9ueYoDVrTIAwMdBdEUMsLpvGQHg10F0ojBat6VU9YDWbe9Q9YDV5dc7PFY9QHXLkYoeoLqvI33oAap7HemhB6juP+qBull19qh4LoJdc89LzFzRvg/QH3GvOXXUzahLWKhrQB111P0SS1elj+2S7im97Fd0RXpZruhW6SVf0Uk/E+sAjznxqACKMHHNG0TamWeoo24OXe1sccJe8x2qK/YGtoAeoAzViYlnnf2YnkfFLoLnmjeItDPPUEfdHLoqd9igS8xmR65omwV5gGwy9LzauNDdfkwXo3K7CC5q3iDSzjxDHXVz6GpHj4FLbB+iKx07GHmA8hCdqETQ6Y8ZYVT0IkSoeYNIO/MMddQN1v0AFy9OBRBx85QAAAAASUVORK5CYII=", Fn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAG1BMVEUnJyo/P0ZSUlxKSlNOTlc5OT8vLzJDQ0s0NDkX0J24AAABYElEQVRo3u2XMWrEMBBFVW47LM4BHEPqTZPeN3CzvQtD6uQCzs1j4lRGw2DPF2jEf900eqxW/w9OhBBCCCGEEEJS+pwEjm67iQFWN0kBHD8OqpvFAKv7kRI4/jqoThx4dN/j8KEPaN2933joA1g39huDPmB19/6Phz5AdV/7oW/6ANW974e+6gNUN+6HDvoA1fX/6ENknX2ZkZ+KHYTIMTdLLHZFGwso+nqljjrqJGGhLgN11FG30ZZuER/PU7qbeFnP6Gbx8nJGN4mX7oxO/FSsA1xmxU8FEISKY56hpc48Qh11degWZ4oTdpuvUN1sN7AFdAF1UJ2YRNbZlxn5qdhBiBzzDC115hHqqKtDt8gVntASs1mxFe1qbvznZAddrzYhdJcvM8RTuRyEEDHP0FJnHqGOujp0iyPHwBJbi+hmRwcjF1BXRCcqLej0y2zhqehBaCHmGVrqzCPUUVdY9wter4K58MOVTQAAAABJRU5ErkJggg==", On = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAJFBMVEXy8vUREREzMzP////4+Pr19fgcHBz8/P0rKysyMjIwMDAjIyPGISqaAAABlElEQVRo3u3XsUoEMRAGYItdrNMc1hZhY5t7AMHCduEE67MSKyG+gM09iIX9vqFeooRwhGGTIZfk/umm+iA3/8ztVWKJtAIHDhw4cODAgQMHDhy4Orkno+N1m1ZxbdC6JGeKcoMuyu3Kcg9lOVOW02fiPubx8aSx3EGIV25u639I31juW/zWGzM3H5sxaBx3tz9ymy9Wbuvn1DeWk8LWCyv37rrroLHcp+NuWLl71w1BY7m94zas3Oy6MWgsJ/6Klftvg6Ybjn7MlkeFDkLLMaeXWNMrmjhArZ9XcODAaebPSXDgwIG7BO45b0WrwypuyL4Iyxpul83JNZzJ5qY1nM7mVMUcw2NWPCoMQag45p3vTHDg6uQiMfcppor3mi8kxLqiJStnKG5i5TTFqZY5+jFbHhU6CC3HvPOdCQ5cnVzCn/Yw/UW+zRfOFU2X5DxAdE2c55Uu1QSX/JhNjEpyEJqIeec7Exy4OrnTmIc5LvRtvpAA64qWJMB6gCYSYD2vqgcu/pg9jEo8CD3EvPOdCQ5cYe4H2qWIxMTt67gAAAAASUVORK5CYII=", Pn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////5+fnx8fHd3d0ah087AAAAyklEQVRo3u3Z0Q2AIAxFUeIGbmBYgRXcfyYXaEh8PhXKvQucvzaUsncq9uDg4ODg4OAK3G3uDIJLxFU1idtk7lC4qvcrFwcHBwfn5YwjWuCcC6gF+dYrHBzcAE8SOEO2ES1x+gI67FztBgf3BteC4ODm4KQRrXOlx82/XuHg4OBG5VrQx2cc45FK4aoeHFye4zAcXPp/hNzbPDeX+9IOBzcm5x/Rj7lNXzofrFc4OLiluRa0Fmcc0f4j1UjrFW7eJwkcHBwcHBycswty2jT2B1pWhwAAAABJRU5ErkJggg==", Nn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vUnJyr5+fk/P0bz8/YkmYUBAAAA0ElEQVRo3u3ZwQ3EMAhEUR/SwHZgWenADVjbf1FpwCIyIg6QPw28GyOg/IQU88DBwcHBwcEVuGWuTwKXhzuaNkPD/dXcqeGaPq9y88DBwcHZcnYjui5wFgUUoF7h4NJzuTcguEOewlLMC+g055oYOLgnuD4JHFwMThzRde+RakSvVzg4ODi3HH+EdhO/fwS4uJzD4zAcXPo/Qu42z83lvrTDwfnk7Ef0ePSPIO8FG+oVDg7u01yf5Fvc2oiue49Uw1G9wsVdSeDg4ODg4OAscwFb7y6GSsIW5AAAAABJRU5ErkJggg==", Vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAElBMVEXy8vX////5+fnx8fHd3d1VVVVl+HYBAAAAzklEQVRo3u3ZYQ2FMAxF4QUHzwGZhVl4FvBvBQE0S7hcYCvnGPj+tVlXfp2KPTg4ODg4OLgCd5rb/sfgEnFVTeIWmVsVruq9ysXBwcHBeTnjiBY45wJqQb71CgcHN8CTBM6QbURLnL6AVjtXu8HB3cG1IDi4OThpROtc6XHzr1c4ODi4UbkW9PAZx3ikUriqBweX5zgMB5f+HyH3Ns/N5b60w8GNyflH9GVu0ZfOA+sVDg7u01wL+hZnHNH+I9VI6xVu3icJHBwcHBwcnLMdqYI1ftKrSesAAAAASUVORK5CYII=", _e = {
  /** 系统主题预览图 */
  themeStyles: {
    /** 亮色主题 */
    light: Rn,
    /** 暗色主题 */
    dark: Fn,
    /** 自动主题（跟随系统） */
    system: On
  },
  /** 菜单风格预览图 */
  menuStyles: {
    /** 设计风格 */
    design: Pn,
    /** 暗色风格 */
    dark: Nn,
    /** 亮色风格 */
    light: Vn
  }
}, Oe = {
  menuButton: {
    enabled: !0,
    description: "控制左侧菜单的展开/收起按钮"
  },
  fastEnter: {
    enabled: !0,
    description: "快速入口功能，提供常用应用和链接的快速访问"
  },
  globalSearch: {
    enabled: !0,
    description: "全局搜索功能，支持快捷键 Ctrl+K 或 Cmd+K"
  },
  fullscreen: {
    enabled: !0,
    description: "全屏切换功能"
  },
  notification: {
    enabled: !0,
    description: "通知中心，显示系统通知和消息"
  },
  language: {
    enabled: !0,
    description: "多语言切换功能"
  },
  settings: {
    enabled: !0,
    description: "系统设置面板"
  },
  themeToggle: {
    enabled: !0,
    description: "主题切换功能（明暗主题）"
  }
}, Wn = {
  // 系统信息
  systemInfo: {
    name: void 0,
    // 系统名称
    version: void 0
    // 系统版本
  },
  // 系统主题
  systemThemeStyles: {
    [j.LIGHT]: { className: "" },
    [j.DARK]: { className: j.DARK }
  },
  // 系统主题列表
  settingThemeList: [
    {
      name: "Light",
      theme: j.LIGHT,
      color: ["#fff", "#fff"],
      leftLineColor: "#EDEEF0",
      rightLineColor: "#EDEEF0",
      img: _e.themeStyles.light
    },
    {
      name: "Dark",
      theme: j.DARK,
      color: ["#22252A"],
      leftLineColor: "#3F4257",
      rightLineColor: "#3F4257",
      img: _e.themeStyles.dark
    },
    {
      name: "System",
      theme: j.AUTO,
      color: ["#fff", "#22252A"],
      leftLineColor: "#EDEEF0",
      rightLineColor: "#3F4257",
      img: _e.themeStyles.system
    }
  ],
  // 菜单主题列表
  themeList: [
    {
      theme: pe.DESIGN,
      background: "#f3f5f8",
      systemNameColor: "var(--ao-gray-800)",
      iconColor: "#6B6B6B",
      textColor: "#29343D",
      img: _e.menuStyles.design
    },
    {
      theme: pe.DARK,
      background: "#191A23",
      systemNameColor: "#D9DADB",
      iconColor: "#BABBBD",
      textColor: "#BABBBD",
      img: _e.menuStyles.dark
    },
    {
      theme: pe.LIGHT,
      background: "#ffffff",
      systemNameColor: "var(--ao-gray-800)",
      iconColor: "#6B6B6B",
      textColor: "#29343D",
      img: _e.menuStyles.light
    }
  ],
  // 暗黑模式菜单样式
  darkMenuStyles: [
    {
      theme: pe.DARK,
      background: "var(--default-box-color)",
      systemNameColor: "#DDDDDD",
      iconColor: "#BABBBD",
      textColor: "rgba(#FFFFFF, 0.7)"
    }
  ],
  // 系统主色
  systemMainColor: [
    "#0064ff",
    "#17C3B2",
    "#B48DF3",
    "#60C041",
    "#38C0FC",
    "#F9901F",
    "#FF80C8"
  ],
  // 顶部栏功能配置
  headerBar: Oe
}, me = Object.freeze(Wn);
function Pe(e) {
  const t = e.trim().replace(/^#/, "");
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t);
}
function Gn(e, t, n) {
  const s = (c) => Number.isInteger(c) && c >= 0 && c <= 255;
  return s(e) && s(t) && s(n);
}
function Be(e) {
  if (!Pe(e))
    throw Ce.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  let n = e.replace(/^#/, "");
  n.length === 3 && (n = n.split("").map((c) => c.repeat(2)).join(""));
  const s = n.match(/../g);
  if (!s)
    throw new Error("Invalid hex color format");
  return s.map((c) => parseInt(c, 16));
}
function Ne(e, t, n) {
  if (!Gn(e, t, n))
    throw Ce.warning("输入错误的RGB颜色值"), new Error("Invalid RGB color values");
  const s = (c) => {
    const r = c.toString(16);
    return r.length === 1 ? `0${r}` : r;
  };
  return `#${s(e)}${s(t)}${s(n)}`;
}
function Kn(e, t, n) {
  const s = Math.max(0, Math.min(1, Number(n))), c = Be(e), r = Be(t), l = c.map((o, g) => {
    const f = r[g];
    return Math.round(o * (1 - s) + f * s);
  });
  return Ne(l[0], l[1], l[2]);
}
function ht(e, t, n = !1) {
  if (!Pe(e))
    throw Ce.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  if (n)
    return Ve(e, t);
  const c = Be(e).map((r) => Math.floor((255 - r) * t + r));
  return Ne(c[0], c[1], c[2]);
}
function Ve(e, t) {
  if (!Pe(e))
    throw Ce.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  const s = Be(e).map((c) => Math.floor(c * (1 - t)));
  return Ne(s[0], s[1], s[2]);
}
function Un(e, t = !1) {
  document.documentElement.style.setProperty("--el-color-primary", e);
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${n}`,
      ht(e, n / 10, t)
    );
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-dark-${n}`,
      Ve(e, n / 10)
    );
}
function mt(e) {
  const t = "#ffffff", n = document.documentElement.style;
  n.setProperty("--el-color-primary", e), Un(e, te().isDark);
  for (let s = 1; s < 16; s++) {
    const c = Kn(e, t, s / 16);
    n.setProperty(`--el-color-primary-custom-${s}`, c);
  }
}
const Xe = (e) => {
  window.open(e, "_blank");
}, ft = (e, t = !1) => {
  const n = rt();
  if (!n) {
    console.warn("[ao-admin-layout] 未注入 router，无法跳转");
    return;
  }
  const { link: s, isIframe: c } = e.meta;
  if (s && !c)
    return Xe(s);
  if (!t || !e.children?.length)
    return n.push(e.path);
  const r = (o) => {
    for (const g of o)
      if (ut(g))
        return g.children?.length && r(g.children) || g;
  }, l = r(e.children);
  if (!l)
    return n.push(e.path);
  if (l.meta?.link)
    return Xe(l.meta.link);
  n.push(l.path);
};
class qn {
  /** 主题键名（index.html中使用了，如果修改，需要同步修改） */
  static THEME_KEY = "sys-theme";
  /** 上次登录用户ID键名（用于判断是否为同一用户登录） */
  static LAST_USER_ID_KEY = "sys-last-user-id";
}
const ie = {
  /** 菜单是否展开 */
  menuOpen: !0,
  /** 系统主题类型 */
  systemThemeType: j.AUTO,
  /** 系统主题模式 */
  systemThemeMode: j.AUTO,
  /** 菜单风格 */
  menuThemeType: pe.DESIGN,
  /** 系统主题颜色 */
  systemThemeColor: me.systemMainColor[0],
  /** 是否显示菜单按钮 */
  showMenuButton: !0,
  /** 是否显示快速入口 */
  showFastEnter: !0,
  /** 是否显示工作台标签 */
  showWorkTab: !0,
  /** 是否显示语言切换 */
  showLanguage: !0,
  /** 是否显示通知入口 */
  showNotification: !1,
  /** 是否显示设置引导 */
  showSettingGuide: !0,
  /** 是否唯一展开 */
  uniqueOpened: !0,
  /** 是否刷新 */
  refresh: !1
}, te = Le(
  "settingStore",
  () => {
    const e = T(ie.menuOpen), t = T(ie.systemThemeType), n = T(ie.systemThemeMode), s = T(ie.menuThemeType), c = T(ie.systemThemeColor), r = T(ie.showMenuButton), l = T(ie.showFastEnter), o = T(ie.showWorkTab), g = T(ie.showLanguage), f = T(ie.showNotification), E = T(ie.showSettingGuide), y = T(ie.uniqueOpened), H = T(ie.refresh), L = M(() => {
      const $ = me.themeList.filter((a) => a.theme === s.value);
      return v.value ? me.darkMenuStyles[0] : $[0];
    }), v = M(() => t.value === j.DARK);
    return {
      systemThemeType: t,
      systemThemeMode: n,
      menuThemeType: s,
      systemThemeColor: c,
      uniqueOpened: y,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: o,
      showLanguage: g,
      showNotification: f,
      showSettingGuide: E,
      menuOpen: e,
      refresh: H,
      getMenuTheme: L,
      isDark: v,
      setGlopTheme: ($, a) => {
        t.value = $, n.value = a, localStorage.setItem(qn.THEME_KEY, $);
      },
      switchMenuStyles: ($) => {
        s.value = $;
      },
      setElementTheme: ($) => {
        c.value = $, mt($);
      },
      setUniqueOpened: () => {
        y.value = !y.value;
      },
      setButton: () => {
        r.value = !r.value;
      },
      setFastEnter: () => {
        l.value = !l.value;
      },
      setWorkTab: ($) => {
        o.value = $;
      },
      setLanguage: () => {
        g.value = !g.value;
      },
      setNotification: () => {
        f.value = !f.value;
      },
      setMenuOpen: ($) => {
        e.value = $;
      },
      reload: () => {
        H.value = !H.value;
      }
    };
  },
  {
    persist: {
      key: "setting",
      storage: localStorage
    }
  }
);
function Ae() {
  const e = te();
  return {
    homePath: M(() => Se().homePath),
    refresh: () => {
      e.reload();
    },
    scrollTo: (l, o = !1) => {
      const g = document.getElementById("app-main");
      g && g.scrollTo({
        top: l,
        behavior: o ? "smooth" : "auto"
      });
    },
    scrollToTop: () => {
      const l = document.getElementById("app-main");
      l && (l.scrollTop = 0);
    },
    smoothScrollToTop: () => {
      const l = document.getElementById("app-main");
      l && l.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
}
const Re = Le(
  "worktabStore",
  () => {
    const e = T({}), t = T([]), n = T([]), s = M(() => t.value.length > 0), c = M(() => t.value.length > 1), r = M(
      () => e.value.path ? t.value.findIndex((a) => a.path === e.value.path) : -1
    ), l = (a) => t.value.findIndex((u) => u.path === a), o = (a) => t.value.find((u) => u.path === a), g = (a) => !a.fixedTab, f = (a) => {
      if (!a.path) {
        console.warn("尝试跳转到无效路径的标签页");
        return;
      }
      const u = rt();
      if (!u) {
        console.warn("[ao-admin-layout] 未注入 router，无法跳转");
        return;
      }
      try {
        u.push({
          path: a.path,
          query: a.query
        });
      } catch (_) {
        console.error("路由跳转失败:", _);
      }
    }, E = (a) => {
      if (!a.path) {
        console.warn("尝试打开无效的标签页");
        return;
      }
      a.name && G(a.name);
      let u = -1;
      if (a.name && (u = t.value.findIndex((_) => _.name === a.name)), u === -1 && (u = l(a.path)), u === -1) {
        const _ = a.fixedTab ? y() : t.value.length, R = { ...a };
        a.fixedTab ? t.value.splice(_, 0, R) : t.value.push(R), e.value = R;
      } else {
        const _ = t.value[u];
        t.value[u] = {
          ..._,
          path: a.path,
          params: a.params,
          query: a.query,
          title: a.title || _.title,
          fixedTab: a.fixedTab ?? _.fixedTab,
          keepAlive: a.keepAlive ?? _.keepAlive,
          name: a.name || _.name,
          icon: a.icon || _.icon
        }, e.value = t.value[u];
      }
    }, y = () => {
      let a = 0;
      for (let u = 0; u < t.value.length && t.value[u].fixedTab; u++)
        a = u + 1;
      return a;
    }, H = (a) => {
      const u = o(a), _ = l(a);
      if (_ === -1) {
        console.warn(`尝试关闭不存在的标签页: ${a}`);
        return;
      }
      if (u && !g(u)) {
        console.warn(`尝试关闭固定标签页: ${a}`);
        return;
      }
      t.value.splice(_, 1), u?.name && A(u);
      const { homePath: R } = Ae();
      if (!s.value) {
        a !== R.value && (e.value = {}, f({ path: R.value }));
        return;
      }
      if (e.value.path === a) {
        const d = _ >= t.value.length ? t.value.length - 1 : _;
        e.value = t.value[d], f(e.value);
      }
    }, L = (a) => {
      const u = l(a);
      if (u === -1) {
        console.warn(`尝试关闭左侧标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const R = t.value.slice(0, u).filter(g);
      if (R.length === 0) {
        console.warn("左侧没有可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter(
        (S, x) => x >= u || !g(S)
      );
      const d = o(a);
      d && (e.value = d);
    }, v = (a) => {
      const u = l(a);
      if (u === -1) {
        console.warn(`尝试关闭右侧标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const R = t.value.slice(u + 1).filter(g);
      if (R.length === 0) {
        console.warn("右侧没有可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter(
        (S, x) => x <= u || !g(S)
      );
      const d = o(a);
      d && (e.value = d);
    }, k = (a) => {
      const u = o(a);
      if (!u) {
        console.warn(`尝试关闭其他标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const R = t.value.filter((d) => d.path !== a).filter(g);
      if (R.length === 0) {
        console.warn("没有其他可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter((d) => d.path === a || !g(d)), e.value = u;
    }, I = () => {
      const { homePath: a } = Ae(), u = t.value.some((S) => S.fixedTab), _ = t.value.filter((S) => g(S) ? u || S.path !== a.value : !1);
      if (_.length === 0) {
        console.warn("没有可关闭的标签页");
        return;
      }
      if (V(_), t.value = t.value.filter((S) => !g(S) || !u && S.path === a.value), !s.value) {
        e.value = {}, f({ path: a.value });
        return;
      }
      const d = t.value.find((S) => S.path === a.value) || t.value[0];
      e.value = d, f(d);
    }, A = (a) => {
      !a.keepAlive || !a.name || n.value.includes(a.name) || n.value.push(a.name);
    }, G = (a) => {
      a && (n.value = n.value.filter((u) => u !== a));
    }, V = (a) => {
      a.forEach((u) => {
        u.name && A(u);
      });
    };
    return {
      // 状态
      current: e,
      opened: t,
      keepAliveExclude: n,
      // 计算属性
      hasOpenedTabs: s,
      hasMultipleTabs: c,
      currentTabIndex: r,
      // 方法
      openTab: E,
      removeTab: H,
      removeLeft: L,
      removeRight: v,
      removeOthers: k,
      removeAll: I,
      toggleFixedTab: (a) => {
        const u = l(a);
        if (u === -1) {
          console.warn(`尝试切换不存在标签页的固定状态: ${a}`);
          return;
        }
        const _ = { ...t.value[u] };
        if (_.fixedTab = !_.fixedTab, t.value.splice(u, 1), _.fixedTab) {
          const R = t.value.findIndex((S) => !S.fixedTab), d = R === -1 ? t.value.length : R;
          t.value.splice(d, 0, _);
        } else {
          const R = t.value.filter((d) => d.fixedTab).length;
          t.value.splice(R, 0, _);
        }
        e.value.path === a && (e.value = _);
      },
      validateWorktabs: (a) => {
        try {
          const u = (d) => {
            try {
              return d.name && a.getRoutes().some((x) => x.name === d.name) ? !0 : d.path ? a.resolve({
                path: d.path,
                query: d.query || void 0
              }).matched.length > 0 : !1;
            } catch {
              return !1;
            }
          }, _ = t.value.filter((d) => u(d));
          _.length !== t.value.length && (console.warn("发现无效的标签页路由，已自动清理"), t.value = _);
          const R = e.value && u(e.value);
          !R && _.length > 0 ? (console.warn("当前激活标签无效，已自动切换"), e.value = _[0]) : R || (e.value = {});
        } catch (u) {
          console.error("验证工作台标签页失败:", u);
        }
      },
      clearAll: () => {
        e.value = {}, t.value = [], n.value = [];
      },
      getStateSnapshot: () => ({
        current: { ...e.value },
        opened: [...t.value],
        keepAliveExclude: [...n.value]
      }),
      // 工具方法
      findTabIndex: l,
      getTab: o,
      isTabClosable: g,
      addKeepAliveExclude: A,
      removeKeepAliveExclude: G,
      markTabsToRemove: V,
      getTabTitle: (a) => o(a),
      updateTabTitle: (a, u) => {
        const _ = o(a);
        _ && (_.customTitle = u);
      },
      resetTabTitle: (a) => {
        const u = o(a);
        u && (u.customTitle = "");
      }
    };
  },
  {
    persist: {
      key: "worktab",
      storage: sessionStorage
    }
  }
), Xn = { class: "menu-right" }, zn = ["onClick"], jn = { class: "menu-label" }, Yn = { class: "submenu-title" }, Qn = { class: "menu-label" }, Jn = ["onClick"], Zn = { class: "menu-label" }, eo = /* @__PURE__ */ Q({
  name: "AoMenuRight",
  __name: "AoMenuRight",
  props: {
    menuItems: {},
    menuWidth: { default: 120 },
    submenuWidth: { default: 150 },
    itemHeight: { default: 32 },
    boundaryDistance: { default: 10 },
    menuPadding: { default: 5 },
    itemPaddingX: { default: 6 },
    borderRadius: { default: 6 },
    animationDuration: { default: 100 }
  },
  emits: ["select", "show", "hide"],
  setup(e, { expose: t, emit: n }) {
    vt((B) => ({
      v306417cf: s.menuWidth + "px",
      v2517ec74: s.borderRadius + "px",
      v29d0c040: s.animationDuration + "ms"
    }));
    const s = e, c = n, r = T(!1), l = T({ x: 0, y: 0 });
    let o = null, g = !1;
    const f = M(() => ({
      position: "fixed",
      left: `${l.value.x}px`,
      top: `${l.value.y}px`,
      zIndex: 2e3,
      width: `${s.menuWidth}px`
    })), E = M(() => ({
      padding: `${s.menuPadding}px`
    })), y = M(() => ({
      height: `${s.itemHeight}px`,
      padding: `0 ${s.itemPaddingX}px`,
      borderRadius: "4px"
    })), H = M(() => ({
      minWidth: `${s.submenuWidth}px`,
      padding: `${s.menuPadding}px 0`,
      borderRadius: `${s.borderRadius}px`
    })), L = () => {
      let B = s.menuPadding * 2;
      return s.menuItems.forEach(($) => {
        B += s.itemHeight, $.showLine && (B += 10);
      }), B;
    }, v = (B) => {
      const $ = window.innerWidth, a = window.innerHeight, u = L();
      let _ = B.clientX, R = B.clientY;
      return _ + s.menuWidth > $ - s.boundaryDistance && (_ = Math.max(s.boundaryDistance, _ - s.menuWidth)), R + u > a - s.boundaryDistance && (R = Math.max(s.boundaryDistance, a - u - s.boundaryDistance)), _ = Math.max(
        s.boundaryDistance,
        Math.min(_, $ - s.menuWidth - s.boundaryDistance)
      ), R = Math.max(
        s.boundaryDistance,
        Math.min(R, a - u - s.boundaryDistance)
      ), { x: _, y: R };
    }, k = () => {
      g || (document.addEventListener("click", A), document.addEventListener("contextmenu", G), document.addEventListener("keydown", V), g = !0);
    }, I = () => {
      g && (document.removeEventListener("click", A), document.removeEventListener("contextmenu", G), document.removeEventListener("keydown", V), g = !1);
    }, A = (B) => {
      const $ = B.target, a = document.querySelector(".context-menu");
      a && a.contains($) || Z();
    }, G = () => {
      Z();
    }, V = (B) => {
      B.key === "Escape" && Z();
    }, K = (B) => {
      B.preventDefault(), B.stopPropagation(), o && (window.clearTimeout(o), o = null), l.value = v(B), r.value = !0, c("show"), o = window.setTimeout(() => {
        r.value && k(), o = null;
      }, 50);
    }, Z = () => {
      r.value && (r.value = !1, c("hide"), o && (window.clearTimeout(o), o = null), I());
    }, ae = (B) => {
      B.disabled || (c("select", B), Z());
    }, q = (B) => {
      const $ = B;
      $.style.transformOrigin = "top left";
    }, le = () => {
      I(), o && (window.clearTimeout(o), o = null);
    };
    return ke(() => {
      I(), o && (window.clearTimeout(o), o = null);
    }), t({
      show: K,
      hide: Z,
      visible: M(() => r.value)
    }), (B, $) => (m(), p("div", Xn, [
      w(Je, {
        name: "context-menu",
        onBeforeEnter: q,
        onAfterLeave: le
      }, {
        default: N(() => [
          ue(h("div", {
            style: J(f.value),
            class: "context-menu ao-card-xs"
          }, [
            h("ul", {
              class: "menu-list",
              style: J(E.value)
            }, [
              (m(!0), p(Y, null, ee(e.menuItems, (a) => (m(), p(Y, {
                key: a.key
              }, [
                a.children ? (m(), p("li", {
                  key: 1,
                  class: "menu-item submenu",
                  style: J(y.value)
                }, [
                  h("div", Yn, [
                    a.icon ? (m(), U(i(z), {
                      key: 0,
                      class: "menu-item-icon",
                      icon: a.icon
                    }, null, 8, ["icon"])) : X("", !0),
                    h("span", Qn, O(a.label), 1),
                    w(i(z), {
                      icon: "ri:arrow-right-s-line",
                      class: "submenu-arrow"
                    })
                  ]),
                  h("ul", {
                    class: "submenu-list ao-card-xs",
                    style: J(H.value)
                  }, [
                    (m(!0), p(Y, null, ee(a.children, (u) => (m(), p("li", {
                      key: u.key,
                      class: ne(["menu-item menu-item-child", { "is-disabled": u.disabled, "has-line": u.showLine }]),
                      style: J(y.value),
                      onClick: (_) => ae(u)
                    }, [
                      u.icon ? (m(), U(i(z), {
                        key: 0,
                        class: "menu-item-icon-child",
                        icon: u.icon
                      }, null, 8, ["icon"])) : X("", !0),
                      h("span", Zn, O(u.label), 1)
                    ], 14, Jn))), 128))
                  ], 4)
                ], 4)) : (m(), p("li", {
                  key: 0,
                  class: ne(["menu-item", { "is-disabled": a.disabled, "has-line": a.showLine }]),
                  style: J(y.value),
                  onClick: (u) => ae(a)
                }, [
                  a.icon ? (m(), U(i(z), {
                    key: 0,
                    class: "menu-item-icon",
                    icon: a.icon
                  }, null, 8, ["icon"])) : X("", !0),
                  h("span", jn, O(a.label), 1)
                ], 14, zn))
              ], 64))), 128))
            ], 4)
          ], 4), [
            [de, r.value]
          ])
        ]),
        _: 1
      })
    ]));
  }
}), to = /* @__PURE__ */ se(eo, [["__scopeId", "data-v-67a21037"]]), no = {
  key: 0,
  class: "work-tab"
}, oo = ["id", "onClick", "onContextmenu"], so = ["onClick"], ao = /* @__PURE__ */ Q({
  name: "AoWorkTab",
  __name: "AoWorkTab",
  setup(e) {
    const { t } = Ee(), n = Re(), s = Fe(), c = $e(), { currentRoute: r } = c, l = te(), { showWorkTab: o } = oe(l), g = T(null), f = T(null), E = T(), y = T({
      translateX: 0,
      transition: ""
    }), H = T({
      startX: 0,
      currentX: 0
    }), L = T(""), v = M(() => n.opened), k = M(() => r.value.path), I = M(() => v.value.findIndex((d) => d.path === k.value)), A = () => {
      const d = () => {
        const C = v.value.findIndex((b) => b.path === L.value), D = v.value[C];
        return {
          clickedIndex: C,
          currentTab: D,
          isLastTab: C === v.value.length - 1,
          isOneTab: v.value.length === 1,
          isCurrentTab: L.value === k.value
        };
      }, S = (C) => {
        const D = v.value.slice(0, C), b = v.value.slice(C + 1), F = v.value.filter((P, W) => W !== C);
        return {
          areAllLeftTabsFixed: D.length > 0 && D.every((P) => P.fixedTab),
          areAllRightTabsFixed: b.length > 0 && b.every((P) => P.fixedTab),
          areAllOtherTabsFixed: F.length > 0 && F.every((P) => P.fixedTab),
          areAllTabsFixed: v.value.every((P) => P.fixedTab)
        };
      };
      return { menuItems: M(() => {
        const { clickedIndex: C, currentTab: D, isLastTab: b, isOneTab: F, isCurrentTab: P } = d(), W = S(C);
        return [
          {
            key: "refresh",
            label: t("worktab.btn.refresh"),
            icon: "ri:refresh-line",
            disabled: !P
          },
          {
            key: "fixed",
            label: D?.fixedTab ? t("worktab.btn.unfixed") : t("worktab.btn.fixed"),
            icon: "ri:pushpin-2-line",
            disabled: !1,
            showLine: !0
          },
          {
            key: "left",
            label: t("worktab.btn.closeLeft"),
            icon: "ri:arrow-left-s-line",
            disabled: C === 0 || W.areAllLeftTabsFixed
          },
          {
            key: "right",
            label: t("worktab.btn.closeRight"),
            icon: "ri:arrow-right-s-line",
            disabled: b || W.areAllRightTabsFixed
          },
          {
            key: "other",
            label: t("worktab.btn.closeOther"),
            icon: "ri:close-fill",
            disabled: F || W.areAllOtherTabsFixed
          },
          {
            key: "all",
            label: t("worktab.btn.closeAll"),
            icon: "ri:close-circle-line",
            disabled: F || W.areAllTabsFixed
          }
        ];
      }) };
    }, G = () => {
      const d = () => {
        y.value.transition = "transform 0.5s cubic-bezier(0.15, 0, 0.15, 1)", setTimeout(() => {
          y.value.transition = "";
        }, 250);
      }, S = () => document.getElementById(`scroll-li-${I.value}`), x = () => {
        if (!g.value || !f.value) return;
        const b = g.value.offsetWidth, F = f.value.offsetWidth, P = S();
        if (!P) return;
        const { offsetLeft: W, clientWidth: ce } = P, re = W + ce, ge = b - re;
        return {
          scrollWidth: b,
          ulWidth: F,
          offsetLeft: W,
          clientWidth: ce,
          curTabRight: re,
          targetLeft: ge
        };
      };
      return {
        setTransition: d,
        autoPositionTab: () => {
          const b = x();
          if (!b) return;
          const { scrollWidth: F, ulWidth: P, offsetLeft: W, curTabRight: ce, targetLeft: re } = b;
          W > Math.abs(y.value.translateX) && ce <= F || y.value.translateX < re && re < 0 || requestAnimationFrame(() => {
            ce > F ? y.value.translateX = Math.max(re - 6, F - P) : W < Math.abs(y.value.translateX) && (y.value.translateX = -W);
          });
        },
        adjustPositionAfterClose: () => {
          const b = x();
          if (!b) return;
          const { scrollWidth: F, ulWidth: P, offsetLeft: W, clientWidth: ce } = b, re = W + ce;
          requestAnimationFrame(() => {
            y.value.translateX = re > F ? F - P : 0;
          });
        }
      };
    }, V = () => {
      const { setTransition: d, adjustPositionAfterClose: S } = G(), x = (W) => {
        if (!g.value || !f.value || (W.preventDefault(), f.value.offsetWidth <= g.value.offsetWidth)) return;
        const ce = 0, re = g.value.offsetWidth - f.value.offsetWidth, ge = Math.abs(W.deltaX) > Math.abs(W.deltaY) ? W.deltaX : W.deltaY;
        y.value.translateX = Math.min(
          Math.max(y.value.translateX - ge, re),
          ce
        );
      }, C = (W) => {
        H.value.startX = W.touches[0].clientX;
      }, D = (W) => {
        if (!g.value || !f.value) return;
        H.value.currentX = W.touches[0].clientX;
        const ce = H.value.currentX - H.value.startX, re = g.value.offsetWidth - f.value.offsetWidth;
        y.value.translateX = Math.min(
          Math.max(y.value.translateX + ce, re),
          0
        ), H.value.startX = H.value.currentX;
      }, b = () => {
        d();
      };
      return {
        setupEventListeners: () => {
          f.value && (f.value.addEventListener("wheel", x, { passive: !1 }), f.value.addEventListener("touchstart", C, { passive: !0 }), f.value.addEventListener("touchmove", D, { passive: !0 }), f.value.addEventListener("touchend", b, { passive: !0 }));
        },
        cleanupEventListeners: () => {
          f.value && (f.value.removeEventListener("wheel", x), f.value.removeEventListener("touchstart", C), f.value.removeEventListener("touchmove", D), f.value.removeEventListener("touchend", b));
        },
        adjustPositionAfterClose: S
      };
    }, K = (d) => {
      const S = (b) => {
        c.push({
          path: b.path,
          query: b.query
        });
      }, x = (b, F) => {
        const P = typeof F == "string" ? F : s.path;
        ({
          current: () => n.removeTab(P),
          left: () => n.removeLeft(P),
          right: () => n.removeRight(P),
          other: () => n.removeOthers(P),
          all: () => n.removeAll()
        })[b]?.(), setTimeout(() => {
          d();
        }, 100);
      };
      return {
        clickTab: S,
        closeWorktab: x,
        showMenu: (b, F) => {
          L.value = F || "", E.value?.show(b), b.preventDefault(), b.stopPropagation();
        },
        handleSelect: (b) => {
          const { key: F } = b;
          if (F === "refresh") {
            Ae().refresh();
            return;
          }
          if (F === "fixed") {
            Re().toggleFixedTab(L.value);
            return;
          }
          const P = v.value.findIndex((ge) => ge.path === k.value), W = v.value.findIndex((ge) => ge.path === L.value);
          ({
            left: P < W,
            right: P > W,
            other: !0
          })[F] && c.push(L.value), x(F, L.value);
        }
      };
    }, { menuItems: Z } = A(), { setTransition: ae, autoPositionTab: q } = G(), { setupEventListeners: le, cleanupEventListeners: B, adjustPositionAfterClose: $ } = V(), { clickTab: a, closeWorktab: u, showMenu: _, handleSelect: R } = K($);
    return Te(() => {
      le(), q();
    }), ke(() => {
      B();
    }), he(
      () => r.value,
      () => {
        ae(), q();
      }
    ), he(
      () => ct().value,
      () => {
        y.value.translateX = 0, ye(() => {
          q();
        });
      }
    ), (d, S) => i(o) ? (m(), p("div", no, [
      h("div", {
        class: "work-tab__scroll",
        ref_key: "scrollRef",
        ref: g
      }, [
        h("ul", {
          class: "work-tab__list",
          ref_key: "tabsRef",
          ref: f,
          style: J({
            transform: `translateX(${y.value.translateX}px)`,
            transition: `${y.value.transition}`
          })
        }, [
          (m(!0), p(Y, null, ee(v.value, (x, C) => (m(), p("li", {
            class: ne(["work-tab__item ao-card-xs", [
              x.path === k.value ? "work-tab__item--active activ-tab" : "work-tab__item--inactive"
            ]]),
            style: J({ padding: x.fixedTab ? "0 10px" : "0 8px 0 12px" }),
            key: x.path,
            ref_for: !0,
            ref: x.path,
            id: `scroll-li-${C}`,
            onClick: (D) => i(a)(x),
            onContextmenu: Me((D) => i(_)(D, x.path), ["prevent"])
          }, [
            we(O(x.customTitle || i(fe)(x.title)) + " ", 1),
            v.value.length > 1 && !x.fixedTab ? (m(), p("span", {
              key: 0,
              class: "work-tab__close",
              onClick: Me((D) => i(u)("current", x.path), ["stop"])
            }, [
              w(i(z), {
                icon: "ri:close-large-fill",
                class: "work-tab__close-icon"
              })
            ], 8, so)) : X("", !0)
          ], 46, oo))), 128))
        ], 4)
      ], 512),
      w(to, {
        ref_key: "menuRef",
        ref: E,
        "menu-items": i(Z),
        "menu-width": 140,
        "border-radius": 10,
        onSelect: i(R)
      }, null, 8, ["menu-items", "onSelect"])
    ])) : X("", !0);
  }
}), lo = /* @__PURE__ */ se(ao, [["__scopeId", "data-v-0b89867f"]]), We = Le("appStore", () => {
  const e = T(!1), t = T(!1);
  return {
    showSettingsPanel: e,
    showGlobalSearch: t,
    openSettingsPanel: () => {
      e.value = !0;
    },
    closeSettingsPanel: () => {
      e.value = !1;
    },
    openGlobalSearch: () => {
      t.value = !0;
    },
    closeGlobalSearch: () => {
      t.value = !1;
    }
  };
}), io = [
  { value: He.ZH, label: "简体中文" },
  { value: He.EN, label: "English" }
];
function Ie() {
  const e = te(), t = () => {
    const o = document.createElement("style");
    o.setAttribute("id", "disable-transitions"), o.textContent = "* { transition: none !important; }", document.head.appendChild(o);
  }, n = () => {
    const o = document.getElementById("disable-transitions");
    o && o.remove();
  }, s = (o, g) => {
    t();
    const f = document.getElementsByTagName("html")[0], E = o === j.DARK;
    g || (g = o);
    const y = me.systemThemeStyles[o];
    y && f.setAttribute("class", y.className);
    const H = e.systemThemeColor;
    for (let L = 1; L <= 9; L++)
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${L}`,
        E ? `${Ve(H, L / 10)}` : `${ht(H, L / 10)}`
      );
    e.setGlopTheme(o, g), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        n();
      });
    });
  }, c = lt(), r = () => {
    const o = c.value ? j.DARK : j.LIGHT;
    s(o, j.AUTO);
  };
  return {
    setSystemTheme: s,
    setSystemAutoTheme: r,
    switchThemeStyles: (o) => {
      o === j.AUTO ? r() : s(o);
    },
    prefersDark: c
  };
}
function ua() {
  const e = te(), t = lt(), n = () => {
    const s = document.getElementsByTagName("html")[0];
    let c = e.systemThemeType;
    e.systemThemeMode === j.AUTO && (c = t.value ? j.DARK : j.LIGHT, e.systemThemeType = c);
    const r = me.systemThemeStyles[c];
    r && s.setAttribute("class", r.className), mt(e.systemThemeColor);
  };
  n(), e.systemThemeMode === j.AUTO && he(
    t,
    () => {
      e.systemThemeMode === j.AUTO && n();
    },
    { immediate: !1 }
  );
}
const { LIGHT: ze, DARK: ro } = j, co = (e) => {
  const t = e.clientX, n = e.clientY, s = Math.hypot(Math.max(t, innerWidth - t), Math.max(n, innerHeight - n));
  document.documentElement.style.setProperty("--x", t + "px"), document.documentElement.style.setProperty("--y", n + "px"), document.documentElement.style.setProperty("--r", s + "px"), document.startViewTransition ? document.startViewTransition(() => je()) : je();
}, je = () => {
  Ie().switchThemeStyles(te().systemThemeType === ze ? ro : ze), Ae().refresh();
};
function uo() {
  const e = te(), t = M(() => Oe), { showMenuButton: n, showFastEnter: s, showLanguage: c, showNotification: r } = oe(e), l = (q) => t.value[q]?.enabled ?? !1, o = (q) => t.value[q], g = M(() => l("menuButton") && n.value), f = M(() => l("fastEnter") && s.value), E = M(() => l("globalSearch")), y = M(() => l("fullscreen")), H = M(() => l("notification") && r.value), L = M(() => l("language") && c.value), v = M(() => l("settings")), k = M(() => l("themeToggle")), I = M(() => o("fastEnter")?.minWidth || 1200), A = (q) => l(q), G = (q) => o(q), V = () => Object.keys(t.value).filter(
    (q) => t.value[q]?.enabled
  ), K = () => Object.keys(t.value).filter(
    (q) => !t.value[q]?.enabled
  );
  return {
    // 配置
    headerBarConfig: t,
    // 显示状态计算属性
    shouldShowMenuButton: g,
    // 是否显示菜单按钮
    shouldShowFastEnter: f,
    // 是否显示快速入口
    shouldShowGlobalSearch: E,
    // 是否显示全局搜索
    shouldShowFullscreen: y,
    // 是否显示全屏按钮
    shouldShowNotification: H,
    // 是否显示通知中心
    shouldShowLanguage: L,
    // 是否显示语言切换
    shouldShowSettings: v,
    // 是否显示设置面板
    shouldShowThemeToggle: k,
    // 是否显示主题切换
    // 配置相关
    fastEnterMinWidth: I,
    // 快速入口最小宽度
    // 方法
    isFeatureEnabled: l,
    // 检查功能是否启用
    isFeatureActive: A,
    // 检查功能是否启用（别名）
    getFeatureConfig: o,
    // 获取功能配置
    getFeatureInfo: G,
    // 获取功能配置（别名）
    getEnabledFeatures: V,
    // 获取所有启用的功能
    getDisabledFeatures: K,
    // 获取所有禁用的功能
    getActiveFeatures: () => V(),
    // 获取所有启用的功能（别名）
    getInactiveFeatures: () => K()
    // 获取所有禁用的功能（别名）
  };
}
const ho = { class: "header-bar" }, mo = { class: "header-bar__inner" }, fo = { class: "header-bar__left" }, go = { class: "header-bar__right" }, vo = { class: "search-box__left" }, po = { class: "search-box__text" }, yo = { class: "search-box__shortcut" }, bo = { class: "menu-txt" }, _o = {
  key: 6,
  class: "header-bar__user-avatar"
}, xo = /* @__PURE__ */ Q({
  name: "AoHeaderBar",
  __name: "index",
  setup(e) {
    const t = ct(), n = tn(), s = navigator.userAgent.includes("Windows"), c = $e(), { locale: r } = Ee(), { width: l } = it(), o = te(), g = We(), {
      shouldShowMenuButton: f,
      shouldShowFastEnter: E,
      shouldShowGlobalSearch: y,
      shouldShowFullscreen: H,
      shouldShowNotification: L,
      shouldShowLanguage: v,
      shouldShowSettings: k,
      shouldShowThemeToggle: I,
      fastEnterMinWidth: A
    } = uo(), { menuOpen: G, isDark: V } = oe(o), K = T(!1), { isFullscreen: Z, toggle: ae } = Ht();
    Te(() => {
      u(), document.addEventListener("click", S);
    }), ke(() => {
      document.removeEventListener("click", S);
    });
    const q = () => {
      ae();
    }, le = () => {
      o.setMenuOpen(!G.value);
    }, { homePath: B, refresh: $ } = Ae(), a = () => {
      c.push(B.value);
    }, u = () => {
      r.value = t.value;
    }, _ = (C) => {
      r.value !== C && (r.value = C, t.value = C, n?.(C), setTimeout($, 50));
    }, R = () => {
      g.openGlobalSearch();
    }, d = () => {
      g.openSettingsPanel();
    }, S = (C) => {
      if (!K.value) return;
      const D = C.target, b = D.closest(".notice-button"), F = D.closest(".ao-notification-panel");
      !b && !F && (K.value = !1);
    }, x = () => {
      K.value = !K.value;
    };
    return (C, D) => (m(), p("div", ho, [
      h("div", mo, [
        h("div", fo, [
          w(i(wt), {
            class: "header-bar__logo-hidden",
            onClick: a
          }),
          i(f) ? (m(), U(i(ve), {
            key: 0,
            icon: "ri:menu-2-fill",
            class: "header-bar__menu-btn",
            onClick: le
          })) : X("", !0),
          i(E) && i(l) >= i(A) ? (m(), U(rn, { key: 1 }, {
            default: N(() => [
              w(i(ve), {
                icon: "ri:function-line",
                class: "header-bar__fast-enter-btn"
              })
            ]),
            _: 1
          })) : X("", !0),
          w(lo)
        ]),
        h("div", go, [
          i(y) ? (m(), p("div", {
            key: 0,
            class: "search-box",
            onClick: R
          }, [
            h("div", vo, [
              w(i(z), {
                icon: "ri:search-line",
                class: "search-box__icon"
              }),
              h("span", po, O(C.$t("topBar.search.title")), 1)
            ]),
            h("div", yo, [
              i(s) ? (m(), U(i(z), {
                key: 0,
                icon: "vaadin:ctrl-a",
                class: "search-box__shortcut-icon"
              })) : (m(), U(i(z), {
                key: 1,
                icon: "ri:command-fill",
                class: "search-box__shortcut-icon-mac"
              })),
              D[1] || (D[1] = h("span", { class: "search-box__shortcut-key" }, "k", -1))
            ])
          ])) : X("", !0),
          i(H) ? (m(), U(i(ve), {
            key: 1,
            icon: i(Z) ? "ri:fullscreen-exit-line" : "ri:fullscreen-fill",
            class: ne([
              i(Z) ? "exit-full-screen-btn" : "full-screen-btn",
              "header-bar__fullscreen-btn"
            ]),
            onClick: q
          }, null, 8, ["icon", "class"])) : X("", !0),
          i(v) ? (m(), U(i(tt), {
            key: 2,
            onCommand: _,
            "popper-class": "langDropDownStyle"
          }, {
            dropdown: N(() => [
              w(i(nt), null, {
                default: N(() => [
                  (m(!0), p(Y, null, ee(i(io), (b) => (m(), p("div", {
                    key: b.value,
                    class: "lang-btn-item"
                  }, [
                    w(i(ot), {
                      command: b.value,
                      class: ne({ "is-selected": i(r) === b.value })
                    }, {
                      default: N(() => [
                        h("span", bo, O(b.label), 1),
                        i(r) === b.value ? (m(), U(i(z), {
                          key: 0,
                          icon: "ri:check-fill"
                        })) : X("", !0)
                      ]),
                      _: 2
                    }, 1032, ["command", "class"])
                  ]))), 128))
                ]),
                _: 1
              })
            ]),
            default: N(() => [
              w(i(ve), {
                icon: "ri:translate-2",
                class: "language-btn header-bar__language-btn"
              })
            ]),
            _: 1
          })) : X("", !0),
          i(L) ? (m(), U(i(ve), {
            key: 3,
            icon: "ri:notification-2-line",
            class: "notice-button header-bar__notice-btn",
            onClick: x
          }, {
            default: N(() => [...D[2] || (D[2] = [
              h("div", { class: "notice-dot" }, null, -1)
            ])]),
            _: 1
          })) : X("", !0),
          i(k) ? (m(), U(i(ve), {
            key: 4,
            icon: "ri:settings-line",
            class: "setting-btn",
            onClick: d
          })) : X("", !0),
          i(I) ? (m(), U(i(ve), {
            key: 5,
            onClick: i(co),
            icon: i(V) ? "ri:sun-fill" : "ri:moon-line"
          }, null, 8, ["onClick", "icon"])) : X("", !0),
          C.$slots["user-avatar"] ? (m(), p("div", _o, [
            xe(C.$slots, "user-avatar", {}, void 0, !0)
          ])) : X("", !0)
        ])
      ]),
      w(Hn, {
        value: K.value,
        "onUpdate:value": D[0] || (D[0] = (b) => K.value = b),
        ref: "notice"
      }, null, 8, ["value"])
    ]));
  }
}), Ao = /* @__PURE__ */ se(xo, [["__scopeId", "data-v-13f07a2b"]]), To = "--ao-header-height", wo = "--ao-content-header-height";
function gt(e, t) {
  const { height: n } = qe(
    e,
    { width: 0, height: 0 },
    { box: "border-box" }
  ), { height: s } = qe(
    t,
    { width: 0, height: 0 },
    { box: "border-box" }
  );
  return pt(() => {
    const c = n.value, r = s.value;
    typeof document > "u" || requestAnimationFrame(() => {
      const l = document.documentElement.style;
      l.setProperty(To, `${c}px`), l.setProperty(wo, `${r}px`);
    });
  }), { headerHeight: n, contentHeaderHeight: s };
}
function da() {
  const e = T(), t = T(), { headerHeight: n, contentHeaderHeight: s } = gt(e, t);
  return {
    /** 头部元素引用 */
    headerRef: e,
    /** 内容头部元素引用 */
    contentHeaderRef: t,
    /** 头部高度（响应式） */
    headerHeight: n,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: s
  };
}
function So(e = ["app-header", "app-content-header"]) {
  const t = T(), n = T(), { headerHeight: s, contentHeaderHeight: c } = gt(t, n);
  return Te(() => {
    typeof document > "u" || requestAnimationFrame(() => {
      const r = document.getElementById(e[0]), l = document.getElementById(e[1]);
      r && (t.value = r), l && (n.value = l);
    });
  }), {
    /** 头部元素引用 */
    headerRef: t,
    /** 内容头部元素引用 */
    contentHeaderRef: n,
    /** 头部高度（响应式） */
    headerHeight: s,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: c
  };
}
const ko = { id: "app-content-header" }, Co = {
  key: 0,
  class: "route-info-debug"
}, Eo = { class: "transition-mask" }, Mo = /* @__PURE__ */ Q({
  name: "AoPageContent",
  __name: "AoPageContent",
  setup(e) {
    const t = Fe();
    So();
    const { refresh: n } = oe(te()), { keepAliveExclude: s } = oe(Re()), c = M(() => {
      const v = new Set(s.value);
      return !t.meta.keepAlive && typeof t.name == "string" && v.add(t.name), [...v];
    }), r = yt(!0), l = void 0, o = T(!1), g = T(!0), f = M(() => t.matched.some((v) => v.meta?.isFullPage)), E = T(f.value), y = M(() => g.value || E.value && !f.value ? "" : "slide-left");
    he(f, (v, k) => {
      v !== k && (o.value = !0, setTimeout(() => {
        o.value = !1;
      }, 50)), ye(() => {
        E.value = v;
      });
    });
    const H = {
      minHeight: "var(--ao-full-height)"
    };
    return he(n, () => {
      r.value = !1, ye(() => {
        r.value = !0;
      });
    }, { flush: "post" }), Te(() => {
      ye(() => {
        g.value = !1;
      });
    }), (v, k) => {
      const I = Ze("RouterView");
      return m(), p("div", {
        class: ne(["layout-content", { "layout-content--full-page": f.value }])
      }, [
        h("div", ko, [
          i(l) === "true" ? (m(), p("div", Co, " router meta：" + O(i(t).meta), 1)) : X("", !0)
        ]),
        r.value ? (m(), U(I, {
          key: 0,
          style: H
        }, {
          default: N(({ Component: A, route: G }) => [
            w(Je, {
              name: o.value ? "" : y.value,
              mode: "out-in",
              appear: ""
            }, {
              default: N(() => [
                (m(), U(bt, {
                  max: 10,
                  exclude: c.value
                }, [
                  (m(), U(Qe(A), {
                    class: "ao-page-view",
                    key: G.path
                  }))
                ], 1032, ["exclude"]))
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 1
        })) : X("", !0),
        (m(), U(_t, { to: "body" }, [
          ue(h("div", Eo, null, 512), [
            [de, o.value]
          ])
        ]))
      ], 2);
    };
  }
}), Bo = /* @__PURE__ */ se(Mo, [["__scopeId", "data-v-53dbfe85"]]), $o = { class: "menu-icon" }, Lo = { class: "menu-name" }, Io = {
  key: 0,
  class: "ao-badge",
  style: { right: "10px" }
}, Do = { class: "menu-icon" }, Ho = {
  class: "ao-badge",
  style: { right: "5px" }
}, Ro = { class: "menu-name" }, Fo = {
  key: 0,
  class: "ao-badge"
}, Oo = {
  key: 1,
  class: "ao-text-badge"
}, Po = /* @__PURE__ */ Q({
  __name: "SidebarSubmenu",
  props: {
    title: { default: "" },
    list: { default: () => [] },
    theme: { default: () => ({}) },
    isMobile: { type: Boolean, default: !1 },
    level: { default: 0 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, s = t, c = te(), { menuOpen: r } = oe(c), l = M(() => E(n.list)), o = (v) => {
      g(), ft(v);
    }, g = () => {
      s("close");
    }, f = (v) => !!(!v.meta.isHide && (v.path && v.path.trim() || v.meta.link || v.meta.isIframe === !0) && (v.component || v.meta.link || v.meta.isIframe === !0)), E = (v) => v.filter((k) => k.meta.isHide ? !1 : k.children && k.children.length > 0 && E(k.children).length > 0 || f(k)).map((k) => ({
      ...k,
      children: k.children ? E(k.children) : void 0
    })), y = (v) => !v.children || v.children.length === 0 ? !1 : E(v.children).length > 0, H = (v) => !!(v.meta.link && !v.meta.isIframe), L = (v, k) => `${v.path || v.meta.title || "menu"}-${n.level}-${k}`;
    return (v, k) => {
      const I = Ze("SidebarSubmenu", !0);
      return m(!0), p(Y, null, ee(l.value, (A, G) => (m(), p(Y, {
        key: L(A, G)
      }, [
        y(A) ? (m(), U(i(St), {
          key: 0,
          index: A.path || A.meta.title,
          level: e.level
        }, {
          title: N(() => [
            h("div", $o, [
              w(i(z), {
                icon: A.meta.icon,
                color: e.theme?.iconColor,
                style: J({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            h("span", Lo, O(i(fe)(A.meta.title)), 1),
            A.meta.showBadge ? (m(), p("div", Io)) : X("", !0)
          ]),
          default: N(() => [
            w(I, {
              list: A.children,
              "is-mobile": e.isMobile,
              level: e.level + 1,
              theme: e.theme,
              onClose: g
            }, null, 8, ["list", "is-mobile", "level", "theme"])
          ]),
          _: 2
        }, 1032, ["index", "level"])) : (m(), U(i(kt), {
          key: 1,
          index: H(A) ? A.meta.title : A.path || A.meta.title,
          "level-item": e.level + 1,
          onClick: (V) => o(A)
        }, {
          title: N(() => [
            h("span", Ro, O(i(fe)(A.meta.title)), 1),
            A.meta.showBadge ? (m(), p("div", Fo)) : X("", !0),
            A.meta.showTextBadge && (e.level > 0 || i(r)) ? (m(), p("div", Oo, O(A.meta.showTextBadge), 1)) : X("", !0)
          ]),
          default: N(() => [
            h("div", Do, [
              w(i(z), {
                icon: A.meta.icon,
                color: e.theme?.iconColor,
                style: J({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            ue(h("div", Ho, null, 512), [
              [de, A.meta.showBadge && e.level === 0 && !i(r)]
            ])
          ]),
          _: 2
        }, 1032, ["index", "level-item", "onClick"]))
      ], 64))), 128);
    };
  }
}), No = /* @__PURE__ */ se(Po, [["__scopeId", "data-v-b907ca25"]]), Vo = {
  key: 0,
  class: "layout-sidebar"
}, Wo = { class: "header__inner" }, Ye = 800, Go = 350, Ko = /* @__PURE__ */ Q({
  name: "AoSidebarMenu",
  __name: "index",
  setup(e) {
    const t = Fe(), n = $e(), s = te(), { uniqueOpened: c, menuOpen: r, getMenuTheme: l } = oe(s), o = T([]), g = T(!1), f = T(!1), { width: E } = it(), y = M(() => E.value < Ye), H = M(() => String(t.meta.activePath || t.path)), L = M(() => Se().menuList), v = M(() => ({
      transform: "translateY(0)",
      height: "calc(100% - 60px)",
      transition: "transform 0.3s ease"
    })), { start: k } = Rt(
      () => {
        f.value = !1;
      },
      Go,
      { immediate: !1 }
    ), { homePath: I } = Ae(), A = () => {
      n.push(I.value);
    }, G = () => {
      s.setMenuOpen(!r.value), y.value && (r.value ? k() : f.value = !0);
    }, V = () => {
      y.value && (s.setMenuOpen(!1), k());
    };
    return he(E, (K) => {
      K < Ye ? (s.setMenuOpen(!1), r.value || (f.value = !1)) : f.value = !1;
    }), he(r, (K) => {
      y.value ? K ? f.value = !0 : k() : f.value = !1;
    }), (K, Z) => L.value.length > 0 ? (m(), p("div", Vo, [
      h("div", {
        class: ne(["menu-left", `menu-left-${i(l).theme} menu-left-${i(r) ? "open" : "close"}`]),
        style: J({
          background: i(l).background
        })
      }, [
        h("div", {
          class: "header",
          onClick: A,
          style: J({
            background: i(l).background
          })
        }, [
          h("div", Wo, [
            xe(K.$slots, "sidebar-header", {
              menuOpen: i(r),
              theme: i(l)
            }, void 0, !0)
          ])
        ], 4),
        w(i(at), {
          style: J(v.value)
        }, {
          default: N(() => [
            w(i(Ct), {
              class: ne("el-menu-" + i(l).theme),
              collapse: !i(r),
              "default-active": H.value,
              "text-color": i(l).textColor,
              "unique-opened": i(c),
              "background-color": i(l).background,
              "default-openeds": o.value,
              "popper-class": `menu-left-popper menu-left-${i(l).theme}-popper`,
              "show-timeout": 50,
              "hide-timeout": 50
            }, {
              default: N(() => [
                w(No, {
                  list: L.value,
                  isMobile: g.value,
                  theme: i(l),
                  onClose: V
                }, null, 8, ["list", "isMobile", "theme"])
              ]),
              _: 1
            }, 8, ["class", "collapse", "default-active", "text-color", "unique-opened", "background-color", "default-openeds", "popper-class"])
          ]),
          _: 1
        }, 8, ["style"]),
        h("div", {
          class: "menu-model",
          onClick: G,
          style: J({
            opacity: i(r) ? 1 : 0,
            transform: f.value ? "scale(1)" : "scale(0)"
          })
        }, null, 4)
      ], 6)
    ])) : X("", !0);
  }
}), Uo = /* @__PURE__ */ se(Ko, [["__scopeId", "data-v-4bc7d66a"]]), qo = { class: "app-layout" }, Xo = { id: "app-sidebar" }, zo = { id: "app-main" }, jo = { id: "app-header" }, Yo = { id: "app-content" }, Qo = { id: "app-global" }, Jo = /* @__PURE__ */ Q({
  name: "AppLayout",
  __name: "AppLayout",
  setup(e) {
    return (t, n) => (m(), p("div", qo, [
      h("aside", Xo, [
        w(Uo, null, {
          "sidebar-header": N((s) => [
            xe(t.$slots, "sidebar-header", xt(At(s)), void 0, !0)
          ]),
          _: 3
        })
      ]),
      h("main", zo, [
        h("div", jo, [
          w(Ao, null, Tt({ _: 2 }, [
            t.$slots["user-avatar"] ? {
              name: "user-avatar",
              fn: N(() => [
                xe(t.$slots, "user-avatar", {}, void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        h("div", Yo, [
          w(Bo)
        ])
      ]),
      h("div", Qo, [
        w(an)
      ])
    ]));
  }
}), ha = /* @__PURE__ */ se(Jo, [["__scopeId", "data-v-2c43792d"]]), ma = {
  install(e, t = {}) {
    console.info(`[ao-admin-layout] v${Qt}`), Zt(t), t.i18n && (t.i18n.global.mergeLocaleMessage("zh", Kt), t.i18n.global.mergeLocaleMessage("en", Yt));
  }
};
function Ge() {
  const e = te(), t = {
    // 设置body类名
    setBodyClass: (r, l) => {
      const o = document.getElementsByTagName("body")[0];
      l ? o.classList.add(r) : o.classList.remove(r);
    }
  }, n = (r, l) => () => {
    r(), l?.();
  }, s = {
    // 工作台标签页
    workTab: n(() => e.setWorkTab(!e.showWorkTab)),
    // 菜单手风琴
    uniqueOpened: n(() => e.setUniqueOpened()),
    // 显示菜单按钮
    menuButton: n(() => e.setButton()),
    // 显示快速入口
    fastEnter: n(() => e.setFastEnter()),
    // 显示语言切换
    language: n(() => e.setLanguage()),
    // 显示通知入口
    notification: n(() => e.setNotification())
  };
  return {
    domOperations: t,
    basicHandlers: s,
    colorHandlers: {
      // 选择主题色
      selectColor: (r) => {
        e.setElementTheme(r), e.reload();
      }
    },
    createToggleHandler: n
  };
}
function Zo() {
  const e = te(), t = We(), { systemThemeType: n, systemThemeMode: s } = oe(e), { showSettingsPanel: c } = oe(t), { setSystemTheme: r, setSystemAutoTheme: l } = Ie(), { domOperations: o } = Ge(), f = Ft({ tablet: 1e3 }).smaller("tablet"), E = M(() => e.systemThemeColor), y = () => {
    const I = () => {
      me.systemMainColor.includes(E.value) || (e.setElementTheme(me.systemMainColor[0]), e.reload());
    }, A = () => {
      s.value === j.AUTO ? l() : r(n.value);
    };
    return {
      initSystemColor: I,
      initSystemTheme: A,
      listenerSystemTheme: () => {
        const V = window.matchMedia("(prefers-color-scheme: dark)");
        return V.addEventListener("change", A), () => {
          V.removeEventListener("change", A);
        };
      }
    };
  }, H = () => ({ stopWatch: he(
    f,
    (A) => {
      A ? e.setMenuOpen(!1) : e.setMenuOpen(!0);
    },
    { immediate: !0 }
  ) });
  return {
    // 状态
    showDrawer: c,
    // 方法组合
    useThemeHandlers: y,
    useResponsiveLayout: H,
    useDrawerControl: () => {
      let I = null;
      return {
        handleOpen: () => {
          I && clearTimeout(I), I = setTimeout(() => {
            o.setBodyClass("theme-change", !0), I = null;
          }, 500);
        },
        handleClose: () => {
          I && (clearTimeout(I), I = null), o.setBodyClass("theme-change", !1);
        },
        closeDrawer: () => {
          c.value = !1;
        }
      };
    },
    usePropsWatcher: (I) => {
      he(
        () => I.open,
        (A) => {
          A !== void 0 && (c.value = A);
        }
      );
    },
    useSettingsInitializer: () => {
      const I = y(), { stopWatch: A } = H();
      let G = null;
      return {
        initializeSettings: () => {
          I.initSystemColor(), G = I.listenerSystemTheme(), I.initSystemTheme();
        },
        cleanupSettings: () => {
          A(), G?.();
        }
      };
    }
  };
}
const es = { class: "setting-drawer" }, ts = { class: "drawer-con" }, ns = /* @__PURE__ */ Q({
  __name: "SettingDrawer",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, c = M({
      get: () => n.modelValue,
      set: (g) => s("update:modelValue", g)
    }), r = () => {
      s("open");
    }, l = () => {
      s("close");
    }, o = () => {
      c.value = !1;
    };
    return (g, f) => (m(), p("div", es, [
      w(i(Et), {
        size: "300px",
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (E) => c.value = E),
        "lock-scroll": !0,
        "with-header": !1,
        "before-close": o,
        "destroy-on-close": !1,
        "modal-class": "setting-modal",
        onOpen: r,
        onClose: l
      }, {
        default: N(() => [
          h("div", ts, [
            xe(g.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ]));
  }
}), os = { class: "header-actions" }, ss = /* @__PURE__ */ Q({
  __name: "SettingHeader",
  emits: ["close"],
  setup(e) {
    return (t, n) => (m(), p("div", null, [
      h("div", os, [
        h("div", {
          onClick: n[0] || (n[0] = (s) => t.$emit("close")),
          class: "close-btn"
        }, [
          w(i(z), {
            icon: "ri:close-fill",
            class: "close-btn-icon"
          })
        ])
      ])
    ]));
  }
}), as = /* @__PURE__ */ se(ss, [["__scopeId", "data-v-513a0ce2"]]), ls = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    title: {},
    style: {}
  },
  setup(e) {
    return (t, n) => (m(), p("p", {
      class: "section-title",
      style: J(e.style)
    }, O(e.title), 5));
  }
}), De = /* @__PURE__ */ se(ls, [["__scopeId", "data-v-579c7578"]]);
function Ke() {
  const { t: e } = Ee(), t = {
    // 主题色彩选项
    mainColors: me.systemMainColor,
    // 主题风格选项
    themeList: me.settingThemeList
  }, n = M(() => [
    {
      key: "showWorkTab",
      label: e("setting.basics.list.multiTab"),
      type: "switch",
      handler: "workTab",
      headerBarKey: null
      // 不依赖headerBar配置
    },
    {
      key: "uniqueOpened",
      label: e("setting.basics.list.accordion"),
      type: "switch",
      handler: "uniqueOpened",
      headerBarKey: null
      // 不依赖headerBar配置
    },
    {
      key: "showMenuButton",
      label: e("setting.basics.list.collapseSidebar"),
      type: "switch",
      handler: "menuButton",
      headerBarKey: "menuButton"
    },
    {
      key: "showFastEnter",
      label: e("setting.basics.list.fastEnter"),
      type: "switch",
      handler: "fastEnter",
      headerBarKey: "fastEnter"
    },
    {
      key: "showLanguage",
      label: e("setting.basics.list.language"),
      type: "switch",
      handler: "language",
      headerBarKey: "language"
    },
    {
      key: "showNotification",
      label: e("setting.basics.list.notification"),
      type: "switch",
      handler: "notification",
      headerBarKey: "notification"
    }
  ].filter((c) => c.headerBarKey === null ? !0 : Oe[c.headerBarKey]?.enabled !== !1).map(({ headerBarKey: c, ...r }) => r));
  return {
    // 选项配置
    configOptions: t,
    // 设置项配置
    basicSettingsConfig: n
  };
}
const is = { class: "setting-box-wrap" }, rs = ["onClick"], cs = ["src"], us = { class: "name" }, ds = /* @__PURE__ */ Q({
  __name: "ThemeSettings",
  setup(e) {
    const t = te(), { systemThemeMode: n } = oe(t), { configOptions: s } = Ke(), { switchThemeStyles: c } = Ie();
    return (r, l) => (m(), p(Y, null, [
      w(De, {
        title: r.$t("setting.theme.title")
      }, null, 8, ["title"]),
      h("div", is, [
        (m(!0), p(Y, null, ee(i(s).themeList, (o, g) => (m(), p("div", {
          class: "setting-item",
          key: o.theme,
          onClick: (f) => i(c)(o.theme)
        }, [
          h("div", {
            class: ne(["box", { "is-active": o.theme === i(n) }])
          }, [
            h("img", {
              src: o.img
            }, null, 8, cs)
          ], 2),
          h("p", us, O(r.$t(`setting.theme.list[${g}]`)), 1)
        ], 8, rs))), 128))
      ])
    ], 64));
  }
}), hs = { class: "setting-box-wrap" }, ms = ["onClick"], fs = ["src"], gs = /* @__PURE__ */ Q({
  __name: "MenuStyleSettings",
  setup(e) {
    const t = me.themeList, n = te(), { menuThemeType: s, isDark: c } = oe(n), r = M(() => c.value), l = (o) => {
      c.value || n.switchMenuStyles(o);
    };
    return (o, g) => (m(), p(Y, null, [
      w(De, {
        title: o.$t("setting.menu.title")
      }, null, 8, ["title"]),
      h("div", hs, [
        (m(!0), p(Y, null, ee(i(t), (f) => (m(), p("div", {
          class: "setting-item",
          key: f.theme,
          onClick: (E) => l(f.theme)
        }, [
          h("div", {
            class: ne(["box", { "is-active": f.theme === i(s) }]),
            style: J({
              cursor: r.value ? "no-drop" : "pointer"
            })
          }, [
            h("img", {
              src: f.img
            }, null, 8, fs)
          ], 6)
        ], 8, ms))), 128))
      ])
    ], 64));
  }
}), vs = { class: "color-list-wrapper" }, ps = { class: "color-list" }, ys = ["onClick"], bs = /* @__PURE__ */ Q({
  __name: "ColorSettings",
  setup(e) {
    const t = te(), { systemThemeColor: n } = oe(t), { configOptions: s } = Ke(), { colorHandlers: c } = Ge();
    return (r, l) => (m(), p("div", null, [
      w(De, {
        title: r.$t("setting.color.title"),
        class: "color-section-title"
      }, null, 8, ["title"]),
      h("div", vs, [
        h("div", ps, [
          (m(!0), p(Y, null, ee(i(s).mainColors, (o) => (m(), p("div", {
            key: o,
            class: "color-item",
            style: J({ background: `${o} !important` }),
            onClick: (g) => i(c).selectColor(o)
          }, [
            ue(w(i(z), {
              icon: "ri:check-fill",
              class: "color-check-icon"
            }, null, 512), [
              [de, o === i(n)]
            ])
          ], 12, ys))), 128))
        ])
      ])
    ]));
  }
}), _s = /* @__PURE__ */ se(bs, [["__scopeId", "data-v-21e1cf4a"]]), xs = { class: "setting-item" }, As = { class: "setting-label" }, Ts = /* @__PURE__ */ Q({
  __name: "SettingItem",
  props: {
    config: {},
    modelValue: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, s = t, c = M(() => {
      if (!n.config.options) return [];
      try {
        return typeof n.config.options == "object" && "value" in n.config.options ? n.config.options.value || [] : Array.isArray(n.config.options) ? n.config.options : [];
      } catch (l) {
        return console.warn("Error processing options for config:", n.config.key, l), [];
      }
    }), r = (l) => {
      try {
        s("change", l);
      } catch (o) {
        console.error("Error handling change for config:", n.config.key, o);
      }
    };
    return (l, o) => (m(), p("div", xs, [
      h("span", As, O(e.config.label), 1),
      e.config.type === "switch" ? (m(), U(i(Mt), {
        key: 0,
        "model-value": e.modelValue,
        onChange: r
      }, null, 8, ["model-value"])) : e.config.type === "input-number" ? (m(), U(i(Bt), {
        key: 1,
        "model-value": e.modelValue,
        min: e.config.min,
        max: e.config.max,
        step: e.config.step,
        style: J(e.config.style),
        "controls-position": e.config.controlsPosition,
        onChange: r
      }, null, 8, ["model-value", "min", "max", "step", "style", "controls-position"])) : e.config.type === "select" ? (m(), U(i($t), {
        key: 2,
        "model-value": e.modelValue,
        style: J(e.config.style),
        onChange: r
      }, {
        default: N(() => [
          (m(!0), p(Y, null, ee(c.value, (g) => (m(), U(i(Lt), {
            key: g.value,
            label: g.label,
            value: g.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "style"])) : X("", !0)
    ]));
  }
}), ws = /* @__PURE__ */ se(Ts, [["__scopeId", "data-v-eb2bba90"]]), Ss = /* @__PURE__ */ Q({
  __name: "BasicSettings",
  setup(e) {
    const t = te(), { basicSettingsConfig: n } = Ke(), { basicHandlers: s } = Ge(), {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: o,
      showLanguage: g,
      showNotification: f
    } = oe(t), E = {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: o,
      showLanguage: g,
      showNotification: f
    }, y = (L) => E[L]?.value ?? null, H = (L, v) => {
      const k = s[L];
      typeof k == "function" ? k(v) : console.warn(`Handler "${L}" not found in basicHandlers`);
    };
    return (L, v) => (m(), p("div", null, [
      w(De, {
        title: L.$t("setting.basics.title"),
        class: "basic-settings-title"
      }, null, 8, ["title"]),
      (m(!0), p(Y, null, ee(i(n), (k) => (m(), U(ws, {
        key: k.key,
        config: k,
        "model-value": y(k.key),
        onChange: (I) => H(k.handler, I)
      }, null, 8, ["config", "model-value", "onChange"]))), 128))
    ]));
  }
}), ks = /* @__PURE__ */ se(Ss, [["__scopeId", "data-v-cbba06c8"]]), Cs = { class: "setting-actions" }, Es = /* @__PURE__ */ Q({
  name: "SettingActions",
  __name: "SettingActions",
  setup(e) {
    const { t } = Ee(), n = te(), { switchThemeStyles: s } = Ie(), c = (l, o, g) => {
      l !== o && g();
    }, r = async () => {
      try {
        const l = ie;
        s(l.systemThemeMode), await ye();
        const o = n.isDark ? pe.DARK : l.menuThemeType;
        n.switchMenuStyles(o), n.setElementTheme(l.systemThemeColor), c(
          n.showMenuButton,
          l.showMenuButton,
          () => n.setButton()
        ), c(
          n.showFastEnter,
          l.showFastEnter,
          () => n.setFastEnter()
        ), c(
          n.showLanguage,
          l.showLanguage,
          () => n.setLanguage()
        ), c(
          n.showNotification,
          l.showNotification,
          () => n.setNotification()
        ), n.setWorkTab(l.showWorkTab), c(
          n.uniqueOpened,
          l.uniqueOpened,
          () => n.setUniqueOpened()
        ), location.reload();
      } catch (l) {
        console.error("重置配置失败:", l), Ce.error(t("setting.actions.resetFailed"));
      }
    };
    return (l, o) => (m(), p("div", Cs, [
      w(i(st), {
        type: "danger",
        plain: "",
        class: "action-button",
        onClick: r
      }, {
        default: N(() => [
          we(O(l.$t("setting.actions.resetConfig")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), Ms = /* @__PURE__ */ se(Es, [["__scopeId", "data-v-3d44080b"]]), Bs = { class: "layout-settings" }, $s = /* @__PURE__ */ Q({
  name: "AoSettingsPanel",
  __name: "index",
  props: {
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Zo(), { showDrawer: s } = n, { handleOpen: c, handleClose: r, closeDrawer: l } = n.useDrawerControl(), { initializeSettings: o, cleanupSettings: g } = n.useSettingsInitializer();
    return n.usePropsWatcher(t), Te(() => {
      o();
    }), ke(() => {
      g();
    }), (f, E) => (m(), p("div", Bs, [
      w(ns, {
        modelValue: i(s),
        "onUpdate:modelValue": E[0] || (E[0] = (y) => et(s) ? s.value = y : null),
        onOpen: i(c),
        onClose: i(r)
      }, {
        default: N(() => [
          w(as, { onClose: i(l) }, null, 8, ["onClose"]),
          w(ds),
          w(gs),
          w(_s),
          w(ks),
          w(Ms)
        ]),
        _: 1
      }, 8, ["modelValue", "onOpen", "onClose"])
    ]));
  }
}), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), Is = Le(
  "aoSearchStore",
  () => {
    const e = T([]);
    return { searchHistory: e, setSearchHistory: (n) => {
      e.value = n;
    } };
  },
  {
    persist: {
      key: "ao-search-history",
      storage: localStorage,
      pick: ["searchHistory"]
    }
  }
), Ds = { class: "layout-search" }, Hs = { class: "search-input__suffix" }, Rs = { class: "result search-result" }, Fs = ["onClick", "onMouseenter"], Os = { class: "search-history__title" }, Ps = { class: "search-history__list" }, Ns = ["onClick", "onMouseenter"], Vs = ["onClick"], Ws = { class: "dialog-footer" }, Gs = { class: "dialog-footer__group dialog-footer__group--center" }, Ks = { class: "dialog-footer__text" }, Us = { class: "dialog-footer__group" }, qs = { class: "dialog-footer__text" }, Xs = { class: "dialog-footer__group" }, zs = { class: "dialog-footer__text" }, js = 10, Ys = /* @__PURE__ */ Q({
  name: "AoGlobalSearch",
  __name: "AoGlobalSearch",
  setup(e) {
    const t = Is(), n = We(), s = M(() => Se().menuList), { showGlobalSearch: c } = oe(n), r = T(""), l = T([]), { searchHistory: o } = oe(t), g = T(null), f = T(0), E = T(0), y = T(), H = T(!1);
    he(c, (d) => {
      d && v();
    }), Te(() => {
      document.addEventListener("keydown", L);
    }), ke(() => {
      document.removeEventListener("keydown", L);
    });
    const L = (d) => {
      (navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? d.metaKey : d.ctrlKey) && d.key.toLowerCase() === "k" && (d.preventDefault(), c.value = !0, v()), c.value && (d.key === "ArrowUp" ? (d.preventDefault(), A()) : d.key === "ArrowDown" ? (d.preventDefault(), G()) : d.key === "Enter" ? (d.preventDefault(), Z()) : d.key === "Escape" && (d.preventDefault(), c.value = !1));
    }, v = () => {
      setTimeout(() => {
        g.value?.focus();
      }, 100);
    }, k = (d) => {
      d ? l.value = I(s.value, d) : l.value = [];
    }, I = (d, S) => {
      const x = S.toLowerCase(), C = [], D = (b) => {
        if (b.meta?.isHide) return;
        const F = fe(b.meta.title).toLowerCase();
        if (b.children && b.children.length > 0) {
          b.children.forEach(D);
          return;
        }
        F.includes(x) && (b.path && b.path.trim() || b.meta.link || b.meta.isIframe) && C.push({ ...b, children: void 0 });
      };
      return d.forEach(D), C;
    }, A = () => {
      H.value = !0, r.value ? (f.value = (f.value - 1 + l.value.length) % l.value.length, V()) : (E.value = (E.value - 1 + o.value.length) % o.value.length, K()), setTimeout(() => {
        H.value = !1;
      }, 100);
    }, G = () => {
      H.value = !0, r.value ? (f.value = (f.value + 1) % l.value.length, V()) : (E.value = (E.value + 1) % o.value.length, K()), setTimeout(() => {
        H.value = !1;
      }, 100);
    }, V = () => {
      ye(() => {
        if (!y.value || !l.value.length) return;
        const d = y.value.wrapRef;
        if (!d) return;
        const S = d.querySelectorAll(".result .box");
        if (!S[f.value]) return;
        const x = S[f.value], C = x.offsetHeight, D = d.scrollTop, b = d.clientHeight, F = x.offsetTop, P = F + C;
        F < D ? y.value.setScrollTop(F) : P > D + b && y.value.setScrollTop(P - b);
      });
    }, K = () => {
      ye(() => {
        if (!y.value || !o.value.length) return;
        const d = y.value.wrapRef;
        if (!d) return;
        const S = d.querySelectorAll(".history-result .box");
        if (!S[E.value]) return;
        const x = S[E.value], C = x.offsetHeight, D = d.scrollTop, b = d.clientHeight, F = x.offsetTop, P = F + C;
        F < D ? y.value.setScrollTop(F) : P > D + b && y.value.setScrollTop(P - b);
      });
    }, Z = () => {
      r.value && l.value.length ? le(l.value[f.value]) : !r.value && o.value.length && le(o.value[E.value]);
    }, ae = (d) => f.value === d, q = () => {
      f.value = 0;
    }, le = (d) => {
      c.value = !1, $(d), ft(d), r.value = "", l.value = [];
    }, B = () => {
      Array.isArray(o.value) && t.setSearchHistory(o.value);
    }, $ = (d) => {
      const S = d.path || String(d.meta.link || ""), x = o.value.findIndex(
        (D) => (D.path || String(D.meta.link || "")) === S
      );
      x !== -1 ? o.value.splice(x, 1) : o.value.length >= js && o.value.pop();
      const C = { ...d };
      delete C.children, delete C.meta.authList, o.value.unshift(C), B();
    }, a = (d) => {
      o.value.splice(d, 1), B();
    }, u = () => {
      r.value = "", l.value = [], f.value = 0, E.value = 0;
    }, _ = (d) => {
      !H.value && r.value && (f.value = d);
    }, R = (d) => {
      !H.value && !r.value && (E.value = d);
    };
    return (d, S) => (m(), p("div", Ds, [
      w(i(It), {
        modelValue: i(c),
        "onUpdate:modelValue": S[1] || (S[1] = (x) => et(c) ? c.value = x : null),
        width: "600",
        "show-close": !1,
        "lock-scroll": !1,
        "modal-class": "search-modal",
        onClose: u
      }, {
        footer: N(() => [
          h("div", Ws, [
            h("div", Gs, [
              w(i(z), {
                icon: "fluent:arrow-enter-left-20-filled",
                class: "keyboard"
              }),
              h("span", Ks, O(d.$t("search.selectKeydown")), 1)
            ]),
            h("div", Us, [
              w(i(z), {
                icon: "ri:arrow-up-wide-fill",
                class: "keyboard"
              }),
              w(i(z), {
                icon: "ri:arrow-down-wide-fill",
                class: "keyboard"
              }),
              h("span", qs, O(d.$t("search.switchKeydown")), 1)
            ]),
            h("div", Xs, [
              S[2] || (S[2] = h("i", { class: "keyboard keyboard--esc" }, [
                h("p", { class: "keyboard__esc-text" }, "ESC")
              ], -1)),
              h("span", zs, O(d.$t("search.exitKeydown")), 1)
            ])
          ])
        ]),
        default: N(() => [
          w(i(Dt), {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
            modelModifiers: { trim: !0 },
            placeholder: d.$t("search.placeholder"),
            onInput: k,
            onBlur: q,
            ref_key: "searchInput",
            ref: g,
            "prefix-icon": i(Ot),
            class: "search-input"
          }, {
            suffix: N(() => [
              h("div", Hs, [
                w(i(z), { icon: "fluent:arrow-enter-left-20-filled" })
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "prefix-icon"]),
          w(i(at), {
            class: "search-scrollbar",
            "max-height": "370px",
            ref_key: "searchResultScrollbar",
            ref: y,
            always: ""
          }, {
            default: N(() => [
              ue(h("div", Rs, [
                (m(!0), p(Y, null, ee(l.value, (x, C) => (m(), p("div", {
                  class: "box search-result__item",
                  key: C
                }, [
                  h("div", {
                    class: ne(["search-result__inner", ae(C) ? "search-result__inner--highlighted" : ""]),
                    onClick: (D) => le(x),
                    onMouseenter: (D) => _(C)
                  }, [
                    we(O(i(fe)(x.meta.title)) + " ", 1),
                    ue(w(i(z), { icon: "fluent:arrow-enter-left-20-filled" }, null, 512), [
                      [de, ae(C)]
                    ])
                  ], 42, Fs)
                ]))), 128))
              ], 512), [
                [de, l.value.length]
              ]),
              ue(h("div", null, [
                h("p", Os, O(d.$t("search.historyTitle")), 1),
                h("div", Ps, [
                  (m(!0), p(Y, null, ee(i(o), (x, C) => (m(), p("div", {
                    class: ne(["box search-history__item", E.value === C ? "search-history__item--highlighted" : ""]),
                    key: C,
                    onClick: (D) => le(x),
                    onMouseenter: (D) => R(C)
                  }, [
                    we(O(i(fe)(x.meta.title)) + " ", 1),
                    h("div", {
                      class: "selected-icon search-history__delete",
                      onClick: Me((D) => a(C), ["stop"])
                    }, [
                      w(i(z), {
                        icon: "ri:close-large-fill",
                        class: "search-history__delete-icon"
                      })
                    ], 8, Vs)
                  ], 42, Ns))), 128))
                ])
              ], 512), [
                [de, !r.value && l.value.length === 0 && i(o).length > 0]
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), Qs = /* @__PURE__ */ se(Ys, [["__scopeId", "data-v-456bbfe9"]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" }));
export {
  ma as AdminLayout,
  ha as AppLayout,
  ra as findApplicationByPath,
  fe as formatMenuTitle,
  en as getContextI18n,
  rt as getContextRouter,
  dt as getFirstMenuPath,
  tn as getLanguageChangeHandler,
  ct as getLanguageRef,
  Se as getMenuSource,
  nn as getSystemName,
  ft as handleMenuJump,
  ua as initializeTheme,
  Xe as openExternalLink,
  Zt as setLayoutContext,
  ca as setPageTitle,
  We as useAppStore,
  So as useAutoLayoutHeight,
  Ae as useCommon,
  uo as useHeaderBar,
  da as useLayoutHeight,
  te as useSettingStore,
  Ie as useTheme,
  Re as useWorktabStore,
  Qt as version
};
