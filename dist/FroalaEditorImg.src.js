!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("froala-editor")):"function"==typeof define&&define.amd?define(["react","froala-editor"],t):"object"==typeof exports?exports.FroalaEditorImg=t(require("react"),require("froala-editor")):e.FroalaEditorImg=t(e.React,e["froala-editor"])}(window,(function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=r(n(2));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.tag=null,n.defaultTag="div",n.listeningEvents=[],n.element=null,n.editor=null,n.config={immediateReactModelUpdate:!1,reactIgnoreAttrs:null},n.editorInitialized=!1,n.SPECIAL_TAGS=["img","button","input","a"],n.INNER_HTML_ATTR="innerHTML",n.hasSpecialTag=!1,n.oldModel=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillMount",value:function(){this.tag=this.props.tag||this.defaultTag}},{key:"componentDidMount",value:function(){var e=this.el.tagName.toLowerCase();-1!=this.SPECIAL_TAGS.indexOf(e)&&(this.tag=e,this.hasSpecialTag=!0),this.props.onManualControllerReady?this.generateManualController():this.createEditor()}},{key:"componentWillUnmount",value:function(){this.destroyEditor()}},{key:"componentDidUpdate",value:function(){JSON.stringify(this.oldModel)!=JSON.stringify(this.props.model)&&this.setContent()}},{key:"createEditor",value:function(){var e=this;if(!this.editorInitialized&&(this.config=this.props.config||this.config,this.element=this.el,this.props.model&&(this.element.innerHTML=this.props.model),this.setContent(!0),this.registerEvent("initialized",this.config.events&&this.config.events.initialized),this.config.events||(this.config.events={}),this.config.events.initialized=function(){return e.initListeners()},this.editor=new o.default(this.element,this.config),this._initEvents))for(var t=0;t<this._initEvents.length;t++)this._initEvents[t].call(this.editor)}},{key:"setContent",value:function(e){(this.props.model||""==this.props.model)&&(this.oldModel=this.props.model,this.hasSpecialTag?this.setSpecialTagContent():this.setNormalTagContent(e))}},{key:"setNormalTagContent",value:function(e){var t=this,n=this;function i(){n.editor.html&&n.editor.html.set(n.props.model||""),n.editorInitialized&&n.editor.undo&&(n.editor.undo.reset(),n.editor.undo.saveStep())}e?this.config.initOnClick?(this.registerEvent("initializationDelayed",(function(){i()})),this.registerEvent("initialized",(function(){t.editorInitialized=!0}))):this.registerEvent("initialized",(function(){t.editorInitialized=!0,i()})):i()}},{key:"setSpecialTagContent",value:function(){var e=this.props.model;if(e){for(var t in e)e.hasOwnProperty(t)&&t!=this.INNER_HTML_ATTR&&this.element.setAttribute(t,e[t]);e.hasOwnProperty(this.INNER_HTML_ATTR)&&(this.element.innerHTML=e[this.INNER_HTML_ATTR])}}},{key:"destroyEditor",value:function(){this.element&&(this.editor.destroy&&this.editor.destroy(),this.listeningEvents.length=0,this.element=null,this.editorInitialized=!1)}},{key:"getEditor",value:function(){return this.element?this.editor:null}},{key:"generateManualController",value:function(){var e=this,t={initialize:function(){return e.createEditor.call(e)},destroy:function(){return e.destroyEditor.call(e)},getEditor:function(){return e.getEditor.call(e)}};this.props.onManualControllerReady(t)}},{key:"updateModel",value:function(){if(this.props.onModelChange){var e="";if(this.hasSpecialTag){for(var t=this.element.attributes,n={},i=0;i<t.length;i++){var o=t[i].name;this.config.reactIgnoreAttrs&&-1!=this.config.reactIgnoreAttrs.indexOf(o)||(n[o]=t[i].value)}this.element.innerHTML&&(n[this.INNER_HTML_ATTR]=this.element.innerHTML),e=n}else{var r=this.editor.html.get();"string"==typeof r&&(e=r)}this.oldModel=e,this.props.onModelChange(e)}}},{key:"initListeners",value:function(){var e=this;this.editor.events.on("contentChanged",(function(){e.updateModel()})),this.config.immediateReactModelUpdate&&this.editor.events.on("keyup",(function(){e.updateModel()}))}},{key:"registerEvent",value:function(e,t){e&&t&&("initialized"==e?(this._initEvents||(this._initEvents=[]),this._initEvents.push(t)):(this.config.events||(this.config.events={}),this.config.events[e]=t))}}]),t}(r(n(0)).default.Component);t.default=s},function(e,n){e.exports=t},,,,,,,function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=s(n(1)),r=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this;return r.default.createElement("img",{ref:function(t){return e.el=t}})}}]),t}(o.default);t.default=a}])}));