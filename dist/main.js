(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),c=n.n(o),d=n(645),a=n.n(d)()(c());a.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#buttons {\n    display: flex;\n    gap:50px;\n}\n.button {\n    background-color: red;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nimg {\n    width: 700px;\n}\n\nh1{\n    margin-bottom: 0px;\n}\nh2 {\n    margin:0px;\n}\n\n/* HOME PAGE */\n\n/* MENU PAGE */\n.menuPositions{\n    gap:10px\n}\n.position {\n    display: flex;\n    width:400px;\n    justify-content: space-between;\n}\n\n/* CONTACT PAGE */\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,c,d){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);o&&a[l[0]]||(void 0!==d&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=d),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),c&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=c):l[4]="".concat(c)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var d={},a=[],i=0;i<e.length;i++){var s=e[i],r=o.base?s[0]+o.base:s[0],l=d[r]||0,p="".concat(r," ").concat(l);d[r]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=c(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function c(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,c){var d=o(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<d.length;a++){var i=n(d[a]);t[i].references--}for(var s=o(e,c),r=0;r<d.length;r++){var l=n(d[r]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}d=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var c=void 0!==n.layer;c&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,c&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var d=n.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var d=t[o]={id:o,exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),c=n.n(o),d=n(569),a=n.n(d),i=n(565),s=n.n(i),r=n(216),l=n.n(r),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const C=function(){const e=document.querySelector("#content");e.classList.add("menuPositions");const t=document.createElement("h1");e.appendChild(t),t.textContent="Menu";const n=document.createElement("h2");e.appendChild(n),n.textContent="Starters";const o=document.createElement("div");e.appendChild(o),o.classList.add("position");const c=document.createElement("div");o.appendChild(c),c.textContent="Fries";const d=document.createElement("div");o.appendChild(d),d.textContent="15$";const a=document.createElement("div");e.appendChild(a),a.classList.add("position");const i=document.createElement("div");a.appendChild(i),i.textContent="Beef Fries";const s=document.createElement("div");a.appendChild(s),s.textContent="18$";const r=document.createElement("div");e.appendChild(r),r.classList.add("position");const l=document.createElement("div");r.appendChild(l),l.textContent="Veggie Freis";const p=document.createElement("div");r.appendChild(p),p.textContent="12$";const u=document.createElement("div");e.appendChild(u),u.classList.add("position");const m=document.createElement("div");u.appendChild(m),m.textContent="nuggets";const h=document.createElement("div");u.appendChild(h),h.textContent="15$";const C=document.createElement("h2");e.appendChild(C),C.textContent="Mains";const v=document.createElement("div");e.appendChild(v),v.classList.add("position");const f=document.createElement("div");v.appendChild(f),f.textContent="Steak and Fries";const E=document.createElement("div");v.appendChild(E),E.textContent="50$";const x=document.createElement("div");e.appendChild(x),x.classList.add("position");const y=document.createElement("div");x.appendChild(y),y.textContent="Chicken with Apple";const g=document.createElement("div");x.appendChild(g),g.textContent="50$";const b=document.createElement("div");e.appendChild(b),b.classList.add("position");const L=document.createElement("div");b.appendChild(L),L.textContent="Eggs with pork";const w=document.createElement("div");b.appendChild(w),w.textContent="20$";const M=document.createElement("div");e.appendChild(M),M.classList.add("position");const T=document.createElement("div");M.appendChild(T),T.textContent="Patato with Tomato";const S=document.createElement("div");M.appendChild(S),S.textContent="100$";const A=document.createElement("div");e.appendChild(A),A.classList.add("position");const $=document.createElement("div");A.appendChild($),$.textContent="Burger with meat";const P=document.createElement("div");A.appendChild(P),P.textContent="120$";const k=document.createElement("h2");e.appendChild(k),k.textContent="Mains";const N=document.createElement("div");e.appendChild(N),N.classList.add("position");const O=document.createElement("div");N.appendChild(O),O.textContent="Chocolate with bobo";const j=document.createElement("div");N.appendChild(j),j.textContent="20$";const q=document.createElement("div");e.appendChild(q),q.classList.add("position");const F=document.createElement("div");q.appendChild(F),F.textContent="Tiramisu with cream";const I=document.createElement("div");q.appendChild(I),I.textContent="220$";const U=document.createElement("div");e.appendChild(U),U.classList.add("position");const Z=document.createElement("div");U.appendChild(Z),Z.textContent="Apple pie";const B=document.createElement("div");U.appendChild(B),B.textContent="30$"};console.log("dupskssssssssssdadadso"),C();const v=document.querySelector("#content"),f=document.querySelector("#buttons"),E=document.createElement("button");f.appendChild(E),E.textContent="HOME",E.classList.add("button");const x=document.createElement("button");f.appendChild(x),x.textContent="MENU",x.classList.add("button");const y=document.createElement("button");function g(){v.textContent=""}f.appendChild(y),y.textContent="CONTACT",y.classList.add("button"),E.addEventListener("click",(()=>{g(),function(){const e=document.querySelector("#content"),t=document.createElement("h1");e.appendChild(t),t.textContent="Pico Bello Ristorante";const n=document.createElement("h3");e.appendChild(n),n.textContent="est. in 1969";const o=document.createElement("img");o.src="../src/restaurant.jpg",e.appendChild(o);const c=document.createElement("div");e.appendChild(c),c.classList.add("photoBy"),c.textContent="photo by Cassidy Mills on Unsplash"}()})),x.addEventListener("click",(()=>{g(),C()})),y.addEventListener("click",(()=>{g(),function(){const e=document.querySelector("#content"),t=document.createElement("h1");e.appendChild(t),t.textContent="Contact us!";const n=document.createElement("h3");e.appendChild(n),n.textContent="tel.: +48 690 590 490"}()}))})()})();