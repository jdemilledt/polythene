(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-list')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-list'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-list']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreList) { 'use strict';

  var listTileClasses = {
    component: "pe-list-tile",

    // elements
    content: "pe-list-tile__content",
    highSubtitle: "pe-list-tile__high-subtitle",
    primary: "pe-list-tile__primary",
    secondary: "pe-list-tile__secondary",
    subtitle: "pe-list-tile__subtitle",
    title: "pe-list-tile__title",
    contentFront: "pe-list-tile__content-front",

    // states
    compact: "pe-list-tile--compact",
    compactFront: "pe-list-tile--compact-front",
    disabled: "pe-list-tile--disabled",
    hasFront: "pe-list-tile--front",
    hasHighSubtitle: "pe-list-tile--high-subtitle",
    hasSubtitle: "pe-list-tile--subtitle",
    header: "pe-list-tile--header",
    hoverable: "pe-list-tile--hoverable",
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
    highlight: "pe-list-tile--highlight",
    sticky: "pe-list-tile--sticky",
    navigation: "pe-list-tile--navigation"
  };

  var classes = {
    component: "pe-list",

    // states
    border: "pe-list--border",
    compact: "pe-list--compact",
    hasHeader: "pe-list--header",
    indentedBorder: "pe-list--indented-border",
    padding: "pe-list--padding",
    paddingTop: "pe-list--padding-top",
    paddingBottom: "pe-list--padding-bottom",

    // lookup
    header: listTileClasses.header
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var borderStyle = function borderStyle(vars) {
    return {
      borderStyle: "none none solid none",
      borderWidth: vars.border_width_bordered + "px"
    };
  };

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, {
        ".pe-list--header": {
          paddingTop: 0
        },
        ".pe-list--indented-border": {
          borderTop: "none"
        }
      })];
    },
    padding: function padding(selector, vars) {
      return [sel(selector, {
        ".pe-list--padding": {
          padding: vars.padding + "px 0"
        },
        ".pe-list--padding-top": {
          paddingTop: vars.padding + "px"
        },
        ".pe-list--padding-bottom": {
          paddingBottom: vars.padding + "px"
        }
      })];
    },
    padding_compact: function padding_compact(selector, vars) {
      return [sel(selector, {
        ".pe-list--compact": {
          padding: vars.padding_compact + "px 0"
        }
      })];
    },
    border_width_stacked: function border_width_stacked(selector, vars) {
      return [sel(selector, {
        "& + &": {
          borderStyle: "solid none none none",
          borderWidth: vars.border_width_stacked + "px"
        }
      })];
    },
    border_width_bordered: function border_width_bordered(selector, vars) {
      return [sel(selector, {
        ".pe-list--border": {
          " .pe-list-tile": {
            ":not(.pe-list-tile--header):not(:last-child)": {
              "&": borderStyle(vars)
            }
          }
        },
        ".pe-list--indented-border": {
          " .pe-list-tile": {
            ":not(.pe-list-tile--header):not(:last-child)": {
              " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars)
            }
          }
        }
      })];
    }
  };

  var layout = (function (selector, componentVars, customVars) {
    var allVars = _extends({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  });

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var sel$1 = function sel(selector, o) {
    return _defineProperty$1({}, selector, o);
  };

  var generalFns = {
    general_styles: function general_styles() {
      return [];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars) {
      return [sel$1(selector, {
        backgroundColor: vars["color_" + tint + "_background"]
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_border", function (selector, vars) {
      var _sel;

      return [sel$1(selector, (_sel = {}, _defineProperty$1(_sel, "& + .pe-list", {
        borderTopColor: vars["color_" + tint + "_border"]
      }), _defineProperty$1(_sel, ".pe-list--border", {
        " .pe-list-tile": {
          ":not(:last-child)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }), _defineProperty$1(_sel, ".pe-list--indented-border", {
        " .pe-list-tile": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }), _sel))];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
    var currentVars = customVars ? customVars : allVars;
    return Object.keys(currentVars).map(function (v) {
      var varFns = tint === "light" ? lightTintFns : darkTintFns;
      return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
    }).filter(function (s) {
      return s;
    });
  };

  var style = function style(scopes, selector, componentVars, customVars, tint) {
    var selectors = scopes.map(function (s) {
      return s + selector;
    }).join(",");
    return createStyle(selectors, componentVars, customVars, tint);
  };

  var color = (function (selector, componentVars, customVars) {
    return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreList.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreList.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreList.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreList.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-list.js.map
