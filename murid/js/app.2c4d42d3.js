(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/murid/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:""}},[n("v-toolbar-title",{staticClass:"mr-12 align-center"},[n("span",{staticClass:"title"},[t._v("Pekerjaan Rumah")])])],1),n("v-content",[n("router-view")],1)],1)},o=[],r={name:"App",data:function(){return{}}},c=r,s=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),v=n("40dc"),p=n("a75b"),h=n("2a7f"),m=Object(s["a"])(c,i,o,!1,null,null,null),f=m.exports;u()(m,{VApp:d["a"],VAppBar:v["a"],VContent:p["a"],VToolbarTitle:h["a"]});var g=n("f309");a["a"].use(g["a"]);var b=new g["a"]({}),w=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{directives:[{name:"show",rawName:"v-show",value:"login"===t.activeSection,expression:"'login'===activeSection"}],attrs:{align:"center",justify:"center"}},[n("v-card",{staticClass:"elevation-12"},[n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Nama Siswa",name:"name",type:"text",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{label:"Nomor PIN (opsional)",name:"pin",type:"number",clearable:""},model:{value:t.pin,callback:function(e){t.pin=e},expression:"pin"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",loading:t.loading},on:{click:t.btnSaveIdClick}},[t._v(" Save "),n("v-icon",{attrs:{right:""}},[t._v("mdi-content-save")])],1)],1)],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:"home"===t.activeSection,expression:"'home'===activeSection"}]},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"1"}},[n("v-icon",[t._v("mdi-clipboard-text")])],1),n("v-col",{attrs:{cols:"11"}},[t._v(" "+t._s(t.assignmentName)+" ")])],1),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"1"}},[n("v-icon",[t._v("mdi-account")])],1),n("v-col",{attrs:{cols:"9"}},[t._v(" "+t._s(t.name)+" ")]),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:"",disabled:t.loading},on:{click:t.btnEditNameClick}},[n("v-icon",[t._v("mdi-pencil")])],1)],1)],1),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"1"}},[n("v-icon",[t._v("mdi-stack-overflow")])],1),n("v-col",{attrs:{cols:"9"}},[t._v(" "+t._s(t.pages)+" halaman ")]),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{icon:"",disabled:t.loading},on:{click:t.btnAddPhotoClick}},[n("v-icon",[t._v("mdi-camera-plus")])],1)],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.pages>0,expression:"pages>0"}],attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",disabled:t.loading},on:{click:t.btnResetClick}},[t._v(" Reset "),n("v-icon",{attrs:{right:""}},[t._v("mdi-restore")])],1),n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",loading:t.loading},on:{click:t.btnSendClick}},[t._v(" Kirim "),n("v-icon",{attrs:{right:""}},[t._v("mdi-send")])],1)],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],attrs:{align:"center",justify:"center"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:0===t.percent,expression:"0===percent"}]},[t._v("Persiapan...")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.percent>0,expression:"percent>0"}]},[t._v("Upload: "+t._s(t.percent)+"%")])]),n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"mt-2",attrs:{color:"primary"},on:{click:t.btnLogoutClick}},[t._v(" Keluar "),n("v-icon",{attrs:{right:""}},[t._v("mdi-exit-run")])],1)],1)],1)],1)],1),n("v-row",{directives:[{name:"show",rawName:"v-show",value:"404"===t.activeSection,expression:"'404'===activeSection"}],attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-icon",{attrs:{"x-large":"",color:"orange darken-2"}},[t._v("mdi-hand")])],1),n("v-col",{attrs:{cols:"12"}},[t._v(" Tidak ada pekerjaan rumah dengan link ini! ")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[n("input",{ref:"photo",attrs:{type:"file",accept:"image/*",capture:"environment"},on:{change:t.onFileChange}})])],1)},y=[],_=(n("99af"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf"),n("1da1")),S=n("e511"),x=n("b5e8"),C=n.n(x),j="us-east-1",I="https://play.min.io",V="Q3AM3UQ867SPQQA43P2F",O="zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",P="tugas-belajar",N=(n("1276"),n("31ce")),B=n.n(N);n("a15b"),n("d81d"),n("b64b"),n("498a"),n("b85c"),n("1c46"),n("b383"),n("df7c");function A(){B.a.config.region=j,B.a.config.s3={endpoint:I,s3ForcePathStyle:!0},B.a.config.accessKeyId=V,B.a.config.secretAccessKey=O,B.a.config.signatureVersion="v4",B.a.config.s3ForcePathStyle=!0}var D="hwstd";function F(){var t={},e="".concat(D,":name"),n=localStorage.getItem(e);if(null!==n){e="".concat(D,":pin");var a=localStorage.getItem(e);return null===a&&(a="",localStorage.setItem(e,a)),t.name=n,t.pin=a,t}}function U(t,e){var n="".concat(D,":name");localStorage.setItem(n,t),n="".concat(D,":pin"),localStorage.setItem(n,e)}function R(){var t="".concat(D,":name");localStorage.removeItem(t),t="".concat(D,":pin"),localStorage.removeItem(t)}var $={name:"Home",data:function(){return{assignment:null,assignmentId:null,assignmentName:"",credFormMode:"register",name:"",pin:"",old_name:"",old_pin:"",myfile:null,pdfDoc:null,pages:0,percent:0,managedUpload:null,activeSection:"login",loading:!1}},watch:{$route:function(t,e){var n=this;this.checkBucket().then((function(){n.loadData()})).catch((function(t){console.log(t)}))}},created:function(){A();var t=this;this.checkBucket().then((function(){t.loadData()})).catch((function(t){console.log(t)}))},methods:{checkBucket:function(){return new Promise((function(t,e){var n={Bucket:P},a=new C.a;a.headBucket(n,(function(i,o){i&&(console.log(i),a.createBucket(n).promise().then((function(e){console.debug(P,"has been created"),t()})).catch((function(t){e(t)})).then((function(){}))),t()}))}))},getAssignment:function(){var t=new C.a,e={Bucket:P,Key:"a/".concat(this.assignmentId,".json")},n=this;this.loading=!0,t.getObject(e).promise().then((function(t){n.assignment=JSON.parse(t.Body.toString("utf-8")),n.assignmentName=n.assignment.name})).catch((function(t){n.activeSection="404"})).then((function(){n.loading=!1}))},loadData:function(){var t=F();if(void 0===t)return this.name="",this.pin="",this.credFormMode="register",void(this.activeSection="login");this.name=t.name,this.pin=t.pin,this.activeSection="home",this.assignmentId=this.$route.query.a,void 0!==this.assignmentId?this.getAssignment():this.activeSection="404"},btnSaveIdClick:function(){if(""!==this.name)if(this.assignmentId=this.$route.query.a,"register"===this.credFormMode)U(this.name,this.pin),void 0===this.assignmentId?this.activeSection="404":(this.activeSection="home",this.getAssignment());else{var t=!1;this.name!==this.old_name&&(t=!0),this.pin!==this.old_pin&&(t=!0),t&&U(this.name,this.pin),this.activeSection="home",this.getAssignment()}},btnEditNameClick:function(){this.credFormMode="edit",this.old_name=this.name,this.old_pin=this.pin,this.activeSection="login"},btnAddPhotoClick:function(){this.$refs.photo.click()},onFileChange:function(t){if(t.target.files.length>0){var e=this,n=new FileReader;n.onload=function(){null===e.pdfDoc?e.pdfDoc=new S("p","mm","legal"):e.pdfDoc.addPage("legal"),e.pdfDoc.addImage(n.result,"JPEG",0,0,216,356),e.pages=e.pages+1},n.readAsDataURL(t.target.files[0])}},btnSendClick:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==this.pdfDoc){t.next=2;break}return t.abrupt("return");case 2:if(0!==this.pages){t.next=4;break}return t.abrupt("return");case 4:return e="",e=""===this.pin?"".concat(this.name,".pdf"):"".concat(this.name," ").concat(this.pin,".pdf"),n=new C.a,a="a/".concat(this.assignmentId,"/").concat(e),i=this.pdfDoc.output("blob"),o={Bucket:P,Key:a,ContentType:"application/pdf",Body:i},this.managedUpload=n.upload(o),r=this,this.managedUpload.on("httpUploadProgress",(function(t){r.percent=Math.round(100*t.loaded/t.total)})),this.percent=0,this.loading=!0,t.prev=15,t.next=18,this.managedUpload.promise();case 18:this.loading=!1,this.pdfDoc=null,this.pages=0,c=n.getSignedUrl("getObject",{Bucket:P,Key:a,Expires:86400}),this.$router.replace({name:"success",query:{u:btoa(c)}}),t.next=29;break;case 25:t.prev=25,t.t0=t["catch"](15),console.error(t.t0),this.loading=!1;case 29:case"end":return t.stop()}}),t,this,[[15,25]])})));function e(){return t.apply(this,arguments)}return e}(),btnResetClick:function(){this.pdfDoc=null,this.pages=0},btnLogoutClick:function(){this.activeSection="login",R(),this.name="",this.pin="",this.pdfDoc=null,this.pages=0}}},M=$,T=n("8336"),K=n("b0af"),E=n("99d9"),q=n("62ad"),J=n("a523"),L=n("4bd4"),Q=n("132d"),G=n("0fd9"),Y=n("2fa4"),z=n("8654"),H=Object(s["a"])(M,k,y,!1,null,null,null),Z=H.exports;u()(H,{VBtn:T["a"],VCard:K["a"],VCardActions:E["a"],VCardText:E["b"],VCol:q["a"],VContainer:J["a"],VForm:L["a"],VIcon:Q["a"],VRow:G["a"],VSpacer:Y["a"],VTextField:z["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[t._v(" Upload sukses! ")]),n("v-row",[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-btn",{staticClass:"mt-3",attrs:{color:"primary"},on:{click:t.btnOpenSignedUrlClick}},[t._v(" Lihat salinan "),n("v-icon",{attrs:{right:""}},[t._v("mdi-eye")])],1)],1)],1)],1)},X=[],tt={name:"Success",data:function(){return{}},created:function(){},methods:{btnOpenSignedUrlClick:function(){void 0!==this.$route.query.u&&(window.location=atob(this.$route.query.u))}}},et=tt,nt=Object(s["a"])(et,W,X,!1,null,null,null),at=nt.exports;u()(nt,{VBtn:T["a"],VCol:q["a"],VContainer:J["a"],VIcon:Q["a"],VRow:G["a"]}),a["a"].use(w["a"]);var it=[{path:"/",name:"home",component:Z},{path:"/success",name:"success",component:at}],ot=new w["a"]({routes:it}),rt=ot;a["a"].config.productionTip=!1,new a["a"]({router:rt,vuetify:b,render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.2c4d42d3.js.map