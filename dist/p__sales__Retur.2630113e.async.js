(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"5T/U":function(a,e,t){a.exports={title:"antd-pro-pages-sales-retur-index-title",row_box:"antd-pro-pages-sales-retur-index-row_box",modal_body:"antd-pro-pages-sales-retur-index-modal_body",col:"antd-pro-pages-sales-retur-index-col",box:"antd-pro-pages-sales-retur-index-box",box3:"antd-pro-pages-sales-retur-index-box3",box6:"antd-pro-pages-sales-retur-index-box6",group:"antd-pro-pages-sales-retur-index-group",label:"antd-pro-pages-sales-retur-index-label",input:"antd-pro-pages-sales-retur-index-input",area:"antd-pro-pages-sales-retur-index-area",button:"antd-pro-pages-sales-retur-index-button",button_convert:"antd-pro-pages-sales-retur-index-button_convert"}},fELG:function(a,e,t){"use strict";t.r(e);t("+L6B");var n=t("2/Rp"),r=t("ODXe"),l=t("hGi/"),s=t("q1tI"),c=t.n(s),o=t("Hx5s"),i=t("5T/U"),u=t.n(i),m=(t("2qtc"),t("kLXV")),d=(t("14J3"),t("BMrR")),b=t("rePB"),p=t("VTBJ"),g=(t("5NDa"),t("5rEg")),E=t("6yvu"),v=t("LuAL"),x=t("R277"),j=t("ZS4f"),f=g["a"].TextArea,O={nama_sales:"",keterangan:""},N=function(a){var e=a.onCancel,t=a.onCreate,l=a.onLoadButton,o=a.onError,i=a.visible,N=Object(s["useState"])(O),y=Object(r["a"])(N,2),h=y[0],_=h.keterangan,k=h.nama_sales,C=y[1],w=Object(x["a"])(""),B=Object(r["a"])(w,3),S=B[0],q=B[1],T=B[2],I=Object(s["useState"])(!1),L=Object(r["a"])(I,2),R=L[0],F=L[1],J=Object(j["a"])(""),A=Object(r["a"])(J,3),G=A[0],K=A[1],U=A[2],V=Object(j["a"])("0"),D=Object(r["a"])(V,3),M=D[0],P=D[1],Q=D[2];Object(s["useEffect"])((function(){return F(!k||(!_||(!G||(!S||!M))))}),[G,_,k,S,M]),Object(s["useEffect"])((function(){Q()}),[G]);var X=JSON.stringify({qty:S,keterangan:_,nama_sales:k,nama_barang:G,id_satuan_barang:M}),z=function(a){var e=a.target,t=e.id,n=e.value;C((function(a){return Object(p["a"])(Object(p["a"])({},a),{},Object(b["a"])({},t,n))}))},H=function(){C(Object(p["a"])({},O)),Q(),U(),T(),e()},W=function(){t({url:"".concat("https://api.posarmed.id","/admin/v1/sales/retur"),json:X,clear:H}),Q(),U(),T(),e()};return c.a.createElement(m["a"],{title:"Input Retur Sales",visible:i,closable:!1,footer:null},c.a.createElement("div",{className:u.a.modal_body},c.a.createElement("div",{className:u.a.col},c.a.createElement("div",{className:u.a.box},c.a.createElement("div",{className:u.a.group},c.a.createElement("label",{className:u.a.label,htmlFor:"nama_sales"},"Nama Sales"),c.a.createElement(g["a"],{className:u.a.input,type:"text",id:"nama_sales",placeholder:"Isi Nama Sales",value:k,onChange:z}))),c.a.createElement("div",{className:u.a.box},c.a.createElement("div",{className:u.a.group},c.a.createElement("label",{className:u.a.label,htmlFor:"nama_barang"},"Nama Barang"),c.a.createElement(E["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/listgroup"),handleChange:K}))),c.a.createElement("div",{className:u.a.box},c.a.createElement("div",{className:u.a.group},c.a.createElement("label",{className:u.a.label,htmlFor:"qty"},"Qty"),c.a.createElement(d["a"],{justify:"space-between"},c.a.createElement("div",{className:u.a.box6},c.a.createElement(g["a"],{className:u.a.input,id:"qty",placeholder:"0",value:S,onChange:q})),G?c.a.createElement("div",{className:u.a.box3},c.a.createElement(v["a"],{address:"".concat("https://api.posarmed.id","/admin/v1/master/barang/selectgroup?nama_barang=").concat(G),handleChange:P})):null))),c.a.createElement("div",{className:u.a.box},c.a.createElement("div",{className:u.a.group},c.a.createElement("label",{className:u.a.label,htmlFor:"keterangan"},"Keterangan"),c.a.createElement(f,{className:u.a.area,id:"keterangan",placeholder:"Isi Keterangan",value:_,onChange:z}))))),c.a.createElement(d["a"],{justify:"end"},o?c.a.createElement("p",{style:{color:"red"}},o):null,c.a.createElement(n["a"],{type:"primary",danger:!0,className:u.a.button,disabled:l,onClick:H},"Batal"),c.a.createElement(n["a"],{type:"primary",className:u.a.button,onClick:W,disabled:R||l},"Tambah")))},y=N,h=(t("g9YV"),t("wCAj")),_=t("F6Wq"),k=t("G/yU"),C=function(a){var e=a.data,t=a.loading,n=a.status,l=a.error,o=Object(_["a"])(),i=Object(r["a"])(o,1),u=i[0],m=Object(s["useMemo"])((function(){return[Object(p["a"])({align:"center",title:"Tanggal",dataIndex:"tanggal",key:"tanggal"},u("tanggal")),Object(p["a"])({align:"center",title:"Nama Barang",dataIndex:"nama_barang",key:"nama_barang"},u("nama_barang")),Object(p["a"])({align:"center",title:"Qty",render:function(a){var e=a.qty,t=a.satuan_barang;return c.a.createElement("span",null,e," ",t)},key:"qty"},u("qty")),Object(p["a"])({align:"center",title:"Keterangan",dataIndex:"keterangan",key:"keterangan"},u("keterangan"))]}),[]);return l||200!==n?c.a.createElement(k["a"],null):c.a.createElement("div",{style:{overflow:"auto"}},c.a.createElement(h["a"],{columns:m,dataSource:e,loading:t}),";")},w=C,B=t("Pt6z"),S=function(a){Object(l["a"])(a);var e=Object(s["useState"])(!1),t=Object(r["a"])(e,2),i=t[0],m=t[1],d=Object(B["a"])(),b=Object(r["a"])(d,6),p=b[0],g=b[1],E=b[2],v=b[3],x=b[4],j=b[5];Object(s["useEffect"])((function(){var a=setTimeout((function(){x("".concat("https://api.posarmed.id","/admin/v1/sales/retur"))}),0);return function(){return clearTimeout(a)}}),[]);var f=function(){return m(!i)},O=function(a){var e=a.url,t=a.json,n=a.clear;j(e,t,n)};return c.a.createElement(o["a"],null,c.a.createElement("div",{className:u.a.row_box},c.a.createElement("p",{className:u.a.title},"Retur Sales"),c.a.createElement(n["a"],{className:u.a.button,type:"primary",onClick:f},"Tambah Retur")),c.a.createElement(w,{data:p,loading:E,status:g,error:v}),c.a.createElement(y,{visible:i,onCreate:O,onCancel:f,onLoadButton:Boolean(E),onError:Boolean(v)}))};e["default"]=S}}]);