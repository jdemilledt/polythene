!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("polythene-mithril-base"),require("polythene-core"),require("polythene-core-spinner"),require("polythene-mithril-shadow")):"function"==typeof define&&define.amd?define(["exports","polythene-mithril-base","polythene-core","polythene-core-spinner","polythene-mithril-shadow"],n):n(e.polythene={},e["polythene-mithril-base"],e["polythene-core"],e["polythene-core-spinner"],e["polythene-mithril-shadow"])}(this,function(e,n,r,t,a){"use strict";var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i=n.StateComponent(o({},t.coreBaseSpinner,{createContent:function(e,n){return t.coreBaseSpinner.createContent(e,o(n,{Shadow:a.Shadow}))}}));i.displayName="BaseSpinner",i.classes=t.coreBaseSpinner.classes;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l=n.StateComponent(s({},t.coreiOSSpinner,{component:i})),p=n.StateComponent(r.Conditional);p.displayName="SpinnerToggle";var c={view:function(e){return n.renderer(p,s({},e.attrs,{placeholderClassName:i.classes.placeholder,instance:l}))}};c.theme=t.coreiOSSpinner.theme,c.classes=t.coreiOSSpinner.classes,c.displayName="iOSSpinner";var h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},S=n.StateComponent(h({},t.coreMaterialDesignSpinner,{component:i})),m=n.StateComponent(r.Conditional);m.displayName="SpinnerToggle";var d={view:function(e){return n.renderer(m,h({},e.attrs,{placeholderClassName:i.classes.placeholder,instance:S}))}};d.theme=t.coreMaterialDesignSpinner.theme,d.classes=t.coreMaterialDesignSpinner.classes,d.displayName="MaterialDesignSpinner";var y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},g=n.StateComponent(y({},t.coreMaterialDesignProgressSpinner,{component:i})),u=n.StateComponent(r.Conditional);u.displayName="SpinnerToggle";var f={view:function(e){return n.renderer(u,y({},e.attrs,{placeholderClassName:i.classes.placeholder,instance:g}))}};f.theme=t.coreMaterialDesignProgressSpinner.theme,f.classes=t.coreMaterialDesignProgressSpinner.classes,f.displayName="MaterialDesignProgressSpinner",e.iOSSpinner=c,e.MaterialDesignSpinner=d,e.MaterialDesignProgressSpinner=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-mithril-spinner.js.map