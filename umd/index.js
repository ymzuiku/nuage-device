!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vanillaDevice={})}(this,function(e){"use strict";function i(){return window.innerWidth}function o(){return window.innerHeight}function t(){return/(?:Android)/.test(x)}function n(){return/(?:Firefox)/.test(x)}function r(){return/(?:iPad|PlayBook)/.test(x)||t()&&!/(?:Mobile)/.test(x)||n()&&/(?:Tablet)/.test(x)}function c(){return/(?:iPhone)/.test(x)&&!r()}function u(){return/MicroMessenger/.test(x)}function a(){return!c()&&!t()}function s(){return/iphone/gi.test(window.navigator.userAgent)&&b&&3===b&&375===i()&&812===o()}function d(){return/iphone/gi.test(window.navigator.userAgent)&&b&&3===b&&414===i()&&896===o()}function l(){return 1<b?.5:1}function f(){return 1<b?.65:1}function m(){return s()||d()}function p(){return 0<=window.location.href.indexOf("_os_ios_")}function h(){return 0<=window.location.href.indexOf("_os_android_")}function w(){return p()||h()||window.cordova||!1}function v(){return w()?m()?43:20:0}function _(){return(w()||u())&&m()?25:0}var x=navigator.userAgent,b=window.devicePixelRatio||1,g="__device-style-ele__";function y(){var e="\n    :root {\n      --safe-top:"+v()+"px; --safe-bottom:"+_()+"px; --hair:"+l()+"px;--line:"+f()+"px; --iw:"+i()+"px; --ih:"+o()+"px;\n    }\n    body {height:"+o()+"px;}\n  ",t=document.getElementById(g);if(t)t.textContent=e;else{var n=document.createElement("style");n.textContent=e,n.id=g,document.head.append(n)}}var E=null;window.addEventListener("resize",function(){E&&(clearTimeout(E),E=null),setTimeout(y,30)}),y();var S={"@media-sm":"@media (min-width: 640px)","@media-md":"@media (min-width: 768px)","@media-lg":"@media (min-width: 1024px)","@media-xl":"@media (min-width: 1280px)","@media-pc":"@media (min-width: "+(a()?"0px":"9999px")+")","@media-ios":"@media (min-width: "+(c()?"0px":"9999px")+")","@media-android":"@media (min-width: "+(t()?"0px":"9999px")+")","@media-wechat":"@media (min-width: "+(u()?"0px":"9999px")+")"};e.hair=l,e.ih=o,e.isAndroid=t,e.isChrome=function(){return/(?:Chrome|CriOS)/.test(x)},e.isExtraLarge=function(){return 1<b?i()<=640:i()<=1280},e.isFireFox=n,e.isIPhoneX=s,e.isIPhoneXMax=d,e.isIos=c,e.isLarge=function(){return 1<b?i()<=512:i()<=1024},e.isLow=function(){return!1},e.isMiddle=function(){return 1<b?i()<=375:i()<=750},e.isNative=w,e.isNativeAndroid=h,e.isNativeIOS=p,e.isNeedIPhoneSafe=m,e.isPc=a,e.isSmall=function(){return 1<b?i()<=320:i()<=640},e.isTablet=r,e.isWechat=u,e.iw=i,e.line=f,e.replaceCSSMedia=function(t){return/@media-/.test(t)&&Object.keys(S).forEach(function(e){t=t.replace(e,S[e])}),t},e.safeBottom=_,e.safeTop=v,e.setCanNotScalePage=function(){if(!a()&&!window.__setCanNotScale){window.__setCanNotScale=!0;var e=document.createElement("style");e.textContent="\n    * {\n      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; \n      touch-action: manipulation;\n    }\n    .can-user-select, input, textarea {\n      -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;\n    }\n  ";var t=document.createElement("meta");t.setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"),document.head.append(e,t),document.addEventListener("gesturestart",function(e){e.preventDefault()})}},e.setFocusTouchScroll=function(t){window.__setBodyCanNotTouchScroll?(window.__setBodyCanNotTouchScroll=!0,t&&(t.__mobile_scroll||(t.__mobile_scroll=!0,t.addEventListener("touchstart",function(){if(t.__can_scroll=t.scrollHeight>t.clientHeight,t.__can_scroll){var e=t.scrollTop;0===e?t.scrollTop=1:e+t.offsetHeight===t.scrollHeight&&(t.scrollTop=t.scrollHeight-t.offsetHeight-1)}}),t.addEventListener("touchmove",function(e){t.__can_scroll?e.stopPropagation():e.preventDefault()})))):document.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})},e.setKeyboardAutoScrollBack=function(){if(!a()&&!window.__setKeyboardAutoScrollBack){window.__setKeyboardAutoScrollBack=!0;var t,n=0,i=function(){t&&t.blur&&t.blur()};document.body.addEventListener("focusin",function(e){t=e.target,n=document.body.scrollTop,setTimeout(function(){document.body.addEventListener("touchend",i)},50)}),document.body.addEventListener("focusout",function(){document.body.scrollTop=n,t=!1,document.body.removeEventListener("touchend",i)})}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map