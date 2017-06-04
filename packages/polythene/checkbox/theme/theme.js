import m from 'mithril';
import defaultConfig from './config';
import customConfig from '../../config/custom';
var customConfigFn = customConfig.checkbox;
import layout from './layout';
import color from './color';
import styler from '../../common/styler';

// default icons
var iconOff = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
var iconOn = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');

var config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

styler.add('pe-checkbox', layout(config), color(config));

export default {
    iconOff: iconOff,
    iconOn: iconOn
};