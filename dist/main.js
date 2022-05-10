(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),d=n.n(o),c=n(645),a=n.n(c)()(d());a.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: black;\n}\n#buttons {\n    display: flex;\n    gap:50px;\n    padding: 50px\n}\n.button {\n    font-size: 16px;\n    padding: 30px;\n    border-radius: 15px;\n    border: none;\n    background-color: #fff;\n}\n.button:hover{\n    background-color: rgb(241, 241, 241);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0px 100px 40px;\n    background-color: white;\n}\n\nimg {\n    width: 700px;\n}\n\nh1{\n    margin-bottom: 0px;\n}\nh2 {\n    margin:0px;\n}\n\n/* HOME PAGE */\n\n/* MENU PAGE */\n.menuPositions{\n    gap:10px\n}\n.position {\n    display: flex;\n    width:400px;\n    justify-content: space-between;\n}\n\n/* CONTACT PAGE */\n",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,d,c){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),d&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=d):l[4]="".concat(d)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},a=[],i=0;i<e.length;i++){var r=e[i],s=o.base?r[0]+o.base:r[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=n(p),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=d(m,o);o.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function d(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,d){var c=o(e=e||[],d=d||{});return function(e){e=e||[];for(var a=0;a<c.length;a++){var i=n(c[a]);t[i].references--}for(var r=o(e,d),s=0;s<c.length;s++){var l=n(c[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}c=r}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var d=void 0!==n.layer;d&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,d&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),d=n.n(o),c=n(569),a=n.n(c),i=n(565),r=n.n(i),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=r(),h.insert=a().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const C=function(){const e=document.querySelector("#content"),t=document.createElement("h1");e.appendChild(t),t.textContent="Pico Bello Ristorante";const n=document.createElement("h3");e.appendChild(n),n.textContent="est. in 1969";const o=document.createElement("img");o.src="../src/restaurant.jpg",e.appendChild(o);const d=document.createElement("div");e.appendChild(d),d.classList.add("photoBy"),d.textContent="photo by Cassidy Mills on Unsplash"};console.log("dupskssssssssssdadadso"),C();const v=document.querySelector("#content"),f=document.querySelector("#buttons"),x=document.createElement("button");f.appendChild(x),x.textContent="HOME",x.classList.add("button");const E=document.createElement("button");f.appendChild(E),E.textContent="MENU",E.classList.add("button");const g=document.createElement("button");function b(){v.textContent=""}f.appendChild(g),g.textContent="CONTACT",g.classList.add("button"),x.addEventListener("click",(()=>{b(),C()})),E.addEventListener("click",(()=>{b(),function(){const e=document.querySelector("#content");e.classList.add("menuPositions");const t=document.createElement("h1");e.appendChild(t),t.textContent="Menu";const n=document.createElement("h2");e.appendChild(n),n.textContent="Starters";const o=document.createElement("div");e.appendChild(o),o.classList.add("position");const d=document.createElement("div");o.appendChild(d),d.textContent="Fries";const c=document.createElement("div");o.appendChild(c),c.textContent="15$";const a=document.createElement("div");e.appendChild(a),a.classList.add("position");const i=document.createElement("div");a.appendChild(i),i.textContent="Beef Fries";const r=document.createElement("div");a.appendChild(r),r.textContent="18$";const s=document.createElement("div");e.appendChild(s),s.classList.add("position");const l=document.createElement("div");s.appendChild(l),l.textContent="Veggie Freis";const p=document.createElement("div");s.appendChild(p),p.textContent="12$";const u=document.createElement("div");e.appendChild(u),u.classList.add("position");const m=document.createElement("div");u.appendChild(m),m.textContent="nuggets";const h=document.createElement("div");u.appendChild(h),h.textContent="15$";const C=document.createElement("h2");e.appendChild(C),C.textContent="Mains";const v=document.createElement("div");e.appendChild(v),v.classList.add("position");const f=document.createElement("div");v.appendChild(f),f.textContent="Steak and Fries";const x=document.createElement("div");v.appendChild(x),x.textContent="50$";const E=document.createElement("div");e.appendChild(E),E.classList.add("position");const g=document.createElement("div");E.appendChild(g),g.textContent="Chicken with Apple";const b=document.createElement("div");E.appendChild(b),b.textContent="50$";const y=document.createElement("div");e.appendChild(y),y.classList.add("position");const L=document.createElement("div");y.appendChild(L),L.textContent="Eggs with pork";const w=document.createElement("div");y.appendChild(w),w.textContent="20$";const M=document.createElement("div");e.appendChild(M),M.classList.add("position");const T=document.createElement("div");M.appendChild(T),T.textContent="Patato with Tomato";const S=document.createElement("div");M.appendChild(S),S.textContent="100$";const k=document.createElement("div");e.appendChild(k),k.classList.add("position");const A=document.createElement("div");k.appendChild(A),A.textContent="Burger with meat";const $=document.createElement("div");k.appendChild($),$.textContent="120$";const P=document.createElement("h2");e.appendChild(P),P.textContent="Mains";const N=document.createElement("div");e.appendChild(N),N.classList.add("position");const O=document.createElement("div");N.appendChild(O),O.textContent="Chocolate with bobo";const j=document.createElement("div");N.appendChild(j),j.textContent="20$";const q=document.createElement("div");e.appendChild(q),q.classList.add("position");const F=document.createElement("div");q.appendChild(F),F.textContent="Tiramisu with cream";const I=document.createElement("div");q.appendChild(I),I.textContent="220$";const U=document.createElement("div");e.appendChild(U),U.classList.add("position");const Z=document.createElement("div");U.appendChild(Z),Z.textContent="Apple pie";const B=document.createElement("div");U.appendChild(B),B.textContent="30$"}()})),g.addEventListener("click",(()=>{b(),function(){const e=document.querySelector("#content"),t=document.createElement("h1");e.appendChild(t),t.textContent="Contact us!";const n=document.createElement("h3");e.appendChild(n),n.textContent="tel.: +48 690 590 490"}()}))})()})();