import { ref as S, defineAsyncComponent as Ue, defineComponent as J, computed as M, openBlock as g, createElementBlock as y, Fragment as j, renderList as te, createBlock as q, resolveDynamicComponent as Qe, unref as i, withCtx as N, renderSlot as xe, createVNode as k, normalizeStyle as Y, normalizeClass as oe, createElementVNode as m, toDisplayString as O, watch as he, withDirectives as ue, withModifiers as Me, vShow as de, createTextVNode as we, useCssVars as vt, onUnmounted as ke, Transition as Je, createCommentVNode as X, onMounted as Te, nextTick as ye, watchEffect as pt, shallowRef as yt, resolveComponent as Ze, KeepAlive as bt, Teleport as _t, normalizeProps as xt, guardReactiveProps as At, createSlots as Tt, isRef as et } from "vue";
import { AoSvgIcon as Q, AoLogo as wt, AoIconButton as ve } from "@ao/admin-components";
import { defineStore as $e, storeToRefs as ne } from "pinia";
import { useRouter as Le, useRoute as Fe } from "vue-router";
import { ElMessage as Ce, ElDropdown as tt, ElDropdownMenu as nt, ElDropdownItem as ot, ElButton as st, ElSubMenu as St, ElMenuItem as kt, ElScrollbar as at, ElMenu as Ct, ElDrawer as Et, ElSwitch as Mt, ElInputNumber as Bt, ElSelect as $t, ElOption as Lt, ElDialog as It, ElInput as Dt } from "element-plus";
import { useI18n as Ee } from "vue-i18n";
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
}, Qt = "7", Jt = S("zh");
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
], sn = () => on.filter((e) => e.enabled !== !1), an = /* @__PURE__ */ J({
  name: "AoGlobalComponent",
  __name: "AoGlobalComponent",
  setup(e) {
    const t = M(() => sn());
    return (n, o) => (g(!0), y(j, null, te(t.value, (c) => (g(), q(Qe(c.component), {
      key: c.key
    }))), 128));
  }
});
var z = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.AUTO = "auto", e))(z || {}), pe = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e.DESIGN = "design", e))(pe || {}), He = /* @__PURE__ */ ((e) => (e.ZH = "zh", e.EN = "en", e))(He || {});
const ln = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////29vj9/f34+Pox8uq3AAABTElEQVRo3u2VwW3EMAwEhcs1QKuBE5QCYlfg9N9UcjHyMUQQtlaASOz89jWwzCUTIYQQQgghhJCUPleBo9ueYoDVrTIAwMdBdEUMsLpvGQHg10F0ojBat6VU9YDWbe9Q9YDV5dc7PFY9QHXLkYoeoLqvI33oAap7HemhB6juP+qBull19qh4LoJdc89LzFzRvg/QH3GvOXXUzahLWKhrQB111P0SS1elj+2S7im97Fd0RXpZruhW6SVf0Uk/E+sAjznxqACKMHHNG0TamWeoo24OXe1sccJe8x2qK/YGtoAeoAzViYlnnf2YnkfFLoLnmjeItDPPUEfdHLoqd9igS8xmR65omwV5gGwy9LzauNDdfkwXo3K7CC5q3iDSzjxDHXVz6GpHj4FLbB+iKx07GHmA8hCdqETQ6Y8ZYVT0IkSoeYNIO/MMddQN1v0AFy9OBRBx85QAAAAASUVORK5CYII=", rn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAG1BMVEUnJyo/P0ZSUlxKSlNOTlc5OT8vLzJDQ0s0NDkX0J24AAABYElEQVRo3u2XMWrEMBBFVW47LM4BHEPqTZPeN3CzvQtD6uQCzs1j4lRGw2DPF2jEf900eqxW/w9OhBBCCCGEEEJS+pwEjm67iQFWN0kBHD8OqpvFAKv7kRI4/jqoThx4dN/j8KEPaN2933joA1g39huDPmB19/6Phz5AdV/7oW/6ANW974e+6gNUN+6HDvoA1fX/6ENknX2ZkZ+KHYTIMTdLLHZFGwso+nqljjrqJGGhLgN11FG30ZZuER/PU7qbeFnP6Gbx8nJGN4mX7oxO/FSsA1xmxU8FEISKY56hpc48Qh11degWZ4oTdpuvUN1sN7AFdAF1UJ2YRNbZlxn5qdhBiBzzDC115hHqqKtDt8gVntASs1mxFe1qbvznZAddrzYhdJcvM8RTuRyEEDHP0FJnHqGOujp0iyPHwBJbi+hmRwcjF1BXRCcqLej0y2zhqehBaCHmGVrqzCPUUVdY9wter4K58MOVTQAAAABJRU5ErkJggg==", cn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAJFBMVEXy8vUREREzMzP////4+Pr19fgcHBz8/P0rKysyMjIwMDAjIyPGISqaAAABlElEQVRo3u3XsUoEMRAGYItdrNMc1hZhY5t7AMHCduEE67MSKyG+gM09iIX9vqFeooRwhGGTIZfk/umm+iA3/8ztVWKJtAIHDhw4cODAgQMHDhy4Orkno+N1m1ZxbdC6JGeKcoMuyu3Kcg9lOVOW02fiPubx8aSx3EGIV25u639I31juW/zWGzM3H5sxaBx3tz9ymy9Wbuvn1DeWk8LWCyv37rrroLHcp+NuWLl71w1BY7m94zas3Oy6MWgsJ/6Klftvg6Ybjn7MlkeFDkLLMaeXWNMrmjhArZ9XcODAaebPSXDgwIG7BO45b0WrwypuyL4Iyxpul83JNZzJ5qY1nM7mVMUcw2NWPCoMQag45p3vTHDg6uQiMfcppor3mi8kxLqiJStnKG5i5TTFqZY5+jFbHhU6CC3HvPOdCQ5cnVzCn/Yw/UW+zRfOFU2X5DxAdE2c55Uu1QSX/JhNjEpyEJqIeec7Exy4OrnTmIc5LvRtvpAA64qWJMB6gCYSYD2vqgcu/pg9jEo8CD3EvPOdCQ5cYe4H2qWIxMTt67gAAAAASUVORK5CYII=", un = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vX////5+fnx8fHd3d0ah087AAAAyklEQVRo3u3Z0Q2AIAxFUeIGbmBYgRXcfyYXaEh8PhXKvQucvzaUsncq9uDg4ODg4OAK3G3uDIJLxFU1idtk7lC4qvcrFwcHBwfn5YwjWuCcC6gF+dYrHBzcAE8SOEO2ES1x+gI67FztBgf3BteC4ODm4KQRrXOlx82/XuHg4OBG5VrQx2cc45FK4aoeHFye4zAcXPp/hNzbPDeX+9IOBzcm5x/Rj7lNXzofrFc4OLiluRa0Fmcc0f4j1UjrFW7eJwkcHBwcHBycswty2jT2B1pWhwAAAABJRU5ErkJggg==", dn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAD1BMVEXy8vUnJyr5+fk/P0bz8/YkmYUBAAAA0ElEQVRo3u3ZwQ3EMAhEUR/SwHZgWenADVjbf1FpwCIyIg6QPw28GyOg/IQU88DBwcHBwcEVuGWuTwKXhzuaNkPD/dXcqeGaPq9y88DBwcHZcnYjui5wFgUUoF7h4NJzuTcguEOewlLMC+g055oYOLgnuD4JHFwMThzRde+RakSvVzg4ODi3HH+EdhO/fwS4uJzD4zAcXPo/Qu42z83lvrTDwfnk7Ef0ePSPIO8FG+oVDg7u01yf5Fvc2oiue49Uw1G9wsVdSeDg4ODg4OAscwFb7y6GSsIW5AAAAABJRU5ErkJggg==", hn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACSBAMAAADcJrmuAAAAElBMVEXy8vX////5+fnx8fHd3d1VVVVl+HYBAAAAzklEQVRo3u3ZYQ2FMAxF4QUHzwGZhVl4FvBvBQE0S7hcYCvnGPj+tVlXfp2KPTg4ODg4OLgCd5rb/sfgEnFVTeIWmVsVruq9ysXBwcHBeTnjiBY45wJqQb71CgcHN8CTBM6QbURLnL6AVjtXu8HB3cG1IDi4OThpROtc6XHzr1c4ODi4UbkW9PAZx3ikUriqBweX5zgMB5f+HyH3Ns/N5b60w8GNyflH9GVu0ZfOA+sVDg7u01wL+hZnHNH+I9VI6xVu3icJHBwcHBwcnLMdqYI1ftKrSesAAAAASUVORK5CYII=", _e = {
  /** 系统主题预览图 */
  themeStyles: {
    /** 亮色主题 */
    light: ln,
    /** 暗色主题 */
    dark: rn,
    /** 自动主题（跟随系统） */
    system: cn
  },
  /** 菜单风格预览图 */
  menuStyles: {
    /** 设计风格 */
    design: un,
    /** 暗色风格 */
    dark: dn,
    /** 亮色风格 */
    light: hn
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
}, mn = {
  // 系统信息
  systemInfo: {
    name: void 0,
    // 系统名称
    version: void 0
    // 系统版本
  },
  // 系统主题
  systemThemeStyles: {
    [z.LIGHT]: { className: "" },
    [z.DARK]: { className: z.DARK }
  },
  // 系统主题列表
  settingThemeList: [
    {
      name: "Light",
      theme: z.LIGHT,
      color: ["#fff", "#fff"],
      leftLineColor: "#EDEEF0",
      rightLineColor: "#EDEEF0",
      img: _e.themeStyles.light
    },
    {
      name: "Dark",
      theme: z.DARK,
      color: ["#22252A"],
      leftLineColor: "#3F4257",
      rightLineColor: "#3F4257",
      img: _e.themeStyles.dark
    },
    {
      name: "System",
      theme: z.AUTO,
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
}, me = Object.freeze(mn);
function Pe(e) {
  const t = e.trim().replace(/^#/, "");
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t);
}
function fn(e, t, n) {
  const o = (c) => Number.isInteger(c) && c >= 0 && c <= 255;
  return o(e) && o(t) && o(n);
}
function Be(e) {
  if (!Pe(e))
    throw Ce.warning("输入错误的hex颜色值"), new Error("Invalid hex color format");
  let n = e.replace(/^#/, "");
  n.length === 3 && (n = n.split("").map((c) => c.repeat(2)).join(""));
  const o = n.match(/../g);
  if (!o)
    throw new Error("Invalid hex color format");
  return o.map((c) => parseInt(c, 16));
}
function Ne(e, t, n) {
  if (!fn(e, t, n))
    throw Ce.warning("输入错误的RGB颜色值"), new Error("Invalid RGB color values");
  const o = (c) => {
    const r = c.toString(16);
    return r.length === 1 ? `0${r}` : r;
  };
  return `#${o(e)}${o(t)}${o(n)}`;
}
function gn(e, t, n) {
  const o = Math.max(0, Math.min(1, Number(n))), c = Be(e), r = Be(t), l = c.map((a, f) => {
    const h = r[f];
    return Math.round(a * (1 - o) + h * o);
  });
  return Ne(l[0], l[1], l[2]);
}
function ut(e, t, n = !1) {
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
  const o = Be(e).map((c) => Math.floor(c * (1 - t)));
  return Ne(o[0], o[1], o[2]);
}
function vn(e, t = !1) {
  document.documentElement.style.setProperty("--el-color-primary", e);
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-light-${n}`,
      ut(e, n / 10, t)
    );
  for (let n = 1; n <= 9; n++)
    document.documentElement.style.setProperty(
      `--el-color-primary-dark-${n}`,
      Ve(e, n / 10)
    );
}
function dt(e) {
  const t = "#ffffff", n = document.documentElement.style;
  n.setProperty("--el-color-primary", e), vn(e, Z().isDark);
  for (let o = 1; o < 16; o++) {
    const c = gn(e, t, o / 16);
    n.setProperty(`--el-color-primary-custom-${o}`, c);
  }
}
const ra = (e) => {
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
};
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
function ca(e, t) {
  return [...e].sort((n, o) => o.path.length - n.path.length).find((n) => t === n.path || t.startsWith(`${n.path}/`));
}
const Xe = (e) => {
  window.open(e, "_blank");
}, ft = (e, t = !1) => {
  const n = rt();
  if (!n) {
    console.warn("[ao-admin-layout] 未注入 router，无法跳转");
    return;
  }
  const { link: o, isIframe: c } = e.meta;
  if (o && !c)
    return Xe(o);
  if (!t || !e.children?.length)
    return n.push(e.path);
  const r = (a) => {
    for (const f of a)
      if (ht(f))
        return f.children?.length && r(f.children) || f;
  }, l = r(e.children);
  if (!l)
    return n.push(e.path);
  if (l.meta?.link)
    return Xe(l.meta.link);
  n.push(l.path);
};
function Ae() {
  const e = Z();
  return {
    homePath: M(() => Se().homePath),
    refresh: () => {
      e.reload();
    },
    scrollTo: (l, a = !1) => {
      const f = document.getElementById("app-main");
      f && f.scrollTo({
        top: l,
        behavior: a ? "smooth" : "auto"
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
const Re = $e(
  "worktabStore",
  () => {
    const e = S({}), t = S([]), n = S([]), o = M(() => t.value.length > 0), c = M(() => t.value.length > 1), r = M(
      () => e.value.path ? t.value.findIndex((s) => s.path === e.value.path) : -1
    ), l = (s) => t.value.findIndex((u) => u.path === s), a = (s) => t.value.find((u) => u.path === s), f = (s) => !s.fixedTab, h = (s) => {
      if (!s.path) {
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
          path: s.path,
          query: s.query
        });
      } catch (x) {
        console.error("路由跳转失败:", x);
      }
    }, b = (s) => {
      if (!s.path) {
        console.warn("尝试打开无效的标签页");
        return;
      }
      s.name && G(s.name);
      let u = -1;
      if (s.name && (u = t.value.findIndex((x) => x.name === s.name)), u === -1 && (u = l(s.path)), u === -1) {
        const x = s.fixedTab ? p() : t.value.length, R = { ...s };
        s.fixedTab ? t.value.splice(x, 0, R) : t.value.push(R), e.value = R;
      } else {
        const x = t.value[u];
        t.value[u] = {
          ...x,
          path: s.path,
          params: s.params,
          query: s.query,
          title: s.title || x.title,
          fixedTab: s.fixedTab ?? x.fixedTab,
          keepAlive: s.keepAlive ?? x.keepAlive,
          name: s.name || x.name,
          icon: s.icon || x.icon
        }, e.value = t.value[u];
      }
    }, p = () => {
      let s = 0;
      for (let u = 0; u < t.value.length && t.value[u].fixedTab; u++)
        s = u + 1;
      return s;
    }, I = (s) => {
      const u = a(s), x = l(s);
      if (x === -1) {
        console.warn(`尝试关闭不存在的标签页: ${s}`);
        return;
      }
      if (u && !f(u)) {
        console.warn(`尝试关闭固定标签页: ${s}`);
        return;
      }
      t.value.splice(x, 1), u?.name && T(u);
      const { homePath: R } = Ae();
      if (!o.value) {
        s !== R.value && (e.value = {}, h({ path: R.value }));
        return;
      }
      if (e.value.path === s) {
        const d = x >= t.value.length ? t.value.length - 1 : x;
        e.value = t.value[d], h(e.value);
      }
    }, $ = (s) => {
      const u = l(s);
      if (u === -1) {
        console.warn(`尝试关闭左侧标签页，但目标标签页不存在: ${s}`);
        return;
      }
      const R = t.value.slice(0, u).filter(f);
      if (R.length === 0) {
        console.warn("左侧没有可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter(
        (C, A) => A >= u || !f(C)
      );
      const d = a(s);
      d && (e.value = d);
    }, v = (s) => {
      const u = l(s);
      if (u === -1) {
        console.warn(`尝试关闭右侧标签页，但目标标签页不存在: ${s}`);
        return;
      }
      const R = t.value.slice(u + 1).filter(f);
      if (R.length === 0) {
        console.warn("右侧没有可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter(
        (C, A) => A <= u || !f(C)
      );
      const d = a(s);
      d && (e.value = d);
    }, w = (s) => {
      const u = a(s);
      if (!u) {
        console.warn(`尝试关闭其他标签页，但目标标签页不存在: ${s}`);
        return;
      }
      const R = t.value.filter((d) => d.path !== s).filter(f);
      if (R.length === 0) {
        console.warn("没有其他可关闭的标签页");
        return;
      }
      V(R), t.value = t.value.filter((d) => d.path === s || !f(d)), e.value = u;
    }, D = () => {
      const { homePath: s } = Ae(), u = t.value.some((C) => C.fixedTab), x = t.value.filter((C) => f(C) ? u || C.path !== s.value : !1);
      if (x.length === 0) {
        console.warn("没有可关闭的标签页");
        return;
      }
      if (V(x), t.value = t.value.filter((C) => !f(C) || !u && C.path === s.value), !o.value) {
        e.value = {}, h({ path: s.value });
        return;
      }
      const d = t.value.find((C) => C.path === s.value) || t.value[0];
      e.value = d, h(d);
    }, T = (s) => {
      !s.keepAlive || !s.name || n.value.includes(s.name) || n.value.push(s.name);
    }, G = (s) => {
      s && (n.value = n.value.filter((u) => u !== s));
    }, V = (s) => {
      s.forEach((u) => {
        u.name && T(u);
      });
    };
    return {
      // 状态
      current: e,
      opened: t,
      keepAliveExclude: n,
      // 计算属性
      hasOpenedTabs: o,
      hasMultipleTabs: c,
      currentTabIndex: r,
      // 方法
      openTab: b,
      removeTab: I,
      removeLeft: $,
      removeRight: v,
      removeOthers: w,
      removeAll: D,
      toggleFixedTab: (s) => {
        const u = l(s);
        if (u === -1) {
          console.warn(`尝试切换不存在标签页的固定状态: ${s}`);
          return;
        }
        const x = { ...t.value[u] };
        if (x.fixedTab = !x.fixedTab, t.value.splice(u, 1), x.fixedTab) {
          const R = t.value.findIndex((C) => !C.fixedTab), d = R === -1 ? t.value.length : R;
          t.value.splice(d, 0, x);
        } else {
          const R = t.value.filter((d) => d.fixedTab).length;
          t.value.splice(R, 0, x);
        }
        e.value.path === s && (e.value = x);
      },
      validateWorktabs: (s) => {
        try {
          const u = (d) => {
            try {
              return d.name && s.getRoutes().some((A) => A.name === d.name) ? !0 : d.path ? s.resolve({
                path: d.path,
                query: d.query || void 0
              }).matched.length > 0 : !1;
            } catch {
              return !1;
            }
          }, x = t.value.filter((d) => u(d));
          x.length !== t.value.length && (console.warn("发现无效的标签页路由，已自动清理"), t.value = x);
          const R = e.value && u(e.value);
          !R && x.length > 0 ? (console.warn("当前激活标签无效，已自动切换"), e.value = x[0]) : R || (e.value = {});
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
      getTab: a,
      isTabClosable: f,
      addKeepAliveExclude: T,
      removeKeepAliveExclude: G,
      markTabsToRemove: V,
      getTabTitle: (s) => a(s),
      updateTabTitle: (s, u) => {
        const x = a(s);
        x && (x.customTitle = u);
      },
      resetTabTitle: (s) => {
        const u = a(s);
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
);
class pn {
  /** 主题键名（index.html中使用了，如果修改，需要同步修改） */
  static THEME_KEY = "sys-theme";
  /** 上次登录用户ID键名（用于判断是否为同一用户登录） */
  static LAST_USER_ID_KEY = "sys-last-user-id";
}
const ie = {
  /** 菜单是否展开 */
  menuOpen: !0,
  /** 系统主题类型 */
  systemThemeType: z.AUTO,
  /** 系统主题模式 */
  systemThemeMode: z.AUTO,
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
}, Z = $e(
  "settingStore",
  () => {
    const e = S(ie.menuOpen), t = S(ie.systemThemeType), n = S(ie.systemThemeMode), o = S(ie.menuThemeType), c = S(ie.systemThemeColor), r = S(ie.showMenuButton), l = S(ie.showFastEnter), a = S(ie.showWorkTab), f = S(ie.showLanguage), h = S(ie.showNotification), b = S(ie.showSettingGuide), p = S(ie.uniqueOpened), I = S(ie.refresh), $ = M(() => {
      const L = me.themeList.filter((s) => s.theme === o.value);
      return v.value ? me.darkMenuStyles[0] : L[0];
    }), v = M(() => t.value === z.DARK);
    return {
      systemThemeType: t,
      systemThemeMode: n,
      menuThemeType: o,
      systemThemeColor: c,
      uniqueOpened: p,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: a,
      showLanguage: f,
      showNotification: h,
      showSettingGuide: b,
      menuOpen: e,
      refresh: I,
      getMenuTheme: $,
      isDark: v,
      setGlopTheme: (L, s) => {
        t.value = L, n.value = s, localStorage.setItem(pn.THEME_KEY, L);
      },
      switchMenuStyles: (L) => {
        o.value = L;
      },
      setElementTheme: (L) => {
        c.value = L, dt(L);
      },
      setUniqueOpened: () => {
        p.value = !p.value;
      },
      setButton: () => {
        r.value = !r.value;
      },
      setFastEnter: () => {
        l.value = !l.value;
      },
      setWorkTab: (L) => {
        a.value = L;
      },
      setLanguage: () => {
        f.value = !f.value;
      },
      setNotification: () => {
        h.value = !h.value;
      },
      setMenuOpen: (L) => {
        e.value = L;
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
), yn = { class: "menu-txt" }, bn = /* @__PURE__ */ J({
  name: "AoFastEnter",
  __name: "AoFastEnter",
  setup(e) {
    const t = Le(), n = M(() => Se().applicationList), o = M(() => Se().currentApplication), { systemThemeColor: c } = ne(Z()), r = M(() => l(c.value)), l = (f) => {
      const h = f.match(/[0-9a-f]{2}/gi);
      if (!h || h.length < 3) return "var(--ao-white)";
      const [b, p, I] = h.slice(0, 3).map((v) => {
        const w = parseInt(v, 16) / 255;
        return w <= 0.04045 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * b + 0.7152 * p + 0.0722 * I > 0.179 ? "var(--ao-black)" : "var(--ao-white)";
    }, a = (f) => {
      const h = mt(f.children || []);
      if (!h || f.path === o.value?.path)
        return;
      const b = t.resolve({ path: h }).href;
      window.open(b, "_blank", "noopener");
    };
    return (f, h) => (g(), q(i(tt), {
      "popper-class": "fastEnterDropDownStyle",
      onCommand: a
    }, {
      dropdown: N(() => [
        k(i(nt), null, {
          default: N(() => [
            (g(!0), y(j, null, te(n.value, (b) => (g(), y("div", {
              key: b.path,
              class: "lang-btn-item"
            }, [
              k(i(ot), {
                command: b,
                class: oe({ "is-selected": b.path === o.value?.path }),
                style: Y({
                  color: b.path === o.value?.path ? r.value : "var(--el-text-color-regular)"
                })
              }, {
                default: N(() => [
                  m("span", yn, O(i(fe)(b.meta.title)), 1)
                ]),
                _: 2
              }, 1032, ["command", "class", "style"])
            ]))), 128))
          ]),
          _: 1
        })
      ]),
      default: N(() => [
        xe(f.$slots, "default")
      ]),
      _: 3
    }));
  }
}), _n = { class: "notification-panel__header" }, xn = { class: "notification-panel__title" }, An = { class: "notification-panel__read-btn" }, Tn = { class: "notification-panel__tabs" }, wn = ["onClick"], Sn = { class: "notification-panel__content" }, kn = { class: "notification-panel__scroll scrollbar-thin" }, Cn = { class: "notification-item__body" }, En = { class: "notification-item__title" }, Mn = { class: "notification-item__time" }, Bn = { class: "notification-item__avatar-box" }, $n = ["src"], Ln = { class: "notification-item__body" }, In = { class: "notification-item__msg-title" }, Dn = { class: "notification-item__time" }, Hn = { class: "pending-item__time" }, Rn = { class: "notification-empty" }, Fn = { class: "notification-empty__text" }, On = { class: "notification-panel__footer" }, Pn = "https://dummyimage.com/160x160.png", Nn = "https://dummyimage.com/160x160.png", Vn = "https://dummyimage.com/160x160.png", Wn = "https://dummyimage.com/80x80.png", Gn = "https://dummyimage.com/80x80.png", Kn = "https://dummyimage.com/80x80.png", Un = /* @__PURE__ */ J({
  name: "AoNotification",
  __name: "AoNotification",
  props: {
    value: { type: Boolean }
  },
  emits: ["update:value"],
  setup(e, { emit: t }) {
    const { t: n } = Ee(), o = e, c = t, r = S(!1), l = S(!1), a = S(0), f = () => {
      const B = S([
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
      ]), L = S([
        {
          title: "xxxxxxxxxx",
          time: "2021-2-26 23:50",
          avatar: Pn
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-2-21 8:05",
          avatar: Nn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-1-17 21:12",
          avatar: Vn
        },
        {
          title: "xxxxxxxxxx",
          time: "2021-01-14 0:20",
          avatar: Wn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-20 0:15",
          avatar: Gn
        },
        {
          title: "xxxxxxxxxx",
          time: "2020-12-17 22:06",
          avatar: Kn
        }
      ]), s = S([]), u = M(() => [
        {
          name: M(() => n("notice.bar[0]")),
          num: B.value.length
        },
        {
          name: M(() => n("notice.bar[1]")),
          num: L.value.length
        },
        {
          name: M(() => n("notice.bar[2]")),
          num: s.value.length
        }
      ]);
      return {
        noticeList: B,
        msgList: L,
        pendingList: s,
        barList: u
      };
    }, h = () => {
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
        getNoticeStyle: (s) => {
          const u = {
            icon: "ri:arrow-right-circle-line",
            iconClass: "notice-icon--notice"
          };
          return B[s] || u;
        }
      };
    }, b = () => ({
      showNotice: (L) => {
        L ? (l.value = !0, setTimeout(() => {
          r.value = !0;
        }, 5)) : (r.value = !1, setTimeout(() => {
          l.value = !1;
        }, 350));
      }
    }), p = (B, L, s, u) => {
      const x = (C) => {
        a.value = C;
      }, R = M(() => {
        const A = [B.value, L.value, s.value][a.value];
        return A && A.length === 0;
      });
      return {
        changeBar: x,
        currentTabIsEmpty: R,
        handleViewAll: () => {
          const A = {
            0: u.handleNoticeAll,
            1: u.handleMsgAll,
            2: u.handlePendingAll
          }[a.value];
          A?.(), c("update:value", !1);
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
    }), { noticeList: $, msgList: v, pendingList: w, barList: D } = f(), { getNoticeStyle: T } = h(), { showNotice: G } = b(), { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: ee } = I(), { changeBar: ae, currentTabIsEmpty: U, handleViewAll: le } = p(
      $,
      v,
      w,
      { handleNoticeAll: V, handleMsgAll: K, handlePendingAll: ee }
    );
    return he(
      () => o.value,
      (B) => {
        G(B);
      }
    ), (B, L) => ue((g(), y("div", {
      class: "ao-notification-panel ao-card-sm notification-panel",
      style: Y({
        transform: r.value ? "scaleY(1)" : "scaleY(0.9)",
        opacity: r.value ? 1 : 0
      }),
      onClick: L[0] || (L[0] = Me(() => {
      }, ["stop"]))
    }, [
      m("div", _n, [
        m("span", xn, O(B.$t("notice.title")), 1),
        m("span", An, O(B.$t("notice.btnRead")), 1)
      ]),
      m("ul", Tn, [
        (g(!0), y(j, null, te(i(D), (s, u) => (g(), y("li", {
          key: u,
          class: oe(["notification-panel__tab", { "bar-active": a.value === u }]),
          onClick: (x) => i(ae)(u)
        }, O(s.name) + " (" + O(s.num) + ") ", 11, wn))), 128))
      ]),
      m("div", Sn, [
        m("div", kn, [
          ue(m("ul", null, [
            (g(!0), y(j, null, te(i($), (s, u) => (g(), y("li", {
              key: u,
              class: "notification-item"
            }, [
              m("div", {
                class: oe(["notification-item__icon", [i(T)(s.type).iconClass]])
              }, [
                k(i(Q), {
                  class: "notification-item__icon-svg",
                  icon: i(T)(s.type).icon
                }, null, 8, ["icon"])
              ], 2),
              m("div", Cn, [
                m("h4", En, O(s.title), 1),
                m("p", Mn, O(s.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, a.value === 0]
          ]),
          ue(m("ul", null, [
            (g(!0), y(j, null, te(i(v), (s, u) => (g(), y("li", {
              key: u,
              class: "notification-item"
            }, [
              m("div", Bn, [
                m("img", {
                  src: s.avatar,
                  class: "notification-item__avatar"
                }, null, 8, $n)
              ]),
              m("div", Ln, [
                m("h4", In, O(s.title), 1),
                m("p", Dn, O(s.time), 1)
              ])
            ]))), 128))
          ], 512), [
            [de, a.value === 1]
          ]),
          ue(m("ul", null, [
            (g(!0), y(j, null, te(i(w), (s, u) => (g(), y("li", {
              key: u,
              class: "pending-item"
            }, [
              m("h4", null, O(s.title), 1),
              m("p", Hn, O(s.time), 1)
            ]))), 128))
          ], 512), [
            [de, a.value === 2]
          ]),
          ue(m("div", Rn, [
            k(i(Q), {
              icon: "system-uicons:inbox",
              class: "notification-empty__icon"
            }),
            m("p", Fn, O(B.$t("notice.text[0]")) + O(i(D)[a.value].name), 1)
          ], 512), [
            [de, i(U)]
          ])
        ]),
        m("div", On, [
          k(i(st), {
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
      L[1] || (L[1] = m("div", { class: "notification-panel__bottom-spacer" }, null, -1))
    ], 4)), [
      [de, l.value]
    ]);
  }
}), se = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, c] of t)
    n[o] = c;
  return n;
}, qn = /* @__PURE__ */ se(Un, [["__scopeId", "data-v-0905206f"]]), Xn = { class: "menu-right" }, zn = ["onClick"], jn = { class: "menu-label" }, Yn = { class: "submenu-title" }, Qn = { class: "menu-label" }, Jn = ["onClick"], Zn = { class: "menu-label" }, eo = /* @__PURE__ */ J({
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
      v306417cf: o.menuWidth + "px",
      v2517ec74: o.borderRadius + "px",
      v29d0c040: o.animationDuration + "ms"
    }));
    const o = e, c = n, r = S(!1), l = S({ x: 0, y: 0 });
    let a = null, f = !1;
    const h = M(() => ({
      position: "fixed",
      left: `${l.value.x}px`,
      top: `${l.value.y}px`,
      zIndex: 2e3,
      width: `${o.menuWidth}px`
    })), b = M(() => ({
      padding: `${o.menuPadding}px`
    })), p = M(() => ({
      height: `${o.itemHeight}px`,
      padding: `0 ${o.itemPaddingX}px`,
      borderRadius: "4px"
    })), I = M(() => ({
      minWidth: `${o.submenuWidth}px`,
      padding: `${o.menuPadding}px 0`,
      borderRadius: `${o.borderRadius}px`
    })), $ = () => {
      let B = o.menuPadding * 2;
      return o.menuItems.forEach((L) => {
        B += o.itemHeight, L.showLine && (B += 10);
      }), B;
    }, v = (B) => {
      const L = window.innerWidth, s = window.innerHeight, u = $();
      let x = B.clientX, R = B.clientY;
      return x + o.menuWidth > L - o.boundaryDistance && (x = Math.max(o.boundaryDistance, x - o.menuWidth)), R + u > s - o.boundaryDistance && (R = Math.max(o.boundaryDistance, s - u - o.boundaryDistance)), x = Math.max(
        o.boundaryDistance,
        Math.min(x, L - o.menuWidth - o.boundaryDistance)
      ), R = Math.max(
        o.boundaryDistance,
        Math.min(R, s - u - o.boundaryDistance)
      ), { x, y: R };
    }, w = () => {
      f || (document.addEventListener("click", T), document.addEventListener("contextmenu", G), document.addEventListener("keydown", V), f = !0);
    }, D = () => {
      f && (document.removeEventListener("click", T), document.removeEventListener("contextmenu", G), document.removeEventListener("keydown", V), f = !1);
    }, T = (B) => {
      const L = B.target, s = document.querySelector(".context-menu");
      s && s.contains(L) || ee();
    }, G = () => {
      ee();
    }, V = (B) => {
      B.key === "Escape" && ee();
    }, K = (B) => {
      B.preventDefault(), B.stopPropagation(), a && (window.clearTimeout(a), a = null), l.value = v(B), r.value = !0, c("show"), a = window.setTimeout(() => {
        r.value && w(), a = null;
      }, 50);
    }, ee = () => {
      r.value && (r.value = !1, c("hide"), a && (window.clearTimeout(a), a = null), D());
    }, ae = (B) => {
      B.disabled || (c("select", B), ee());
    }, U = (B) => {
      const L = B;
      L.style.transformOrigin = "top left";
    }, le = () => {
      D(), a && (window.clearTimeout(a), a = null);
    };
    return ke(() => {
      D(), a && (window.clearTimeout(a), a = null);
    }), t({
      show: K,
      hide: ee,
      visible: M(() => r.value)
    }), (B, L) => (g(), y("div", Xn, [
      k(Je, {
        name: "context-menu",
        onBeforeEnter: U,
        onAfterLeave: le
      }, {
        default: N(() => [
          ue(m("div", {
            style: Y(h.value),
            class: "context-menu ao-card-xs"
          }, [
            m("ul", {
              class: "menu-list",
              style: Y(b.value)
            }, [
              (g(!0), y(j, null, te(e.menuItems, (s) => (g(), y(j, {
                key: s.key
              }, [
                s.children ? (g(), y("li", {
                  key: 1,
                  class: "menu-item submenu",
                  style: Y(p.value)
                }, [
                  m("div", Yn, [
                    s.icon ? (g(), q(i(Q), {
                      key: 0,
                      class: "menu-item-icon",
                      icon: s.icon
                    }, null, 8, ["icon"])) : X("", !0),
                    m("span", Qn, O(s.label), 1),
                    k(i(Q), {
                      icon: "ri:arrow-right-s-line",
                      class: "submenu-arrow"
                    })
                  ]),
                  m("ul", {
                    class: "submenu-list ao-card-xs",
                    style: Y(I.value)
                  }, [
                    (g(!0), y(j, null, te(s.children, (u) => (g(), y("li", {
                      key: u.key,
                      class: oe(["menu-item menu-item-child", { "is-disabled": u.disabled, "has-line": u.showLine }]),
                      style: Y(p.value),
                      onClick: (x) => ae(u)
                    }, [
                      u.icon ? (g(), q(i(Q), {
                        key: 0,
                        class: "menu-item-icon-child",
                        icon: u.icon
                      }, null, 8, ["icon"])) : X("", !0),
                      m("span", Zn, O(u.label), 1)
                    ], 14, Jn))), 128))
                  ], 4)
                ], 4)) : (g(), y("li", {
                  key: 0,
                  class: oe(["menu-item", { "is-disabled": s.disabled, "has-line": s.showLine }]),
                  style: Y(p.value),
                  onClick: (u) => ae(s)
                }, [
                  s.icon ? (g(), q(i(Q), {
                    key: 0,
                    class: "menu-item-icon",
                    icon: s.icon
                  }, null, 8, ["icon"])) : X("", !0),
                  m("span", jn, O(s.label), 1)
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
}, oo = ["id", "onClick", "onContextmenu"], so = ["onClick"], ao = /* @__PURE__ */ J({
  name: "AoWorkTab",
  __name: "AoWorkTab",
  setup(e) {
    const { t } = Ee(), n = Re(), o = Fe(), c = Le(), { currentRoute: r } = c, l = Z(), { showWorkTab: a } = ne(l), f = S(null), h = S(null), b = S(), p = S({
      translateX: 0,
      transition: ""
    }), I = S({
      startX: 0,
      currentX: 0
    }), $ = S(""), v = M(() => n.opened), w = M(() => r.value.path), D = M(() => v.value.findIndex((d) => d.path === w.value)), T = () => {
      const d = () => {
        const E = v.value.findIndex((_) => _.path === $.value), H = v.value[E];
        return {
          clickedIndex: E,
          currentTab: H,
          isLastTab: E === v.value.length - 1,
          isOneTab: v.value.length === 1,
          isCurrentTab: $.value === w.value
        };
      }, C = (E) => {
        const H = v.value.slice(0, E), _ = v.value.slice(E + 1), F = v.value.filter((P, W) => W !== E);
        return {
          areAllLeftTabsFixed: H.length > 0 && H.every((P) => P.fixedTab),
          areAllRightTabsFixed: _.length > 0 && _.every((P) => P.fixedTab),
          areAllOtherTabsFixed: F.length > 0 && F.every((P) => P.fixedTab),
          areAllTabsFixed: v.value.every((P) => P.fixedTab)
        };
      };
      return { menuItems: M(() => {
        const { clickedIndex: E, currentTab: H, isLastTab: _, isOneTab: F, isCurrentTab: P } = d(), W = C(E);
        return [
          {
            key: "refresh",
            label: t("worktab.btn.refresh"),
            icon: "ri:refresh-line",
            disabled: !P
          },
          {
            key: "fixed",
            label: H?.fixedTab ? t("worktab.btn.unfixed") : t("worktab.btn.fixed"),
            icon: "ri:pushpin-2-line",
            disabled: !1,
            showLine: !0
          },
          {
            key: "left",
            label: t("worktab.btn.closeLeft"),
            icon: "ri:arrow-left-s-line",
            disabled: E === 0 || W.areAllLeftTabsFixed
          },
          {
            key: "right",
            label: t("worktab.btn.closeRight"),
            icon: "ri:arrow-right-s-line",
            disabled: _ || W.areAllRightTabsFixed
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
        p.value.transition = "transform 0.5s cubic-bezier(0.15, 0, 0.15, 1)", setTimeout(() => {
          p.value.transition = "";
        }, 250);
      }, C = () => document.getElementById(`scroll-li-${D.value}`), A = () => {
        if (!f.value || !h.value) return;
        const _ = f.value.offsetWidth, F = h.value.offsetWidth, P = C();
        if (!P) return;
        const { offsetLeft: W, clientWidth: ce } = P, re = W + ce, ge = _ - re;
        return {
          scrollWidth: _,
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
          const _ = A();
          if (!_) return;
          const { scrollWidth: F, ulWidth: P, offsetLeft: W, curTabRight: ce, targetLeft: re } = _;
          W > Math.abs(p.value.translateX) && ce <= F || p.value.translateX < re && re < 0 || requestAnimationFrame(() => {
            ce > F ? p.value.translateX = Math.max(re - 6, F - P) : W < Math.abs(p.value.translateX) && (p.value.translateX = -W);
          });
        },
        adjustPositionAfterClose: () => {
          const _ = A();
          if (!_) return;
          const { scrollWidth: F, ulWidth: P, offsetLeft: W, clientWidth: ce } = _, re = W + ce;
          requestAnimationFrame(() => {
            p.value.translateX = re > F ? F - P : 0;
          });
        }
      };
    }, V = () => {
      const { setTransition: d, adjustPositionAfterClose: C } = G(), A = (W) => {
        if (!f.value || !h.value || (W.preventDefault(), h.value.offsetWidth <= f.value.offsetWidth)) return;
        const ce = 0, re = f.value.offsetWidth - h.value.offsetWidth, ge = Math.abs(W.deltaX) > Math.abs(W.deltaY) ? W.deltaX : W.deltaY;
        p.value.translateX = Math.min(
          Math.max(p.value.translateX - ge, re),
          ce
        );
      }, E = (W) => {
        I.value.startX = W.touches[0].clientX;
      }, H = (W) => {
        if (!f.value || !h.value) return;
        I.value.currentX = W.touches[0].clientX;
        const ce = I.value.currentX - I.value.startX, re = f.value.offsetWidth - h.value.offsetWidth;
        p.value.translateX = Math.min(
          Math.max(p.value.translateX + ce, re),
          0
        ), I.value.startX = I.value.currentX;
      }, _ = () => {
        d();
      };
      return {
        setupEventListeners: () => {
          h.value && (h.value.addEventListener("wheel", A, { passive: !1 }), h.value.addEventListener("touchstart", E, { passive: !0 }), h.value.addEventListener("touchmove", H, { passive: !0 }), h.value.addEventListener("touchend", _, { passive: !0 }));
        },
        cleanupEventListeners: () => {
          h.value && (h.value.removeEventListener("wheel", A), h.value.removeEventListener("touchstart", E), h.value.removeEventListener("touchmove", H), h.value.removeEventListener("touchend", _));
        },
        adjustPositionAfterClose: C
      };
    }, K = (d) => {
      const C = (_) => {
        c.push({
          path: _.path,
          query: _.query
        });
      }, A = (_, F) => {
        const P = typeof F == "string" ? F : o.path;
        ({
          current: () => n.removeTab(P),
          left: () => n.removeLeft(P),
          right: () => n.removeRight(P),
          other: () => n.removeOthers(P),
          all: () => n.removeAll()
        })[_]?.(), setTimeout(() => {
          d();
        }, 100);
      };
      return {
        clickTab: C,
        closeWorktab: A,
        showMenu: (_, F) => {
          $.value = F || "", b.value?.show(_), _.preventDefault(), _.stopPropagation();
        },
        handleSelect: (_) => {
          const { key: F } = _;
          if (F === "refresh") {
            Ae().refresh();
            return;
          }
          if (F === "fixed") {
            Re().toggleFixedTab($.value);
            return;
          }
          const P = v.value.findIndex((ge) => ge.path === w.value), W = v.value.findIndex((ge) => ge.path === $.value);
          ({
            left: P < W,
            right: P > W,
            other: !0
          })[F] && c.push($.value), A(F, $.value);
        }
      };
    }, { menuItems: ee } = T(), { setTransition: ae, autoPositionTab: U } = G(), { setupEventListeners: le, cleanupEventListeners: B, adjustPositionAfterClose: L } = V(), { clickTab: s, closeWorktab: u, showMenu: x, handleSelect: R } = K(L);
    return Te(() => {
      le(), U();
    }), ke(() => {
      B();
    }), he(
      () => r.value,
      () => {
        ae(), U();
      }
    ), he(
      () => ct().value,
      () => {
        p.value.translateX = 0, ye(() => {
          U();
        });
      }
    ), (d, C) => i(a) ? (g(), y("div", no, [
      m("div", {
        class: "work-tab__scroll",
        ref_key: "scrollRef",
        ref: f
      }, [
        m("ul", {
          class: "work-tab__list",
          ref_key: "tabsRef",
          ref: h,
          style: Y({
            transform: `translateX(${p.value.translateX}px)`,
            transition: `${p.value.transition}`
          })
        }, [
          (g(!0), y(j, null, te(v.value, (A, E) => (g(), y("li", {
            class: oe(["work-tab__item ao-card-xs", [
              A.path === w.value ? "work-tab__item--active activ-tab" : "work-tab__item--inactive"
            ]]),
            style: Y({ padding: A.fixedTab ? "0 10px" : "0 8px 0 12px" }),
            key: A.path,
            ref_for: !0,
            ref: A.path,
            id: `scroll-li-${E}`,
            onClick: (H) => i(s)(A),
            onContextmenu: Me((H) => i(x)(H, A.path), ["prevent"])
          }, [
            we(O(A.customTitle || i(fe)(A.title)) + " ", 1),
            v.value.length > 1 && !A.fixedTab ? (g(), y("span", {
              key: 0,
              class: "work-tab__close",
              onClick: Me((H) => i(u)("current", A.path), ["stop"])
            }, [
              k(i(Q), {
                icon: "ri:close-large-fill",
                class: "work-tab__close-icon"
              })
            ], 8, so)) : X("", !0)
          ], 46, oo))), 128))
        ], 4)
      ], 512),
      k(to, {
        ref_key: "menuRef",
        ref: b,
        "menu-items": i(ee),
        "menu-width": 140,
        "border-radius": 10,
        onSelect: i(R)
      }, null, 8, ["menu-items", "onSelect"])
    ])) : X("", !0);
  }
}), lo = /* @__PURE__ */ se(ao, [["__scopeId", "data-v-0b89867f"]]), We = $e("appStore", () => {
  const e = S(!1), t = S(!1);
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
  const e = Z(), t = () => {
    const a = document.createElement("style");
    a.setAttribute("id", "disable-transitions"), a.textContent = "* { transition: none !important; }", document.head.appendChild(a);
  }, n = () => {
    const a = document.getElementById("disable-transitions");
    a && a.remove();
  }, o = (a, f) => {
    t();
    const h = document.getElementsByTagName("html")[0], b = a === z.DARK;
    f || (f = a);
    const p = me.systemThemeStyles[a];
    p && h.setAttribute("class", p.className);
    const I = e.systemThemeColor;
    for (let $ = 1; $ <= 9; $++)
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${$}`,
        b ? `${Ve(I, $ / 10)}` : `${ut(I, $ / 10)}`
      );
    e.setGlopTheme(a, f), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        n();
      });
    });
  }, c = lt(), r = () => {
    const a = c.value ? z.DARK : z.LIGHT;
    o(a, z.AUTO);
  };
  return {
    setSystemTheme: o,
    setSystemAutoTheme: r,
    switchThemeStyles: (a) => {
      a === z.AUTO ? r() : o(a);
    },
    prefersDark: c
  };
}
function ua() {
  const e = Z(), t = lt(), n = () => {
    const o = document.getElementsByTagName("html")[0];
    let c = e.systemThemeType;
    e.systemThemeMode === z.AUTO && (c = t.value ? z.DARK : z.LIGHT, e.systemThemeType = c);
    const r = me.systemThemeStyles[c];
    r && o.setAttribute("class", r.className), dt(e.systemThemeColor);
  };
  n(), e.systemThemeMode === z.AUTO && he(
    t,
    () => {
      e.systemThemeMode === z.AUTO && n();
    },
    { immediate: !1 }
  );
}
const { LIGHT: ze, DARK: ro } = z, co = (e) => {
  const t = e.clientX, n = e.clientY, o = Math.hypot(Math.max(t, innerWidth - t), Math.max(n, innerHeight - n));
  document.documentElement.style.setProperty("--x", t + "px"), document.documentElement.style.setProperty("--y", n + "px"), document.documentElement.style.setProperty("--r", o + "px"), document.startViewTransition ? document.startViewTransition(() => je()) : je();
}, je = () => {
  Ie().switchThemeStyles(Z().systemThemeType === ze ? ro : ze), Ae().refresh();
};
function uo() {
  const e = Z(), t = M(() => Oe), { showMenuButton: n, showFastEnter: o, showLanguage: c, showNotification: r } = ne(e), l = (U) => t.value[U]?.enabled ?? !1, a = (U) => t.value[U], f = M(() => l("menuButton") && n.value), h = M(() => l("fastEnter") && o.value), b = M(() => l("globalSearch")), p = M(() => l("fullscreen")), I = M(() => l("notification") && r.value), $ = M(() => l("language") && c.value), v = M(() => l("settings")), w = M(() => l("themeToggle")), D = M(() => a("fastEnter")?.minWidth || 1200), T = (U) => l(U), G = (U) => a(U), V = () => Object.keys(t.value).filter(
    (U) => t.value[U]?.enabled
  ), K = () => Object.keys(t.value).filter(
    (U) => !t.value[U]?.enabled
  );
  return {
    // 配置
    headerBarConfig: t,
    // 显示状态计算属性
    shouldShowMenuButton: f,
    // 是否显示菜单按钮
    shouldShowFastEnter: h,
    // 是否显示快速入口
    shouldShowGlobalSearch: b,
    // 是否显示全局搜索
    shouldShowFullscreen: p,
    // 是否显示全屏按钮
    shouldShowNotification: I,
    // 是否显示通知中心
    shouldShowLanguage: $,
    // 是否显示语言切换
    shouldShowSettings: v,
    // 是否显示设置面板
    shouldShowThemeToggle: w,
    // 是否显示主题切换
    // 配置相关
    fastEnterMinWidth: D,
    // 快速入口最小宽度
    // 方法
    isFeatureEnabled: l,
    // 检查功能是否启用
    isFeatureActive: T,
    // 检查功能是否启用（别名）
    getFeatureConfig: a,
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
}, xo = /* @__PURE__ */ J({
  name: "AoHeaderBar",
  __name: "index",
  setup(e) {
    const t = ct(), n = tn(), o = navigator.userAgent.includes("Windows"), c = Le(), { locale: r } = Ee(), { width: l } = it(), a = Z(), f = We(), {
      shouldShowMenuButton: h,
      shouldShowFastEnter: b,
      shouldShowGlobalSearch: p,
      shouldShowFullscreen: I,
      shouldShowNotification: $,
      shouldShowLanguage: v,
      shouldShowSettings: w,
      shouldShowThemeToggle: D,
      fastEnterMinWidth: T
    } = uo(), { menuOpen: G, isDark: V } = ne(a), K = S(!1), { isFullscreen: ee, toggle: ae } = Ht();
    Te(() => {
      u(), document.addEventListener("click", C);
    }), ke(() => {
      document.removeEventListener("click", C);
    });
    const U = () => {
      ae();
    }, le = () => {
      a.setMenuOpen(!G.value);
    }, { homePath: B, refresh: L } = Ae(), s = () => {
      c.push(B.value);
    }, u = () => {
      r.value = t.value;
    }, x = (E) => {
      r.value !== E && (r.value = E, t.value = E, n?.(E), setTimeout(L, 50));
    }, R = () => {
      f.openGlobalSearch();
    }, d = () => {
      f.openSettingsPanel();
    }, C = (E) => {
      if (!K.value) return;
      const H = E.target, _ = H.closest(".notice-button"), F = H.closest(".ao-notification-panel");
      !_ && !F && (K.value = !1);
    }, A = () => {
      K.value = !K.value;
    };
    return (E, H) => (g(), y("div", ho, [
      m("div", mo, [
        m("div", fo, [
          k(i(wt), {
            class: "header-bar__logo-hidden",
            onClick: s
          }),
          i(h) ? (g(), q(i(ve), {
            key: 0,
            icon: "ri:menu-2-fill",
            class: "header-bar__menu-btn",
            onClick: le
          })) : X("", !0),
          i(b) && i(l) >= i(T) ? (g(), q(bn, { key: 1 }, {
            default: N(() => [
              k(i(ve), {
                icon: "ri:function-line",
                class: "header-bar__fast-enter-btn"
              })
            ]),
            _: 1
          })) : X("", !0),
          k(lo)
        ]),
        m("div", go, [
          i(p) ? (g(), y("div", {
            key: 0,
            class: "search-box",
            onClick: R
          }, [
            m("div", vo, [
              k(i(Q), {
                icon: "ri:search-line",
                class: "search-box__icon"
              }),
              m("span", po, O(E.$t("topBar.search.title")), 1)
            ]),
            m("div", yo, [
              i(o) ? (g(), q(i(Q), {
                key: 0,
                icon: "vaadin:ctrl-a",
                class: "search-box__shortcut-icon"
              })) : (g(), q(i(Q), {
                key: 1,
                icon: "ri:command-fill",
                class: "search-box__shortcut-icon-mac"
              })),
              H[1] || (H[1] = m("span", { class: "search-box__shortcut-key" }, "k", -1))
            ])
          ])) : X("", !0),
          i(I) ? (g(), q(i(ve), {
            key: 1,
            icon: i(ee) ? "ri:fullscreen-exit-line" : "ri:fullscreen-fill",
            class: oe([
              i(ee) ? "exit-full-screen-btn" : "full-screen-btn",
              "header-bar__fullscreen-btn"
            ]),
            onClick: U
          }, null, 8, ["icon", "class"])) : X("", !0),
          i(v) ? (g(), q(i(tt), {
            key: 2,
            onCommand: x,
            "popper-class": "langDropDownStyle"
          }, {
            dropdown: N(() => [
              k(i(nt), null, {
                default: N(() => [
                  (g(!0), y(j, null, te(i(io), (_) => (g(), y("div", {
                    key: _.value,
                    class: "lang-btn-item"
                  }, [
                    k(i(ot), {
                      command: _.value,
                      class: oe({ "is-selected": i(r) === _.value })
                    }, {
                      default: N(() => [
                        m("span", bo, O(_.label), 1),
                        i(r) === _.value ? (g(), q(i(Q), {
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
              k(i(ve), {
                icon: "ri:translate-2",
                class: "language-btn header-bar__language-btn"
              })
            ]),
            _: 1
          })) : X("", !0),
          i($) ? (g(), q(i(ve), {
            key: 3,
            icon: "ri:notification-2-line",
            class: "notice-button header-bar__notice-btn",
            onClick: A
          }, {
            default: N(() => [...H[2] || (H[2] = [
              m("div", { class: "notice-dot" }, null, -1)
            ])]),
            _: 1
          })) : X("", !0),
          i(w) ? (g(), q(i(ve), {
            key: 4,
            icon: "ri:settings-line",
            class: "setting-btn",
            onClick: d
          })) : X("", !0),
          i(D) ? (g(), q(i(ve), {
            key: 5,
            onClick: i(co),
            icon: i(V) ? "ri:sun-fill" : "ri:moon-line"
          }, null, 8, ["onClick", "icon"])) : X("", !0),
          E.$slots["user-avatar"] ? (g(), y("div", _o, [
            xe(E.$slots, "user-avatar", {}, void 0, !0)
          ])) : X("", !0)
        ])
      ]),
      k(qn, {
        value: K.value,
        "onUpdate:value": H[0] || (H[0] = (_) => K.value = _),
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
  ), { height: o } = qe(
    t,
    { width: 0, height: 0 },
    { box: "border-box" }
  );
  return pt(() => {
    const c = n.value, r = o.value;
    typeof document > "u" || requestAnimationFrame(() => {
      const l = document.documentElement.style;
      l.setProperty(To, `${c}px`), l.setProperty(wo, `${r}px`);
    });
  }), { headerHeight: n, contentHeaderHeight: o };
}
function da() {
  const e = S(), t = S(), { headerHeight: n, contentHeaderHeight: o } = gt(e, t);
  return {
    /** 头部元素引用 */
    headerRef: e,
    /** 内容头部元素引用 */
    contentHeaderRef: t,
    /** 头部高度（响应式） */
    headerHeight: n,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: o
  };
}
function So(e = ["app-header", "app-content-header"]) {
  const t = S(), n = S(), { headerHeight: o, contentHeaderHeight: c } = gt(t, n);
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
    headerHeight: o,
    /** 内容头部高度（响应式） */
    contentHeaderHeight: c
  };
}
const ko = { id: "app-content-header" }, Co = {
  key: 0,
  class: "route-info-debug"
}, Eo = { class: "transition-mask" }, Mo = /* @__PURE__ */ J({
  name: "AoPageContent",
  __name: "AoPageContent",
  setup(e) {
    const t = Fe();
    So();
    const { refresh: n } = ne(Z()), { keepAliveExclude: o } = ne(Re()), c = M(() => {
      const v = new Set(o.value);
      return !t.meta.keepAlive && typeof t.name == "string" && v.add(t.name), [...v];
    }), r = yt(!0), l = void 0, a = S(!1), f = S(!0), h = M(() => t.matched.some((v) => v.meta?.isFullPage)), b = S(h.value), p = M(() => f.value || b.value && !h.value ? "" : "slide-left");
    he(h, (v, w) => {
      v !== w && (a.value = !0, setTimeout(() => {
        a.value = !1;
      }, 50)), ye(() => {
        b.value = v;
      });
    });
    const I = {
      minHeight: "var(--ao-full-height)"
    };
    return he(n, () => {
      r.value = !1, ye(() => {
        r.value = !0;
      });
    }, { flush: "post" }), Te(() => {
      ye(() => {
        f.value = !1;
      });
    }), (v, w) => {
      const D = Ze("RouterView");
      return g(), y("div", {
        class: oe(["layout-content", { "layout-content--full-page": h.value }])
      }, [
        m("div", ko, [
          i(l) === "true" ? (g(), y("div", Co, " router meta：" + O(i(t).meta), 1)) : X("", !0)
        ]),
        r.value ? (g(), q(D, {
          key: 0,
          style: I
        }, {
          default: N(({ Component: T, route: G }) => [
            k(Je, {
              name: a.value ? "" : p.value,
              mode: "out-in",
              appear: ""
            }, {
              default: N(() => [
                (g(), q(bt, {
                  max: 10,
                  exclude: c.value
                }, [
                  (g(), q(Qe(T), {
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
        (g(), q(_t, { to: "body" }, [
          ue(m("div", Eo, null, 512), [
            [de, a.value]
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
}, Po = /* @__PURE__ */ J({
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
    const n = e, o = t, c = Z(), { menuOpen: r } = ne(c), l = M(() => b(n.list)), a = (v) => {
      f(), ft(v);
    }, f = () => {
      o("close");
    }, h = (v) => !!(!v.meta.isHide && (v.path && v.path.trim() || v.meta.link || v.meta.isIframe === !0) && (v.component || v.meta.link || v.meta.isIframe === !0)), b = (v) => v.filter((w) => w.meta.isHide ? !1 : w.children && w.children.length > 0 && b(w.children).length > 0 || h(w)).map((w) => ({
      ...w,
      children: w.children ? b(w.children) : void 0
    })), p = (v) => !v.children || v.children.length === 0 ? !1 : b(v.children).length > 0, I = (v) => !!(v.meta.link && !v.meta.isIframe), $ = (v, w) => `${v.path || v.meta.title || "menu"}-${n.level}-${w}`;
    return (v, w) => {
      const D = Ze("SidebarSubmenu", !0);
      return g(!0), y(j, null, te(l.value, (T, G) => (g(), y(j, {
        key: $(T, G)
      }, [
        p(T) ? (g(), q(i(St), {
          key: 0,
          index: T.path || T.meta.title,
          level: e.level
        }, {
          title: N(() => [
            m("div", $o, [
              k(i(Q), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: Y({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            m("span", Lo, O(i(fe)(T.meta.title)), 1),
            T.meta.showBadge ? (g(), y("div", Io)) : X("", !0)
          ]),
          default: N(() => [
            k(D, {
              list: T.children,
              "is-mobile": e.isMobile,
              level: e.level + 1,
              theme: e.theme,
              onClose: f
            }, null, 8, ["list", "is-mobile", "level", "theme"])
          ]),
          _: 2
        }, 1032, ["index", "level"])) : (g(), q(i(kt), {
          key: 1,
          index: I(T) ? T.meta.title : T.path || T.meta.title,
          "level-item": e.level + 1,
          onClick: (V) => a(T)
        }, {
          title: N(() => [
            m("span", Ro, O(i(fe)(T.meta.title)), 1),
            T.meta.showBadge ? (g(), y("div", Fo)) : X("", !0),
            T.meta.showTextBadge && (e.level > 0 || i(r)) ? (g(), y("div", Oo, O(T.meta.showTextBadge), 1)) : X("", !0)
          ]),
          default: N(() => [
            m("div", Do, [
              k(i(Q), {
                icon: T.meta.icon,
                color: e.theme?.iconColor,
                style: Y({ color: e.theme.iconColor })
              }, null, 8, ["icon", "color", "style"])
            ]),
            ue(m("div", Ho, null, 512), [
              [de, T.meta.showBadge && e.level === 0 && !i(r)]
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
}, Wo = { class: "header__inner" }, Ye = 800, Go = 350, Ko = /* @__PURE__ */ J({
  name: "AoSidebarMenu",
  __name: "index",
  setup(e) {
    const t = Fe(), n = Le(), o = Z(), { uniqueOpened: c, menuOpen: r, getMenuTheme: l } = ne(o), a = S([]), f = S(!1), h = S(!1), { width: b } = it(), p = M(() => b.value < Ye), I = M(() => String(t.meta.activePath || t.path)), $ = M(() => Se().menuList), v = M(() => ({
      transform: "translateY(0)",
      height: "calc(100% - 60px)",
      transition: "transform 0.3s ease"
    })), { start: w } = Rt(
      () => {
        h.value = !1;
      },
      Go,
      { immediate: !1 }
    ), { homePath: D } = Ae(), T = () => {
      n.push(D.value);
    }, G = () => {
      o.setMenuOpen(!r.value), p.value && (r.value ? w() : h.value = !0);
    }, V = () => {
      p.value && (o.setMenuOpen(!1), w());
    };
    return he(b, (K) => {
      K < Ye ? (o.setMenuOpen(!1), r.value || (h.value = !1)) : h.value = !1;
    }), he(r, (K) => {
      p.value ? K ? h.value = !0 : w() : h.value = !1;
    }), (K, ee) => $.value.length > 0 ? (g(), y("div", Vo, [
      m("div", {
        class: oe(["menu-left", `menu-left-${i(l).theme} menu-left-${i(r) ? "open" : "close"}`]),
        style: Y({
          background: i(l).background
        })
      }, [
        m("div", {
          class: "header",
          onClick: T,
          style: Y({
            background: i(l).background
          })
        }, [
          m("div", Wo, [
            xe(K.$slots, "sidebar-header", {
              menuOpen: i(r),
              theme: i(l)
            }, void 0, !0)
          ])
        ], 4),
        k(i(at), {
          style: Y(v.value)
        }, {
          default: N(() => [
            k(i(Ct), {
              class: oe("el-menu-" + i(l).theme),
              collapse: !i(r),
              "default-active": I.value,
              "text-color": i(l).textColor,
              "unique-opened": i(c),
              "background-color": i(l).background,
              "default-openeds": a.value,
              "popper-class": `menu-left-popper menu-left-${i(l).theme}-popper`,
              "show-timeout": 50,
              "hide-timeout": 50
            }, {
              default: N(() => [
                k(No, {
                  list: $.value,
                  isMobile: f.value,
                  theme: i(l),
                  onClose: V
                }, null, 8, ["list", "isMobile", "theme"])
              ]),
              _: 1
            }, 8, ["class", "collapse", "default-active", "text-color", "unique-opened", "background-color", "default-openeds", "popper-class"])
          ]),
          _: 1
        }, 8, ["style"]),
        m("div", {
          class: "menu-model",
          onClick: G,
          style: Y({
            opacity: i(r) ? 1 : 0,
            transform: h.value ? "scale(1)" : "scale(0)"
          })
        }, null, 4)
      ], 6)
    ])) : X("", !0);
  }
}), Uo = /* @__PURE__ */ se(Ko, [["__scopeId", "data-v-4bc7d66a"]]), qo = { class: "app-layout" }, Xo = { id: "app-sidebar" }, zo = { id: "app-main" }, jo = { id: "app-header" }, Yo = { id: "app-content" }, Qo = { id: "app-global" }, Jo = /* @__PURE__ */ J({
  name: "AppLayout",
  __name: "AppLayout",
  setup(e) {
    return (t, n) => (g(), y("div", qo, [
      m("aside", Xo, [
        k(Uo, null, {
          "sidebar-header": N((o) => [
            xe(t.$slots, "sidebar-header", xt(At(o)), void 0, !0)
          ]),
          _: 3
        })
      ]),
      m("main", zo, [
        m("div", jo, [
          k(Ao, null, Tt({ _: 2 }, [
            t.$slots["user-avatar"] ? {
              name: "user-avatar",
              fn: N(() => [
                xe(t.$slots, "user-avatar", {}, void 0, !0)
              ]),
              key: "0"
            } : void 0
          ]), 1024)
        ]),
        m("div", Yo, [
          k(Bo)
        ])
      ]),
      m("div", Qo, [
        k(an)
      ])
    ]));
  }
}), ha = /* @__PURE__ */ se(Jo, [["__scopeId", "data-v-2c43792d"]]), ma = {
  install(e, t = {}) {
    console.info(`[ao-admin-layout] v${Qt}`), Zt(t), t.i18n && (t.i18n.global.mergeLocaleMessage("zh", Kt), t.i18n.global.mergeLocaleMessage("en", Yt));
  }
};
function Ge() {
  const e = Z(), t = {
    // 设置body类名
    setBodyClass: (r, l) => {
      const a = document.getElementsByTagName("body")[0];
      l ? a.classList.add(r) : a.classList.remove(r);
    }
  }, n = (r, l) => () => {
    r(), l?.();
  }, o = {
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
    basicHandlers: o,
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
  const e = Z(), t = We(), { systemThemeType: n, systemThemeMode: o } = ne(e), { showSettingsPanel: c } = ne(t), { setSystemTheme: r, setSystemAutoTheme: l } = Ie(), { domOperations: a } = Ge(), h = Ft({ tablet: 1e3 }).smaller("tablet"), b = M(() => e.systemThemeColor), p = () => {
    const D = () => {
      me.systemMainColor.includes(b.value) || (e.setElementTheme(me.systemMainColor[0]), e.reload());
    }, T = () => {
      o.value === z.AUTO ? l() : r(n.value);
    };
    return {
      initSystemColor: D,
      initSystemTheme: T,
      listenerSystemTheme: () => {
        const V = window.matchMedia("(prefers-color-scheme: dark)");
        return V.addEventListener("change", T), () => {
          V.removeEventListener("change", T);
        };
      }
    };
  }, I = () => ({ stopWatch: he(
    h,
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
    useResponsiveLayout: I,
    useDrawerControl: () => {
      let D = null;
      return {
        handleOpen: () => {
          D && clearTimeout(D), D = setTimeout(() => {
            a.setBodyClass("theme-change", !0), D = null;
          }, 500);
        },
        handleClose: () => {
          D && (clearTimeout(D), D = null), a.setBodyClass("theme-change", !1);
        },
        closeDrawer: () => {
          c.value = !1;
        }
      };
    },
    usePropsWatcher: (D) => {
      he(
        () => D.open,
        (T) => {
          T !== void 0 && (c.value = T);
        }
      );
    },
    useSettingsInitializer: () => {
      const D = p(), { stopWatch: T } = I();
      let G = null;
      return {
        initializeSettings: () => {
          D.initSystemColor(), G = D.listenerSystemTheme(), D.initSystemTheme();
        },
        cleanupSettings: () => {
          T(), G?.();
        }
      };
    }
  };
}
const es = { class: "setting-drawer" }, ts = { class: "drawer-con" }, ns = /* @__PURE__ */ J({
  __name: "SettingDrawer",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "open", "close"],
  setup(e, { emit: t }) {
    const n = e, o = t, c = M({
      get: () => n.modelValue,
      set: (f) => o("update:modelValue", f)
    }), r = () => {
      o("open");
    }, l = () => {
      o("close");
    }, a = () => {
      c.value = !1;
    };
    return (f, h) => (g(), y("div", es, [
      k(i(Et), {
        size: "300px",
        modelValue: c.value,
        "onUpdate:modelValue": h[0] || (h[0] = (b) => c.value = b),
        "lock-scroll": !0,
        "with-header": !1,
        "before-close": a,
        "destroy-on-close": !1,
        "modal-class": "setting-modal",
        onOpen: r,
        onClose: l
      }, {
        default: N(() => [
          m("div", ts, [
            xe(f.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["modelValue"])
    ]));
  }
}), os = { class: "header-actions" }, ss = /* @__PURE__ */ J({
  __name: "SettingHeader",
  emits: ["close"],
  setup(e) {
    return (t, n) => (g(), y("div", null, [
      m("div", os, [
        m("div", {
          onClick: n[0] || (n[0] = (o) => t.$emit("close")),
          class: "close-btn"
        }, [
          k(i(Q), {
            icon: "ri:close-fill",
            class: "close-btn-icon"
          })
        ])
      ])
    ]));
  }
}), as = /* @__PURE__ */ se(ss, [["__scopeId", "data-v-513a0ce2"]]), ls = /* @__PURE__ */ J({
  __name: "SectionTitle",
  props: {
    title: {},
    style: {}
  },
  setup(e) {
    return (t, n) => (g(), y("p", {
      class: "section-title",
      style: Y(e.style)
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
const is = { class: "setting-box-wrap" }, rs = ["onClick"], cs = ["src"], us = { class: "name" }, ds = /* @__PURE__ */ J({
  __name: "ThemeSettings",
  setup(e) {
    const t = Z(), { systemThemeMode: n } = ne(t), { configOptions: o } = Ke(), { switchThemeStyles: c } = Ie();
    return (r, l) => (g(), y(j, null, [
      k(De, {
        title: r.$t("setting.theme.title")
      }, null, 8, ["title"]),
      m("div", is, [
        (g(!0), y(j, null, te(i(o).themeList, (a, f) => (g(), y("div", {
          class: "setting-item",
          key: a.theme,
          onClick: (h) => i(c)(a.theme)
        }, [
          m("div", {
            class: oe(["box", { "is-active": a.theme === i(n) }])
          }, [
            m("img", {
              src: a.img
            }, null, 8, cs)
          ], 2),
          m("p", us, O(r.$t(`setting.theme.list[${f}]`)), 1)
        ], 8, rs))), 128))
      ])
    ], 64));
  }
}), hs = { class: "setting-box-wrap" }, ms = ["onClick"], fs = ["src"], gs = /* @__PURE__ */ J({
  __name: "MenuStyleSettings",
  setup(e) {
    const t = me.themeList, n = Z(), { menuThemeType: o, isDark: c } = ne(n), r = M(() => c.value), l = (a) => {
      c.value || n.switchMenuStyles(a);
    };
    return (a, f) => (g(), y(j, null, [
      k(De, {
        title: a.$t("setting.menu.title")
      }, null, 8, ["title"]),
      m("div", hs, [
        (g(!0), y(j, null, te(i(t), (h) => (g(), y("div", {
          class: "setting-item",
          key: h.theme,
          onClick: (b) => l(h.theme)
        }, [
          m("div", {
            class: oe(["box", { "is-active": h.theme === i(o) }]),
            style: Y({
              cursor: r.value ? "no-drop" : "pointer"
            })
          }, [
            m("img", {
              src: h.img
            }, null, 8, fs)
          ], 6)
        ], 8, ms))), 128))
      ])
    ], 64));
  }
}), vs = { class: "color-list-wrapper" }, ps = { class: "color-list" }, ys = ["onClick"], bs = /* @__PURE__ */ J({
  __name: "ColorSettings",
  setup(e) {
    const t = Z(), { systemThemeColor: n } = ne(t), { configOptions: o } = Ke(), { colorHandlers: c } = Ge();
    return (r, l) => (g(), y("div", null, [
      k(De, {
        title: r.$t("setting.color.title"),
        class: "color-section-title"
      }, null, 8, ["title"]),
      m("div", vs, [
        m("div", ps, [
          (g(!0), y(j, null, te(i(o).mainColors, (a) => (g(), y("div", {
            key: a,
            class: "color-item",
            style: Y({ background: `${a} !important` }),
            onClick: (f) => i(c).selectColor(a)
          }, [
            ue(k(i(Q), {
              icon: "ri:check-fill",
              class: "color-check-icon"
            }, null, 512), [
              [de, a === i(n)]
            ])
          ], 12, ys))), 128))
        ])
      ])
    ]));
  }
}), _s = /* @__PURE__ */ se(bs, [["__scopeId", "data-v-21e1cf4a"]]), xs = { class: "setting-item" }, As = { class: "setting-label" }, Ts = /* @__PURE__ */ J({
  __name: "SettingItem",
  props: {
    config: {},
    modelValue: {}
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, o = t, c = M(() => {
      if (!n.config.options) return [];
      try {
        return typeof n.config.options == "object" && "value" in n.config.options ? n.config.options.value || [] : Array.isArray(n.config.options) ? n.config.options : [];
      } catch (l) {
        return console.warn("Error processing options for config:", n.config.key, l), [];
      }
    }), r = (l) => {
      try {
        o("change", l);
      } catch (a) {
        console.error("Error handling change for config:", n.config.key, a);
      }
    };
    return (l, a) => (g(), y("div", xs, [
      m("span", As, O(e.config.label), 1),
      e.config.type === "switch" ? (g(), q(i(Mt), {
        key: 0,
        "model-value": e.modelValue,
        onChange: r
      }, null, 8, ["model-value"])) : e.config.type === "input-number" ? (g(), q(i(Bt), {
        key: 1,
        "model-value": e.modelValue,
        min: e.config.min,
        max: e.config.max,
        step: e.config.step,
        style: Y(e.config.style),
        "controls-position": e.config.controlsPosition,
        onChange: r
      }, null, 8, ["model-value", "min", "max", "step", "style", "controls-position"])) : e.config.type === "select" ? (g(), q(i($t), {
        key: 2,
        "model-value": e.modelValue,
        style: Y(e.config.style),
        onChange: r
      }, {
        default: N(() => [
          (g(!0), y(j, null, te(c.value, (f) => (g(), q(i(Lt), {
            key: f.value,
            label: f.label,
            value: f.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "style"])) : X("", !0)
    ]));
  }
}), ws = /* @__PURE__ */ se(Ts, [["__scopeId", "data-v-eb2bba90"]]), Ss = /* @__PURE__ */ J({
  __name: "BasicSettings",
  setup(e) {
    const t = Z(), { basicSettingsConfig: n } = Ke(), { basicHandlers: o } = Ge(), {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: a,
      showLanguage: f,
      showNotification: h
    } = ne(t), b = {
      uniqueOpened: c,
      showMenuButton: r,
      showFastEnter: l,
      showWorkTab: a,
      showLanguage: f,
      showNotification: h
    }, p = ($) => b[$]?.value ?? null, I = ($, v) => {
      const w = o[$];
      typeof w == "function" ? w(v) : console.warn(`Handler "${$}" not found in basicHandlers`);
    };
    return ($, v) => (g(), y("div", null, [
      k(De, {
        title: $.$t("setting.basics.title"),
        class: "basic-settings-title"
      }, null, 8, ["title"]),
      (g(!0), y(j, null, te(i(n), (w) => (g(), q(ws, {
        key: w.key,
        config: w,
        "model-value": p(w.key),
        onChange: (D) => I(w.handler, D)
      }, null, 8, ["config", "model-value", "onChange"]))), 128))
    ]));
  }
}), ks = /* @__PURE__ */ se(Ss, [["__scopeId", "data-v-cbba06c8"]]), Cs = { class: "setting-actions" }, Es = /* @__PURE__ */ J({
  name: "SettingActions",
  __name: "SettingActions",
  setup(e) {
    const { t } = Ee(), n = Z(), { switchThemeStyles: o } = Ie(), c = (l, a, f) => {
      l !== a && f();
    }, r = async () => {
      try {
        const l = ie;
        o(l.systemThemeMode), await ye();
        const a = n.isDark ? pe.DARK : l.menuThemeType;
        n.switchMenuStyles(a), n.setElementTheme(l.systemThemeColor), c(
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
    return (l, a) => (g(), y("div", Cs, [
      k(i(st), {
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
}), Ms = /* @__PURE__ */ se(Es, [["__scopeId", "data-v-3d44080b"]]), Bs = { class: "layout-settings" }, $s = /* @__PURE__ */ J({
  name: "AoSettingsPanel",
  __name: "index",
  props: {
    open: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Zo(), { showDrawer: o } = n, { handleOpen: c, handleClose: r, closeDrawer: l } = n.useDrawerControl(), { initializeSettings: a, cleanupSettings: f } = n.useSettingsInitializer();
    return n.usePropsWatcher(t), Te(() => {
      a();
    }), ke(() => {
      f();
    }), (h, b) => (g(), y("div", Bs, [
      k(ns, {
        modelValue: i(o),
        "onUpdate:modelValue": b[0] || (b[0] = (p) => et(o) ? o.value = p : null),
        onOpen: i(c),
        onClose: i(r)
      }, {
        default: N(() => [
          k(as, { onClose: i(l) }, null, 8, ["onClose"]),
          k(ds),
          k(gs),
          k(_s),
          k(ks),
          k(Ms)
        ]),
        _: 1
      }, 8, ["modelValue", "onOpen", "onClose"])
    ]));
  }
}), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $s
}, Symbol.toStringTag, { value: "Module" })), Is = $e(
  "aoSearchStore",
  () => {
    const e = S([]);
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
), Ds = { class: "layout-search" }, Hs = { class: "search-input__suffix" }, Rs = { class: "result search-result" }, Fs = ["onClick", "onMouseenter"], Os = { class: "search-history__title" }, Ps = { class: "search-history__list" }, Ns = ["onClick", "onMouseenter"], Vs = ["onClick"], Ws = { class: "dialog-footer" }, Gs = { class: "dialog-footer__group dialog-footer__group--center" }, Ks = { class: "dialog-footer__text" }, Us = { class: "dialog-footer__group" }, qs = { class: "dialog-footer__text" }, Xs = { class: "dialog-footer__group" }, zs = { class: "dialog-footer__text" }, js = 10, Ys = /* @__PURE__ */ J({
  name: "AoGlobalSearch",
  __name: "AoGlobalSearch",
  setup(e) {
    const t = Is(), n = We(), o = M(() => Se().menuList), { showGlobalSearch: c } = ne(n), r = S(""), l = S([]), { searchHistory: a } = ne(t), f = S(null), h = S(0), b = S(0), p = S(), I = S(!1);
    he(c, (d) => {
      d && v();
    }), Te(() => {
      document.addEventListener("keydown", $);
    }), ke(() => {
      document.removeEventListener("keydown", $);
    });
    const $ = (d) => {
      (navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? d.metaKey : d.ctrlKey) && d.key.toLowerCase() === "k" && (d.preventDefault(), c.value = !0, v()), c.value && (d.key === "ArrowUp" ? (d.preventDefault(), T()) : d.key === "ArrowDown" ? (d.preventDefault(), G()) : d.key === "Enter" ? (d.preventDefault(), ee()) : d.key === "Escape" && (d.preventDefault(), c.value = !1));
    }, v = () => {
      setTimeout(() => {
        f.value?.focus();
      }, 100);
    }, w = (d) => {
      d ? l.value = D(o.value, d) : l.value = [];
    }, D = (d, C) => {
      const A = C.toLowerCase(), E = [], H = (_) => {
        if (_.meta?.isHide) return;
        const F = fe(_.meta.title).toLowerCase();
        if (_.children && _.children.length > 0) {
          _.children.forEach(H);
          return;
        }
        F.includes(A) && (_.path && _.path.trim() || _.meta.link || _.meta.isIframe) && E.push({ ..._, children: void 0 });
      };
      return d.forEach(H), E;
    }, T = () => {
      I.value = !0, r.value ? (h.value = (h.value - 1 + l.value.length) % l.value.length, V()) : (b.value = (b.value - 1 + a.value.length) % a.value.length, K()), setTimeout(() => {
        I.value = !1;
      }, 100);
    }, G = () => {
      I.value = !0, r.value ? (h.value = (h.value + 1) % l.value.length, V()) : (b.value = (b.value + 1) % a.value.length, K()), setTimeout(() => {
        I.value = !1;
      }, 100);
    }, V = () => {
      ye(() => {
        if (!p.value || !l.value.length) return;
        const d = p.value.wrapRef;
        if (!d) return;
        const C = d.querySelectorAll(".result .box");
        if (!C[h.value]) return;
        const A = C[h.value], E = A.offsetHeight, H = d.scrollTop, _ = d.clientHeight, F = A.offsetTop, P = F + E;
        F < H ? p.value.setScrollTop(F) : P > H + _ && p.value.setScrollTop(P - _);
      });
    }, K = () => {
      ye(() => {
        if (!p.value || !a.value.length) return;
        const d = p.value.wrapRef;
        if (!d) return;
        const C = d.querySelectorAll(".history-result .box");
        if (!C[b.value]) return;
        const A = C[b.value], E = A.offsetHeight, H = d.scrollTop, _ = d.clientHeight, F = A.offsetTop, P = F + E;
        F < H ? p.value.setScrollTop(F) : P > H + _ && p.value.setScrollTop(P - _);
      });
    }, ee = () => {
      r.value && l.value.length ? le(l.value[h.value]) : !r.value && a.value.length && le(a.value[b.value]);
    }, ae = (d) => h.value === d, U = () => {
      h.value = 0;
    }, le = (d) => {
      c.value = !1, L(d), ft(d), r.value = "", l.value = [];
    }, B = () => {
      Array.isArray(a.value) && t.setSearchHistory(a.value);
    }, L = (d) => {
      const C = d.path || String(d.meta.link || ""), A = a.value.findIndex(
        (H) => (H.path || String(H.meta.link || "")) === C
      );
      A !== -1 ? a.value.splice(A, 1) : a.value.length >= js && a.value.pop();
      const E = { ...d };
      delete E.children, delete E.meta.authList, a.value.unshift(E), B();
    }, s = (d) => {
      a.value.splice(d, 1), B();
    }, u = () => {
      r.value = "", l.value = [], h.value = 0, b.value = 0;
    }, x = (d) => {
      !I.value && r.value && (h.value = d);
    }, R = (d) => {
      !I.value && !r.value && (b.value = d);
    };
    return (d, C) => (g(), y("div", Ds, [
      k(i(It), {
        modelValue: i(c),
        "onUpdate:modelValue": C[1] || (C[1] = (A) => et(c) ? c.value = A : null),
        width: "600",
        "show-close": !1,
        "lock-scroll": !1,
        "modal-class": "search-modal",
        onClose: u
      }, {
        footer: N(() => [
          m("div", Ws, [
            m("div", Gs, [
              k(i(Q), {
                icon: "fluent:arrow-enter-left-20-filled",
                class: "keyboard"
              }),
              m("span", Ks, O(d.$t("search.selectKeydown")), 1)
            ]),
            m("div", Us, [
              k(i(Q), {
                icon: "ri:arrow-up-wide-fill",
                class: "keyboard"
              }),
              k(i(Q), {
                icon: "ri:arrow-down-wide-fill",
                class: "keyboard"
              }),
              m("span", qs, O(d.$t("search.switchKeydown")), 1)
            ]),
            m("div", Xs, [
              C[2] || (C[2] = m("i", { class: "keyboard keyboard--esc" }, [
                m("p", { class: "keyboard__esc-text" }, "ESC")
              ], -1)),
              m("span", zs, O(d.$t("search.exitKeydown")), 1)
            ])
          ])
        ]),
        default: N(() => [
          k(i(Dt), {
            modelValue: r.value,
            "onUpdate:modelValue": C[0] || (C[0] = (A) => r.value = A),
            modelModifiers: { trim: !0 },
            placeholder: d.$t("search.placeholder"),
            onInput: w,
            onBlur: U,
            ref_key: "searchInput",
            ref: f,
            "prefix-icon": i(Ot),
            class: "search-input"
          }, {
            suffix: N(() => [
              m("div", Hs, [
                k(i(Q), { icon: "fluent:arrow-enter-left-20-filled" })
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "prefix-icon"]),
          k(i(at), {
            class: "search-scrollbar",
            "max-height": "370px",
            ref_key: "searchResultScrollbar",
            ref: p,
            always: ""
          }, {
            default: N(() => [
              ue(m("div", Rs, [
                (g(!0), y(j, null, te(l.value, (A, E) => (g(), y("div", {
                  class: "box search-result__item",
                  key: E
                }, [
                  m("div", {
                    class: oe(["search-result__inner", ae(E) ? "search-result__inner--highlighted" : ""]),
                    onClick: (H) => le(A),
                    onMouseenter: (H) => x(E)
                  }, [
                    we(O(i(fe)(A.meta.title)) + " ", 1),
                    ue(k(i(Q), { icon: "fluent:arrow-enter-left-20-filled" }, null, 512), [
                      [de, ae(E)]
                    ])
                  ], 42, Fs)
                ]))), 128))
              ], 512), [
                [de, l.value.length]
              ]),
              ue(m("div", null, [
                m("p", Os, O(d.$t("search.historyTitle")), 1),
                m("div", Ps, [
                  (g(!0), y(j, null, te(i(a), (A, E) => (g(), y("div", {
                    class: oe(["box search-history__item", b.value === E ? "search-history__item--highlighted" : ""]),
                    key: E,
                    onClick: (H) => le(A),
                    onMouseenter: (H) => R(E)
                  }, [
                    we(O(i(fe)(A.meta.title)) + " ", 1),
                    m("div", {
                      class: "selected-icon search-history__delete",
                      onClick: Me((H) => s(E), ["stop"])
                    }, [
                      k(i(Q), {
                        icon: "ri:close-large-fill",
                        class: "search-history__delete-icon"
                      })
                    ], 8, Vs)
                  ], 42, Ns))), 128))
                ])
              ], 512), [
                [de, !r.value && l.value.length === 0 && i(a).length > 0]
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
  ca as findApplicationByPath,
  fe as formatMenuTitle,
  en as getContextI18n,
  rt as getContextRouter,
  mt as getFirstMenuPath,
  tn as getLanguageChangeHandler,
  ct as getLanguageRef,
  Se as getMenuSource,
  nn as getSystemName,
  ft as handleMenuJump,
  ua as initializeTheme,
  Xe as openExternalLink,
  Zt as setLayoutContext,
  ra as setPageTitle,
  We as useAppStore,
  So as useAutoLayoutHeight,
  Ae as useCommon,
  uo as useHeaderBar,
  da as useLayoutHeight,
  Z as useSettingStore,
  Ie as useTheme,
  Re as useWorktabStore,
  Qt as version
};
