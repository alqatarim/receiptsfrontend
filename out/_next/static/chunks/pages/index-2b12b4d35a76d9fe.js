(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6844)}])},6844:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r=t(5893),s=t(7294),u=function(){let[n,e]=(0,s.useState)(null);return(0,s.useEffect)(()=>{fetch("http://localhost:80/api/receipts").then(n=>n.json()).then(n=>e(n)).catch(n=>console.error("Error fetching data:",n))},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Customer Receipts"}),(0,r.jsx)("ul",{children:Array.isArray(n)&&n.map(n=>(0,r.jsxs)("li",{children:["Customer: ",n.customerName," - Amount: ",n.amount]},n.id))})]})},c=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"My Next.js App"}),(0,r.jsx)(u,{})]})}}},function(n){n.O(0,[888,774,179],function(){return n(n.s=5557)}),_N_E=n.O()}]);