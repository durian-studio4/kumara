(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{"5T/U":function(e,a,t){e.exports={title:"antd-pro-pages-sales-retur-index-title",row_box:"antd-pro-pages-sales-retur-index-row_box",modal_body:"antd-pro-pages-sales-retur-index-modal_body",col:"antd-pro-pages-sales-retur-index-col",box:"antd-pro-pages-sales-retur-index-box",box3:"antd-pro-pages-sales-retur-index-box3",box6:"antd-pro-pages-sales-retur-index-box6",group:"antd-pro-pages-sales-retur-index-group",label:"antd-pro-pages-sales-retur-index-label",input:"antd-pro-pages-sales-retur-index-input",area:"antd-pro-pages-sales-retur-index-area",button:"antd-pro-pages-sales-retur-index-button"}},fELG:function(e,a,t){"use strict";t.r(a);t("+L6B");var n=t("2/Rp"),r=t("o0o1"),l=t.n(r),c=t("HaE+"),s=t("ODXe"),o=t("hGi/"),i=t("q1tI"),u=t.n(i),m=t("Hx5s"),d=t("5T/U"),b=t.n(d),p=(t("2qtc"),t("kLXV")),g=(t("14J3"),t("BMrR")),x=t("rePB"),f=t("VTBJ"),E=(t("5NDa"),t("5rEg")),v=t("LuAL"),j=t("P5uD");function O(e){var a=e.idSelect,t=e.textSelect,n=Object(i["useState"])(""),r=Object(s["a"])(n,2),l=r[0],c=r[1],o=Object(i["useState"])(0),u=Object(s["a"])(o,2),m=u[0],d=u[1];Object(i["useEffect"])((function(){var e=setTimeout((function(){c(t),d(a)}),0);return function(){return clearTimeout(e)}}),[a,t]);var b=function(e){c(e)},p=function(e,a){c(a.children),d(e)},g=function(){c("")};return{text:l,id:m,changeText:b,selectText:p,clearText:g}}var y=O,k=t("R277"),h=t("ZS4f"),N=E["a"].TextArea,_={nama_sales:"",keterangan:""},T=function(e){var a=e.onCancel,t=e.onCreate,r=e.onLoadButton,l=e.onError,c=e.visible,o=Object(i["useState"])(_),m=Object(s["a"])(o,2),d=m[0],O=d.keterangan,T=d.nama_sales,S=m[1],w=Object(k["a"])(""),C=Object(s["a"])(w,3),B=C[0],q=C[1],I=C[2],L=Object(i["useState"])(!1),R=Object(s["a"])(L,2),F=R[0],J=R[1],K=Object(h["a"])("0"),U=Object(s["a"])(K,3),D=U[0],G=U[1],P=U[2],A=y({idSelect:"",textSelect:""});Object(i["useEffect"])((function(){return T&&O&&A.text?J(!B||!D):J(!0)}),[A.text,O,T,B,D]),Object(i["useEffect"])((function(){P()}),[A.text]);var V=JSON.stringify({qty:B,keterangan:O,nama_sales:T,nama_barang:A.text,id_satuan_barang:D}),H=function(e){var a=e.target,t=a.id,n=a.value;S((function(e){return Object(f["a"])(Object(f["a"])({},e),{},Object(x["a"])({},t,n))}))},M=function(){S(Object(f["a"])({},_)),P(),A.clearText(),I(),a()},Q=function(){t({url:"".concat("https://api.posarmed.id","/admin/v1/sales/retur"),json:V,clear:M}),P(),A.clearText(),I(),a()};return u.a.createElement(p["a"],{title:"Input Retur Sales",visible:c,closable:!1,footer:null},u.a.createElement("div",{className:b.a.modal_body},u.a.createElement("div",{className:b.a.col},u.a.createElement("div",{className:b.a.box},u.a.createElement("div",{className:b.a.group},u.a.createElement("label",{className:b.a.label,htmlFor:"nama_sales"},"Nama Sales"),u.a.createElement(E["a"],{className:b.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:T,onChange:H}))),u.a.createElement("div",{className:b.a.box},u.a.createElement("div",{className:b.a.group},u.a.createElement("label",{className:b.a.label,htmlFor:"nama_barang"},"Nama Barang"),u.a.createElement(j["a"],{id:"barang",value:A.text,onChange:A.changeText,onSelect:A.selectText}))),u.a.createElement("div",{className:b.a.box},u.a.createElement("div",{className:b.a.group},u.a.createElement("label",{className:b.a.label,htmlFor:"qty"},"Qty"),u.a.createElement(g["a"],{justify:"space-between"},u.a.createElement("div",{className:b.a.box6},u.a.createElement(E["a"],{className:b.a.input,id:"qty",placeholder:"0",value:B,onChange:q})),A.text?u.a.createElement("div",{className:b.a.box3},u.a.createElement(v["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(A.text),handleChange:G})):null))),u.a.createElement("div",{className:b.a.box},u.a.createElement("div",{className:b.a.group},u.a.createElement("label",{className:b.a.label,htmlFor:"keterangan"},"Keterangan"),u.a.createElement(N,{className:b.a.area,id:"keterangan",placeholder:"Isi Keterangan",value:O,onChange:H}))))),u.a.createElement(g["a"],{justify:"end"},l?u.a.createElement("p",{style:{color:"red"}},l):null,u.a.createElement(n["a"],{type:"primary",danger:!0,className:b.a.button,disabled:r,onClick:M},"Batal"),u.a.createElement(n["a"],{type:"primary",className:b.a.button,onClick:Q,disabled:F||r},"Tambah")))},S=T,w=(t("g9YV"),t("wCAj")),C=t("F6Wq"),B=t("G/yU"),q=t("jC83"),I=function(e){var a=e.data,t=e.loading,r=e.status,l=e.error,c=Object(C["a"])(),o=Object(s["a"])(c,1),m=o[0],d=Object(q["a"])(),b=Object(s["a"])(d,3),p=(b[0],b[1],b[2]),g=function(a,t,n){p("".concat("https://api.posarmed.id","/admin/v1/sales/retur/").concat(a,"/update"),{status:t},n),e.onUpdate()},x=Object(i["useMemo"])((function(){return[Object(f["a"])({align:"center",title:"Tanggal",dataIndex:"tanggal",key:"tanggal"},m("tanggal")),Object(f["a"])({align:"center",title:"Nama Barang",dataIndex:"nama_barang",key:"nama_barang"},m("nama_barang")),Object(f["a"])({align:"center",title:"Qty",render:function(e){var a=e.qty,t=e.satuan_barang;return u.a.createElement("span",null,a," ",t)},key:"qty"},m("qty")),Object(f["a"])({align:"center",title:"Keterangan",dataIndex:"keterangan",key:"keterangan"},m("keterangan")),{align:"center",render:function(e){var a=e.id,t=e.status;return u.a.createElement("div",null,"returned_to_sales"==t?u.a.createElement(n["a"],{type:"primary",danger:!0,onClick:function(){return g(a,"returned_to_supplier",null)}},"Kembalikan ke Supplier"):null,"returned_to_supplier"==t?u.a.createElement(n["a"],{type:"primary",onClick:function(){return g(a,"exchanged",null)}},"Dikembalikan ke Gudang"):null,"exchanged"==t?u.a.createElement(n["a"],{type:"primary",onClick:function(){return g(a,"returned_to_consumer",null)}},"Kembalikan ke Pembeli"):null,"returned_to_consumer"==t?u.a.createElement("div",{style:{color:"green"}},"Barang telah dikembalikan ke pembeli"):null)}}]}),[]);return l||200!==r?u.a.createElement(B["a"],null):u.a.createElement("div",{style:{overflow:"auto"}},u.a.createElement(w["a"],{columns:x,dataSource:a.reverse(),loading:t}),";")},L=I,R=t("Pt6z"),F=function(e){Object(o["a"])(e);var a=Object(i["useState"])(!1),t=Object(s["a"])(a,2),r=t[0],d=t[1],p=Object(R["a"])(),g=Object(s["a"])(p,6),x=g[0],f=g[1],E=g[2],v=g[3],j=g[4],O=g[5];Object(i["useEffect"])((function(){var e=setTimeout((function(){j("".concat("https://api.posarmed.id","/admin/v1/sales/retur"))}),0);return function(){return clearTimeout(e)}}),[]);var y=function(){var e=Object(c["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j("".concat("https://api.posarmed.id","/admin/v1/sales/retur"));case 2:setTimeout((function(){window.location.reload()}),100);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){return d(!r)},h=function(e){var a=e.url,t=e.json,n=e.clear;O(a,t,n)};return u.a.createElement(m["a"],null,u.a.createElement("div",{className:b.a.row_box},u.a.createElement("p",{className:b.a.title},"Retur Sales"),u.a.createElement(n["a"],{className:b.a.button,type:"primary",onClick:k},"Tambah Retur")),u.a.createElement(L,{data:x,loading:E,status:f,error:v,onUpdate:function(){return y()}}),u.a.createElement(S,{visible:r,onCreate:h,onCancel:k,onLoadButton:Boolean(E),onError:Boolean(v)}))};a["default"]=F}}]);