(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{28:function(e,a,t){e.exports=t(39)},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),o=(t(33),t(6)),s=t(7),i=t(9),m=t(8),u=t(10),d=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand"},"Waseem Ahmad Naeem"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link",href:"#"},"Home"),r.a.createElement("a",{className:"nav-item nav-link",href:"#"},"Projects"),r.a.createElement("a",{className:"nav-item nav-link ",href:"#"},"Contact"))))}}]),a}(n.Component),p=t(21),h=t(13),E=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"introduction"},r.a.createElement("div",{className:"container text"},r.a.createElement("h1",null,"Hey I'm Waseem"),r.a.createElement("p",null,"Full Stack Developer & Tea addict")))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card shadow"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h4",null,this.props.project.title)),r.a.createElement("p",{className:"card-text"},this.props.project.description)),r.a.createElement("div",{className:"card-footer text-muted"},"Made with ",this.props.project.technology))}}]),a}(n.Component),b=t(15);function f(){var e=Object(b.b)((function(e){return e}));return e=e.project.projects.filter((function(e){return e.featured})),r.a.createElement("div",{className:"featuredWork bg-light"},r.a.createElement("div",{className:"container"},e.length>0?r.a.createElement("h1",{className:"title p-3"}," Featured Work "):"",e.map((function(e){return r.a.createElement(v,{project:e})}))))}function g(){var e=Object(b.b)((function(e){return e.skill}));return console.log(e),r.a.createElement("div",{className:"bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Skills"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xm-12 col-sm-12 col-md-4 col-lg-4 mt-3"},r.a.createElement("div",{className:"card shadow text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("h3",null,"Frontend"))),r.a.createElement("ul",{class:"list-group list-group-flush"},e.frontend.map((function(e){return r.a.createElement("li",{class:"list-group-item"},e)}))))),r.a.createElement("div",{className:"col-xm-12 col-sm-12 col-md-4 col-lg-4 mt-3"},r.a.createElement("div",{className:"card shadow text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("h3",null,"Backend"))),r.a.createElement("ul",{class:"list-group list-group-flush"},e.backend.map((function(e){return r.a.createElement("li",{class:"list-group-item"},e)}))))),r.a.createElement("div",{className:"col-xm-12 col-sm-12 col-md-4 col-lg-4 mt-3"},r.a.createElement("div",{className:"card shadow text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("h3",null,"Miscellaneous"))),r.a.createElement("ul",{class:"list-group list-group-flush"},e.miscellaneous.map((function(e){return r.a.createElement("li",{class:"list-group-item"},e)}))))))))}var N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"card-body text-center p-5"},r.a.createElement("a",{href:"https://www.facebook.com/WaseemAhmadNaeem"},"Connect @ Facebook")))))}}]),a}(n.Component);function j(){return r.a.createElement("div",{className:"pb-5 bg-light"},r.a.createElement(E,null),r.a.createElement(f,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g,null),r.a.createElement(N,null))}var w=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-dark footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"@2019 Waseem Ahmad Naeem, All rights reserved")))}}]),a}(n.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(p.a,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(h.a,{path:"/projects"},r.a.createElement("h3",null,"Projects need to add")),r.a.createElement(h.a,{path:"/contact"},r.a.createElement("h3",null,"Add Contact Component"))),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(14),k={projects:[{title:"Hire Developer",description:"Our application Hire Developer is a web-based application which is used for freelancing purpose. The technologies we used are Angular 2+ for frontend and Firebase for the backend. The main functionality of this application is a person who signup as an employer can hire a developer for their tasks. There are 3 types of users of this application in which we have the Admin, Employer, and Developer. Every user has their own functionalities that can only be used by him/her. We also used notification service for real-time notifications using firebase cloud functions. There are some of the major things we provide below and also the way to how to set up the structure for building this application.",featured:!0,technology:"Angular, Firestore"},{title:"Two Word Topic Miner",description:"I developed two word topic miner using MeTA Toolkit. This is part of Data mining project. This application get text of any length and count occurrence of co-occurring words (without stop words) and suggest the top result as topic of document",featured:!0,technology:"Meta Toolkit"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PROJECT":case"REMOVE_PROJECT":default:return e}},A={frontend:["Angular","React.Js","Bootstrap","Ng-Zorro"],backend:["Express.js","MongoDB","Firebase","SQL"],miscellaneous:["Electron.js","Ionic","Unity 3D","WPF"]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_SKILL":case"REMOVE_SKILL":default:return e}},C=Object(y.b)({project:x,skill:T}),D=Object(y.c)(C),M=r.a.createElement(b.a,{store:D},r.a.createElement(O,null));l.a.render(M,document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.080719fa.chunk.js.map