(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s,a=c(4),n=c.n(a),l=c(2),i=c(1),r=(c(9),c(10),c(0)),o=function(e){var t=e.todos,c=e.currentTodo,s=e.setCurrentTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title;return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:a&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:a?"has-text-success":"has-text-danger",children:n})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:(null===c||void 0===c?void 0:c.id)===t?Object(r.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){s(c)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})}):Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(s||(s={}));var d=function(e){var t=e.onSearchWordChange,c=e.onFilterChange,a=e.searchWord;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:s.ALL,children:"All"}),Object(r.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(r.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return t(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},id:"button-label",children:Object(r.jsx)("button",{"data-cy":"clearSearchButton","aria-labelledby":"button-label",type:"button",className:"delete",onClick:function(){return t("")}})})]})]})},j=(c(12),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.todo,c=e.closeModal,s=Object(i.useState)(),a=Object(l.a)(s,2),n=a[0],o=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then(o)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(j,{})]})},u=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)(""),u=Object(l.a)(n,2),m=u[0],O=u[1],x=Object(i.useState)(s.ALL),f=Object(l.a)(x,2),N=f[0],p=f[1],v=Object(i.useState)(null),y=Object(l.a)(v,2),g=y[0],C=y[1];Object(i.useEffect)((function(){b("/todos").then(a)}),[]);var L=Object(i.useMemo)((function(){return c.filter((function(e){switch(N){case s.ALL:return e.title.includes(m.toLowerCase().trim());case s.ACTIVE:return!e.completed&&e.title.includes(m.toLowerCase().trim());case s.COMPLETED:return e.completed&&e.title.includes(m.toLowerCase().trim());default:return!0}}))}),[N,m,c]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(d,{onSearchWordChange:O,onFilterChange:p,searchWord:m})}),Object(r.jsx)("div",{className:"block",children:c.length?Object(r.jsx)(o,{todos:L,currentTodo:g,setCurrentTodo:C}):Object(r.jsx)(j,{})})]})})}),g&&Object(r.jsx)(h,{todo:g,closeModal:C})]})};n.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9bf74d7d.chunk.js.map