"use strict";var _config=require("polythene/dialog/theme/config");var _config2=_interopRequireDefault(_config);var _custom=require("polythene/config/custom");var _custom2=_interopRequireDefault(_custom);var _layout=require("polythene/dialog/theme/layout");var _layout2=_interopRequireDefault(_layout);var _color=require("polythene/dialog/theme/color");var _color2=_interopRequireDefault(_color);var _styler=require("polythene/common/styler");var _styler2=_interopRequireDefault(_styler);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var customConfigFn=_custom2.default.dialog;var config=customConfigFn?customConfigFn(_config2.default):_config2.default;_styler2.default.add("pe-dialog",(0,_layout2.default)(config),(0,_color2.default)(config));