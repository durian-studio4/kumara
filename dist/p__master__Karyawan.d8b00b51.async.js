(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{domm:function(a,e,t){"use strict";t.r(e);t("14J3");var n=t("BMrR"),r=(t("+L6B"),t("2/Rp")),l=t("ODXe"),c=t("q1tI"),s=t.n(c),o=t("zKF1"),m=t.n(o),i=(t("g9YV"),t("wCAj")),d=t("VTBJ"),u=t("F6Wq"),p=t("G/yU"),b=function(a){var e=a.data,t=a.loading,o=a.error,b=a.status,E=a.visibleUpdate,g=a.remove,v=Object(u["a"])(),N=Object(l["a"])(v,1),y=N[0],w=Object(c["useMemo"])((function(){return[Object(d["a"])({align:"center",title:"No. ID",dataIndex:"id",key:"id"},y("id")),Object(d["a"])({align:"center",title:"Nama Karyawan",dataIndex:"name",key:"name"},y("name")),Object(d["a"])({align:"center",title:"Peranan",dataIndex:"role",key:"no_id"},y("peranan")),Object(d["a"])({align:"center",title:"Username",dataIndex:"username",key:"username"},y("username")),{align:"center",render:function(a){return s.a.createElement(n["a"],{justify:"space-around"},s.a.createElement(r["a"],{className:m.a.button,id:a.id,onClick:function(){return E(a.id)},type:"primary"},"Edit"),s.a.createElement(r["a"],{className:m.a.button,id:a.id,onClick:function(){return g(a.id)},type:"primary",danger:!0},"Delete"))}}]}),[]);return o||200!==b?s.a.createElement(p["a"],null):s.a.createElement("div",{style:{overflow:"auto"}},s.a.createElement(i["a"],{columns:w,dataSource:e.reverse(),loading:t}),";")},E=b,g=(t("2qtc"),t("kLXV")),v=(t("5NDa"),t("5rEg")),N=t("rePB"),y=t("ZS4f"),w=t("7EWV"),f={name:"",username:"",email:"",no_id:"",password:"",confirm_password:""},j=function(a){var e=a.visible,t=a.onError,o=a.onLoadButton,i=a.onCreate,u=a.onCancel,p=Object(c["useState"])(f),b=Object(l["a"])(p,2),E=b[0],j=E.name,h=E.username,O=E.email,x=E.no_id,_=E.password,k=E.confirm_password,C=b[1],F=Object(c["useState"])(!1),I=Object(l["a"])(F,2),B=I[0],S=I[1],P=Object(y["a"])("0"),D=Object(l["a"])(P,2),U=D[0],K=D[1],T=Object(y["a"])("0"),J=Object(l["a"])(T,2),L=J[0],V=J[1];Object(c["useEffect"])((function(){return S(!j||(!h||(!x||(!O||(!_||(!k||(!U||(!L||_!==k))))))))}),[k,O,L,U,j,x,_,h]);var q=JSON.stringify({name:j,username:h,email:O,no_id:x,password:_,confirm_password:k,id_role:U,id_cabang:L}),z=function(a){var e=a.target,t=e.id,n=e.value;C((function(a){return Object(d["a"])(Object(d["a"])({},a),{},Object(N["a"])({},t,n))}))},M=function(){C(Object(d["a"])({},f)),u()},A=function(){i({json:q,clear:M})};return s.a.createElement(g["a"],{visible:e,title:"Input Data Karyawan",closable:!1,footer:null},s.a.createElement("div",{className:m.a.modal_body},s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"no_id"},"No. ID Karyawan"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"no_id",placeholder:"Isi ID",value:String(x).replace(/[^-0-9]/g,""),onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"name"},"Nama"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"name",placeholder:"Isi Name",value:j,onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"email"},"Email"),s.a.createElement(v["a"],{className:m.a.input,type:"email",id:"email",placeholder:"Isi Email",value:O,onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"username"},"Username"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"username",placeholder:"Isi Username",value:h,onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"password"},"Password"),s.a.createElement(v["a"],{className:m.a.input,type:"password",id:"password",placeholder:"Isi Password",value:_,onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"confirm_password"},"Confirm Password"),s.a.createElement(v["a"],{className:m.a.input,type:"password",id:"confirm_password",placeholder:"Confirm Password",value:k,onChange:z}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"role"},"Peranan"),s.a.createElement(w["a"],{address:"".concat("http://127.0.0.1:8000","/admin/v1/pengaturan/role/get"),handleChange:K}))),s.a.createElement("div",{className:m.a.box10},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"cabang"},"Cabang"),s.a.createElement(w["a"],{address:"".concat("http://127.0.0.1:8000","/admin/v1/pengaturan/cabang/get"),handleChange:V})))),s.a.createElement(n["a"],{justify:"end"},t?s.a.createElement("p",{style:{color:"red"}},t):null,s.a.createElement(r["a"],{className:m.a.button,disabled:o,onClick:M,type:"primary",danger:!0},"Batal"),s.a.createElement(r["a"],{className:m.a.button,onClick:A,disabled:B||o,type:"primary"},"Tambah")))},h=j,O=t("Pt6z"),x=t("bIAK"),_={name:"",username:"",email:"",no_id:"",nama_cabang:"",role:""},k={password:"",confirm_password:""},C=function(a){var e=a.id_update,t=a.visible,o=a.onUpdate,i=a.onCancel,u=a.onError,b=a.onLoadButton,E=Object(O["a"])(),f=Object(l["a"])(E,5),j=f[0],h=f[1],C=f[2],F=f[3],I=f[4],B=Object(c["useState"])(_),S=Object(l["a"])(B,2),P=S[0],D=P.name,U=P.username,K=P.email,T=P.no_id,J=P.nama_cabang,L=P.role,V=S[1],q=Object(c["useState"])(k),z=Object(l["a"])(q,2),M=z[0],A=M.password,R=M.confirm_password,W=z[1],X=Object(c["useState"])(!1),G=Object(l["a"])(X,2),Y=G[0],Z=G[1],H=Object(y["a"])(j.id_role),Q=Object(l["a"])(H,2),$=Q[0],aa=Q[1],ea=Object(y["a"])(j.id_cabang),ta=Object(l["a"])(ea,2),na=ta[0],ra=ta[1];Object(c["useEffect"])((function(){var a=setTimeout((function(){I("".concat("http://127.0.0.1:8000","/admin/v1/master/karyawan/").concat(e,"/select"))}),0);return function(){return clearTimeout(a)}}),[e]),Object(c["useMemo"])((function(){return Z(!A||(!R||A!==R))}),[R,A]),Object(c["useEffect"])((function(){V(j)}),[j]);var la=JSON.stringify({name:D,username:U,email:K,no_id:T,password:A,confirm_password:R,id_role:$,id_cabang:na}),ca=function(a){var e=a.target,t=e.id,n=e.value;V((function(a){return Object(d["a"])(Object(d["a"])({},a),{},Object(N["a"])({},t,n))}))},sa=function(a){var e=a.target,t=e.id,n=e.value;W((function(a){return Object(d["a"])(Object(d["a"])({},a),{},Object(N["a"])({},t,n))}))},oa=function(){V(Object(d["a"])({},_)),i()},ma=function(){o({url:"".concat("http://127.0.0.1:8000","/admin/v1/master/karyawan/").concat(e,"/update"),json:la,clear:oa})};return s.a.createElement(g["a"],{visible:t,width:600,title:"Update Data Karyawan",closable:!1,footer:null},200!==h||F?s.a.createElement(p["a"],null):null,C?s.a.createElement(x["a"],null):s.a.createElement("div",{className:m.a.modal_body},s.a.createElement(n["a"],null,s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"no_id"},"No. ID Karyawan"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"no_id",placeholder:"112334556789",value:String(T).replace(/[^-0-9]/g,""),onChange:ca}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"name"},"Nama"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"name",placeholder:"112334556789",value:D,onChange:ca}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"email"},"Email"),s.a.createElement(v["a"],{className:m.a.input,type:"email",id:"email",placeholder:"leikos@gmail.com",value:K,onChange:ca}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"username"},"Username"),s.a.createElement(v["a"],{className:m.a.input,type:"text",id:"username",placeholder:"kuetabby",value:U,onChange:ca}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"password"},"Password"),s.a.createElement(v["a"],{className:m.a.input,type:"password",id:"password",placeholder:"Isi Password",value:A,onChange:sa}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"confirm_password"},"Confirm Password"),s.a.createElement(v["a"],{className:m.a.input,type:"password",id:"confirm_password",placeholder:"Confirm Password",value:R,onChange:sa}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"role"},"Peranan"),s.a.createElement(w["a"],{address:"".concat("http://127.0.0.1:8000","/admin/v1/pengaturan/role/get"),select_id:"role",handleChange:aa,initial:L}))),s.a.createElement("div",{className:m.a.box5},s.a.createElement("div",{className:m.a.group},s.a.createElement("label",{className:m.a.label,htmlFor:"cabang"},"Cabang"),s.a.createElement(w["a"],{address:"".concat("http://127.0.0.1:8000","/admin/v1/pengaturan/cabang/get"),select_id:"cabang",handleChange:ra,initial:J}))))),s.a.createElement(n["a"],{justify:"end",style:{marginTop:"1em"}},u?s.a.createElement("p",{style:{color:"red"}},u):null,s.a.createElement(r["a"],{className:m.a.button,type:"primary",danger:!0,onClick:oa},"Batal"),s.a.createElement(r["a"],{className:m.a.button,type:"primary",onClick:ma,loading:b,disabled:Y},"Tambah")))},F=C,I=t("jC83"),B=function(){var a=Object(c["useState"])(!1),e=Object(l["a"])(a,2),t=e[0],o=e[1],i=Object(c["useState"])(!1),d=Object(l["a"])(i,2),u=d[0],p=d[1],b=Object(c["useState"])(0),g=Object(l["a"])(b,2),v=g[0],N=g[1],y=Object(I["a"])(),w=Object(l["a"])(y,3),f=w[0],j=w[1],x=w[2],_=Object(I["a"])(),k=Object(l["a"])(_,3),C=k[0],B=k[1],S=k[2],P=Object(O["a"])(),D=Object(l["a"])(P,6),U=D[0],K=D[1],T=D[2],J=D[3],L=D[4],V=D[5];Object(c["useEffect"])((function(){var a=setTimeout((function(){L("".concat("http://127.0.0.1:8000","/admin/v1/master/karyawan/list"))}),0);return function(){return clearTimeout(a)}}),[j,B]);var q=function(){return o(!t)},z=function(a){N(Number(a)),p(!0)},M=function(){N(0),p(!1)},A=function(a){var e=a.json,t=a.clear;x("".concat("http://127.0.0.1:8000","/admin/v1/master/karyawan/create"),e,t)},R=function(a){var e=a.url,t=a.json,n=a.clear;S(e,t,n)},W=function(a){V("".concat("http://127.0.0.1:8000","/admin/v1/master/karyawan/").concat(a,"/delete"),JSON.stringify(null),M)};return s.a.createElement("div",null,s.a.createElement(n["a"],{justify:"space-between"},s.a.createElement("p",{className:m.a.title},"Data Karyawan"),s.a.createElement(r["a"],{className:m.a.button,type:"primary",onClick:q},"Tambah Daftar")),s.a.createElement(E,{data:U,loading:Boolean(T),status:Number(K),error:Boolean(J),remove:W,visibleUpdate:z}),t?s.a.createElement(h,{visible:t,onError:Boolean(j),onLoadButton:Boolean(f),onCreate:A,onCancel:q}):null,u?s.a.createElement(F,{visible:u,onCancel:M,onUpdate:R,onError:Boolean(B),onLoadButton:Boolean(C),id_update:v}):null)};e["default"]=B},zKF1:function(a,e,t){a.exports={title:"antd-pro-pages-master-karyawan-index-title",title_add:"antd-pro-pages-master-karyawan-index-title_add",row:"antd-pro-pages-master-karyawan-index-row",row_box:"antd-pro-pages-master-karyawan-index-row_box",modal_body:"antd-pro-pages-master-karyawan-index-modal_body",col:"antd-pro-pages-master-karyawan-index-col",box3:"antd-pro-pages-master-karyawan-index-box3",box5:"antd-pro-pages-master-karyawan-index-box5",box6:"antd-pro-pages-master-karyawan-index-box6",box10:"antd-pro-pages-master-karyawan-index-box10",group:"antd-pro-pages-master-karyawan-index-group",label:"antd-pro-pages-master-karyawan-index-label",input:"antd-pro-pages-master-karyawan-index-input",button:"antd-pro-pages-master-karyawan-index-button",area:"antd-pro-pages-master-karyawan-index-area",span:"antd-pro-pages-master-karyawan-index-span",p:"antd-pro-pages-master-karyawan-index-p",table:"antd-pro-pages-master-karyawan-index-table"}}}]);