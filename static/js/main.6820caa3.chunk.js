(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(27)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),u=(n(15),n(5)),i=n(2),l=n(1),s=(n(17),function(e){var t=e.addNewTask,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],u=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(r.trim()),u("")}},o.a.createElement("input",{value:r,placeholder:"Co jest do zrobienia?",className:"form__input",onChange:function(e){var t=e.target;return u(t.value)}}),o.a.createElement("button",{className:"form__button"},"Dodaj zadanie"))}),d=(n(19),function(e){var t=e.tasks,n=e.hideDone,a=e.removeTask,c=e.toggleTaskDone;return o.a.createElement("ul",{className:"tasks"},t.map(function(e){return o.a.createElement("li",{key:e.id,className:"tasks__content".concat(e.done&&n?" tasks__content--hidden":"")},o.a.createElement("button",{className:"tasks__button tasks__button--toggleDone",onClick:function(){return c(e.id)}},e.done?"\u2714":""),o.a.createElement("p",{className:"".concat(e.done?"tasks__done":"")},e.content),o.a.createElement("button",{className:"tasks__button tasks__button--remove",onClick:function(){return a(e.id)}},"\ud83d\uddd1"))}))}),m=(n(21),function(e){var t=e.tasks,n=e.hideDone,a=e.toggleHideDone,c=e.setAllDone;return t.length>0&&o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:a,className:"buttons__button"},n?"Poka\u017c":"Ukryj"," uko\u0144czone"),o.a.createElement("button",{onClick:c,className:"buttons__button",disabled:t.every(function(e){return e.done})},"Uko\u0144cz wszystkie"))}),f=(n(23),function(e){var t=e.title,n=e.body,a=e.extraHeaderContent;return o.a.createElement("section",{className:"section"},o.a.createElement("header",{className:"section__header"},o.a.createElement("h2",null,t),a),o.a.createElement("div",{className:"section__body"},n))}),b=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("h1",null,t))},k=(n(25),function(e){var t=e.children;return o.a.createElement("main",{className:"container"},t)});var E=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}]),E=Object(l.a)(r,2),_=E[0],g=E[1];return o.a.createElement(k,null,o.a.createElement(b,{title:"Lista zada\u0144"}),o.a.createElement(f,{title:"Dodaj nowe zadanie",body:o.a.createElement(s,{addNewTask:function(e){g(function(t){return[].concat(Object(u.a)(t),[{content:e,done:!1,id:t.length?t[t.length-1].id+1:1}])})}})}),o.a.createElement(f,{title:"Lista Zada\u0144",body:o.a.createElement(d,{tasks:_,hideDone:n,removeTask:function(e){g(function(t){return t.filter(function(t){return t.id!==e})})},toggleTaskDone:function(e){g(function(t){return t.map(function(t){return t.id===e?Object(i.a)({},t,{done:!t.done}):t})})}}),extraHeaderContent:o.a.createElement(m,{tasks:_,hideDone:n,toggleHideDone:function(){c(function(e){return!e})},setAllDone:function(){g(function(e){return e.map(function(e){return Object(i.a)({},e,{done:!0})})})}})}))},_=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,28)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null))),_()}],[[6,3,2]]]);
//# sourceMappingURL=main.6820caa3.chunk.js.map