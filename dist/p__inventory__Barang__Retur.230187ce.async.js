(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"99pc":function(a,e,t){"use strict";t.r(e);t("14J3");var n=t("BMrR"),r=(t("+L6B"),t("2/Rp")),l=(t("5NDa"),t("5rEg")),c=t("ODXe"),o=t("q1tI"),i=t.n(o),s=t("uW3u"),u=t.n(s),d=(t("g9YV"),t("wCAj")),m=t("VTBJ"),b=t("F6Wq"),p=t("G/yU"),g=function(a){var e=a.data,t=a.loading,n=a.status,r=a.error,l=Object(b["a"])(),s=Object(c["a"])(l,1),u=s[0],g=Object(o["useMemo"])((function(){return[{align:"center",title:"No",dataIndex:"id"},Object(m["a"])({align:"center",title:"Nama Barang",dataIndex:"nama_barang"},u("nama_barang")),Object(m["a"])({align:"center",title:"Quantity",dataIndex:"qty"},u("qty")),{align:"center",title:"Satuan Quantity",dataIndex:"satuan_barang"},Object(m["a"])({align:"center",title:"Keterangan/Alsan",dataIndex:"keterangan"},u("keterangan"))]}),[]);return r||200!==n?i.a.createElement(p["a"],null):i.a.createElement("div",{style:{overflow:"auto"}},i.a.createElement(d["a"],{columns:g,loading:t,dataSource:e}),";")},v=g,y=(t("2qtc"),t("kLXV")),x=t("rePB"),E=t("6yvu"),j=t("LuAL"),f=t("ZS4f"),N=t("R277"),O=l["a"].TextArea,h={keterangan:"",nama_sales:""},_=function(a){var e=a.visible,t=a.onCancel,s=a.onCreate,d=a.onLoadButton,b=Object(o["useState"])(h),p=Object(c["a"])(b,2),g=p[0],v=g.nama_sales,_=g.keterangan,C=p[1],k=Object(o["useState"])(!1),w=Object(c["a"])(k,2),B=w[0],S=w[1],I=Object(f["a"])(""),q=Object(c["a"])(I,3),L=q[0],R=q[1],T=q[2],F=Object(f["a"])(""),J=Object(c["a"])(F,3),A=J[0],K=J[1],D=J[2],Q=Object(N["a"])(""),V=Object(c["a"])(Q,3),W=V[0],M=V[1],P=V[2];Object(o["useEffect"])((function(){return S(!A||(!v||(!_||(!W||!L))))}),[A,_,v,W,L]),Object(o["useEffect"])((function(){T()}),[A]);var X=JSON.stringify({nama_sales:v,keterangan:_,qty:W,nama_barang:A,id_satuan_barang:L}),z=function(a){var e=a.target,t=e.id,n=e.value;C((function(a){return Object(m["a"])(Object(m["a"])({},a),{},Object(x["a"])({},t,n))}))},G=function(){C(Object(m["a"])({},h)),P(),T(),D(),t()},U=function(){s({json:X,clear:G})};return i.a.createElement(y["a"],{title:"Input Retur Barang",visible:e,closable:!1,footer:null},i.a.createElement("div",{className:u.a.modal_body},i.a.createElement("div",{className:u.a.col},i.a.createElement("div",{className:u.a.box10},i.a.createElement("div",{className:u.a.group},i.a.createElement("label",{className:u.a.label,htmlFor:"nama_sales"},"Nama Sales"),i.a.createElement(l["a"],{className:u.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:v,onChange:z}))),i.a.createElement("div",{className:u.a.box10},i.a.createElement("div",{className:u.a.group},i.a.createElement("label",{className:u.a.label,htmlFor:"id_barang"},"Nama Barang"),i.a.createElement(E["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/listgroup"),handleChange:K}))),i.a.createElement("div",{className:u.a.box10},i.a.createElement("div",{className:u.a.group},i.a.createElement("label",{className:u.a.label,htmlFor:"qty"},"Qty"),i.a.createElement(n["a"],{justify:"space-between"},i.a.createElement("div",{className:u.a.box6},i.a.createElement(l["a"],{className:u.a.input,id:"qty",placeholder:"0",value:W,onChange:M})),A?i.a.createElement("div",{className:u.a.box3},i.a.createElement(j["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(A),handleChange:R})):null))),i.a.createElement("div",{className:u.a.box10},i.a.createElement("div",{className:u.a.group},i.a.createElement("label",{className:u.a.label,htmlFor:"keterangan"},"Keterangan"),i.a.createElement(O,{className:u.a.area,id:"keterangan",placeholder:"Isi Keterangan",onChange:z,value:_}))))),i.a.createElement(n["a"],{justify:"end"},i.a.createElement(r["a"],{type:"primary",danger:!0,className:u.a.button,disabled:d,onClick:G},"Batal"),i.a.createElement(r["a"],{type:"primary",className:u.a.button,onClick:U,disabled:B||d},"Tambah")))},C=_,k=t("Pt6z"),w=function(){var a=Object(o["useState"])(""),e=Object(c["a"])(a,2),t=e[0],s=e[1],d=Object(o["useState"])(!1),m=Object(c["a"])(d,2),b=m[0],p=m[1],g=Object(k["a"])(),y=Object(c["a"])(g,6),x=y[0],E=y[1],j=y[2],f=y[3],N=y[4],O=y[5];Object(o["useEffect"])((function(){var a=setTimeout((function(){N("".concat("https://api.posarmed.id","/admin/v1/inventory/retur"))}),0);return function(){return clearTimeout(a)}}),[]);var h=Object(o["useCallback"])((function(){N("".concat("https://api.posarmed.id","/admin/v1/inventory/retur?filter=").concat(t)),s("")}),[N,t]),_=function(a){s(a.target.value)},w=function(){return p(!b)},B=function(a){"enter"===a.key.toLowerCase()&&h()},S=function(a){var e=a.json,t=a.clear;return O("".concat("https://api.posarmed.id","/admin/v1/inventory/retur"),e,t)};return i.a.createElement("div",null,i.a.createElement("p",{className:u.a.title},"Inventory - Retur"),i.a.createElement("div",{className:u.a.row_box},i.a.createElement(l["a"],{className:u.a.input_search,id:"name",type:"text",placeholder:"Search Barang",onChange:_,value:t,onKeyDown:B}),i.a.createElement(r["a"],{className:u.a.button_search,type:"primary",onClick:h},"Cari")),i.a.createElement(n["a"],{justify:"space-between"},i.a.createElement("p",{className:u.a.title},"Retur Barang"),i.a.createElement("p",{className:u.a.title_add,onClick:w}," ","+ Tambah")),i.a.createElement(v,{data:x,loading:Boolean(j),status:Number(E),error:f}),b?i.a.createElement(C,{visible:b,onCancel:w,onCreate:S,onLoadButton:Boolean(j)}):null)};e["default"]=w},uW3u:function(a,e,t){a.exports={title:"antd-pro-pages-inventory-barang-retur-index-title",title_add:"antd-pro-pages-inventory-barang-retur-index-title_add",row_box:"antd-pro-pages-inventory-barang-retur-index-row_box",modal_body:"antd-pro-pages-inventory-barang-retur-index-modal_body",col:"antd-pro-pages-inventory-barang-retur-index-col",box3:"antd-pro-pages-inventory-barang-retur-index-box3",box5:"antd-pro-pages-inventory-barang-retur-index-box5",box6:"antd-pro-pages-inventory-barang-retur-index-box6",box10:"antd-pro-pages-inventory-barang-retur-index-box10",group:"antd-pro-pages-inventory-barang-retur-index-group",label:"antd-pro-pages-inventory-barang-retur-index-label",input:"antd-pro-pages-inventory-barang-retur-index-input",input_search:"antd-pro-pages-inventory-barang-retur-index-input_search",button:"antd-pro-pages-inventory-barang-retur-index-button",button_search:"antd-pro-pages-inventory-barang-retur-index-button_search",area:"antd-pro-pages-inventory-barang-retur-index-area",p:"antd-pro-pages-inventory-barang-retur-index-p"}}}]);