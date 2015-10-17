"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polythenePolythenePolythene=require("polythene/polythene/polythene");var _polythenePolythenePolythene2=_interopRequireDefault(_polythenePolythenePolythene);var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("polythene-theme/svg/svg");var globalCache={};var createView=function createView(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var content=undefined,svg=undefined;var tag=opts.tag||"div";var props={"class":["svg",opts["class"]].join(" "),config:opts.config};if(opts.content){content=opts.content}else{var path=opts.src;if(ctrl.path()!==path){svg=globalCache[path];if(svg){content=_mithril2["default"].trust(svg);preloadNext(ctrl,opts)}else{ctrl.path(path);loadSvg(path,ctrl,opts)}}else{svg=ctrl.svg();svg=svg||"";content=_mithril2["default"].trust(svg);preloadNext(ctrl,opts)}}return(0,_mithril2["default"])(tag,props,_polythenePolythenePolythene2["default"].insertContent(content,opts))};var loadSvg=function loadSvg(path,ctrl,opts){var preloading=arguments.length<=3||arguments[3]===undefined?false:arguments[3];if(System&&System["import"]){(function(){var normalizedName=System.normalizeSync(path);var deferred=_mithril2["default"].deferred();System["import"](normalizedName).then(function(data){deferred.resolve(data);if(preloading){globalCache[path]=data;ctrl.preloadingIndex++;preloadNext(ctrl,opts)}else{ctrl.svg(data);_mithril2["default"].redraw()}})})()}else{if(console){console.log("polythene/svg: System not found.")}}};var preloadNext=function preloadNext(ctrl,opts){if(!ctrl.preloadingItems){return}if(ctrl.preloadingIndex>=ctrl.preloadingItems.length){return}var next=ctrl.preloadingItems[ctrl.preloadingIndex];if(!globalCache[next]){loadSvg(next,ctrl,opts,true)}else{ctrl.preloadingIndex++;preloadNext(ctrl,opts)}};var component={controller:function controller(){var opts=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];return{path:_mithril2["default"].prop(""),svg:_mithril2["default"].prop(""),preloadingItems:opts.preload,preloadingIndex:0}},view:function view(ctrl){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];return createView(ctrl,opts)}};exports["default"]=component;module.exports=exports["default"];