(()=>{var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t),e.d(t,{initPage:()=>h});const n=window.wp.element;window.wp.domReady;const a=window.wp.components,i=window.wp.apiFetch;var o=e.n(i);const l=window.wp.date,r=window.wp.url;var s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};var c=function(e){var t,n;return!!(null===(t=e.url)||void 0===t?void 0:t.includes("/wp-json/"))||!!(null===(n=e.url)||void 0===n?void 0:n.includes("rest_route"))||!!Object.keys(e).includes("rest_route")};const u=window.wp.i18n,d=window.nab.components;var v=function(){return v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},v.apply(this,arguments)},g=function(e){var t=e.isSubscribed,i=b(e),o=i.isModalOpen,l=i.openModal,r=i.closeModal,s=i.mainActionLabel,c=i.isDeactivating,g=i.deactivate,p=i.cleanAndDeactivate,m=i.reason,f=i.setReason;return n.createElement("div",{className:"nelio-ab-testing-deactivation"},n.createElement(a.Button,{className:"nelio-ab-testing-deactivation__button",variant:"link",onClick:l},(0,u._x)("Deactivate","command","nelio-ab-testing")),o&&n.createElement(a.Modal,{title:(0,u._x)("Nelio A/B Testing Deactivation","text","nelio-ab-testing"),isDismissible:!c,shouldCloseOnEsc:!c,shouldCloseOnClickOutside:!c,onRequestClose:r},"temporary-deactivation"===m.value?n.createElement(n.Fragment,null,n.createElement(d.RadioControl,{selected:m.value,options:w,onChange:function(e){return f({value:e,details:""})},disabled:c}),n.createElement("br",null)):n.createElement(n.Fragment,null,n.createElement("p",null,(0,u._x)("If you have a moment, please share why you are deactivating Nelio A/B Testing:","user","nelio-ab-testing")),n.createElement(d.RadioControl,{className:"nelio-ab-testing-deactivation__options",selected:m.value,options:y,onChange:function(e){return f({value:e,details:""})},extraValue:m.details,onExtraChange:function(e){return f(v(v({},m),{details:e}))},disabled:c})),t&&"temporary-deactivation"!==m.value&&n.createElement("p",{className:"nelio-ab-testing-deactivation__subscription-warning"},n.createElement(a.Dashicon,{icon:"warning"}),n.createElement("span",null,(0,u._x)("Please keep in mind your subscription to Nelio A/B Testing will remain active after removing the plugin from this site. If you want to unsubscribe from our service, you can do so from the plugin’s Account page before you deactivate the plugin.","user","nelio-ab-testing"))),n.createElement("div",{className:"nelio-ab-testing-deactivation__actions"},"temporary-deactivation"===m.value||c?n.createElement("span",null):n.createElement(a.Button,{variant:"link",disabled:c,onClick:function(){return p()}},(0,u._x)("Just Delete Data","command","nelio-ab-testing")),n.createElement(a.Button,{variant:"primary",disabled:c||"clean-stuff"===m.value,onClick:function(){return"temporary-deactivation"===m.value?g():p(m.details?"".concat(m.value,": ").concat(m.details):m.value)}},s))))},b=function(e){var t=e.cleanNonce,a=e.deactivationUrl,i=(0,n.useState)(f),u=i[0],d=i[1],g=function(){window.location.href=a},b=function(){return d(v(v({},f),{isModalOpen:!1}))},w="temporary-deactivation"===u.reason.value?p(u.isDeactivating):m(u.isDeactivating);return{isModalOpen:u.isModalOpen,openModal:function(){return d(v(v({},f),{isModalOpen:!0}))},closeModal:b,isDeactivating:u.isDeactivating,mainActionLabel:w,deactivate:function(){d(v(v({},u),{reason:f.reason,isDeactivating:!0})),g()},cleanAndDeactivate:function(e){var n,a,i,p;d(v(v({},u),{isDeactivating:!0})),(n={path:"/nab/v1/plugin/clean",method:"POST",data:{reason:e,nabnonce:t}},a=n.url,i=n.path,p=(0,l.format)("YmjHi").substring(0,11)+"0",o()(s(s(s({},n),a&&{url:c(n)?(0,r.addQueryArgs)(a,{nabts:p}):a}),i&&{path:(0,r.addQueryArgs)(i,{nabts:p})}))).then(g,b)},reason:u.reason,setReason:function(e){return d(v(v({},u),{reason:e}))}}},p=function(e){return e?(0,u._x)("Deactivating…","text","nelio-ab-testing"):(0,u._x)("Deactivate","command","nelio-ab-testing")},m=function(e){return e?(0,u._x)("Deleting Data…","text","nelio-ab-testing"):(0,u._x)("Submit and Delete Data","command","nelio-ab-testing")},f={isModalOpen:!1,isDeactivating:!1,reason:{value:"temporary-deactivation",details:""}},w=[{value:"temporary-deactivation",label:(0,u._x)("It’s a temporary deactivation","text","nelio-ab-testing")},{value:"clean-stuff",label:(0,u._x)("Delete Nelio A/B Testing’s data and deactivate plugin","text","nelio-ab-testing")}],y=[{value:"plugin-no-longer-needed",label:(0,u._x)("I no longer need the plugin","text","nelio-ab-testing")},{value:"plugin-doesnt-work",label:(0,u._x)("I couldn’t get the plugin to work","text","nelio-ab-testing"),extra:(0,u._x)("What went wrong?","text","nelio-ab-testing")},{value:"better-plugin-found",label:(0,u._x)("I found a better plugin","text","nelio-ab-testing"),extra:(0,u._x)("What’s the plugin’s name?","text","nelio-ab-testing")},{value:"other",label:(0,u._x)("Other","text","nelio-ab-testing"),extra:(0,u._x)("Please share the reason…","user","nelio-ab-testing")}];function h(e){var t,i,o=e.isSubscribed,l=e.cleanNonce,r=e.deactivationUrl,s=document.querySelector(".nelio-ab-testing-deactivate-link");s&&(t=n.createElement(a.SlotFillProvider,null,n.createElement(g,{isSubscribed:o,deactivationUrl:r,cleanNonce:l}),n.createElement(a.Popover.Slot,null)),(i=s)&&(n.createRoot?(0,n.createRoot)(i).render(t):(0,n.render)(t,i)))}})();var n=nab="undefined"==typeof nab?{}:nab;for(var a in t)n[a]=t[a];t.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();