import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/toolbar";

export const getElement = vnode =>
  vnode.attrs.element || "div";

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.title,
        attrs.indent ? classes.indentedTitle : null,
        attrs.center ? classes.centeredTitle : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.events
  );
};

export const createContent = vnode => {
  const attrs = vnode.attrs;
  return attrs.text
    ? attrs.text
    : attrs.content
      ? attrs.content
      : attrs.children || vnode.children || attrs;
};
