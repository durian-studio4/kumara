(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{QBxF:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),r=t("o0o1"),l=t.n(r),o=t("HaE+"),c=t("ODXe"),s=t("q1tI"),i=t.n(s),m=t("9kvl"),d=t("p46w"),p=t.n(d),u=t("W4MV"),b=t.n(u),v=(t("2qtc"),t("kLXV")),E=(t("jCWc"),t("kPKH")),h=(t("14J3"),t("BMrR")),x=(t("5NDa"),t("5rEg")),g=t("rePB"),N=t("VTBJ"),y=t("CzAe"),f=t("u1pk"),j=t("+f7l"),O=t("PI94"),C=t("LfEe"),k=t("c6cn"),q={name:"",alamat:"",npwp:"",email:"",phone:""},w=function(e){var a=e.visible,t=e.onCancel,r=e.onCreate,l=e.onLoadButton,o=e.onError,m=Object(s["useState"])(q),d=Object(c["a"])(m,2),p=d[0],u=p.name,w=p.alamat,S=p.npwp,T=p.email,F=p.phone,_=d[1],B=Object(s["useState"])(!1),P=Object(c["a"])(B,2),I=P[0],J=P[1],L=Object(y["a"])(),K=Object(y["a"])(),W=Object(y["a"])(),A=Object(y["a"])(),D=Object(f["a"])(W.text);Object(s["useEffect"])((function(){return""===u||""===w||""===S||""===T||""===F||0===L.id||0===K.id||0===W.id||0===A.id?J(!0):J(!1)}),[w,T,W.id,A.id,K.id,u,S,F,L.id]);var M=JSON.stringify({name:u,alamat:w,npwp:S,email:T,phone:F,id_kelurahan:A.id}),R=function(e){var a=e.target,t=a.id,n=a.value;_((function(e){return Object(N["a"])(Object(N["a"])({},e),{},Object(g["a"])({},t,n))}))},V=function(){_(Object(N["a"])({},q)),t()},z=function(){r({json:M,clear:V})};return i.a.createElement(v["a"],{visible:a,title:"Tambah Daftar Suplier",footer:null,width:600,onCancel:V},i.a.createElement("div",{className:b.a.modal_body},i.a.createElement(E["a"],null,i.a.createElement(h["a"],null,i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"name"},"Nama Supplier"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"name",placeholder:"Isi Nama",value:u,onChange:R}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"alamat"},"Alamat"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"alamat",placeholder:"Isi Alamat",value:w,onChange:R}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"npwp"},"NPWP (Optional)"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"npwp",placeholder:"Isi NPWP",value:S,onChange:R})))),i.a.createElement(h["a"],null,i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"email"},"Email"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"email",placeholder:"Isi Email",value:T,onChange:R}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"phone"},"No. Telpon"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"phone",placeholder:"Isi No Telepon",value:String(F).replace(/[^-0-9]/g,""),onChange:R}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"provinsi"},"Provinsi"),i.a.createElement(j["a"],{id:"provinsi",value:L.text,onChange:L.changeText,onSelect:L.selectText})))),i.a.createElement(h["a"],null,i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"kota"},"Kota"),i.a.createElement(O["a"],{id:"kota",value:K.text,onChange:K.changeText,onSelect:K.selectText,onClear:K.clearText,filter:String(L.id)}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"kecamatan"},"Kecamatan"),i.a.createElement(C["a"],{id:"kecamatan",value:W.text,onChange:W.changeText,onSelect:W.selectText,onClear:W.clearText,filter:String(K.id)}))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"kelurahan"},"Kelurahan"),i.a.createElement(k["a"],{id:"kelurahan",value:A.text,onChange:A.changeText,onSelect:A.selectText,onClear:A.clearText,filter:String(W.id)})))),i.a.createElement(h["a"],null,i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"kode"},"Kode Pos"),i.a.createElement(x["a"],{className:b.a.input,type:"text",id:"kode",disabled:!0,value:D.kode||0})))))),i.a.createElement(h["a"],{justify:"end"},o?i.a.createElement("p",{style:{color:"red"}},o):null,i.a.createElement(n["a"],{disabled:I||l,onClick:z,type:"primary",className:b.a.button},"Simpan")))},S=w,T=t("MRut"),F=t("jC83"),_=function(){var e=Object(s["useState"])(!1),a=Object(c["a"])(e,2),t=a[0],r=a[1],d=Object(s["useState"])(!1),u=Object(c["a"])(d,2),v=u[0],E=u[1],h=Object(s["useState"])(!1),x=Object(c["a"])(h,2),g=x[0],N=x[1],f=Object(F["a"])(),j=Object(c["a"])(f,3),O=j[0],C=j[1],k=j[2],q=Object(y["a"])();Object(s["useEffect"])((function(){return 0===q.id?N(!0):N(!1)}),[q.id]);var w=function(){return r(!t)},_=function(e){var a=e.json,t=e.clear;k("".concat("https://api.posarmed.id","/admin/v1/master/suplier/create"),a,t)},B=function(){var e=Object(o["a"])(l.a.mark((function e(){var a,t,n;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,fetch("".concat("https://api.posarmed.id","/admin/v1/inventory/order/request"),{method:"post",body:JSON.stringify({id_suplier:q.id}),headers:{"Content-Type":"application/json",Authorization:String(p.a.get("token"))}});case 4:return a=e.sent,e.next=7,a.json();case 7:return t=e.sent,e.next=10,t.order_id;case 10:return n=e.sent,E(!1),m["d"].push("/inventory/request/".concat(n)),e.abrupt("return",n);case 16:e.prev=16,e.t0=e["catch"](1),E(!1);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("p",{className:b.a.title},"Request Order"),i.a.createElement("div",{className:b.a.row},i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group},i.a.createElement("label",{className:b.a.label,htmlFor:"suplier"},"Nama Suplier"),i.a.createElement(T["a"],{id:"suplier",value:q.text,onChange:q.changeText,onSelect:q.selectText,effect:C}),i.a.createElement("p",{style:{marginTop:"0.5em"}},"Nama suplier belum terdaftar?",i.a.createElement("span",{className:b.a.span,onClick:w},"Daftarkan")))),i.a.createElement("div",{className:b.a.box3},i.a.createElement("div",{className:b.a.group,style:{marginTop:"2em"}},i.a.createElement(n["a"],{type:"primary",onClick:B,disabled:g||v},"Lanjutkan")))),i.a.createElement(S,{visible:t,onCancel:w,onCreate:_,onLoadButton:Boolean(O),onError:Boolean(C)}))};a["default"]=_},W4MV:function(e,a,t){e.exports={title:"antd-pro-pages-inventory-order-request-home-index-title",title_add:"antd-pro-pages-inventory-order-request-home-index-title_add",row:"antd-pro-pages-inventory-order-request-home-index-row",row_box:"antd-pro-pages-inventory-order-request-home-index-row_box",modal_body:"antd-pro-pages-inventory-order-request-home-index-modal_body",col:"antd-pro-pages-inventory-order-request-home-index-col",box3:"antd-pro-pages-inventory-order-request-home-index-box3",box5:"antd-pro-pages-inventory-order-request-home-index-box5",box10:"antd-pro-pages-inventory-order-request-home-index-box10",group:"antd-pro-pages-inventory-order-request-home-index-group",label:"antd-pro-pages-inventory-order-request-home-index-label",input:"antd-pro-pages-inventory-order-request-home-index-input",button:"antd-pro-pages-inventory-order-request-home-index-button",area:"antd-pro-pages-inventory-order-request-home-index-area",span:"antd-pro-pages-inventory-order-request-home-index-span",p:"antd-pro-pages-inventory-order-request-home-index-p"}}}]);