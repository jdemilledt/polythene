!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-mithril-base"),require("polythene-core-raised-button"),require("polythene-mithril-button"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-raised-button","polythene-mithril-button","polythene-mithril-shadow"],t):t(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-raised-button"],e["polythene-mithril-button"],e["polythene-mithril-shadow"])}(this,function(e,t,o,n,r){"use strict";var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=function(e){return o.CoreRaisedButton.getInitialState(e)},h=function(e,t){return o.CoreRaisedButton.createProps(e,i(t,{Shadow:r.Shadow}))},u=function(e,t){return o.CoreRaisedButton.createContent(e,i(t,{Shadow:r.Shadow}))},l=t.statefulComponent(i({},o.CoreRaisedButton,{getInitialState:a,createProps:h,createContent:u,element:n.Button}));l.theme=o.CoreRaisedButton.theme,e.RaisedButton=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-raised-button.js.map
