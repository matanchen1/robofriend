(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),a=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))}),o=(n(13),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(b.jsx)("img",{src:"https://robohash.org/h$%7Bid%7D "+r+"size=200x200",alt:"robot"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username},n)}));return Object(b.jsx)("div",{children:n})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa4 black-80",children:Object(b.jsx)("input",{className:"pa3 bg-dark-green bg-light-blue input-reset ba b--black-20  mb2 shadow-5 tc  ",type:"Search",placeholder:"Search robots",onChange:t})})},f=(n(15),function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:e.children})}),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(u,{robots:t})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(r.Component);s.a.render(Object(b.jsx)(g,{}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.c22a139f.chunk.js.map