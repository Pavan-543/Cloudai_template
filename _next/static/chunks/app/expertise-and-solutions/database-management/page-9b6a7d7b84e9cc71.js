(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6783,9378,9351,7454,4258,1450,4097,9578,5950],{3090:function(e,n,i){Promise.resolve().then(i.bind(i,5539)),Promise.resolve().then(i.bind(i,4929)),Promise.resolve().then(i.bind(i,8294)),Promise.resolve().then(i.bind(i,2771)),Promise.resolve().then(i.bind(i,3276)),Promise.resolve().then(i.bind(i,3525)),Promise.resolve().then(i.bind(i,9314)),Promise.resolve().then(i.bind(i,9357)),Promise.resolve().then(i.bind(i,100)),Promise.resolve().then(i.bind(i,97)),Promise.resolve().then(i.bind(i,7402)),Promise.resolve().then(i.bind(i,1392)),Promise.resolve().then(i.bind(i,6822)),Promise.resolve().then(i.bind(i,6728)),Promise.resolve().then(i.bind(i,4913)),Promise.resolve().then(i.bind(i,7509)),Promise.resolve().then(i.bind(i,4612)),Promise.resolve().then(i.bind(i,2826)),Promise.resolve().then(i.bind(i,8119)),Promise.resolve().then(i.bind(i,8458)),Promise.resolve().then(i.bind(i,5568)),Promise.resolve().then(i.bind(i,212)),Promise.resolve().then(i.bind(i,6219)),Promise.resolve().then(i.bind(i,7202)),Promise.resolve().then(i.bind(i,2654)),Promise.resolve().then(i.bind(i,855)),Promise.resolve().then(i.bind(i,7431)),Promise.resolve().then(i.bind(i,5964)),Promise.resolve().then(i.bind(i,8640)),Promise.resolve().then(i.bind(i,3560)),Promise.resolve().then(i.bind(i,5979)),Promise.resolve().then(i.t.bind(i,4931,23))},100:function(e,n,i){"use strict";i.d(n,{default:function(){return t}});var r=i(7437),o=i(2265);function s(e){let{items:n=[],activeIndex:i}=e;return n.map((e,n)=>{let{id:o,tabName:s}=e;return(0,r.jsx)("a",{href:"#".concat(o),className:"nav-link ".concat(i===n?"active":""),children:s},o)})}function t(e){let{playlistData:n=[]}=e,[i,t]=(0,o.useState)(void 0),[l,d]=(0,o.useState)(!0),v=(0,o.useMemo)(()=>{var e,i,r;return null==n?void 0:null===(i=n.filter)||void 0===i?void 0:null===(e=(r=i.call(n,e=>{var n;return null==e?void 0:null===(n=e.otherData)||void 0===n?void 0:n.tabName})).map)||void 0===e?void 0:e.call(r,e=>{var n,i;return{id:"key_".concat(null==e?void 0:null===(n=e.otherData)||void 0===n?void 0:n.key),tabName:(null==e?void 0:null===(i=e.otherData)||void 0===i?void 0:i.tabName)||""}})},[n]),a=(0,o.useCallback)(e=>{e.forEach(e=>{if(e.isIntersecting){let n=v.findIndex(n=>"#".concat(n.id)==="#".concat(e.target.id));t(n),n==v.length-1?d(!1):d(!0)}})},[v]);return(0,o.useEffect)(()=>{let e=v.map(e=>"#".concat(e.id)).map(e=>document.querySelector(e)),n=new IntersectionObserver(a,{threshold:.4});return e.forEach(e=>{e&&n.observe(e)}),()=>{e.forEach(e=>{e&&n.unobserve(e)})}},[v,a]),(0,r.jsx)(r.Fragment,{children:v&&v.length>0&&l?(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{id:"fix_nav",className:"top_nav_links fixed",children:(0,r.jsx)("div",{className:"nav-links",children:(0,r.jsx)(s,{items:v,activeIndex:i})})})}):null})}},4931:function(){}},function(e){e.O(0,[7030,3095,8943,922,6648,4065,6681,2971,7023,1744],function(){return e(e.s=3090)}),_N_E=e.O()}]);