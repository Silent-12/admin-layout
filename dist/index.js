import { ref as w, defineAsyncComponent as Ge, defineComponent as Q, computed as E, openBlock as f, createElementBlock as y, Fragment as Y, renderList as ee, createBlock as G, resolveDynamicComponent as Ye, unref as l, withCtx as N, renderSlot as Qe, createVNode as A, normalizeClass as oe, createElementVNode as u, toDisplayString as O, createCommentVNode as z, watch as he, withDirectives as ue, withModifiers as Ee, normalizeStyle as J, vShow as de, createTextVNode as Se, useCssVars as yt, onUnmounted as Ce, Transition as Je, onMounted as Ae, nextTick as be, watchEffect as bt, shallowRef as _t, resolveComponent as Ze, KeepAlive as xt, Teleport as At, isRef as et } from "vue";
import { AoSvgIcon as X, AoLogo as tt, AoIconButton as pe } from "@ao/admin-components";
import { useRouter as Be, useRoute as Oe } from "vue-router";
import { ElDropdown as nt, ElDropdownMenu as ot, ElDropdownItem as st, ElButton as at, ElMessage as Te, ElPopover as Tt, ElMessageBox as wt, ElSubMenu as St, ElMenuItem as kt, ElScrollbar as lt, ElMenu as Ct, ElDrawer as Et, ElSwitch as Mt, ElInputNumber as Bt, ElSelect as Lt, ElOption as $t, ElDialog as It, ElInput as Dt } from "element-plus";
import { useI18n as we } from "vue-i18n";
import { defineStore as Le, storeToRefs as se } from "pinia";
import { usePreferredDark as it, useWindowSize as rt, useFullscreen as Ht, useElementSize as Ke, useTimeoutFn as Ot, useBreakpoints as Ft } from "@vueuse/core";
import { Search as Rt } from "@element-plus/icons-vue";
import "nprogress";
const Pt = { theme: { title: "主题风格", list: ["浅色", "深色", "系统"] }, menu: { title: "菜单风格" }, color: { title: "系统主题色" }, basics: { title: "基础配置", list: { multiTab: "开启多标签栏", accordion: "侧边栏自动收起", collapseSidebar: "显示折叠侧边栏按钮", fastEnter: "显示快速入口", language: "显示多语言选择", notification: "显示通知入口" } }, actions: { resetConfig: "重置配置", resetFailed: "重置失败，请刷新页面后重试" } }, Nt = { btn: { refresh: "刷新", fixed: "固定当前标签", unfixed: "取消固定", closeLeft: "关闭左侧", closeRight: "关闭右侧", closeOther: "关闭其他", closeAll: "关闭全部" } }, Vt = { title: "通知", btnRead: "标为已读", bar: ["通知", "消息", "代办"], text: ["暂无"], viewAll: "查看全部" }, Wt = { placeholder: "搜索页面", historyTitle: "搜索历史", switchKeydown: "切换", selectKeydown: "选择", exitKeydown: "关闭" }, Ut = { search: { title: "搜索" }, user: { userCenter: "个人中心", logout: "退出登录" } }, Gt = { tips: "提示", cancel: "取消", confirm: "确定", logOutTips: "您是否要退出登录?" }, Kt = {
  setting: Pt,
  worktab: Nt,
  notice: Vt,
  search: Wt,
  topBar: Ut,
  common: Gt
}, qt = { theme: { title: "Theme Style", list: ["Light", "Dark", "System"] }, menu: { title: "Menu Style" }, color: { title: "Theme Color" }, basics: { title: "Basic Config", list: { multiTab: "Show work tab", accordion: "Sidebar accordion", collapseSidebar: "Show sidebar button", fastEnter: "Show fast enter", language: "Show multilingual selection", notification: "Show notification entry" } }, actions: { resetConfig: "Reset Config", resetFailed: "Reset failed, please refresh the page and try again" } }, Xt = { btn: { refresh: "Refresh", fixed: "Pin current tab", unfixed: "Unpin current tab", closeLeft: "Close left", closeRight: "Close right", closeOther: "Close other", closeAll: "Close all" } }, zt = { title: "Notice", btnRead: "Mark as read", bar: ["Notice", "Message", "Todo"], text: ["No"], viewAll: "View all" }, jt = { placeholder: "Search page", historyTitle: "Search history", switchKeydown: "Navigate", selectKeydown: "Select", exitKeydown: "Close" }, Yt = { search: { title: "Search" }, user: { userCenter: "User center", logout: "Log out" } }, Qt = { tips: "Prompt", cancel: "Cancel", confirm: "Confirm", logOutTips: "Do you want to log out?" }, Jt = {
  setting: qt,
  worktab: Xt,
  notice: zt,
  search: jt,
  topBar: Yt,
  common: Qt
}, Zt = "1", en = w("zh");
let me = {};
const tn = (e) => {
  me = {
    router: e.router,
    i18n: e.i18n,
    menuSource: e.menuSource,
    userInfo: e.userInfo,
    language: e.language,
    onLanguageChange: e.onLanguageChange,
    onLogout: e.onLogout,
    config: e.config
  };
}, ct = () => me.router, nn = () => me.i18n, ke = () => me.menuSource?.() ?? {
  menuList: [],
  applicationList: [],
  currentApplication: void 0,
  homePath: ""
}, on = () => me.userInfo?.(), ut = () => me.language ?? en, sn = () => me.onLanguageChange, an = () => {
  me.onLogout ? me.onLogout() : console.warn("[ao-admin-layout] 未注入 onLogout，登出操作被忽略");
}, dt = () => me.config?.systemName ?? void 0 ?? "Ao Admin", ln = [
  {
    name: "设置面板",
    key: "settings-panel",
    component: Ge(() => Promise.resolve().then(() => Vs)),
    enabled: !0
  },
  {
    name: "全局搜索",
    key: "global-search",
    component: Ge(() => Promise.resolve().then(() => ia)),
    enabled: !0
  }
], rn = () => ln.filter((e) => e.enabled !== !1), cn = /* @__PURE__ */ Q({
  name: "AoGlobalComponent",
  __name: "AoGlobalComponent",
  setup(e) {
    const t = E(() => rn());
    return (n, s) => (f(!0), y(Y, null, ee(t.value, (c) => (f(), G(Ye(c.component), {
      key: c.key
    }))), 128));
  }
});
function ht(e) {
  return !e.path?.trim() || e.path.startsWith("http://") || e.path.startsWith("https://") || e.meta.isHide && e.meta.isFullPage !== !0 || e.meta.link && !e.meta.isIframe ? !1 : e.children?.length ? !0 : !!(e.component || e.meta.isIframe === !0);
}
function mt(e) {
  for (const t of e)
    if (ht(t)) {
      if (t.children?.length) {
        const n = mt(t.children);
        if (n) return n;
        continue;
      }
      return t.path.startsWith("/") ? t.path : `/${t.path}`;
    }
  return "";
}
function pa(e, t) {
  return [...e].sort((n, s) => s.path.length - n.path.length).find((n) => t === n.path || t.startsWith(`${n.path}/`));
}
const ya = (e) => {
  const { title: t } = e.meta;
  t && setTimeout(() => {
    document.title = `${ge(String(t))} - ${dt()}`;
  }, 150);
}, ge = (e) => {
  if (e) {
    if (e.startsWith("menus.")) {
      const t = nn();
      return t ? t.global.te(e) ? t.global.t(e) : e.split(".").pop() || e : e;
    }
    return e;
  }
  return "";
}, un = { class: "menu-txt" }, dn = /* @__PURE__ */ Q({
  name: "AoFastEnter",
  __name: "AoFastEnter",
  setup(e) {
    const t = Be(), n = E(() => ke().applicationList), s = E(() => ke().currentApplication), c = (r) => {
      const i = mt(r.children || []);
      if (!i || r.path === s.value?.path)
        return;
      const o = t.resolve({ path: i }).href;
      window.open(o, "_blank", "noopener");
    };
    return (r, i) => (f(), G(l(nt), {
      "popper-class": "langDropDownStyle",
      onCommand: c
    }, {
      dropdown: N(() => [
        A(l(ot), null, {
          default: N(() => [
            (f(!0), y(Y, null, ee(n.value, (o) => (f(), y("div", {
              key: o.path,
              class: "lang-btn-item"
            }, [
              A(l(st), {
                command: o,
                class: oe({ "is-selected": o.path === s.value?.path })
              }, {
                default: N(() => [
                  u("span", un, O(l(ge)(o.meta.title)), 1),
                  o.path === s.value?.path ? (f(), G(l(X), {
                    key: 0,
                    style: { "margin-left": "5px" },
                    icon: "ri:check-fill"
                  })) : z("", !0)
                ]),
                _: 2
              }, 1032, ["command", "class"])
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      default: N(() => [
        Qe(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), hn = { class: "notification-panel__header" }, mn = { class: "notification-panel__title" }, fn = { class: "notification-panel__read-btn" }, gn = { class: "notification-panel__tabs" }, vn = ["onClick"], pn = { class: "notification-panel__content" }, yn = { class: "notification-panel__scroll scrollbar-thin" }, bn = { class: "notification-item__body" }, _n = { class: "notification-item__title" }, xn = { class: "notification-item__time" }, An = { class: "notification-item__avatar-box" }, Tn = ["src"], wn = { class: "notification-item__body" }, Sn = { class: "notification-item__msg-title" }, kn = { class: "notification-item__time" }, Cn = { class: "pending-item__time" }, En = { class: "notification-empty" }, Mn = { class: "notification-empty__text" }, Bn = { class: "notification-panel__footer" }, Ln = "https://dummyimage.com/160x160.png", $n = "https://dummyimage.com/160x160.png", In = "https://dummyimage.com/160x160.png", Dn = "https://dummyimage.com/80x80.png", Hn = "https://dummyimage.com/80x80.png", On = "https://dummyimage.com/80x80.png", Fn = /* @__PURE__ */ Q({
  name: "AoNotification",
  __name: "AoNotification",
  props: {
    value: { type: Boolean }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const { t: n } = we(), s = e, c = t, r = w(!1), i = w(!1), o = w(0), m = () => {
      const B = w([
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
      ]), L = w([
        {
          title: "xxxxxxxxxx",
          time: "2021-2-26 23:50",
          avatar: Ln
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-2-21 8:05",
          avatar: $n
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-1-17 21:12",
          avatar: In
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-01-14 0:20",
          avatar: Dn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-20 0:15",
          avatar: Hn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-17 22:06",
          avatar: On
        }
      ]), a = w([]), d = E(() => [
        {
          name: E(() => n("notice.bar[0]")),
          num: B.value.length
        },
        {
          name: E(() => n("notice.bar[1]")),
          num: L.value.length
        },
        {
          name: E(() => n("notice.bar[2]")),
          num: a.value.length
        }
      ]);
      return {
        noticeList: B,
        msgList: L,
        pendingList: a,
        barList: d
      };
    }, g = () => {
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
          const d = {
            icon: "ri:arrow-right-circle-line",
            iconClass: "notice-icon--notice"
          };
          return B[a] || d;
        }
      };
    }, C = () => ({
      showNotice: (L) => {
        L ? (i.value = !0, setTimeout(() => {
          r.value = !0;
        }, 5)) : (r.value = !1, setTimeout(() => {
          i.value = !1;
        }, 350));
      }
    }), p = (B, L, a, d) => {
      const _ = (S) => {
        o.value = S;
      }, F = E(() => {
        const x = [B.value, L.value, a.value][o.value];
        return x && x.length === 0;
      });
      return {
        changeBar: _,
        currentTabIsEmpty: F,
        handleViewAll: () => {
          const x = {
            0: d.handleNoticeAll,
            1: d.handleMsgAll,
            2: d.handlePendingAll
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
    }), { noticeList: $, msgList: v, pendingList: k, barList: I } = m(), { getNoticeStyle: T } = g(), { showNotice: U } = C(), { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: Z } = H(), { changeBar: ae, currentTabIsEmpty: q, handleViewAll: le } = p(
      $,
      v,
      k,
      { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: Z }
    );
    return he(
      () => s.value,
      (B) => {
        U(B);
      }
    ), (B, L) => ue((f(), y("div", {
      class: "ao-notification-panel ao-card-sm notification-panel",
      style: J({
        transform: r.value ? "scaleY(1)" : "scaleY(0.9)",
        opacity: r.value ? 1 : 0
      }),
      onClick: L[0] || (L[0] = Ee(() => {
      }, ["stop"]))
    }, [
      u("div", hn, [
        u("span", mn, O(B.$t("notice.title")), 1),
        u("span", fn, O(B.$t("notice.btnRead")), 1)
      ]),
      u("ul", gn, [
        (f(!0), y(Y, null, ee(l(I), (a, d) => (f(), y("li", {
          key: d,
          class: oe(["notification-panel__tab", { "bar-active": o.value === d }]),
          onClick: (_) => l(ae)(d)
        }, O(a.name) + " (" + O(a.num) + ") ", 11, vn))), 128))
      ]),
      u("div", pn, [
        u("div", yn, [
          ue(u("ul", null, [
            (f(!0), y(Y, null, ee(l($), (a, d) => (f(), y("li", {
              key: d,
              class: "notification-item"
            }, [
              u("div", {
                class: oe(["notification-item__icon", [l(T)(a.type).iconClass]])
              }, [
                A(l(X), {
                  class: "notification-item__icon-svg",
                  icon: l(T)(a.type).icon
                }, null, 8, ["icon"])
              ], 2),
              u("div", bn, [
                u("h4", _n, O(a.title), 1),
                u("p", xn, O(a.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, o.value === 0]
          ]),
          ue(u("ul", null, [
            (f(!0), y(Y, null, ee(l(v), (a, d) => (f(), y("li", {
              key: d,
              class: "notification-item"
            }, [
              u("div", An, [
                u("img", {
                  src: a.avatar,
                  class: "notification-item__avatar"
                }, null, 8, Tn)
              ]),
              u("div", wn, [
                u("h4", Sn, O(a.title), 1),
                u("p", kn, O(a.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, o.value === 1]
          ]),
          ue(u("ul", null, [
            (f(!0), y(Y, null, ee(l(k), (a, d) => (f(), y("li", {
              key: d,
              class: "pending-item"
            }, [
              u("h4", null, O(a.title), 1),
              u("p", Cn, O(a.time), 1)
            ]))), 128))
          ], 512), [
            [de, o.value === 2]
          ]),
          ue(u("div", En, [
            A(l(X), {
              icon: "system-uicons:inbox",
              class: "notification-empty__icon"
            }),
            u("p", Mn, O(B.$t("notice.text[0]")) + O(l(I)[o.value].name), 1)
          ], 512), [
            [de, l(q)]
          ])
        ]),
        u("div", Bn, [
          A(l(at), {
            class: "notification-panel__view-all",
            onClick: l(le)
          }, {
            default: N(() => [
              Se(O(B.$t("notice.viewAll")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      L[1] || (L[1] = u("div", { class: "notification-panel__bottom-spacer" }, null, -1))
    ], 4)), [
      [de, i.value]
    ]);
  }
}), ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, c] of t)
    n[s] = c;
  return n;
}, Rn = /* @__PURE__ */ ne(Fn, [["__scopeId", "data-v-931a32d1"]]);
var j = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.AUTO = "auto", e))(j || {}), ye = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.DESIGN = "design", e))(ye || {}), De = /* @__PURE__ */ ((e) => (e.ZH = "zh", e.EN = "en", e))(De || {});
const Pn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////29vj9/f34+Pox8uq3AAABTElEQVRo3u2VwW3EMAwEhcs1QKuBE5QCYlfg9N9UcjHyMUQQtlaASOz89jWwzCUTIYQQQgghhJCUPleBo9ueYoDVrTIAwMdBdEUMsLpvGQHg10F0ojBat6VU9YDWbe9Q9YDV5dc7PFY9QHXLkYoeoLqvI33oAap7HemhB6juP+qBull19qh4LoJdc89LzFzRvg/QH3GvOXXUzahLWKhrQB111P0SS1elj+2S7im97Fd0RXpZruhW6SVf0Uk/E+sAjznxqACKMHHNG0TamWeoo24OXe1sccJe8x2qK/YGtoAeoAzViYlnnf2YnkfFLoLnmjeItDPPUEfdHLoqd9igS8xmR65omwV5gGwy9LzauNDdfkwXo3K7CC5q3iDSzjxDHXVz6GpHj4FLbB+iKx07GHmA8hCdqETQ6Y8ZYVT0IkSoeYNIO/MMddQN1v0AFy9OBRBx85QAAAAASUVORK5CYII=", Nn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAG1BMVEUnJyo/P0ZSUlxKSlNOTlc5OT8vLzJDQ0s0NDkX0J24AAABYElEQVRo3u2XMWrEMBBFVW47LM4BHEPqTZPeN3CzvQtD6uQCzs1j4lRGw2DPF2jEf900eqxW/w9OhBBCCCGEEEJS+pwEjm67iQFWN0kBHD8OqpvFAKv7kRI4/jqoThx4dN/j8KEPaN2933joA1g39huDPmB19/6Phz5AdV/7oW/6ANW974e+6gNUN+6HDvoA1fX/6ENknX2ZkZ+KHYTIMTdLLHZFGwso+nqljjrqJGGhLgN11FG30ZZuER/PU7qbeFnP6Gbx8nJGN4mX7oxO/FSsA1xmxU8FEISKY56hpc48Qh11degWZ4oTdpuvUN1sN7AFdAF1UJ2YRNbZlxn5qdhBiBzzDC115hHqqKtDt8gVntASs1mxFe1qbvznZAddrzYhdJcvM8RTuRyEEDHP0FJnHqGOujp0iyPHwBJbi+hmRwcjF1BXRCcqLej0y2zhqehBaCHmGVrqzCPUUVdY9wter4K58MOVTQAAAABJRU5ErkJggg==", Vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAJFBMVEXy8vUREREzMzP////4+Pr19fgcHBz8/P0rKysyMjIwMDAjIyPGISqaAAABlElEQVRo3u3XsUoEMRAGYItdrNMc1hZhY5t7AMHCduEE67MSKyG+gM09iIX9vqFeooRwhGGTIZfk/umm+iA3/8ztVWKJtAIHDhw4cODAgQMHDhy4Orkno+N1m1ZxbdC6JGeKcoMuyu3Kcg9lOVOW02fiPubx8aSx3EGIV25u639I31juW/zWGzM3H5sxaBx3tz9ymy9Wbuvn1DeWk8LWCyv37rrroLHcp+NuWLl71w1BY7m94zas3Oy6MWgsJ/6Klftvg6Ybjn7MlkeFDkLLMaeXWNMrmjhArZ9XcODAaebPSXDgwIG7BO45b0WrwypuyL4Iyxpul83JNZzJ5qY1nM7mVMUcw2NWPCoMQag45p3vTHDg6uQiMfcppor3mi8kxLqiJStnKG5i5TTFqZY5+jFbHhU6CC3HvPOdCQ5cnVzCn/Yw/UW+zRfOFU2X5DxAdE2c55Uu1QSX/JhNjEpyEJqIeec7Exy4OrnTmIc5LvRtvpAA64qWJMB6gCYSYD2vqgcu/pg9jEo8CD3EvPOdCQ5cYe4H2qWIxMTt67gAAAAASUVORK5CYII=", Wn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////5+fnx8fHd3d0ah087AAAAyklEQVRo3u3Z0Q2AIAxFUeIGbmBYgRXcfyYXaEh8PhXKvQucvzaUsncq9uDg4ODg4OAK3G3uDIJLxFU1idtk7lC4qvcrFwcHBwfn5YwjWuCcC6gF+dYrHBzcAE8SOEO2ES1x+gI67FztBgf3BteC4ODm4KQRrXOlx82/XuHg4OBG5VrQx2cc45FK4aoeHFye4zAcXPp/hNzbPDeX+9IOBzcm5x/Rj7lNXzofrFc4OLiluRa0Fmcc0f4j1UjrFW7eJwkcHBwcHBycswty2jT2B1pWhwAAAABJRU5ErkJggg==", Un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vUnJyr5+fk/P0bz8/YkmYUBAAAA0ElEQVRo3u3ZwQ3EMAhEUR/SwHZgWenADVjbf1FpwCIyIg6QPw28GyOg/IQU88DBwcHBwcEVuGWuTwKXhzuaNkPD/dXcqeGaPq9y88DBwcHZcnYjui5wFgUUoF7h4NJzuTcguEOewlLMC+g055oYOLgnuD4JHFwMThzRde+RakSvVzg4ODi3HH+EdhO/fwS4uJzD4zAcXPo/Qu42z83lvrTDwfnk7Ef0ePSPIO8FG+oVDg7u01yf5Fvc2oiue49Uw1G9wsVdSeDg4ODg4OAscwFb7y6GSsIW5AAAAABJRU5ErkJggg==", Gn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAElBMVEXy8vX////5+fnx8fHd3d1VVVVl+HYBAAAAzklEQVRo3u3ZYQ2FMAxF4QUHzwGZhVl4FvBvBQE0S7hcYCvnGPj+tVlXfp2KPTg4ODg4OLgCd5rb/sfgEnFVTeIWmVsVruq9ysXBwcHBeTnjiBY45wJqQb71CgcHN8CTBM6QbURLnL6AVjtXu8HB3cG1IDi4OThpROtc6XHzr1c4ODi4UbkW9PAZx3ikUriqBweX5zgMB5f+HyH3Ns/N5b60w8GNyflH9GVu0ZfOA+sVDg7u01wL+hZnHNH+I9VI6xVu3icJHBwcHBwcnLMdqYI1ftKrSesAAAAASUVORK5CYII=", _e = {
  /** 系统主题预览图 */
  themeStyles: {
    /** 亮色主题 */
    light: Pn,
    /** 暗色主题 */
    dark: Nn,
    /** 自动主题（跟随系统） */
    system: Vn
  },
  /** 菜单风格预览图 */
  menuStyles: {
    /** 设计风格 */
    design: Wn,
    /** 暗色风格 */
    dark: Un,
    /** 亮色风格 */
    light: Gn
  }
}, Fe = {
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
}, Kn = {
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
      theme: ye.DESIGN,
      background: "#f3f5f8",
      systemNameColor: "var(--ao-gray-800)",
      iconColor: "#6B6B6B",
      textColor: "#29343D",
      img: _e.menuStyles.design
    },
    {
      theme: ye.DARK,
      background: "#191A23",
      systemNameColor: "#D9DADB",
      iconColor: "#BABBBD",
      textColor: "#BABBBD",
      img: _e.menuStyles.dark
    },
    {
      theme: ye.LIGHT,
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
      theme: ye.DARK,
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
  headerBar: Fe
}, fe = Object.freeze(Kn);
function Re(e) {
  const t = e.trim().replace(/^#/, "");
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t);
}
function qn(e, t, n) {
  const s = (c) => Number.isInteger(c) && c >= 0 && c <= 255;
  return s(e) && s(t) && s(n);
}
function Me(e) {
  if (!Re(e))
    throw Te.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  let n = e.replace(/^#/, "");
  n.length === 3 && (n = n.split("").map((c) => c.repeat(2)).join(""));
  const s = n.match(/../g);
  if (!s)
    throw new Error("Invalid hex color format");
  return s.map((c) => parseInt(c, 16));
}
function Pe(e, t, n) {
  if (!qn(e, t, n))
    throw Te.warning("输入错误的RGB颜色值"), new Error("Invalid RGB color values");
  const s = (c) => {
    const r = c.toString(16);
    return r.length === 1 ? `0${r}` : r;
  };
  return `#${s(e)}${s(t)}${s(n)}`;
}
function Xn(e, t, n) {
  const s = Math.max(0, Math.min(1, Number(n))), c = Me(e), r = Me(t), i = c.map((o, m) => {
    const g = r[m];
    return Math.round(o * (1 - s) + g * s);
  });
  return Pe(i[0], i[1], i[2]);
}
function ft(e, t, n = !1) {
  if (!Re(e))
    throw Te.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  if (n)
    return Ne(e, t);
  const c = Me(e).map((r) => Math.floor((255 - r) * t + r));
  return Pe(c[0], c[1], c[2]);
}
function Ne(e, t) {
  if (!Re(e))
    throw Te.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  const s = Me(e).map((c) => Math.floor(c * (1 - t)));
  return Pe(s[0], s[1], s[2]);
}
function zn(e, t = !1) {
  document.documentElement.style.setProperty("--el-color-primary", e);
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${n}`,
      ft(e, n / 10, t)
    );
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-dark-${n}`,
      Ne(e, n / 10)
    );
}
function gt(e) {
  const t = "#ffffff", n = document.documentElement.style;
  n.setProperty("--el-color-primary", e), zn(e, te().isDark);
  for (let s = 1; s < 16; s++) {
    const c = Xn(e, t, s / 16);
    n.setProperty(`--el-color-primary-custom-${s}`, c);
  }
}
const qe = (e) => {
  window.open(e, "_blank");
}, vt = (e, t = !1) => {
  const n = ct();
  if (!n) {
    console.warn("[ao-admin-layout] 未注入 router，无法跳转");
    return;
  }
  const { link: s, isIframe: c } = e.meta;
  if (s && !c)
    return qe(s);
  if (!t || !e.children?.length)
    return n.push(e.path);
  const r = (o) => {
    for (const m of o)
      if (ht(m))
        return m.children?.length && r(m.children) || m;
  }, i = r(e.children);
  if (!i)
    return n.push(e.path);
  if (i.meta?.link)
    return qe(i.meta.link);
  n.push(i.path);
};
class jn {
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
  menuThemeType: ye.DESIGN,
  /** 系统主题颜色 */
  systemThemeColor: fe.systemMainColor[0],
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
    const e = w(ie.menuOpen), t = w(ie.systemThemeType), n = w(ie.systemThemeMode), s = w(ie.menuThemeType), c = w(ie.systemThemeColor), r = w(ie.showMenuButton), i = w(ie.showFastEnter), o = w(ie.showWorkTab), m = w(ie.showLanguage), g = w(ie.showNotification), C = w(ie.showSettingGuide), p = w(ie.uniqueOpened), H = w(ie.refresh), $ = E(() => {
      const L = fe.themeList.filter((a) => a.theme === s.value);
      return v.value ? fe.darkMenuStyles[0] : L[0];
    }), v = E(() => t.value === j.DARK);
    return {
      systemThemeType: t,
      systemThemeMode: n,
      menuThemeType: s,
      systemThemeColor: c,
      uniqueOpened: p,
      showMenuButton: r,
      showFastEnter: i,
      showWorkTab: o,
      showLanguage: m,
      showNotification: g,
      showSettingGuide: C,
      menuOpen: e,
      refresh: H,
      getMenuTheme: $,
      isDark: v,
      setGlopTheme: (L, a) => {
        t.value = L, n.value = a, localStorage.setItem(jn.THEME_KEY, L);
      },
      switchMenuStyles: (L) => {
        s.value = L;
      },
      setElementTheme: (L) => {
        c.value = L, gt(L);
      },
      setUniqueOpened: () => {
        p.value = !p.value;
      },
      setButton: () => {
        r.value = !r.value;
      },
      setFastEnter: () => {
        i.value = !i.value;
      },
      setWorkTab: (L) => {
        o.value = L;
      },
      setLanguage: () => {
        m.value = !m.value;
      },
      setNotification: () => {
        g.value = !g.value;
      },
      setMenuOpen: (L) => {
        e.value = L;
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
function xe() {
  const e = te();
  return {
    homePath: E(() => ke().homePath),
    refresh: () => {
      e.reload();
    },
    scrollTo: (i, o = !1) => {
      const m = document.getElementById("app-main");
      m && m.scrollTo({
        top: i,
        behavior: o ? "smooth" : "auto"
      });
    },
    scrollToTop: () => {
      const i = document.getElementById("app-main");
      i && (i.scrollTop = 0);
    },
    smoothScrollToTop: () => {
      const i = document.getElementById("app-main");
      i && i.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
}
const He = Le(
  "worktabStore",
  () => {
    const e = w({}), t = w([]), n = w([]), s = E(() => t.value.length > 0), c = E(() => t.value.length > 1), r = E(
      () => e.value.path ? t.value.findIndex((a) => a.path === e.value.path) : -1
    ), i = (a) => t.value.findIndex((d) => d.path === a), o = (a) => t.value.find((d) => d.path === a), m = (a) => !a.fixedTab, g = (a) => {
      if (!a.path) {
        console.warn("尝试跳转到无效路径的标签页");
        return;
      }
      const d = ct();
      if (!d) {
        console.warn("[ao-admin-layout] 未注入 router，无法跳转");
        return;
      }
      try {
        d.push({
          path: a.path,
          query: a.query
        });
      } catch (_) {
        console.error("路由跳转失败:", _);
      }
    }, C = (a) => {
      if (!a.path) {
        console.warn("尝试打开无效的标签页");
        return;
      }
      a.name && U(a.name);
      let d = -1;
      if (a.name && (d = t.value.findIndex((_) => _.name === a.name)), d === -1 && (d = i(a.path)), d === -1) {
        const _ = a.fixedTab ? p() : t.value.length, F = { ...a };
        a.fixedTab ? t.value.splice(_, 0, F) : t.value.push(F), e.value = F;
      } else {
        const _ = t.value[d];
        t.value[d] = {
          ..._,
          path: a.path,
          params: a.params,
          query: a.query,
          title: a.title || _.title,
          fixedTab: a.fixedTab ?? _.fixedTab,
          keepAlive: a.keepAlive ?? _.keepAlive,
          name: a.name || _.name,
          icon: a.icon || _.icon
        }, e.value = t.value[d];
      }
    }, p = () => {
      let a = 0;
      for (let d = 0; d < t.value.length && t.value[d].fixedTab; d++)
        a = d + 1;
      return a;
    }, H = (a) => {
      const d = o(a), _ = i(a);
      if (_ === -1) {
        console.warn(`尝试关闭不存在的标签页: ${a}`);
        return;
      }
      if (d && !m(d)) {
        console.warn(`尝试关闭固定标签页: ${a}`);
        return;
      }
      t.value.splice(_, 1), d?.name && T(d);
      const { homePath: F } = xe();
      if (!s.value) {
        a !== F.value && (e.value = {}, g({ path: F.value }));
        return;
      }
      if (e.value.path === a) {
        const h = _ >= t.value.length ? t.value.length - 1 : _;
        e.value = t.value[h], g(e.value);
      }
    }, $ = (a) => {
      const d = i(a);
      if (d === -1) {
        console.warn(`尝试关闭左侧标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const F = t.value.slice(0, d).filter(m);
      if (F.length === 0) {
        console.warn("左侧没有可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter(
        (S, x) => x >= d || !m(S)
      );
      const h = o(a);
      h && (e.value = h);
    }, v = (a) => {
      const d = i(a);
      if (d === -1) {
        console.warn(`尝试关闭右侧标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const F = t.value.slice(d + 1).filter(m);
      if (F.length === 0) {
        console.warn("右侧没有可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter(
        (S, x) => x <= d || !m(S)
      );
      const h = o(a);
      h && (e.value = h);
    }, k = (a) => {
      const d = o(a);
      if (!d) {
        console.warn(`尝试关闭其他标签页，但目标标签页不存在: ${a}`);
        return;
      }
      const F = t.value.filter((h) => h.path !== a).filter(m);
      if (F.length === 0) {
        console.warn("没有其他可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter((h) => h.path === a || !m(h)), e.value = d;
    }, I = () => {
      const { homePath: a } = xe(), d = t.value.some((S) => S.fixedTab), _ = t.value.filter((S) => m(S) ? d || S.path !== a.value : !1);
      if (_.length === 0) {
        console.warn("没有可关闭的标签页");
        return;
      }
      if (V(_), t.value = t.value.filter((S) => !m(S) || !d && S.path === a.value), !s.value) {
        e.value = {}, g({ path: a.value });
        return;
      }
      const h = t.value.find((S) => S.path === a.value) || t.value[0];
      e.value = h, g(h);
    }, T = (a) => {
      !a.keepAlive || !a.name || n.value.includes(a.name) || n.value.push(a.name);
    }, U = (a) => {
      a && (n.value = n.value.filter((d) => d !== a));
    }, V = (a) => {
      a.forEach((d) => {
        d.name && T(d);
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
      openTab: C,
      removeTab: H,
      removeLeft: $,
      removeRight: v,
      removeOthers: k,
      removeAll: I,
      toggleFixedTab: (a) => {
        const d = i(a);
        if (d === -1) {
          console.warn(`尝试切换不存在标签页的固定状态: ${a}`);
          return;
        }
        const _ = { ...t.value[d] };
        if (_.fixedTab = !_.fixedTab, t.value.splice(d, 1), _.fixedTab) {
          const F = t.value.findIndex((S) => !S.fixedTab), h = F === -1 ? t.value.length : F;
          t.value.splice(h, 0, _);
        } else {
          const F = t.value.filter((h) => h.fixedTab).length;
          t.value.splice(F, 0, _);
        }
        e.value.path === a && (e.value = _);
      },
      validateWorktabs: (a) => {
        try {
          const d = (h) => {
            try {
              return h.name && a.getRoutes().some((x) => x.name === h.name) ? !0 : h.path ? a.resolve({
                path: h.path,
                query: h.query || void 0
              }).matched.length > 0 : !1;
            } catch {
              return !1;
            }
          }, _ = t.value.filter((h) => d(h));
          _.length !== t.value.length && (console.warn("发现无效的标签页路由，已自动清理"), t.value = _);
          const F = e.value && d(e.value);
          !F && _.length > 0 ? (console.warn("当前激活标签无效，已自动切换"), e.value = _[0]) : F || (e.value = {});
        } catch (d) {
          console.error("验证工作台标签页失败:", d);
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
      findTabIndex: i,
      getTab: o,
      isTabClosable: m,
      addKeepAliveExclude: T,
      removeKeepAliveExclude: U,
      markTabsToRemove: V,
      getTabTitle: (a) => o(a),
      updateTabTitle: (a, d) => {
        const _ = o(a);
        _ && (_.customTitle = d);
      },
      resetTabTitle: (a) => {
        const d = o(a);
        d && (d.customTitle = "");
      }
    };
  },
  {
    persist: {
      key: "worktab",
      storage: sessionStorage
    }
  }
), Yn = { class: "menu-right" }, Qn = ["onClick"], Jn = { class: "menu-label" }, Zn = { class: "submenu-title" }, eo = { class: "menu-label" }, to = ["onClick"], no = { class: "menu-label" }, oo = /* @__PURE__ */ Q({
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
    yt((B) => ({
      ebaf5f58: s.menuWidth + "px",
      v26e14721: s.borderRadius + "px",
      v7f6aa3c5: s.animationDuration + "ms"
    }));
    const s = e, c = n, r = w(!1), i = w({ x: 0, y: 0 });
    let o = null, m = !1;
    const g = E(() => ({
      position: "fixed",
      left: `${i.value.x}px`,
      top: `${i.value.y}px`,
      zIndex: 2e3,
      width: `${s.menuWidth}px`
    })), C = E(() => ({
      padding: `${s.menuPadding}px`
    })), p = E(() => ({
      height: `${s.itemHeight}px`,
      padding: `0 ${s.itemPaddingX}px`,
      borderRadius: "4px"
    })), H = E(() => ({
      minWidth: `${s.submenuWidth}px`,
      padding: `${s.menuPadding}px 0`,
      borderRadius: `${s.borderRadius}px`
    })), $ = () => {
      let B = s.menuPadding * 2;
      return s.menuItems.forEach((L) => {
        B += s.itemHeight, L.showLine && (B += 10);
      }), B;
    }, v = (B) => {
      const L = window.innerWidth, a = window.innerHeight, d = $();
      let _ = B.clientX, F = B.clientY;
      return _ + s.menuWidth > L - s.boundaryDistance && (_ = Math.max(s.boundaryDistance, _ - s.menuWidth)), F + d > a - s.boundaryDistance && (F = Math.max(s.boundaryDistance, a - d - s.boundaryDistance)), _ = Math.max(
        s.boundaryDistance,
        Math.min(_, L - s.menuWidth - s.boundaryDistance)
      ), F = Math.max(
        s.boundaryDistance,
        Math.min(F, a - d - s.boundaryDistance)
      ), { x: _, y: F };
    }, k = () => {
      m || (document.addEventListener("click", T), document.addEventListener("contextmenu", U), document.addEventListener("keydown", V), m = !0);
    }, I = () => {
      m && (document.removeEventListener("click", T), document.removeEventListener("contextmenu", U), document.removeEventListener("keydown", V), m = !1);
    }, T = (B) => {
      const L = B.target, a = document.querySelector(".context-menu");
      a && a.contains(L) || Z();
    }, U = () => {
      Z();
    }, V = (B) => {
      B.key === "Escape" && Z();
    }, K = (B) => {
      B.preventDefault(), B.stopPropagation(), o && (window.clearTimeout(o), o = null), i.value = v(B), r.value = !0, c("show"), o = window.setTimeout(() => {
        r.value && k(), o = null;
      }, 50);
    }, Z = () => {
      r.value && (r.value = !1, c("hide"), o && (window.clearTimeout(o), o = null), I());
    }, ae = (B) => {
      B.disabled || (c("select", B), Z());
    }, q = (B) => {
      const L = B;
      L.style.transformOrigin = "top left";
    }, le = () => {
      I(), o && (window.clearTimeout(o), o = null);
    };
    return Ce(() => {
      I(), o && (window.clearTimeout(o), o = null);
    }), t({
      show: K,
      hide: Z,
      visible: E(() => r.value)
    }), (B, L) => (f(), y("div", Yn, [
      A(Je, {
        name: "context-menu",
        onBeforeEnter: q,
        onAfterLeave: le
      }, {
        default: N(() => [
          ue(u("div", {
            style: J(g.value),
            class: "context-menu ao-card-xs"
          }, [
            u("ul", {
              class: "menu-list",
              style: J(C.value)
            }, [
              (f(!0), y(Y, null, ee(e.menuItems, (a) => (f(), y(Y, {
                key: a.key
              }, [
                a.children ? (f(), y("li", {
                  key: 1,
                  class: "menu-item submenu",
                  style: J(p.value)
                }, [
                  u("div", Zn, [
                    a.icon ? (f(), G(l(X), {
                      key: 0,
                      class: "menu-item-icon",
                      icon: a.icon
                    }, null, 8, ["icon"])) : z("", !0),
                    u("span", eo, O(a.label), 1),
                    A(l(X), {
                      icon: "ri:arrow-right-s-line",
                      class: "submenu-arrow"
                    })
                  ]),
                  u("ul", {
                    class: "submenu-list ao-card-xs",
                    style: J(H.value)
                  }, [
                    (f(!0), y(Y, null, ee(a.children, (d) => (f(), y("li", {
                      key: d.key,
                      class: oe(["menu-item menu-item-child", { "is-disabled": d.disabled, "has-line": d.showLine }]),
                      style: J(p.value),
                      onClick: (_) => ae(d)
                    }, [
                      d.icon ? (f(), G(l(X), {
                        key: 0,
                        class: "menu-item-icon-child",
                        icon: d.icon
                      }, null, 8, ["icon"])) : z("", !0),
                      u("span", no, O(d.label), 1)
                    ], 14, to))), 128))
                  ], 4)
                ], 4)) : (f(), y("li", {
                  key: 0,
                  class: oe(["menu-item", { "is-disabled": a.disabled, "has-line": a.showLine }]),
                  style: J(p.value),
                  onClick: (d) => ae(a)
                }, [
                  a.icon ? (f(), G(l(X), {
                    key: 0,
                    class: "menu-item-icon",
                    icon: a.icon
                  }, null, 8, ["icon"])) : z("", !0),
                  u("span", Jn, O(a.label), 1)
                ], 14, Qn))
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
}), so = /* @__PURE__ */ ne(oo, [["__scopeId", "data-v-69392e75"]]), ao = {
  key: 0,
  class: "work-tab"
}, lo = ["id", "onClick", "onContextmenu"], io = ["onClick"], ro = /* @__PURE__ */ Q({
  name: "AoWorkTab",
  __name: "AoWorkTab",
  setup(e) {
    const { t } = we(), n = He(), s = Oe(), c = Be(), { currentRoute: r } = c, i = te(), { showWorkTab: o } = se(i), m = w(null), g = w(null), C = w(), p = w({
      translateX: 0,
      transition: ""
    }), H = w({
      startX: 0,
      currentX: 0
    }), $ = w(""), v = E(() => n.opened), k = E(() => r.value.path), I = E(() => v.value.findIndex((h) => h.path === k.value)), T = () => {
      const h = () => {
        const M = v.value.findIndex((b) => b.path === $.value), D = v.value[M];
        return {
          clickedIndex: M,
          currentTab: D,
          isLastTab: M === v.value.length - 1,
          isOneTab: v.value.length === 1,
          isCurrentTab: $.value === k.value
        };
      }, S = (M) => {
        const D = v.value.slice(0, M), b = v.value.slice(M + 1), R = v.value.filter((P, W) => W !== M);
        return {
          areAllLeftTabsFixed: D.length > 0 && D.every((P) => P.fixedTab),
          areAllRightTabsFixed: b.length > 0 && b.every((P) => P.fixedTab),
          areAllOtherTabsFixed: R.length > 0 && R.every((P) => P.fixedTab),
          areAllTabsFixed: v.value.every((P) => P.fixedTab)
        };
      };
      return { menuItems: E(() => {
        const { clickedIndex: M, currentTab: D, isLastTab: b, isOneTab: R, isCurrentTab: P } = h(), W = S(M);
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
            disabled: M === 0 || W.areAllLeftTabsFixed
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
            disabled: R || W.areAllOtherTabsFixed
          },
          {
            key: "all",
            label: t("worktab.btn.closeAll"),
            icon: "ri:close-circle-line",
            disabled: R || W.areAllTabsFixed
          }
        ];
      }) };
    }, U = () => {
      const h = () => {
        p.value.transition = "transform 0.5s cubic-bezier(0.15, 0, 0.15, 1)", setTimeout(() => {
          p.value.transition = "";
        }, 250);
      }, S = () => document.getElementById(`scroll-li-${I.value}`), x = () => {
        if (!m.value || !g.value) return;
        const b = m.value.offsetWidth, R = g.value.offsetWidth, P = S();
        if (!P) return;
        const { offsetLeft: W, clientWidth: ce } = P, re = W + ce, ve = b - re;
        return {
          scrollWidth: b,
          ulWidth: R,
          offsetLeft: W,
          clientWidth: ce,
          curTabRight: re,
          targetLeft: ve
        };
      };
      return {
        setTransition: h,
        autoPositionTab: () => {
          const b = x();
          if (!b) return;
          const { scrollWidth: R, ulWidth: P, offsetLeft: W, curTabRight: ce, targetLeft: re } = b;
          W > Math.abs(p.value.translateX) && ce <= R || p.value.translateX < re && re < 0 || requestAnimationFrame(() => {
            ce > R ? p.value.translateX = Math.max(re - 6, R - P) : W < Math.abs(p.value.translateX) && (p.value.translateX = -W);
          });
        },
        adjustPositionAfterClose: () => {
          const b = x();
          if (!b) return;
          const { scrollWidth: R, ulWidth: P, offsetLeft: W, clientWidth: ce } = b, re = W + ce;
          requestAnimationFrame(() => {
            p.value.translateX = re > R ? R - P : 0;
          });
        }
      };
    }, V = () => {
      const { setTransition: h, adjustPositionAfterClose: S } = U(), x = (W) => {
        if (!m.value || !g.value || (W.preventDefault(), g.value.offsetWidth <= m.value.offsetWidth)) return;
        const ce = 0, re = m.value.offsetWidth - g.value.offsetWidth, ve = Math.abs(W.deltaX) > Math.abs(W.deltaY) ? W.deltaX : W.deltaY;
        p.value.translateX = Math.min(
          Math.max(p.value.translateX - ve, re),
          ce
        );
      }, M = (W) => {
        H.value.startX = W.touches[0].clientX;
      }, D = (W) => {
        if (!m.value || !g.value) return;
        H.value.currentX = W.touches[0].clientX;
        const ce = H.value.currentX - H.value.startX, re = m.value.offsetWidth - g.value.offsetWidth;
        p.value.translateX = Math.min(
          Math.max(p.value.translateX + ce, re),
          0
        ), H.value.startX = H.value.currentX;
      }, b = () => {
        h();
      };
      return {
        setupEventListeners: () => {
          g.value && (g.value.addEventListener("wheel", x, { passive: !1 }), g.value.addEventListener("touchstart", M, { passive: !0 }), g.value.addEventListener("touchmove", D, { passive: !0 }), g.value.addEventListener("touchend", b, { passive: !0 }));
        },
        cleanupEventListeners: () => {
          g.value && (g.value.removeEventListener("wheel", x), g.value.removeEventListener("touchstart", M), g.value.removeEventListener("touchmove", D), g.value.removeEventListener("touchend", b));
        },
        adjustPositionAfterClose: S
      };
    }, K = (h) => {
      const S = (b) => {
        c.push({
          path: b.path,
          query: b.query
        });
      }, x = (b, R) => {
        const P = typeof R == "string" ? R : s.path;
        ({
          current: () => n.removeTab(P),
          left: () => n.removeLeft(P),
          right: () => n.removeRight(P),
          other: () => n.removeOthers(P),
          all: () => n.removeAll()
        })[b]?.(), setTimeout(() => {
          h();
        }, 100);
      };
      return {
        clickTab: S,
        closeWorktab: x,
        showMenu: (b, R) => {
          $.value = R || "", C.value?.show(b), b.preventDefault(), b.stopPropagation();
        },
        handleSelect: (b) => {
          const { key: R } = b;
          if (R === "refresh") {
            xe().refresh();
            return;
          }
          if (R === "fixed") {
            He().toggleFixedTab($.value);
            return;
          }
          const P = v.value.findIndex((ve) => ve.path === k.value), W = v.value.findIndex((ve) => ve.path === $.value);
          ({
            left: P < W,
            right: P > W,
            other: !0
          })[R] && c.push($.value), x(R, $.value);
        }
      };
    }, { menuItems: Z } = T(), { setTransition: ae, autoPositionTab: q } = U(), { setupEventListeners: le, cleanupEventListeners: B, adjustPositionAfterClose: L } = V(), { clickTab: a, closeWorktab: d, showMenu: _, handleSelect: F } = K(L);
    return Ae(() => {
      le(), q();
    }), Ce(() => {
      B();
    }), he(
      () => r.value,
      () => {
        ae(), q();
      }
    ), he(
      () => ut().value,
      () => {
        p.value.translateX = 0, be(() => {
          q();
        });
      }
    ), (h, S) => l(o) ? (f(), y("div", ao, [
      u("div", {
        class: "work-tab__scroll",
        ref_key: "scrollRef",
        ref: m
      }, [
        u("ul", {
          class: "work-tab__list",
          ref_key: "tabsRef",
          ref: g,
          style: J({
            transform: `translateX(${p.value.translateX}px)`,
            transition: `${p.value.transition}`
          })
        }, [
          (f(!0), y(Y, null, ee(v.value, (x, M) => (f(), y("li", {
            class: oe(["work-tab__item ao-card-xs", [
              x.path === k.value ? "work-tab__item--active activ-tab" : "work-tab__item--inactive"
            ]]),
            style: J({ padding: x.fixedTab ? "0 10px" : "0 8px 0 12px" }),
            key: x.path,
            ref_for: !0,
            ref: x.path,
            id: `scroll-li-${M}`,
            onClick: (D) => l(a)(x),
            onContextmenu: Ee((D) => l(_)(D, x.path), ["prevent"])
          }, [
            Se(O(x.customTitle || l(ge)(x.title)) + " ", 1),
            v.value.length > 1 && !x.fixedTab ? (f(), y("span", {
              key: 0,
              class: "work-tab__close",
              onClick: Ee((D) => l(d)("current", x.path), ["stop"])
            }, [
              A(l(X), {
                icon: "ri:close-large-fill",
                class: "work-tab__close-icon"
              })
            ], 8, io)) : z("", !0)
          ], 46, lo))), 128))
        ], 4)
      ], 512),
      A(so, {
        ref_key: "menuRef",
        ref: C,
        "menu-items": l(Z),
        "menu-width": 140,
        "border-radius": 10,
        onSelect: l(F)
      }, null, 8, ["menu-items", "onSelect"])
    ])) : z("", !0);
  }
}), co = /* @__PURE__ */ ne(ro, [["__scopeId", "data-v-0878478c"]]), Ve = Le("appStore", () => {
  const e = w(!1), t = w(!1);
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
}), uo = [
  { value: De.ZH, label: "简体中文" },
  { value: De.EN, label: "English" }
];
function $e() {
  const e = te(), t = () => {
    const o = document.createElement("style");
    o.setAttribute("id", "disable-transitions"), o.textContent = "* { transition: none !important; }", document.head.appendChild(o);
  }, n = () => {
    const o = document.getElementById("disable-transitions");
    o && o.remove();
  }, s = (o, m) => {
    t();
    const g = document.getElementsByTagName("html")[0], C = o === j.DARK;
    m || (m = o);
    const p = fe.systemThemeStyles[o];
    p && g.setAttribute("class", p.className);
    const H = e.systemThemeColor;
    for (let $ = 1; $ <= 9; $++)
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${$}`,
        C ? `${Ne(H, $ / 10)}` : `${ft(H, $ / 10)}`
      );
    e.setGlopTheme(o, m), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        n();
      });
    });
  }, c = it(), r = () => {
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
function ba() {
  const e = te(), t = it(), n = () => {
    const s = document.getElementsByTagName("html")[0];
    let c = e.systemThemeType;
    e.systemThemeMode === j.AUTO && (c = t.value ? j.DARK : j.LIGHT, e.systemThemeType = c);
    const r = fe.systemThemeStyles[c];
    r && s.setAttribute("class", r.className), gt(e.systemThemeColor);
  };
  n(), e.systemThemeMode === j.AUTO && he(
    t,
    () => {
      e.systemThemeMode === j.AUTO && n();
    },
    { immediate: !1 }
  );
}
const { LIGHT: Xe, DARK: ho } = j, mo = (e) => {
  const t = e.clientX, n = e.clientY, s = Math.hypot(Math.max(t, innerWidth - t), Math.max(n, innerHeight - n));
  document.documentElement.style.setProperty("--x", t + "px"), document.documentElement.style.setProperty("--y", n + "px"), document.documentElement.style.setProperty("--r", s + "px"), document.startViewTransition ? document.startViewTransition(() => ze()) : ze();
}, ze = () => {
  $e().switchThemeStyles(te().systemThemeType === Xe ? ho : Xe), xe().refresh();
};
function fo() {
  const e = te(), t = E(() => Fe), { showMenuButton: n, showFastEnter: s, showLanguage: c, showNotification: r } = se(e), i = (q) => t.value[q]?.enabled ?? !1, o = (q) => t.value[q], m = E(() => i("menuButton") && n.value), g = E(() => i("fastEnter") && s.value), C = E(() => i("globalSearch")), p = E(() => i("fullscreen")), H = E(() => i("notification") && r.value), $ = E(() => i("language") && c.value), v = E(() => i("settings")), k = E(() => i("themeToggle")), I = E(() => o("fastEnter")?.minWidth || 1200), T = (q) => i(q), U = (q) => o(q), V = () => Object.keys(t.value).filter(
    (q) => t.value[q]?.enabled
  ), K = () => Object.keys(t.value).filter(
    (q) => !t.value[q]?.enabled
  );
  return {
    // 配置
    headerBarConfig: t,
    // 显示状态计算属性
    shouldShowMenuButton: m,
    // 是否显示菜单按钮
    shouldShowFastEnter: g,
    // 是否显示快速入口
    shouldShowGlobalSearch: C,
    // 是否显示全局搜索
    shouldShowFullscreen: p,
    // 是否显示全屏按钮
    shouldShowNotification: H,
    // 是否显示通知中心
    shouldShowLanguage: $,
    // 是否显示语言切换
    shouldShowSettings: v,
    // 是否显示设置面板
    shouldShowThemeToggle: k,
    // 是否显示主题切换
    // 配置相关
    fastEnterMinWidth: I,
    // 快速入口最小宽度
    // 方法
    isFeatureEnabled: i,
    // 检查功能是否启用
    isFeatureActive: T,
    // 检查功能是否启用（别名）
    getFeatureConfig: o,
    // 获取功能配置
    getFeatureInfo: U,
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
const go = { class: "user-menu" }, vo = { class: "user-menu__header" }, po = { class: "user-menu__info" }, yo = { class: "user-menu__name" }, bo = { class: "user-menu__email" }, _o = { class: "user-menu__list" }, xo = /* @__PURE__ */ Q({
  name: "AoUserMenu",
  __name: "AoUserMenu",
  setup(e) {
    const t = E(() => on()), { t: n } = we(), s = w(), c = () => {
      Te.info("正在开发中");
    }, r = () => {
      i(), setTimeout(() => {
        wt.confirm(n("common.logOutTips"), n("common.tips"), {
          confirmButtonText: n("common.confirm"),
          cancelButtonText: n("common.cancel"),
          customClass: "login-out-dialog"
        }).then(() => {
          an();
        });
      }, 200);
    }, i = () => {
      setTimeout(() => {
        s.value.hide();
      }, 100);
    };
    return (o, m) => (f(), G(l(Tt), {
      ref_key: "userMenuPopover",
      ref: s,
      placement: "bottom-end",
      width: 240,
      "hide-after": 0,
      offset: 10,
      trigger: "hover",
      "show-arrow": !1,
      "popper-class": "user-menu-popover",
      "popper-style": "padding: 5px 16px;"
    }, {
      reference: N(() => [...m[0] || (m[0] = [
        u("img", {
          class: "user-avatar",
          src: "https://dummyimage.com/160x160.png",
          alt: "avatar"
        }, null, -1)
      ])]),
      default: N(() => [
        u("div", go, [
          u("div", vo, [
            m[1] || (m[1] = u("img", {
              class: "user-menu__avatar",
              src: "https://dummyimage.com/160x160.png"
            }, null, -1)),
            u("div", po, [
              u("span", yo, O(t.value?.userName), 1),
              u("span", bo, O(t.value?.email), 1)
            ])
          ]),
          u("ul", _o, [
            u("li", {
              class: "btn-item",
              onClick: c
            }, [
              A(l(X), { icon: "ri:user-3-line" }),
              u("span", null, O(o.$t("topBar.user.userCenter")), 1)
            ]),
            m[2] || (m[2] = u("div", { class: "user-menu__divider" }, null, -1)),
            u("div", {
              class: "log-out",
              onClick: r
            }, O(o.$t("topBar.user.logout")), 1)
          ])
        ])
      ]),
      _: 1
    }, 512));
  }
}), Ao = /* @__PURE__ */ ne(xo, [["__scopeId", "data-v-ec1c4f21"]]), To = { class: "header-bar" }, wo = { class: "header-bar__inner" }, So = { class: "header-bar__left" }, ko = { class: "header-bar__right" }, Co = { class: "search-box__left" }, Eo = { class: "search-box__text" }, Mo = { class: "search-box__shortcut" }, Bo = { class: "menu-txt" }, Lo = /* @__PURE__ */ Q({
  name: "AoHeaderBar",
  __name: "index",
  setup(e) {
    const t = ut(), n = sn(), s = navigator.userAgent.includes("Windows"), c = Be(), { locale: r } = we(), { width: i } = rt(), o = te(), m = Ve(), {
      shouldShowMenuButton: g,
      shouldShowFastEnter: C,
      shouldShowGlobalSearch: p,
      shouldShowFullscreen: H,
      shouldShowNotification: $,
      shouldShowLanguage: v,
      shouldShowSettings: k,
      shouldShowThemeToggle: I,
      fastEnterMinWidth: T
    } = fo(), { menuOpen: U, isDark: V } = se(o), K = w(!1), { isFullscreen: Z, toggle: ae } = Ht();
    Ae(() => {
      d(), document.addEventListener("click", S);
    }), Ce(() => {
      document.removeEventListener("click", S);
    });
    const q = () => {
      ae();
    }, le = () => {
      o.setMenuOpen(!U.value);
    }, { homePath: B, refresh: L } = xe(), a = () => {
      c.push(B.value);
    }, d = () => {
      r.value = t.value;
    }, _ = (M) => {
      r.value !== M && (r.value = M, t.value = M, n?.(M), setTimeout(L, 50));
    }, F = () => {
      m.openGlobalSearch();
    }, h = () => {
      m.openSettingsPanel();
    }, S = (M) => {
      if (!K.value) return;
      const D = M.target, b = D.closest(".notice-button"), R = D.closest(".ao-notification-panel");
      !b && !R && (K.value = !1);
    }, x = () => {
      K.value = !K.value;
    };
    return (M, D) => (f(), y("div", To, [
      u("div", wo, [
        u("div", So, [
          A(l(tt), {
            class: "header-bar__logo-hidden",
            onClick: a
          }),
          l(g) ? (f(), G(l(pe), {
            key: 0,
            icon: "ri:menu-2-fill",
            class: "header-bar__menu-btn",
            onClick: le
          })) : z("", !0),
          l(C) && l(i) >= l(T) ? (f(), G(dn, { key: 1 }, {
            default: N(() => [
              A(l(pe), {
                icon: "ri:function-line",
                class: "header-bar__fast-enter-btn"
              })
            ]),
            _: 1
          })) : z("", !0),
          A(co)
        ]),
        u("div", ko, [
          l(p) ? (f(), y("div", {
            key: 0,
            class: "search-box",
            onClick: F
          }, [
            u("div", Co, [
              A(l(X), {
                icon: "ri:search-line",
                class: "search-box__icon"
              }),
              u("span", Eo, O(M.$t("topBar.search.title")), 1)
            ]),
            u("div", Mo, [
              l(s) ? (f(), G(l(X), {
                key: 0,
                icon: "vaadin:ctrl-a",
                class: "search-box__shortcut-icon"
              })) : (f(), G(l(X), {
                key: 1,
                icon: "ri:command-fill",
                class: "search-box__shortcut-icon-mac"
              })),
              D[1] || (D[1] = u("span", { class: "search-box__shortcut-key" }, "k", -1))
            ])
          ])) : z("", !0),
          l(H) ? (f(), G(l(pe), {
            key: 1,
            icon: l(Z) ? "ri:fullscreen-exit-line" : "ri:fullscreen-fill",
            class: oe([
              l(Z) ? "exit-full-screen-btn" : "full-screen-btn",
              "header-bar__fullscreen-btn"
            ]),
            onClick: q
          }, null, 8, ["icon", "class"])) : z("", !0),
          l(v) ? (f(), G(l(nt), {
            key: 2,
            onCommand: _,
            "popper-class": "langDropDownStyle"
          }, {
            dropdown: N(() => [
              A(l(ot), null, {
                default: N(() => [
                  (f(!0), y(Y, null, ee(l(uo), (b) => (f(), y("div", {
                    key: b.value,
                    class: "lang-btn-item"
                  }, [
                    A(l(st), {
                      command: b.value,
                      class: oe({ "is-selected": l(r) === b.value })
                    }, {
                      default: N(() => [
                        u("span", Bo, O(b.label), 1),
                        l(r) === b.value ? (f(), G(l(X), {
                          key: 0,
                          icon: "ri:check-fill"
                        })) : z("", !0)
                      ]),
                      _: 2
                    }, 1032, ["command", "class"])
                  ]))), 128))
                ]),
                _: 1
              })
            ]),
            default: N(() => [
              A(l(pe), {
                icon: "ri:translate-2",
                class: "language-btn header-bar__language-btn"
              })
            ]),
            _: 1
          })) : z("", !0),
          l($) ? (f(), G(l(pe), {
            key: 3,
            icon: "ri:notification-2-line",
            class: "notice-button header-bar__notice-btn",
            onClick: x
          }, {
            default: N(() => [...D[2] || (D[2] = [
              u("div", { class: "notice-dot" }, null, -1)
            ])]),
            _: 1
          })) : z("", !0),
          l(k) ? (f(), G(l(pe), {
            key: 4,
            icon: "ri:settings-line",
            class: "setting-btn",
            onClick: h
          })) : z("", !0),
          l(I) ? (f(), G(l(pe), {
            key: 5,
            onClick: l(mo),
            icon: l(V) ? "ri:sun-fill" : "ri:moon-line"
          }, null, 8, ["onClick", "icon"])) : z("", !0),
          A(Ao)
        ])
      ]),
      A(Rn, {
        value: K.value,
        "onUpdate:value": D[0] || (D[0] = (b) => K.value = b),
        ref: "notice"
      }, null, 8, ["value"])
    ]));
  }
}), $o = /* @__PURE__ */ ne(Lo, [["__scopeId", "data-v-411c42c2"]]), Io = "--ao-header-height", Do = "--ao-content-header-height";
function pt(e, t) {
  const { height: n } = Ke(
    e,
    { width: 0, height: 0 },
    { box: "border-box" }
  ), { height: s } = Ke(
    t,
    { width: 0, height: 0 },
    { box: "border-box" }
  );
  return bt(() => {
    const c = n.value, r = s.value;
    typeof document > "u" || requestAnimationFrame(() => {
      const i = document.documentElement.style;
      i.setProperty(Io, `${c}px`), i.setProperty(Do, `${r}px`);
    });
  }), { headerHeight: n, contentHeaderHeight: s };
}
function _a() {
  const e = w(), t = w(), { headerHeight: n, contentHeaderHeight: s } = pt(e, t);
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
function Ho(e = ["app-header", "app-content-header"]) {
  const t = w(), n = w(), { headerHeight: s, contentHeaderHeight: c } = pt(t, n);
  return Ae(() => {
    typeof document > "u" || requestAnimationFrame(() => {
      const r = document.getElementById(e[0]), i = document.getElementById(e[1]);
      r && (t.value = r), i && (n.value = i);
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
const Oo = { id: "app-content-header" }, Fo = {
  key: 0,
  class: "route-info-debug"
}, Ro = { class: "transition-mask" }, Po = /* @__PURE__ */ Q({
  name: "AoPageContent",
  __name: "AoPageContent",
  setup(e) {
    const t = Oe();
    Ho();
    const { refresh: n } = se(te()), { keepAliveExclude: s } = se(He()), c = E(() => {
      const v = new Set(s.value);
      return !t.meta.keepAlive && typeof t.name == "string" && v.add(t.name), [...v];
    }), r = _t(!0), i = void 0, o = w(!1), m = w(!0), g = E(() => t.matched.some((v) => v.meta?.isFullPage)), C = w(g.value), p = E(() => m.value || C.value && !g.value ? "" : "slide-left");
    he(g, (v, k) => {
      v !== k && (o.value = !0, setTimeout(() => {
        o.value = !1;
      }, 50)), be(() => {
        C.value = v;
      });
    });
    const H = {
      minHeight: "var(--ao-full-height)"
    };
    return he(n, () => {
      r.value = !1, be(() => {
        r.value = !0;
      });
    }, { flush: "post" }), Ae(() => {
      be(() => {
        m.value = !1;
      });
    }), (v, k) => {
      const I = Ze("RouterView");
      return f(), y("div", {
        class: oe(["layout-content", { "layout-content--full-page": g.value }])
      }, [
        u("div", Oo, [
          l(i) === "true" ? (f(), y("div", Fo, " router meta：" + O(l(t).meta), 1)) : z("", !0)
        ]),
        r.value ? (f(), G(I, {
          key: 0,
          style: H
        }, {
          default: N(({ Component: T, route: U }) => [
            A(Je, {
              name: o.value ? "" : p.value,
              mode: "out-in",
              appear: ""
            }, {
              default: N(() => [
                (f(), G(xt, {
                  max: 10,
                  exclude: c.value
                }, [
                  (f(), G(Ye(T), {
                    class: "ao-page-view",
                    key: U.path
                  }))
                ], 1032, ["exclude"]))
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 1
        })) : z("", !0),
        (f(), G(At, { to: "body" }, [
          ue(u("div", Ro, null, 512), [
            [de, o.value]
          ])
        ]))
      ], 2);
    };
  }
}), No = /* @__PURE__ */ ne(Po, [["__scopeId", "data-v-53dbfe85"]]), Vo = { class: "menu-icon" }, Wo = { class: "menu-name" }, Uo = {
  key: 0,
  class: "ao-badge",
  style: { right: "10px" }
}, Go = { class: "menu-icon" }, Ko = {
  class: "ao-badge",
  style: { right: "5px" }
}, qo = { class: "menu-name" }, Xo = {
  key: 0,
  class: "ao-badge"
}, zo = {
  key: 1,
  class: "ao-text-badge"
}, jo = /* @__PURE__ */ Q({
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
    const n = e, s = t, c = te(), { menuOpen: r } = se(c), i = E(() => C(n.list)), o = (v) => {
      m(), vt(v);
    }, m = () => {
      s("close");
    }, g = (v) => !!(!v.meta.isHide && (v.path && v.path.trim() || v.meta.link || v.meta.isIframe === !0) && (v.component || v.meta.link || v.meta.isIframe === !0)), C = (v) => v.filter((k) => k.meta.isHide ? !1 : k.children && k.children.length > 0 && C(k.children).length > 0 || g(k)).map((k) => ({
      ...k,
      children: k.children ? C(k.children) : void 0
    })), p = (v) => !v.children || v.children.length === 0 ? !1 : C(v.children).length > 0, H = (v) => !!(v.meta.link && !v.meta.isIframe), $ = (v, k) => `${v.path || v.meta.title || "menu"}-${n.level}-${k}`;
    return (v, k) => {
      const I = Ze("SidebarSubmenu", !0);
      return f(!0), y(Y, null, ee(i.value, (T, U) => (f(), y(Y, {
        key: $(T, U)
      }, [
        p(T) ? (f(), G(l(St), {
          key: 0,
          index: T.path || T.meta.title,
          level: e.level
        }, {
          title: N(() => [
            u("div", Vo, [
              A(l(X), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: J({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            u("span", Wo, O(l(ge)(T.meta.title)), 1),
            T.meta.showBadge ? (f(), y("div", Uo)) : z("", !0)
          ]),
          default: N(() => [
            A(I, {
              list: T.children,
              "is-mobile": e.isMobile,
              level: e.level + 1,
              theme: e.theme,
              onClose: m
            }, null, 8, ["list", "is-mobile", "level", "theme"])
          ]),
          _: 2
        }, 1032, ["index", "level"])) : (f(), G(l(kt), {
          key: 1,
          index: H(T) ? T.meta.title : T.path || T.meta.title,
          "level-item": e.level + 1,
          onClick: (V) => o(T)
        }, {
          title: N(() => [
            u("span", qo, O(l(ge)(T.meta.title)), 1),
            T.meta.showBadge ? (f(), y("div", Xo)) : z("", !0),
            T.meta.showTextBadge && (e.level > 0 || l(r)) ? (f(), y("div", zo, O(T.meta.showTextBadge), 1)) : z("", !0)
          ]),
          default: N(() => [
            u("div", Go, [
              A(l(X), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: J({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            ue(u("div", Ko, null, 512), [
              [de, T.meta.showBadge && e.level === 0 && !l(r)]
            ])
          ]),
          _: 2
        }, 1032, ["index", "level-item", "onClick"]))
      ], 64))), 128);
    };
  }
}), Yo = /* @__PURE__ */ ne(jo, [["__scopeId", "data-v-c56496ea"]]), Qo = {
  key: 0,
  class: "layout-sidebar"
}, je = 800, Jo = 350, Zo = /* @__PURE__ */ Q({
  name: "AoSidebarMenu",
  __name: "index",
  setup(e) {
    const t = Oe(), n = Be(), s = te(), { uniqueOpened: c, menuOpen: r, getMenuTheme: i } = se(s), o = w([]), m = w(!1), g = w(!1), { width: C } = rt(), p = E(() => C.value < je), H = E(() => String(t.meta.activePath || t.path)), $ = E(() => ke().menuList), v = E(() => ({
      transform: "translateY(0)",
      height: "calc(100% - 60px)",
      transition: "transform 0.3s ease"
    })), { start: k } = Ot(
      () => {
        g.value = !1;
      },
      Jo,
      { immediate: !1 }
    ), { homePath: I } = xe(), T = () => {
      n.push(I.value);
    }, U = () => {
      s.setMenuOpen(!r.value), p.value && (r.value ? k() : g.value = !0);
    }, V = () => {
      p.value && (s.setMenuOpen(!1), k());
    };
    return he(C, (K) => {
      K < je ? (s.setMenuOpen(!1), r.value || (g.value = !1)) : g.value = !1;
    }), he(r, (K) => {
      p.value ? K ? g.value = !0 : k() : g.value = !1;
    }), (K, Z) => $.value.length > 0 ? (f(), y("div", Qo, [
      u("div", {
        class: oe(["menu-left", `menu-left-${l(i).theme} menu-left-${l(r) ? "open" : "close"}`]),
        style: J({
          background: l(i).background
        })
      }, [
        u("div", {
          class: "header",
          onClick: T,
          style: J({
            background: l(i).background
          })
        }, [
          A(l(tt), { class: "logo" }),
          u("p", {
            class: "system-name",
            style: J({
              color: l(i).systemNameColor,
              opacity: l(r) ? 1 : 0
            })
          }, O(l(dt)()), 5)
        ], 4),
        A(l(lt), {
          style: J(v.value)
        }, {
          default: N(() => [
            A(l(Ct), {
              class: oe("el-menu-" + l(i).theme),
              collapse: !l(r),
              "default-active": H.value,
              "text-color": l(i).textColor,
              "unique-opened": l(c),
              "background-color": l(i).background,
              "default-openeds": o.value,
              "popper-class": `menu-left-popper menu-left-${l(i).theme}-popper`,
              "show-timeout": 50,
              "hide-timeout": 50
            }, {
              default: N(() => [
                A(Yo, {
                  list: $.value,
                  isMobile: m.value,
                  theme: l(i),
                  onClose: V
                }, null, 8, ["list", "isMobile", "theme"])
              ]),
              _: 1
            }, 8, ["class", "collapse", "default-active", "text-color", "unique-opened", "background-color", "default-openeds", "popper-class"])
          ]),
          _: 1
        }, 8, ["style"]),
        u("div", {
          class: "menu-model",
          onClick: U,
          style: J({
            opacity: l(r) ? 1 : 0,
            transform: g.value ? "scale(1)" : "scale(0)"
          })
        }, null, 4)
      ], 6)
    ])) : z("", !0);
  }
}), es = /* @__PURE__ */ ne(Zo, [["__scopeId", "data-v-4a1b5b01"]]), ts = { class: "app-layout" }, ns = { id: "app-sidebar" }, os = { id: "app-main" }, ss = { id: "app-header" }, as = { id: "app-content" }, ls = { id: "app-global" }, is = /* @__PURE__ */ Q({
  name: "AppLayout",
  __name: "AppLayout",
  setup(e) {
    return (t, n) => (f(), y("div", ts, [
      u("aside", ns, [
        A(es)
      ]),
      u("main", os, [
        u("div", ss, [
          A($o)
        ]),
        u("div", as, [
          A(No)
        ])
      ]),
      u("div", ls, [
        A(cn)
      ])
    ]));
  }
}), xa = /* @__PURE__ */ ne(is, [["__scopeId", "data-v-0f8d5f92"]]), Aa = {
  install(e, t = {}) {
    console.info(`[ao-admin-layout] v${Zt}`), tn(t), t.i18n && (t.i18n.global.mergeLocaleMessage("zh", Kt), t.i18n.global.mergeLocaleMessage("en", Jt));
  }
};
function We() {
  const e = te(), t = {
    // 设置body类名
    setBodyClass: (r, i) => {
      const o = document.getElementsByTagName("body")[0];
      i ? o.classList.add(r) : o.classList.remove(r);
    }
  }, n = (r, i) => () => {
    r(), i?.();
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
function rs() {
  const e = te(), t = Ve(), { systemThemeType: n, systemThemeMode: s } = se(e), { showSettingsPanel: c } = se(t), { setSystemTheme: r, setSystemAutoTheme: i } = $e(), { domOperations: o } = We(), g = Ft({ tablet: 1e3 }).smaller("tablet"), C = E(() => e.systemThemeColor), p = () => {
    const I = () => {
      fe.systemMainColor.includes(C.value) || (e.setElementTheme(fe.systemMainColor[0]), e.reload());
    }, T = () => {
      s.value === j.AUTO ? i() : r(n.value);
    };
    return {
      initSystemColor: I,
      initSystemTheme: T,
      listenerSystemTheme: () => {
        const V = window.matchMedia("(prefers-color-scheme: dark)");
        return V.addEventListener("change", T), () => {
          V.removeEventListener("change", T);
        };
      }
    };
  }, H = () => ({ stopWatch: he(
    g,
    (T) => {
      T ? e.setMenuOpen(!1) : e.setMenuOpen(!0);
    },
    { immediate: !0 }
  ) });
  return {
    // 状态
    showDrawer: c,
    // 方法组合
    useThemeHandlers: p,
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
        (T) => {
          T !== void 0 && (c.value = T);
        }
      );
    },
    useSettingsInitializer: () => {
      const I = p(), { stopWatch: T } = H();
      let U = null;
      return {
        initializeSettings: () => {
          I.initSystemColor(), U = I.listenerSystemTheme(), I.initSystemTheme();
        },
        cleanupSettings: () => {
          T(), U?.();
        }
      };
    }
  };
}
const cs = { class: "setting-drawer" }, us = { class: "drawer-con" }, ds = /* @__PURE__ */ Q({
  __name: "SettingDrawer",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: t }) {
    const n = e, s = t, c = E({
      get: () => n.modelValue,
      set: (m) => s("update:modelValue", m)
    }), r = () => {
      s("open");
    }, i = () => {
      s("close");
    }, o = () => {
      c.value = !1;
    };
    return (m, g) => (f(), y("div", cs, [
      A(l(Et), {
        size: "300px",
        modelValue: c.value,
        "onUpdate:modelValue": g[0] || (g[0] = (C) => c.value = C),
        "lock-scroll": !0,
        "with-header": !1,
        "before-close": o,
        "destroy-on-close": !1,
        "modal-class": "setting-modal",
        onOpen: r,
        onClose: i
      }, {
        default: N(() => [
          u("div", us, [
            Qe(m.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ]));
  }
}), hs = { class: "header-actions" }, ms = /* @__PURE__ */ Q({
  __name: "SettingHeader",
  emits: ["close"],
  setup(e) {
    return (t, n) => (f(), y("div", null, [
      u("div", hs, [
        u("div", {
          onClick: n[0] || (n[0] = (s) => t.$emit("close")),
          class: "close-btn"
        }, [
          A(l(X), {
            icon: "ri:close-fill",
            class: "close-btn-icon"
          })
        ])
      ])
    ]));
  }
}), fs = /* @__PURE__ */ ne(ms, [["__scopeId", "data-v-3b08ee22"]]), gs = /* @__PURE__ */ Q({
  __name: "SectionTitle",
  props: {
    title: {},
    style: {}
  },
  setup(e) {
    return (t, n) => (f(), y("p", {
      class: "section-title",
      style: J(e.style)
    }, O(e.title), 5));
  }
}), Ie = /* @__PURE__ */ ne(gs, [["__scopeId", "data-v-c6cd32c9"]]);
function Ue() {
  const { t: e } = we(), t = {
    // 主题色彩选项
    mainColors: fe.systemMainColor,
    // 主题风格选项
    themeList: fe.settingThemeList
  }, n = E(() => [
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
  ].filter((c) => c.headerBarKey === null ? !0 : Fe[c.headerBarKey]?.enabled !== !1).map(({ headerBarKey: c, ...r }) => r));
  return {
    // 选项配置
    configOptions: t,
    // 设置项配置
    basicSettingsConfig: n
  };
}
const vs = { class: "setting-box-wrap" }, ps = ["onClick"], ys = ["src"], bs = { class: "name" }, _s = /* @__PURE__ */ Q({
  __name: "ThemeSettings",
  setup(e) {
    const t = te(), { systemThemeMode: n } = se(t), { configOptions: s } = Ue(), { switchThemeStyles: c } = $e();
    return (r, i) => (f(), y(Y, null, [
      A(Ie, {
        title: r.$t("setting.theme.title")
      }, null, 8, ["title"]),
      u("div", vs, [
        (f(!0), y(Y, null, ee(l(s).themeList, (o, m) => (f(), y("div", {
          class: "setting-item",
          key: o.theme,
          onClick: (g) => l(c)(o.theme)
        }, [
          u("div", {
            class: oe(["box", { "is-active": o.theme === l(n) }])
          }, [
            u("img", {
              src: o.img
            }, null, 8, ys)
          ], 2),
          u("p", bs, O(r.$t(`setting.theme.list[${m}]`)), 1)
        ], 8, ps))), 128))
      ])
    ], 64));
  }
}), xs = { class: "setting-box-wrap" }, As = ["onClick"], Ts = ["src"], ws = /* @__PURE__ */ Q({
  __name: "MenuStyleSettings",
  setup(e) {
    const t = fe.themeList, n = te(), { menuThemeType: s, isDark: c } = se(n), r = E(() => c.value), i = (o) => {
      c.value || n.switchMenuStyles(o);
    };
    return (o, m) => (f(), y(Y, null, [
      A(Ie, {
        title: o.$t("setting.menu.title")
      }, null, 8, ["title"]),
      u("div", xs, [
        (f(!0), y(Y, null, ee(l(t), (g) => (f(), y("div", {
          class: "setting-item",
          key: g.theme,
          onClick: (C) => i(g.theme)
        }, [
          u("div", {
            class: oe(["box", { "is-active": g.theme === l(s) }]),
            style: J({
              cursor: r.value ? "no-drop" : "pointer"
            })
          }, [
            u("img", {
              src: g.img
            }, null, 8, Ts)
          ], 6)
        ], 8, As))), 128))
      ])
    ], 64));
  }
}), Ss = { class: "color-list-wrapper" }, ks = { class: "color-list" }, Cs = ["onClick"], Es = /* @__PURE__ */ Q({
  __name: "ColorSettings",
  setup(e) {
    const t = te(), { systemThemeColor: n } = se(t), { configOptions: s } = Ue(), { colorHandlers: c } = We();
    return (r, i) => (f(), y("div", null, [
      A(Ie, {
        title: r.$t("setting.color.title"),
        class: "color-section-title"
      }, null, 8, ["title"]),
      u("div", Ss, [
        u("div", ks, [
          (f(!0), y(Y, null, ee(l(s).mainColors, (o) => (f(), y("div", {
            key: o,
            class: "color-item",
            style: J({ background: `${o} !important` }),
            onClick: (m) => l(c).selectColor(o)
          }, [
            ue(A(l(X), {
              icon: "ri:check-fill",
              class: "color-check-icon"
            }, null, 512), [
              [de, o === l(n)]
            ])
          ], 12, Cs))), 128))
        ])
      ])
    ]));
  }
}), Ms = /* @__PURE__ */ ne(Es, [["__scopeId", "data-v-1d816e31"]]), Bs = { class: "setting-item" }, Ls = { class: "setting-label" }, $s = /* @__PURE__ */ Q({
  __name: "SettingItem",
  props: {
    config: {},
    modelValue: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, s = t, c = E(() => {
      if (!n.config.options) return [];
      try {
        return typeof n.config.options == "object" && "value" in n.config.options ? n.config.options.value || [] : Array.isArray(n.config.options) ? n.config.options : [];
      } catch (i) {
        return console.warn("Error processing options for config:", n.config.key, i), [];
      }
    }), r = (i) => {
      try {
        s("change", i);
      } catch (o) {
        console.error("Error handling change for config:", n.config.key, o);
      }
    };
    return (i, o) => (f(), y("div", Bs, [
      u("span", Ls, O(e.config.label), 1),
      e.config.type === "switch" ? (f(), G(l(Mt), {
        key: 0,
        "model-value": e.modelValue,
        onChange: r
      }, null, 8, ["model-value"])) : e.config.type === "input-number" ? (f(), G(l(Bt), {
        key: 1,
        "model-value": e.modelValue,
        min: e.config.min,
        max: e.config.max,
        step: e.config.step,
        style: J(e.config.style),
        "controls-position": e.config.controlsPosition,
        onChange: r
      }, null, 8, ["model-value", "min", "max", "step", "style", "controls-position"])) : e.config.type === "select" ? (f(), G(l(Lt), {
        key: 2,
        "model-value": e.modelValue,
        style: J(e.config.style),
        onChange: r
      }, {
        default: N(() => [
          (f(!0), y(Y, null, ee(c.value, (m) => (f(), G(l($t), {
            key: m.value,
            label: m.label,
            value: m.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "style"])) : z("", !0)
    ]));
  }
}), Is = /* @__PURE__ */ ne($s, [["__scopeId", "data-v-302f95e8"]]), Ds = /* @__PURE__ */ Q({
  __name: "BasicSettings",
  setup(e) {
    const t = te(), { basicSettingsConfig: n } = Ue(), { basicHandlers: s } = We(), {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: i,
      showWorkTab: o,
      showLanguage: m,
      showNotification: g
    } = se(t), C = {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: i,
      showWorkTab: o,
      showLanguage: m,
      showNotification: g
    }, p = ($) => C[$]?.value ?? null, H = ($, v) => {
      const k = s[$];
      typeof k == "function" ? k(v) : console.warn(`Handler "${$}" not found in basicHandlers`);
    };
    return ($, v) => (f(), y("div", null, [
      A(Ie, {
        title: $.$t("setting.basics.title"),
        class: "basic-settings-title"
      }, null, 8, ["title"]),
      (f(!0), y(Y, null, ee(l(n), (k) => (f(), G(Is, {
        key: k.key,
        config: k,
        "model-value": p(k.key),
        onChange: (I) => H(k.handler, I)
      }, null, 8, ["config", "model-value", "onChange"]))), 128))
    ]));
  }
}), Hs = /* @__PURE__ */ ne(Ds, [["__scopeId", "data-v-cbba06c8"]]), Os = { class: "setting-actions" }, Fs = /* @__PURE__ */ Q({
  name: "SettingActions",
  __name: "SettingActions",
  setup(e) {
    const { t } = we(), n = te(), { switchThemeStyles: s } = $e(), c = (i, o, m) => {
      i !== o && m();
    }, r = async () => {
      try {
        const i = ie;
        s(i.systemThemeMode), await be();
        const o = n.isDark ? ye.DARK : i.menuThemeType;
        n.switchMenuStyles(o), n.setElementTheme(i.systemThemeColor), c(
          n.showMenuButton,
          i.showMenuButton,
          () => n.setButton()
        ), c(
          n.showFastEnter,
          i.showFastEnter,
          () => n.setFastEnter()
        ), c(
          n.showLanguage,
          i.showLanguage,
          () => n.setLanguage()
        ), c(
          n.showNotification,
          i.showNotification,
          () => n.setNotification()
        ), n.setWorkTab(i.showWorkTab), c(
          n.uniqueOpened,
          i.uniqueOpened,
          () => n.setUniqueOpened()
        ), location.reload();
      } catch (i) {
        console.error("重置配置失败:", i), Te.error(t("setting.actions.resetFailed"));
      }
    };
    return (i, o) => (f(), y("div", Os, [
      A(l(at), {
        type: "danger",
        plain: "",
        class: "action-button",
        onClick: r
      }, {
        default: N(() => [
          Se(O(i.$t("setting.actions.resetConfig")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), Rs = /* @__PURE__ */ ne(Fs, [["__scopeId", "data-v-3d44080b"]]), Ps = { class: "layout-settings" }, Ns = /* @__PURE__ */ Q({
  name: "AoSettingsPanel",
  __name: "index",
  props: {
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = rs(), { showDrawer: s } = n, { handleOpen: c, handleClose: r, closeDrawer: i } = n.useDrawerControl(), { initializeSettings: o, cleanupSettings: m } = n.useSettingsInitializer();
    return n.usePropsWatcher(t), Ae(() => {
      o();
    }), Ce(() => {
      m();
    }), (g, C) => (f(), y("div", Ps, [
      A(ds, {
        modelValue: l(s),
        "onUpdate:modelValue": C[0] || (C[0] = (p) => et(s) ? s.value = p : null),
        onOpen: l(c),
        onClose: l(r)
      }, {
        default: N(() => [
          A(fs, { onClose: l(i) }, null, 8, ["onClose"]),
          A(_s),
          A(ws),
          A(Ms),
          A(Hs),
          A(Rs)
        ]),
        _: 1
      }, 8, ["modelValue", "onOpen", "onClose"])
    ]));
  }
}), Vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ns
}, Symbol.toStringTag, { value: "Module" })), Ws = Le(
  "aoSearchStore",
  () => {
    const e = w([]);
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
), Us = { class: "layout-search" }, Gs = { class: "search-input__suffix" }, Ks = { class: "result search-result" }, qs = ["onClick", "onMouseenter"], Xs = { class: "search-history__title" }, zs = { class: "search-history__list" }, js = ["onClick", "onMouseenter"], Ys = ["onClick"], Qs = { class: "dialog-footer" }, Js = { class: "dialog-footer__group dialog-footer__group--center" }, Zs = { class: "dialog-footer__text" }, ea = { class: "dialog-footer__group" }, ta = { class: "dialog-footer__text" }, na = { class: "dialog-footer__group" }, oa = { class: "dialog-footer__text" }, sa = 10, aa = /* @__PURE__ */ Q({
  name: "AoGlobalSearch",
  __name: "AoGlobalSearch",
  setup(e) {
    const t = Ws(), n = Ve(), s = E(() => ke().menuList), { showGlobalSearch: c } = se(n), r = w(""), i = w([]), { searchHistory: o } = se(t), m = w(null), g = w(0), C = w(0), p = w(), H = w(!1);
    he(c, (h) => {
      h && v();
    }), Ae(() => {
      document.addEventListener("keydown", $);
    }), Ce(() => {
      document.removeEventListener("keydown", $);
    });
    const $ = (h) => {
      (navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? h.metaKey : h.ctrlKey) && h.key.toLowerCase() === "k" && (h.preventDefault(), c.value = !0, v()), c.value && (h.key === "ArrowUp" ? (h.preventDefault(), T()) : h.key === "ArrowDown" ? (h.preventDefault(), U()) : h.key === "Enter" ? (h.preventDefault(), Z()) : h.key === "Escape" && (h.preventDefault(), c.value = !1));
    }, v = () => {
      setTimeout(() => {
        m.value?.focus();
      }, 100);
    }, k = (h) => {
      h ? i.value = I(s.value, h) : i.value = [];
    }, I = (h, S) => {
      const x = S.toLowerCase(), M = [], D = (b) => {
        if (b.meta?.isHide) return;
        const R = ge(b.meta.title).toLowerCase();
        if (b.children && b.children.length > 0) {
          b.children.forEach(D);
          return;
        }
        R.includes(x) && (b.path && b.path.trim() || b.meta.link || b.meta.isIframe) && M.push({ ...b, children: void 0 });
      };
      return h.forEach(D), M;
    }, T = () => {
      H.value = !0, r.value ? (g.value = (g.value - 1 + i.value.length) % i.value.length, V()) : (C.value = (C.value - 1 + o.value.length) % o.value.length, K()), setTimeout(() => {
        H.value = !1;
      }, 100);
    }, U = () => {
      H.value = !0, r.value ? (g.value = (g.value + 1) % i.value.length, V()) : (C.value = (C.value + 1) % o.value.length, K()), setTimeout(() => {
        H.value = !1;
      }, 100);
    }, V = () => {
      be(() => {
        if (!p.value || !i.value.length) return;
        const h = p.value.wrapRef;
        if (!h) return;
        const S = h.querySelectorAll(".result .box");
        if (!S[g.value]) return;
        const x = S[g.value], M = x.offsetHeight, D = h.scrollTop, b = h.clientHeight, R = x.offsetTop, P = R + M;
        R < D ? p.value.setScrollTop(R) : P > D + b && p.value.setScrollTop(P - b);
      });
    }, K = () => {
      be(() => {
        if (!p.value || !o.value.length) return;
        const h = p.value.wrapRef;
        if (!h) return;
        const S = h.querySelectorAll(".history-result .box");
        if (!S[C.value]) return;
        const x = S[C.value], M = x.offsetHeight, D = h.scrollTop, b = h.clientHeight, R = x.offsetTop, P = R + M;
        R < D ? p.value.setScrollTop(R) : P > D + b && p.value.setScrollTop(P - b);
      });
    }, Z = () => {
      r.value && i.value.length ? le(i.value[g.value]) : !r.value && o.value.length && le(o.value[C.value]);
    }, ae = (h) => g.value === h, q = () => {
      g.value = 0;
    }, le = (h) => {
      c.value = !1, L(h), vt(h), r.value = "", i.value = [];
    }, B = () => {
      Array.isArray(o.value) && t.setSearchHistory(o.value);
    }, L = (h) => {
      const S = h.path || String(h.meta.link || ""), x = o.value.findIndex(
        (D) => (D.path || String(D.meta.link || "")) === S
      );
      x !== -1 ? o.value.splice(x, 1) : o.value.length >= sa && o.value.pop();
      const M = { ...h };
      delete M.children, delete M.meta.authList, o.value.unshift(M), B();
    }, a = (h) => {
      o.value.splice(h, 1), B();
    }, d = () => {
      r.value = "", i.value = [], g.value = 0, C.value = 0;
    }, _ = (h) => {
      !H.value && r.value && (g.value = h);
    }, F = (h) => {
      !H.value && !r.value && (C.value = h);
    };
    return (h, S) => (f(), y("div", Us, [
      A(l(It), {
        modelValue: l(c),
        "onUpdate:modelValue": S[1] || (S[1] = (x) => et(c) ? c.value = x : null),
        width: "600",
        "show-close": !1,
        "lock-scroll": !1,
        "modal-class": "search-modal",
        onClose: d
      }, {
        footer: N(() => [
          u("div", Qs, [
            u("div", Js, [
              A(l(X), {
                icon: "fluent:arrow-enter-left-20-filled",
                class: "keyboard"
              }),
              u("span", Zs, O(h.$t("search.selectKeydown")), 1)
            ]),
            u("div", ea, [
              A(l(X), {
                icon: "ri:arrow-up-wide-fill",
                class: "keyboard"
              }),
              A(l(X), {
                icon: "ri:arrow-down-wide-fill",
                class: "keyboard"
              }),
              u("span", ta, O(h.$t("search.switchKeydown")), 1)
            ]),
            u("div", na, [
              S[2] || (S[2] = u("i", { class: "keyboard keyboard--esc" }, [
                u("p", { class: "keyboard__esc-text" }, "ESC")
              ], -1)),
              u("span", oa, O(h.$t("search.exitKeydown")), 1)
            ])
          ])
        ]),
        default: N(() => [
          A(l(Dt), {
            modelValue: r.value,
            "onUpdate:modelValue": S[0] || (S[0] = (x) => r.value = x),
            modelModifiers: { trim: !0 },
            placeholder: h.$t("search.placeholder"),
            onInput: k,
            onBlur: q,
            ref_key: "searchInput",
            ref: m,
            "prefix-icon": l(Rt),
            class: "search-input"
          }, {
            suffix: N(() => [
              u("div", Gs, [
                A(l(X), { icon: "fluent:arrow-enter-left-20-filled" })
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "prefix-icon"]),
          A(l(lt), {
            class: "search-scrollbar",
            "max-height": "370px",
            ref_key: "searchResultScrollbar",
            ref: p,
            always: ""
          }, {
            default: N(() => [
              ue(u("div", Ks, [
                (f(!0), y(Y, null, ee(i.value, (x, M) => (f(), y("div", {
                  class: "box search-result__item",
                  key: M
                }, [
                  u("div", {
                    class: oe(["search-result__inner", ae(M) ? "search-result__inner--highlighted" : ""]),
                    onClick: (D) => le(x),
                    onMouseenter: (D) => _(M)
                  }, [
                    Se(O(l(ge)(x.meta.title)) + " ", 1),
                    ue(A(l(X), { icon: "fluent:arrow-enter-left-20-filled" }, null, 512), [
                      [de, ae(M)]
                    ])
                  ], 42, qs)
                ]))), 128))
              ], 512), [
                [de, i.value.length]
              ]),
              ue(u("div", null, [
                u("p", Xs, O(h.$t("search.historyTitle")), 1),
                u("div", zs, [
                  (f(!0), y(Y, null, ee(l(o), (x, M) => (f(), y("div", {
                    class: oe(["box search-history__item", C.value === M ? "search-history__item--highlighted" : ""]),
                    key: M,
                    onClick: (D) => le(x),
                    onMouseenter: (D) => F(M)
                  }, [
                    Se(O(l(ge)(x.meta.title)) + " ", 1),
                    u("div", {
                      class: "selected-icon search-history__delete",
                      onClick: Ee((D) => a(M), ["stop"])
                    }, [
                      A(l(X), {
                        icon: "ri:close-large-fill",
                        class: "search-history__delete-icon"
                      })
                    ], 8, Ys)
                  ], 42, js))), 128))
                ])
              ], 512), [
                [de, !r.value && i.value.length === 0 && l(o).length > 0]
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), la = /* @__PURE__ */ ne(aa, [["__scopeId", "data-v-8518189c"]]), ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: la
}, Symbol.toStringTag, { value: "Module" }));
export {
  Aa as AdminLayout,
  xa as AppLayout,
  pa as findApplicationByPath,
  ge as formatMenuTitle,
  nn as getContextI18n,
  ct as getContextRouter,
  mt as getFirstMenuPath,
  sn as getLanguageChangeHandler,
  ut as getLanguageRef,
  ke as getMenuSource,
  dt as getSystemName,
  on as getUserInfo,
  vt as handleMenuJump,
  ba as initializeTheme,
  an as logout,
  qe as openExternalLink,
  tn as setLayoutContext,
  ya as setPageTitle,
  Ve as useAppStore,
  Ho as useAutoLayoutHeight,
  xe as useCommon,
  fo as useHeaderBar,
  _a as useLayoutHeight,
  te as useSettingStore,
  $e as useTheme,
  He as useWorktabStore,
  Zt as version
};
