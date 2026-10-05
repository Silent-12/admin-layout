import { ref as w, defineAsyncComponent as Ke, defineComponent as z, computed as M, openBlock as g, createElementBlock as A, Fragment as Q, renderList as Z, createBlock as U, resolveDynamicComponent as Qe, unref as o, withCtx as P, renderSlot as Je, createVNode as b, normalizeClass as ae, createElementVNode as u, toDisplayString as D, createCommentVNode as j, watch as he, withDirectives as ue, withModifiers as Ce, normalizeStyle as ee, vShow as de, createTextVNode as Se, onMounted as Te, onUnmounted as Me, nextTick as _e, resolveComponent as Oe, watchEffect as pt, shallowRef as yt, Transition as _t, KeepAlive as bt, Teleport as At, isRef as Ze } from "vue";
import { AoSvgIcon as Y, AoLogo as et, AoIconButton as pe } from "@ao/admin-components";
import { useRouter as Be, useRoute as Fe } from "vue-router";
import { ElDropdown as tt, ElDropdownMenu as nt, ElDropdownItem as ot, ElButton as st, ElMessage as xe, ElPopover as Tt, ElMessageBox as xt, ElSubMenu as wt, ElMenuItem as St, ElScrollbar as at, ElMenu as kt, ElDrawer as Ct, ElSwitch as Et, ElInputNumber as Mt, ElSelect as Bt, ElOption as Lt, ElDialog as It, ElInput as $t } from "element-plus";
import { useI18n as we } from "vue-i18n";
import { defineStore as Le, storeToRefs as te } from "pinia";
import { usePreferredDark as lt, useWindowSize as it, useFullscreen as Ht, useElementSize as qe, useTimeoutFn as Dt, useBreakpoints as Ot } from "@vueuse/core";
import { Search as Ft } from "@element-plus/icons-vue";
import "nprogress";
const Rt = { theme: { title: "主题风格", list: ["浅色", "深色", "系统"] }, menu: { title: "菜单风格" }, color: { title: "系统主题色" }, basics: { title: "基础配置", list: { multiTab: "开启多标签栏", accordion: "侧边栏自动收起", collapseSidebar: "显示折叠侧边栏按钮", fastEnter: "显示快速入口", language: "显示多语言选择", notification: "显示通知入口" } }, actions: { resetConfig: "重置配置", resetFailed: "重置失败，请刷新页面后重试" } }, Nt = { btn: { refresh: "刷新", fixed: "固定当前标签", unfixed: "取消固定", closeLeft: "关闭左侧", closeRight: "关闭右侧", closeOther: "关闭其他", closeAll: "关闭全部" } }, Pt = { title: "通知", btnRead: "标为已读", bar: ["通知", "消息", "代办"], text: ["暂无"], viewAll: "查看全部" }, Vt = { placeholder: "搜索页面", historyTitle: "搜索历史", switchKeydown: "切换", selectKeydown: "选择", exitKeydown: "关闭" }, Wt = { search: { title: "搜索" }, user: { userCenter: "个人中心", logout: "退出登录" } }, Ut = { tips: "提示", cancel: "取消", confirm: "确定", logOutTips: "您是否要退出登录?" }, Gt = {
  setting: Rt,
  worktab: Nt,
  notice: Pt,
  search: Vt,
  topBar: Wt,
  common: Ut
}, Kt = { theme: { title: "Theme Style", list: ["Light", "Dark", "System"] }, menu: { title: "Menu Style" }, color: { title: "Theme Color" }, basics: { title: "Basic Config", list: { multiTab: "Show work tab", accordion: "Sidebar accordion", collapseSidebar: "Show sidebar button", fastEnter: "Show fast enter", language: "Show multilingual selection", notification: "Show notification entry" } }, actions: { resetConfig: "Reset Config", resetFailed: "Reset failed, please refresh the page and try again" } }, qt = { btn: { refresh: "Refresh", fixed: "Pin current tab", unfixed: "Unpin current tab", closeLeft: "Close left", closeRight: "Close right", closeOther: "Close other", closeAll: "Close all" } }, Xt = { title: "Notice", btnRead: "Mark as read", bar: ["Notice", "Message", "Todo"], text: ["No"], viewAll: "View all" }, zt = { placeholder: "Search page", historyTitle: "Search history", switchKeydown: "Navigate", selectKeydown: "Select", exitKeydown: "Close" }, jt = { search: { title: "Search" }, user: { userCenter: "User center", logout: "Log out" } }, Yt = { tips: "Prompt", cancel: "Cancel", confirm: "Confirm", logOutTips: "Do you want to log out?" }, Qt = {
  setting: Kt,
  worktab: qt,
  notice: Xt,
  search: zt,
  topBar: jt,
  common: Yt
}, Jt = "1", Zt = w("zh");
let me = {};
const en = (e) => {
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
}, rt = () => me.router, tn = () => me.i18n, ke = () => me.menuSource?.() ?? {
  menuList: [],
  applicationList: [],
  currentApplication: void 0,
  homePath: ""
}, nn = () => me.userInfo?.(), ct = () => me.language ?? Zt, on = () => me.onLanguageChange, sn = () => {
  me.onLogout ? me.onLogout() : console.warn("[ao-admin-layout] 未注入 onLogout，登出操作被忽略");
}, ut = () => me.config?.systemName ?? void 0 ?? "Ao Admin", an = [
  {
    name: "设置面板",
    key: "settings-panel",
    component: Ke(() => Promise.resolve().then(() => Ls)),
    enabled: !0
  },
  {
    name: "全局搜索",
    key: "global-search",
    component: Ke(() => Promise.resolve().then(() => Qs)),
    enabled: !0
  }
], ln = () => an.filter((e) => e.enabled !== !1), rn = /* @__PURE__ */ z({
  name: "AoGlobalComponent",
  __name: "AoGlobalComponent",
  setup(e) {
    const t = M(() => ln());
    return (n, r) => (g(!0), A(Q, null, Z(t.value, (c) => (g(), U(Qe(c.component), {
      key: c.key
    }))), 128));
  }
});
function dt(e) {
  return !e.path?.trim() || e.path.startsWith("http://") || e.path.startsWith("https://") || e.meta.isHide && e.meta.isFullPage !== !0 || e.meta.link && !e.meta.isIframe ? !1 : e.children?.length ? !0 : !!(e.component || e.meta.isIframe === !0);
}
function ht(e) {
  for (const t of e)
    if (dt(t)) {
      if (t.children?.length) {
        const n = ht(t.children);
        if (n) return n;
        continue;
      }
      return t.path.startsWith("/") ? t.path : `/${t.path}`;
    }
  return "";
}
function ia(e, t) {
  return [...e].sort((n, r) => r.path.length - n.path.length).find((n) => t === n.path || t.startsWith(`${n.path}/`));
}
const ra = (e) => {
  const { title: t } = e.meta;
  t && setTimeout(() => {
    document.title = `${ge(String(t))} - ${ut()}`;
  }, 150);
}, ge = (e) => {
  if (e) {
    if (e.startsWith("menus.")) {
      const t = tn();
      return t ? t.global.te(e) ? t.global.t(e) : e.split(".").pop() || e : e;
    }
    return e;
  }
  return "";
}, cn = { class: "menu-txt" }, un = /* @__PURE__ */ z({
  name: "AoFastEnter",
  __name: "AoFastEnter",
  setup(e) {
    const t = Be(), n = M(() => ke().applicationList), r = M(() => ke().currentApplication), c = (i) => {
      const s = ht(i.children || []);
      if (!s || i.path === r.value?.path)
        return;
      const a = t.resolve({ path: s }).href;
      window.open(a, "_blank", "noopener");
    };
    return (i, s) => (g(), U(o(tt), {
      "popper-class": "langDropDownStyle",
      onCommand: c
    }, {
      dropdown: P(() => [
        b(o(nt), null, {
          default: P(() => [
            (g(!0), A(Q, null, Z(n.value, (a) => (g(), A("div", {
              key: a.path,
              class: "lang-btn-item"
            }, [
              b(o(ot), {
                command: a,
                class: ae({ "is-selected": a.path === r.value?.path })
              }, {
                default: P(() => [
                  u("span", cn, D(o(ge)(a.meta.title)), 1),
                  a.path === r.value?.path ? (g(), U(o(Y), {
                    key: 0,
                    style: { "margin-left": "5px" },
                    icon: "ri:check-fill"
                  })) : j("", !0)
                ]),
                _: 2
              }, 1032, ["command", "class"])
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      default: P(() => [
        Je(i.$slots, "default")
      ]),
      _: 3
    }));
  }
}), dn = { class: "notification-panel__header" }, hn = { class: "notification-panel__title" }, mn = { class: "notification-panel__read-btn" }, fn = { class: "notification-panel__tabs" }, gn = ["onClick"], vn = { class: "notification-panel__content" }, pn = { class: "notification-panel__scroll scrollbar-thin" }, yn = { class: "notification-item__body" }, _n = { class: "notification-item__title" }, bn = { class: "notification-item__time" }, An = { class: "notification-item__avatar-box" }, Tn = ["src"], xn = { class: "notification-item__body" }, wn = { class: "notification-item__msg-title" }, Sn = { class: "notification-item__time" }, kn = { class: "pending-item__time" }, Cn = { class: "notification-empty" }, En = { class: "notification-empty__text" }, Mn = { class: "notification-panel__footer" }, Bn = "https://dummyimage.com/160x160.png", Ln = "https://dummyimage.com/160x160.png", In = "https://dummyimage.com/160x160.png", $n = "https://dummyimage.com/80x80.png", Hn = "https://dummyimage.com/80x80.png", Dn = "https://dummyimage.com/80x80.png", On = /* @__PURE__ */ z({
  name: "AoNotification",
  __name: "AoNotification",
  props: {
    value: { type: Boolean }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const { t: n } = we(), r = e, c = t, i = w(!1), s = w(!1), a = w(0), h = () => {
      const q = w([
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
      ]), O = w([
        {
          title: "xxxxxxxxxx",
          time: "2021-2-26 23:50",
          avatar: Bn
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-2-21 8:05",
          avatar: Ln
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-1-17 21:12",
          avatar: In
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-01-14 0:20",
          avatar: $n
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-20 0:15",
          avatar: Hn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-17 22:06",
          avatar: Dn
        }
      ]), l = w([]), m = M(() => [
        {
          name: M(() => n("notice.bar[0]")),
          num: q.value.length
        },
        {
          name: M(() => n("notice.bar[1]")),
          num: O.value.length
        },
        {
          name: M(() => n("notice.bar[2]")),
          num: l.value.length
        }
      ]);
      return {
        noticeList: q,
        msgList: O,
        pendingList: l,
        barList: m
      };
    }, f = () => {
      const q = {
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
        getNoticeStyle: (l) => {
          const m = {
            icon: "ri:arrow-right-circle-line",
            iconClass: "notice-icon--notice"
          };
          return q[l] || m;
        }
      };
    }, C = () => ({
      showNotice: (O) => {
        O ? (s.value = !0, setTimeout(() => {
          i.value = !0;
        }, 5)) : (i.value = !1, setTimeout(() => {
          s.value = !1;
        }, 350));
      }
    }), _ = (q, O, l, m) => {
      const k = (x) => {
        a.value = x;
      }, F = M(() => {
        const E = [q.value, O.value, l.value][a.value];
        return E && E.length === 0;
      });
      return {
        changeBar: k,
        currentTabIsEmpty: F,
        handleViewAll: () => {
          const E = {
            0: m.handleNoticeAll,
            1: m.handleMsgAll,
            2: m.handlePendingAll
          }[a.value];
          E?.(), c("update:value", !1);
        }
      };
    }, I = () => ({
      handleNoticeAll: () => {
        console.log("查看全部通知");
      },
      handleMsgAll: () => {
        console.log("查看全部消息");
      },
      handlePendingAll: () => {
        console.log("查看全部待办");
      }
    }), { noticeList: B, msgList: v, pendingList: S, barList: $ } = h(), { getNoticeStyle: T } = f(), { showNotice: W } = C(), { handleNoticeAll: V, handleMsgAll: G, handlePendingAll: le } = I(), { changeBar: ce, currentTabIsEmpty: K, handleViewAll: ie } = _(
      B,
      v,
      S,
      { handleNoticeAll: V, handleMsgAll: G, handlePendingAll: le }
    );
    return he(
      () => r.value,
      (q) => {
        W(q);
      }
    ), (q, O) => ue((g(), A("div", {
      class: "ao-notification-panel ao-card-sm notification-panel",
      style: ee({
        transform: i.value ? "scaleY(1)" : "scaleY(0.9)",
        opacity: i.value ? 1 : 0
      }),
      onClick: O[0] || (O[0] = Ce(() => {
      }, ["stop"]))
    }, [
      u("div", dn, [
        u("span", hn, D(q.$t("notice.title")), 1),
        u("span", mn, D(q.$t("notice.btnRead")), 1)
      ]),
      u("ul", fn, [
        (g(!0), A(Q, null, Z(o($), (l, m) => (g(), A("li", {
          key: m,
          class: ae(["notification-panel__tab", { "bar-active": a.value === m }]),
          onClick: (k) => o(ce)(m)
        }, D(l.name) + " (" + D(l.num) + ") ", 11, gn))), 128))
      ]),
      u("div", vn, [
        u("div", pn, [
          ue(u("ul", null, [
            (g(!0), A(Q, null, Z(o(B), (l, m) => (g(), A("li", {
              key: m,
              class: "notification-item"
            }, [
              u("div", {
                class: ae(["notification-item__icon", [o(T)(l.type).iconClass]])
              }, [
                b(o(Y), {
                  class: "notification-item__icon-svg",
                  icon: o(T)(l.type).icon
                }, null, 8, ["icon"])
              ], 2),
              u("div", yn, [
                u("h4", _n, D(l.title), 1),
                u("p", bn, D(l.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, a.value === 0]
          ]),
          ue(u("ul", null, [
            (g(!0), A(Q, null, Z(o(v), (l, m) => (g(), A("li", {
              key: m,
              class: "notification-item"
            }, [
              u("div", An, [
                u("img", {
                  src: l.avatar,
                  class: "notification-item__avatar"
                }, null, 8, Tn)
              ]),
              u("div", xn, [
                u("h4", wn, D(l.title), 1),
                u("p", Sn, D(l.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, a.value === 1]
          ]),
          ue(u("ul", null, [
            (g(!0), A(Q, null, Z(o(S), (l, m) => (g(), A("li", {
              key: m,
              class: "pending-item"
            }, [
              u("h4", null, D(l.title), 1),
              u("p", kn, D(l.time), 1)
            ]))), 128))
          ], 512), [
            [de, a.value === 2]
          ]),
          ue(u("div", Cn, [
            b(o(Y), {
              icon: "system-uicons:inbox",
              class: "notification-empty__icon"
            }),
            u("p", En, D(q.$t("notice.text[0]")) + D(o($)[a.value].name), 1)
          ], 512), [
            [de, o(K)]
          ])
        ]),
        u("div", Mn, [
          b(o(st), {
            class: "notification-panel__view-all",
            onClick: o(ie)
          }, {
            default: P(() => [
              Se(D(q.$t("notice.viewAll")), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      O[1] || (O[1] = u("div", { class: "notification-panel__bottom-spacer" }, null, -1))
    ], 4)), [
      [de, s.value]
    ]);
  }
}), ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, c] of t)
    n[r] = c;
  return n;
}, Fn = /* @__PURE__ */ ne(On, [["__scopeId", "data-v-931a32d1"]]);
var X = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.AUTO = "auto", e))(X || {}), ye = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.DESIGN = "design", e))(ye || {}), He = /* @__PURE__ */ ((e) => (e.ZH = "zh", e.EN = "en", e))(He || {});
const Rn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////29vj9/f34+Pox8uq3AAABTElEQVRo3u2VwW3EMAwEhcs1QKuBE5QCYlfg9N9UcjHyMUQQtlaASOz89jWwzCUTIYQQQgghhJCUPleBo9ueYoDVrTIAwMdBdEUMsLpvGQHg10F0ojBat6VU9YDWbe9Q9YDV5dc7PFY9QHXLkYoeoLqvI33oAap7HemhB6juP+qBull19qh4LoJdc89LzFzRvg/QH3GvOXXUzahLWKhrQB111P0SS1elj+2S7im97Fd0RXpZruhW6SVf0Uk/E+sAjznxqACKMHHNG0TamWeoo24OXe1sccJe8x2qK/YGtoAeoAzViYlnnf2YnkfFLoLnmjeItDPPUEfdHLoqd9igS8xmR65omwV5gGwy9LzauNDdfkwXo3K7CC5q3iDSzjxDHXVz6GpHj4FLbB+iKx07GHmA8hCdqETQ6Y8ZYVT0IkSoeYNIO/MMddQN1v0AFy9OBRBx85QAAAAASUVORK5CYII=", Nn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAG1BMVEUnJyo/P0ZSUlxKSlNOTlc5OT8vLzJDQ0s0NDkX0J24AAABYElEQVRo3u2XMWrEMBBFVW47LM4BHEPqTZPeN3CzvQtD6uQCzs1j4lRGw2DPF2jEf900eqxW/w9OhBBCCCGEEEJS+pwEjm67iQFWN0kBHD8OqpvFAKv7kRI4/jqoThx4dN/j8KEPaN2933joA1g39huDPmB19/6Phz5AdV/7oW/6ANW974e+6gNUN+6HDvoA1fX/6ENknX2ZkZ+KHYTIMTdLLHZFGwso+nqljjrqJGGhLgN11FG30ZZuER/PU7qbeFnP6Gbx8nJGN4mX7oxO/FSsA1xmxU8FEISKY56hpc48Qh11degWZ4oTdpuvUN1sN7AFdAF1UJ2YRNbZlxn5qdhBiBzzDC115hHqqKtDt8gVntASs1mxFe1qbvznZAddrzYhdJcvM8RTuRyEEDHP0FJnHqGOujp0iyPHwBJbi+hmRwcjF1BXRCcqLej0y2zhqehBaCHmGVrqzCPUUVdY9wter4K58MOVTQAAAABJRU5ErkJggg==", Pn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAJFBMVEXy8vUREREzMzP////4+Pr19fgcHBz8/P0rKysyMjIwMDAjIyPGISqaAAABlElEQVRo3u3XsUoEMRAGYItdrNMc1hZhY5t7AMHCduEE67MSKyG+gM09iIX9vqFeooRwhGGTIZfk/umm+iA3/8ztVWKJtAIHDhw4cODAgQMHDhy4Orkno+N1m1ZxbdC6JGeKcoMuyu3Kcg9lOVOW02fiPubx8aSx3EGIV25u639I31juW/zWGzM3H5sxaBx3tz9ymy9Wbuvn1DeWk8LWCyv37rrroLHcp+NuWLl71w1BY7m94zas3Oy6MWgsJ/6Klftvg6Ybjn7MlkeFDkLLMaeXWNMrmjhArZ9XcODAaebPSXDgwIG7BO45b0WrwypuyL4Iyxpul83JNZzJ5qY1nM7mVMUcw2NWPCoMQag45p3vTHDg6uQiMfcppor3mi8kxLqiJStnKG5i5TTFqZY5+jFbHhU6CC3HvPOdCQ5cnVzCn/Yw/UW+zRfOFU2X5DxAdE2c55Uu1QSX/JhNjEpyEJqIeec7Exy4OrnTmIc5LvRtvpAA64qWJMB6gCYSYD2vqgcu/pg9jEo8CD3EvPOdCQ5cYe4H2qWIxMTt67gAAAAASUVORK5CYII=", Vn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////5+fnx8fHd3d0ah087AAAAyklEQVRo3u3Z0Q2AIAxFUeIGbmBYgRXcfyYXaEh8PhXKvQucvzaUsncq9uDg4ODg4OAK3G3uDIJLxFU1idtk7lC4qvcrFwcHBwfn5YwjWuCcC6gF+dYrHBzcAE8SOEO2ES1x+gI67FztBgf3BteC4ODm4KQRrXOlx82/XuHg4OBG5VrQx2cc45FK4aoeHFye4zAcXPp/hNzbPDeX+9IOBzcm5x/Rj7lNXzofrFc4OLiluRa0Fmcc0f4j1UjrFW7eJwkcHBwcHBycswty2jT2B1pWhwAAAABJRU5ErkJggg==", Wn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vUnJyr5+fk/P0bz8/YkmYUBAAAA0ElEQVRo3u3ZwQ3EMAhEUR/SwHZgWenADVjbf1FpwCIyIg6QPw28GyOg/IQU88DBwcHBwcEVuGWuTwKXhzuaNkPD/dXcqeGaPq9y88DBwcHZcnYjui5wFgUUoF7h4NJzuTcguEOewlLMC+g055oYOLgnuD4JHFwMThzRde+RakSvVzg4ODi3HH+EdhO/fwS4uJzD4zAcXPo/Qu42z83lvrTDwfnk7Ef0ePSPIO8FG+oVDg7u01yf5Fvc2oiue49Uw1G9wsVdSeDg4ODg4OAscwFb7y6GSsIW5AAAAABJRU5ErkJggg==", Un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAElBMVEXy8vX////5+fnx8fHd3d1VVVVl+HYBAAAAzklEQVRo3u3ZYQ2FMAxF4QUHzwGZhVl4FvBvBQE0S7hcYCvnGPj+tVlXfp2KPTg4ODg4OLgCd5rb/sfgEnFVTeIWmVsVruq9ysXBwcHBeTnjiBY45wJqQb71CgcHN8CTBM6QbURLnL6AVjtXu8HB3cG1IDi4OThpROtc6XHzr1c4ODi4UbkW9PAZx3ikUriqBweX5zgMB5f+HyH3Ns/N5b60w8GNyflH9GVu0ZfOA+sVDg7u01wL+hZnHNH+I9VI6xVu3icJHBwcHBwcnLMdqYI1ftKrSesAAAAASUVORK5CYII=", be = {
  /** 系统主题预览图 */
  themeStyles: {
    /** 亮色主题 */
    light: Rn,
    /** 暗色主题 */
    dark: Nn,
    /** 自动主题（跟随系统） */
    system: Pn
  },
  /** 菜单风格预览图 */
  menuStyles: {
    /** 设计风格 */
    design: Vn,
    /** 暗色风格 */
    dark: Wn,
    /** 亮色风格 */
    light: Un
  }
}, Re = {
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
}, Gn = {
  // 系统信息
  systemInfo: {
    name: void 0,
    // 系统名称
    version: void 0
    // 系统版本
  },
  // 系统主题
  systemThemeStyles: {
    [X.LIGHT]: { className: "" },
    [X.DARK]: { className: X.DARK }
  },
  // 系统主题列表
  settingThemeList: [
    {
      name: "Light",
      theme: X.LIGHT,
      color: ["#fff", "#fff"],
      leftLineColor: "#EDEEF0",
      rightLineColor: "#EDEEF0",
      img: be.themeStyles.light
    },
    {
      name: "Dark",
      theme: X.DARK,
      color: ["#22252A"],
      leftLineColor: "#3F4257",
      rightLineColor: "#3F4257",
      img: be.themeStyles.dark
    },
    {
      name: "System",
      theme: X.AUTO,
      color: ["#fff", "#22252A"],
      leftLineColor: "#EDEEF0",
      rightLineColor: "#3F4257",
      img: be.themeStyles.system
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
      img: be.menuStyles.design
    },
    {
      theme: ye.DARK,
      background: "#191A23",
      systemNameColor: "#D9DADB",
      iconColor: "#BABBBD",
      textColor: "#BABBBD",
      img: be.menuStyles.dark
    },
    {
      theme: ye.LIGHT,
      background: "#ffffff",
      systemNameColor: "var(--ao-gray-800)",
      iconColor: "#6B6B6B",
      textColor: "#29343D",
      img: be.menuStyles.light
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
  headerBar: Re
}, fe = Object.freeze(Gn);
function Ne(e) {
  const t = e.trim().replace(/^#/, "");
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t);
}
function Kn(e, t, n) {
  const r = (c) => Number.isInteger(c) && c >= 0 && c <= 255;
  return r(e) && r(t) && r(n);
}
function Ee(e) {
  if (!Ne(e))
    throw xe.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  let n = e.replace(/^#/, "");
  n.length === 3 && (n = n.split("").map((c) => c.repeat(2)).join(""));
  const r = n.match(/../g);
  if (!r)
    throw new Error("Invalid hex color format");
  return r.map((c) => parseInt(c, 16));
}
function Pe(e, t, n) {
  if (!Kn(e, t, n))
    throw xe.warning("输入错误的RGB颜色值"), new Error("Invalid RGB color values");
  const r = (c) => {
    const i = c.toString(16);
    return i.length === 1 ? `0${i}` : i;
  };
  return `#${r(e)}${r(t)}${r(n)}`;
}
function qn(e, t, n) {
  const r = Math.max(0, Math.min(1, Number(n))), c = Ee(e), i = Ee(t), s = c.map((a, h) => {
    const f = i[h];
    return Math.round(a * (1 - r) + f * r);
  });
  return Pe(s[0], s[1], s[2]);
}
function mt(e, t, n = !1) {
  if (!Ne(e))
    throw xe.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  if (n)
    return Ve(e, t);
  const c = Ee(e).map((i) => Math.floor((255 - i) * t + i));
  return Pe(c[0], c[1], c[2]);
}
function Ve(e, t) {
  if (!Ne(e))
    throw xe.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  const r = Ee(e).map((c) => Math.floor(c * (1 - t)));
  return Pe(r[0], r[1], r[2]);
}
function Xn(e, t = !1) {
  document.documentElement.style.setProperty("--el-color-primary", e);
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${n}`,
      mt(e, n / 10, t)
    );
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-dark-${n}`,
      Ve(e, n / 10)
    );
}
function ft(e) {
  const t = "#ffffff", n = document.documentElement.style;
  n.setProperty("--el-color-primary", e), Xn(e, J().isDark);
  for (let r = 1; r < 16; r++) {
    const c = qn(e, t, r / 16);
    n.setProperty(`--el-color-primary-custom-${r}`, c);
  }
}
const Xe = (e) => {
  window.open(e, "_blank");
}, gt = (e, t = !1) => {
  const n = rt();
  if (!n) {
    console.warn("[ao-admin-layout] 未注入 router，无法跳转");
    return;
  }
  const { link: r, isIframe: c } = e.meta;
  if (r && !c)
    return Xe(r);
  if (!t || !e.children?.length)
    return n.push(e.path);
  const i = (a) => {
    for (const h of a)
      if (dt(h))
        return h.children?.length && i(h.children) || h;
  }, s = i(e.children);
  if (!s)
    return n.push(e.path);
  if (s.meta?.link)
    return Xe(s.meta.link);
  n.push(s.path);
};
class zn {
  /** 主题键名（index.html中使用了，如果修改，需要同步修改） */
  static THEME_KEY = "sys-theme";
  /** 上次登录用户ID键名（用于判断是否为同一用户登录） */
  static LAST_USER_ID_KEY = "sys-last-user-id";
}
const oe = {
  /** 菜单是否展开 */
  menuOpen: !0,
  /** 系统主题类型 */
  systemThemeType: X.AUTO,
  /** 系统主题模式 */
  systemThemeMode: X.AUTO,
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
}, J = Le(
  "settingStore",
  () => {
    const e = w(oe.menuOpen), t = w(oe.systemThemeType), n = w(oe.systemThemeMode), r = w(oe.menuThemeType), c = w(oe.systemThemeColor), i = w(oe.showMenuButton), s = w(oe.showFastEnter), a = w(oe.showWorkTab), h = w(oe.showLanguage), f = w(oe.showNotification), C = w(oe.showSettingGuide), _ = w(oe.uniqueOpened), I = w(oe.refresh), B = M(() => {
      const O = fe.themeList.filter((l) => l.theme === r.value);
      return v.value ? fe.darkMenuStyles[0] : O[0];
    }), v = M(() => t.value === X.DARK);
    return {
      systemThemeType: t,
      systemThemeMode: n,
      menuThemeType: r,
      systemThemeColor: c,
      uniqueOpened: _,
      showMenuButton: i,
      showFastEnter: s,
      showWorkTab: a,
      showLanguage: h,
      showNotification: f,
      showSettingGuide: C,
      menuOpen: e,
      refresh: I,
      getMenuTheme: B,
      isDark: v,
      setGlopTheme: (O, l) => {
        t.value = O, n.value = l, localStorage.setItem(zn.THEME_KEY, O);
      },
      switchMenuStyles: (O) => {
        r.value = O;
      },
      setElementTheme: (O) => {
        c.value = O, ft(O);
      },
      setUniqueOpened: () => {
        _.value = !_.value;
      },
      setButton: () => {
        i.value = !i.value;
      },
      setFastEnter: () => {
        s.value = !s.value;
      },
      setWorkTab: (O) => {
        a.value = O;
      },
      setLanguage: () => {
        h.value = !h.value;
      },
      setNotification: () => {
        f.value = !f.value;
      },
      setMenuOpen: (O) => {
        e.value = O;
      },
      reload: () => {
        I.value = !I.value;
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
  const e = J();
  return {
    homePath: M(() => ke().homePath),
    refresh: () => {
      e.reload();
    },
    scrollTo: (s, a = !1) => {
      const h = document.getElementById("app-main");
      h && h.scrollTo({
        top: s,
        behavior: a ? "smooth" : "auto"
      });
    },
    scrollToTop: () => {
      const s = document.getElementById("app-main");
      s && (s.scrollTop = 0);
    },
    smoothScrollToTop: () => {
      const s = document.getElementById("app-main");
      s && s.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
}
const De = Le(
  "worktabStore",
  () => {
    const e = w({}), t = w([]), n = w([]), r = M(() => t.value.length > 0), c = M(() => t.value.length > 1), i = M(
      () => e.value.path ? t.value.findIndex((l) => l.path === e.value.path) : -1
    ), s = (l) => t.value.findIndex((m) => m.path === l), a = (l) => t.value.find((m) => m.path === l), h = (l) => !l.fixedTab, f = (l) => {
      if (!l.path) {
        console.warn("尝试跳转到无效路径的标签页");
        return;
      }
      const m = rt();
      if (!m) {
        console.warn("[ao-admin-layout] 未注入 router，无法跳转");
        return;
      }
      try {
        m.push({
          path: l.path,
          query: l.query
        });
      } catch (k) {
        console.error("路由跳转失败:", k);
      }
    }, C = (l) => {
      if (!l.path) {
        console.warn("尝试打开无效的标签页");
        return;
      }
      l.name && W(l.name);
      let m = -1;
      if (l.name && (m = t.value.findIndex((k) => k.name === l.name)), m === -1 && (m = s(l.path)), m === -1) {
        const k = l.fixedTab ? _() : t.value.length, F = { ...l };
        l.fixedTab ? t.value.splice(k, 0, F) : t.value.push(F), e.value = F;
      } else {
        const k = t.value[m];
        t.value[m] = {
          ...k,
          path: l.path,
          params: l.params,
          query: l.query,
          title: l.title || k.title,
          fixedTab: l.fixedTab ?? k.fixedTab,
          keepAlive: l.keepAlive ?? k.keepAlive,
          name: l.name || k.name,
          icon: l.icon || k.icon
        }, e.value = t.value[m];
      }
    }, _ = () => {
      let l = 0;
      for (let m = 0; m < t.value.length && t.value[m].fixedTab; m++)
        l = m + 1;
      return l;
    }, I = (l) => {
      const m = a(l), k = s(l);
      if (k === -1) {
        console.warn(`尝试关闭不存在的标签页: ${l}`);
        return;
      }
      if (m && !h(m)) {
        console.warn(`尝试关闭固定标签页: ${l}`);
        return;
      }
      t.value.splice(k, 1), m?.name && T(m);
      const { homePath: F } = Ae();
      if (!r.value) {
        l !== F.value && (e.value = {}, f({ path: F.value }));
        return;
      }
      if (e.value.path === l) {
        const d = k >= t.value.length ? t.value.length - 1 : k;
        e.value = t.value[d], f(e.value);
      }
    }, B = (l) => {
      const m = s(l);
      if (m === -1) {
        console.warn(`尝试关闭左侧标签页，但目标标签页不存在: ${l}`);
        return;
      }
      const F = t.value.slice(0, m).filter(h);
      if (F.length === 0) {
        console.warn("左侧没有可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter(
        (x, E) => E >= m || !h(x)
      );
      const d = a(l);
      d && (e.value = d);
    }, v = (l) => {
      const m = s(l);
      if (m === -1) {
        console.warn(`尝试关闭右侧标签页，但目标标签页不存在: ${l}`);
        return;
      }
      const F = t.value.slice(m + 1).filter(h);
      if (F.length === 0) {
        console.warn("右侧没有可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter(
        (x, E) => E <= m || !h(x)
      );
      const d = a(l);
      d && (e.value = d);
    }, S = (l) => {
      const m = a(l);
      if (!m) {
        console.warn(`尝试关闭其他标签页，但目标标签页不存在: ${l}`);
        return;
      }
      const F = t.value.filter((d) => d.path !== l).filter(h);
      if (F.length === 0) {
        console.warn("没有其他可关闭的标签页");
        return;
      }
      V(F), t.value = t.value.filter((d) => d.path === l || !h(d)), e.value = m;
    }, $ = () => {
      const { homePath: l } = Ae(), m = t.value.some((x) => x.fixedTab), k = t.value.filter((x) => h(x) ? m || x.path !== l.value : !1);
      if (k.length === 0) {
        console.warn("没有可关闭的标签页");
        return;
      }
      if (V(k), t.value = t.value.filter((x) => !h(x) || !m && x.path === l.value), !r.value) {
        e.value = {}, f({ path: l.value });
        return;
      }
      const d = t.value.find((x) => x.path === l.value) || t.value[0];
      e.value = d, f(d);
    }, T = (l) => {
      !l.keepAlive || !l.name || n.value.includes(l.name) || n.value.push(l.name);
    }, W = (l) => {
      l && (n.value = n.value.filter((m) => m !== l));
    }, V = (l) => {
      l.forEach((m) => {
        m.name && T(m);
      });
    };
    return {
      // 状态
      current: e,
      opened: t,
      keepAliveExclude: n,
      // 计算属性
      hasOpenedTabs: r,
      hasMultipleTabs: c,
      currentTabIndex: i,
      // 方法
      openTab: C,
      removeTab: I,
      removeLeft: B,
      removeRight: v,
      removeOthers: S,
      removeAll: $,
      toggleFixedTab: (l) => {
        const m = s(l);
        if (m === -1) {
          console.warn(`尝试切换不存在标签页的固定状态: ${l}`);
          return;
        }
        const k = { ...t.value[m] };
        if (k.fixedTab = !k.fixedTab, t.value.splice(m, 1), k.fixedTab) {
          const F = t.value.findIndex((x) => !x.fixedTab), d = F === -1 ? t.value.length : F;
          t.value.splice(d, 0, k);
        } else {
          const F = t.value.filter((d) => d.fixedTab).length;
          t.value.splice(F, 0, k);
        }
        e.value.path === l && (e.value = k);
      },
      validateWorktabs: (l) => {
        try {
          const m = (d) => {
            try {
              return d.name && l.getRoutes().some((E) => E.name === d.name) ? !0 : d.path ? l.resolve({
                path: d.path,
                query: d.query || void 0
              }).matched.length > 0 : !1;
            } catch {
              return !1;
            }
          }, k = t.value.filter((d) => m(d));
          k.length !== t.value.length && (console.warn("发现无效的标签页路由，已自动清理"), t.value = k);
          const F = e.value && m(e.value);
          !F && k.length > 0 ? (console.warn("当前激活标签无效，已自动切换"), e.value = k[0]) : F || (e.value = {});
        } catch (m) {
          console.error("验证工作台标签页失败:", m);
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
      findTabIndex: s,
      getTab: a,
      isTabClosable: h,
      addKeepAliveExclude: T,
      removeKeepAliveExclude: W,
      markTabsToRemove: V,
      getTabTitle: (l) => a(l),
      updateTabTitle: (l, m) => {
        const k = a(l);
        k && (k.customTitle = m);
      },
      resetTabTitle: (l) => {
        const m = a(l);
        m && (m.customTitle = "");
      }
    };
  },
  {
    persist: {
      key: "worktab",
      storage: sessionStorage
    }
  }
), jn = {
  key: 0,
  class: "work-tab"
}, Yn = ["id", "onClick", "onContextmenu"], Qn = ["onClick"], Jn = /* @__PURE__ */ z({
  name: "AoWorkTab",
  __name: "AoWorkTab",
  setup(e) {
    const { t } = we(), n = De(), r = Fe(), c = Be(), { currentRoute: i } = c, s = J(), { showWorkTab: a } = te(s), h = w(null), f = w(null), C = w(), _ = w({
      translateX: 0,
      transition: ""
    }), I = w({
      startX: 0,
      currentX: 0
    }), B = w(""), v = M(() => n.opened), S = M(() => i.value.path), $ = M(() => v.value.findIndex((d) => d.path === S.value)), T = () => {
      const d = () => {
        const y = v.value.findIndex((p) => p.path === B.value), L = v.value[y];
        return {
          clickedIndex: y,
          currentTab: L,
          isLastTab: y === v.value.length - 1,
          isOneTab: v.value.length === 1,
          isCurrentTab: B.value === S.value
        };
      }, x = (y) => {
        const L = v.value.slice(0, y), p = v.value.slice(y + 1), H = v.value.filter((R, N) => N !== y);
        return {
          areAllLeftTabsFixed: L.length > 0 && L.every((R) => R.fixedTab),
          areAllRightTabsFixed: p.length > 0 && p.every((R) => R.fixedTab),
          areAllOtherTabsFixed: H.length > 0 && H.every((R) => R.fixedTab),
          areAllTabsFixed: v.value.every((R) => R.fixedTab)
        };
      };
      return { menuItems: M(() => {
        const { clickedIndex: y, currentTab: L, isLastTab: p, isOneTab: H, isCurrentTab: R } = d(), N = x(y);
        return [
          {
            key: "refresh",
            label: t("worktab.btn.refresh"),
            icon: "ri:refresh-line",
            disabled: !R
          },
          {
            key: "fixed",
            label: L?.fixedTab ? t("worktab.btn.unfixed") : t("worktab.btn.fixed"),
            icon: "ri:pushpin-2-line",
            disabled: !1,
            showLine: !0
          },
          {
            key: "left",
            label: t("worktab.btn.closeLeft"),
            icon: "ri:arrow-left-s-line",
            disabled: y === 0 || N.areAllLeftTabsFixed
          },
          {
            key: "right",
            label: t("worktab.btn.closeRight"),
            icon: "ri:arrow-right-s-line",
            disabled: p || N.areAllRightTabsFixed
          },
          {
            key: "other",
            label: t("worktab.btn.closeOther"),
            icon: "ri:close-fill",
            disabled: H || N.areAllOtherTabsFixed
          },
          {
            key: "all",
            label: t("worktab.btn.closeAll"),
            icon: "ri:close-circle-line",
            disabled: H || N.areAllTabsFixed
          }
        ];
      }) };
    }, W = () => {
      const d = () => {
        _.value.transition = "transform 0.5s cubic-bezier(0.15, 0, 0.15, 1)", setTimeout(() => {
          _.value.transition = "";
        }, 250);
      }, x = () => document.getElementById(`scroll-li-${$.value}`), E = () => {
        if (!h.value || !f.value) return;
        const p = h.value.offsetWidth, H = f.value.offsetWidth, R = x();
        if (!R) return;
        const { offsetLeft: N, clientWidth: re } = R, se = N + re, ve = p - se;
        return {
          scrollWidth: p,
          ulWidth: H,
          offsetLeft: N,
          clientWidth: re,
          curTabRight: se,
          targetLeft: ve
        };
      };
      return {
        setTransition: d,
        autoPositionTab: () => {
          const p = E();
          if (!p) return;
          const { scrollWidth: H, ulWidth: R, offsetLeft: N, curTabRight: re, targetLeft: se } = p;
          N > Math.abs(_.value.translateX) && re <= H || _.value.translateX < se && se < 0 || requestAnimationFrame(() => {
            re > H ? _.value.translateX = Math.max(se - 6, H - R) : N < Math.abs(_.value.translateX) && (_.value.translateX = -N);
          });
        },
        adjustPositionAfterClose: () => {
          const p = E();
          if (!p) return;
          const { scrollWidth: H, ulWidth: R, offsetLeft: N, clientWidth: re } = p, se = N + re;
          requestAnimationFrame(() => {
            _.value.translateX = se > H ? H - R : 0;
          });
        }
      };
    }, V = () => {
      const { setTransition: d, adjustPositionAfterClose: x } = W(), E = (N) => {
        if (!h.value || !f.value || (N.preventDefault(), f.value.offsetWidth <= h.value.offsetWidth)) return;
        const re = 0, se = h.value.offsetWidth - f.value.offsetWidth, ve = Math.abs(N.deltaX) > Math.abs(N.deltaY) ? N.deltaX : N.deltaY;
        _.value.translateX = Math.min(
          Math.max(_.value.translateX - ve, se),
          re
        );
      }, y = (N) => {
        I.value.startX = N.touches[0].clientX;
      }, L = (N) => {
        if (!h.value || !f.value) return;
        I.value.currentX = N.touches[0].clientX;
        const re = I.value.currentX - I.value.startX, se = h.value.offsetWidth - f.value.offsetWidth;
        _.value.translateX = Math.min(
          Math.max(_.value.translateX + re, se),
          0
        ), I.value.startX = I.value.currentX;
      }, p = () => {
        d();
      };
      return {
        setupEventListeners: () => {
          f.value && (f.value.addEventListener("wheel", E, { passive: !1 }), f.value.addEventListener("touchstart", y, { passive: !0 }), f.value.addEventListener("touchmove", L, { passive: !0 }), f.value.addEventListener("touchend", p, { passive: !0 }));
        },
        cleanupEventListeners: () => {
          f.value && (f.value.removeEventListener("wheel", E), f.value.removeEventListener("touchstart", y), f.value.removeEventListener("touchmove", L), f.value.removeEventListener("touchend", p));
        },
        adjustPositionAfterClose: x
      };
    }, G = (d) => {
      const x = (p) => {
        c.push({
          path: p.path,
          query: p.query
        });
      }, E = (p, H) => {
        const R = typeof H == "string" ? H : r.path;
        ({
          current: () => n.removeTab(R),
          left: () => n.removeLeft(R),
          right: () => n.removeRight(R),
          other: () => n.removeOthers(R),
          all: () => n.removeAll()
        })[p]?.(), setTimeout(() => {
          d();
        }, 100);
      };
      return {
        clickTab: x,
        closeWorktab: E,
        showMenu: (p, H) => {
          B.value = H || "", C.value?.show(p), p.preventDefault(), p.stopPropagation();
        },
        handleSelect: (p) => {
          const { key: H } = p;
          if (H === "refresh") {
            Ae().refresh();
            return;
          }
          if (H === "fixed") {
            De().toggleFixedTab(B.value);
            return;
          }
          const R = v.value.findIndex((ve) => ve.path === S.value), N = v.value.findIndex((ve) => ve.path === B.value);
          ({
            left: R < N,
            right: R > N,
            other: !0
          })[H] && c.push(B.value), E(H, B.value);
        }
      };
    }, { menuItems: le } = T(), { setTransition: ce, autoPositionTab: K } = W(), { setupEventListeners: ie, cleanupEventListeners: q, adjustPositionAfterClose: O } = V(), { clickTab: l, closeWorktab: m, showMenu: k, handleSelect: F } = G(O);
    return Te(() => {
      ie(), K();
    }), Me(() => {
      q();
    }), he(
      () => i.value,
      () => {
        ce(), K();
      }
    ), he(
      () => ct().value,
      () => {
        _.value.translateX = 0, _e(() => {
          K();
        });
      }
    ), (d, x) => {
      const E = Oe("AoMenuRight");
      return o(a) ? (g(), A("div", jn, [
        u("div", {
          class: "work-tab__scroll",
          ref_key: "scrollRef",
          ref: h
        }, [
          u("ul", {
            class: "work-tab__list",
            ref_key: "tabsRef",
            ref: f,
            style: ee({
              transform: `translateX(${_.value.translateX}px)`,
              transition: `${_.value.transition}`
            })
          }, [
            (g(!0), A(Q, null, Z(v.value, (y, L) => (g(), A("li", {
              class: ae(["work-tab__item ao-card-xs", [
                y.path === S.value ? "work-tab__item--active activ-tab" : "work-tab__item--inactive"
              ]]),
              style: ee({ padding: y.fixedTab ? "0 10px" : "0 8px 0 12px" }),
              key: y.path,
              ref_for: !0,
              ref: y.path,
              id: `scroll-li-${L}`,
              onClick: (p) => o(l)(y),
              onContextmenu: Ce((p) => o(k)(p, y.path), ["prevent"])
            }, [
              Se(D(y.customTitle || o(ge)(y.title)) + " ", 1),
              v.value.length > 1 && !y.fixedTab ? (g(), A("span", {
                key: 0,
                class: "work-tab__close",
                onClick: Ce((p) => o(m)("current", y.path), ["stop"])
              }, [
                b(o(Y), {
                  icon: "ri:close-large-fill",
                  class: "work-tab__close-icon"
                })
              ], 8, Qn)) : j("", !0)
            ], 46, Yn))), 128))
          ], 4)
        ], 512),
        b(E, {
          ref_key: "menuRef",
          ref: C,
          "menu-items": o(le),
          "menu-width": 140,
          "border-radius": 10,
          onSelect: o(F)
        }, null, 8, ["menu-items", "onSelect"])
      ])) : j("", !0);
    };
  }
}), Zn = /* @__PURE__ */ ne(Jn, [["__scopeId", "data-v-90f4c111"]]), We = Le("appStore", () => {
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
}), eo = [
  { value: He.ZH, label: "简体中文" },
  { value: He.EN, label: "English" }
];
function Ie() {
  const e = J(), t = () => {
    const a = document.createElement("style");
    a.setAttribute("id", "disable-transitions"), a.textContent = "* { transition: none !important; }", document.head.appendChild(a);
  }, n = () => {
    const a = document.getElementById("disable-transitions");
    a && a.remove();
  }, r = (a, h) => {
    t();
    const f = document.getElementsByTagName("html")[0], C = a === X.DARK;
    h || (h = a);
    const _ = fe.systemThemeStyles[a];
    _ && f.setAttribute("class", _.className);
    const I = e.systemThemeColor;
    for (let B = 1; B <= 9; B++)
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${B}`,
        C ? `${Ve(I, B / 10)}` : `${mt(I, B / 10)}`
      );
    e.setGlopTheme(a, h), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        n();
      });
    });
  }, c = lt(), i = () => {
    const a = c.value ? X.DARK : X.LIGHT;
    r(a, X.AUTO);
  };
  return {
    setSystemTheme: r,
    setSystemAutoTheme: i,
    switchThemeStyles: (a) => {
      a === X.AUTO ? i() : r(a);
    },
    prefersDark: c
  };
}
function ca() {
  const e = J(), t = lt(), n = () => {
    const r = document.getElementsByTagName("html")[0];
    let c = e.systemThemeType;
    e.systemThemeMode === X.AUTO && (c = t.value ? X.DARK : X.LIGHT, e.systemThemeType = c);
    const i = fe.systemThemeStyles[c];
    i && r.setAttribute("class", i.className), ft(e.systemThemeColor);
  };
  n(), e.systemThemeMode === X.AUTO && he(
    t,
    () => {
      e.systemThemeMode === X.AUTO && n();
    },
    { immediate: !1 }
  );
}
const { LIGHT: ze, DARK: to } = X, no = (e) => {
  const t = e.clientX, n = e.clientY, r = Math.hypot(Math.max(t, innerWidth - t), Math.max(n, innerHeight - n));
  document.documentElement.style.setProperty("--x", t + "px"), document.documentElement.style.setProperty("--y", n + "px"), document.documentElement.style.setProperty("--r", r + "px"), document.startViewTransition ? document.startViewTransition(() => je()) : je();
}, je = () => {
  Ie().switchThemeStyles(J().systemThemeType === ze ? to : ze), Ae().refresh();
};
function oo() {
  const e = J(), t = M(() => Re), { showMenuButton: n, showFastEnter: r, showLanguage: c, showNotification: i } = te(e), s = (K) => t.value[K]?.enabled ?? !1, a = (K) => t.value[K], h = M(() => s("menuButton") && n.value), f = M(() => s("fastEnter") && r.value), C = M(() => s("globalSearch")), _ = M(() => s("fullscreen")), I = M(() => s("notification") && i.value), B = M(() => s("language") && c.value), v = M(() => s("settings")), S = M(() => s("themeToggle")), $ = M(() => a("fastEnter")?.minWidth || 1200), T = (K) => s(K), W = (K) => a(K), V = () => Object.keys(t.value).filter(
    (K) => t.value[K]?.enabled
  ), G = () => Object.keys(t.value).filter(
    (K) => !t.value[K]?.enabled
  );
  return {
    // 配置
    headerBarConfig: t,
    // 显示状态计算属性
    shouldShowMenuButton: h,
    // 是否显示菜单按钮
    shouldShowFastEnter: f,
    // 是否显示快速入口
    shouldShowGlobalSearch: C,
    // 是否显示全局搜索
    shouldShowFullscreen: _,
    // 是否显示全屏按钮
    shouldShowNotification: I,
    // 是否显示通知中心
    shouldShowLanguage: B,
    // 是否显示语言切换
    shouldShowSettings: v,
    // 是否显示设置面板
    shouldShowThemeToggle: S,
    // 是否显示主题切换
    // 配置相关
    fastEnterMinWidth: $,
    // 快速入口最小宽度
    // 方法
    isFeatureEnabled: s,
    // 检查功能是否启用
    isFeatureActive: T,
    // 检查功能是否启用（别名）
    getFeatureConfig: a,
    // 获取功能配置
    getFeatureInfo: W,
    // 获取功能配置（别名）
    getEnabledFeatures: V,
    // 获取所有启用的功能
    getDisabledFeatures: G,
    // 获取所有禁用的功能
    getActiveFeatures: () => V(),
    // 获取所有启用的功能（别名）
    getInactiveFeatures: () => G()
    // 获取所有禁用的功能（别名）
  };
}
const so = { class: "user-menu" }, ao = { class: "user-menu__header" }, lo = { class: "user-menu__info" }, io = { class: "user-menu__name" }, ro = { class: "user-menu__email" }, co = { class: "user-menu__list" }, uo = /* @__PURE__ */ z({
  name: "AoUserMenu",
  __name: "AoUserMenu",
  setup(e) {
    const t = M(() => nn()), { t: n } = we(), r = w(), c = () => {
      xe.info("正在开发中");
    }, i = () => {
      s(), setTimeout(() => {
        xt.confirm(n("common.logOutTips"), n("common.tips"), {
          confirmButtonText: n("common.confirm"),
          cancelButtonText: n("common.cancel"),
          customClass: "login-out-dialog"
        }).then(() => {
          sn();
        });
      }, 200);
    }, s = () => {
      setTimeout(() => {
        r.value.hide();
      }, 100);
    };
    return (a, h) => (g(), U(o(Tt), {
      ref_key: "userMenuPopover",
      ref: r,
      placement: "bottom-end",
      width: 240,
      "hide-after": 0,
      offset: 10,
      trigger: "hover",
      "show-arrow": !1,
      "popper-class": "user-menu-popover",
      "popper-style": "padding: 5px 16px;"
    }, {
      reference: P(() => [...h[0] || (h[0] = [
        u("img", {
          class: "user-avatar",
          src: "https://dummyimage.com/160x160.png",
          alt: "avatar"
        }, null, -1)
      ])]),
      default: P(() => [
        u("div", so, [
          u("div", ao, [
            h[1] || (h[1] = u("img", {
              class: "user-menu__avatar",
              src: "https://dummyimage.com/160x160.png"
            }, null, -1)),
            u("div", lo, [
              u("span", io, D(t.value?.userName), 1),
              u("span", ro, D(t.value?.email), 1)
            ])
          ]),
          u("ul", co, [
            u("li", {
              class: "btn-item",
              onClick: c
            }, [
              b(o(Y), { icon: "ri:user-3-line" }),
              u("span", null, D(a.$t("topBar.user.userCenter")), 1)
            ]),
            h[2] || (h[2] = u("div", { class: "user-menu__divider" }, null, -1)),
            u("div", {
              class: "log-out",
              onClick: i
            }, D(a.$t("topBar.user.logout")), 1)
          ])
        ])
      ]),
      _: 1
    }, 512));
  }
}), ho = /* @__PURE__ */ ne(uo, [["__scopeId", "data-v-ec1c4f21"]]), mo = { class: "header-bar" }, fo = { class: "header-bar__inner" }, go = { class: "header-bar__left" }, vo = { class: "header-bar__right" }, po = { class: "search-box__left" }, yo = { class: "search-box__text" }, _o = { class: "search-box__shortcut" }, bo = { class: "menu-txt" }, Ao = /* @__PURE__ */ z({
  name: "AoHeaderBar",
  __name: "index",
  setup(e) {
    const t = ct(), n = on(), r = navigator.userAgent.includes("Windows"), c = Be(), { locale: i } = we(), { width: s } = it(), a = J(), h = We(), {
      shouldShowMenuButton: f,
      shouldShowFastEnter: C,
      shouldShowGlobalSearch: _,
      shouldShowFullscreen: I,
      shouldShowNotification: B,
      shouldShowLanguage: v,
      shouldShowSettings: S,
      shouldShowThemeToggle: $,
      fastEnterMinWidth: T
    } = oo(), { menuOpen: W, isDark: V } = te(a), G = w(!1), { isFullscreen: le, toggle: ce } = Ht();
    Te(() => {
      m(), document.addEventListener("click", x);
    }), Me(() => {
      document.removeEventListener("click", x);
    });
    const K = () => {
      ce();
    }, ie = () => {
      a.setMenuOpen(!W.value);
    }, { homePath: q, refresh: O } = Ae(), l = () => {
      c.push(q.value);
    }, m = () => {
      i.value = t.value;
    }, k = (y) => {
      i.value !== y && (i.value = y, t.value = y, n?.(y), setTimeout(O, 50));
    }, F = () => {
      h.openGlobalSearch();
    }, d = () => {
      h.openSettingsPanel();
    }, x = (y) => {
      if (!G.value) return;
      const L = y.target, p = L.closest(".notice-button"), H = L.closest(".ao-notification-panel");
      !p && !H && (G.value = !1);
    }, E = () => {
      G.value = !G.value;
    };
    return (y, L) => (g(), A("div", mo, [
      u("div", fo, [
        u("div", go, [
          b(o(et), {
            class: "header-bar__logo-hidden",
            onClick: l
          }),
          o(f) ? (g(), U(o(pe), {
            key: 0,
            icon: "ri:menu-2-fill",
            class: "header-bar__menu-btn",
            onClick: ie
          })) : j("", !0),
          o(C) && o(s) >= o(T) ? (g(), U(un, { key: 1 }, {
            default: P(() => [
              b(o(pe), {
                icon: "ri:function-line",
                class: "header-bar__fast-enter-btn"
              })
            ]),
            _: 1
          })) : j("", !0),
          b(Zn)
        ]),
        u("div", vo, [
          o(_) ? (g(), A("div", {
            key: 0,
            class: "search-box",
            onClick: F
          }, [
            u("div", po, [
              b(o(Y), {
                icon: "ri:search-line",
                class: "search-box__icon"
              }),
              u("span", yo, D(y.$t("topBar.search.title")), 1)
            ]),
            u("div", _o, [
              o(r) ? (g(), U(o(Y), {
                key: 0,
                icon: "vaadin:ctrl-a",
                class: "search-box__shortcut-icon"
              })) : (g(), U(o(Y), {
                key: 1,
                icon: "ri:command-fill",
                class: "search-box__shortcut-icon-mac"
              })),
              L[1] || (L[1] = u("span", { class: "search-box__shortcut-key" }, "k", -1))
            ])
          ])) : j("", !0),
          o(I) ? (g(), U(o(pe), {
            key: 1,
            icon: o(le) ? "ri:fullscreen-exit-line" : "ri:fullscreen-fill",
            class: ae([
              o(le) ? "exit-full-screen-btn" : "full-screen-btn",
              "header-bar__fullscreen-btn"
            ]),
            onClick: K
          }, null, 8, ["icon", "class"])) : j("", !0),
          o(v) ? (g(), U(o(tt), {
            key: 2,
            onCommand: k,
            "popper-class": "langDropDownStyle"
          }, {
            dropdown: P(() => [
              b(o(nt), null, {
                default: P(() => [
                  (g(!0), A(Q, null, Z(o(eo), (p) => (g(), A("div", {
                    key: p.value,
                    class: "lang-btn-item"
                  }, [
                    b(o(ot), {
                      command: p.value,
                      class: ae({ "is-selected": o(i) === p.value })
                    }, {
                      default: P(() => [
                        u("span", bo, D(p.label), 1),
                        o(i) === p.value ? (g(), U(o(Y), {
                          key: 0,
                          icon: "ri:check-fill"
                        })) : j("", !0)
                      ]),
                      _: 2
                    }, 1032, ["command", "class"])
                  ]))), 128))
                ]),
                _: 1
              })
            ]),
            default: P(() => [
              b(o(pe), {
                icon: "ri:translate-2",
                class: "language-btn header-bar__language-btn"
              })
            ]),
            _: 1
          })) : j("", !0),
          o(B) ? (g(), U(o(pe), {
            key: 3,
            icon: "ri:notification-2-line",
            class: "notice-button header-bar__notice-btn",
            onClick: E
          }, {
            default: P(() => [...L[2] || (L[2] = [
              u("div", { class: "notice-dot" }, null, -1)
            ])]),
            _: 1
          })) : j("", !0),
          o(S) ? (g(), U(o(pe), {
            key: 4,
            icon: "ri:settings-line",
            class: "setting-btn",
            onClick: d
          })) : j("", !0),
          o($) ? (g(), U(o(pe), {
            key: 5,
            onClick: o(no),
            icon: o(V) ? "ri:sun-fill" : "ri:moon-line"
          }, null, 8, ["onClick", "icon"])) : j("", !0),
          b(ho)
        ])
      ]),
      b(Fn, {
        value: G.value,
        "onUpdate:value": L[0] || (L[0] = (p) => G.value = p),
        ref: "notice"
      }, null, 8, ["value"])
    ]));
  }
}), To = /* @__PURE__ */ ne(Ao, [["__scopeId", "data-v-411c42c2"]]), xo = "--ao-header-height", wo = "--ao-content-header-height";
function vt(e, t) {
  const { height: n } = qe(
    e,
    { width: 0, height: 0 },
    { box: "border-box" }
  ), { height: r } = qe(
    t,
    { width: 0, height: 0 },
    { box: "border-box" }
  );
  return pt(() => {
    const c = n.value, i = r.value;
    typeof document > "u" || requestAnimationFrame(() => {
      const s = document.documentElement.style;
      s.setProperty(xo, `${c}px`), s.setProperty(wo, `${i}px`);
    });
  }), { headerHeight: n, contentHeaderHeight: r };
}
function ua() {
  const e = w(), t = w(), { headerHeight: n, contentHeaderHeight: r } = vt(e, t);
  return {
    /** 头部元素引用 */
    headerRef: e,
    /** 内容头部元素引用 */
    contentHeaderRef: t,
    /** 头部高度（响应式） */
    headerHeight: n,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: r
  };
}
function So(e = ["app-header", "app-content-header"]) {
  const t = w(), n = w(), { headerHeight: r, contentHeaderHeight: c } = vt(t, n);
  return Te(() => {
    typeof document > "u" || requestAnimationFrame(() => {
      const i = document.getElementById(e[0]), s = document.getElementById(e[1]);
      i && (t.value = i), s && (n.value = s);
    });
  }), {
    /** 头部元素引用 */
    headerRef: t,
    /** 内容头部元素引用 */
    contentHeaderRef: n,
    /** 头部高度（响应式） */
    headerHeight: r,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: c
  };
}
const ko = { id: "app-content-header" }, Co = {
  key: 0,
  class: "route-info-debug"
}, Eo = { class: "transition-mask" }, Mo = /* @__PURE__ */ z({
  name: "AoPageContent",
  __name: "AoPageContent",
  setup(e) {
    const t = Fe();
    So();
    const { refresh: n } = te(J()), { keepAliveExclude: r } = te(De()), c = M(() => {
      const v = new Set(r.value);
      return !t.meta.keepAlive && typeof t.name == "string" && v.add(t.name), [...v];
    }), i = yt(!0), s = void 0, a = w(!1), h = w(!0), f = M(() => t.matched.some((v) => v.meta?.isFullPage)), C = w(f.value), _ = M(() => h.value || C.value && !f.value ? "" : "slide-left");
    he(f, (v, S) => {
      v !== S && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 50)), _e(() => {
        C.value = v;
      });
    });
    const I = {
      minHeight: "var(--ao-full-height)"
    };
    return he(n, () => {
      i.value = !1, _e(() => {
        i.value = !0;
      });
    }, { flush: "post" }), Te(() => {
      _e(() => {
        h.value = !1;
      });
    }), (v, S) => {
      const $ = Oe("RouterView");
      return g(), A("div", {
        class: ae(["layout-content", { "layout-content--full-page": f.value }])
      }, [
        u("div", ko, [
          o(s) === "true" ? (g(), A("div", Co, " router meta：" + D(o(t).meta), 1)) : j("", !0)
        ]),
        i.value ? (g(), U($, {
          key: 0,
          style: I
        }, {
          default: P(({ Component: T, route: W }) => [
            b(_t, {
              name: a.value ? "" : _.value,
              mode: "out-in",
              appear: ""
            }, {
              default: P(() => [
                (g(), U(bt, {
                  max: 10,
                  exclude: c.value
                }, [
                  (g(), U(Qe(T), {
                    class: "ao-page-view",
                    key: W.path
                  }))
                ], 1032, ["exclude"]))
              ]),
              _: 2
            }, 1032, ["name"])
          ]),
          _: 1
        })) : j("", !0),
        (g(), U(At, { to: "body" }, [
          ue(u("div", Eo, null, 512), [
            [de, a.value]
          ])
        ]))
      ], 2);
    };
  }
}), Bo = /* @__PURE__ */ ne(Mo, [["__scopeId", "data-v-53dbfe85"]]), Lo = { class: "menu-icon" }, Io = { class: "menu-name" }, $o = {
  key: 0,
  class: "ao-badge",
  style: { right: "10px" }
}, Ho = { class: "menu-icon" }, Do = {
  class: "ao-badge",
  style: { right: "5px" }
}, Oo = { class: "menu-name" }, Fo = {
  key: 0,
  class: "ao-badge"
}, Ro = {
  key: 1,
  class: "ao-text-badge"
}, No = /* @__PURE__ */ z({
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
    const n = e, r = t, c = J(), { menuOpen: i } = te(c), s = M(() => C(n.list)), a = (v) => {
      h(), gt(v);
    }, h = () => {
      r("close");
    }, f = (v) => !!(!v.meta.isHide && (v.path && v.path.trim() || v.meta.link || v.meta.isIframe === !0) && (v.component || v.meta.link || v.meta.isIframe === !0)), C = (v) => v.filter((S) => S.meta.isHide ? !1 : S.children && S.children.length > 0 && C(S.children).length > 0 || f(S)).map((S) => ({
      ...S,
      children: S.children ? C(S.children) : void 0
    })), _ = (v) => !v.children || v.children.length === 0 ? !1 : C(v.children).length > 0, I = (v) => !!(v.meta.link && !v.meta.isIframe), B = (v, S) => `${v.path || v.meta.title || "menu"}-${n.level}-${S}`;
    return (v, S) => {
      const $ = Oe("SidebarSubmenu", !0);
      return g(!0), A(Q, null, Z(s.value, (T, W) => (g(), A(Q, {
        key: B(T, W)
      }, [
        _(T) ? (g(), U(o(wt), {
          key: 0,
          index: T.path || T.meta.title,
          level: e.level
        }, {
          title: P(() => [
            u("div", Lo, [
              b(o(Y), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: ee({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            u("span", Io, D(o(ge)(T.meta.title)), 1),
            T.meta.showBadge ? (g(), A("div", $o)) : j("", !0)
          ]),
          default: P(() => [
            b($, {
              list: T.children,
              "is-mobile": e.isMobile,
              level: e.level + 1,
              theme: e.theme,
              onClose: h
            }, null, 8, ["list", "is-mobile", "level", "theme"])
          ]),
          _: 2
        }, 1032, ["index", "level"])) : (g(), U(o(St), {
          key: 1,
          index: I(T) ? T.meta.title : T.path || T.meta.title,
          "level-item": e.level + 1,
          onClick: (V) => a(T)
        }, {
          title: P(() => [
            u("span", Oo, D(o(ge)(T.meta.title)), 1),
            T.meta.showBadge ? (g(), A("div", Fo)) : j("", !0),
            T.meta.showTextBadge && (e.level > 0 || o(i)) ? (g(), A("div", Ro, D(T.meta.showTextBadge), 1)) : j("", !0)
          ]),
          default: P(() => [
            u("div", Ho, [
              b(o(Y), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: ee({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            ue(u("div", Do, null, 512), [
              [de, T.meta.showBadge && e.level === 0 && !o(i)]
            ])
          ]),
          _: 2
        }, 1032, ["index", "level-item", "onClick"]))
      ], 64))), 128);
    };
  }
}), Po = /* @__PURE__ */ ne(No, [["__scopeId", "data-v-c56496ea"]]), Vo = {
  key: 0,
  class: "layout-sidebar"
}, Ye = 800, Wo = 350, Uo = /* @__PURE__ */ z({
  name: "AoSidebarMenu",
  __name: "index",
  setup(e) {
    const t = Fe(), n = Be(), r = J(), { uniqueOpened: c, menuOpen: i, getMenuTheme: s } = te(r), a = w([]), h = w(!1), f = w(!1), { width: C } = it(), _ = M(() => C.value < Ye), I = M(() => String(t.meta.activePath || t.path)), B = M(() => ke().menuList), v = M(() => ({
      transform: "translateY(0)",
      height: "calc(100% - 60px)",
      transition: "transform 0.3s ease"
    })), { start: S } = Dt(
      () => {
        f.value = !1;
      },
      Wo,
      { immediate: !1 }
    ), { homePath: $ } = Ae(), T = () => {
      n.push($.value);
    }, W = () => {
      r.setMenuOpen(!i.value), _.value && (i.value ? S() : f.value = !0);
    }, V = () => {
      _.value && (r.setMenuOpen(!1), S());
    };
    return he(C, (G) => {
      G < Ye ? (r.setMenuOpen(!1), i.value || (f.value = !1)) : f.value = !1;
    }), he(i, (G) => {
      _.value ? G ? f.value = !0 : S() : f.value = !1;
    }), (G, le) => B.value.length > 0 ? (g(), A("div", Vo, [
      u("div", {
        class: ae(["menu-left", `menu-left-${o(s).theme} menu-left-${o(i) ? "open" : "close"}`]),
        style: ee({
          background: o(s).background
        })
      }, [
        u("div", {
          class: "header",
          onClick: T,
          style: ee({
            background: o(s).background
          })
        }, [
          b(o(et), { class: "logo" }),
          u("p", {
            class: "system-name",
            style: ee({
              color: o(s).systemNameColor,
              opacity: o(i) ? 1 : 0
            })
          }, D(o(ut)()), 5)
        ], 4),
        b(o(at), {
          style: ee(v.value)
        }, {
          default: P(() => [
            b(o(kt), {
              class: ae("el-menu-" + o(s).theme),
              collapse: !o(i),
              "default-active": I.value,
              "text-color": o(s).textColor,
              "unique-opened": o(c),
              "background-color": o(s).background,
              "default-openeds": a.value,
              "popper-class": `menu-left-popper menu-left-${o(s).theme}-popper`,
              "show-timeout": 50,
              "hide-timeout": 50
            }, {
              default: P(() => [
                b(Po, {
                  list: B.value,
                  isMobile: h.value,
                  theme: o(s),
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
          onClick: W,
          style: ee({
            opacity: o(i) ? 1 : 0,
            transform: f.value ? "scale(1)" : "scale(0)"
          })
        }, null, 4)
      ], 6)
    ])) : j("", !0);
  }
}), Go = /* @__PURE__ */ ne(Uo, [["__scopeId", "data-v-4a1b5b01"]]), Ko = { class: "app-layout" }, qo = { id: "app-sidebar" }, Xo = { id: "app-main" }, zo = { id: "app-header" }, jo = { id: "app-content" }, Yo = { id: "app-global" }, Qo = /* @__PURE__ */ z({
  name: "AppLayout",
  __name: "AppLayout",
  setup(e) {
    return (t, n) => (g(), A("div", Ko, [
      u("aside", qo, [
        b(Go)
      ]),
      u("main", Xo, [
        u("div", zo, [
          b(To)
        ]),
        u("div", jo, [
          b(Bo)
        ])
      ]),
      u("div", Yo, [
        b(rn)
      ])
    ]));
  }
}), da = /* @__PURE__ */ ne(Qo, [["__scopeId", "data-v-0f8d5f92"]]), ha = {
  install(e, t = {}) {
    console.info(`[ao-admin-layout] v${Jt}`), en(t), t.i18n && (t.i18n.global.mergeLocaleMessage("zh", Gt), t.i18n.global.mergeLocaleMessage("en", Qt));
  }
};
function Ue() {
  const e = J(), t = {
    // 设置body类名
    setBodyClass: (i, s) => {
      const a = document.getElementsByTagName("body")[0];
      s ? a.classList.add(i) : a.classList.remove(i);
    }
  }, n = (i, s) => () => {
    i(), s?.();
  }, r = {
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
    basicHandlers: r,
    colorHandlers: {
      // 选择主题色
      selectColor: (i) => {
        e.setElementTheme(i), e.reload();
      }
    },
    createToggleHandler: n
  };
}
function Jo() {
  const e = J(), t = We(), { systemThemeType: n, systemThemeMode: r } = te(e), { showSettingsPanel: c } = te(t), { setSystemTheme: i, setSystemAutoTheme: s } = Ie(), { domOperations: a } = Ue(), f = Ot({ tablet: 1e3 }).smaller("tablet"), C = M(() => e.systemThemeColor), _ = () => {
    const $ = () => {
      fe.systemMainColor.includes(C.value) || (e.setElementTheme(fe.systemMainColor[0]), e.reload());
    }, T = () => {
      r.value === X.AUTO ? s() : i(n.value);
    };
    return {
      initSystemColor: $,
      initSystemTheme: T,
      listenerSystemTheme: () => {
        const V = window.matchMedia("(prefers-color-scheme: dark)");
        return V.addEventListener("change", T), () => {
          V.removeEventListener("change", T);
        };
      }
    };
  }, I = () => ({ stopWatch: he(
    f,
    (T) => {
      T ? e.setMenuOpen(!1) : e.setMenuOpen(!0);
    },
    { immediate: !0 }
  ) });
  return {
    // 状态
    showDrawer: c,
    // 方法组合
    useThemeHandlers: _,
    useResponsiveLayout: I,
    useDrawerControl: () => {
      let $ = null;
      return {
        handleOpen: () => {
          $ && clearTimeout($), $ = setTimeout(() => {
            a.setBodyClass("theme-change", !0), $ = null;
          }, 500);
        },
        handleClose: () => {
          $ && (clearTimeout($), $ = null), a.setBodyClass("theme-change", !1);
        },
        closeDrawer: () => {
          c.value = !1;
        }
      };
    },
    usePropsWatcher: ($) => {
      he(
        () => $.open,
        (T) => {
          T !== void 0 && (c.value = T);
        }
      );
    },
    useSettingsInitializer: () => {
      const $ = _(), { stopWatch: T } = I();
      let W = null;
      return {
        initializeSettings: () => {
          $.initSystemColor(), W = $.listenerSystemTheme(), $.initSystemTheme();
        },
        cleanupSettings: () => {
          T(), W?.();
        }
      };
    }
  };
}
const Zo = { class: "setting-drawer" }, es = { class: "drawer-con" }, ts = /* @__PURE__ */ z({
  __name: "SettingDrawer",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: t }) {
    const n = e, r = t, c = M({
      get: () => n.modelValue,
      set: (h) => r("update:modelValue", h)
    }), i = () => {
      r("open");
    }, s = () => {
      r("close");
    }, a = () => {
      c.value = !1;
    };
    return (h, f) => (g(), A("div", Zo, [
      b(o(Ct), {
        size: "300px",
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (C) => c.value = C),
        "lock-scroll": !0,
        "with-header": !1,
        "before-close": a,
        "destroy-on-close": !1,
        "modal-class": "setting-modal",
        onOpen: i,
        onClose: s
      }, {
        default: P(() => [
          u("div", es, [
            Je(h.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ]));
  }
}), ns = { class: "header-actions" }, os = /* @__PURE__ */ z({
  __name: "SettingHeader",
  emits: ["close"],
  setup(e) {
    return (t, n) => (g(), A("div", null, [
      u("div", ns, [
        u("div", {
          onClick: n[0] || (n[0] = (r) => t.$emit("close")),
          class: "close-btn"
        }, [
          b(o(Y), {
            icon: "ri:close-fill",
            class: "close-btn-icon"
          })
        ])
      ])
    ]));
  }
}), ss = /* @__PURE__ */ ne(os, [["__scopeId", "data-v-3b08ee22"]]), as = /* @__PURE__ */ z({
  __name: "SectionTitle",
  props: {
    title: {},
    style: {}
  },
  setup(e) {
    return (t, n) => (g(), A("p", {
      class: "section-title",
      style: ee(e.style)
    }, D(e.title), 5));
  }
}), $e = /* @__PURE__ */ ne(as, [["__scopeId", "data-v-c6cd32c9"]]);
function Ge() {
  const { t: e } = we(), t = {
    // 主题色彩选项
    mainColors: fe.systemMainColor,
    // 主题风格选项
    themeList: fe.settingThemeList
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
  ].filter((c) => c.headerBarKey === null ? !0 : Re[c.headerBarKey]?.enabled !== !1).map(({ headerBarKey: c, ...i }) => i));
  return {
    // 选项配置
    configOptions: t,
    // 设置项配置
    basicSettingsConfig: n
  };
}
const ls = { class: "setting-box-wrap" }, is = ["onClick"], rs = ["src"], cs = { class: "name" }, us = /* @__PURE__ */ z({
  __name: "ThemeSettings",
  setup(e) {
    const t = J(), { systemThemeMode: n } = te(t), { configOptions: r } = Ge(), { switchThemeStyles: c } = Ie();
    return (i, s) => (g(), A(Q, null, [
      b($e, {
        title: i.$t("setting.theme.title")
      }, null, 8, ["title"]),
      u("div", ls, [
        (g(!0), A(Q, null, Z(o(r).themeList, (a, h) => (g(), A("div", {
          class: "setting-item",
          key: a.theme,
          onClick: (f) => o(c)(a.theme)
        }, [
          u("div", {
            class: ae(["box", { "is-active": a.theme === o(n) }])
          }, [
            u("img", {
              src: a.img
            }, null, 8, rs)
          ], 2),
          u("p", cs, D(i.$t(`setting.theme.list[${h}]`)), 1)
        ], 8, is))), 128))
      ])
    ], 64));
  }
}), ds = { class: "setting-box-wrap" }, hs = ["onClick"], ms = ["src"], fs = /* @__PURE__ */ z({
  __name: "MenuStyleSettings",
  setup(e) {
    const t = fe.themeList, n = J(), { menuThemeType: r, isDark: c } = te(n), i = M(() => c.value), s = (a) => {
      c.value || n.switchMenuStyles(a);
    };
    return (a, h) => (g(), A(Q, null, [
      b($e, {
        title: a.$t("setting.menu.title")
      }, null, 8, ["title"]),
      u("div", ds, [
        (g(!0), A(Q, null, Z(o(t), (f) => (g(), A("div", {
          class: "setting-item",
          key: f.theme,
          onClick: (C) => s(f.theme)
        }, [
          u("div", {
            class: ae(["box", { "is-active": f.theme === o(r) }]),
            style: ee({
              cursor: i.value ? "no-drop" : "pointer"
            })
          }, [
            u("img", {
              src: f.img
            }, null, 8, ms)
          ], 6)
        ], 8, hs))), 128))
      ])
    ], 64));
  }
}), gs = { class: "color-list-wrapper" }, vs = { class: "color-list" }, ps = ["onClick"], ys = /* @__PURE__ */ z({
  __name: "ColorSettings",
  setup(e) {
    const t = J(), { systemThemeColor: n } = te(t), { configOptions: r } = Ge(), { colorHandlers: c } = Ue();
    return (i, s) => (g(), A("div", null, [
      b($e, {
        title: i.$t("setting.color.title"),
        class: "color-section-title"
      }, null, 8, ["title"]),
      u("div", gs, [
        u("div", vs, [
          (g(!0), A(Q, null, Z(o(r).mainColors, (a) => (g(), A("div", {
            key: a,
            class: "color-item",
            style: ee({ background: `${a} !important` }),
            onClick: (h) => o(c).selectColor(a)
          }, [
            ue(b(o(Y), {
              icon: "ri:check-fill",
              class: "color-check-icon"
            }, null, 512), [
              [de, a === o(n)]
            ])
          ], 12, ps))), 128))
        ])
      ])
    ]));
  }
}), _s = /* @__PURE__ */ ne(ys, [["__scopeId", "data-v-1d816e31"]]), bs = { class: "setting-item" }, As = { class: "setting-label" }, Ts = /* @__PURE__ */ z({
  __name: "SettingItem",
  props: {
    config: {},
    modelValue: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = t, c = M(() => {
      if (!n.config.options) return [];
      try {
        return typeof n.config.options == "object" && "value" in n.config.options ? n.config.options.value || [] : Array.isArray(n.config.options) ? n.config.options : [];
      } catch (s) {
        return console.warn("Error processing options for config:", n.config.key, s), [];
      }
    }), i = (s) => {
      try {
        r("change", s);
      } catch (a) {
        console.error("Error handling change for config:", n.config.key, a);
      }
    };
    return (s, a) => (g(), A("div", bs, [
      u("span", As, D(e.config.label), 1),
      e.config.type === "switch" ? (g(), U(o(Et), {
        key: 0,
        "model-value": e.modelValue,
        onChange: i
      }, null, 8, ["model-value"])) : e.config.type === "input-number" ? (g(), U(o(Mt), {
        key: 1,
        "model-value": e.modelValue,
        min: e.config.min,
        max: e.config.max,
        step: e.config.step,
        style: ee(e.config.style),
        "controls-position": e.config.controlsPosition,
        onChange: i
      }, null, 8, ["model-value", "min", "max", "step", "style", "controls-position"])) : e.config.type === "select" ? (g(), U(o(Bt), {
        key: 2,
        "model-value": e.modelValue,
        style: ee(e.config.style),
        onChange: i
      }, {
        default: P(() => [
          (g(!0), A(Q, null, Z(c.value, (h) => (g(), U(o(Lt), {
            key: h.value,
            label: h.label,
            value: h.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "style"])) : j("", !0)
    ]));
  }
}), xs = /* @__PURE__ */ ne(Ts, [["__scopeId", "data-v-302f95e8"]]), ws = /* @__PURE__ */ z({
  __name: "BasicSettings",
  setup(e) {
    const t = J(), { basicSettingsConfig: n } = Ge(), { basicHandlers: r } = Ue(), {
      uniqueOpened: c,
      showMenuButton: i,
      showFastEnter: s,
      showWorkTab: a,
      showLanguage: h,
      showNotification: f
    } = te(t), C = {
      uniqueOpened: c,
      showMenuButton: i,
      showFastEnter: s,
      showWorkTab: a,
      showLanguage: h,
      showNotification: f
    }, _ = (B) => C[B]?.value ?? null, I = (B, v) => {
      const S = r[B];
      typeof S == "function" ? S(v) : console.warn(`Handler "${B}" not found in basicHandlers`);
    };
    return (B, v) => (g(), A("div", null, [
      b($e, {
        title: B.$t("setting.basics.title"),
        class: "basic-settings-title"
      }, null, 8, ["title"]),
      (g(!0), A(Q, null, Z(o(n), (S) => (g(), U(xs, {
        key: S.key,
        config: S,
        "model-value": _(S.key),
        onChange: ($) => I(S.handler, $)
      }, null, 8, ["config", "model-value", "onChange"]))), 128))
    ]));
  }
}), Ss = /* @__PURE__ */ ne(ws, [["__scopeId", "data-v-cbba06c8"]]), ks = { class: "setting-actions" }, Cs = /* @__PURE__ */ z({
  name: "SettingActions",
  __name: "SettingActions",
  setup(e) {
    const { t } = we(), n = J(), { switchThemeStyles: r } = Ie(), c = (s, a, h) => {
      s !== a && h();
    }, i = async () => {
      try {
        const s = oe;
        r(s.systemThemeMode), await _e();
        const a = n.isDark ? ye.DARK : s.menuThemeType;
        n.switchMenuStyles(a), n.setElementTheme(s.systemThemeColor), c(
          n.showMenuButton,
          s.showMenuButton,
          () => n.setButton()
        ), c(
          n.showFastEnter,
          s.showFastEnter,
          () => n.setFastEnter()
        ), c(
          n.showLanguage,
          s.showLanguage,
          () => n.setLanguage()
        ), c(
          n.showNotification,
          s.showNotification,
          () => n.setNotification()
        ), n.setWorkTab(s.showWorkTab), c(
          n.uniqueOpened,
          s.uniqueOpened,
          () => n.setUniqueOpened()
        ), location.reload();
      } catch (s) {
        console.error("重置配置失败:", s), xe.error(t("setting.actions.resetFailed"));
      }
    };
    return (s, a) => (g(), A("div", ks, [
      b(o(st), {
        type: "danger",
        plain: "",
        class: "action-button",
        onClick: i
      }, {
        default: P(() => [
          Se(D(s.$t("setting.actions.resetConfig")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), Es = /* @__PURE__ */ ne(Cs, [["__scopeId", "data-v-3d44080b"]]), Ms = { class: "layout-settings" }, Bs = /* @__PURE__ */ z({
  name: "AoSettingsPanel",
  __name: "index",
  props: {
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Jo(), { showDrawer: r } = n, { handleOpen: c, handleClose: i, closeDrawer: s } = n.useDrawerControl(), { initializeSettings: a, cleanupSettings: h } = n.useSettingsInitializer();
    return n.usePropsWatcher(t), Te(() => {
      a();
    }), Me(() => {
      h();
    }), (f, C) => (g(), A("div", Ms, [
      b(ts, {
        modelValue: o(r),
        "onUpdate:modelValue": C[0] || (C[0] = (_) => Ze(r) ? r.value = _ : null),
        onOpen: o(c),
        onClose: o(i)
      }, {
        default: P(() => [
          b(ss, { onClose: o(s) }, null, 8, ["onClose"]),
          b(us),
          b(fs),
          b(_s),
          b(Ss),
          b(Es)
        ]),
        _: 1
      }, 8, ["modelValue", "onOpen", "onClose"])
    ]));
  }
}), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bs
}, Symbol.toStringTag, { value: "Module" })), Is = Le(
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
), $s = { class: "layout-search" }, Hs = { class: "search-input__suffix" }, Ds = { class: "result search-result" }, Os = ["onClick", "onMouseenter"], Fs = { class: "search-history__title" }, Rs = { class: "search-history__list" }, Ns = ["onClick", "onMouseenter"], Ps = ["onClick"], Vs = { class: "dialog-footer" }, Ws = { class: "dialog-footer__group dialog-footer__group--center" }, Us = { class: "dialog-footer__text" }, Gs = { class: "dialog-footer__group" }, Ks = { class: "dialog-footer__text" }, qs = { class: "dialog-footer__group" }, Xs = { class: "dialog-footer__text" }, zs = 10, js = /* @__PURE__ */ z({
  name: "AoGlobalSearch",
  __name: "AoGlobalSearch",
  setup(e) {
    const t = Is(), n = We(), r = M(() => ke().menuList), { showGlobalSearch: c } = te(n), i = w(""), s = w([]), { searchHistory: a } = te(t), h = w(null), f = w(0), C = w(0), _ = w(), I = w(!1);
    he(c, (d) => {
      d && v();
    }), Te(() => {
      document.addEventListener("keydown", B);
    }), Me(() => {
      document.removeEventListener("keydown", B);
    });
    const B = (d) => {
      (navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? d.metaKey : d.ctrlKey) && d.key.toLowerCase() === "k" && (d.preventDefault(), c.value = !0, v()), c.value && (d.key === "ArrowUp" ? (d.preventDefault(), T()) : d.key === "ArrowDown" ? (d.preventDefault(), W()) : d.key === "Enter" ? (d.preventDefault(), le()) : d.key === "Escape" && (d.preventDefault(), c.value = !1));
    }, v = () => {
      setTimeout(() => {
        h.value?.focus();
      }, 100);
    }, S = (d) => {
      d ? s.value = $(r.value, d) : s.value = [];
    }, $ = (d, x) => {
      const E = x.toLowerCase(), y = [], L = (p) => {
        if (p.meta?.isHide) return;
        const H = ge(p.meta.title).toLowerCase();
        if (p.children && p.children.length > 0) {
          p.children.forEach(L);
          return;
        }
        H.includes(E) && (p.path && p.path.trim() || p.meta.link || p.meta.isIframe) && y.push({ ...p, children: void 0 });
      };
      return d.forEach(L), y;
    }, T = () => {
      I.value = !0, i.value ? (f.value = (f.value - 1 + s.value.length) % s.value.length, V()) : (C.value = (C.value - 1 + a.value.length) % a.value.length, G()), setTimeout(() => {
        I.value = !1;
      }, 100);
    }, W = () => {
      I.value = !0, i.value ? (f.value = (f.value + 1) % s.value.length, V()) : (C.value = (C.value + 1) % a.value.length, G()), setTimeout(() => {
        I.value = !1;
      }, 100);
    }, V = () => {
      _e(() => {
        if (!_.value || !s.value.length) return;
        const d = _.value.wrapRef;
        if (!d) return;
        const x = d.querySelectorAll(".result .box");
        if (!x[f.value]) return;
        const E = x[f.value], y = E.offsetHeight, L = d.scrollTop, p = d.clientHeight, H = E.offsetTop, R = H + y;
        H < L ? _.value.setScrollTop(H) : R > L + p && _.value.setScrollTop(R - p);
      });
    }, G = () => {
      _e(() => {
        if (!_.value || !a.value.length) return;
        const d = _.value.wrapRef;
        if (!d) return;
        const x = d.querySelectorAll(".history-result .box");
        if (!x[C.value]) return;
        const E = x[C.value], y = E.offsetHeight, L = d.scrollTop, p = d.clientHeight, H = E.offsetTop, R = H + y;
        H < L ? _.value.setScrollTop(H) : R > L + p && _.value.setScrollTop(R - p);
      });
    }, le = () => {
      i.value && s.value.length ? ie(s.value[f.value]) : !i.value && a.value.length && ie(a.value[C.value]);
    }, ce = (d) => f.value === d, K = () => {
      f.value = 0;
    }, ie = (d) => {
      c.value = !1, O(d), gt(d), i.value = "", s.value = [];
    }, q = () => {
      Array.isArray(a.value) && t.setSearchHistory(a.value);
    }, O = (d) => {
      const x = d.path || String(d.meta.link || ""), E = a.value.findIndex(
        (L) => (L.path || String(L.meta.link || "")) === x
      );
      E !== -1 ? a.value.splice(E, 1) : a.value.length >= zs && a.value.pop();
      const y = { ...d };
      delete y.children, delete y.meta.authList, a.value.unshift(y), q();
    }, l = (d) => {
      a.value.splice(d, 1), q();
    }, m = () => {
      i.value = "", s.value = [], f.value = 0, C.value = 0;
    }, k = (d) => {
      !I.value && i.value && (f.value = d);
    }, F = (d) => {
      !I.value && !i.value && (C.value = d);
    };
    return (d, x) => (g(), A("div", $s, [
      b(o(It), {
        modelValue: o(c),
        "onUpdate:modelValue": x[1] || (x[1] = (E) => Ze(c) ? c.value = E : null),
        width: "600",
        "show-close": !1,
        "lock-scroll": !1,
        "modal-class": "search-modal",
        onClose: m
      }, {
        footer: P(() => [
          u("div", Vs, [
            u("div", Ws, [
              b(o(Y), {
                icon: "fluent:arrow-enter-left-20-filled",
                class: "keyboard"
              }),
              u("span", Us, D(d.$t("search.selectKeydown")), 1)
            ]),
            u("div", Gs, [
              b(o(Y), {
                icon: "ri:arrow-up-wide-fill",
                class: "keyboard"
              }),
              b(o(Y), {
                icon: "ri:arrow-down-wide-fill",
                class: "keyboard"
              }),
              u("span", Ks, D(d.$t("search.switchKeydown")), 1)
            ]),
            u("div", qs, [
              x[2] || (x[2] = u("i", { class: "keyboard keyboard--esc" }, [
                u("p", { class: "keyboard__esc-text" }, "ESC")
              ], -1)),
              u("span", Xs, D(d.$t("search.exitKeydown")), 1)
            ])
          ])
        ]),
        default: P(() => [
          b(o($t), {
            modelValue: i.value,
            "onUpdate:modelValue": x[0] || (x[0] = (E) => i.value = E),
            modelModifiers: { trim: !0 },
            placeholder: d.$t("search.placeholder"),
            onInput: S,
            onBlur: K,
            ref_key: "searchInput",
            ref: h,
            "prefix-icon": o(Ft),
            class: "search-input"
          }, {
            suffix: P(() => [
              u("div", Hs, [
                b(o(Y), { icon: "fluent:arrow-enter-left-20-filled" })
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "prefix-icon"]),
          b(o(at), {
            class: "search-scrollbar",
            "max-height": "370px",
            ref_key: "searchResultScrollbar",
            ref: _,
            always: ""
          }, {
            default: P(() => [
              ue(u("div", Ds, [
                (g(!0), A(Q, null, Z(s.value, (E, y) => (g(), A("div", {
                  class: "box search-result__item",
                  key: y
                }, [
                  u("div", {
                    class: ae(["search-result__inner", ce(y) ? "search-result__inner--highlighted" : ""]),
                    onClick: (L) => ie(E),
                    onMouseenter: (L) => k(y)
                  }, [
                    Se(D(o(ge)(E.meta.title)) + " ", 1),
                    ue(b(o(Y), { icon: "fluent:arrow-enter-left-20-filled" }, null, 512), [
                      [de, ce(y)]
                    ])
                  ], 42, Os)
                ]))), 128))
              ], 512), [
                [de, s.value.length]
              ]),
              ue(u("div", null, [
                u("p", Fs, D(d.$t("search.historyTitle")), 1),
                u("div", Rs, [
                  (g(!0), A(Q, null, Z(o(a), (E, y) => (g(), A("div", {
                    class: ae(["box search-history__item", C.value === y ? "search-history__item--highlighted" : ""]),
                    key: y,
                    onClick: (L) => ie(E),
                    onMouseenter: (L) => F(y)
                  }, [
                    Se(D(o(ge)(E.meta.title)) + " ", 1),
                    u("div", {
                      class: "selected-icon search-history__delete",
                      onClick: Ce((L) => l(y), ["stop"])
                    }, [
                      b(o(Y), {
                        icon: "ri:close-large-fill",
                        class: "search-history__delete-icon"
                      })
                    ], 8, Ps)
                  ], 42, Ns))), 128))
                ])
              ], 512), [
                [de, !i.value && s.value.length === 0 && o(a).length > 0]
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), Ys = /* @__PURE__ */ ne(js, [["__scopeId", "data-v-8518189c"]]), Qs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ys
}, Symbol.toStringTag, { value: "Module" }));
export {
  ha as AdminLayout,
  da as AppLayout,
  ia as findApplicationByPath,
  ge as formatMenuTitle,
  tn as getContextI18n,
  rt as getContextRouter,
  ht as getFirstMenuPath,
  on as getLanguageChangeHandler,
  ct as getLanguageRef,
  ke as getMenuSource,
  ut as getSystemName,
  nn as getUserInfo,
  gt as handleMenuJump,
  ca as initializeTheme,
  sn as logout,
  Xe as openExternalLink,
  en as setLayoutContext,
  ra as setPageTitle,
  We as useAppStore,
  So as useAutoLayoutHeight,
  Ae as useCommon,
  oo as useHeaderBar,
  ua as useLayoutHeight,
  J as useSettingStore,
  Ie as useTheme,
  De as useWorktabStore,
  Jt as version
};
