!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-react-base"),require("polythene-core-button"),require("polythene-react-ripple")):"function"==typeof define&&define.amd?define(["exports","polythene-react-base","polythene-core-button","polythene-react-ripple"],t):t(e.polythene=e.polythene||{},e["polythene-react-base"],e["polythene-core-button"],e["polythene-react-ripple"])}(this,function(e,t,o,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p=function(e,t){return o.CoreButton.createProps(e,r(t,{Ripple:n.Ripple}))},u=function(e,t){return o.CoreButton.createContent(e,r(t,{Ripple:n.Ripple}))},i=t.statefulComponent(r({},o.CoreButton,{createProps:p,createContent:u}));i.theme=o.CoreButton.theme,i.displayName="Button",e.Button=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-react-button.js.map
