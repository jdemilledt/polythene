!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("polythene-ripple"),require("polythene-button"),require("polythene-mithril-core")):"function"==typeof define&&define.amd?define(["polythene-ripple","polythene-button","polythene-mithril-core"],t):e.polythene=t(e["polythene-ripple"],e["polythene-button"],e["polythene-mithril-core"])}(this,function(e,t,r){"use strict";e="default"in e?e.default:e;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){return function(t,n){return e.state[t]=n,setTimeout(r.renderer.redraw,0)}},i=function(e){return e.state=n(e.state,{focus:!1,mouseover:!1,inactive:!1})},p=function(n){var i=o(n);return r.renderer(n.attrs.element||"a",t.createProps(n,{renderer:r.renderer,updateState:i,keyer:r.keyer,ripple:e}),[n.attrs.before,t.createContent(n,{renderer:r.renderer,updateState:i,keyer:r.keyer,ripple:e}),n.attrs.after])};return{theme:t.theme,oninit:i,view:p}});
//# sourceMappingURL=polythene-mithril-button.js.map
