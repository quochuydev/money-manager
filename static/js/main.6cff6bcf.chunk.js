(this.webpackJsonpmoneylover=this.webpackJsonpmoneylover||[]).push([[0],{145:function(e,t,a){e.exports={AppHeader:"Header_AppHeader__11CSH","ant-menu-item":"Header_ant-menu-item__25oFb","ant-page-header":"Header_ant-page-header__2CD4-","ant-menu":"Header_ant-menu__1pvlQ","ant-menu-light":"Header_ant-menu-light__3tidg",Logout:"Header_Logout__1jBPy"}},177:function(e,t,a){e.exports={FormContainer:"Record_FormContainer__1GG3t",Form:"Record_Form__1R2ox","ant-card-head":"Record_ant-card-head__36pJy"}},184:function(e,t,a){e.exports={BtnDelete:"Records_BtnDelete__RHnu9"}},197:function(e,t,a){e.exports={Footer:"footer_Footer__2Vhlm"}},208:function(e,t,a){},209:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),l=(a(208),a(10)),s=a(12),i=a(13),u=a(28),d=(a(209),a(39)),m=a(375),p=a(374),f=a(377),g=a(43),h=a(379),b=a(380),E=a(381),y=a(75),v=a.n(y),O=a.p+"static/media/logo.103b5fa1.svg",j=a(80),_="AIzaSyCgYnE69ejd0DLiw7uBLbraJQYw2PPxdkM",w="https://fir-app-6e33a.firebaseio.com/",S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={error:!1,loading:!1,message:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t={wrapperCol:{span:24}};return r.a.createElement("div",{className:j.Login},r.a.createElement("div",{className:j.LoginContainer},r.a.createElement(m.a,{bordered:!0,className:j.LoginCard},r.a.createElement("img",{src:O,className:j.Logo,alt:"logo"}),r.a.createElement("h1",null,"JSX Learning"),r.a.createElement("br",null),this.state.error&&this.state.message,r.a.createElement(p.a,Object.assign({},{labelCol:{span:8},wrapperCol:{span:24}},{name:"basic",initialValues:{username:"quochuy.dev@gmail.com",password:"Quochuydev548!",remember:!0},onFinish:function(t){var a={email:t.username,password:t.password,returnSecureToken:!0};e.setState({loading:!0}),v.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+_,a).then((function(t){localStorage.setItem("auth",JSON.stringify(t.data)),e.props.history.push({pathname:"/record"}),e.setState({loading:!1})})).catch((function(t){e.setState({error:!0}),e.setState({message:r.a.createElement("div",{className:j.Error},"Username or password is incorrect!")}),console.log(t),e.setState({loading:!1})}))},onFinishFailed:function(e){console.log("onFinishFailed error : ",e)}}),r.a.createElement(p.a.Item,{name:"username",rules:[{required:!0,message:"Username is required"}]},r.a.createElement(f.a,{placeholder:"Username",prefix:r.a.createElement(h.a,null)})),r.a.createElement(p.a.Item,{name:"password",rules:[{required:!0,message:"Password is required"}]},r.a.createElement(f.a.Password,{placeholder:"Password",prefix:r.a.createElement(b.a,null)})),r.a.createElement(p.a.Item,t,r.a.createElement(g.a,{type:"primary",htmlType:"submit",disabled:this.state.loading,block:!0,icon:r.a.createElement(E.a,null)},this.state.loading?"Please wait..":"Login"))))))}}]),a}(r.a.Component),k=a(2),C=a(6),R=a(5),x=a(378),D=a(91),L=a(59),N=a(103),I=a(373),A=a(177),F=a(88),T="ADD_RECORD",H="GET_RECORDS",J="DELETE_RECORD",U="UPDATE_RECORD",P=function(e,t){return{type:H,records:e,error:t}},Y=function(e,t){return{type:U,record:e,error:t}},B=[{id:1,name:"\u0102n u\u1ed1ng",parentId:null},{id:2,name:"\u0102n",parentId:1},{id:3,name:"U\u1ed1ng",parentId:1}],q=a(57),M=a.n(q),Q=a(121);var V=Object(F.b)((function(e){return{propRecord:e.record,propError:e.error}}),(function(e){return{onCreate:function(t){return e(function(e){var t=JSON.parse(localStorage.getItem("auth"));return function(a){v.a.post(w+"records.json?auth="+t.idToken,e).then((function(e){console.log("add record response: ",e),x.b.success("Success! Record information saved successfully."),a(Y({response:e},!1))})).catch((function(e){console.log(e.repsonse),x.b.error("Opps! Something went wrong. Unable to save record record."),a(Y(null,!0))}))}}(t))},onUpdate:function(t){return e(function(e){var t=JSON.parse(localStorage.getItem("auth"));return function(a,n){v.a.put(w+"records/"+e.key+".json?auth="+t.idToken,e).then((function(e){var t=e.data;n().records.forEach((function(e){e.key===t.key&&(e=t)})),x.b.success("Success! Record information saved successfully."),a(Y(t,!1))})).catch((function(e){console.log(e.repsonse),x.b.error("Opps! Something went wrong. Unable to save record record."),a(P(n().records,!0))}))}}(t))}}}))((function(e){var t,a,o=r.a.createRef(),c=(JSON.parse(localStorage.getItem("auth")),{amount:0,time:new Date,type:null}),l=Object(n.useState)((null===(t=e.location.state)||void 0===t?void 0:t.record)||c),s=Object(R.a)(l,2),i=s[0],u=s[1],d=Object(n.useState)(!1),m=Object(R.a)(d,2),f=m[0],h=(m[1],Object(n.useState)(!1)),b=Object(R.a)(h,2),E=b[0],y=b[1],v=Object(n.useState)(""),O=Object(R.a)(v,2),j=O[0];return O[1],Object(n.useEffect)((function(){e.propError&&(y(!1),x.b.error("Something went wrong. Unable to save record information."))}),[e.propError]),Object(n.useEffect)((function(){e.propRecord&&E&&(y(!1),e.history.push({pathname:"/records"}))}),[e.propRecord]),r.a.createElement(D.a,{className:A.FormContainer},r.a.createElement(L.a,{xs:24,sm:24,md:12,lg:12,xl:12},f&&j,r.a.createElement(p.a,(a={name:"basic",ref:o},Object(k.a)(a,"name","control-ref"),Object(k.a)(a,"onFinish",(function(){console.log("onFinish data : ",i),console.log("props.location.state : ",e.location.state),e.location.state&&e.location.state.record&&e.location.state.record.key?(y(!0),e.onUpdate(Object(C.a)(Object(C.a)({},i),{},{updatedAt:new Date,key:e.location.state.record.key}))):(y(!0),e.onCreate(Object(C.a)(Object(C.a)({},i),{},{createdAt:new Date,updatedAt:new Date,deletedAt:null})),y(!0))})),a),r.a.createElement(Q.a,{className:"ant-input w-full",thousandSeparator:!0,suffix:"\u0111",style:{textAlign:"right"},value:i.amount,onValueChange:function(e){u(Object(C.a)(Object(C.a)({},i),{},{amount:e.floatValue}))}}),r.a.createElement("br",null),r.a.createElement(N.a,{className:"m-t-md w-full",label:"Type",name:"type",placeholder:"Type",value:i.type,onChange:function(e){u(Object(C.a)(Object(C.a)({},i),{},{type:e}))}},B.map((function(e){return r.a.createElement(N.a.Option,{key:e.id,value:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement(I.a,{className:"m-t-md w-full",name:"time",onChange:function(e){return u(Object(C.a)(Object(C.a)({},i),{},{time:new Date(e)}))},defaultValue:i.time?M()(i.time,"YYYY-MM-DD"):null}),r.a.createElement("br",null),r.a.createElement(g.a,{className:"m-t-md",type:"primary",htmlType:"submit",disabled:E,loading:E},E?"Saving..":"Submit"))))})),W=a(183),z=a(371),G=a(372),K=a(382),X=a(184);var $=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).user=JSON.parse(localStorage.getItem("auth")),n.cols=[{title:"day",key:"day",render:function(e,t){return r.a.createElement("span",null,t&&t.days[0]&&t.days[0].time?M()(t.days[0].time).format("DD-MM-YYYY"):null)}}],n.subColumns=[{title:"type",dataIndex:"type",key:"type",render:function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{onClick:function(){return n.onEdit(t)}},B.find((function(e){return e.id==t.type}))?B.find((function(e){return e.id==t.type})).name:null))}},{title:"Amount",dataIndex:"amount",key:"amount",render:function(e,t){return r.a.createElement("span",{className:"float-right"},r.a.createElement("span",{onClick:function(){return n.onEdit(t)}},((a=t.amount)||(a=0),r.a.createElement(Q.a,{value:a,displayType:"text",suffix:" \u0111",thousandSeparator:!0})))," ",r.a.createElement(z.a,{title:"Are you sure you want to delete?",onConfirm:function(){return n.props.onDelete(t)},okText:"Delete",cancelText:"No",placement:"left"},r.a.createElement(K.a,{className:X.BtnDelete})));var a}}],n.onEdit=function(e){n.props.history.push({pathname:"/records/record",state:{record:e}})},n.navigate=function(){n.props.history.push({pathname:"/records/record"})},n.state={records:[],error:!1,loading:!1,message:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getRecords()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(G.a,{rowKey:"day",dataSource:this.props.propRecords,columns:this.cols,size:"small",pagination:!1,scroll:{x:"100%"},showHeader:!1,defaultExpandAllRows:!0,expandedRowRender:function(t){return r.a.createElement(G.a,{rowKey:"key",columns:e.subColumns,dataSource:t.days,pagination:!1,showHeader:!1})}}))}}]),a}(r.a.Component),Z=Object(F.b)((function(e){var t,a=e.records,n={},r=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:a;r[t]=o.filter((function(a){var n=a.time;return!!n&&"".concat(e,"-").concat(t)===n.slice(5,10)}))},o=Object(W.a)(a);try{for(o.s();!(t=o.n()).done;){var c=t.value.time;if(c){var l=c.match(/\d+/g),s=Object(R.a)(l,3),i=(s[0],s[1]),u=s[2];n||(n={}),r(i,u)}}}catch(b){o.e(b)}finally{o.f()}for(var d=[],m=0,p=Object.entries(n);m<p.length;m++){var f=Object(R.a)(p[m],2),g=f[0],h=f[1];d.push({day:g,days:h})}return console.log(d),{propRecords:d,propError:e.error}}),(function(e){return{onDelete:function(t){return e(function(e){var t=JSON.parse(localStorage.getItem("auth"));return function(a,n){v.a.delete(w+"records/"+e.key+"/.json?auth="+t.idToken).then((function(t){var r=n().records.filter((function(t){return t.key!==e.key}));a(P(r,!1)),x.b.success("Record record deleted.")})).catch((function(e){console.log(e.response),a(P(null,!0)),x.b.error("Opps! Something went wrong. Unable to delete record record.")}))}}(t))},getRecords:function(){return e(function(){var e=JSON.parse(localStorage.getItem("auth"));return function(t){v.a.get(w+"records.json?auth="+e.idToken).then((function(e){var a=[];for(var n in e.data)a.push({key:n,amount:e.data[n].amount,type:e.data[n].type,time:e.data[n].time,createdAt:e.data[n].createdAt});t(P(a,!1))})).catch((function(e){console.log(e.repsonse),t(P([],!0)),x.b.error("Session expired, Please login.")}))}}())}}}))($),ee=a(145),te=a(62),ae=a(376),ne=a(383),re=a(384),oe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={current:window.location.pathname},e.navigate=function(t){e.props.history.push(t.key),"/login"===t.key?localStorage.clear():e.setState({current:window.location.pathname})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.current,t=r.a.createElement(te.a,{onClick:this.navigate,selectedKeys:[e],mode:"horizontal",theme:"dark"},r.a.createElement(te.a.Item,{key:"/",icon:r.a.createElement(ne.a,null)},"Records"),r.a.createElement(te.a.Item,{key:"/login",icon:r.a.createElement(re.a,null),className:ee.Logout},"Logout"));return r.a.createElement(ae.a,{className:ee.AppHeader},t)}}]),a}(r.a.Component),ce=a(197),le=a(385),se=a(95);var ie=function(e){return r.a.createElement("footer",{className:ce.Footer},r.a.createElement(se.b,{to:"/records/record"},r.a.createElement(le.a,null)))},ue=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a=localStorage.getItem("auth");return e=r.a.createElement(d.d,null),a?(e=r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/records/record",component:V}),r.a.createElement(d.b,{path:"/records",component:Z}),r.a.createElement(d.b,{path:"/",extact:!0,component:Z}),r.a.createElement(d.a,{from:"/login",to:"/record"})),t=r.a.createElement("div",{className:"App"},r.a.createElement(oe,this.props),r.a.createElement("main",null,e),r.a.createElement(ie,null))):(e=r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/login",component:S}),r.a.createElement(d.b,{path:"/",extact:!0,component:S}),r.a.createElement(d.a,{from:"/record",to:"/login"})),t=r.a.createElement("div",{className:"App"},e)),r.a.createElement(r.a.Fragment,null,t)}}]),a}(n.Component),de=Object(d.g)(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(99),pe={records:[],updated:!1,error:!1},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(C.a)(Object(C.a)({},e),{},{records:t.records,error:t.error});case T:return Object(C.a)(Object(C.a)({},e),{},{record:t.record});case U:return Object(C.a)(Object(C.a)({},e),{},{record:t.record,error:t.error});case J:return console.log(t),Object(C.a)(Object(C.a)({},e),{},{updated:t.updated});default:return e}},ge=a(198),he=Object(me.c)(fe,Object(me.a)((function(e){return function(e){return function(t){return e(t)}}}),ge.a));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,null,r.a.createElement(F.a,{store:he},r.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports={Login:"Login_Login__1ixBm",LoginContainer:"Login_LoginContainer__3fIQi",LoginCard:"Login_LoginCard__3jSgw","ant-card-body":"Login_ant-card-body__3Js90",Logo:"Login_Logo__QWasW",Error:"Login_Error__qxXzr"}}},[[370,1,2]]]);
//# sourceMappingURL=main.6cff6bcf.chunk.js.map