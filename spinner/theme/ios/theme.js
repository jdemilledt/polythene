"use strict";var _config=require("polythene/spinner/theme/ios/config");var _config2=_interopRequireDefault(_config);var _layout=require("polythene/spinner/theme/ios/layout");var _layout2=_interopRequireDefault(_layout);var _color=require("polythene/spinner/theme/ios/color");var _color2=_interopRequireDefault(_color);var _styler=require("polythene/common/styler");var _styler2=_interopRequireDefault(_styler);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var customConfigFn=undefined;var config=customConfigFn?customConfigFn(_config2.default):_config2.default;_styler2.default.add("pe-spinner-ios",(0,_layout2.default)(config),(0,_color2.default)(config));