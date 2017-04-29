import ripple from 'polythene-ripple';
import { createContent, createProps, theme } from 'polythene-button';
import { keyer, renderer } from 'polythene-mithril-core';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var updater = function updater(vnode) {
  return function (attrs, value) {
    return vnode.state[attrs] = value, setTimeout(renderer.redraw, 0);
  };
};

var oninit = function oninit(vnode) {
  return vnode.state = _extends(vnode.state, {
    focus: false,
    mouseover: false,
    inactive: false
  });
};

var view = function view(vnode) {
  var updateState = updater(vnode);
  return renderer(vnode.attrs.element || "a", createProps(vnode, { renderer: renderer, updateState: updateState, keyer: keyer, ripple: ripple }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, updateState: updateState, keyer: keyer, ripple: ripple }), vnode.attrs.after]);
};

var index = {
  theme: theme,
  oninit: oninit,
  view: view
};

export default index;
