webpackJsonp([1],{"/n6G":function(e,t){},"2MAZ":function(e,t){},"2kAc":function(e,t){},"54Mm":function(e,t){},"8hXn":function(e,t,n){"use strict";var r=n("NYxO"),a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"footer-container"},[this._v(this._s(this.footername))])},staticRenderFns:[]};var o=n("VU/8")({name:"Footer",data:function(){return{footername:"这是一个footer"}}},a,!1,function(e){n("2kAc")},"data-v-1dbbbd3f",null).exports,i=n("Dd8w"),s={name:"Sidebar",data:function(){return{menuJson:[{id:"1",parernt_id:"0",name:"导航一",icon:"el-icon-message"},{id:"2",parernt_id:"1",name:"首页",href:"/index/proindex"},{id:"3",parernt_id:"0",name:"导航二",icon:"el-icon-menu"},{id:"5",parernt_id:"3",name:"表单测试",href:"/index/formExample"},{id:"6",parernt_id:"3",name:"表格测试",href:"/index/Table"}]}},computed:{formatJson:function(){return this.$store.state.menuList}},created:function(){this.getjson({json:this.menuJson,idStr:"id",pidStr:"parernt_id",chindrenStr:"children"})},methods:n.n(i)()({},Object(r.d)({getjson:"FORMAT_MENULIST"}))},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-aside",{staticClass:"xlsidebar",staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":this.$route.path,router:"","background-color":"#393d49","text-color":"#fff","active-text-color":"#409eff"}},[e._l(e.formatJson,function(t){return[t.children?n("el-submenu",{attrs:{index:t.id}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(" "),n("span",[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t){return[n("el-menu-item",{attrs:{index:t.href}},[e._v(e._s(t.name))])]})],2):n("el-menu-item",{attrs:{index:t.href}},[n("i",{class:t.icon}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])])]})],2)],1)},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(e){n("GkeW")},"data-v-77955ab2",null).exports,u={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v(this._s(this.header))])},staticRenderFns:[]};var d=n("VU/8")({name:"Header",data:function(){return{header:"header"}}},u,!1,function(e){n("MPH2")},null,null).exports,m={data:function(){return{breadlist:[]}},watch:{$route:"getList"},created:function(){this.getList()},methods:{getBreadcrumbList:function(e){var t=e.menuList,n=e.nowPath,r=e.nowId,a=t.filter(function(e){return r?e.id==r:e.href==n});a.length&&(this.breadlist.unshift(a[0]),this.getBreadcrumbList({menuList:t,nowId:a[0].parernt_id}))},getList:function(){this.breadlist=[];var e=this.$store.state.menuOldJson,t=this.$route.path;this.getBreadcrumbList({menuList:e,nowPath:t}),console.log(this.breadlist)}}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"breadcrumb-box",attrs:{separator:"/"}},e._l(e.breadlist,function(t){return n("el-breadcrumb-item",{attrs:{to:t.href}},[e._v(e._s(t.name))])}))},staticRenderFns:[]};var p=n("VU/8")(m,f,!1,function(e){n("shP1")},"data-v-6878bac7",null).exports,h=(n("wDd0"),{data:function(){return{}},created:function(){},components:{procfooter:o,mySidebar:c,myHeader:d,Bradcrumb:p}}),_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-header",[t("my-header")],1),this._v(" "),t("el-container",[t("my-sidebar"),this._v(" "),t("el-container",[t("Bradcrumb"),this._v(" "),t("router-view"),this._v(" "),t("el-footer",{staticClass:"myfooter"},[t("procfooter")],1)],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(h,_,!1,function(e){n("2MAZ")},"data-v-37de700a",null);t.a=v.exports},ABj6:function(e,t,n){"use strict";var r={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],loading:!1}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("i",{staticClass:"el-icon-time"}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名: "+e._s(t.row.name))]),e._v(" "),n("p",[e._v("住址: "+e._s(t.row.address))]),e._v(" "),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("OD+Z")},null,null);t.a=o.exports},BLHB:function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v(this._s(this.content))])},staticRenderFns:[]};var a=n("VU/8")({name:"Eorr",data:function(){return{content:"404页面不存在"}}},r,!1,function(e){n("qTXV")},null,null);t.a=a.exports},GkeW:function(e,t){},HR8N:function(e,t,n){"use strict";var r={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"活动名称"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动区域"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动时间"}},[n("el-col",{attrs:{span:11}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"即时配送"}},[n("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动性质"}},[n("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[n("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"特殊资源"}},[n("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[n("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),n("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动形式"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",[e._v("取消")])],1)],1)},staticRenderFns:[]},o=n("VU/8")(r,a,!1,null,null,null);t.a=o.exports},Hi4R:function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("el-main",[this._v(this._s(this.content))])},staticRenderFns:[]};var a=n("VU/8")({data:function(){return{content:"content"}}},r,!1,function(e){n("54Mm")},null,null);t.a=a.exports},JYBN:function(e,t){},Lb4k:function(e,t,n){"use strict";var r=n("Dd8w"),a=n.n(r),o=n("NYxO"),i={name:"Sidebar",data:function(){return{menuJson:[{id:"1",parernt_id:"0",name:"导航一",icon:"el-icon-message"},{id:"2",parernt_id:"1",name:"首页",href:"/index/proindex"},{id:"3",parernt_id:"0",name:"导航二",icon:"el-icon-menu"},{id:"4",parernt_id:"3",name:"Vuex测试",href:"/index/vuexexample"},{id:"5",parernt_id:"3",name:"表单测试",href:"/index/formExample"},{id:"6",parernt_id:"3",name:"导航测试",href:"/index/navMenuCol"}],json:{test:"testvalue"}}},computed:{formatJson:function(){return this.$store.state.menuList}},created:function(){this.getjson({json:this.menuJson,idStr:"id",pidStr:"parernt_id",chindrenStr:"children"})},methods:a()({},Object(o.d)({getjson:"FORMAT_MENULIST"}))},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-aside",{staticClass:"xlsidebar",staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":this.$route.path,router:"","background-color":"#393d49","text-color":"#fff","active-text-color":"#409eff"}},e._l(e.formatJson,function(t){return n("el-submenu",{attrs:{index:t.id}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.children?e._e():n("el-menu-item",{attrs:{index:t.href}},[e._v(e._s(t.name))])}),e._v(" "),e._l(t.children,function(t){return t.children?n("el-submenu",{attrs:{index:t.id}},[n("template",{slot:"title"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return n("el-menu-item",{attrs:{index:t.href}},[e._v(e._s(t.name))])})],2):e._e()})],2)}))],1)},staticRenderFns:[]};n("VU/8")(i,s,!1,function(e){n("JYBN")},"data-v-1a23a28f",null).exports},MPH2:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("7+uW"),o=n("mtWM"),i=n.n(o),s=n("mw3O"),l=n.n(s),c=n("zL8q"),u=n.n(c),d=(n("tvR6"),n("PijW"),n("YaEn")),m=n("NYxO"),f={name:"weish",age:22,menuOldJson:null,menuList:null},p={get_name:function(e){return e.name+"计算了"},get_count:function(e){return e.age+"计算了"}},h=n("bOdI"),_=n.n(h),v=(r={},_()(r,"SET_NAME",function(e,t){e.name=t}),_()(r,"SET_AGE",function(e,t){e.age=t}),_()(r,"FORMAT_MENULIST",function(e,t){e.menuOldJson=t.json;for(var n=t.json,r=[],a={},o=t.idStr,i=t.pidStr,s=t.chindrenStr,l=0,c=0,u=n.length;l<u;l++)a[n[l][o]]=n[l];for(;c<u;c++){var d=n[c],m=a[d[i]];m?(!m[s]&&(m[s]=[]),m[s].push(d)):r.push(d)}e.menuList=r}),r),b=_()({},"NAMEASYN",function(e,t){var n=e.commit,r=t.age;n("SET_NAME",t.name),n("SET_AGE",r)}),x={state:{count:4},mutations:{jia:function(e,t){e.count+=t.a},jian:function(e){e.count--}},getters:{countget:function(e){return e.count+=100}},actions:{jiaplust:function(e){e.commit("jia",{a:1e3})}}};a.default.use(m.a);var g=new m.a.Store({state:f,getters:p,mutations:v,actions:b,modules:{example:x}}),w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},$=n("VU/8")({name:"App"},w,!1,null,null,null).exports;i.a.defaults.transformRequest=[function(e){return l.a.stringify(e)}],a.default.prototype.$http=i.a,a.default.use(u.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:d.a,store:g,components:{App:$},template:"<App/>"})},"OD+Z":function(e,t){},PijW:function(e,t){},Quw4:function(e,t,n){"use strict";n("wDd0");var r={data:function(){return{ruleForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this,n=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$http.post("app/login",t.ruleForm).then(function(e){console.log(e,"zzz"),n.$router.push({path:"/index/proindex"})}).catch(function(e){n.$router.push({path:"/index/proindex"})})})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("div",{staticClass:"loginbg"}),e._v(" "),n("el-main",[n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm xl-login-container",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[n("h2",[e._v("管理员登陆")]),e._v(" "),n("el-form-item",{attrs:{prop:"username","label-width":"0"}},[n("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"password","label-width":"0"}},[n("el-input",{attrs:{type:"password"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),e._v(" "),n("el-button",{staticClass:"btn-block",attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("登陆")])],1)],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("/n6G")},"data-v-125cd168",null);t.a=o.exports},YaEn:function(e,t,n){"use strict";(function(e){var r=n("7+uW"),a=n("/ocq"),o=n("BLHB"),i=n("Quw4"),s=n("8hXn"),l=n("Hi4R"),c=n("HR8N"),u=n("xScK"),d=(n("Lb4k"),n("ABj6"));r.default.use(a.a),t.a=new a.a({mode:"history",base:e,routes:[{path:"/",component:i.a},{path:"/login",name:"Login",component:i.a},{path:"/index",name:"Index",component:s.a,children:[{path:"proindex",name:"ProcIndex",component:l.a},{path:"vuexexample",name:"Vuexexample",component:u.a},{path:"formExample",name:"FormExample",component:c.a},{path:"table",name:"Table",component:d.a},{path:"*",component:o.a}]},{path:"/*",name:"Eorr404",component:o.a}]})}).call(t,"/")},qTXV:function(e,t){},shP1:function(e,t){},tvR6:function(e,t){},wDd0:function(e,t,n){"use strict"},xScK:function(e,t,n){"use strict";var r=n("Dd8w"),a=n.n(r),o=n("NYxO"),i={name:"Vuex",data:function(){return{msg:"Welcome to hello2222",data_count:this.$store.state.example.count}},computed:a()({},Object(o.c)(["countget"]),Object(o.c)({get_name:"get_name"}),{count:function(){return this.$store.state.example.count}}),methods:a()({},Object(o.b)({jiaplust:"jiaplust"}))},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v(e._s(e.$store.state.example.count)+"--"+e._s(e.count)+"--"+e._s(e.get_name)+"--"+e._s(e.countget)+"--"+e._s(e.data_count))]),e._v(" "),n("h1",[e._v(e._s(e.$store.state.menuList))]),e._v(" "),n("button",{on:{click:function(t){e.$store.commit("jia",{a:10})}}},[e._v("加")]),e._v(" "),n("button",{on:{click:function(t){e.$store.commit("jian")}}},[e._v("减")]),e._v(" "),n("button",{on:{click:e.jiaplust}},[e._v("jiaplust")])])},staticRenderFns:[]},l=n("VU/8")(i,s,!1,null,null,null);t.a=l.exports}},["NHnr"]);
//# sourceMappingURL=app.dbba1f7d783d709f0bcc.js.map