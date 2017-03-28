!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-theme"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,t,o,n,a){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}t="default"in t?t.default:t;var p={transition:"box-shadow "+a.vars.animation_duration+" ease-out","shadow-top-z-1":"initial","shadow-bottom-z-1":"0 1px 4px 0 rgba(0, 0, 0, 0.37)","shadow-top-z-2":"0 2px 2px 0 rgba(0, 0, 0, 0.2)","shadow-bottom-z-2":"0 6px 10px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-3":"0 11px 7px 0 rgba(0, 0, 0, 0.19)","shadow-bottom-z-3":"0 13px 25px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-4":"0 14px 12px 0 rgba(0, 0, 0, 0.17)","shadow-bottom-z-4":"0 20px 40px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-5":"0 17px 17px 0 rgba(0, 0, 0, 0.15)","shadow-bottom-z-5":"0 27px 55px 0 rgba(0, 0, 0, 0.3)","shadow-down-z-1":"inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)","shadow-down-z-2":"inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"},i=function(e){return{boxShadow:e}},s=function(e,t){return[r({},e,[n.mixin.fit(),{borderRadius:"inherit",pointerEvents:"none"," .pe-shadow__bottom, .pe-shadow__top":[n.mixin.fit(),{borderRadius:"inherit"}],".pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":{transition:t.transition}}},[1,2,3,4,5].map(function(e){var o;return o={},r(o," .pe-shadow__top.pe-shadow--z-"+e,i(t["shadow-top-z-"+e])),r(o," .pe-shadow__bottom.pe-shadow--z-"+e,i(t["shadow-bottom-z-"+e])),o})])]},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},h=[s],l=function(e,t){return n.styler.generateStyles([e,".pe-shadow"],d({},p,t),h)};n.styler.generateStyles([".pe-shadow"],p,h);var w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u={component:"pe-shadow",topShadow:"pe-shadow__top",bottomShadow:"pe-shadow__bottom",animated:"pe-shadow--animated",depth_n:"pe-shadow--z-"},b=function(e){var n=e.attrs,a=""+u.depth_n+Math.min(5,void 0!==n.z?n.z:1),r=n.element||"div",p=w({},o.filterSupportedAttributes(n),{class:[u.component,n.animated&&u.animated,n.class].join(" ")}),i=n.content?n.content:n.children||e.children,s=[i,t("div",{class:[u.bottomShadow,a].join(" ")}),t("div",{class:[u.topShadow,a].join(" ")})];return t(r,p,[n.before,s,n.after])},c={theme:l,view:b};e.default=c,e.classes=u,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-shadow.js.map
