(this.webpackJsonpvcentry=this.webpackJsonpvcentry||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(31),r=n.n(c),i=n(2),o=n(3),l=n(5),j=n(4),h=n(10),b=n(6),u=n(14),d=n(8),O=n(0),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onhandleinput=function(e){if("checkbox"===e.target.type){if(e.target.checked)s.state.register.hobbies.push(e.target.value);else{var t=s.state.register.hobbies.findIndex((function(t,n){return t===e.target.value}));s.state.register.hobbies.splice(t,1)}s.setState({hobbies:s.state.register.hobbies})}else s.setState({register:Object(d.a)(Object(d.a)({},s.state.register),{},Object(u.a)({},e.target.name,e.target.value))})},s.OnInputFocus=function(e){s.setState({error:Object(d.a)(Object(d.a)({},s.state.error),{},Object(u.a)({},e.target.name,!1))})},s.OnInputBlur=function(e){0===e.target.value.length&&s.setState({error:Object(d.a)(Object(d.a)({},s.state.error),{},Object(u.a)({},e.target.name,!0))})},s.state={register:{firstName:"",lastName:"",email:"",password:"",dateofbirth:"",hobbies:[],gender:"",city:"",address:""},error:{firstName:!1,lastName:!1,email:!1,password:!1,dateofbirth:!1,hobbies:!1,gender:!1,city:!1,address:!1}},s}return Object(o.a)(n,[{key:"oncreateAccont",value:function(){for(var e in console.log(this.state.register),this.state.register)"hobbies"===e?0===this.state.register.hobbies.length?this.state.error.hobbies=!0:this.state.error.hobbies=!1:""===this.state.register[e]?this.state.error[e]=!0:this.state.error[e]=!1;this.setState({error:this.state.error})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"registerform",children:[Object(O.jsx)("h1",{children:"welcome to RegisterPage"}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"Enter your firstName:"}),Object(O.jsx)("input",{type:"text",className:"input",name:"firstName",placeholder:"please enter your first name ",onChange:this.onhandleinput,onFocus:this.OnInputFocus,onBlur:this.OnInputBlur}),this.state.error.firstName&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please enter a valid firstName"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"Enter your lastName:"}),Object(O.jsx)("input",{type:"text",className:"input",name:"lastName",placeholder:"please enter your last name ",onChange:this.onhandleinput,onFocus:this.OnInputFocus,onBlur:this.OnInputBlur}),this.state.error.lastName&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please enter a valid lastName"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"Enter your email:"}),Object(O.jsx)("input",{type:"text",className:"input",name:"email",placeholder:"please enter your emailid ",onChange:this.onhandleinput,onFocus:this.OnInputFocus,onBlur:this.OnInputBlur}),this.state.error.email&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please enter a valid email"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"Enter your password:"}),Object(O.jsx)("input",{type:"text",className:"input",name:"password",placeholder:"please enter your password",onChange:this.onhandleinput,onFocus:this.OnInputFocus,onBlur:this.OnInputBlur}),this.state.error.password&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please enter a valid password"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"select your d.o.b:"}),Object(O.jsx)("input",{type:"date",name:"dateofbirth",className:"input",onChange:this.onhandleinput}),this.state.error.dateofbirth&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please select a valid d.o.b"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"select your gender:"}),Object(O.jsx)("input",{type:"radio",name:"gender",value:"male",onChange:this.onHandleInput}),"Male",Object(O.jsx)("input",{type:"radio",name:"gender",value:"female",onChange:this.onHandleInput}),"Female",Object(O.jsx)("input",{type:"radio",name:"gender",value:"don't want specify",onChange:this.onHandleInput}),"Others",this.state.error.gender&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please select a valid gender"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"select your hobbies:"}),Object(O.jsx)("input",{type:"checkbox",value:"cricket",name:"hobbies",onChange:this.onHandleInput}),"cricket",Object(O.jsx)("input",{type:"checkbox",value:"carrom",name:"hobbies",onChange:this.onHandleInput}),"carrom",Object(O.jsx)("input",{type:"checkbox",value:"chess",name:"hobbies",onChange:this.onHandleInput}),"chess",Object(O.jsx)("input",{type:"checkbox",value:"cinema news",name:"hobbies",onChange:this.onHandleInput}),"cinema news",this.state.error.hobbies&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please select a hobbies"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"Enter your Address:"}),Object(O.jsx)("textarea",{name:"address",placeholder:"please enter your address..",onChange:this.onhandleinput,onFocus:this.OnInputFocus,onBlur:this.OnInputBlur}),this.state.error.address&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please enter a valid address"})," "]})]}),Object(O.jsxs)("div",{className:"m-bottom",children:[Object(O.jsx)("label",{className:"label",children:"select your city:"}),Object(O.jsxs)("select",{className:"input",defaultValue:"",name:"city",onChange:this.onhandleinput,children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"please your city"}),Object(O.jsx)("option",{value:"chennai",children:"chennai"}),Object(O.jsx)("option",{value:"delhi",children:"delhi"}),Object(O.jsx)("option",{value:"pune",children:"pune"}),Object(O.jsx)("option",{value:"cochin",children:"cochin"})]}),this.state.error.city&&Object(O.jsxs)("div",{children:[" ",Object(O.jsx)("span",{className:"err-msg",children:" please select a valid city "})," "]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){e.oncreateAccont()},children:"Create my Account"})}),Object(O.jsx)(h.b,{to:"/home",children:"create your account"})]})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onHandleInput=function(e){s.setState({login:Object(d.a)(Object(d.a)({},s.state.login),{},Object(u.a)({},e.target.name,e.target.value))})},s.state={login:{email:"",password:""},error:{email:!1,password:!1}},s}return Object(o.a)(n,[{key:"onLogin",value:function(){for(var e in this.state.login)if("email"==e){this.state.error.email=!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(this.state.login[e]).toLowerCase())}else"password"==e&&(this.state.error.password=!(this.state.login[e].length>=6));for(var t in this.setState({error:this.state.error}),this.state.error)if(this.state.error[t])return;this.props.history.push("/home")}},{key:"goToMailBoxPage",value:function(){this.props.history.push("/mail/inbox",this.state.login)}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is login page"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"enetr your email:"}),Object(O.jsx)("input",{type:"text",name:"email",placeholder:"please enter your email",onChange:this.onHandleInput}),this.state.error.email&&Object(O.jsx)("span",{className:"err-msg",children:"please enter valid email"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"enetr your password:"}),Object(O.jsx)("input",{type:"text",name:"password",placeholder:"please enter your password",onChange:this.onHandleInput}),this.state.error.email&&Object(O.jsx)("span",{className:"err-msg",children:"please enter valid passwoed"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:function(){return e.onLogin()},children:"login"}),Object(O.jsx)(h.b,{to:"/mail/inbox",children:"Go to mail box Page"})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.goToMailBoxPage()},children:"mailBoxPage"})})]})]})}}]),n}(s.Component),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"This is home page"})})}}]),n}(s.Component),v=n(16),g=n.n(v),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={userList:[]},s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.listUser()}},{key:"listUser",value:function(){var e=this;g.a.get("https://reqres.in/api/users?page=2").then((function(t){console.log(t.data.data),e.setState({userList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.userList.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.first_name}),Object(O.jsx)("td",{children:e.last_name}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:e.avatar})})]},t)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"this is Inbox page"}),Object(O.jsx)("button",{onClick:function(){return e.listUser()},children:"List User"}),Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"ID"}),Object(O.jsx)("th",{children:"FIRSTNAME"}),Object(O.jsx)("th",{children:"LASTNAME"}),Object(O.jsx)("th",{children:"EMAIL"}),Object(O.jsx)("th",{children:"PROFILE PICTURE"})]})}),Object(O.jsx)("tbody",{children:t})]})]})}}]),n}(s.Component),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onHandleInput=function(e){s.setState({createuser:Object(d.a)(Object(d.a)({},s.state.createuser),{},Object(u.a)({},e.target.name,e.target.value))})},s.state={createuser:{name:"",job:""}},s}return Object(o.a)(n,[{key:"oncreateuser",value:function(){console.log(this.state.createuser);g.a.post("https://reqres.in/api/users",this.state.createuser).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"this is sent page"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter user name:"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"please enter user name..",onChange:this.onHandleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Enter user password:"}),Object(O.jsx)("input",{type:"text",name:"name",placeholder:"please enter password..",onChange:this.onHandleInput})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:function(){return e.oncreateuser()},children:"createusers"})})]})}}]),n}(s.Component),N=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"onDeleteuser",value:function(){g.a.delete("https://reqres.in/api/users/2").then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"this is trash page"}),Object(O.jsx)("button",{onClick:function(){return e.onDeleteuser()},children:"delete"})]})}}]),n}(s.Component),C=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),s=t.call(this,e),console.log("CONSTRUCTOR METHOD"),s.state={name:"mr.mk"},s}return Object(o.a)(n,[{key:"componentWillMount",value:function(){console.log("Component will mount method")}},{key:"componentDidMount",value:function(){console.log("Component Did mount method")}},{key:"onclickBtn",value:function(){this.setState({name:"mr.karthick"})}},{key:"shouldComponentUpdate",value:function(e,t){return console.log(this.state.name,t),console.log("shouldComponentUpdate method"),this.state.name!=t.name}},{key:"componentWillUpdate",value:function(){console.log("Component will Update method")}},{key:"componentDidUpdate",value:function(){console.log("Component Did Update method")}},{key:"componentWillUnmount",value:function(){console.log("Component will Unmount method")}},{key:"render",value:function(){var e=this;return console.log("Render method"),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"This is a lifecycle component"}),Object(O.jsxs)("h1",{children:["The username is",this.state.name]}),Object(O.jsx)("button",{onClick:function(){return e.onclickBtn()},children:"Update user name"})]})}}]),n}(s.Component),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onHandleInput=function(e){console.log(e.target.value),s.props.onLoadName(e.target.value)},console.log(e),s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"this is child component"}),Object(O.jsxs)("h1",{children:["username:",this.props.name,this.props.username]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"enter your name:"}),Object(O.jsx)("input",{type:"text",placeholder:"enter your name..",onChange:this.onHandleInput})]})]})}}]),n}(s.Component),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onRecieveName=function(e){console.log(e),s.setState({message:e})},s.state={username:"john victor",message:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["newmessage:",this.state.message]}),Object(O.jsx)("h1",{children:"this is parent component"}),Object(O.jsx)(k,Object(d.a)(Object(d.a)({name:this.state.username},this.state),{},{onLoadName:this.onRecieveName}))]})}}]),n}(s.Component),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)("div",{className:"header"}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)(h.b,{to:"/mail/inbox",className:"nav-btn",activeClassName:"active-btn",children:"inbox"}),Object(O.jsx)(h.b,{to:"/mail/sent",className:"nav-btn",activeClassName:"active-btn",children:"sent"}),Object(O.jsx)(h.b,{to:"/mail/trash",className:"nav-btn",activeClassName:"active-btn",children:"trash"}),Object(O.jsx)(h.b,{to:"/mail/lifecycle",className:"nav-btn",activeClassName:"active-btn",children:"lifecycle"}),Object(O.jsx)(h.b,{to:"/mail/parent",className:"nav-btn",activeClassName:"active-btn",children:"Parent"})]}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/mail/inbox",component:f}),Object(O.jsx)(b.a,{path:"/mail/sent",component:y}),Object(O.jsx)(b.a,{path:"/mail/trash",component:N}),Object(O.jsx)(b.a,{path:"/mail/lifecycle",component:C}),Object(O.jsx)(b.a,{path:"/mail/parent",component:I})]})})]})]})})}}]),n}(s.Component),S=a.a.createContext(),H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onHandleInput=function(t){e.context.readFromSearch(t.target.value)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(S.Consumer,{children:function(t){return Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",className:"search-box",placeholder:"Enter a text value",onChange:e.onHandleInput})})}})}}]),n}(s.Component);H.contextType=S;var B=H,F=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("div",{children:Object(O.jsx)("h4",{children:"header page"})}),Object(O.jsx)(B,{})]})}}]),n}(s.Component),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sidebar",children:Object(O.jsx)("h4",{children:"sidebar page"})})}}]),n}(s.Component),U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(S.Consumer,{children:function(e){return console.log(e),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"this is a product list Component"}),Object(O.jsxs)("h1",{children:["the search result is ",e.searchResult]})]})}})}}]),n}(s.Component);U.contextType=S;var T=U,R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("h4",{children:"content page"}),Object(O.jsx)(T,{})]})}}]),n}(s.Component),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onReceiveSearch=function(e){s.setState({data:e})},s.state={data:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(S.Provider,{value:{message:"hello from dashboard page",readFromSearch:this.onReceiveSearch,searchResult:this.state.data},children:Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(F,{}),Object(O.jsxs)("div",{className:"body",children:[Object(O.jsx)(E,{}),Object(O.jsx)(R,{})]})]})})}}]),n}(s.Component),A=(n(61),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(h.a,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,component:p}),Object(O.jsx)(b.a,{path:"/home",component:x}),Object(O.jsx)(b.a,{path:"/register",component:m}),Object(O.jsx)(b.a,{path:"/mail",component:w}),Object(O.jsx)(b.a,{path:"/dashboard",component:L})]})})}}]),n}(s.Component));r.a.render(Object(O.jsx)(A,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.638efb07.chunk.js.map