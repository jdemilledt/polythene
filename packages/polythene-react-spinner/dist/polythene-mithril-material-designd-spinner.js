!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-mithril-base"),require("polythene-core-material-design-spinner"),require("polythene-core-spinner"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core-material-design-spinner","polythene-core-spinner","polythene-mithril-shadow"],n):n(e.polythene=e.polythene||{},e["polythene-mithril-base"],e["polythene-core-material-design-spinner"],e["polythene-core-spinner"],e["polythene-mithril-shadow"])}(this,function(e,n,r,t,o){"use strict";var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},p=n.StateComponent(i({},t.coreSpinner,{createContent:function(e,n){return t.coreSpinner.createContent(e,i(n,{Shadow:o.Shadow}))}}));p.displayName="BaseSpinner";var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l=n.ViewComponent(a({},r.coreSpinner,{component:p}));l.theme=r.coreSpinner.theme,l.displayName="MaterialDesignSpinner",e.MaterialDesignSpinner=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-material-designd-spinner.js.map