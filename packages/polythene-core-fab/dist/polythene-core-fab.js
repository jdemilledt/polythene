!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-core-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core-css","polythene-theme"],n):n(e.polythene=e.polythene||{},e["polythene-core-css"],e["polythene-theme"])}(this,function(e,n,r){"use strict";function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var i={component:"pe-fab",content:"pe-fab__content",mini:"pe-fab--mini"},a=r.vars.rgba,c={size_regular:7*r.vars.grid_unit_component,size_mini:5*r.vars.grid_unit_component,padding_regular:2*r.vars.grid_unit_component,color_light:a(r.vars.color_primary_foreground),color_dark:a(r.vars.color_primary_foreground),color_light_background:a(r.vars.color_primary),color_dark_background:a(r.vars.color_primary)},l=function(e,n){return[t({},e,{userSelect:"none",display:"inline-block",position:"relative",outline:"none",cursor:"pointer",padding:0,border:"none"," .pe-button__content":{position:"relative",width:n.size_regular+"px",height:n.size_regular+"px",borderRadius:"50%",padding:n.padding_regular+"px"},".pe-fab--mini":{" .pe-button__content":{width:n.size_mini+"px",height:n.size_mini+"px",padding:(n.size_mini-r.vars.unit_icon_size)/2+"px"}}," .pe-ripple":{borderRadius:"inherit"}," .pe-button__wash":{transition:"background-color "+r.vars.animation_duration+" ease-in-out",borderRadius:"inherit",pointerEvents:"none",backgroundColor:"transparent"}})]},p=function(e,n,r,t){return[o({},e.map(function(e){return e+n}).join(","),{" .pe-button__content":{backgroundColor:r["color_"+t+"_background"],color:r["color_"+t]}})]},s=function(e,n){return[p([".pe-dark-tone",".pe-dark-tone "],e,n,"dark"),p(["",".pe-light-tone",".pe-light-tone "],e,n,"light")]},u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d=[l,s],_="."+i.component,g=function(e,r){return n.styler.generateStyles([e,_],u({},c,r),d)};n.styler.generateStyles([_],c,d);var f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},h=g,m=function(e,n){var r=n.keys,t=n.renderer,o=n.Icon,a=e.attrs,c=a.content?a.content:a.icon?t(o,a.icon):a.children||e.children;return f({},{content:t("div",{className:i.content},c),parentClassName:[i.component,a.mini?i.mini:null,a.className||a[r.class]].join(" "),ripple:{center:!0,opacityDecayVelocity:.24},shadow:{increase:5},ink:!0,wash:!0,animateOnTap:void 0===a.animateOnTap||a.animateOnTap},a)},b=function(){return null},y={createProps:m,createContent:b,theme:h,classes:i,vars:c};e.CoreFAB=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-fab.js.map
