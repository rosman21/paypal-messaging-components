/* version: 1.14.1 */
window.crc=function(t){function e(e){for(var o,r,c=e[0],l=e[1],s=e[2],d=0,h=[];d<c.length;d++)({}).hasOwnProperty.call(i,r=c[d])&&i[r]&&h.push(i[r][0]),i[r]=0;for(o in l)({}).hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(p&&p(e);h.length;)h.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++)0!==i[n[c]]&&(o=!1);o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={4:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return{}.hasOwnProperty.call(t,e)},r.p="";var c=("undefined"!=typeof self?self:this).webpackJsonpcrc=("undefined"!=typeof self?self:this).webpackJsonpcrc||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var p=l;return a.push([147,0]),n()}({136:function(t,e,n){(e=n(31)(!1)).push([t.i,".content-wrapper{overflow-y:scroll;-webkit-overflow-scrolling:touch;margin:auto;border-radius:10px;height:100%;width:100vw}.content{padding-top:0;position:relative;z-index:50;background:white}.content-background{min-height:100%;position:relative;width:100%;margin:auto;border-radius:10px;max-width:640px}main{margin:0 auto;height:100%;padding-top:1.5rem;box-sizing:border-box;display:flex;flex-direction:column}.modal-container.loading .content-wrapper{overflow:hidden}.modal-container.loading main>*{filter:blur(3px);opacity:0.6}.top-overlay{position:fixed;height:84px;left:0;right:0}@media (min-width: 640px) and (min-height: 540px){.content-background{min-height:auto;margin:auto;width:100%;height:100%;box-shadow:0px 10px 14px 1px rgba(0,0,0,0.6);display:flex;flex-direction:column}.content{flex:1 1 auto}.content-wrapper{display:flex;justify-content:center;align-items:center}.wrapper{opacity:0;transform:translateY(5%);transition:transform 350ms ease, opacity 250ms ease}.show .wrapper{opacity:1;transform:translateY(0%);transition:transform 350ms ease, opacity 250ms ease}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.content-wrapper{justify-content:flex-start}}@media (max-width: 639px), (max-height: 539px){.content-wrapper{margin-top:84px;height:calc(100% - 84px);scrollbar-width:none}.content-wrapper::-webkit-scrollbar{display:none}.content{min-height:calc(100vh - 84px)}.content-background{box-shadow:1px 21px 34px 2px rgba(0,0,0,0.56);background:white}.overlay-side.left,.overlay-side.right{width:calc((100% - 612px) / 2) !important}.overlay-side.bottom{display:none}}.header-wrapper{background:white;pointer-events:none;overflow:hidden;border-top-right-radius:10px;border-top-left-radius:10px;position:fixed;width:100%;max-width:640px;z-index:51;transform:translate3d(0, 0, 0)}.header-container{background-color:#0070ba;position:relative;overflow:hidden}.header-container h1{font-size:1.5rem;font-weight:bold;color:white}.header-container .header{max-width:500px;margin:auto;z-index:999;display:block;height:auto;padding-top:40px}.header-container .logo{display:inline-block}.header-container .logo img{height:45px;margin-right:9px}.header-container .close{top:5px;right:5px;pointer-events:all}.header-container .close svg{height:40px;width:40px}.header-container .close svg path{stroke:white !important}@media (max-width: 639px), (max-height: 539px){.header-container{text-align:center}.header-container h1{margin:0 auto}.header-container .logo img{height:45px;margin-right:9px}.header-container .close svg{height:35px;width:35px}}.hero-image{background-color:#0070ba;position:fixed;transform:translate3d(0, 0, 0);width:100%;padding:60px 0;top:12rem;max-width:640px}@media (min-width: 640px) and (min-height: 540px){.hero-image{background-color:transparent;height:12rem;top:0;overflow:hidden;padding:0;z-index:51;pointer-events:none}.hero-image .icon{position:absolute;right:3rem;bottom:-1rem}}.tabs{margin:auto;width:100%;padding:1rem 0.2rem 0.5rem;white-space:nowrap;font-size:0;display:flex;box-sizing:border-box;background:white;justify-content:center;position:absolute;z-index:51}.tabs:after{content:'';position:absolute;top:100%;left:0;width:100%;height:1rem;background:linear-gradient(#fff, rgba(255,255,255,0))}.tab{cursor:pointer;display:block;font-size:16px;font-weight:600;margin-bottom:0;font-family:PayPalSansSmall, Helvetica, Arial, Sans-Serif;width:50%;text-align:center;margin-top:0;white-space:normal;background:transparent;border:none;outline:none;position:relative;transition:color 0.3s;height:2rem;max-width:140px}.tab .title{position:relative;z-index:1}.tab::before{content:'';display:block;position:absolute;left:0;bottom:0;width:100%;height:100%;background:#3e9dea;transform:translateX(100%);transition:transform 0.3s;border-radius:1.7rem}.tab:nth-child(2):before{transform:translateX(-100%)}.tab:hover{color:#0070ba}.tab.selected{color:white}.tab.selected::before{transform:translateX(0)}.tab-transition{position:relative;flex:1 1 auto}.tab-transition-item{position:absolute;top:0;left:0;width:100%;height:0;z-index:1;opacity:0;pointer-events:none;transition:opacity 0.3s;transition-delay:0.3s;overflow:hidden;padding-top:3rem}.tab-transition-item.selected{z-index:2;background:white;opacity:1;pointer-events:all;transition-delay:0s;height:auto;position:relative}.content{position:relative;background:transparent;box-sizing:border-box;padding-top:20rem}.content .corner{position:absolute;top:-2rem;left:0;width:100px;height:2rem;overflow:hidden;background-color:white;z-index:51;top:18rem;max-width:640px}.content .corner:after{content:'';position:absolute;background-color:#0070ba;border-bottom-left-radius:100px 30px;bottom:0;left:0;width:100%;height:100%}.content .content-body{padding:0 1rem 1rem;margin:auto;max-width:500px}.content h2{text-align:left;font-weight:bold;font-size:19px}.content .divider{border:none;border-bottom:1px dashed #aaa}.content p,.content li{color:#687173}.content .call-to-action{display:flex;width:100%;align-items:center;justify-content:space-between;margin-top:3rem}.content .call-to-action svg{margin:0}.content .call-to-action p{margin-top:0;margin-bottom:0.2rem}.content .call-to-action button{margin-left:1rem;flex:0 1 35%}.content .call-to-action .dark-text{color:#2c2e2f}.content .d-inline-block{display:inline-block}.content main{background:white;padding-top:0}.content .apply-now{background:#ffc43a;color:#2c2e2f;border:none}.content .sticky-apply-now{position:fixed;transform:translate3d(0, 0, 0);width:100%;max-width:640px;top:calc(10rem + 84px);z-index:52;text-align:center;padding-top:1rem;background:white;pointer-events:none;opacity:0;transition:all 0.3s}.content .sticky-apply-now:after{content:'';position:absolute;top:100%;left:0;width:100%;height:1rem;background:linear-gradient(#fff, rgba(255,255,255,0))}.content .sticky-apply-now button{margin-bottom:0.5rem;transition:all 0.3s;transform-origin:right center;transform:scaleX(0.5) translateX(25px)}.content .sticky-apply-now div{color:#687173;font-size:13px;transition:all 0.3s;transform:translateX(-25px)}.content .sticky-apply-now hr{max-width:400px}.content .sticky-apply-now.show{opacity:1}.content .sticky-apply-now.show button{transform:scaleX(1) translateX(0);pointer-events:all}.content .sticky-apply-now.show div{transform:translateX(0)}.content .terms li{margin-bottom:0.5rem}.content .tab-switch-button{border:none;outline:none;background:none;text-decoration:none;padding:0;color:#0070ba;font-weight:600;position:relative;margin-bottom:1rem;cursor:pointer}.content .tab-switch-button:after{content:'';position:absolute;left:calc(100% + 0.25rem);border-top:2px solid #0070ba;border-right:2px solid #0070ba;transform:rotate(45deg);width:0.5rem;height:0.5rem;top:0.1rem}@media (min-width: 640px) and (min-height: 540px){.content{padding-top:12rem}.content .corner{top:10rem;position:fixed;transform:translate3d(0, 0, 0);left:auto;width:100%}.content .tabs{position:fixed;transform:translate3d(0, 0, 0);top:12rem;max-width:640px}.content .sticky-apply-now{top:12rem}}@media (max-width: 639px), (max-height: 539px){.content.sticky .corner{width:100%;position:fixed;transform:translate3d(0, 0, 0);top:calc(8rem + 84px);left:auto}.content.sticky .tabs{position:fixed;transform:translate3d(0, 0, 0);top:calc(10rem + 84px);max-width:640px}.content .content-body{max-width:400px}.content .hidden-xs{display:none}}\n",""]),t.exports=e},147:function(t,e,n){"use strict";n.r(e),n.d(e,"setupModal",(function(){return C}));var o=n(1),i=n(17),a=n(83),r=n.n(a),c=n(3),l=n(10),s=n.n(l),p=n(25),d=n(155),h=n(34),b=n(156),u=n(151),m=n(9),f=function(t){var e=t.showApplyNow,n=t.switchTab,i=Object(c.i)(),a=Object(p.b)().onClick,r=Object(c.i)(),l=Object(d.a)("Apply Now"),s=Object(h.b)().products,f=Object(b.a)("NI"),g=f.headline,x=f.subHeadline,w=f.applyNow,y=f.terms,j=f.disclaimer,O=f.copyright;return i.current=e,Object(u.b)((function(t){var e=t.target.scrollTop;if(r.current){var n=r.current,o=n.offsetTop,a=n.clientHeight,c=document.body.getBoundingClientRect();e&&o&&i.current(!(e-o<a+(c.width>639&&c.height>539?-100:60)))}}),[i,r.current]),Object(o.h)("section",{className:"content-body"},Object(o.h)("div",{className:"description"},Object(o.h)("h2",null,s.length>1?g.multiProduct:g.singleProduct),Object(o.h)("h3",null,x),Object(o.h)("p",{className:"call-to-action"},Object(o.h)("div",null,Object(o.h)("p",null,Object(o.h)("b",null,w.headline)),Object(o.h)("span",null,w.subHeadline)),Object(o.h)(m.a,{onClick:l,className:"apply-now",ref:r},"Apply ",Object(o.h)("span",{className:"hidden-xs"},"Now")))),Object(o.h)("hr",{className:"divider"}),Object(o.h)("div",{className:"terms"},Object(o.h)("h3",null,y.title),Object(o.h)("ul",null,y.items.map((function(t){return Object(o.h)("li",null,t)})))),Object(o.h)("p",null,Object(o.h)("a",{onClick:function(){return a({linkName:"Legal Terms"})},target:"_blank",rel:"noopener noreferrer",href:"https://www.paypal.com/us/webapps/mpp/ppcterms"},"Click here")," ","to view the PayPal Credit Terms and Conditions."),Object(o.h)("p",null,j),Object(o.h)("p",null,O),n?Object(o.h)("button",{type:"button",className:"tab-switch-button",onClick:n},"Or see Pay in 4"):null)},g=n(6),x=function(t){var e=t.switchTab,n=Object(h.b)().products,i=Object(b.a)("GPL"),a=i.headline,r=i.subHeadline,c=i.instructions,l=Object(b.b)("GPL").qualifying;return Object(o.h)("section",{className:"content-body"},Object(o.h)("div",{className:"description"},Object(o.h)("h2",null,n.length>1?a.multiProduct:a.singleProduct),Object(o.h)("h3",null,"true"===l.toLowerCase()?r.qualified:r.unqualified.replace(/\.00/g,"")),Object(o.h)("div",{className:"call-to-action"},Object(o.h)("div",null,Object(o.h)("p",null,Object(o.h)("span",{className:"d-inline-block"},c.title[0]," ",Object(o.h)("b",{className:"dark-text"},c.title[1]))," ",Object(o.h)("span",{className:"d-inline-block"},c.title[2]," ",Object(o.h)("b",{className:"dark-text"},c.title[3])))),Object(o.h)(g.a,{name:"secure"}))),Object(o.h)("hr",{className:"divider"}),Object(o.h)("div",{className:"terms"},Object(o.h)("h3",null,"About Pay in 4"),Object(o.h)("ul",null,"true"!==l.toLowerCase()?Object(o.h)("li",null,c.purchaseAmount.replace(/\.00/g,"")):null,c.items.map((function(t){return Object(o.h)("li",null,t)})))),e?Object(o.h)("button",{type:"button",className:"tab-switch-button",onClick:e},"Or see 6 months special financing"):null)},w=n(43),y=n(59),j=n(154),O=function(t){var e=t.headerRef,n=Object(c.i)(),i=Object(h.b)().products,a=Object(p.b)(),r=a.offer,l=a.amount,b=Object(u.b)().scrollTo,g=Object(c.j)(!1),O=g[0],v=g[1],k=Object(d.a)("Apply Now"),N=Object(c.j)(!1),P=N[0],C=N[1],z=Object(y.b)(r),T=s()(i,(function(t){return t.meta.product===z})),S=Object(c.j)(T?z:i[0].meta.product),_=S[0],A=S[1];Object(u.b)((function(t){var o=t.target.scrollTop;0!==o&&(o>=e.current.clientHeight+n.current.clientHeight?O||v(!0):O&&v(!1))}),[O]);var L=function(t){b(0),A(t)};Object(j.a)((function(){A(z)}),[z]);var X={GPL:{title:"Pay in 4",product:"GPL"},NI:{title:"PayPal Credit",product:"NI"}},M=i.map((function(t){return X[t.meta.product]})).filter((function(t){return void 0===l||0===l||t.product===_})),G=1===M.length&&i.length>1;X.GPL.body=Object(o.h)(x,{switchTab:G?function(){return L("NI")}:null});var H=s()(i,(function(t){return"GPL"===t.meta.product}));X.NI.body=Object(o.h)(f,{showApplyNow:function(t){"NI"===_&&t!==P&&C(t)},switchTab:G&&+H.meta.maxAmount>=+l?function(){C(!1),L("GPL")}:null});var I=M.length>1?Object(o.h)(w.a,{tabs:M,onSelect:function(t){return L(M[t].product)}}):Object(o.h)("div",{className:"tab-transition-item selected"},M[0].body),R=["content",O?"sticky":""];return Object(o.h)("div",{className:R.join(" ")},Object(o.h)("span",{className:"corner",ref:n}),Object(o.h)("div",{className:"sticky-apply-now "+(P?"show":"")},Object(o.h)(m.a,{onClick:k,className:"apply-now"},"Apply for PayPal Credit"),Object(o.h)("div",null,"Subject to credit approval."),Object(o.h)("hr",{className:"divider"})),Object(o.h)("main",{className:"main"},I))},v=n(18),k=n(19),N=n(44),P=function(){var t=Object(N.b)()[1],e=Object(c.i)(),n=Object(c.i)();return Object(o.h)(k.a,{contentWrapper:n,contentMaxWidth:640},Object(o.h)("div",{className:"top-overlay",onClick:function(){return t("Modal Overlay")}}),Object(o.h)("div",{className:"content-wrapper",ref:n},Object(o.h)("div",{className:"content-background"},Object(o.h)(v.a,{wrapperRef:e},Object(o.h)("h1",null,"Buy now, pay later")),Object(o.h)("div",{className:"hero-image"},Object(o.h)(g.a,{name:"phone-arm"})),Object(o.h)(O,{headerRef:e}))))};function C(t){Object(o.k)(Object(o.h)(i.a,{serverData:t,styles:r.a._getCss()},Object(o.h)(P,{contentMaxWidth:612})),document.body)}},83:function(t,e,n){var o=n(136),i=n(32),a="string"==typeof o?[[t.i,o,""]]:o;(e=t.exports=o.locals||{})._getContent=function(){return a},e._getCss=function(){return""+o},e._insertCss=function(t){return i(a,t)}}});
//# sourceMappingURL=smart-credit-modal-US.js.map