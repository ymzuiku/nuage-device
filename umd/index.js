!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).vanillaDevice=t()}(this,function(){"use strict";function e(){return window.innerWidth}function t(){return window.innerHeight}function n(){return/(?:Android)/.test(v)}function o(){return/(?:Firefox)/.test(v)}function i(){return/(?:iPad|PlayBook)/.test(v)||n()&&!/(?:Mobile)/.test(v)||o()&&/(?:Tablet)/.test(v)}function r(){return/(?:iPhone)/.test(v)&&!i()}function u(){return/MicroMessenger/.test(v)}function c(){return!r()&&!n()}function a(){return/iphone/gi.test(window.navigator.userAgent)&&x&&3===x&&375===e()&&812===t()}function s(){return/iphone/gi.test(window.navigator.userAgent)&&x&&3===x&&414===e()&&896===t()}function d(){return 1<x?.5:1}function l(){return 1<x?.65:1}function f(){return a()||s()}function m(){return 0<=window.location.href.indexOf("_os_ios_")}function p(){return 0<=window.location.href.indexOf("_os_android_")}function h(){return m()||p()||window.cordova||!1}function w(){return h()?f()?43:20:0}function _(){return(h()||u())&&f()?25:0}var v=navigator.userAgent,x=window.devicePixelRatio||1,b="__device-style-ele__";function g(){var e="\n    :root {--safe-top:"+w()+"px; --safe-bottom:"+_()+"px; --hair:"+d()+"px; --line:"+l()+"px;}\n    body {height:"+window.innerHeight+"px;}\n  ",t=document.getElementById(b);if(t)t.textContent=e;else{var n=document.createElement("style");n.textContent=e,n.id=b,document.head.append(n)}}var y=null;window.addEventListener("resize",function(){y&&(clearTimeout(y),y=null),setTimeout(g,30)}),g();var E={"@media-sm":"@media (min-width: 640px)","@media-md":"@media (min-width: 768px)","@media-lg":"@media (min-width: 1024px)","@media-xl":"@media (min-width: 1280px)","@media-pc":"@media (min-width: "+(c()?"0px":"9999px")+")","@media-ios":"@media (min-width: "+(r()?"0px":"9999px")+")","@media-android":"@media (min-width: "+(n()?"0px":"9999px")+")","@media-wechat":"@media (min-width: "+(u()?"0px":"9999px")+")"};return Object.freeze({__proto__:null,isSmall:function(){return 1<x?e()<=320:e()<=640},isMiddle:function(){return 1<x?e()<=375:e()<=750},isLarge:function(){return 1<x?e()<=512:e()<=1024},isExtraLarge:function(){return 1<x?e()<=640:e()<=1280},isAndroid:n,isFireFox:o,isChrome:function(){return/(?:Chrome|CriOS)/.test(v)},isTablet:i,isIos:r,isWechat:u,isPc:c,isLow:function(){return!1},isIPhoneX:a,isIPhoneXMax:s,hair:d,line:l,isNeedIPhoneSafe:f,isNativeIOS:m,isNativeAndroid:p,isNative:h,safeTop:w,safeBottom:_,setCanNotScalePage:function(){if(!c()&&!window.__setCanNotScale){window.__setCanNotScale=!0;var e=document.createElement("style");e.textContent="\n    * {\n      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; \n      touch-action: manipulation;\n    }\n    .can-user-select, input, textarea {\n      -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;\n    }\n  ";var t=document.createElement("meta");t.setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"),document.head.append(e,t),document.addEventListener("gesturestart",function(e){e.preventDefault()})}},setKeyboardAutoScrollBack:function(){if(!c()&&!window.__setKeyboardAutoScrollBack){window.__setKeyboardAutoScrollBack=!0;var t,n=0,o=function(){t&&t.blur&&t.blur()};document.body.addEventListener("focusin",function(e){t=e.target,n=document.body.scrollTop,setTimeout(function(){document.body.addEventListener("touchend",o)},50)}),document.body.addEventListener("focusout",function(){document.body.scrollTop=n,t=!1,document.body.removeEventListener("touchend",o)})}},setFocusTouchScroll:function(t){c()&&!window.__setBodyCanNotTouchScroll&&(document.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1}),window.__setBodyCanNotTouchScroll=!0),t.__mobile_scroll||(t.__mobile_scroll=!0,t.addEventListener("touchstart",function(){if(t.__can_scroll=t.scrollHeight>t.clientHeight,t.__can_scroll){var e=t.scrollTop;0===e?t.scrollTop=1:e+t.offsetHeight===t.scrollHeight&&(t.scrollTop=t.scrollHeight-t.offsetHeight-1)}}),t.addEventListener("touchmove",function(e){t.__can_scroll?e.stopPropagation():e.preventDefault()}))},replaceCSSMedia:function(t){return/@media-/.test(t)&&Object.keys(E).forEach(function(e){t=t.replace(e,E[e])}),t}})});
//# sourceMappingURL=index.js.map
