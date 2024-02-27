!function(){function t(t){return t&&t.__esModule?t.default:t}var o,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var n="Expected a function",s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,c=f||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,m=Math.min,v=function(){return c.Date.now()};function y(t,o,e){var i,s,a,r,l,u,f=0,d=!1,c=!1,p=!0;if("function"!=typeof t)throw new TypeError(n);function y(o){var e=i,n=s;return i=s=void 0,f=o,r=t.apply(n,e)}function w(t){return f=t,l=setTimeout(k,o),d?y(t):r}function E(t){var e=t-u;return void 0===u||e>=o||e<0||c&&t-f>=a}function k(){var t=v();if(E(t))return N(t);l=setTimeout(k,function(t){var e=o-(t-u);return c?m(e,a-(t-f)):e}(t))}function N(t){return l=void 0,p&&i?y(t):(i=s=void 0,r)}function T(){var t=v(),e=E(t);if(i=arguments,s=this,u=t,e){if(void 0===l)return w(u);if(c)return l=setTimeout(k,o),y(u)}return void 0===l&&(l=setTimeout(k,o)),r}return o=g(o)||0,b(e)&&(d=!!e.leading,a=(c="maxWait"in e)?h(g(e.maxWait)||0,o):a,p="trailing"in e?!!e.trailing:p),T.cancel=function(){void 0!==l&&clearTimeout(l),f=0,i=u=s=l=void 0},T.flush=function(){return void 0===l?r:N(v())},T}function b(o){var e=void 0===o?"undefined":t(i)(o);return!!o&&("object"==e||"function"==e)}function g(o){if("number"==typeof o)return o;if(function(o){return"symbol"==(void 0===o?"undefined":t(i)(o))||function(t){return!!t&&"object"==typeof t}(o)&&"[object Symbol]"==p.call(o)}(o))return NaN;if(b(o)){var e="function"==typeof o.valueOf?o.valueOf():o;o=b(e)?e+"":e}if("string"!=typeof o)return 0===o?o:+o;o=o.replace(s,"");var n=r.test(o);return n||l.test(o)?u(o.slice(2),n?2:8):a.test(o)?NaN:+o}o=function(t,o,e){var i=!0,s=!0;if("function"!=typeof t)throw new TypeError(n);return b(e)&&(i="leading"in e?!!e.leading:i,s="trailing"in e?!!e.trailing:s),y(t,o,{leading:i,maxWait:o,trailing:s})};var w,E,k={};
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */w=k,E=function(t){var o=function(t){return new o.lib.init(t)};function e(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function i(t,o){return!(!t||"string"!=typeof o||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1))}return o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},o.lib=o.prototype={toastify:"1.12.0",constructor:o,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||o.defaults.text,this.options.node=t.node||o.defaults.node,this.options.duration=0===t.duration?0:t.duration||o.defaults.duration,this.options.selector=t.selector||o.defaults.selector,this.options.callback=t.callback||o.defaults.callback,this.options.destination=t.destination||o.defaults.destination,this.options.newWindow=t.newWindow||o.defaults.newWindow,this.options.close=t.close||o.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=t.positionLeft||o.defaults.positionLeft,this.options.position=t.position||o.defaults.position,this.options.backgroundColor=t.backgroundColor||o.defaults.backgroundColor,this.options.avatar=t.avatar||o.defaults.avatar,this.options.className=t.className||o.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?o.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||o.defaults.onClick,this.options.offset=t.offset||o.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:o.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||o.defaults.ariaLive,this.options.style=t.style||o.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var o in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[o]=this.options.style[o];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(i):t.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var n=document.createElement("button");n.type="button",n.setAttribute("aria-label","Close"),n.className="toast-close",n.innerHTML="&#10006;",n.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var s=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&s>360?t.insertAdjacentElement("afterbegin",n):t.appendChild(n)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(o){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=e("x",this.options),l=e("y",this.options),u="left"==this.options.position?r:"-"+r,f="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+u+","+f+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var e=o.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,e),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),o.reposition()}.bind(this),400)}},o.reposition=function(){for(var t,o={top:15,bottom:15},e={top:15,bottom:15},n={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===i(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=n[t]+"px",n[t]+=r+15):!0===i(s[a],"toastify-left")?(s[a].style[t]=o[t]+"px",o[t]+=r+15):(s[a].style[t]=e[t]+"px",e[t]+=r+15)}return this},o.lib.init.prototype=o.lib,o},k?k=E():w.Toastify=E();var N=document.querySelector(".feedback-form");console.dir("formRef:",N);var T=document.querySelector("input"),O=document.querySelector("textarea");N.addEventListener("input",t(o)((function(t){if("email"===N[t.target.name].name||"message"===N[t.target.name].name){var o=T.value,e=O.value;o&&e&&(C={email:o,message:e},localStorage.setItem("feedback-form-state",JSON.stringify(C)))}}),500)),N.addEventListener("submit",(function(o){if(o.preventDefault(),!T.value||!O.value)return void t(k)({text:"Всі поля форми мають бути заповненні",duration:3e3,className:"warning ",position:"center",close:!0,style:{background:"linear-gradient(to right, #ff5f6d, #ffc371)"}}).showToast();C={email:T.value,message:O.value},t(k)({text:"Дякуємо за Ваш відгук",duration:3e3,className:"success ",position:"center",close:!0,style:{background:"linear-gradient(to right, #00b09b, #96c93d)"}}).showToast(),console.log(C),localStorage.removeItem("feedback-form-state"),setTimeout((function(){N.reset()}),1e3)}));var C={email:"",message:""};!function(){var t=JSON.parse(localStorage.getItem("feedback-form-state"));if(null===t)return;T.value=t.email,O.value=t.message}()}();
//# sourceMappingURL=03-feedback.865c8c97.js.map
