!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ViewportChecker=t()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var e=function(){return(e=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++)for(var s in t=arguments[o])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},t=function(){function t(t,o){this.query=t,this.boxSize={height:0,width:0},this.options=e({classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(){},scrollHorizontal:!1,scrollBox:window},o)}return t.prototype.handleEvent=function(e){switch(e.type){case"scroll":this.check();break;case"resize":this.recalculateBoxsize(),this.check()}},t.prototype.attach=function(){(this.elements=document.querySelectorAll(this.query),this.recalculateBoxsize(),this._registerIndex=o(this),this.options.scrollBox instanceof Window)||this.resolveScrollBox().addEventListener("scroll",this);this.check()},t.prototype.detach=function(){this._registerIndex&&(i(this._registerIndex),this._registerIndex=void 0,this.options.scrollBox instanceof Window||this.resolveScrollBox().removeEventListener("scroll",this))},t.prototype.resolveScrollBox=function(){if(this.options.scrollBox instanceof Window)return this.options.scrollBox;var e=document.querySelector(this.options.scrollBox);if(!e)throw new Error(this.options.scrollBox+" does not resolve to an existing DOM Element");return e},t.prototype.recalculateBoxsize=function(){this.boxSize=this.getBoxSize()},t.prototype.check=function(){var t,o=this,i=0,s=0;this.options.scrollHorizontal?(i=Math.max(document.body.scrollLeft,document.documentElement.scrollLeft,window.scrollX),s=i+this.boxSize.width):(i=Math.max(document.body.scrollTop,document.documentElement.scrollTop,window.scrollY),s=i+this.boxSize.height),null===(t=this.elements)||void 0===t||t.forEach((function(t){var n,r,l,c,a,d,f=e({},o.options),p={classToAdd:"vpAddClass",classToRemove:"vpRemoveClass",classToAddForFullView:"vpAddClassFullView",removeClassAfterAnimation:"vpKeepAddClass",offset:"vpOffset",repeat:"vpRepeat",scrollHorizontal:"vpScrollHorizontal",invertBottomOffset:"vpInvertBottomOffset"};for(var u in p){var h=p[u],v=t.dataset[h];v&&(f[u]=v)}if(!t.dataset.vpAnimated||f.repeat){var m;if("string"==typeof f.offset)m=f.offset.includes("%")?parseInt(f.offset)/100*o.boxSize.height:parseInt(f.offset);else{if("number"!=typeof f.offset)throw new Error("Provided objOffet '"+f.offset+"' can't be parsed. Provide a percentage or absolute number");m=f.offset}var w=f.scrollHorizontal?t.getBoundingClientRect().left:t.getBoundingClientRect().top,E=w+(f.scrollHorizontal?t.clientWidth:t.clientHeight),x=Math.round(w)+m,y=x+(f.scrollHorizontal?t.clientWidth:t.clientHeight);f.invertBottomOffset&&(y-=2*m),x<s&&y>i?((n=t.classList).remove.apply(n,f.classToRemove.split(" ")),(r=t.classList).add.apply(r,f.classToAdd.split(" ")),f.callbackFunction(t,"add"),E<=s&&w>=i?(l=t.classList).add.apply(l,f.classToAddForFullView.split(" ")):(c=t.classList).remove.apply(c,f.classToAddForFullView.split(" ")),t.dataset.vpAnimated="true",f.removeClassAfterAnimation&&t.addEventListener("animationend",(function(){var e;return(e=t.classList).remove.apply(e,f.classToAdd.split(" "))}),{once:!0})):f.repeat&&f.classToAdd.split(" ").reduce((function(e,o){return e||t.classList.contains(o)}),!1)&&((a=t.classList).remove.apply(a,f.classToAdd.split(" ")),(d=t.classList).remove.apply(d,f.classToAddForFullView.split(" ")),f.callbackFunction(t,"remove"),t.dataset.vpAnimated=void 0)}}))},t.prototype.getBoxSize=function(){var e=this.resolveScrollBox();return e instanceof Window?{height:e.innerHeight,width:e.innerWidth}:{height:e.clientHeight,width:e.clientWidth}},t}(),o=function(e){return window._VP_CHECKERS=window._VP_CHECKERS||[],window._VP_CHECKERS.push(e)},i=function(e){window._VP_CHECKERS=window._VP_CHECKERS||[],window._VP_CHECKERS[e]&&window._VP_CHECKERS.splice(e,1)};return function(e,t){var o=function(){(e._VP_CHECKERS||[]).forEach((function(e){return e.check()}))};("ontouchstart"in e||"onmsgesturechange"in e)&&["touchmove","MSPointerMove","pointermove"].forEach((function(e){return t.addEventListener(e,o)})),e.addEventListener("load",o,{once:!0}),e.addEventListener("resize",(function(){(e._VP_CHECKERS||[]).forEach((function(e){return e.recalculateBoxsize()})),o()}))}(window,document),t}));
//# sourceMappingURL=viewportChecker.umd.js.map
