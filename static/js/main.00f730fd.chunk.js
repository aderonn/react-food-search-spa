(this.webpackJsonpfood_spa=this.webpackJsonpfood_spa||[]).push([[0],{26:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(19),a=c.n(s),i=(c(26),c(4)),j=c(2),o=c(0);function l(){return Object(o.jsx)("nav",{className:"deep-purple lighten-2",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)(i.b,{to:"/",className:"brand-logo",children:"Food Recipes"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contacts",children:"Contacts"})})]})]})})}function b(){return Object(o.jsx)("footer",{className:"page-footer deep-purple lighten-2",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," made by Aderon",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/aderonn/fortnite-react-shop",target:"_blank",rel:"noreferrer",children:"More Links"})]})})})}var u=c(8),d=c(10),h=c.n(d),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return Object(o.jsx)("div",{className:"progress",children:Object(o.jsx)("div",{className:"indeterminate"})})}var v=c(12);function N(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})}function y(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(v.a)({},e),e.idCategory)}))})}function w(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(u.a)(r,2),a=s[0],i=s[1],j=function(){c(a)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)},value:a}),Object(o.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:j,children:"Search"})]})})}function k(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(u.a)(s,2),i=a[0],l=a[1],b=Object(j.g)(),d=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(g,{})]})}function C(){return Object(o.jsx)("h1",{children:"Hello from aboutpage"})}function M(){return Object(o.jsx)("h1",{children:"Hello from contactpage"})}function F(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:t})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:t})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn",children:"Watch recipe"})})]})}function S(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(F,Object(v.a)({},e),e.idMeal)}))})}function A(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(j.f)().goBack;return Object(n.useEffect)((function(){f(e).then((function(e){return s(e.meals)}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn",onClick:a,children:"Go back"}),r.length?Object(o.jsx)(S,{meals:r}):Object(o.jsx)(g,{})]})}function E(){var e=Object(j.h)().id,t=Object(n.useState)({}),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(j.f)().goBack;return Object(n.useEffect)((function(){m(e).then((function(e){return s(e.meals[0])}))}),[e]),Object(o.jsxs)(o.Fragment,{children:[r.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:r.strMealThumb,alt:r.strMeal}),Object(o.jsx)("h1",{children:r.strMeal}),Object(o.jsxs)("h6",{children:["Category: ",r.strCategory]}),r.strArea?Object(o.jsxs)("h6",{children:["Area: ",r.strArea]}):null,Object(o.jsx)("p",{children:r.strInstructions}),Object(o.jsxs)("table",{className:"centered",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(r).map((function(e){return e.includes("Ingredient")&&r[e]?Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:r[e]}),Object(o.jsx)("td",{children:r["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),r.strYoutube?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(o.jsx)("iframe",{title:e,src:"https://www.youtube.com/embed/".concat(r.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(o.jsx)(g,{}),Object(o.jsx)("button",{className:"btn",onClick:a,children:"Go Back"})]})}function L(){return Object(o.jsx)("h1",{children:"Page not found"})}var B=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(j.a,{path:"/about",component:C}),Object(o.jsx)(j.a,{path:"/contacts",component:M}),Object(o.jsx)(j.a,{path:"/category/:name",component:A}),Object(o.jsx)(j.a,{path:"/meal/:id",component:E}),Object(o.jsx)(j.a,{component:L})]})}),Object(o.jsx)(b,{})]})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.00f730fd.chunk.js.map