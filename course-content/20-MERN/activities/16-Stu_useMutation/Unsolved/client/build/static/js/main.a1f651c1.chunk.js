(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(t,e,c){},58:function(t,e,c){"use strict";c.r(e);var n,a,r=c(3),h=c.n(r),s=c(43),o=c.n(s),i=(c(54),c(59)),l=c(70),j=c(68),d=c(67),u=c(2),b=function(t){var e=t.thoughts,c=t.title;return e.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:c}),e&&e.map((function(t){return Object(u.jsxs)("div",{className:"card mb-3",children:[Object(u.jsxs)("h4",{className:"card-header bg-primary text-light p-2 m-0",children:[t.thoughtAuthor," ",Object(u.jsx)("br",{}),Object(u.jsxs)("span",{style:{fontSize:"1rem"},children:["had this thought on ",t.createdAt]})]}),Object(u.jsx)("div",{className:"card-body bg-light p-2",children:Object(u.jsx)("p",{children:t.thoughtText})})]},t._id)}))]}):Object(u.jsx)("h3",{children:"No Thoughts Yet"})},g=c(23),m=c(25),x=c(36),O=c.n(x),f=c(44),p=c(33),v=c(62),N=c(27),w=c(69),y=Object(w.a)(n||(n=Object(N.a)(["\n  mutation addThought($thoughtText: String!, $thoughtAuthor: String!) {\n    addThought(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {\n      _id\n      thoughtText\n      thoughtAuthor\n      createdAt\n      comments {\n        _id\n        commentText\n      }\n    }\n  }\n"]))),T=function(){var t=Object(r.useState)({thoughtText:"",thoughtAuthor:""}),e=Object(p.a)(t,2),c=e[0],n=e[1],a=Object(r.useState)(0),h=Object(p.a)(a,2),s=h[0],o=h[1],i=Object(v.a)(y),l=Object(p.a)(i,2),j=l[0],d=l[1].error,b=function(){var t=Object(f.a)(O.a.mark((function t(e){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,j({variables:{formState:c}});case 4:n=t.sent,n.data,window.location.reload(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),x=function(t){var e=t.target,a=e.name,r=e.value;"thoughtText"===a&&r.length<=280?(n(Object(m.a)(Object(m.a)({},c),{},Object(g.a)({},a,r))),o(r.length)):"thoughtText"!==a&&n(Object(m.a)(Object(m.a)({},c),{},Object(g.a)({},a,r)))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"What's on your techy mind?"}),Object(u.jsxs)("p",{className:"m-0 ".concat(280===s||d?"text-danger":""),children:["Character Count: ",s,"/280",d&&Object(u.jsx)("span",{className:"ml-2",children:"Something went wrong..."})]}),Object(u.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:b,children:[Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("textarea",{name:"thoughtText",placeholder:"Here's a new thought...",value:c.thoughtText,className:"form-input w-100",onChange:x})}),Object(u.jsx)("div",{className:"col-12 col-lg-9",children:Object(u.jsx)("input",{name:"thoughtAuthor",placeholder:"Add your name to get credit for the thought...",value:c.thoughtAuthor,className:"form-input w-100",onChange:x})}),Object(u.jsx)("div",{className:"col-12 col-lg-3",children:Object(u.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Thought"})}),d&&Object(u.jsx)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:"Something went wrong..."})]})]})},A=Object(w.a)(a||(a=Object(N.a)(["\n  query getThoughts {\n    thoughts {\n      _id\n      thoughtText\n      thoughtAuthor\n      createdAt\n    }\n  }\n"]))),S=function(){var t=Object(d.a)(A),e=t.loading,c=t.data,n=(null===c||void 0===c?void 0:c.thoughts)||[];return Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"flex-row justify-center",children:[Object(u.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"},children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:"col-12 col-md-8 mb-3",children:e?Object(u.jsx)("div",{children:"Loading..."}):Object(u.jsx)(b,{thoughts:n,title:"Some Feed for Thought(s)..."})})]})})},C=function(){return Object(u.jsx)("header",{className:"bg-primary text-light mb-4 py-3 flex-row align-center",children:Object(u.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(u.jsx)("h1",{className:"m-0",children:"Tech Thoughts"}),Object(u.jsx)("p",{className:"m-0",children:"Get into the mind of a programmer."})]})})},k=function(){return Object(u.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(u.jsx)("div",{className:"container text-center mb-5",children:Object(u.jsxs)("h4",{children:["Made with"," ",Object(u.jsx)("span",{className:"emoji",role:"img","aria-label":"heart","aria-hidden":"false",children:"\u2764\ufe0f"})," ","by the Tech Thoughts team."]})})})},F=new i.a({uri:"/graphql",cache:new l.a});var $=function(){return Object(u.jsx)(j.a,{client:F,children:Object(u.jsxs)("div",{className:"flex-column justify-flex-start min-100-vh",children:[Object(u.jsx)(C,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(S,{})}),Object(u.jsx)(k,{})]})})},_=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,h=e.getTTFB;c(t),n(t),a(t),r(t),h(t)}))};o.a.render(Object(u.jsx)(h.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),_()}},[[58,1,2]]]);
//# sourceMappingURL=main.a1f651c1.chunk.js.map