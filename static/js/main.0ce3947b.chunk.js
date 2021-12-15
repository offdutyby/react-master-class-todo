(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{37:function(t,e,n){"use strict";n.r(e);var o,r=n(0),c=n.n(r),a=n(14),i=n.n(a),l=n(7),d=n(8),s=n(9),b=n(3),u=n(2);!function(t){t.TO_DO="TO_DO",t.DOING="DOING",t.DONE="DONE"}(o||(o={}));var g,h,j,O=Object(l.b)({key:"category",default:o.TO_DO}),x=Object(l.b)({key:"categoryListState",default:["TO_DO","DOING","DONE"]}),f=Object(l.b)({key:"toDo",default:null!==localStorage.getItem("todoArr")?JSON.parse(localStorage.getItem("todoArr")):[]}),p=Object(l.c)({key:"toDoSelector",get:function(t){var e=t.get,n=e(f),o=e(O);return localStorage.setItem("todoArr",JSON.stringify(n)),n.filter((function(t){return t.category===o}))}}),m=(Object(l.c)({key:"categoryListSelector",get:function(t){var e=(0,t.get)(x);return localStorage.setItem("categoryListState",JSON.stringify(e)),console.log(localStorage.getItem("categoryListState"))}}),n(6)),w=n(18),y=n(4);function v(){var t=Object(l.f)(x),e=Object(w.a)(),n=e.register,o=e.handleSubmit,r=e.setValue;return Object(y.jsxs)(N,{onSubmit:o((function(e){var n=e.category;t((function(t){return[].concat(Object(m.a)(t),[n])})),r("category","")})),children:[Object(y.jsx)(I,Object(b.a)(Object(b.a)({},n("category",{required:"Please write a New Category"})),{},{placeholder:"Write a New Category"})),Object(y.jsx)(T,{children:"Add"})]})}var D,S,k,N=d.c.form(g||(g=Object(s.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tmargin-bottom: 40px;\n"]))),I=d.c.input(h||(h=Object(s.a)(["\n\tmax-width: 500px;\n\tmin-width: 200px;\n\theight: 40px;\n\tborder-radius: 10px;\n\tbox-shadow: none;\n\tborder: 2px solid white;\n"]))),T=d.c.button(j||(j=Object(s.a)(["\n\twidth: 50px;\n\theight: 40px;\n\tborder-radius: 10px;\n\ttext-shadow: none;\n\tborder: 2px solid white;\n\tbackground-color: teal;\n\tcolor: white;\n\tfont-size: 15px;\n\tfont-weight: bold;\n"])));var q,C=function(){var t=Object(l.f)(f),e=Object(l.e)(O),n=Object(w.a)(),o=n.register,r=n.handleSubmit,c=n.setValue;return Object(y.jsxs)(A,{onSubmit:r((function(n){var o=n.toDo;t((function(t){return[{text:o,id:Date.now(),category:e}].concat(Object(m.a)(t))})),c("toDo","")})),children:[Object(y.jsx)(E,Object(b.a)(Object(b.a)({},o("toDo",{required:"Please write a To Do"})),{},{placeholder:"Write a to do"})),Object(y.jsx)(z,{children:"Add"})]})},A=d.c.form(D||(D=Object(s.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tmargin-bottom: 40px;\n"]))),E=d.c.input(S||(S=Object(s.a)(["\n\tmax-width: 500px;\n\tmin-width: 200px;\n\theight: 40px;\n\tborder-radius: 10px;\n\tbox-shadow: none;\n\tborder: 2px solid white;\n"]))),z=d.c.button(k||(k=Object(s.a)(["\n\twidth: 50px;\n\theight: 40px;\n\tborder-radius: 10px;\n\ttext-shadow: none;\n\tborder: 2px solid white;\n\tbackground-color: teal;\n\tcolor: white;\n\tfont-size: 15px;\n\tfont-weight: bold;\n"])));var J,L,_,G=function(t){var e=t.text,n=t.category,r=t.id,c=Object(l.f)(f),a=function(t){var n=t.currentTarget.name;c((function(t){var o=t.findIndex((function(t){return t.id===r})),c={text:e,id:r,category:n};return[].concat(Object(m.a)(t.slice(0,o)),[c],Object(m.a)(t.slice(o+1)))}))};return Object(y.jsxs)("li",{children:[Object(y.jsx)(P,{children:e}),n!==o.DOING&&Object(y.jsx)("button",{name:o.DOING,onClick:a,children:"Doing"}),n!==o.TO_DO&&Object(y.jsx)("button",{name:o.TO_DO,onClick:a,children:"To Do"}),n!==o.DONE&&Object(y.jsx)("button",{name:o.DONE,onClick:a,children:"Done"})]})},P=d.c.span(q||(q=Object(s.a)(["\n\tfont-size: 15px;\n\tcolor: white;\n\tfont-weight: bold;\n\tmargin-right: 10px;\n"])));var M,B=function(){var t=Object(l.e)(p),e=Object(l.e)(x),n=Object(l.d)(O),o=Object(u.a)(n,2),r=o[0],c=o[1];return Object(y.jsxs)(H,{children:[Object(y.jsx)(V,{children:"To Dos"}),Object(y.jsx)(v,{}),Object(y.jsx)(W,{value:r,onInput:function(t){c(t.currentTarget.value)},children:e.map((function(t){return Object(y.jsx)("option",{value:t,children:t})}))}),Object(y.jsx)(C,{}),null===t||void 0===t?void 0:t.map((function(t){return Object(y.jsx)(G,Object(b.a)({},t),t.id)}))]})},H=d.c.section(J||(J=Object(s.a)(["\n\tmax-width: 800px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\n\tmargin: 0 auto;\n"]))),V=d.c.h1(L||(L=Object(s.a)(["\n\tfont-size: 25px;\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin-bottom: 20px;\n\tmargin-top: 15px;\n"]))),W=d.c.select(_||(_=Object(s.a)(["\n\twidth: 100px;\n\theight: 30px;\n\tborder-radius: 10px;\n\ttext-align: center;\n\tmargin-bottom: 30px;\n"]))),F=Object(d.b)(M||(M=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(t){return t.theme.bgColor}),(function(t){return t.theme.textColor}));var K=function(){return Object(r.useEffect)((function(){var t;0===(null===(t=localStorage.getItem("todoArr"))||void 0===t?void 0:t.length)&&localStorage.setItem("todoArr",JSON.stringify([]))}),[]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F,{}),Object(y.jsx)(B,{})]})};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(l.a,{children:Object(y.jsx)(d.a,{theme:{bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},children:Object(y.jsx)(K,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.0ce3947b.chunk.js.map