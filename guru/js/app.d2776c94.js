(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/guru/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([1,"chunk-vendors"]),a()})({0:function(t,e){},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},1:function(t,e,a){t.exports=a("56d7")},2:function(t,e){},"28d5":function(t,e,a){},3:function(t,e){},"310e":function(t,e,a){"use strict";var r=a("28d5"),n=a.n(r);n.a},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("b0c0"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[t.authenticated?a("v-app-bar",{attrs:{app:"",color:"primary",dark:"",dense:"","extension-height":"4"}},[t.$store.state.toolbar.backButton?a("v-btn",{staticStyle:{"margin-left":"-12px"},attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$router.go(-1)}}},[a("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),a("v-toolbar-title",[a("span",{staticClass:"title"},[t._v(t._s(t.title))])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",to:"/logout"}},[a("v-icon",[t._v("mdi-exit-run")])],1),a("v-progress-linear",{staticClass:"ma-0",attrs:{slot:"extension",active:t.loading,color:"red",indeterminate:""},slot:"extension"})],1):t._e(),a("v-content",[a("router-view")],1)],1)},s=[],i={name:"App",data:function(){return{}},computed:{authenticated:function(){return this.$store.state.authenticated},title:function(){return this.$store.state.toolbar.title},loading:function(){return this.$store.state.loading}},mounted:function(){var t=document.getElementById("logo-loading");t.parentNode.removeChild(t)}},o=i,c=(a("034f"),a("310e"),a("2877")),u=a("6544"),l=a.n(u),d=a("7496"),m=a("40dc"),p=a("8336"),h=a("a75b"),v=a("132d"),f=a("8e36"),g=a("2fa4"),b=a("2a7f"),k=Object(c["a"])(o,n,s,!1,null,"e394c108",null),x=k.exports;l()(k,{VApp:d["a"],VAppBar:m["a"],VBtn:p["a"],VContent:h["a"],VIcon:v["a"],VProgressLinear:f["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var y=a("f309");r["a"].use(y["a"]);var w=new y["a"]({}),_=(a("45fc"),a("8c4f")),C=a("2f62");r["a"].use(C["a"]);var S={userid:"",username:"",authenticated:!1,toolbar:{title:"PeEeerr!",backButton:!1},snackbar:{visible:!1,text:null,timeout:6e3,multiline:!1},loading:!1},T={SET_CREDENTIALS:function(t,e){e.userid&&(t.userid=e.userid),e.username&&(t.username=e.username)},SET_AUTHENTICATED:function(t,e){t.authenticated=e},SET_TOOLBAR:function(t,e){t.toolbar.title=e.title,Object.prototype.hasOwnProperty.call(e,"backButton")?t.toolbar.backButton=e.backButton:t.toolbar.backButton=!1},SHOW_SNACKBAR:function(t,e){t.snackbar.text=e.text,t.snackbar.multiline=e.text.length>50,e.multiline&&(t.snackbar.multiline=e.multiline),e.timeout?t.snackbar.timeout=e.timeout:t.snackbar.timeout=6e3,t.snackbar.visible=!0},CLOSE_SNACKBAR:function(t){t.snackbar.visible=!1,t.snackbar.multiline=!1,t.snackbar.timeout=6e3,t.snackbar.text=null},SET_LOADING:function(t,e){t.loading=e}},E={},O=new C["a"].Store({state:S,mutations:T,actions:E}),R="hwtch";function j(){var t={},e="".concat(R,":name"),a=localStorage.getItem(e);if(null!==a){e="".concat(R,":userid");var r=localStorage.getItem(e);if(null!==r){e="".concat(R,":exp");var n=localStorage.getItem(e);if(null!==n){var s=parseInt(n),i=Math.round(Date.now()/1e3);return s<i?(localStorage.removeItem("".concat(R,":userid")),void localStorage.removeItem("".concat(R,":exp"))):(t.name=a,t.userid=r,t.exp=s,t)}localStorage.removeItem("".concat(R,":userid"))}}}function $(t,e,a){var r="".concat(R,":name");localStorage.setItem(r,t),r="".concat(R,":userid"),localStorage.setItem(r,e),r="".concat(R,":exp"),localStorage.setItem(r,"".concat(a))}function D(){var t="".concat(R,":name");localStorage.removeItem(t),t="".concat(R,":userid"),localStorage.removeItem(t),t="".concat(R,":exp"),localStorage.removeItem(t)}var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 pa-md-3",attrs:{fluid:""}},[t.assignments.length>0?a("v-list",{staticClass:"ly-list"},[t._l(t.assignments,(function(e,r){return[a("v-list-item",{key:e[1]},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pr-assignment",attrs:{cols:"12",md:"9"},on:{click:function(e){return e.stopPropagation(),t.displayAssignment(r)}}},[t._v(" "+t._s(e[3])+" ")]),a("v-col",{staticClass:"text-right",attrs:{cols:"6",md:"3",offset:"6","offset-md":"0"}},[a("span",[t._v(t._s(t.formatIdDate(e[0])))]),a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onDelClick(r)}}},[a("v-icon",[t._v("mdi-delete-forever")])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onEditClick(r)}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1)],1)],1),r!==t.assignments.length-1?a("v-divider",{key:r}):t._e()]}))],2):t._e(),0==t.assignments.length&&t.pageReady?a("v-row",{staticClass:"mx-0 centered-row"},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-card",[a("v-card-title",[t._v(" Belum ada data! ")]),a("v-card-text",[t._v(" Tambahkan data tugas belajar dengan meng-klik tombol yang ada di sudut kanan-bawah layar! ")])],1)],1)],1):t._e(),a("v-btn",{attrs:{fab:"",fixed:"",bottom:"",right:"",dark:"",color:"pink"},on:{click:function(e){return e.stopPropagation(),t.onFabAddClick(e)}}},[a("v-icon",[t._v("mdi-plus")])],1)],1)},N=[],A=(a("99af"),a("4160"),a("a434"),a("ac1f"),a("5319"),a("1276"),a("159b"),a("96cf"),a("1da1")),I=(a("d3b7"),a("25f0"),a("b5e8")),L=a.n(I),B="mqtt.eclipse.org",F=443,P="/mqtt",q="aa8RN7TJ45msmFsR",K="us-east-1",M="tugas-belajar",G="https://play.min.io",U="Q3AM3UQ867SPQQA43P2F",J="zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG",Y="https://rxoqbwht.s3-ap-southeast-1.amazonaws.com",z="https://script.google.com/macros/s/AKfycbz4_i6T6owjNx98c6iBdiH5jWT0Tu2KMn_hY5HRDVrucXyCLaB_/exec",H=(a("a15b"),a("d81d"),a("b64b"),a("498a"),a("b85c"),a("1c46")),Q=a.n(H);a("b383"),a("df7c");function W(){return new L.a({endpoint:G,accessKeyId:U,secretAccessKey:J,region:K,s3ForcePathStyle:!0,signatureVersion:"v4"})}function X(t){return Z.apply(this,arguments)}function Z(){return Z=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r,n,s,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"string",r=W(),t.prev=2,t.next=5,r.getObject({Bucket:M,Key:e}).promise();case 5:return n=t.sent,s=null,s="string"===a?n.Body.toString():"json"===a?JSON.parse(n.Body.toString()):n.Body.buffer,t.abrupt("return",{code:200,data:s});case 11:return t.prev=11,t.t0=t["catch"](2),t.abrupt("return",{code:t.t0.statusCode,message:t.t0.code});case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),Z.apply(this,arguments)}function tt(t){return et.apply(this,arguments)}function et(){return et=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=W(),t.prev=1,t.next=4,a.headObject({Bucket:M,Key:e}).promise();case 4:return t.sent,t.abrupt("return",{code:200});case 8:return t.prev=8,t.t0=t["catch"](1),t.abrupt("return",{code:t.t0.statusCode,message:t.t0.code});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),et.apply(this,arguments)}function at(t,e,a){return rt.apply(this,arguments)}function rt(){return rt=Object(A["a"])(regeneratorRuntime.mark((function t(e,a,r){var n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=W(),s={Bucket:M,Key:e,Body:a,ContentType:r},t.prev=2,t.next=5,n.putObject(s).promise();case 5:return i=t.sent,t.abrupt("return",{code:i["$response"].httpResponse.statusCode});case 9:return t.prev=9,t.t0=t["catch"](2),t.abrupt("return",{code:t.t0.statusCode,message:t.t0.code});case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),rt.apply(this,arguments)}function nt(t){return st.apply(this,arguments)}function st(){return st=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=W(),r={Bucket:M,Key:e},t.prev=2,t.next=5,a.deleteObject(r).promise();case 5:return n=t.sent,t.abrupt("return",{code:n["$response"].httpResponse.statusCode});case 9:return t.prev=9,t.t0=t["catch"](2),t.abrupt("return",{code:t.t0.statusCode,message:t.t0.code});case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),st.apply(this,arguments)}function it(t){return ot.apply(this,arguments)}function ot(){return ot=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=W(),r={Bucket:M,Prefix:e},t.prev=2,t.next=5,a.listObjectsV2(r).promise();case 5:return n=t.sent,t.abrupt("return",{code:n["$response"].httpResponse.statusCode,data:n});case 9:return t.prev=9,t.t0=t["catch"](2),t.abrupt("return",{code:t.t0.statusCode,message:t.t0.code});case 12:case"end":return t.stop()}}),t,null,[[2,9]])}))),ot.apply(this,arguments)}function ct(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7200,a={Bucket:M,Key:t,Expires:e},r=W();return r.getSignedUrl("getObject",a)}var ut={name:"Tasks",data:function(t){return{assignments:[],pageReady:!1,TASSIGN_KEY:"".concat(t.$store.state.userid,".pr.assignments"),F_ASSGN_FNET:"".concat(t.$store.state.userid,".pr.assgnfnet")}},created:function(){this.$store.commit("SET_TOOLBAR",{title:"Tugas Belajar"}),this.loadData()},methods:{onFabAddClick:function(){this.$router.push({name:"taskform",query:{mode:"add"}})},formatIdDate:function(t){var e=new Date(1e3*t);return"".concat(e.getDate(),"/").concat(1+e.getMonth(),"/").concat(e.getFullYear())},loadData:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=sessionStorage.getItem(this.F_ASSGN_FNET),null===e){t.next=5;break}return sessionStorage.removeItem(this.F_ASSGN_FNET),this.loadDataFromNet(),t.abrupt("return");case 5:if(a=sessionStorage.getItem(this.TASSIGN_KEY),null!==a){t.next=9;break}return this.loadDataFromNet(),t.abrupt("return");case 9:r=Date.now(),n=JSON.parse(a),24e4+n.ts<r?(sessionStorage.removeItem(this.TASSIGN_KEY),this.loadDataFromNet()):(this.assignments=n.data,this.pageReady=!0);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadDataFromNet:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="m/".concat(this.$store.state.userid,"/"),this.$store.commit("SET_LOADING",!0),t.next=4,it(e);case 4:if(a=t.sent,200===a.code){t.next=10;break}return console.error(a.message),this.pageReady=!0,this.$store.commit("SET_LOADING",!1),t.abrupt("return");case 10:a.data.Contents.reverse(),this.assignments=[],r=this,a.data.Contents.forEach((function(t){var a=t.Key.replace(e,"").split(".");r.assignments.push([parseInt(a[0]),a[1],a[2],atob(a[2])])})),n={ts:Date.now(),data:this.assignments},sessionStorage.setItem(this.TASSIGN_KEY,JSON.stringify(n)),this.pageReady=!0,this.$store.commit("SET_LOADING",!1);case 18:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),displayAssignment:function(t){this.$router.push({name:"task",params:{id:this.assignments[t][1]}})},onEditClick:function(t){this.$router.push({name:"taskform",query:{mode:"edit",id:this.assignments[t][1],meta:this.assignments[t][2]}})},onDelClick:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r,n,s,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=window.confirm("Yakin menghapus "+this.assignments[e][3]+"?"),a){t.next=3;break}return t.abrupt("return");case 3:return r=this.assignments[e],n="a/".concat(r[1],".json"),s="m/".concat(this.$store.state.userid,"/").concat(r[0],".").concat(r[1],".").concat(r[2],".txt"),i="d/".concat(r[1],".txt"),this.$store.commit("SET_LOADING",!0),t.next=10,nt(n);case 10:if(o=t.sent,!(o.code>=300)){t.next=15;break}return console.error(o.message),this.$store.commit("SET_LOADING",!1),t.abrupt("return");case 15:return t.next=17,nt(s);case 17:if(o=t.sent,this.$store.commit("SET_LOADING",!1),!(o.code>=300)){t.next=22;break}return console.error(o.message),t.abrupt("return");case 22:return this.assignments.splice(e,1),t.next=25,at(i,"1","text/plain");case 25:o=t.sent;case 26:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},lt=ut,dt=(a("ded3"),a("b0af")),mt=a("99d9"),pt=a("62ad"),ht=a("a523"),vt=a("ce7e"),ft=a("8860"),gt=a("da13"),bt=a("0fd9"),kt=Object(c["a"])(lt,V,N,!1,null,"494a965a",null),xt=kt.exports;l()(kt,{VBtn:p["a"],VCard:dt["a"],VCardText:mt["b"],VCardTitle:mt["c"],VCol:pt["a"],VContainer:ht["a"],VDivider:vt["a"],VIcon:v["a"],VList:ft["a"],VListItem:gt["a"],VRow:bt["a"]});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(t.name)+" ")]),a("v-col",{attrs:{cols:"12"}},[a("h3",{staticClass:"mb-2"},[t._v("Deskripsi")]),a("p",[t._v(t._s(t.description))])])],1),a("v-row",{staticClass:"grey lighten-2"},[a("v-col",{attrs:{cols:"12"}},[a("h3",[t._v("Upload Link")]),a("div",{ref:"shareLink",staticClass:"text-center"},[t._v(t._s(t.shareLink))])]),a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-btn",{attrs:{color:"primary"},on:{click:t.btnCopyClick}},[t._v("Copy Link")])],1),a("v-col",{staticClass:"12"},[t._v(" Salin link di atas, kemudian bagikan link tersebut ke semua siswa. Panduan untuk siswa ada di "),a("a",{attrs:{href:"https://pr.netismedia.com/docs.html#student",target:"_blank"}},[t._v("halaman web ini")]),t._v(". ")])],1),a("v-row",{staticClass:"my-5",attrs:{"no-gutters":""}},[t.fileList.length>0?a("v-col",{attrs:{cols:"12",md:"6","offset-md":"3"}},[a("v-card",{staticClass:"grey lighten-4"},[a("v-card-text",[a("strong",{staticClass:"red--text"},[t._v("Perhatian!")]),t._v(" Segera download file yang ditampilkan di sini ke komputer atau hape anda! File tersebut sewaktu-waktu bisa kami hapus apabila kapasitas penyimpanan sudah penuh dan ada pengguna lain yang hendak meng-upload tugas PR mereka. Mohon pengertiannya untuk berbagi "),a("em",[t._v("bandwidth")]),t._v(" dan "),a("em",[t._v("storage space")]),t._v(". Terimakasih. ")])],1)],1):t._e()],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"mb-3",attrs:{cols:"10",md:"11"}},[a("h3",[t._v("Daftar File")])]),a("v-col",{staticClass:"text-right",attrs:{cols:"2",md:"1"}},[a("v-btn",{attrs:{icon:""},on:{click:t.loadData}},[a("v-icon",[t._v("mdi-restore")])],1)],1),t._l(t.fileList,(function(e,r){return[a("v-col",{key:e[0],staticClass:"d-flex align-center",attrs:{cols:"12",md:"9"}},[t._v(" "+t._s(r+1)+". "+t._s(e[0])+" ")]),a("v-col",{key:"_"+e,staticClass:"d-flex align-center justify-end mb-1",attrs:{cols:"12",md:"3"}},[a("span",[t._v(t._s(t.formatBytes(e[1])))]),a("v-btn",{attrs:{icon:"",loading:t.loading},on:{click:function(e){return t.btnDelClick(r)}}},[a("v-icon",[t._v("mdi-delete-forever")])],1),a("v-btn",{attrs:{icon:"",href:t.signedUrl(e),download:e}},[a("v-icon",[t._v("mdi-download")])],1),a("v-btn",{attrs:{icon:"",href:t.signedUrl(e),target:"_blank"}},[a("v-icon",[t._v("mdi-eye")])],1)],1),r<t.fileList.length-1?a("v-col",{key:r,attrs:{cols:"12"}},[a("v-divider")],1):t._e()]})),t.fileList.length>0?a("v-col",{staticClass:"grey lighten-3 text-right mt-2 pa-1",attrs:{cols:"12"}},[t._v(" Total : "),a("strong",[t._v(t._s(t.formatBytes(t.totalSize)))])]):t._e(),0===t.fileList.length?a("v-col",{attrs:{cols:"12"}},[t._v(" Belum ada yang mengumpulkan tugas. ")]):t._e()],2),a("v-row",[a("v-col",{staticClass:"text-center caption",attrs:{cols:"12"}},[t._v(" © "+t._s(t.year)+" Netismedia ")])],1)],1)},wt=[],_t=(a("a4d3"),a("e01a"),a("b680"),{name:"Task",data:function(){return{name:"",description:"",fileList:[],totalSize:0,loading:!1}},computed:{shareLink:function(){var t=window.location;return"".concat(t.protocol,"//").concat(t.host,"/murid/#/?a=").concat(this.$route.params.id)},year:function(){var t=new Date;return t.getFullYear()}},created:function(){this.$store.commit("SET_TOOLBAR",{title:"Tugas Belajar",backButton:!0}),this.loadData()},methods:{signedUrl:function(t){var e="a/".concat(this.$route.params.id,"/").concat(t);return ct(e)},loadData:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="a/".concat(this.$route.params.id,".json"),this.$store.commit("SET_LOADING",!0),t.next=4,X(e,"json");case 4:if(a=t.sent,200===a.code){t.next=9;break}return console.error(a.message),this.$store.commit("SET_LOADING",!1),t.abrupt("return");case 9:return this.name=a.data.name,this.description=a.data.description,r="a/".concat(this.$route.params.id,"/"),t.next=14,it(r);case 14:if(a=t.sent,this.$store.commit("SET_LOADING",!1),200==a.code){t.next=19;break}return console.error(a.message),t.abrupt("return");case 19:this.fileList=[],this.totalSize=0,n=this,a.data.Contents.forEach((function(t){n.fileList.push([t.Key.replace("a/".concat(s.$route.params.id,"/"),""),t.Size]),n.totalSize+=t.Size}));case 23:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),btnDelClick:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=confirm("Hapus file ".concat(this.fileList[e][0],"?")),a){t.next=3;break}return t.abrupt("return");case 3:return r="a/".concat(this.$route.params.id,"/").concat(this.fileList[e][0]),this.loading=!0,t.next=7,nt(r);case 7:if(n=t.sent,this.loading=!1,!(n.code>300)){t.next=12;break}return console.error(n.message),t.abrupt("return");case 12:this.fileList.splice(e,1);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),btnCopyClick:function(){var t=null;if(document.selection)t=document.body.createTextRange(),t.moveToElementText(this.$refs.shareLink),t.select().createTextRange(),document.execCommand("copy"),alert("Upload link telah disalin ke clipboard.");else if(window.getSelection){t=document.createRange(),t.selectNode(this.$refs.shareLink);var e=window.getSelection();e.removeAllRanges(),e.addRange(t),document.execCommand("copy"),alert("Upload link telah disalin ke clipboard.")}},formatBytes:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(0===t)return"0 b";var a=1024,r=e<0?0:e,n=["b","kb","mb","gb","tb","pb","eb","zb","yb"],s=Math.floor(Math.log(t)/Math.log(a)),i=parseFloat((t/Math.pow(a,s)).toFixed(r))+" "+n[s];return i.replace(".",",")}}}),Ct=_t,St=Object(c["a"])(Ct,yt,wt,!1,null,null,null),Tt=St.exports;l()(St,{VBtn:p["a"],VCard:dt["a"],VCardText:mt["b"],VCol:pt["a"],VContainer:ht["a"],VDivider:vt["a"],VIcon:v["a"],VRow:bt["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Nama tugas"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{label:"Deskripsi",solo:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mx-2",attrs:{color:"primary",disabled:t.loading},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" Batal ")]),a("v-btn",{staticClass:"mx-2",attrs:{color:"primary",loading:t.loading},on:{click:t.btnSaveClick}},[t._v(" Save ")])],1)],1)],1)},Ot=[],Rt=(a("caad"),a("fb6a"),a("a9e3"),a("f00c"),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")),jt="0123456789".split(""),$t="CDEHKMPRTUWXY012458".split(""),Dt=function(t,e){var a=e.length,r=Math.floor(65536/a)*a-1,n=2*Math.ceil(1.1*t),s="",i=0;while(i<t){var o=Q.a.randomBytes(n),c=0;while(c<n&&i<t){var u=o.readUInt16LE(c);c+=2,u>r||(s+=e[u%a],i++)}}return s},Vt=[void 0,"hex","base64","url-safe","numeric","distinguishable"],Nt=function(t){var e=t.length,a=t.type,r=t.characters;if(!(e>=0&&Number.isFinite(e)))throw new TypeError("Expected a `length` to be a non-negative finite number");if(void 0!==a&&void 0!==r)throw new TypeError("Expected either `type` or `characters`");if(void 0!==r&&"string"!==typeof r)throw new TypeError("Expected `characters` to be string");if(!Vt.includes(a))throw new TypeError("Unknown type: ".concat(a));if(void 0===a&&void 0===r&&(a="hex"),"hex"===a||void 0===a&&void 0===r)return Q.a.randomBytes(Math.ceil(.5*e)).toString("hex").slice(0,e);if("base64"===a)return Q.a.randomBytes(Math.ceil(.75*e)).toString("base64").slice(0,e);if("url-safe"===a)return Dt(e,Rt);if("numeric"===a)return Dt(e,jt);if("distinguishable"===a)return Dt(e,$t);if(0===r.length)throw new TypeError("Expected `characters` string length to be greater than or equal to 1");if(r.length>65536)throw new TypeError("Expected `characters` string length to be less or equal to 65536");return Dt(e,r.split(""))},At={name:"TasksForm",data:function(t){return{mode:t.$route.query.mode,id:void 0===t.$route.query.id?"":t.$route.query.id,name:"",description:"",metaId:void 0===t.$route.query.meta?"":t.$route.query.meta,oldData:null,loading:!1}},computed:{title:function(){return"add"===this.mode?"Tugas Baru":"Edit Tugas"}},created:function(){"edit"===this.mode&&this.loadData()},methods:{getB64Name:function(t){return t.length>60?btoa(t.substring(0,60)):btoa(t)},loadData:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="a/".concat(this.id,".json"),t.next=3,X(e,"json");case 3:if(a=t.sent,200===a.code){t.next=7;break}return console.error(a.message),t.abrupt("return");case 7:this.oldData=a.data,this.name=a.data.name,this.description=a.data.description;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),btnCancelClick:function(){this.$router.go(-1)},saveJsonData:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(e,a){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={name:this.name,description:this.description,teacher_name:this.$store.state.username,created:a},t.next=3,at(e,JSON.stringify(r),"application/json");case 3:return n=t.sent,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),saveNew:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=!1,a="",r="",this.loading=!0;case 4:if(e){t.next=13;break}return r=Nt({length:16,type:"url-safe"}),a="a/".concat(r,".json"),t.next=9,tt(a);case 9:n=t.sent,200!==n.code&&(e=!0),t.next=4;break;case 13:return s=Math.round(Date.now()/1e3),t.next=16,this.saveJsonData(a,s);case 16:if(i=t.sent,200===i.code){t.next=21;break}return console.error(i.message),this.loading=!1,t.abrupt("return");case 21:return o=this.getB64Name(this.name),c="m/".concat(this.$store.state.userid,"/").concat(s,".").concat(r,".").concat(o,".txt"),t.next=25,at(c,"1","text/plain");case 25:i=t.sent,this.loading=!1,this.$router.go(-1);case 28:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveEdit:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="a/".concat(this.id,".json"),this.loading=!0,t.next=4,this.saveJsonData(e,this.oldData.created);case 4:if(a=t.sent,200===a.code){t.next=9;break}return console.error(a.message),this.loading=!1,t.abrupt("return");case 9:if(this.name!==this.oldData.name){t.next=14;break}this.loading=!1,this.$router.go(-1),t.next=25;break;case 14:return r="m/".concat(this.$store.state.userid,"/").concat(this.oldData.created,".").concat(this.id,".").concat(this.metaId,".txt"),t.next=17,nt(r);case 17:return a=t.sent,n=this.getB64Name(this.name),s="m/".concat(this.$store.state.userid,"/").concat(this.oldData.created,".").concat(this.id,".").concat(n,".txt"),t.next=22,at(s,"1","text/plain");case 22:a=t.sent,this.loading=!1,this.$router.go(-1);case 25:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),btnSaveClick:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==this.name){t.next=2;break}return t.abrupt("return");case 2:if(""!==this.description){t.next=4;break}return t.abrupt("return");case 4:if("add"!==this.mode){t.next=9;break}return t.next=7,this.saveNew();case 7:t.next=11;break;case 9:return t.next=11,this.saveEdit();case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},It=At,Lt=a("8654"),Bt=a("a844"),Ft=Object(c["a"])(It,Et,Ot,!1,null,null,null),Pt=Ft.exports;l()(Ft,{VBtn:p["a"],VCol:pt["a"],VContainer:ht["a"],VRow:bt["a"],VTextField:Lt["a"],VTextarea:Bt["a"]});var qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{"justify-center":"",fluid:""}},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.authenticated,expression:"!$store.state.authenticated"}],attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Nama",name:"name","prepend-icon":"mdi-account",type:"text",readonly:t.loading,error:t.loginError,clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Token",name:"userid","prepend-icon":"mdi-lock",type:"password",readonly:t.loading,error:t.loginError,clearable:""},model:{value:t.userid,callback:function(e){t.userid=e},expression:"userid"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",to:"/register",color:"primary"}},[t._v("Daftar")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.inputOK},on:{click:t.btnLoginClick}},[t._v("Login")])],1)],1)],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.authenticated,expression:"$store.state.authenticated"}],attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" Loading... ")])],1)],1)},Kt=[];function Mt(t){return Gt.apply(this,arguments)}function Gt(){return Gt=Object(A["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={headers:{Accept:"application/json"}},t.prev=1,t.next=4,fetch(e,a);case 4:return r=t.sent,t.next=7,r.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",{code:600,message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[1,11]])}))),Gt.apply(this,arguments)}function Ut(t,e){return Jt.apply(this,arguments)}function Jt(){return Jt=Object(A["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in r=new FormData,a)r.append(n,a[n]);return s={method:"POST",body:r},t.prev=3,t.next=6,fetch(e,s);case 6:return i=t.sent,t.abrupt("return",{code:i.status});case 10:return t.prev=10,t.t0=t["catch"](3),t.abrupt("return",{code:600,message:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[3,10]])}))),Jt.apply(this,arguments)}var Yt={name:"Login",data:function(){return{name:"",userid:"",loginError:!1,loading:!1}},computed:{inputOK:function(){try{return 0!==this.name.length&&0!==this.userid.length}catch(t){return!1}}},methods:{btnLoginClick:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loginError=!1,e="".concat(Y,"/teachers/").concat(this.userid,".json"),this.loading=!0,t.next=5,Mt(e);case 5:if(a=t.sent,this.loading=!1,!(a.code>300)){t.next=10;break}return this.loginError=!0,t.abrupt("return");case 10:this.$store.commit("SET_CREDENTIALS",{userid:this.userid,username:this.name}),r=Math.round(Date.now()/1e3)+86400,$(this.name,this.userid,r),this.$store.commit("SET_AUTHENTICATED",!0),Object.prototype.hasOwnProperty.call(this.$route.query,"redirect")?this.$router.replace(this.$route.query.redirect):this.$router.replace("/");case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},zt=Yt,Ht=a("4bd4"),Qt=a("71d9"),Wt=Object(c["a"])(zt,qt,Kt,!1,null,null,null),Xt=Wt.exports;l()(Wt,{VBtn:p["a"],VCard:dt["a"],VCardActions:mt["a"],VCardText:mt["b"],VCol:pt["a"],VContainer:ht["a"],VForm:Ht["a"],VRow:bt["a"],VSpacer:g["a"],VTextField:Lt["a"],VToolbar:Qt["a"],VToolbarTitle:b["a"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{"justify-center":"",fluid:""}},[a("v-row",{directives:[{name:"show",rawName:"v-show",value:!t.$store.state.authenticated,expression:"!$store.state.authenticated"}],attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[t.registerSucceed?t._e():a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Daftar - GRATIS")])],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Nama",name:"name","prepend-icon":"mdi-account",type:"text",readonly:t.loading,error:t.registerError,clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"email",name:"email","prepend-icon":"mdi-email",type:"email",readonly:t.loading,error:t.registerError,clearable:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary",to:"/login",disabled:t.loading}},[t._v(" Login ")]),a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:t.loading,disabled:!t.inputOK},on:{click:t.btnRegClick}},[t._v("Daftar")])],1)],1),t.registerSucceed?a("v-card",{staticClass:"elevation-12"},[a("v-card-text",[t._v(" Data pendaftaran anda telah kami catat. Kami akan mengirimkan TOKEN ke alamat email anda paling lambat 1 jam. Jika sudah mendapatkan TOKEN, silahkan anda "),a("router-link",{attrs:{to:"/login"}},[t._v("LOGIN")]),t._v(" untuk menggunakan fasilitas ini. Terimakasih. ")],1)],1):t._e()],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.authenticated,expression:"$store.state.authenticated"}],attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" Loading... ")])],1)],1)},te=[],ee=a("4259"),ae=a.n(ee),re={name:"Register",data:function(){return{name:"",email:"",registerSucceed:!1,registerError:!1,loading:!1,mqttClient:null}},computed:{inputOK:function(){try{return 0!==this.name.length&&0!==this.email.length}catch(t){return!1}}},methods:{sendMessage:function(){var t=this;return new Promise((function(e,a){var r=Nt({length:8,type:"url-safe"});t.mqttClient=new ae.a.Client(B,F,P,r),t.mqttClient.onConnected=function(a,r){var n=JSON.stringify({event:"register",name:t.name,email:t.email});t.mqttClient.send(q,n),t.mqttClient.disconnect(),t.mqttClient=null,e()};var n={cleanSession:!0,useSSL:!0,keepAliveInterval:10,reconnect:!0};t.mqttClient.connect(n)}))},btnRegClick:function(){var t=Object(A["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={name:this.name,email:this.email},this.loading=!0,t.next=4,Ut(z,e);case 4:if(a=t.sent,this.loading=!1,200!==a.code){t.next=18;break}return this.registerSucceed=!0,t.prev=8,t.next=11,this.sendMessage();case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](8),console.error(t.t0);case 16:t.next=19;break;case 18:alert("Tidak bisa memproses pendaftaran anda! "+a.message);case 19:case"end":return t.stop()}}),t,this,[[8,13]])})));function e(){return t.apply(this,arguments)}return e}()}},ne=re,se=Object(c["a"])(ne,Zt,te,!1,null,null,null),ie=se.exports;function oe(t,e,a){D(),O.commit("SET_AUTHENTICATED",!1),a("/login")}l()(se,{VBtn:p["a"],VCard:dt["a"],VCardActions:mt["a"],VCardText:mt["b"],VCol:pt["a"],VContainer:ht["a"],VForm:Ht["a"],VRow:bt["a"],VSpacer:g["a"],VTextField:Lt["a"],VToolbar:Qt["a"],VToolbarTitle:b["a"]}),r["a"].use(_["a"]);var ce=[{path:"/",name:"tasks",component:xt,meta:{requiresAuth:!0}},{path:"/tasks/:id",name:"task",component:Tt,meta:{requiresAuth:!0}},{path:"/taskform",name:"taskform",component:Pt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Xt},{path:"/register",name:"register",component:ie},{path:"/logout",name:"logout",beforeEnter:oe}],ue=new _["a"]({routes:ce});ue.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?O.state.authenticated?a():a({path:"/login",query:{redirect:t.fullPath}}):("login"===t.name||"register"===t.name)&&O.state.authenticated?a("/"):a()}));var le=ue;r["a"].config.productionTip=!1;var de=j();void 0!==de&&(O.commit("SET_CREDENTIALS",{userid:de.userid,username:de.name}),O.commit("SET_AUTHENTICATED",!0)),new r["a"]({router:le,store:O,vuetify:w,render:function(t){return t(x)}}).$mount("#app")},"8a23":function(t,e,a){},a7be:function(t,e,a){},ded3:function(t,e,a){"use strict";var r=a("a7be"),n=a.n(r);n.a}});
//# sourceMappingURL=app.d2776c94.js.map